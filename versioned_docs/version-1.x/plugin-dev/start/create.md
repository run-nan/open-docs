---
sidebar_position: 2
---

# 创建第一个插件工程

<video controls src={require('./videos/create-your-first-plugin-project.mp4').default} style={{ width: '100%' }} />

## 插件工程初始化

我们使用一个空文件夹作为插件工程的根目录，比如 `/Users/jeff/dev/test-plugin`

进入 `test-plugin` 目录后，通过 ONES CLI 的 `create` 指令完成插件工程的初始化操作：

```bash
cd /Users/jeff/dev/test-plugin

# -d 选项表明使用默认的工程创建预设配置
ones create -d
```

初始化过程中 ONES CLI 会完成以下操作：

1. 初始化 `git`
2. 创建工程模板文件
3. 安装插件开发脚手架工具 `op`
4. 创建全局缓存文件
5. 安装插件工程项目依赖

在插件工程初始化完成后 ONES CLI 会输出插件工程的相关信息

```
Project has been created
Project path: /Users/jeff/dev/test-plugin
Project name: test-plugin
Project description:
Project sub CLI: @ones/cli-plugin
```

初始化完成后的插件工程目录结构详见[目录结构](../guide/plugin-project-directory-structure.md)一节

至此，我们已经完成插件工程的初始化操作

## 关于插件工程脚手架工具 `op`

在插件工程初始化的过程中会将 `@ones/cli-plugin` 作为插件工程的 `devDependencies` 安装到项目依赖中

`@ones/cli-plugin` 对外暴露了 `op` 指令，我们需要通过 [npx](https://docs.npmjs.com/cli/v8/commands/npx) 调用它，以查看 `op` 工具的帮助信息为例：

```bash
npx op help
```

```
➜ npx op help
Usage: op [options] [command]

Options:
  -v, --version                        output the current version
  -h, --help                           display help for command

Commands:
  init                                 initialize project dependencies and project settings, please run this command in project root directory
  login [options] [baseURL] [hostURL]  store the parameters used to obtain user credentials in a specific environment into 'config/local.yaml'
  ci [options] [url]                   store the parameters used to obtain user credentials in a specific branch for (gitlab) CI into 'config/ci-deploy.yaml'
  pickteam [options] [target]          fetch the team list with the user credentials stored in the config file and update the config file with the team information from the team list for local debugging or CI deployment
  add <target-type>                    add a ability or module for the project
  packup [filename]                    pack up the plugin project and build .opk file in the root directory
  invoke [options] <target>            start the plugin project locally and invoke one or several life-cycles of the plugin
  help [command]                       display help for command
```

查看 `op` 工具的版本信息：

```bash
npx op -v
```

```
➜ npx op -v
1.0.0
```

后续针对插件工程的调试、插槽或能力添加、工程打包等操作均可通过 `op` 指令完成，这样可以帮助开发者更好的完成插件研发工作

## 插件打包

插件初始化完成后，你可以尝试运行以下命令来打包这个插件：

```
npx op packup
# 或
npx op packup CustomPluginName
```

:::caution note

In Windows TTY, if the custom plugin name contains Chinese characters when packaging the plugin, the command may not be executed correctly.

Developers can try to `packup` the plugin with the default name and manually rename the file after the `packup` is complete.

:::

打包操作完成后可以在当前插件工程根目录中看到打包好的插件 `opk` 包，如 `test-plugin.opk`

## 插件安装

在启用了开放平台的环境中，我们可以上传并安装这个 `opk` 包：

![image](images/install.jpg)

现在，我们完成了第一个插件的安装
