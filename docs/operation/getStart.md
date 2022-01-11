---
nav:
  title: CLI工具操作文档
order: 1
toc: menu
---

# 快速入门



## 简介

cli工具目的分别有

​    1、为了开发者在插件项目初始化的时候选择"能力(ability)"选项，产生实现该功能需要的代码：前端的调用前端cli工具生成，后端直接生成。选择"模块(example)"根据所选语言生成对应的模板文件;

​    2、设置插件项目的相关配置文件，例如plugin.yaml，config.yaml，local.yaml等;

​    3、基于本地分支在代码仓创建标签



## 快速开始

​        在【ONES】—【交付物管理】新建【插件】工作项，输入需要创建的代码仓名，5分钟后，该工作项的状态将会更新为【已建仓】，并且在GitLab中创建对应的代码仓



## 工具下载

- Gitlab所建的仓中有mac版本，windows版本的cli工具
- 将Gitlab的仓拉取到本地，并给予cli工具可执行权限：chmod +x plugin-cli-inter-for-mac-1.0.9



## 工具指令

|   指令   | 子命   令    | 参数       | 说明                                                         |
| :------: | :----------- | :--------- | :----------------------------------------------------------- |
|   init   | --     mode  | again      | 重新生成新的项目                                             |
|   init   | --mode       | depend     | 安装前端能力依赖                                             |
|  config  | --env        | local      | 环境配置文件的修改，检测本地项目中config文件下是否存在local.yaml文件，不存在用户可登陆环境录入参数生成，若存在用户可根据提示路径手动修改 |
|  config  | --env        | deploy-sit | 环境配置文件的修改，检测本地项目中config文件下是否存在ci-deploy.yaml文件，不存在用户可登陆环境录入参数生成，若存在用户可根据提示路径手动修改 |
| runlocal | 无           | 无         | 启动DEV环境，可选择插件的生命周期进行插件的操作，enable、disable、install、uninstall、start、run等，其中执行run将会自动执行install等操作，clear将会自动执行disable、uninstall等操作 |
|   tag    | --msg        | #num       | 当Tag消息匹配到ONES需求单序号时，对应的ONES插件工作项将会与该需求单建立关联。 |
|   tag    | --      name | Pnum       | Tag的名称，为空时，将自动使用当前代码仓中最近一次Tag名称的下一个小版本作为tag号 |
|   add    | -way         | b          | 添加后端能力                                                 |
|   add    | -way         | f          | 添加前端能力                                                 |

