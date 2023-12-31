# @ones-op/fetch

[![](https://npm.partner.ones.cn/badge/v/@ones-op/fetch.svg)](https://npm.partner.ones.cn/package/@ones-op/fetch)

我们提供了一套支持前后端的接口请求库，可以帮你在插件内请求：ONES 接口，插件接口，或者外部接口。

:::note
自 “@ones-op/fetch” 0.6.0 版本起，“@ones-op/fetch” 库通过适配器（Adapter）的方式，集成了 “@ones-op/node-fetch” 功能，你可以像前端一样在插件后端里使用相同的 API。
:::

## 要求

| **@ones-op/fetch** |
| ------------------ |
| v0.6.0+            |

## 安装

进入 `/web` 与 `/backend` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/fetch
```

## 使用

**后端：**

```ts title="backend/index.ts"
import { OPFetch } from '@ones-op/fetch'

// 在插件后端请求 ONES 接口
OPFetch('/users/me').then((response) => {
  console.log('me: ', response.data)
})

// 在插件后端通过 `/wiki` 前缀，请求 ONES WIKI 接口
OPFetch(`/wiki/team/${teamUUID}/space/${spaceUUID}/page/${pageUUID}`).then((response) => {
  console.log('page: ', response.data)
})

// 在插件后端请求外部接口
OPFetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('todo: ', response.data)
})
```

**前端：**

```tsx title="web/index.tsx"
import { OPFetch } from '@ones-op/fetch'

const fetchProject = OPFetch.create({ baseURL: '/project/api/project' })

// 在插件前端页面请求 ONES 接口
fetchProject('/users/me').then((response) => {
  console.log('me: ', response.data)
})

// 在插件前端页面请求插件接口
fetchProject('/hello').then((response) => {
  console.log('hello: ', response.data)
})

// 在插件前端页面请求外部接口
OPFetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('todo: ', response.data)
})
```

## 索引

| API                               | 描述                               | 限制         |
| --------------------------------- | ---------------------------------- | ------------ |
| [OPFetch](#OPFetch)               | 默认 ONES 与插件的请求实例         | 无           |
| [Fetch](#Fetch)                   | 默认请求实例                       | 无           |
| [isFetchError](#isFetchError)     | 判断请求是否出错                   | 无           |
| [isOPError](#isOPError)           | 判断是否是开放平台或插件的接口错误 | 仅支持浏览器 |
| [OPErrorHandler](#OPErrorHandler) | 标准开放平台或插件接口错误处理方法 | 仅支持浏览器 |

## APIs

### OPFetch {#OPFetch}

**ONES 标品与插件** 的默认请求实例，继承自 [`Fetch`](#Fetch)，并额外添加了 ONES 以及插件相关的配置，具体使用请参阅 [实例方法](#Instance)，此节仅作补充介绍。

`OPFetch` 实例内置的相关配置，会被实例 `create` 方法继承至子实例。

<details>
<summary>内置内部通信请求 ONES 接口方法适配器（后端）</summary>

我们将内部通信请求 ONES 接口方法（原 “@ones-op/node-fetch” 的 `fetchONES` 方法）通过适配器的方式，集成进了 `OPFetch`。如果你的请求参数是一个相对路径，则会由内部通信请求替代 `http` 为你请求 ONES 接口。

</details>

<details>
<summary>内置插件所需请求头信息（浏览器）</summary>

我们在 `OPFetch` 中内置了请求当前插件所必须的请求头，一般来说，你在请求 ONES 接口以及当前插件的后端接口时，你无需关心此处的请求头。

| 键名             | 值             | 描述                                  |
| ---------------- | -------------- | ------------------------------------- |
| ones-check-id    | `teamUUID`     | 当前团队 UUID                         |
| ones-check-point | `'team'`       | `ones-check-id` 类型，固定值 `'team'` |
| ones-plugin-id   | `instanceUUID` | 当前插件实例 UUID                     |

</details>

### Fetch {#Fetch}

默认请求实例，仅内置了与 **业务无关** 的通用配置与拦截器。你可以直接使用，或者基于它创建多个请求实例，具体使用请参阅 [实例方法](#Instance)，此节仅作补充介绍。

`Fetch` 实例内置的相关配置，会被实例 `create` 方法继承至子实例。

#### 拦截器

内置的可继承拦截器，会被实例 `create` 方法继承至子实例。

<details>
<summary>GET 请求参数别名</summary>

在正常的业务中，我们认为不应该会出现 `GET` 请求需要带 `body` 的情况。因此，我们为你内置了一个 `ParamsAlias` 的可继承拦截器。

在 `GET` 请求时，`params` 如果为空，将会尝试取 `data` 作为 `params`，即：`params: params || data`。

示例：

```tsx
// fetch: api/project/users/me?timestamp=1671015013733
Fetch('api/project/users/me', { method: 'GET', data: { timestamp: Date.now() } })
```

</details>

### isFetchError {#isFetchError}

判断请求是否出错。

#### 参数

| 参数  | 说明           | 类型      | 必填 | 默认值 |
| ----- | -------------- | --------- | ---- | ------ |
| error | 请求捕获的错误 | `unknown` | 是   |        |

#### 返回

| 说明         | 类型      |
| ------------ | --------- |
| 请求是否出错 | `Boolean` |

#### 类型

```ts
function isFetchError<T = any, D = any>(error: any): error is FetchError<T, D>
```

### isOPError(浏览器) {#isOPError}

根据错误的数据，判断是否是开放平台或插件的标准接口错误。

判断依据：`/^(plugin|platform)\./i.test(error?.response?.data?.model ?? response.model)`。

#### 参数

| 参数                          | 说明                     | 类型                                             | 必填 | 默认值 |
| ----------------------------- | ------------------------ | ------------------------------------------------ | ---- | ------ |
| fetchError/fetchErrorResponse | 接口返回的错误（或数据） | `FetchError`/[`OPErrorData`](#Types.OPErrorData) | 是   |        |

#### 返回

| 说明                               | 类型      |
| ---------------------------------- | --------- |
| 是否是开放平台或插件的标准接口错误 | `Boolean` |

#### 类型

```ts
function isOPError(error: FetchError<{ model?: string }> | { model?: string }): boolean
```

### OPErrorHandler(浏览器) {#OPErrorHandler}

开放平台或插件接口错误标准处理方法。

根据传入标准错误数据的 `type` 和 `reason` 内容，`toast` 弹窗提示。

#### 参数

| 参数                          | 说明                     | 类型                                             | 必填 | 默认值 |
| ----------------------------- | ------------------------ | ------------------------------------------------ | ---- | ------ |
| fetchError/fetchErrorResponse | 接口返回的错误（或数据） | `FetchError`/[`OPErrorData`](#Types.OPErrorData) | 是   |        |

#### 类型

```ts
function OPErrorHandler(response: OPErrorData) => void
```

### <Instance\> {#Instance}

请求实例方法介绍，非实际导出 API。

每个实例可直接作为方法调用，同时也可以对实例上挂载的属性进行调用。

#### 类型

```tsx
interface FetchInstance<E extends object = EmptyObj> extends AxiosInstance {
  <T = any, R = FetchResponse<T>, D = any>(config: FetchConfig<D, E>): Promise<R>
  <T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchConfig<D, E>): Promise<R>
  create: FetchCreate<E>
}
```

#### <Instance\>.create

创建请求子实例，第二参数支持传入 **可继承的** 拦截器，在后续基于此实例 `create` 时，会将该参数传入的拦截器继承给子实例。

##### 参数

| 参数                    | 说明             | 类型                                                            | 必填 | 默认值 |
| ----------------------- | ---------------- | --------------------------------------------------------------- | ---- | ------ |
| config                  | 请求配置         | [`FetchConfig`](#fetchconfig)                                   | 否   |        |
| inheritableInterceptors | 可被继承的拦截器 | [`FetchInheritableInterceptors`](#fetchinheritableinterceptors) | 否   |        |

##### 返回

| 说明         | 类型                         |
| ------------ | ---------------------------- |
| 新的请求实例 | [`FetchInstance`](#Instance) |

##### 类型

```tsx
interface FetchCreate<E extends object = EmptyObj> {
  (
    config?: FetchConfig<any, E>,
    inheritableInterceptors?: FetchInheritableInterceptors<E>,
  ): FetchInstance<E>
}
```

##### 示例

```ts
import { OPFetch } from '@ones-op/fetch'

const config = { baseURL: 'https://some-domain.com/api' }

const inheritableInterceptors = {
  // request inheritable interceptor
  request: [
    [
      function (config, instance) {
        // Do something before request is sent
        return config
      },
      function (error, instance) {
        // Do something with request error
        return Promise.reject(error)
      },
    ],
    // [function (config) { return config }]
    // [, function (error) { return Promise.reject(error) }]
  ],
  // response inheritable interceptor
  response: [
    [
      function (response, instance) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      },
      function (error, instance) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
      },
    ],
  ],
}

const request = OPFetch.create(config, inheritableInterceptors)
```

#### <Instance\>.<other\>

`@ones-op/fetch` 最终继承自 [axios](https://axios-http.com/) 库，其余未列出的 API 代表未涉及或影响到，你可以直接参考 [axios 引用版本 API 文档](https://github.com/axios/axios/tree/v1.x#axios-api) 使用。

## 类型

### FetchError {#Types.FetchError}

Fetch 库请求错误类型。

```tsx
class FetchError<T = unknown, D = any> extends Error {
  config?: FetchRequestConfig<D>
  code?: string
  request?: any
  response?: FetchResponse<T, D>
  status?: number
  cause?: Error
}
```

### OPErrorData {#Types.OPErrorData}

ONES 开放平台与插件标准错误类型定义。

```tsx
interface OPErrorData {
  model: string
  reason: string
  type: 'error' | 'warning' | 'info'
  closable?: boolean
}
```

### FetchInheritableInterceptors

可继承的拦截器与普通拦截器稍有不同，它将作用于当前请求实例以及当前请求实例创建的子实例。

因为请求实例是不固定的，因此我们在拦截器方法的第二个入参里面传入了当前实例对象，以便于你处理一些与请求实例相关的操作。

为了便于区分，可继承的拦截器只能通过 `create` 方法的第二个参数传入，实例后续添加的拦截器均不会被继承。

```ts
interface FetchInheritableInterceptors<E extends object = EmptyObj> {
  request?: FetchInheritableInterceptor<FetchConfig<any, E>>[]
  response?: FetchInheritableInterceptor<FetchConfig<any, E>>[]
}

type FetchInheritableInterceptor<T = FetchConfig, D = any> =
  | [(fulfilledValue: T, instance: FetchInstance) => T]
  | [
      (fulfilledValue: T, instance: FetchInstance) => T,
      (rejectedError: D, instance: FetchInstance) => D,
    ]
```

### FetchConfig

这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `GET` 方法。

:::note
插件后端内部通信请求 ONES 接口方法适配器下称：Plugin Node Adapter。具体描述请查看 [OPFetch](#OPFetch) 介绍。
:::

```ts
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // 团队 `uuid`,组织级别插件需要携带该参数
  // Plugin Node Adapter 专属
  teamUUID: 'yqwqqwq',

  // 是否使用插件超级用户
  // Plugin Node Adapter 专属
  root: true, // 默认值

  // `autoErrorToast` 用于控制是否自动弹窗展示插件接口或者平台接口的错误信息
  // 使用时需要插件后端配合使用对应的 `node-error` sdk
  // `node-error` 使用方法可参考 https://developer.ones.com/docs/reference/packages/node-error/
  // 浏览器 `OPFetch` 方法专属
  autoErrorToast: true // 默认值

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理

    return data;
  }],

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: plain object, FormData, File, Blob
  // - Node 专属: plain object, Stream, Buffer
  // - Plugin Node Adapter 专属: Buffer
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  // 浏览器专属
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  // 不支持 Plugin Node Adapter
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'json', 'text'
  // 浏览器专属: 'document', 'stream', 'blob'
  // Node.js 专属: 'document', 'stream'
  responseType: 'json', // 默认值

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  // 不支持 Plugin Node Adapter
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  // 不支持 Plugin Node Adapter
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件
  // 浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅 Node.js 与 Plugin Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  // Node.js 专属
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  // Node.js 专属
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` define a custom agent to be used when performing http
  // `httpAgent` 和 `httpsAgent` 可以自定义代理
  // 浏览器或者node环境，可以配置代理，如下所示
  // `keepAlive` 不会默认开启
  // Node.js 专属
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  // Node.js 专属
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // 详情请查阅 https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` 控制 `response body`是否需要被压缩
  // 如果设置为 `true` 将会自动移除header中的 `content-encoding`
  // 压缩所有响应
  // Node.js 专属（XHR 无法关闭解压）
  decompress: true // 默认值
}
```

## FAQ

### 为什么没有使用 [node-error 错误处理](../../packages/node-error)，当接口异常时，仍然会自动弹窗？

因为在 `autoErrorToast` 设置为 `true`时，会通过 `isOPError` 判断是否需要自动错误弹窗，所以当自定义返回的数据符合判断条件，也会自动错误弹窗。

### 如何跨插件请求接口？

首先，我们**强烈不推荐**你这么做，你更应该考虑将两个插件合并成一个插件。

但是，如果你有不得不这么做的理由。在插件前端里，你可以手动传入目标插件的 `ones-plugin-id` 请求头进行请求；在插件后端里，你需要传入绝对路径的请求 URL，`OPFetch`/`Fetch` 内部将会通过 `http` 模块为你请求（注意，你需要自行传入插件所需的所有[请求头](#OPFetch)）。
