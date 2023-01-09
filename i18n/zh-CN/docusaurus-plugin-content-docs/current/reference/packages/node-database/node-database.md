# @ones-op/node-database

我们提供了一套插件数据库的相关接口，允许插件开发者访问和操作插件数据库。

## 要求

| **ONES** |
| -------- |
| v3.6.0+  |

## API

### importSQL

初始化数据库

#### Params

| 参数        | 说明         | 类型   | 必填 | 默认值 |
| :---------- | :----------- | :----- | :--- | :----- |
| sqlFileName | sql 文件路径 | string | 是   | -      |

#### Error

| errcode                     | reason                                                           | level | statusCode |
| --------------------------- | ---------------------------------------------------------------- | ----- | ---------- |
| DB.SqlFileNameFormatInvalid | SQL filename format invaild.（sql 文件名格式不对）               | error | 400        |
| DB.SqlFileFetchingFailed    | SQL file fetching failed. （无法找到 sql 文件）                  | error | 400        |
| DB.CannotFindTable          | Cannot find table content in SQL file.（文件内没有表内容）       | error | 400        |
| DB.ImportSqlErr             | 执行 import 方法时发生了未知错误，具体错误场景给出具体错误原因。 | error | 500        |

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

接收查询相关 sql 语句，并返回查询结果，如果 sql 执行失败会 throw error。

#### Params

| 参数 | 说明                 | 类型   | 必填 | 默认值 |
| :--- | :------------------- | :----- | :--- | :----- |
| sql  | select 相关 sql 语句 | string | 是   | -      |

#### Returns

| 参数   | 说明         | 类型                 |
| :----- | :----------- | :------------------- |
| result | sql 查询结果 | Record<string,any>[] |

#### Error

| errcode         | reason                                                           | level | statusCode |
| --------------- | ---------------------------------------------------------------- | ----- | ---------- |
| DB.QuerySqlErr  | 执行 select 方法时发生了未知错误，具体错误场景给出具体错误原因。 | error | 500        |
| DB.SqlSyntaxErr | sql 不符合语法规范，具体错误场景给出具体错误原因。               | error | 400        |

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

执行相关 sql 语句，不会返回结果。如果 sql 执行是失败会 throw error。

#### Params

| 参数    | 说明                                                                     | 类型   | 必填 | 默认值 |
| :------ | :----------------------------------------------------------------------- | :----- | :--- | :----- |
| operate | 操作类型，'insert' 、'update' 、 'delete' 、'create' 、'alter' 、 'drop' | string | 是   | -      |
| sql     | sql 语句                                                                 | string | 是   | -      |

#### Error

| errcode         | reason                                                         | level | statusCode |
| --------------- | -------------------------------------------------------------- | ----- | ---------- |
| DB.ExecSqlErr   | 执行 exec 方法时发生了未知错误，具体错误场景给出具体错误原因。 | error | 500        |
| DB.SqlSyntaxErr | sql 不符合语法规范，具体错误场景给出具体错误原因。             | error | 400        |

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

计数 sql 接口。如果 sql 执行是失败会 throw error。

#### Params

| 参数 | 说明     | 类型   | 必填 | 默认值 |
| :--- | :------- | :----- | :--- | :----- |
| sql  | sql 语句 | string | 是   | -      |

#### Returns

| 参数   | 说明     | 类型   |
| :----- | :------- | :----- |
| result | 统计结果 | number |

#### Error

| errcode         | reason                                                          | level | statusCode |
| --------------- | --------------------------------------------------------------- | ----- | ---------- |
| DB.QuerySqlErr  | 执行 count 方法时发生了未知错误，具体错误场景给出具体错误原因。 | error | 500        |
| DB.SqlSyntaxErr | sql 不符合语法规范，具体错误场景给出具体错误原因。              | error | 400        |

#### Example

```javascript
import { count,DBError } from '@ones-op/node-database'

export async function count_database() {
  try {
    const result = await count('select count(*) from email_id_map;')
  } catch (error) {
    if (error insteadof DBError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

## Type

### DBError

| 参数       | 说明               | 类型     |
| :--------- | :----------------- | :------- |
| level      | 错误等级           | `string` |
| reason     | 错误原因           | `string` |
| statusCode | 对应的 http 状态码 | `string` |
| errcode    | 错误码             | `string` |
