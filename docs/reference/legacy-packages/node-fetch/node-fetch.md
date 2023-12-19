# @ones-op/node-fetch(deprecated)

[![](https://npm.partner.ones.cn/badge/v/@ones-op/node-fetch.svg)](https://npm.partner.ones.cn/package/@ones-op/node-fetch)

:::warning DEPRECATED

We have integrated the "@ones-op/node-fetch" functionality into the "[@ones-op/fetch](../../packages/fetch//fetch.md)" package, which will not be maintained, so please use the "[@ones-op/fetch](../../packages/fetch//fetch.md)" package in preference.

:::

Plugin **backend** API access capability related to API.

## Requirements

| ONES    |
| :------ |
| v3.6.0+ |

## API

### fetchHttp

Used to access external services

#### Params

| **Param** | Description     | **Type**                 | **Required** | **Default** |
| :-------- | :-------------- | :----------------------- | :----------- | :---------- |
| url       | Request address | string                   | Y            | -           |
| method    | Request type    | string                   | Y            | -           |
| body      | Request body    | object/Uint8Array/string | N            | -           |
| headers   | Request header  | Record<string, string[]> | N            | -           |

#### Returns

| **Param**  | Description | **Type**                     | **Required** | **Default** |
| :--------- | :---------- | :--------------------------- | :----------- | :---------- |
| statusCode | Status code | number / string / undefined  | Y            | -           |
| body       | Return body | object / Uint8Array / string | Y            | -           |
| headers    | Turn back   | Record<string, string[]>     | Y            | -           |

#### Example

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

#### Params

| **Param** | Description                                                                     | **Type**                 | **Required** | **Default** |
| :-------- | :------------------------------------------------------------------------------ | :----------------------- | :----------- | :---------- |
| path      | Request address. For wiki interface, you need to add `/wiki` before parameters. | string                   | Y            | -           |
| method    | Request type                                                                    | string                   | Y            | -           |
| body      | Request body                                                                    | object/Uint8Array/string | N            | -           |
| headers   | Request header                                                                  | Record<string, string[]> | N            | -           |
| root      | Whether to use the plugin superuser                                             | bool                     | N            | true        |
| teamUUID  | Team `uuid`, organization-level plugins need to carry this parameter            | string                   | N            | -           |

#### Returns

| **Param**  | Description | **Type**                     | **Required** | **Default** |
| :--------- | :---------- | :--------------------------- | :----------- | :---------- |
| statusCode | Status code | number / string / undefined  | Y            | -           |
| body       | Return body | object / Uint8Array / string | Y            | -           |
| headers    | Turn back   | Record<string, string[]>     | Y            | -           |

#### Example

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
