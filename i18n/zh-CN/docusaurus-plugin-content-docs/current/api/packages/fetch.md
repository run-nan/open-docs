---
sidebar_position: 2
---

# @ones-op/fetch

[![](https://npm.partner.ones.ai/badge/v/@ones-op/fetch.svg)](https://npm.partner.ones.ai/package/@ones-op/fetch)

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

### create

创建请求实例，第二参数支持传入可继承的拦截器，在后续基于此实例 `create` 时，会将该参数传入的拦截器继承给子实例。

#### Params

|          参数           | 说明             |              类型              | 必填 | 默认值 |
| :---------------------: | :--------------- | :----------------------------: | :--: | :----: |
|         config          | 请求配置         |         `FetchConfig`          |  否  |        |
| inheritableInterceptors | 可被继承的拦截器 | `FetchInheritableInterceptors` |  否  |        |

#### Returns

| 说明         |      类型       |
| :----------- | :-------------: |
| 新的请求实例 | `FetchInstance` |

#### Types

```ts
interface FetchInstance extends AxiosInstance {
  <T = any, R = FetchResponse<T>, D = any>(config: FetchConfig<D>): Promise<R>
  <T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchConfig<D>): Promise<R>
  create: FetchCreate
}

interface FetchCreate {
  (config?: FetchConfig, inheritableInterceptors?: FetchInheritableInterceptors): FetchInstance
}

interface FetchInheritableInterceptors {
  request?: FetchInheritableInterceptor<FetchConfig>[]
  response?: FetchInheritableInterceptor<FetchResponse>[]
}
```

#### Examples

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

### isOPError

判断是否是开放平台或插件的接口错误。

判断依据：`/^(plugin|Platform)\./i.test(response.model)`。

#### Params

|   参数   | 说明         |   类型    | 必填 | 默认值 |
| :------: | :----------- | :-------: | :--: | :----: |
| response | 接口错误数据 | `OPError` |  是  |        |

#### Returns

| 说明                           |   类型    |
| :----------------------------- | :-------: |
| 是否是开放平台或插件的接口错误 | `Boolean` |

#### Types

```ts
interface isOPError {
  (response: { model?: string }): boolean
}
```

### OPErrorHandler

标准开放平台或插件接口错误处理方法。

根据错误的 `type` 和 `reason` 内容，`toast` 弹窗提示。

#### Params

|   参数   | 说明         |   类型    | 必填 | 默认值 |
| :------: | :----------- | :-------: | :--: | :----: |
| response | 接口错误数据 | `OPError` |  是  |        |

#### Types

```ts
interface OPErrorHandler {
  (response: OPError) => void
}

interface OPError {
  model: string
  reason: string
  type: 'error' | 'warning' | 'info'
}
```

## 说明

### FetchInheritableInterceptors

可继承的拦截器与普通拦截器稍有不同，它将作用与当前请求实例以及当前请求实例创建的子实例。

因为请求实例是不固定的，因此我们在拦截器方法的第二个入参里面传入了当前实例对象，以便于你处理一些与请求实例相关的操作。

并且你只能通过 `create` 方法的第二个参数传入。

```ts
type FetchInheritableInterceptor<T = FetchConfig, D = any> =
  | [(fulfilledValue: T, instance: FetchInstance) => T]
  | [
      (fulfilledValue: T, instance: FetchInstance) => T,
      (rejectedError: D, instance: FetchInstance) => D
    ]
```

#### Built-in

我们认为，在正常的业务中，不应该会出现 `GET` 请求需要带 `body` 的情况。因此，我们为你内置了一个 `paramsAlias` 的可继承拦截器。

在 `GET` 请求时，`params` 如果为空，将会尝试取 `data` 作为 `params`，即：`params: params || data`。

### FetchConfig

```ts
{
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // NOTE: params that are null or undefined are not rendered in the URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // ⚠️ if the `params` is undefined and the method is 'GET'
  // ⚠️ the `data` will be used as an alias for the `params`

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` defines the hostname, port, and protocol of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // If the proxy server uses HTTPS, then you must set the protocol to `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default

}
```

### 其他 API

`@ones-op/fetch` 最终继承自 [axios](https://axios-http.com/) 库，其余未列出的 API 代表未涉及或影响到，你可以直接参考 [axios 文档](https://axios-http.com/docs/intro) 使用。
