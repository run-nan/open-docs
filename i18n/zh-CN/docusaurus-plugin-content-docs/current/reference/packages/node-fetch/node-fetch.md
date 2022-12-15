# @ones-op/node-fetch

插件**后端**接口访问能力相关 API

## 要求

| ONES    |
| :------ |
| v3.6.0+ |

## API

### fetchHttp

用于访问外部服务

#### Params

| **参数** | **类型**                 | **说明** | **必填** | **默认值** |
| :------- | :----------------------- | :------- | :------- | :--------- |
| url      | string                   | 请求地址 | 是       | -          |
| method   | string                   | 请求类型 | 是       | -          |
| body     | object/Uint8Array/string | 请求体   | 否       | -          |
| headers  | Record<string, string[]> | 请求头   | 否       | -          |

#### Returns

| **参数**   | **类型**                     | **说明** | **必填** | **默认值** |
| :--------- | :--------------------------- | :------- | :------- | :--------- |
| statusCode | number / string / undefined  | 状态码   | -        | -          |
| body       | object / Uint8Array / string | 返回体   | -        | -          |
| headers    | Record<string, string[]>     | 返回头   | -        | -          |

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

| **参数** | **类型**                 | **说明**                                           | **必填** | **默认值** |
| :------- | :----------------------- | :------------------------------------------------- | :------- | :--------- |
| path     | string                   | 请求地址，如果是 wiki 接口 需要在参数前添加'/wiki' | 是       | -          |
| method   | string                   | 请求类型                                           | 是       | -          |
| body     | object/Uint8Array/string | 请求体                                             | 否       | -          |
| headers  | Record<string, string[]> | 请求头                                             | 否       | -          |
| root     | bool                     | 是否使用插件超级用户                               | 否       | true       |

#### Returns

| **参数**   | **类型**                     | **说明** | **必填** | **默认值** |
| :--------- | :--------------------------- | :------- | :------- | :--------- |
| statusCode | number / string / undefined  | 状态码   | -        | -          |
| body       | object / Uint8Array / string | 返回体   | -        | -          |
| headers    | Record<string, string[]>     | 返回头   | -        | -          |

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
