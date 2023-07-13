import Image from '@theme/IdealImage'

# Trigger action list

### action:pre:ones:task:fields:update

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action before updating the issue's standard fields except for the [status](#actionpreonestaskfieldstatusupdate).

### action:post:ones:task:fields:update

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action after updating the issue's standard field except for the [status](#actionpostonestaskfieldstatusupdate).

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

### action:pre:ones:task:field:status:update

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action before updating the issue's status.

:::caution

If the current issue's type is "Release". When the issue's status transitions to "Released", the issue's data format is
different from other standard fields.

:::

### action:post:ones:task:field:status:update

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action after updating the issue's status.

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

### action:pre:ones:task:action:stdToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue's "Change issue type".

### action:post:ones:task:action:stdToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue's "Change issue type".

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

### action:pre:ones:task:action:stdToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue's "Convert to subissue".

### action:post:ones:task:action:stdToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue's "Convert to subissue".

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

### action:pre:ones:task:action:subToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the subissue's "Change subissue type".

### action:post:ones:task:action:subToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the subissue's "Change subissue type".

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

### action:pre:ones:task:action:subToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the subissue's "Convert to issue".

### action:post:ones:task:action:subToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the subissue's "Convert to issue".

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

### action:pre:ones:task:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Create issue", "Create subissue", "Bulk create subissues".

### action:post:ones:task:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Create issue", "Create subissue", "Bulk create subissues".

<Image img={require('./images/ones-task-add.png')} />

### action:pre:ones:taskList:action:modifyIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue list's "Bulk change issue types".

### action:post:ones:taskList:action:modifyIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue list's "Bulk change issue types".

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

### action:pre:ones:taskList:action:stdToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue list's "Bulk convert to subissues".

### action:post:ones:taskList:action:stdToSubIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue list's "Bulk convert to subissues".

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

### action:pre:ones:taskList:action:subToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue list's "Bulk convert into issues".

### action:post:ones:taskList:action:subToStdIssueType

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue list's "Bulk convert into issues".

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

### action:pre:ones:taskList:action:modifyFieldValues

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Pre-action for the issue list's "Bulk change issue fields".

### action:post:ones:taskList:action:modifyFieldValues

#### Requirements

|   ONES    |
| :-------: |
| v3.10.20+ |

Post-action for the issue list's "Bulk change issue fields".

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

### action:pre:ones:taskList:batchAdd

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Bulk create issues".

### action:post:ones:taskList:batchAdd

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Bulk create issues".

<Image img={require('./images/ones-taskList-batchAdd.png')} />

### action:pre:ones:project:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Create project".

### action:post:ones:project:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Create project".

<Image img={require('./images/ones-project-add.png')} />

### action:pre:ones:project:copy

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Duplicate from existing project".

### action:post:ones:project:copy

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Duplicate from existing project".

<Image img={require('./images/ones-project-copy.png')} />

### action:pre:ones:project:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for updating the project info, for example, project name, project info, project status, project field, etc.

### action:post:ones:project:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for updating the project info, for example, project name, project info, project status, project field, etc.

<Image img={require('./images/ones-project-update.png')} />

### action:pre:ones:manhour:estimated:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Time estimated" of "Worklog info" only if the worklog mode is the simple mode.

### action:post:ones:manhour:estimated:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Time estimated" of "Worklog info" only if the worklog mode is the simple mode.

<Image img={require('./images/ones-manhour-estimated-update.png')} />

### action:pre:ones:manhour:remaining:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Time remaining" of "Worklog info".

:::caution

In the different "Worklog mode", the data format that the Action received is different.

:::

### action:post:ones:manhour:remaining:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Time remaining" of "Worklog info".

:::caution

In the different "Worklog mode", the data format that the Action received is different.

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

### action:pre:ones:manhour:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Time estimated", "Log time".

### action:post:ones:manhour:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Time estimated", "Log time".

<Image img={require('./images/ones-manhour-add.png')} />

### action:pre:ones:manhour:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Modify time spent", "Modify member time estimated".

### action:post:ones:manhour:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Modify time spent", "Modify member time estimated".

<Image img={require('./images/ones-manhour-update.png')} />

### action:pre:ones:manhour:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Delete member Time spent", "Delete member Time estimated".

### action:post:ones:manhour:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Delete member Time spent", "Delete member Time estimated".

<Image img={require('./images/ones-manhour-delete.png')} />

### action:pre:ones:activity:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Create plan", "Create milestone".

### action:post:ones:activity:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Create plan", "Create milestone".

<Image img={require('./images/ones-activity-add.png')} />

### action:pre:ones:activity:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for updating the project plan and updating the milestone.

### action:post:ones:activity:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for updating the project plan and updating the milestone.

<Image img={require('./images/ones-activity-update.png')} />

### action:pre:ones:activity:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Delete plan", "Delete milestone".

### action:post:ones:activity:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Delete plan", "Delete milestone".

<Image img={require('./images/ones-activity-delete.png')} />

### action:pre:activityRelationLink:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Add predecessor" in the detail of a plan under "Project plan".

### action:post:activityRelationLink:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Add predecessor" in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-add.png')} />

### action:pre:activityRelationLink:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Delete dependency" of a predecessor in the detail of a plan under "Project plan".

### action:post:activityRelationLink:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Delete dependency" of a predecessor in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-delete.png')} />

### action:pre:ones:activityRelease:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Create snapshot".

### action:post:ones:activityRelease:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Create snapshot".

<Image img={require('./images/ones-activityRelease-add.png')} />

### action:pre:ones:activityRelease:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for updating snapshot.

### action:post:ones:activityRelease:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for updating snapshot.

<Image img={require('./images/ones-activityRelease-update.png')} />

### action:pre:ones:deliverable:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for "Create target deliverable".

### action:post:ones:deliverable:add

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for "Create target deliverable".

<Image img={require('./images/ones-deliverable-add.png')} />

### action:pre:ones:deliverable:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for updating target deliverable.

### action:post:ones:deliverable:update

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for updating target deliverable.

<Image img={require('./images/ones-deliverable-update.png')} />

### action:pre:ones:deliverable:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Pre-action for deleting target deliverable.

### action:post:ones:deliverable:delete

#### Requirements

|   ONES    |
| :-------: |
| v3.11.25+ |

Post-action for deleting target deliverable.

<Image img={require('./images/ones-deliverable-delete.png')} />

### action:pre:ones:space:add

#### Requirements

| ONES  |
| :---: |
| P8133 |

Pre-action for "Create space".

### action:post:ones:space:add

#### Requirements

| ONES  |
| :---: |
| P8133 |

Post-action for "Create space".

<Image img={require('./images/ones-space-add.png')} />

### action:pre:ones:space:copy

#### Requirements

| ONES  |
| :---: |
| P8133 |

Pre-action for "Space Duplication".

### action:post:ones:space:copy

#### Requirements

| ONES  |
| :---: |
| P8133 |

Post-action for "Space Duplication".

<Image img={require('./images/ones-space-copy.png')} />

### action:pre:ones:space:update

#### Requirements

| ONES  |
| :---: |
| P8133 |

Pre-action before updating the space's info.

### action:post:ones:space:update

#### Requirements

| ONES  |
| :---: |
| P8133 |

Post-action after updating the space's info.

<Image img={require('./images/ones-space-update.png')} />

### action:pre:ones:space:delete

#### Requirements

| ONES  |
| :---: |
| P8133 |

Pre-action for "Delete space".

### action:post:ones:space:update

#### Requirements

| ONES  |
| :---: |
| P8133 |

Post-action for "Delete space".

<Image img={require('./images/ones-space-delete.png')} />
