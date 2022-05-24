# 目录

- [模型说明](#模型说明)
  - [迭代详情](#迭代详情)
- [API 说明](#api-说明)
  - [1. 添加迭代](#1-添加迭代)
  - [2. 更新迭代](#2-更新迭代)
  - [3. 删除迭代](#3-删除迭代)
  - [4. 获取项目下当前用户可见的迭代列表](#4-获取项目下当前用户可见的迭代列表)
  - [5. 获取团队中所有迭代详情](#5-获取团队中所有迭代详情)

<!-- /TOC -->

## 模型说明

## 迭代详情

sprint

| 参数名        | 值类型 | 允许修改 | 取值范围 | 说明                                                           |
| :------------ | :----- | :------- | :------- | :------------------------------------------------------------- |
| uuid          | string | F        | len=8    | uuid                                                           |
| project_uuid  | string | F        | len=16   | 所属项目 uuid                                                  |
| title         | string | T        | len<=32  | 标题                                                           |
| assign        | string | T        | len=8    | 负责人 uuid                                                    |
| goal          | string | T        |          | 迭代目标，富文本                                               |
| start_time    | int64  | T        |          | 计划开始时间 单位秒                                            |
| end_time      | int64  | T        |          | 计划结束时间 单位秒                                            |
| status        | int    | F        |          | 迭代状态: 1:未开始,2:进行中 <br/> 3:已完成, 4:删除             |
| create_time   | int64  | F        |          | 创建时间 单位秒                                                |
| is_open_gantt | bool   | T        |          | 是否开启甘特图                                                 |
| fields        | array  | F        |          | [迭代属性](../sprint_field/sprint_field.md#sprint_field_value) |
| statuses      | array  | F        |          | [迭代阶段](../sprint_status/sprint_status.md#sprint_status)    |
| period        | string | F        |          | 迭代周期 custom:自定义, 1w:1 周 2w:2 周 以此类推               |

## API 说明

## 1. 添加迭代

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprints/add
```

### HTTP Method

POST

### 调用权限

manage_sprints

### 传值方式

JSON

### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 说明                                        |
| :------ | :------- | :----- | :------- | :------------------------------------------ |
| sprints | T        | array  |          | sprint 列表，参考顶端 sprint 允许修改的字段 |

### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                                      |
| :------------------ | :----- | :------- | :---------------------------------------- |
| sprints             | array  |          | [添加成功的 sprint]，参考顶端 sprint 说明 |
| bad_sprints         | array  |          | 添加失败的 sprint                         |
| &emsp;&emsp;uuid    | array  |          | 失败的 id                                 |
| &emsp;&emsp;code    | array  |          | 失败的返回码                              |
| &emsp;&emsp;desc    | array  |          | 失败的原因描述                            |
| server_update_stamp | int64  |          | sprint 数据更新时间戳                     |

### 返回的 HTTP status code

| 状态码 | 说明                    |
| :----- | :---------------------- |
| 200    | 成功                    |
| 500    | 服务端异常              |
| 630    | 找不到项目/文件夹不存在 |
| 801    | 参数不合法              |

### 请求参数示例

```json
{
  "sprints": [
    {
      "title": "test_add_sprint",
      "assign": "6ZpgEzkk",
      "start_time": 1596384000,
      "end_time": 1599408000,
      "period": "1w",
      "statuses": [],
      "fields": []
    }
  ]
}
```

### 返回参数示例

```json
{
  "sprints": [
    {
      "uuid": "PqekjXz6",
      "title": "test_add_sprint",
      "project_uuid": "6ZpgEzkkmkvOVIU6",
      "title_pinyin": "test_add_sprint",
      "description": "",
      "start_time": 1596384000,
      "end_time": 1599494399,
      "status": 1,
      "create_time": 1597216996,
      "is_pin": false,
      "is_open_gantt": false,
      "daily_hours": 0,
      "assign": "6ZpgEzkk",
      "goal": "",
      "period": "1w",
      "fields": [
        {
          "field_uuid": "Ua9o7yUF",
          "type": "text",
          "name": "sprint_field_1",
          "value": null
        }
      ],
      "statuses": [
        {
          "status_uuid": "9eTpTcdk",
          "name": "未开始",
          "category": "to_do",
          "plan_start_time": 1596384000,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": true,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "7KKSKYUq",
          "name": "进行中",
          "category": "in_progress",
          "plan_start_time": null,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "AtV469fA",
          "name": "已完成",
          "category": "done",
          "plan_start_time": null,
          "plan_end_time": 1599494399,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        }
      ],
      "progress": 0
    }
  ],
  "bad_sprints": [],
  "server_update_stamp": 1597216996322944
}
```

## 2. 更新迭代

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprints/update
```

### HTTP Method

POST

### 调用权限

manage_sprints

### 传值方式

JSON

### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 说明                                        |
| :------ | :------- | :----- | :------- | :------------------------------------------ |
| sprints | T        | array  |          | sprint 列表，参考顶端 sprint 允许修改的字段 |

### 返回参数

| 参数名              | 值类型 | 取值范围 | 说明                                      |
| :------------------ | :----- | :------- | :---------------------------------------- |
| sprints             | array  |          | [添加成功的 sprint]，参考顶端 sprint 说明 |
| bad_sprints         | array  |          | 添加失败的 sprint                         |
| &emsp;&emsp;uuid    | string |          | 失败的 id                                 |
| &emsp;&emsp;code    | int64  |          | 失败的返回码                              |
| &emsp;&emsp;desc    | string |          | 失败的原因描述                            |
| server_update_stamp | int64  |          | sprint 数据更新时间戳                     |

### HTTP status code

老错误码说明(已被弃用，请参考新的错误码说明)：

| 状态码 | 说明                         |
| :----- | :--------------------------- |
| 200    | 成功                         |
| 500    | 服务端异常                   |
| 630    | 找不到该 sprint/文件夹不存在 |
| 801    | 某些必要字段为空             |
| 819    | 没有修改 sprint 权限         |

新错误码说明：

| http 状态码 | errcode                                         | 说明                                      |
| ----------- | ----------------------------------------------- | ----------------------------------------- |
| 200         |                                                 | 成功                                      |
| 500         | ServerError                                     | 服务器内部错误                            |
| 400         | Malformed.JSON                                  | 参数错误，json 解析错误                   |
| 401         | AuthFailure.InvalidToken                        | 用户授权失败，比如登录失败或者 token 过期 |
| 403         | AccessDenied.Team                               | 用户没有权限访问 team                     |
| 403         | PermissionDenied.ManageSprints                  | 用户没有管理迭代的权限                    |
| 404         | NotFound.Sprint                                 | 迭代不存在                                |
| 400         | MissingParameter.SprintStatus                   | 缺少参数 SprintStatus                     |
| 400         | MissingParameter.SprintStatus.UUID              | 缺少参数 SprintStatus.UUID                |
| 403         | ConstraintViolation.MultipleCurrentStatus       | 不能设置多个当前状态                      |
| 400         | MissingParameter.SprintStatus.PlannedStartTime  | 缺少参数 SprintStatus.PlannedStartTime    |
| 400         | MissingParameter.SprintStatus.PlannedEndTime    | 缺少参数 SprintStatus.PlannedEndTime      |
| 403         | ConstraintViolation.EndTimeEarlierThanStartTime | 结束时间早于开始时间                      |
| 403         | ConstraintViolation.SomeTasksNotDone            | 还有未完成的任务                          |

### 请求参数示例

```json
{
  "sprints": [
    {
      "title": "update sprint",
      "uuid": "QwdDfDGR"
    }
  ]
}
```

## 3. 删除迭代

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projetUUID/sprint/:sprintUUID/delete
```

### HTTP Method

POST

### 调用权限

manage_sprints

### 传值方式

JSON

### 参数列表

无

### HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 500    | 服务端异常           |
| 620    | 不存在该 sprintUUID  |
| 819    | 没有删除 sprint 权限 |

### 返回参数

| 参数名              | 值类型 | 取值范围 | 说明       |
| :------------------ | :----- | :------- | :--------- |
| server_update_stamp | int64  |          | 更新时间戳 |

## 4. 获取项目下当前用户可见的迭代列表

### URL

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprints
```

### HTTP Method

GET

### 传值方式

JSON

### 参数列表

无

### 返回参数

| 参数名                    | 值类型   | 是否必填 | 说明                                                           |
| :------------------------ | :------- | :------- | :------------------------------------------------------------- |
| sprints                   | []object | T        | 迭代详情                                                       |
| &nbsp;&nbsp;uuid          | string   | F        | uuid                                                           |
| &nbsp;&nbsp;project_uuid  | string   | F        | 所属项目 uuid                                                  |
| &nbsp;&nbsp;title         | string   | T        | 标题                                                           |
| &nbsp;&nbsp;assign        | string   | T        | 负责人 uuid                                                    |
| &nbsp;&nbsp;goal          | string   | T        | 迭代目标，富文本                                               |
| &nbsp;&nbsp;start_time    | int64    | T        | 计划开始时间 单位秒                                            |
| &nbsp;&nbsp;end_time      | int64    | T        | 计划结束时间 单位秒                                            |
| &nbsp;&nbsp;status        | int      | F        | 迭代状态: 1:未开始,2:进行中 <br/> 3:已完成, 4:删除             |
| &nbsp;&nbsp;create_time   | int64    | F        | 创建时间 单位秒                                                |
| &nbsp;&nbsp;is_open_gantt | bool     | T        | 是否开启甘特图                                                 |
| &nbsp;&nbsp;fields        | array    | F        | [迭代属性](../sprint_field/sprint_field.md#sprint_field_value) |
| &nbsp;&nbsp;statuses      | array    | F        | [迭代阶段](../sprint_status/sprint_status.md#sprint_status)    |

### 返回值示例

```json
{
  "sprints": [
    {
      "uuid": "DHxogH7P",
      "title": "sprints_test",
      "project_uuid": "8dcHr1QQxE38jA4A",
      "title_pinyin": "sprints_test",
      "description": "",
      "start_time": 1576771200,
      "end_time": 1576943999,
      "status": 1,
      "create_time": 1573110417,
      "is_pin": false,
      "is_open_gantt": false,
      "daily_hours": 0,
      "assign": "8dcHr1QQ",
      "goal": "",
      "fields": [],
      "statuses": [
        {
          "status_uuid": "AS3Qeqti",
          "name": "未开始",
          "category": "to_do",
          "plan_start_time": 1576771200,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": true,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "QY6wtX2g",
          "name": "进行中",
          "category": "in_progress",
          "plan_start_time": null,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "FmfdvUUT",
          "name": "已完成",
          "category": "done",
          "plan_start_time": null,
          "plan_end_time": 1576943999,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        }
      ]
    }
  ],
  "server_update_stamp": 1573110417742544
}
```

## 5. 获取团队中所有迭代详情

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/sprints/all
```

### HTTP Method

GET

### 传值方式

JSON

### 参数列表

无

### 返回参数

| 参数名                    | 值类型   | 是否必填 | 说明                                                           |
| :------------------------ | :------- | :------- | :------------------------------------------------------------- |
| sprints                   | []object | T        | 迭代详情                                                       |
| &nbsp;&nbsp;uuid          | string   | F        | uuid                                                           |
| &nbsp;&nbsp;project_uuid  | string   | F        | 所属项目 uuid                                                  |
| &nbsp;&nbsp;title         | string   | T        | 标题                                                           |
| &nbsp;&nbsp;assign        | string   | T        | 负责人 uuid                                                    |
| &nbsp;&nbsp;goal          | string   | T        | 迭代目标，富文本                                               |
| &nbsp;&nbsp;start_time    | int64    | T        | 计划开始时间 单位秒                                            |
| &nbsp;&nbsp;end_time      | int64    | T        | 计划结束时间 单位秒                                            |
| &nbsp;&nbsp;status        | int      | F        | 迭代状态: 1:未开始,2:进行中 <br/> 3:已完成, 4:删除             |
| &nbsp;&nbsp;create_time   | int64    | F        | 创建时间 单位秒                                                |
| &nbsp;&nbsp;is_open_gantt | bool     | T        | 是否开启甘特图                                                 |
| &nbsp;&nbsp;fields        | array    | F        | [迭代属性](../sprint_field/sprint_field.md#sprint_field_value) |
| &nbsp;&nbsp;statuses      | array    | F        | [迭代阶段](../sprint_status/sprint_status.md#sprint_status)    |

### 返回值示例

```json
{
  "sprints": [
    {
      "uuid": "DHxogH7P",
      "title": "sprints_test",
      "project_uuid": "8dcHr1QQxE38jA4A",
      "title_pinyin": "sprints_test",
      "description": "",
      "start_time": 1576771200,
      "end_time": 1576943999,
      "status": 1,
      "create_time": 1573110417,
      "is_pin": false,
      "is_open_gantt": false,
      "daily_hours": 0,
      "assign": "8dcHr1QQ",
      "goal": "",
      "fields": [],
      "statuses": [
        {
          "status_uuid": "AS3Qeqti",
          "name": "未开始",
          "category": "to_do",
          "plan_start_time": 1576771200,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": true,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "QY6wtX2g",
          "name": "进行中",
          "category": "in_progress",
          "plan_start_time": null,
          "plan_end_time": null,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        },
        {
          "status_uuid": "FmfdvUUT",
          "name": "已完成",
          "category": "done",
          "plan_start_time": null,
          "plan_end_time": 1576943999,
          "actual_start_time": null,
          "actual_end_time": null,
          "is_current_status": false,
          "desc_plain": "",
          "desc_rich": ""
        }
      ]
    }
  ],
  "server_update_stamp": 1573110417742544
}
```
