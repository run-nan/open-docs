---
sidebar_position: 5
description: 多种请求方案，请求任何你想要的数据。
---

# 接口请求

## 概述

在插件工程中，少不了需要请求接口获取数据，所以平台提供了请求能力包 [@ones-op/fetch](../../reference/packages/fetch/fetch.md)。在进行请求之前，你先要了解请求你请求的对象是什么？然后再选择合适的能力来使用。

为了让你快捷的调用 API 我们给你提供了 `OPFetch`、`Fetch` 等方法，这样你就不需要在每个请求中编写如请求头之类的重复信息，简化了你的开发工作量。

<!-- 在 [@ones-op/fetch](../../reference/packages/fetch/fetch.md) 这个能力包中，我们还内置了一些标准错误处理，帮助你轻松应对各种错误场景。 -->

## 使用

### 前端请求

下面将以 `OPFetch` 为例，教你如何给插件后端发送请求。

:::info
我们推荐

- **OPFetch** 与 ONES 相关 API
- **Fetch** 其他 API

:::

#### 第一步：安装依赖

进入插件工程的 `/web` 目录，执行以下命令进行依赖安装：

```bash npm2yarn
npm install @ones-op/fetch
```

#### 第二步：请求

使用 ONES CLI 创建插件工程的时候，默认帮你往 ONES 注册了一个 API：**hello**。

往 `plugin.yaml` 中新增了一段配置：

```yaml title="/config/plugin.yaml"
apis:
  - type: addition
    methods:
      - POST
    url: /hello
    function: hello
```

往 `index.ts` 中注入了 API 的实现：

```tsx title="/backend/src/index.ts"
// example function
export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello ======= 请求成功')
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  }
}
```

接下来我们就是用 `OPFetch` 来请求这个接口。

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

具体 API 使用方法及参数解析请参照：[@ones-op/fetch](../../reference/packages/fetch/fetch.md)。

### 后端请求

下面将以 `OPFetch` 为例，教你如何给 ONES 发送请求。

:::info
我们推荐

- **OPFetch** 与 ONES 相关 API
- **Fetch** 其他 API

:::

我们通过改造上面的 **hello** API，在 hello 中请求 [ONES Project](../../api/project/project.md#根据项目-id-获取项目列表) 的数据。

#### 第一步：安装依赖

进入插件工程的 `/backend` 目录，执行以下命令进行依赖安装：

```bash npm2yarn
npm install @ones-op/fetch
```

#### 第二步：请求

修改 `index.ts` 的代码实现。

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

你可能注意到了，在请求时我们带了一个 `root: true`，并且还告诉你它默认值就是： **true**， 其实这是我们用来区分权限的。如果你使用普通用户进行请求，那么会要求你带上 `Ones-User-Id` 和 `Ones-Auth-Token` 这两个请求头，但是目前你只有以下两个方式可以获取到这两个请求头。

- 前端请求时，在请求头中带上 `Ones-User-Id` 和 `Ones-Auth-Token`，然后从 request 对象中获取该请求头。
- 请求 ONES [获取登录信息](../../api/auth/auth.md#获取登录信息) API。

有关超级用户的其他信息，你可以参考[超级用户](../../abilities/basic/super-admin.md) 和 [@ones-op/fetch](../../reference/packages/fetch/fetch.md)。

:::note
如果你想看旧的后端请求库用法，你可以参考 [@ones-op/node-fetch](../../reference/legacy-packages/node-fetch/node-fetch.md)。
:::
