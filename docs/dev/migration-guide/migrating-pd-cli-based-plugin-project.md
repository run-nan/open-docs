# Migrate the PD CLI-based plugin project

With the release of official versions of `ONES CLI` and `OP CLI` implemented in Node.js, developers can use the new version of CLI tools to replace all functions of `PD CLI`.

Using the new version of the CLI tools requires some unavoidable migration work for plugin projects, we apologize for any inconvenience.

## Content differences with PD CLI-based plugin projects

- Redesigned CLI tool directives.
- Reimplement the logic of each function module of the CLI tool.
- Redesigned the "error handling process" of the CLI tool.
- Redesigned the process of plugin engineering to upgrade "Ability" or "Front-end Slot".
- Distribute CLI tools as `NPM package`.
- Integrate more detailed "help information" in the CLI tool.
- Adjust the "directory structure" of the plugin project template.
- Update configuration file content.
  - Plugin project configuration `config/*.yaml`.
  - Global configuration `~/.ones/cli-plugin.yaml`.

### `@ones/cli`

Used to create ONES Plugin Project.

### `@ones/cli-plugin`

No longer as a project build tool library for the `/web` directory, the current `@ones/cli-plugin` is responsible for carrying all the capabilities of the `OP CLI`.

### Package rename and new package

| Old                         | New                          |
| --------------------------- | ---------------------------- |
| `@ones/cli-template-plugin` | `@ones/cli-plugin`           |
|                             | `@ones/cli-plugin-template`  |
|                             | `@ones/cli-ability-template` |

## Migration requirements

Before you start, do the following:

- **Back up plugin projects that need to be migrated.**
- Uninstall old versions of CLI tools.
  ```
  sudo npm uninstall @ones/cli -g
  # or
  npm uninstall @ones/cli -g
  ```
- [Configure npm repository](../start/install.md#config-npm-repository)
- [Install ONES CLI](../start/install.md#安装基础脚手架工具-ones-cli)
- Learn how to [create a plugin project](../start/create.md)

## STEP 1: Reinitialize the project using the ONES CLI

### Delete `cli-plugin.yaml`

`PD CLI` will try to write some cache information in `~/.ones/cli-plugin.yaml`.

:::info
Windows users are `C:\Users\YourUserName\.ones\cli-plugin.yaml`
:::

In order for `ONES CLI` and `OP CLI` to be able to write and read the cache content correctly, the file needs to be deleted first:

**macOS/Linux**

```
rm ~/.ones/cli-plugin.yaml
```

**Windows**

In File Explorer, try deleting `C:\Users\YourUserName\.ones\cli-plugin.yaml`.

### Project initialization

1. Before initialization, developers need to delete all files in the project directory except the `.git` directory.
2. Then enter the current directory in the terminal and use `ONES CLI` to initialize a new plugin project:

```
ones create
```

:::info
If developers do not need to keep Git commit records and other information, they can delete the folder after the migration operation is complete, and execute `git init` again.
:::

## Step 2: Understanding breaking changes

### `logo.svg`

1. Update the default icon.
2. Logo currently needs to be maintained in the `./web/public` directory.
3. Removed files from the following paths:
   - `./logo.svg`
   - `./web/src/logo.svg`

### `.gitignore`

1. Added ignore `config/local.yaml`.
2. Remove `./backend/.gitignore`.

### `.prettier` & `.prettierignore`

Move to the root directory from the `./web/` directory.

### `package.json`

1. Add dependencies.
2. Remove invalid `scripts`.

### `web/package.json`

1. Add dependencies.
2. Upgrade the dependency version.
3. Remove invalid `scripts`.

### `backend/package.json`

1. Add dependencies.
2. Upgrade the dependency version.
3. Remove `@rollup` related dependencies.
4. Remove invalid `scripts`.

### `config/local.yaml.example`

Removed the file.

### `config/local.yaml`

1. New fields:
   - `platform.username`
   - `platform.password`
   - `platform.baseURL`
2. Update fields:
   - `platform.address`
3. Deprecated fields:
   - `local.token`

### `config/ci-deploy.yaml`

1. New fields:
   - `username`
   - `password`
2. Deprecated fields:
   - `token`
   - `user_uuid`

## Step 3: Migrate files

Through git history, developers can use visual version comparison function integrated with code editors (such as [VSCode](https://code.visualstudio.com/)), which will be initialized using `ONES CLI` the difference between the project directory and the original project directory is compared.

After understanding the file differences, developers can keep the initialized products of `ONES CLI` as needed, and replace the following directories or files from the backup plugin project to the current project directory:

- `./config/plugin.yaml`
- `./web/public`
- `./web/src`
- `./backend/src`
- `./workspace`

## Next step

According to the project template and migrated resource files after `ONES CLI` initialization, developers can further consider:

- Explore `OP CLI`
  - [Add Front-end Slot](../develop-plugin/module/index.md)
  - [Add Ability](../develop-plugin/ability.md)
  - [Local debugging](../develop-plugin/local-debugging-plugin.md)
  - [Debugging plugins through CI](../develop-plugin/ci-deploy-plugin.md)
