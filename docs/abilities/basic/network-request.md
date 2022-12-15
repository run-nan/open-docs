# Network request

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

The network request ability provides an API for plugin to access external services. External services are some services that can be directly accessed outside the ONES, such as Google, Twitter and other common services. With this ability, it is convenient for plugin to interact with external services.

## Usage

### Step 1: Installation dependency

Enter the `/backend` directory of the plugin project, and execute the following command for dependent installation:

```shell
npm install @ones-op/node-fetch
```

### Step 2: Request

**API**: fetchHttp

Call `fetchHttp` and pass in `url` and request method to access the external API. For more information, please see the [SDK](../../reference/packages/node-fetch/node-fetch.md) document.

**Example**

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
