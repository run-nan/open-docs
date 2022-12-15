---
sidebar_position: 1
---

# plugin.yaml

插件项目下的 `/config/plugin.yaml` 文件为插件的配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml title="/config/plugin.yaml"
service:
  app_id: abcdefghijk
  version: 1.0.0
  name: 插件名称
  description: 插件描述
  language: nodejs
  language_version: 16.13.0
  host_version: 1.0.0
  host_sub_version: 1.0.0
  min_system_version: 3.5.0
  contact: 联系方式
  config:
    - key: 配置项名称
      value: 配置项默认值
      type: Input
      required: true
abilities:
  - id: Simple-login-vUqb
    name: 简单登录校验
    abilityType: SimpleAuth
    function:
      validateFunc: SimpleAuthValidate
apis:
  - type: addition
    methods:
      - GET
    url: /hello
    function: HelloWorld
modules:
  - id: about-blank-login
    title: 第三方登录
    moduleType: about:blank
    entry: modules/about-blank-login/index.html
```

## service

插件的基本信息配置

### app_id

- 类型：`string`

插件的唯一标识，由脚手架自动生成。

两个插件，即便名称一样，若 `app_id` 不一样，它们会被识别为不同的插件；反之，若 `app_id` 一致，无论名称是否一样，它们也会被识别为同一个插件。

若一个插件需要升级，必须在其升级后的版本中，保持 `app_id` 一致。

### version

- 类型：`string`

插件的版本号，建议遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

### name

- 类型：`string`

插件名称

### description

- 类型：`string`

插件的描述信息

### mode

- 类型：`string`

插件的模式

### language

- 类型：`'nodejs'`

插件的开发语言，目前仅支持 `nodejs`

### language_version

- 类型：`string`

插件开发语言的版本号

### host_version

- 类型：`string`

开放平台的版本号

### host_sub_version

- 类型：`string`

开放平台的子版本号

### min_system_version

- 类型：`string`

最低兼容的 ONES 系统版本

### contact

- 类型：`string`
- 必填: `否`
- 最大长度: `255`
- 示例: `邮箱: tom@gmail.com\n电话: 077x-123456`

联系方式

### config

- 类型：`object[]`

插件功能配置页的配置项数组，配置参数如下：

|   属性   | 说明         |            类型             | 必填 | 默认值 |
| :------: | :----------- | :-------------------------: | :--: | :----: |
|   key    | 配置项名称   |          `string`           |  是  |        |
| required | 是否必填     |          `boolean`          |  是  |        |
|  value   | 配置项默认值 |          `string`           |  否  |        |
|   type   | 配置项类型   | `Input｜TextArea｜Password` |  否  |        |

### permission

- 类型：`object[]`

插件的权限点配置

## abilities

插件的能力配置为对象数组，每个能力的配置参数如下：

### id

- 类型：`string`

插件的能力 ID

### name

- 类型：`string`

插件的能力名称

### abilityType

- 类型：`string`

插件的能力类型

### function

- 类型：`object`

插件的能力方法名

## apis

插件的接口配置为对象数组，每个接口的配置参数如下：

### type

- 类型：`string`

接口类型

### methods

- 类型：`string[]`

接口请求方式

### url

- 类型：`string`

接口访问地址

### function

- 类型：`string`

接口方法名

## modules

插件的模块声明为对象数组，每个模块公共配置参数如下：

### id {#moduleId}

- 类型：`string`

模块自定义标识，在插件内唯一，由脚手架自动生成

### title

- 类型：`string`

模块标题

### description

- 类型：`string`

模块描述

### icon

- 类型：`string`

模块图标名称，可选值为 [ONES Design 图标库](https://bangwork.github.io/ones-design/?path=/docs/icons--icon%E5%9B%BE%E6%A0%87%E5%BA%93) 中的图标

### link

- 类型：`string`

模块的跳转链接，与 `entry` 互斥

### entry

- 类型：`string`

模块的入口文件路径，与 `link` 互斥

### disabled

- 类型：`boolean`
- 默认：`false`

模块是否禁用

### manual

- 类型：`boolean`
- 默认：`false`

模块是否由用户手动触发渲染

### preload

- 类型：`boolean`
- 默认：`false`

模块是否需要预加载

### displayConditions

- 类型：`object`

模块的显示条件，可选值如下：

|   属性   | 说明     |                 类型                  | 必填 | 默认值 |
| :------: | :------- | :-----------------------------------: | :--: | :----: |
| teamSize | 团队规模 |     `Array<'single'｜'multiple'>`     |  否  |        |
|   plan   | 服务计划 | `Array<'free'｜'team'｜'enterprise'>` |  否  |        |

### moduleType

- 类型：`string`

模块类型，可选值详见 [插槽模块列表](../../abilities/slot/slot.md)

### permission {#modulePermission}

- type：`string`

Permission identifier, locally with plugin permissions or abilities. More information [here](../../abilities/business/permission/customPermission/).

### modules {#subModule}

- types: `Array<object>`

The plugin module support nest, the slot needs this to represent the level for the complex slot that has different levels.
For example, the `My work` app slot may have multiple top bars.
