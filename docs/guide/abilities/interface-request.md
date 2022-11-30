---
sidebar_position: 4
---

# Interface Request

## Overview

In the plugin frontend project, it is necessary to request the interface to obtain data, so the platform provides a set of interface request library, which can not only help you request the interface exposed by the plugin backend in the plugin frontend, but also support you to request external interfaces.

## Usage

### Step 1: Installation dependency

Enter the `/web` directory of the plugin project, and execute the following command for dependent installation:

```bash npm2yarn
npm install @ones-op/fetch
```

### Step 2: Request

- Request plugin interface

  ```tsx
  import { OPFetch } from '@ones-op/fetch'

  function fetchONESData() {
    return OPFetch('api/project/users/me')
  }
  ```

- Request additional interfaces

  ```tsx
  import { Fetch } from '@ones-op/fetch'

  function fetchOutdoorData() {
    return Fetch('https://www.baidu.com')
  }
  ```

## Interface Type

### Request plugin backend interface

We have built the following three request headers in `OPFetch` so that you can directly request the plugin interface.

```json
request: {
  headers: {
    'ones-check-id': team_uuid,
    'ones-check-point': 'team',
    'ones-plugin-id': 'instance_uuid',
  },
}
```

### Request a specific interface

If you want to request an interface that starts with `*/api/plugin/*/plugin/*`, you need to set a specific request header `ones-plugin-id': 'built_in_ apis`

```tsx
const response = await OPFetch({
  url: 'xxxxx',
  headers: {
    'ones-plugin-id': 'built_in_apis',
  },
})
```

### Request ONES or other interface

You can directly use the `Fetch` interface provided by us.

## Other

For the definition of specific parameters, please refer to: [@ones-op/fetch](../../reference//fetch/fetch.md)
