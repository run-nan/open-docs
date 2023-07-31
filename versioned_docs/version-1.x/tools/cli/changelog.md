---
sidebar_position: 3
---

# Changelog

All notable changes to this package will be documented in this file.

## 1.2.24 (2023-06-27)

### Features

- **cli-plugin**:
  - 🌟 new `available` version hint
  - 🌟 new command `npx op upgrade` to upgrade cli
  - 🌟 add options to update plugin version when execute `npx op packup`

## 1.2.22 (2023-05-24)

### Features

- **cli-plugin**:

  - 🔥 slots support lifecycle and virtual routing
  - 🌟 install corresponding dependencies on demand for adding capabilities
  - 🌟 update `min_system_version` automatically for adding capabilities

- **cli-plugin-template**: 🌟 simplify backend template dependencies

## 1.2.16 (2023-02-18)

### Bug Fixes

- **cli-plugin**: 🐞 fix the issue that slot `about:blank` packup does not support config title icon

## 1.2.14 (2023-02-08)

### Features

- **cli-ability-template**: 🌟 add ability `testcase-report-custom-component`

### Bug Fixes

- **cli-ability-template**: 🐞 fix the issue that the ability cannot be added to the integration code repository (the ability is bound to the slot and version)

## 1.2.13 (2023-01-29)

### Bug Fixes

- **cli-plugin**:
  - 🐞 update info when add sub-module
  - 🐞 compatible with no workspaces for old cli

## 1.2.12 (2023-01-11)

### Features

- **cli-plugin**: 🌟 support plugin config schema
- **cli-plugin-template**: 🌟 add config file `upgrade.yaml`

## 1.2.9 (2022-12-30)

### Features

- **cli-ability-template**: 🌟 add ability template `custom-code-repository` and `slot-template`

## 1.2.8 (2022-12-06)

### Features

- **cli-ability-template**: 🌟 add sidebar menu template

### Bug Fixes

- **cli-plugin**: 🐞 correct dev server listen address

## 1.2.7 (2022-11-29)

### Features

- **cli-plugin**: 🌟 support `layout-custom-quick-action`
- **cli-ability-template**:
  - 🌟 support `layout-custom-quick-action`
  - 🌟 support `third import`

## 1.2.5 (2022-11-08)

### Bug Fixes

- **cli-plugin**: 🐞 fix the path style issue between POSIX and WINDOWS

## 1.2.3 (2022-10-28)

### Features

- **cli-ability-template**: 🌟 add ability template `custom-permission` and `item-handler`
<!-- * **cli-ability-template**: 🌟 添加自定义权限点能力模版以及item处理器能力模版 -->

## 1.2.0 (2022-10-10)

### Features

- **cli-plugin**: 🌟 match dependencies by major version

## 1.1.1 (2022-09-27)

### Features

- **cli-plugin**:
  - 🌟 support `org` level plugin
- **cli-ability-template**: 🌟 add ability template `timer-task`

## 1.0.0 (2022-09-19)

### Features

- **cli-plugin**:
  - 🌟 output sourcemap for debugging plugin backend
  - 🌟 support auto-complete prompt for `add` command
  - 🌟 support provide output filename for packup plugin
  - 🌟 support specify log level for webpack during debugging plugin
- **cli-ability-template**: 🌟 provide random `UUID` during ability addition
