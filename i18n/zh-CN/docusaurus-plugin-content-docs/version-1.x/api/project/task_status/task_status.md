<!-- TOC depthTo:3 -->

# 目录

- [模型](#模型)
  - [工作项状态](#工作项状态)
  - [工作项状态分类列表](#工作项状态分类列表)
  - [工作项状态配置](#工作项状态配置)
- [API 说明](#api-说明)
  - [创建工作项状态](#创建工作项状态)
  - [修改工作项状态](#修改工作项状态)
  - [删除工作项状态](#删除工作项状态)
  - [获取工作项状态列表](#获取工作项状态列表)

<!-- /TOC -->

## 通用说明

### 模型

#### 工作项状态

task_status

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明                                                     |
| :---------- | :----- | :------- | :------- | :------------------------------------------------------- |
| uuid        | string | F        | len=8    | 工作项状态 uuid                                          |
| name        | string | F        | len<=32  | 工作项状态名称                                           |
| name_pinyin | string | F        | len<=256 | 工作项状态名称拼音                                       |
| category    | string | F        |          | 工作项状态分类                                           |
| built_in    | bool   | T        |          | 是否是系统内置工作项状态，内置工作项状态无法修改或者删除 |
| create_time | int    | T        |          | 工作项状态创建时间                                       |

#### 工作项状态分类列表

task_status_category

| 分类名      | 说明   |
| :---------- | :----- |
| to_do       | 未开始 |
| in_progress | 进行中 |
| done        | 已完成 |

### 工作项状态配置

task_status_config

- 工作项状态配置的有无决定工作项类型下工作项状态的有无，即添加一条工作项状态配置意味着在工作项类型下添加这个状态，删除一条工作项状态配置意味着在工作项类型下删除这个状态

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明               |
| :-------------- | :----- | :------- | :------- | :----------------- |
| project_uuid    | string | F        | len=16   | 项目 uuid          |
| issue_type_uuid | string | F        | len=8    | 工作项类型 uuid    |
| status_uuid     | string | F        | len=8    | 工作项状态 uuid    |
| default         | bool   | F        |          | 是否默认工作项状态 |
| position        | int64  | T        |          | 状态位置           |

## API 说明

### 创建工作项状态

创建一个工作项状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_statuses/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明                                                  |
| :---------- | :----- | :------- | :------- | :---------------------------------------------------- |
| task_status | object | F        |          | 参考顶端的工作项状态模型，但不需要提供工作项状态 uuid |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :------------------ | :----- | :------- | :------- | :----------------------------- |
| task_status         | object | F        |          | 参考顶端的工作项状态模型       |
| server_update_stamp | int64  | F        |          | task_status 类型的数据更新时间 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_statuses/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"task_status":{"name":"task_status_test","category":"to_do"}}'
```

#### 返回示例

```json
{
  "uuid": "KXPq1Ez8",
  "name": "task_status_test",
  "name_pinyin": "",
  "category": "to_do",
  "built_in": false,
  "create_time": 1566187791,
  "server_update_stamp": 1566187791079104
}
```

### 修改工作项状态

修改一个工作项状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_status/:taskStatusUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明                                                  |
| :---------- | :----- | :------- | :------- | :---------------------------------------------------- |
| task_status | object | F        |          | 参考顶端的工作项状态模型，但不需要提供工作项状态 uuid |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :------------------ | :----- | :------- | :------- | :----------------------------- |
| task_status         | object | F        |          | 参考顶端的工作项状态模型       |
| server_update_stamp | int64  | F        |          | task_status 类型的数据更新时间 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_status/KXPq1Ez8/update \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"task_status":{"name":"update_task_status","category":"to_do"}}'
```

#### 返回示例

```json
{
  "uuid": "KXPq1Ez8",
  "name": "update_task_status",
  "name_pinyin": "update_status",
  "category": "to_do",
  "built_in": false,
  "create_time": 1566187791,
  "server_update_stamp": 1566188042911008
}
```

### 删除工作项状态

删除一个工作项状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_status/:taskStatusUUID/delete

#### 调用权限

administer_do

#### 是否需要登录

是

#### HTTP Method

POST

#### 传值方式

URL

#### 请求参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明      |
| :------------- | :----- | :------- | :------- | :-------- |
| teamUUID       | string | F        | len=8    | 团队 UUID |
| taskStatusUUID | string | F        | len=8    | 状态 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :------------------ | :----- | :------- | :------- | :----------------------------- |
| server_update_stamp | int64  | F        |          | task_status 类型的数据更新时间 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_status/KXPq1Ez8/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "server_update_stamp": 1566188212183600
}
```

### 获取工作项状态列表

列出当前团队下的所有工作项状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_statuses

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 取值范围 | 说明      |
| :------- | :----- | :------- | :------- | :-------- |
| teamUUID | string | F        | len=8    | 团队 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                     |
| :------------------ | :----- | :------- | :--------------------------------------- |
| task_statuses       | array  |          | 工作项状态列表，参考顶端的工作项状态模型 |
| server_update_stamp | int64  |          | task_status 类型的数据更新时间           |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_statuses \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "task_statuses": [
    {
      "uuid": "CaCRT8Tj",
      "name": "test",
      "name_pinyin": "ce4shi4ti2jiao1",
      "category": "to_do",
      "built_in": false,
      "create_time": 1564741783
    }
  ],
  "server_update_stamp": 1564741783420976
}
```
