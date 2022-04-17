---
slug: /
sidebar_position: 1
---

# 开发环境准备

## 安装 Node.js

ONES 插件开发需要 [Node.js](https://nodejs.org/zh-cn/) v16.13 或更高版本，你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

### 配置 npm 代理

插件开发过程中需要用到的所有依赖，均放在 ONES 的私有 npm 仓库上，因此需要配置代理才能顺利访问并获取内容。

```
npm config set @ones:registry=https://npm.partner.ones.ai/registry/
```

:::note

只配置 @ones 代理，不会影响你本地的其他 npm 代理

:::

## 开发工具安装

### 安装脚手架

可以使用下列任一命令安装 ONES CLI，其中内置了插件开发脚手架 `op`：

```
npm i -g @ones/cli
# or
sudo npm i -g @ones/cli
```

安装之后，你就可以在命令行中访问 `ones` 命令。你可以使用 `--version` 来验证它是否安装成功，并检查其版本是否正确：

```
ones --version
```

#### 升级

后续如需升级脚手架，可以运行下列任一命令：

```
npm update -g @ones/cli
# or
sudo npm update -g @ones/cli
```

同样的，可以使用 `--version` 检查其版本是否正确：

```
ones --version
```

### 安装 cmake（mac / linux）

插件开发所需的部分依赖，使用了 cmake 工具，因此 cmake 也是必须安装的。

1. 下载 dmg 文件并安装。目前最新的 3.23 rc 版本有问题，建议安装 3.22 稳定版本。

[cmake-3.22.2-macos-universal.dmg](https://github.com/Kitware/CMake/releases/download/v3.22.2/cmake-3.22.2-macos-universal.dmg)

2. dmg 安装完成后，需要执行命令完成安装过程

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

3. 检查安装是否成功：

```
cmake --version
# cmake version 3.22.3
```
