---
id: package
sidebar_position: 9
---

# Package

## Overview

When the plugin development is complete and the self test passes, you may want to make a plugin package to provide test verification. We provide you with a very convenient packaging method in ONES CLI, you only need to execute an instruction to complete the operation.

## Usage

In the root directory of the plugin project, execute the following command:

```bash
npx op packup
```

The following actions are completed during the packaging process:

1. validating project directory structure or files status
2. Checking module constraints
3. Checking ability relate module
4. Updating min_system_version in plugin.yaml
5. Cleaning web & backend dist folders
6. Building project dist files
7. Generate plugin package

After successful packaging, the console will output project related information.

```bash
✔ Successfully packed up the project
```

After the package is completed, the plugin package is stored in the root directory of the plugin project, and you can take the plugin package to the corresponding ONES for installation.
