---
sidebar_position: 2
---

# ONES API registration

## Requirements

| **ONES** | @ones-op/node-error | @ones-op/fetch |
| :------- | :------------------ | :------------- |
| v3.6.0+  | v0.1.1+             | v0.6.0+        |

## Overview

The plugin can register a new API on the ONES, and the plugin will directly process the request. When ONES API cannot meet business needs, you can use this ability to add API to solve data processing in specific business scenarios. For example the following scenario:

1. When some plugin front-end pages are added, and the data ONES API to which the page needs to be rendered cannot be fully met, it can be solved through the plugin registration API.
2. When some other abilities are used, they must have their own specific API for processing, and the API can be registered through this capability.

## Usage

The ONES API registration ability allows plugin to register API at two levels, namely plugin-level and team-level. Among them, plugin-level API with different plugin can register the same path, while team-level API cannot register API with the same path under the same team.

### Parameter Description

| Param            | Location     | Type   | Description                                              |
| :--------------- | :----------- | :----- | :------------------------------------------------------- |
| Ones-Plugin-Id   | HTTP Headers | string | plugin `instance_uuid`                                   |
| Ones-Check-Point | HTTP Headers | string | permission checkpoint `team`/`organization`              |
| Ones-Check-Id    | HTTP Headers | string | permission checkpoint uuid `teamUUID`/`organizationUUID` |

### addition

Add plugin-level API by `addition`.

#### Step 1: Register API

Declare the API in the plugin configuration file.

```yaml title="config/plugin.yaml"
apis:
  - type: addition #API type: addition
    methods: #Interface request method
      - POST
    url: /hello #Custom url
    function: hello #The name is consistent with the function name in the code
```

#### Step 2: Write the handling function

Write the handling function configured when the API is registered.

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported

//Interface correspondence method for addition registration
export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello ======= Request successful')
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  }
}
```

#### Step 3: Request

- Request parameter example

  When requesting an API registered through `addition`, three request header parameters `Ones-Check-Point`, `Ones-Plugin-Id` and `Ones-Check-Id` must be carried.

  ```
  url：https://yourhost/hello
  headers:
      Ones-Check-Point : team,
      Ones-Plugin-Id : {plugin_instance_uuid},
      Ones-Check-Id: {team_uuid},
  method: POST
  ```

- Use the `curl` tool to request, take the `/hello` API as an example

  ```shell
  curl --location --request POST 'https://yourhost/hello' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --header 'Ones-Check-Point: team' \
  --header 'Ones-Plugin-Id: {plugin_instance_uuid}' \
  --header 'Ones-Check-Id: {team_uuid}' \
  --data ''
  ```

### external

Add a team-level API through `external`, and the path of the API added in this way must be prefixed with `/team/:teamUUID`.

#### Step 1: Register API

Declare the API in the plugin configuration file.

```yaml title="config/plugin.yaml"
apis:
  - type: external #New to external (team-level interface)
    methods:
      - POST
    url: /team/:teamUUID/hello1
    function: hello1
```

#### Step 2: Write the handling function

Write the handling function configured when the API is registered.

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported

// Interface correspondence method for external registration
export async function hello1(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello1 ======= Request successful')
  return {
    body: {
      res: 'hello world1',
      requestBody: body,
    },
  }
}
```

#### Step 3: Request

- Request parameter example

  ```
  url：https://yourhost/team/:teamUUID/hello1
  method: POST
  ```

- Use the `curl` tool to access, take the `/team/:teamUUID/hello1` API as an example

  ```shell
  curl --location --request POST 'https://yourhost/team/:teamUUID/hello1' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --data ''
  ```

### Error handling (required by ONES version)

The caller of the plug-in registration interface is generally the front-end of the plug-in, which represents the front-end logic injected into a certain slot of the ONES system. We provide a standard error handling method, which is that when an exception occurs in the registration interface, the plug-in can Return the error information to the front end of the plug-in, and pop up a pop-up window at the corresponding call place of the ONES system. The plug-in developer can customize the color, text, and status code of the pop-up window.

#### backend interface logic

- Throw a specific error type, and you can specify the error code, reason, and type to achieve the status code of the specified request, the text of the pop-up window, and the color.

  type: The type of error, which can be divided into error and warning. Error is a server error, and warning is a user operation error.

  reason: The reason for the error.

  code: Consistent with the http status code, not 200.

- ```typescript
  import { PluginError, PluginErrorTypeEnum } from '@ones-op/node-error'

  export async function TestPluginError() {
    throw new PluginError(PluginErrorTypeEnum.error, 500, 'test')
  }
  ```

- In a more convenient way, errors can be divided into two types caused by user operations and plug-in logic, so two functions are provided respectively. This function also returns a specific error type, but it has a default type and code. Plug-ins Developers only need to specify reason.

  serverError: code:500，type:error

  clientError: code:400, type:warning

  ```typescript
  import { serverError, clientError } from '@ones-op/node-error'

  export async function TestServerError() {
    throw serverError('this is server error reason.')
  }

  export async function TestClientError() {
    throw clientError('this is client error reason.')
  }
  ```

- When the plug-in calls the sdk method in the registration interface, the sdk method may throw an exception. At this time, the plug-in developer can also directly throw the error in the registration interface. The rules are as follows:

  1. When the sdk error information is converted into the standard error of the plug-in interface, the conversion rules are as follows: level is converted to type, statusCode is converted to code, and reason is converted to reason.

  2. When the statusCode in the sdk error is 500, it means that the error is a platform-side error, and the corresponding error reason should not be directly exposed to the user, so at this time, the reason in the error will be uniformly converted to "Service unavailable. Try again later."

  3. It also provides a function to convert sdk errors into plug-in interface errors, which can be modified and thrown again:

  ```typescript
  import { SdkErrorToPluginError } from '@ones-op/node-error'
  import { isExist } from '@ones-op/node-file'

  export async function testSdkErrorToPluginError(request: PluginRequest) {
    try {
      isExist('../test.txt')
    } catch (e) {
      const pluginErr = SdkErrorToPluginError(e)
      pluginErr.reason = 'test'
      throw pluginErr
    }
  }
  ```

- We have also made a series of summaries on the causes of common errors. These error causes are more standard. Plug-in developers can consider using these standard errors when throwing errors. The specific usage is as follows:

  ```typescript
  import { CommonReason, serverError } from '@ones-op/node-error'

  export async function testCommonReason(request: PluginRequest) {
    throw serverError(CommonReason.NetworkError)
  }
  ```

#### Front-end processing logic

- We recommend using the [OPFetch](../../../reference/packages/fetch) SDK method we provide when calling the `ONES interface` to call the `ONES interface` through `OPFetch`, we A default behavior for handling errors is built into `OPFetch`.

- default error handling

  By default, we will automatically pop up the error message for the interface handled by `@ones-op/node-error`.

- ```tsx
  import { OPFetch } from '@ones-op/fetch'

  const fetchData = async () => {
    try {
      await OPFetch.post('/project/api/project/hello', {})
    } catch (e) {
      // OPFetch will pop up an error message in the interceptor by default, no need for developers to pop up the window manually
      // toast.error(e?.errorMessage)
    }
  }
  ```

- Custom Error Handling

  If you need to customize error handling, set `autoErrorToast` to `false` when calling `OPFetch`

```typescript
import { OPFetch } from '@ones-op/fetch'

const fetchData = async () => {
  try {
    await OPFetch.post(
      '/project/api/project/hello',
      {},
      {
        // Turn off the built-in automatic error reporting
        autoErrorToast: false,
      }
    )
  } catch (e) {
    // User-definable error handling behavior
  }
}
```

## Other

For detailed parameters, please refer to: [@ones-op/node-error](../../../reference/packages/node-error/node-error.md)
