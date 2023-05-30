# 全局弹窗插槽

## 要求

|  ONES   |
| :-----: |
| v3.6.0+ |

## 概述

我们提供了一些插槽用于全局弹窗场景使用。

当前支持的插槽：

- [ones:global:modal:upload](#onesglobalmodalupload)
- [ones:global:modal](#onesglobalmodal)

## 插槽

#### ones:global:modal:upload

**描述：** 全局弹窗模块，用于在上传文件前展示。

**个数限制：** 一个插件中最多可声明 **1** 个该插槽，系统中最多同时存在 **1** 个该插槽

:::caution 注意

在富文本编辑器里（如描述），通过复制粘贴的方式插入图片，插槽将不会被激活

:::

#### ones:global:modal

**ONES 要求：** v3.11.40+

**描述：** 全局弹窗模块，用于全局弹窗交互或不需要界面的 [逻辑层载体](../../business/layout-custom-quick-action#2%E6%97%A0%E7%95%8C%E9%9D%A2%E7%BA%AF%E9%80%BB%E8%BE%91%E7%B1%BB%E5%9E%8B)

**个数限制：** 一个插件中最多可声明 **10** 个该插槽，系统中最多同时存在 **100** 个该插槽

:::caution 注意

目前暂只支持 [自定义视图快捷操作](../../business/layout-custom-quick-action) 场景。

:::

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

- [preload](../../../reference/config/plugin.yaml#preload)

  此选项建议设置为 `true`。

- [manual（必填）](../../../reference/config/plugin.yaml#manual)

  此选项必须设置为 `true`。

- [icon](../../../reference/config/plugin.yaml#icon)

  只适用于 `ones:global:modal`。

- event

  - 类型: `"modal:ok"|"modal:cancel"`

  只适用于 `ones:global:modal:upload`。

  `modal:ok` 表示用户可以继续上传文件。 `modal:cancel` 表示用户无法上传文件。

  :::caution 注意

  此选项在未来会被弃用。

  :::
