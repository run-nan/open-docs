# 插件工程目录结构

为了提供更好、更集成的开发体验，使用 ONES CLI 创建的插件工程都遵循相同的基本目录结构。

### 目录结构

```
└── <Plugin name>
  ├── backend # 后端资源目录
  │   ├── node_modules
  │   ├── src
  │   │   └── index.ts
  │   ├── package-lock.json
  │   ├── package.json
  │   └── tsconfig.json
  ├── config # 插件配置
  │   ├── ci-deploy.yaml
  │   ├── local.yaml
  │   ├── upgrade.yaml
  │   └── plugin.yaml
  ├── web # 前端资源目录
  │   ├── node_modules
  │   ├── public
  │   │   └── logo.svg # 插件 Logo
  │   ├── browserslist
  │   ├── package-lock.json
  │   ├── package.json
  │   └── tsconfig.json
  ├── workspace
  │   └── language # 配置文件使用的语言包
  │   │   └── zh.yaml # 简体中文
  │   │   └── en.yaml # 英文
  │   │   └── ja.yaml # 日文
  │   └── plugin.sql
  ├── package-lock.json
  ├── package.json
  ├── README.md
```

### 目录介绍

| File/Directory                                                      | Description                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| backend                                                             | 后端资源目录                                                             |
| backend / package.json                                              | 插件工程后端的元数据文件，包括你使用包管理器安装的依赖或脚本             |
| [config / ci-deploy.yaml](../../reference/config/ci-deploy.yaml.md) | 插件工程持续集成配置                                                     |
| [config / local.yaml](../../reference/config/local.yaml.md)         | 本地调试配置（不会被 git 记录）                                          |
| [config / upgrade.yaml](../../reference/config/upgrade.yaml.md)     | 插件升级配置文件                                                         |
| [config / plugin.yaml](../../reference/config/plugin.yaml.md)       | 插件的配置信息                                                           |
| web                                                                 | 前端资源目录                                                             |
| web / package.json                                                  | 插件工程前端的元数据文件，包括你使用包管理器安装的依赖或脚本             |
| web / public / logo.svg                                             | 插件的 Logo（只会读取 logo.svg）                                         |
| workspace                                                           | 插件的物理存储空间，可以在这里存放一些插件的配置或内容，共插件运行时消费 |
