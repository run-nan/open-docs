# ONES TestCase Plan API

## model 说明

### error

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明             |
| :------ | :----- | :------- | :------- | :--------------- |
| code    | int    |          | 200      | 服务器更新时间戳 |
| errcode | string |          | "OK"     | 错误消息         |
| type    | string |          |          | 错误类型         |

### TestCasePlanPayload

| 参数名                  | 值类型                                    | 取值范围 | 默认值 | 取值例子 | 说明              |
| :---------------------- | :---------------------------------------- | :------- | :----- | :------- | :---------------- |
| uuid                    | string                                    | len=8    |        |          | 计划 uuid         |
| owner                   | string                                    | len=8    |        |          | 计划创建者 uuid   |
| name                    | string                                    | len<=32  |        |          | 计划名称          |
| plan_stage              | string                                    |          |        |          |                   |
| status                  | string                                    |          |        |          |                   |
| create_time             | int64                                     |          |        |          | 计划创建时间（秒) |
| members                 | [][userdomainpayload](#UserDomainPayload) |          |        |          | 参与测试的人员    |
| related_project_uuid    | string                                    | len=16   |        |          | 关联项目 uuid     |
| related_sprint_uuid     | string                                    | len=8    |        |          | 关联迭代 uuid     |
| related_issue_type_uuid | string                                    | len=8    |        |          | 关联任务类型 uuid |
| assigns                 | []string                                  |          |        |          |                   |
| todo_case_count         | int                                       |          |        |          |                   |
| passed_case_count       | int                                       |          |        |          |                   |
| failed_case_count       | int                                       |          |        |          |                   |
| blocked_case_count      | int                                       |          |        |          |                   |
| skipped_case_count      | int                                       |          |        |          |                   |
| report_uuids            | []string                                  |          |        |          |                   |
| field_values            | [][fieldrawvalue](#FieldRawValue)         |          |        |          |                   |
| issue_tracing_config    | IssueTracingConfigPayload                 |          |        |          |                   |
| check_points            | [][checkpoint](#CheckPoint)               |          |        |          |                   |

### UserDomainPayload

| 参数名            | 值类型 | 取值范围 | 取值例子 | 说明 |
| ----------------- | ------ | -------- | -------- | ---- |
| user_domain_type  | string |          |          |      |
| user_domain_param | string |          |          |      |

### CheckPoint

| 参数名      | 值类型 | 取值范围                         | 取值例子 | 说明 |
| ----------- | ------ | -------------------------------- | -------- | ---- |
| case_result | string | passed、failed、blocked、skipped |          |      |
| check_point | string | note、file                       |          |      |
| is_must     | bool   |                                  |          |      |

### IssueTracingConfigPayload

| 参数名           | 值类型 | 取值范围 | 取值例子 | 说明 |
| ---------------- | ------ | -------- | -------- | ---- |
| uuid             | string |          |          |      |
| column_config    | string |          |          |      |
| show_issue_track | bool   |          |          |      |

### FieldRawValue

| 参数名 | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------ | ------ | -------- | -------- | ---- |
| alias  | string |          |          |      |
| type   | string |          |          |      |
| value  | any    |          |          |      |

### SimpleCase

| 参数名 | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------ | ------ | -------- | -------- | ---- |
| name   | string |          |          |      |
| id_key | string |          |          |      |
| number | int    |          |          |      |
| id     | string |          |          |      |
| uuid   | string |          |          |      |

### TestCaseInPlanPayload

| 参数名        | 值类型                                        | 取值范围   | 取值例子 | 说明                                                |
| ------------- | --------------------------------------------- | ---------- | -------- | --------------------------------------------------- |
| uuid          | string                                        | len=8      |          | 随机 8 位字符                                       |
| library_uuid  | string                                        |            |          | 用例库 uuid                                         |
| module_uuid   | string                                        |            |          | 用例直属的模块 uuid                                 |
| path          | string                                        |            |          | 模块路径(module_uuid-sub_module_uuid-testcase_uuid) |
| name          | string                                        | len<=1024  |          | 用例名称                                            |
| priority      | string                                        |            |          | testcase 优先级                                     |
| type          | string                                        |            |          | 用例类型                                            |
| assign        | string                                        | len=8      |          | 维护人                                              |
| desc          | string                                        | len<=65536 |          | 用例描述                                            |
| create_time   | int64                                         |            |          | 用例创建时间，微秒                                  |
| id_key        | string                                        |            |          |                                                     |
| number        | int                                           |            |          | 用例编号                                            |
| id            | string                                        |            |          | 前置条件                                            |
| lib_name      | string                                        |            |          |                                                     |
| condition     | string                                        |            |          | 前置条件                                            |
| steps         | [][testcasesteppayload](#TestCaseStepPayload) |            |          | 用例操作步骤                                        |
| name_pinyin   | string                                        |            |          |                                                     |
| plan_uuid     | string                                        |            |          |                                                     |
| executor      | string                                        |            |          |                                                     |
| result        | string                                        |            |          |                                                     |
| note          | string                                        |            |          |                                                     |
| related_tasks | [][relatedtaskincase](#RelatedTaskInCase)     |            |          |                                                     |

### TestCaseStepPayload

| 参数名         | 值类型 | 取值范围 | 取值例子 | 说明      |
| -------------- | ------ | -------- | -------- | --------- |
| uuid           | string | len=8    |          |           |
| case_uuid      | string |          |          | 用例 uuid |
| desc           | string |          |          |           |
| result         | string |          |          |           |
| execute_result | string |          |          |           |
| actual_result  | string |          |          |           |

### RelatedTaskInCase

| 参数名       | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------------ | ------ | -------- | -------- | ---- |
| uuid         | string |          |          |      |
| case_uuid    | string |          |          |      |
| summary      | int    |          |          |      |
| number       | int    |          |          |      |
| status_uuid  | string |          |          |      |
| readable     | bool   |          |          |      |
| project_uuid | string |          |          |      |

### stage

| 枚举值      | 说明     |
| :---------- | :------- |
| smoke       | 冒烟测试 |
| unit        | 单元测试 |
| functional  | 功能测试 |
| integration | 集成测试 |
| system      | 系统测试 |
| validation  | 版本验证 |

### PlanCase

| 参数名    | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明               |
| :-------- | :----- | :------- | :----- | :------- | :----------------- |
| case      | object |          |        |          | 用例库中的测试用例 |
| plan_uuid | string | len=8    |        |          | 测试计划 uuid      |
| executor  | string | len=8    |        |          | 用例执行人 uuid    |
| result    | string |          |        |          | 用例执行结果       |
| note      | string |          |        |          | 用例执行结果备注   |
| warn_step | string | len=8    |        |          | 异常步骤 uuid      |

### result

| 枚举值  | 说明   |
| :------ | :----- |
| to_do   | 未执行 |
| passed  | 通过   |
| failed  | 不通过 |
| blocked | 阻塞   |
| skipped | 跳过   |

## API 说明

### 创建测试计划

创建一个测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plans/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名                   | 值类型              | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :----------------------- | :------------------ | :------- | :------- | :----- | :------- | :----------------------- |
| plan                     | TestCasePlanPayload | 否       |          |        |          |                          |
| is_update_default_config | bool                | 是       |          |        |          | 是否更新关联项目默认配置 |

#### 返回参数列表

| 参数名              | 值类型              | 取值范围 | 默认值 | 取值例子 | 说明 |
| :------------------ | :------------------ | :------- | :----- | :------- | :--- |
| plan                | TestCasePlanPayload |          |        |          |      |
| server_update_stamp | int64               |          |        |          |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plans/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"plan":{"name":"plan3","assigns":["BWxt3PAW"],"members":[{"user_domain_type":"testcase_administrators","user_domain_param":""},{"user_domain_type":"testcase_plan_assign","user_domain_param":""},{"user_domain_type":"single_user","user_domain_param":"BWxt3PAW"}],"related_project_uuid":null,"plan_stage":"Kb1QJHd9","related_sprint_uuid":null,"related_issue_type_uuid":null,"check_points":[]},"is_update_default_config":true}'
```

#### 返回示例

```json
{
  "plan": {
    "uuid": "KVC6mJvv",
    "owner": "BWxt3PAW",
    "name": "plan3",
    "plan_stage": "Kb1QJHd9",
    "status": "5HnVyD48",
    "create_time": 1570579945,
    "members": [
      {
        "user_domain_type": "testcase_administrators",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "testcase_plan_assign",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "single_user",
        "user_domain_param": "BWxt3PAW"
      }
    ],
    "related_project_uuid": null,
    "related_sprint_uuid": null,
    "related_issue_type_uuid": null,
    "assigns": ["BWxt3PAW"],
    "todo_case_count": 0,
    "passed_case_count": 0,
    "failed_case_count": 0,
    "blocked_case_count": 0,
    "skipped_case_count": 0,
    "report_uuids": null,
    "field_values": null,
    "issue_tracing_config": null,
    "check_points": []
  },
  "server_update_stamp": 1570579945439110
}
```

### 修改测试计划

修改测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名                   | 值类型              | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :----------------------- | :------------------ | :------- | :------- | :----- | :------- | :----------------------- |
| plan                     | TestCasePlanPayload | 否       |          |        |          |                          |
| is_update_default_config | bool                | 是       |          |        |          | 是否更新关联项目默认配置 |

#### 返回参数列表

| 参数名              | 值类型              | 取值范围 | 默认值 | 取值例子 | 说明 |
| :------------------ | :------------------ | :------- | :----- | :------- | :--- |
| plan                | TestCasePlanPayload |          |        |          |      |
| server_update_stamp | int64               |          |        |          |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/KVC6mJvv/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"plan":{"uuid":"KVC6mJvv","related_project_uuid":null,"related_sprint_uuid":null,"related_issue_type_uuid":null,"name":"plan34","assigns":["BWxt3PAW"],"members":[{"user_domain_type":"testcase_administrators","user_domain_param":""},{"user_domain_type":"testcase_plan_assign","user_domain_param":""},{"user_domain_type":"single_user","user_domain_param":"BWxt3PAW"}],"issue_tracing_config":{"uuid":"E3irKv8k","show_issue_track":false,"column_config":"[{\"column_type\":\"issue_type\",\"uuid\":\"N2S4a86i\"},{\"column_type\":\"testcase_result\"},{\"column_type\":\"issue_type\",\"uuid\":\"7q6PGsgz\"}]"}},"is_update_default_config":false}'
```

#### 返回示例

```json
{
  "plan": {
    "uuid": "KVC6mJvv",
    "owner": "BWxt3PAW",
    "name": "plan34",
    "plan_stage": "",
    "status": "5HnVyD48",
    "create_time": 1670579945,
    "members": [
      {
        "user_domain_type": "testcase_administrators",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "testcase_plan_assign",
        "user_domain_param": ""
      },
      {
        "user_domain_type": "single_user",
        "user_domain_param": "BWxt3PAW"
      }
    ],
    "related_project_uuid": null,
    "related_sprint_uuid": null,
    "related_issue_type_uuid": null,
    "assigns": ["BWxt3PAW"],
    "todo_case_count": 0,
    "passed_case_count": 0,
    "failed_case_count": 0,
    "blocked_case_count": 0,
    "skipped_case_count": 0,
    "report_uuids": null,
    "field_values": null,
    "issue_tracing_config": {
      "uuid": "7Fx1FPFr",
      "column_config": "[{\"column_type\":\"issue_type\",\"uuid\":\"N2S4a86i\"},{\"column_type\":\"testcase_result\"},{\"column_type\":\"issue_type\",\"uuid\":\"7q6PGsgz\"}]",
      "show_issue_track": false
    },
    "check_points": null
  },
  "server_update_stamp": 1670580031426432
}
```

### 删除测试计划

删除测试计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/delete

#### 是否需要登录

是

#### HTTP Method

POST

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/KVC6mJvv/delete' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取测试计划列表

获取用户有权限查看的测试计划列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plans

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型                                        | 取值范围 | 默认值 | 取值例子 | 说明 |
| :------------------ | :-------------------------------------------- | :------- | :----- | :------- | :--- |
| plans               | [][testcaseplanpayload](#TestCasePlanPayload) |          |        |          |      |
| server_update_stamp | int64                                         |          |        |          |      |

#### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plans' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "plans": [
    {
      "uuid": "5VN9Bfa8",
      "owner": "BWxt3PAW",
      "name": "plan2",
      "plan_stage": "Kb1QJHd9",
      "status": "5HnVyD48",
      "create_time": 1670579919,
      "members": [
        {
          "user_domain_type": "testcase_administrators",
          "user_domain_param": ""
        },
        {
          "user_domain_type": "testcase_plan_assign",
          "user_domain_param": ""
        },
        {
          "user_domain_type": "single_user",
          "user_domain_param": "BWxt3PAW"
        }
      ],
      "related_project_uuid": null,
      "related_sprint_uuid": null,
      "related_issue_type_uuid": null,
      "assigns": ["BWxt3PAW"],
      "todo_case_count": 0,
      "passed_case_count": 0,
      "failed_case_count": 0,
      "blocked_case_count": 0,
      "skipped_case_count": 0,
      "report_uuids": null,
      "field_values": null,
      "issue_tracing_config": {
        "uuid": "E3irKv8k",
        "column_config": "[{\"column_type\":\"issue_type\",\"uuid\":\"N2S4a86i\"},{\"column_type\":\"testcase_result\"},{\"column_type\":\"issue_type\",\"uuid\":\"7q6PGsgz\"}]",
        "show_issue_track": false
      },
      "check_points": null
    }
  ],
  "server_update_stamp": 1670580092325348
}
```

### 在测试计划中添加用例

在测试计划中批量添加用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型   | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :--------- | :------- | :------- | :------- | :----- | :------- | :--------------- |
| case_uuids | []string | 是       |          |        |          | 要关联的用例列表 |
| all        | bool     | 是       |          |        |          |                  |
| query      | string   | 是       |          |        |          | GraphQL 查询     |
| variables  | json     | 是       |          |        |          | GraphQL 查询变量 |

#### 返回参数列表

| 参数名                     | 值类型                      | 取值范围 | 默认值 | 取值例子 | 说明 |
| :------------------------- | :-------------------------- | :------- | :----- | :------- | :--- |
| success_cases              | []string                    |          |        |          |      |
| not_found_cases            | []string                    |          |        |          |      |
| no_permission_cases        | []string                    |          |        |          |      |
| not_handle_cases           | []string                    |          |        |          |      |
| not_found_cases_object     | [][simplecase](#SimpleCase) |          |        |          |      |
| no_permission_cases_object | [][simplecase](#SimpleCase) |          |        |          |      |
| not_handle_cases_object    | [][simplecase](#SimpleCase) |          |        |          |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/5VN9Bfa8/cases/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"case_uuids":["EoT96LiT"]}'
```

#### 返回示例

```json
{
  "success_cases": ["EoT96LiT"],
  "not_found_cases": [],
  "no_permission_cases": [],
  "not_handle_cases": [],
  "not_found_cases_object": [],
  "no_permission_cases_object": [],
  "not_handle_cases_object": []
}
```

### 修改测试计划用例

修改测试计划用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型                                            | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明     |
| :----- | :------------------------------------------------ | :------- | :------- | :----- | :------- | :------- |
| cases  | [][testcaseinplanpayload](#TestCaseInPlanPayload) | 否       |          |        |          | 用例列表 |

#### 返回参数列表

| 参数名                     | 值类型                      | 取值范围 | 默认值 | 取值例子 | 说明 |
| :------------------------- | :-------------------------- | :------- | :----- | :------- | :--- |
| success_cases              | []string                    |          |        |          |      |
| not_found_cases            | []string                    |          |        |          |      |
| no_permission_cases        | []string                    |          |        |          |      |
| not_handle_cases           | []string                    |          |        |          |      |
| not_found_cases_object     | [][simplecase](#SimpleCase) |          |        |          |      |
| no_permission_cases_object | [][simplecase](#SimpleCase) |          |        |          |      |
| not_handle_cases_object    | [][simplecase](#SimpleCase) |          |        |          |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/5VN9Bfa8/cases/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"cases":[{"uuid":"EoT96LiT","executor":"BWxt3PAW","note":"","result":"blocked","steps":[]}],"is_batch":false}'
```

#### 返回示例

```json
{
  "success_cases": ["EoT96LiT"],
  "not_found_cases": [],
  "no_permission_cases": [],
  "not_handle_cases": [],
  "not_found_cases_object": [],
  "no_permission_cases_object": [],
  "not_handle_cases_object": []
}
```

### 删除测试计划用例

删除测试计划用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/delete

#### 是否需要登录

是

#### HTTP Method

POST

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型   | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明           |
| :--------- | :------- | :------- | :------- | :----- | :------- | :------------- |
| case_uuids | []string | 否       |          |        |          | 用例 uuid 列表 |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/5VN9Bfa8/cases/delete' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"case_uuids":["EoT96LiT"]}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 将测试计划中的用例复制到另一个计划

将测试计划中的用例复制到另一个计划

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/copy

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名       | 值类型   | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                   |
| :----------- | :------- | :------- | :------- | :----- | :------- | :--------------------- |
| to_plan_uuid | string   | F        |          |        |          | 目标计划 uuid          |
| case_uuids   | []string | F        |          |        |          | 要复制的用例 uuid 列表 |

#### 返回参数列表

| 参数名              | 值类型                                            | 取值范围 | 默认值 | 取值例子 | 说明                         |
| :------------------ | :------------------------------------------------ | :------- | :----- | :------- | :--------------------------- |
| cases               | [][testcaseinplanpayload](#TestCaseInPlanPayload) |          |        |          | 执行复制后目标计划的用例列表 |
| server_update_stamp | int64                                             |          |        |          |                              |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/5VN9Bfa8/cases/copy' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"to_plan_uuid":"5wA1vsss","case_uuids":["EoT96LiT"]}'
```

#### 返回示例

```json
{
  "cases": [
    {
      "uuid": "EoT96LiT",
      "library_uuid": "G8f4GEWE",
      "module_uuid": "AdQkKCpH",
      "path": "HNcvXbWH-AdQkKCpH-EoT96LiT",
      "name": "订单可取消状态检查",
      "priority": "6ibNTRBd",
      "type": "LyCk7yci",
      "assign": "BWxt3PAW",
      "desc": "",
      "create_time": 1670581518,
      "id_key": "T",
      "number": 2,
      "id": "T2",
      "condition": "655",
      "steps": [],
      "name_pinyin": "ding4dan1ke3qu3xiao1zhuang4tai4jian3cha2",
      "plan_uuid": "5wA1vsss",
      "executor": "BWxt3PAW",
      "result": "to_do",
      "note": "",
      "related_tasks": [
        {
          "uuid": "BWxt3PAW4Q22ZKJc",
          "summary": "支持商家自主编辑、修改优惠券规则",
          "number": 5,
          "status_uuid": "TEX1yJAE",
          "readable": true,
          "project_uuid": "BWxt3PAWk79v5kbs"
        }
      ]
    }
  ],
  "server_update_stamp": 1670581518042344
}
```

### 获取测试计划中的用例

获取测试计划中的用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型                                            | 取值范围 | 默认值 | 取值例子 | 说明             |
| :------------------ | :------------------------------------------------ | :------- | :----- | :------- | :--------------- |
| cases               | [][testcaseinplanpayload](#TestCaseInPlanPayload) |          |        |          | 测试计划用例列表 |
| server_update_stamp | int64                                             |          |        |          |                  |

#### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/plan/5VN9Bfa8/cases' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "cases": [
    {
      "uuid": "EoT96LiT",
      "library_uuid": "G8f4GEWE",
      "module_uuid": "AdQkKCpH",
      "path": "HNcvXbWH-AdQkKCpH-EoT96LiT",
      "name": "订单可取消状态检查",
      "priority": "6ibNTRBd",
      "type": "LyCk7yci",
      "assign": "BWxt3PAW",
      "desc": "",
      "create_time": 1670581215,
      "id_key": "T",
      "number": 2,
      "id": "T2",
      "condition": "655",
      "steps": [],
      "name_pinyin": "ding4dan1ke3qu3xiao1zhuang4tai4jian3cha2",
      "plan_uuid": "5VN9Bfa8",
      "executor": "BWxt3PAW",
      "result": "to_do",
      "note": "",
      "related_tasks": null
    }
  ],
  "server_update_stamp": 1670581518042344
}
```
