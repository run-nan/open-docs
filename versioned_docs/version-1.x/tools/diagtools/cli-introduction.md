---
sidebar_position: 2
description: ONES Open Platform command line diagnostic tools.
---

# CLI Usage

## Requirements

| **ONES** |
| -------- |
| v3.12.0+ |

## Overview

ONES Open Platform command line diagnostic tools, it can connect to the ONES Open Platform according to the configuration you set, view the logs and status of the platform and plug in, so that you can troubleshoot problems, or export the current data, to others joint troubleshooting.

:::note
Its main features are the same as Desktop.
:::

## Installation

See [Download and Installation](./install#desktop-tools).

## Help Information

CLI provides a variety of ways to help information output, you can add `--help` at the end of each command to output the help information of the current command, or use the [`help`](./cli-commands#help) command to view the help information.

```bash
diagtools help
```

At the same time, the TAB key to automatically complete the command. You can use the [`autocomplete`](./cli-commands#autocomplete) command to output the current automatic completion function installation.

```bash
diagtools autocomplete
```

## Update Config (config)

CLI provides [`config`](./cli-commands#config-set) sub-command, you can use the following command to manage the profile currently in use.

- `config get`
- `config set`
- `config list`
- `config delete`

:::note
The initial behavior of the CLI is slightly different from that of the desktop. By default, a profile named default is automatically created for you.

If you only have one profile (There's only one open platform that you can connect to)，You can use the `config` subcommand without using any of the `profile` subcommands.
:::

```bash
diagtools config set address tcp://127.0.0.1:9006
```

## Add and Switch Profile (profile)

CLI provides [`profile`](./cli-commands#profile-new) sub-command, if you have multiple server profile that you need to connect to, you can use the following command to manage each profile.

- `profile new`
- `profile use`
- `profile delete`
- `profile list`

The following is an example of the second profile and used:

```bash
$ diagtools profile add secondProfileName

$ diagtools profile use secondProfileName

$ diagtools config set address tcp://127.0.0.1:9007
```

## View Logs (log)

CLI provides [`log`](./cli-commands#log) command, you can use the [`log`](./cli-commands#log) command to view the logs of each component if your profile is correct or if you temporarily specify a required configuration.

Interactive selection to view the log of a plugin：

```bash
diagtools log plugin
```

Non-interactive Specifies that logs for a plugin are viewed (the id is instanceID; if the id does not exist, no information is output):

```bash
diagtools log plugin --id ce1f55d2
```

Interactive selection to view logs for a host instance (non-interactive command as above):

```bash
diagtools log host
```

Interactive selection to view logs for a platform instance (non-interactive command as above):

```bash
diagtools log platform
```

## View Status (list)

CLI provides [`list`](./cli-commands#list) command, you can use the [`list`](./cli-commands#list) command to see the status of each component if your profile is correct or if you have temporarily specified a required configuration.

View abilities status:

```bash
diagtools list abilities
```

View plugins status:

```bash
diagtools list plugins
```

View components status:

```bash
diagtools list components
```

## Dump Data (dump)

CLI provides [`dump`](./cli-commands#dump) command, when it is inconvenient to view on the server, you can use the `dump` command to export and import it to the desktop to view.

Export to the current directory (default file suffix is the year month day hour minute second of the current UTC time):

```bash
diagtools dump .
```

Export to the current directory and specify the name:

```bash
diagtools dump ./data.json
```
