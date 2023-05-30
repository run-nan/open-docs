---
sidebar_position: 5
---

# Mutation 事件劫持

## 要求

| ONES    |
| :------ |
| v3.6.0+ |

## 概述

ONES 系统中很多数据都支持使用 GraphQL 操作。我们可以将每一次的 [GraphQL Mutation](https://graphql.org/learn/queries/) 看成是一个事件，使用 **Mutation 事件劫持** 能力可以对这些事件进行劫持并进行一些额外的检查或操作，从而拓展出新的业务逻辑。能力会预先针对某些事件类型提供劫持支持，插件可以通过指定事件类型，劫持对应 `GraphQL Mutation` 事件。

目前支持劫持的事件类型有：`checkManhour`（工时校验）

## 使用

### checkManhour

使用该能力劫持 `checkManhour` 事件类型，可对工时操作进行一些校验逻辑，若校验失败则本次修改操作会报错，只有通过校验才能正常完成操作。

以下是为**添加工时**和**更新工时**这两个操作添加前置校验的使用步骤。在开发过程中，开发者可以根据实际需求来编写业务代码，例如校验添加和更新的工时必须为整数、修改数值范围等场景。

#### 第一步：添加能力

使用 `npx op add ability` 添加 `item-mutation` 能力。

示例配置：

```yaml title="/config/plugin.yaml"
abilities:
  - id: Ksmnf_Mc
    name: Item mutation
    version: 1.0.0
    abilityType: item-mutation
    function:
      checkManhour: CheckManhourOp # checkManhour 为事件类型，CheckManhourOp为该事件类型的处理函数
    config:
      - key: prefix # 劫持的位置，prefix表示前置操作
        value: check # 表示要执行的是 check 操作
        fieldType: Input
      - key: operating # operating 表示劫持的事件
        value: addManhour,updateManhour # 表示要劫持 addManhour 和 updateManhour 这两个事件
        fieldType: Input
```

#### 第二步：添加处理函数

在插件工程的`backend/src/item-mutation.ts`中编写处理函数 `CheckManhourOp`，在发生配置中劫持的事件时，会调用该函数。而 `checkManhour` 的事件类型会根据返回状态码是否为 **200** 来判断此次事件的检验是否成功。

`CheckManhourOp` 函数模板如下所示：

```typescript title="backend/src/item-mutation.ts"
interface CheckManhourOpRequest {
  Selections: {
    args: {
      start_time: number
      type: string
    }
  }[]
}
// 工时校验逻辑，可从Selections中获取本次请求相关信息
export async function CheckManhourOp(request: any) {
  const body = request.body || {}
  const { Selections } = body as CheckManhourOpRequest
  Logger.info(JSON.stringify(Selections))
  return {
    body: {
      code: 200,
      ResponseModel: 'Plugin.RegistrableDays',
      Reason: 'Success',
      Type: null,
      Body: null,
    },
  }
}
```
