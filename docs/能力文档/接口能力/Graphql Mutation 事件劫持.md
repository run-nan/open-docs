---
title: 事件劫持
order: 3
group:
    title: 接口能力
    order: 2
---

|      能力代号       | 能力名称 |
| :-----------------: | :------: |
| MutationEventHijack | 事件劫持 |


## 能力描述

插件可以通过指定事件类型，劫持 Graphql Mutation 接口；

目前支持工时相关 mutation 事件



## 能力使用

### 能力声明

在plugin.yaml中添加

```yaml
  abilities:
    - id: manhour-upsert-limit
      abilityType: item-mutation
      function:
        checkManhour: CheckManhourOp
      setting:
        prefix: check
        operating: addManhour,updateManhour
```

### 调用方法

在mutationeventhijack.ts文件中可以调用CheckManhourOp()方法。

```javascript
import { Logger } from '@ones-op/node-logger'

export async function CheckManhourOp(request: any) {
   const body = request.body || {}
   Logger.info('[Plugin] CheckManhourOp =======', body)
   return {
      body: {
         code: 200,
         ResponseModel : "Plugin.RegistrableDays",
         Reason:  "Success",
         Type:    null,
         Body:    null,
      }
   }
}
```



### 实现过程



## 示例插件

S3011 插件地址 : https://github.com/BangWork/ones-platform-plugin/tree/S3011/registrable_days