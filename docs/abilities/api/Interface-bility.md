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

| Parameter | Type                         | Description     | 默认值 |
| --------- | ---------------------------- | --------------- | ------ |
| url\*     | string                       | Request address | -      |
| method\*  | string                       | Type of request | -      |
| body      | object \|Uint8Array \|string | Request body    | -      |
| headers   | Record<string, string[]>     | Request header  | -      |

Response

| Parameter  | Type                          | Description     | Default value |
| ---------- | ----------------------------- | --------------- | ------------- |
| body       | object\|Uint8Array\|string    | Response body   | -             |
| header     | Record<string, string[]>      | Response header | -             |
| statusCode | number \| string \| undefined | StatusCode      | -             |

### Interface provided by ONES standard system

### fetchONES

Each plugin will generate a super user, and each super user will have access rights to all data when accessing the interface provided by the ONES standard system. When fetchONES interface request method, bring `root=true` in the input parameter, you can use super user to access.

If we don't want to request as a plugin administrator, then we first need to set `root to false` in the code, and then add `Ones-User-Id` and `Ones-Auth-Token` to the request header. That is, these two parameters can be obtained in the corresponding method of the hijacked interface.

For the specific implementation, please refer to the following code.

```typescript
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
  root: true, //The default is true
})
```

Request:

| Parameter | Type                           | Description                                                                                 | Default value |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------- | ------------- |
| url\*     | string                         | The request address, if it is a wiki interface, you need to add 'wiki' before the parameter | -             |
| method\*  | string                         | Type of request                                                                             | -             |
| body      | object \| Uint8Array \| string | Request body                                                                                | -             |
| headers   | Record<string, string[]>       | Request header                                                                              | -             |

Response:

| PARAMETER  | TYPE                          | DESCRIPTION     | DEFAULT VALUE |
| ---------- | ----------------------------- | --------------- | ------------- |
| body       | object\|Uint8Array\|string    | Response body   | -             |
| header     | Record<string, string[]>      | Response header | -             |
| statusCode | number \| string \| undefined | StatusCode      | -             |

When requesting the ones plugin interface, developers will use the plug-in user by default. If you want to use other users, they first need to confirm that the header of the request object already contains the current user's `Ones-User-Id `and `Ones-Auth-Token` parameter information (usually, it can be carried during addition and external interface testing. When the plugin is installed in the instance environment, the user will also bring the user's `Ones-User-Id` and `Ones-Auth-Token` while clicking on the page to access the plug-in interface).

Finally, the interface access of other users can be achieved by referring to the following code.

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
    root: false, //The default is true
  })
  if (response) {
    return response
  }
  return {
    body: {},
  }
}
```
