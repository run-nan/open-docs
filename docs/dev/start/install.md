---
slug: /
sidebar_position: 1
---

# 开发环境准备

## 安装 Node.js

ONES 插件开发需要 [Node.js](https://nodejs.org/zh-cn/) v16.13.0 或更高版本，你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

### 配置 npm 仓库

插件开发过程中需要用到的所有依赖，均放在 ONES 的私有 npm 仓库上，因此需要配置代理才能顺利访问并获取内容。

```bash
# It is strongly recommended to use the official NPM registry to avoid dependency issues
npm config set registry=https://registry.npmjs.org/

npm config set @ones:registry=https://npm.partner.ones.ai/registry/
npm config set @ones-op:registry=https://npm.partner.ones.ai/registry/
```

:::note

只配置 `@ones` 和 `@ones-op` 域指向的 npm 仓库不会影响在本地安装其他依赖项时 npm 仓库的指向

:::

## 开发工具安装

### 安装基础脚手架工具 ONES CLI

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

你还可以使用 `--version` 来检查其版本是否正确

```
➜ ones --version
1.0.0
```

### 升级 ONES CLI

后续如需升级脚手架，可以运行以下任意指令：

```bash
npm update -g @ones/cli
# or
sudo npm update -g @ones/cli
```

## 补充说明

### 安装 node-gyp (windows)

在初始化插件工程的过程中，ONES CLI 会对项目下的 `/backend` 进行依赖安装操作，过程中可能会出现依赖安装异常的情况。

这通常是缺失了构建所需的工具导致的问题，这需要开发者在 Windows 中安装 Nodejs 的过程中，开发者需要勾选安装额外的构建工具 `node-gyp`:

![Install node-gyp](./images/Windows%20node-gyp%20installation.png)

需要注意的是，在部分 Windows 发行版本中（例如家庭版），在安装 Nodejs 的过程中默认不会询问用户是否需要使用管理员权限进行安装，而 `node-gyp` 可能会因为权限缺失导致安装失败。

在这种情况下，开发者需要使用管理员权限启动 `Powershell` 或 `CMD` 并通过以下指令启动 Nodejs 安装器：

```Powershell
msiexec /package "C:\foo\baz\node-v16.xx.xx-x64.msi"
```

如果在正确安装 `node-gyp` 的情况下初始化插件工程的过程仍然存在问题，建议开发者从 `npm` 的 `debug log` 中对问题进行定位、修复或上报

### 安装 CMake（mac / linux）

在初始化插件工程的过程中，ONES CLI 会对项目下的 `/backend` 进行依赖安装操作，过程中可能会出现依赖安装异常的情况

这是因为插件开发所需的部分依赖，使用了 `CMake` 工具，因此如果项目依赖安装过程中出现异常，需要安装 `CMake` 工具

#### 使用 `brew` 安装

```bash
brew install cmake
```

#### 使用 `dmg` 安装

目前最新的 3.23 rc 版本有问题，建议安装 3.22 稳定版本：[cmake-3.22.2-macos-universal.dmg](https://github.com/Kitware/CMake/releases/download/v3.22.2/cmake-3.22.2-macos-universal.dmg)

dmg 安装完成后，需要执行命令完成安装过程：

```
sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
```

```
Password:
输出：
Linked: '/usr/local/bin/cmake' -> '/Applications/CMake.app/Contents/bin/cmake'
Linked: '/usr/local/bin/ctest' -> '/Applications/CMake.app/Contents/bin/ctest'
Linked: '/usr/local/bin/cpack' -> '/Applications/CMake.app/Contents/bin/cpack'
Linked: '/usr/local/bin/cmake-gui' -> '/Applications/CMake.app/Contents/bin/cmake-gui'
Linked: '/usr/local/bin/ccmake' -> '/Applications/CMake.app/Contents/bin/ccmake'
```

检查安装是否成功：

```
cmake --version
# cmake version 3.22.3
```
