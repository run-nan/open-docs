# ONES CLI Commands

## Overview

| Module          | Command             | Description                                          |
| --------------- | ------------------- | ---------------------------------------------------- |
| [app](#create)  | [create](#create)   | Create project from preset project template by type. |
| [env](#envinfo) | [envinfo](#envinfo) | Print environment info                               |

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

## envinfo

Print environment info

```shell
ones envinfo
```
