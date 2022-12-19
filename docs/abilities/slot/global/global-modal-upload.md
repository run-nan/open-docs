# Global upload modal slot

## Requirements

| **ONES** |
| :------: |
| v3.6.0+  |

## Overview

We provide some slots for the global popup scene to use.

The slots currently supported are as follows:

- [ones:global:modal:upload](#onesglobalmodalupload)
- [ones:global:modal](#onesglobalmodal)

## Slots

#### ones:global:modal:upload

**Number limit：** Declare a maximum of **1** slots in each plugin, and up to **1** slots in the system.

#### ones:global:modal

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

## Usage

#### ones:global:modal:upload

This is a global modal module, which will be shown before uploading a file.

:::caution

In the rich text editor (such as description), the slot will not be activated if the image is inserted by copying and pasting.

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

**Supported config options：**

- [preload](../../../reference/config/plugin#preload)
- [manual(required)](../../../reference/config/plugin#manual)
- events

#### ones:global:modal

| **ONES**  |
| :-------- |
| v3.11.40+ |

Global popup window module, used for global popup window interaction or [logic layer carrier](../../business/layout-custom-quick-action#2%E6%97%A0%E7%95%8C%E9%9D%A2%E7%BA%AF%E9%80%BB%E8%BE%91%E7%B1%BB%E5%9E%8B) that does not require an interface.

:::caution

In the yaml configuration, `preload`, `manul` values must be set to `true`, otherwise the slot cannot be activated!
Currently, only the [Custom Layout Shortcut](../../business/layout-custom-quick-action) scenario is supported.

:::

```yaml
modules:
  - id: ones-global-modal-wKG8
    title: modal
    moduleType: ones:global:modal
    entry: modules/ones-global-modal-wKG8/index.html
    preload: true
    manual: true
    icon: logo.svg # corresponding file web/public/logo.svg
```

**Supported config options：**

- [preload(required)](../../../reference/config/plugin.yaml#preload)
- [manual(required)](../../../reference/config/plugin.yaml#manual)
- [icon](../../../reference/config/plugin.yaml#icon)
