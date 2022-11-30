# 全局错误码插槽

## 要求

| **ONES** |
| :------: |
|   3.6+   |

## 概述

全局错误码模块，用于拦截指定错误码以自定义提示信息

:::caution

这个插槽将来会被弃用，请使用插件的标准错误处理。

:::

当前支持的插槽：

- [ones:global:error:code](#onesglobalerrorcode)

## 插槽

#### ones:global:error:code

**个数限制：** 一个插件中最多可声明 **10 **个该插槽，系统中最多同时存在 **100 **个该插槽

## 使用

```yaml
modules:
  - id: ones-global-error-code-Q2fV
    title: 错误码
    moduleType: ones:global:error:code
    errorMessage:
      ConstraintViolation.BetaRelatedFieldNotDeletable: 该属性已被「Beta数据相关逻辑」调用，不可被删除
      ConstraintViolation.BetaRelatedFieldNotEditable: 该属性已被「Beta数据相关逻辑」调用，不可被编辑
```

**支持的配置项：**

- errorMessage（必填）

  - 类型：`Array`

  配置错误码对应的文案。
