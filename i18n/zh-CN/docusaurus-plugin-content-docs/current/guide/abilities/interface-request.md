---
sidebar_position: 4
---

# 接口请求

## 概述

在插件前端工程中，少不了需要请求接口获取数据，所以平台提供了一套接口请求库，可以帮你在插件前端内请求插件后端暴露的接口，同时也支持你请求外部接口。

## 使用

### 第一步：安装依赖

进入插件工程的`/web`目录，执行以下命令进行依赖安装：

```bash npm2yarn
npm install @ones-op/fetch
```

### 第二步：请求

- 请求插件接口

  ```tsx
  import { OPFetch } from '@ones-op/fetch'

  function fetchONESData() {
    return OPFetch('api/project/users/me')
  }
  ```

- 请求其他接口

  ```tsx
  import { Fetch } from '@ones-op/fetch'

  function fetchOutdoorData() {
    return Fetch('https://www.baidu.com')
  }
  ```

## 接口类型

### 请求插件后端接口

我们在`OPFetch`中内置了以下三个请求头，这样你就可以直接请求插件接口了。

```json
request: {
  headers: {
    'ones-check-id': team_uuid,
    'ones-check-point': 'team',
    'ones-plugin-id': 'instance_uuid',
  },
}
```

### 请求特定接口

如果你想请求以`*/api/plugin/*/plugin/*`开头的接口， `你需要设置特定的请求头`ones-plugin-id': 'built_in_apis`

```tsx
const response = await OPFetch({
  url: 'xxxxx',
  headers: {
    'ones-plugin-id': 'built_in_apis',
  },
})
```

### 请求 ONES 或者其他接口

可以直接使用我们提供的`Fetch`接口

## 其他

具体参数释义请参考：[@ones-op/fetch](../../reference/packages/fetch/fetch.md)
