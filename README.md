# ONES 开放平台文档

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
npm install
```

## Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### i18n

以中文为例：

```
npm run start:zh
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
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Start

```
// run inner docs
$ npm run dev

// run public docs
$ npm run start
```
