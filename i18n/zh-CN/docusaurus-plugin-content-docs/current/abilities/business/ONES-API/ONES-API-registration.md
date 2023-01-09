---
sidebar_position: 2
---

# ONES 接口注册

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## 概述

插件能在 ONES 系统上注册新的接口，由插件直接对请求进行处理。当 ONES 标准接口无法满足业务需求时，可以通过使用该能力添加接口，解决特定业务场景的数据处理。例如以下场景：

1. 当添加了一些插件前端页面，该页面的渲染需要到的数据 ONES 标准接口无法完全满足时，可通过插件注册接口解决。
2. 一些其他能力在使用的时候，必须要有自己特定的接口进行处理，可通过该能力注册接口。

## 使用

ONES 接口注册能力允许插件注册两种级别的接口，分别为插件级别和团队级别。其中，插件级别接口不同插件可以注册同一个路径，而团队级别接口在同个团队下不能注册相同路径的接口。

### 参数说明

| 参数             | 位置         | 类型   | 说明                                          |
| :--------------- | :----------- | :----- | :-------------------------------------------- |
| Ones-Plugin-Id   | HTTP Headers | string | 插件的 `instance_uuid`                        |
| Ones-Check-Point | HTTP Headers | string | 权限检查点 `team`/`organization`              |
| Ones-Check-Id    | HTTP Headers | string | 权限检查点 uuid `teamUUID`/`organizationUUID` |

### addition

通过`addition`方式添加插件级别的接口。

#### 第一步：注册接口

在插件配置文件中声明接口。

```yaml title="config/plugin.yaml"
apis:
  - type: addition #接口类型：addition:新增
    methods: #接口请求方法
      - POST
    url: /hello #自定义url
    function: hello #名称与代码里的函数名保持一致
```

#### 第二步：实现处理函数

编写接口注册时配置的处理函数。

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //需要导入的依赖依赖包

//addition 注册的接口对应方法
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
```

#### 第三步：请求

- 代码请求参数示例

  请求通过`addition`方式注册的接口时，需携带`Ones-Check-Point`、`Ones-Plugin-Id`和`Ones-Check-Id` 三个请求头参数。

  ```
  url：https://yourhost/hello
  headers:
      Ones-Check-Point : team,
      Ones-Plugin-Id : {plugin_instance_uuid},
      Ones-Check-Id: {team_uuid},
  method: POST
  ```

- 使用 `curl` 工具进行访问，以`/hello`接口为例

  ```shell
  curl --location --request POST 'https://yourhost/hello' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --header 'Ones-Check-Point: team' \
  --header 'Ones-Plugin-Id: {plugin_instance_uuid}' \
  --header 'Ones-Check-Id: {team_uuid}' \
  --data ''
  ```

### external

通过`external`方式添加团队级别的接口，以该方式添加的接口路径必须以`/team/:teamUUID`为前缀。

#### 第一步：注册接口

在插件配置文件中声明接口。

```yaml title="config/plugin.yaml"
apis:
  - type: external #external新增（团队级别的接口）
    methods:
      - POST
    url: /team/:teamUUID/hello1
    function: hello1
```

#### 第二部：实现处理函数

编写接口注册时配置的处理函数。

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //需要导入的依赖依赖包

// external 注册的接口对应方法
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

#### 第三步：请求

- 代码请求参数示例

  ```
  url：https://yourhost/team/:teamUUID/hello1
  method: POST
  ```

- 使用 `curl` 工具进行访问，以`/team/:teamUUID/hello1`接口为例

  ```shell
  curl --location --request POST 'https://yourhost/team/:teamUUID/hello1' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --data ''
  ```

### 错误处理（ONES 版本要求 v3.14+）

插件注册接口的调用方一般是插件前端，插件前端代表着 ONES 系统的某个插槽注入的前端逻辑，我们提供了一种标准的错误处理方式，该方式就是当注册接口发生异常时，插件可把错误信息返回到插件前端，并在 ONES 系统对应调用的地方弹出弹窗，插件开发者可自定义弹窗的颜色，文案，请求的状态码。

#### 后端接口逻辑

- 抛出特定的错误类型，可指定错误的 code，reason，type，来达到指定请求的状态码，弹窗的文案，颜色。

  type: 错误的类型，有分为 error，warning，error 为服务端错误，warning 为用户操作错误。

  reason: 错误原因。

  code: 跟 http 状态码保持一致，非 200。

  ```typescript
  import { PluginError, Type } from '@ones-op/node-error'

  export async function TestPluginError() {
    throw new PluginError(Type.error, 500, 'test')
  }
  ```

- 更简便的方式，错误可分为用户操作引起的，插件自身逻辑引起 2 大类，所以分别提供了 2 个函数，该函数同样返回一个特定的错误类型，但是它有默认的 type 跟 code，插件开发者只需要指定 reason 即可。

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

- 当插件在注册接口中调用 sdk 方法时，sdk 方法有可能会抛出异常，这时插件开发者也可以直接把该错误在注册接口原样抛出，有规则如下：

  1.sdk 错误信息在转换成插件接口标准错误时，转换规则为，level 转换为 type，statusCode 转换为 code，reason 转换为 reason。

  2.当 sdk 错误中的 statusCode 为 500 时，说明该错误是一个平台端的错误，对应的错误原因不应该直接暴露给用户，所以这时候会把错误中的 reason 统一转换为"Service unavailable. Try again later."。

  3.也提供了 sdk 错误转换为插件接口错误的函数，可对错误进行修改再二次抛出：

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

#### 前端处理逻辑

我们建议在调用 `ONES 接口` 时使用我们提供的 [OPFetch](../../../reference/packages/fetch/fetch.md) SDK 方法，通过 `OPFetch` 调用 `ONES 接口`，我们在 `OPFetch` 中内置一套处理错误的默认行为。

- 默认错误处理

  默认情况下，我们会对使用 `@ones-op/node-error` 处理过的接口，对错误信息自动弹窗。

  ```tsx
  import { OPFetch } from '@ones-op/fetch'

  const fetchData = async () => {
    try {
      await OPFetch.post('/project/api/project/hello', {})
    } catch (e) {
      // OPFetch 会在拦截器中默认弹出错误信息，无需开发者再手动弹窗
      // toast.error(e?.errorMessage)
    }
  }
  ```

- 自定义错误处理

  若需要自定义错误处理，在调用 `OPFetch` 时，将 `autoErrorToast` 设置为 `false` 即可

  ```tsx
  import { OPFetch } from '@ones-op/fetch'

  const fetchData = async () => {
    try {
      await OPFetch.post(
        '/project/api/project/hello',
        {},
        {
          // 关闭内置自动报错
          autoErrorToast: false,
        }
      )
    } catch (e) {
      // 用户可自定义错误处理行为
    }
  }
  ```
