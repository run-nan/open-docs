# 插件数据库

## 要求

| **ONES** |
| -------- |
| 3.6+     |

## 概述

有时候插件希望可以持久化自己的数据。插件数据库能力可以让每个插件拥有自己独立的数据库，并提供访问和操作它的方法。该能力兼容 mysql 5.7.x 版本 SQL 语法

## 能力使用

### SDK 文档：[@ones-op/node-database](https://our.ones.pro/wiki/#/team/RDjYMhKq/page/HsGK3Tzn)

### 插件数据库能力使用：

#### 第一步：安装依赖

在插件根目录下运行以下指令安装依赖。（注意，默认该能力是后端使用，并且使用目录在 `backend` 下）

```shell
cd backend
npm i @ones-op/node-database
```

#### 第二步：编写数据库 SQL 文件

创建插件数据库，需要先将数据库中所有表的表创建语句预先书写在 SQL 文件中并放到 `workspace` 目录下。

> 注：语句中表名称需要使用 {{}} 括起来

**示例 SQL 文件：** 文件路径 `{{插件目录}}/workspace/plugin.sql`

```sql
CREATE TABLE IF NOT EXISTS `{{email_id_map}}`  (
    `email` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT '邮箱',
    `id_number` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '工号',
  PRIMARY KEY (`email`)
) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

```

#### 第三步：数据库初始化

调用`importSQL` 函数创建数据库表，推荐在插件的 `Install` 函数中进行表的初始化。

示例用法：

```typescript
import { importSQL } from '@ones-op/node-database'

// 生命周期钩子 安装插件
export async function Install() {
  // 初始化数据库
  return importSQL('plugin.sql')
}
```

#### 第四步：数据库操作

- select 数据库查询

  查询数据使用 select 方法，方法接收 SQL 语句，并返回查询的结果。 如果 SQL 执行时失败会 throw error。

  示例用法：

  ```typescript
  import { select } from '@ones-op/node-database'
  try {
    const result = await select('select * from email_id_map limit 10;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

- exec 执行 SQL 语句

  执行 SQL 语句使用 exec 方法，方法接收 SQL 语句和操作类型，不会返回结果。 如果 SQL 执行时失败会 throw error。

  目前支持的执行操作有：insert, update, delete, create, alter, drop

  示例用法：

  ```typescript
  import { exec } from '@ones-op/node-database'
  try {
    await exec('insert', `INSERT INTO email_id_map VALUES ("plugin@ones.cn", "001");`)
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

- count 数据库计数

  统计数量使用 count 方法，方法接收 SQL 语句，并返回统计的结果。 如果 SQL 执行时失败会 throw error。

  仅支持使用 count 函数统计单列数量的 SQL 语句。

  示例用法：

  ```typescript
  import { count } from '@ones-op/node-database'
  try {
    const c = await count('select count(*) from email_id_map;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

### 本地开发及配置

在本地开发时，为了方便开发和调试，也支持让插件数据库操作作用在本地。本地调试不影响能力的使用的方法，不需要修改代码，只要修改本地数据库相关配置。
修改`config/local.yaml`中的配置，再重新执行`npx op invoke run`命令重启插件

示例配置：

```yaml
  mysql_in_local: true # true 为使用您的本地数据库， false 为使用 ONES 系统内置数据库
  mysql_user_name: 'root'
  mysql_user_password: 'root123'
  mysql_database_name: 'test'
  mysql_host: '127.0.0.1'
  mysql_port: '3306'
```
