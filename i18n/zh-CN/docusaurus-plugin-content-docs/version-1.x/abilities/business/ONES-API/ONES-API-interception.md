---
sidebar_position: 4
---

# ONES 接口劫持

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## 概述

有时候我们需要改变 ONES 系统中某些行为的表现，在某个行为前后增加一些操作或者替换行为本身来达到业务需求。插件可以通过接口劫持能力对 ONES 标准系统中所有对外开放的接口进行劫持，支持前置、后置和替换方式；

- **替换**：插件可以”替换“标准系统系统的某个接口，让插件能够对现有系统的某个请求进行完全的自定义处理。
- **前置劫持**：是指当请求进入标准系统时，未被处理前就会先被转发到插件，由插件对请求进行修改后，回传给标准系统并继续执行原先的逻辑。一般用于修改请求的参数，或对请求进行校验；
- **后置劫持**：是指当请求在 ONES 完成处理后，会发送通知给插件，插件此时可进行一些后置处理，但无法修改响应内容。

**劫持**和**替换**都是比较底层的操作，可能对系统功能产生未知风险。一般只有在其它能力都不满足需求的情况下，才考虑使用接口劫持能力。

:::caution 注意
该能力即将遗弃，不保证后续兼容性！
:::

## 使用

### 使用须知

1. 组织级别的接口和团队级别的接口的差别在于团队级别接口的 `url` 中包含有 `/team/:teamUUID`。对于同一个接口：组织级别接口只允许一个插件进行劫持；团队级别接口允许每个团队中都有一个插件进行劫持，但同个团队中只允许一个插件进行劫持。
2. 在本地调试中，如果修改了插件配置文件`config/plugin.yaml`，需要运行 `npx op invoke clear` 并重新运行 `npx op invoke run` 指令才能使配置生效。

### replace 接口替换

- 请求流程

  ```mermaid
  sequenceDiagram
      autonumber
      用户前端->>ONES: 请求
      ONES->>+Plugin: 转发
      Plugin->>-ONES: 返回
      ONES->>用户前端: 返回
  ```

- 配置示例

  在插件配置文件中的 `apis` 字段加上以下配置：

  ```yaml title='/config/plugin.yaml'
  apis:
    - type: replace #接口类型： replace:替换
      methods: #接口请求方式
        - POST
      url: /team/:teamUUID/page/:pageUUID/update_title #劫持接口url
      scope: wiki #project或wiki接口，没有该属性则默认为project
      function: jackFunc #名称与代码里的函数名保持一致
  ```

- 添加处理方法

  在插件代码中，如果插件还需要请求 ONES 被替换的接口，需要在请求头中带上：`headers: { 'Replace': "replace", }`

  该示例替换了 wiki 修改页面标题的接口，会将页面标题设置为"plugin title"

  ```typescript
  import { fetchONES } from '@ones-op/node-fetch'
  import { Logger } from '@ones-op/node-logger'
  export async function jackFunc(
    request: PluginRequest<Record<string, any>>
  ): Promise<PluginResponse> {
    Logger.info('replace success')
    let userUUID = ''
    let userToken = ''
    if (request.headers['Ones-User-Id'] != null) {
      userUUID = request.headers['Ones-User-Id']
      userToken = request.headers['Ones-Auth-Token']
    }
    Logger.info('url:', request.url)
    let response = await fetchONES({
      path: '/wiki' + request.url,
      method: 'POST',
      headers: {
        'Ones-User-Id': [userUUID],
        'Ones-Auth-Token': [userToken],
        'Replace': 'replace',
      },
      body: {
        title: 'plugin title',
      },
      root: false,
    })
    Logger.info(JSON.stringify(response, undefined, 2))
    if (response) {
      return response
    }
    return {
      body: {},
    }
  }
  ```

- 注意事项

  接口请求参数需要注意以下几点：

  - 劫持的是 ONES API ，所以填写的 `url` 必须跟访问 ONES API 的 `url` 保持一致；

  - 确认被替换接口本身是 `POST` 请求还是 `GET` 请求；

  - 确认被替换接口请求头需要设置什么参数，请参考 [ONES API](../../../api/readme) 文档。

### prefix 前置接口劫持

- 请求流程

  ```mermaid
  sequenceDiagram
      autonumber
      用户前端->>+ONES: 请求
      ONES->>+Plugin: 转发
      Plugin->>Plugin: 做前置处理
      Plugin->>-ONES: 传回请求
      ONES->>ONES: 请求处理
      ONES->>-用户前端: 返回
  ```

- 配置示例

  在插件配置文件中的 `apis` 字段加上以下配置：

  ```yaml title='/config/plugin.yaml'
  apis:
    - type: prefix #接口类型： prefix:前置劫持
      methods:
        - POST
      url: /team/:teamUUID/page/:pageUUID/update_title
      scope: wiki
      function: prefixFunc
  ```

- 添加处理方法

  该示例对 wiki 修改页面标题的接口进行前置劫持，在本次修改标题中加上后缀

  ```typescript
  //prefix 前置接口劫持
  export async function prefixFunc(
    request: PluginRequest<Record<string, any>>
  ): Promise<PluginResponse> {
    let body = request?.body as any
    let headers = request?.headers as any
    body.title = body.title + '-plugin'
    return {
      headers: headers,
      body: body,
    }
  }
  ```

### suffix 后置接口劫持

- 请求流程

  ```mermaid
  sequenceDiagram
      autonumber
      用户前端->>+ONES: 请求
      ONES->>ONES: 请求处理
      ONES->>+Plugin: 转发
      Plugin->>Plugin: 做后置处理
      Plugin->>-ONES: 返回
      ONES->>-用户前端: 返回
  ```

- 配置示例

  在插件配置文件中的 `apis` 字段加上以下配置：

  ```yaml title='/config/plugin.yaml'
  apis:
    - type: suffix #接口类型： suffix:后置
      methods:
        - GET
      url: /users/me
      scope: project
      function: suffixFunc
  ```

- 添加处理方法

  该示例表示当接口完成处理之后，记录一些内容到`suffix.txt`文件中

  ```typescript
  import { createFile, writeStrings } from '@ones-op/node-file'
  import { Logger } from '@ones-op/node-logger'
  export async function Install() {
    await createFile('./suffix.txt')
    Logger.info('[Plugin] Install')
  }
  //suffix hijacking
  export async function suffixFunc(
    request: PluginRequest<Record<string, any>>
  ): Promise<PluginResponse> {
    Logger.info('suffix success')
    let body = request?.body as any
    await writeStrings('./suffix.txt', [JSON.stringify(request, undefined, 2)])
    return {
      // 可以返回任意 body
      body: {},
    }
  }
  ```

### 调试方式

- 使用 `curl` 工具进行访问，以`/users/me`接口为例：

  ```shell
  curl --location --request GET 'https://yourhost/users/me' \
  --header 'Ones-User-Id: {user_uuid}' \
  --header 'Ones-Auth-Token: {user_token}' \
  --header 'Content-Type: application/json' \
  --data ''
  ```

- 代码请求参数示例

  ```
  url：https://yourhost/users/me
  headers:
      Ones-User-Id:{user_uuid}
      Ones-Auth-Token:{user_token}
      ...
  method: GET
  ```