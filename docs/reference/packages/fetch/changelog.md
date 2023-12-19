# Changelog

All notable changes to this package will be documented in this file.

# 0.6.0 (2023-10-30)

### BREAK CHANGE

axios `0.27.2` upgrade to `1.5.1`

Rename export: `AxiosError` => `FetchError`, `isAxiosError` => `isFetchError`, `AxiosHeaders` => `FetchHeaders`

`responseType` removes hardcoded `json` defaults, derived from axios (axios defaults: `json`)

### Features

- **OPFetch:** 🔥 Support for plugin backend requests (both http and internal message queue)

# 0.5.3 (2023-02-28)

### Features

- **OPFetch:** 🌟 Support `autoErrorToast` to control and unify the plug-in's error behavior.

# 0.5.0 (2022-09-27)

### Features

- **Fetch:** 🌟 Provide the Open Platform interfaces

# 0.4.0 (2022-09-26)

### Features

- **Fetch:** 🌟 Export `isOPError`, `OPErrorHandler` function
