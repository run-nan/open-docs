# OP CLI Commands

This reference lists the commands that you can use to build plugin with OP CLI.

:::note
OP CLI is a dependency of the plugin project.

Developer need to use [npx](https://docs.npmjs.com/cli/v8/commands/npx) to execute command like: `npx op [command] [arguments] [options]`
:::

## Overview

| Command               | Description                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [init](#init)         | Initialize project dependencies and project settings.                                                                             |
| [add](#add)           | Add a ability or module for the project.                                                                                          |
| [packup](#packup)     | Pack up the plugin project and build `.opk` file in the root directory.                                                           |
| [login](#login)       | Store the parameters used to obtain user credentials in a specific environment into `config/local.yaml`.                          |
| [ci](#ci)             | Store the parameters used to obtain user credentials in a specific branch for (gitlab) CI into `config/ci-deploy.yaml`.           |
| [pickteam](#pickteam) | Fetch the team list and update the config file with the team information from the team list for local debugging or CI deployment. |
| [invoke](#invoke)     | Start the plugin project locally and invoke one or several life-cycles of the plugin.                                             |

## init

Initialize project dependencies and project settings.

It will be automatic execute after install npm dependencies, developer can check `scripts` fields on `packages.json` to learn more detail.

```shell
npx op init
```

## add

Add a ability or module for the project.

```shell
npx op add <target-type>
```

### Examples

1. Add module or sub-module for project

```shell
npx op add module
npx op add sub-module
```

2. Add ability or sub-module for project

```shell
npx op add ability
```

### Arguments

| Argument      | Description                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `target-type` | Specify a content type that you want to add, support types: <ul><li>`module`</li><li>`sub-module`</li><li>`ability`</li></ul> |

## packup

Pack up the plugin project and build `.opk` file in the root directory.

```shell
npx op packup [filename]
```

### Arguments

| Argument   | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `filename` | Specify the name of the `.opk` file, default is the project name. |

## login

Store the parameters used to obtain user credentials in a specific environment into `config/local.yaml`.

Argument `baseURL` and `hostURL` is protocol sensitive, different protocol type will be treated as a different scope.

After login successfully, CLI will store the scope parameters into `~/.ones/cli-plugin.yaml` for local debugging.

And at the same time, this command will try to run `npx op pickteam local` automatically if the current project has never had a team picked before.

```shell
npx op login [options] [baseURL] [hostURL]
```

### Arguments

| Argument  | Description                               |
| --------- | ----------------------------------------- |
| `baseURL` | Specify the environment url for login.    |
| `hostURL` | Specify the host url for local debugging. |

### Options

| Option                  | Alias           | Description                                                                                                                         |
| ----------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `--username <username>` | `-u <username>` | Username can be email or phone number.                                                                                              |
| `--password <password>` | `-p <password>` | Password.                                                                                                                           |
| `--scope [url]`         | `-s [url]`      | Use specific scope parameters login, default is current environment url, this option is mutually exclusive with `-u`, `-p` options. |

### About `--scope` option

:::note
In different operating systems, the path of credential storage will be different.

- **Linux/macOS:** `~/.ones/cli-plugin.yaml`
- **Windows:** `C:\Users\YOUR_USERNAME\.ones\cli-plugin.yaml`

```yaml title="Content like this"
scopes:
  https://foo.example.com:
    baseURL: https://foo.example.com
    username: foo
    password: fooPass
  https://bar.example.com:
    baseURL: https://bar.example.com
    username: bar
    password: barPass
```

:::

It should be noted that when executing the `login` command and using the `scope` option:

- This option is mutually exclusive with `-u`, `-p` options.
- If the selected `scope` credential is invalid, enter the interactive question and answer to enter the new user credential information (the effect is equivalent to executing `npx op login`).

### Examples

1. Enter the interactive Q&A process and input the login parameters.

```shell
npx op login
```

2. Login to `https://dev.ones.ai` environment. And then enter the inquiry session flow input rest parameters: `hostURL`, `username`, `password`.

```shell
npx op login https://dev.ones.ai
```

3. Login to `https://dev.ones.ai` environment and set `hostURL` to `tcp://dev.ones.ai:9006` with two parameters and not enter the interactive Q&A process.

```shell
npx op login https://dev.ones.ai tcp://dev.ones.ai:9006 -u test@ones.ai -p password
```

4. Use `https://dev.ones.ai` scope parameters to login to `https://partnerdev.ones.ai` environment.

```shell
npx op login https://partnerdev.ones.ai tcp://dev.ones.ai:9006 -s https://dev.ones.ai
```

## ci

Store the parameters used to obtain user credentials in a specific branch for (gitlab) CI into `config/ci-deploy.yaml`.

Argument `url` is protocol sensitive, different protocol type will be treated as a different scope.

Unlike the [login command](#login), current command does not store the scope parameters into `~/.ones/cli-plugin.yaml`.

But if the current branch has never picked a team after the run is complete, `npx op pickteam ci -b $currentSpecifyBranch` will be automatically executed which is consistent.

```shell
npx op ci [options] [url]
```

### Arguments

| Argument | Description                            |
| -------- | -------------------------------------- |
| `url`    | Specify the environment url for login. |

### Options

| Option                        | Alias              | Description                                                                                                                         |
| ----------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `--branch-name <branch-name>` | `-b <branch-name>` | Specify the branch name for CI deployment configuration, default is `master` or `main` branch.                                      |
| `--username <username>`       | `-u <username>`    | Username can be email or phone number.                                                                                              |
| `--password <password>`       | `-p <password>`    | Password.                                                                                                                           |
| `--scope [url]`               | `-s [url]`         | Use specific scope parameters login, default is current environment url, this option is mutually exclusive with `-u`, `-p` options. |

### Example

1. Enter the interactive Q&A process and input the parameters for CI deployment.

```shell
npx op ci
```

2. Specify the environment address for the CI deployment as `https://dev.ones.ai`, and then enter the interactive Q&A process input rest parameters: `branch`, `username` and `password`.

```shell
npx op ci https://dev.ones.ai
```

3. Specify the environment address for the CI deployment as `https://dev.ones.ai`, and not enter the interactive Q&A process input rest parameters.

```shell
npx op ci https://dev.ones.ai -b next -u test@ones.ai -p password
```

4. Use `https://dev.ones.ai` scope parameters and specify the environment address for the CI deployment as `https://partnerdev.ones.ai`.

```shell
npx op ci https://partnerdev.ones.ai -b next -s https://dev.ones.ai
```

## pickteam

Fetch the team list with the user credentials stored in the config file (`config/local.yaml` or `config/ci-deploy.yaml`) and update the config file with the team information from the team list for local debugging or CI deployment.

Before performing this operation, the login operation should be completed in the corresponding target.

```shell
npx op pickteam [target] [options]
```

### Arguments

| Argument | Description                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `target` | Specify the target type configuration for which team information needs to be updated, target type only can be `local` or `ci`. |

### Options

| Option                   | Alias         | Description                                                |
| ------------------------ | ------------- | ---------------------------------------------------------- |
| `--branch-name <branch>` | `-b <branch>` | Specify a branch name for the CI deployment configuration. |
| `--team-uuid <uuid>`     |               | Match the specified team `uuid` in the team list.          |
| `--team-name <name>`     |               | Match the specified team `name` in the team list.          |

:::note
The `-b --branch-name <branch>` option only takes effect when the target is `ci`, and leave blank or not specify a value will enter the interactive Q&A for branch name selection.
:::

:::note
When `--team-uuid` and `--team-name` are specified at the same time, only `--team-uuid` will be used.
:::

### Example

1. Fetch the team list with the user credentials stored in the `config/local.yaml`. If does not store user credentials, you need to execute `npx op login` first.

```shell
npx op pickteam local
```

2. Display the branch list with the user credentials stored in the `config/ci-deploy.yaml`, and enter the interactive Q&A process for choosing the branch to fetch the team list, if does not store user credentials, you need to execute `npx op ci` first.

```shell
npx op pickteam ci
```

3. Fetch the team list with the user credentials stored in `config/ci-deploy.yaml` with the branch name `next`, please note that the branch name is case sensitive, and the branch name must be the same as the branch name in the `config/ci-deploy.yaml`, the CLI will throw an error if no branch name matches.

```shell
npx op pickteam ci -b next
```

4. Fetch the team list with the user credentials stored in the `config/local.yaml`, after fetching the team list, CLI will try to pick the team with the team UUID `T7YB134K`, the CLI will throw an error if no team UUID matches

```shell
npx op pickteam local --team-uuid T7YB134K
```

5. Fetch the team list with the user credentials stored in `config/ci-deploy.yaml` with the branch name `next`, after fetching the team list, CLI will try to pick the team with the team name `TestTeamName`, the CLI will throw an error if no team name matches

```shell
npx op pickteam ci -b next --team-name TestTeamName
```

## invoke

Start the plugin project locally and invoke one or several life-cycles of the plugin.

The difference between process and life-cycles is that the process will contain multiple life-cycles.

```shell
npx op invoke [options] <target>
```

### Arguments

| Argument | Description                                               |
| -------- | --------------------------------------------------------- |
| `target` | Specify the `process` or `life-cycle` you want to invoke. |

### Available life-cycle

- `install`
- `enable`
- `start`
- `stop`
- `disable`
- `uninstall`

Developer can learn more about [available life-cycle](../guide/../../guide/lifecycle/lifecycle.md) in the guide section.

### Available processes

| Process | Contain life-cycle                                             |
| ------- | -------------------------------------------------------------- |
| `run`   | <ul><li>`install`</li><li>`enable`</li><li>`start`</li></ul>   |
| `clear` | <ul><li>`stop`</li><li>`disable`</li><li>`uninstall`</li></ul> |

### Options

| Option                      | Alias | Description                                                                                                                                                          |
| --------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--webpack-logging <level>` |       | Specify the webpack logging level, support level: <ul><li>`none`</li><li>`error`</li><li>`warn`</li><li>`info`</li><li>`verbose`</li></ul> Default level is `error`. |
| `--reinstall-plugin`        |       | The `appid` is conflict between plugin which installed by user and plugin run by developer in the same scope, plugin installed by user will be uninstalled.          |
