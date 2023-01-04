---
id: sdk-error-handling
sidebar_position: 12
description: sdk错误处理。
---

# Sdk 错误处理

## 要求

| **ONES** |
| :------- |
|          |

## 概述

在使用 ONES 提供的 sdk 方法时，有可能会出现某种错误场景，如何捕获并识别错误有一个标准的处理方式，

- 每一个 sdk 包都有自身的一个错误类型，例如 ones-op/node-file 包有错误类型 FileError，ones-op/node-database 包有错误类型 DBError。
- sdk 包对应的错误类型，sdk 对应的错误场景有哪些，可在对应的 api 文档中得知。
- 得知 sdk 包对应的错误类型之后，插件开发者就可通过 instead of 的方式判断并获取错误信息。

## 使用

#### 错误描述

虽然每个 sdk 包都有自己的错误类型，但对应的类型是有共同的属性的，都是由 reason，statusCode，level，errcode 组成。

- reason: 简单描述了错误的原因。
- level: 错误的等级，有分成 error，warning 级别，error 级别的错误表明发生了阻塞相关动作的错误，warning 级别的错误表明发生了错误，但不阻塞相关动作。
- statusCode: 跟 http 状态码保持一致，例如 500 为平台端错误，400 为 sdk 调用者使用方式不对引起的错误。
- errcode: 错误对应的错误码，每个错误码都都对应一个错误场景。

#### 举例

这里我们用@ones-op/node-file 包中的 makeDir 方法来举例子。

该方法有错误场景，当插件开发者传入的路径不是一个合法的路径的时候，就会报相关的错误。

```typescript
try {
  await makeDir('../tmp/test')
} catch (e) {
  if (e instanceof FileError) {
    // InvalidParameter
    console.log(e.errcode)
    // 400
    console.log(e.statusCode)
    // Invalid parameter.
    console.log(e.reason)
    // error
    console.log(e.level)
  }
}
```
