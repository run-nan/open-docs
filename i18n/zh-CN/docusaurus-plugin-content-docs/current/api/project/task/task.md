## 目录

- [模型](#模型)
  - [工作项](#工作项)
  - [工作项属性](#工作项属性)
- [API 说明](#api-说明)
  - [添加工作项](#添加工作项)
  - [更新工作项](#更新工作项)
  - [删除工作项](#删除工作项)
  - [获取工作项统计数据接口](#获取工作项统计数据接口)
  - [复制工作项](#复制工作项)
  - [获取工作项详情](#获取工作项详情)
  - [批量获取工作项详情](#批量获取工作项详情)

## 模型

### 工作项

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

### 工作项属性

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

### 添加工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、remaining_manhour、estimate_variance、time_progress

#### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/add2

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

create_tasks

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 可以为空 | 取值范围 | 说明                                     |
| :----- | :----- | :------- | :------- | :--------------------------------------- |
| tasks  | array  | 否       |          | 批量添加工作项数组，内部字段结构详见下方 |

tasks 内具体的 object 结构

| 参数名              | 值类型   | 可以为空 | 取值范围   | 说明                                                    |
| :------------------ | :------- | :------- | :--------- | :------------------------------------------------------ |
| uuid                | string   | 否       | len=16     | 由创建者 uuid+随机 8 位字符组成                         |
| assign              | string   | 否       | len=8      | 工作项负责人的用户 id                                   |
| owner               | string   | 否       | len=8      | 工作项创建人的用户 id                                   |
| parent_uuid         | string   | 是       | len=16     | 父工作项 id，无父工作项时需要保留该字段，传空字符串即可 |
| sprint_uuid         | string   | 是       | len=16     | 迭代 id                                                 |
| project_uuid        | string   | 否       | len=16     | 项目 id                                                 |
| issue_type_uuid     | string   | 否       | len=8      | 工作项类型 id                                           |
| sub_issue_type_uuid | string   | 是       | len=8      | 子工作项类型 id                                         |
| summary             | string   | 否       | len<=1024  | 工作项名                                                |
| desc                | string   | 是       | len<=65536 | 工作项描述                                              |
| priority            | string   | 是       | len=8      | 工作项优先级 [uuid]，若为空，则会使用默认的优先级       |
| deadline            | int64    | 是       |            | 工作项截止日期，时间戳                                  |
| product_uuids       | []string | 是       | len=8      | 关联产品                                                |
| field_values        | array    | 是       |            | 属性值列表，参考 [field_values](#工作项属性)            |
| watchers            | []string | 是       |            | 关注者的用户 id 列表                                    |

#### 返回参数列表

| 参数名    | 值类型 | 说明                                 |
| :-------- | :----- | :----------------------------------- |
| tasks     | array  | 添加成功 task 的 model，见上方说明   |
| bad_tasks | array  | 修改失败的工作项，具体结构见下方表格 |

bad_tasks 结构

| 参数名 | 值类型 | 说明            |
| :----- | :----- | :-------------- |
| uuid   | string | 失败的工作项 id |
| code   | int    | 错误码          |
| desc   | string | 错误提示        |

#### 请求示例

示例一

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/tasks/add2 \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "tasks": [
        {
            "uuid": "PRZy8efJcXillNhX",
            "owner": "PRZy8efJ",
            "assign": "PRZy8efJ",
            "summary": "test title",
            "parent_uuid": "",
            "field_values": [
                {
                    "field_uuid": "field004",
                    "type": 8,
                    "value": "PRZy8efJ"
                },
                {
                    "field_uuid": "field012",
                    "type": 1,
                    "value": "PRXB3jQU"
                },
                {
                    "field_uuid": "field011",
                    "type": 7,
                    "value": "HdEkBV6o"
                },
                {
                    "field_uuid": "field013",
                    "type": 5,
                    "value": null
                }
            ],
            "project_uuid": "PRZy8efJ3HohVuf2",
            "issue_type_uuid": "FF78d8EL",
            "watchers": [
                "PRZy8efJ"
            ]
        }
    ]
}'
```

示例二

```shell
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

#### 返回示例

```json
{
  "tasks": [
    {
      "uuid": "PRZy8efJcXillNhX",
      "project_uuid": "PRZy8efJ3HohVuf2",
      "issue_type_uuid": "FF78d8EL",
      "summary": "test title",
      "parent_uuid": "",
      "number": 23
    }
  ],
  "bad_tasks": []
}
```

### 更新工作项

- 支持通过 field_values 传 task 固有属性的值
- 添加工作项时不可更新字段 watchers、owner、create_time、update_time、number、total_manhour、assess_manhour、remaining_manhour、estimate_variance、time_progress

#### URL

- update2 保留接口给手机 App 端调<br/>
  https://your-host-name/project/api/project/team/:teamUUID/tasks/update2
- update3 给 Web 端调用，速度更快<br/>
  https://your-host-name/project/api/project/team/:teamUUID/tasks/update3

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

update_tasks

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 可以为空 | 取值范围 | 说明                                   |
| ------ | ------ | -------- | -------- | -------------------------------------- |
| tasks  | array  | 否       |          | 批量添加工作项数组，具体结构见下方表格 |

tasks 结构

| 参数名       | 值类型 | 可以为空 | 取值范围   | 说明                                         |
| ------------ | ------ | -------- | ---------- | -------------------------------------------- |
| uuid         | string | 否       | len=16     | 由创建者 uuid+随机 8 位字符组成              |
| assign       | string | 是       | len=8      | 工作项负责人的用户 id                        |
| parent_uuid  | string | 是       | len=16     | 父工作项 id                                  |
| sprint_uuid  | string | 是       | len=16     | 迭代 id                                      |
| summary      | string | 是       | len<=1024  | 工作项名                                     |
| desc         | string | 是       | len<=65536 | 工作项描述                                   |
| priority     | string | 是       | len=8      | 工作项优先级 [uuid]                          |
| deadline     | int64  | 是       |            | 工作项截止日期                               |
| field_values | array  | 是       |            | 属性值列表，参考 [field_values](#工作项属性) |

#### 返回参数列表

| 参数名    | 值类型 | 说明             |
| :-------- | :----- | :--------------- |
| bad_tasks | array  | 修改失败的工作项 |

bad_tasks 结构

| 参数名 | 值类型 | 说明            |
| :----- | :----- | :-------------- |
| uuid   | string | 失败的工作项 id |
| code   | int    | 错误码          |
| desc   | string | 错误提示        |

#### 请求示例

```shell
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

#### 返回示例

```json
{
  "bad_tasks": []
}
```

### 删除工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

delete_tasks

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明        |
| :------- | :----- | :------- | :---------- |
| taskUUID | string | F        | 工作项 UUID |

#### 返回参数列表

无

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBN7TS9TKx7/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取工作项统计数据接口

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task_stats

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

项目成员

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |

#### 返回参数列表

| 参数名                | 值类型 | 说明                          |
| --------------------- | ------ | ----------------------------- |
| task_count_by_project | object | 项目下工作项的分类统计数      |
| task_count_by_sprint  | object | sprint 下工作项的分类统计数   |
| server_update_stamp   | int64  | task_stats 类型数据的更新时间 |

task_count_by_project 结构

| 参数名       | 值类型 | 说明                 |
| ------------ | ------ | -------------------- |
| project_uuid | string | 项目 id              |
| to_do        | int    | 未开始分类的工作项数 |
| in_progress  | int    | 进行中分类的工作项数 |
| done         | int    | 已完成分类的工作项数 |

task_count_by_sprint 结构

| 参数名      | 值类型 | 说明                 |
| ----------- | ------ | -------------------- |
| sprint_uuid | string | sprint id            |
| to_do       | int    | 未开始分类的工作项数 |
| in_progress | int    | 进行中分类的工作项数 |
| done        | int    | 已完成分类的工作项数 |

#### 请求示例

```shell
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_stats \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

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

### 复制工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/copy

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

目标 issueType 下 view_tasks

#### 传值方式

JSON

#### 请求参数列表

| 参数名           | 值类型   | 是否可以空 | 取值范围 | 取值例子 | 说明                           |
| ---------------- | -------- | ---------- | -------- | -------- | ------------------------------ |
| project_uuid     | string   | 否         | len=16   |          | 目标 project 的 UUID           |
| issue_type_uuid  | string   | 否         | len=16   |          | 目标 issue_type 的 UUID        |
| status_uuid      | string   | 否         | len=8    |          | 复制后的状态 UUID              |
| reserve_contents | []string | 是         |          |          | 需要一起复制的关联内容，见下方 |

##### 关联内容可选值

若需要将对应内容复制到新到工作项上，则在 reserve_contents 传入对应的值

| 值          | 说明           |
| ----------- | -------------- |
| cycle       | 进度与周期     |
| relatedTask | 关联内容       |
| subTask     | 子工作项       |
| testing     | 测试情况       |
| relatedWiki | 关联 Wiki 页面 |
| attachment  | 文件           |
| watcher     | 关注者         |
| allManhour  | 工时           |

#### 返回参数列表

| 参数名 | 值类型 | 说明                              |
| ------ | ------ | --------------------------------- |
| task   | object | 复制成功的 task,见上方 model 说明 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNNKSnnHNI/copy \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "project_uuid": "PRZy8efJ3HohVuf2",
    "issue_type_uuid": "FF78d8EL",
    "status_uuid": "MZQu4VaM",
    "reserve_contents": [
        "cycle",
        "relatedTask",
        "subTask",
        "testing",
        "relatedWiki",
        "attachment",
        "watcher"
    ]
}'
```

#### 返回示例

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

### 获取工作项详情

根据 UUID 或者序号获取工作项详情

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUIDOrNumber/info

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

view_tasks

#### 传值方式

URL

#### 请求参数列表

| 参数名           | 值类型 | 允许空值 | 说明                  |
| :--------------- | :----- | :------- | :-------------------- |
| teamUUID         | string | F        | 所属团队 UUID         |
| taskUUIDOrNmuber | string | F        | 工作项 UUID 或业务 ID |

#### 返回参数列表

见顶部 task model 说明，参考返回示例

#### 请求示例

```shell
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNJPoQgfJv/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "uuid": "PRZy8efJWBubPbbt",
  "owner": "PRZy8efJ",
  "assign": "PRZy8efJ",
  "tags": "",
  "sprint_uuid": null,
  "project_uuid": "PRZy8efJ3HohVuf2",
  "issue_type_scope_uuid": "9P7BfEbd",
  "issue_type_uuid": "FF78d8EL",
  "sub_issue_type_uuid": "",
  "status_uuid": "MZQu4VaM",
  "create_time": 1671077867955420,
  "deadline": 1671206399,
  "status": 1,
  "summary": "test title",
  "desc": "",
  "desc_rich": "",
  "parent_uuid": "",
  "position": 0,
  "number": 25,
  "priority": "PRXB3jQU",
  "assess_manhour": null,
  "total_manhour": 0,
  "remaining_manhour": null,
  "estimate_variance": null,
  "time_progress": 0,
  "attribute": null,
  "watchers": ["PRZy8efJ"],
  "field_values": [
    {
      "field_uuid": "field007",
      "type": 11,
      "value": "FF78d8EL",
      "value_type": 0
    }
  ],
  "server_update_stamp": 1671087124473703,
  "related_tasks": [
    {
      "uuid": "PRZy8efJcXillNhX",
      "number": 23,
      "summary": "test title",
      "owner": "PRZy8efJ",
      "assign": "PRZy8efJ",
      "project_uuid": "PRZy8efJ3HohVuf2",
      "issue_type_uuid": "FF78d8EL",
      "sub_issue_type_uuid": "",
      "status_uuid": "MZQu4VaM",
      "status": 1,
      "readable": true
    },
    {
      "uuid": "PRZy8efJNbMXQtQm",
      "number": 26,
      "summary": "test title",
      "owner": "PRZy8efJ",
      "assign": "PRZy8efJ",
      "project_uuid": "PRZy8efJ3HohVuf2",
      "issue_type_uuid": "FF78d8EL",
      "sub_issue_type_uuid": "",
      "status_uuid": "MZQu4VaM",
      "status": 1,
      "readable": true
    }
  ],
  "links": [
    {
      "task_uuid": "PRZy8efJNbMXQtQm",
      "task_link_type_uuid": "UUID0001",
      "link_desc_type": "link_out_desc"
    },
    {
      "task_uuid": "PRZy8efJcXillNhX",
      "task_link_type_uuid": "UUID0001",
      "link_desc_type": "link_out_desc"
    }
  ],
  "subtasks": [],
  "path": "PRZy8efJWBubPbbt",
  "code_commits": [],
  "related_task_count": [2, 0],
  "visible_subtask_count": 0,
  "subtask_count": [0, 0],
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
  "SkipCheckFieldPermissions": false,
  "manhourStatisticMode": 0,
  "link_source_task": null
}
```

### 批量获取工作项详情

根据 UUID 批量获取工作项详情

#### URL

https://your-host-name/project/api/project/team/:teamUUID/tasks/info

#### HTTP Method

GET, POST

#### 是否需要登录

是

#### 调用权限

无

#### 传值方式

URL(GET), JSON(POST)

#### 请求参数列表

GET

| 参数名 | 是否必须 | 值类型 | 取值例子                          | 说明                                               |
| :----- | :------- | :----- | :-------------------------------- | :------------------------------------------------- |
| ids    | T        | string | ojytvgw3876gdkut,juyg5oi87tgdwet6 | 多个使用逗号隔开,单个 uuid 长度为 16，并且不能重复 |

POST

| 参数名 | 是否必须 | 值类型   | 说明      |
| :----- | :------- | :------- | :-------- |
| ids    | T        | []string | uuid 数组 |

#### 返回参数列表

| JSON 键名 | 值类型 | 取值范围 | 说明                                     |
| :-------- | :----- | :------- | :--------------------------------------- |
| tasks     | array  |          | 工作项列表                               |
| count     | int    |          | 获取成功的工作项数量                     |
| errors    | array  |          | 获取失败的工作项列表，具体结构见下方表格 |

errors 结构

| JSON 键名 | 值类型 | 取值范围 | 说明        |
| :-------- | :----- | :------- | :---------- |
| uuid      | string |          | 工作项 uuid |
| code      | int    |          | 错误码      |
| desc      | string |          | 错误描述    |

#### 请求示例

```shell
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

#### 返回示例

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
      "desc": "update task test .",
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
