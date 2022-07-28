---
sidebar_position: 5
---

# 开发 ONES Project

我们为有需要做深度定制化的客户提供了前端源码开放服务，你可以通过阅读此页面了解到 ONES Project 从开始开发到构建生产包的全流程，从而进行二次开发满足自身定制需求。

## 前置条件

在开始之前，请确保你满足如下条件：

- [ONES Code](https://gitlab.partner.ones.ai/ones-code) 某个版本组的读权限
- [Node.js](https://nodejs.org/) v16.13.0 或更高版本
- [Git](https://git-scm.com/) 版本管理工具
- 基于 [Git](https://git-scm.com/) 的项目托管平台

## 创建仓库

在你的基于 [Git](https://git-scm.com/) 的项目托管平台里创建两个空仓库，分别命名为 ones-project-web 与 ones-ai-web-common，并将其按如下目录结构克隆到本地。

```
.
├── ones-project-web
│   ├── ones-ai-web-common
```

## 添加 ONES 源

你可以在 [ONES Code](https://gitlab.partner.ones.ai/ones-code) 得到相关仓库信息，下面将以 3.6 LTS 版本为例。

在 ones-project-web 目录下，添加 ONES ones-project-web 源，并将其拉取到本地。

```bash
git remote add ones https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-project-web.git
git fetch ones
```

```bash
➜ git remote add ones https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-project-web.git
➜ git fetch ones
remote: Enumerating objects: 388547, done.
remote: Counting objects: 100% (4284/4284), done.
remote: Compressing objects: 100% (3953/3953), done.
remote: Total 388547 (delta 207), reused 4259 (delta 203), pack-reused 384263
Receiving objects: 100% (388547/388547), 121.19 MiB | 3.31 MiB/s, done.
Resolving deltas: 100% (288933/288933), done.
From https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-project-web
 * [new branch]            master     -> ones/master
 * [new branch]            v3.6.40    -> ones/v3.6.40
```

在 ones-ai-web-common 目录下，添加 ONES ones-ai-web-common 源，并将其拉取到本地。

```bash
git remote add ones https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-ai-web-common.git
git fetch ones
```

```bash
➜ git remote add ones https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-ai-web-common.git
➜ git fetch ones
remote: Enumerating objects: 614505, done.
remote: Counting objects: 100% (392/392), done.
remote: Compressing objects: 100% (244/244), done.
remote: Total 614505 (delta 154), reused 364 (delta 144), pack-reused 614113
Receiving objects: 100% (614505/614505), 190.45 MiB | 2.95 MiB/s, done.
Resolving deltas: 100% (465256/465256), done.
From https://gitlab.partner.ones.ai/ones-code/3-6-x/ones-ai-web-common
 * [new branch]            master     -> ones/master
 * [new branch]            v3.6.40    -> ones/v3.6.40
```

:::caution 注意

如果你首次克隆 [GitLab](https://gitlab.partner.ones.ai) 项目，终端会提示你输入 [GitLab](https://gitlab.partner.ones.ai) 账号密码进行登录。

:::

## 同步 ONES 代码

以 3.6 LTS 的 v3.6.40 版本为例。

分别在 ones-project-web 与 ones-ai-web-common 目录下，创建一个开发分支，并将他们重置到 ONES v3.6.40 版本。

```bash
git switch -c my-dev-branch
git reset --hard ones/v3.6.40
```

```bash
➜ git switch -c my-dev-branch
Switched to a new branch 'my-dev-branch'
➜ git reset --hard ones/v3.6.40
HEAD is now at 3587e43f81 chore: save ONES private packages
➜ cd ones-ai-web-common
➜ git switch -c my-dev-branch
Switched to a new branch 'my-dev-branch'
➜ git reset --hard ones/v3.6.40
Updating files: 100% (15315/15315), done.
HEAD is now at 2e3a0f9de1 chore: save ONES private packages
```

现在，你本地就存在一个同步了 ONES v3.6.40 版本代码的分支了。

## 设置开发环境

### 添加本地开发配置

将 ones-project-web/.ones-config/example 文件夹复制为 ones-project-web/.ones-config/development。

添加后端接口服务器地址配置。

```javascript title="ones-project-web/.ones-config/development/index.js"
module.exports = {
  server: {
    backendHost: 'your backend host address',
  },
}
```

### 安装依赖

在 ones-project-web 目录下运行安装命令。

```bash
npm install
```

:::caution 注意

目前我们是通过 [Git](https://git-scm.com/) 将私有 npm 包保留到仓库中，以便于你在安装过程不会产生错误，所以你无法使用 `npm clean-install` 以及相关别名命令。

:::

## 运行与调试

当你的开发环境都设置完成后，你可以在 ones-project-web 目录下运行启动命令。

```bash
npm start
```

```bash
➜ npm start

> ones-ai-web@2.48.16 start
> npm run dev


> ones-ai-web@2.48.16 dev
> cross-env NODE_OPTIONS=--max_old_space_size=5120 main-build

[15:27:23] 完成任务 'initEnvMode:dev' after 610 μs
[15:27:23] 完成任务 'generateProxyFiles' after 373 μs
[15:27:23] 完成任务 'initEnv' after 1.33 ms
[15:27:23] 完成任务 'clean' after 5.33 ms
创建符号链接: node_modules/@ones-ai/ckeditor-dev/dist/ckeditor to: dest/bower_components/ckeditor
创建符号链接: node_modules/@ones-ai/graph/dist to: dest/bower_components/graph
创建符号链接: /Users/xxx/ones-project-web/.ones-config/development/api_mapping.json to: dest/api_mapping.json
[15:27:23] 完成任务 'copy' after 7.39 ms

✔ ONES-Main-Build
  Compiled successfully in 1.62m

完成任务 'webpack' after 337 ms
完成任务 '<series>' after 345 ms
完成任务 '<parallel>' after 345 ms
代理服务器开始监听本地端口: 3000
完成任务 '<parallel>' after 223 ms
sentry task - isOnlineMode: false shouldSkipSentry: false
完成任务 'sentry' after 501 μs
完成任务 'dev' after 579 ms
构建成功，访问地址： http://dev.localhost:3000
```

当构建成功后，在浏览器输入 [http://dev.localhost:3000](http://dev.localhost:3000) 即可访问本地项目。

尝试在 src/scripts/index.jsx 尾部添加一个 `alert`，并保存。

```jsx title="src/scripts/index.jsx"
window.alert('hello world')
```

稍等一会，浏览器将自动刷新，并显示提示。

![](images/add%20alert.png)

现在，你可以根据你的需求，开始你的研发了。

## 构建生产包

当你的功能研发完成后，需要对当前代码构建一个生产环境的包，你可以在 ones-project-web 目录下运行打包命令。

```bash
npm run build
```

```bash
➜ npm run build

> ones-ai-web@2.48.16 build
> cross-env NODE_OPTIONS=--max_old_space_size=8192 main-build release --skipSentry=true && tar -czf ones-ai-web.tar.gz -C dest .

[15:30:34] 完成任务 'initEnvMode:release' after 591 μs
[15:30:34] 完成任务 'generateProxyFiles' after 386 μs
[15:30:34] 完成任务 'initEnv' after 1.6 ms
[15:30:34] 完成任务 'clean' after 8.63 ms
执行文件复制: node_modules/@ones-ai/ckeditor-dev/dist/ckeditor to: dest/bower_components/ckeditor
执行文件复制: node_modules/@ones-ai/graph/dist to: dest/bower_components/graph
[15:30:34] 完成任务 'copy' after 385 ms
构建概要信息 {
    "environment": "production",
    "Use source map": true,
    "devtool config": "hidden-source-map"
}
[
  'some message'
]
-----------Main-build: 前端工程源码打包成功!!!!!!!!!!-----------
[15:35:39] 完成任务 'webpack' after 5.07 min
[15:35:39] 完成任务 '<series>' after 5.07 min
[15:35:39] 完成任务 '<parallel>' after 5.07 min
[15:35:39] 完成任务 '<parallel>' after 415 ms
sentry task - isOnlineMode: true shouldSkipSentry: true
[15:35:39] 完成任务 'sentry' after 427 μs
[15:35:39] 完成任务 'release' after 5.08 min
```

项目根目录下，将会生成一个名为 ones-ai-web.tar.gz 的生产环境包。
