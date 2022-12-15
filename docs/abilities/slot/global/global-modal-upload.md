# Global upload modal slot

## Requirements

| **ONES** |
| :------: |
| v3.6.0+  |

## Overview

This is a global modal module, which will be shown before uploading a file.

:::caution

In the rich text editor (such as description), the slot will not be activated if the image is inserted by copying and pasting.

:::

The slots currently supported are as follows:

- [ones:global:modal:upload](#onesglobalmodalupload)

## Slots

#### ones:global:modal:upload

**Number limit：** Declare a maximum of **1** slots in each plugin, and up to **1** slots in the system.

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

- [preload](../../../reference/config/plugin#preload)
- [manual(required)](../../../reference/config/plugin#manual)
- events
