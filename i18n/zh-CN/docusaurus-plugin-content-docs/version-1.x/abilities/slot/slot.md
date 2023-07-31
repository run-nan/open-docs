# 插槽

前端插槽一共分为三类：全局插槽、应用插槽、模块插槽。

插槽可获取的数据分为两部分：

- 全局数据：所有的插槽都能访问（特殊说明的除外），如插件信息、组织信息、团队信息、用户信息等

  - [usePluginInfo](../../reference/packages/store/store.md#usePluginInfo)
  - [useOrganizationInfo](../../reference/packages/store/store.md#useOrganizationInfo)
  - [useTeamInfo](../../reference/packages/store/store.md#useTeamInfo)
  - [useUserInfo](../../reference/packages/store/store.md#useUserInfo)

- 上下文数据：只能在其作用域内的插槽中访问，根据插槽的位置不同，获取的上下文数据也不同。比如项目中的模块插槽一般可以获取当前项目的上下文信息，而无法随意获取测试计划信息，具体可访问的数据范围请查阅各自的插槽说明

插槽支持的配置项，只会列出需要特殊说明的配置项，下面分类的配置不会额外列出：

- ONES CLI 自动添加的配置项

  - [id](../../reference/config/plugin.yaml#moduleId)
  - [title](../../reference/config/plugin.yaml#title)
  - [entry](../../reference/config/plugin.yaml#entry)
  - [enableMemoryRouter](../../reference/config/plugin.yaml#enablememoryrouter)

- 默认所有的插槽都支持的配置项（不支持的插槽，会在插槽页面特殊说明）
  - [permission](../../reference/config/plugin.yaml#modulePermission)
