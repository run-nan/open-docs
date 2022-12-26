# @ones-op/node-fetch

Plugin **backend** API access capability related to API

## Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### fetchHttp

Used to access external services

#### Params:

| **Param** | **Type**                 | Description     | **Required** | **Default** |
| :-------- | :----------------------- | :-------------- | :----------- | :---------- |
| url       | string                   | Request address | Y            | -           |
| method    | string                   | Request type    | Y            | -           |
| body      | object/Uint8Array/string | Request body    | N            | -           |
| headers   | Record<string, string[]> | Request header  | N            | -           |

#### Returns:

| **Param**  | **Type**                     | Description | **Required** | **Default** |
| :--------- | :--------------------------- | :---------- | :----------- | :---------- |
| statusCode | number / string / undefined  | Status code | -            | -           |
| body       | object / Uint8Array / string | Return body | -            | -           |
| headers    | Record<string, string[]>     | Turn back   | -            | -           |

#### Example:

```typescript
//Request Baidu interface
const response = await fetchHttp({
  url: 'https://www.baidu.com',
  method: 'GET',
})
```

---

### fetchONES

Used to access ONES system standard interface

#### Params:

| **Param** | **Type**                 | Description                                                                     | **Required** | **Default** |
| :-------- | :----------------------- | :------------------------------------------------------------------------------ | :----------- | :---------- |
| path      | string                   | Request address. For wiki interface, you need to add'/ wiki' before parameters. | Y            | -           |
| method    | string                   | Request type                                                                    | Y            | -           |
| body      | object/Uint8Array/string | Request body                                                                    | N            | -           |
| headers   | Record<string, string[]> | Request header                                                                  | N            | -           |
| root      | bool                     | Whether to use the plugin superuser                                             | N            | true        |

#### Returns:

| **Param**  | **Type**                     | Description | **Required** | **Default** |
| :--------- | :--------------------------- | :---------- | :----------- | :---------- |
| statusCode | number / string / undefined  | Status code | -            | -           |
| body       | object / Uint8Array / string | Return body | -            | -           |
| headers    | Record<string, string[]>     | Turn back   | -            | -           |

#### Example：

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

---
