---
sidebar_position: 5
---

# Data Acquisition

## Requirements

| ONES     |
| -------- |
| v3.6.25+ |

## Overview

In some functional scenarios of the plugin, you may need to get some context information about the location of the slot. For example, current user information, team information and so on. So we provide you with a set of data acquisition libraries that can help you get part of the data of ONES in the plugin.

This kind of contextual data acquisition is generally bound to the location of the slot, so the type of data you can get varies depending on the location of the slot. We divide this data into **global data** and **specific context data**.

**global data:** Contextual information available in all slots, such as plugin information, user information, organization information, team information, etc.

**specific context data:** Data that needs to be obtained only in a specific location can only be obtained in a specific slot.

## Usage

### Step 1: Installation dependency

Go to the `/web` directory and install the package with the following command:

```bash npm2yarn
npm install @ones-op/store
```

### Step 2: Call

For example, get the current team information

```tsx
import { useTeamInfo } = '@ones-op/store'

const { uuid, name } = useTeamInfo()
```

## Other

- For more information about the context that can be obtained by a slot, please see: [Slots](../../abilities/slot/slot.md)

- For specific usage examples and parameter definitions, please refer to: [@ones-op/store](../../reference/store/store.md)
