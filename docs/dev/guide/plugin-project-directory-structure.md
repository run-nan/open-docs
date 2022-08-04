---
sidebar_position: 1
---

# 插件工程目录结构

```
.
├── README.md
├── ability-templates
│   ├── account
│   ├── api-register-jack
│   ├── configuration-page
│   ├── item-mutation
│   ├── script-field-float
│   ├── send-short-message
│   ├── simple-auth
│   └── system-db
├── backend # 后端资源目录
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── config # 插件配置
│   ├── ci-deploy.yaml
│   ├── local.yaml
│   └── plugin.yaml
├── logo.svg
├── node_modules
│   └── @ones
│       ├── cli-plugin
│       └── cli-plugin-template
├── package-lock.json
├── package.json
├── web # 前端资源目录
│   ├── browserslist
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── logo.svg # 插件 Logo
│   ├── src
│   └── tsconfig.json
├── workspace
│   └── locale # 配置文件使用的语言包
│   │   └── zh.yaml # 简体中文
│   │   └── en.yaml # 英文
│   │   └── ja.yaml # 日文
│   └── plugin.sql
```