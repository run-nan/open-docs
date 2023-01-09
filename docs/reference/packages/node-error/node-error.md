---
toc_max_heading_level: 4
---

# @ones-op/node-error

## Require

| **ONES** |
| :------- |
|          |

## Install

Enter the `/backend` directory of the plug-in project, and execute the following command to install dependencies:

```shell
npm i @ones-op/node-error
```

## API

### clientError

throw client error

#### Params

| 参数   | 说明         | 类型   | 必填 | 默认值 |
| :----- | :----------- | :----- | :--- | :----- |
| reason | wrong reason | string | yes  | -      |

#### Example

```javascript
import { clientError } from '@ones-op/node-error'

export async function testClientError() {
  throw clientError('test client error')
}
```

---

### serverError

Throw server error error

#### Params

| 参数   | 说明         | 类型   | 必填 | 默认值 |
| :----- | :----------- | :----- | :--- | :----- |
| reason | wrong reason | string | 是   | -      |

#### Example

```javascript
import { serverError } from '@ones-op/node-error'

export async function testServerError() {
  throw serverError('test server error')
}
```

---

### sdkErrorToPluginError

The error of the sdk package is converted into a plug-in registration interface error

#### Params

| 参数         | 说明                             | 类型 | 必填 | 默认值 |
| :----------- | :------------------------------- | :--- | :--- | :----- |
| abilityError | The wrong type of an sdk package | any  | Yes  | -      |

#### Returns

| 参数   | 说明                                            | 类型        |
| :----- | :---------------------------------------------- | :---------- |
| result | Plugin error corresponding to sdk package error | PluginError |

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

## Type

### PluginError

| 参数       | 说明                           | 类型                                          |
| :--------- | :----------------------------- | :-------------------------------------------- |
| type       | error level                    | [`PluginErrorTypeEnum`](#PluginErrorTypeEnum) |
| reason     | wrong reason                   | `string`                                      |
| statusCode | Corresponding http status code | `string`                                      |
| errcode    | error code                     | `string`                                      |

## Enum

### PluginErrorTypeEnum {#PluginErrorTypeEnum}

pluginError error level

| 可选值                      | 说明          |
| :-------------------------- | :------------ |
| PluginErrorTypeEnum.error   | error level   |
| PluginErrorTypeEnum.warning | warning level |
