# 顶栏公告插槽

## 要求

| **ONES** |
| :------: |
| v3.6.0+  |

## 概述

顶栏公告模块，用于展示全局的公告信息

当前支持的插槽：

- [ones:global:banner](#onesglobalbanner)

## 插槽

#### ones:global:banner

**个数限制：** 一个插件中最多可声明 **1 **个该插槽，系统中最多同时存在 **1 **个该插槽

## 使用

```yaml
modules:
  - id: ones-global-banner-evcP
    title: banner
    moduleType: ones:global:banner
    entry: modules/ones-global-banner-evcP/index.html
```
