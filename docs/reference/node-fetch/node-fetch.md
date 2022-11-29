# @ones-op/node-fetch

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## API

### fetchHttp

**Function:** Used to access external services

#### Params:

| **Param** | **Type**                 | Description     | **Default** | **Required** |
| --------- | ------------------------ | --------------- | ----------- | ------------ |
| url       | string                   | Request address | -           | Yes          |
| method    | string                   | Request type    | -           | Yes          |
| body      | object/Uint8Array/string | Request body    | -           |              |
| headers   | Record<string, string[]> | Request header  | -           |              |

#### Returns:

| **Param**  | **Type**                     | Description | **Default** | **Required** |
| ---------- | ---------------------------- | ----------- | ----------- | ------------ |
| statusCode | number / string / undefined  | Status code | -           |              |
| body       | object / Uint8Array / string | Return body | -           |              |
| headers    | Record<string, string[]>     | Turn back   | -           |              |

#### Example:

```typescript
//Request Baidu interface
const response = await fetchHttp({
  url: 'https://www.baidu.com',
  method: 'GET',
})
```

### fetchONES

**Function: **Used to access ONES system standard interface

#### Params:

| **Param** | **Type**                 | Description                                                                     | **Default** | **Required** |
| --------- | ------------------------ | ------------------------------------------------------------------------------- | ----------- | ------------ |
| path      | string                   | Request address. For wiki interface, you need to add'/ wiki' before parameters. | -           | Yes          |
| method    | string                   | Request type                                                                    | -           | Yes          |
| body      | object/Uint8Array/string | Request body                                                                    | -           |              |
| headers   | Record<string, string[]> | Request header                                                                  | -           |              |
| root      | bool                     | Whether to use the plugin superuser                                             | true        |              |

#### Returns:

| **Param**  | **Type**                     | Description | **Default** | **Required** |
| ---------- | ---------------------------- | ----------- | ----------- | ------------ |
| statusCode | number / string / undefined  | Status code | -           |              |
| body       | object / Uint8Array / string | Return body | -           |              |
| headers    | Record<string, string[]>     | Turn back   | -           |              |

#### 示例：

```typescript
//Use a superuser request
const response = await fetchONES({
  path: `/team/${globalThis.onesEnv.teamUUID}/items/view`,
  method: 'POST',
  body: {
    query: {
      must: [
        { equal: { item_type: 'field' } },
        { in: { pool: ['project'] } },
        { in: { 'context.type': ['team'] } },
      ],
    },
    view: ['[default]'],
  },
  root: true, //Default is true
})

//Use a normal user request
const response = await fetchONES({
  path: `/users/me`,
  method: 'GET',
  headers: {
    'Ones-User-Id': [userUUID],
    'Ones-Auth-Token': [userToken],
  },
  root: false, //Default is true
})
```
