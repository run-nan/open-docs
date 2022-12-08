---
title: 开发调试相关
sidebar_position: 1
---

## 插件本地调试的时候，没有开始连接提示

### 概述

在本地调试的时候，执行 `npx op invoke run` 控制台打印**开始连接!**，也没其余提示信息打印，有可能是你的插件项目中某些二进制文件不正确导致的。

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
<i> [webpack-dev-server] On Your Network (IPv4): http://10.15.3.242:3000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/dev/ONES/open-platform/public' directory
开始连接!
```

正常情况下，会像上面那样打印**开始连接！**。

### 解决方法

1. 插件工程是从其他不同的 CPU 体系结构的操作系统拷贝过来（如 Windows 到 Mac），拷贝内容携带了 node_modules 文件，使用 `npx op invoke run` 命令的时候，会编译插件项目，由于 CPU 体系结构不同，执行依赖的相关二进制文件也不同，就会影响调试的过程，没有相关的插件信息返回。
2. 如果插件项目是相同的 CPU 体系结构的操作系统生成的，使用 ones envinfo 或 node --> process.arch 检查一下编译插件项目的 node 版本，是否在不同开发调试环境上，使用 node 版本也是一样的。

## 插件本地调试的时候，提示连接超时

### 概述

在本地调试插件时，控制台显示连接超时已断开，这时你需要查看远端服务的状态。

### 解决方法

在 Windows 系统中可以使用 telnet 命令来监听插件项目中 local.yaml 里配置的 `platform.address` 对应的 URL。

```bash
telnet tcp://ip:port
```

在 Mac 系统中可以使用 nc 命令来监听插件项目中 local.yaml 里配置的 `platform.address` 对应的 URL。

```bash
nc -vz -w 2 ip port
```

## 新增前端插槽或后端能力后，能力配置没有热更新

### 概述

每次新增前端插槽或后端能力后，都会修改 plugin.yaml 文件。凡是涉及到了 plugin.yaml 的修改，都需要先清空实例环境上的插件信息，然后再把插件重新安装到调试环境。如果修改的是 `workspace/plugin.sql` 也可以按照下方解决方法来处理。

### 解决方法

1. 清空实例环境上的插件信息

```bash
npx op invoke clear
```

2. 重新把插件安装到调试环境

```bash
npx op invoke run
```
