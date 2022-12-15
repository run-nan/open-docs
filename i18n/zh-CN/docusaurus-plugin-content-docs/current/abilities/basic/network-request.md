# 网络请求

## 要求

| **ONES** |
| -------- |
| 3.6+     |

## 概述

网络请求能力为插件提供了访问外部服务的 API。外部服务是 ONES 系统之外能够直接访问到一些服务，例如谷歌、推特等常见服务，有了该能力可方便插件与外部服务进行交互。

## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm install @ones-op/node-fetch
```

### 第二步：请求

**API：** fetchHttp

调用`fetchHttp`并传入`url`和请求方法对外部接口进行访问，详细参数可参照 [SDK](../../reference/packages/node-fetch/node-fetch.md) 文档。

**示例代码：**

```typescript
import { fetchHttp } from '@ones-op/node-fetch'

async function callGoogle() {
  const response = await fetchHttp({
    url: 'https://www.google.com',
    method: 'GET',
  })
  return response
}
```
