---
nav:
  title: CLI工具操作文档
order: 1
toc: menu
---

# 快速入门



## 简介

cli工具作用：

​    1、为了开发者在插件项目初始化的时候选择"能力(ability)"选项，产生实现该功能需要的代码：前端的调用前端cli工具生成，后端直接生成；

​    2、设置插件项目的相关配置文件，例如plugin.yaml，config.yaml，local.yaml等;

​    3、基于本地分支在代码仓创建标签。



## 快速开始

​        在【ONES】—【交付物管理】新建【插件】工作项，输入需要创建的代码仓名，5分钟后，该工作项的状态将会更新为【已建仓】，并且在GitLab中创建对应的代码仓



## 工具下载

- Gitlab所建的仓中有mac版本，windows版本的cli工具
- 将Gitlab的仓拉取到本地，并给予cli工具可执行权限：chmod +x plugin-cli-inter-for-mac-1.0.9



## 工具指令

|   指令   | 子命令     |    参数    | 说明                                                         |
| :------: | :--------- | :--------: | :----------------------------------------------------------- |
|  login   |            |            | 用户登录                                                     |
|   init   |            |            | 项目初始化                                                   |
|          | --mode  -m |   again    | 重新生成项目                                                 |
|          | --mode  -m |   depend   | 安装前端能力依赖                                             |
|  config  |            |            | 本地环境文件配置                                             |
|          | --env -e   |   local    | 环境配置文件的修改，检测本地项目中config文件下是否存在<br />local.yaml文件，不存在用户可登陆环境录入参数生成，<br />若存在用户可根据提示路径手动修改 |
|          | --env -e   | deploy-sit | 环境配置文件的修改，检测本地项目中config文件下是否存在<br />ci-deploy.yaml文件，不存在用户可登陆环境录入参数生成，<br />若存在用户可根据提示路径手动修改 |
|   add    | -way       |     b      | 往当前项目添加后端能力                                       |
|   add    | -way       |     f      | 往当前项目添加前端能力                                       |
|   tag    | --msg      |   #+num    | 当Tag消息匹配到ONES需求单序号时，对应的ONES插件工作项将<br />会与该需求单建立关联。 |
|   tag    | --name     |   P+num    | Tag的名称，为空时，将自动使用当前代码仓中最近一次Tag名称的<br />下一个小版本作为tag号 |
| runlocal |            |            | 启动DEV环境，可选择插件的生命周期进行插件的操作，enable、<br />disable、install、<br uninstall、start、run等，其中执行run将<br />会自动执行install等操作，clear将会自动执行disable、uninstall等操作 |



