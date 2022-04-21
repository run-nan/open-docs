---
sidebar_position: 1
---

# 全局变量

在插件中，你可以使用 `window` 访问我们在插件执行环境注入的全局变量。

## **ones_op_locale**

当前用户的语言偏好设置。包含以下字段：

### locale

- 类型：`string`

当前语言标识，目前支持的语言标识如下：

| 语言标识 | 语言名称 |
| :------: | :------: |
|   `en`   |   英语   |
| `zh-CN`  | 简体中文 |

- 示例：

```ts
const { locale } = window.__ones_op_locale__
console.log(locale) // zh-CN
```
