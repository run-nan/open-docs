---
sidebar_position: 2
---

# CLI 使用

开放平台命令行界面诊断工具，它能够根据你设置的配置，连接 ONES 开放平台，查看平台与插件的日志与状态，以便于你排查问题，或者将当前数据导出，交给他人联合排查。

:::note
其主要功能与桌面端相同。
:::

## 要求

| **ONES** |
| -------- |
| 3.11.xx+ |

## 安装

请参见 [下载与安装](./install#命令行界面工具)。

## 帮助信息

CLI 提供了多种方式的帮助信息输出方式，你可以在每个命令的后面添加 `--help` 输出当前命令的帮助信息，也可以使用 [`help`](./cli-commands#help) 命令查看帮助信息。

```bash
diagtools help
```

同时也支持命令的 Tab 键自动补全功能，你可以使用 [`autocomplete`](./cli-commands#autocomplete) 命令输出当前环境自动补全功能的安装。

```bash
diagtools autocomplete
```

## 更新配置 (config)

CLI 提供了 [`config`](./cli-commands#config-set) 子命令，你可以使用以下命令对当前使用的配置进行管理。

- `config get`
- `config set`
- `config list`
- `config delete`

:::note
CLI 初始行为与桌面端稍有不同，默认会为你自动创建一个名为 default 的配置。

如果你只有一份配置（只有一个可以连接的开放平台），你可以直接使用 `config` 子命令，而不需要使用任何 `profile` 子命令。
:::

```bash
diagtools config set address tcp://127.0.0.1:9006
```

## 添加与切换配置 (profile)

CLI 提供了 [`profile`](./cli-commands#profile-new) 子命令，如果你有多个需要连接的服务器配置，你使用以下命令对每个配置文件进行管理。

- `profile new`
- `profile use`
- `profile delete`
- `profile list`

下面是新增第二份配置文件并使用的示例：

```bash
$ diagtools profile add secondProfileName

$ diagtools profile use secondProfileName

$ diagtools config set address tcp://127.0.0.1:9007
```

## 查看日志 (log)

在你的配置正确或者临时指定了必填配置的情况下，你可以使用 [`log`](./cli-commands#log) 命令查看各个组件的日志。

交互式选择查看某个插件的日志：

```bash
diagtools log plugin
```

非交互式指定查看某个插件的日志（id 为 instanceID，如果 id 不存在，则无信息输出）：

```bash
diagtools log plugin --id ce1f55d2
```

交互式选择查看某个宿主机实例的日志（非交互式命令同上）：

```bash
diagtools log host
```

交互式选择查看某个平台实例的日志（非交互式命令同上）：

```bash
diagtools log platform
```

## 查看组件状态 (list)

在你的配置正确或者临时指定了必填配置的情况下，你可以使用 [`list`](./cli-commands#list) 命令查看各个组件的状态。

查看能力状态：

```bash
diagtools list abilities
```

查看插件状态：

```bash
diagtools list plugins
```

查看组件状态：

```bash
diagtools list components
```

## 转存数据 (dump)

CLI 提供了 [`dump`](./cli-commands#dump) 命令，在服务器上不方便查看的时，你可以使用 `dump` 命令导出，并导入到桌面端查看。

导出到当前目录（默认文件名后缀为当前 UTC 时间的年月日时分秒）：

```bash
diagtools dump .
```

导出到当前目录并指定名称：

```bash
diagtools dump ./data.json
```
