---
sidebar_position: 2
description: A variety of capabilities are available to easily develop your ONES.
---

# Add ability

:::tip

To get the latest ability template, execute `npx op update template` first

:::

## Overview

If you want to customize some of the behaviors in ONES business module, we also provide you with a lot of "ability". These ability are the smallest units you can define and modify ONES, as well as the smallest units that can use and access ONES existing resources. The "slot" mentioned earlier is a pure frontend ability, which is not quite the same as what we are talking about now. The slot is the smallest unit in which you adjust and modify the ONES UI.

## Abilities

- [Basic ability](../../abilities/basic/basic.mdx)
- [Business ability](../../abilities/business/business.mdx)

## Usage

Execute the `npx op add ability` directive in the root directory of the plugin project to add new opening abilities to the plugin:

```bash
➜ npx op add ability
  ✔ Validating the input params
  ✔ Validating project files exists
  ✔ Generating initial answers by input params
  ✔ Parsing plugin config content

Pre-require tasks run successfully
? Please select the ability you want to add: …
account@1.0.0
api-register-jack@1.0.0
api-register-jack@2.0.0
configuration-page@1.0.0
custom-permission@1.0.0
item-handler@1.0.0
item-mutation@1.0.0
project-custom-component@1.0.0
script-field-float@1.0.0
script-id@1.0.0
send-short-message@1.0.0
simple-auth@1.0.0
task-event-handler@1.0.0 (Ability does not match current system version)
```

In the list, you can search for and select interface-related abilities or business open abilities through the arrow keys or enter the ability name.

:::tip

When logged in, the tool will prompt which abilities are not available according to the connected environment

:::

After selecting the ability version, if there are multiple templates for the ability version, you need to select a template.

```
? Please select a template: …
1.0
1.0-cron

```

If the selected ability must be bound to the template, you also need to bind the module according to the prompts.

```
? Please enter the module 'ones:global:modal' title you want to add: …

```

## Examples

**Simple Auth**

- **Add Simple Auth abilities**
  Execute the following instructions and select: `SimpleAuth`

  ```bash
  npx op add ability
  ```

- **In the `/config/plugin.yaml`**

  A new paragraph has been added to the abilities field of the `plugin.yaml` file

  ```yaml title="/config/plugin.yaml"
  abilities:
    - id: iKvkTB5A
      name: Simple-login
      version: 1.0.0
      abilityType: SimpleAuth
      function:
        validateFunc: SimpleAuthValidate
  ```

- **In the `backend/src`**
  Will generate `index.ts` and `simple-auth.ts`, which is the ability template we provide to you.

:::caution notice
The same abilities can be repeatedly added to the plug-in project when the abilities are added repeatedly:

- Templates will not be generated repeatedly under `backend/src`
- The configuration is generated in `config/plugin.yaml` every time

:::
