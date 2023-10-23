# 更新日志

这个包所有值得注意的变化都将记录在这个文件中。

# 0.6.0 (2023-xx-xx)

### 破坏性变更

axios `~0.27.2` 升级至 `~1.4.0`

重命名导出：`AxiosError` => `FetchError`，`isAxiosError` => `isFetchError`，`AxiosHeaders` => `FetchHeaders`

`responseType` 去除硬编码 `json` 默认值，由 axios 推导（axios 默认值: `json`）

### 新特性

- **OPFetch:** 🔥 支持插件后端请求（http 与 内部通信 两种方式）

# 0.5.3 (2023-02-28)

### 新特性

- **OPFetch:** 🌟 支持 `autoErrorToast` 控制和统一插件接口的报错行为

# 0.5.0 (2022-09-27)

### 新特性

- **Fetch:** 🌟 提供开放平台接口

# 0.4.0 (2022-09-26)

### 新特性

- **Fetch:** 🌟 导出 `isOPError`, `OPErrorHandler` 方法
