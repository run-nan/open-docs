---
sidebar_position: 3
---

# 接口请求

我们提供了一套接口请求库，可以帮你在插件前端内请求插件后端暴露的接口，同时也支持你请求外部接口。

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/fetch
```

## 使用

```tsx
import { OPFetch, Fetch } from '@ones-op/fetch'

function fetchONESData() {
  return OPFetch('api/project/users/me')
}

function fetchOutdoorData() {
  return Fetch('https://www.baidu.com')
}
```

## API

请查阅 [@ones-op/fetch](../../.../../api/packages/fetch.md) 库 API 文档。
