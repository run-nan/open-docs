# @ones-op/fetch

[![](https://npm.partner.ones.cn/badge/v/@ones-op/fetch.svg)](https://npm.partner.ones.cn/package/@ones-op/fetch)

We provide a set of interface request library that can help you request interfaces exposed to the backend of the plugin in the frontend of the plugin, or request external interfaces.

## Requirements

| **@ones-op/fetch** |
| :----------------: |
|     `v0.4.0+`      |

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/fetch
```

## Usage

Request the ONES and plugin interfaces.

```tsx
import { OPFetch } from '@ones-op/fetch'

function fetchData() {
  OPFetch('api/project/users/me').then((response) => {
    console.log('me: ', response)
  })
  OPFetch('api/project/hello').then((response) => {
    console.log('hello: ', response)
  })
}
```

## Index

| API                               | Description                                                        |
| :-------------------------------- | :----------------------------------------------------------------- |
| [OPFetch](#OPFetch)               | Default ONES and plugin request instance                           |
| [Fetch](#Fetch)                   | Default request instance                                           |
| [isOPError](#isOPError)           | Determine whether it is an open platform or plugin interface error |
| [OPErrorHandler](#OPErrorHandler) | Open platform or plugin standard interface error processing method |

## APIs

### OPFetch {#OPFetch}

The default request instance of **ONES standard and plugin**, inherits from [`Fetch`](#Fetch), and adds additional configurations related to ONES and plugin. Please refer to the [instance method](#Instance) for use, This section is only a supplementary introduction.

`OPFetch` instance built-in related configuration, it is inherited by the instance `create` method.

#### Headers

Built-in request header information.

|       Key        |     Value      | Description                                |
| :--------------: | :------------: | :----------------------------------------- |
|  ones-check-id   |   `teamUUID`   | Current team UUID                          |
| ones-check-point |    `'team'`    | `ones-check-id` type, fixed value `'team'` |
|  ones-plugin-id  | `instanceUUID` | Current plugin instance UUID               |

### Fetch {#Fetch}

Default request instance，only common configurations and interceptors that are **business irrelevant** are built in. You can use it directly or create multiple request instances based on it. Please refer to the [instance method](#Instance) for use, This section is only a supplementary introduction.

`Fetch` instance built-in related configuration, it is inherited by the instance `create` method.

#### Interceptors

Built-in inheritable interceptors, it is inherited by the instance `create` method.

##### Params alias

In normal businesses, we don't think there should be cases where a `GET` request needs a `body`, so we've built in a `ParamsAlias` inheritable interceptor for you.

When `GET` request, if `params` is empty, it will try to take `data` as `params`, namely: `params: params || data`.

Examples:

```tsx
// fetch: api/project/users/me?timestamp=1671015013733
Fetch('api/project/users/me', { method: 'GET', data: { timestamp: Date.now() } })
```

### isOPError {#isOPError}

Determine whether it is an open platform or plugin interface error.

Reference for judging: `/^(plugin|platform)\./i.test(response.model)`。

#### Params

|  Params  | Description                          |            Type             | Required | Default |
| :------: | :----------------------------------- | :-------------------------: | :------: | :-----: |
| response | Error data returned by the interface | [`OPError`](#Types.OPError) |   Yes    |         |

#### Returns

| Description                                              |   Type    |
| :------------------------------------------------------- | :-------: |
| Whether it is an Open Platform or plugin interface error | `Boolean` |

#### Types

```ts
function isOPError(response: { model?: string }): boolean
```

### OPErrorHandler {#OPErrorHandler}

Open Platform or plugin interface error standard handling method.

Based on the content of the `type` and `reason` of the standard error data, `toast` prompt.

#### Params

|  Params  | Description                   |            Type             | Required | Default |
| :------: | :---------------------------- | :-------------------------: | :------: | :-----: |
| response | Interface standard error data | [`OPError`](#Types.OPError) |   Yes    |         |

#### Types

```ts
function OPErrorHandler(response: OPError) => void
```

### <Instance\> {#Instance}

Request instance method introduction, not the actual export API.

Each instance can be called directly as a method, and the attributes mounted on the instance can be called.

#### Types

```tsx
interface FetchInstance extends AxiosInstance {
  <T = any, R = FetchResponse<T>, D = any>(config: FetchConfig<D>): Promise<R>
  <T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchConfig<D>): Promise<R>
  create: FetchCreate
}
```

#### <Instance\>.create

Create a request sub-instance, the second parameter supports the **inherited** interceptor. When this instance is based on this instance, the interceptor will be passed into the sub-instance.

##### Params

|         Params          | Description            |                              Type                               | Required | Default |
| :---------------------: | :--------------------- | :-------------------------------------------------------------: | :------: | :-----: |
|         config          | Request configuration  |                  [`FetchConfig`](#fetchconfig)                  |    No    |         |
| inheritableInterceptors | Inherited interceptors | [`FetchInheritableInterceptors`](#fetchinheritableinterceptors) |    No    |         |

##### Returns

| Description          |             Type             |
| :------------------- | :--------------------------: |
| New Request instance | [`FetchInstance`](#Instance) |

##### Types

```tsx
interface FetchCreate {
  (config?: FetchConfig, inheritableInterceptors?: FetchInheritableInterceptors): FetchInstance
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

`@ones-op/fetch` is ultimately inherited from the [axios](https://axios-http.com/) library. The remaining APIs that have not been listed do not involve or affect. You can directly refer to the [axios](https://github.com/axios/axios/tree/v0.x#axios-api) reference version of the API documentation.

## Types

### OPError {#Types.OPError}

Definition of the type of error types of ONES Open Platform and plugin standard.

```tsx
interface OPError {
  model: string
  reason: string
  type: 'error' | 'warning' | 'info'
}
```

### FetchInheritableInterceptors

The inherited interceptor is slightly different from ordinary interceptors. It will act on the current request instance and the sub-instance created by the current request instance.

Because the request instance is not fixed, we pass the current instance object in the second parameter of the interceptor method to facilitate your processing of some operations related to the request instance.

In order to facilitate distinction, the interceptor that can be inherited can only be passed through the second parameter of the `create` method, and the interceptor that the instance is added later will not be inherited.

```ts
interface FetchInheritableInterceptors {
  request?: FetchInheritableInterceptor<FetchConfig>[]
  response?: FetchInheritableInterceptor<FetchResponse>[]
}

type FetchInheritableInterceptor<T = FetchConfig, D = any> =
  | [(fulfilledValue: T, instance: FetchInstance) => T]
  | [
      (fulfilledValue: T, instance: FetchInstance) => T,
      (rejectedError: D, instance: FetchInstance) => D
    ]
```

### FetchConfig

These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.

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
  // - `GET` method only: string, plain object
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

  // `maxContentLength` defines the max size of the http response content in bytes allowed in Node.js
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
