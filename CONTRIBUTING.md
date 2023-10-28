# Contributing Guide

## Install pnpm

We use pnpm to manage our packages. Please [install pnpm](https://pnpm.io/zh/installation) before contributing.

## Installation

```
pnpm install
```

## Local Development

```
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### i18n

以中文为例：

```
pnpm run start:zh
```

#### 目录结构

开发中的文档目录：

```
/docs # 英文文档
/i18n/zh-CN/docusaurus-plugin-content-docs/current # 中文文档
```

Review 完成后复制一份到正式的文档目录：

```
/versioned_docs/version-1.x # 英文文档
/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x # 中文文档
```

### Build

```
$ pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Start

```
// run inner docs
$ pnpm run dev

// run public docs
$ pnpm run start
```

### OpenAPI

文档配置入口（如果没有新增大版本，无需修改）：`docusaurus.openapi.config.js`

#### 命令

重新生成最新 OpenAPI 文档

```
$ pnpm run rebuild-api
```

生成所有 OpenAPI 文档（如果存在则跳过）

```
$ pnpm run gen-api
```

删除所有 OpenAPI 文档

```
$ pnpm run clean-api
```

#### 维护

`openapi/source` 目录只放 OpenAPI 源文件，不放任何 MD 文件，作为 OpenAPI 文档的构建读取目录使用

##### 更新

如果是修改已有 yaml 内容，在更新完 yaml 后

执行 `pnpm run rebuild-api` 命令，清空重新生成 OpenAPI 文档

##### 新增

如果是新增 yaml，你需要在「更新」流程的基础上，找到 api 对应的目录下，添加 `_category_.json` 目录描述

并在 `i18n/zh-CN/docusaurus-plugin-content-docs/[version].json` 下添加侧边栏文案翻译

##### 注意

接口相关的新增与修改，请在描述里说明是 ONES 的最低支持版本

请以相同的操作同步修改中文内容，中文目录位置：`i18n/docusaurus-plugin-content-docs`
