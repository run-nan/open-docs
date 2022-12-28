# 用户组管理

- [通用说明](#通用说明)
  - [用户域模型](#用户域模型)
    - [用户域取值范围](#用户域取值范围)
  - [用户组模型](#用户组模型)
    - [usergroup](#usergroup)
  - [必要 header](#必要header)
- [API 说明](#api-说明)
  - [获取用户组列表](#获取用户组列表)
  - [创建用户组](#创建用户组)
  - [修改用户组](#修改用户组)
  - [删除用户组](#删除用户组)

## 通用说明

### 用户域模型

| 参数名            | 是否必须 | 值类型 | 取值范围 | 说明       |
| :---------------- | :------- | :----- | :------- | :--------- |
| user_domain_type  | 是       | string | 下方说明 | 用户域类型 |
| user_domain_param | 是       |        | 下方说明 | 用户域参数 |

#### 用户域取值范围

| type                    | param 值 | param 说明                                         |
| :---------------------- | :------- | :------------------------------------------------- |
| single_user             | string   | 用户 uuid                                          |
| group                   | string   | 用户组 uuid                                        |
| department              | string   | 部门 uuid                                          |
| everyone                | 不需要   | 团队内所有用户                                     |
| task_watchers           | 不需要   | 任务关注者                                         |
| project_administrators  | 不需要   | 项目管理员，即拥有当前项目 manage_project 权限的人 |
| team_owner              | 不需要   | 团队创建者                                         |
| role                    | string   | 角色 uuid                                          |
| task_owner              | 不需要   | 任务创建者                                         |
| task_assign             | 不需要   | 任务负责人                                         |
| testcase_administrators | 不需要   | testcase 管理员                                    |
| project_assign          | 不需要   | 项目负责人                                         |
| testcase_plan_assign    | 不需要   |                                                    |
| plan_administrators     | 不需要   | plan 管理员                                        |
| program_assign          | 不需要   | 项目集负责人                                       |
| program_role            | string   | 项目集角色 uuid                                    |

### 用户组模型

#### usergroup

| 参数名  | 值类型 | 允许空值 | 取值范围  | 说明                         |
| :------ | :----- | :------- | :-------- | :--------------------------- |
| uuid    | string | F        | len=8     | 用户组 uuid                  |
| name    | string | T        | len<=32   | 用户组名称                   |
| desc    | string | T        | len<=1024 | 用户组描述                   |
| members | array  | T        |           | 用户组中包含的用户 uuid 列表 |

### 必要 header

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明                         |
| :-------------- | :----- | :------- | :------- | :--------------------------- |
| Ones-User-Id    | string | F        | len=8    | 用户 id，可在登录接口获取    |
| Ones-Auth-Token | string | F        | len=32   | 用户 token，可在登录接口获取 |

## API 说明

### 获取用户组列表

列出当前团队下的所有用户组

#### URL

https://your-host-name/project/api/project/team/:teamUUID/usergroups

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

无

#### 传值方式

URL

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值                    | 说明                                     |
| :------------------ | :----- | :---------------------- | :--------------------------------------- |
| groups              | array  | [usergroup](#usergroup) | 用户组列表，参考顶端用户组               |
| server_update_stamp | int64  | int64                   | 用户组信息更新时间戳模型，使用纳秒为单位 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/BDfDqJU7/usergroups \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "groups": [
    {
      "uuid": "DMUywgGM",
      "name": "测试组",
      "name_pinyin": "ce4shi4zu3",
      "desc": "测试小组",
      "create_time": 0,
      "members": ["UPuyjJtZ"]
    }
  ],
  "server_update_stamp": 1669620426197606
}
```

### 创建用户组

创建一个用户组

#### URL

https://your-host-name/project/api/project/team/:teamUUID/usergroups/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

参考顶端的用户组模型中的[usergroup](#usergroup)，但不需要提供 uuid

#### 返回参数列表

| 参数名              | 值类型 | 取值范围  | 说明                         |
| :------------------ | :----- | :-------- | :--------------------------- |
| uuid                | string | len=8     | 用户组 uuid                  |
| name                | string | len<=32   | 用户组名称                   |
| desc                | string | len<=1024 | 用户组描述                   |
| server_update_stamp | int64  |           | 用户组信息更新时间戳         |
| members             | array  |           | 用户组中包含的用户 uuid 列表 |

#### 请求示例

```curl
curl --location --request POST 'http://your-host-name/project/api/project/team/CY6Xcyv2/usergroups/add' \
--header 'Ones-User-Id: UPuyjJtZ' \
--header 'Ones-Auth-Token: 7kSDetESVDFsTavnaHprr6pVQvxYuVUKAPRC3sKWupaqRyHjVrekZLOhJNnYVkYl' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "测试组",
    "desc": "测试小组",
    "members": [
        "UPuyjJtZ"
    ]
}'
```

#### 返回示例

```json
{
  "uuid": "DMUywgGM",
  "name": "测试组",
  "name_pinyin": "ce4shi4zu3",
  "desc": "测试小组",
  "create_time": 1669620426197825,
  "members": ["UPuyjJtZ"],
  "server_update_stamp": 1669620426197606
}
```

### 修改用户组

修改一个用户组

#### URL

https://your-host-name/project/api/project/team/:teamUUID/usergroup/:usergroupUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

参考顶端的用户组模型中的[usergroup](#usergroup)

#### 返回参数列表

| 参数名              | 值类型 | 取值范围  | 说明                         |
| :------------------ | :----- | :-------- | :--------------------------- |
| uuid                | string | len=8     | 用户组 uuid                  |
| name                | string | len<=32   | 用户组名称                   |
| desc                | string | len<=1024 | 用户组描述                   |
| server_update_stamp | int64  |           | 用户组信息更新时间戳         |
| members             | array  |           | 用户组中包含的用户 uuid 列表 |

#### 请求示例

```curl
curl --location --request POST 'http://your-host-name/project/api/project/team/CY6Xcyv2/usergroup/DMUywgGM/update' \
--header 'Ones-User-Id: UPuyjJtZ' \
--header 'Ones-Auth-Token: 7kSDetESVDFsTavnaHprr6pVQvxYuVUKAPRC3sKWupaqRyHjVrekZLOhJNnYVkYl' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "研发组",
    "desc": "研发小组",
    "members": [
        "UPuyjJtZ"
    ]
}'
```

#### 返回示例

```json
{
  "uuid": "DMUywgGM",
  "name": "研发组",
  "name_pinyin": "yan2fa1zu3",
  "desc": "研发小组",
  "create_time": 1669620426197825,
  "members": ["UPuyjJtZ"],
  "server_update_stamp": 1669622060749448
}
```

### 删除用户组

删除一个用户组

#### URL

https://your-host-name/project/api/project/team/:teamUUID/usergroup/:usergroupUUID/delete

#### 调用权限

administer_do

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                 |
| :------------------ | :----- | :------- | :------------------- |
| server_update_stamp | int64  |          | 用户组信息更新时间戳 |

#### 请求示例

```curl
curl --location --request POST 'http://your-host-name/project/api/project/team/CY6Xcyv2/usergroup/DMUywgGM/delete' \
--header 'Ones-User-Id: UPuyjJtZ' \
--header 'Ones-Auth-Token: 7kSDetESVDFsTavnaHprr6pVQvxYuVUKAPRC3sKWupaqRyHjVrekZLOhJNnYVkYl' \
--header 'Content-Type: application/json' \
```

#### 返回示例

```json
{
  "server_update_stamp": 1669622199741978
}
```
