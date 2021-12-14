---
nav:
  title: 配置
order: 1
toc: menu
---

# 插件配置

插件项目下的 `/config/plugin.yaml` 文件为插件的配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml
service:
  app_id: abcdefghijk
  version: 1.0.0
  name: 插件名称
  description: 插件描述
  config:
    - key: 配置项名称
      value: 配置项默认值
      type: 101
      required: true
apis:
modules:
  - id: about-blank-login
    title: 第三方登录
    moduleType: about:blank
    entry: modules/about-blank-login/index.html
abilities:
```

## 基本信息

### service.app_id

- 类型：`string`

插件的唯一标识，一般由脚手架自动生成

### service.version

- 类型：`string`

插件的版本号

### service.name

- 类型：`string`

插件名称

### service.description

- 类型：`string`

插件的描述信息

### service.permission

- 类型：`object[]`

插件的权限点配置

### service.config

- 类型：`object[]`

插件功能配置页的配置项数组，配置参数如下：

|    属性     | 说明                                                                                                                           |   类型   | 必填 | 默认值 |
| :---------: | :----------------------------------------------------------------------------------------------------------------------------- | :------: | :--: | :----: |
| key  | 配置项名称                                                                                       |  string  |  是  |        |
| required | 是否必填                                                                                                         |  boolean  |  是  |        |
|     value      | 配置项默认值                                                                                          |  string  |  否 |        |
|   type    | 配置项表单类型                                                                                                                       |  `101` - Input<br>`102` - Input.TextArea<br>`103` - Input.Password |  否  |     `102`   |

## apis

@todo

## 模块声明

插件模块声明为对象数组，每个模块公共配置参数如下：

### modules[].id <Badge>必填</Badge>

- 类型：`string`

模块自定义标识，在插件内唯一，一般由脚手架自动生成

### modules[].title

- 类型：`string`

模块标题

### modules[].description

- 类型：`string`

模块描述

### modules[].icon

- 类型：`string`

模块图标名称，可选值为 [ONES Design 图标库](https://bangwork.github.io/ones-design/?path=/docs/icons--icon%E5%9B%BE%E6%A0%87%E5%BA%93) 中的图标

### modules[].link

- 类型：`string`

模块的跳转链接，与 `modules[].entry` 互斥

### modules[].entry

- 类型：`string`

模块的入口文件路径，与 `modules[].link` 互斥

### modules[].disabled

- 类型：`boolean`

- 默认：`false`

模块是否禁用

### modules[].manual

- 类型：`boolean`

- 默认：`false`

模块是否由用户手动触发渲染

### modules[].preload

- 类型：`boolean`

- 默认：`false`

模块是否需要预加载

### modules[].events

- 类型：`boolean`

- 默认：`false`

模块所使用的事件名称声明，事件名规则为 `组件:事件`，如 `modal:ok`，可选值为 [ONES Design](https://bangwork.github.io/ones-design/) 中的组件事件

### modules[].displayConditions

- 类型：`object`

模块的显示条件，可选值如下：

|     属性     | 说明                       |           类型            | 必填 | 默认值 |
| :----------: | :------------------------- | :-----------------------: | :--: | :----: |
| teamSize | 团队规模 | Array<`single`｜`multiple`> |  否  |  |
| plan | 服务计划 | Array<`free`｜`team`｜`enterprise`> |  否  |  |

### modules[].moduleType

模块类型，可选值如下：

#### about:blank

声明一个空白页模块，可脱离系统独立访问，页面 URL 为：

```
https://${host}/plugin/${service.app_id}/${service.version}/modules/${modules[].id}/index.html
```

#### settings

声明一个插件设置模块，用于承载插件自身的设置项

#### ones:global:banner

声明一个顶栏公告模块，用于展示全局的公告信息

#### ones:global:error:code

声明一个全局错误码模块，用于拦截指定错误码以自定义提示信息

模块独有配置参数如下：

|     属性     | 说明                       |           类型            | 必填 | 默认值 |
| :----------: | :------------------------- | :-----------------------: | :--: | :----: |
| errorMessage | 错误码与错误信息的配置对象 | Recode<ErrorCode, string> |  是  |        |

该模块适用于新增预设错误提示信息，如果错误提示是动态生成的，也可以由后端通过接口返回以下格式的错误信息进行自定义：

```json
{
  "code": 500,
  "errcode": "AlreadyExists.User.EmailExists",
  "model": "plugin.sso",
  "reason": "自定义提示信息",
  "type": "error"
}
```

|     属性     | 说明                       |           类型            | 必填 | 默认值 |
| :----------: | :------------------------- | :-----------------------: | :--: | :----: |
| code | HTTP 状态码 | number |  是  |        |
| errcode | 系统错误码 | string |  是  |        |
| model | 插件标识，必须带有 `plugin.` 前缀 | string |  是  |        |
| reason | 自定义提示信息 | string |  是  |        |
| type | 提示信息类型，对应 [ONES Design](https://bangwork.github.io/ones-design/) `toast` 的展示形态 | `error` `warning` `info` |  是  |        |

#### ones:global:modal:upload

声明一个全局弹窗模块，用于在上传文件前展示

#### ones:desk

声明一个系统应用模块，用于替换系统的「工单管理」模块

#### ones:desk:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「工单管理 - 首页」模块

#### ones:desk:new

声明一个系统应用顶栏菜单页模块，用于在系统的「工单管理」中追加新模块

#### ones:deskhome

声明一个系统应用模块，用于替换系统的「工单门户」模块

#### ones:deskhome:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「工单门户 - 首页」模块

#### ones:deskhome:new

声明一个系统应用顶栏菜单页模块，用于在系统的「工单门户」中追加新模块

#### ones:login

声明一个系统登录页模块，用于替换系统的默认登录页

#### ones:login:connect

声明一个系统登录页的第三方登录模块，用于新增系统登录页的第三方登录入口

#### ones:manhour

声明一个系统应用模块，用于替换系统的「工时管理」模块

#### ones:manhour:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「工时管理 - 工时日历」模块

#### ones:manhour:report

声明一个系统应用顶栏菜单页模块，用于替换系统的「工时管理 - 工时报表」模块

#### ones:manhour:log

声明一个系统应用顶栏菜单页模块，用于替换系统的「工时管理 - 工时日志」模块

#### ones:manhour:new

声明一个系统应用顶栏菜单页模块，用于在系统的「工时管理」中追加新模块

#### ones:performance

声明一个系统应用模块，用于替换系统的「效能管理」模块

#### ones:performance:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「效能管理 - 仪表盘」模块

#### ones:performance:new

声明一个系统应用顶栏菜单页模块，用于在系统的「效能管理」中追加新模块

#### ones:plan

声明一个系统应用模块，用于替换系统的「项目集管理」模块

#### ones:plan:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「项目集管理 - 项目集」模块

#### ones:plan:gantt

声明一个系统应用顶栏菜单页模块，用于替换系统的「项目集管理 - 甘特图」模块

#### ones:plan:new

声明一个系统应用顶栏菜单页模块，用于在系统的「项目集管理」中追加新模块

#### ones:pipeline

声明一个系统应用模块，用于替换系统的「流水线管理」模块

#### ones:pipeline:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「流水线管理 - 首页」模块

#### ones:pipeline:new

声明一个系统应用顶栏菜单页模块，用于在系统的「流水线管理」中追加新模块

#### ones:product

声明一个系统应用模块，用于替换系统的「产品管理」模块

#### ones:product:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「产品管理 - 首页」模块

#### ones:product:new

声明一个系统应用顶栏菜单页模块，用于在系统的「产品管理」中追加新模块

#### ones:project

声明一个系统应用模块，用于替换系统的「项目管理」模块

#### ones:project:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「项目管理 - 首页」模块

#### ones:project:new

声明一个系统应用顶栏菜单页模块，用于在系统的「项目管理」中追加新模块

#### ones:testcase

声明一个系统应用模块，用于替换系统的「测试管理」模块

#### ones:testcase:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「测试管理 - 概览」模块

#### ones:testcase:library

声明一个系统应用顶栏菜单页模块，用于替换系统的「测试管理 - 用例库」模块

#### ones:testcase:plan

声明一个系统应用顶栏菜单页模块，用于替换系统的「测试管理 - 测试计划」模块

#### ones:testcase:report

声明一个系统应用顶栏菜单页模块，用于替换系统的「测试管理 - 测试报告」模块

#### ones:testcase:new

声明一个系统应用顶栏菜单页模块，用于在系统的「测试管理」中追加新模块

#### ones:version

声明一个系统应用模块，用于替换系统的「版本管理」模块

#### ones:version:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「版本管理 - 首页」模块

#### ones:version:new

声明一个系统应用顶栏菜单页模块，用于在系统的「版本管理」中追加新模块

#### ones:wiki

声明一个系统应用模块，用于替换系统的「知识库管理」模块

#### ones:wiki:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「知识库管理 - 页面组」模块

#### ones:wiki:share

声明一个系统应用顶栏菜单页模块，用于替换系统的「知识库管理 - 与我共享」模块

#### ones:wiki:new

声明一个系统应用顶栏菜单页模块，用于在系统的「知识库管理」中追加新模块

#### ones:workspace

声明一个系统应用模块，用于替换系统的「我的工作台」模块

#### ones:workspace:index

声明一个系统应用顶栏菜单页模块，用于替换系统的「我的工作台 - 概览」模块

#### ones:workspace:dashboard

声明一个系统应用顶栏菜单页模块，用于替换系统的「我的工作台 - 仪表盘」模块

#### ones:workspace:filter

声明一个系统应用顶栏菜单页模块，用于替换系统的「我的工作台 - 筛选器」模块

#### ones:workspace:manhour

声明一个系统应用顶栏菜单页模块，用于替换系统的「我的工作台 - 工时」模块

#### ones:workspace:new

声明一个系统应用顶栏菜单页模块，用于在系统的「我的工作台」中追加新模块

#### ones:settings:team

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 团队配置」模块

#### ones:settings:team:info

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 团队配置 - 团队信息」模块

#### ones:settings:team:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 团队配置 - 团队权限」模块

#### ones:settings:team:payment

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 团队配置 - 产品授权管理」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:team:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 团队配置」中追加新模块

#### ones:settings:account

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 账号与成员」模块

#### ones:settings:account:connect

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 账号与成员 - 第三方账号」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:account:member

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 账号与成员 - 成员管理」模块

#### ones:settings:account:group

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 账号与成员 - 用户组」模块

#### ones:settings:account:safe

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 账号与成员 - 信息安全设置」模块

#### ones:settings:account:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 账号与成员」中追加新模块

#### ones:settings:import

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 导入数据」模块

#### ones:settings:import:jira

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 导入数据 - 从 Jira 导入数据」模块

#### ones:settings:import:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 导入数据」中追加新模块

#### ones:settings:appearance

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置」模块

#### ones:settings:appearance:sidebar

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 侧边栏颜色」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:appearance:menu

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 侧边栏菜单设置」模块

#### ones:settings:appearance:favicon

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 浏览器 Favicon」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:appearance:topbar

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 顶栏菜单设置」模块

#### ones:settings:appearance:workday

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 工作日设置」模块

#### ones:settings:appearance:email

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统偏好设置 - 邮件设置」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:appearance:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 系统偏好设置」中追加新模块

#### ones:settings:manhour

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 工时设置」模块

#### ones:settings:manhour:mode

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 工时设置 - 工时模式」模块

#### ones:settings:manhour:limit

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 工时设置 - 登记工时上限」模块

#### ones:settings:manhour:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 工时设置」中追加新模块

#### ones:settings:safe

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统安全」模块

#### ones:settings:safe:log

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统安全 - 操作日志」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:safe:policy

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统安全 - 网络访问安全策略」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:safe:watermark

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 系统安全 - 移动端水印」模块，该模块 `displayConditions.teamSize` 的默认值为 `['single']`

#### ones:settings:safe:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 系统安全」中追加新模块

#### ones:settings:project

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心」模块

#### ones:settings:project:self

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 项目」模块

#### ones:settings:project:self:manage

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 项目 - 项目管理」模块

#### ones:settings:project:self:field

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 项目 - 项目属性」模块

#### ones:settings:project:self:status

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 项目 - 项目状态」模块

#### ones:settings:project:self:role

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 项目 - 项目角色」模块

#### ones:settings:project:self:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心 - 项目」中追加新模块

#### ones:settings:project:issue

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项」模块

#### ones:settings:project:issue:type

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项 - 工作项类型」模块

#### ones:settings:project:issue:field

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项 - 工作项属性」模块

#### ones:settings:project:issue:status

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项 - 工作项状态」模块

#### ones:settings:project:issue:priority

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项 - 优先级」模块

#### ones:settings:project:issue:relate

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 工作项 - 关联关系类型」模块

#### ones:settings:project:issue:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心 - 工作项」中追加新模块

#### ones:settings:project:product

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 产品」模块

#### ones:settings:project:product:field

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 产品 - 产品属性」模块

#### ones:settings:project:product:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心 - 产品」中追加新模块

#### ones:settings:project:config

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 全局配置方案」模块

#### ones:settings:project:config:view

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 全局配置方案 - 视图配置」模块

#### ones:settings:project:config:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心 - 全局配置方案」中追加新模块

#### ones:settings:project:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 权限」模块

#### ones:settings:project:permission:config

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Project 配置中心 - 权限 - 权限配置」模块

#### ones:settings:project:permission:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心 - 权限」中追加新模块

#### ones:settings:project:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Project 配置中心」中追加新模块

#### ones:settings:wiki

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Wiki 配置中心」模块

#### ones:settings:wiki:group

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Wiki 配置中心 - 页面组管理」模块

#### ones:settings:wiki:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Wiki 配置中心 - 权限配置」模块

#### ones:settings:wiki:template

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Wiki 配置中心 - 页面全局模版」模块

#### ones:settings:wiki:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Wiki 配置中心」中追加新模块

#### ones:settings:testcase

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心」模块

#### ones:settings:testcase:base

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 基础配置」模块

#### ones:settings:testcase:base:project

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 基础配置 - 关联项目配置」模块

#### ones:settings:testcase:base:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 基础配置 - 权限配置」模块

#### ones:settings:testcase:base:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - TestCase 配置中心 - 基础配置」中追加新模块

#### ones:settings:testcase:case

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试用例」模块

#### ones:settings:testcase:case:field

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试用例 - 用例属性」模块

#### ones:settings:testcase:case:config

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试用例 - 用例属性配置」模块

#### ones:settings:testcase:case:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - TestCase 配置中心 - 测试用例」中追加新模块

#### ones:settings:testcase:plan

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试计划」模块

#### ones:settings:testcase:plan:field

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试计划 - 测试计划属性」模块

#### ones:settings:testcase:plan:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - TestCase 配置中心 - 测试计划」中追加新模块

#### ones:settings:testcase:report

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试报告」模块

#### ones:settings:testcase:report:template

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - TestCase 配置中心 - 测试报告 - 管理报告模版」模块

#### ones:settings:testcase:report:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - TestCase 配置中心 - 测试报告」中追加新模块

#### ones:settings:testcase:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - TestCase 配置中心」中追加新模块

#### ones:settings:pipeline

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Pipeline 配置中心」模块

#### ones:settings:pipeline:jenkins

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Pipeline 配置中心 - 关联 Jenkins 服务」模块

#### ones:settings:pipeline:repo

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Pipeline 配置中心 - 代码仓管理」模块

#### ones:settings:pipeline:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Pipeline 配置中心」中追加新模块

#### ones:settings:plan

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Plan 配置中心」模块

#### ones:settings:plan:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - Plan 配置中心 - 权限配置」模块

#### ones:settings:plan:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - Plan 配置中心」中追加新模块

#### ones:settings:performance

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 效能管理配置中心」模块

#### ones:settings:performance:permission

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 效能管理配置中心 - 权限配置」模块

#### ones:settings:performance:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 效能管理配置中心」中追加新模块

#### ones:settings:automation

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 流程自动化」模块

#### ones:settings:automation:rule

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 流程自动化 - 自动化规则」模块

#### ones:settings:automation:history

声明一个配置中心的设置页模块，用于替换系统的「配置中心 - 流程自动化 - 运行历史」模块

#### ones:settings:automation:new

声明一个配置中心的设置页模块，用于在系统的「配置中心 - 流程自动化」中追加新模块

#### ones:settings:new

声明一个配置中心的设置页模块，用于在系统的「配置中心」中追加新模块

#### ones:settings:organization:manage

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 组织管理」模块

#### ones:settings:organization:manage:info

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 组织管理 - 组织信息」模块

#### ones:settings:organization:manage:permission

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 组织管理 - 组织权限」模块

#### ones:settings:organization:manage:team

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 组织管理 - 团队管理」模块

#### ones:settings:organization:manage:payment

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 组织管理 - 产品授权管理」模块

#### ones:settings:organization:manage:new

声明一个组织管理的设置页模块，用于在系统的「组织管理 - 组织管理」中追加新模块

#### ones:settings:organization:account

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 账号和成员」模块

#### ones:settings:organization:account:connect

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 账号与成员 - 第三方账号」模块

#### ones:settings:organization:account:manage

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 账号和成员 - 组织成员管理」模块

#### ones:settings:organization:account:new

声明一个组织管理的设置页模块，用于在系统的「组织管理 - 账号和成员」中追加新模块

#### ones:settings:organization:appearance

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统偏好设置」模块

#### ones:settings:organization:appearance:sidebar

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统偏好设置 - 侧边栏颜色」模块

#### ones:settings:organization:appearance:favicon

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统偏好设置 - 浏览器 Favicon」模块

#### ones:settings:organization:appearance:email

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统偏好设置 - 邮件设置」模块

#### ones:settings:organization:appearance:new

声明一个组织管理的设置页模块，用于在系统的「组织管理 - 系统偏好设置」中追加新模块

#### ones:settings:organization:safe

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统安全」模块

#### ones:settings:organization:safe:log

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统安全 - 操作日志」模块

#### ones:settings:organization:safe:policy

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统安全 - 网络访问安全策略」模块

#### ones:settings:organization:safe:watermark

声明一个组织管理的设置页模块，用于替换系统的「组织管理 - 系统安全 - 移动端水印」模块

#### ones:settings:organization:safe:new

声明一个组织管理的设置页模块，用于在系统的「组织管理 - 系统安全」中追加新模块

#### ones:settings:organization:new

声明一个组织管理的设置页模块，用于在系统的「组织管理」中追加新模块

## abilities

@todo