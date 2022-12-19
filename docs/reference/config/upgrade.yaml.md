# upgrade.yaml

The migration configuration file for the plugin upgrade, which declares the resource file processing for the plugin upgrade.

File path and structure:

```yaml title="/config/upgrade.yaml"
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```

:::caution
If the plugin `/workspace` is existed in the file, you must declare this file to upgrade to successfully.
:::

## workspace

During the plugin upgrade process, the files in the plugin `/workspace` directory are replaced with the configuration rules to regulate the file conflict handling process.

### rule

- **Type:** `'save_new' | 'save_old'`

File replacement rule, the optional value is as follows:

| Rule       | Description                                                      |
| ---------- | :--------------------------------------------------------------- |
| `save_new` | When the new file conflicts with the old file, keep the new file |
| `save_old` | When the new file conflicts with the old file, keep the old file |

### exclude

- **Type:** `(string | RegExp)[]`

Exclude the file list and support regular matching. The files in this list are used opposite to `rule`.
