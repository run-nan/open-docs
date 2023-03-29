# Manhour

- manhour
  - [schema](#schema)
    - [manhour](#manhour)
- [登记工时](#登记工时)
- [修改登记工时](#修改登记工时)
- [删除登记工时](#删除登记工时)
- [获取工作项登记工时列表](#获取工作项登记工时列表)

## schema

## manhour

| aliases     | type    | required | canUpdate | allowEmpty | description                                   |
| :---------- | :------ | :------- | :-------- | :--------- | :-------------------------------------------- |
| uuid        | text    | F        | F         | F          | [UUID]                                        |
| key         | text    | F        | F         | F          | [Item Key]                                    |
| mode        | enum    | F        | F         | F          | 工时模式 [detailed:汇总模式, simple:简单模式] |
| owner       | text    | T        | F         | F          | 工时登记人                                    |
| task        | text    | T        | F         | F          | 工作项 UUID                                   |
| type        | enum    | T        | F         | F          | 登记类型[recorded:登记工时]                   |
| start_time  | time    | T        | T         | F          | 工时登记时间                                  |
| hours       | integer | T        | T         | F          | 登记工时                                      |
| description | text    | T        | T         | T          | 登记工时的描述（期间做了什么）                |

---

## 登记工时

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 item 接口](../item.md#添加item) , 登记工时

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化， 可用字段参考 [参数列表](#manhour)

### 请求参数示例

```graphql
mutation AddManhour {
  addManhour(
    mode: $mode
    owner: $owner
    task: $task
    type: $type
    start_time: $start_time
    hours: $hours
    description: $description
  ) {
    key
  }
}
```

### 请求体示例

```json
{
  "query": "\n    mutation AddManhour {\n      addManhour (mode: $mode owner: $owner task: $task type: $type start_time: $start_time hours: $hours description: $description) {\n        key\n      }\n    }\n  ",
  "variables": {
    "mode": "detailed",
    "owner": "95sGjuY5",
    "task": "95sGjuY5UXadKeAa",
    "type": "recorded",
    "start_time": 1670666400,
    "hours": 100000,
    "description": "登记工时的描述"
  }
}
```

### 返回体示例

```json
{
  "data": {
    "addManhour": {
      "key": "manhour-XmkU1kuV"
    }
  }
}
```

---

## 修改登记工时

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 item 接口](../item.md#添加item) , 登记工时

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化， 可用字段参考 [参数列表](#manhour)

### 请求参数示例

```graphql
mutation UpdateManhour {
  updateManhour(
    mode: $mode
    owner: $owner
    task: $task
    type: $type
    start_time: $start_time
    hours: $hours
    description: $description
    key: $key
  ) {
    key
  }
}
```

### 请求体示例

```json
{
  "query": "\n    mutation UpdateManhour {\n      updateManhour (mode: $mode owner: $owner task: $task type: $type start_time: $start_time hours: $hours description: $description key: $key) {\n        key\n      }\n    }\n  ",
  "variables": {
    "mode": "detailed",
    "owner": "95sGjuY5",
    "task": "95sGjuY5UXadKeAa",
    "type": "recorded",
    "start_time": 1670666400,
    "hours": 200000,
    "description": "登记工时的描述",
    "key": "manhour-XmkU1kuV"
  }
}
```

### 返回体示例

```json
{
  "data": {
    "updateManhour": {
      "key": "manhour-XmkU1kuV"
    }
  }
}
```

---

## 删除登记工时

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 item 接口](../item.md#添加item) , 登记工时

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化， 可用字段参考 [参数列表](#manhour)

### 请求参数示例

```graphql
mutation DeleteManhour {
  deleteManhour(key: $key, mode: $mode) {
    key
  }
}
```

### 请求体示例

```json
{
  "query": "\n    mutation DeleteManhour {\n      deleteManhour (key: $key mode: $mode) {\n        key\n      }\n    }\n  ",
  "variables": {
    "key": "manhour-XmkU1kuV",
    "mode": "detailed"
  }
}
```

### 返回体示例

```json
{
  "data": {
    "deleteManhour": {
      "key": "manhour-XmkU1kuV"
    }
  }
}
```

---

## 获取工作项登记工时列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 item 接口](../item.md#添加item) , 登记工时

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化， 可用字段参考 [参数列表](#manhour)

### 请求参数示例

```graphql
query FetchUserManhours {
  manhours(filter: $manhourFilter, orderBy: $manhoursOrderBy) {
    key
    hours
    startTime
    description
    type
    owner {
      uuid
      avatar
      name
      email
    }
  }
}
```

### 请求体示例

```json
{
  "query": "\n    query FetchUserManhours {\n      manhours(\n        filter: $manhourFilter\n        orderBy: $manhoursOrderBy\n      ) {\n        key\n        hours\n        startTime\n        description\n        type\n        owner {\n          uuid\n          avatar\n          name\n          email\n        }\n      }\n    }\n  ",
  "variables": {
    "manhourFilter": {
      "task_in": ["95sGjuY5UXadKeAa"],
      "owner_in": ["95sGjuY5"]
    },
    "manhoursOrderBy": {
      "startTime": "DESC",
      "createTime": "DESC"
    }
  }
}
```

### 返回体示例

```json
{
  "data": {
    "manhours": [
      {
        "description": "",
        "hours": 200000,
        "key": "manhour-CswpZLFb",
        "owner": {
          "avatar": "",
          "email": "xxx@ones.ai",
          "name": "AdminTest",
          "uuid": "95sGjuY5"
        },
        "startTime": 1670666400,
        "type": "recorded"
      },
      {
        "description": "",
        "hours": 100000,
        "key": "manhour-7em8Ta9X",
        "owner": {
          "avatar": "",
          "email": "xxx@ones.ai",
          "name": "AdminTest",
          "uuid": "95sGjuY5"
        },
        "startTime": 1670666400,
        "type": "recorded"
      }
    ]
  }
}
```

---
