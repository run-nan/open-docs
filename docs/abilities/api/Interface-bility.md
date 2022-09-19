---
sidebar_position: 1
---

# Interface access

## Description of ability

Provide the ability to request external interfaces and request ONES interfaces. Plug-ins can access external interfaces or interfaces provided by ONES standard systems.
For a specific ONES interface, you can refer to the api document of the instance. [ONES-API](../../ones/readme/index.md) ：

To access the external interface, please pass parameters and return results according to the corresponding interface description.

## Statement of Competency

```typescript
import { fetchHttp, fetchONES } from '@ones-op/node-fetch'
```

#### fetchHttp

External interface request method,

example:

```typescript
async function fetchBaidu() {
  const response = await fetchHttp({
    url: 'https://www.baidu.com',
    method: 'GET',
  })
  return response
}
```

Request:

| Parameter | Type                           | Description | 默认值 |
| --------- | ------------------------------ | ----------- | ------ |
| url\*     | string                         | 请求地址    | -      |
| method\*  | string                         | 请求类型    | -      |
| body      | object \| Uint8Array \| string | 请求体      | -      |
| headers   | Record<string, string[]>       | 请求头      | -      |

Response

| Parameter  | Type                           | Description | Default value |
| ---------- | ------------------------------ | ----------- | ------------- |
| body       | object \| Uint8Array \| string | 返回体      | -             |
| header     | Record<string, string[]>       | 返回头      | -             |
| statusCode | number \| string \| undefined  | 状态码      | -             |

### Interface provided by ONES standard system

### fetchONES

Each plugin generates a superuser, and each superuser will have access to all data when accessing the interface provided by ONES standard system.

When the fetchONES interface requests the method, you can use superuser access by bringing `root=true` into the parameter. If we don't want to request as a plugin administrator, we should first set the `root=false` in the code, and then add `Ones-User-Id` and `Ones-Auth-Token` parameters to the request header, which can hijack the interface. The corresponding method is obtained. For specific implementation, please refer to the example below.

Request:

| Parameter | Type                           | Description     | Default value |
| --------- | ------------------------------ | --------------- | ------------- |
| url\*     | string                         | 请求地址        | -             |
| method\*  | string                         | Type of request | -             |
| body      | object \| Uint8Array \| string | 请求体          | -             |
| headers   | Record<string, string[]>       | 请求头          | -             |

Response:

| PARAMETER  | TYPE                           | DESCRIPTION | DEFAULT VALUE |
| ---------- | ------------------------------ | ----------- | ------------- |
| body       | object \| Uint8Array \| string | 返回体      | -             |
| header     | Record<string, string[]>       | 返回头      | -             |
| statusCode | number \| string \| undefined  | 状态码      | -             |

### Example

```typescript
  const response = await fetchONES(
    {
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
        root: true,
    }
)


return response
}
```

When we request the ONES plugin interface, we will use plugin users by default. If you want to use other users, you can refer to the following spelling.

Declare the hijacked interface，

```typescript
apis:
  - type: replace
    methods:
      - GET
    url: /users/me
    function: getUserme
```

The corresponding method to implement the hijacking interface ` getUserme()` is as follows. If we want to use the current user access interface, then the header of the request object already contains the two parameter information of the current user's `Ones-User-Id` and `Ones-Auth-Token`. We can obtain it by referring to the following code.

```typescript
export async function getUserme(
  request: PluginRequest<Record<string, any>>
): Promise<PluginResponse> {
  let userUUID = ''
  let userToken = ''
  if (request.headers['Ones-User-Id'] != null) {
    userUUID = request.headers['Ones-User-Id']
    userToken = request.headers['Ones-Auth-Token']
  }
  const response = await fetchONES({
    path: `/users/me`,
    method: 'GET',
    headers: {
      'Ones-User-Id': [userUUID],
      'Ones-Auth-Token': [userToken],
    },
    root: false, //默认为true
  })
  if (response) {
    return response
  }
  return {
    body: {},
  }
}
```
