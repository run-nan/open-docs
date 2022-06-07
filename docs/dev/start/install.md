---
slug: /
sidebar_position: 1
---

# 开发环境准备

## 安装 Node.js

ONES 插件开发需要 [Node.js](https://nodejs.org/zh-cn/) v16.13.0 或更高版本，你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

### 配置 npm 代理

插件开发过程中需要用到的所有依赖，均放在 ONES 的私有 npm 仓库上，因此需要配置代理才能顺利访问并获取内容。

```
npm config set @ones:registry=https://npm.partner.ones.ai/registry/
```

:::note

只配置 `@ones` 代理，不会影响你本地的其他 npm 代理

:::

## 开发工具安装

### 安装基础脚手架工具 `ones-cli`

可以使用下列任意指令安装 [ONES CLI](../../api/cli/index.md)，其中内置了插件开发脚手架工具 `op`

```bash npm2yarn
npm install -g @ones/cli
# or
sudo npm install -g @ones/cli
```

完成安装后，你可以在命令行中使用 `ones` 指令来验证是否正确安装 [ONES CLI](../../api/cli/index.md)

```
➜ ones
Usage: ones [options] [command]

Options:
  -v, --version                    output the current version
  -h, --help                       display help for command

Commands:
  create [options] [project-name]  create project from preset project template by type

      Tip: if you leave the [project-name] blank and
      1. not specified the specific path, then will use current folder name as default project name
      2. the specific path is also specified, then will use the folder name as default project name

  envinfo                          print environment info
  help [command]                   display help for command

```

你也可以使用 `--version` 来验证它是否安装成功，并检查其版本是否正确

```
➜ ones --version
1.0.0
```

### 升级 `ones-cli` 升级

后续如需升级脚手架，可以运行以下任意指令：

```bash
npm update -g @ones/cli
# or
sudo npm update -g @ones/cli
```
