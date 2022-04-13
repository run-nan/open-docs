---
sidebar_position: 1
---

# plugin.yaml

插件项目下的 `/config/plugin.yaml` 文件为插件的配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml
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
  config:
    - key: 配置项名称
      value: 配置项默认值
      type: 101
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

### service.app_id

- 类型：`string`

插件的唯一标识，由脚手架自动生成。

两个插件，即便名称一样，若 `app_id` 不一样，它们会被识别为不同的插件；反之，若 `app_id` 一致，无论名称是否一样，它们也会被识别为同一个插件。

若一个插件需要升级，必须在其升级后的版本中，保持 `app_id` 一致。

### service.version

- 类型：`string`

插件的版本号，建议遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

### service.name

- 类型：`string`

插件名称

### service.description

- 类型：`string`

插件的描述信息

### service.language

- 类型：`string`

插件的开发语言，目前仅支持 `nodejs`

### service.language_version

- 类型：`string`

插件开发语言的版本号

### service.host_version

- 类型：`string`

开放平台的版本号

### service.host_sub_version

- 类型：`string`

开放平台的子版本号

### service.min_system_version

- 类型：`string`

最低兼容的 ONES 系统版本

### service.permission

- 类型：`object[]`

插件的权限点配置
