# 目录

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

## 工作项

task

| 参数名              | 值类型                                                | 取值范围     | 说明                                                |
| :------------------ | :---------------------------------------------------- | :----------- | --------------------------------------------------- |
| uuid                | string                                                | len=16       | 由创建者 uuid+随机 8 位字符组成                     |
| owner               | string                                                | len=8        | 工作项创建者的用户 id                               |
| assign              | string                                                | len=8        | 工作项负责人的用户 id                               |
| sprint_uuid         | string                                                | len=16       | 里程碑 id                                           |
| project_uuid        | string                                                | len=16       | 项目 id                                             |
| issue_type_uuid     | string                                                | len=8        | 工作项类型 id                                       |
| status_uuid         | string                                                | len=8        | 工作项状态 id                                       |
| create_time         | int64                                                 |              | 工作项创建时间，微秒                                |
| summary             | string                                                | len<=1024    | 工作项名                                            |
| desc                | string                                                | len<=65536   | 工作项描述                                          |
| desc_rich           | string                                                | len<=65536   | 工作项描述(富文本)                                  |
| parent_uuid         | string                                                | len=16       | 父工作项 id                                         |
| path                | string                                                |              | 工作项路径，用来表示子工作项关系                    |
| position            | int64                                                 |              | 工作项位置                                          |
| number              | int                                                   |              | 工作项序号                                          |
| priority            | string                                                | len=8        | 返回 field_option 的 uuid，该 uuid 为优先级的选项值 |
| deadline            | int64                                                 |              | 工作项截止日期                                      |
| field_values        | array                                                 |              | field_value 列表，见下方说明                        |
| watchers            | array                                                 |              | 工作项关注者                                        |
| code_commits        | array                                                 |              | 工作项 commit, 见下方说明                           |
| update_time         | int64                                                 |              | 显示的更新时间                                      |
| server_update_stamp | int64                                                 |              | 更新时间戳（包括工作项的权限更新）                  |
| related_task_count  | array                                                 | [total,done] | 关联工作项数据统计                                  |
| subtask_count       | array                                                 | [total,done] | 子工作项数据统计                                    |
| discussion_count    | int64                                                 |              | 消息数量                                            |
| attachment_count    | int64                                                 |              | 附件数量                                            |
| assess_manhour      | int64                                                 |              | 预估工时                                            |
| total_manhour       | int64                                                 |              | 已登记工时合计                                      |
| remaining_manhour   | int64                                                 |              | 剩余工时                                            |
| manhours            | array                                                 |              | 登记工时列表，见下方说明                            |
| gantt               | [gannt](../../item/task_gantt/task_gantt.md#时间视图) |              | 时间视图                                            |
| product_uuids       | []string                                              |              | 关联产品                                            |

## 工作项属性

field_value

- 属性分为固有属性和自定义属性
- 无论是自定义属性还是固有属性都可以通过 field_value 去创建、更新。
- 部分创建工作项不可更新的固有属性：watchers、owner、create_time、update_time、number、total_manhour、remaining_manhour、estimate_variance、time_progress
- 部分更新工作项不可更新的固有属性追加：assess_manhour
- 部分不可更新属性可以通过其他相关接口去更新

| 参数名     | 值类型 | 可以为空 | 说明                                   |
| :--------- | :----- | :------- | :------------------------------------- |
| field_uuid | string | 否       | 属性[uuid]                             |
| type       | int    | 否       | [属性类型](../field/field.md#属性类型) |
| value      | object | 否       | 属性值                                 |

### 状态码说明

| 状态码 | 说明                   |
| :----- | :--------------------- |
| 200    | 操作成功               |
| 403    | 没有访问该工作项的权限 |
| 404    | 工作项不存在           |
| 500    | 接口错误               |
| 603    | 找不到需要修改的 task  |
| 801    | 参数无效               |

## API 说明

## 1. 添加工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、remaining_manhour、estimate_variance、time_progress

### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/add2

### HTTP Method

POST

### 调用权限

create_tasks

### 传值方式

JSON

### 参数列表

| 参数名                    | 值类型                        | 可以为空 | 取值范围   | 说明                                                |
| :------------------------ | :---------------------------- | :------- | :--------- | :-------------------------------------------------- |
| tasks                     | array                         | 否       |            | 批量添加工作项数组                                  |
| &emsp;uuid                | string                        | 否       | len=16     | 由创建者 uuid+随机 8 位字符组成                     |
| &emsp;assign              | string                        | 否       | len=8      | 工作项负责人的用户 id                               |
| &emsp;parent_uuid         | string                        | 是       | len=16     | 父工作项 id                                         |
| &emsp;sprint_uuid         | string                        | 是       | len=16     | 迭代 id                                             |
| &emsp;project_uuid        | string                        | 否       | len=16     | 项目 id，无父工作项时需要保留参数，传空字符串即可数 |
| &emsp;issue_type_uuid     | string                        | 否       | len=8      | 工作项类型 id                                       |
| &emsp;sub_issue_type_uuid | string                        | 是       | len=8      | 子工作项类型 id                                     |
| &emsp;summary             | string                        | 否       | len<=1024  | 工作项名                                            |
| &emsp;desc                | string                        | 是       | len<=65536 | 工作项描述                                          |
| &emsp;priority            | string                        | 否       | len=8      | 工作项优先级 [uuid]                                 |
| &emsp;deadline            | int64                         | 是       |            | 工作项截止日期                                      |
| &emsp;product_uuids       | []string                      | 是       | len=8      | 关联产品                                            |
| &emsp;field_values        | [][field_values](#工作项属性) | 是       |            | 属性值                                              |

### 返回参数列表

| 参数名     | 值类型 | 说明                               |
| :--------- | :----- | :--------------------------------- |
| tasks      | array  | 添加成功 task 的 model，见上方说明 |
| bad_tasks  | array  | 修改失败的工作项                   |
| &emsp;uuid | string | 失败的工作项 id                    |
| &emsp;code | int    | 错误码                             |
| &emsp;desc | string | 错误提示                           |

### 请求体示例

示例一

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/tasks/add2 \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "tasks":[
        {
            "uuid":"DU6krHBNNKSnnHNj",
            "assign":"DU6krHBN",
            "summary":"task_test",
            "parent_uuid":"",
            "project_uuid":"DU6krHBNXuPAbpv8",
            "issue_type_uuid":"GLLfcQxq",
            "priority":"7tKAV46c"
        }
    ]
}'
```

示例二

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/tasks/add2 \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "tasks":[
        {
            "uuid":"DU6krHBNNGEQpcnW5",
            "assign":"DU6krHBN",
            "summary":"task_test",
            "parent_uuid":"DU6krHBNNKSnnHNj",
            "sprint_uuid":"LJZM6N3J",
            "project_uuid":"DU6krHBNXuPAbpv8",
            "issue_type_uuid":"",
            "sub_issue_type_uuid":"Cdm9fgFS",
            "priority":"7tKAV46c",
            "field_values":[
                {
                    "field_uuid": "field012",
                    "type": 1,
                    "value": "YQ3yGULf" // 选项类型，value 是选项的 uuid
                },
                {
                    "field_uuid":"field016",
                    "type":2,
                    "value":"<p>描述</p>\n"
                }
            ]
        }
    ]
}'
```

### 返回体示例

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
      "watchers": ["DU6krHBN"],
      "field_values": [
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "task_test",
          "value_type": 0
        }
        //
      ],
      "server_update_stamp": 1566182532300576,
      "related_tasks": [],
      "subtasks": [],
      "path": "DU6krHBNNKSnnHNj",
      "code_commits": [],
      "related_task_count": [0, 0],
      "visible_subtask_count": 0,
      "subtask_count": [0, 0],
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

## 2. 更新工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、assess_manhour、remaining_manhour、estimate_variance、time_progress

### URL

- update2 保留接口给手机 App 端调<br/>
  https://your-host-name/project/api/project/team/:teamUUID/tasks/update2
- update3 给 Web 端调用，速度更快<br/>
  https://your-host-name/project/api/project/team/:teamUUID/tasks/update3

### HTTP Method

POST

### 调用权限

update_tasks

### 传值方式

JSON

### 参数列表

| 参数名                | 值类型                        | 可以为空 | 取值范围   | 说明                            |
| --------------------- | ----------------------------- | -------- | ---------- | ------------------------------- |
| tasks                 | array                         | 否       |            | 批量添加工作项数组              |
| &emsp;uuid            | string                        | 否       | len=16     | 由创建者 uuid+随机 8 位字符组成 |
| &emsp;assign          | string                        | 是       | len=8      | 工作项负责人的用户 id           |
| &emsp;parent_uuid     | string                        | 是       | len=16     | 父工作项 id                     |
| &emsp;sprint_uuid     | string                        | 是       | len=16     | 迭代 id                         |
| &emsp;project_uuid    | string                        | 是       | len=16     | 项目 id                         |
| &emsp;issue_type_uuid | string                        | 是       | len=8      | 工作项类型 id                   |
| &emsp;summary         | string                        | 是       | len<=1024  | 工作项名                        |
| &emsp;desc            | string                        | 是       | len<=65536 | 工作项描述                      |
| &emsp;priority        | string                        | 是       | len=8      | 工作项优先级 [uuid]             |
| &emsp;deadline        | int64                         | 是       |            | 工作项截止日期                  |
| &emsp;field_values    | [][field_values](#工作项属性) | 是       |            | 属性值                          |

### 返回参数列表

| 参数名     | 值类型 | 说明                               |
| :--------- | :----- | :--------------------------------- |
| tasks      | array  | 修改成功 task 的 model，见上方说明 |
| bad_tasks  | array  | 修改失败的工作项                   |
| &emsp;uuid | string | 失败的工作项 id                    |
| &emsp;code | int    | 错误码                             |
| &emsp;desc | string | 错误提示                           |

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/tasks/update2 \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "tasks": [
        {
            "uuid": "DU6krHBNNKSnnHNI",
            "desc_rich": "<p>update task test .&nbsp;</p>\n"
        }
    ]
}'
```

### 返回体示例

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
      "watchers": ["DU6krHBN"],
      "field_values": [
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "task_test",
          "value_type": 0
        }
        //
      ],
      "server_update_stamp": 1566183585782224,
      "related_tasks": [],
      "subtasks": [],
      "path": "DU6krHBNNKSnnHNI",
      "code_commits": [],
      "related_task_count": [0, 0],
      "visible_subtask_count": 0,
      "subtask_count": [0, 0],
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

## 3. 删除工作项

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/delete

### HTTP Method

POST

### 调用权限

delete_tasks

### 传值方式

无

### 返回 JSON

无

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBN7TS9TKx7/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 响应体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## 4. 获取工作项统计数据接口

### URL

https://your-host-name/project/api/project/team/:teamUUID/task_stats

### HTTP Method

GET

### 调用权限

项目成员

### 参数列表

无

### 返回参数列表

| 参数名                   | 值类型 | 说明                          |
| ------------------------ | ------ | ----------------------------- |
| task_count_by_project    | object | 项目下工作项的分类统计数      |
| &emsp;&emsp;project_uuid | string | 项目 id                       |
| &emsp;&emsp;to_do        | int    | 未开始分类的工作项数          |
| &emsp;&emsp;in_progress  | int    | 进行中分类的工作项数          |
| &emsp;&emsp;done         | int    | 已完成分类的工作项数          |
| task_count_by_sprint     | object | sprint 下工作项的分类统计数   |
| &emsp;&emsp;sprint_uuid  | string | sprint id                     |
| &emsp;&emsp;to_do        | int    | 未开始分类的工作项数          |
| &emsp;&emsp;in_progress  | int    | 进行中分类的工作项数          |
| &emsp;&emsp;done         | int    | 已完成分类的工作项数          |
| server_update_stamp      | int64  | task_stats 类型数据的更新时间 |

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_stats \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

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

## 5. 复制工作项

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/copy

### HTTP Method

POST

### 调用权限

目标 issueType 下 view_tasks

### 参数列表

| 参数名          | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明                    |
| --------------- | ------ | ---------- | -------- | -------- | ----------------------- |
| project_uuid    | string | 否         | len=16   |          | 目标 project 的 UUID    |
| issue_type_uuid | string | 否         | len=16   |          | 目标 issue_type 的 UUID |

### 返回参数列表

| 参数名 | 值类型 | 说明                              |
| ------ | ------ | --------------------------------- |
| task   | object | 复制成功的 task,见上方 model 说明 |

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNNKSnnHNI/copy \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "project_uuid": "DU6krHBNXuPAbpv8",
    "issue_type_uuid": "GLLfcQxq"
}'
```

### 返回体示例

```json
{
  "task": {
    "uuid": "DU6krHBNJPoQgfJv",
    "owner": "DU6krHBN",
    "assign": "DU6krHBN",
    "tags": "",
    "sprint_uuid": null,
    "project_uuid": "DU6krHBNXuPAbpv8",
    "issue_type_uuid": "GLLfcQxq",
    "sub_issue_type_uuid": "",
    "status_uuid": "4HfKoazf",
    "create_time": 1566183936709120,
    "deadline": null,
    "status": 1,
    "summary": "task_test",
    "desc": "update task test . ",
    "desc_rich": "<p>update task test .&nbsp;</p>\n",
    "parent_uuid": "",
    "position": 0,
    "number": 46,
    "priority": "7tKAV46c",
    "assess_manhour": 0,
    "total_manhour": null,
    "remaining_manhour": null,
    "attribute": null,
    "watchers": null,
    "field_values": [
      {
        "field_uuid": "field008",
        "type": 13,
        "value": ["DU6krHBN"],
        "value_type": 0
      }
    ],
    "server_update_stamp": 1566183936709136,
    "related_tasks": [],
    "subtasks": null,
    "path": "DU6krHBNJPoQgfJv",
    "code_commits": null,
    "related_task_count": null,
    "visible_subtask_count": 0,
    "subtask_count": null,
    "discussion_count": 0,
    "attachment_count": 0,
    "related_cases": null,
    "related_plan_cases": null,
    "related_testcase_plans": [],
    "manhours": null
  }
}
```

<h3 id="6"> 6. 根据 UUID 或者序号获取工作项详情 </h3>

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUIDOrNumber/info

### HTTP Method

GET

### 调用权限

view_tasks

### 传值方式

URL

### 参数列表

无

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNJPoQgfJv/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

```json
{
  "uuid": "DU6krHBNJPoQgfJv",
  "owner": "DU6krHBN",
  "assign": "DU6krHBN",
  "tags": "",
  "sprint_uuid": null,
  "project_uuid": "DU6krHBNXuPAbpv8",
  "issue_type_uuid": "GLLfcQxq",
  "sub_issue_type_uuid": "",
  "status_uuid": "4HfKoazf",
  "create_time": 1566183936709120,
  "deadline": null,
  "status": 1,
  "summary": "task_test",
  "desc": "update task test . ",
  "desc_rich": "<p>update task test .&nbsp;</p>\n",
  "parent_uuid": "",
  "position": 0,
  "number": 46,
  "priority": "7tKAV46c",
  "assess_manhour": 0,
  "total_manhour": 0,
  "remaining_manhour": null,
  "attribute": null,
  "watchers": ["DU6krHBN"],
  "field_values": [
    {
      "field_uuid": "field001",
      "type": 2,
      "value": "task_test",
      "value_type": 0
    }
    //
  ],
  "server_update_stamp": 1566184138886544,
  "related_tasks": [],
  "subtasks": [],
  "path": "DU6krHBNJPoQgfJv",
  "code_commits": [],
  "related_task_count": [0, 0],
  "visible_subtask_count": 0,
  "subtask_count": [0, 0],
  "discussion_count": 0,
  "attachment_count": 0,
  "related_cases": [],
  "related_plan_cases": [],
  "related_testcase_plans": [],
  "manhours": []
}
```

<h3 id="7"> 7. 根据 UUID 批量获取工作项详情 </h3>

### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/info

### HTTP Method

GET, POST

### 调用权限

无

### 传值方式

URL(GET), JSON(POST)

### 参数列表

GET

| 参数名 | 是否必须 | 值类型 | 取值例子                          | 说明                                               |
| :----- | :------- | :----- | :-------------------------------- | :------------------------------------------------- |
| ids    | T        | string | ojytvgw3876gdkut,juyg5oi87tgdwet6 | 多个使用逗号隔开,单个 uuid 长度为 16，并且不能重复 |

POST

| 参数名 | 是否必须 | 值类型   | 说明      |
| :----- | :------- | :------- | :-------- |
| ids    | T        | []string | uuid 数组 |

### 返回参数列表

| JSON 键名  | 值类型 | 取值范围 | 说明                 |
| :--------- | :----- | :------- | :------------------- |
| tasks      | array  |          | 工作项列表           |
| count      | int    |          | 获取成功的工作项数量 |
| errors     | array  |          | 获取失败的工作项列表 |
| &emsp;uuid | string |          | 工作项 uuid          |
| &emsp;code | int    |          | 错误码               |
| &emsp;desc | string |          | 错误描述             |

### 请求体示例

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

### 返回体示例

```json
{
  "tasks": [
    {
      "uuid": "DU6krHBNJPoQgfJv",
      "owner": "DU6krHBN",
      "assign": "DU6krHBN",
      "tags": "",
      "sprint_uuid": null,
      "project_uuid": "DU6krHBNXuPAbpv8",
      "issue_type_uuid": "GLLfcQxq",
      "sub_issue_type_uuid": "",
      "status_uuid": "4HfKoazf",
      "create_time": 1566183936709120,
      "deadline": null,
      "status": 1,
      "summary": "task_test",
      "desc": "update task test . ",
      "desc_rich": "<p>update task test .&nbsp;</p>\n",
      "parent_uuid": "",
      "position": 0,
      "number": 46,
      "priority": "7tKAV46c",
      "assess_manhour": 0,
      "total_manhour": 0,
      "remaining_manhour": null,
      "attribute": null,
      "watchers": ["DU6krHBN"],
      "field_values": [
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "task_test",
          "value_type": 0
        }
        //
      ],
      "server_update_stamp": 1566184138886544,
      "related_tasks": [],
      "subtasks": [],
      "path": "DU6krHBNJPoQgfJv",
      "code_commits": [],
      "related_task_count": [0, 0],
      "visible_subtask_count": 0,
      "subtask_count": [0, 0],
      "discussion_count": 0,
      "attachment_count": 0,
      "related_cases": [],
      "related_plan_cases": [],
      "related_testcase_plans": [],
      "manhours": []
    },
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
      "watchers": ["DU6krHBN"],
      "field_values": [
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "task_test",
          "value_type": 0
        }
        //
      ],
      "server_update_stamp": 1566183585782224,
      "related_tasks": [],
      "subtasks": [],
      "path": "DU6krHBNNKSnnHNI",
      "code_commits": [],
      "related_task_count": [0, 0],
      "visible_subtask_count": 0,
      "subtask_count": [0, 0],
      "discussion_count": 0,
      "attachment_count": 0,
      "related_cases": [],
      "related_plan_cases": [],
      "related_testcase_plans": [],
      "manhours": []
    }
  ],
  "count": 2
}
```
