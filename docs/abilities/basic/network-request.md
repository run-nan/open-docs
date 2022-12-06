# Network request

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

The network request ability provides an API for plugin to access external services. External services are some services that can be directly accessed outside the ONES, such as Google, Twitter and other common services. With this ability, it is convenient for plugin to interact with external services.

## Usage

### SDK document:[@ones-op/node-fetch](../../reference/packages/node-fetch/node-fetch.md)

### Step 1: Installing dependencies

Run the following instructions under the plugin project to install dependencies. (note that this ability is used by back-end by default, and the usage directory is under `backend`)

```shell
cd backend
npm install @ones-op/node-fetch
```

### Step 2: Access external services

#### fetchHttp

Call `fetchHttp` and pass the url and request method of the external API to access the external API. For more information, please see the [SDK](../../reference/packages/node-fetch/node-fetch.md) document.

#### Example:

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
