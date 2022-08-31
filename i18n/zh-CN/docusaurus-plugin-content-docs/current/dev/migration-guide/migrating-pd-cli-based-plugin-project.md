---
sidebar_position: 1
---

# 迁移基于 PD CLI 的插件工程

随着使用 Node.js 实现的 `ONES CLI` 与 `OP CLI` 正式版本的发布，开发者可以使用新版本的 CLI 工具替代 `PD CLI` 的所有职能。

使用新版本的 CLI 工具需要针对插件工程完成一些不可避免的迁移工作，如有带来不便，我们深表歉意。

## 与基于 PD CLI 的插件工程的内容差异

- 重新设计 CLI 工具的指令
- 重新实现 CLI 工具各功能模块的逻辑
- 重新设计 CLI 工具的「错误处理流程」
- 重新设计插件工程升级「开放能力」或「前端插槽」的流程
- 将 CLI 工具以 `NPM package` 的形式进行应用分发
- 在 CLI 工具中整合更详细的「帮助信息」
- 调整插件工程模板的「目录结构」
- 更新配置文件内容
  - 插件工程配置 `config/*.yaml`
  - 全局配置 `~/.ones/cli-plugin.yaml`

### `@ones/cli`

用于创建 ONES Plugin Project。

### `@ones/cli-plugin`

不再作为面向 `/web` 目录的工程构建工具库，当前 `@ones/cli-plugin` 负责承载 `OP CLI` 的所有能力。

### 包重命名 & 新增包

| 旧                          | 新                           |
| --------------------------- | ---------------------------- |
| `@ones/cli-template-plugin` | `@ones/cli-plugin`           |
|                             | `@ones/cli-plugin-template`  |
|                             | `@ones/cli-ability-template` |

## 迁移要求

在迁移开始之前，需要确保已经完成：

- **备份需要迁移的插件工程**
- 卸载旧版本的 CLI 工具
  ```
  sudo npm uninstall @ones/cli -g
  # 或
  npm uninstall @ones/cli -g
  ```
- [配置 Npm 仓库](../start/install.md#配置-npm-仓库)
- [安装 ONES CLI](../start/install.md#安装基础脚手架工具-ones-cli)
- 了解如何[创建一个插件工程](../start/create.md)

## 步骤 1：使用 ONES CLI 重新初始化工程

### 删除 `cli-plugin.yaml`

`PD CLI` 会尝试在 `~/.ones/cli-plugin.yaml` 中写入一些缓存信息。

:::info
Windows 用户则是 `C:\Users\YourUserName\.ones\cli-plugin.yaml`
:::

为了使 `ONES CLI` 与 `OP CLI` 能够正确的写入与读取缓存内容，首先需要将该文件删除：

**macOS / Linux**

```
rm ~/.ones/cli-plugin.yaml
```

**Windows**

在「文件资源管理器」中，尝试将 `C:\Users\YourUserName\.ones\cli-plugin.yaml` 删除。

### 工程初始化

1. 在初始化之前开发者需要删除工程目录下除 `.git` 目录以外的所有文件
2. 然后在终端中进入当前目录使用 `ONES CLI` 初始化一个新的插件工程：

```
ones create
```

:::info
如果开发者不需要保留 Git 提交记录等信息，可以在迁移操作完成后再删除该文件夹，并重新执行 `git init`。
:::

## 步骤 2：了解破坏性改动

### `logo.svg`

1. 更新默认图标
2. Logo 当前需要维护在 `./web/public` 目录下
3. 移除了以下路径的文件：
   - `./logo.svg`
   - `./web/src/logo.svg`

### `.gitignore`

1. 新增忽略 `config/local.yaml`
2. 移除 `./backend/.gitignore`

### `.prettier & .prettierignore`

从 `./web/` 目录下移动至根目录

### `package.json`

1. 添加依赖项
2. 移除无效 `scripts`

### `web/package.json`

1. 添加依赖项
2. 升级依赖版本
3. 移除无效 `scripts`

### `backend/package.json`

1. 添加依赖项
2. 升级依赖版本
3. 移除 `@rollup` 相关依赖项
4. 移除无效 `scripts`

### `config/local.yaml.example`

移除该文件

### `config/local.yaml`

1. 新增字段：
   - `platform.username`
   - `platform.password`
   - `platform.baseURL`
2. 更新字段：
   - `platform.address`
3. 废弃字段：
   - `local.token`

### `config/ci-deploy.yaml`

1. 新增字段：
   - `username`
   - `password`
2. 废弃字段：
   - `token`
   - `user_uuid`

## 步骤 3：迁移文件

得益于 Git History，开发者可以通过 「代码编辑器（比如 [VSCode](https://code.visualstudio.com/)）集成的可视化版本对比功能」，将使用 `ONES CLI` 初始化之后的工程目录与原始的工程目录进行差异比较。

在了解文件差异后，开发者可以根据需要，按需保留 `ONES CLI` 初始化后的产物，并从已备份的插件工程中将如下目录或文件替换至当前工程目录中：

- `./config/plugin.yaml`
- `./web/public`
- `./web/src`
- `./backend/src`
- `./workspace`

## 下一步

根据 `ONES CLI` 初始化之后的工程模版与迁移后的资源文件，开发者可以进一步考虑：

- 探索 `OP CLI`
  - [添加插槽](../guide/module/index.md)
  - [添加开放能力](../guide/ability.md)
  - [本地调试](../guide/local-debugging-plugin.md)
  - [在持续集成中调试插件](../guide/ci-deploy-plugin.md)
