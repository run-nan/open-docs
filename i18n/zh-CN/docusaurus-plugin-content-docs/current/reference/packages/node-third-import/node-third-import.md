---
toc_max_heading_level: 4
---

# @ones-op/node-third-import

## 要求

| **ONES**  |
| :-------- |
| v3.11.39+ |

## 安装

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm i @ones-op/node-third-import
```

## API

### startImport

开始三方数据导入

#### Params

| **参数**  | **类型** | **说明**                                                   | **必填** | **默认值** |
| :-------- | :------- | :--------------------------------------------------------- | :------- | :--------- |
| userUUID  | string   | 用户 uuid                                                  | 是       | -          |
| abilityId | string   | 插件能力配置中的能力 id                                    | 是       | -          |
| password  | string   | 首次登录时导入用户的默认密码（默认密码需要是字母数字组合） | 是       | -          |
| serverId  | string   | 如果导入的是同一批数据需要保证有相同的 `server_id`         | 是       | -          |
| teamUUID  | string   | 团队唯一标识，仅为组织插件时需要                           | 否       | -          |

#### Example

```typescript
import { startImport } from '@ones-op/node-third-import'

await startImport(user_uuid, abilityId, password, server_id, teamUUID)
```

## Type

### ThirdNotification

| 参数        | 说明     | 类型                                                                  | 必填 |
| :---------- | :------- | :-------------------------------------------------------------------- | :--- |
| project_id  | 项目 ID  | `string`                                                              | 是   |
| value_type  | 值类型   | [`ThirdNotificationValueTypeEnum`](#ThirdNotificationValueTypeEnum)   | 是   |
| value       | 值       | `string`                                                              | 是   |
| config_type | 配置类型 | [`ThirdNotificationConfigTypeEnum`](#ThirdNotificationConfigTypeEnum) | 是   |

### ThirdTaskWorkLog

| 参数        | 说明      | 类型                                                    | 必填 |
| :---------- | :-------- | :------------------------------------------------------ | :--- |
| resource_id | 资源 ID   | `string`                                                | 是   |
| task_id     | 工作项 ID | `string`                                                | 是   |
| user_id     | 用户 ID   | `string`                                                | 是   |
| start_time  | 创建时间  | `number`                                                | 是   |
| hours       | 工时      | `number`                                                | 是   |
| type        | 类型      | [`ThirdTaskWorkLogTypeEnum`](#ThirdTaskWorkLogTypeEnum) | 是   |
| create_time | 创建时间  | `number`                                                | 是   |

### ThirdTaskAttachment

附件导入在本地调试时暂不支持将工作区间设置为本地插件的 `workspace` 目录，本地调试时应将`config/local.yaml`中的配置 file_in_local 设置为 false 或者 使用服务端调试。

| 参数           | 说明         | 类型     | 必填 |
| :------------- | :----------- | :------- | :--- |
| resource_id    | 资源 ID      | `string` | 是   |
| task_id        | 工作项 ID    | `string` | 是   |
| full_file_path | 附件文件地址 | `string` | 是   |
| file_name      | 文件名称     | `string` | 否   |

### ThirdTaskLink

| 参数           | 说明              | 类型     | 必填 |
| :------------- | :---------------- | :------- | :--- |
| resource_id    | 关联类型          | `string` | 是   |
| link_type_id   | 工作项关联类型 ID | `string` | 是   |
| source_task_id | 源工作项 ID       | `string` | 是   |
| target_task_id | 目标工作项 ID     | `string` | 是   |

### ThirdTaskComment

| 参数        | 说明      | 类型     | 必填 |
| :---------- | :-------- | :------- | :--- |
| resource_id | 资源 ID   | `string` | 是   |
| task_id     | 工作项 ID | `string` | 是   |
| user_id     | 用户 ID   | `string` | 是   |
| body        | 内容      | `string` | 是   |
| create_time | 创建时间  | `number` | 是   |

### ThirdGlobalPermission

| 参数        | 说明      | 类型                                                      | 必填 |
| :---------- | :-------- | :-------------------------------------------------------- | :--- |
| resource_id | 资源 ID   | `string`                                                  | 是   |
| permission  | 权限点    | [`ThirdGlobalPermissionEnum`](#ThirdGlobalPermissionEnum) | 是   |
| group_id    | 用户组 ID | `string`                                                  | 是   |

### ThirdProjectPermission

| 参数              | 说明         | 类型                                                                                    | 必填 |
| :---------------- | :----------- | :-------------------------------------------------------------------------------------- | :--- |
| resource_id       | 资源 ID      | `string`                                                                                | 是   |
| project_id        | 项目 ID      | `string`                                                                                | 是   |
| user_domain_type  | 用户域类型   | [`ThirdProjectPermissionUserDomainTypeEnum`](#ThirdProjectPermissionUserDomainTypeEnum) | 是   |
| context_type      | Context 类型 | [`ThirdProjectPermissionContextTypeEnum`](#ThirdProjectPermissionContextTypeEnum)       | 是   |
| permission        | 权限点       | [`ThirdProjectPermissionPermissionEnum`](#ThirdProjectPermissionPermissionEnum)         | 是   |
| user_domain_param | 用户域参数   | `string`                                                                                | 是   |

### ThirdTaskWatcher

| 参数        | 说明      | 类型     | 必填 |
| :---------- | :-------- | :------- | :--- |
| resource_id | 资源 ID   | `string` | 是   |
| task_id     | 工作项 ID | `string` | 是   |
| user_id     | 用户 ID   | `string` | 是   |

### ThirdSprint

| 参数        | 说明      | 类型                                              | 必填 |
| :---------- | :-------- | :------------------------------------------------ | :--- |
| resource_id | 资源 ID   | `string`                                          | 是   |
| name        | 名称      | `string`                                          | 是   |
| status      | 状态      | [`ThirdSprintStatusEnum`](#ThirdSprintStatusEnum) | 是   |
| project_id  | 项目 ID   | `string`                                          | 是   |
| start_time  | 开始时间  | `number`                                          | 是   |
| end_time    | 结束时间  | `number`                                          | 是   |
| assign_id   | 负责人 ID | `string`                                          | 是   |
| owner_id    | 所属人 ID | `string`                                          | 是   |

### ThirdProjectIssueTypeLayout

| 参数          | 说明     | 类型                                    | 必填 |
| :------------ | :------- | :-------------------------------------- | :--- |
| project_id    | 项目 ID  | `string`                                | 是   |
| scope_configs | 视图配置 | [`ScopeConfigItem[]`](#ScopeConfigItem) | 是   |

##### ScopeConfigItem {#ScopeConfigItem}

| 参数             | 说明        | 类型     | 必填 |
| :--------------- | :---------- | :------- | :--- |
| issue_type_id    | 工作项 ID   | `string` | 是   |
| field_config_id  | 字段配置 ID | `string` | 是   |
| screen_scheme_id | 视图 ID     | `string` | 是   |

### ThirdProjectIssueTypeWithFields

| 参数                   | 说明     | 类型                                            | 必填 |
| :--------------------- | :------- | :---------------------------------------------- | :--- |
| project_id             | 项目 ID  | `string`                                        | 是   |
| issue_type_with_fields | 属性配置 | [`IssueTypeWithFields[]`](#IssueTypeWithFields) | 是   |

##### IssueTypeWithFields {#IssueTypeWithFields}

| 参数                   | 说明                | 类型                                                            | 必填 |
| :--------------------- | :------------------ | :-------------------------------------------------------------- | :--- |
| issue_type_id          | 工作项 ID           | `string`                                                        | 是   |
| issue_type_detail_type | ONES 内置工作项类型 | [`ThirdIssueTypeDetailTypeEnum`](#ThirdIssueTypeDetailTypeEnum) | 是   |
| fields                 | 属性列表            | [`Field[]`](#Field)                                             | 是   |

##### Field {#Field}

| 参数             | 说明             | 类型      | 必填 |
| :--------------- | :--------------- | :-------- | :--- |
| field_identifier | 字段标识         | `string`  | 是   |
| required         | 是否必填         | `boolean` | 是   |
| is_customized    | 是否是自定义属性 | `boolean` | 是   |

### ThirdIssueTypeField

| 参数          | 说明      | 类型     | 必填 |
| :------------ | :-------- | :------- | :--- |
| resource_id   | 资源 ID   | `string` | 是   |
| issue_type_id | 工作项 ID | `string` | 是   |
| field_id      | 属性 ID   | `string` | 是   |

### ThirdChangeItem

| 参数        | 说明      | 类型                                                    | 必填 |
| :---------- | :-------- | :------------------------------------------------------ | :--- |
| resource_id | 资源 ID   | `string`                                                | 是   |
| task_id     | 工作项 ID | `string`                                                | 是   |
| field_type  | 属性类型  | `string`                                                | 是   |
| field       | 属性      | [`ThirdChangeItemFieldEnum`](#ThirdChangeItemFieldEnum) | 是   |
| old_value   | 旧值      | `string`                                                | 是   |
| new_value   | 新值      | `string`                                                | 是   |
| old_string  | 旧字符串  | `string`                                                | 是   |
| new_string  | 新字符串  | `string`                                                | 是   |
| user_id     | 用户 ID   | `string`                                                | 是   |
| create_time | 创建时间  | `number`                                                | 是   |

### ThirdIssueTypeLayout

| 参数                | 说明           | 类型                | 必填 |
| :------------------ | :------------- | :------------------ | :--- |
| issue_type_id       | 工作项类型 ID  | `string`            | 是   |
| field_config_id     | 属性配置 ID    | `string`            | 是   |
| field_config_name   | 属性配置名称   | `string`            | 是   |
| screen_scheme_id    | 视图 ID        | `string`            | 是   |
| screen_scheme_name  | 视图名称       | `string`            | 是   |
| create_issue_config | 创建工作项视图 | [`Field[]`](#Field) | 是   |
| view_issue_config   | 查看工作项视图 | [`Field[]`](#Field) | 是   |

### ThirdProjectFieldValue

| 参数             | 说明        | 类型                                                                | 必填 |
| :--------------- | :---------- | :------------------------------------------------------------------ | :--- |
| resource_id      | 资源 ID     | `string`                                                            | 是   |
| project_id       | 项目 ID     | `string`                                                            | 是   |
| project_field_id | 项目属性 ID | `string`                                                            | 是   |
| type             | 类型        | [`ThirdProjectFieldValueTypeEnum`](#ThirdProjectFieldValueTypeEnum) | 是   |
| value            | 类型值      | `any`                                                               | 是   |

### ThirdGlobalProjectFieldOption {#ThirdGlobalProjectFieldOption}

| 参数             | 说明    | 类型     | 必填 |
| :--------------- | :------ | :------- | :--- |
| resource_id      | 资源 ID | `string` | 是   |
| value            | 属性值  | `string` | 是   |
| desc             | 描述    | `string` | 是   |
| color            | 颜色    | `string` | 是   |
| background_color | 背景色  | `string` | 是   |

### ThirdGlobalProjectField

| 参数        | 说明       | 类型                                                                  | 必填 |
| :---------- | :--------- | :-------------------------------------------------------------------- | :--- |
| resource_id | 资源 ID    | `string`                                                              | 是   |
| name        | 名称       | `string`                                                              | 是   |
| type        | 属性类型   | [`ThirdGlobalProjectFieldTypeEnum`](#ThirdGlobalProjectFieldTypeEnum) | 是   |
| options     | 属性选项值 | [`ThirdGlobalProjectFieldOption[]`](#ThirdGlobalProjectFieldOption)   | 是   |

### ThirdProject

| 参数         | 说明      | 类型                                                        | 必填 |
| :----------- | :-------- | :---------------------------------------------------------- | :--- |
| resource_id  | 资源 ID   | `string`                                                    | 是   |
| name         | 名称      | `string`                                                    | 是   |
| assign_id    | 负责人 ID | `string`                                                    | 是   |
| create_time  | 创建时间  | `number`                                                    | 是   |
| type         | 类型      | [`ThirdProjectTypeEnum`](#ThirdProjectTypeEnum)             | 是   |
| status       | 项目状态  | [`ThirdProjectStatusEnum`](#ThirdProjectStatusEnum)         | 是   |
| status_uuid  | 状态描述  | [`ThirdProjectStatusUUIDEnum`](#ThirdProjectStatusUUIDEnum) | 是   |
| announcement | 公告      | `string`                                                    | 是   |

### ThirdUserGroupMember

| 参数              | 说明      | 类型     | 必填 |
| :---------------- | :-------- | :------- | :--- |
| resource_id       | 资源 ID   | `string` | 是   |
| resource_group_id | 用户组 ID | `string` | 是   |
| resource_user_id  | 用户 ID   | `string` | 是   |

### ThirdProjectCategory

| 参数        | 说明    | 类型     | 必填 |
| :---------- | :------ | :------- | :--- |
| resource_id | 资源 ID | `string` | 是   |
| name        | 名称    | `string` | 是   |

### ThirdProjectRoleMember

| 参数                | 说明    | 类型     | 必填 |
| :------------------ | :------ | :------- | :--- |
| resource_id         | 资源 ID | `string` | 是   |
| resource_role_id    | 角色 ID | `string` | 是   |
| resource_project_id | 项目 ID | `string` | 是   |
| resource_user_id    | 用户 ID | `string` | 是   |

### ThirdProjectRole

| 参数                | 说明     | 类型     | 必填 |
| :------------------ | :------- | :------- | :--- |
| resource_id         | 资源 ID  | `string` | 是   |
| resource_role_id    | 角色 ID  | `string` | 是   |
| resource_project_id | 项目 ID  | `string` | 是   |
| create_time         | 创建时间 | `number` | 是   |

### ThirdGlobalProjectRole

| 参数        | 说明     | 类型                                                                    | 必填 |
| :---------- | :------- | :---------------------------------------------------------------------- | :--- |
| resource_id | 资源 ID  | `string`                                                                | 是   |
| name        | 名称     | `string`                                                                | 是   |
| create_time | 创建时间 | `number`                                                                | 是   |
| status      | 状态     | [`ThirdGlobalProjectRoleStatusEnum`](#ThirdGlobalProjectRoleStatusEnum) | 是   |

### ThirdProjectIssueType

| 参数          | 说明          | 类型     | 必填 |
| :------------ | :------------ | :------- | :--- |
| resource_id   | 资源 ID       | `string` | 是   |
| project_id    | 项目 ID       | `string` | 是   |
| issue_type_id | 工作项类型 ID | `string` | 是   |

### ThirdIssueType

| 参数        | 说明     | 类型                                                    | 必填 |
| :---------- | :------- | :------------------------------------------------------ | :--- |
| resource_id | 资源 ID  | `string`                                                | 是   |
| name        | 名称     | `string`                                                | 是   |
| status      | 状态     | [`ThirdIssueTypeStatusEnum`](#ThirdIssueTypeStatusEnum) | 是   |
| type        | 类型     | [`ThirdIssueTypeEnum`](#ThirdIssueTypeEnum)             | 是   |
| create_time | 创建时间 | `number`                                                | 是   |
| icon        | 图标     | [`ThirdTaskIconEnum`](#ThirdTaskIconEnum)               | 是   |

### ThirdUserGroup

| 参数        | 说明     | 类型     | 必填 |
| :---------- | :------- | :------- | :--- |
| resource_id | 资源 ID  | `string` | 是   |
| name        | 名称     | `string` | 是   |
| desc        | 描述     | `string` | 是   |
| create_time | 创建时间 | `number` | 是   |
| status      | 状态     | `number` | 是   |

### ThirdUser

| 参数        | 说明     | 类型                                          | 必填 |
| :---------- | :------- | :-------------------------------------------- | :--- |
| resource_id | 资源 ID  | `string`                                      | 是   |
| name        | 名称     | `string`                                      | 是   |
| email       | 邮箱     | `string`                                      | 是   |
| phone       | 手机     | `string`                                      | 是   |
| title       | 头衔     | `string`                                      | 是   |
| company     | 公司     | `string`                                      | 是   |
| create_time | 创建时间 | `number`                                      | 是   |
| modify_time | 更新时间 | `number`                                      | 是   |
| status      | 状态     | [`ThirdUserStatusEnum`](#ThirdUserStatusEnum) | 是   |

### ThirdTaskLinkType

| 参数        | 说明     | 类型                                              | 必填 |
| :---------- | :------- | :------------------------------------------------ | :--- |
| resource_id | 资源 ID  | `string`                                          | 是   |
| name        | 名称     | `string`                                          | 是   |
| desc_out    | 链出描述 | `string`                                          | 是   |
| desc_in     | 链入描述 | `string`                                          | 是   |
| type        | 类型     | [`ThirdTaskLinkTypeEnum`](#ThirdTaskLinkTypeEnum) | 是   |

### ThirdConfig

| 参数                  | 说明                   | 类型                            | 必填 |
| :-------------------- | :--------------------- | :------------------------------ | :--- |
| workdays              | 工作日                 | [`WorkdayEnum[]`](#WorkdayEnum) | 是   |
| work_hours            | 每日工时               | `number`                        | 是   |
| fixed_fields_mapping  | 第三方字段映射系统字段 | `map`                           | 是   |
| custom_fields_mapping | 属性映射               | `map`                           | 是   |
| custom_fields         | 属性                   | `string[]`                      | 是   |
| tab_fields            | tab 属性               | `tab_fields`                    | 是   |

### ThirdPriority

| 参数             | 说明     | 类型     | 必填 |
| :--------------- | :------- | :------- | :--- |
| resource_id      | 资源 ID  | `string` | 是   |
| name             | 名称     | `string` | 是   |
| desc             | 描述     | `string` | 是   |
| color            | 颜色     | `string` | 是   |
| background_color | 背景颜色 | `string` | 是   |

### ThirdTaskFieldOption

| 参数                   | 说明                | 类型     | 必填 |
| :--------------------- | :------------------ | :------- | :--- |
| resource_id            | 资源 ID             | `string` | 是   |
| resource_task_field_id | 第三方工作项属性 ID | `string` | 是   |
| name                   | 名称                | `string` | 是   |
| desc                   | 描述                | `string` | 是   |
| color                  | 颜色                | `string` | 是   |
| background_color       | 背景颜色            | `string` | 是   |

### ThirdTaskField

| 参数        | 说明     | 类型                                                | 必填 |
| :---------- | :------- | :-------------------------------------------------- | :--- |
| resource_id | 资源 ID  | `string`                                            | 是   |
| name        | 属性名称 | `string`                                            | 是   |
| type        | 属性类型 | [`ThirdTaskFieldTypeEnum`](#ThirdTaskFieldTypeEnum) | 是   |

### ThirdUserDomain {#ThirdUserDomain}

| 参数              | 说明       | 类型                                                  | 必填 |
| :---------------- | :--------- | :---------------------------------------------------- | :--- |
| user_domain_type  | 用户域类型 | [`ThirdUserDomainTypeEnum`](#ThirdUserDomainTypeEnum) | 是   |
| user_domain_param | 用户域参数 | `string`                                              | 是   |

### ThirdTransition

| 参数            | 说明          | 类型                                    | 必填 |
| :-------------- | :------------ | :-------------------------------------- | :--- |
| project_id      | 项目 ID       | `string`                                | 是   |
| issue_type_id   | 工作项类型 ID | `string`                                | 是   |
| start_status_id | 开始的状态 ID | `string`                                | 是   |
| name            | 名称          | `string`                                | 是   |
| end_status_id   | 结束的状态 ID | `string`                                | 是   |
| user_domains    | 用户域列表    | [`ThirdUserDomain[]`](#ThirdUserDomain) | 是   |

### ThirdWorkflow

| 参数                | 说明               | 类型                                                | 必填 |
| :------------------ | :----------------- | :-------------------------------------------------- | :--- |
| project_id          | 项目 ID            | `string`                                            | 是   |
| issue_type_statuses | 工作项类型状态配置 | [`ThirdTaskStatusConfig[]`](#ThirdTaskStatusConfig) | 是   |
| transitions         | 工作流配置         | `ThirdTransition[]`                                 | 是   |

### ThirdTaskStatusConfig {#ThirdTaskStatusConfig}

| 参数           | 说明           | 类型       | 必填 |
| :------------- | :------------- | :--------- | :--- |
| issue_type_id  | 工作项类型 ID  | `string`   | 是   |
| status_ids     | 工作项状态 IDs | `string[]` | 是   |
| init_status_id | 初始状态 ID    | `string`   | 是   |
| workflow_name  | 工作流名称     | `string`   | 是   |

### ThirdTaskStatus

| 参数        | 说明           | 类型                                                          | 必填 |
| :---------- | :------------- | :------------------------------------------------------------ | :--- |
| resource_id | 资源 ID        | `string`                                                      | 是   |
| name        | 名称           | `string`                                                      | 是   |
| category    | 工作项状态分类 | [`ThirdTaskStatusCategoryEnum`](#ThirdTaskStatusCategoryEnum) | 是   |

### ThirdTaskFieldValue

| 参数        | 说明      | 类型                                                                    | 必填 |
| :---------- | :-------- | :---------------------------------------------------------------------- | :--- |
| resource_id | 资源 ID   | `string`                                                                | 是   |
| task_id     | 工作项 ID | `string`                                                                | 是   |
| field_id    | 属性 ID   | `string`                                                                | 是   |
| field_type  | 属性类型  | [`ThirdTaskFieldValueFieldTypeEnum`](#ThirdTaskFieldValueFieldTypeEnum) | 是   |
| value       | 属性值    | `any`                                                                   | 是   |

### ThirdTask

| 参数          | 说明          | 类型     | 必填 |
| :------------ | :------------ | :------- | :--- |
| resource_id   | 资源 ID       | `string` | 是   |
| summary       | 标题          | `string` | 是   |
| desc          | 描述          | `string` | 是   |
| owner_id      | 创建者 ID     | `string` | 是   |
| assign_id     | 负责人 ID     | `string` | 是   |
| deadline      | 最后完成日期  | `number` | 否   |
| priority_id   | 优先级 ID     | `string` | 是   |
| status_id     | 状态 ID       | `string` | 是   |
| project_id    | 项目 ID       | `string` | 是   |
| issue_type_id | 工作项类型 ID | `string` | 是   |
| sprint_id     | 迭代 ID       | `string` | 否   |
| parent_id     | 父工作项 ID   | `string` | 否   |
| created_time  | 创建时间      | `number` | 是   |
| updated_time  | 更新时间      | `number` | 是   |

### ThirdTaskRelease

| 参数       | 说明            | 类型     | 必填 |
| :--------- | :-------------- | :------- | :--- |
| task_id    | 工作项 ID       | `string` | 是   |
| release_id | 发布的工作项 ID | `string` | 是   |

### ThirdSprintFieldValue

| 参数        | 说明        | 类型                                                                  | 必填 |
| :---------- | :---------- | :-------------------------------------------------------------------- | :--- |
| resource_id | 资源 ID     | `string`                                                              | 是   |
| project_id  | 项目 ID     | `string`                                                              | 是   |
| sprint_id   | 迭代 ID     | `string`                                                              | 是   |
| field_id    | 属性 ID     | `string`                                                              | 是   |
| field_type  | 属性类型 ID | [`ThirdProjectSprintFieldTypeEnum`](#ThirdProjectSprintFieldTypeEnum) | 是   |
| value       | 属性值      | `any`                                                                 | 是   |

### ThirdSprintFieldOption {#ThirdSprintFieldOption}

| 参数        | 说明       | 类型     | 必填 |
| :---------- | :--------- | :------- | :--- |
| resource_id | 资源 ID    | `string` | 是   |
| value       | 属性选项值 | `string` | 是   |

### ThirdProjectSprintField

| 参数        | 说明       | 类型                                                                  | 必填 |
| :---------- | :--------- | :-------------------------------------------------------------------- | :--- |
| resource_id | 资源 ID    | `string`                                                              | 是   |
| project_id  | 项目 ID    | `string`                                                              | 是   |
| name        | 属性名称   | `string`                                                              | 是   |
| type        | 属性类型   | [`ThirdProjectSprintFieldTypeEnum`](#ThirdProjectSprintFieldTypeEnum) | 是   |
| options     | 属性选项值 | [`ThirdSprintFieldOption`](#ThirdSprintFieldOption)                   | 是   |

## Enum

### WorkdayEnum {#WorkdayEnum}

工作日

| 可选值          | 说明 |
| :-------------- | :--- |
| WorkdayEnum.Mon | 周一 |
| WorkdayEnum.Tue | 周二 |
| WorkdayEnum.Wed | 周三 |
| WorkdayEnum.Thu | 周四 |
| WorkdayEnum.Fri | 周五 |
| WorkdayEnum.Sat | 周六 |
| WorkdayEnum.Sun | 周日 |

### ThirdProjectFieldValueTypeEnum {#ThirdProjectFieldValueTypeEnum}

项目属性类型

| 可选值                                         | 说明     |
| :--------------------------------------------- | :------- |
| ThirdProjectFieldValueTypeEnum.FieldTypeOption | 单选     |
| ThirdProjectFieldValueTypeEnum.FieldTypeText   | 单行文本 |

### ThirdTaskFieldTypeEnum {#ThirdTaskFieldTypeEnum}

工作项属性类型枚举

| 可选值                                        | 说明     |
| :-------------------------------------------- | :------- |
| ThirdTaskFieldTypeEnum.FieldTypeOption        | 单选     |
| ThirdTaskFieldTypeEnum.FieldTypeMultiOption   | 多选     |
| ThirdTaskFieldTypeEnum.FieldTypeText          | 单行文本 |
| ThirdTaskFieldTypeEnum.FieldTypeMultiLineText | 多行文本 |
| ThirdTaskFieldTypeEnum.FieldTypeUser          | 单选用户 |
| ThirdTaskFieldTypeEnum.FieldTypeUserList      | 多选用户 |
| ThirdTaskFieldTypeEnum.FieldTypeFloat         | 浮点数   |
| ThirdTaskFieldTypeEnum.FieldTypeDate          | 日期     |
| ThirdTaskFieldTypeEnum.FieldTypeTime          | 时间     |

### ThirdTaskLinkTypeEnum {#ThirdTaskLinkTypeEnum}

工作项链接类型

| 可选值                                    | 说明                 |
| :---------------------------------------- | :------------------- |
| ThirdTaskLinkTypeEnum.LinkModelTwoWayMany | 相互关联，双向多对多 |
| ThirdTaskLinkTypeEnum.LinkModelManyToMany | 单向多对多           |

### ThirdGlobalProjectFieldTypeEnum {#ThirdGlobalProjectFieldTypeEnum}

全局项目属性类型

| 可选值                                                 | 说明     |
| :----------------------------------------------------- | :------- |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeOption        | 单选     |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeText          | 单行文本 |
| ThirdGlobalProjectFieldTypeEnum.FieldTypeMultiLineText | 多行文本 |

### ThirdGlobalPermissionEnum {#ThirdGlobalPermissionEnum}

全局权限

| 可选值                                      | 说明         |
| :------------------------------------------ | :----------- |
| ThirdGlobalPermissionEnum.AdministerTeam    | 团队管理     |
| ThirdGlobalPermissionEnum.AdministerProject | 项目管理     |
| ThirdGlobalPermissionEnum.AdministerWiki    | 知识库管理   |
| ThirdGlobalPermissionEnum.InviteMember      | 邀请团队成员 |

### ThirdIssueTypeEnum {#ThirdIssueTypeEnum}

工作项类型

| 可选值                                       | 说明         |
| :------------------------------------------- | :----------- |
| ThirdIssueTypeEnum.IssueTypeStandardTaskType | 标准任务类型 |
| ThirdIssueTypeEnum.IssueTypeSubTaskType      | 子任务类型   |

### ThirdTaskIconEnum {#ThirdTaskIconEnum}

工作项图标

| 可选值                             | 说明           |
| :--------------------------------- | :------------- |
| ThirdTaskIconEnum.StandardTaskIcon | 标准工作项图标 |
| ThirdTaskIconEnum.SubTaskIcon      | 子工作项图标   |

### ThirdUserStatusEnum {#ThirdTaskStatusConfig}

用户状态

| 可选值                                | 说明     |
| :------------------------------------ | :------- |
| ThirdUserStatusEnum.UserStatusNormal  | 正常     |
| ThirdUserStatusEnum.UserStatusDeleted | 已删除   |
| ThirdUserStatusEnum.UserStatusPending | 未激活   |
| ThirdUserStatusEnum.UserStatusDisable | 已经禁用 |

### UserGroupStatusEnum

用户组状态

| 可选值                                     | 说明     |
| :----------------------------------------- | :------- |
| UserGroupStatusEnum.UserGroupStatusNormal  | 正常     |
| UserGroupStatusEnum.UserGroupStatusDeleted | 已经删除 |

### ThirdProjectTypeEnum {#ThirdProjectTypeEnum}

项目类型

| 可选值                                    | 说明     |
| :---------------------------------------- | :------- |
| ThirdProjectTypeEnum.ProjectTypeAgileEnum | 敏捷类型 |

### ThirdProjectStatusEnum {#ThirdProjectStatusEnum}

项目状态

| 可选值                                      | 说明 |
| :------------------------------------------ | :--- |
| ThirdProjectStatusEnum.ProjectStatusNormal  | 正常 |
| ThirdProjectStatusEnum.ProjectStatusDeleted | 删除 |

### ThirdProjectStatusUUIDEnum {#ThirdProjectStatusUUIDEnum}

项目状态类型

| 可选值                                                     | 说明   |
| :--------------------------------------------------------- | :----- |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryTodo       | 未开始 |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryInProgress | 进行中 |
| ThirdProjectStatusUUIDEnum.ProjectStatusCategoryDone       | 已完成 |

### ThirdUserDomainTypeEnum {#ThirdUserDomainTypeEnum}

用户域类型

| 可选值                             | 说明         |
| :--------------------------------- | :----------- |
| ThirdUserDomainTypeEnum.TaskOwner  | 工作项创建人 |
| ThirdUserDomainTypeEnum.TaskAssign | 工作项负责人 |
| ThirdUserDomainTypeEnum.Role       | 用户角色 ID  |
| ThirdUserDomainTypeEnum.Group      | 用户组 ID    |

### ThirdSprintStatusEnum {#ThirdSprintStatusEnum}

迭代状态

| 可选值                                               | 说明   |
| :--------------------------------------------------- | :----- |
| ThirdSprintStatusEnum.SprintStatusCategoryToDo       | 未开始 |
| ThirdSprintStatusEnum.SprintStatusCategoryInProgress | 进行中 |
| ThirdSprintStatusEnum.SprintStatusCategoryDone       | 已完成 |

### ThirdTaskStatusCategoryEnum {#ThirdTaskStatusCategoryEnum}

工作项状态类型分类

| 可选值                                                      | 说明   |
| :---------------------------------------------------------- | :----- |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryTodo       | 未开始 |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryInProgress | 进行中 |
| ThirdTaskStatusCategoryEnum.ProjectStatusCategoryDone       | 已完成 |

### ThirdTaskWorkLogTypeEnum {#ThirdTaskWorkLogTypeEnum}

工时类型

| 可选值                                                 | 说明     |
| :----------------------------------------------------- | :------- |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeEstimate  | 预估工时 |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeRemaining | 剩余工时 |
| ThirdTaskWorkLogTypeEnum.ThirdTaskWorkLogTypeLog       | 登记工时 |

### ThirdTaskFieldValueFieldTypeEnum {#ThirdTaskFieldValueFieldTypeEnum}

工作项属性值类型

| 可选值                                                  | 说明     |
| :------------------------------------------------------ | :------- |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeOption        | 单选     |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeMultiOption   | 多选     |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeText          | 单行文本 |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeMultiLineText | 多行文本 |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeUser          | 单选用户 |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeUserList      | 多选用户 |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeFloat         | 浮点数   |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeDate          | 日期     |
| ThirdTaskFieldValueFieldTypeEnum.FieldTypeTime          | 时间     |

### ThirdNotificationValueTypeEnum {#ThirdNotificationValueTypeEnum}

通知值类型

| 可选值                                                                  | 说明            |
| :---------------------------------------------------------------------- | :-------------- |
| ThirdNotificationValueTypeEnum.NotificationValueTypeUserID              | 用户 ID         |
| ThirdNotificationValueTypeEnum.NotificationValueTypeUserGroupID         | 用户组          |
| ThirdNotificationValueTypeEnum.NotificationValueTypeGlobalProjectRoleID | 全局项目角色 ID |
| ThirdNotificationValueTypeEnum.NotificationValueTypeRole                | 角色            |

### ThirdNotificationConfigTypeEnum {#ThirdNotificationConfigTypeEnum}

通知配置类型

| 可选值                                                     | 说明           |
| :--------------------------------------------------------- | :------------- |
| ThirdNotificationConfigTypeEnum.NoticeTypeCreateTask       | 创建工作项     |
| ThirdNotificationConfigTypeEnum.NoticeTypeUpdateTaskAssign | 更新工作项分配 |
| ThirdNotificationConfigTypeEnum.NoticeTypeUpdateTaskStatus | 更新工作项状态 |

### ThirdProjectPermissionUserDomainTypeEnum {#ThirdProjectPermissionUserDomainTypeEnum}

权限用户域类型

| 可选值                                                   | 说明   |
| :------------------------------------------------------- | :----- |
| ThirdProjectPermissionUserDomainTypeEnum.SingleUserLabel | 用户   |
| ThirdProjectPermissionUserDomainTypeEnum.GroupLabel      | 用户组 |
| ThirdProjectPermissionUserDomainTypeEnum.RoleLabel       | 角色   |

### ThirdProjectPermissionPermissionEnum {#ThirdProjectPermissionPermissionEnum}

权限点名称

| 可选值                                                  | 说明              |
| :------------------------------------------------------ | :---------------- |
| ThirdProjectPermissionPermissionEnum.ManageSprints      | 管理迭代          |
| ThirdProjectPermissionPermissionEnum.BeAssignedToSprint | 成为迭代负责人    |
| ThirdProjectPermissionPermissionEnum.ManageProject      | 管理项目          |
| ThirdProjectPermissionPermissionEnum.BrowseProject      | 查看项目          |
| ThirdProjectPermissionPermissionEnum.ViewProjectReports | 查看项目报表      |
| ThirdProjectPermissionPermissionEnum.ManagePipelines    | 管理项目 Pipeline |
| ThirdProjectPermissionPermissionEnum.ViewTasks          | 查看工作项        |
| ThirdProjectPermissionPermissionEnum.ExportTasks        | 导出工作项列表    |
| ThirdProjectPermissionPermissionEnum.CreateTasks        | 创建工作项        |
| ThirdProjectPermissionPermissionEnum.DeleteTasks        | 删除工作项        |
| ThirdProjectPermissionPermissionEnum.UpdateTasks        | 编辑工作项        |
| ThirdProjectPermissionPermissionEnum.BeAssigned         | 成为负责人        |
| ThirdProjectPermissionPermissionEnum.TransitTasks       | 更新工作项状态    |
| ThirdProjectPermissionPermissionEnum.UpdateTaskWatchers | 编辑关注者        |

### ThirdProjectPermissionContextTypeEnum {#ThirdProjectPermissionContextTypeEnum}

权限上下文类型

| 可选值                                                 | 说明       |
| :----------------------------------------------------- | :--------- |
| ThirdProjectPermissionContextTypeEnum.ProjectContext   | 项目       |
| ThirdProjectPermissionContextTypeEnum.IssueTypeContext | 工作项类型 |

### ThirdChangeItemFieldEnum {#ThirdChangeItemFieldEnum}

工作项动态类型

| 可选值                                                       | 说明       |
| :----------------------------------------------------------- | :--------- |
| ThirdChangeItemFieldEnum.ChangeItemFieldAttachment           | 附件       |
| ThirdChangeItemFieldEnum.ChangeItemFieldDescription          | 描述       |
| ThirdChangeItemFieldEnum.ChangeItemFieldPriority             | 优先级     |
| ThirdChangeItemFieldEnum.ChangeItemFieldStatus               | 状态       |
| ThirdChangeItemFieldEnum.ChangeItemFieldIssueType            | 工作项类型 |
| ThirdChangeItemFieldEnum.ChangeItemFieldAssignee             | 负责人     |
| ThirdChangeItemFieldEnum.ChangeItemFieldSprint               | 迭代       |
| ThirdChangeItemFieldEnum.ChangeItemFieldLink                 | 关联       |
| ThirdChangeItemFieldEnum.ChangeItemFieldEpicChild            |            |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeOriginalEstimate | 预估工时   |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeEstimate         | 剩余工时   |
| ThirdChangeItemFieldEnum.ChangeItemFieldTimeSpent            | 登记工时   |

### ThirdGlobalProjectRoleStatusEnum {#ThirdGlobalProjectRoleStatusEnum}

项目角色状态

| 可选值                                            | 说明 |
| :------------------------------------------------ | :--- |
| ThirdGlobalProjectRoleStatusEnum.RoleStatusNormal | 正常 |

### ThirdIssueTypeStatusEnum {#ThirdIssueTypeStatusEnum}

工作项状态

| 可选值                                         | 说明 |
| :--------------------------------------------- | :--- |
| ThirdIssueTypeStatusEnum.IssueTypeStatusNormal | 正常 |

### ThirdIssueTypeDetailTypeEnum {#ThirdIssueTypeDetailTypeEnum}

ONES 内置工作项类型

| 可选值                                         | 说明             |
| :--------------------------------------------- | :--------------- |
| ThirdIssueTypeDetailTypeEnum.DetailTypeCustom  | 默认，自定义类型 |
| ThirdIssueTypeDetailTypeEnum.DetailTypeDemand  | 需求             |
| ThirdIssueTypeDetailTypeEnum.DetailTypeTask    | 任务             |
| ThirdIssueTypeDetailTypeEnum.DetailTypeDefect  | 缺陷             |
| ThirdIssueTypeDetailTypeEnum.DetailTypePublish | 发布             |

### ThirdProjectSprintFieldTypeEnum {#ThirdProjectSprintFieldTypeEnum}

项目迭代属性的属性类型

| 可选值                                                 | 说明     |
| :----------------------------------------------------- | :------- |
| ThirdProjectSprintFieldTypeEnum.FieldTypeOption        | 单选     |
| ThirdProjectSprintFieldTypeEnum.FieldTypeText          | 单行文本 |
| ThirdProjectSprintFieldTypeEnum.FieldTypeMultiLineText | 多行文本 |
| ThirdProjectSprintFieldTypeEnum.FieldTypeUser          | 单选用户 |
| ThirdProjectSprintFieldTypeEnum.FieldTypeFloat         | 浮点数   |
| ThirdProjectSprintFieldTypeEnum.FieldTypeDate          | 日期     |
| ThirdProjectSprintFieldTypeEnum.FieldTypeTime          | 时间     |
| ThirdProjectSprintFieldTypeEnum.FieldTypeInteger       | 整数     |
