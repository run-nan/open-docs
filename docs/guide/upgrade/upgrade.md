# Plugin upgrade

## Overview

The plugin supports uninstall-free upgrades, and upgrading the plugin in this way preserves the data of the old plugin.

## Upgrade

### Step 1: Modify the `plugin.yaml` file

To upgrade a plugin, you need to modify the configuration file `/config/plugin.yaml` of the plugin. The modified `plugin.yaml` file must meet the following two points:

- The value of the `app_id` field in the new plugin and the old plugin must remain the same
- The `version` field of the new version of the plugin must be higher than the old version of the plugin

Example configuration:

```yaml
# Old version
service:
  app_id: O2MgOGxE
  version: 1.0.0
  ...
# New version
service:
  app_id: O2MgOGxE
  version: 1.0.1
  ...
```

### Step 2: write the `upgrade.yaml` file

When the plugin upgrades, it replaces the files in the `workspace` directory according to the rules in `/config/upgrade.yaml`. If `/config/upgrade.yaml` does not exist, it will cause the plugin upgrade to fail.

`upgrade.yaml` must be written in accordance with yaml syntax, and the content rules are as follows:

- workspace

  File replacement rule configuration of `workspace` during plugin upgrade to standardize file conflict handling

- rule

  File replacement rules. Available values are as follows:

  | **Rules** | **Description**                                               |
  | --------- | ------------------------------------------------------------- |
  | save_new  | When a new file conflicts with an old one, keep the new file. |
  | save_old  | When a new file conflicts with an old one, keep the old file. |

- exclude

  Exclude list, support regular expressions to match files, hit files do not apply `rule` rules. For example, if `rule` is configured with `save_old`, the list of files hit by the `exclude` rule uses the `save_new` policy.

Sample configuration: this configuration means that when the files in the `workspace` directory of the new and old plugins conflict, the files in the new plugin are retained. Files that meet the rules configured by `exclude` and retain the files in the old plugin

```yaml
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```
