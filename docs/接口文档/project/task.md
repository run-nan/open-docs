<!-- TOC depthTo:3 -->
# 工作项

- [模型](#模型)
  - [工作项](#工作项)
  - [工作项属性](#工作项属性)
  - [代码提交](#代码提交)
  - [登记工时](#登记工时)
- [API 说明](#api)
  - [1. 添加工作项](#1-添加工作项)
  - [2. 更新工作项](#2-更新工作项)
  - [3. 删除工作项](#3-删除工作项)
  - [4. 获取工作项统计数据接口](#4-获取工作项统计数据接口)
  - [5. 复制工作项](#5-复制工作项)
  - [6. 根据 UUID 或者序号获取工作项详情](#6)
  - [7. 根据 UUID 批量获取工作项详情](#7)

## 模型

### 工作项

task

| 参数名               | 值类型            | 取值范围      | 说明                                           |
| :------------------ | :--------------- | :----------- | ---------------------------------------------- |
| uuid                | string           | len=16       | 由创建者uuid+随机8位字符组成                   |
| owner               | string           | len=8        | 工作项创建者的用户id                             |
| assign              | string           | len=8        | 工作项负责人的用户id                             |
| sprint_uuid         | string           | len=16       | 里程碑id                                       |
| project_uuid        | string           | len=16       | 项目id                                         |
| issue_type_uuid     | string           | len=8        | 工作项类型id                                     |
| status_uuid         | string           | len=8        | 工作项状态id                                     |
| create_time         | int64            |              | 工作项创建时间，微秒                             |
| summary             | string           | len<=1024    | 工作项名                                         |
| desc                | string           | len<=65536   | 工作项描述                                       |
| desc_rich           | string           | len<=65536   | 工作项描述(富文本)                               |
| parent_uuid         | string           | len=16       | 父工作项id                                       |
| path                | string           |              | 工作项路径，用来表示子工作项关系                   |
| position            | int64            |              | 工作项位置                                       |
| number              | int              |              | 工作项序号                                       |
| priority            | string           | len=8        | 返回field_option的uuid，该uuid为优先级的选项值 |
| deadline            | int64            |              | 工作项截止日期                                   |
| field_values        | array            |              | field_value 列表，见下方说明                   |
| watchers            | array            |              | 工作项关注者                                     |
| code_commits        | array            |              | 工作项 commit, 见下方说明                        |
| update_time         | int64            |              | 显示的更新时间                                 |
| server_update_stamp | int64            |              | 更新时间戳（包括工作项的权限更新）               |
| related_task_count  | array            | [total,done] | 关联工作项数据统计                               |
| subtask_count       | array            | [total,done] | 子工作项数据统计                                 |
| discussion_count    | int64            |              | 消息数量                                       |
| attachment_count    | int64            |              | 附件数量                                       |
| assess_manhour      | int64            |              | 预估工时                                       |
| total_manhour       | int64            |              | 已登记工时合计                                 |
| remaining_manhour   | int64            |              | 剩余工时                                       |
| manhours            | array            |              | 登记工时列表，见下方说明                       |
| gantt               |[gannt](#时间视图) |              | 时间视图                                     |
| product_uuids       | []string         |              | 关联产品                                       |


### 工作项属性

field_value
- 属性分为固有属性和自定义属性
- 无论是自定义属性还是固有属性都可以通过 field_value 去创建、更新。
- 部分创建工作项不可更新的固有属性：watchers、owner、create_time、update_time、number、total_manhour、remaining_manhour、estimate_variance、time_progress
- 部分更新工作项不可更新的固有属性追加：assess_manhour
- 部分不可更新属性可以通过其他相关接口去更新

|参数名      | 值类型      | 可以为空   | 说明             |
|:--------- | :--------- |:-------   | :----------------|
|field_uuid | string     | 否        |属性[uuid]        |
|type       | int        | 否        |[属性类型](field.md#属性类型)  |
|value      | object     | 否        |属性值             |


### 状态码说明

| 状态码   | 说明     |
| :----- | :------- |
| 200    | 操作成功 |
| 403    | 没有访问该工作项的权限 |
| 404    | 工作项不存在 |
| 409    | 已经存在该工作项 |
| 500    | 接口错误 |
| 603    | 找不到需要修改的task |
| 801    | 参数无效 |
| 409    | 已经存在该工作项 |

## API 说明

### 1. 添加工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、remaining_manhour、estimate_variance、time_progress

#### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/add2

#### HTTP Method

POST

#### 调用权限

create_tasks

#### 传值方式

JSON

#### 参数列表

| 参数名                | 值类型                       | 可以为空    | 取值范围              | 说明                         |
|:-------------------- |:----------------------------|:---------- |:-------------------- |:--------------------------- |
| tasks                | array                       | 否         |                      | 批量添加工作项数组             |
| &emsp;uuid           | string                      | 否         | len=16               | 由创建者uuid+随机8位字符组成 |
| &emsp;assign         | string                      | 否         | len=8                | 工作项负责人的用户id           |
| &emsp;parent_uuid    | string                      | 是         | len=16               | 父工作项id                     |
| &emsp;sprint_uuid    | string                      | 是         | len=16               | 迭代id                    |
| &emsp;project_uuid   | string                      | 否         | len=16               | 项目id                       |
| &emsp;issue_type_uuid| string                      | 否         | len=8                | 工作项类型id                   |
| &emsp;summary        | string                      | 否         | len<=1024            | 工作项名                       |
| &emsp;desc           | string                      | 是         | len<=65536           | 工作项描述                     |
| &emsp;priority       | string                      | 否         | len=8                | 工作项优先级 [uuid]           |
| &emsp;deadline       | int64                       | 是         |                      | 工作项截止日期                 |
| &emsp;product_uuids  | []string                    | 是         | len=8                | 关联产品                        |
| &emsp;field_values   | [][field_values](#工作项属性) | 是         |                      | 属性值                          |
| &emsp;watchers  | []string                    | 是         |                | 关联产品                        |
| &emsp;add_manhours  | int64                    | 是         |                 | 预计工时                        |

#### 返回参数列表

| 参数名     | 值类型 | 说明                            |
| :--------- | :----- | :------------------------------ |
| tasks      | array  | 添加成功task的model，见上方说明 |
| bad_tasks  | array  | 修改失败的工作项                  |
| &emsp;uuid | string | 失败的工作项id                    |
| &emsp;code | int    | 错误码                          |
| &emsp;desc | string | 错误提示                        |

#### 请求体示例

```json
{
  "tasks":[
    {
      "uuid":"9uaNjXTJHhXkOHo5",
      "owner":"9uaNjXTJ",
      "assign":"9uaNjXTJ",
      "summary":"new task",
      "parent_uuid":"",
      "field_values":[
        {
          "field_uuid":"XLNfJF1f",
          "type":16,
          "value":[
            "A45o52B8",
            "43fhDHiq"
          ]
        },
        {
          "field_uuid":"field012",
          "type":1,
          "value":"CNtPGo2V"
        },
        {
          "field_uuid":"field016",
          "type":2,
          "value":"<p>des</p>\n"
        },
        {
          "field_uuid":"VC2A7yAi",
          "type":1,
          "value":"BTBcekS9"
        },
        {
          "field_uuid":"field032",
          "type":4,
          "value":50000
        },
        {
          "field_uuid":"field028",
          "type":5,
          "value":1626537599
        }
      ],
      "project_uuid":"9uaNjXTJhFzQ9xmd",
      "issue_type_uuid":"Babm2Py1",
      "add_manhours":[

      ],
      "watchers":[
        "9uaNjXTJ"
      ]
    }
  ]
}
```

#### 返回体示例

```json
{
    "tasks": [
        {
            "uuid": "DU6krHBNNKSnnHNj",
            "owner": "DU6krHBN",
            "assign": "DU6krHBN",
            "tags": "",
            "sprint_uuid": null,
            "project_uuid": "DU6krHBNXuPAbpv8",
            "issue_type_uuid": "GLLfcQxq",
            "sub_issue_type_uuid": "",
            "status_uuid": "4HfKoazf",
            "create_time": 1566182532175312,
            "deadline": null,
            "status": 1,
            "summary": "task_test",
            "desc": "task test.",
            "desc_rich": "<p>task test.</p>",
            "parent_uuid": "",
            "position": 0,
            "number": 44,
            "priority": "7tKAV46c",
            "assess_manhour": 0,
            "total_manhour": 0,
            "remaining_manhour": null,
            "attribute": null,
            "watchers": [
                "DU6krHBN"
            ],
            "field_values": [
                {
                    "field_uuid": "field001",
                    "type": 2,
                    "value": "task_test",
                    "value_type": 0
                },
                //
            ],
            "server_update_stamp": 1566182532300576,
            "related_tasks": [],
            "subtasks": [],
            "path": "DU6krHBNNKSnnHNj",
            "code_commits": [],
            "related_task_count": [
                0,
                0
            ],
            "visible_subtask_count": 0,
            "subtask_count": [
                0,
                0
            ],
            "discussion_count": 0,
            "attachment_count": 0,
            "related_cases": [],
            "related_plan_cases": [],
            "related_testcase_plans": [],
            "manhours": []
        }
    ],
    "bad_tasks": []
}
```

### 2. 更新工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、assess_manhour、remaining_manhour、estimate_variance、time_progress


#### URL

- update2 保留接口给手机 App 端调<br> 
https://your-host-name/project/api/project/team/:teamUUID/tasks/update2
- update3 给 Web 端调用，速度更快<br> 
https://your-host-name/project/api/project/team/:teamUUID/tasks/update3

#### HTTP Method

POST

#### 调用权限

update_tasks

#### 传值方式

JSON

#### 参数列表

| 参数名               | 值类型   | 可以为空    | 取值范围             | 说明                         |
| -------------------- | ------ | ---------- | -------------------- | ---------------------------- |
| tasks                | array  | 否         |                      | 批量添加工作项数组             |
| &emsp;uuid           | string | 否         | len=16               | 由创建者uuid+随机8位字符组成 |
| &emsp;assign         | string | 是         | len=8                | 工作项负责人的用户id           |
| &emsp;parent_uuid    | string | 是         | len=16               | 父工作项id                     |
| &emsp;sprint_uuid    | string | 是         | len=16               | 迭代id                    |
| &emsp;project_uuid   | string | 是         | len=16               | 项目id                       |
| &emsp;issue_type_uuid| string | 是         | len=8                | 工作项类型id                   |
| &emsp;summary        | string | 是         | len<=1024            | 工作项名                       |
| &emsp;desc           | string | 是         | len<=65536           | 工作项描述                     |
| &emsp;priority       | string | 是         | len=8                | 工作项优先级 [uuid]           |
| &emsp;deadline       | int64  | 是         |                      | 工作项截止日期                 |
| &emsp;field_values   | [][field_values](#工作项属性)| 是       |    | 属性值                   |

#### 返回参数列表

| 参数名     | 值类型 | 说明                            |
| :--------- | :----- | :------------------------------ |
| tasks      | array  | 修改成功task的model，见上方说明 |
| bad_tasks  | array  | 修改失败的工作项                  |
| &emsp;uuid | string | 失败的工作项id                    |
| &emsp;code | int    | 错误码                          |
| &emsp;desc | string | 错误提示                        |


#### 请求体示例

```json
{
  "tasks": [
    {
      "uuid": "Pqmud3zhPgKe7pwB",
      "desc_rich": "<p>？？？</p>\n",
      "descriptionText": "<p>？？？</p>\n"
    }
  ]
}
```

#### 返回体示例

```json
{
    "tasks": [
        {
            "uuid": "DU6krHBNNKSnnHNI",
            "owner": "DU6krHBN",
            "assign": "DU6krHBN",
            "tags": "",
            "sprint_uuid": null,
            "project_uuid": "DU6krHBNXuPAbpv8",
            "issue_type_uuid": "GLLfcQxq",
            "sub_issue_type_uuid": "",
            "status_uuid": "4HfKoazf",
            "create_time": 1566182356910512,
            "deadline": null,
            "status": 1,
            "summary": "task_test",
            "desc": "update task test . ",
            "desc_rich": "<p>update task test .&nbsp;</p>\n",
            "parent_uuid": "",
            "position": 0,
            "number": 43,
            "priority": "7tKAV46c",
            "assess_manhour": 0,
            "total_manhour": 0,
            "remaining_manhour": null,
            "attribute": null,
            "watchers": [
                "DU6krHBN"
            ],
            "field_values": [
                {
                    "field_uuid": "field001",
                    "type": 2,
                    "value": "task_test",
                    "value_type": 0
                },
                //
            ],
            "server_update_stamp": 1566183585782224,
            "related_tasks": [],
            "subtasks": [],
            "path": "DU6krHBNNKSnnHNI",
            "code_commits": [],
            "related_task_count": [
                0,
                0
            ],
            "visible_subtask_count": 0,
            "subtask_count": [
                0,
                0
            ],
            "discussion_count": 0,
            "attachment_count": 0,
            "related_cases": [],
            "related_plan_cases": [],
            "related_testcase_plans": [],
            "manhours": []
        }
    ],
    "bad_tasks": []
}
```

### 3. 删除工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/delete

#### HTTP Method

POST

#### 调用权限

delete_tasks

#### 传值方式

无

#### 返回JSON

无


#### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBN7TS9TKx7/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 响应体示例

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

### 4. 获取工作项统计数据接口

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_stats

#### HTTP Method

GET

#### 调用权限

项目成员

#### 参数列表

无

#### 返回参数列表

| 参数名                   | 值类型 | 说明                         |
| ------------------------ | ------ | ---------------------------- |
| task_count_by_project    | object | 项目下工作项的分类统计数       |
| &emsp;&emsp;project_uuid | string | 项目id                       |
| &emsp;&emsp;to_do        | int    | 未开始分类的工作项数           |
| &emsp;&emsp;in_progress  | int    | 进行中分类的工作项数           |
| &emsp;&emsp;done         | int    | 已完成分类的工作项数           |
| task_count_by_sprint     | object | sprint下工作项的分类统计数     |
| &emsp;&emsp;sprint_uuid  | string | sprint id                    |
| &emsp;&emsp;to_do        | int    | 未开始分类的工作项数           |
| &emsp;&emsp;in_progress  | int    | 进行中分类的工作项数           |
| &emsp;&emsp;done         | int    | 已完成分类的工作项数           |
| server_update_stamp      | int64  | task_stats类型数据的更新时间 |

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_stats \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  ```

#### 返回体示例

```json
{
    "task_count_by_project": [
        {
            "project_uuid": "DU6krHBNXuPAbpv8",
            "to_do": 5,
            "in_progress": 0,
            "done": 0
        }
    ],
    "task_count_by_sprint": [
        {
            "sprint_uuid": "9a7pD8HD",
            "to_do": 0,
            "in_progress": 0,
            "done": 0
        }
    ],
    "server_update_stamp": 1566183936771008
}
```


### 5. 复制工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/copy

#### HTTP Method

POST

#### 调用权限

目标 issueType 下 view_tasks

#### 参数列表

| 参数名           | 值类型   | 是否必选 | 取值范围   | 说明                 |
| ---------------- | -------- | -------- | ---------- | -------------------- |
| project_uuid     | string   | T        | len=16     | 目标project的UUID    |
| issue_type_uuid  | string   | T        | len=16     | 目标issue_type的UUID |
| status_uuid      | string   | T        | len=16     | 目标status的UUID     |
| reserve_contents | []string | F        | 见下面说明 | 保留内容             |

说明：reserve_contents的值[cycle, relatedTask, testing, relatedWiki, attachment, watcher, subTask, selfManhour, allManhour, ]
cycle(周期与进度),relatedTask(关联内容),testing(测试情况),relatedWiki(关联wiki页面),attachment(文件),watcher(关注者),subTask(复制子工作项),selfManhour(只复制我的工时信息),allManhour(复制所有的工时信息)

#### 返回参数列表

| 参数名 | 值类型 | 说明                           |
| ------ | ------ | ------------------------------ |
| task   | object | 复制成功的task,见上方model说明 |

#### 请求体示例

```json
{
  "tasks": [
    {
      "task_uuid": "Pqmud3zhGwsAPUpa",
      "project_uuid": "Pqmud3zh1bGui9Nd",
      "issue_type_uuid": "GwNxpqQh",
      "status_uuid": "Wuxv7mE7"
    }
  ],
  "reserve_contents": [
    "cycle",
    "relatedTask",
    "testing",
    "relatedWiki",
    "attachment",
    "watcher",
    "subTask"
  ]
}
```

#### 返回体示例

```json
{
  "task": {
    "uuid": "9uaNjXTJ9UoygPev",
    "owner": "9uaNjXTJ",
    "assign": "9uaNjXTJ",
    "tags": "",
    "sprint_uuid": null,
    "project_uuid": "9uaNjXTJhFzQ9xmd",
    "issue_type_scope_uuid": "XMUJasYp",
    "issue_type_uuid": "Babm2Py1",
    "sub_issue_type_uuid": "",
    "status_uuid": "J4vGJaax",
    "create_time": 1626419483537216,
    "deadline": 1625712733,
    "status": 1,
    "summary": "new task2",
    "desc": "哈哈大声很大声",
    "desc_rich": "<p>哈哈大声很大声</p>\n",
    "parent_uuid": "",
    "position": 0,
    "number": 89,
    "priority": "YQ3yGULf",
    "assess_manhour": null,
    "total_manhour": 0,
    "remaining_manhour": null,
    "estimate_variance": null,
    "time_progress": null,
    "attribute": null,
    "watchers": null,
    "field_values": [
      {
        "field_uuid": "VC2A7yAi",
        "type": 1,
        "value": "UWMz8bkE",
        "value_type": 0
      },
      {
        "field_uuid": "GAMEuBgs",
        "type": 1,
        "value": null,
        "value_type": 0
      },
      {
        "field_uuid": "3ESTDMnK",
        "type": 50,
        "value": null,
        "value_type": 0
      },
      {
        "field_uuid": "XLNfJF1f",
        "type": 16,
        "value": [
          "A45o52B8",
          "43fhDHiq"
        ],
        "value_type": 0
      },
      {
        "field_uuid": "field032",
        "type": 4,
        "value": null,
        "value_type": 0
      }
    ],
    "server_update_stamp": 1626419483537232,
    "related_tasks": null,
    "links": null,
    "subtasks": null,
    "path": "9uaNjXTJ9UoygPev",
    "code_commits": null,
    "related_task_count": null,
    "visible_subtask_count": 0,
    "subtask_count": null,
    "discussion_count": 0,
    "attachment_count": 0,
    "related_cases": null,
    "related_plan_cases": null,
    "related_testcase_plans": null,
    "related_wiki_pages": null,
    "related_activities": null,
    "related_devops_commits": null,
    "publish_version": null,
    "publish_content": null,
    "publish_content_done_count": 0,
    "publish_content_count": 0,
    "manhours": null,
    "product_uuids": null,
    "only_edit_alone_permission_fields": false,
    "SkipCheckFieldPermissions": false
  }
}
```

### 6. 根据 UUID 或者序号获取工作项详情

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUIDOrNumber/info

#### HTTP Method

GET

#### 调用权限

view_tasks

#### 传值方式

URL

#### 参数列表

无

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNJPoQgfJv/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "uuid": "9uaNjXTJHhXkOHo3",
  "owner": "9uaNjXTJ",
  "assign": "9uaNjXTJ",
  "tags": "",
  "sprint_uuid": null,
  "project_uuid": "9uaNjXTJhFzQ9xmd",
  "issue_type_scope_uuid": "XMUJasYp",
  "issue_type_uuid": "Babm2Py1",
  "sub_issue_type_uuid": "",
  "status_uuid": "J4vGJaax",
  "create_time": 1626401118846784,
  "deadline": 1625712733,
  "status": 1,
  "summary": "new task2",
  "desc": "哈哈大声很大声",
  "desc_rich": "<p>哈哈大声很大声</p>\n",
  "parent_uuid": "",
  "position": 0,
  "number": 84,
  "priority": "YQ3yGULf",
  "assess_manhour": 1200000,
  "total_manhour": 0,
  "remaining_manhour": 1200000,
  "estimate_variance": null,
  "time_progress": 0,
  "attribute": null,
  "watchers": [
    "9uaNjXTJ"
  ],
  "field_values": [
    {
      "field_uuid": "GAMEuBgs",
      "type": 1,
      "value": null,
      "value_type": 0
    },
    {
      "field_uuid": "VC2A7yAi",
      "type": 1,
      "value": "UWMz8bkE",
      "value_type": 0
    },
    {
      "field_uuid": "field027",
      "type": 5,
      "value": 1626364800,
      "value_type": 0
    },
    {
      "field_uuid": "field028",
      "type": 5,
      "value": null,
      "value_type": 0
    },
    {
      "field_uuid": "field032",
      "type": 4,
      "value": null,
      "value_type": 0
    },
    {
      "field_uuid": "field037",
      "type": 49,
      "value": null,
      "value_type": 0
    },
    {
      "field_uuid": "XLNfJF1f",
      "type": 16,
      "value": [
        "A45o52B8",
        "43fhDHiq"
      ],
      "value_type": 0
    },
    {
      "field_uuid": "field001",
      "type": 2,
      "value": "new task2",
      "value_type": 0
    },
    {
      "field_uuid": "field002",
      "type": 2,
      "value": "哈哈大声很大声",
      "value_type": 0
    }
  ],
  "server_update_stamp": 1626407783643776,
  "related_tasks": [],
  "links": [],
  "subtasks": [],
  "path": "9uaNjXTJHhXkOHo3",
  "code_commits": [],
  "related_task_count": [
    0,
    0
  ],
  "visible_subtask_count": 0,
  "subtask_count": [
    0,
    0
  ],
  "discussion_count": 0,
  "attachment_count": 0,
  "related_cases": [],
  "related_plan_cases": [],
  "related_testcase_plans": [],
  "related_wiki_pages": [],
  "related_activities": [],
  "related_devops_commits": [],
  "publish_version": null,
  "publish_content": [],
  "publish_content_done_count": 0,
  "publish_content_count": 0,
  "manhours": [],
  "product_uuids": null,
  "only_edit_alone_permission_fields": false,
  "SkipCheckFieldPermissions": false
}
```

###7. 根据 UUID 批量获取工作项详情

#### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/info

#### HTTP Method

GET, POST

#### 调用权限

无

#### 传值方式

URL(GET), JSON(POST)

#### 参数列表

GET

| 参数名 | 是否必须 | 值类型 | 取值例子                          | 说明                                            |
| :----- | :------- | :----- | :-------------------------------- | :---------------------------------------------- |
| ids    | T        | string | ojytvgw3876gdkut,juyg5oi87tgdwet6 | 多个使用逗号隔开,单个uuid长度为16，并且不能重复 |

POST

| 参数名 | 是否必须 | 值类型   | 说明      |
| :----- | :------- | :------- | :-------- |
| ids    | T        | []string | uuid 数组 |



#### 返回参数列表

| JSON键名   | 值类型 | 取值范围 | 说明                                          |
| :--------- | :----- | :------- | :-------------------------------------------- |
| tasks      | array  |          | 工作项列表 |
| count      | int    |          | 获取成功的工作项数量                            |
| errors     | array  |          | 获取失败的工作项列表                            |
| &emsp;uuid | string |          | 工作项uuid                                      |
| &emsp;code | int    |          | 错误码                                        |
| &emsp;desc | string |          | 错误描述                                      |

#### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/tasks/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "ids": [
        "DU6krHBNJPoQgfJv",
        "DU6krHBNNKSnnHNI"
    ]
}'
```

#### 返回体示例

```json
{
  "tasks": [
    {
      "uuid": "9uaNjXTJHhXkOHo3",
      "owner": "9uaNjXTJ",
      "assign": "9uaNjXTJ",
      "tags": "",
      "sprint_uuid": null,
      "project_uuid": "9uaNjXTJhFzQ9xmd",
      "issue_type_scope_uuid": "XMUJasYp",
      "issue_type_uuid": "Babm2Py1",
      "sub_issue_type_uuid": "",
      "status_uuid": "J4vGJaax",
      "create_time": 1626401118846784,
      "deadline": 1625712733,
      "status": 1,
      "summary": "new task2",
      "desc": "哈哈大声很大声",
      "desc_rich": "<p>哈哈大声很大声</p>\n",
      "parent_uuid": "",
      "position": 0,
      "number": 84,
      "priority": "YQ3yGULf",
      "assess_manhour": 1200000,
      "total_manhour": 0,
      "remaining_manhour": 1200000,
      "estimate_variance": null,
      "time_progress": 0,
      "attribute": null,
      "watchers": [
        "9uaNjXTJ"
      ],
      "field_values": [
        {
          "field_uuid": "GAMEuBgs",
          "type": 1,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "VC2A7yAi",
          "type": 1,
          "value": "UWMz8bkE",
          "value_type": 0
        },
        {
          "field_uuid": "field027",
          "type": 5,
          "value": 1626364800,
          "value_type": 0
        },
        {
          "field_uuid": "field028",
          "type": 5,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field032",
          "type": 4,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field037",
          "type": 49,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "XLNfJF1f",
          "type": 16,
          "value": [
            "A45o52B8",
            "43fhDHiq"
          ],
          "value_type": 0
        },
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "new task2",
          "value_type": 0
        },
        {
          "field_uuid": "field002",
          "type": 2,
          "value": "哈哈大声很大声",
          "value_type": 0
        },
        {
          "field_uuid": "field003",
          "type": 8,
          "value": "9uaNjXTJ",
          "value_type": 0
        },
        {
          "field_uuid": "field004",
          "type": 8,
          "value": "9uaNjXTJ",
          "value_type": 0
        },
        {
          "field_uuid": "field005",
          "type": 12,
          "value": "J4vGJaax",
          "value_type": 0
        },
        {
          "field_uuid": "field006",
          "type": 9,
          "value": "9uaNjXTJhFzQ9xmd",
          "value_type": 0
        },
        {
          "field_uuid": "field007",
          "type": 11,
          "value": "Babm2Py1",
          "value_type": 0
        },
        {
          "field_uuid": "field009",
          "type": 6,
          "value": 1626401118846784,
          "value_type": 0
        },
        {
          "field_uuid": "field010",
          "type": 6,
          "value": 1626407783643776,
          "value_type": 0
        },
        {
          "field_uuid": "field011",
          "type": 7,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field012",
          "type": 1,
          "value": "YQ3yGULf",
          "value_type": 0
        },
        {
          "field_uuid": "field013",
          "type": 5,
          "value": 1625712733,
          "value_type": 0
        },
        {
          "field_uuid": "field015",
          "type": 14,
          "value": 84,
          "value_type": 0
        },
        {
          "field_uuid": "field016",
          "type": 2,
          "value": "<p>哈哈大声很大声</p>\n",
          "value_type": 0
        },
        {
          "field_uuid": "field018",
          "type": 4,
          "value": 1200000,
          "value_type": 0
        },
        {
          "field_uuid": "field019",
          "type": 4,
          "value": 0,
          "value_type": 0
        },
        {
          "field_uuid": "field020",
          "type": 4,
          "value": 1200000,
          "value_type": 0
        },
        {
          "field_uuid": "field021",
          "type": 11,
          "value": "",
          "value_type": 0
        },
        {
          "field_uuid": "field025",
          "type": 4,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field026",
          "type": 4,
          "value": 0,
          "value_type": 0
        },
        {
          "field_uuid": "field033",
          "type": 4,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field035",
          "type": 4,
          "value": null,
          "value_type": 0
        }
      ],
      "server_update_stamp": 1626407783643776,
      "related_tasks": [],
      "links": [],
      "subtasks": [],
      "path": "9uaNjXTJHhXkOHo3",
      "code_commits": [],
      "related_task_count": [
        0,
        0
      ],
      "visible_subtask_count": 0,
      "subtask_count": [
        0,
        0
      ],
      "discussion_count": 0,
      "attachment_count": 0,
      "related_cases": [],
      "related_plan_cases": [],
      "related_testcase_plans": [],
      "related_wiki_pages": [],
      "related_activities": [],
      "related_devops_commits": [],
      "publish_version": null,
      "publish_content": [],
      "publish_content_done_count": 0,
      "publish_content_count": 0,
      "manhours": [],
      "product_uuids": null,
      "only_edit_alone_permission_fields": false,
      "SkipCheckFieldPermissions": false
    }
  ],
  "count": 1,
  "errors": [
    {
      "code": 404,
      "errcode": "NotFound.Task",
      "model": "Task",
      "type": "NotFound",
      "uuid": "9uaNjXTJHhXkOHo5"
    }
  ]
}
```
