---
sidebar_position: 5
description: Multiple request schemes, request any data you want.
---

# Request

## Overview

In the plugin project, it is necessary to request the interface to obtain data, so the platform provides the request library [@ones-op/fetch](../../reference/packages/fetch/fetch.md). So before you make a request, you need to know who you are asking for. Then choose the appropriate ability to use.

In order to let you quickly call API, we provide you with `OPFetch`, `Fetch` and other methods. In this way, you don't have to write repetitive information such as request headers in each request, which simplifies your development workload.

## Usage

### Frontend request

The following will take `OPFetch` as an example to show you how to send a request to the plugin backend.

:::info
We recommend

- **OPFetch** API related to ONES
- **Fetch** Other API

:::

#### Step 1: Installation dependency

Enter the `/web` directory of the plugin project, and execute the following command for dependent installation:

```bash npm2yarn
npm install @ones-op/fetch
```

#### Step 2: Request

When you use ONES CLI to create a plugin project, you register an API: **hello** with ONES by default.

A new configuration has been added to `plugin.yaml`:

```yaml title="/config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /hello
    function: hello
```

Injected the implementation of API into `index.ts`:

```tsx title="/backend/src/index.ts"
// example function
export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello ======= Request successful')
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  }
}
```

Next, we use `OPFetch` to request this API.

```tsx
import { Button } from '@ones-design/core'
import { OPFetch } from '@ones-op/fetch'
import React from 'react'

export const App = () => {
  const handleFetchHello = () => {
    const response = OPFetch({
      url: '/project/api/project/hello',
      method: 'POST',
    })
  }

  return (
    <div>
      <Button onClick={handleFetchHello}>Fetch hello</Button>
    </div>
  )
}
```

For specific API usage and parameter resolution, please refer to [@ones-op/fetch](../../reference/packages/fetch/fetch.md)

### Backend request

The following will take `OPFetch` as an example to teach you how to send a request to ONES.

:::info
We recommend

- **OPFetch** API related to ONES
- **Fetch** Other API

:::

We request [ONES Project](../../api/project/project.md#根据项目-id-获取项目列表) data in hello by modifying the **hello** API above.

#### Step 1: Installation dependency

Enter the `/backend` directory of the plugin project, and execute the following command for dependent installation:

```bash npm2yarn
npm install @ones-op/fetch
```

#### Step 2: Request

Modify the code implementation of `index.ts`.

```tsx title="/backend/src/index.ts"
import { OPFetch, isFetchError } from '@ones-op/fetch'
import { Logger } from '@ones-op/node-logger'
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'

export async function hello(request: PluginRequest): Promise<PluginResponse> {
  try {
    const response = await OPFetch<ProjectResponseBody>({
      path: `/team/${globalThis.onesEnv.teamUUID}/projects/my_project`,
      method: 'GET',
      root: true, // default is true
    })
    return {
      body: {
        project: response.data?.projects,
      },
    }
  } catch (error) {
    Logger.info('fetch project error. the error message: ', error)
    if (isFetchError(error)) {
      return {
        statusCode: error?.status ?? 500,
        body: {
          message: error?.message ?? 'unknown error',
        },
      }
    } else {
      return {
        statusCode: 500,
        body: {
          message: `[unknown error]: ${error?.message}`,
        },
      }
    }
  }
}
```

You may have noticed that we brought a `root: true` when we requested it, and also told you that its default value is: **true**, is actually what we use to distinguish permissions. If you use an ordinary user to make a request, you will be required to bring two request headers, `Ones-User-Id` and `Ones-Auth-Token`. But currently, you can only obtain these two request headers in the following two ways.

- When making a frontend request, put `Ones-User-Id` and `Ones-Auth-Token` in the request header, and then obtain the request header from the request object.
- Request ONES [Get login information](../../api/auth/auth.md#获取登录信息) API.

For other information about super admin, you can refer to [super admin](../../abilities/basic/super-admin.md) and [@ones-op/fetch](../../reference/packages/fetch/fetch.md).

:::note
If you want to see the old backend request library usage, you can refer to [@ones-op/node-fetch](../../reference/legacy-packages/node-fetch/node-fetch.md).
:::
