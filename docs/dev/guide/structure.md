---
sidebar_position: 1
---

# 目录结构

插件的主要目录结构如下：

```
.
├── README.md
├── ability-templates
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
└── workspace
    └── plugin.sql
```
