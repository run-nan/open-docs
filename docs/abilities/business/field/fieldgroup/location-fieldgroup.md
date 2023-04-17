# Scene: Location FieldGroup

## Scene Description

It is hoped that location information, including country, province, and city, can be set in the issue fields, and these field meet the real constraints with each other. For example, after a country is selected, the options for provinces will be limited to the range of values selected by the country. And if the field with a smaller area is selected first, the corresponding upper-level location information can be automatically filled. Verify the validity of the location information when submitting the information at the end.

## Solution

### Implementation idea

The location information is expressed by adding three single-selection script-field to the issue, and they are associated to form an FieldGroup and added to the issue entity. Use the linkage function in the plugin to host the fieldgroup to realize the corresponding constraints.

Among them, the constraints of the hierarchical relationship can be judged when obtaining the option value; the automatic filling of the upper-level location information can be realized by using the function of automatic filling of field values; the legality verification can be realized by using the function of field value verification.

## Plugin development

### Step 1: Add FieldGroup

Initialize the database in the `workspace/plugin.sql` file of the plugin.

```sql title="workspace/plugin.sql"
CREATE TABLE IF NOT EXISTS `{{script_field}}`(
    `id` INT(11) AUTO_INCREMENT,
    `fieldUUID` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'uuid',
    `name` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'name',
    PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `{{location}}`(
    `id` INT(11) AUTO_INCREMENT,
    `Country` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'Country',
    `Province` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'Province',
    `City` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'City',
    PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

```

In the plugin's `Install` lifecycle method, add the script-field, create the FieldGroup and add it to the issue. Persist the acquired script-field `fieldUUID` into the database for subsequent use.

```typescript
import { Logger } from '@ones-op/node-logger'
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { exec, importSQL, select } from '@ones-op/node-database'
import { Field, PoolEnum } from '@ones-op/node-ability'
export async function Install() {
  await importSQL('plugin.sql')
  //Add a script-field of type single-selection to issue
  const issueScriptField = ['Country', 'Province', 'City']
  const fieldUUIDs: any[] = []
  for (const fieldName of issueScriptField) {
    const FieldsAddProjectRes = await Field.FieldsAdd({
      Name: fieldName,
      Type: 1001,
    })
    if (FieldsAddProjectRes.Error) {
      throw new Error('Failed to create field')
    }
    const { UUID: fieldUUID } = FieldsAddProjectRes
    fieldUUIDs.push(fieldUUID)
    Logger.info('fieldUUID:', fieldUUID)

    try {
      const sql =
        'INSERT into script_field(fieldUUID, name) values("' +
        fieldUUID +
        '", "' +
        fieldName +
        '");'
      await exec('insert', sql)
    } catch (error) {
      Logger.error('error: ', error)
    }
  }
  //create FieldGroup
  const relateionsTask: any[] = []
  fieldUUIDs.forEach((fieldUUID, index) => {
    const relation = {
      FieldUUID: fieldUUID,
      FieldParentUUID: '',
      Position: index,
    }
    relateionsTask.push(relation)
  })
  const AddGroupFieldRes = await Field.AddGroupField({
    ObjectType: PoolEnum.Task,
    Name: 'Location',
    Relations: relateionsTask,
  })
  Logger.info('success to create fieldGroup' + JSON.stringify(AddGroupFieldRes, undefined, 2))
  //insert sample data
  try {
    const sql =
      "INSERT into location(Country, Province, City) values ('America', 'Washington', 'Seattle'), ('America', 'Washington', 'Olympia'), ('America', 'Hawaii', 'Hilo'), ('America', 'Hawaii', 'Kahului'), ('China', 'Guangdong', 'Dongguan'), ('China', 'Guangdong', 'Shenzhen'), ('China', 'SiChuan', 'Chengdu'), ('China', 'SiChuan', 'Leshan'), ('Japan', 'Tokyo', 'Hokkaido');"
    await exec('insert', sql)
  } catch (error) {
    Logger.error('error: ' + error)
  }
  return
}
```

### Step 2: Write data source functions

- Add configuration

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /scriptFieldSearch
    function: GetOptions
```

- **Write handler function**

Returns the optional value of the response according to the currently edited field, and only returns a legal option value if the upper-level location information already exists.

```typescript
interface OptionType {
  uuid: string
  value: string
}
const Countries: string[] = ['America', 'China', 'Japan']
const Provinces: string[] = ['Washington', 'Hawaii', 'Guangdong', 'SiChuan', 'Tokyo']
const Cities: string[] = [
  'Seattle',
  'Olympia',
  'Hilo',
  'Kahului',
  'Dongguan',
  'Shenzhen',
  'Chengdu',
  'Leshan',
  'Hokkaido',
]
const data = {
  America: { Washington: { Seattle: {}, Olympia: {} }, Hawaii: { Hilo: {}, Kahului: {} } },
  China: { Guangdong: { Dongguan: {}, Shenzhen: {} }, SiChuan: { Chengdu: {}, Leshan: {} } },
  Japan: { Tokyo: { Hokkaido: {} } },
}
export async function GetOptions(request: PluginRequest): Promise<PluginResponse> {
  const body = request?.body as any

  let location: any = { Country: null, Province: null, City: null }
  const options: OptionType[] = [] //Returned option data
  let field = await getFieldMap()
  if (body.relations == null) {
    location[field.get(body.field_uuid)] = body.uuids[0]
  } else {
    body.relations.forEach((relation, index) => {
      location[field.get(relation.field_uuid)] = relation.field_value
    })
  }
  switch (field.get(body.field_uuid)) {
    case 'Country':
      for (let i in Countries) {
        options.push({
          uuid: Countries[i],
          value: Countries[i],
        })
      }
      break
    case 'Province':
      if (location.Country != null) {
        for (let key in data[location.Country]) {
          options.push({
            uuid: key,
            value: key,
          })
        }
      } else {
        for (let i in Provinces) {
          options.push({
            uuid: Provinces[i],
            value: Provinces[i],
          })
        }
      }
      break
    case 'City':
      if (location.Province != null) {
        for (let key in data[location.Country][location.Province]) {
          options.push({
            uuid: key,
            value: key,
          })
        }
      } else {
        for (let i in Cities) {
          options.push({
            uuid: Cities[i],
            value: Cities[i],
          })
        }
      }
      break
  }

  return {
    statusCode: 200,
    body: {
      code: 200,
      body: {
        options: options,
      },
    },
  }
}
async function getFieldMap(): Promise<any> {
  let field = new Map()
  try {
    const sql = 'select * from script_field;'
    const result = await select(sql)
    result.forEach((f) => {
      field.set(f.fieldUUID, f.name)
      field.set(f.name, f.fieldUUID)
    })
  } catch (error) {
    Logger.error('error: ' + error)
  }
  return field
}
```

### Step 3: Add field value autofill function

- **Add configuration**

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /groupFieldOnChange
    function: GroupFieldOnChange
```

- **Write handler function**

When the edited field lacks superior information, obtain the corresponding information from the database and backfill it on the interface

```typescript
interface FieldValueType {
  field_uuid: string
  option_uuids: string[]
}
export async function GroupFieldOnChange(request: PluginRequest): Promise<PluginResponse> {
  const body = request?.body as any
  const location: any = { Country: null, Province: null, City: null }
  const result: FieldValueType[] = []
  const field = await getFieldMap()
  body.field_values.forEach((field_value) => {
    location[field.get(field_value.field_uuid)] = field_value.option_uuids
      ? field_value.option_uuids[0]
      : null
  })
  let record: any
  let cityRecord: any

  switch (field.get(body.change_field_uuid)) {
    case 'Country':
      body.field_values.forEach((field_value) => {
        let uuids: string[] = []
        if (field_value.field_uuid == body.change_field_uuid) {
          uuids = field_value.option_uuids
        }
        result.push({
          field_uuid: field_value.field_uuid,
          option_uuids: uuids,
        })
      })
      break
    case 'Province':
      if (location.Province) {
        try {
          const sql = "select * from location where Province='" + location.Province + "';"
          record = await select(sql)
        } catch (error) {
          Logger.error('error ' + error)
        }
        result.push({
          field_uuid: field.get('Country'),
          option_uuids: [record[0]['Country']],
        })
        result.push({
          field_uuid: field.get('Province'),
          option_uuids: [record[0]['Province']],
        })
        result.push({
          field_uuid: field.get('City'),
          option_uuids: [],
        })
      } else {
        body.field_values.forEach((field_value) => {
          result.push({
            field_uuid: field_value.field_uuid,
            option_uuids:
              field.get('Country') === field_value.field_uuid ? field_value.option_uuids : [],
          })
        })
      }
      break
    case 'City':
      if (location.City) {
        try {
          const sql = `select * from location where City='${location.City}';`
          cityRecord = await select(sql)
        } catch (error) {
          Logger.error('error ' + error)
        }
        result.push({
          field_uuid: field.get('Country'),
          option_uuids: [cityRecord[0]['Country']],
        })
        result.push({
          field_uuid: field.get('Province'),
          option_uuids: [cityRecord[0]['Province']],
        })
        result.push({
          field_uuid: field.get('City'),
          option_uuids: [cityRecord[0]['City']],
        })
      } else {
        body.field_values.forEach((field_value) => {
          result.push(field_value)
        })
      }
      break
  }
  return {
    statusCode: 200,
    body: {
      code: 200,
      body: {
        field_values: result,
      },
    },
  }
}
```

### Step 4: Add field value verification function

- **Add configuration**

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /groupFieldValidate
    function: GroupFieldValidate
```

- **Write handler function**

Verify whether the superior-subordinate relationship of all location information is legal according to the data in the plugin database.

```typescript
interface UpdateType {
  field_uuid: string //属性的`UUID`
  option_uuid: string //属性值的`UUID`
  option_value: string //属性值
}
export async function GroupFieldValidate(request: PluginRequest): Promise<PluginResponse> {
  const body = request?.body as any
  Logger.info(body)
  const options: UpdateType[] = []
  const field = await getFieldMap()
  const location: any = { Country: null, Province: null, City: null }
  body.field_groups[0].field_values.forEach((field_value) => {
    if (field_value.option_uuids == null) {
      return buildValidateFailResponse(630, 'Location information is incomplete', 'error')
    }
    options.push({
      field_uuid: field_value.field_uuid,
      option_uuid: field_value.option_uuids[0],
      option_value: field_value.option_uuids[0],
    })
    location[field.get(field_value.field_uuid)] = field_value.option_uuids[0]
  })
  const subSqls: string[] = []
  location.City && subSqls.push(`City='${location.City}'`)
  location.Province && subSqls.push(`Province='${location.Province}'`)
  location.Country && subSqls.push(`Country='${location.Country}'`)
  const finalResult = {
    statusCode: 200,
    body: {
      code: 200,
      body: {
        options,
      },
    },
  }
  if (subSqls.length === 0) {
    return finalResult
  }
  try {
    const sql = `select * from location where ${subSqls.join(' and ')};`
    const record: any[] = await select(sql)
    if (record.length === 0) {
      return buildValidateFailResponse(630, 'Location information error', 'error')
    }
  } catch (error) {
    Logger.error('error' + error)
  }
  return finalResult
}
```
