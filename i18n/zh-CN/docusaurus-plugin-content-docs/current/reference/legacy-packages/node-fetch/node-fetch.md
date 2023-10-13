# @ones-op/node-fetch（已废弃）

[![](https://npm.partner.ones.cn/badge/v/@ones-op/node-fetch.svg)](https://npm.partner.ones.cn/package/@ones-op/node-fetch)

:::warning 已废弃

我们已经将 “@ones-op/node-fetch” 功能集成进了 “[@ones-op/fetch](../../packages/fetch/fetch.md)” 包，此包将不会在进行维护，请优先使用 “[@ones-op/fetch](../../packages/fetch/fetch.md)” 包。

:::

插件**后端**接口访问能力相关 API。

## 要求

| ONES    |
| :------ |
| v3.6.0+ |

## API

### fetchHttp

用于访问外部服务

#### Params

| **参数** | **说明** | **类型**                 | **必填** | **默认值** |
| :------- | :------- | :----------------------- | :------- | :--------- |
| url      | 请求地址 | string                   | 是       | -          |
| method   | 请求类型 | string                   | 是       | -          |
| body     | 请求体   | object/Uint8Array/string | 否       | -          |
| headers  | 请求头   | Record<string, string[]> | 否       | -          |

#### Returns

| **参数**   | **说明** |            **类型**            | **必填** | **默认值** |
| :--------- | :------- | :----------------------------: | :------- | ---------- |
| statusCode | 状态码   | number / string / undefined -  | -        |
| body       | 返回体   | object / Uint8Array / string - | -        |
| headers    | 返回头   |   Record<string, string[]> -   | -        |

#### Example

```typescript
//请求百度接口
const response = await fetchHttp({
  url: 'https://www.baidu.com',
  method: 'GET',
})
```

---

### fetchONES

用于访问 ONES 系统标准接口

#### Params

| **参数** | **说明**                                            | **类型**                 | **必填** | **默认值** |
| :------- | :-------------------------------------------------- | :----------------------- | :------- | :--------- |
| path     | 请求地址，如果是 wiki 接口 需要在参数前添加 `/wiki` | string                   | 是       | -          |
| method   | 请求类型                                            | string                   | 是       | -          |
| body     | 请求体                                              | object/Uint8Array/string | 否       | -          |
| headers  | 请求头                                              | Record<string, string[]> | 否       | -          |
| root     | 是否使用插件超级用户                                | bool                     | 否       | true       |
| teamUUID | 团队`uuid`,组织级别插件需要携带该参数               | string                   | 否       | -          |

#### Returns

| **参数**   | **说明** | **类型**                     | **必填** | **默认值** |
| :--------- | :------- | :--------------------------- | :------- | :--------- |
| statusCode | 状态码   | number / string / undefined  | -        | -          |
| body       | 返回体   | object / Uint8Array / string | -        | -          |
| headers    | 返回头   | Record<string, string[]>     | -        | -          |

#### Example

```typescript
//使用超级用户请求
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
  root: true, //默认为true
})

//使用普通用户请求
const response = await fetchONES({
  path: `/users/me`,
  method: 'GET',
  headers: {
    'Ones-User-Id': [userUUID],
    'Ones-Auth-Token': [userToken],
  },
  root: false, //默认为true
})
```

---
