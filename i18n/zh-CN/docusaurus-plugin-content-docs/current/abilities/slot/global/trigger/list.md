# 触发列表

:::warning
目前 Trigger 是基于前端接口请求进行拦截的，因此，在升级 ONES 版本时，你需要检查插件所使用到的接口是否发生了破坏性变更，避免造成升级后插件不可用。
:::

## ones:task:fields:update

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:fields:update`
- 后置拦截：`action:post:ones:task:fields:update`

工作项普通属性更新操作

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

## ones:task:field:status:update

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:field:status:update`
- 后置拦截：`action:post:ones:task:field:status:update`

工作项状态更新操作

:::caution 注意

「发布」工作项类型，状态转为「已发布」时，数据格式与普通状态变更存在不同

:::

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

## ones:task:action:stdToStdIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:action:stdToStdIssueType`
- 后置拦截：`action:post:ones:task:action:stdToStdIssueType`

工作项「变更工作项类型」操作

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

## ones:task:action:stdToSubIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:action:stdToSubIssueType`
- 后置拦截：`action:post:ones:task:action:stdToSubIssueType`

工作项「转为子工作项」操作

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

## ones:task:action:subToSubIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:action:subToSubIssueType`
- 后置拦截：`action:post:ones:task:action:subToSubIssueType`

子工作项「变更子工作项类型」操作

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

## ones:task:action:subToStdIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:action:subToStdIssueType`
- 后置拦截：`action:post:ones:task:action:subToStdIssueType`

子工作项「转为工作项」操作

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

## ones:task:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:task:add`
- 后置拦截：`action:post:ones:task:add`

「新建工作项」「新建子工作项」「批量新建子工作项」操作

<Image img={require('./images/ones-task-add.png')} />

## ones:taskList:action:modifyIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:taskList:action:modifyIssueType`
- 后置拦截：`action:post:ones:taskList:action:modifyIssueType`

工作项列表「批量变更工作项类型」操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

## ones:taskList:action:stdToSubIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:taskList:action:stdToSubIssueType`
- 后置拦截：`action:post:ones:taskList:action:stdToSubIssueType`

工作项列表「批量转为子工作项」操作

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

## ones:taskList:action:subToStdIssueType

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:taskList:action:subToStdIssueType`
- 后置拦截：`action:post:ones:taskList:action:subToStdIssueType`

工作项列表「批量转为工作项」操作

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

## ones:taskList:action:modifyFieldValues

**ONES 要求：**v3.10.20+

**Action 类型：**

- 前置拦截：`action:pre:ones:taskList:action:modifyFieldValues`
- 后置拦截：`action:post:ones:taskList:action:modifyFieldValues`

工作项列表「批量修改工作项属性」操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

## ones:taskList:batchAdd

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:taskList:batchAdd`
- 后置拦截：`action:post:ones:taskList:batchAdd`

「批量新建工作项」操作

<Image img={require('./images/ones-taskList-batchAdd.png')} />

## ones:project:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:project:add`
- 后置拦截：`action:post:ones:project:add`

「新建项目」操作

<Image img={require('./images/ones-project-add.png')} />

## ones:project:copy

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:project:copy`
- 后置拦截：`action:post:ones:project:copy`

「复制项目」操作

<Image img={require('./images/ones-project-copy.png')} />

## ones:project:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:project:update`
- 后置拦截：`action:post:ones:project:update`

更新项目相关信息的操作，如：项目名称、项目信息、项目状态、项目属性等

<Image img={require('./images/ones-project-update.png')} />

## ones:manhour:estimated:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:manhour:estimated:update`
- 后置拦截：`action:post:ones:manhour:estimated:update`

工时简单模式，工时信息「修改预估工时」操作

<Image img={require('./images/ones-manhour-estimated-update.png')} />

## ones:manhour:remaining:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:manhour:remaining:update`
- 后置拦截：`action:post:ones:manhour:remaining:update`

工时信息「修改剩余工时」操作

:::caution 注意

在不同的「工时模式」下，此 Action 接收到的数据格式存在差异

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

## ones:manhour:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:manhour:add`
- 后置拦截：`action:post:ones:manhour:add`

「添加成员登记工时」「添加成员预估工时」操作

<Image img={require('./images/ones-manhour-add.png')} />

## ones:manhour:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:manhour:update`
- 后置拦截：`action:post:ones:manhour:update`

「修改成员登记工时」「修改成员预估工时」操作

<Image img={require('./images/ones-manhour-update.png')} />

## ones:manhour:delete

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:manhour:delete`
- 后置拦截：`action:post:ones:manhour:delete`

「删除成员登记工时」「删除成员预估工时」操作

<Image img={require('./images/ones-manhour-delete.png')} />

## ones:activity:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activity:add`
- 后置拦截：`action:post:ones:activity:add`

「新建项目计划」「新建里程碑」操作

<Image img={require('./images/ones-activity-add.png')} />

## ones:activity:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activity:update`
- 后置拦截：`action:post:ones:activity:update`

「更新项目计划」「更新里程碑」操作

<Image img={require('./images/ones-activity-update.png')} />

## ones:activity:delete

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activity:delete`
- 后置拦截：`action:post:ones:activity:delete`

「删除项目计划」「删除里程碑」操作

<Image img={require('./images/ones-activity-delete.png')} />

## ones:activityRelationLink:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activityRelationLink:add`
- 后置拦截：`action:post:ones:activityRelationLink:add`

项目计划「添加工作项前、后置依赖」操作

<Image img={require('./images/activityRelationLink-add.png')} />

## ones:activityRelationLink:delete

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activityRelationLink:delete`
- 后置拦截：`action:post:ones:activityRelationLink:delete`

项目计划「删除工作项前、后置依赖」操作

<Image img={require('./images/activityRelationLink-delete.png')} />

## ones:activityRelease:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activityRelease:add`
- 后置拦截：`action:post:ones:activityRelease:add`

「创建快照」操作

<Image img={require('./images/ones-activityRelease-add.png')} />

## ones:activityRelease:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:activityRelease:update`
- 后置拦截：`action:post:ones:activityRelease:update`

「更新快照」操作

<Image img={require('./images/ones-activityRelease-update.png')} />

## ones:deliverable:add

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:deliverable:add`
- 后置拦截：`action:post:ones:deliverable:add`

「新建交付物」操作

<Image img={require('./images/ones-deliverable-add.png')} />

## ones:deliverable:update

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:deliverable:update`
- 后置拦截：`action:post:ones:deliverable:update`

「更新交付物」操作

<Image img={require('./images/ones-deliverable-update.png')} />

## ones:deliverable:delete

**ONES 要求：**v3.11.25+

**Action 类型：**

- 前置拦截：`action:pre:ones:deliverable:delete`
- 后置拦截：`action:post:ones:deliverable:delete`

「删除交付物」操作

<Image img={require('./images/ones-deliverable-delete.png')} />

## ones:space:add

**ONES 要求：**v3.14.0+

**Action 类型：**

- 前置拦截：`action:pre:ones:space:add`
- 后置拦截：`action:post:ones:space:add`

「新建页面组」操作

<Image img={require('./images/ones-space-add.png')} />

## ones:space:copy

**ONES 要求：**v3.14.0+

**Action 类型：**

- 前置拦截：`action:pre:ones:space:copy`
- 后置拦截：`action:post:ones:space:copy`

「复制页面组」操作

<Image img={require('./images/ones-space-copy.png')} />

## ones:space:update

**ONES 要求：**v3.14.0+

**Action 类型：**

- 前置拦截：`action:pre:ones:space:update`
- 后置拦截：`action:post:ones:space:update`

「更新页面组」操作

<Image img={require('./images/ones-space-update.png')} />

## ones:space:delete

**ONES 要求：**v3.14.0+

**Action 类型：**

- 前置拦截：`action:pre:ones:space:delete`
- 后置拦截：`action:post:ones:space:delete`

「删除页面组」操作

<Image img={require('./images/ones-space-delete.png')} />
