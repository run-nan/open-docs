---
id: upgrade
sidebar_position: 12
---

# Upgrade

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

- rule

  File replacement rules. Available values are as follows:

  | **Rules** | **Description**                                               |
  | :-------- | :------------------------------------------------------------ |
  | save_new  | When a new file conflicts with an old one, keep the new file. |
  | save_old  | When a new file conflicts with an old one, keep the old file. |

- exclude

  Exclusion list, supports regular expression matching files, the hit files do not apply `rule` rules.

Sample configuration: This configuration means that when the files in the `workspace` directory of the old and new plugin conflict, the files in the new plugin will be kept. The files matched by `exclude`, except `a.txt` and files in the `temp` directory

```yaml title="config/upgrade.yaml"
workspace:
  rule: save_new
  exclude:
    - a.txt
    - temp/*
```

## Constraints

### service.config

- The declaration of `service.config` is not allowed to be modified when the plugin is upgraded, even if it is modified, it will not take effect.
- Adding and deleting `service.config` is allowed when the plugin is upgraded.

### abilities.config

- The mapping of `abilities.id` to `abilities.version:abilities.type` is not allowed to be changed when the plugin is upgraded.
- When the plugin is upgraded, `abilities.config` only supports modifying the `show` and `value` fields, other fields will not take effect even if they are modified.
