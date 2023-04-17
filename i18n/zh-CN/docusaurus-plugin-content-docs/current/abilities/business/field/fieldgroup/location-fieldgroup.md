# 场景：位置信息属性组

## 场景描述

希望在工作项属性中可以设置位置信息，包括国家、省份和城市，这些属性相互之间符合真实约束。例如选择了国家之后，省份的可选项会被限制在国家所选值的范围内。并且如果先选择区域较小的属性能够自动填充对应的上级位置信息。最后提交信息时校验位置信息的合法性。

## 解决方案

### 实现思路

通过向工作项中添加三个单选类型的脚本属性来表达位置信息，将他们关联起来形成一个属性组并添加到工作项实体中。使用插件承载脚本属性组中的联动功能实现相对应的约束。

其中层级关系的约束可以在获取选项值时进行判断；自动填充上级位置信息可以使用属性值自动填充的功能实现；合法性校验可以使用属性值校验的功能进行实现。

## 插件开发

### 第一步：添加属性组

在插件的`workspace/plugin.sql`中初始化数据库

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

在插件的`Install`生命周期方法中，添加脚本属性，创建属性组并添加到工作项中。将获取到的脚本属性`fieldUUID`持久化到数据库中以待后续使用。

```typescript
import { Logger } from '@ones-op/node-logger'
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { exec, importSQL, select } from '@ones-op/node-database'
import { Field, PoolEnum } from '@ones-op/node-ability'
export async function Install() {
  await importSQL('plugin.sql')
  //添加单选类型的脚本属性至工作项
  const issueScriptField = ['Country', 'Province', 'City']
  const fieldUUIDs: any[] = []
  for (const fieldName of issueScriptField) {
    const FieldsAddProjectRes = await Field.FieldsAdd({
      Name: fieldName,
      Type: 1001, //表示添加单选类型脚本属性
    })
    if (FieldsAddProjectRes.Error) {
      //如果添加失败，抛出异常
      throw new Error('Failed to create property')
    }
    //添加成功返回属性的UUID
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
  //创建属性组
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
  //插入示例数据
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

### 第二步：编写脚本属性数据源函数

- **添加配置**

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /scriptFieldSearch
    function: GetOptions
```

- **编写处理函数**

根据当前编辑的属性返回响应的可选值，如果已经具有上层位置信息，那么只返回合法的选项值。

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
  const options: OptionType[] = [] //返回的选项数据
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

### 第三步：添加属性值自动填充功能

- **添加配置**

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /groupFieldOnChange
    function: GroupFieldOnChange
```

- **编写处理函数**

当编辑的属性缺乏上级信息时，从数据库中获取对应的信息并回填到界面上

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

### 第四步：添加属性值校验功能

- **添加配置**

```yaml title="config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /groupFieldValidate
    function: GroupFieldValidate
```

- **编写处理函数**

  根据插件数据库中的数据校验所有位置信息的上下级关系是否合法。

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

function buildValidateFailResponse(code: number, reason: string, type: string): PluginResponse {
  return {
    statusCode: 200,
    body: {
      code: code,
      reason: reason,
      module: 'Plugin.FieldGroup',
      type: type,
    },
  }
}
```
