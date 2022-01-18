# 测试计划
- [通用说明](#通用说明)
    - [测试计划](#测试计划)
    - [测试阶段枚举](#测试阶段枚举)
    - [测试计划用例](#测试计划用例)
    - [用例执行结果枚举](#用例执行结果枚举)
- [API 说明](#api-%E8%AF%B4%E6%98%8E)
    - [1. 创建测试计划](#1-创建测试计划)
    - [2. 修改测试计划](#2-修改测试计划)
    - [3. 删除测试计划](#3-删除测试计划)
    - [4. 获取测试计划列表](#4-获取测试计划列表)
    - [5. 在测试计划中添加用例](#5-在测试计划中添加用例)
    - [6. 修改测试计划用例](#6-修改测试计划用例)
    - [7. 删除测试计划用例](#7-删除测试计划用例)
    - [8. 将测试计划中的用例复制到另一个计划](#8-将测试计划中的用例复制到另一个计划)
    - [9. 获取测试计划中的用例](#9-获取测试计划中的用例)



## 通用说明

## 模型
### 测试计划

plan

| 参数名                  | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明              |
| :---------------------- | :----- | :------- | :----- | :------- | :---------------- |
| uuid                    | string | len=8    |        |          | 计划 uuid         |
| owner                   | string | len=8    |        |          | 计划创建者 uuid   |
| create_time             | int64  |          |        |          | 计划创建时间（秒) |
| name                    | string | len<=32  |        |          | 计划名称          |
| stage                   | string |          |        |          | 测试阶段          |
| plan_status                   | int |          |        |          | 1未开始 2进行中 3已完成          |
| members                 | array  |          |        |          | 参与测试的人员    |
| &emsp;user_domain_type  | string |          |        |          | 用户域类型        |
| &emsp;user_domain_param | string |          |        |          | 用户域参数        |
| related_project_uuid                    | string | len=16    |        |          | 关联项目uuid         |
| related_sprint_uuid                    | string | len=8    |        |          | 关联迭代uuid         |
| related_issue_type_uuid                    | string | len=8    |        |          | 关联任务类型uuid         |

### 测试阶段枚举

stage

| 枚举值      | 说明     |
| :---------- | :------- |
| smoke       | 冒烟测试 |
| unit        | 单元测试 |
| functional  | 功能测试 |
| integration | 集成测试 |
| system      | 系统测试 |
| validation  | 版本验证 |


| 枚举值       | 说明       |
| :----------- | :--------- |
| performance  | 性能测试   |
| stress       | 压力测试   |
| usability    | 可用性测试 |
| regression   | 回归测试   |
| verification | 需求验证   |

### 测试计划用例

plan_case

| 参数名    | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明               |
| :-------- | :----- | :------- | :----- | :------- | :----------------- |
| case      | object |          |        |          | 用例库中的测试用例 |
| plan_uuid | string | len=8    |        |          | 测试计划 uuid      |
| executor  | string | len=8    |        |          | 用例执行人 uuid    |
| result    | string |          |        |          | 用例执行结果       |
| note      | string |          |        |          | 用例执行结果备注   |
| warn_step      | string |    len=8      |        |          | 异常步骤uuid   |

### 用例执行结果枚举

result

| 枚举值  | 说明   |
| :------ | :----- |
| to_do   | 未执行 |
| passed  | 通过   |
| failed  | 不通过 |
| blocked | 阻塞   |
| skipped | 跳过   |

## API 说明

### 1. 创建测试计划

创建一个测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plans/add

#### HTTP Method

POST

#### 调用权限

manage_plans

#### 传值方式

JSON

#### 参数列表

| 参数名                        | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明           |
| :---------------------------- | :----- | :------- | :------- | :----- | :------- | :------------- |
| plan                          | object | F        |          |        |          |                |
| &emsp;name                    | string | F        | len<=32  |        |          | 计划名称       |
| &emsp;stage                   | string | F        |          |        |          | 测试阶段       |
| &emsp;members                 | array  | T        |          |        |          | 参与测试的人员 |
| &emsp;&emsp;user_domain_type  | string | F        |          |        |          | 用户域类型     |
| &emsp;&emsp;user_domain_param | string | F        |          |        |          | 用户域参数     |
| &emsp;related_project_uuid | string | T        |          |        |          | 关联项目uuid     |
| &emsp;related_sprint_uuid | string | T        |          |        |          | 关联迭代uuid     |
| &emsp;related_issue_type_uuid | string | T        |          |        |          | 缺陷对应任务类型uuid     |
| &emsp;check_points             | array | T    | T    | 属性配置             |
| &emsp;&emsp;case_result | string | T        |          |        |          | 目标状态  （passed 通过、failed 失败、blocked 阻塞、skipped 跳过）  |
| &emsp;&emsp;check_point | string | T        |          |        |          | 开始状态   （note 备注、file 文件）  |
| &emsp;&emsp;is_must | bool | T        |          |        |          | 是否必填     |
| is_update_default_config                          | bool | T        |          |        |          |   是否更新关联项目默认配置             |

#### 返回的HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                 |
| :----- | :----- | :------- | :----- | :------- | :------------------- |
| plan   | object |          |        |          | 参考顶端测试计划模型 |

#### Body示例

```json
{
  "plan": {
    "name": "新建测试计划",
    "assigns": [
      "DfmzE9mU"
    ],
    "members": [
      {
        "user_domain_type": "testcase_plan_assign",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "testcase_administrators",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "role",
        "user_domain_param": "NeQBPnGj"
      }
    ],
    "related_project_uuid": "Pqmud3zhMshoBOOV",
    "plan_stage": "Kwvsjh7K",
    "related_sprint_uuid": "Xj4x6BMT",
    "related_issue_type_uuid": "4sBPV4Eh",
    "check_points": [
      {
        "case_result": "blocked",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "blocked",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "skipped",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "skipped",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "passed",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "passed",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "failed",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "failed",
        "check_point": "file",
        "is_must": false
      }
    ]
  },
  "is_update_default_config": true
}
```

#### 返回参数

```json
{
  "plan": {
    "uuid": "B2i922WP",
    "owner": "Pqmud3zh",
    "name": "新建测试计划2",
    "plan_stage": "Kwvsjh7K",
    "status": "DnXCmavU",
    "create_time": 1627033567,
    "members": [
      {
        "user_domain_type": "testcase_plan_assign",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "testcase_administrators",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "role",
        "user_domain_param": "NeQBPnGj"
      }
    ],
    "related_project_uuid": "Pqmud3zhMshoBOOV",
    "related_sprint_uuid": "Xj4x6BMT",
    "related_issue_type_uuid": "4sBPV4Eh",
    "assigns": [
      "DfmzE9mU"
    ],
    "todo_case_count": 0,
    "passed_case_count": 0,
    "failed_case_count": 0,
    "blocked_case_count": 0,
    "skipped_case_count": 0,
    "report_uuids": null,
    "field_values": null,
    "issue_tracing_config": null,
    "check_points": [
      {
        "case_result": "blocked",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "blocked",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "skipped",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "skipped",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "passed",
        "check_point": "file",
        "is_must": false
      },
      {
        "case_result": "passed",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "failed",
        "check_point": "note",
        "is_must": false
      },
      {
        "case_result": "failed",
        "check_point": "file",
        "is_must": false
      }
    ]
  },
  "server_update_stamp": 1627033567097808
}
```

### 2. 修改测试计划

修改一个测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/update

#### HTTP Method

POST

#### 调用权限

同时有 manage_plans 和 manage_plan_cases，即必须先能看到测试计划才能修改

#### 传值方式

JSON

#### 参数列表

| 参数名                        | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明           |
| :---------------------------- | :----- | :------- | :------- | :----- | :------- | :------------- |
| plan                          | object | F        |          |        |          |                |
| &emsp;name                    | string | F        | len<=32  |        |          | 计划名称       |
| &emsp;stage                   | string | F        |          |        |          | 测试阶段       |
| &emsp;plan_status                   | int | F        |          |        |          | 1未开始 2进行中 3已完成       |
| &emsp;members                 | array  | T        |          |        |          | 参与测试的人员 |
| &emsp;&emsp;user_domain_type  | string | F        |          |        |          | 用户域类型     |
| &emsp;&emsp;user_domain_param | string | F        |          |        |          | 用户域参数     |
| &emsp;related_project_uuid | string | T        |          |        |          | 关联项目uuid     |
| &emsp;related_sprint_uuid | string | T        |          |        |          | 关联迭代uuid     |
| &emsp;related_issue_type_uuid | string | T        |          |        |          | 缺陷对应任务类型uuid     |
| &emsp;check_points             | array | T    | T    | 属性配置             |
| &emsp;&emsp;case_result | string | T        |          |        |          | 目标状态  （passed 通过、failed 失败、blocked 阻塞、skipped 跳过）  |
| &emsp;&emsp;check_point | string | T        |          |        |          | 开始状态   （note 备注、file 文件）  |
| &emsp;&emsp;is_must | bool | T        |          |        |          | 是否必填     |
| is_update_default_config                          | bool | T        |          |        |          |   是否更新关联项目默认配置             |

#### 返回的HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                 |
| :----- | :----- | :------- | :----- | :------- | :------------------- |
| plan   | object |          |        |          | 参考顶端测试计划模型 |


### 3. 删除测试计划

删除一个测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/delete

#### 调用权限

同时有 manage_plans 和 manage_plan_cases，即必须先能看到测试计划才能删除

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无


#### 返回值参考

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```


### 4. 获取测试计划列表


#### URL

https://your-host-name/project/api/project/team/团队UUID/items/graphql

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无

#### Body示例

```json
{
    "query": "query QUERY_TESTPLAN_LIST{\n  testcasePlans(\n    filter: $planFilter,\n    orderBy:{\n      namePinyin:ASC,\n    }\n  ){\n    key,\n    uuid,\n    owner{\n      uuid,\n      name\n    },\n    planReports {\n      uuid\n      name\n    },\n    name,\n    namePinyin,\n    createTime,\n    status {\n      name\n      category\n    }\n    members {\n      type,\n      param\n    },\n    planStage {\n      value\n    }\n    relatedProject{\n      key,\n      uuid,\n      namePinyin,\n    },\n    relatedSprint{\n      key,\n      uuid,\n      namePinyin,\n    },\n    relatedIssueType{\n      key,\n      uuid,\n      name,\n      namePinyin\n    },\n    todoCaseCount,\n    passedCaseCount,\n    blockedCaseCount,\n    skippedCaseCount,\n    failedCaseCount,\n    assigns {\n      uuid,\n      name\n    }\n    isSample\n    _QnguNtYs\n  }\n}",
    "variables": {}
}
```

#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :----- | :----- | :------- | :----- | :------- | :----------------------------------- |
| plans  | array  |          |        |          | 测试计划列表，参考顶端的测试计划模型 |

#### 返回值参考

```json
{
    "data": {
        "testcasePlans": [
            {
                "_QnguNtYs": null,
                "assigns": [
                    {
                        "name": "Going Merry",
                        "uuid": "Tm8Qsdib"
                    }
                ],
                "blockedCaseCount": 0,
                "createTime": 1623126626,
                "failedCaseCount": 0,
                "isSample": false,
                "key": "testcase_plan-9iqeEdYj",
                "members": [
                    {
                        "param": "",
                        "type": "testcase_plan_assign"
                    },
                    {
                        "param": "",
                        "type": "testcase_administrators"
                    },
                    {
                        "param": "",
                        "type": "role"
                    }
                ],
                "name": "aaa",
                "namePinyin": "aaa",
                "owner": {
                    "name": "i cecream",
                    "uuid": "Pqmud3zh"
                },
                "passedCaseCount": 1,
                "planReports": [],
                "planStage": {
                    "value": "冒烟测试"
                },
                "relatedIssueType": {
                    "key": "issue_type-4sBPV4Eh",
                    "name": "缺陷",
                    "namePinyin": "que1xian4",
                    "uuid": "4sBPV4Eh"
                },
                "relatedProject": {
                    "key": "project-Pqmud3zhEsFnkYZK",
                    "namePinyin": "14.shi2tian1xia4jiang1luan4wei4luan4,zhong1ri4zhan4zheng1yi1chu4ji2fa1,yu4lai2defeng1yu3huan4xing3lechen2shui4bai3nian2dejiang1shi1zhong1deji2pin3,shen2mi4mo4ce4dejiang1shi1wang2jiang1chen2",
                    "uuid": "Pqmud3zhEsFnkYZK"
                },
                "relatedSprint": null,
                "skippedCaseCount": 0,
                "status": {
                    "category": "to_do",
                    "name": "未开始"
                },
                "todoCaseCount": 5,
                "uuid": "9iqeEdYj"
            },
            {
                "_QnguNtYs": null,
                "assigns": [
                    {
                        "name": "i cecream",
                        "uuid": "Pqmud3zh"
                    }
                ],
                "blockedCaseCount": 0,
                "createTime": 1617161133,
                "failedCaseCount": 0,
                "isSample": false,
                "key": "testcase_plan-AQ9AbkGn",
                "members": [
                    {
                        "param": "",
                        "type": "testcase_plan_assign"
                    },
                    {
                        "param": "",
                        "type": "testcase_administrators"
                    }
                ],
                "name": "这是new测试计划",
                "namePinyin": "zhe4shi4newce4shi4ji4hua4",
                "owner": {
                    "name": "i cecream",
                    "uuid": "Pqmud3zh"
                },
                "passedCaseCount": 3,
                "planReports": [],
                "planStage": {
                    "value": "冒烟测试"
                },
                "relatedIssueType": null,
                "relatedProject": null,
                "relatedSprint": null,
                "skippedCaseCount": 0,
                "status": {
                    "category": "to_do",
                    "name": "未开始"
                },
                "todoCaseCount": 1,
                "uuid": "AQ9AbkGn"
            }
        ]
    }
}
```

### 5. 在测试计划中添加用例

在测试计划中批量添加用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/add

#### HTTP Method

POST

#### 调用权限

manage_plan_cases

#### 传值方式

JSON

#### 参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :------------- | :----- | :------- | :------- | :----- | :------- | :--------------- |
| case_uuids          | string array  | F        |          |        |          | 要关联的用例列表         |

#### Body示例

```json
{
    "case_uuids": [
        "36B9ztJE",
        "XsxrqQJS"
    ]
}
```



#### 返回值参考

```json
{
    "success_cases": [
        "36B9ztJE",
        "XsxrqQJS"
    ],
    "not_found_cases": [],
    "no_permission_cases": [],
    "not_handle_cases": [],
    "not_found_cases_object": [],
    "no_permission_cases_object": [],
    "not_handle_cases_object": []
}
```



### 6. 修改测试计划用例

批量修改测试计划中的用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/update

#### HTTP Method

POST

#### 调用权限

manage_plan_cases

#### 传值方式

JSON

#### 参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :------------- | :----- | :------- | :------- | :----- | :------- | :--------------- |
| cases          | array  | F        |          |        |          | 用例列表         |
| &emsp;uuid     | string | F        | len=8    |        |          | 用例 uuid        |
| &emsp;executor | string | T        | len=8    |        |          | 用例执行人 uuid  |
| &emsp;result   | string | T        |          |        |          | 用例执行结果     |
| &emsp;note     | string | T        |          |        |          | 用例执行结果备注 |
| &emsp;warn_step     | string | T        |          |        |          | 异常步骤uuid |

#### 返回的HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :----- | :----- | :------- | :----- | :------- | :----------------------- |
| cases  | array  |          |        |          | 参考顶端测试计划用例模型 |


### 7. 删除测试计划用例

批量删除测试计划用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/delete

### 调用权限

manage_plan_cases

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

| 参数名     | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明           |
| :--------- | :----- | :------- | :------- | :----- | :------- | :------------- |
| case_uuids | array  | F        |          |        |          | 用例 uuid 列表 |

##### Body示例

```json
{
    "case_uuids": [
        "Rsk8872g",
        "A2z3vg4t"
    ]
}
```

#### 返回值参考

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```


### 8. 将测试计划中的用例复制到另一个计划

将测试计划中的用例复制到另一个计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/copy

#### HTTP Method

POST

#### 调用权限

同时有原计划和目标计划的 manage_plan_cases 权限

#### 传值方式

JSON

#### 参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                   |
| :----------- | :----- | :------- | :------- | :----- | :------- | :--------------------- |
| to_plan_uuid | string | F        |          |        |          | 目标计划 uuid          |
| case_uuids   | array  | F        |          |        |          | 要复制的用例 uuid 列表 |


#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                         |
| :----- | :----- | :------- | :----- | :------- | :--------------------------- |
| cases  | array  |          |        |          | 执行复制后目标计划的用例列表 |


### 9. 获取测试计划中的用例

列出测试计划中用户能够看到的用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases

#### HTTP Method

GET

#### 调用权限

manage_plan_cases

#### 传值方式

URL

#### 参数列表

无


#### 返回JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :----- | :----- | :------- | :----- | :------- | :--------------- |
| cases  | array  |          |        |          | 测试计划用例列表 |

#### 返回值参考

```json
{
  "cases": [
    {
      "uuid": "Fnrryuaf",
      "library_uuid": "GGkqYpWo",
      "module_uuid": "THmjrerD",
      "path": "THmjrerD-Fnrryuaf",
      "name": "登出测试",
      "priority": "8R2FErfu",
      "type": "KFzDaHGL",
      "assign": "4Y5qoeuL",
      "desc": "",
      "create_time": 1635319682,
      "number": 8,
      "condition": "",
      "steps": [],
      "name_pinyin": "deng1chu1ce4shi4",
      "plan_uuid": "HoGJ9o8V",
      "executor": "4Y5qoeuL",
      "result": "blocked",
      "note": "",
      "related_tasks": [
        {
          "uuid": "4Y5qoeuLu5GGyHjb",
          "summary": "测试任务",
          "number": 176,
          "status_uuid": "J4vGJaax",
          "readable": true,
          "project_uuid": "4Y5qoeuLWQMOXW6a"
        }
      ]
    },
    {
      "uuid": "6zA4MHp7",
      "library_uuid": "GGkqYpWo",
      "module_uuid": "THmjrerD",
      "path": "THmjrerD-6zA4MHp7",
      "name": "登录测试",
      "priority": "8R2FErfu",
      "type": "KFzDaHGL",
      "assign": "4Y5qoeuL",
      "desc": "",
      "create_time": 1635319682,
      "number": 7,
      "condition": "",
      "steps": [],
      "name_pinyin": "deng1lu4ce4shi4",
      "plan_uuid": "HoGJ9o8V",
      "executor": "4Y5qoeuL",
      "result": "passed",
      "note": "",
      "related_tasks": [
        {
          "uuid": "4Y5qoeuLu5GGyHjb",
          "summary": "测试任务",
          "number": 176,
          "status_uuid": "J4vGJaax",
          "readable": true,
          "project_uuid": "4Y5qoeuLWQMOXW6a"
        }
      ]
    }
  ],
  "server_update_stamp": 1635403229483504
}
```

