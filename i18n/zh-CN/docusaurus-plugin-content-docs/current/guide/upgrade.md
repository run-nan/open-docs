---
id: upgrade
sidebar_position: 12
---

# 插件升级

## 概述

插件支持免卸载升级，以该方式升级插件可以保留旧插件的数据。

## 插件升级

### 第一步：修改 plugin.yaml 文件

升级插件需要修改插件的配置文件 `/config/plugin.yaml`，修改后的 `plugin.yaml` 文件必须满足以下两点：

- 新版本插件与旧版本插件的中的 `app_id` 字段的值必须保持不变
- 新版本插件的 `version` 字段必须比旧版本插件的高

示例配置：

```yaml
# 旧版本
service:
  app_id: O2MgOGxE
  version: 1.0.0
  ...
# 新版本
service:
  app_id: O2MgOGxE
  version: 1.0.1
  ...
```

### 第二步：编写 upgrade.yaml 文件

插件升级时会根据 `/config/upgrade.yaml` 中的规则，替换 `workspace` 目录下的文件。如果不存在 `/config/upgrade.yaml`，会导致插件升级失败。

`upgrade.yaml` 编写需符合 yaml 语法，内容规则如下：

- rule

  文件替换规则，可选值如下：

  | **规则** | **说明**                             |
  | -------- | ------------------------------------ |
  | save_new | 新文件跟旧文件发生冲突时，保留新文件 |
  | save_old | 新文件跟旧文件发生冲突时，保留旧文件 |

- exclude

  排除列表，支持正则表达式匹配文件，命中的文件不应用 `rule` 的规则。

示例配置：该配置表示当新旧插件 `workspace` 目录下的文件发生冲突时，保留新插件中的文件。 `exclude`匹配的文件，即 a.txt 以及 temp 目录下的文件除外

```yaml
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```
