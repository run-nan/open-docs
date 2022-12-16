# 全局弹窗插槽

## 要求

| **ONES** |
| :------: |
| v3.6.0+  |

## 概述

我们提供了一些插槽用于全局弹窗场景使用。

当前支持的插槽：

- [ones:global:modal:upload](#onesglobalmodalupload)
- [ones:global:modal](#onesglobalmodal)

## 插槽

#### ones:global:modal:upload

**个数限制：** 一个插件中最多可声明 **1** 个该插槽，系统中最多同时存在 **1** 个该插槽

#### ones:global:modal

**个数限制：** 一个插件中最多可声明 **10** 个该插槽，系统中最多同时存在 **100** 个该插槽

## 使用

#### ones:global:modal:upload

全局弹窗模块，用于在上传文件前展示。

:::caution

在富文本编辑器里（如描述），通过复制粘贴的方式插入图片，插槽将不会被激活

:::

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

#### ones:global:modal

| **ONES**  |
| :-------- |
| v3.11.40+ |

全局弹窗模块，用于全局弹窗交互或不需要界面的 [逻辑层载体](../../business/layout-custom-quick-action#2%E6%97%A0%E7%95%8C%E9%9D%A2%E7%BA%AF%E9%80%BB%E8%BE%91%E7%B1%BB%E5%9E%8B)

:::caution

yaml 配置中，`preload`、`manul` 值必须设置成 `true`，否则插槽无法激活！
目前暂只支持 [自定义视图快捷操作](../../business/layout-custom-quick-action) 场景。

:::

```yaml
modules:
  - id: ones-global-modal-wKG8
    title: modal
    moduleType: ones:global:modal
    entry: modules/ones-global-modal-wKG8/index.html
    preload: true
    manual: true
    icon: logo.svg # 对应文件 web/public/logo.svg
```

**支持的配置项：**

- [preload（必填）](../../../reference/config/plugin.md#preload)
- [manual（必填）](../../../reference/config/plugin.md#manual)
- [icon](../../../reference/config/plugin.md#icon)
