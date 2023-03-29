# Mutation 事件劫持

阅读之前最好先了解一下什么是 [GraphQL Mutation](https://graphql.cn/learn/queries/) 。

## 能力描述

ONES 系统将许多数据都支持了使用 GraphQL 操作。我们可以将每一次的 GraphQL Mutation(_通过 GraphQL 操作数据_) 看成是一个事件，**事件劫持 **这个能力就是可以对这些事件进行劫持，从而拓展出新的业务逻辑；

能力会预先针对某些事件类型提供劫持的支持，这样插件就可以通过指定事件类型，劫持 GraphQL Mutation 接口了；

目前支持工时相关 Mutation 事件：addManhour,updateManhour。

## 能力使用

### 能力声明

在 plugin.yaml 中添加

```yaml
abilities:
  - id: manhour-upsert-limit # 自定义的id
    abilityType: item-mutation # 能力的类型表示，必须为这个
    function:
      checkManhour: CheckManhourOp # checkManhour 为劫持的事件类型; CheckManhourOp 为自己实现的方法名称
    setting:
      prefix: check # 表示要执行的是 check 操作
      operating: addManhour,updateManhour # 表示要check的是 addManhour 和 updateManhour 这两个事件
```

### 调用方法

在 mutationeventhijack.ts 文件中可以调用 CheckManhourOp() 方法。 checkManhour 的事件类型会根据 return 中的 **code** 是否为 **200** 来判断此次事件的 check 是否成功；如果 check 失败，那么此次的操作将会失败

```javascript
import { Logger } from '@ones-op/node-logger'

export async function CheckManhourOp(request: any) {
  const body = request.body || {}
  Logger.info('[Plugin] CheckManhourOp =======', body)
  return {
    body: {
      code: 200, // 注意这里的返回值是否为 200 会决定这次 check 是否成功
      ResponseModel: 'Plugin.RegistrableDays',
      Reason: 'Success', // 如果失败可以自定义原因
      Type: null,
      Body: null,
    },
  }
}
```

### 示例解析

根据上面的示例配置和实现，我们就完成了针对添加工时和更新工时这两个操作的前置拦截校验，你可以自己实现的校验逻辑来控制操作能否继续进行。比如你可以校验添加和更新的工时必须为整数
