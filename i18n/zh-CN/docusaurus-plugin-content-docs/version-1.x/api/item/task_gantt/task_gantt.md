# 时间视图

- [Schema](#schema)
  - [时间视图](#task_gantt_chart)
  - [时间视图数据](#task_gantt_data)
  - [时间视图个性化配置](#task_gantt_chart_personal_config)
- [API 说明](#api-说明)
  - [获取时间视图列表](#获取时间视图列表)
  - [获取时间视图中的数据](#获取时间视图中的数据)
  - [新建工作项到时间视图](#新建工作项到时间视图)
  - [添加工作项到时间视图](#添加工作项到时间视图)
  - [从时间视图中移除工作项](#从时间视图中移除工作项)
  - [修改工作项](../../project/task/task.md#2-更新工作项)

## schema

### task_gantt_chart

| aliases         | type                                             | required | canUpdate | allowEmpty | description    |
| :-------------- | :----------------------------------------------- | :------- | :-------- | :--------- | :------------- |
| uuid            | text                                             | F        | F         | F          | [UUID]         |
| item_type       | text                                             | T        | F         | F          | [Item 类型]    |
| key             | text                                             | F        | F         | F          | [Item Key]     |
| name            | text                                             | T        | T         | F          | 甘特图名称名称 |
| name_pinyin     | text                                             | F        | F         | F          | [名称拼音]     |
| owner           | user                                             | F        | F         | F          | 甘特图创建者   |
| create_time     | time                                             | F        | F         | F          | 创建时间       |
| personal_config | [personal_config](#taskganttchartpersonalconfig) | F        | F         | T          | 个人配置       |
| component_uuid  | text                                             | F        | F         | F          | 关联组件       |
| import_config   | [import_config](#importconfig)                   | F        | T         | T          | [导入任务]     |
| project         | project                                          | F        | F         | F          | 所属项目       |

### task_gantt_data

| aliases          | type    | required | canUpdate | allowEmpty | description    |
| :--------------- | :------ | :------- | :-------- | :--------- | :------------- |
| uuid             | text    | F        | F         | F          | [UUID]         |
| item_type        | text    | T        | F         | F          | [Item 类型]    |
| key              | text    | F        | F         | F          | [Item Key]     |
| gantt_chart_uuid | text    | T        | F         | F          | 甘特图 UUID    |
| gantt_data_type  | enum    | T        | T         | F          | 甘特数据类型   |
| name             | text    | T        | T         | F          | 甘特数据名称   |
| name_pinyin      | text    | F        | F         | F          | [名称拼音]     |
| owner            | user    | F        | F         | F          | 甘特数据创建者 |
| plan_start_time  | date    | F        | T         | F          | 计划开始日期   |
| plan_end_time    | date    | F        | T         | F          | 计划结束日期   |
| duration         | integer | F        | T         | F          | 持续时间       |
| progress         | integer | F        | T         | F          | 进度           |
| parent           | text    | T        | T         | T          | 父节点         |
| path             | text    | F        | F         | T          | 层级路径       |
| position         | integer | F        | F         | T          | 位置           |
| after            | text    | F        | T         | T          | 在此节点后     |
| create_time      | time    | F        | F         | F          | 创建时间       |
| assign           | user    | T        | T         | F          | 甘特数据负责人 |
| related_type     | enum    | F        | F         | T          | 关联数据类型   |
| project          | project | F        | F         | T          | 关联项目       |
| task             | task    | F        | F         | T          | 关联任务       |
| component_uuid   | text    | F        | F         | T          | 关联组件       |

### task_gantt_chart_personal_config

| aliases          | type    | required | canUpdate | allowEmpty | description      |
| :--------------- | :------ | :------- | :-------- | :--------- | :--------------- |
| item_type        | text    | T        | F         | F          | [Item 类型]      |
| key              | text    | F        | F         | F          | [Item Key]       |
| owner            | user    | F        | F         | F          | 甘特图配置创建者 |
| gantt_chart_uuid | text    | F        | F         | F          | 甘特图 UUID      |
| expand           | boolean | F        | T         | T          | 展开             |
| zooming          | integer | F        | T         | T          | 缩放             |
| create_time      | time    | F        | F         | F          | 创建时间         |

### import_config

| 参数名 | 值类型   | 允许空值 | 说明        |
| :----- | :------- | :------- | :---------- |
| tasks  | []string | F        | 工作项 uuid |

## API 说明

## 获取时间视图列表

[调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql)

### 查询参数

```graphql
query LIST_TASK_GANTT_CHARTS($filter: Filter, $orderBy: OrderBy) {
  taskGanttCharts(filter: $filter, orderBy: $orderBy) {
    key
    uuid
    name
    owner {
      uuid
      name
    }
    personalConfig {
      key
      expand
      zooming
      __typename
    }
    createTime
    componentUUID
    __typename
    project {
      uuid
      name
    }
  }
}
```

### 请求体参考

```json
{
  "query": "query LIST_TASK_GANTT_CHARTS($filter: Filter, $orderBy: OrderBy) {\n\ttaskGanttCharts(filter: $filter, orderBy: $orderBy) {\n\t\tkey\n\t\tuuid\n\t\tname\n\t\towner{\n\t\t    uuid\n\t\t    name\n\t\t}\n\t\tpersonalConfig {\n\t\t\tkey\n\t\t\texpand\n\t\t\tzooming\n\t\t\t__typename\n\t\t}\n\t\tcreateTime\n\t\tcomponentUUID\n\t\t__typename\n\t\tproject{\n\t\t    uuid\n\t\t    name\n\t\t}\n\t}\n}",
  "variables": {
    "filter": {
      "componentUUID_equal": "VE4rlqCL"
    },
    "orderBy": {
      "createTime": "DESC"
    }
  }
}
```

### 返回体参考

```json
{
  "data": {
    "taskGanttCharts": [
      {
        "__typename": "TaskGanttChart",
        "componentUUID": "VE4rlqCL",
        "createTime": 1591239779,
        "key": "task_gantt_chart-9VPyNujE",
        "personalConfig": {
          "__typename": "TaskGanttChartPersonalConfig",
          "expand": null,
          "key": "task_gantt_chart_personal_config-9VPyNujE-6ZpgEzkk",
          "zooming": null
        },
        "uuid": "9VPyNujE"
      }
    ]
  }
}
```

## 获取时间视图中的数据

[调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql)

### 查询参数

```graphql
query LIST_TASK_GANTT_DATAS($filter: Filter, $orderBy: OrderBy) {
  taskGanttDatas(filter: $filter, orderBy: $orderBy) {
    key
    uuid
    name
    planStartTime
    planEndTime
    parent
    position
    progress
    ganttChartUUID
    ganttDataType
    createTime
    assign {
      uuid
      name
      avatar
      __typename
    }
    relatedType
    project {
      uuid
      status {
        ...StatusSimple
        __typename
      }
      __typename
    }
    task {
      uuid
      number
      status {
        ...StatusSimple
        __typename
      }
      issueType {
        uuid
        name
        __typename
      }
      __typename
    }
    __typename
  }
}
fragment StatusSimple on Status {
  uuid
  name
  category
  __typename
}
```

### 请求体参考

```json
{
  "operationName": "LIST_TASK_GANTT_DATAS",
  "variables": {
    "filter": {
      "ganttChartUUID_equal": "9VPyNujE"
    },
    "orderBy": {
      "position": "ASC"
    }
  },
  "query": "query LIST_TASK_GANTT_DATAS($filter: Filter, $orderBy: OrderBy) {\n  taskGanttDatas(filter: $filter, orderBy: $orderBy) {\n    key\n    uuid\n    name\n    planStartTime\n    planEndTime\n    parent\n    position\n    progress\n    ganttChartUUID\n    ganttDataType\n    createTime\n    assign {\n      uuid\n      name\n      avatar\n      __typename\n    }\n    relatedType\n    project {\n      uuid\n      status {\n        ...StatusSimple\n        __typename\n      }\n      __typename\n    }\n    task {\n      uuid\n      number\n      status {\n        ...StatusSimple\n        __typename\n      }\n      issueType {\n        uuid\n        name\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StatusSimple on Status {\n  uuid\n  name\n  category\n  __typename\n}\n"
}
```

### 返回体参考

```json
{
  "data": {
    "taskGanttDatas": [
      {
        "__typename": "TaskGanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Arnie",
          "uuid": "6ZpgEzkk"
        },
        "createTime": 1591239779,
        "ganttChartUUID": "9VPyNujE",
        "ganttDataType": "group",
        "key": "task_gantt_data-7GvucDpC",
        "name": "task gantt test",
        "parent": "",
        "planEndTime": 0,
        "planStartTime": 0,
        "position": 100000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "status": {
            "__typename": "Status",
            "category": "to_do",
            "name": "to do",
            "uuid": "to_do"
          },
          "uuid": "6ZpgEzkkcqJGgEWr"
        },
        "relatedType": "project",
        "task": {
          "__typename": "Task",
          "issueType": null,
          "number": null,
          "status": null,
          "uuid": ""
        },
        "uuid": "7GvucDpC"
      },
      {
        "__typename": "TaskGanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Arnie",
          "uuid": "6ZpgEzkk"
        },
        "createTime": 1591239894,
        "ganttChartUUID": "9VPyNujE",
        "ganttDataType": "task",
        "key": "task_gantt_data-W4JK4LkY",
        "name": "aa",
        "parent": "7GvucDpC",
        "planEndTime": 0,
        "planStartTime": 0,
        "position": 100000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "status": null,
          "uuid": ""
        },
        "relatedType": "task",
        "task": {
          "__typename": "Task",
          "issueType": {
            "__typename": "IssueType",
            "name": "task",
            "uuid": "3D2UjSN6"
          },
          "number": 197,
          "status": {
            "__typename": "Status",
            "category": "to_do",
            "name": "to do",
            "uuid": "56VtNrD9"
          },
          "uuid": "6ZpgEzkkbfA5IUc2"
        },
        "uuid": "W4JK4LkY"
      }
    ]
  }
}
```

## 新建工作项到时间视图

在时间视图里面新建/批量新建工作项

### [新建工作项](../../project/task/task.md#1-添加工作项)

### 请求体示例

```json
{
  "tasks": [
    {
      "uuid": "6ZpgEzkkWZVZ8FtQ",
      "owner": "6ZpgEzkk",
      "assign": "6ZpgEzkk",
      "summary": "dd",
      "parent_uuid": "",
      "project_uuid": "6ZpgEzkkcqJGgEWr",
      "issue_type_uuid": "3D2UjSN6",
      "desc_rich": "",
      "priority": "EDjvSU7Q",
      "field_values": [
        {
          "field_uuid": "field027",
          "type": 5,
          "value": 1591200000
        },
        {
          "field_uuid": "field028",
          "type": 5,
          "value": 1591372799
        }
      ],
      "gantt": {
        "gantt_chart_uuid": "9VPyNujE" // add task to time view
      }
    }
  ]
}
```

### 返回体示例

```json
{
  "tasks": [
    {
      "uuid": "6ZpgEzkkWZVZ8FtQ",
      "owner": "6ZpgEzkk",
      "assign": "6ZpgEzkk",
      "tags": "",
      "sprint_uuid": null,
      "project_uuid": "6ZpgEzkkcqJGgEWr",
      "issue_type_uuid": "3D2UjSN6",
      "sub_issue_type_uuid": "",
      "status_uuid": "56VtNrD9",
      "create_time": 1591251090453712,
      "deadline": null,
      "status": 1,
      "summary": "dd",
      "desc": "",
      "desc_rich": "",
      "parent_uuid": "",
      "position": 0,
      "number": 200,
      "priority": "EDjvSU7Q",
      "assess_manhour": 0,
      "total_manhour": 0,
      "remaining_manhour": 0,
      "estimate_variance": null,
      "time_progress": null,
      "attribute": null,
      "watchers": ["6ZpgEzkk"],
      "field_values": [
        {
          "field_uuid": "field001",
          "type": 2,
          "value": "dd",
          "value_type": 0
        },
        {
          "field_uuid": "field002",
          "type": 2,
          "value": "",
          "value_type": 0
        },
        {
          "field_uuid": "field003",
          "type": 8,
          "value": "6ZpgEzkk",
          "value_type": 0
        },
        {
          "field_uuid": "field004",
          "type": 8,
          "value": "6ZpgEzkk",
          "value_type": 0
        },
        {
          "field_uuid": "field005",
          "type": 12,
          "value": "56VtNrD9",
          "value_type": 0
        },
        {
          "field_uuid": "field006",
          "type": 9,
          "value": "6ZpgEzkkcqJGgEWr",
          "value_type": 0
        },
        {
          "field_uuid": "field007",
          "type": 11,
          "value": "3D2UjSN6",
          "value_type": 0
        },
        {
          "field_uuid": "field009",
          "type": 6,
          "value": 1591251090453712,
          "value_type": 0
        },
        {
          "field_uuid": "field010",
          "type": 6,
          "value": 1591251090453712,
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
          "value": "EDjvSU7Q",
          "value_type": 0
        },
        {
          "field_uuid": "field013",
          "type": 5,
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field015",
          "type": 14,
          "value": 200,
          "value_type": 0
        },
        {
          "field_uuid": "field016",
          "type": 2,
          "value": "",
          "value_type": 0
        },
        {
          "field_uuid": "field018",
          "type": 4,
          "value": null,
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
          "value": null,
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
          "value": null,
          "value_type": 0
        },
        {
          "field_uuid": "field027",
          "type": 5,
          "value": 1591200000,
          "value_type": 0
        },
        {
          "field_uuid": "field028",
          "type": 5,
          "value": 1591372799,
          "value_type": 0
        }
      ],
      "server_update_stamp": 1591251090544704,
      "related_tasks": [],
      "links": [],
      "subtasks": [],
      "path": "6ZpgEzkkWZVZ8FtQ",
      "code_commits": [],
      "related_task_count": [0, 0],
      "visible_subtask_count": 0,
      "subtask_count": [0, 0],
      "discussion_count": 0,
      "attachment_count": 0,
      "related_cases": [],
      "related_plan_cases": [],
      "related_testcase_plans": [],
      "related_wiki_pages": [],
      "related_devops_commits": [],
      "manhours": [],
      "product_uuids": null
    }
  ],
  "bad_tasks": []
}
```

## 添加工作项到时间视图

添加已有工作项到时间视图<\br>

itemKey 示例: task_gantt_chart-9VPyNujE

[调用方式](../item.md#更新item)

[参数列表](#task_gantt_chart)

### 请求体示例

```json
{
  "item": {
    "import_config": {
      "tasks": ["6ZpgEzkkDQN2pEwj"]
    }
  }
}
```

### 返回体示例

```json
{
  "item": {
    "item_type": "task_gantt_chart",
    "key": "task_gantt_chart-9VPyNujE",
    "uuid": "9VPyNujE"
  }
}
```

### 从时间视图中移除工作项

当工作项或里程碑及其子层级工作项和里程碑从时间视图中移除，此操作会删除里程碑但不会将系统中的工作项删除。

[调用方式](../item.md#删除item)

### 请求体示例

```json
{
  "keys": ["task_gantt_data-QBjfrAH8"]
}
```

### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
