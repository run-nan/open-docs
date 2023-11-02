# Global upload modal slot

## Requirements

|  ONES   |
| :-----: |
| v3.6.0+ |

## Overview

We provide some slots for the global popup scene to use.

The slots currently supported are as follows:

- [ones:global:modal:upload](#onesglobalmodalupload)
- [ones:global:modal](#onesglobalmodal)

## Slots

#### ones:global:modal:upload

**description：** This is a global modal module, which will be shown before uploading a file.

**Number limit：** Declare a maximum of **1** slots in each plugin, and up to **1** slots in the system.

:::caution

In the rich text editor (such as description), the slot will not be activated if the image is inserted by copying and pasting.

:::

#### ones:global:modal

**ONES Requirement:** v3.11.40+

**description：** Global popup window module, used for global popup window interaction or [logic layer carrier](../../business/project/layout-custom-quick-action#2%E6%97%A0%E7%95%8C%E9%9D%A2%E7%BA%AF%E9%80%BB%E8%BE%91%E7%B1%BB%E5%9E%8B) that does not require an interface.

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

:::caution

Currently, only the [Custom Layout Shortcut](../../business/project/layout-custom-quick-action) scenario is supported.

:::

## Usage

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

- [preload](../../../reference/config/plugin.yaml#preload)

  This option is recommended to be set to `true`.

- [manual(required)](../../../reference/config/plugin.yaml#manual)

  This option must be set to `true`.

- [icon](../../../reference/config/plugin.yaml#icon)

  Works for `ones:global:modal`.

- event

  - type: `"modal:ok"|"modal:cancel"`

  Works for `ones:global:modal:upload`.

  `modal:ok` means the user can continue to upload the file. `modal:cancel` means the user can't upload the file.

  :::caution

  This option will be deprecated in the future.

  :::
