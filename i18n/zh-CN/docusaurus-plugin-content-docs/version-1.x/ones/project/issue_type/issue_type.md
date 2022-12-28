<!-- TOC depthTo:3 withLinks:true -->

## 目录

- [模型](#模型)
  - [工作项类型](#工作项类型)
  - [工作项类型配置](#工作项类型配置)
- [API 说明](#api-说明)
  - [添加工作项类型](#添加工作项类型)
  - [修改工作项类型](#修改工作项类型)
  - [删除工作项类型](#删除工作项类型)
  - [获取工作项类型列表](#获取工作项类型列表)
  - [在项目中添加工作项类型](#在项目中添加工作项类型)
  - [在项目中删除工作项类型](#在项目中删除工作项类型)
  - [获取工作项类型配置列表](#获取工作项类型配置列表)
  <!-- /TOC -->

## 通用说明

### 模型

#### 工作项类型

issue_type

| 参数名           | 值类型 | 允许空值 | 取值范围 | 说明                                                     |
| :--------------- | :----- | :------- | :------- | :------------------------------------------------------- |
| uuid             | string | F        | len=8    | 工作项类型 uuid                                          |
| name             | string | F        | len<=32  | 工作项类型名称                                           |
| name_pinyin      | string | F        | len<=256 | 工作项类型名称拼音                                       |
| icon             | int    | F        |          | 工作项类型标识 icon                                      |
| create_time      | int64  | F        |          | 工作项类型创建时间，用于排序                             |
| built_in         | bool   | T        |          | 是否是系统内置工作项类型，内置工作项类型无法修改或者删除 |
| default_selected | bool   | T        |          | 是否默认选中                                             |
| default_configs  | object | F        |          | 工作项类型默认配置，具体结构见下方表格                   |

default_configs 结构

| 参数名                      | 值类型 | 允许空值 | 取值范围 | 说明                                                                                                                                      |
| :-------------------------- | :----- | :------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| default_field_configs       | array  | F        |          | 默认属性配置，参考[工作项属性配置](../field/field.md#属性配置信息)模型，其中 project_uuid, issue_type_uuid 不需要提供                     |
| default_permission_rules    | array  | F        |          | 默认权限配置，参考[权限规则](../../permission/permission.md#属性配置)模型，其中 project_uuid, issue_type_uuid 不需要提供                  |
| default_task_status_configs | array  | F        |          | 默认工作项状态配置，参考[工作项状态配置](../task_status/task_status.md#工作项状态配置)模型，其中 project_uuid, issue_type_uuid 不需要提供 |
| default_transitions         | array  | F        |          | 默认工作流配置，参考[transition](../workflow/workflow.md#工作流步骤) 模型，但不需要提供 uuid, project_uuid 和 issue_type_uuid             |
| default_notice_rules        | array  | T        |          | 默认工作项提醒配置，参考[工作项提醒](#工作项提醒) 模型                                                                                    |
| layout_uuid                 | string | F        | len=8    | 工作项类型当前使用的视图的 UUID                                                                                                           |

#### 工作项提醒

| 参数名              | 值类型   | 允许空值 | 取值范围 | 说明                                                                             |
| :------------------ | :------- | :------- | :------- | :------------------------------------------------------------------------------- |
| uuid                | string   | F        | len=8    | 提醒规则 uuid                                                                    |
| field_uuid          | string   | F        | len=8    | 属性 uuid                                                                        |
| notice_time         | object   | F        |          | 提醒时间配置，具体结构见下方表格                                                 |
| notice_types        | []string | F        |          | 通知类型                                                                         |
| notice_user_domains | array    | F        |          | 通知对象用户域，参考 [](../../permission/user_domain/user_domain.md##用户域模型) |
| filter_condition    | object   | T        |          | 筛选条件，具体结构见响应示例，以及参考 [运算符](../../filter/#运算符)            |
| condition           | object   | T        |          | 触发条件，具体结构见下方表格                                                     |

notice_time 结构

| 参数名    | 值类型 | 允许空值 | 取值范围 | 说明     |
| --------- | :----- | :------- | :------- | :------- |
| day       | int    | T        |          | 天       |
| hour      | int    | F        |          | 小时     |
| minute    | int    | F        |          | 分钟     |
| date_time | string | F        |          | 具体时刻 |

condition 结构

| 参数名           | 值类型                            | 允许空值 | 取值范围 | 说明       |
| ---------------- | :-------------------------------- | :------- | :------- | :--------- |
| condition_groups | [] [运算符](../../filter/#运算符) | T        |          | 触发条件组 |

#### 工作项类型配置

issue_type_config

- 工作项类型配置目前只表示项目下有哪些工作项类型，无其它附加字段

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明            |
| :-------------- | :----- | :------- | :------- | :-------------- |
| project_uuid    | string | F        | len=16   | 项目 uuid       |
| issue_type_uuid | string | F        | len=8    | 工作项类型 uuid |

## API 说明

### 添加工作项类型

创建或复制一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_types/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型 | 允许空值 | 取值范围 | 说明                                                                                      |
| :--------- | :----- | :------- | :------- | :---------------------------------------------------------------------------------------- |
| issue_type | object | F        |          |
| copy_from  | string | T        |          | 已有的工作项类型 UUID，复制该工作项类型的默认配置，若不传该参数，则表示从零新建一个工作项 |

issue_type 结构

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明                         |
| :----- | :----- | :------- | :------- | :--------------------------- |
| name   | string | F        | len<=32  | 工作项类型名称               |
| icon   | int    | F        |          | 工作项类型标识 icon          |
| type   | int    | F        |          | 0: 标准工作项；1: 子工作项。 |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :------------------ | :----- | :------- | :------- | :---------------------------- |
| issue_type          | object | F        |          | 参考顶端的工作项类型模型      |
| server_update_stamp | int64  | F        |          | issue_type 类型的数据更新时间 |

#### 请求示例

示例一

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_types/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "issue_type": {
        "name": "工作项类型名称",
        "icon": 5,
        "type": 0
    }
}'
```

示例二

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_types/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "issue_type": {
        "name": "工作项类型名称",
        "icon": 5,
        "type": 0
    },
    "copy_from": "DcUqJDB1"
}'
```

#### 返回示例

```json
{
  "uuid": "EL8EKdp5",
  "name": "标准工作项类型",
  "name_pinyin": "",
  "icon": 5,
  "built_in": false,
  "default_selected": false,
  "create_time": 1565858997,
  "default_configs": {
    "default_field_configs": [
      {
        "field_uuid": "field013",
        "required": false,
        "can_delete": false,
        "can_modify_required": true,
        "is_important_field": false,
        "important_field_position": 0
      }
    ],
    "default_task_status_configs": [
      {
        "status_uuid": "4HfKoazf",
        "default": true
      },
      {
        "status_uuid": "AyFUiZok",
        "default": false
      },
      {
        "status_uuid": "RNQZBzqw",
        "default": false
      }
    ],
    "default_transitions": [
      {
        "uuid": "Emv1LGuv",
        "start_status_uuid": "4HfKoazf",
        "end_status_uuid": "AyFUiZok",
        "name": "开始工作项",
        "position": 0,
        "trigger": null,
        "condition": null,
        "post_function": [],
        "fields": [
          {
            "field_uuid": "tf-comment",
            "default_value": "",
            "type": null,
            "required": false
          }
        ]
      }
    ],
    "default_permission": [
      {
        "uuid": "X9jLysKN",
        "user_domain_type": "role",
        "user_domain_param": "Ko9bjF1N",
        "permission": "create_tasks"
      }
    ]
  },
  "type": 0,
  "server_update_stamp": 1565858997655360
}
```

### 修改工作项类型

修改工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type/:issueTypeUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型 | 是否必须 | 取值范围 | 说明                               |
| :--------- | :----- | :------- | :------- | :--------------------------------- |
| issue_type | object | F        |          | 需要更新的内容，具体结构见下方表格 |

issue_type 结构

| 参数名           | 值类型 | 是否必须 | 取值范围 | 说明                                             |
| :--------------- | :----- | :------- | :------- | :----------------------------------------------- |
| &emsp;&emsp;name | string | T        | len<=32  | 工作项类型名称                                   |
| &emsp;&emsp;icon | int    | T        |          | 工作项类型标识 icon 类型                         |
| &emsp;&emsp;type | int    | F        |          | issueType 类型，1 表示标准工作项，0 表示子工作项 |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :------------------ | :----- | :------- | :------- | :---------------------------- |
| issue_type          | object | F        |          | 参考顶端的工作项类型模型      |
| server_update_stamp | int64  | F        |          | issue_type 类型的数据更新时间 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_type/SJt9Ua8X/update \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "issue_type": {
        "name": "test1",
        "icon": 4,
        "type": 0
    }
}'
```

#### 返回示例

```json
{
  "uuid": "9A9fZ9AP",
  "name": "345",
  "name_pinyin": "345",
  "icon": 6,
  "built_in": false,
  "default_selected": false,
  "create_time": 1671090707,
  "default_configs": {
    "default_field_configs": [
      {
        "field_uuid": "field001",
        "required": true,
        "can_delete": false,
        "can_modify_required": false,
        "is_important_field": false,
        "important_field_position": 0
      }
    ],
    "default_task_status_configs": [
      {
        "status_uuid": "MZQu4VaM",
        "default": true
      }
    ],
    "default_transitions": [
      {
        "uuid": "7QbZa1RT",
        "start_status_uuid": "MZQu4VaM",
        "end_status_uuid": "T8VegS8V",
        "name": "进行中",
        "position": 0,
        "trigger": null,
        "condition": null,
        "post_function": [],
        "fields": [
          {
            "field_uuid": "tf-comment",
            "default_value": "",
            "required": false,
            "type": 0,
            "can_set_required": false,
            "can_delete": false,
            "can_set_default_value": false
          }
        ]
      }
    ],
    "default_permission": [
      {
        "uuid": "S32MHBMR",
        "user_domain_type": "role",
        "user_domain_param": "UkTfr9bj",
        "permission": "create_tasks"
      }
    ],
    "default_notice_rules": [
      {
        "uuid": "DFDsR5dT",
        "field_uuid": "field013",
        "action": "before",
        "notice_time": {
          "day": 1,
          "hour": 0,
          "minute": 0,
          "date_time": "09:00"
        },
        "notice_types": ["notice_center"],
        "notice_user_domains": [
          {
            "user_domain_type": "task_owner",
            "user_domain_param": ""
          }
        ],
        "filter_condition": {
          "must": [
            {
              "should": [
                {
                  "must": [
                    {
                      "not_in": {
                        "field_values.field017": ["done"]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "condition": {
          "condition_groups": [
            [
              {
                "field_uuid": "field017",
                "operate": {
                  "label": "filter.addQueryContent.exclude",
                  "operate_id": "exclude",
                  "negative": true,
                  "predicate": "in"
                },
                "value": ["done"],
                "field_type": 1
              }
            ]
          ]
        },
        "is_default": true
      }
    ],
    "default_constraints": [],
    "layout_uuid": "3CUNeDHr"
  },
  "type": 0,
  "detail_type": 0,
  "server_update_stamp": 1671344100724286
}
```

### 删除工作项类型

删除一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type/:issueTypeUUID/delete

#### 调用权限

administer_do

#### HTTP Method

POST

#### 传值方式

URL

#### 请求参数列表

| 参数名        | 值类型 | 允许空值 | 说明            |
| :------------ | :----- | :------- | :-------------- |
| teamUUID      | string | F        | 所属团队 UUID   |
| issueTypeUUID | string | F        | 工作项类型 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :------------------ | :----- | :------- | :------- | :---------------------------- |
| server_update_stamp | int64  | F        |          | issue_type 类型的数据更新时间 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_type/EL8EKdp5/delete \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565859357033552
}
```

### 获取工作项类型列表

列出当前团队下的所有工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_types

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                     |
| :------------------ | :----- | :------- | :--------------------------------------- |
| issue_types         | array  |          | 工作项类型列表，参考顶端的工作项类型模型 |
| server_update_stamp | int64  |          | issue_type 类型的数据更新时间            |

#### 请求示例

```shell
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_types \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "issue_types": [
    {
      "uuid": "9A9fZ9AP",
      "name": "345",
      "name_pinyin": "345",
      "icon": 6,
      "built_in": false,
      "default_selected": false,
      "create_time": 1671090707,
      "default_configs": {
        "default_field_configs": [
          {
            "field_uuid": "field001",
            "required": true,
            "can_delete": false,
            "can_modify_required": false,
            "is_important_field": false,
            "important_field_position": 0
          }
        ],
        "default_task_status_configs": [
          {
            "status_uuid": "MZQu4VaM",
            "default": true
          }
        ],
        "default_transitions": [
          {
            "uuid": "7QbZa1RT",
            "start_status_uuid": "MZQu4VaM",
            "end_status_uuid": "T8VegS8V",
            "name": "进行中",
            "position": 0,
            "trigger": null,
            "condition": null,
            "post_function": [],
            "fields": [
              {
                "field_uuid": "tf-comment",
                "default_value": "",
                "required": false,
                "type": 0,
                "can_set_required": false,
                "can_delete": false,
                "can_set_default_value": false
              }
            ]
          }
        ],
        "default_permission": [
          {
            "uuid": "S32MHBMR",
            "user_domain_type": "role",
            "user_domain_param": "UkTfr9bj",
            "permission": "create_tasks"
          }
        ],
        "default_notice_rules": [
          {
            "uuid": "DFDsR5dT",
            "field_uuid": "field013",
            "action": "before",
            "notice_time": {
              "day": 1,
              "hour": 0,
              "minute": 0,
              "date_time": "09:00"
            },
            "notice_types": ["notice_center"],
            "notice_user_domains": [
              {
                "user_domain_type": "task_owner",
                "user_domain_param": ""
              }
            ],
            "filter_condition": {
              "must": [
                {
                  "should": [
                    {
                      "must": [
                        {
                          "not_in": {
                            "field_values.field017": ["done"]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "condition": {
              "condition_groups": [
                [
                  {
                    "field_uuid": "field017",
                    "operate": {
                      "label": "filter.addQueryContent.exclude",
                      "operate_id": "exclude",
                      "negative": true,
                      "predicate": "in"
                    },
                    "value": ["done"],
                    "field_type": 1
                  }
                ]
              ]
            },
            "is_default": true
          }
        ],
        "default_constraints": [],
        "layout_uuid": "3CUNeDHr"
      },
      "type": 0,
      "detail_type": 0
    }
  ],
  "server_update_stamp": 1565860040211744
}
```

### 在项目中添加工作项类型

在项目中加入一个或多个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/issue_types/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_project

#### 传值方式

JSON

#### 请求参数列表

| 参数名           | 值类型   | 允许空值 | 取值范围 | 说明                 |
| :--------------- | :------- | :------- | :------- | :------------------- |
| issue_type_uuids | []string | F        |          | 工作项类型 uuid 列表 |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                 |
| :------------------ | :----- | :------- | :----------------------------------- |
| server_update_stamp | int64  |          | issue_type_config 类型的数据更新时间 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/DU6krHBN/project/DU6krHBNXuPAbpv8/issue_types/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"issue_type_uuids":["3F8QT4bW"]'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565864124343488
}
```

### 在项目中删除工作项类型

从项目中删除一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/delete

#### 是否需要登录

是

#### 调用权限

manage_project

#### HTTP Method

POST

#### 传值方式

URL

#### 请求参数列表

| 参数名        | 值类型 | 取值范围 | 说明                            |
| ------------- | ------ | -------- | ------------------------------- |
| projectUUID   | string |          | 项目 UUID                       |
| issueTypeUUID | string |          | 要从项目中删除的工作项类型 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                 |
| :------------------ | :----- | :------- | :----------------------------------- |
| server_update_stamp | int64  |          | issue_type_config 类型的数据更新时间 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/project/DU6krHBNXuPAbpv8/issue_type/DDP5PK74/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565925892914336
}
```

### 获取工作项类型配置列表

列出当前用户在当前团队下能访问到的所有工作项类型配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type_configs

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                   |
| :------------------ | :----- | :------- | :------------------------------------- |
| issue_type_configs  | array  |          | 工作项类型配置列表，具体结构见下方表格 |
| server_update_stamp | int64  |          | issue_type_config 类型的数据更新时间   |

issue_type_configs 结构

| 参数名          | 值类型 | 取值范围 | 说明            |
| :-------------- | :----- | :------- | :-------------- |
| uuid            | string |          | uuid            |
| name            | string |          | 工作项类型名称  |
| name_pinyin     | string |          | 名称拼音        |
| scope           | string |          | 容器 id         |
| scope_type      | string |          | 容器类型        |
| issue_type_uuid | string |          | 工作项类型 uuid |
| project_uuid    | string |          | 项目 uuid       |

#### 请求示例

```shell
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_type_configs \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "issue_type_configs": [
    {
      "uuid": "2MQQbZXG",
      "name": "需求",
      "name_pinyin": "xu1qiu2",
      "scope": "9uaNjXTJVktEf5U1",
      "scope_type": 1,
      "issue_type_uuid": "Babm2Py1",
      "project_uuid": "9uaNjXTJVktEf5U1"
    }
  ],
  "server_update_stamp": 1565925892914336
}
```
