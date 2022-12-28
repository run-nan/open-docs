---
toc_max_heading_level: 4
---

# @ones-op/node-third-import

## Require

| **ONES**  |
| :-------- |
| v3.11.39+ |

## Install

Enter the `/backend` directory of the plugin project, and execute the following command to install dependencies:

```shell
npm i @ones-op/node-third-import
```

## API

### startImport

Start third-party data import

#### Params

| **Param** | **Type** | **Description**                                                                                                                     | **Required** | **Default** |
| :-------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- | :----------- | :---------- |
| userUUID  | string   | message title                                                                                                                       | Y            | -           |
| abilityId | string   | ability id in the plugin ability configuration                                                                                      | Y            | -           |
| password  | string   | Import user's default password when logging in for the first time (the default password needs to be a combination of alphanumerics) | Y            | -           |
| serverId  | string   | If you import the same batch of data, you need to ensure the same `server_id`                                                       | Y            | -           |
| teamUUID  | string   | The unique ID of the team, only required for organization plugins                                                                   | N            | -           |

#### Example

```typescript
import { startImport } from '@ones-op/node-third-import'

await startImport(user_uuid, abilityId, password, server_id, teamUUID)
```

## Type

### ThirdNotification

| Param       | Description        | Type                                                                  | Required |
| :---------- | :----------------- | :-------------------------------------------------------------------- | :------- |
| project_id  | project ID         | `string`                                                              | Y        |
| value_type  | value type         | [`ThirdNotificationValueTypeEnum`](#ThirdNotificationValueTypeEnum)   | Y        |
| value       | value              | `string`                                                              | Y        |
| config_type | configuration type | [`ThirdNotificationConfigTypeEnum`](#ThirdNotificationConfigTypeEnum) | Y        |

### ThirdTaskWorkLog

| Param       | Description   | Type                                                    | Required |
| :---------- | :------------ | :------------------------------------------------------ | :------- |
| resource_id | resource ID   | `string`                                                | Y        |
| task_id     | issue ID      | `string`                                                | Y        |
| user_id     | user ID       | `string`                                                | Y        |
| start_time  | creation time | `number`                                                | Y        |
| hours       | hours of work | `number`                                                | Y        |
| type        | type          | [`ThirdTaskWorkLogTypeEnum`](#ThirdTaskWorkLogTypeEnum) | Y        |
| create_time | creation time | `number`                                                | Y        |

### ThirdTaskAttachment

| Param          | Description             | Type     | Required |
| :------------- | :---------------------- | :------- | :------- |
| resource_id    | resource ID             | `string` | Y        |
| task_id        | issue ID                | `string` | Y        |
| full_file_path | attachment file address | `string` | Y        |

### ThirdTaskLink

| Param          | Description        | Type     | Required |
| :------------- | :----------------- | :------- | :------- |
| resource_id    | association type   | `string` | Y        |
| link_type_id   | issue link type ID | `string` | Y        |
| source_task_id | source issue ID    | `string` | Y        |
| target_task_id | target issue ID    | `string` | Y        |

### ThirdTaskComment

| Param       | Description   | Type     | Required |
| :---------- | :------------ | :------- | :------- |
| resource_id | resource ID   | `string` | Y        |
| task_id     | issue ID      | `string` | Y        |
| user_id     | user ID       | `string` | Y        |
| body        | content       | `string` | Y        |
| create_time | creation time | `number` | Y        |

### ThirdGlobalPermission

| Param       | Description      | Type                                                      | Required |
| :---------- | :--------------- | :-------------------------------------------------------- | :------- |
| resource_id | resource ID      | `string`                                                  | Y        |
| permission  | permission point | [`ThirdGlobalPermissionEnum`](#ThirdGlobalPermissionEnum) | Y        |
| group_id    | user group ID    | `string`                                                  | Y        |

### ThirdProjectPermission

| Param             | Description           | Type                                                                                    | Required |
| :---------------- | :-------------------- | :-------------------------------------------------------------------------------------- | :------- |
| resource_id       | resource ID           | `string`                                                                                | Y        |
| project_id        | project ID            | `string`                                                                                | Y        |
| user_domain_type  | user domain type      | [`ThirdProjectPermissionUserDomainTypeEnum`](#ThirdProjectPermissionUserDomainTypeEnum) | Y        |
| context_type      | Context type          | [`ThirdProjectPermissionContextTypeEnum`](#ThirdProjectPermissionContextTypeEnum)       | Y        |
| permission        | permission point      | [`ThirdProjectPermissionPermissionEnum`](#ThirdProjectPermissionPermissionEnum)         | Y        |
| user_domain_param | user domain parameter | `string`                                                                                | Y        |

### ThirdTaskWatcher

| Param       | Description | Type     | Required |
| :---------- | :---------- | :------- | :------- |
| resource_id | resource ID | `string` | Y        |
| task_id     | issue ID    | `string` | Y        |
| user_id     | user ID     | `string` | Y        |

### ThirdSprint

| Param       | Description    | Type                                              | Required |
| :---------- | :------------- | :------------------------------------------------ | :------- |
| resource_id | resource ID    | `string`                                          | Y        |
| name        | name           | `string`                                          | Y        |
| status      | status         | [`ThirdSprintStatusEnum`](#ThirdSprintStatusEnum) | Y        |
| project_id  | project ID     | `string`                                          | Y        |
| start_time  | start time     | `number`                                          | Y        |
| end_time    | end time       | `number`                                          | Y        |
| assign_id   | Responsible ID | `string`                                          | Y        |
| owner_id    | owner ID       | `string`                                          | Y        |

### ThirdProjectIssueTypeLayout

| Param         | Description        | Type                                    | Required |
| :------------ | :----------------- | :-------------------------------------- | :------- |
| project_id    | project ID         | `string`                                | Y        |
| scope_configs | view configuration | [`ScopeConfigItem[]`](#ScopeConfigItem) | Y        |

##### ScopeConfigItem {#ScopeConfigItem}

| Param            | Description            | Type     | Required |
| :--------------- | :--------------------- | :------- | :------- |
| issue_type_id    | issue ID               | `string` | Y        |
| field_config_id  | field configuration id | `string` | Y        |
| screen_scheme_id | view ID                | `string` | Y        |

### ThirdProjectIssueTypeWithFields

| Param                  | Description         | Type                                            | Required |
| :--------------------- | :------------------ | :---------------------------------------------- | :------- |
| project_id             | project ID          | `string`                                        | Y        |
| issue_type_with_fields | field configuration | [`IssueTypeWithFields[]`](#IssueTypeWithFields) | Y        |

##### IssueTypeWithFields {#IssueTypeWithFields}

| Param         | Description | Type                | Required |
| :------------ | :---------- | :------------------ | :------- |
| issue_type_id | issue ID    | `string`            | Y        |
| fields        | field list  | [`Field[]`](#Field) | Y        |

##### Field {#Field}

| Param            | Description                      | Type      | Required |
| :--------------- | :------------------------------- | :-------- | :------- |
| field_identifier | field identifier                 | `string`  | Y        |
| required         | Y required                       | `boolean` | Y        |
| is_customized    | Whether it is a custom attribute | `boolean` | Y        |

### ThirdIssueTypeField

| Param         | Description  | Type     | Required |
| :------------ | :----------- | :------- | :------- |
| resource_id   | resource ID  | `string` | Y        |
| issue_type_id | issue ID     | `string` | Y        |
| field_id      | attribute ID | `string` | Y        |

### ThirdChangeItem

| Param       | Description    | Type                                                    | Required |
| :---------- | :------------- | :------------------------------------------------------ | :------- |
| resource_id | resource ID    | `string`                                                | Y        |
| task_id     | issue ID       | `string`                                                | Y        |
| field_type  | attribute type | `string`                                                | Y        |
| field       | field          | [`ThirdChangeItemFieldEnum`](#ThirdChangeItemFieldEnum) | Y        |
| old_value   | old value      | `string`                                                | Y        |
| new_value   | new value      | `string`                                                | Y        |
| old_string  | old string     | `string`                                                | Y        |
| new_string  | new string     | `string`                                                | Y        |
| user_id     | user ID        | `string`                                                | Y        |
| create_time | creation time  | `number`                                                | Y        |

### ThirdIssueTypeLayout

| Param               | Description              | Type                | Required |
| :------------------ | :----------------------- | :------------------ | :------- |
| issue_type_id       | issue type ID            | `string`            | Y        |
| field_config_id     | field configuration ID   | `string`            | Y        |
| field_config_name   | field configuration name | `string`            | Y        |
| screen_scheme_id    | view ID                  | `string`            | Y        |
| screen_scheme_name  | view name                | `string`            | Y        |
| create_issue_config | Create issue view        | [`Field[]`](#Field) | Y        |
| view_issue_config   | View issue View          | [`Field[]`](#Field) | Y        |

### ThirdProjectFieldValue

| Param            | Description      | Type                                                                | Required |
| :--------------- | :--------------- | :------------------------------------------------------------------ | :------- |
| resource_id      | resource ID      | `string`                                                            | Y        |
| project_id       | project ID       | `string`                                                            | Y        |
| project_field_id | project field ID | `string`                                                            | Y        |
| type             | type             | [`ThirdProjectFieldValueTypeEnum`](#ThirdProjectFieldValueTypeEnum) | Y        |
| value            | type value       | `any`                                                               | Y        |

### ThirdGlobalProjectFieldOption {#ThirdGlobalProjectFieldOption}

| Param            | Description      | Type     | Required |
| :--------------- | :--------------- | :------- | :------- |
| resource_id      | resource ID      | `string` | Y        |
| value            | attribute value  | `string` | Y        |
| desc             | description      | `string` | Y        |
| color            | color            | `string` | Y        |
| background_color | background color | `string` | Y        |

### ThirdGlobalProjectField

| Param       | Description        | Type                                                                  | Required |
| :---------- | :----------------- | :-------------------------------------------------------------------- | :------- |
| resource_id | resource ID        | `string`                                                              | Y        |
| name        | name               | `string`                                                              | Y        |
| type        | attribute type     | [`ThirdGlobalProjectFieldTypeEnum`](#ThirdGlobalProjectFieldTypeEnum) | Y        |
| options     | field option value | [`ThirdGlobalProjectFieldOption[]`](#ThirdGlobalProjectFieldOption)   | Y        |

### ThirdProject

| Param        | Description        | Type                                                        | Required |
| :----------- | :----------------- | :---------------------------------------------------------- | :------- |
| resource_id  | resource ID        | `string`                                                    | Y        |
| name         | name               | `string`                                                    | Y        |
| assign_id    | Responsible ID     | `string`                                                    | Y        |
| create_time  | creation time      | `number`                                                    | Y        |
| type         | type               | [`ThirdProjectTypeEnum`](#ThirdProjectTypeEnum)             | Y        |
| status       | project status     | [`ThirdProjectStatusEnum`](#ThirdProjectStatusEnum)         | Y        |
| status_uuid  | status description | [`ThirdProjectStatusUUIDEnum`](#ThirdProjectStatusUUIDEnum) | Y        |
| announcement | announcement       | `string`                                                    | Y        |

### ThirdUserGroupMember

| Param             | Description   | Type     | Required |
| :---------------- | :------------ | :------- | :------- |
| resource_id       | resource ID   | `string` | Y        |
| resource_group_id | user group ID | `string` | Y        |
| resource_user_id  | user ID       | `string` | Y        |

### ThirdProjectCategory

| Param       | Description | Type     | Required |
| :---------- | :---------- | :------- | :------- |
| resource_id | resource ID | `string` | Y        |
| name        | name        | `string` | Y        |

### ThirdProjectRoleMember

| Param               | Description | Type     | Required |
| :------------------ | :---------- | :------- | :------- |
| resource_id         | resource ID | `string` | Y        |
| resource_role_id    | role id     | `string` | Y        |
| resource_project_id | project ID  | `string` | Y        |
| resource_user_id    | user ID     | `string` | Y        |

### ThirdProjectRole

| Param               | Description   | Type     | Required |
| :------------------ | :------------ | :------- | :------- |
| resource_id         | resource ID   | `string` | Y        |
| resource_role_id    | role id       | `string` | Y        |
| resource_project_id | project ID    | `string` | Y        |
| create_time         | creation time | `number` | Y        |

### ThirdGlobalProjectRole

| Param       | Description   | Type                                                                    | Required |
| :---------- | :------------ | :---------------------------------------------------------------------- | :------- |
| resource_id | resource ID   | `string`                                                                | Y        |
| name        | name          | `string`                                                                | Y        |
| create_time | creation time | `number`                                                                | Y        |
| status      | status        | [`ThirdGlobalProjectRoleStatusEnum`](#ThirdGlobalProjectRoleStatusEnum) | Y        |

### ThirdProjectIssueType

| Param         | Description   | Type     | Required |
| :------------ | :------------ | :------- | :------- |
| resource_id   | resource ID   | `string` | Y        |
| project_id    | project ID    | `string` | Y        |
| issue_type_id | issue type ID | `string` | Y        |

### ThirdIssueType

| Param       | Description   | Type                                                    | Required |
| :---------- | :------------ | :------------------------------------------------------ | :------- |
| resource_id | resource ID   | `string`                                                | Y        |
| name        | name          | `string`                                                | Y        |
| status      | status        | [`ThirdIssueTypeStatusEnum`](#ThirdIssueTypeStatusEnum) | Y        |
| type        | type          | [`ThirdIssueTypeEnum`](#ThirdIssueTypeEnum)             | Y        |
| create_time | creation time | `number`                                                | Y        |
| icon        | icon          | [`ThirdTaskIconEnum`](#ThirdTaskIconEnum)               | Y        |

### ThirdUserGroup

| Param       | Description   | Type     | Required |
| :---------- | :------------ | :------- | :------- |
| resource_id | resource ID   | `string` | Y        |
| name        | name          | `string` | Y        |
| desc        | description   | `string` | Y        |
| create_time | creation time | `number` | Y        |
| status      | status        | `number` | Y        |

### ThirdUser

| Param       | Description   | Type                                          | Required |
| :---------- | :------------ | :-------------------------------------------- | :------- |
| resource_id | resource ID   | `string`                                      | Y        |
| name        | name          | `string`                                      | Y        |
| email       | email         | `string`                                      | Y        |
| phone       | phone         | `string`                                      | Y        |
| title       | title         | `string`                                      | Y        |
| company     | company       | `string`                                      | Y        |
| create_time | creation time | `number`                                      | Y        |
| modify_time | update time   | `number`                                      | Y        |
| status      | status        | [`ThirdUserStatusEnum`](#ThirdUserStatusEnum) | Y        |

### ThirdTaskLinkType

| Param       | Description          | Type                                              | Required |
| :---------- | :------------------- | :------------------------------------------------ | :------- |
| resource_id | resource ID          | `string`                                          | Y        |
| name        | name                 | `string`                                          | Y        |
| desc_out    | link out description | `string`                                          | Y        |
| desc_in     | link-in description  | `string`                                          | Y        |
| type        | type                 | [`ThirdTaskLinkTypeEnum`](#ThirdTaskLinkTypeEnum) | Y        |

### ThirdConfig

| Param                 | Description                             | Type                            | Required |
| :-------------------- | :-------------------------------------- | :------------------------------ | :------- |
| workdays              | workdays                                | [`WorkdayEnum[]`](#WorkdayEnum) | Y        |
| work_hours            | daily working hours                     | `number`                        | Y        |
| fixed_fields_mapping  | third-party field mapping system fields | `map`                           | Y        |
| custom_fields_mapping | attribute mapping                       | `map`                           | Y        |
| custom_fields         | properties                              | `string[]`                      | Y        |
| tab_fields            | tab attribute                           | `tab_fields`                    | Y        |

### ThirdPriority

| Param            | Description      | Type     | Required |
| :--------------- | :--------------- | :------- | :------- |
| resource_id      | resource ID      | `string` | Y        |
| name             | name             | `string` | Y        |
| desc             | description      | `string` | Y        |
| color            | color            | `string` | Y        |
| background_color | background color | `string` | Y        |

### ThirdTaskFieldOption

| Param                  | Description                  | Type     | Required |
| :--------------------- | :--------------------------- | :------- | :------- |
| resource_id            | resource ID                  | `string` | Y        |
| resource_task_field_id | 3rd party issue attribute ID | `string` | Y        |
| name                   | name                         | `string` | Y        |
| desc                   | description                  | `string` | Y        |
| color                  | color                        | `string` | Y        |
| background_color       | background color             | `string` | Y        |

### ThirdTaskField

| Param       | Description    | Type                                                | Required |
| :---------- | :------------- | :-------------------------------------------------- | :------- |
| resource_id | resource ID    | `string`                                            | Y        |
| name        | field name     | `string`                                            | Y        |
| type        | attribute type | [`ThirdTaskFieldTypeEnum`](#ThirdTaskFieldTypeEnum) | Y        |

### ThirdUserDomain {#ThirdUserDomain}

| Param             | Description           | Type                                                  | Required |
| :---------------- | :-------------------- | :---------------------------------------------------- | :------- |
| user_domain_type  | user domain type      | [`ThirdUserDomainTypeEnum`](#ThirdUserDomainTypeEnum) | Y        |
| user_domain_param | user domain parameter | `string`                                              | Y        |

### ThirdTransition

| Param           | Description          | Type                                    | Required |
| :-------------- | :------------------- | :-------------------------------------- | :------- |
| project_id      | project ID           | `string`                                | Y        |
| issue_type_id   | issue type ID        | `string`                                | Y        |
| start_status_id | start status id      | `string`                                | Y        |
| name            | name                 | `string`                                | Y        |
| end_status_id   | end status id        | `string`                                | Y        |
| user_domains    | list of user domains | [`ThirdUserDomain[]`](#ThirdUserDomain) | Y        |

### ThirdWorkflow

| Param               | Description                     | Type                                                | Required |
| :------------------ | :------------------------------ | :-------------------------------------------------- | :------- |
| project_id          | project ID                      | `string`                                            | Y        |
| issue_type_statuses | issue Type Status Configuration | [`ThirdTaskStatusConfig[]`](#ThirdTaskStatusConfig) | Y        |
| transitions         | workflow configuration          | `ThirdTransition[]`                                 | Y        |

### ThirdTaskStatusConfig {#ThirdTaskStatusConfig}

| Param          | Description       | Type       | Required |
| :------------- | :---------------- | :--------- | :------- |
| issue_type_id  | issue type ID     | `string`   | Y        |
| status_ids     | issue status IDs  | `string[]` | Y        |
| init_status_id | initial status id | `string`   | Y        |
| workflow_name  | workflow name     | `string`   | Y        |

### ThirdTaskStatus

| Param       | Description           | Type                                                          | Required |
| :---------- | :-------------------- | :------------------------------------------------------------ | :------- |
| resource_id | resource ID           | `string`                                                      | Y        |
| name        | name                  | `string`                                                      | Y        |
| category    | issue status category | [`ThirdTaskStatusCategoryEnum`](#ThirdTaskStatusCategoryEnum) | Y        |

### ThirdTaskFieldValue

| Param       | Description     | Type                                                                    | Required |
| :---------- | :-------------- | :---------------------------------------------------------------------- | :------- |
| resource_id | resource ID     | `string`                                                                | Y        |
| task_id     | issue ID        | `string`                                                                | Y        |
| field_id    | attribute ID    | `string`                                                                | Y        |
| field_type  | attribute type  | [`ThirdTaskFieldValueFieldTypeEnum`](#ThirdTaskFieldValueFieldTypeEnum) | Y        |
| value       | attribute value | `any`                                                                   | Y        |

### ThirdTask

| Param         | Description           | Type     | Required |
| :------------ | :-------------------- | :------- | :------- |
| resource_id   | resource ID           | `string` | Y        |
| summary       | title                 | `string` | Y        |
| desc          | description           | `string` | Y        |
| owner_id      | Creator ID            | `string` | Y        |
| assign_id     | Responsible ID        | `string` | Y        |
| deadline      | final completion date | `number` | Y        |
| priority_id   | priority ID           | `string` | Y        |
| status_id     | status id             | `string` | Y        |
| project_id    | project ID            | `string` | Y        |
| issue_type_id | issue type ID         | `string` | Y        |
| sprint_id     | iteration ID          | `string` | Y        |
| parent_id     | parent issue ID       | `string` | Y        |
| created_time  | creation time         | `number` | Y        |
| updated_time  | updated time          | `number` | Y        |

## Enum

### WorkdayEnum {#WorkdayEnum}

working day

| Enum            | Description |
| :-------------- | :---------- |
| WorkdayEnum.Mon | Monday      |
| WorkdayEnum.Tue | Tuesday     |
| WorkdayEnum.Wed | Wednesday   |
| WorkdayEnum.Thu | Thursday    |
| WorkdayEnum.Fri | Friday      |
| WorkdayEnum.Sat | Saturday    |
| WorkdayEnum.Sun | Sunday      |

### ThirdProjectFieldValueTypeEnum {#ThirdProjectFieldValueTypeEnum}

item field type

| Enum                                           | Description         |
| :--------------------------------------------- | :------------------ |
| ThirdProjectFieldValueTypeEnum.FieldTypeOption | Single              |
| ThirdProjectFieldValueTypeEnum.FieldTypeText   | Single line of text |

### ThirdTaskFieldTypeEnum {#ThirdTaskFieldTypeEnum}

issue field type enumeration

| Enum                                          | Description             |
| :-------------------------------------------- | :---------------------- |
| ThirdTaskFieldTypeEnum.FieldTypeOption        | Single Choice           |
| ThirdTaskFieldTypeEnum.FieldTypeMultiOption   | Multiple choice         |
| ThirdTaskFieldTypeEnum.FieldTypeText          | Single line of text     |
| ThirdTaskFieldTypeEnum.FieldTypeMultiLineText | Multi-line text         |
| ThirdTaskFieldTypeEnum.FieldTypeUser          | Single user             |
| ThirdTaskFieldTypeEnum.FieldTypeUserList      | Multiple user selection |
| ThirdTaskFieldTypeEnum.FieldTypeFloat         | Float                   |
| ThirdTaskFieldTypeEnum.FieldTypeDate          | date                    |
| ThirdTaskFieldTypeEnum.FieldTypeTime          | Time                    |

### ThirdTaskLinkTypeEnum {#ThirdTaskLinkTypeEnum}

issue link type

| Enum                                      | Description                        |
| :---------------------------------------- | :--------------------------------- |
| ThirdTaskLinkTypeEnum.LinkModelTwoWayMany | Interrelated, two-way many-to-many |
| ThirdTaskLinkTypeEnum.LinkModelManyToMany | One-way many-to-many               |

### ThirdGlobalProjectFieldTypeEnum {#ThirdGlobalProjectFieldTypeEnum}

Global Project field Type

| Enum                                                   | Description         |
| :----------------------------------------------------- | :------------------ |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeOption        | Single              |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeText          | Single line of text |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeMultiLineText | Multiline Text      |

### ThirdGlobalPermissionEnum {#ThirdGlobalPermissionEnum}

global permissions

| Enum                                        | Description                   |
| :------------------------------------------ | :---------------------------- |
| ThirdGlobalPermissionEnum.AdministerTeam    | Team Administration           |
| ThirdGlobalPermissionEnum.AdministerProject | Project Administration        |
| ThirdGlobalPermissionEnum.AdministerWiki    | Knowledge Base Administration |
| ThirdGlobalPermissionEnum.InviteMember      | Invite team members           |

### ThirdIssueTypeEnum {#ThirdIssueTypeEnum}

issue type

| Enum                                         | Description        |
| :------------------------------------------- | :----------------- |
| ThirdIssueTypeEnum.IssueTypeStandardTaskType | Standard task type |
| ThirdIssueTypeEnum.IssueTypeSubTaskType      | Subtask type       |

### ThirdTaskIconEnum {#ThirdTaskIconEnum}

issue icon

| Enum                               | Description             |
| :--------------------------------- | :---------------------- |
| ThirdTaskIconEnum.StandardTaskIcon | Standard task item icon |
| ThirdTaskIconEnum.SubTaskIcon      | sub task item icon      |

### ThirdUserStatusEnum {#ThirdTaskStatusConfig}

user status

| Enum                                  | Description |
| :------------------------------------ | :---------- |
| ThirdUserStatusEnum.UserStatusNormal  | Normal      |
| ThirdUserStatusEnum.UserStatusDeleted | Deleted     |
| ThirdUserStatusEnum.UserStatusPending | Inactive    |
| ThirdUserStatusEnum.UserStatusDisable | Disabled    |

### UserGroupStatusEnum

user group status

| Enum                                       | Description |
| :----------------------------------------- | :---------- |
| UserGroupStatusEnum.UserGroupStatusNormal  | Normal      |
| UserGroupStatusEnum.UserGroupStatusDeleted | Deleted     |

### ThirdProjectTypeEnum {#ThirdProjectTypeEnum}

project type

| Enum                                      | Description |
| :---------------------------------------- | :---------- |
| ThirdProjectTypeEnum.ProjectTypeNoneEnum  | Normal type |
| ThirdProjectTypeEnum.ProjectTypeAgileEnum | Agile type  |

### ThirdProjectStatusEnum {#ThirdProjectStatusEnum}

project status

| Enum                                        | Description |
| :------------------------------------------ | :---------- |
| ThirdProjectStatusEnum.ProjectStatusNormal  | Normal      |
| ThirdProjectStatusEnum.ProjectStatusDeleted | Deleted     |

### ThirdProjectStatusUUIDEnum {#ThirdProjectStatusUUIDEnum}

item status type

| Enum                                                       | Description |
| :--------------------------------------------------------- | :---------- |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryTodo       | Not started |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryInProgress | In Progress |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryDone       | Completed   |

### ThirdUserDomainTypeEnum {#ThirdUserDomainTypeEnum}

user domain type

| Enum                               | Description   |
| :--------------------------------- | :------------ |
| ThirdUserDomainTypeEnum.TaskOwner  | issue creator |
| ThirdUserDomainTypeEnum.TaskAssign | TaskAssign    |
| ThirdUserDomainTypeEnum.Role       | User role ID  |
| ThirdUserDomainTypeEnum.Group      | User Group ID |

### ThirdSprintStatusEnum {#ThirdSprintStatusEnum}

iteration status

| Enum                                                 | Description |
| :--------------------------------------------------- | :---------- |
| ThirdSprintStatusEnum.SprintStatusCategoryToDo       | Not started |
| ThirdSprintStatusEnum.SprintStatusCategoryInProgress | In Progress |
| ThirdSprintStatusEnum.SprintStatusCategoryDone       | Completed   |

### ThirdTaskStatusCategoryEnum {#ThirdTaskStatusCategoryEnum}

issue Classification

| Enum                                                        | Description |
| :---------------------------------------------------------- | :---------- |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryTodo       | Not started |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryInProgress | In Progress |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryDone       | Completed   |

### ThirdTaskWorkLogTypeEnum {#ThirdTaskWorkLogTypeEnum}

type of hours

| Enum                                                   | Description            |
| :----------------------------------------------------- | :--------------------- |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeEstimate  | Estimated Work         |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeRemaining | Remaining Work         |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeLog       | Register working hours |

### ThirdTaskFieldValueFieldTypeEnum {#ThirdTaskFieldValueFieldTypeEnum}

issue field value type

| Enum                                             | Description         |
| :----------------------------------------------- | :------------------ |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeOption | Single              |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeText   | Single line of text |

### ThirdNotificationValueTypeEnum {#ThirdNotificationValueTypeEnum}

notification value type

| Enum                                                                    | Description            |
| :---------------------------------------------------------------------- | :--------------------- |
| ThirdNotificationValueTypeEnum.NotificationValueTypeUserID              | User ID                |
| ThirdNotificationValueTypeEnum.NotificationValueTypeUserGroupID         | User Group             |
| ThirdNotificationValueTypeEnum.NotificationValueTypeGlobalProjectRoleID | Global Project Role ID |
| ThirdNotificationValueTypeEnum.NotificationValueTypeRole                | Role                   |

### ThirdNotificationConfigTypeEnum {#ThirdNotificationConfigTypeEnum}

notification configuration type

| Enum                                                       | Description             |
| :--------------------------------------------------------- | :---------------------- |
| ThirdNotificationConfigTypeEnum.NoticeTypeCreateTask       | Create issue            |
| ThirdNotificationConfigTypeEnum.NoticeTypeUpdateTaskAssign | Update issue assignment |
| ThirdNotificationConfigTypeEnum.NoticeTypeUpdateTaskStatus | Update issue status     |

### ThirdProjectPermissionUserDomainTypeEnum {#ThirdProjectPermissionUserDomainTypeEnum}

authorized user domain type

| Enum                                                     | Description |
| :------------------------------------------------------- | :---------- |
| ThirdProjectPermissionUserDomainTypeEnum.SingleUserLabel | User        |
| ThirdProjectPermissionUserDomainTypeEnum.GroupLabel      | User Group  |
| ThirdProjectPermissionUserDomainTypeEnum.RoleLabel       | Role        |

### ThirdProjectPermissionPermissionEnum {#ThirdProjectPermissionPermissionEnum}

permission point name

| Enum                                                    | Description              |
| :------------------------------------------------------ | :----------------------- |
| ThirdProjectPermissionPermissionEnum.ManageSprints      | Manage Sprints           |
| ThirdProjectPermissionPermissionEnum.BeAssignedToSprint | Become Sprint Owner      |
| ThirdProjectPermissionPermissionEnum.ManageProject      | Manage Projects          |
| ThirdProjectPermissionPermissionEnum.BrowseProject      | View Project             |
| ThirdProjectPermissionPermissionEnum.ViewProjectReports | View Project Reports     |
| ThirdProjectPermissionPermissionEnum.ManagePipelines    | Manage Project Pipelines |
| ThirdProjectPermissionPermissionEnum.ViewTasks          | View issues              |
| ThirdProjectPermissionPermissionEnum.ExportTasks        | Export issue list        |
| ThirdProjectPermissionPermissionEnum.CreateTasks        | Create issues            |
| ThirdProjectPermissionPermissionEnum.DeleteTasks        | Delete issues            |
| ThirdProjectPermissionPermissionEnum.UpdateTasks        | Editing issues           |
| ThirdProjectPermissionPermissionEnum.BeAssigned         | Become Responsible       |
| ThirdProjectPermissionPermissionEnum.TransitTasks       | Update issue status      |
| ThirdProjectPermissionPermissionEnum.UpdateTaskWatchers | Edit Followers           |

### ThirdProjectPermissionContextTypeEnum {#ThirdProjectPermissionContextTypeEnum}

permission context type

| Enum                                                   | Description |
| :----------------------------------------------------- | :---------- |
| ThirdProjectPermissionContextTypeEnum.ProjectContext   | Project     |
| ThirdProjectPermissionContextTypeEnum.IssueTypeContext | issue Type  |

### ThirdChangeItemFieldEnum {#ThirdChangeItemFieldEnum}

issue dynamic type

| Enum                                                         | Description             |
| :----------------------------------------------------------- | :---------------------- |
| ThirdChangeItemFieldEnum.ChangeItemFieldAttachment           | Attachment              |
| ThirdChangeItemFieldEnum.ChangeItemFieldDescription          | Description             |
| ThirdChangeItemFieldEnum.ChangeItemFieldPriority             | Priority                |
| ThirdChangeItemFieldEnum.ChangeItemFieldStatus               | Status                  |
| ThirdChangeItemFieldEnum.ChangeItemFieldIssueType            | issue type              |
| ThirdChangeItemFieldEnum.ChangeItemFieldAssignee             | Responsible             |
| ThirdChangeItemFieldEnum.ChangeItemFieldSprint               | Iterations              |
| ThirdChangeItemFieldEnum.ChangeItemFieldLink                 | Link                    |
| ThirdChangeItemFieldEnum.ChangeItemFieldEpicChild            |                         |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeOriginalEstimate | Estimated working hours |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeEstimate         | Remaining Work Hours    |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeSpent            | Register working hours  |

### ThirdGlobalProjectRoleStatusEnum {#ThirdGlobalProjectRoleStatusEnum}

project role status

| Enum                                              | Description |
| :------------------------------------------------ | :---------- |
| ThirdGlobalProjectRoleStatusEnum.RoleStatusNormal | Normal      |

### ThirdIssueTypeStatusEnum {#ThirdIssueTypeStatusEnum}

issue status

| Enum                                           | Description |
| :--------------------------------------------- | :---------- |
| ThirdIssueTypeStatusEnum.IssueTypeStatusNormal | Normal      |
