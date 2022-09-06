---
sidebar_position: 2
---

# upgrade.yaml

The `/config/upgrade.yaml` file of the plugin project is the plugin upgrade configuration file, using the [YAML](https://yaml.org/) syntax:

```yaml
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```

## workspace

The file replacement rule configuration of `workspace` during the plugin upgrade process is used to standardize the file conflict processing process

### rule

- Type: `'save_new'` `'save_old'`

File replacement rule, optional values are as follows:

|    Rule    | Description                                                         |
| :--------: | :--------------------------------------------------------------- |
| `save_new` | When the new file conflicts with the old file, keep the new file |
| `save_old` | When the new file conflicts with the old file, keep the old file |

### exclude

- Type: `(string | RegExp)[]`

Exclude file list, supports regular matching, the files in this list use the opposite rule to `rule`
