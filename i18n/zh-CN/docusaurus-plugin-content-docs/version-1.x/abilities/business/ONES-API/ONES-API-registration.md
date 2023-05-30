---
sidebar_position: 2
---

# ONES 接口注册

## 要求

| ONES    | @ones-op/node-error | @ones-op/fetch |
| :------ | :------------------ | :------------- |
| v3.6.0+ | v0.1.1+             | v0.6.0+        |

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
