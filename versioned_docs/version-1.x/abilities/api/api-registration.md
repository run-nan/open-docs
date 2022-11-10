---
sidebar_position: 2
---

# Interface registration

## Description of ability

Plugins can register new interfaces to support new plugin-specific internal or external interfaces; these interfaces can be called like normal standard system interfaces, if the route starts with team:teamUUID, when the plugin is installed on a team, it can be Access route-bound plugin functions by requesting the "/team/:teamUUID/ URL".

## Ability use

#### addition （Interface implemented by the plug-in itself）

![image](registration&hijacking1.jpg)

### **external** （New interface at the team level）

The new interface of external must start with /team/:teamUUID. When the plug-in is followed by a team, the routing-bound plug-in function can be accessed through request /team/:teamUUID/xxx.

### Statement of Competency

Interface registration, addition and external can add new interfaces. Among them, addition is a plug-in-level interface, while external is a team-level interface. After registering an external interface, when initiating a request for its registered interface, you need to splicate /team/:teamUUID/** before url. ** You can learn about it by referring to the following.

Declare the newly registered interface in plugin.yaml.

```yaml
apis:
  - type: addition
  methods:
    - POST
  url: /hello
  function: hello

    - type: external
  methods:
    - POST
  url: /team/:teamUUID/hello1
  function: hello1
```

:::caution Attention

If the plug-in profile is modified（`config/plugin.yaml`），Need to run `npx op invoke clear` And rerun `npx op invoke run` Instructions can make the configuration effective.。
:::

### Call the method

Write a functional methodology with apis configuration under the file `backend/src/index.ts `

```javascript
import { Logger } from '@ones-op/node-logger'
import { fetchHttp, fetchONES } from '@ones-op/node-fetch'

export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello ======= 请求成功')
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  }
}

export async function hello1(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello1 ======= 请求成功')
  return {
    body: {
      res: 'hello world1',
      requestBody: body,
    },
  }
}
```

### Implementation process

#### Interface for requesting plug-in registration

**`addition`** The interface fills in the following parameters in debugging tools such as postman.

```javascript
url：https://yourhost/hello
headers: Ones-Check-Point:team; Ones-Plugin-Id:{插件实例ID}
method: POST

```

Or enter the following in the terminal and command line content.

```javascript
curl --location --request POST 'https://yourhost/hello' \
--header 'Content-Type: application/json;charset=utf-8' \
--header 'Ones-Check-Point: team' \
--header 'Ones-Plugin-Id: {插件实例ID}' \
--data ''
```

The return result is as follows:

![image-20220427151328629](registertion&hijack5.png)

**`external`** The interface fills in the following parameters in debugging tools such as postman.

```javascript
url：https://yourhost/team/{teamUUID}/hello1
method: POST
```

Or enter the following in the terminal and command line content.

```javascript
curl --location --request POST 'https://yourhost/team/{teamUUID}/hello1' \
--header 'Content-Type: application/json;charset=utf-8' \
--data ''
```

The return result is as follows:

![image-20220427151740865](registertion&hijack6.png)

### Request Header Instructions

| 参数名           | 参数位置     | 值类型 | Description                              |
| ---------------- | ------------ | ------ | ---------------------------------------- |
| Ones-User-Id     | HTTP Headers | string | User uuid                                |
| Ones-Auth-Token  | HTTP Headers | string | User token                               |
| Ones-Plugin-Id   | HTTP Headers | string | Examples of corresponding plug-ins ID    |
| Ones-Check-Point | HTTP Headers | string | 对应权限检查点 team/organization         |
| Ones-Check-Id    | HTTP Headers | string | 对应权限检查点 teamUUID/organizationUUID |

Ones-Plugin-Id Description: There are four types of plug-ins for the front end.

- addition Type is a new interface, and Ones-Plugin-Id needs to pass in the UUID of the corresponding plug-in instance.
- Plug-in platform inherent interface, Ones-Plugin-Id incoming fixed value：`built_in_apis`。

### Example plugin

https://gitlab.partner.ones.ai/example/api-register-jack

### FAQ

> ### Use addition: New type problem description
>
> Plugin addtion routing, GET request to pass parameters will prevent the interface from getting the return value.

> ### Reason for occurrence
>
> The fasthttp package used by the standard system does not support get request to send body. This problem has been fixed by the package. We have been using the package version for too long.

> Disposition: Use the post request.
