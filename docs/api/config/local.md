---
sidebar_position: 4
---

# local.yaml

## 文件描述

配置文件与本地调试用的环境有关，插件工程内置脚手架 `op` 会在执行本地调试相关指令时消费该文件内容

文件处于项目中的：

```Plain Text
/config/local.yaml
```

需要注意的是，`local.yaml` 中存储的信息是本地调试配置，因此对于 `local.yaml` 文件的变更**不会被 `git` 记录并提交**，以避免用户凭证等信息提交至远端从而导致信息安全风险

## 文件结构

```yaml
platform:
  address: tcp://119.23.130.213:20001
  username: ''
  password: ''
local:
  id: '88602894'
  language: nodejs
  debug_mode: true
  timeout_sec: 30
  organization_uuid: JGpj1YSe
  team_uuid: ByZSsLU6
  web_service_port: '3000'
  web_service_ip: 192.168.1.77
  user_uuid: WhFspqKJ
  log_in_local: false
  file_in_local: false
  mysql_in_local: false
  mysql_user_name: ''
  mysql_user_password: ''
  mysql_database_name: ''
  mysql_host: ''
  mysql_port: ''
  instance_uuid: e55a5508
```

## 配置字段解析

### platform

- 类型：`string`

### platform.address

- 类型：`string`

平台 tcp 服务 host

### platform.username

- 类型：`string`

用于加载用户凭证的邮箱或者手机号

### platform.password

- 类型：`string`

用于加载用户凭证的邮箱或者手机号

### local

- 类型：`string`

### local.id

- 类型: `string`

id 由 op 工具随机生成

### local.language

- 类型: `string`

语言

### local.debug_mode

- 类型: `string`

开启调试模式

### local.timeout_sec

- 类型: `string`

每个请求超时限制

### local.organization_uuid

- 类型: `string`

所属组织 id，由用户登录后带回

### local.team_uuid

- 类型: `string`

所属团队 id,用户登录后选择带回

### local.web_service_port

- 类型: `string`

插件前端开发服务器的端口

### local.web_service_ip

- 类型: `string`

插件前端开发服务器的 ip

### local.user_uuid

- 类型: `string`

组织负责人账户用户 id，用户登录后带回

### local.log_in_local

- 类型: `string`

日志是否记录在本地

### local.file_in_local

- 类型: `string`

文件是否创建在本地

### local.mysql_in_local

- 类型: `string`

是否使用本地的数据库

### local.mysql_user_name

- 类型: `string`

如果用本地的数据库，数据库用户名

### local.mysql_user_password

- 类型: `string`

如果用本地的数据库，数据库用户密码

### local.mysql_database_name

- 类型: `string`

如果用本地的数据库，数据库名

### local.mysql_host

- 类型: `string`

如果用本地的数据库，数据库 host

### local.mysql_port

- 类型: `string`

如果用本地的数据库，数据库端口
