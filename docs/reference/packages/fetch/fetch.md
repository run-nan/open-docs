# @ones-op/fetch

[![](https://npm.partner.ones.cn/badge/v/@ones-op/fetch.svg)](https://npm.partner.ones.cn/package/@ones-op/fetch)

We provide a set of interface request libraries that support both front and back-end interfaces, which can help you request within a plugin: ONES interfaces, plugin interfaces, or external interfaces.

:::note
Since the "@ones-op/fetch" 0.6.0 version, the "@ones-op/fetch" library integrates "@ones-op/node-fetch" functionality by means of an adapter, so you can use the same APIs in the plugin backend as in the frontend.
:::

## Requirements

| **@ones-op/fetch** |
| ------------------ |
| v0.6.0+            |

## Installation

Install the package in the plugin `/web` and `/backend` directory using the following command:

```bash npm2yarn
npm install @ones-op/fetch
```

## Usage

**Backend:**

```ts title="backend/index.ts"
import { OPFetch } from '@ones-op/fetch'

// fetch ONES API in the plugin backend
OPFetch('/users/me').then((response) => {
  console.log('me: ', response.data)
})

// fetch ONES WIKI API in the plugin backend via the `/wiki` prefix
OPFetch(`/wiki/team/${teamUUID}/space/${spaceUUID}/page/${pageUUID}`).then((response) => {
  console.log('page: ', response.data)
})

// fetch external API in the plugin backend
OPFetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('todo: ', response.data)
})
```

**Frontend:**

```tsx title="web/index.tsx"
import { OPFetch } from '@ones-op/fetch'

const fetchProject = OPFetch.create({ baseURL: '/project/api/project' })

// fetch ONES API in the plugin frontend
fetchProject('/users/me').then((response) => {
  console.log('me: ', response.data)
})

// fetch plugin API in the plugin frontend
fetchProject('/hello').then((response) => {
  console.log('hello: ', response.data)
})

// fetch external API in the plugin frontend
OPFetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('todo: ', response.data)
})
```

## Index

| API                               | Description                                                        | Limitations  |
| --------------------------------- | ------------------------------------------------------------------ | ------------ |
| [OPFetch](#OPFetch)               | Default ONES and plugin request instance                           | Unrestricted |
| [Fetch](#Fetch)                   | Default request instance                                           | Unrestricted |
| [isFetchError](#isFetchError)     | Determine whether a request is in error                            | Unrestricted |
| [isOPError](#isOPError)           | Determine whether it is an open platform or plugin interface error | Browser only |
| [OPErrorHandler](#OPErrorHandler) | Open platform or plugin standard interface error processing method | Browser only |

## APIs

### OPFetch {#OPFetch}

The default request instance of **ONES standard and plugin**, inherits from [`Fetch`](#Fetch), and adds additional configurations related to ONES and plugin. Please refer to the [instance method](#Instance) for use, This section is only a supplementary introduction.

`OPFetch` instance built-in related configuration, it is inherited by the instance `create` method.

<details>
<summary>Built-in internal message queue request ONES interface method adapter (backend)</summary>

We have integrated the internal message queue request ONES interface method (formerly the `fetchONES` method of "@ones-op/node-fetch") into `OPFetch` by way of an adapter. If your request parameter is a relative path, an internal message queue request will request the ONES interface for you instead of `http`.

</details>

<details>
<summary>Built-in request headers required by plugins (browser)</summary>

We have built-in request headers in `OPFetch` that are necessary for requesting the current plugin, and in general you don't need to be concerned about request headers here when requesting the ONES interface and the current plugin's backend interface.

| Key              | Value          | Description                                |
| ---------------- | -------------- | ------------------------------------------ |
| ones-check-id    | `teamUUID`     | Current team UUID                          |
| ones-check-point | `'team'`       | `ones-check-id` type, fixed value `'team'` |
| ones-plugin-id   | `instanceUUID` | Current plugin instance UUID               |

</details>

### Fetch {#Fetch}

Default request instance，only common configurations and interceptors that are **business irrelevant** are built in. You can use it directly or create multiple request instances based on it. Please refer to the [instance method](#Instance) for use, This section is only a supplementary introduction.

`Fetch` instance built-in related configuration, it is inherited by the instance `create` method.

#### Interceptors

Built-in inheritable interceptors, it is inherited by the instance `create` method.

<details>
<summary>GET request parameter alias</summary>

In normal businesses, we don't think there should be cases where a `GET` request needs a `body`, so we've built in a `ParamsAlias` inheritable interceptor for you.

When `GET` request, if `params` is empty, it will try to take `data` as `params`, namely: `params: params || data`.

Examples:

```tsx
// fetch: api/project/users/me?timestamp=1671015013733
Fetch('api/project/users/me', { method: 'GET', data: { timestamp: Date.now() } })
```

</details>

### isFetchError {#isFetchError}

Determine if the request has an error.

#### Params

| Parameter | Description                   | Type      | Required | Default |
| --------- | ----------------------------- | --------- | -------- | ------- | --- |
| error     | Error captured by the request | `unknown` | yes      |         |     |

#### Returns

| Description                     | Type      |
| ------------------------------- | --------- |
| Whether the request is in error | `Boolean` |

#### Types

```ts
function isFetchError<T = any, D = any>(error: any): error is FetchError<T, D>
```

### isOPError(Browser) {#isOPError}

Based on the data of the error, determine whether it is a standard interface error of the Open
Platform or plugin.

Reference for judging: `/^(plugin|platform)\./i.test(error?.response?.data?.model ?? response.model)`。

#### Params

| Params                        | Description                                | Type                                             | Required | Default |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------ | -------- | ------- |
| fetchError/fetchErrorResponse | Errors (or data) returned by the interface | `FetchError`/[`OPErrorData`](#Types.OPErrorData) | Y        |         |

#### Returns

| Description                                                     | Type      |
| --------------------------------------------------------------- | --------- |
| Is it a standard interface error for an open platform or plugin | `Boolean` |

#### Types

```ts
function isOPError(error: FetchError<{ model?: string }> | { model?: string }): boolean
```

### OPErrorHandler(Browser) {#OPErrorHandler}

Open Platform or plugin interface error standard handling method.

Based on the content of the `type` and `reason` of the standard error data, `toast` prompt.

#### Params

| Params                        | Description                                | Type                                             | Required | Default |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------ | -------- | ------- |
| fetchError/fetchErrorResponse | Errors (or data) returned by the interface | `FetchError`/[`OPErrorData`](#Types.OPErrorData) | Y        |         |

#### Types

```ts
function OPErrorHandler(response: OPErrorData) => void
```

### <Instance\> {#Instance}

Request instance method introduction, not the actual export API.

Each instance can be called directly as a method, and the attributes mounted on the instance can be called.

#### Types

```tsx
interface FetchInstance<E extends object = EmptyObj> extends AxiosInstance {
  <T = any, R = FetchResponse<T>, D = any>(config: FetchConfig<D, E>): Promise<R>
  <T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchConfig<D, E>): Promise<R>
  create: FetchCreate<E>
}
```

#### <Instance\>.create

Create a request sub-instance, the second parameter supports the **inherited** interceptor. When this instance is based on this instance, the interceptor will be passed into the sub-instance.

##### Params

| Params                  | Description            | Type                                                            | Required | Default |
| ----------------------- | ---------------------- | --------------------------------------------------------------- | -------- | ------- |
| config                  | Request configuration  | [`FetchConfig`](#fetchconfig)                                   | N        |         |
| inheritableInterceptors | Inherited interceptors | [`FetchInheritableInterceptors`](#fetchinheritableinterceptors) | N        |         |

##### Returns

| Description          | Type                         |
| -------------------- | ---------------------------- |
| New Request instance | [`FetchInstance`](#Instance) |

##### Types

```tsx
interface FetchCreate<E extends object = EmptyObj> {
  (
    config?: FetchConfig<any, E>,
    inheritableInterceptors?: FetchInheritableInterceptors<E>,
  ): FetchInstance<E>
}
```

##### Examples

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

`@ones-op/fetch` is ultimately inherited from the [axios](https://axios-http.com/) library. The remaining APIs that have not been listed do not involve or affect. You can directly refer to the [axios](https://github.com/axios/axios/tree/v1.x#axios-api) reference version of the API documentation.

## Types

### FetchError {#Types.FetchError}

Fetch Library Request Error Type.

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

Definition of the type of error types of ONES Open Platform and plugin standard.

```tsx
interface OPErrorData {
  model: string
  reason: string
  type: 'error' | 'warning' | 'info'
  closable?: boolean
}
```

### FetchInheritableInterceptors

The inherited interceptor is slightly different from ordinary interceptors. It will act on the current request instance and the sub-instance created by the current request instance.

Because the request instance is not fixed, we pass the current instance object in the second parameter of the interceptor method to facilitate your processing of some operations related to the request instance.

In order to facilitate distinction, the interceptor that can be inherited can only be passed through the second parameter of the `create` method, and the interceptor that the instance is added later will not be inherited.

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

These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.

:::note
Plugin backend internal message queue request ONES interface method adapter hereinafter: Plugin Node Adapter. see [OPFetch](#OPFetch) for a detailed description Introduction.
:::

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

  // Team `uuid`, required for organization-level plugins.
  // Plugin Node Adapter only
  teamUUID: 'yqwqqqwq',

  // Whether to use the plugin superuser
  // Plugin Node Adapter only
  root: true, // default

  // `autoErrorToast` indicates whether or not popup a window to show error info which request plugin's interface
  // When using it, the plug-in backend needs to be used in conjunction with the corresponding `node-error` sdk
  // `node-error` can refer from https://developer.ones.com/docs/reference/packages/node-error/
  // It can deal with the plugin's interface's error automatically
  // Browser `OPFetch` only
  autoErrorToast: true, //default

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
  // - string, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - `GET` method only: plain object, string, plain object
  // - Browser only: FormData, File, Blob
  // - Node only: plain object, Stream, Buffer
  // - Plugin Node Adapter: Buffer
  data: {
    firstName: 'Fred'
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  // Browser only
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
  // Unsupported Plugin Node Adapter
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'json', 'text'
  // browser only: 'document', 'stream', 'blob'
  // Node.js only: 'document', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  // Unsupported Plugin Node Adapter
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  // Unsupported Plugin Node Adapter
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

  // `maxContentLength` defines the max size of the http response content in bytes allowed in Node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node and Plugin Node Adapter only option) defines the max size of the http request content in bytes allowed
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
  // Node.js only
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  // Node.js only
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
  // Node.js only
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

## FAQ

### Why it still popup a toast without [node-error](../../packages/node-error) when catch a interface's error?

When autoErrorToast set to be true, we will judge Whether to popup toast by calling isOPError method, so if you custom a response can pass the check of isOPError, it also works out.

### How do I request an interface across plugins?

First of all, we **strongly don't recommend** you do this, you should rather consider merging two plugins into one.

However, if you have a reason why you have to do this. In the plugin front-end, you can manually pass in the target plugin's `ones-plugin-id` request header to make the request; in the plugin backend, you'll need to pass in an absolute path to the request URL, which `OPFetch` / `Fetch` will internally request for you via the `http` module (note that you'll need to pass in all of the plugin's required [request headers](#OPFetch)).
