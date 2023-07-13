import Image from '@theme/IdealImage'

# Trigger action list

:::caution

The following presentation omits the `action:pre` and `action:post` prefixes for ease of presentation and retrieval, please add your own prefixes according to your interception needs.

The complete format is as follows:

Intercept work item common attribute update **pre action**: `action:pre:ones:task:fields:update`

Intercept work item common attribute **update action**: `ones:task:fields:update`

:::

## ones:task:fields:update

**ONES Requirement:** v3.10.20+

Updating the issue's standard field except for the [status](#actionpostonestaskfieldstatusupdate).

<Image img={require('./images/action-pre-ones-task-fields-update.png')} />

## ones:task:field:status:update

**ONES Requirement:** v3.10.20+

Updating the issue's status.

:::caution

If the current issue's type is "Release". When the issue's status transitions to "Released", the issue's data format is
different from other standard fields.

:::

<Image img={require('./images/action-pre-ones-task-field-status-update.png')} />

## ones:task:action:stdToStdIssueType

**ONES Requirement:** v3.10.20+

The issue's "Change issue type".

<Image img={require('./images/action-pre-ones-task-action-stdToStdIssueType.png')} />

## ones:task:action:stdToSubIssueType

**ONES Requirement:** v3.10.20+

The issue's "Convert to subissue".

<Image img={require('./images/action-pre-ones-task-action-stdToSubIssueType.png')} />

## ones:task:action:subToSubIssueType

**ONES Requirement:** v3.10.20+

The subissue's "Change subissue type".

<Image img={require('./images/action-pre-ones-task-action-subToSubIssueType.png')} />

## ones:task:action:subToStdIssueType

**ONES Requirement:** v3.10.20+

The subissue's "Convert to issue".

<Image img={require('./images/action-pre-ones-task-action-subToStdIssueType.png')} />

## ones:task:add

**ONES Requirement:** v3.11.25+

The issue's "Create issue", "Create subissue", "Bulk create subissues".

<Image img={require('./images/ones-task-add.png')} />

## ones:taskList:action:modifyIssueType

**ONES Requirement:** v3.10.20+

The issue list's "Bulk change issue types".

<Image img={require('./images/action-pre-ones-taskList-action-modifyIssueType.png')} />

## ones:taskList:action:stdToSubIssueType

**ONES Requirement:** v3.10.20+

The issue list's "Bulk convert to subissues".

<Image img={require('./images/action-pre-ones-taskList-action-stdToSubIssueType.png')} />

## ones:taskList:action:subToStdIssueType

**ONES Requirement:** v3.10.20+

The issue list's "Bulk convert into issues".

<Image img={require('./images/action-pre-ones-taskList-action-subToStdIssueType.png')} />

## ones:taskList:action:modifyFieldValues

**ONES Requirement:** v3.10.20+

The issue list's "Bulk change issue fields".

<Image img={require('./images/action-pre-ones-taskList-action-modifyFieldValues.png')} />

## ones:taskList:batchAdd

**ONES Requirement:** v3.11.25+

The issue list's "Bulk create issues".

<Image img={require('./images/ones-taskList-batchAdd.png')} />

## ones:project:add

**ONES Requirement:** v3.11.25+

"Create project".

<Image img={require('./images/ones-project-add.png')} />

## ones:project:copy

**ONES Requirement:** v3.11.25+

"Duplicate from existing project".

<Image img={require('./images/ones-project-copy.png')} />

## ones:project:update

**ONES Requirement:** v3.11.25+

Updating the project info, for example, project name, project info, project status, project field, etc.

<Image img={require('./images/ones-project-update.png')} />

## ones:manhour:estimated:update

**ONES Requirement:** v3.11.25+

"Time estimated" of "Worklog info" only if the worklog mode is the simple mode.

<Image img={require('./images/ones-manhour-estimated-update.png')} />

## ones:manhour:remaining:update

**ONES Requirement:** v3.11.25+

"Time remaining" of "Worklog info".

:::caution

In the different "Worklog mode", the data format that the Action received is different.

:::

<Image img={require('./images/ones-manhour-remaining-update.png')} />

## ones:manhour:add

**ONES Requirement:** v3.11.25+

"Time estimated", "Log time".

<Image img={require('./images/ones-manhour-add.png')} />

## ones:manhour:update

**ONES Requirement:** v3.11.25+

"Modify time spent", "Modify member time estimated".

<Image img={require('./images/ones-manhour-update.png')} />

## ones:manhour:delete

**ONES Requirement:** v3.11.25+

"Delete member Time spent", "Delete member Time estimated".

<Image img={require('./images/ones-manhour-delete.png')} />

## ones:activity:add

**ONES Requirement:** v3.11.25+

"Create plan", "Create milestone".

<Image img={require('./images/ones-activity-add.png')} />

## ones:activity:update

**ONES Requirement:** v3.11.25+

Updating the project plan and updating the milestone.

<Image img={require('./images/ones-activity-update.png')} />

## ones:activity:delete

**ONES Requirement:** v3.11.25+

"Delete plan", "Delete milestone".

<Image img={require('./images/ones-activity-delete.png')} />

## ones:activityRelationLink:add

**ONES Requirement:** v3.11.25+

"Add predecessor" in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-add.png')} />

## ones:activityRelationLink:delete

**ONES Requirement:** v3.11.25+

"Delete dependency" of a predecessor in the detail of a plan under "Project plan".

<Image img={require('./images/activityRelationLink-delete.png')} />

## ones:activityRelease:add

**ONES Requirement:** v3.11.25+

"Create snapshot".

<Image img={require('./images/ones-activityRelease-add.png')} />

## ones:activityRelease:update

**ONES Requirement:** v3.11.25+

Updating snapshot.

<Image img={require('./images/ones-activityRelease-update.png')} />

## ones:deliverable:add

**ONES Requirement:** v3.11.25+

"Create target deliverable".

<Image img={require('./images/ones-deliverable-add.png')} />

## ones:deliverable:update

**ONES Requirement:** v3.11.25+

Updating target deliverable.

<Image img={require('./images/ones-deliverable-update.png')} />

## ones:deliverable:delete

**ONES Requirement:** v3.11.25+

Deleting target deliverable.

<Image img={require('./images/ones-deliverable-delete.png')} />

## ones:space:add

**ONES Requirement:** P8133

"Create space".

<Image img={require('./images/ones-space-add.png')} />

## ones:space:copy

**ONES Requirement:** P8133

"Space Duplication".

<Image img={require('./images/ones-space-copy.png')} />

## ones:space:update

**ONES Requirement:** P8133

Updating the space's info.

<Image img={require('./images/ones-space-update.png')} />

## ones:space:update

**ONES Requirement:** P8133

"Delete space".

<Image img={require('./images/ones-space-delete.png')} />
