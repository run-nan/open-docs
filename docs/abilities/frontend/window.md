---
sidebar_position: 2
---

# Global variable

In the plugin, you can use `window` to access the global variables injected in the plugin execution environment

## **ones_op_locale**

Current user's language preference settings including the following fields:

### locale

- type：`string`

Current language identification. The currently supported language identification is as follows:

| language sign |   language name    |
| :-----------: | :----------------: |
|     `en`      |      English       |
|    `zh-CN`    | Simplified Chinese |

- Example:

```ts
const { locale } = window.__ones_op_locale__
console.log(locale) // zh-CN
```
