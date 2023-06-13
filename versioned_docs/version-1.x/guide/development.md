---
id: development
sidebar_position: 6
---

# Development

## Overview

After creating the plugin project, you need to log in to ONES to debug your plugin. After setting up the debugging environment, you can experience the plugin capabilities in real time in ONES.

When installing ONES CLI, we have built in the plugin development scaffolding tool `op` for you. But to see the plugin ability in real time, you also need to specify a debugging environment to host your plugin.

### Noun interpretation

- **op :** the plugin development scaffolding tool has built-in all the instructions needed throughout the plugin development lifecycle. For instructions, please see: [ONES OP](../tools/cli/op-cli.md)
- **baseURL :** remote debugging environment URL
- **hostURL :** plugin runtime URL
- **instance_uuid：** unique identification of the plugin instance, which is generated when the plugin is installed on a specific environment. Not a fixed value.

## Usage

### Step 1: Specify debugging environment information

Execute the `npx op login` command in the root directory of the plugin project to log in, and enter the debugging environment information according to the prompts.

```raw
➜ npx op login
? Please enter the environment base URL: http://120.76.45.123
? Please enter the environment host URL: tcp://120.76.45.123:9006
? Username: test1@ones.com
? Password: [hidden]
  ✔ Converting inputted answers to login params
  ✔ Fetching user profile
  ✔ Updating config/local.yaml
  ✔ Updating scope info into /Users/username/.ones/cli-plugin.yaml
✔ Login successful
? Do you want to execute 'npx op pickteam' for update team information into config file? (Y/n)
```

After the login operation is completed, the [user credentials] will be written to the `config/local.yaml` file under the project.

If you create a **team level** plugin, you will also be asked whether you need to execute the `pickteam` command for team selection. Of course, you can also manually execute `npx op pickteam local` after the login operation to make team selection.

:::note

- After the team selection is completed, the platform will help you install a "under development" plugin under the corresponding team of the corresponding remote debugging environment.
- If it is an organization level plugin, the platform installs the plugin in [Organization settings]-[Plugin management], which means that the plugin works for every team.

:::

### Step 2: Start local debugging

After logging in and selecting the team, you can execute `npx op invoke run` under the project root directory to start local debugging.

```bash
➜ npx op invoke run
  ✔ Validating command options
  ✔ Validating config/local.yaml fields
  ✔ Building plugin project Back-End dist files
  ✔ Initializing the plugin project front-end development server
  ✔ Initializing the node-host params
✔ Local debug parameters successfully initialized with target lifecycle: 'run'
Now starting dev server and node-host...
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.15.3.38:3000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/dev/ONES/open-platform/public' directory
Start the connection!
{
  action: 'run',
  email: 'idatest3@ones.com',
  password: 'BULWzBk6ixRM',
  reinstall: false,
  webIp: '10.15.3.38',
  webPort: '3000',
  orgUUID: 'KuLvwHJz',
  teamUUID: 'RWqwp2L8',
  user_uuid: 'SFBs7BHh',
  webServiceUrl: '10.15.3.38:3000'
}
Local debug return value: {"instance_uuid":"1d99926e"}
[Plugin] Install
The plugin Install hook function runs successfully!
[Plugin] Enable
The plugin Enable hook function runs successfully!
Receive a message:  all done
```

#### Debug frontend

The invoke instruction of the op tool starts a development server (based on webpack-dev-server) for the plugin project frontend (/web) and provides hot updates to modules out of the box. Just save your changes and you can reflect them to your debugging environment in real time.

#### Debug API

The invoke instruction of the op tool starts a development service for the backend, and after the first startup, the console returns something that can be debugged locally.

```bash
Local debug return value: {
  "instance_uuid":"1d99926e"
}
```

Plugin api are roughly divided into two types: [**api registration**](#) and [**api interception**](../abilities/business/ONES-API/ONES-API-interception.md). When you use [Postman](https://learning.postman.com/docs/getting-started/introduction/) to debug these api, you need to add different request headers according to these two types.

When your interface debugging shows unexpected results, you can refer to our provided [**Debugging**](./advanced/debugger.mdx) method for single-step debugging to further locate the problem.

##### Api registration

```json title="Headers"
{
  "Ones-Plugin-Id": "1d99926e", // instance_uuid
  "Ones-Check-Point": "team"
}
```

:::tip

- **Ones-Plugin-Id：**the value of the corresponding instance_uuid in the "Local Debug return value" printed on the console after starting the debug environment
- **Ones-Check-Point：**  
   team level plugin：team  
   organization level plugin：organization

:::

##### Api interception

```json title="Headers"
{
  "Ones-User-Id": "SFBs7BHh",
  "Ones-Auth-Token": "Z46E1Xe6mm91Q4lrFt7AJvKh4idcNNy54Cls2qwQDrFz6EGVD7XBd9GmgrVXu18A"
}
```

:::tip

- **Ones-User-Id：** currently logged in user uuid
- **Ones-Auth-Token：** the token of the corresponding environment

You can find the values of both request headers in [ONES API](../api/auth/auth.md#获取登录信息).
:::

### Step 3: Clear debugging status

#### Modify the configuration file

If you modify the configuration file (config/plugin.yaml) of the plugin, you can run `npx op invoke Clear` and then rerun the `npx op invoke run` directive, so that the configuration will take effect.

#### Remove plugin in debugging

If you want to remove plugin that appear as "debugging" in the remote debugging environment, you can run `npx op invoke clear` and then interrupt the current process (e.g. command + C) so that the debug plugin in the remote debugging environment are uninstalled.
