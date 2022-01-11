---
nav:
title: CLI工具操作文档
order: 1
toc: menu
---

# 快速入门



## 简介



## 快速开始



## 获取工具





## 创建项目前需准备

- 在【ONES】—【交付物管理】新建【插件】工作项，输入需要创建的代码仓名，5分钟后，该工作项的状态将会更新为【已建仓】，并且在GitLab中创建对应的代码仓

- Gitlab所建的仓中有mac版本，windows版本的cli工具

- 将Gitlab的仓拉取到本地，并给予cli工具可执行权限：chmod +x plugin-cli-inter-for-mac-1.0.9

## CLI工具指令

|     指令     | 子命令                       | 参数  | 说明  |
| :----------: | :---------------- | :-------- | :-------- |
| init | --mode | again | 重新生成新的项目 |
| init | --mode | depend | 安装前端能力依赖 |
| config | --env | local | 环境配置文件的修改，检测本地项目中config文件下是否存在local.yaml文件，不存在用户可登陆环境录入参数生成，若存在用户可根据提示路径手动修改 |
| config | --env | deploy-sit | 环境配置文件的修改，检测本地项目中config文件下是否存在ci-deploy.yaml文件，不存在用户可登陆环境录入参数生成，若存在用户可根据提示路径手动修改 |
| runlocal | 无 | 无 | 启动DEV环境，可选择插件的生命周期进行插件的操作，enable、disable、install、uninstall、start、run等，其中执行run将会自动执行install等操作，clear将会自动执行disable、uninstall等操作 |
| tag | --msg | #123233 | 当Tag消息匹配到ONES需求单序号时，对应的ONES插件工作项将会与该需求单建立关联。 |
| tag | --name | P11111 | Tag的名称，为空时，将自动使用当前代码仓中最近一次Tag名称的下一个小版本作为tag号 |
| add | -way | b | 添加后端能力 |
| add | -way | f | 添加前端能力 |



## init(初始化项目)

## go语言

- 用户先选择前后端能力

- 前后端能力列表展示

|     名称     | 说明                       |
| :----------: | :------------------------- |
| 简单登录认证 | 系统提供简单认证的能力，可以让插件开发者自定义登录认证的验证逻辑 |
| 拦截时间 | 拦截接口被调用时间 |

- 用户选择能力后可以根据所选的能力自定义关于这个能力的一些属性
- 详见配置 https://ones.ai/wiki/#/team/RDjYMhKq/space/DJn91vTZ/page/KQXfnRVR

- 配置完成生成项目

- 生成完项目后可选择是否配置开发环境（DEV）和测试环境（SIT）的配置文件（local.yaml|ci-deploy.yaml）

   - 选择是：将会先配置开发环境（DEV）的配置文件，需用户输入开发环境（DEV）的url，然后进行登录，用户输入email，password

      - 登陆以后有团队可供选择，也可以创建团队，选择以后（后续操作@todo）开发环境（DEV）local.yaml配置完成

      - 配置完成local.yaml文件后会询问测试环境是否指向另一个环境

         - 是：需用户输入测试环境（SIT）的url，然后进行登录，用户输入email，password，如有多个团队用户需进行选择，否则ci-deploy.yaml的配置信息都会从登陆信息中获取，ci-deploy.yaml文件配置完成

         - 否：将会使用开发环境（DEV）的配置信息

   - 选择否：项目生成

## JAVA语言

@todo

## nodejs语言

@todo

## config(修改配置文件)

用于修改DEV/SIt环境的配置文件,配置信息详见[配置](https://doc.plugins.myones.net/config/config)

## DEV环境配置文件修改

- 先检测项目下config目录中是否存在local.yaml文件，若不存在，配置开发环境（DEV）的配置文件，需用户输入开发环境（DEV）的url，然后进行登录，用户输入email，password

- 若存在则需要开发者手动修改配置文件，会提示文件所在路径

## SIT环境配置文件修改

- 先检测项目下config目录中是否存在ci-deploy.yaml文件，若不存在，配置测试环境（SIT）的配置文件，需用户输入测试环境（SIT）的url，然后进行登录，用户输入email，password

- 若存在则需要开发者手动修改配置文件，会提示文件所在路径

## tag(项目打包部署)

用于项目的release和打包opk并且关联需求工单

## --name项目tag名

- Tag的名称，为空时，将自动使用当前代码仓中最近一次Tag名称的下一个小版本作为tag号

## --msgONES插件工作项与该需求单建立关联

- 当Tag消息匹配到ONES需求单序号时，对应的ONES插件工作项将会与该需求单建立关联。

## runlocal(启动本地开发环境)

@todo