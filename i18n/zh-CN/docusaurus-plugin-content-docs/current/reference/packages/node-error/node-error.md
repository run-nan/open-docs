---
toc_max_heading_level: 4
---

# @ones-op/node-error

## 要求

| **ONES** |
| :------- |
|          |

## 安装

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm i @ones-op/node-error
```

## API

### clientError

抛出客户端错误

#### Params

| 参数   | 说明     | 类型   | 必填 | 默认值 |
| :----- | :------- | :----- | :--- | :----- |
| reason | 错误原因 | string | 是   | -      |

#### Example

```javascript
import { clientError } from '@ones-op/node-error'

export async function testClientError() {
  throw clientError('test client error')
}
```

---

### serverError

抛出服务端错误错误

#### Params

| 参数   | 说明     | 类型   | 必填 | 默认值 |
| :----- | :------- | :----- | :--- | :----- |
| reason | 错误原因 | string | 是   | -      |

#### Example

```javascript
import { serverError } from '@ones-op/node-error'

export async function testServerError() {
  throw serverError('test server error')
}
```

---

### sdkErrorToPluginError

sdk 包的错误转换成插件注册接口错误

#### Params

| 参数         | 说明                  | 类型 | 必填 | 默认值 |
| :----------- | :-------------------- | :--- | :--- | :----- |
| abilityError | 某个 sdk 包的错误类型 | any  | 是   | -      |

#### Returns

| 参数   | 说明                          | 类型        |
| :----- | :---------------------------- | :---------- |
| result | sdk 包错误对应的 plugin error | PluginError |

#### Example

```javascript
import { sdkErrorToPluginError } from '@ones-op/node-error'

export async function testSdkErrorToPluginErrorr() {
  const e = new AbilityError('error', 'errrcode', 500, 'reason')
  e.statusCode = 500
  e.reason = 'reason'
  e.level = 'level'
  e.errcode = 'errcode'
  const pluginError = SdkErrorToPluginError(e)
}
```

---

###

## Type

### PluginError

| 参数       | 说明               | 类型                                          |
| :--------- | :----------------- | :-------------------------------------------- |
| type       | 错误等级           | [`PluginErrorTypeEnum`](#PluginErrorTypeEnum) |
| reason     | 错误原因           | `string`                                      |
| statusCode | 对应的 http 状态码 | `string`                                      |
| errcode    | 错误码             | `string`                                      |

## Enum

### PluginErrorTypeEnum {#PluginErrorTypeEnum}

pluginError 错误等级

| 可选值                      | 说明     |
| :-------------------------- | :------- |
| PluginErrorTypeEnum.error   | 错误级别 |
| PluginErrorTypeEnum.warning | 警告级别 |

###
