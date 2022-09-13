---
sidebar_position: 1
---

# HTML

插件插槽模块的 HTML 文件是在构建时通过 [Webpack](https://webpack.docschina.org/) 的 [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin) 自动生成的，你不需要自己处理它。不过，了解它的原理有助于你更好地理解插件的开发流程。

当你打包插件时，我们会使用以下 HTML 模版为每个插槽模块生成一个 HTML 文件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
    />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="ones-mf-root"></div>
  </body>
</html>
```

其中的 `<div id="ones-mf-root">` 是插槽模块的根元素，它将作为插件运行时的 DOM 容器。后面你将看到关于它的更多说明。

插件打包完成后，每个插槽模块生成的 HTML 文件中都将自动引入所需的 CSS 和 JS 资源：

- `index.css` 的构建产物将会在 `<head>` 元素中的 `<link>` 标签内引入
- `index.tsx` 的构建产物将会在 `<body>` 元素中的 `<script>` 标签内引入
