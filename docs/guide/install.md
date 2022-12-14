---
id: install
sidebar_position: 2
---

# Installation

## Overview

Before doing plugin development, you need to make some preparations for the environment.

## Requirements

| NodeJS    |
| :-------- |
| v16.13.0+ |

## Installation

### Step 1: Install NodeJS

ONES plugin development requires [NodeJS](https://nodejs.org/en/) `v16.13.0` or higher, You can use [n](https://github.com/tj/n), [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage multiple Node versions on the same computer.

#### Configure npm repository

All dependencies needed in the plugin development process are placed on ONES private npm repository, so you need to configure the agent to successfully access and retrieve the content.

```bash
# It is strongly recommended to use the official NPM registry to avoid dependency issues
npm config set registry=https://registry.npmjs.org/

npm config set @ones:registry=https://npm.partner.ones.cn/registry/
npm config set @ones-op:registry=https://npm.partner.ones.cn/registry/
```

:::tip

Configuring only the npm repository pointed to by the `@ones` and `@ones-op` domains does not affect the direction of the npm repository when other dependencies are installed locally.

:::

### Step 2: Install ONES CLI

ONE CLI is a scaffolding tool provided by the open platform for quickly creating plugin projects. You can install ONES CLI using any of the following instructions, including the plugin development tool op.

```bash npm2yarn
npm install -g @ones/cli
# or
sudo npm install -g @ones/cli
```

After the installation is complete, you can use the `--version` command on the command line to verify that the installation is correct and get the version information.

```
➜ ones --version
1.0.0
```

For specific instructions, please refer to: [ONES CLI](../tools/cli/index.mdx)

#### Upgrade ONES CLI

To upgrade the scaffolding later, you can run any of the following instructions:

:::caution notice

If there are environmental problems in installing ONES CLI, please refer to [FAQ](../faq/environment/ones-cli.mdx)

:::
