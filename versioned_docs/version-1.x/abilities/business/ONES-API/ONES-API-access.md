---
sidebar_position: 1
---

# ONES API access

## Requirements

| ONES    |
| :------ |
| v3.6.0+ |

## Overview

The ONES API access ability provides a method for plugins to access the ONES API. ONES API is all the API open to the outside world of ONES , such as viewing the details of an issue, adding issue and other API, which can be accessed to interact with ONES. Each plugin will generate a [super-admin](../../basic/super-admin.md) in the ONES, and the superuser will have access to all data when accessing ONES API.

## Usage

### Step 1: Installation dependency

Enter the `/backend` directory of the plugin project, and execute the following command for dependent installation:

```shell
npm i @ones-op/node-fetch
```

### Step 2: Access the ONES API

**API：** fetchONES

When developers request the ONES API, they will use the super admin by default. When calling the `fetchONES` method, enter `root=true` in the input parameter, indicating that the superuser is used to call the API.

**Example one**: Use super admin to call ONES API

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
  root: true, //default is true
  teamUUID: '',
})
```

If we do not want to request as a super admin, we should first set `root` to `false` in the code, and then add `Ones-User-Id` and `Ones-Auth-Token` to the request header. When the plugin is installed in the instance environment, the user will also bring the user's `Ones-User-Id` and `Ones-Auth-Token `when accessing the plugin API by clicking the page.Organization-level plugins need to add the `teamUUID` param.

**Ones-User-Id**: User's `uuid`

**Ones-Auth-Token**: `token` for successful login

**Example two：** Use other role to request the ONES API

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
    root: false, //default is true
    teamUUID: '',
  })

  if (response) {
    return response
  }
  return {
    body: {},
  }
}
```

## Other

For detailed parameters, please refer to: [@ones-op/node-fetch](../../../reference/packages/node-fetch/node-fetch.md)
