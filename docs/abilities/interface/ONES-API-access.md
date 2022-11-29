# ONES API access

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

The ONES API access ability provides the plugin with ONES API access to API.

ONES API is the open API of ONES, such as viewing the details of a issue, adding issue and so on. You can interact with ONES by accessing these API. Each plugin generates a superuser in the system (see basic ability: [Plugin superuser](../basic/plugin-superuser)), and the superuser has access to all data when accessing the API provided by the ONES.

## Usage

### SDK document:[@ones-op/node-fetch](../../reference/node-fetch/node-fetch.md)

### Step 1: Installing dependencies

Run the following instructions under the plugin project directory to install dependencies. (note that this ability is used by back-end by default, and the usage directory is under `backend`)

```shell
cd backend
npm install @ones-op/node-fetch
```

### Step 2: Access the ONES API

**API：** fetchONES

**ONES API access instructions:** developers will use plugin superuser by default when requesting ONES API. When calling the `fetchONES` API request method, the input parameter will include `root=true (the default value of root is true)`, indicating the use of superuser to call the API.

**Example one**: Use plugin superuser to call ONES API

```typescript
import { fetchONES } from '@ones-op/node-fetch'

const response = await fetchONES({
  path: `/team/${globalThis.onesEnv.teamUUID}/items/view`,
  method: 'POST',
  body: {
    query: {
      must: [
        { equal: { item_type: 'field' } },
        { in: { pool: ['project'] } },
        { in: { 'context.type': ['team'] } },
      ],
    },
    view: ['[default]'],
  },
  root: true, //Default is true
})
```

If we do not want to request as a plugin superuser, we should first set `root` to `false` in the code, and then add `Ones-User-Id` and `Ones-Auth-Token` to the request header (for more information, please see [API document](https://docs.partner.ones.cn/docs/ones/readme/)). When the plugin is installed in the instance environment, the user will also bring the user's `Ones-User-Id` and `Ones-Auth-Token `when accessing the plugin API by clicking the page.

**Example two：** Use other role to call the ONES API

```typescript
import { fetchONES } from '@ones-op/node-fetch'

export async function getUserme(
  request: PluginRequest<Record<string, any>>
): Promise<PluginResponse> {
  let userUUID = ''
  let userToken = ''
  if (request.headers['Ones-User-Id'] != null) {
    userUUID = request.headers['Ones-User-Id']
    userToken = request.headers['Ones-Auth-Token']
  }
  const response = await fetchONES({
    path: `/users/me`,
    method: 'GET',
    headers: {
      'Ones-User-Id': [userUUID],
      'Ones-Auth-Token': [userToken],
    },
    root: false, //Default is true
  })

  if (response) {
    return response
  }
  return {
    body: {},
  }
}
```
