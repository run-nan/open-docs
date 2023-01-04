# 空白页插槽

## 要求

| **ONES** |
| :------: |
| v3.6.0+  |

## 概述

空白页模块，可脱离系统独立访问，插件安装后的页面 URL 为：

如果是团队级别插件。

```
${location.protocol}://${location.host}/plugin/${组织id}/${团队id}/${service.app_id}/${service.version}/modules/${模块id}/index.html
```

如果是组织级别插件。

```
${location.protocol}://${location.host}/plugin/${组织id}/${service.app_id}/${service.version}/modules/${模块id}/index.html
```

:::caution

因为该插槽脱离系统独立访问，所以无法使用 [`@ones-op/store`](../../../reference/packages/store/store.md) 获取系统数据

:::

当前支持的插槽：

- [about:blank](#aboutblank)

## 插槽

#### about:blank

**个数限制：** 一个插件中最多可声明 **10 **个该插槽，系统中最多同时存在 **100 **个该插槽

## 使用

```yaml
modules:
  - id: about-blank-xHrr
    title: blank
    moduleType: about:blank
    entry: modules/about-blank-xHrr/index.html
```
