---
sidebar_position: 3
description: ONES Open Platform Diagtools CLI Commands.
---

# CLI Commands

## Overview

ONES Open Platform Diagtools CLI Commands.

:::note
The developer invokes the CLI command template: `diagtools [command] [arguments] [options]`
:::

## Index

| Command                           | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| [help](#help)                     | Display help for Diagtools CLI                 |
| [autocomplete](#autocomplete)     | Display autocomplete installation instructions |
| [config set](#config-set)         | Set the current profile variable               |
| [config get](#config-get)         | Get the current profile variable               |
| [config delete](#config-delete)   | Delete the current profile variable            |
| [config list](#config-list)       | List the current profile variables             |
| [profile create](#profile-create) | Create a new profile                           |
| [profile use](#profile-use)       | Switch a specified profile                     |
| [profile delete](#profile-delete) | Delete a specified profile                     |
| [profile list](#profile-list)     | List all profiles                              |
| [log](#log)                       | Print a component logs                         |
| [list](#list)                     | List the component status                      |
| [dump](#dump)                     | Dump current time data                         |

## Command

### help

Display help for Diagtools CLI.

```shell
diagtools help [COMMAND]
```

#### Arguments

| Argument  | Description                           |
| --------- | ------------------------------------- |
| `COMMAND` | [Command](#command) to show help for. |

#### Options

| Option              | Alias | Description                                |
| ------------------- | ----- | ------------------------------------------ |
| `--nested-commands` | `-n`  | Include all nested commands in the output. |

#### Examples

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

Display autocomplete installation instructions.

```shell
diagtools autocomplete [SHELL]
```

#### Arguments

| Argument | Description |
| -------- | ----------- |
| `SHELL`  | shell type  |

#### Options

| Option            | Alias | Description                                     |
| ----------------- | ----- | ----------------------------------------------- |
| `--refresh-cache` | `-r`  | Refresh cache (ignores displaying instructions) |

#### Examples

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

Run the prompt command as prompted.

```bash
$ printf "eval $(diagtools autocomplete:script zsh)" >> ~/.zshrc
$ source ~/.zshrc
```

Try using the completion feature.

```
$ diagtools l <TAB>
list  -- list the component status
log   -- print a component logs
```

### config set

Set the current profile variable.

```bash
diagtools config set KEY VALUE
```

#### Arguments

| Argument | Description                  |
| -------- | ---------------------------- |
| `KEY`    | Configuration variable name  |
| `VALUE`  | Configuration variable value |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools config set address tcp://127.0.0.1:9006
config set successfully
```

### config get

Get the current profile variable.

```bash
diagtools config get KEY
```

#### Arguments

| Argument | Description                 |
| -------- | --------------------------- |
| `KEY`    | Configuration variable name |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools config get address
tcp://127.0.0.1:9006
```

### config delete

Delete the current profile variable.

```bash
diagtools config delete KEY
```

#### Arguments

| Argument | Description                 |
| -------- | --------------------------- |
| `KEY`    | Configuration variable name |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools config delete address
config delete successfully
```

### config list

List the current profile variables.

```bash
diagtools config list
```

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools config list
address = tcp://127.0.0.1:9006
```

### profile create

Create a new profile.

:::caution
This command does not help you switch to the new profile, you need to use the [`profile use`](#profile-use) manual switch.
:::

```bash
diagtools profile create NAME
```

#### Arguments

| Argument | Description      |
| -------- | ---------------- |
| `NAME`   | New profile name |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
diagtools profile create example
The example profile successfully created
```

### profile use

Switch a specified profile.

```bash
diagtools profile use NAME
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `NAME`   | Profile name |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools profile use example
The example profile successfully switched
```

### profile delete

Delete a specified profile.

```bash
diagtools profile delete NAME
```

#### Arguments

| Argument | Description  |
| -------- | ------------ |
| `NAME`   | Profile name |

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools profile delete example
The example profile successfully deleted
```

### profile list

List all profiles.

```bash
diagtools profile list
```

#### Options

| Option      | Description    |
| ----------- | -------------- |
| `--verbose` | Verbose output |

#### Examples

```bash
$ diagtools profile list
example
```

### log

Print a component logs.

```bash
diagtools log TYPE
```

#### Arguments

| Argument | Description                                                 |
| -------- | ----------------------------------------------------------- |
| `TYPE`   | The component type, options: (`platform`, `host`, `plugin`) |

#### Options

| Option                       | Alias | Description                                                                     |
| ---------------------------- | ----- | ------------------------------------------------------------------------------- |
| `--verbose`                  |       | Verbose output                                                                  |
| `--address <value>`          |       | Override the execution of the `address` attribute in the profile                |
| `--organizationUUID <value>` |       | Override the execution of the `organizationUUID` attribute in the profile       |
| `--teamUUID <value>`         |       | Override the execution of the `teamUUID` attribute in the profile               |
| `--extended`                 | `-x`  | show extra columns                                                              |
| `--columns <value>`          |       | only show provided columns (comma-separated)                                    |
| `--filter <value>`           |       | filter property by partial string matching, ex: name=foo                        |
| `--from <value>`             |       | load the local data file (the value can be a relative path or an absolute path) |

#### Examples

```bash
$ diagtools log plugin --id ce1f55d2
{"Level":"Info","Message":"[Plugin] Install","Time":"2022/11/29 14:55:27"}
{"Level":"Info","Message":"[Plugin] Enable","Time":"2022/11/29 14:56:05"}
```

### list

List the component status.

```bash
diagtools list TYPE
```

#### Arguments

| Argument | Description                                            |
| -------- | ------------------------------------------------------ |
| `TYPE`   | 组件类型，选项：(`plugins`, `abilities`, `components`) |

#### Options

| Option                       | Alias          | Description                                                                     |
| ---------------------------- | -------------- | ------------------------------------------------------------------------------- |
| `--verbose`                  |                | Verbose output                                                                  |
| `--address <value>`          |                | Override the execution of the `address` attribute in the profile                |
| `--organizationUUID <value>` |                | Override the execution of the `organizationUUID` attribute in the profile       |
| `--teamUUID <value>`         |                | Override the execution of the `teamUUID` attribute in the profile               |
| `--extended`                 | `-x`           | Show extra columns                                                              |
| `--csv`                      | `--output=csv` | Output is csv format [alias: --output=csv]                                      |
| `--output <option>`          |                | Output in a more machine friendly format,options: (`csv`,`json`,`yaml`)         |
| `--columns <value>`          |                | Only show provided columns (comma-separated)                                    |
| `--filter <value>`           |                | Filter property by partial string matching, ex: name=foo                        |
| `--from <value>`             |                | Load the local data file (the value can be a relative path or an absolute path) |
| `--no-header`                |                | Hide table header from output                                                   |
| `--no-truncate`              |                | Do not truncate output to fit screen                                            |
| `--sort <value>`             |                | Property to sort by (prepend '-' for descending)                                |

#### Examples

```bash
$ diagtools list plugins
 InstanceID AppName    AppID     AppVersion Scope        ScopeUUID HostID IsLocal Status         RealStatus     Apis
 ────────── ────────── ───────── ────────── ──────────── ───────── ────── ─────── ────────────── ────────────── ────────────────────────────────────────
 ce1f55d2   Example    FSksKfHR3 1.0.0      Team         Pgg7h253         false   DisableSuccess DisableSuccess [{""Methods":["POST"],"Url":"/hello",...
```

### dump

Dump current time data.

```bash
diagtools dump PATH
```

#### Arguments

| Argument | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `PATH`   | dump path, the value can be a relative path or an absolute path |

#### Options

| Option                       | Description                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| `--verbose`                  | Verbose output                                                            |
| `--address <value>`          | Override the execution of the `address` attribute in the profile          |
| `--organizationUUID <value>` | Override the execution of the `organizationUUID` attribute in the profile |
| `--teamUUID <value>`         | Override the execution of the `teamUUID` attribute in the profile         |

#### Examples

```bash
$ diagtools dump .
dump successfully
```
