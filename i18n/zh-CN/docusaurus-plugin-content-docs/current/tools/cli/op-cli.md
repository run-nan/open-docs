# OP CLI 指令

当前章节列出了可用于通过 OP CLI 构建插件的指令。

:::note
OP CLI 会作为项目依赖安装在插件工程中。

开发者需要通过 [npx](https://docs.npmjs.com/cli/v8/commands/npx) 调用 CLI 的指令：`npx op [command] [arguments] [options]`
:::

## 概览

| 模块名称         | 指令名称              | 指令描述                                                                               |
| ---------------- | --------------------- | -------------------------------------------------------------------------------------- |
| [app](#init)     | [init](#init)         | 初始化项目依赖项和项目设置。                                                           |
|                  | [add](#add)           | 为插件工程添加「前端插槽」或「开放能力」。                                             |
|                  | [packup](#packup)     | 构建插件工程并在工程根目录下生成 `.opk` 文件。                                         |
| [config](#login) | [login](#login)       | 将用于在特定环境中获取用户凭证的参数存储到 `config/local.yaml` 中。                    |
|                  | [ci](#ci)             | 将用于在 (gitlab) CI 的特定分支中获取用户凭证的参数存储到 `config/ci-deploy.yaml` 中。 |
|                  | [pickteam](#pickteam) | 获取团队列表并使用团队列表中的团队信息更新配置文件，以进行本地调试或持续集成。         |
| [debug](#invoke) | [invoke](#invoke)     | 在本地启动插件项目并调用插件的一个或多个生命周期。                                     |

## init

初始化项目依赖项和项目设置。

它会在安装 npm 依赖项后自动执行，开发人员可以查看 `packages.json` 上的 `scripts` 字段以了解更多详细信息。

```shell
npx op init
```

## add

为插件工程添加「前端插槽」或「开放能力」。

```shell
npx op add <target-type>

# 为插件工程添加「前端插槽」或「子前端插槽」
npx op add module
npx op add sub-module

# 为插件工程添加「开放能力」
npx op add ability
```

### 参数

| 参数名称      | 参数描述                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `target-type` | 指定需要添加的内容类型，支持的类型有： <ul><li>`module`</li><li>`sub-module`</li><li>`ability`</li></ul> |

## packup

构建插件工程并在工程根目录下生成 `.opk` 文件。

```shell
npx op packup [filename]
```

### 参数

| 参数名称   | 参数描述                                 |
| ---------- | ---------------------------------------- |
| `filename` | 指定 `.opk` 文件的名称，默认为项目名称。 |

## login

将用于在特定环境中获取用户凭证的参数存储到 `config/local.yaml` 中。

参数 `baseURL` 和 `hostURL` 是协议敏感的，不同的协议类型将被视为不同的 `scope`。

登录成功后，CLI 会将作用域参数存储到 `~/.ones/cli-plugin.yaml` 中，并被用于本地调试。

同时，如果当前项目之前从未选择过「团队信息」，此命令将尝试自动运行 `npx op pickteam -t local`。

```shell
npx op packup [options] [filename]
```

### 参数

| 参数名称  | 参数描述                    |
| --------- | --------------------------- |
| `baseURL` | 指定登录的环境 URL          |
| `hostURL` | 指定用于本地调试的 host URL |

### 选项

| 选项名称                | 选项别名        | 选项描述                                                                      |
| ----------------------- | --------------- | ----------------------------------------------------------------------------- |
| `--username <username>` | `-u <username>` | 用作用户名的电子邮件地址或电话号码。                                          |
| `--password <password>` | `-p <password>` | 密码                                                                          |
| `--scope [url]`         | `-s [url]`      | 使用特定 `scope` 参数登录，默认为当前环境 URL，该选项与 `-u`、`-p` 选项互斥。 |

### 示例

```shell
# 进入交互式问答流程，输入登录参数
npx op login

# 指定登录环境为 'https://dev.ones.ai' 并进入交互式问答流程输入剩余的参数：hostURL, username, password
npx op login https://dev.ones.ai

# 指定登录环境为 'https://dev.ones.ai' 并将 hostURL 设置为 'tcp://dev.ones.ai:9006'
# 同时指定用户凭证信息，这将直接执行登录操作
npx op login https://dev.ones.ai tcp://dev.ones.ai:9006 -u test@ones.ai -p password

# 指定登录环境为 'https://partnerdev.ones.ai'，但使用 'https://dev.ones.ai' scope 下保存的用户凭证
npx op login https://partnerdev.ones.ai tcp://dev.ones.ai:9006 -s https://dev.ones.ai
```

## ci

将用于在 (gitlab) CI 的特定分支中获取用户凭证的参数存储到 `config/ci-deploy.yaml` 中。

参数 `url` 是协议敏感的，不同的协议类型将被视为不同的 `scope`。

与 [登录命令](#login) 不同，当前命令不会将登录参数作为 `scope` 存储到 `~/.ones/cli-plugin.yaml` 中。

但是如果运行完成后当前分支没有选择过团队信息，那么会自动执行 `npx op pickteam -t ci -b $currentSpecifyBranch`。

```shell
npx op ci [options] [url]
```

### 参数

| 参数名称 | 参数描述           |
| -------- | ------------------ |
| `url`    | 指定登录的环境 URL |

### 选项

| 选项名称                | 选项别名        | 选项描述                                                                      |
| ----------------------- | --------------- | ----------------------------------------------------------------------------- |
| `--username <username>` | `-u <username>` | 用作用户名的电子邮件地址或电话号码。                                          |
| `--password <password>` | `-p <password>` | 密码。                                                                        |
| `--scope [url]`         | `-s [url]`      | 使用特定 `scope` 参数登录，默认为当前环境 URL，该选项与 `-u`、`-p` 选项互斥。 |

### 示例

```shell
# 进入交互式问答流程，输入持续集成部署参数
npx op ci

# 指定持续集成的环境地址为 'https://dev.ones.ai'
# 然后进入交互式问答流程输入剩余参数：branch, username, password
npx op ci https://dev.ones.ai

# 指定持续集成的环境地址为 'https://dev.ones.ai'，并指定用户凭证信息
npx op ci https://dev.ones.ai -b next -u test@ones.ai -p password

# 使用'https://dev.ones.ai'作用域参数，指定部署的环境地址为'https://partnerdev.ones.ai'
# 制定持续集成的环境地址为 'https://partnerdev.ones.ai'，但使用 'https://dev.ones.ai' scope 下保存的用户凭证
npx op ci https://partnerdev.ones.ai -b next -s https://dev.ones.ai
```

## pickteam

使用存储在配置文件中的用户凭证(`config/local.yaml`)获取团队列表，并使用团队列表中的团队信息更新配置文件以用于本地调试或持续集成。

在选择团队信息之前，需要先执行 `npx op login` 或 `npx op ci` 完成登录操作。

```shell
npx op pickteam [options] [target]
```

### 参数

| 参数名称 | 参数描述                                                             |
| -------- | -------------------------------------------------------------------- |
| `target` | 指定需要更新团队信息的目标类型配置，目标类型只能是 `local` 或 `ci`。 |

### 选项

| 选项名称                 | 选项别名      | 选项描述                           |
| ------------------------ | ------------- | ---------------------------------- |
| `--branch-name <branch>` | `-b <branch>` | 为持续集成配置指定部署的分支名称。 |
| `--team-uuid <uuid>`     |               | 匹配团队列表中指定的团队 UUID。    |
| `--team-name <name>`     |               | 匹配团队列表中指定的团队名称。     |

:::note
`-b --branch-name <branch>` 选项只在 `target` 为 `ci` 时生效，留空或不指定值将进入交互式问答补充分支名。
:::

:::note
当同时指定 `--team-uuid` 和 `--team-name` 参数时，只有 `--team-uuid` 参数会生效。
:::

### 示例

```shell
# 使用存储在 `config/local.config` 中的用户凭证获取团队列表
# 在这之前需要先执行 `npx op login` 指令
npx op pickteam local

# 进入交互式问答选择持续集成分支
# 并使用存储在 `config/ci-deploy.config` 中的分支信息中的用户凭证获取团队列表
# 在这之前需要先执行 `npx op ci` 指令
npx op pickteam ci

# 使用存储在 `config/ci-deploy.config` 中的 `next` 分支信息中的用户凭证获取团队列表
# 请注意分支名称区分大小写，分支名称必须与`config/ci-deploy.config`中的分支名称相同
# 如果没有匹配的分支名称，CLI 将抛出错误
npx op pickteam ci -b next

# 使用存储在 `config/local.config` 中的用户凭证获取团队列表
# 获取团队列表后，CLI 将尝试选择团队 UUID 为 “T7YB134K” 的团队信息
# 如果没有成功匹配团队 UUID，CLI 将抛出错误
npx op pickteam local --team-uuid T7YB134K

# 使用存储在 `config/ci-deploy.config` 中的 `next` 分支信息中的用户凭证获取团队列表
# 获取团队列表后，CLI 将尝试选择团队名称为 `TestTeamName` 的团队信息
# 如果没有成功匹配团队名称，CLI 将抛出错误
npx op pickteam ci -b next --team-name TestTeamName
```

## invoke

在本地启动插件项目并调用插件的一个或多个「生命周期」。

「流程」和「生命周期」之间的区别在于「流程」将包含多个「生命周期」。

```shell
npx op invoke [options] <target>
```

### 参数

| 参数名称 | 参数描述                               |
| -------- | -------------------------------------- |
| `target` | 指定您要调用的「流程」或「生命周期」。 |

### 可调用的「生命周期」名称

- `install`
- `enable`
- `start`
- `stop`
- `disable`
- `uninstall`

### 可调用的「流程」名称

| 流程    | 包含的生命周期                                                 |
| ------- | -------------------------------------------------------------- |
| `run`   | <ul><li>`install`</li><li>`enable`</li><li>`start`</li></ul>   |
| `clear` | <ul><li>`stop`</li><li>`disable`</li><li>`uninstall`</li></ul> |

### 选项

| 选项名称                    | 选项别名 | 选项描述                                                                                                                                             |
| --------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--webpack-logging <level>` |          | 指定 Webpack 日志级别，支持级别有: <ul><li>`none`</li><li>`error`</li><li>`warn`</li><li>`info`</li><li>`verbose`</li></ul> 默认日志级别为 `error`。 |
| `--reinstall-plugin`        |          | 当目标环境中已安装的插件 `appid` 与当前插件工程冲突时，会尝试卸载目标环境中的插件并安装本地工程中的插件内容。                                        |
