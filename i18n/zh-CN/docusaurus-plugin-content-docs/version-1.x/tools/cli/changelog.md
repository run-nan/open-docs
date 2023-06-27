---
sidebar_position: 3
---

# 更新日志

这个包所有值得注意的变化都将记录在这个文件中。

## 1.2.24 (2023-06-27)

### 新特性

- **cli-plugin**:
  - 🌟 新增 `available` 版本提示
  - 🌟 新增 `npx op upgrade` 升级命令
  - 🌟 新增 `npx op packup` 支持自动更新插件版本号

## 1.2.22 (2023-05-24)

### 新特性

- **cli-plugin**:
  - 🔥 插槽支持生命周期和虚拟路由
  - 🌟 添加能力按需安装对应依赖
  - 🌟 添加能力自动更新 `min_system_version` 字段
- **cli-plugin-template**: 🌟 精简后端初始模版依赖集

## 1.2.16 (2023-02-18)

### Bug Fixes

- **cli-plugin**: 🐞 修复 `about:blank` 打包不支持 title icon 问题

## 1.2.14 (2023-02-08)

### 新特性

- **cli-ability-template**: 🌟 添加自定测试报告组件能力

### Bug Fixes

- **cli-ability-template**: 🐞 修复无法添加集成代码仓能力问题(能力与插槽和版本绑定)

## 1.2.13 (2023-01-29)

### Bug Fixes

- **cli-plugin**:
  - 🐞 添加子模块更新对应信息
  - 🐞 兼容旧插件无 `workspaces` 情况

## 1.2.12 (2023-01-11)

### 新特性

- **cli-plugin**: 🌟 新增插件配置规范约束
- **cli-plugin-template**: 🌟 新增升级配置文件 `upgrade.yaml`

## 1.2.9 (2022-12-30)

### 新特性

- **cli-ability-template**: 🌟 新增自定义集成代码仓能力和插槽模版

## 1.2.8 (2022-12-06)

### 新特性

- **cli-ability-template**: 🌟 新增能力模版 `sidebar menu`

### Bug Fixes

- **cli-plugin**: 🐞 修复本地调试服务监听地址错误

## 1.2.7 (2022-11-29)

### 新特性

- **cli-plugin**: 🌟 新增能力 `layout-custom-quick-action`
- **cli-ability-template**:
  - 🌟 新增能力模版 `layout-custom-quick-action`
  - 🌟 新增能力模版 `third import`

## 1.2.5 (2022-11-08)

### Bug Fixes

- **cli-plugin**: 🐞 修复 `POSIX` 和 `WINDOWS` 路径风格问题

## 1.2.3 (2022-10-28)

### 新特性

- **cli-ability-template**: 🌟 添加自定义权限点能力模版以及 item 处理器能力模版

## 1.2.0 (2022-10-10)

### 新特性

- **cli-plugin**: 🌟 支持通过主版本号匹配依赖

## 1.1.1 (2022-09-27)

### 新特性

- **cli-plugin**:
  - 🌟 支持组织级别插件
- **cli-ability-template**: 🌟 添加定时器能力模板

## 1.0.0 (2022-09-19)

### 新特性

- **cli-plugin**:
  - 🌟 调试插件后端输出 `sourcemap`
  - 🌟 `add` 命令，支持自动补全
  - 🌟 打包插件支持输出文件名
  - 🌟 webpack 调试插件支持详细的日志等级输出
- **cli-ability-template**: 🌟 添加能力时，随机生成 `UUID`
