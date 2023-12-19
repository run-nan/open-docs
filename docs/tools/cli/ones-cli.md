---
sidebar_position: 1
---

# ONES CLI Commands

## Overview

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| [create](#create)   | Create project from preset project template by type. |
| [envinfo](#envinfo) | Print environment info                               |

## create

Create project from preset project template by type.

If developer leave the `project-name` blank:

1. And not specified the specific path, then will use current folder name as default project name.
2. And path is also specified, then will use the folder name as default project name.

```shell
ones create [options] [project-name]
```

### Arguments

| Argument       | Description                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `project-name` | The name specified by the developer for the plugin, will also be used as the directory name of the plugin development project. |

### Options

| Option                   | Alias       | Description                                                                                                   |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `--use-default-preset`   | `-d`        | Skip prompts and use default preset                                                                           |
| `--specific-path <path>` | `-s <path>` | Create at a specific path, it will automatically detect relative or absolute path                             |
| `--plugin-type [type]`   |             | Specify the plugin type, support type: <ul><li>`team`</li><li>`organization`</li></ul> Default type is `team` |
| `--policy <policy>`      |             | Specify the [Plugin Policy](../../guide/policy.mdx), default policy is `simple`                               |
| `--ones-version <ver>`   |             | Specify the target ONES system version                                                                        |

## envinfo

Print environment info

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
