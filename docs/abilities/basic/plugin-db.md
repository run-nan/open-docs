# Plugin database

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

Sometimes plugin want to persist their own data. The plugin database ability allows each plugin to have its own independent database and provides methods to access and manipulate it. This ability is compatible with mysql version 5.7.x SQL syntax.

## Usage

### SDK documentation:[@ones-op/node-database](https://our.ones.pro/wiki/#/team/RDjYMhKq/page/HsGK3Tzn)

### Use plugin database ability:

#### Step 1: Installing dependencies

Run the following instructions under the plugin project root directory to install dependencies. (note that this ability is used by backend by default, and the usage directory is under `backend`)

```shell
cd backend
npm i @ones-op/node-database
```

#### Step 2: Write SQL files

To create a plugin database, you need to write the table creation statements of all tables in the database in advance in the SQL file and put them in the `workspace` directory.

> Note: table names in the statement need to be enclosed with {{}}

**Sample SQL file:** `/workspace/plugin.sql`

```sql
CREATE TABLE IF NOT EXISTS `{{email_id_map}}`  (
    `email` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'email',
    `id_number` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT 'Work number',
  PRIMARY KEY (`email`)
) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
```

#### Step 3: Database initialization

Call the `importSQL` method to create a database table. It is recommended to initialize the table in the plugin's `Install` method.

Example:

```typescript
import { importSQL } from '@ones-op/node-database'

// Lifecycle hook installation plugin
export async function Install() {
  // Initialize the database
  return importSQL('plugin.sql')
}
```

#### Step 4: Database operation

- select: Database query

  The query data uses the `select` method, which receives the SQL statement and returns the result of the query. If SQL fails in execution, it will `throw error`.

  Example：

  ```typescript
  import { select } from '@ones-op/node-database'
  try {
    const result = await select('select * from email_id_map limit 10;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

- exec: Execute sql statement

  The exec method is used to execute the sql statement, which receives the SQL statement and the action type, and does not return a result. If SQL fails in execution, it will `throw error`.

  Currently, the supported execution operations are：`insert`, `update`, `delete`, `create`, `alter`, `drop`

  Example：

  ```typescript
  import { exec } from '@ones-op/node-database'
  try {
    const result = await exec(
      'insert',
      `INSERT INTO email_id_map VALUES ("plugin@ones.cn", "001");`
    )
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

- count: Database count

  Statistics use the `count` method, which receives the SQL statement and returns the statistical results. If SQL fails in execution, it will `throw error`.

  Only SQL statements that use the `count` method to count the number of individual columns are supported.

  Example：

  ```typescript
  import { count } from '@ones-op/node-database'
  try {
    const c = await count('select count(*) from email_id_map;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
  ```

### Local development and configuration

When developing locally, in order to facilitate development and debugging, it is also supported to allow the plugin database operations to act locally. Local debugging does not affect the use of the ability, does not need to modify the code, only needs to modify the configuration of the local database.Modify the configuration in `config/local.yaml`, and then re-execute the `npx op invoke run` command to restart the plugin

Example：

```yaml
  mysql_in_local: true # 'True' to use your local database, 'false' to use the ONES system built-in database
  mysql_user_name: 'root'
  mysql_user_password: 'root123'
  mysql_database_name: 'test'
  mysql_host: '127.0.0.1'
  mysql_port: '3306'
```
