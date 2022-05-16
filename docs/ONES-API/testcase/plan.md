<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [通用说明](#通用说明)
  - [测试计划](#测试计划)
  - [测试阶段枚举](#测试阶段枚举)
  - [测试计划用例](#测试计划用例)
  - [用例执行结果枚举](#用例执行结果枚举)
- [API 说明](#api-%E8%AF%B4%E6%98%8E)
  - [1. 创建测试计划](#1-创建测试计划)
  - [2. 修改测试计划](#2-修改测试计划)
  - [3. 删除测试计划](#3-删除测试计划)
  - [4. 获取测试计划列表](#4-获取用户有权限查看的测试计划列表)
  - [5. 在测试计划中添加用例](#5-在测试计划中添加用例)
  - [6. 修改测试计划用例](#6-修改测试计划用例)
  - [7. 删除测试计划用例](#7-删除测试计划用例)
  - [8. 将测试计划中的用例复制到另一个计划](#8-将测试计划中的用例复制到另一个计划)
  - [9. 获取测试计划中的用例](#9-获取测试计划中的用例)

<!-- /TOC -->

# 通用说明

## 测试计划

plan

| 参数名                  | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                       |
| :---------------------- | :----- | :------- | :----- | :------- | :------------------------- |
| uuid                    | string | len=8    |        |          | 计划 uuid                  |
| owner                   | string | len=8    |        |          | 计划创建者 uuid            |
| create_time             | int64  |          |        |          | 计划创建时间（秒)          |
| name                    | string | len<=32  |        |          | 计划名称                   |
| stage                   | string |          |        |          | 测试阶段                   |
| plan_status             | int    |          |        |          | 1 未开始 2 进行中 3 已完成 |
| members                 | array  |          |        |          | 参与测试的人员             |
| &emsp;user_domain_type  | string |          |        |          | 用户域类型                 |
| &emsp;user_domain_param | string |          |        |          | 用户域参数                 |
| related_project_uuid    | string | len=16   |        |          | 关联项目 uuid              |
| related_sprint_uuid     | string | len=8    |        |          | 关联迭代 uuid              |
| related_issue_type_uuid | string | len=8    |        |          | 关联任务类型 uuid          |

## 测试阶段枚举

stage

| 枚举值      | 说明     |
| :---------- | :------- |
| smoke       | 冒烟测试 |
| unit        | 单元测试 |
| functional  | 功能测试 |
| integration | 集成测试 |
| system      | 系统测试 |
| validation  | 版本验证 |

暂时没有，但以后可能会加的

| 枚举值       | 说明       |
| :----------- | :--------- |
| performance  | 性能测试   |
| stress       | 压力测试   |
| usability    | 可用性测试 |
| regression   | 回归测试   |
| verification | 需求验证   |

## 测试计划用例

plan_case

| 参数名    | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明               |
| :-------- | :----- | :------- | :----- | :------- | :----------------- |
| case      | object |          |        |          | 用例库中的测试用例 |
| plan_uuid | string | len=8    |        |          | 测试计划 uuid      |
| executor  | string | len=8    |        |          | 用例执行人 uuid    |
| result    | string |          |        |          | 用例执行结果       |
| note      | string |          |        |          | 用例执行结果备注   |
| warn_step | string | len=8    |        |          | 异常步骤 uuid      |

## 用例执行结果枚举

result

| 枚举值  | 说明   |
| :------ | :----- |
| to_do   | 未执行 |
| passed  | 通过   |
| failed  | 不通过 |
| blocked | 阻塞   |
| skipped | 跳过   |

# API 说明

## 1. 创建测试计划

创建一个测试计划

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plans/add

### HTTP Method

POST

### 调用权限

manage_plans

### 传值方式

JSON

### 参数列表

| 参数名                        | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :---------------------------- | :----- | :------- | :------- | :----- | :------- | :----------------------- |
| plan                          | object | F        |          |        |          |                          |
| &emsp;name                    | string | F        | len<=32  |        |          | 计划名称                 |
| &emsp;stage                   | string | F        |          |        |          | 测试阶段                 |
| &emsp;members                 | array  | T        |          |        |          | 参与测试的人员           |
| &emsp;&emsp;user_domain_type  | string | F        |          |        |          | 用户域类型               |
| &emsp;&emsp;user_domain_param | string | F        |          |        |          | 用户域参数               |
| &emsp;related_project_uuid    | string | T        |          |        |          | 关联项目 uuid            |
| &emsp;related_sprint_uuid     | string | T        |          |        |          | 关联迭代 uuid            |
| &emsp;related_issue_type_uuid | string | T        |          |        |          | 缺陷对应任务类型 uuid    |
| is_update_default_config      | bool   | T        |          |        |          | 是否更新关联项目默认配置 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                 |
| :----- | :----- | :------- | :----- | :------- | :------------------- |
| plan   | object |          |        |          | 参考顶端测试计划模型 |

## 2. 修改测试计划

修改一个测试计划

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/update

### HTTP Method

POST

### 调用权限

同时有 manage_plans 和 manage_plan_cases，即必须先能看到测试计划才能修改

### 传值方式

JSON

### 参数列表

| 参数名                        | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                       |
| :---------------------------- | :----- | :------- | :------- | :----- | :------- | :------------------------- |
| plan                          | object | F        |          |        |          |                            |
| &emsp;name                    | string | F        | len<=32  |        |          | 计划名称                   |
| &emsp;stage                   | string | F        |          |        |          | 测试阶段                   |
| &emsp;plan_status             | int    | F        |          |        |          | 1 未开始 2 进行中 3 已完成 |
| &emsp;members                 | array  | T        |          |        |          | 参与测试的人员             |
| &emsp;&emsp;user_domain_type  | string | F        |          |        |          | 用户域类型                 |
| &emsp;&emsp;user_domain_param | string | F        |          |        |          | 用户域参数                 |
| &emsp;related_project_uuid    | string | T        |          |        |          | 关联项目 uuid              |
| &emsp;related_sprint_uuid     | string | T        |          |        |          | 关联迭代 uuid              |
| &emsp;related_issue_type_uuid | string | T        |          |        |          | 缺陷对应任务类型 uuid      |
| is_update_default_config      | bool   | T        |          |        |          | 是否更新关联项目默认配置   |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                 |
| :----- | :----- | :------- | :----- | :------- | :------------------- |
| plan   | object |          |        |          | 参考顶端测试计划模型 |

## 3. 删除测试计划

删除一个测试计划

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/delete

### 调用权限

同时有 manage_plans 和 manage_plan_cases，即必须先能看到测试计划才能删除

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

无

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息失效 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

无

## 4. 获取用户有权限查看的测试计划列表

获取用户有权限查看的测试计划列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plans

### HTTP Method

GET

### 调用权限

无，但返回的列表根据 manage_plan_cases 权限过滤

### 传值方式

URL

### 参数列表

无

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 401    | 登录信息失效 |
| 500    | 服务器错误   |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :----- | :----- | :------- | :----- | :------- | :----------------------------------- |
| plans  | array  |          |        |          | 测试计划列表，参考顶端的测试计划模型 |

## 5. 在测试计划中添加用例

在测试计划中批量添加用例

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/add

### HTTP Method

POST

### 调用权限

manage_plan_cases

### 传值方式

JSON

### 参数列表

| 参数名     | 值类型       | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :--------- | :----------- | :------- | :------- | :----- | :------- | :--------------- |
| case_uuids | string array | F        |          |        |          | 要关联的用例列表 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :----- | :----- | :------- | :----- | :------- | :----------------------- |
| cases  | array  |          |        |          | 参考顶端测试计划用例模型 |

## 6. 修改测试计划用例

批量修改测试计划中的用例

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/update

### HTTP Method

POST

### 调用权限

manage_plan_cases

### 传值方式

JSON

### 参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :-------------- | :----- | :------- | :------- | :----- | :------- | :--------------- |
| cases           | array  | F        |          |        |          | 用例列表         |
| &emsp;uuid      | string | F        | len=8    |        |          | 用例 uuid        |
| &emsp;executor  | string | T        | len=8    |        |          | 用例执行人 uuid  |
| &emsp;result    | string | T        |          |        |          | 用例执行结果     |
| &emsp;note      | string | T        |          |        |          | 用例执行结果备注 |
| &emsp;warn_step | string | T        |          |        |          | 异常步骤 uuid    |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                     |
| :----- | :----- | :------- | :----- | :------- | :----------------------- |
| cases  | array  |          |        |          | 参考顶端测试计划用例模型 |

## 7. 删除测试计划用例

批量删除测试计划用例

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/delete

### 调用权限

manage_plan_cases

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

| 参数名     | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明           |
| :--------- | :----- | :------- | :------- | :----- | :------- | :------------- |
| case_uuids | array  | F        |          |        |          | 用例 uuid 列表 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息失效 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

无

## 8. 将测试计划中的用例复制到另一个计划

将测试计划中的用例复制到另一个计划

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases/copy

### HTTP Method

POST

### 调用权限

同时有原计划和目标计划的 manage_plan_cases 权限

### 传值方式

JSON

### 参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                   |
| :----------- | :----- | :------- | :------- | :----- | :------- | :--------------------- |
| to_plan_uuid | string | F        |          |        |          | 目标计划 uuid          |
| case_uuids   | array  | F        |          |        |          | 要复制的用例 uuid 列表 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                         |
| :----- | :----- | :------- | :----- | :------- | :--------------------------- |
| cases  | array  |          |        |          | 执行复制后目标计划的用例列表 |

## 9. 获取测试计划中的用例

列出测试计划中用户能够看到的用例

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/plan/:planUUID/cases

### HTTP Method

GET

### 调用权限

manage_plan_cases

### 传值方式

URL

### 参数列表

无

### 返回的 HTTP status code

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 401    | 登录信息失效 |
| 500    | 服务器错误   |

### 返回 JSON

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :----- | :----- | :------- | :----- | :------- | :--------------- |
| cases  | array  |          |        |          | 测试计划用例列表 |
