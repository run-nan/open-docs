---
sidebar_position: 3
---

# Modify script properties

## Require

| ONES      |
| :-------- |
| v3.16.18+ |

## Overview

After we create the script attribute, we can make secondary modifications to the script attribute. Currently, the name of the script attribute can be modified.

### Capability range

Products, work items, single selection, multiple selection, floating point script attributes under the project

## use

Add the capability through the OP tool, modify the configuration related to the capability, and complete the business logic in the update script attribute method. The relevant steps are as follows.

### Step 1: Add and use capabilities through OP tools

Use the command line to enter the OP command in the `plug-in root directory` to add capabilities (this command requires OP tool version 1.0 and above)

```shell
npx op add ability
```

Check and add `update-script-field@1.0.0`

<br />
The OP tool will ask whether to use the default value. Just select Yes. The OP tool will add the following content to the plug-in.

Add a new file `update-script-field.ts` in the plugin backend

```typescript title="backend/src/script-field-float.ts"
import type {
  Relation,
  UpdateFieldGroupRequest,
  UpdateScriptFieldRequest,
} from '@ones-op/node-ability'
import { Field, FieldTypeEnum, PoolEnum, AbilityError } from '@ones-op/node-ability'
import { Logger } from '@ones-op/node-logger'
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'

export async function updateFieldName(request: PluginRequest): Promise<PluginResponse> {
  const u: UpdateScriptFieldRequest = {
    Pool: PoolEnum.Product,
    FieldUUID: 'fieldUUID',
    TeamUUID: 'teamUUID',
    Name: 'newFieldName',
  }
  try {
    const resp = await Field.UpdateScriptField(u)
  } catch (e) {
    if (e instanceof AbilityError) {
      Logger.error('err', e)
    }
  }
  return {
    body: {
      res: 'hello world',
    },
  }
}
```

**Field.UpdateScriptFieldRequest parameter introduction**

| Parameters | Type   | Description                                                                                                     |
| :--------- | :----- | :-------------------------------------------------------------------------------------------------------------- |
| Pool       | string | The context to which the script attribute belongs, including products, projects, and work items                 |
| FieldUUID  | string | Script attribute UUID                                                                                           |
| TeamUUID   | string | UUID of the team to which the attribute belongs,only takes effect when the plug-in is at the organization level |
| Name       | string | The new name of the script property                                                                             |

### Step 2: Just modify the logic in the function correctly
