# 甘特图

- gantt
  - [schema](#schema)
    - [gantt_chart](#gantt_chart)
    - [gantt_data](#ganttdata)
    - [gantt_chart_personal_config](#gantt_chart_personal_config)
    - [gantt_chart_import_config](#gantt_chart_import_config)
- [新建甘特图](#新建甘特图)
- [更新甘特图](#更新甘特图)
- [删除甘特图](#删除甘特图)
- [甘特图中新建任务](#甘特图中新建任务)
- [甘特图中新建分组](#甘特图中新建分组)
- [甘特图中新建里程碑](#甘特图中新建里程碑)
- [更新甘特图中数据信息](#更新甘特图中数据信息)
- [删除甘特图中的数据](#删除甘特图中的数据)
- [获取甘特图列表](#获取甘特图列表)
- [获取甘特图中数据](#获取甘特图中数据)
- [同步 Project 数据](#同步Project数据)

## schema

## gantt_chart

甘特图

- R required
- C canUpdate
- A allowEmpty

| aliases           | type                        | R   | C   | A   | description       |
| :---------------- | :-------------------------- | :-- | :-- | :-- | :---------------- |
| uuid              | text                        | F   | F   | F   | [UUID]            |
| item_type         | text                        | T   | F   | F   | [Item 类型]       |
| key               | text                        | F   | F   | F   | [Item Key]        |
| name              | text                        | T   | T   | F   | 甘特图名称名称    |
| name_pinyin       | text                        | F   | F   | F   | [名称拼音]        |
| owner             | user                        | F   | F   | F   | 甘特图创建者      |
| shared            | boolean                     | F   | T   | T   | 分享              |
| shared_to         | user_domains                | F   | T   | T   | 分享用户域        |
| create_time       | time                        | F   | F   | F   | 创建时间          |
| personal_config   | gantt_chart_personal_config | F   | F   | T   | 个人配置          |
| import_config     | gantt_chart_import_config   | F   | T   | T   | 导入配置          |
| sync_from_project | boolean                     | F   | T   | F   | 同步 project 开关 |
| sync_to_project   | boolean                     | F   | T   | F   | 同步 project 开关 |

## gantt_data

甘特图中的数据

| aliases          | type    | required | canUpdate | allowEmpty | description                                       |
| :--------------- | :------ | :------- | :-------- | :--------- | :------------------------------------------------ |
| uuid             | text    | F        | F         | F          | [UUID]                                            |
| item_type        | text    | T        | F         | F          | [Item 类型]                                       |
| key              | text    | F        | F         | F          | [Item Key]                                        |
| gantt_chart_uuid | text    | T        | F         | F          | 甘特图 UUID                                       |
| gantt_data_type  | enum    | T        | T         | F          | 甘特数据类型 [group,task,milestone]               |
| name             | text    | T        | T         | F          | 甘特数据名称                                      |
| name_pinyin      | text    | F        | F         | F          | [名称拼音]                                        |
| owner            | user    | F        | F         | F          | 甘特数据创建者                                    |
| plan_start_time  | date    | F        | T         | F          | 计划开始日期                                      |
| plan_end_time    | date    | F        | T         | F          | 计划结束日期                                      |
| duration         | integer | F        | T         | F          | 持续时间                                          |
| progress         | integer | F        | T         | F          | 进度                                              |
| parent           | text    | T        | T         | T          | 父节点                                            |
| path             | text    | F        | F         | T          | 层级路径                                          |
| position         | integer | F        | F         | T          | 位置                                              |
| after            | text    | F        | T         | T          | 在此节点后                                        |
| create_time      | time    | F        | F         | F          | 创建时间                                          |
| assign           | user    | F        | T         | F          | 甘特数据负责人                                    |
| related_type     | enum    | F        | F         | T          | 关联数据类型[none,project, sprint,task,milestone] |
| project          | project | F        | F         | T          | 关联项目                                          |
| sprint           | sprint  | F        | F         | T          | 关联迭代                                          |
| need_sync        | boolean | F        | T         | T          | 需要同步                                          |

## gantt_chart_personal_config

个人化配置

| aliases          | type    | required | canUpdate | allowEmpty | description      |
| :--------------- | :------ | :------- | :-------- | :--------- | :--------------- |
| item_type        | text    | T        | F         | F          | [Item 类型]      |
| key              | text    | F        | F         | F          | [Item Key]       |
| owner            | user    | F        | F         | F          | 甘特图配置创建者 |
| gantt_chart_uuid | text    | F        | F         | F          | 甘特图 UUID      |
| expand           | boolean | F        | T         | T          | 展开             |
| zooming          | integer | F        | T         | T          | 缩放             |
| create_time      | time    | F        | F         | F          | 创建时间         |

## gantt_chart_import_config 请求示例

关联的 project

| aliases  | type    | required | canUpdate | allowEmpty | description |
| :------- | :------ | :------- | :-------- | :--------- | :---------- |
| projects | string! | F        | T         | F          | 关联项目    |

---

## 新建甘特图

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

### 功能描述

[调用 item 接口](../item.md#添加item) , 新建甘特图

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化， 可用字段参考 [参数列表](#gantt_chart)

### 请求示例

```json
{
  "item": {
    "name": "gantt_test",
    "shared": false,
    "item_type": "gantt_chart",
    "shared_to": [],
    "import_config": {
      "projects": ["FtuS5ApRBk9uSq6X"]
    },
    "sync_from_project": true,
    "sync_to_project": true
  }
}
```

### 返回参数列表

请参考 [GraphQL 新增 item 返回参数](../item.md#添加item)

### 返回体示例

```json
{
  "item": {
    "create_time": 1589786801,
    "import_config": {
      "projects": ["FtuS5ApRBk9uSq6X"]
    },
    "item_type": "gantt_chart",
    "key": "gantt_chart-9wJiCacU",
    "name": "gantt_test",
    "name_pinyin": "gantt_test",
    "owner": "6ZpgEzkk",
    "shared": false,
    "sync_from_project": true,
    "sync_to_project": true,
    "uuid": "9wJiCacU"
  }
}
```

---

## 更新甘特图

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/:itemkey/update

### 功能描述

[调用 item 接口](../item.md#更新item) , 更新甘特图

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

URL / JSON

### 请求参数列表

#### URL 参数

itemkey: 甘特图的 key, 例如: `gantt_chart-6ZpgEzkkQ7PkhGTv`

#### json 参数

可根据 GraphQL 查询条件变化，可用字段请参考 [参数列表](#gantt_chart)

### 请求示例

```json
{
  "item": {
    "uuid": "9wJiCacU",
    "item_type": "gantt_chart",
    "import_config": {
      "projects": ["FtuS5ApRBk9uSq6X", "FtuS5ApRlBYRMALD"]
    },
    "sync_from_project": true,
    "sync_to_project": true
  }
}
```

### 返回参数列表

请参考 [GraphQL 更新 item 返回参数](../item.md#更新item)

### 返回体示例

```json
{
  "item": {
    "create_time": 1589786801,
    "import_config": {
      "projects": ["FtuS5ApRBk9uSq6X", "FtuS5ApRlBYRMALD"]
    },
    "item_type": "gantt_chart",
    "key": "gantt_chart-9wJiCacU",
    "name": "gantt_test",
    "name_pinyin": "gantt_test",
    "owner": "6ZpgEzkk",
    "shared": false,
    "sync_from_project": true,
    "sync_to_project": true,
    "uuid": "9wJiCacU"
  }
}
```

---

### 删除甘特图

### 删除甘特图

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/:itemkey/delete

### 功能描述

[调用 item 接口](../item.md#删除item) , 删除甘特图

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

URL

### 请求参数列表

itemkey: 项目集的 key, 例如: `gantt_chart-6ZpgEzkkQ7PkhGTv`

### 返回参数列表

none

### 返回体数示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

---

## 甘特图中新建任务

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

### 功能描述

[调用 item 接口](../item.md#添加item) , 在甘特图中新建任务

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化，可用字段请参考 [参数列表](#ganttdata)

### 请求示例

```json
{
  "item": {
    "name": "task_create_test",
    "item_type": "gantt_data",
    "gantt_data_type": "task",
    "gantt_chart_uuid": "9wJiCacU",
    "plan_start_time": 1589299200,
    "plan_end_time": 1589817599,
    "parent": "",
    "after": "BwRkHJvz",
    "assign": "3rzKDAtx"
  }
}
```

### 返回参数列表

请参考 [GraphQL 添加 item 返回参数](../item.md#添加item)

### 返回体示例

```json
{
  "item": {
    "assign": "3rzKDAtx",
    "create_time": 1589790823,
    "gantt_chart_uuid": "9wJiCacU",
    "gantt_data_type": "task",
    "item_type": "gantt_data",
    "key": "gantt_data-Q3WVKZ7x",
    "name": "task_create_test",
    "name_pinyin": "task_create_test",
    "owner": "6ZpgEzkk",
    "parent": "",
    "path": "Q3WVKZ7x",
    "plan_end_time": 1589817599,
    "plan_start_time": 1589299200,
    "position": 400000,
    "progress": 0,
    "uuid": "Q3WVKZ7x"
  }
}
```

---

## 甘特图中新建分组

## 甘特图中新建分组

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

### 功能描述

[调用 item 接口](../item.md#添加item) , 在甘特图中新建分组

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化，可用字段请参考 [参数列表](#ganttdata)

### 请求示例

```json
{
  "item": {
    "name": "group_test",
    "item_type": "gantt_data",
    "gantt_data_type": "group",
    "gantt_chart_uuid": "9wJiCacU",
    "plan_start_time": 0,
    "plan_end_time": 0,
    "parent": "",
    "after": "Q3WVKZ7x",
    "assign": "3rzKDAtx"
  }
}
```

### 返回参数列表

请参考 [GraphQL 添加 item 返回参数](../item.md#添加item)

### 返回体示例

```json
{
  "item": {
    "assign": "3rzKDAtx",
    "create_time": 1589792191,
    "gantt_chart_uuid": "9wJiCacU",
    "gantt_data_type": "group",
    "item_type": "gantt_data",
    "key": "gantt_data-S5GJN3JM",
    "name": "group_test",
    "name_pinyin": "group_test",
    "owner": "6ZpgEzkk",
    "parent": "",
    "path": "S5GJN3JM",
    "plan_end_time": 57599,
    "plan_start_time": -28800,
    "position": 500000,
    "progress": 0,
    "uuid": "S5GJN3JM"
  }
}
```

---

## 甘特图中新建里程碑

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

### 功能描述

[调用 item 接口](../item.md#添加item) , 在甘特图中新建里程碑

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化，可用字段请参考 [参数列表](#ganttdata)

### 请求示例

```json
{
  "item": {
    "name": "milestone_test",
    "item_type": "gantt_data",
    "gantt_data_type": "milestone",
    "gantt_chart_uuid": "9wJiCacU",
    "progress": 0,
    "plan_start_time": 1589774400,
    "plan_end_time": 1589774400,
    "parent": "",
    "after": "S5GJN3JM",
    "assign": "3rzKDAtx"
  }
}
```

### 返回参数列表

请参考 [GraphQL 添加 item 返回参数](../item.md#添加item)

### 返回体示例

```json
{
  "item": {
    "assign": "3rzKDAtx",
    "create_time": 1589792410,
    "gantt_chart_uuid": "9wJiCacU",
    "gantt_data_type": "milestone",
    "item_type": "gantt_data",
    "key": "gantt_data-Lyx6o1f4",
    "name": "milestone_test",
    "name_pinyin": "milestone_test",
    "owner": "6ZpgEzkk",
    "parent": "",
    "path": "Lyx6o1f4",
    "plan_end_time": 1589774400,
    "plan_start_time": 1589774400,
    "position": 600000,
    "progress": 0,
    "uuid": "Lyx6o1f4"
  }
}
```

---

## 更新甘特图中数据信息

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/:itemkey/update

### 功能描述

[调用 item 接口](../item.md#更新item) , 更新甘特图中数据信息

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

URL / JSON

### 请求参数列表

#### URL 参数

itemkey: 甘特图的 key, 例如: `gantt_data-6ZpgEzkkQ7PkhGTv`

#### json 参数

可根据 GraphQL 查询条件变化，可用字段请参考 [参数列表](#ganttdata)

### 请求体参考

```json
{
  "item": {
    "uuid": "MgNUUj2c",
    "name": "update_gantt_data_name",
    "item_type": "gantt_data",
    "gantt_data_type": "task",
    "gantt_chart_uuid": "AcCn1Jx1",
    "plan_start_time": 1589299200,
    "plan_end_time": 1589385599,
    "progress": 1000000
  }
}
```

### 返回参数列表

请参考 [GraphQL 更新 item 返回参数](../item.md#更新item)

### 返回体参考

```json
{
  "item": {
    "assign": "JfaASqi2",
    "create_time": 1589351766,
    "gantt_chart_uuid": "AcCn1Jx1",
    "gantt_data_type": "task",
    "item_type": "gantt_data",
    "key": "gantt_data-MgNUUj2c",
    "name": "update_gantt_data_name",
    "name_pinyin": "update_gantt_data_name",
    "owner": "6ZpgEzkk",
    "parent": "",
    "path": "MgNUUj2c",
    "plan_end_time": 1589385599,
    "plan_start_time": 1589299200,
    "position": 700000,
    "progress": 1000000,
    "uuid": "MgNUUj2c"
  }
}
```

---

### 删除甘特图中的数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/:itemkey/delete

### 功能描述

[调用 item 接口](../item.md#删除item) , 删除甘特图中的数据

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

URL

### 请求参数列表

itemkey: 项目集的 key, 例如: `gantt_chart-6ZpgEzkkQ7PkhGTv`

### 返回参数列表

请参考 [GraphQL 删除 item 返回参数](../item.md#删除item)

### 返回参数参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

---

## 获取甘特图列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql) , 获取甘特图列表

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化，可用字段参考 [gantt_chart](#gantt_chart)

### 查询参数

```graphql
query LIST_GANTT_CHARTS($filter: Filter, $orderBy: OrderBy) {
  ganttCharts(filter: $filter, orderBy: $orderBy) {
    key
    uuid
    name
    shared
    sharedTo {
      param
      type
      __typename
    }
    owner {
      key
      uuid
      __typename
    }
    personalConfig {
      key
      expand
      zooming
      __typename
    }
    importConfig {
      projects
      __typename
    }
    syncFromProject
    syncToProject
    createTime
    __typename
  }
}
```

### 请求体参考

```json
{
  "operationName": "LIST_GANTT_CHARTS",
  "variables": {
    "filter": {},
    "orderBy": {
      "createTime": "DESC"
    }
  },
  "query": "query LIST_GANTT_CHARTS($filter: Filter, $orderBy: OrderBy) {\n  ganttCharts(filter: $filter, orderBy: $orderBy) {\n    key\n    uuid\n    name\n    shared\n    sharedTo {\n      param\n      type\n      __typename\n    }\n    owner {\n      key\n      uuid\n      __typename\n    }\n    personalConfig {\n      key\n      expand\n      zooming\n      __typename\n    }\n    importConfig {\n      projects\n      __typename\n    }\n    syncFromProject\n    syncToProject\n    createTime\n    __typename\n  }\n}\n"
}
```

### 返回参数列表

请参考 [GraphQL 查询 item 返回参数](../../graphql/graphql.md#call_ones_graphql)

### 返回体参考

```json
{
  "data": {
    "ganttCharts": [
      {
        "__typename": "GanttChart",
        "createTime": 1589786801,
        "importConfig": {
          "__typename": "ImportConfig",
          "projects": ["FtuS5ApRBk9uSq6X", "FtuS5ApRlBYRMALD"]
        },
        "key": "gantt_chart-9wJiCacU",
        "name": "gantt_test",
        "owner": {
          "__typename": "User",
          "key": "user-6ZpgEzkk",
          "uuid": "6ZpgEzkk"
        },
        "personalConfig": {
          "__typename": "GanttChartPersonalConfig",
          "expand": true,
          "key": "gantt_chart_personal_config-9wJiCacU-6ZpgEzkk",
          "zooming": 100
        },
        "shared": false,
        "sharedTo": [],
        "syncFromProject": true,
        "syncToProject": true,
        "uuid": "9wJiCacU"
      },
      {
        "__typename": "GanttChart",
        "createTime": 1586401336,
        "importConfig": {
          "__typename": "ImportConfig",
          "projects": [
            "FtuS5ApROKcAI7U1",
            "FtuS5ApRUrTEC8tT",
            "FtuS5ApRTSAkfwI7",
            "FtuS5ApRlBYRMALD"
          ]
        },
        "key": "gantt_chart-AcCn1Jx1",
        "name": "my_gannt",
        "owner": {
          "__typename": "User",
          "key": "user-6ZpgEzkk",
          "uuid": "6ZpgEzkk"
        },
        "personalConfig": {
          "__typename": "GanttChartPersonalConfig",
          "expand": false,
          "key": "gantt_chart_personal_config-AcCn1Jx1-6ZpgEzkk",
          "zooming": 80
        },
        "shared": true,
        "sharedTo": [
          {
            "__typename": "UserDomain",
            "param": "PDzSPeAM",
            "type": "group"
          }
        ],
        "syncFromProject": true,
        "syncToProject": true,
        "uuid": "AcCn1Jx1"
      }
    ]
  }
}
```

---

## 获取甘特图中数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### 功能描述

[调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql) , 获取甘特图中数据

### HTTP Method

POST

### 是否需要登录

需要

### 传值方式

json

### 请求参数列表

可根据 GraphQL 查询条件变化，可用字段参考 [gantt_chart](#gantt_chart)

### 查询参数示例

```graphql
query LIST_GANTT_DATAS($filter: Filter, $orderBy: OrderBy) {
  ganttDatas(filter: $filter, orderBy: $orderBy) {
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
    sprint {
      uuid
      project {
        uuid
        __typename
      }
      __typename
    }
    project {
      uuid
      __typename
    }
    needSync
    __typename
  }
}
```

### 请求体参考

```json
{
  "operationName": "LIST_GANTT_DATAS",
  "variables": {
    "filter": {
      "ganttChartUUID_in": ["9wJiCacU"]
    },
    "orderBy": {
      "position": "ASC"
    }
  },
  "query": "query LIST_GANTT_DATAS($filter: Filter, $orderBy: OrderBy) {\n  ganttDatas(filter: $filter, orderBy: $orderBy) {\n    key\n    uuid\n    name\n    planStartTime\n    planEndTime\n    parent\n    position\n    progress\n    ganttChartUUID\n    ganttDataType\n    createTime\n    assign {\n      uuid\n      name\n      avatar\n      __typename\n    }\n    relatedType\n    sprint {\n      uuid\n      project {\n        uuid\n        __typename\n      }\n      __typename\n    }\n    project {\n      uuid\n      __typename\n    }\n    needSync\n    __typename\n  }\n}\n"
}
```

### 返回参数列表

请参考 [GraphQL 查询 item 返回参数](../../graphql/graphql.md#call_ones_graphql)

### 返回体参考

```json
{
  "data": {
    "ganttDatas": [
      {
        "__typename": "GanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Ruddy",
          "uuid": "FtuS5ApR"
        },
        "createTime": 1589786801,
        "ganttChartUUID": "9wJiCacU",
        "ganttDataType": "group",
        "key": "gantt_data-RRJJwiwH",
        "name": "project manager",
        "needSync": false,
        "parent": "",
        "planEndTime": 1536767999,
        "planStartTime": 1534867200,
        "position": 100000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "uuid": "FtuS5ApRBk9uSq6X"
        },
        "relatedType": "project",
        "sprint": {
          "__typename": "Sprint",
          "project": null,
          "uuid": ""
        },
        "uuid": "RRJJwiwH"
      },
      {
        "__typename": "GanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Ruddy",
          "uuid": "FtuS5ApR"
        },
        "createTime": 1589786801,
        "ganttChartUUID": "9wJiCacU",
        "ganttDataType": "task",
        "key": "gantt_data-L2iBydG5",
        "name": "sprint A",
        "needSync": false,
        "parent": "RRJJwiwH",
        "planEndTime": 1536163199,
        "planStartTime": 1534867200,
        "position": 100000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "uuid": ""
        },
        "relatedType": "sprint",
        "sprint": {
          "__typename": "Sprint",
          "project": {
            "__typename": "Project",
            "uuid": "FtuS5ApRBk9uSq6X"
          },
          "uuid": "FQD1nCpR"
        },
        "uuid": "L2iBydG5"
      },
      {
        "__typename": "GanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Ruddy",
          "uuid": "FtuS5ApR"
        },
        "createTime": 1589788879,
        "ganttChartUUID": "9wJiCacU",
        "ganttDataType": "task",
        "key": "gantt_data-NdVgjJ7Y",
        "name": "project-t2-no-permission",
        "needSync": true,
        "parent": "",
        "planEndTime": 1589817599,
        "planStartTime": 1589731200,
        "position": 200000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "uuid": "FtuS5ApRlBYRMALD"
        },
        "relatedType": "project",
        "sprint": {
          "__typename": "Sprint",
          "project": null,
          "uuid": ""
        },
        "uuid": "NdVgjJ7Y"
      },
      {
        "__typename": "GanttData",
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "Ruddy",
          "uuid": "FtuS5ApR"
        },
        "createTime": 1589786801,
        "ganttChartUUID": "9wJiCacU",
        "ganttDataType": "task",
        "key": "gantt_data-DrV1Ae54",
        "name": "sprint B",
        "needSync": false,
        "parent": "RRJJwiwH",
        "planEndTime": 1536767999,
        "planStartTime": 1535472000,
        "position": 200000,
        "progress": 0,
        "project": {
          "__typename": "Project",
          "uuid": ""
        },
        "relatedType": "sprint",
        "sprint": {
          "__typename": "Sprint",
          "project": {
            "__typename": "Project",
            "uuid": "FtuS5ApRBk9uSq6X"
          },
          "uuid": "7diQ9Lan"
        },
        "uuid": "DrV1Ae54"
      }
    ]
  }
}
```

---

## 同步 Project 数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/gantt_chart/:ganttChartUUID/sync

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名 | 值类型   | 允许空值 | 取值范围                  | 说明            |
| :----- | :------- | :------- | :------------------------ | :-------------- |
| action | string   | F        | [from_project,to_project] | 动作            |
| uuids  | []string | F        | len=8                     | gantt_data uuid |

### 返回参数列表

| 参数名             | 值类型    | 说明            |
| :----------------- | :-------- | :-------------- |
| success_sync_datas | []string  | gantt_data uuid |
| bad_sync_datas     | []badItem | 数组类型        |

badItem

| 参数名 | 值类型 | 说明     |
| :----- | :----- | :------- |
| UUID   | string | 错误数据 |
| Key    | string | key      |
| Err    | string | 错误原因 |

### 请求参数参考

```json
{
  "action": "to_project",
  "uuids": ["RRJJwiwH"]
}
```

### 返回参数参考

```json
{
  "success_sync_datas": ["RRJJwiwH"],
  "bad_sync_datas": []
}
```

---
