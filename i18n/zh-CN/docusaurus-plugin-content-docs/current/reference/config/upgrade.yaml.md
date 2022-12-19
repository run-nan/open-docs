# upgrade.yaml

插件升级的迁移配置文件，声明插件升级时的资源文件处理。

文件位置与结构：

```yaml title="/config/upgrade.yaml"
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```

:::caution
如果插件 `/workspace` 目录下存在文件，则你必须声明此文件，插件才能升级成功。
:::

## workspace

插件升级过程中对插件 `/workspace` 目录下的文件替换规则配置，用于规范文件冲突处理过程。

### rule

- **类型：**`'save_new' | 'save_old'`

文件替换规则，可选值如下：

| 规则       | 说明                                 |
| ---------- | :----------------------------------- |
| `save_new` | 新文件跟旧文件发生冲突时，保留新文件 |
| `save_old` | 新文件跟旧文件发生冲突时，保留旧文件 |

### exclude

- **类型：**`(string | RegExp)[]`

排除文件列表，支持正则匹配，该列表中的文件使用与 `rule` 相反的规则。
