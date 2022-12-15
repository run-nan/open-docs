# ONES 接口访问

## 要求

| **ONES** |
| -------- |
| 3.6+     |

## 概述

接口访问能力为插件提供了访问 ONES API 的方法。 ONES API 是 ONES 标品所有对外开放的接口，比如查看某工作项详情，添加工作项等接口，可通过访问这些接口与 ONES 标品进行交互。每个插件都会在系统中生成一个[插件超级用户](../../basic/super-admin.md)，超级用户在访问 ONES API 时，会拥有所有数据的访问权限。

## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm install @ones-op/node-fetch
```

### 第二步：访问 ONES API

**API：** fetchONES

开发者在请求 ONES API 的时候，会默认使用插件超级用户，在调用 `fetchONES` 方法时，入参中带入`root=true`，表示使用超级用户调用接口。

**示例 1：** 使用插件超级用户调用 ONES API

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
  root: true, //默认为true
})
```

如果我们不想以插件超级用户身份请求，那么我们首先要在代码中将 `root` 设置为 `false`，然后在请求头中添加`Ones-User-Id`、`Ones-Auth-Token`两个参数即可。当插件被安装到实例环境后，用户通过点击页面访问插件接口时会自行带上`Ones-User-Id`和`Ones-Auth-Token`。

**Ones-User-Id**: 用户 `uuid`

**Ones-Auth-Token**: 登录成功的 `token`

**示例 2：** 使用其他用户调用 ONES API

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
    root: false, //默认为trueß
  })

  if (response) {
    return response
  }
  return {
    body: {},
  }
}
```

## 其他

具体参数释义请参考：[@ones-op/node-fetch](../../../reference/packages/node-fetch/node-fetch.md)
