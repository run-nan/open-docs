# Development Plugin

## Overview

After creating the plugin project, you need to log in to ONES to debug your plugin. After setting up the debugging environment, you can experience the plugin capabilities in real time in ONES.

When installing ONES CLI, we have built in the plugin development scaffolding tool `op` for you. But to see the plugin ability in real time, you also need to specify a debugging environment to host your plugin.

### Noun interpretation

- **op :** the plug-in development scaffolding tool has built-in all the instructions needed throughout the plug-in development lifecycle. For instructions, please see:
- **baseURL :** remote debugging environment URL
- **hostURL :** plugin runtime URL
- **instance_uuid：** unique identification of the plug-in instance, which is generated when the plug-in is installed on a specific environment. Not a fixed value.

## Usage

### Step 1: Specify debugging environment information

Execute the `login login` command in the root directory of the plugin project to log in, and enter the debugging environment information according to the prompts.

```raw
➜ npx op login
? Please enter the environment base URL: http://120.76.45.123
? Please enter the environment host URL: tcp://120.76.45.123:9006
? Username: test1@ones.cn
? Password: [hidden]
  ✔ Converting inputted answers to login params
  ✔ Fetching user profile
  ✔ Updating config/local.yaml
  ✔ Updating scope info into /Users/username/.ones/cli-plugin.yaml
✔ Login successful
? Do you want to execute 'npx op pickteam' for update team information into config file? (Y/n)
```

After the login operation is completed, the [user credentials] will be written to the `user local.yaml` file under the project.

If you create a **team level** plugin, you will also be asked whether you need to execute the `pickteam` command for team selection. Of course, you can also manually execute `team local` after the login operation to make team selection.

:::note

- After the team selection is completed, the platform will help you install a "under development" plugin under the corresponding team of the corresponding remote debugging environment
- If it is an organization level plugin, the platform installs the plugin in [Organization settings]-[Plugin management], which means that the plug-in works for every team.
:::

### Step 2: Start local debugging

```bash
➜ npx op invoke run
  ✔ Building plugin project Back-End dist files
  ✔ Initializing the plugin project front-end development server
  ✔ Initializing the node-host params
✔ Local debug parameters successfully initialized with target lifecycle: 'run'
Now starting dev server and node-host...
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.15.2.242:3000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/dev/ONES/open-platform/public' directory
asset logo.svg 489 bytes [emitted] [from: public/logo.svg] [copied]
orphan modules 161 KiB [orphan] 22 modules
webpack 5.72.1 compiled successfully in 217 ms
连接成功!
{
  action: 'run',
  email: 'test1@ones.cn',
  password: 'ibJDTEf7PET1',
  reinstall: false,
  instance_uuid: '',
  hostID: undefined,
  webIp: '10.15.2.242',
  webPort: '3000',
  orgUUID: '5N6W3noj',
  teamUUID: 'RPWfqknE',
  user_uuid: 'SMS8ciyv',
  token: undefined,
  webServiceUrl: '10.15.2.242:3000'
}
[Plugin] Install
插件 Install 钩子函数运行成功!
[Plugin] Enable
插件 Enable 钩子函数运行成功!
success!
本地调试返回值: {"instance_uuid":"763ce3cf","token":"1KTaxtFcNCpEVLLUS6qb2sVkBtzcHGXfd7Bni6bKyww4000lV1epdsYwL5pUoAO3","user_uuid":"SMS8ciyv"}
```

#### Debug frontend

The invoke instruction of the op tool starts a development server (based on webpack-dev-server) for the plugin project frontend (/web) and provides hot updates to modules out of the box.

#### Debug backend

The invoke instruction of the op tool starts a development service for the backend, and after the first startup, the console returns something that can be debugged locally.

```bash
Local debug return value: {
  "instance_uuid": "763ce3cf",
  "token": "1KTaxtFcNCpEVLLUS6qb2sVkBtzcHGXfd7Bni6bKyww4000lV1epdsYwL5pUoAO3",
  "user_uuid": "SMS8ciyv",
}
```

**user_uuid:** currently logged in user UUID

#### Debug interface

Three parameters, `Ones-Check- Point`, `Ones-Plugin-Id` and `Ones-Plugin-token` need to be added to the request header.

```ts title="Header"
{
  "Ones-Check-Point": "team",
  "Ones-Plugin-Id": "5a21a6d7", // instance_uuid
  "Ones-Plugin-Token": "lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz", // token
}
```

**Ones-Check-Point：** corresponding to the permission checkpoint, determine whether the registered interface is under the team or the organization  
**Ones-Plugin-Id：** instance_uuid  
**Ones-Plugin-Token：** token

### Step 3: Clear debugging status

#### Modify the configuration file

If you modify the configuration file (config/plugin.yaml) of the plugin, you can run `npx op invoke Clear` and then rerun the `npx op invoke run` directive, so that the configuration will take effect.

#### Remove plugin in debugging

If you want to remove plugin that appear as "debugging" in the remote debugging environment, you can run `npx op invoke clear` and then interrupt the current process (e.g. command + C) so that the debug plugin in the remote debugging environment are uninstalled.
