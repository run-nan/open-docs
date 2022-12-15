# Blank slot

## Requirements

| **ONES** |
| :------: |
| v3.6.0+  |

## Overview

This is a blank module, that runs outside of the system. The build rule of the page's URL is as follows:

```
${location.protocol}://${location.host}/plugin/${organization_id}/${team_id}/${service.app_id}/${service.version}/modules/${module_id}/index.html
```

:::caution

Because this page runs outside of the system, the package [`@ones-op/store`](../../../reference/packages/store/store.md) can't be used.

:::

The slots currently supported are as follows:

- [about:blank](#aboutblank)

## Slots

#### about:blank

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

## Usage

```yaml
modules:
  - id: about-blank-xHrr
    title: blank
    moduleType: about:blank
    entry: modules/about-blank-xHrr/index.html
```
