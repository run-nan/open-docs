---
description: 插件在 ONES 系统中的运行时环境介绍。
---

# 运行时环境

## 概览

本章节将会介绍插件在 ONES 系统中的运行时环境，你可以通过阅读此章节了解到插件的实际运行环境，从而知道插件的写法边界。

## 后端

ONES 开放平台 Node.js Host 基于 [VM2](https://github.com/patriksimek/vm2) 提供了一套插件后端运行的沙箱环境，插件的生命周期方法以及任何能力方法均由 Host 接收到开放平台的消息后调起执行。

:::caution
我们**强烈不建议你使用内存操作**（全局变量等）。开放平台提供的是基于方法级别调用（类 [FaaS](https://en.wikipedia.org/wiki/Function_as_a_service) 模式）的后端插件体系，开放平台内部调度可能会对插件进行重启等操作，因此，内存操作是非常不可靠的。
:::

Node.js Host 提供的是一个相对宽松的沙箱环境，对于 Node.js 原生模块的使用并没有做过多的限制，而是以 `builtin: ['*']` 的方式全量支持插件使用。

:::caution
插件能拿到的原生模块仍然是一个 Node.js 提供的子集，因为 [VM2](https://github.com/patriksimek/vm2) 会自动处理掉一些不安全的模块或者方法，比如：`process.exit` 方法。
:::

我们在插件模版中配置的是 [ESM](https://tc39.es/ecma262/#sec-modules) 写法的 [TypeScript](https://www.typescriptlang.org/) 模版，但这并不代表着插件的最终运行环境支持 [ESM](https://tc39.es/ecma262/#sec-modules)。

插件后端构建工具会将你的代码以及 `import` 引用的 [ESM](https://tc39.es/ecma262/#sec-modules) 库中的代码 [Tree Shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) 后全部打包进 `/backend/dist` 目录下，以此消除代码中存在的 [ESM](https://tc39.es/ecma262/#sec-modules) 语法。因此。

:::caution
对于纯 [ESM](https://tc39.es/ecma262/#sec-modules) 导出的库，**不支持** `require` 引用。
:::

:::caution
对于默认 [ESM](https://tc39.es/ecma262/#sec-modules) 导出的库（package.json `main` 字段入口文件是 [ESM](https://tc39.es/ecma262/#sec-modules) 格式），也暂**不支持** `require` 引用。
:::
