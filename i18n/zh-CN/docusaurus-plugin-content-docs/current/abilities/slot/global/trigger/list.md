import Image from '@theme/IdealImage'

# 触发列表

### action:pre:ones:task:fields:update

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项普通属性更新前置操作

### action:post:ones:task:fields:update

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项普通属性更新后置操作

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

### action:pre:ones:task:field:status:update

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项状态更新前置操作

:::caution 注意

「发布」工作项类型，状态转为「已发布」时，数据格式与普通状态变更存在不同

:::

### action:post:ones:task:field:status:update

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项状态更新后置操作

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

### action:pre:ones:task:action:stdToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项「变更工作项类型」前置操作

### action:post:ones:task:action:stdToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项「变更工作项类型」后置操作

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

### action:pre:ones:task:action:stdToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项「转为子工作项」前置操作

### action:post:ones:task:action:stdToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项「转为子工作项」后置操作

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

### action:pre:ones:task:action:subToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

子工作项「变更子工作项类型」前置操作

### action:post:ones:task:action:subToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

子工作项「变更子工作项类型」后置操作

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

### action:pre:ones:task:action:subToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

子工作项「转为工作项」前置操作

### action:post:ones:task:action:subToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

子工作项「转为工作项」后置操作

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

### action:pre:ones:task:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建工作项」「新建子工作项」「批量新建子工作项」前置操作

### action:post:ones:task:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建工作项」「新建子工作项」「批量新建子工作项」后置操作

<Image img={require('./images/ones-task-add.png')} />

### action:pre:ones:taskList:action:modifyIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量变更工作项类型」前置操作

### action:post:ones:taskList:action:modifyIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量变更工作项类型」后置操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

### action:pre:ones:taskList:action:stdToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量转为子工作项」前置操作

### action:post:ones:taskList:action:stdToSubIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量转为子工作项」后置操作

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

### action:pre:ones:taskList:action:subToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量转为工作项」前置操作

### action:post:ones:taskList:action:subToStdIssueType

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量转为工作项」后置操作

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

### action:pre:ones:taskList:action:modifyFieldValues

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量修改工作项属性」前置操作

### action:post:ones:taskList:action:modifyFieldValues

#### 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

工作项列表「批量修改工作项属性」后置操作

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

### action:pre:ones:taskList:batchAdd

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「批量新建工作项」前置操作

### action:post:ones:taskList:batchAdd

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「批量新建工作项」后置操作

<Image img={require('./images/ones-taskList-batchAdd.png')} />

### action:pre:ones:project:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建项目」前置操作

### action:post:ones:project:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建项目」后置操作

<Image img={require('./images/ones-project-add.png')} />

### action:pre:ones:project:copy

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「复制项目」前置操作

### action:post:ones:project:copy

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「复制项目」后置操作

<Image img={require('./images/ones-project-copy.png')} />

### action:pre:ones:project:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

更新项目相关信息的前置操作，如：项目名称、项目信息、项目状态、项目属性等

### action:post:ones:project:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

更新项目相关信息的后置操作，如：项目名称、项目信息、项目状态、项目属性等

<Image img={require('./images/ones-project-update.png')} />

### action:pre:ones:manhour:estimated:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

工时简单模式，工时信息「修改预估工时」前置操作

### action:post:ones:manhour:estimated:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

工时简单模式，工时信息「修改预估工时」后置操作

<Image img={require('./images/ones-manhour-estimated-update.png')} />

### action:pre:ones:manhour:remaining:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

工时信息「修改剩余工时」前置操作

:::caution 注意

在不同的「工时模式」下，此 Action 接收到的数据格式存在差异

:::

### action:post:ones:manhour:remaining:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

工时信息「修改剩余工时」后置操作

:::caution 注意

在不同的「工时模式」下，此 Action 接收到的数据格式存在差异

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

### action:pre:ones:manhour:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「添加成员登记工时」「添加成员预估工时」前置操作

### action:post:ones:manhour:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「添加成员登记工时」「添加成员预估工时」后置操作

<Image img={require('./images/ones-manhour-add.png')} />

### action:pre:ones:manhour:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「修改成员登记工时」「修改成员预估工时」前置操作

### action:post:ones:manhour:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「修改成员登记工时」「修改成员预估工时」后置操作

<Image img={require('./images/ones-manhour-update.png')} />

### action:pre:ones:manhour:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除成员登记工时」「删除成员预估工时」前置操作

### action:post:ones:manhour:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除成员登记工时」「删除成员预估工时」后置操作

<Image img={require('./images/ones-manhour-delete.png')} />

### action:pre:ones:activity:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建项目计划」「新建里程碑」前置操作

### action:post:ones:activity:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建项目计划」「新建里程碑」后置操作

<Image img={require('./images/ones-activity-add.png')} />

### action:pre:ones:activity:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新项目计划」「更新里程碑」前置操作

### action:post:ones:activity:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新项目计划」「更新里程碑」后置操作

<Image img={require('./images/ones-activity-update.png')} />

### action:pre:ones:activity:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除项目计划」「删除里程碑」前置操作

### action:post:ones:activity:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除项目计划」「删除里程碑」后置操作

<Image img={require('./images/ones-activity-delete.png')} />

### action:pre:activityRelationLink:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

项目计划「添加工作项前、后置依赖」前置操作

### action:post:activityRelationLink:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

项目计划「添加工作项前、后置依赖」后置操作

<Image img={require('./images/activityRelationLink-add.png')} />

### action:pre:activityRelationLink:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

项目计划「删除工作项前、后置依赖」前置操作

### action:post:activityRelationLink:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

项目计划「删除工作项前、后置依赖」后置操作

<Image img={require('./images/activityRelationLink-delete.png')} />

### action:pre:ones:activityRelease:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「创建快照」前置操作

### action:post:ones:activityRelease:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「创建快照」后置操作

<Image img={require('./images/ones-activityRelease-add.png')} />

### action:pre:ones:activityRelease:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新快照」前置操作

### action:post:ones:activityRelease:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新快照」后置操作

<Image img={require('./images/ones-activityRelease-update.png')} />

### action:pre:ones:deliverable:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建交付物」前置操作

### action:post:ones:deliverable:add

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「新建交付物」后置操作

<Image img={require('./images/ones-deliverable-add.png')} />

### action:pre:ones:deliverable:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新交付物」前置操作

### action:post:ones:deliverable:update

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「更新交付物」后置操作

<Image img={require('./images/ones-deliverable-update.png')} />

### action:pre:ones:deliverable:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除交付物」前置操作

### action:post:ones:deliverable:delete

#### 要求

|   ONES    |
| :-------: |
| v3.11.25+ |

「删除交付物」后置操作

<Image img={require('./images/ones-deliverable-delete.png')} />

### action:pre:ones:space:add

#### 要求

| ONES  |
| :---: |
| P8133 |

「新建页面组」前置操作

### action:post:ones:space:add

#### 要求

| ONES  |
| :---: |
| P8133 |

「新建页面组」后置操作

<Image img={require('./images/ones-space-add.png')} />

### action:pre:ones:space:copy

#### 要求

| ONES  |
| :---: |
| P8133 |

「复制页面组」前置操作

### action:post:ones:space:copy

#### 要求

| ONES  |
| :---: |
| P8133 |

「复制页面组」后置操作

<Image img={require('./images/ones-space-copy.png')} />

### action:pre:ones:space:update

#### 要求

| ONES  |
| :---: |
| P8133 |

「更新页面组」前置操作

### action:post:ones:space:update

#### 要求

| ONES  |
| :---: |
| P8133 |

「更新页面组」后置操作

<Image img={require('./images/ones-space-update.png')} />

### action:pre:ones:space:delete

#### 要求

| ONES  |
| :---: |
| P8133 |

「删除页面组」前置操作

### action:post:ones:space:update

#### 要求

| ONES  |
| :---: |
| P8133 |

「删除页面组」后置操作

<Image img={require('./images/ones-space-delete.png')} />
