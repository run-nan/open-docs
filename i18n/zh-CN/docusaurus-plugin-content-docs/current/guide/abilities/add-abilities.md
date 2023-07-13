---
sidebar_position: 2
description: 多样的能力提供，轻松制定你的 ONES。
---

# 添加能力

## 概述

如果你想对 ONES 的业务模块中的一些行为做定制化的操作，我们也为你提供了非常多的“能力”。这些能力是你能定义修改 ONES 的最小单位，以及能使用、访问 ONES 现有资源的最小单位。前面说到的“插槽”，那是纯前端的能力，和现在说的能力都不太一样。“插槽”是你对 ONES UI 进行调整、修改的最小单位。

## 能力

- [基础能力](../../abilities/basic/basic.mdx)
- [业务能力](../../abilities/business/business.mdx)

## 使用

在插件工程根目录执行`npx op add ability`指令，可以向插件新增开放能力：

```bash
➜ npx op add ability
  ✔ Validating the input params
  ✔ Validating project files exists
  ✔ Generating initial answers by input params
  ✔ Parsing plugin config content

Pre-require tasks run successfully
? Please select the ability you want to add: …
account@1.0.0
api-register-jack@1.0.0
api-register-jack@2.0.0
configuration-page@1.0.0
custom-permission@1.0.0
item-handler@1.0.0
item-mutation@1.0.0
project-custom-component@1.0.0
script-field-float@1.0.0
script-id@1.0.0
send-short-message@1.0.0
simple-auth@1.0.0
task-event-handler@1.0.0 (Ability does not match current system version)
```

在列表中可以通过方向键或输入能力名称搜索并选择接口相关能力或业务开放能力。

:::tip

在已登录的情况下，工具会根据所连环境，提示哪些能力不可用

:::

选定能力版本后，如能力版本存在多模版还需选择模版

```
? Please select a template: …
1.0
1.0-cron

```

如果选定的能力必须和模版绑定使用，则还需按照提示绑定模块。

```
? Please enter the module 'ones:global:modal' title you want to add: …

```

## 示例

**简单登录校验**

- **添加简单登录校验能力**
  执行下方指令，并选择： `SimpleAuth`

  ```bash
  npx op add ability
  ```

- **在 `/config/plugin.yaml` 中**

  在`plugin.yaml` 文件的 abilities 字段中新增了一段内容

  ```yaml title="/config/plugin.yaml"
  abilities:
    - id: iKvkTB5A
      name: Simple-login
      version: 1.0.0
      abilityType: SimpleAuth
      function:
        validateFunc: SimpleAuthValidate
  ```

- **在`/backend/src`中**

  会生成 `index.ts` 和 `simple-auth.ts`，这个就是我们提供给你的能力模版。

:::caution 注意
相同的能力可以重复被添加到插件工程中，当能力被重复添加时：

- 不会在 `backend/src` 下重复生成模版
- 每次都会在 `config/plugin.yaml` 中生成配置

:::
