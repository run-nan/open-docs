import Image from '@theme/IdealImage'

# 触发列表

:::caution

为了便于展示与检索，下述介绍省略了 `action:pre` 与 `action:post` 前缀，请自行根据拦截需求，添加前缀。

完整格式如下：

拦截工作项普通属性更新**前置操作**：`action:pre:ones:task:fields:update`

拦截工作项普通属性**更新操作**：`ones:task:fields:update`

:::

## ones:task:fields:update

**ONES 要求：**v3.10.20+

工作项普通属性更新操作

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

## ones:task:field:status:update

**ONES 要求：**v3.10.20+

工作项状态更新操作

:::caution 注意

「发布」工作项类型，状态转为「已发布」时，数据格式与普通状态变更存在不同

:::

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

## ones:task:action:stdToStdIssueType

**ONES 要求：**v3.10.20+

工作项「变更工作项类型」操作

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

## ones:task:action:stdToSubIssueType

**ONES 要求：**v3.10.20+

工作项「转为子工作项」操作

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

## ones:task:action:subToSubIssueType

**ONES 要求：**v3.10.20+

子工作项「变更子工作项类型」操作

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

## ones:task:action:subToStdIssueType

**ONES 要求：**v3.10.20+

子工作项「转为工作项」操作

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

## ones:task:add

**ONES 要求：**v3.11.25+

「新建工作项」「新建子工作项」「批量新建子工作项」操作

<Image img={require('./images/ones-task-add.png')} />

## ones:taskList:action:modifyIssueType

**ONES 要求：**v3.10.20+

工作项列表「批量变更工作项类型」操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

## ones:taskList:action:stdToSubIssueType

**ONES 要求：**v3.10.20+

工作项列表「批量转为子工作项」操作

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

## ones:taskList:action:subToStdIssueType

**ONES 要求：**v3.10.20+

工作项列表「批量转为工作项」操作

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

## ones:taskList:action:modifyFieldValues

**ONES 要求：**v3.10.20+

工作项列表「批量修改工作项属性」操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

## ones:taskList:batchAdd

**ONES 要求：**v3.11.25+

「批量新建工作项」操作

<Image img={require('./images/ones-taskList-batchAdd.png')} />

## ones:project:add

**ONES 要求：**v3.11.25+

「新建项目」操作

<Image img={require('./images/ones-project-add.png')} />

## ones:project:copy

**ONES 要求：**v3.11.25+

「复制项目」操作

<Image img={require('./images/ones-project-copy.png')} />

## ones:project:update

**ONES 要求：**v3.11.25+

更新项目相关信息的操作，如：项目名称、项目信息、项目状态、项目属性等

<Image img={require('./images/ones-project-update.png')} />

## ones:manhour:estimated:update

**ONES 要求：**v3.11.25+

工时简单模式，工时信息「修改预估工时」操作

<Image img={require('./images/ones-manhour-estimated-update.png')} />

## ones:manhour:remaining:update

**ONES 要求：**v3.11.25+

工时信息「修改剩余工时」操作

:::caution 注意

在不同的「工时模式」下，此 Action 接收到的数据格式存在差异

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

## ones:manhour:add

**ONES 要求：**v3.11.25+

「添加成员登记工时」「添加成员预估工时」操作

<Image img={require('./images/ones-manhour-add.png')} />

## ones:manhour:update

**ONES 要求：**v3.11.25+

「修改成员登记工时」「修改成员预估工时」操作

<Image img={require('./images/ones-manhour-update.png')} />

## ones:manhour:delete

**ONES 要求：**v3.11.25+

「删除成员登记工时」「删除成员预估工时」操作

<Image img={require('./images/ones-manhour-delete.png')} />

## ones:activity:add

**ONES 要求：**v3.11.25+

「新建项目计划」「新建里程碑」操作

<Image img={require('./images/ones-activity-add.png')} />

## ones:activity:update

**ONES 要求：**v3.11.25+

「更新项目计划」「更新里程碑」操作

<Image img={require('./images/ones-activity-update.png')} />

## ones:activity:delete

**ONES 要求：**v3.11.25+

「删除项目计划」「删除里程碑」操作

<Image img={require('./images/ones-activity-delete.png')} />

## ones:activityRelationLink:add

**ONES 要求：**v3.11.25+

项目计划「添加工作项前、后置依赖」操作

<Image img={require('./images/activityRelationLink-add.png')} />

## ones:activityRelationLink:delete

**ONES 要求：**v3.11.25+

项目计划「删除工作项前、后置依赖」操作

<Image img={require('./images/activityRelationLink-delete.png')} />

## ones:activityRelease:add

**ONES 要求：**v3.11.25+

「创建快照」操作

<Image img={require('./images/ones-activityRelease-add.png')} />

## ones:activityRelease:update

**ONES 要求：**v3.11.25+

「更新快照」操作

<Image img={require('./images/ones-activityRelease-update.png')} />

## ones:deliverable:add

**ONES 要求：**v3.11.25+

「新建交付物」操作

<Image img={require('./images/ones-deliverable-add.png')} />

## ones:deliverable:update

**ONES 要求：**v3.11.25+

「更新交付物」操作

<Image img={require('./images/ones-deliverable-update.png')} />

## ones:deliverable:delete

**ONES 要求：**v3.11.25+

「删除交付物」操作

<Image img={require('./images/ones-deliverable-delete.png')} />

## ones:space:add

**ONES 要求：**P8133

「新建页面组」操作

<Image img={require('./images/ones-space-add.png')} />

## ones:space:copy

**ONES 要求：**P8133

「复制页面组」操作

<Image img={require('./images/ones-space-copy.png')} />

## ones:space:update

**ONES 要求：**P8133

「更新页面组」操作

<Image img={require('./images/ones-space-update.png')} />

## ones:space:update

**ONES 要求：**P8133

「删除页面组」操作

<Image img={require('./images/ones-space-delete.png')} />
