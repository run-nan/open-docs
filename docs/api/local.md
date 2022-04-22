# local.yaml
## 本地调试环境配置
插件项目下有两个配置文件，与本地调试用的环境有关。

```Plain Text
/config/local.yaml
/config/local.yaml.example
```
#### 文件功能：
local.yaml：本地项目运行时会读取的配置

local.yaml.example：如果需要添加修改删除local.yaml文件中的字段，那么需要在该配置文件中说明，但是并不会生效，方便管理配置



文件为插件的开发环境配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml
platform:
  address: tcp://119.23.130.213:20001
local:
  id: "88602894"
  language: nodejs
  debug_mode: true
  timeout_sec: 30
  organization_uuid: JGpj1YSe
  team_uuid: ByZSsLU6
  web_service_port: "3000"
  web_service_ip: 192.168.1.77
  user_uuid: WhFspqKJ
  token: xq17SQXW*****************************************
  log_in_local: false
  file_in_local: false
  mysql_in_local: false
  mysql_user_name: ""
  mysql_user_password: ""
  mysql_database_name: ""
  mysql_host: ""
  mysql_port: ""
  instance_uuid: e55a5508
```
## 配置字段解析

### platform

- 类型：`string`


### platform.address 

- 类型：`string`

平台tcp服务host

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

所属组织id，由用户登录后带回

### local.team_uuid

- 类型: `string`

所属团队id,用户登录后选择带回

### local.web\_service\_port

- 类型: `string`

插件前端开发服务器的端口

### local.web\_service\_ip

- 类型: `string`

插件前端开发服务器的ip

### local.user\_uuid

- 类型: `string`

组织负责人账户用户id，用户登录后带回

### local.token

- 类型: `string`

组织负责人账户token，用户登录后带回

### local.log\_in\_local

- 类型: `string`

日志是否记录在本地

### local.file\_in\_local

- 类型: `string`

文件是否创建在本地

### local.mysql\_in\_local

- 类型: `string`

是否使用本地的数据库

### local.mysql\_user\_name

- 类型: `string`

如果用本地的数据库，数据库用户名

### local.mysql\_user\_password

- 类型: `string`

如果用本地的数据库，数据库用户密码

### local.mysql\_database\_name

- 类型: `string`

如果用本地的数据库，数据库名

### local.mysql\_host

- 类型: `string`

如果用本地的数据库，数据库host

### local.mysql\_port

- 类型: `string`

如果用本地的数据库，数据库端口




