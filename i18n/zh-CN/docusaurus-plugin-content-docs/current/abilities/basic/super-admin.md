---
id: super-admin
sidebar_position: 6
---

# 超级用户

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## 概述

每个插件在 ONES 中都有一个专属的超级用户，该用户拥有 ONES 所有数据的访问权限。当插件在使用某些能力时，需要使用较高权限的 ONES 用户，可以直接使用插件超级用户而不需要预先配置特定的用户。

## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm i @ones-op/node-ability
```

### 第二步：获取超级用户

团队级别的插件，在代码中可以直接调用 API 获取超级用户的信息。

```typescript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

组织级别插件在安装时，会在该组织下所有团队中都创建自己的超级用户。因此，在组织级别插件的获取超级用户信息时需要传入某一团队的`UUID`，会获取插件在该团队下的超级用户信息，否则返回内容为空，使用方法如下所示：

```typescript
const user = await Plugin.getPluginUser(teamUUID)
```

**内容示例：**

```json
"data": {
  "user_uuid": "PEFDXMK1",
  "org_uuid": "",
  "team_uuid": "3JjYLsNk",
  "app_uuid": "",
  "instance_uuid": "3fcca29f",
  "name": "pluginTest",
  "email": "3JjYLsNk_3fcca29f@ones.ai"
}
```
