<!-- TOC depthTo:2 -->

- [模型](#模型)
  - [项目迭代阶段](#项目迭代阶段)
  - [迭代阶段](#迭代阶段)
- [API 说明](#api-说明)
  - [1.添加项目下迭代阶段](#1添加项目下迭代阶段)
  - [2.修改项目下迭代阶段](#2修改项目下迭代阶段)
  - [3.删除项目下迭代阶段](#3删除项目下迭代阶段)
  - [4.获取项目迭代阶段列表](#获取项目迭代阶段列表)
  - [5.修改迭代阶段](#5修改迭代阶段)

<!-- /TOC -->

# 模型

## 项目迭代阶段

project_sprint_status

| 参数名    | 类型   | 说明       |
| :-------- | :----- | :--------- |
| uuid      | string | 阶段 id    |
| name      | string | 阶段名     |
| category  | string | 阶段分类   |
| build_int | bool   | 是否内置阶 |

## 迭代阶段

sprint_status

| 参数名            | 类型   | 说明                                         |
| :---------------- | :----- | :------------------------------------------- |
| status_uuid       | string | 阶段 id                                      |
| name              | string | 阶段名                                       |
| category          | string | 阶段分类                                     |
| plan_start_time   | int64  | 计划开始时间(单位秒)                         |
| plan_end_time     | int64  | 计划完成时间(单位秒)                         |
| actual_start_time | int64  | 实际开始时间(单位秒)                         |
| actual_end_time   | int64  | 实际完成时间(单位秒)                         |
| is_current_status | bool   | 是否当前阶段                                 |
| desc_plain        | string | 阶段描述, 纯文本(富文本转的纯文本，不限字数) |
| desc_rich         | string | 阶段描述，富文                               |

#### 阶段分类

category

| key         | 说明   |
| :---------- | :----- |
| to_do       | 未开始 |
| in_progress | 进行中 |
| done        | 已完成 |

### HTTP status code 说明

| 状态码 | 说明           |
| ------ | -------------- |
| 200    | 成功           |
| 403    | 没权限         |
| 500    | 服务器内部错误 |
| 801    | 参数不合法     |

# API 说明

## 1.添加项目下迭代阶段

### URL

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_statuses/add
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名           | 类型   | 是否必填 | 说明     |
| :--------------- | :----- | :------- | :------- |
| status           | object | T        | 迭代阶段 |
| &nbsp;&nbsp;name | string | F        | 阶段名   |

### 返回参数

| 参数名               | 类型   | 是否必填 | 说明                 |
| :------------------- | :----- | :------- | :------------------- |
| status               | object | T        | 迭代阶段             |
| &nbsp;&nbsp;uuid     | string | T        | 阶段 id              |
| &nbsp;&nbsp;name     | string | T        | 阶段名               |
| &nbsp;&nbsp;category | string | T        | 阶段分类             |
| &nbsp;&nbsp;build_in | bool   | T        | 是否内置阶           |
| server_update_stamp  | int    | T        | 数据更新时间（微妙） |

### 请求体参考

```json
{
  "status": {
    "name": "test迭代阶段"
  }
}
```

### 返回体参考

```json
{
  "status": {
    "uuid": "Nj8WkR3T",
    "name": "test迭代阶段",
    "category": "in_progress",
    "build_in": false
  },
  "server_update_stamp": 1594365070498608
}
```

## 2.修改项目下迭代阶段

- 修改阶段名称或者调整阶段顺序
- 未开始为迭代固定阶段，表示迭代尚未开始，不可编辑和删除。
- 已完成为迭代固定阶段，表示迭代正式完成，不可编辑和删除。

### URL

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_status/:statusUUID/update
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名          | 类型   | 是否必填 | 说明                  |
| :-------------- | :----- | :------- | :-------------------- |
| status          | object | T        | 阶段                  |
| &nbsp;name      | string | F        | 阶段名                |
| &nbsp;next_uuid | string | F        | 移动后上一个阶段的 id |

### 返回参数

| 参数名               | 类型   | 是否必填 | 说明                 |
| :------------------- | :----- | :------- | :------------------- |
| status               | object | T        | 迭代阶段             |
| &nbsp;&nbsp;uuid     | string | T        | 阶段 id              |
| &nbsp;&nbsp;name     | string | T        | 阶段名               |
| &nbsp;&nbsp;category | string | T        | 阶段分类             |
| &nbsp;&nbsp;build_in | bool   | T        | 是否内置阶           |
| server_update_stamp  | int    | T        | 数据更新时间（微妙） |

### 请求参数参考

```json
{
  "status": {
    "uuid": "Nj8WkR3T",
    "next_uuid": "N1Kw7tiD" // 调整 Nj8WkR3T 顺序到 N1Kw7tiD 之前
  }
}
```

```json
{
  "status": {
    "name": "updateStageName", // 修改迭代阶段名称
    "uuid": "Nj8WkR3T"
  }
}
```

### 返回参数参考

```json
{
  "status": {
    "uuid": "Nj8WkR3T",
    "name": "updateStageName",
    "category": "in_progress",
    "build_in": false
  },
  "server_update_stamp": 1594368272833664
}
```

## 3.删除项目下迭代阶段

- 删除操作将会一并删除已有的该项阶段内容，此操作不可撤销.

### URL

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_status/:statusUUID/delete
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

无

### 返回参数

| 参数名              | 类型 | 是否必填 | 说明                 |
| :------------------ | :--- | :------- | :------------------- |
| server_update_stamp | int  | T        | 数据更新时间（微妙） |

## 4.获取项目迭代阶段列表

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_statuses
```

### HTTP Method

GET

### 是否需要登录

是

### 调用权限

BrowseProject

### 请求参数

无

### 返回参数

| 参数名               | 类型     | 是否必填 | 说明       |
| :------------------- | :------- | :------- | :--------- |
| statuses             | []object | T        | 迭代阶段   |
| &nbsp;&nbsp;uuid     | string   | T        | 阶段 id    |
| &nbsp;&nbsp;name     | string   | T        | 阶段名     |
| &nbsp;&nbsp;category | string   | T        | 阶段分类   |
| &nbsp;&nbsp;build_in | bool     | T        | 是否内置阶 |

### 返回体参考

```json
{
  "statuses": [
    {
      "uuid": "84oYKyg2",
      "name": "未开始",
      "category": "to_do",
      "build_in": true
    },
    {
      "uuid": "4Jcq6XbX",
      "name": "需求设计",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "K6y6vDHE",
      "name": "需求评审",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "JiJXQCrB",
      "name": "界面设计",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "JkY1AtwT",
      "name": "产品研发",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "8kmtuDfj",
      "name": "产品测试",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "N1Kw7tiD",
      "name": "产品发布",
      "category": "in_progress",
      "build_in": false
    },
    {
      "uuid": "BAYxXXtB",
      "name": "已完成",
      "category": "done",
      "build_in": true
    }
  ]
}
```

## 5.修改迭代阶段

```url
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_statuses/update
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名                        | 类型     | 是否必填 | 说明                                         |
| :---------------------------- | :------- | :------- | :------------------------------------------- |
| sprint_statuses               | []object | T        | 迭代阶段                                     |
| &nbsp;&nbsp;status_uuid       | string   | F        | 阶段 id                                      |
| &nbsp;&nbsp;name              | string   | F        | 阶段名                                       |
| &nbsp;&nbsp;category          | string   | F        | 阶段分类                                     |
| &nbsp;&nbsp;plan_start_time   | int      | F        | 计划开始时间(单位秒)                         |
| &nbsp;&nbsp;plan_end_time     | int      | F        | 计划完成时间(单位秒)                         |
| &nbsp;&nbsp;actual_start_time | int      | F        | 实际开始时间(单位秒)                         |
| &nbsp;&nbsp;actual_end_time   | int      | F        | 实际完成时间(单位秒)                         |
| &nbsp;&nbsp;is_current_status | bool     | T        | 是否当前阶段                                 |
| &nbsp;&nbsp;desc_plain        | string   | F        | 阶段描述, 纯文本(富文本转的纯文本，不限字数) |
| &nbsp;&nbsp;desc_rich         | string   | F        | 阶段描述，富文本                             |

### 返回参数

| 参数名              | 类型 | 是否必填 | 说明                 |
| :------------------ | :--- | :------- | :------------------- |
| server_update_stamp | int  | T        | 数据更新时间（微妙） |

### 请求参数参考

修改阶段描述

```json
{
  "sprint_statuses": [
    {
      "status_uuid": "K6y6vDHE",
      "name": "需求评审",
      "category": "in_progress",
      "plan_start_time": 1533571200,
      "plan_end_time": 1533657600,
      "actual_start_time": 1533571200,
      "actual_end_time": 1533657600,
      "is_current_status": false,
      "desc_plain": "",
      "desc_rich": "<p>修改了需求评审的描述</p>\n"
    }
  ]
}
```

修改迭代当前阶段，需要将原阶段 `is_current_status` 参数置为 false

```json
{
  "sprint_statuses": [
    {
      "status_uuid": "K6y6vDHE",
      "name": "需求评审",
      "category": "in_progress",
      "plan_start_time": 1533571200,
      "plan_end_time": 1533657600,
      "actual_start_time": 1533571200,
      "actual_end_time": 1533657600,
      "is_current_status": true,
      "desc_plain": "",
      "desc_rich": "<p>描述</p>\n"
    },
    {
      "status_uuid": "XvPjnUC9",
      "name": "未开始",
      "category": "to_do",
      "plan_start_time": 1533571200,
      "plan_end_time": null,
      "actual_start_time": 1533571200,
      "actual_end_time": null,
      "is_current_status": false,
      "desc_plain": "",
      "desc_rich": "<p>描述</p>\n"
    }
  ]
}
```
