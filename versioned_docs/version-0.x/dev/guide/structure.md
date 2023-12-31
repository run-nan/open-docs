---
sidebar_position: 1
---

# 目录结构

插件的主要目录结构如下：

```
.
├── README.md
├── backend # 后端资源目录
│   ├── package-lock.json
│   ├── package.json
│   ├── rollup.config.js
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── config # 插件配置
│   ├── ci-deploy.yaml
│   ├── local.yaml
│   ├── local.yaml.example
│   └── plugin.yaml
├── package.json
├── test.opk
├── web # 前端资源目录
│   ├── README.md
│   ├── browserslist
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── logo.svg # 插件 Logo
│   ├── src
│   │   └── modules
│   │       └── settings-0WRW
│   │           ├── index.css
│   │           └── index.tsx
│   └── tsconfig.json
├── workspace
│   └── locale # 配置文件使用的语言包
│   │   └── zh.yaml # 简体中文
│   │   └── en.yaml # 英文
│   │   └── ja.yaml # 日文
│   └── plugin.sql
└── yarn.lock
```
