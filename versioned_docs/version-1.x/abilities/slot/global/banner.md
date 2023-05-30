# Top banner slot

## Requirements

|  ONES   |
| :-----: |
| v3.6.0+ |

## Overview

The module is at the top of the system and is used to display the global announcement information.

The slots currently supported are as follows:

- [ones:global:banner](#onesglobalbanner)

## Slots

#### ones:global:banner

**Number limit：** Declare a maximum of **1** slots in each plugin, and up to **1** slots in the system.

## Usage

```yaml
modules:
  - id: ones-global-banner-evcP
    title: banner
    moduleType: ones:global:banner
    entry: modules/ones-global-banner-evcP/index.html
```
