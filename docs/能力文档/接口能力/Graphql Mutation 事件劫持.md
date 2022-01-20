---
title: 事件劫持
order: 3
group:
    title: 接口能力
    order: 2
---

| 能力代号            | 能力名称 |
| ------------------- | -------- |
| MutationEventHijack | 事件劫持 |


## 能力描述

插件可以通过指定事件类型，劫持 Graphql Mutation 接口；

目前支持工时相关 mutation 事件



## 能力使用

### 能力声明

```yaml
apis:
	  type: prefix
    methods:
      - GET
    url: /url        //标品url
    function:Version //名称与代码里的函数名保持一致 并首字母必须大写
```

### 调用方法




### 实现过程



## 示例插件

S3011 插件地址 : https://github.com/BangWork/ones-platform-plugin/tree/S3011/registrable_days