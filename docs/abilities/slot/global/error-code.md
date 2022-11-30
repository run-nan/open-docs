# Error code slot

## Requirements

| **ONES** |
| :------: |
|   3.6+   |

## Overview

This is a global error code module, used to intercept specified error codes to show customized information.

:::caution

This slot will be deprecated in the future, use the plugin's standard error handling.

:::

The slots currently supported are as follows:

- [ones:global:error:code](#onesglobalerrorcode)

## Slots

#### ones:global:error:code

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

## Usage

```yaml
modules:
  - id: ones-global-error-code-Q2fV
    title: 'error code'
    moduleType: ones:global:error:code
    errorMessage:
      ConstraintViolation.BetaRelatedFieldNotDeletable: This attribute cannot be deleted
      ConstraintViolation.BetaRelatedFieldNotEditable: This attribute cannot be edited
```

**Supported config options：**

- errorMessage(required)

  - type: `Array`

  Configure the error text corresponding to the error code.
