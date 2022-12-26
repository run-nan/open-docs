---
sidebar_position: 2
---

# ONES API registration

## Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## Overview

The plugin can register a new API on the ONES, and the plugin will directly process the request. When ONES API cannot meet business needs, you can use this ability to add API to solve data processing in specific business scenarios. For example the following scenario:

1. When some plugin front-end pages are added, and the data ONES API to which the page needs to be rendered cannot be fully met, it can be solved through the plugin registration API.
2. When some other abilities are used, they must have their own specific API for processing, and the API can be registered through this capability.

## Usage

The ONES API registration ability allows plugin to register API at two levels, namely plugin-level and team-level. Among them, plugin-level API with different plugin can register the same path, while team-level API cannot register API with the same path under the same team.

### Parameter Description

| Param            | Location     | Type   | Description                                              |
| :--------------- | :----------- | :----- | :------------------------------------------------------- |
| Ones-Plugin-Id   | HTTP Headers | string | plugin `instance_uuid`                                   |
| Ones-Check-Point | HTTP Headers | string | permission checkpoint `team`/`organization`              |
| Ones-Check-Id    | HTTP Headers | string | permission checkpoint uuid `teamUUID`/`organizationUUID` |

### addition

Add plugin-level API by `addition`.

#### Step 1: Register API

Declare the API in the plugin configuration file.

```yaml title="config/plugin.yaml"
apis:
  - type: addition #API type: addition
    methods: #Interface request method
      - POST
    url: /hello #Custom url
    function: hello #The name is consistent with the function name in the code
```

#### Step 2: Write the handling function

Write the handling function configured when the API is registered.

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported

//Interface correspondence method for addition registration
export async function hello(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello ======= Request successful')
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  }
}
```

#### Step 3: Request

- Request parameter example

  When requesting an API registered through `addition`, three request header parameters `Ones-Check-Point`, `Ones-Plugin-Id` and `Ones-Check-Id` must be carried.

  ```
  url：https://yourhost/hello
  headers:
      Ones-Check-Point : team,
      Ones-Plugin-Id : {plugin_instance_uuid},
      Ones-Check-Id: {team_uuid},
  method: POST
  ```

- Use the `curl` tool to request, take the `/hello` API as an example

  ```shell
  curl --location --request POST 'https://yourhost/hello' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --header 'Ones-Check-Point: team' \
  --header 'Ones-Plugin-Id: {plugin_instance_uuid}' \
  --header 'Ones-Check-Id: {team_uuid}' \
  --data ''
  ```

### external

Add a team-level API through `external`, and the path of the API added in this way must be prefixed with `/team/:teamUUID`.

#### Step 1: Register API

Declare the API in the plugin configuration file.

```yaml title="config/plugin.yaml"
apis:
  - type: external #New to external (team-level interface)
    methods:
      - POST
    url: /team/:teamUUID/hello1
    function: hello1
```

#### Step 2: Write the handling function

Write the handling function configured when the API is registered.

```typescript title="backend/src/index.ts"
import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported

// Interface correspondence method for external registration
export async function hello1(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {}
  Logger.info('[Plugin] hello1 ======= Request successful')
  return {
    body: {
      res: 'hello world1',
      requestBody: body,
    },
  }
}
```

#### Step 3: Request

- Request parameter example

  ```
  url：https://yourhost/team/:teamUUID/hello1
  method: POST
  ```

- Use the `curl` tool to access, take the `/team/:teamUUID/hello1` API as an example

  ```shell
  curl --location --request POST 'https://yourhost/team/:teamUUID/hello1' \
  --header 'Content-Type: application/json;charset=utf-8' \
  --data ''
  ```
