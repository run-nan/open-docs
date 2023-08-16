# local.yaml

插件本地调试配置文件，插件工程内置脚手架 `op` 会在执行本地调试相关指令时消费该文件内容。

:::note
`local.yaml` 中存储的是本地调试配置，因此对于 `local.yaml` 文件的变更**不会被 `git` 记录并提交**，以避免用户凭证等信息提交至远端从而导致信息安全风险。
:::

文件位置与结构：

```yaml title="/config/local.yaml"
platform:
  address: tcp://172.16.1.1:9006
  username: ''
  password: ''
local:
  id: '********'
  language: nodejs
  debug_mode: true
  timeout_sec: 30
  organization_uuid: '********'
  team_uuid: '********'
  web_service_port: '3000'
  web_service_ip: 127.0.0.1
  user_uuid: '********'
  log_in_local: false
  log_level: info
  file_in_local: false
  mysql_in_local: false
  mysql_user_name: ''
  mysql_user_password: ''
  mysql_database_name: ''
  mysql_host: ''
  mysql_port: ''
  instance_uuid: '********'
```

## platform

开放平台相关配置。

### address

- **类型：**`string`
- **示例：**`tcp://172.16.1.1:9006`

开放平台主机服务 `TCP` 地址。

### baseURL

- **类型：**`string`
- **示例：**`https://172.16.1.1:9000`

ONES 实例接口访问地址。

### username

- **类型：**`string`

用于加载用户凭证的邮箱或者手机号。

### password

- **类型：**`string`

用于加载用户凭证的密码。

## local

本地插件相关配置。

### id

- **类型：**`string`

插件使用的 Host ID，由 `op` 工具随机生成，一般无需修改。

### language

- **类型：**`'nodejs'`

插件后端所使用的语言，一般无需修改。

### debug_mode

- **类型：**`boolean`

开启 Host 的调试模式。

:::note
这将会打印大量的日志，如果你需要调试，我们更推荐你在插件代码中添加日志打印进行调试。
:::

### timeout_sec

- **类型：**`number`
- **单位：**秒

接收开放平台消息的最大时长。

### organization_uuid

- **类型：**`string`

所属组织 ID，由用户登录后带回，一般无需修改。

### team_uuid

- **类型：**`string`

所属团队 ID，用户登录后选择带回，一般无需修改。

### web_service_port

- **类型：**`string`
- **默认值：**`3000`

插件前端本地开发服务端口。

### web_service_ip

- **类型：**`string`
- **示例：**`127.0.0.1`

插件前端开发服务器的 IP。

### user_uuid

- **类型：**`string`

组织负责人账户 UUID，用户登录后带回，一般无需修改。

### log_in_local

- **类型：**`boolean`
- **已废弃**

日志是否记录在本地。

:::note
已废弃，本地与开放平台均会记录日志。
:::

### log_level

- 类型: `'fatal' | 'error' | 'warning' | 'info' | 'debug'`

调整控制台输出的级别，默认值为 `info`。

### file_in_local

- **类型：**`boolean`

`@ones-op/node-file` 提供的能力，工作区间是否是本地插件的 `workspace` 目录。

### mysql_in_local

- **类型：**`boolean`

`@ones-op/node-database` 提供的能力，数据库是否连接本地 MySQL。

:::caution
如果使用本地数据库，你还需要填写如下配置：

- [mysql_user_name](#mysql_user_name)
- [mysql_user_password](#mysql_user_password)
- [mysql_database_name](#mysql_database_name)
- [mysql_host](#mysql_host)
- [mysql_port](#mysql_port)

:::

### mysql_user_name

- **类型：**`string`
- **生效条件：**开启 `mysql_in_local`

本地数据库用户名。

### mysql_user_password

- **类型：**`string`
- **生效条件：**开启 `mysql_in_local`

本地数据库用户密码。

### mysql_database_name

- **类型：**`string`
- **生效条件：**开启 `mysql_in_local`

本地数据库名。

### mysql_host

- **类型：**`string`
- **生效条件：**开启 `mysql_in_local`

本地数据库 Host。

### mysql_port

- **类型：**`string`
- **生效条件：**开启 `mysql_in_local`

本地数据库端口。

### instance_uuid

- **类型：**`string`

调试插件的实例 UUID。

如果值为空，则开放平台会随机生成一个 UUID 并回填到 local.yaml，后续持续使用此 UUID。

:::note
执行 `npx op invoke clear` 不会清空此字段。
:::

执行 `npx op invoke run` 后，终端展示如下内容：

```Plain Text
...
本地调试返回值: {"instance_uuid":"********"}
...
```

你可以从本地调试命令的返回值或着 `config/local.yaml` 文件内得到调试的插件实例 `instance_uuid`。

### dangerously_accept_unauthorized_https

- **类型: ** `boolean`

是否允许不安全的 HTTPS 请求，除非你清楚自己在做什么，否则不要开启此选项。
