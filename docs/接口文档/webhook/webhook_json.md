## 消息体说明

| 字段名   | 类型      | 说明                                       |
| :------- | :-------- | :----------------------------------------- |
| id       | string    | 消息体唯一标识 16位                        |
| messages | []message | 消息体数组(目前消息推送只支持推送单条消息) |

## `message`

| 字段名          | 类型   | 说明                                |
| :-------------- | :----- | :---------------------------------- |
| from_user       | user   | 消息来源                            |
| to_users        | []user | ONES 体统内的配置的消息通知列表     |
| title           | string | 消息标题：格式 [团队名称]工作项名称 |
| desc            | string | 消息描述 格式：`who [do_what]`      |
| url             | string | 工作项 url 地址                     |
| task_uuid       | string | 工作项UUID                          |
| issue_type_uuid | string | 工作项类型UUID                      |
| issue_type_name | string | 工作项类型名称                      |
| event_type      | string | 事件类型                            |
| event_name      | string | 事件名称                            |
| raw_message     | raw    | ONES 系统中消息体                   |

## `user`

| 字段名 | 类型   | 说明     |
| :----- | :----- | :------- |
| uuid   | string | 用户UUID |
| name   | string | 用户名称 |

## `raw`

| 字段名                    | 类型   | 说明                                                         |
| :------------------------ | :----- | :----------------------------------------------------------- |
| uuid                      | string | message uuid                                                 |
| team_uuid                 | string | 团队uuid                                                     |
| ref_type                  | string | 消息引用类型： task：工作项 project：项目                    |
| ref_id                    | string | 消息引用类型的uuid： 如果"ref_type"是"task"的话，那么"ref_id"的值就是工作项uuid 如果"ref_type"是"project"的话，那么"ref_id"的值就是项目uuid |
| type                      | string | 消息类型： discussion：评论类型动态 system：系统类型动态     |
| from                      | string | 谁发送的消息： BOT：代表系统                                 |
| to                        | string | 操作的实体：某个工作项或者某个项目                           |
| send_time                 | int64  | 发送时间                                                     |
| text                      | string | 当"type"为"discussion"才有，评论的内容                       |
| is_can_show_richtext_diff | bool   | 是否能查看工作项描述的diff                                   |
| subject_type              | string | 一般值为"user"                                               |
| subject_id                | string | 操作人uuid                                                   |
| action                    | string | 操作类型： add：新增 update：更新 delete:删除 move:移动 copy:复制 |
| object_id                 | string | 消息实体uuid                                                 |
| object_type               | string | 消息实体类型                                                 |
| object_name               | string | 消息实体名称                                                 |
| object_attr               | string | 消息实体属性                                                 |
| new_value                 | string | 更新后的值                                                   |
| ext                       | ext    | 修改数据说明                                                 |

## `ext`

| 字段名              | 类型   | 说明                    |
| :------------------ | :----- | :---------------------- |
| field_uuid          | string | 属性UUID                |
| field_name          | string | 属性名称，omitempty     |
| field_type          | int    | 属性类型                |
| old_value           | string | 属性旧值                |
| new_value           | string | 属性新值                |
| old_option          | desc   | 旧属性项，omitempty     |
| new_option          | desc   | 新属性项，omitempty     |
| new_multi_option    | []desc | 旧属性项列表，omitempty |
| old_multi_option    | []desc | 新属性项列表，omitempty |
| batch_action        | string | 批处理动作              |
| parent_message_uuid | string | 主消息UUID              |
| trigger_task_uuid   | string | 触发工作项UUID          |
| trigger_task_title  | string | 触发工作项标题          |

## `desc`

| 字段名 | 类型   | 说明 |
| :----- | :----- | :--- |
| uuid   | string | UUID |
| name   | string | 名称 |



### 创建工作项

```json
{
    "id": "gH3ItZ2ksZPpb2q7",
    "messages": [
        {
            "from_user": {
                "uuid": "Hyg2fMHf",
                "name": "duxy1207+dev"
            },
            "to_users": [],
            "title": "[dev]x4",
            "desc": "duxy1207+dev 创建了需求「x4」",
            "url": "https://dev.ones.team/website/F1104_bugfix/#/team/HCMePSrT/project/Hyg2fMHfoP4R6nWD/issue_type/UvPYXzDt/task/Hyg2fMHfO5hXXC7d",
            "task_uuid": "Hyg2fMHfO5hXXC7d",
            "issue_type_uuid": "UvPYXzDt",
            "issue_type_name": "需求",
            "event_type": "create_task",
            "event_name": "创建工作项",
            "raw_message": {
                "uuid": "RtfW1PaT",
                "team_uuid": "HCMePSrT",
                "ref_type": "project",
                "ref_id": "Hyg2fMHfoP4R6nWD",
                "type": "system",
                "from": "BOT",
                "to": "Hyg2fMHfoP4R6nWD",
                "send_time": 1631014249901584,
                "subject_type": "user",
                "subject_id": "Hyg2fMHf",
                "action": "add",
                "object_type": "task",
                "object_id": "Hyg2fMHfO5hXXC7d",
                "object_name": "x4",
                "ext": {
                    "field_values": [
                        {
                            "field_name": "需求类型",
                            "field_type": 1,
                            "field_uuid": "QSg9P6gb",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "需求来源",
                            "field_type": 1,
                            "field_uuid": "QH6wN8LD",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "描述",
                            "field_type": 2,
                            "field_uuid": "field002",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "工作项类型",
                            "field_type": 11,
                            "field_uuid": "field007",
                            "new_value": "UvPYXzDt",
                            "old_value": ""
                        },
                        {
                            "field_name": "计划完成日期",
                            "field_type": 5,
                            "field_uuid": "field028",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "创建者",
                            "field_type": 8,
                            "field_uuid": "field003",
                            "new_value": "Hyg2fMHf",
                            "old_value": ""
                        },
                        {
                            "field_name": "所属项目",
                            "field_type": 9,
                            "field_uuid": "field006",
                            "new_value": "Hyg2fMHfoP4R6nWD",
                            "old_value": ""
                        },
                        {
                            "field_name": "父工作项",
                            "field_type": 10,
                            "field_uuid": "field014",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "剩余工时",
                            "field_type": 4,
                            "field_uuid": "field020",
                            "new_value": "0",
                            "old_value": ""
                        },
                        {
                            "field_name": "计划开始日期",
                            "field_type": 5,
                            "field_uuid": "field027",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "进度",
                            "field_type": 4,
                            "field_uuid": "field033",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "标题",
                            "field_type": 2,
                            "field_uuid": "field001",
                            "new_value": "x4",
                            "old_value": ""
                        },
                        {
                            "field_name": "负责人",
                            "field_type": 8,
                            "field_uuid": "field004",
                            "new_value": "Hyg2fMHf",
                            "old_value": ""
                        },
                        {
                            "field_name": "所属迭代",
                            "field_type": 7,
                            "field_uuid": "field011",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "截止日期",
                            "field_type": 5,
                            "field_uuid": "field013",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "关联发布",
                            "field_type": 49,
                            "field_uuid": "field037",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "故事点",
                            "field_type": 4,
                            "field_uuid": "field032",
                            "new_value": "",
                            "old_value": ""
                        },
                        {
                            "field_name": "状态",
                            "field_type": 12,
                            "field_uuid": "field005",
                            "new_value": "XqdiNjfc",
                            "old_value": ""
                        },
                        {
                            "field_name": "优先级",
                            "field_type": 1,
                            "field_uuid": "field012",
                            "new_value": "JkdwhWcg",
                            "old_value": ""
                        },
                        {
                            "field_name": "预估工时",
                            "field_type": 4,
                            "field_uuid": "field018",
                            "new_value": "0",
                            "old_value": ""
                        },
                        {
                            "field_name": "子工作项类型",
                            "field_type": 11,
                            "field_uuid": "field021",
                            "new_value": "",
                            "old_value": ""
                        }
                    ]
                },
                "is_can_show_richtext_diff": false
            }
        }
    ]
}
```



### 更改自定义属性

```json
{
    "id":"ocwg6kdpAPs04dqy",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「计划开始日期」设置为「2021-09-02」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD3744aa78",
            "task_uuid":"AAyPCMRD3744aa78",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_other_property",
            "event_name":"更改自定义属性",
            "raw_message":{
                "uuid":"36FVjT9f",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630553848795200,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD3744aa78",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"1630512000",
                "ext":{
                    "field_name":"计划开始日期",
                    "field_type":5,
                    "field_uuid":"field027",
                    "new_value":"1630512000",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置关联工作项

```json
{
    "id":"tpUDHCR7hen1hfNr",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]多少发多少分",
            "desc":"ones 添加了关联工作项「嗯emmmmmm」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD1R5ibN82",
            "task_uuid":"AAyPCMRD1R5ibN82",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_related_task",
            "event_name":"设置关联工作项",
            "raw_message":{
                "uuid":"LpZ4SUUS",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630897629052656,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD1R5ibN82",
                "object_name":"多少发多少分",
                "object_attr":"related_task",
                "new_value":"AAyPCMRDLHbNFR2q",
                "ext":{
                    "link_type_name":"关联",
                    "object_name":"嗯emmmmmm",
                    "object_type":"task",
                    "object_uuid":"AAyPCMRDLHbNFR2q"
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置截止时间

```json
{
    "id":"y8uyDUcgkdeLkTq9",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「截止日期」设置为「2021-09-06」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"set_task_deadline",
            "event_name":"设置截止时间",
            "raw_message":{
                "uuid":"JeethCgx",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630898296455152,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"1630898296",
                "ext":{
                    "field_name":"截止日期",
                    "field_type":5,
                    "field_uuid":"field013",
                    "new_value":"1630898296",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更新工作项状态

```json
{
    "id":"9a8nMeMKiTtBrl6m",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「状态」修改为「实现中」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD64b88137",
            "task_uuid":"AAyPCMRD64b88137",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_status",
            "event_name":"更新工作项状态",
            "raw_message":{
                "uuid":"5FPe4Upo",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630898402017584,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRD64b88137",
                "object_name":"标题",
                "object_attr":"field",
                "old_value":"UH6SkLqn",
                "new_value":"Dnw942Hj",
                "ext":{
                    "field_name":"状态",
                    "field_type":12,
                    "field_uuid":"field005",
                    "new_option":{
                        "name":"实现中",
                        "uuid":"Dnw942Hj"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"未开始",
                        "uuid":"UH6SkLqn"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更新工作项描述

```json
{
    "id":"bTjYBbwvnjJKASZJ",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 修改了描述",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD64b88137",
            "task_uuid":"AAyPCMRD64b88137",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_description",
            "event_name":"更改工作项描述",
            "raw_message":{
                "uuid":"W4g7VTUG",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630898501228464,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRD64b88137",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"增加了描述。。。。",
                "ext":{
                    "field_name":"描述",
                    "field_type":2,
                    "field_uuid":"field002",
                    "new_value":"增加了描述。。。。",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置关联用例库用例

```json
{
    "id":"mG5Im3awU9N7iGmz",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 添加了关联用例「订单样式检查」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"related_test_case",
            "event_name":"设置关联用例库用例",
            "raw_message":{
                "uuid":"LFczp2FX",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630900836800400,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"标题",
                "object_attr":"related_testcases",
                "new_value":"NATmutXb",
                "ext":[
                    {
                        "case_name":"订单样式检查",
                        "case_uuid":"NATmutXb",
                        "library_uuid":"5cuLgCNA",
                        "module_uuid":"4xAo9zyR",
                        "plan_uuid":""
                    }
                ],
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置工作项关联wiki页面

```json
{
    "id":"SBMy9ZiVc54gStj4",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 添加了关联 Wiki 页面「技术方案」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"task_related_wiki_page",
            "event_name":"设置工作项关联 Wiki 页面",
            "raw_message":{
                "uuid":"LWpJ8FHY",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630901249246016,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"标题",
                "object_attr":"task_related_wiki_page",
                "new_value":"QqkWREc9",
                "ext":{
                    "page_title":"技术方案",
                    "page_uuid":"QqkWREc9"
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 变更工作项类型

```json
{
    "id":"EPflVOPHBHKNiKXp",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]多少发多少分",
            "desc":"ones 将工作项类型由「需求」变更为「任务」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/2b5Q4fQg/task/AAyPCMRD1R5ibN82",
            "task_uuid":"AAyPCMRD1R5ibN82",
            "issue_type_uuid":"2b5Q4fQg",
            "issue_type_name":"任务",
            "event_type":"update_issue_type",
            "event_name":"变更工作项类型",
            "raw_message":{
                "uuid":"YCyCdVE1",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630902711560512,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRD1R5ibN82",
                "object_name":"多少发多少分",
                "object_attr":"issue_type",
                "old_value":"5BpwSJhN",
                "new_value":"2b5Q4fQg",
                "ext":{
                    "batch_action":"std_to_std_issue_type",
                    "field_name":"任务",
                    "field_type":11,
                    "field_uuid":"field007",
                    "new_option":{
                        "name":"任务",
                        "uuid":"2b5Q4fQg"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"需求",
                        "uuid":"5BpwSJhN"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置工作项关联测试计划

```json
{
    "id":"rxO2bvUKedWhKXWq",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]多少发多少分",
            "desc":"ones 添加了关联测试计划「V1.0 订单系统优化」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/2b5Q4fQg/task/AAyPCMRD1R5ibN82",
            "task_uuid":"AAyPCMRD1R5ibN82",
            "issue_type_uuid":"2b5Q4fQg",
            "issue_type_name":"任务",
            "event_type":"task_related_testcase_plan",
            "event_name":"设置工作项关联测试计划",
            "raw_message":{
                "uuid":"9k4Cx9uw",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630902854541952,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD1R5ibN82",
                "object_name":"多少发多少分",
                "object_attr":"task_related_testcase_plan",
                "new_value":"4XJ3pNyk",
                "ext":{
                    "plan_name":"V1.0 订单系统优化",
                    "plan_uuid":"4XJ3pNyk"
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```





### 设置关联执行结果

```json
{
    "id":"lq4qS2O1B0gbPJ8a",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 添加了关联执行结果「订单样式检查」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"related_plan_case",
            "event_name":"设置关联执行结果",
            "raw_message":{
                "uuid":"LZZeL1N1",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630908541763648,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"标题",
                "object_attr":"related_plan_cases",
                "new_value":"NATmutXb",
                "ext":[
                    {
                        "case_name":"订单样式检查",
                        "case_uuid":"NATmutXb",
                        "library_uuid":"5cuLgCNA",
                        "module_uuid":"4xAo9zyR",
                        "plan_uuid":"4XJ3pNyk"
                    }
                ],
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 转为子工作项

```json
{
    "id":"F25J28VEOzMh3QPA",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将工作项转为子工作项：「子需求」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/Hdu81QQy/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_std_to_sub_issue_type",
            "event_name":"转为子工作项",
            "raw_message":{
                "uuid":"A972ExPy",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630908808719728,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"issue_type",
                "old_value":"5BpwSJhN",
                "new_value":"Hdu81QQy",
                "ext":{
                    "batch_action":"std_to_sub_issue_type",
                    "field_name":"子需求",
                    "field_type":11,
                    "field_uuid":"field021",
                    "new_option":{
                        "name":"子需求",
                        "uuid":"Hdu81QQy"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"需求",
                        "uuid":"5BpwSJhN"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置预估工时

```json
{
    "id":"jo5MNaOUwtxYD4pt",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 修改  的「预估工时」为「0 小时」，当前工作项「已预估工时」为「0 小时」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/Hdu81QQy/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_access_manhour",
            "event_name":"设置预估工时",
            "raw_message":{
                "uuid":"QUu8MEFH",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630910980100752,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"1200000",
                "ext":{
                    "field_name":"预估工时",
                    "field_type":4,
                    "field_uuid":"field018",
                    "new_value":"1200000",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更新剩余工时

```json
{
    "id":"sRSCYfBnKhp8vnP1",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「剩余工时」设置为「12小时」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/Hdu81QQy/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_remaining_manhour",
            "event_name":"更新剩余工时",
            "raw_message":{
                "uuid":"W41VgDv3",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630910980104800,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"1200000",
                "ext":{
                    "field_name":"剩余工时",
                    "field_type":4,
                    "field_uuid":"field020",
                    "new_value":"1200000",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更改优先级

```json
{
    "id":"OD5KPpph5acz3SNb",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「优先级」修改为「普通」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_priority",
            "event_name":"更改优先级",
            "raw_message":{
                "uuid":"NYgFe2Gc",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630911348934000,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"标题",
                "object_attr":"field",
                "old_value":"YXhmeKME",
                "new_value":"MNKJBrJx",
                "ext":{
                    "field_name":"优先级",
                    "field_type":1,
                    "field_uuid":"field012",
                    "new_option":{
                        "name":"普通",
                        "uuid":"MNKJBrJx"
                    },
                    "new_value":"MNKJBrJx",
                    "old_option":{
                        "name":"最高",
                        "uuid":"YXhmeKME"
                    },
                    "old_value":"YXhmeKME"
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更新登记工时

```json
{
    "id":"KYqFD29uUEAgqQVg",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 修改 ones 的「登记工时」为「2 小时」，当前工作项「已登记工时」为「2 小时」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_record_manhour",
            "event_name":"更新登记工时",
            "raw_message":{
                "uuid":"34etwVpv",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630911549229360,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"标题",
                "object_attr":"manhours",
                "new_value":"200000",
                "ext":{
                    "field_uuid":"field019",
                    "owner":"AAyPCMRD",
                    "owner_new_total":200000,
                    "owner_old_total":0,
                    "total":200000
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 新增评论

```json
{
    "id":"0Sf5oW2YctcqtXxL",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones:新加了评论。。。",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_message",
            "event_name":"新增评论",
            "raw_message":{
                "uuid":"C4xSJ9X4",
                "team_uuid":"3JypAUz3",
                "ref_type":"task",
                "ref_id":"AAyPCMRD8dc5fcd4",
                "type":"discussion",
                "from":"AAyPCMRD",
                "to":"AAyPCMRD8dc5fcd4",
                "send_time":1630911666344272,
                "text":"新加了评论。。。",
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 新增/取消关注工作项

```json
{
    "id":"ppJ3QjidpMhEXpzT",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]这是新标题",
            "desc":"ones 移除了关注者「ones」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_watcher",
            "event_name":"新增/取消关注工作项",
            "raw_message":{
                "uuid":"8CBLxtDi",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1630918621202640,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"delete",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"这是新标题",
                "object_attr":"watchers",
                "old_value":"AAyPCMRD",
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 设置所属迭代

```json
{
    "id":"y2pj4gsWtXRuhNSt",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「所属迭代」设置为「9.9.6」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD3736c261",
            "task_uuid":"AAyPCMRD3736c261",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_sprint",
            "event_name":"设置所属迭代",
            "raw_message":{
                "uuid":"8hj1SsiG",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631067670405216,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD3736c261",
                "object_name":"标题",
                "object_attr":"field",
                "new_value":"TvwqpKAz",
                "ext":{
                    "field_name":"所属迭代",
                    "field_type":7,
                    "field_uuid":"field011",
                    "new_option":{
                        "name":"9.9.6",
                        "uuid":"TvwqpKAz"
                    },
                    "new_value":"TvwqpKAz",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 更改所属产品

```json
{
    "id":"2jFdp6JpeD5INW36",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将属性「所属产品」设置为「ONES2」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD3736c261",
            "task_uuid":"AAyPCMRD3736c261",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_product",
            "event_name":"更改所属产品",
            "raw_message":{
                "uuid":"YNsNRv8t",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631067771435856,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"add",
                "object_type":"task",
                "object_id":"AAyPCMRD3736c261",
                "object_name":"标题",
                "object_attr":"product",
                "ext":{
                    "field_name":"所属产品",
                    "field_type":44,
                    "field_uuid":"field029",
                    "new_multi_option":[
                        {
                            "name":"ONES2",
                            "uuid":"AAyPCMRDKLovfodM"
                        }
                    ],
                    "new_value":"",
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 变更子工作项类型

```json
{
    "id":"mbKkXXFNAD77NLwY",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将工作项类型由「子需求」变更为「子任务」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/KouTGQi4/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_sub_to_sub_issue_type",
            "event_name":"变更子工作项类型",
            "raw_message":{
                "uuid":"6xCZyH9i",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631068026476752,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"issue_type",
                "old_value":"Hdu81QQy",
                "new_value":"KouTGQi4",
                "ext":{
                    "batch_action":"sub_to_sub_issue_type",
                    "field_name":"子任务",
                    "field_type":11,
                    "field_uuid":"field021",
                    "new_option":{
                        "name":"子任务",
                        "uuid":"KouTGQi4"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"子需求",
                        "uuid":"Hdu81QQy"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 变更父工作项

```json
{
    "id":"7v4dxxai4U7a8xet",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将父工作项由「标题」变更为「标题」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/KouTGQi4/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_sub_issue_type_parent",
            "event_name":"变更父工作项",
            "raw_message":{
                "uuid":"DHWmy9uT",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631068784134800,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"parent",
                "old_value":"AAyPCMRD3736c261",
                "new_value":"AAyPCMRD64b88137",
                "ext":{
                    "batch_action":"sub_modify_parent",
                    "field_name":"父工作项",
                    "field_type":10,
                    "field_uuid":"field014",
                    "new_option":{
                        "name":"标题",
                        "uuid":"AAyPCMRD64b88137"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"标题",
                        "uuid":"AAyPCMRD3736c261"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 转为标准工作项

```json
{
    "id":"UCqeItImLXlprfB1",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]标题",
            "desc":"ones 将子工作项转为标准工作项：「任务」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/2b5Q4fQg/task/AAyPCMRDcb4ea0cd",
            "task_uuid":"AAyPCMRDcb4ea0cd",
            "issue_type_uuid":"2b5Q4fQg",
            "issue_type_name":"任务",
            "event_type":"update_sub_to_std_issue_type",
            "event_name":"转为标准工作项",
            "raw_message":{
                "uuid":"MCrKjWgT",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631068927485552,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRDcb4ea0cd",
                "object_name":"标题",
                "object_attr":"issue_type",
                "old_value":"KouTGQi4",
                "new_value":"2b5Q4fQg",
                "ext":{
                    "batch_action":"sub_to_std_issue_type",
                    "field_name":"任务",
                    "field_type":11,
                    "field_uuid":"field007",
                    "new_option":{
                        "name":"任务",
                        "uuid":"2b5Q4fQg"
                    },
                    "new_value":"",
                    "old_option":{
                        "name":"子任务",
                        "uuid":"KouTGQi4"
                    },
                    "old_value":""
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```



### 工作项提醒

```json
{
    "id": "1EuBUhr79Yy0tDU1",
    "messages": [
        {
            "from_user": {
                "uuid": "9bV7QhWG",
                "name": "a"
            },
            "to_users": [
                {
                    "uuid": "Hyg2fMHf",
                    "name": "duxy1207+dev"
                }
            ],
            "title": "[dev]x3",
            "desc": "你有一条工作项提醒：距离 计划开始日期 已有 1天 ，请及时处理。",
            "url": "https://dev.ones.team/website/F1104_bugfix/#/team/HCMePSrT/project/Hyg2fMHfoP4R6nWD/issue_type/UvPYXzDt/task/Hyg2fMHfjTlEk6x1",
            "task_uuid": "Hyg2fMHfjTlEk6x1",
            "issue_type_uuid": "UvPYXzDt",
            "issue_type_name": "需求",
            "event_type": "task_notice",
            "event_name": "工作项提醒",
            "raw_message": {
                "uuid": "V54HogjJ",
                "team_uuid": "HCMePSrT",
                "ref_type": "project",
                "ref_id": "Hyg2fMHfoP4R6nWD",
                "type": "system",
                "from": "BOT",
                "to": "Hyg2fMHfoP4R6nWD",
                "send_time": 1631015644099968,
                "subject_type": "user",
                "subject_id": "9bV7QhWG",
                "action": "after",
                "object_type": "task",
                "object_id": "Hyg2fMHfjTlEk6x1",
                "object_name": "x3",
                "object_attr": "task_notice",
                "ext": {
                    "distance_time": {
                        "day": 1,
                        "hour": 0,
                        "minute": 0
                    },
                    "field_name": "计划开始日期",
                    "field_uuid": "field027"
                },
                "is_can_show_richtext_diff": false
            }
        }
    ]
}
```



### 更改负责人

```json
{
    "id":"AeMdRXvCr7aemfyp",
    "messages":[
        {
            "from_user":{
                "uuid":"AAyPCMRD",
                "name":"ones"
            },
            "to_users":[

            ],
            "title":"[ones]这是新标题",
            "desc":"ones 将属性「负责人」修改为「test」",
            "url":"http://192.168.1.148/project/#/team/3JypAUz3/project/AAyPCMRDJGasPE13/issue_type/5BpwSJhN/task/AAyPCMRD8dc5fcd4",
            "task_uuid":"AAyPCMRD8dc5fcd4",
            "issue_type_uuid":"5BpwSJhN",
            "issue_type_name":"需求",
            "event_type":"update_task_assign",
            "event_name":"更改负责人",
            "raw_message":{
                "uuid":"CTdpvbEr",
                "team_uuid":"3JypAUz3",
                "ref_type":"project",
                "ref_id":"AAyPCMRDJGasPE13",
                "type":"system",
                "from":"BOT",
                "to":"AAyPCMRDJGasPE13",
                "send_time":1631934709046208,
                "subject_type":"user",
                "subject_id":"AAyPCMRD",
                "action":"update",
                "object_type":"task",
                "object_id":"AAyPCMRD8dc5fcd4",
                "object_name":"这是新标题",
                "object_attr":"field",
                "old_value":"AAyPCMRD",
                "new_value":"PJLb16Gh",
                "ext":{
                    "field_name":"负责人",
                    "field_type":8,
                    "field_uuid":"field004",
                    "new_option":{
                        "name":"test",
                        "uuid":"PJLb16Gh"
                    },
                    "new_value":"PJLb16Gh",
                    "old_option":{
                        "name":"ones",
                        "uuid":"AAyPCMRD"
                    },
                    "old_value":"AAyPCMRD"
                },
                "is_can_show_richtext_diff":false
            }
        }
    ]
}
```
