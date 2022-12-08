---
description: 准备一个插件开发环境
id: install
---

# 开发环境准备

## 概述

在进行插件开发之前，你需要做一些开发环境上的准备。

## 要求

| NodeJS   |
| :------- |
| v16.13.0 |

## 安装

### 第一步: 安装 NodeJS

ONES 插件开发需要 [Node.js](https://nodejs.org/zh-cn/) `v16.13.0` 或更高版本，你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

#### 配置 npm 仓库

插件开发过程中需要用到的所有依赖，均放在 ONES 的私有 npm 仓库上，因此需要配置代理才能顺利访问并获取内容。

```bash
# It is strongly recommended to use the official NPM registry to avoid dependency issues
npm config set registry=https://registry.npmjs.org/

npm config set @ones:registry=https://npm.partner.ones.cn/registry/
npm config set @ones-op:registry=https://npm.partner.ones.cn/registry/
```

:::note

只配置 `@ones` 和 `@ones-op` 域指向的 npm 仓库不会影响在本地安装其他依赖项时 npm 仓库的指向。

:::

### 第二步：安装 ONES CLI

ONE CLI 是开放平台提供用来快速创建插件工程的脚手架工具，可以使用下列任意指令安装 ONES CLI，其中内置了插件插件开发工具 op。

```bash npm2yarn
npm install -g @ones/cli
# or
sudo npm install -g @ones/cli
```

安装完成后，你可以在命令行中使用 `--version` 指令来验证是否正确安装以及获取版本信息。

```
➜ ones --version
1.0.0
```

具体使用指令可以参考：[ONES CLI](../../tools/cli/index.mdx)

#### 升级 ONES CLI

后续如需升级脚手架，可以运行以下任意指令：

```bash
npm update -g @ones/cli
# or
sudo npm update -g @ones/cli
```

:::caution 注意

安装过程中出现环境问题可参考 [FAQ](../../faq/environment/ones-cli.mdx)

:::
