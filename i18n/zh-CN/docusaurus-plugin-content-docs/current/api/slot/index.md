# 插槽模块列表

前端插槽一共分为三类：全局插槽、应用插槽、模块插槽。

插槽可获取的数据分为两部分：

- 全局数据：所有的插槽都能访问（特殊说明的除外），如组织信息、团队信息、用户信息等

  - [useOrganizationInfo](../packages/store.md#useOrganizationInfo)
  - [useTeamInfo](../packages/store.md#useTeamInfo)
  - [useUserInfo](../packages/store.md#useUserInfo)

- 上下文数据：只能在其作用域内的插槽中访问，根据插槽的位置不同，获取的上下文数据也不同。比如项目中的模块插槽一般可以获取当前项目的上下文信息，而无法随意获取测试计划信息，具体可访问的数据范围请查阅各自的插槽说明
