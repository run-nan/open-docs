---
title: 布局相关接口
group:
  title: Layout
  order: 8
---
<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

# ONES layout API

- [model](#model)
  - [issue_type_layout](#issue_type_layout)
  - [Issue_type_scope_layout](#issue_type_scope_layout)
- [API 说明](#api-说明)
  - [1. 切换Project配置中心下工作项类型的视图应用](#1-获取团队信息)
  - [2. 切换项目下的工作项类型的视图应用](#2-切换项目下的工作项类型的视图引)
  - [3. 删除视图](#3-删除视图)
  - [4. 视图批量应用到工作项类型](#4-视图批量应用到工作项类型)
  - [5. 增加视图配置](#5-增加视图配置)


## model

### Issue_type_layout

视图

| 参数名                | 值类型 | 取值范围 | 说明                              |
| :-------------------- | :----- | :------- | :-------------------------------- |
| team_uuid             | string |          | 团队UUID                          |
| uuid                  | string |          | 视图UUID                          |
| name                  | string |          | 视图名称                          |
| name_pinyin           | string |          | 视图名称拼音                      |
| built_in              | int    |          | 系统 0:不是系统 1:是系统          |
| view_block_uuid       | string |          | 详情视图UUID                      |
| form_block_uuid       | string |          | 新建视图UUID                      |
| create_time           | int    |          | 创建视图时间戳                    |
| issue_type_scope_uuid | string |          | 若不为nul l，则为该容器的本地视图 |
| issue_type_uuid       | string |          | 所属工作项类型，本地视图为空      |

### Issue_type_scope_layout

容器视图引用关系表

| 参数名                | 值类型 | 取值范围 | 说明       |
| :-------------------- | :----- | :------- | :--------- |
| team_uuid             | string |          | 团队UUID   |
| issue_type_scope_uuid | string |          | 容器UUID   |
| layout_uuid           | string |          | 视图UUID   |
| create_time           | string |          | 更新时间戳 |



### 状态码说明

| 状态码 | 说明           |
| :----- | :------------- |
| 200    | 成功           |
| 400    | 请求参数错误   |
| 500    | 服务器内部错误 |
| 403    | 没有相关权限   |


# API 说明

## 1. 切换Project配置中心下工作项类型的视图应用

切换Project配置中心下的工作项类型的视图应用，可选的视图总体分2种，本地和全局视图，全局视图的可选范围为视图所属工作项类型为该工作项类型的视图，Project配置下的工作项类型用到什么视图，决定了该工作项类型被添加某个项目下的时候，项目下的工作项用到什么视图。

### URL

https://your-host-name/project/api/team/:teamUUID/issue_type/:issueTypeUUID/layout/update

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 说明                 |
| :---------- | :------- | :----- | :------- | :------------------- |
| layout_uuid | T        | string |          | 需要切换的视图的UUID |

### 请求体参考

1.切换成全局某一套视图

```json
{
    "layout_uuid": "EE1FvEii"
}
```

2.切换成本地视图

```json
{
    "layout_uuid": ""
}
```

### 

### 返回体参考

1.修改视图配置需要管理工作项配置的权限，如果没有该权限，则会返回一下参数

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.视图是以工作项类型区分的，所以一套视图只能被某一种工作项类型引用，如果视图所属工作项类型和要切换视图的工作项类型不一样，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```

3.视图若不存在，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```



4.当返回码为200时，修改成功，并返回完整的工作项类型信息

```json
{
    "uuid": "ABK12pPa",
    "name": "需求",
    "name_pinyin": "xu1qiu2",
    "icon": 7,
    "built_in": true,
    "default_selected": true,
    "create_time": 1610345438,
    "default_configs": {
        "default_field_configs": [
            {
                "field_uuid": "Sastmu2P",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "WrrkRoCd",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field032",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field013",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field029",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field030",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field027",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field028",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field037",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field001",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field002",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field003",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field004",
                "required": true,
                "can_delete": true,
                "can_modify_required": false,
                "is_important_field": true,
                "important_field_position": 1
            },
            {
                "field_uuid": "field005",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field006",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field007",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field008",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field009",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field010",
                "required": true,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field011",
                "required": false,
                "can_delete": true,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field012",
                "required": true,
                "can_delete": true,
                "can_modify_required": false,
                "is_important_field": true,
                "important_field_position": 0
            },
            {
                "field_uuid": "field015",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field016",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field018",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field019",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field020",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field021",
                "required": false,
                "can_delete": true,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field025",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field026",
                "required": false,
                "can_delete": false,
                "can_modify_required": false,
                "is_important_field": false,
                "important_field_position": 0
            },
            {
                "field_uuid": "field033",
                "required": false,
                "can_delete": false,
                "can_modify_required": true,
                "is_important_field": false,
                "important_field_position": 0
            }
        ],
        "default_task_status_configs": [
            {
                "status_uuid": "V53opmLu",
                "default": true
            },
            {
                "status_uuid": "CbfkDSUF",
                "default": false
            },
            {
                "status_uuid": "VRci49uN",
                "default": false
            },
            {
                "status_uuid": "4PQKqw8q",
                "default": false
            },
            {
                "status_uuid": "7MpSq3Kr",
                "default": false
            }
        ],
        "default_transitions": [
            {
                "uuid": "SzaFVT1o",
                "start_status_uuid": "V53opmLu",
                "end_status_uuid": "7MpSq3Kr",
                "name": "关闭",
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
            },
            {
                "uuid": "Ph1wsgXV",
                "start_status_uuid": "VRci49uN",
                "end_status_uuid": "4PQKqw8q",
                "name": "已实现",
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
            },
            {
                "uuid": "HfohB5xJ",
                "start_status_uuid": "4PQKqw8q",
                "end_status_uuid": "7MpSq3Kr",
                "name": "关闭",
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
            },
            {
                "uuid": "TupK8CPM",
                "start_status_uuid": "CbfkDSUF",
                "end_status_uuid": "7MpSq3Kr",
                "name": "关闭",
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
            },
            {
                "uuid": "4XcAqtYT",
                "start_status_uuid": "V53opmLu",
                "end_status_uuid": "VRci49uN",
                "name": "实现中",
                "position": 1,
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
            },
            {
                "uuid": "YEtdpozq",
                "start_status_uuid": "4PQKqw8q",
                "end_status_uuid": "V53opmLu",
                "name": "未开始",
                "position": 1,
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
            },
            {
                "uuid": "3uYnorr1",
                "start_status_uuid": "CbfkDSUF",
                "end_status_uuid": "V53opmLu",
                "name": "未开始",
                "position": 1,
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
            },
            {
                "uuid": "UygLEmbt",
                "start_status_uuid": "V53opmLu",
                "end_status_uuid": "CbfkDSUF",
                "name": "已拒绝",
                "position": 2,
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
                "uuid": "NSz9ENiF",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "create_tasks"
            },
            {
                "uuid": "BDALwqbj",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "create_tasks"
            },
            {
                "uuid": "VM75TqdV",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "view_tasks"
            },
            {
                "uuid": "Y5SfJpiK",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "view_tasks"
            },
            {
                "uuid": "739JzpRK",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "update_tasks"
            },
            {
                "uuid": "LN8fGyz3",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "update_tasks"
            },
            {
                "uuid": "DrsvHzf1",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "delete_tasks"
            },
            {
                "uuid": "Ad4iB4WE",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "delete_tasks"
            },
            {
                "uuid": "MrxN4vfS",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "transit_tasks"
            },
            {
                "uuid": "Ndi2KXA3",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "transit_tasks"
            },
            {
                "uuid": "5bHB8XXv",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "be_assigned"
            },
            {
                "uuid": "XWsxfbhg",
                "user_domain_type": "everyone",
                "user_domain_param": "",
                "permission": "export_tasks"
            },
            {
                "uuid": "VerdvVeG",
                "user_domain_type": "everyone",
                "user_domain_param": "",
                "permission": "update_task_watchers"
            },
            {
                "uuid": "66wza9RK",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "manage_task_assess_manhour"
            },
            {
                "uuid": "Hqn4mHQ5",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "manage_task_record_manhours"
            },
            {
                "uuid": "KGs2bMYw",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "manage_task_own_record_manhours"
            },
            {
                "uuid": "WZqiEMbh",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "manage_task_own_record_manhours"
            },
            {
                "uuid": "43Cabfcx",
                "user_domain_type": "role",
                "user_domain_param": "KGwZU5Va",
                "permission": "manage_task_own_assess_manhour"
            },
            {
                "uuid": "2nnNxUhe",
                "user_domain_type": "project_administrators",
                "user_domain_param": "",
                "permission": "manage_task_own_assess_manhour"
            }
        ],
        "default_notice_rules": [
            {
                "uuid": "D4ZgqT13",
                "field_uuid": "field013",
                "action": "before",
                "notice_time": {
                    "day": 1,
                    "hour": 0,
                    "minute": 0,
                    "date_time": "09:00"
                },
                "notice_types": [
                    "notice_center"
                ],
                "notice_user_domains": [
                    {
                        "user_domain_type": "task_owner",
                        "user_domain_param": ""
                    },
                    {
                        "user_domain_type": "task_assign",
                        "user_domain_param": ""
                    },
                    {
                        "user_domain_type": "task_watchers",
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
                                                "field_values.field017": [
                                                    "done"
                                                ]
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
                                "value": [
                                    "done"
                                ],
                                "field_type": 1
                            }
                        ]
                    ]
                },
                "is_default": true
            }
        ],
        "layout_uuid": "Dwfusung"
    },
    "type": 0,
    "detail_type": 1,
    "server_update_stamp": 1615272234770496
}
```

## 2. 切换项目下的工作项类型的视图应用

切换Project配置中心下的工作项类型的视图应用，可选的视图总体分2种，本地和全局视图，全局视图的可选范围为视图所属工作项类型为该工作项类型的视图。

### URL

https://your-host-name/project/api/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/layout/update

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 说明                 |
| :---------- | :------- | :----- | :------- | :------------------- |
| layout_uuid | T        | string |          | 需要切换的视图的UUID |

### 请求体参考

1.切换成全局某一套视图

```json
{
    "layout_uuid": "EE1FvEii"
}
```

2.切换成本地视图

```json
{
    "layout_uuid": ""
}
```

### 

### 返回体参考

1.修改视图配置需要管理工作项配置的权限，如果没有该权限，则会返回一下参数

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.视图是以工作项类型区分的，所以一套视图只能被某一种工作项类型引用，如果视图所属工作项类型和要切换视图的工作项类型不一样，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```

3.视图若不存在，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```



4.当返回码为200时，修改成功，并返回完整的工作项类型信息

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

## 3. 删除视图

视图可以被删除，但是以下2种情况，视图是不可被删除的：

1.视图是系统视图，系统视图指的是创建工作项类型的时候程序所创建的视图。

2.视图被Project配置中心的某个工作项类型所应用，或被某个项目下的工作项类型所应用。

### URL

https://your-host-name/project/api/team/:teamUUID/layout/:layoutUUID/delete

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 说明                 |
| :---------- | :------- | :----- | :------- | :------------------- |
| layout_uuid | T        | string |          | 需要切换的视图的UUID |



### 返回体参考

1.删除视图配置需要管理工作项配置的权限，如果没有该权限，则会返回一下参数

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.若视图被某个项目下的工作项类型/被Project配置中心下的某个工作项类型所应用，则会返回一下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.IssueTypeLayoutUUID.InvalidParameter",
    "field": "IssueTypeLayoutUUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```

3.视图若不存在，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```



4.当返回码为200时，删除成功，并返回完整的工作项类型信息

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

## 4. 视图重命名

视图可以被重命名，但是视图名字不能重复。

### URL

https://your-host-name/project/api/team/:teamUUID/layout/:layoutUUID/rename

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 说明             |
| :----- | :------- | :----- | :------- | :--------------- |
| name   | T        | string |          | 需要重命名的名称 |

### 请求体参考

```json
{
    "name": "需求视图配置"
}
```



### 返回体参考

1.重命名视图配置需要管理工作项配置的权限，如果没有该权限，则会返回一下参数

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.若要改的视图名称已经存在，则会返回以下参数



```json
{
    "code": 409,
    "errcode": "AlreadyExists.Layout.AlreadyExists",
    "model": "Layout",
    "reason": "AlreadyExists",
    "type": "AlreadyExists"
}
```

3.视图若不存在，则会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.Layout.UUID.InvalidParameter",
    "field": "UUID",
    "model": "Layout",
    "reason": "InvalidParameter",
    "type": "InvalidParameter"
}
```



4.当返回码为200时，重命名成功，并返回完整的工作项类型信息

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

## 5. 增加视图

视图可以增加，需要指定视图的名称，视图所属的工作项类型。

### URL

https://your-host-name/project/api/team/:teamUUID/layouts/add

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名          | 是否必须 | 值类型 | 取值范围 | 说明               |
| :-------------- | :------- | :----- | :------- | :----------------- |
| name            | T        | string |          | 视图名称           |
| Issue_type_uuid | T        | string |          | 所属工作项类型UUID |

### 请求体参考

```json
{
    "name": "需求视图配置",
  	"issue_type_uuid":"12345678"
}
```



### 返回体参考

1.加视图配置需要管理工作项配置的权限，如果没有该权限，则会返回一下参数

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.若要改的视图名称已经存在，则会返回以下参数



```json
{
    "code": 409,
    "errcode": "AlreadyExists.Layout.AlreadyExists",
    "model": "Layout",
    "reason": "AlreadyExists",
    "type": "AlreadyExists"
}
```

3.若工作项类型不存在，则会返回以下参数



```json
{
    "code": 404,
    "errcode": "NotFound.IssueType",
    "model": "IssueType",
    "type": "NotFound"
}
```



4.当返回码为200时，重命名成功，并返回完整的工作项类型信息

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

## 6. 获取编辑layout时所需要数据接口

编辑layout视图时，我们可以给视图的工作项详情/新建表单可添加属性，增加标签页，增加快速动作，而这些数据的获取都是由该接口所获取的

### URL

https://your-host-name/project/api/team/:teamUUID/layout/:layoutUUID/draft/element_schema/:type?label=xxx?from=xxx?type=xxx

### HTTP Method

GET

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名                                | 是否必须 | 值类型 | 取值范围                                                     | 说明                                                         |
| :------------------------------------ | :------- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| :teamUUID                             | T        | string |                                                              | 所属团队uuid                                                 |
| :layoutUUID                           | T        | string |                                                              | 所查询的视图的uuid                                           |
| :type                                 | T        | string | task_fields: 获取可选的属性列表<br>block:根据block的验证标准，获取信息<br>quick_actions:获取可选的快捷操作 | 所要查询数据的类型                                           |
| label(在:type等于task_fields的情况下) | T        | string | fields                                                       | 固定值                                                       |
| from(在:type等于task_fields的情况下)  | T        | string | view<br>form                                                 | view:取的是视图的详情表单的可选属性列表<br>form:取的是视图的新建表单的可选属性列表 |
| type(在:type等于block的情况下)        | T        | string | tabs                                                         | tabs:获取可选的标签页列表                                    |



### 请求URL和返回体参考

1.请求视图的详情视图的可选属性列表

url: https://dev.myones.net/project/master/api/project/team/H5Nq6uf6/layout/3fvJktgF/draft/element_schema/task_fields?label=fields&from=view

response body:

```json
{
    "layout_uuid": "3fvJktgF",
    "type": "task_fields",
    "available_fields": [
        "KvbkuEyE",
        "6r4dHgeg",
        "KGer8xRX",
        "PJTCnZ9X",
        "XsaLVLGF",
    ]
}
```

available_fields：可选的属性uuid列表

2.请求视图的新建视图的可选属性列表

url:https://dev.myones.net/project/master/api/project/team/H5Nq6uf6/layout/3fvJktgF/draft/element_schema/task_fields?label=fields&from=form

response body:

```json
{
    "layout_uuid": "3fvJktgF",
    "type": "task_fields",
    "available_fields": [
        "KvbkuEyE",
        "6r4dHgeg",
        "XsaLVLGF",
        "8HtiuZq3",
        "MyhFBwd6",
        "DwSbCca1",
    ]
}
```

available_fields：可选的属性uuid列表

3.获取所有可选的标签页列表

url:https://dev.myones.net/project/master/api/project/team/H5Nq6uf6/layout/3fvJktgF/draft/element_schema/block?type=tabs

response body:

```json
{
    "layout_uuid": "3fvJktgF",
    "type": "block",
    "available_children": [
        {
            "type": "tab",
            "label": "details"
        },
        {
            "type": "tab",
            "label": "sub_tasks"
        },
        {
            "type": "tab",
            "label": "cycle_progress"
        },
        {
            "type": "tab",
            "label": "assess_manhour"
        },
        {
            "type": "tab",
            "label": "test_situation"
        },
        {
            "type": "tab",
            "label": "related_content"
        },
        {
            "type": "tab",
            "label": "related_code"
        },
        {
            "type": "tab",
            "label": "related_wiki"
        },
        {
            "type": "tab",
            "label": "files"
        }
    ]
}
```



4.获取可添加的快捷操作列表

url:https://dev.myones.net/project/master/api/project/team/H5Nq6uf6/layout/3fvJktgF/draft/element_schema/quick_actions

respones body:

```json
{
    "layout_uuid": "3fvJktgF",
    "type": "quick_actions",
    "available_actions": [
        {
            "uuid": "quick001"
        },
        {
            "uuid": "quick002"
        },
        {
            "uuid": "quick004"
        },
        {
            "uuid": "quick005"
        },
        {
            "uuid": "quick006"
        },
        {
            "uuid": "quick007"
        },
        {
            "uuid": "quick008"
        },
        {
            "uuid": "quick009"
        },
        {
            "uuid": "quick010"
        }
    ]
}
```

## 7. 视图应用到指定容器

视图可以应用到指定的容器（容器暂时指的是某个项目下的工作项类型）

### URL

https://your-host-name/project/api/team/:teamUUID/layout/:layoutUUID/batch

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

json

### 参数列表

| 参数名                 | 是否必须 | 值类型     | 取值范围 | 说明                 |
| :--------------------- | :------- | :--------- | :------- | :------------------- |
| issue_type_scope_uuids | T        | 字符串数组 |          | 所要应用的容器的uuid |

### 请求体参考

```json
{
    "issue_type_scope_uuids": [
        "TsinJDmS",
        "Uishdjks"
    ]
}
```



### 返回体参考

1.没有管理工作项类型的权限

```json
{
    "code": 403,
    "errcode": "PermissionDenied.ManageTasksConfig",
    "permission": "ManageTasksConfig",
    "type": "PermissionDenied"
}
```

2.所要应用的视图不存在



```json
{
    "code": 404,
    "errcode": "NotFound.IssueTypeLayout",
    "model": "IssueTypeLayout",
    "type": "NotFound"
}
```

3.若容器不存在，则会返回以下参数



```json
{
    "code": 404,
    "errcode": "NotFound.IssueTypeScope",
    "model": "IssueTypeScope",
    "type": "NotFound"
}
```



4.若容器的类型和视图的类型对不上，会返回以下参数



```json
{
    "code": 400,
    "errcode": "InvalidParameter.IssueTypeScopeLayout.IssueTypeScopeUUID.CorruptedData",
    "field": "IssueTypeScopeUUID",
    "model": "IssueTypeScopeLayout",
    "reason": "CorruptedData",
    "type": "InvalidParameter"
}
```



5.当返回码为200时，重命名成功，并返回完整的工作项类型信息

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

## 

|      |      |      |      |      |
| :--- | :--- | :--- | :--- | :--- |
|      |      |      |      |      |