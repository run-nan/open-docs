# 测试计划关联项目


- [testcase config model 说明](#testcase_config-model-说明)
- [API 说明](#api-说明)
    - [1. 修改关联项目配置](#1-修改关联项目配置)
    - [2. 添加默认成员](#2-添加默认成员)
    - [3. 删除默认成员](#3-删除默认成员)

## testcase_config model 说明

| 参数名| 值类型| 取值范围| 取值例子|说明|
| ------------------- | ------ | -------------------- | ---------- | ---------------------------- |
| team_uuid                | string | len=8               |            | 随机8位字符 |
| project_uuid                | string | len=16               |            |  |
| issue_type_uuid                | string | len=8               |            |  |
| members         | string array  |                      |            | 默认成员域           |
| &emsp;user_domain_type  | string |                        | 用户域类型        | | 
| &emsp;user_domain_param | string |                          | 用户域参数        | | |

## API 说明

### 1. 修改关联项目配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/config/update

#### HTTP Method

POST

#### 调用权限

administer_testcase

#### 传值方式

JSON

#### 参数列表

| 参数名               | 值类型 | 是否可以空 | 取值范围             | 取值例子   | 说明                         |
| -------------------- | ------ | ---------- | -------------------- | ---------- | ------------------- |
| issue_type_uuid                | string  | 否         |                      |            |             ||

#### 返回JSON

无

#### 返回的HTTP status code

| 状态码 | 说明     |
| :----- | :------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 2. 添加默认成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/default_members/add

#### HTTP Method

POST

#### 调用权限

administer_testcase

#### 传值方式

JSON

#### 参数列表

| 参数名               | 值类型 | 是否可以空 | 取值范围             | 取值例子   | 说明                         |
| -------------------- | ------ | ---------- | -------------------- | ---------- | ---------------------------- |
| user_domain_type                | string  | 否         |                      |   角色、用户组、部门、成员         |             |
| user_domain_param                | string  | 是         |                      |            |             ||

#### 返回JSON

无

#### 返回的HTTP status code

| 状态码 | 说明     |
| :----- | :------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 3. 删除默认成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/default_members/delete

#### HTTP Method

POST

#### 调用权限

administer_testcase

#### 传值方式

JSON

#### 参数列表

| 参数名               | 值类型 | 是否可以空 | 取值范围             | 取值例子   | 说明                         |
| -------------------- | ------ | ---------- | -------------------- | ---------- | ---------------------------- |
| user_domain_type                | string  | 否         |                      |        | 角色、用户组、部门、成员     |
| user_domain_param                | string  | 是         |                      |            |             ||

#### 返回JSON

无

#### 返回的HTTP status code

| 状态码 | 说明     |
| :----- | :------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |
