# @ones-op/node-database（plugin-database）

We provide a set of interfaces related to the plugin database, allowing plugin developers to access and operate the plugin database.

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## API

### importSQL

Initialize the database

#### Params

| parameters  | explain       |  type  | required | default value |
| :---------: | :------------ | :----: | :------: | :-----------: |
| sqlFileName | sql file path | string |    Y     |               |

#### Returns

| parameters | explain | type |
| :--------: | :------ | :--: |
|    none    | -       |  -   |

#### Example

```javascript
import { importSQL } from '@ones-op/node-database'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

### select

Receives the sql statement related to the query and returns the query result, which will be throw error if the sql execution fails.

#### Params

| parameters | explain                            |  type  | required | default value |
| :--------: | :--------------------------------- | :----: | :------: | :-----------: |
|    sql     | sql statement related to the query | string |    Y     |               |

#### Returns

| parameters | explain          |         type         |
| :--------: | :--------------- | :------------------: |
|   result   | sql query result | Record<string,any>[] |

#### Example

```javascript
import { select } from '@ones-op/node-database'

export async function select_database() {
  try {
    const result = await select('select * from email_id_map limit 10;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
}
```

### exec

Execute the relevant sql statement and no result is returned. If sql execution fails, it will throw error.

#### Params

| parameters | explain                                                                        |  type  | required | default value |
| :--------: | :----------------------------------------------------------------------------- | :----: | :------: | :-----------: |
|  operate   | operation type，'insert' 、'update' 、 'delete' 、'create' 、'alter' 、 'drop' | string |    Y     |               |
|    sql     | sql statement                                                                  | string |    Y     |               |

#### Returns

| parameters | explain | type |
| :--------: | :------ | :--: |
|    none    | -       |  -   |

#### Example

```javascript
import { exec } from '@ones-op/node-database'

export async function exec_database() {
  try {
    const result = await exec(
      'insert',
      `INSERT INTO email_id_map VALUES ("plugin@ones.cn", "001");`
    )
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
}
```

### count

Count related sql interface.If the sql execution is a failure, it will throw error.

#### Params

| parameters | explain       |  type  | required | default value |
| :--------: | :------------ | :----: | :------: | :-----------: |
|    sql     | sql statement | string |    Y     |               |

#### Returns

| parameters | explain             |  type  |
| :--------: | :------------------ | :----: |
|   result   | statistical results | number |

#### Example

```javascript
import { count } from '@ones-op/node-database'

export async function count_database() {
  try {
    const c = await count('select count(*) from email_id_map;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
}
```
