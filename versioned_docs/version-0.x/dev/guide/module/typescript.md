---
sidebar_position: 3
---

# TypeScript

我们为插件提供 [TypeScript](https://www.typescriptlang.org/) 的天然支持，默认支持引入 `.ts` 和 `.tsx` 文件。

插件打包时，我们仅执行 `.ts` 和 `.tsx` 文件的转译工作，并 **不** 执行任何的类型检查，它只为在你编码时提供友好的类型提示，帮助你减少问题的产生。

## 如何编写逻辑代码

每个插槽模块的逻辑代码，都存放于 `/web/src/modules/` 目录下以插槽模块 ID 命名的目录中。

以上一节添加的 `ones:global:banner` 为例，其对应的逻辑代码存放于 `/web/src/modules/ones-global-banner-3QC4/index.tsx` 文件中，默认生成的内容如下：

```ts title="/web/src/modules/ones-global-banner-3QC4/index.tsx"
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'

ReactDOM.render(<ConfigProvider>banner</ConfigProvider>, document.getElementById('ones-mf-root'))
```

可以看到，我们默认帮你引入了一些必要依赖，以及你为这个插槽模块编写的样式代码，最后我们使用 `ReactDOM.render` 方法，将 `<ConfigProvider>banner</ConfigProvider>` 渲染到了插槽模块的根元素 `<div id="ones-mf-root">` 中。

你可以把每个插槽模块都当作一个独立的 React 应用，它和你以往熟悉的 React 开发方式并没有什么不同，对此你不必感到惊讶。你只需要关心你的业务逻辑，剩下的交给我们。

现在，你可以在 `<ConfigProvider>` 组件下编写自己的插件前端代码。

:::caution 注意

你必须在 `ReactDOM.render` 中保留 `<ConfigProvider>` 组件，否则插件将无法按照你预期的方式运行。详情请见 ONES Design 的 [ConfigProvider 全局化配置](https://bangwork.github.io/ones-design/?path=/docs/core-configprovider--docs) 组件文档。

:::
