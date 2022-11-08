---
sidebar_position: 2
---

# upgrade.yaml

插件项目下的 `/config/upgrade.yaml` 文件为插件升级配置文件，使用 [YAML](https://yaml.org/) 语法：

```yaml
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```

## workspace

插件升级过程中 workspace 的文件替换规则配置，用于规范文件冲突处理过程

### rule

- 类型：`'save_new'` `'save_old'`

文件替换规则，可选值如下：

|    规则    | 说明                                 |
| :--------: | :----------------------------------- |
| `save_new` | 新文件跟旧文件发生冲突时，保留新文件 |
| `save_old` | 新文件跟旧文件发生冲突时，保留旧文件 |

### exclude

- 类型：`(string | RegExp)[]`

排除文件列表，支持正则匹配，该列表中的文件使用与 `rule` 相反的规则
