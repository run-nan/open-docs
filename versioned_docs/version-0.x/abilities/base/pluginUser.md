---
sidebar_position: 10
---

# 插件超级用户

## 能力描述

插件可以获取当前插件超级用户的信息,

## 能力声明

```javascript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

返回结果示例

![image-20220427180450183](pluginUser.png)
