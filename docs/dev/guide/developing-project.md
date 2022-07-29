---
sidebar_position: 5
---

# Developing ONES Project

We provide the frontend open source service for customers who need in-depth customization. You can learn the entire process of ONES Project from the start of development to the building a release tarball by reading this page.

## Precondition

Before starting, make sure you meet the following conditions:

- [ONES Code](https://gitlab.partner.ones.ai/ones-code) Reading permissions of a certain version group
- [Node.js](https://nodejs.org/) v16.13.0 or later
- [Git](https://git-scm.com/) version control tool
- [Git](https://git-scm.com/)-based source code hosting service platform

## Create repositories

Create two empty repositories in your [Git](https://git-scm.com/)-based source code hosting service platform called ones-project-web and ones-ai-web-common and clone them to your local directory with the following structure.

```
.
├── ones-project-web
│   ├── ones-ai-web-common
```

## Add ONES remote repositories

You can get information about the repositories in [ONES Code](https://gitlab.partner.ones.ai/ones-code), and the 3.6 LTS version will be used as an example.

In the ones-project-web directory, add the ONES ones-project-web remote and fetch it to the local.

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

In the ones-ai-web-common directory, add the ONES ones-ai-web-common remote and fetch it to the local.

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

:::caution WARNING

If you first cloned [ONES GitLab](https://gitlab.partner.ones.ai) project, the terminal will prompt you to enter the [ONES GitLab](https://gitlab.partner.ones.ai) account password to log in.

:::

## Synchronizing ONES code

Take the v3.6.40 version of the 3.6 LTS as an example.

Create a development branch in the ones-project-web and ones-ai-web-common directories and reset them to ONES v3.6.40.

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

You now have a local branch that syncs the ONES v3.6.40 code.

## Set up the development environment

### Add local development configuration

Copy ones-project-web/.ones-config/example as ones-project-web/.ones-config/development.

Add the backend host address configuration.

```javascript title="ones-project-web/.ones-config/development/index.js"
module.exports = {
  server: {
    backendHost: 'your backend host address',
  },
}
```

### Install dependencies

Run the installation command in the ones-project-web directory.

```bash
npm install
```

:::caution WARNING

Currently, we use [git](https://git-scm.com/) to keep private npm packages in the repository so that you don't get errors during installation, so you can't use 'npm clean-install' and related aliases.

:::

## Developing and debugging

When your development environment is set up, you can run the startup command in the ones-project-web directory.

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

After the build is successful, the browser simply enter [http://dev.localhost:3000](http://dev.localhost:3000) access to the local projects.

Try adding an `alert` to the end of src/scripts/index.jsx and save.

```jsx title="src/scripts/index.jsx"
window.alert('hello world')
```

Wait a while, the browser will be refreshed automatically and the alert will be displayed.

![](images/add%20alert.png)

Now, you can start your research and development according to your needs.

## Build release tarball

When your functionality is complete and you need to build a release tarball of your current code, you can run the packing command in the ones-project-web directory.

```bash
npm run build
```

:::tip TIP
It may take a few minutes to build a release tarball, please wait patiently.
:::

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

After the build is completed, a release tarball named ones-ai-web.tar.gz will be generated in the ones-project-web directory.
