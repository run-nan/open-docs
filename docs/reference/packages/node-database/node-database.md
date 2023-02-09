# @ones-op/node-database

We provide a set of interfaces related to the plugin database, allowing plugin developers to access and operate the plugin database.

## Requirements

| **ONES** |
| -------- |
| v3.6.0+  |

## API

### importSQL

Initialize the database

#### Params

| Param       | Description   | Type   | Required | Default |
| :---------- | :------------ | :----- | :------- | :------ |
| sqlFileName | sql file path | string | Y        | -       |

#### Error

| errcode                     | reason                                                                                                                             | level | statusCode |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------- |
| DB.SqlFileNameFormatInvalid | SQL filename format invaild.                                                                                                       | error | 400        |
| DB.SqlFileFetchingFailed    | SQL file fetching failed.                                                                                                          | error | 400        |
| DB.CannotFindTable          | Cannot find table content in SQL file.                                                                                             | error | 400        |
| DB.ImportSqlErr             | An unknown error occurred while executing the import method, and the hardware error scenario gave the cause of the hardware error. | error | 500        |

#### Example

```javascript
import { importSQL, DBError } from '@ones-op/node-database'

export async function testImportSQL() {
  try {
    await importSQL('plugin.sql')
  } catch (error) {
    if (error instanceof DBError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### select

Receives the sql statement related to the query and returns the query result, which will be throw error if the sql execution fails.

#### Params

| Param | Description                        | Type   | Required | Default |
| :---- | :--------------------------------- | :----- | :------- | :------ |
| sql   | sql statement related to the query | string | Y        | -       |

#### Returns

| Param  | Description      | Type                  |
| :----- | :--------------- | :-------------------- |
| result | sql query result | Record<string, any>[] |

#### Error

| errcode          | reason                                                                                                                              | level | statusCode |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------- |
| DB.QuerySqlErr   | An unknown error occurred while executing the select method, and the specific error scenario gives the specific cause of the error. | error | 500        |
| DB.SqlSyntaxErr  | The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason.            | error | 400        |
| InvalidParameter | Invalid parameter.                                                                                                                  | error | 400        |

#### Example

```javascript
import { select, DBError } from '@ones-op/node-database'

export async function select_database() {
  try {
    const result = await select('select * from email_id_map limit 10;')
  } catch (error) {
    if (error instanceof DBError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### exec

Execute the relevant sql statement and no result is returned. If sql execution fails, it will throw error.

#### Params

| Param   | Description                                                                    | Type   | Required | Default |
| :------ | :----------------------------------------------------------------------------- | :----- | :------- | :------ |
| operate | operation type，'insert' 、'update' 、 'delete' 、'create' 、'alter' 、 'drop' | string | Y        | -       |
| sql     | sql statement                                                                  | string | Y        | -       |

#### Error

| errcode          | reason                                                                                                                            | level | statusCode |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------- |
| DB.ExecSqlErr    | An unknown error occurred while executing the exec method, and the specific error scenario gives the specific cause of the error. | error | 500        |
| DB.SqlSyntaxErr  | The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason.          | error | 400        |
| InvalidParameter | Invalid parameter.                                                                                                                | error | 400        |

#### Example

```javascript
import { exec, DBError } from '@ones-op/node-database'

export async function exec_database() {
  try {
    const result = await exec(
      'insert',
      `INSERT INTO email_id_map VALUES ("plugin@ones.com", "001");`
    )
  } catch (error) {
    if (error instanceof DBError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### count

Count related sql interface. If the sql execution is a failure, it will throw error.

#### Params

| Param | Description   | Type   | Required | Default |
| :---- | :------------ | :----- | :------- | :------ |
| sql   | sql statement | string | Y        | -       |

#### Returns

| Param  | Description         | Type   |
| :----- | :------------------ | :----- |
| result | statistical results | number |

#### Error

| errcode          | reason                                                                                                                             | level | statusCode |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------- |
| DB.QuerySqlErr   | An unknown error occurred while executing the count method, and the specific error scenario gives the specific cause of the error. | error | 500        |
| DB.SqlSyntaxErr  | The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason.           | error | 400        |
| InvalidParameter | Invalid parameter.                                                                                                                 | error | 400        |

#### Example

```javascript
import { count, DBError } from '@ones-op/node-database'

export async function count_database() {
  try {
    const result = await count('select count(*) from email_id_map;')
  } catch (error) {
    if (error instanceof DBError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

## Type

### DBError

| Param      | Description      | Type     |
| :--------- | :--------------- | :------- |
| level      | error level      | `string` |
| reason     | error reason     | `string` |
| statusCode | http status code | `string` |
| errcode    | error code       | `string` |
