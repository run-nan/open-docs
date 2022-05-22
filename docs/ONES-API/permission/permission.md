<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

# 目录

- [目录](#目录)
- [通用说明](#通用说明)
  - [模型](#模型)
    - [权限规则](#权限规则)
    - [权限计算结果](#权限计算结果)
    - [权限列表](#权限列表)
      - [organization 权限](#organization-权限)
      - [team 权限](#team-权限)
      - [project 权限](#project-权限)
      - [<p id="issue_type">issue_type 权限</p>](#issue_type-权限)
      - [wiki space 权限](#wiki-space-权限)
      - [testcase 权限](#testcase-权限)
      - [<p id="testcase_library">testcase_library 权限</p>](#testcase_library-权限)
      - [<p id="testcase_plan">testcase_plan 权限</p>](#testcase_plan-权限)
      - [component 权限](#component-权限)
      - [program 权限](#program-权限)
- [API 说明](#api-说明)
  - [1. 添加权限规则](#1-添加权限规则)
    - [URL](#url)
    - [HTTP Method](#http-method)
    - [调用权限](#调用权限)
    - [传值方式](#传值方式)
    - [参数列表](#参数列表)
    - [请求体示例](#请求体示例)
    - [返回值示例](#返回值示例)
  - [2. 删除权限规则](#2-删除权限规则)
    - [URL](#url-1)
    - [调用权限](#调用权限-1)
    - [HTTP Method](#http-method-1)
    - [传值方式](#传值方式-1)
    - [参数列表](#参数列表-1)
    - [请求体示例](#请求体示例-1)
    - [返回值示例](#返回值示例-1)
  - [3. 获取权限规则列表](#3-获取权限规则列表)
    - [URL](#url-2)
    - [HTTP Method](#http-method-2)
    - [调用权限](#调用权限-2)
    - [传值方式](#传值方式-2)
    - [参数列表](#参数列表-2)
    - [返回 JSON](#返回json)
    - [请求体示例](#请求体示例-2)
    - [返回值示例](#返回值示例-2)
  - [4. 获取当前用户拥有的所有权限](#4-获取当前用户拥有的所有权限)
    - [URL](#url-3)
    - [HTTP Method](#http-method-3)
    - [调用权限](#调用权限-3)
    - [传值方式](#传值方式-3)
    - [参数列表](#参数列表-3)
    - [返回参数列表](#返回参数列表)
    - [请求体示例](#请求体示例-3)
    - [返回值示例](#返回值示例-3)

<!-- /TOC -->

# 通用说明

## 模型

### 权限规则

permission_rule

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                                |
| :---------------- | :----- | :------- | :------- | :-------------------------------------------------- |
| uuid              | string | F        | len=8    | 权限规则 uuid                                       |
| context_type      | string | F        |          | 权限规则适用的[上下文类型](./context.md#上下文类型) |
| context_param     | object | T        |          | 权限规则适用的[上下文参数](./context.md#上下文参数) |
| user_domain_type  | string | F        |          | [用户域类型](./user_domain.md#用户域模型)           |
| user_domain_param | object | T        |          | [用户域参数](./user_domain.md#用户域取值范围)       |
| permission        | string | F        |          | 权限点，详见[权限列表](#权限列表)                   |
| create_time       | int    | T        |          | 权限规则创建时间，秒，添加和修改时无需提供          |
| read_only         | bool   | F        |          | 是否只读，添加和修改时无需提供                      |

### 权限计算结果

evaluated_permission

| 参数名            | 值类型 | 允许空值 | 说明                                                                                           |
| :---------------- | :----- | :------- | :--------------------------------------------------------------------------------------------- |
| key               | string | F        | 权限计算结果唯一标识，根据 context_type, context_param 和 permission 生成                      |
| context_type      | string | F        | [上下文类型](./context.md#上下文类型)                                                          |
| context_param     | object | T        | [上下文参数](./context.md#上下文参数)                                                          |
| permission        | string | F        | 权限点，详见[权限列表](#权限列表)                                                              |
| additional_checks | array  | T        | 额外检查条件，当此字段不为空时，还需要满足字段下任意一个条件才说明用户有这个权限，详见下方示例 |

其中 additional_checks 允许包含的值如下

| 名称                       | 说明                                 |
| :------------------------- | :----------------------------------- |
| task_owner_is_self         | 检查当前任务的创建者是否当前用户     |
| task_assign_is_self        | 检查当前任务的负责人是否当前用户     |
| task_watchers_include_self | 检查当前任务的关注者是否包含当前用户 |

判断一个用户 U 在上下文 C 下是否拥有某项权限 P 的步骤：

- 在 U 的所有 evaluated_permission 中，通过 C 和 P 找到相应的记录
  - 如果记录不存在，则 U 无权限，end
  - 如果记录存在，则根据记录中的 additional_checks 进行下一步判断
    - 如果没有 additional_checks，或者 additional_checks 为空，则 U 有权限，end
    - 如果 additional_checks 不为空，则遍历 additional_checks
      - 满足 additional_checks 中任意一个条件，则 U 有权限，end
      - 不满足 additional_checks 中的所有条件，则 U 无权限，end

下面是包含 additional_checks 的一个例子，其中 PMrnCARc 是当前用户的 uuid

```json
{
  "key": "1003-MehxJEz4DiJFGaHO-J9fWXcx9:1206",
  "context_type": "issue_type",
  "context_param": {
    "issue_type_uuid": "J9fWXcx9",
    "project_uuid": "MehxJEz4DiJFGaHO"
  },
  "permission": "transit_tasks",
  "additional_checks": ["task_owner_is_self", "task_assign_is_self"]
}
```

### 权限列表

permission: 权限点列表

#### organization 权限

| 权限名                     | 修改规则所需权限        | 允许使用的用户域类型 | 说明                         |
| :------------------------- | :---------------------- | :------------------- | :--------------------------- |
| administer_organization    | administer_organization | single_user          | 组织管理员                   |
| manage_organization_member | administer_organization | single_user          | 管理组织成员（邀请、删除等） |

#### team 权限

| 权限名              | 修改规则所需权限 | 允许使用的用户域类型                                 | 说明                 |
| :------------------ | :--------------- | :--------------------------------------------------- | :------------------- |
| administer_team     | administer_team  | single_user, group, everyone, department, team_owner | 团队管理员           |
| invite_member       | administer_team  | single_user, group, everyone, department, team_owner | 邀请成员             |
| administer_do       | administer_team  | single_user, group, everyone, department, team_owner | 「Project」管理员    |
| administer_wiki     | administer_team  | single_user, group, everyone, department, team_owner | 「Wiki」管理员       |
| view_team_reports   | administer_team  | single_user, group, everyone, department, team_owner | 查看团队数据中心权限 |
| administer_testcase | administer_team  | single_user, group, everyone, department, team_owner | 「Testcase」管理员   |
| manage_version      | administer_team  | group, everyone, team_owner                          | 管理版本权限         |
| batch_move_tasks    | administer_team  | single_user, group, everyone, department, team_owner | 批量移动任务权限     |
| administer_plan     | administer_team  | single_user, group, everyone, department, team_owner | plan 管理员权限      |

#### project 权限

| 权限名                | 修改规则所需权限 | 允许使用的用户域类型                                                   | 说明                                     |
| :-------------------- | :--------------- | :--------------------------------------------------------------------- | :--------------------------------------- |
| manage_project        | administer_do    | single_user, group, everyone, department, role                         | 管理当前项目，包括修改项目名称、公告     |
| browse_project        | manage_project   | single_user, group, everyone, department, project_administrators, role | 查看当前项目下的文件、里程碑、会话等信息 |
| manage_sprints        | manage_project   | single_user, group, everyone, department, project_administrators, role | 管理当前项目下的迭代                     |
| view_project_reports  | manage_project   | single_user, group, everyone, department, project_administrators, role | 查看当前项目的数据报表                   |
| manage_pipelines      | manage_project   | single_user, group, everyone, department, project_administrators, role | 管理当前项目下的 pipeline                |
| export_tasks          | manage_project   | single_user, group, everyone                                           | 导出任务权限                             |
| be_assigned_to_sprint | manage_project   | single_user, group, everyone, department, project_administrators, role | 成为迭代负责人                           |

#### <p id="issue_type">issue_type 权限</p>

| 权限名               | 修改规则所需权限 | 允许使用的用户域类型                                                                                           | 说明               |
| :------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------- | :----------------- |
| create_tasks         | manage_project   | single_user, group, everyone, department, project_administrators, role                                         | 创建任务           |
| view_tasks           | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign, task_watchers | 查看任务           |
| update_tasks         | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign, task_watchers | 编辑任务           |
| delete_tasks         | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign, task_watchers | 删除任务           |
| transit_tasks        | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign, task_watchers | 更新任务状态       |
| be_assigned          | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign                | 可被选成任务负责人 |
| export_tasks         | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign                | 导出任务           |
| update_task_watchers | manage_project   | single_user, group, everyone, department, project_administrators, role, task_owner, task_assign, task_watchers | 编辑任务关注者     |

#### wiki space 权限

| 权限名       | 修改规则所需权限             | 允许使用的用户域类型                                 | 说明         |
| :----------- | :--------------------------- | :--------------------------------------------------- | :----------- |
| view_page    | administer_wiki,manage_space | single_user, group, everyone, department, team_owner | 浏览与反馈   |
| create_page  | administer_wiki,manage_space | single_user, group, everyone, department, team_owner | 内容编辑     |
| manage_space | administer_wiki              | single_user, group, everyone, department, team_owner | 项目管理     |
| create_space | administer_wiki              | single_user, group, everyone, department, team_owner | 创建页面组   |
| export_page  | manage_space                 | single_user, group, everyone, department, team_owner | 导出页面权限 |

#### testcase 权限

| 权限名         | 修改规则所需权限    | 允许使用的用户域类型                     | 说明                                     |
| :------------- | :------------------ | :--------------------------------------- | :--------------------------------------- |
| manage_plans   | administer_testcase | single_user, group, everyone, department | 创建／删除测试计划，但不包括查看测试计划 |
| manage_library | administer_testcase | single_user, group, everyone, department | 创建、配置、删除用例库                   |

#### <p id="testcase_library">testcase_library 权限</p>

| 权限名               | 修改规则所需权限                         | 允许使用的用户域类型                          | 说明                                     |
| :------------------- | :--------------------------------------- | :-------------------------------------------- | :--------------------------------------- |
| manage_library_cases | administer_testcase,manage_library_cases | single_user, group, everyone, department,role | 查看此用例库，查看和编辑此用例库里的用例 |

#### <p id="testcase_plan">testcase_plan 权限</p>

| 权限名            | 修改规则所需权限                 | 允许使用的用户域类型                          | 说明                                         |
| :---------------- | :------------------------------- | :-------------------------------------------- | :------------------------------------------- |
| manage_plan_cases | administer_testcase,manage_plans | single_user, group, everyone, department,role | 查看此测试计划，查看和编辑此测试计划里的用例 |

#### component 权限

| 权限名         | 修改规则所需权限              | 允许使用的用户域类型                                                   | 说明                       |
| :------------- | :---------------------------- | :--------------------------------------------------------------------- | :------------------------- |
| view_component | administer_do, manage_project | single_user, group, everyone, department, project_administrators, role | 允许在顶部导航栏中查看组件 |

#### program 权限

(不支持添加修改)

| 权限名                  | 修改规则所需权限 | 允许使用的用户域类型                                            | 说明                                                                                                           |
| :---------------------- | :--------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| browse_programs         | administer_team  | single_user, group, everyone, department, role, administer_plan | 查看项目集                                                                                                     |
| manage_program_members  | administer_team  | single_user, group, everyone, department, role, administer_plan | 管理项目集成员                                                                                                 |
| manage_program_admins   | administer_team  | single_user, group, everyone, department, role, administer_plan | 管理项目集管理员, 修改项目集负责人                                                                             |
| update_programs         | administer_team  | single_user, group, everyone, department, role, administer_plan | 修改项目集名称，项目集周期                                                                                     |
| browse_program_projects | administer_team  | single_user, group, everyone, department, role, administer_plan | 查看项目集下的项目                                                                                             |
| administer_plan         | administer_team  | single_user, group, everyone, department, team_owner            | (在后续迭代会拆分)plan 管理员权限:创建项目集、删除项目集、添加项目、新建项目、移动项目、移动项目集、移出项目集 |

# API 说明

## 1. 添加权限规则

添加一条权限规则

### URL

https://your-host-name/project/api/project/team/:teamUUID/permission_rules/add

### HTTP Method

POST

### 调用权限

administer_do

### 传值方式

JSON

### 参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                                          |
| :------------------ | :----- | :------- | :------- | :-------------------------------------------- |
| permission_rule     | object | F        |          | 参考顶端的用户权限规则模型，但不需要提供 uuid |
| server_update_stamp | int64  | F        |          | permission 类型数据的更新时间                 |

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/permission_rules/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "permission_rule": {
        "context_type": "project",
        "context_param": {
            "project_uuid": "DU6krHBNXuPAbpv8"
        },
        "permission": "manage_sprints",
        "user_domain_type": "single_user",
        "user_domain_param": "DU6krHBN"
    }
}'
```

### 返回值示例

```json
{
  "permission_rule": {
    "uuid": "5WiuzwDJ",
    "context_type": "project",
    "context_param": {
      "project_uuid": "DU6krHBNXuPAbpv8"
    },
    "user_domain_type": "single_user",
    "user_domain_param": "DU6krHBN",
    "permission": "manage_sprints",
    "read_only": false,
    "create_time": 1565936141,
    "position": 4
  },
  "server_update_stamp": 1565936141874384
}
```

## 2. 删除权限规则

删除一条权限规则

### URL

https://your-host-name/project/api/project/team/:teamUUID/permission_rule/:ruleUUID/delete

### 调用权限

administer_do

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :------------------ | :----- | :------- | :------- | :---------------------------- |
| server_update_stamp | int64  | F        |          | permission 类型数据的更新时间 |

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/permission_rule/5WiuzwDJ/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回值示例

```json
{
  "server_update_stamp": 1565936341035344
}
```

## 3. 获取权限规则列表

列出当前团队下的所有权限规则列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/permission_rules

### HTTP Method

GET

### 调用权限

无

### 传值方式

URL

### 参数列表

无

### 返回 JSON

| JSON 键名           | 值类型 | 取值范围 | 说明                                 |
| :------------------ | :----- | :------- | :----------------------------------- |
| permission_rules    | array  |          | 权限规则列表，参考顶端的权限规则模型 |
| server_update_stamp | int64  |          | permission_rule 类型数据的更新时间   |

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/permission_rules \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回值示例

```json
{
  "permission_rules": [
    {
      "uuid": "UwKg59UC",
      "context_type": "issue_type",
      "context_param": {
        "issue_type_uuid": "BivBjw7n",
        "project_uuid": "DU6krHBNXuPAbpv8"
      },
      "user_domain_type": "role",
      "user_domain_param": "Ko9bjF1N",
      "permission": "delete_tasks",
      "read_only": false,
      "create_time": 1565770996,
      "position": 0
    },
    {
      "uuid": "9WDX46tb",
      "context_type": "team",
      "context_param": {},
      "user_domain_type": "team_owner",
      "user_domain_param": "",
      "permission": "administer_do",
      "read_only": true,
      "create_time": 1564741783,
      "position": 0
    }
    //
  ],
  "server_update_stamp": 1565936389373664
}
```

## 4. 获取当前用户拥有的所有权限

获取当前用户拥有的所有权限

### URL

https://your-host-name/project/api/project/team/:teamUUID/evaluated_permissions

### HTTP Method

GET

### 调用权限

无

### 传值方式

URL

### 参数列表

无

### 返回参数列表

| 参数名                | 值类型 | 取值范围 | 说明                                    |
| :-------------------- | :----- | :------- | :-------------------------------------- |
| evaluated_permissions | array  |          | 权限计算结果列表，参考顶端模型          |
| server_update_stamp   | int64  |          | evaluated_permission 类型数据的更新时间 |

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/evaluated_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回值示例

```json
{
  "evaluated_permissions": [
    {
      "key": "1--:8",
      "context_type": "team",
      "context_param": {},
      "permission": "administer_testcase"
    },
    {
      "key": "1--:4",
      "context_type": "team",
      "context_param": {},
      "permission": "invite_member"
    }
    //
  ],
  "server_update_stamp": 1565936389460960
}
```
