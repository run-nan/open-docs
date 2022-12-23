---
sidebar_position: 3
description: ONES 开发平台诊断工具 CLI 命令。
---

# CLI 命令

## 概览

ONES 开发平台诊断工具 CLI 命令。

:::note
开发者调用 CLI 的指令模版：`diagtools [command] [arguments] [options]`
:::

## 索引

| 指令名称                          | 指令描述                       |
| --------------------------------- | ------------------------------ |
| [help](#help)                     | 展示 Diagtools CLI 的帮助信息  |
| [autocomplete](#autocomplete)     | 显示命令行「自动完成」安装说明 |
| [config set](#config-set)         | 设置当前配置文件的配置         |
| [config get](#config-get)         | 获取当前配置文件的配置         |
| [config delete](#config-delete)   | 删除当前配置文件的配置         |
| [config list](#config-list)       | 列出当前配置文件的所有配置     |
| [profile create](#profile-create) | 创建一个配置文件               |
| [profile use](#profile-use)       | 切换使用指定配置文件           |
| [profile delete](#profile-delete) | 删除指定配置文件               |
| [profile list](#profile-list)     | 列出所有配置文件               |
| [log](#log)                       | 打印组件日志                   |
| [list](#list)                     | 列出组件状态                   |
| [dump](#dump)                     | 转储当前时刻数据               |

## 命令

### help

展示 Diagtools CLI 的帮助信息。

```shell
diagtools help [COMMAND]
```

#### 参数

| 参数名称  | 参数描述                                                  |
| --------- | --------------------------------------------------------- |
| `COMMAND` | 需要显示帮助信息的 Diagtools CLI 提供的任意 [命令](#命令) |

#### 选项

| 选项名称            | 选项别名 | 选项描述           |
| ------------------- | -------- | ------------------ |
| `--nested-commands` | `-n`     | 输出是否包含子命令 |

#### 示例

```bash
$ diagtools help autocomplete
display autocomplete installation instructions

USAGE
  $ diagtools autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ diagtools autocomplete

  $ diagtools autocomplete bash

  $ diagtools autocomplete zsh

  $ diagtools autocomplete --refresh-cache
```

### autocomplete

显示命令行「自动完成」安装说明。

```shell
diagtools autocomplete [SHELL]
```

#### 参数

| 参数名称 | 参数描述 |
| -------- | -------- |
| `SHELL`  | 终端类型 |

#### 选项

| 选项名称          | 选项别名 | 选项描述                   |
| ----------------- | -------- | -------------------------- |
| `--refresh-cache` | `-r`     | 刷新缓存（忽略显示的指令） |

#### 示例

```bash
$ diagtools autocomplete
Building the autocomplete cache... done

Setup Instructions for DIAGTOOLS CLI Autocomplete ---

1) Add the autocomplete env var to your zsh profile and source it
$ printf "eval $(diagtools autocomplete:script zsh)" >> ~/.zshrc; source ~/.zshrc

NOTE: After sourcing, you can run `$ compaudit -D` to ensure no permissions conflicts are present

2) Test it out, e.g.:
$ diagtools <TAB>                 # Command completion
$ diagtools command --<TAB>       # Flag completion

Enjoy!
```

根据提示，运行提示命令

```bash
$ printf "eval $(diagtools autocomplete:script zsh)" >> ~/.zshrc
$ source ~/.zshrc
```

尝试使用补全功能

```
$ diagtools l <TAB>
list  -- list the component status
log   -- print a component logs
```

### config set

设置当前配置文件的配置。

```bash
diagtools config set KEY VALUE
```

#### 参数

| 参数名称 | 参数描述   |
| -------- | ---------- |
| `KEY`    | 配置变量名 |
| `VALUE`  | 配置变量值 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools config set address tcp://127.0.0.1:9006
config set successfully
```

### config get

获取当前配置文件的配置。

```bash
diagtools config get KEY
```

#### 参数

| 参数名称 | 参数描述   |
| -------- | ---------- |
| `KEY`    | 配置变量名 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools config get address
tcp://127.0.0.1:9006
```

### config delete

删除当前配置文件的配置。

```bash
diagtools config delete KEY
```

#### 参数

| 参数名称 | 参数描述   |
| -------- | ---------- |
| `KEY`    | 配置变量名 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools config delete address
config delete successfully
```

### config list

列出当前配置文件的所有配置。

```bash
diagtools config list
```

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools config list
address = tcp://127.0.0.1:9006
```

### profile create

创建一个配置文件。

:::caution
此命令并不会帮你切换使用新配置，你需要使用 [`profile use`](#profile-use) 手动切换。
:::

```bash
diagtools profile create NAME
```

#### 参数

| 参数名称 | 参数描述     |
| -------- | ------------ |
| `NAME`   | 新配置文件名 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
diagtools profile create example
The example profile successfully created
```

### profile use

切换使用指定配置文件。

```bash
diagtools profile use NAME
```

#### 参数

| 参数名称 | 参数描述   |
| -------- | ---------- |
| `NAME`   | 配置文件名 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools profile use example
The example profile successfully switched
```

### profile delete

删除指定配置文件。

```bash
diagtools profile delete NAME
```

#### 参数

| 参数名称 | 参数描述   |
| -------- | ---------- |
| `NAME`   | 配置文件名 |

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools profile delete example
The example profile successfully deleted
```

### profile list

列出所有配置文件。

```bash
diagtools profile list
```

#### 选项

| 选项名称    | 选项描述 |
| ----------- | -------- |
| `--verbose` | 详细输出 |

#### 示例

```bash
$ diagtools profile list
example
```

### log

打印组件日志。

```bash
diagtools log TYPE
```

#### 参数

| 参数名称 | 参数描述                                       |
| -------- | ---------------------------------------------- |
| `TYPE`   | 组件类型，选项：(`platform`, `host`, `plugin`) |

#### 选项

| 选项名称                     | 选项别名 | 选项描述                                     |
| ---------------------------- | -------- | -------------------------------------------- |
| `--verbose`                  |          | 详细输出                                     |
| `--address <value>`          |          | 覆盖配置中 `address` 属性执行                |
| `--organizationUUID <value>` |          | 覆盖配置中 `organizationUUID` 属性执行       |
| `--teamUUID <value>`         |          | 覆盖配置中 `teamUUID` 属性执行               |
| `--extended`                 | `-x`     | 展示额外的列                                 |
| `--columns <value>`          |          | 仅显示提供的列（逗号分隔）                   |
| `--filter <value>`           |          | 通过字符串匹配过滤属性，例如:name=foo        |
| `--from <value>`             |          | 读取本地文件（该值可以是相对路径或绝对路径） |

#### 示例

```bash
$ diagtools log plugin --id ce1f55d2
{"Level":"Info","Message":"[Plugin] Install","Time":"2022/11/29 14:55:27"}
{"Level":"Info","Message":"[Plugin] Enable","Time":"2022/11/29 14:56:05"}
```

### list

列出组件状态。

```bash
diagtools list TYPE
```

#### 参数

| 参数名称 | 参数描述                                               |
| -------- | ------------------------------------------------------ |
| `TYPE`   | 组件类型，选项：(`plugins`, `abilities`, `components`) |

#### 选项

| 选项名称                     | 选项别名       | 选项描述                                                 |
| ---------------------------- | -------------- | -------------------------------------------------------- |
| `--verbose`                  |                | 详细输出                                                 |
| `--address <value>`          |                | 覆盖配置中 `address` 属性执行                            |
| `--organizationUUID <value>` |                | 覆盖配置中 `organizationUUID` 属性执行                   |
| `--teamUUID <value>`         |                | 覆盖配置中 `teamUUID` 属性执行                           |
| `--extended`                 | `-x`           | 展示额外的列                                             |
| `--csv`                      | `--output=csv` | csv 格式输出                                             |
| `--output <option>`          |                | 以更加计算机友好的格式输出 (选项：`csv`, `json`, `yaml`) |
| `--columns <value>`          |                | 仅显示提供的列（逗号分隔）                               |
| `--filter <value>`           |                | 通过字符串匹配过滤属性，例如:name=foo                    |
| `--from <value>`             |                | 读取本地文件（该值可以是相对路径或绝对路径）             |
| `--no-header`                |                | 隐藏表头输出                                             |
| `--no-truncate`              |                | 不要截断输出以适合屏幕                                   |
| `--sort <value>`             |                | 根据标题属性排序(以'-'开头为降序)                        |

#### 示例

```bash
$ diagtools list plugins
 InstanceID AppName    AppID     AppVersion Scope        ScopeUUID HostID IsLocal Status         RealStatus     Apis
 ────────── ────────── ───────── ────────── ──────────── ───────── ────── ─────── ────────────── ────────────── ────────────────────────────────────────
 ce1f55d2   Example    FSksKfHR3 1.0.0      Team         Pgg7h253         false   DisableSuccess DisableSuccess [{""Methods":["POST"],"Url":"/hello",...
```

### dump

转储当前时刻数据。

```bash
diagtools dump PATH
```

#### 参数

| 参数名称 | 参数描述                               |
| -------- | -------------------------------------- |
| `PATH`   | 转储路径，该值可以是相对路径或绝对路径 |

#### 选项

| 选项名称                     | 选项描述                               |
| ---------------------------- | -------------------------------------- |
| `--verbose`                  | 详细输出                               |
| `--address <value>`          | 覆盖配置中 `address` 属性执行          |
| `--organizationUUID <value>` | 覆盖配置中 `organizationUUID` 属性执行 |
| `--teamUUID <value>`         | 覆盖配置中 `teamUUID` 属性执行         |

#### 示例

```bash
$ diagtools dump .
dump successfully
```
