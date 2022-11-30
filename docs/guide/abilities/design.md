---
sidebar_position: 2
---

# Use ONES Design

## Overview

We provide a complete set of UI components library that can help you quickly build a standard plugin user interface, which has been introduced by default when the plugin project is initialized.

The `index.tsx` file of each slot module looks like:

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'

ReactDOM.render(<ConfigProvider>banner</ConfigProvider>, document.getElementById('ones-mf-root'))
```

:::caution notice
You must keep the `<ConfigProvider>` component in index.tsx, or the plugin will not run the way you expect it to. For more information, please see ONES Design's [Global configuration of ConfigProvider](https://bangwork.github.io/ones-design/?path=/docs/core-configprovider--config-provider%E5%85%A8%E5%B1%80%E5%8C%96%E9%85%8D%E7%BD%AE&globals=locale:en)component document.
:::

## Usage

For specific documentation, please visit：[ONES Design](https://bangwork.github.io/ones-design/?path=/story/ones-design--page)
