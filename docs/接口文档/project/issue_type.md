<!-- TOC depthTo:3 withLinks:true -->

# 工作项类型

- [模型](#模型)
  - [工作项类型](#工作项类型)
  - [工作项类型配置](#工作项类型配置)
- [API 说明](#api-说明)
  - [1. 创建工作项类型](#1-创建工作项类型)
  - [2. 修改工作项类型](#2-修改工作项类型)
  - [3. 删除工作项类型](#3-删除工作项类型)
  - [4. 获取工作项类型列表](#4-获取工作项类型列表)
  - [5. 在项目中添加工作项类型](#5-在项目中添加工作项类型)
  - [6. 在项目中删除工作项类型](#6-在项目中删除工作项类型)
  - [7. 获取工作项类型配置列表](#7-获取工作项类型配置列表)
<!-- /TOC -->

## 通用说明

## 模型

### 工作项类型

issue_type

参数名|值类型|允许空值|取值范围|说明
:----------------------|:------|:--|:------|:----
uuid            |string |F  |len=8     |工作项类型 uuid
name            |string |F  |len<=32   |工作项类型名称
name_pinyin     |string |F  |len<=256  |工作项类型名称拼音
icon            |int    |F  |          |工作项类型标识 icon
create_time     |int64  |F  |          |工作项类型创建时间，用于排序
built_in        |bool   |T  |          |是否是系统内置工作项类型，内置工作项类型无法修改或者删除
default_selected|bool   |T  |          |是否默认选中
default_configs |object |F  |          |工作项类型默认配置
&nbsp;&nbsp;default_field_configs|array|F||默认属性配置，参考[工作项属性配置](./field.md#属性配置-field_config)模型，其中 project_uuid, issue_type_uuid 不需要提供
&nbsp;&nbsp;default_permission_rules|array|F||默认权限配置，参考[权限规则](./permission.md#属性配置)模型，其中 project_uuid, issue_type_uuid 不需要提供
&nbsp;&nbsp;default_task_status_configs|array|F||默认工作项状态配置，参考[工作项状态配置](./task_status.md#工作项状态配置)模型，其中 project_uuid, issue_type_uuid 不需要提供
&nbsp;&nbsp;default_transitions|array|F||默认工作流配置，参考[transition](./workflow.md#工作流步骤) 模型，但不需要提供 uuid, project_uuid 和 issue_type_uuid

### 工作项类型配置

issue_type_config
- 工作项类型配置目前只表示项目下有哪些工作项类型，无其它附加字段

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:----------|:----
project_uuid    |string |F  |len=16     |项目 uuid
issue_type_uuid |string |F  |len=8      |工作项类型 uuid

## API 说明

### 1. 创建工作项类型

创建一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_types/add

#### HTTP Method

POST

#### 调用权限

administer_do


#### 传值方式

JSON

#### 参数列表

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:----------|:----
issue_type      |object |F  |           |       
&nbsp;&nbsp;name            |string |F  |len<=32       |工作项类型名称
&nbsp;&nbsp;icon            |int    |F  |              |工作项类型标识 icon
copy_from       |string |T  |           |       已有的工作项类型UUID，复制该工作项类型的默认配置

#### 返回参数列表

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:----------|:----
issue_type      |object |F  |           |参考顶端的工作项类型模型
server_update_stamp|int64 |F|           |issue_type类型的数据更新时间

#### 请求体参考

```json
{
    "issue_type":{
        "name":"issue_type_name",
        "icon":2,
        "type":0
    }
}
```

#### 返回值参考

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
            },
            //
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
            },
            //
        ],
        "default_permission": [
            {
                "uuid": "X9jLysKN",
                "user_domain_type": "role",
                "user_domain_param": "Ko9bjF1N",
                "permission": "create_tasks"
            },
            //
        ]
    },
    "type": 0,
    "server_update_stamp": 1565858997655360
}
```

### 2. 修改工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type/:issueTypeUUID/update

#### HTTP Method

POST

#### 调用权限

administer_do

#### 传值方式

JSON

#### 参数列表

参数名|值类型|是否必须|取值范围 |说明
:---------------|:------|:--|:----------|:----
issue_type      |object |F  |           |
&emsp;&emsp;name|string |T  |len<=32    |工作项类型名称
&emsp;&emsp;icon|int    |T  |           |工作项类型标识 icon类型

#### 返回参数列表

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:----------|:----
issue_type      |object |F  |           |参考顶端的工作项类型模型
server_update_stamp|int64 |F  |         |issue_type类型的数据更新时间

#### 请求体示例

```json
{
    "issue_type":{
        "name":"update name",
        "icon":1,
        "type":0
    }
}
```

#### 返回值示例

```json
{
    "uuid": "SJt9Ua8X",
    "name": "test1",
    "name_pinyin": "test11",
    "icon": 4,
    "built_in": false,
    "default_selected": false,
    "create_time": 1565859826,
    "default_configs": {
        "default_field_configs": [
            {
                "field_uuid": "field013",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            //
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
                "uuid": "6XsxexgE",
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
            },
            //
        ],
        "default_permission": [
            {
                "uuid": "7u8z3odN",
                "user_domain_type": "role",
                "user_domain_param": "Ko9bjF1N",
                "permission": "create_tasks"
            },
            //
        ]
    },
    "type": 0,
    "server_update_stamp": 1565860040211744
}
```

### 3. 删除工作项类型

删除一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type/:issueTypeUUID/delete

#### 调用权限

administer_do

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无

#### 返回参数列表

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:-----|:----
server_update_stamp|int64 |F  |    |issue_type类型的数据更新时间

#### 请求体参考

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_type/EL8EKdp5/delete \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```
#### 返回值参考

```json
{
    "server_update_stamp": 1565859357033552
}
```

### 4. 获取工作项类型列表

列出当前团队下的所有工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_types

#### HTTP Method

GET

#### 调用权限


#### 传值方式

URL

#### 参数列表

无

#### 返回参数列表

参数名|值类型|取值范围|说明
:-----------|:------|:----|:-----
issue_types          |array  |   |工作项类型列表，参考顶端的工作项类型模型
server_update_stamp  |int64  |   |issue_type类型的数据更新时间

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_types \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回值示例

```json
{
    "issue_types": [
        {
            "uuid": "DDP5PK74",
            "name": "Android缺陷",
            "name_pinyin": "Androidque1xian4",
            "icon": 9,
            "built_in": false,
            "default_selected": false,
            "create_time": 1564741783,
            "default_configs": {
                "default_field_configs": [
                    {
                        "field_uuid": "Sg2kT5BC",
                        "required": false,
                        "can_delete": true,
                        "can_modify_required": true,
                        "is_important_field": false,
                        "important_field_position": 0
                    },
                ],
                "default_task_status_configs": [
                    {
                        "status_uuid": "CaCRT8Tj",
                        "default": true
                    },
                    //
                ],
                "default_transitions": [
                    {
                        "uuid": "AWqxuJgP",
                        "start_status_uuid": "8Gt8ASv7",
                        "end_status_uuid": "FZ6LGoeE",
                        "name": "已经修复",
                        "position": 0,
                        "trigger": null,
                        "condition": null,
                        "post_function": [],
                        "fields": [
                            {
                                "field_uuid": "tf-comment",
                                "default_value": "",
                                "required": false,
                                "type": -1,
                                "can_set_required": true,
                                "can_delete": false,
                                "can_set_default_value": true
                            }
                        ]
                    },
                    //
                ],
                //
            },
            "type": 0
        },
        //
    ],
    "server_update_stamp": 1565860040211744
}
```

### 5. 在项目中添加工作项类型

在项目中加入一个或多个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/issue_types/add

#### HTTP Method

POST

#### 调用权限

manage_project


#### 传值方式

JSON

#### 参数列表

参数名|值类型|允许空值|取值范围|说明
:---------------|:------|:--|:----------|:----
issue_type_uuids|[]string|F  |          |工作项类型 uuid 列表

#### 返回参数列表

参数名|值类型|取值范围|说明
:-----------|:------|:----|:-----
server_update_stamp  |int64  |     |issue_type_config类型的数据更新时间

#### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/DU6krHBN/project/DU6krHBNXuPAbpv8/issue_types/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"issue_type_uuids":["3F8QT4bW"]'
```

#### 返回值示例

```json
{
    "server_update_stamp": 1565864124343488
}
```

### 6. 在项目中删除工作项类型

从项目中删除一个工作项类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/delete

#### 调用权限

manage_project


#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无

#### 返回参数列表

参数名|值类型|取值范围|说明
:-----------|:------|:----|:-----
server_update_stamp  |int64||issue_type_config类型的数据更新时间

#### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/project/DU6krHBNXuPAbpv8/issue_type/DDP5PK74/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"issue_type_uuids":["3F8QT4bW"]}'
```

#### 返回值示例

```json
{
    "server_update_stamp": 1565925892914336
}
```

### 7. 获取工作项类型配置列表

列出当前用户在当前团队下能访问到的所有工作项类型配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/issue_type_configs

#### HTTP Method

GET


#### 调用权限


#### 传值方式

URL

#### 参数列表

无

#### 返回参数列表

参数名|值类型|取值范围|说明
:-------------------|:------|:----|:-----
issue_type_configs  |array  |     |工作项类型配置列表，参考顶端工作项类型配置模型
server_update_stamp |int64  |     |issue_type_config类型的数据更新时间

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/issue_type_configs \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"issue_type_uuids":["3F8QT4bW"]}'
```

#### 返回值示例

```json
{
    "issue_type_configs": [
        {
            "project_uuid": "DU6krHBNRJ8sVGyN",
            "issue_type_uuid": "Ux99P1Vn"
        },
        {
            "project_uuid": "DU6krHBNRJ8sVGyN",
            "issue_type_uuid": "BivBjw7n"
        },
        //
    ],
    "server_update_stamp": 1565925892914336
}
```
