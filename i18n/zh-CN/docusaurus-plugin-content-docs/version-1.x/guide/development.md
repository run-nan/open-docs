---
id: development
sidebar_position: 6
---

# 开发插件

## 概述

创建好插件工程之后，你需要登录上 ONES 来对你的插件进行调试。搭建好调试环境后，就可以在 ONES 中实时体验到插件能力了。

在安装 ONES CLI 的时候，我们已经为你内置了插件开发脚手架工具 `op`。但想实时看到插件的能力，那你还需要指定一个调试环境来承载你的插件。

### 名词解释

- **op :** 插件开发脚手架工具，内置了贯穿插件开发生命周期中所需要的所有指令，指令释义可以参见：[ONES OP](../tools/cli/op-cli.mdx)
- **baseURL :** 远端调试环境 URL (实例端口)
- **hostURL :** 插件运行时 URL （平台 host 端口）
- **instance_uuid：** 插件实例的唯一标识，当插件安装到具体环境上时会生成此实例 uuid。并非固定值。

## 使用

### 第一步：指定调试环境信息

在插件工程根目录中执行 `npx op login` 指令进行登录操作，按照提示依次输入调试环境信息。

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

登录操作完成后会将「用户凭证」写入工程下的 `config/local.yaml` 文件中。

如果你创建的是**团队级别**的插件，那么还会询问你是否需要执行 `pickteam` 指令进行团队选择操作，当然你也可以在登录操作完成之后，手动执行 `npx op pickteam local` 来进行团队选择。

:::note

- 完成团队选择后，那么平台就会在对应的远端调试环境的对应团队下帮你安装一个“开发中”的插件。
- 如果是组织级别插件，那么平台就会将这个插件安装在【组织级别】-【插件管理】中，也意味着该插件对每一个团队都生效。

:::

### 第二步：启动本地调试

完成登录和团队的选择后，你可以在工程根目录下执行 `npx op invoke run` 启动本地调试

```bash
➜ npx op invoke run
  ✔ Validating command options
  ✔ Validating config/local.yaml fields
  ✔ Checking ability relate module
  ✔ Updating min_system_version in plugin.yaml
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
开始连接!
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
本地调试返回值: {"instance_uuid":"1d99926e"}
[Plugin] Install
插件 Install 钩子函数运行成功!
[Plugin] Enable
插件 Enable 钩子函数运行成功!
收到消息:  all done
```

#### 调试前端

op 工具的 invoke 指令会为插件工程前端部分（/web）启动一个开发服务器（基于 webpack-dev-server）并提供开箱即用的模块热更新。只需要保存你的修改，就可以实时反应到你的调试环境上。

#### 调试接口

op 工具的 invoke 指令会为后端启动一个开发服务，第一次启动后，控制台会返回一些可供本地调试的内容。

```bash
本地调试返回值: {"instance_uuid":"1d99926e"}
```

插件接口我们大致分为了两种：[**接口注册**](../abilities/business/ONES-API/ONES-API-registration.md)和[**接口劫持**](../abilities/business/ONES-API/ONES-API-interception.mdx)。你在使用 [Postman](https://learning.postman.com/docs/getting-started/introduction/) 对这些接口进行调试的时候，需要按照这两种类型加入不同的请求头。

当你的接口调试出现意料之外的结果，你可以参考我们提供的[**断点调试**](./advanced/debugger.mdx)方法进行单步调试，进一步定位问题所在。

##### 接口注册

```json title="Headers"
{
  "Ones-Plugin-Id": "1d99926e", // instance_uuid
  "Ones-Check-Point": "team"
}
```

:::tip

- **Ones-Plugin-Id：**启动调试环境之后在控制台打印出来的“本地调试返回值”中对应的 instance_uuid 的值
- **Ones-Check-Point：**  
   团队插件：team  
   组织插件：organization

:::

##### 接口劫持

```json title="Headers"
{
  "Ones-User-Id": "SFBs7BHh",
  "Ones-Auth-Token": "Z46E1Xe6mm91Q4lrFt7AJvKh4idcNNy54Cls2qwQDrFz6EGVD7XBd9GmgrVXu18A"
}
```

:::tip

- **Ones-User-Id：** 当前登录用户 uuid
- **Ones-Auth-Token：** 对应环境的 token

这两个请求头的值你都可以在 [ONES API](../api/auth/auth.md#获取登录信息) 中找到。
:::

### 第三步：清除调试状态

#### 修改配置文件

如果你修改了插件的配置文件（config/plugin.yaml），你可以运行 `npx op invoke clear` 再重新运行 `npx op invoke run` 指令，这样配置才能生效。

#### 移除调试中插件

如果你想移除远程调试环境中显示为“调试中”的插件,你可以运行 `npx op invoke clear` 再中断当前进程（如：command + C），这样远程调试环境中的调试插件就被卸载了。
