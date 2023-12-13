---
sidebar_position: 1
---

# ONES CLI 指令

## 概览

| 指令名称            | 指令描述                         |
| ------------------- | -------------------------------- |
| [create](#create)   | 根据类型从预设项目模板创建项目。 |
| [envinfo](#envinfo) | 输出环境信息。                   |

## create

根据插件工程类型从预设项目模板中初始化插件工程。

如果开发者将参数 `project-name` 留空：

1. 并且不使用 `--specific-path` 选项指定具体路径，则默认使用当前路径中的文件夹名称作为项目名称。
2. 并且使用 `--specific-path` 选项指定具体路径，则使用指定路径中的文件夹名称作为默认项目名称。

```shell
ones create [options] [project-name]
```

### 参数

| 参数名称       | 参数描述                                             |
| -------------- | ---------------------------------------------------- |
| `project-name` | 插件工程名称，默认会将当前目录名称作为插件工程名称。 |

### 选项

| 选项名称                 | 选项别名    | 选项说明                                                                                                          |
| ------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `--use-default-preset`   | `-d`        | 跳过交互式问答并使用默认预设创建插件工程。                                                                        |
| `--specific-path <path>` | `-s <path>` | 在特定的路径中初始化插件工程，CLI 会检测传入路径是相对路径或绝对路径。                                            |
| `--plugin-type [type]`   |             | 指定创建的插件工程类型, 支持的类型有: <ul><li>`team`</li><li>`organization`</li></ul> 默认的插件工程类型为 `team` |
| `--policy <policy>`      |             | 指定插件的[售卖策略](../../guide/policy.mdx)，默认的售卖策略为 `simple`                                           |
| `--ones-version <ver>`   |             | 指定插件要安装到的目标ONES系统版本                                                                                |

## envinfo

输出环境信息。

```shell
ones envinfo

# System:
#   OS: macOS Mojave 10.14.5
#   CPU: (8) x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz
#   Memory: 2.97 GB / 16.00 GB
#   Shell: 5.3 - /bin/zsh
# Binaries:
#   Node: 8.16.0 - ~/.nvm/versions/node/v8.16.0/bin/node
#   Yarn: 1.15.2 - ~/.yarn/bin/yarn
#   npm: 6.9.0 - ~/.nvm/versions/node/v8.16.0/bin/npm
#   Watchman: 4.9.0 - /usr/local/bin/watchman
```
