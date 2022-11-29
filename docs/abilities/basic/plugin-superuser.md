# Plugin superuser

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

Each plugin has a dedicated superuser in ONES who has access to all ONES data. When the plugin uses certain abilities, it needs to use an ONES user with higher privileges, and you can directly use the plugin superuser without preconfiguring a specific user.

## Usage

### Get superuser information

For team-level plugins, you can directly call the API in the code to obtain the information of the plugin superuser.

```typescript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

When an organization-level plugin is installed, its own plugin superuser will be created in all teams under the organization. Therefore, when obtaining the superuser information of the plugin at the organization level, the UUID of a certain team needs to be passed in, and the superuser information of the plugin under the team will be obtained, otherwise the returned content is empty, and the usage method is as follows:

```typescript
const user = await Plugin.getPluginUser(teamUUID)
```

### Returned content

```json
"data": {
  "user_uuid": "PEFDXMK1",
  "org_uuid": "",
  "team_uuid": "3JjYLsNk",
  "app_uuid": "",
  "instance_uuid": "3fcca29f",
  "name": "pluginTest",
  "email": "3JjYLsNk_3fcca29f@ones.ai"
}
```
