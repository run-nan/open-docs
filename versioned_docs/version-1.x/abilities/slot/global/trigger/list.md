import Image from '@theme/IdealImage'

# Trigger action list

## ones:task:fields:update

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:fields:update`
- Post-interception: `action:post:ones:task:fields:update`

Updating the issue's standard field except for the [status](#actionpostonestaskfieldstatusupdate).

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

## ones:task:field:status:update

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:field:status:update`
- Post-interception: `action:post:ones:task:field:status:update`

Updating the issue's status.

:::caution

If the current issue's type is "Release". When the issue's status transitions to "Released", the issue's data format is
different from other standard fields.

:::

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

## ones:task:action:stdToStdIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:action:stdToStdIssueType`
- Post-interception: `action:post:ones:task:action:stdToStdIssueType`

The issue's "Change issue type".

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

## ones:task:action:stdToSubIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:action:stdToSubIssueType`
- Post-interception: `action:post:ones:task:action:stdToSubIssueType`

The issue's "Convert to subissue".

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

## ones:task:action:subToSubIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:action:subToSubIssueType`
- Post-interception: `action:post:ones:task:action:subToSubIssueType`

The subissue's "Change subissue type".

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

## ones:task:action:subToStdIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:task:action:subToStdIssueType`
- Post-interception: `action:post:ones:task:action:subToStdIssueType`

The subissue's "Convert to issue".

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

## ones:task:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:task:add`
- Post-interception: `action:post:ones:task:add`

The issue's "Create issue", "Create subissue", "Bulk create subissues".

<Image img={require('./images/ones-task-add.png')} />

## ones:taskList:action:modifyIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:taskList:action:modifyIssueType`
- Post-interception: `action:post:ones:taskList:action:modifyIssueType`

The issue list's "Bulk change issue types".

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

## ones:taskList:action:stdToSubIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:taskList:action:stdToSubIssueType`
- Post-interception: `action:post:ones:taskList:action:stdToSubIssueType`

The issue list's "Bulk convert to subissues".

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

## ones:taskList:action:subToStdIssueType

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:taskList:action:subToStdIssueType`
- Post-interception: `action:post:ones:taskList:action:subToStdIssueType`

The issue list's "Bulk convert into issues".

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

## ones:taskList:action:modifyFieldValues

**ONES Requirement:** v3.10.20+

**Action Type:**

- Pre-interception: `action:pre:ones:taskList:action:modifyFieldValues`
- Post-interception: `action:post:ones:taskList:action:modifyFieldValues`

The issue list's "Bulk change issue fields".

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

## ones:taskList:batchAdd

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:taskList:batchAdd`
- Post-interception: `action:post:ones:taskList:batchAdd`

The issue list's "Bulk create issues".

<Image img={require('./images/ones-taskList-batchAdd.png')} />

## ones:project:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:project:add`
- Post-interception: `action:post:ones:project:add`

"Create project".

<Image img={require('./images/ones-project-add.png')} />

## ones:project:copy

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:project:copy`
- Post-interception: `action:post:ones:project:copy`

"Duplicate from existing project".

<Image img={require('./images/ones-project-copy.png')} />

## ones:project:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:project:update`
- Post-interception: `action:post:ones:project:update`

Updating the project info, for example, project name, project info, project status, project field, etc.

<Image img={require('./images/ones-project-update.png')} />

## ones:manhour:estimated:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:manhour:estimated:update`
- Post-interception: `action:post:ones:manhour:estimated:update`

"Time estimated" of "Worklog info" only if the worklog mode is the simple mode.

<Image img={require('./images/ones-manhour-estimated-update.png')} />

## ones:manhour:remaining:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:manhour:remaining:update`
- Post-interception: `action:post:ones:manhour:remaining:update`

"Time remaining" of "Worklog info".

:::caution

In the different "Worklog mode", the data format that the Action received is different.

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

## ones:manhour:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:manhour:add`
- Post-interception: `action:post:ones:manhour:add`

"Time estimated", "Log time".

<Image img={require('./images/ones-manhour-add.png')} />

## ones:manhour:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:manhour:update`
- Post-interception: `action:post:ones:manhour:update`

"Modify time spent", "Modify member time estimated".

<Image img={require('./images/ones-manhour-update.png')} />

## ones:manhour:delete

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:manhour:delete`
- Post-interception: `action:post:ones:manhour:delete`

"Delete member Time spent", "Delete member Time estimated".

<Image img={require('./images/ones-manhour-delete.png')} />

## ones:activity:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activity:add`
- Post-interception: `action:post:ones:activity:add`

"Create plan", "Create milestone".

<Image img={require('./images/ones-activity-add.png')} />

## ones:activity:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activity:update`
- Post-interception: `action:post:ones:activity:update`

Updating the project plan and updating the milestone.

<Image img={require('./images/ones-activity-update.png')} />

## ones:activity:delete

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activity:delete`
- Post-interception: `action:post:ones:activity:delete`

"Delete plan", "Delete milestone".

<Image img={require('./images/ones-activity-delete.png')} />

## ones:activityRelationLink:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activityRelationLink:add`
- Post-interception: `action:post:ones:activityRelationLink:add`

"Add predecessor" in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-add.png')} />

## ones:activityRelationLink:delete

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activityRelationLink:delete`
- Post-interception: `action:post:ones:activityRelationLink:delete`

"Delete dependency" of a predecessor in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-delete.png')} />

## ones:activityRelease:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activityRelease:add`
- Post-interception: `action:post:ones:activityRelease:add`

"Create snapshot".

<Image img={require('./images/ones-activityRelease-add.png')} />

## ones:activityRelease:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:activityRelease:update`
- Post-interception: `action:post:ones:activityRelease:update`

Updating snapshot.

<Image img={require('./images/ones-activityRelease-update.png')} />

## ones:deliverable:add

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:deliverable:add`
- Post-interception: `action:post:ones:deliverable:add`

"Create target deliverable".

<Image img={require('./images/ones-deliverable-add.png')} />

## ones:deliverable:update

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:deliverable:update`
- Post-interception: `action:post:ones:deliverable:update`

Updating target deliverable.

<Image img={require('./images/ones-deliverable-update.png')} />

## ones:deliverable:delete

**ONES Requirement:** v3.11.25+

**Action Type:**

- Pre-interception: `action:pre:ones:deliverable:delete`
- Post-interception: `action:post:ones:deliverable:delete`

Deleting target deliverable.

<Image img={require('./images/ones-deliverable-delete.png')} />

## ones:space:add

**ONES Requirement:** v3.14.0+

**Action Type:**

- Pre-interception: `action:pre:ones:space:add`
- Post-interception: `action:post:ones:space:add`

"Create space".

<Image img={require('./images/ones-space-add.png')} />

## ones:space:copy

**ONES Requirement:** v3.14.0+

**Action Type:**

- Pre-interception: `action:pre:ones:space:copy`
- Post-interception: `action:post:ones:space:copy`

"Space Duplication".

<Image img={require('./images/ones-space-copy.png')} />

## ones:space:update

**ONES Requirement:** v3.14.0+

**Action Type:**

- Pre-interception: `action:pre:ones:space:update`
- Post-interception: `action:post:ones:space:update`

Updating the space's info.

<Image img={require('./images/ones-space-update.png')} />

## ones:space:delete

**ONES Requirement:** v3.14.0+

**Action Type:**

- Pre-interception: `action:pre:ones:space:delete`
- Post-interception: `action:post:ones:space:delete`

"Delete space".

<Image img={require('./images/ones-space-delete.png')} />
