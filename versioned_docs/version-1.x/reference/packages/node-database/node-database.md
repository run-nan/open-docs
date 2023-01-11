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

#### Example

```javascript
import { importSQL } from '@ones-op/node-database'
import { Logger } from '@ones-op/node-logger'

export async function testImportSQL() {
  try {
    await importSQL('plugin.sql')
  } catch (error) {
    Logger.error('ERROR: ', error)
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

#### Example

```javascript
import { select } from '@ones-op/node-database'
import { Logger } from '@ones-op/node-logger'

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

Execute the relevant sql statement and no result is returned. If sql execution fails, it will throw error.

#### Params

| Param   | Description                                                                    | Type   | Required | Default |
| :------ | :----------------------------------------------------------------------------- | :----- | :------- | :------ |
| operate | operation type，'insert' 、'update' 、 'delete' 、'create' 、'alter' 、 'drop' | string | Y        | -       |
| sql     | sql statement                                                                  | string | Y        | -       |

#### Example

```javascript
import { exec } from '@ones-op/node-database'
import { Logger } from '@ones-op/node-logger'

export async function exec_database() {
  try {
    const result = await exec(
      'insert',
      `INSERT INTO email_id_map VALUES ("plugin@ones.com", "001");`
    )
  } catch (error) {
    Logger.error('ERROR: ', error)
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

#### Example

```javascript
import { count } from '@ones-op/node-database'
import { Logger } from '@ones-op/node-logger'

export async function count_database() {
  try {
    const result = await count('select count(*) from email_id_map;')
  } catch (error) {
    Logger.error('ERROR: ', error)
  }
}
```

---
