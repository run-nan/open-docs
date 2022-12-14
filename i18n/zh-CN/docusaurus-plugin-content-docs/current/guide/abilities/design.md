---
sidebar_position: 3
description: ONES Design 是基于 Ant Design 的 React UI 组件库，主要用于企业级研发管理工具的研发。
---

# ONES Design

## 概述

我们提供了一套完整的 UI 组件库，可以帮助你快速构建标准的插件用户界面，在插件工程初始化的时候，它已经默认被引入了。

每个插槽模块的`index.tsx`文件形如：

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'

ReactDOM.render(<ConfigProvider>banner</ConfigProvider>, document.getElementById('ones-mf-root'))
```

:::caution 注意
你必须保留 index.tsx 中的`<ConfigProvider>`组件，否则插件将无法按照你预期的方式运行。详情请见 ONES Design 的 [ConfigProvider 全局化配置](https://bangwork.github.io/ones-design/?path=/docs/core-configprovider--config-provider%E5%85%A8%E5%B1%80%E5%8C%96%E9%85%8D%E7%BD%AE)组件文档。
:::

## 使用

具体使用文档，请访问：[ONES Design](https://bangwork.github.io/ones-design/?path=/story/ones-design--page)
