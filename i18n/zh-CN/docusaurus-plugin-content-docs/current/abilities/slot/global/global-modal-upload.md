# 全局弹窗插槽

## 要求

| **ONES** |
| :------: |
|   3.6+   |

## 概述

全局弹窗模块，用于在上传文件前展示

:::caution

在富文本编辑器里（如描述），通过复制粘贴的方式插入图片，插槽将不会被激活

:::

当前支持的插槽：

- [ones:global:modal:upload](#onesglobalmodalupload)

## 插槽

#### ones:global:modal:upload

**个数限制：** 一个插件中最多可声明 **1 **个该插槽，系统中最多同时存在 **1 **个该插槽

## 使用

```yaml
modules:
  - id: ones-global-modal-upload-rd74
    title: upload
    moduleType: ones:global:modal:upload
    preload: true
    manual: true
    entry: modules/ones-global-modal-upload-rd74/index.html
```

**支持的配置项：**

- [preload](../../../reference/config/plugin.md#preload)
- [manual（必填）](../../../reference/config/plugin.md#manual)
- events
