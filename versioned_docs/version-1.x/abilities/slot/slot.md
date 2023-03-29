# Slots

There are three types of front-end slots: global slots, application slots, and module slots.

The available hook of a slot is divided into two parts:

- Global data: that can be accessed by all slots (except for that have a special note on the slot page), for example,the plugin info, the organization info, the team info, the user info, etc.

  - [usePluginInfo](../../reference/packages/store/store.md#usePluginInfo)
  - [useOrganizationInfo](../../reference/packages/store/store.md#useOrganizationInfo)
  - [useTeamInfo](../../reference/packages/store/store.md#useTeamInfo)
  - [useUserInfo](../../reference/packages/store/store.md#useUserInfo)

- Context data: that can only be accessed within the scope. For example, the slot under the path "ONES Project" - "Project component" can get the project info instead of the test plan info. Please refer to the chapter "Available Hook API" of a slot page.

The supported configuration options by a slot will only list the configuration that needs special instructions, and the configurations of the following categories will not be listed additionally:

- The configuration added by the ONES CLI automatically:

  - [id](../../reference/config/plugin.yaml#moduleId)
  - [title](../../reference/config/plugin.yaml#title)
  - [entry](../../reference/config/plugin.yaml#entry)

- The configuration supported by all the slots by default (that are not supported will be noted on the slot page):
  - [permission](../../reference/config/plugin.yaml#modulePermission)
