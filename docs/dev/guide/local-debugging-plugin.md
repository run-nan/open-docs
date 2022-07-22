---
sidebar_position: 4
---

# 在本地调试插件

> 本地调试视频教程: [插件开发与调试](../examples/videos/test.mdx)

插件开发完成后，插件开发者可以在[本地打包插件](../start/create.md#插件打包)后于「插件管理」中上传安装。

不过在插件在正式发布之前，插件开发者可以通过 `op` 工具在本地对插件进行调试。

## 配置调试环境

### 前置信息

在进行插件调试前，开发者需要指定调试环境，设置「开放能力适配器」地址，并从对应环境中加载「团队」等数据：

- **baseURL** 远端调试环境 URL
- **hostURL** 开放能力适配器 URL

`OP` 工具与插件工程与目标环境的架构关系如下图所示：

![ONES Open Platform - OP Tools](images/ONES%20Open%20Platform%20-%20OP%20Tools.png)

在进行插件调试时，实际上是于本地插件工程中为远端环境的「插槽」与「能力适配器」提供「自定义组件」与「自定义能力」

### 指定调试环境信息

开发者需要在项目根目录下分别通过以下指令指定环境信息：

```
# Step 1
# When step 1 done will prompt execute 'npx op pickteam local'
npx op login

# Step 2
# You can learn more about 'pickteam' command by executing 'npx op help local'
npx op pickteam local
```

在插件工程根目录中执行 `OP` 工具的 `login` 指令进行登陆操作，按照提示依次输入调试环境信息：

```raw
➜ npx op login
? Please enter the environment base URL: http://120.76.45.123
? Please enter the environment host URL: tcp://120.76.45.123:9006
? Username: test1@ones.ai
? Password: [hidden]
  ✔ Converting inputted answers to login params
  ✔ Fetching user profile
  ✔ Updating config/local.yaml
  ✔ Updating scope info into /Users/username/.ones/cli-plugin.yaml
✔ Login successful
? Do you want to execute 'npx op pickteam' for update team information into config file? (Y/n)
```

登录操作完成后会将「用户凭证」写入工程下的 `config/local.yaml` 文件中。

同时会询问开发者是否需要执行 `pickteam` 指令进行团队选择操作。

开发者可以选择自动执行，或是完成登录操作后退出后另行手动执行 `pickteam` 指令：

```raw
➜ npx op pickteam local
? Pick the team below to update information into the config file: (Use arrow keys)
❯ TEAM A (RPWfqknE)
  TEAM B (Q8ecrHks)
  TEAM C (QCiUKNE7)
(Move up and down to reveal more choices)

? Pick the team below to update information into the config file: TEAM A (RPWfqknE)
✔ Successfully updated team information for local configuration.
```

团队选择操作完成后会将「团队信息」写入工程下的 `config/local.yaml` 文件中，至此我们完成了调试环境信息的设置。

## 本地调试

### 启动本地调试

启动本地调试需要使用到 `OP` 工具的 `invoke` 指令，查看 `invoke` 指令的帮助信息：

```bash
➜ npx op help invoke
Usage: op invoke [options] <target>

start the plugin project locally and invoke one or several life-cycles of the plugin

Arguments:
  target      specify the process (run, clear) or life-cycle (install, start, enable, disable, stop, uninstall) you want to invoke

Options:
  -h, --help  display help for command

The target can point to the process or the life-cycles, the difference between them is that the process will contain multiple life-cycles

Available processes:
  1. run:
    When executed, the 'install' and 'start' and 'enable' life-cycle are called in turn
  2. clear:
    When executed, the 'disable' and 'stop' and 'uninstall' life-cycle are called in turn
```

完成登录与团队选择后，开发者可以通过在项目根目录执行 `npx op invoke run` 启动本地调试：

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
<i> [webpack-dev-server] Content not from webpack is served from '/Users/jeffylai/dev/ONES/open-platform/t5/public' directory
asset logo.svg 489 bytes [emitted] [from: public/logo.svg] [copied]
orphan modules 161 KiB [orphan] 22 modules
webpack 5.72.1 compiled successfully in 217 ms
连接成功!
{
  action: 'run',
  email: 'test1@ones.ai',
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

:::caution 注意

如果修改了插件配置文件（`config/plugin.yaml`），需要运行 `npx op invoke clear` 并重新运行 `npx op invoke run` 指令才能使配置生效。

:::

### 调试前端

`OP` 工具的 `invoke` 指令会为插件工程前端部分启动一个开发服务器（基于 [webpack-dev-server](https://github.com/webpack/webpack-dev-server)）并提供开箱即用的模块热重载。

### 调试后端

`OP` 工具的 `invoke` 指令会为后端启动一个开发服务，第一次启动后，控制台会返回一些可供本地调试的内容：

```bash
本地调试返回值: {"instance_uuid":"763ce3cf","token":"1KTaxtFcNCpEVLLUS6qb2sVkBtzcHGXfd7Bni6bKyww4000lV1epdsYwL5pUoAO3","user_uuid":"SMS8ciyv"}
```

这些信息，可以作为接口请求头的值来进行接口调试。

#### 调试接口

我们可以使用控制台返回的 `instance_uuid` 和 `token` 在 [Postman](https://www.postman.com/) 中进行接口调试：

![image](images/test3.png)

如上图所示，我们在接口的请求头中添加了 `Ones-Check-Point` `Ones-Plugin-Id` `Ones-Plugin-Token` 三个参数：

```ts title="Header"
{
  "Ones-Check-Point": "team",
  "Ones-Plugin-Id": "5a21a6d7", // instance_uuid
  "Ones-Plugin-Token": "lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz", // token
}
```

可以看到，接口调用成功后给我们返回了 "Hello world"：

```json
{
  "data": {
    "res": "Hello world",
    "requestBody": {}
  }
}
```
