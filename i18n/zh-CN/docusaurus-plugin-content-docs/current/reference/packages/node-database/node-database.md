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

#### Example

```javascript
import { importSQL } from '@ones-op/node-database'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
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

---

### exec

执行相关 sql 语句，不会返回结果。如果 sql 执行是失败会 throw error。

#### Params

| 参数    | 说明                                                                     | 类型   | 必填 | 默认值 |
| :------ | :----------------------------------------------------------------------- | :----- | :--- | :----- |
| operate | 操作类型，'insert' 、'update' 、 'delete' 、'create' 、'alter' 、 'drop' | string | 是   | -      |
| sql     | sql 语句                                                                 | string | 是   | -      |

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
