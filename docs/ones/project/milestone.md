# 里程碑

- schema
  - [milestone](#milestone)
- api
  - [查询里程碑信息](#查询里程碑信息)
  - [新建里程碑](#新建里程碑)
  - [更新里程碑](#更新里程碑)
  - [删除里程碑](#删除里程碑)

## schema

### milestone

| Field        | Type           | Description |
| ------------ | -------------- | ----------- |
| activityUUID | string         | [活动 UUID] |
| assign       | User           | 负责人      |
| createTime   | int            | 创建时间    |
| deliverable  | [Deliverable!] | 交付物      |
| description  | string         | 描述        |
| endTime      | int            | 结束日期    |
| key          | string         | [Item Key]  |
| name         | string         | 标题        |
| namePinyin   | string         | [名称拼音]  |
| number       | int            | 编号        |
| owner        | User           | 创建人      |
| progress     | int            | 里程碑状态  |
| project      | Project        | 所属项目    |
| startTime    | int            | 开始日期    |
| updateTime   | int            | 更新时间    |
| uuid         | string         | [UUID]      |

## 查询里程碑信息

[调用 graphql 接口](../graphql/introduction.md#call_ones_graphql)

```graphql
{
  milestones(filter: { project_in: ["4Y5qoeuLYhQRsC5z"] }) {
    key
    uuid
    name
    activityUUID
    progress
    assign {
      uuid
      name
    }
    deliverable {
      uuid
      name
    }
    createTime
    endTime
  }
}
```

### 调用示例

```json
{
  "query": "# {\n#     activities(\n#         filter: {\n#             chartUUID_in: [\"T5BLipGv\", \"MXwL5y1W\"]\n#             type_equal: \"milestone\"\n#         }\n#     ){\n#         uuid\n#         name\n#         type\n#         number\n#         milestone{\n#             uuid\n#             name\n#         }\n#     }\n# }\n# {\n#     activityCharts(\n#         filter:{\n#             project_in: [\"4Y5qoeuLYhQRsC5z\"]\n#             }\n#     ){\n#         uuid\n#     }\n# }\n\n{\n    milestones(\n        filter: {\n            project_in: [\"4Y5qoeuLYhQRsC5z\"]\n        }\n    ){\n        key\n        uuid\n        name\n        activityUUID\n        progress\n        assign{\n            uuid\n            name\n        }\n        deliverable{\n            uuid\n            name\n        }\n        createTime\n        endTime\n    }\n}\n",
  "variables": {}
}
```

## 新建里程碑

[调用 graphql 接口](../graphql/introduction.md#call_ones_graphql)

### 请求体参考

```json
{
  "query": "\n          mutation AddGanttData {\n            addActivity (name: $name assign: $assign description: $description chart_uuid: $chart_uuid type: $type progress: $progress start_time: $start_time end_time: $end_time parent: $parent) {\n              key\n            }\n          }\n        ",
  "variables": {
    "name": "测试",
    "assign": "4Y5qoeuL",
    "description": "<p>描述</p>\n",
    "chart_uuid": "N11TCLVg",
    "type": "milestone",
    "progress": 0,
    "start_time": 1649692799,
    "end_time": 1649692799,
    "parent": ""
  }
}
```

### 参数列表

| 参数        | 描述                                                                  |
| ----------- | --------------------------------------------------------------------- |
| name        | 名称                                                                  |
| assign      | 负责人 uuid                                                           |
| description | 描述                                                                  |
| chart_uuid  | 活动视图 uuid，可通过 graphql 查询项目对应的 `activityChart` 信息获取 |
| type        | 类型，里程碑为 `milestone`                                            |
| progress    | 里程碑状态                                                            |
| start_time  | 开始时间戳                                                            |
| end_time    | 结束时间戳                                                            |
| parent      | 父项 uuid                                                             |

### 返回值参考

```json
{
  "data": {
    "addActivity": {
      "key": "activity-P2MCDgRS"
    }
  }
}
```

## 更新里程碑

[调用 graphql 接口](../graphql/introduction.md#call_ones_graphql)

### 请求体参考

更新状态

```json
{
  "query": "\n        mutation UpdateGanttData {\n          updateActivity (key: $key progress: $progress) {\n            key\n          }\n        }\n      ",
  "variables": {
    "key": "activity-51m8h6Pj",
    "progress": 10000000
  }
}
```

更新时间

```json
{
  "query": "\n        mutation UpdateGanttData {\n          updateActivity (key: $key start_time: $start_time end_time: $end_time) {\n            key\n          }\n        }\n      ",
  "variables": {
    "key": "activity-51m8h6Pj",
    "start_time": 1649044800,
    "end_time": 1649044800
  }
}
```

更新名称

```json
{
  "query": "\n        mutation UpdateGanttData {\n          updateActivity (key: $key name: $name) {\n            key\n          }\n        }\n      ",
  "variables": {
    "key": "activity-51m8h6Pj",
    "name": "demo"
  }
}
```

### 返回值参考

```json
{
  "data": {
    "updateActivity": {
      "key": "activity-51m8h6Pj"
    }
  }
}
```

## 删除里程碑

[调用 graphql 接口](../graphql/introduction.md#call_ones_graphql)

### 请求体参考

```json
{
  "query": "\n          mutation DeleteGanttData {\n            deleteActivity(\n              key: \"activity-51m8h6Pj\"\n            ) {\n              key\n            }\n          }\n        "
}
```

### 返回值参考

```json
{
  "data": {
    "deleteActivity": {
      "key": "activity-51m8h6Pj"
    }
  }
}
```
