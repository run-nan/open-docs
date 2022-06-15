# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### i18n

以中文为例：

```
$ npm run start:zh
```

```
docs：未发布的最新版本的英文文档
versioned_docs/version-x：已发布的最新版本的英文文档
i18n/zh-CN/docusaurus-plugin-content-docs/current：未发布的最新版本的中文文档
i18n/zh-CN/docusaurus-plugin-content-docs/version-x：已发布的最新版本的中文文档
```

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
