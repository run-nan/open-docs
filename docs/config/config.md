---
nav:
  title: 配置
order: 2
toc: menu
---

# 开发环境配置

插件项目下的 `/config/local.yaml` 文件为插件的开发环境配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml
platform:
  version: 0.2.0
  address: tcp://119.23.130.213:20003
  path_to_plugin: ""
  id: R0000001
local:
  timeout_sec: 60000000
  name: LocalHost
  id: "28696834"
  version: 0.2.0
  language: golang
  languageversion: 1.14.0
  organization_uuid: JGpj1YSe
  team_uuid: H5Nq6uf6
  sub_version: 1.14.0
  min_system_version: 3.2.0
  web_service_port: "3000"
  instance_uuid: 3468f045
  token: GX0UHO9VHwYoOWbfT2Mt2KoMlsgfD3tc24T3g5owznNZNzg9kxWhfxRISeiLeXMl
  user_uuid: WhFspqKJ
  log_in_local: false
  file_in_local: false
  mysql_in_local: false
  mysql_user_name: ""
  mysql_user_password: ""
  mysql_database_name: ""
  mysql_host: ""
  mysql_port: ""
```

## platform

### platform.version

- 类型：`string`
- 默认值：`0.2.0`

平台版本

### platform.id

- 类型：`string`
- 默认值：`R0000001`

平台id

### platform.address

- 类型：`string`
- 默认值：``

平台tcp服务host

### platform.path_to_plugin

- 类型：`string`
- 默认值：``

上传插件的路径

## local

### local.version

- 类型：`string`
- 默认值：`0.2.0`

host版本

### local.web_service_port

- 类型：`number`
- 默认值：`3000`

插件前端开发服务器的端口

### local.timeout_sec

- 类型：`number`
- 默认值：`60000000`

每个请求超时限制

### local.name

- 类型：`string`
- 默认值：`LocalHost`

host名称

### local.id

- 类型：`string`
- 默认值：`随机生成`

hosted由cli工具随机生成

### local.language

- 类型：`string`
- 默认值：`goland`

语言

### local.languageversion

- 类型：`string`
- 默认值：`1.14.0`

语言版本

### local.organization_uuid

- 类型：`string`
- 默认值：``

所属组织id，由用户登录后带回

### local.team_uuid

- 类型：`string`
- 默认值：``

所属团队id,用户登录后选择带回

### local.sub_version

- 类型：`string`
- 默认值：`1.14.0`

预留版本号

### local.min_system_version

- 类型：`string`
- 默认值：`3.2.0`

ones平台版本号

### local.instance_uuid

- 类型：`string`
- 默认值：`随机生成`

插件实例id，由cli工具随机生成

### local.token

- 类型：`string`
- 默认值：``

组织负责人账户token，用户登录后带回

### local.user_uuid

- 类型：`string`
- 默认值：``

组织负责人账户用户id，用户登录后带回

### local.log_in_local

- 类型：`bool`
- 默认值：`false`

日志是否记录在本地

### local.file_in_local

- 类型：`bool`
- 默认值：`false`

文件是否创建在本地

### local.mysql_in_local

- 类型：`bool`
- 默认值：`false`

是否用本地的数据库

### local.mysql_user_name

- 类型：`string`
- 默认值：``

如果用本地的数据库，数据库用户名

### local.mysql_user_password

- 类型：`string`
- 默认值：``

如果用本地的数据库，数据库用户密码

### local.mysql_database_name

- 类型：`string`
- 默认值：``

如果用本地的数据库，数据库名

### local.mysql_host

- 类型：`string`
- 默认值：``

如果用本地的数据库，数据库host

### local.mysql_port

- 类型：`string`
- 默认值：``

如果用本地的数据库，数据库端口

# 测试环境配置

插件项目下的 `/config/ci-deploy.yaml` 文件为插件的测试环境配置信息，使用 [YAML](https://yaml.org/)，格式：分支号.某字段；语法：

```yaml
default.host: https://mars-dev.myones.net:17730/project
default.ones-check-id: 9AgXycMJ
default.ones-check-point: team
default.ones-plugin-id: built_in_apis
default.organization_uuid: L7i7kYQA
default.team_uuid: 9AgXycMJ
default.token: 3cPwrDp5ljXFPRYFkkwnFen9LuopdZUPYGZHwmVPq3Oc08iZitvCBmI9EiqnCWKt
default.user_uuid: 59rkUQXe
```

## default.host

- 类型：`string`
- 默认值：`https://devapi.myones.net/project/master`

测试环境host

## default.ones-check-id

- 类型：`string`
- 默认值：``

对应权限检查点,与团队id相同

## default.ones-check-point

- 类型：`string`
- 默认值：`team`

对应权限检查点,默认team

## default.ones-plugin-id

- 类型：`string`
- 默认值：`built_in_apis`

对应后端插件的实例ID

## default.organization_uuid

- 类型：`string`
- 默认值：``

所属组织id，由用户登录后带回

## default.team_uuid

- 类型：`string`
- 默认值：``

所属团队id，用户登录后带回

## default.token

- 类型：`string`
- 默认值：``

组织负责人账户用户token，用户登录后带回

## default.user_uuid

- 类型：`string`
- 默认值：``

组织负责人账户用户id，用户登录后带回

