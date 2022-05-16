<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

# 目录

- [通用说明](#通用说明)
  - [项目报表](#项目报表)
    - [项目报表分类](#项目报表分类)
    - [项目报表配置](#项目报表配置)
    - [项目报表类型](#项目报表类型)
    - [维度配置](#维度配置)
    - [维度分组方式](#维度分组方式)
    - [工时报表维度分组方式](#工时报表维度分组方式)
  - [项目报表配置及返回结果示例](#项目报表配置及返回结果示例)
- [API 说明](#api-说明)
  - [1. 临时生成项目报表数据](#1-临时生成项目报表数据)
  - [2. 生成常用项目报表数据](#2-生成常用项目报表数据)
  - [3. 添加常用项目报表](#3-添加常用项目报表)
  - [4. 更新常用项目报表](#4-更新常用项目报表)
  - [5. 删除常用项目报表](#5-删除常用项目报表)
  - [6. 获取常用项目报表列表](#6-获取常用项目报表列表)
  - [7. 获取系统项目报表列表](#7-获取系统项目报表列表)
  - [8. 导出报表数据](#8-导出报表数据)
    - [9. 临时生成项目工时流水报表数据](#9-临时生成项目工时流水报表数据)
  - [10. 导出项目工时报表报表数据](#10-导出项目工时报表报表数据)

<!-- /TOC -->

# 通用说明

报表相关接口，实现了报表管理的增、删、改、查、导出，以及常用报表相关的功能。为了更好的使用接口，请仔细阅读接口文档（接口理解复杂度较高）。必要的时候可以参考 ONES 前端界面调用后端接口时的参数组织形式。

## 模型

### 项目报表

project_report

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :----------- | :----- | :------- | :------- | :----------------------------------- |
| uuid         | string | F        | len=8    | 项目报表 uuid                        |
| project_uuid | string | F        | len=16   | 项目 uuid                            |
| category_id  | string | T        |          | [项目报表所属分类](#项目报表分类) ID |
| name         | string | F        | len<=128 | 项目报表名称                         |
| owner        | string | F        | len=8    | 报表创建者 uuid                      |
| update_time  | int64  | F        |          | 更新时间，以秒为单位                 |
| config       | object | F        |          | [项目报表配置](#项目报表配置)        |

### 项目报表分类

project_report_category_id

`category_id` 由服务端生成，客户端在保存、修改常用报表时不需要提供

| 枚举值            | 说明                                     |
| :---------------- | :--------------------------------------- |
| custom            | 常用报表（自定义报表）                   |
| `issue_type`:uuid | 任务类型分析报表，包括缺陷分析和需求分析 |
| sprint            | 迭代分析报表                             |
| manhour           | 工时统计报表                             |

### 项目报表配置

project_report_config

| 参数名           | 值类型 | 允许空值 | 取值范围 | 说明                                                       |
| :--------------- | :----- | :------- | :------- | :--------------------------------------------------------- |
| type             | string | F        |          | 项目报表类型，参考下方说明                                 |
| filter           | object | T        |          | 项目报表过滤条件，参考 [筛选器文档](filter.md#筛选器) 说明 |
| include_subtasks | bool   | T        |          | 是否包含子任务                                             |
| dimensions       | array  | F        |          | 项目报表维度配置列表，参考下方说明                         |

### 项目报表类型

project_report_type

| 枚举值                | 说明                 |
| :-------------------- | :------------------- |
| field                 | 属性分布报表         |
| field_comparison      | 属性分布比较报表     |
| task_trend            | 新增任务趋势报表     |
| task_cumulative_trend | 任务累计趋势报表     |
| field_trend           | 任务属性分布趋势报表 |
| field_age             | 任务属性滞留分析     |
| manhour               | 工时统计报表         |
| manhour_detail        | 工时流水报表         |
| sprint_burndown       | 迭代燃尽图           |
| stay_option           | 单选属性停留时间报表 |

### 维度配置

dimension

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                                                     |
| :------------------ | :----- | :------- | :------- | :------------------------------------------------------- |
| aggregation         | string | T        |          | 分组（聚合）方式，参考下方说明                           |
| manhour_aggregation | string | T        |          | 工时报表(type=manhour)使用分组（聚合）方式，参考下方说明 |
| field_uuid          | string | T        |          | 任务属性 uuid，固有属性使用系统分配的 uuid               |
| order_by            | string | T        |          | 分组排序方式，用于 terms 类型的分组，参考下方说明        |
| manhour_order_by    | string | T        |          | 工时报表分组排序方式(type=manhour)                       |
| order               | string | T        | asc,desc | 排序使用升序或者降序，用于 terms 类型的分组              |
| limit               | int    | T        | >0       | 最大分组数量，用于 terms 类型的分组                      |
| interval            | int64  | T        | >0       | 分布间隔，用于 histogram 类型的分组                      |
| date_interval       | string | T        |          | 日期分布间隔，用于 date_histogram 类型的分组             |
| date_range          | string | T        |          | 日期限制，时间间隔，用于 date_histogram 类型的分组       |

### 维度分组方式

dimension_aggregation

| 枚举值         | 说明                     | 适用的属性类型                            |
| :------------- | :----------------------- | :---------------------------------------- |
| terms          | 按照属性枚举值分组       | option, user, project, issue_type, sprint |
| histogram      | 按照一个固定间隔分组     | integer, float                            |
| date_histogram | 按照一个固定时间间隔分组 | date, time                                |

### 工时报表维度分组方式

dimension_manhour_aggregation

| 枚举值               | 说明                                 |
| :------------------- | :----------------------------------- |
| sprint               | 按照 sprint 分组                     |
| task                 | 按照具有预估工时的任务分组           |
| task_status          | 按照具有预估工时的任务的状态分组     |
| task_status_category | 按照具有预估工时的任务的状态分类分组 |
| user                 | 按照记录工时的成员分组               |
| month                | 按照记录工时的开始时间按月分组       |
| week                 | 按照记录工时的开始时间按周分组       |
| day                  | 按照记录工时的开始时间按天分组       |
| department           | 按照记录工时的成员所属部门分组       |

#### 可选维度

| 工时报表类型 | 行维度                                                                                                               | 列维度                                                                                 |
| :----------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| 工时统计报表 | day;<br/>week;<br/>month;<br/>user;<br/>department;                                                                  | sprint;<br/>task;<br/>task_status;<br/>task_status_category;<br/>user;<br/>department; |
| 工时流水报表 | sprint;<br/>task;<br/>task_status;<br/>task_status_category;<br/>day;<br/>week;<br/>month;<br/>user;<br/>department; |                                                                                        |

### terms 分组排序方式

terms_order_by

| 枚举值     | 说明                           |
| :--------- | :----------------------------- |
| default    | 按照枚举的默认顺序排序         |
| task_count | 按照最终落到分组的任务数量排序 |

### 工时报表分组排序方式

manhour_order_by

| 枚举值         | 说明                     |
| :------------- | :----------------------- |
| default        | 按照枚举的默认顺序排序   |
| record_manhour | 按照记录工时的累计值排序 |

```
^((([1-9][0-9]*)y)|(([1-9][0-9]*)M)|(([1-9][0-9]*)w)|(([1-9][0-9]*)d))$
```

## 项目报表配置及返回结果示例

### 1、属性分布报表（field）

#### 配置

```json
{
  "type": "field",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "terms",
      "field_uuid": "field004",
      "order_by": "task_count",
      "order": "desc",
      "limit": 10
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 34,
  "labels": ["王五", "李四", "张三"],
  "datasets": [
    {
      "label": "任务数量",
      "data": [19, 10, 5]
    }
  ]
}
```

### 2、属性分布比较报表（field_comparison）

#### 配置

```json
{
  "type": "field_comparison",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "terms",
      "field_uuid": "field004",
      "order_by": "task_count",
      "order": "desc",
      "limit": 10
    },
    {
      "aggregation": "terms",
      "field_uuid": "field012",
      "order_by": "default",
      "order": "asc"
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 33,
  "labels": ["王五", "李四", "张三"],
  "datasets": [
    {
      "label": "非常紧急",
      "data": [9, 3, 2]
    },
    {
      "label": "紧急",
      "data": [2, 5, 0]
    },
    {
      "label": "普通",
      "data": [8, 1, 3]
    }
  ]
}
```

### 3、新增任务趋势报表（task_trend）

#### 配置

```json
{
  "type": "task_trend",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "date_histogram",
      "field_uuid": "field009",
      "date_interval": "1d"
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 33,
  "labels": ["2017-01-01", "2017-01-02", "2017-01-03"],
  "datasets": [
    {
      "data": [9, 3, 2]
    }
  ]
}
```

### 4、任务累计趋势报表（task_cumulative_trend）

#### 配置

```json
{
  "type": "task_cumulative_trend",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "date_histogram",
      "field_uuid": "field009",
      "date_interval": "1d"
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 33,
  "labels": ["2017-01-01", "2017-01-01", "2017-01-01"],
  "datasets": [
    {
      "data": [9, 3, 8]
    }
  ]
}
```

### 5、任务属性分布趋势报表（field_trend）

#### 配置

```json
{
  "type": "field_trend",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "date_histogram",
      "field_uuid": "field009",
      "date_interval": "1d"
    },
    {
      "aggregation": "terms",
      "field_uuid": "field012",
      "order_by": "default",
      "order": "desc"
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 33,
  "labels": ["2017-01-01", "2017-01-01", "2017-01-01"],
  "datasets": [
    {
      "label": "非常紧急",
      "data": [9, 3, 8]
    },
    {
      "label": "紧急",
      "data": [3, 6, 8]
    },
    {
      "label": "普通",
      "data": [1, 3, 8]
    }
  ]
}
```

### 6、任务属性滞留分析（field_age）

#### 配置

```json
{
  "type": "field_age",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK"
        }
      }
    ]
  },
  "dimensions": [
    {
      "aggregation": "terms",
      "field_uuid": "field012",
      "order_by": "default",
      "order": "desc",
      "limit": 3
    },
    {
      "aggregation": "integer",
      "interval": "7"
    }
  ]
}
```

#### 返回结果

```json
{
  "total": 33,
  "labels": ["非常紧急", "紧急", "普通"],
  "datasets": [
    {
      "label": "0-7",
      "data": [19, 13, 18]
    },
    {
      "label": "7-14",
      "data": [15, 12, 11]
    },
    {
      "label": "14-21",
      "data": [8, 7, 5]
    },
    {
      "label": ">21",
      "data": [1, 3, 2]
    }
  ]
}
```

### 7、工时统计报表（manhour）

#### 配置

```json
{
  "report_config": {
    "type": "manhour",
    "dimensions": [
      {
        "manhour_aggregation": "day",
        "order_by": "default",
        "manhour_order_by": "default",
        "order": "desc",
        "limit": 10
      },
      {
        "manhour_aggregation": "task_status_category",
        "order_by": "default",
        "manhour_order_by": "default",
        "order": "desc",
        "limit": 10
      }
    ],
    "filter": {
      "must": [
        {
          "equal": {
            "field_values.field006": "D5FqnLf3q94KYAWW"
          }
        }
      ]
    },
    "include_subtasks": false
  }
}
```

#### 返回结果

```json
{
  "total": 6,
  "labels": ["合计登记工时", "合计预估工时", "2017-10-01", "2017-10-31", "2017-12-23"],
  "hidden": ["合计登记工时", "合计预估工时"],
  "datasets": [
    {
      "label": "进行中",
      "data": [2, 2, 1, 1, 0]
    },
    {
      "label": "未开始",
      "data": [4, 4, 0, 0, 4]
    }
  ]
}
```

### 8、迭代燃尽图（sprint_burndown）

#### 配置

```json
{
  "type": "sprint_burndown",
  "filter": {
    "must": [
      {
        "equal": {
          "project_uuid": "6yQWMeg5SHArS5ZK",
          "sprint_uuid": "idUsdmD"
        }
      }
    ]
  }
}
```

#### 返回结果

```json
{
  "total": 10,
  "labels": [
    "2017-08-01",
    "2017-08-02",
    "2017-08-03",
    "2017-08-04",
    "2017-08-05",
    "2017-08-06",
    "2017-08-07",
    "2017-08-08",
    "2017-08-09",
    "2017-08-10",
    "2017-08-11"
  ],
  "datasets": [
    {
      "label": "任务数量",
      "data": [10, 9, 7, 7, 6, 5, 4, 3, 2, 1, 0]
    },
    {
      "label": "预期任务数量",
      "data": [10, 8.75, 7.5, 6.25, 5, 3.75, 2.5, 1.25, 0, null, null]
    }
  ]
}
```

# API 说明

## 1. 临时生成项目报表数据

根据传入的参数临时生成项目报表数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/reports/peek

### HTTP Method

POST

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名        | 值类型 | 允许空值 | 取值范围 | 说明                       |
| :------------ | :----- | :------- | :------- | :------------------------- |
| report_config | object | F        |          | 参考顶端的项目报表配置模型 |

### 请求体示例

```json
{
  "report_config": {
    "type": "manhour_detail",
    "dimensions": [
      {
        "manhour_aggregation": "day",
        "manhour_order_by": "default",
        "order": "desc",
        "limit": 30
      }
    ],
    "filter": null,
    "include_subtasks": true
  }
}
```

### 返回参数列表

| 参数名   | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :------- | :----- | :------- | :------- | :----------------------------- |
| datasets | object | F        |          | 参考顶端的项目报表返回结果示例 |

### 返回体示例

```
{
    "task_count": 54,
    "count": 1,
    "record_hours": 2.33,
    "assess_hours": 0,
    "groups": [
        {
            "name": "“草帽”蒙奇·D·路飞",
            "count": 1,
            "record_hours": 2.33,
            "assess_hours": 0,
            "records": [
                {
                    "project_uuid": "FtuS5ApRBk9uSq6X",
                    "project_name": "【示例】项目管理",
                    "issue_type_uuid": "3D2UjSN6",
                    "sub_issue_type_uuid": "",
                    "task_number": 22,
                    "task_uuid": "FtuS5ApR4gBUGEw1",
                    "task_name": "【示例任务】项目角色成员API",
                    "status_category": "to_do",
                    "status": "未开始",
                    "user_uuid": "FtuS5ApR",
                    "user_name": "“草帽”蒙奇·D·路飞",
                    "user_avatar": "***/FiJ-6RVJGV2c1GFPFdeGuOIsFWIu",
                    "hours": 2.33,
                    "start_time": "2018年12月10日 16:00",
                    "remark": "*** "
                }
            ]
        }
    ]
}
```

## 2. 生成常用项目报表数据

根据常用报表 uuid 生成项目报表数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/report/:reportUUID/build

### HTTP Method

GET

### 调用权限

view_project_reports

### 参数列表

无

### 返回参数列表

| 参数名   | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :------- | :----- | :------- | :------- | :----------------------------- |
| datasets | object | F        |          | 参考顶端的项目报表返回结果示例 |

## 3. 添加常用项目报表

把特定的项目报表配置保存为常用报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/reports/add

### HTTP Method

POST

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明                                                                |
| :------------- | :----- | :------- | :------- | :------------------------------------------------------------------ |
| project_report | object | F        |          | 项目报表，参考顶端的项目报表模型，但不需要提供 uuid 和 project_uuid |

### 返回参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明                             |
| :------------- | :----- | :------- | :------- | :------------------------------- |
| project_report | object | F        |          | 项目报表，参考顶端的项目报表模型 |

## 4. 更新常用项目报表

更新一个常用项目报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/report/:reportUUID/update

### HTTP Method

POST

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明                                                                |
| :------------- | :----- | :------- | :------- | :------------------------------------------------------------------ |
| project_report | object | F        |          | 项目报表，参考顶端的项目报表模型，但不需要提供 uuid 和 project_uuid |

### 返回参数列表

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明                             |
| :------------- | :----- | :------- | :------- | :------------------------------- |
| project_report | object | F        |          | 项目报表，参考顶端的项目报表模型 |

## 5. 删除常用项目报表

删除一个常用项目报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/report/:reportUUID/delete

### HTTP Method

POST

### 调用权限

view_project_reports

### 参数列表

无

### 返回参数列表

无

## 6. 获取常用项目报表列表

获取常用项目报表列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project_reports

### HTTP Method

GET

### 参数列表

无

### 返回参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :-------------- | :----- | :------- | :------- | :----------------------------------- |
| project_reports | array  | F        |          | 项目报表列表，参考顶端的项目报表模型 |

## 7. 获取系统项目报表列表

获取项目下系统报表库的报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/built_in_reports

### HTTP Method

GET

### 调用权限

view_project_reports

### 参数列表

无

### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围 | 说明                                                      |
| :-------------------- | :----- | :------- | :------- | :-------------------------------------------------------- |
| categories            | array  | F        |          | 系统报表库下的报表分类                                    |
| &emsp;id              | string | F        |          | 分类 id，参考顶端 category_id 说明                        |
| &emsp;name            | string | F        |          | 分类 名称                                                 |
| &emsp;project_reports | array  | F        |          | 分类下的项目报表列表，参考顶端的项目报表模型，但没有 uuid |

## 8. 导出报表数据

获取项目下系统报表库的报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/reports/export

### HTTP Method

post

### 传值方式

URL

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名        | 值类型 | 允许空值 | 取值范围 | 说明                       |
| :------------ | :----- | :------- | :------- | :------------------------- |
| report_config | object | F        |          | 参考顶端的项目报表配置模型 |

## 9. 临时生成项目工时流水报表数据

根据传入的参数临时生成团队工时流水报表数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/reports/manhour_detail/peek

### HTTP Method

post

### 传值方式

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名        | 值类型 | 允许空值 | 取值范围 | 说明                       |
| :------------ | :----- | :------- | :------- | :------------------------- |
| report_config | object | F        |          | 参考顶端的团队报表配置模型 |

### 返回参数列表

| 参数名                                  | 值类型 | 允许空值 | 取值范围         | 说明          |
| :-------------------------------------- | :----- | :------- | :--------------- | :------------ |
| task_count                              | int    | F        | 统计的任务记录数 |
| count                                   | int    | F        | 总的记录数       |
| record_hours                            | float  | F        |                  | 总的记录工时  |
| assess_hours                            | float  | F        |                  | 总的预估工时  |
| groups                                  | object | F        |                  | 数据分组      |
| &nbsp;&nbsp;name                        | string | F        |                  | 分组名称      |
| &nbsp;&nbsp;cout                        | int    | F        |                  | 组里的记录数  |
| &nbsp;&nbsp;record_hours                | string | F        |                  | 组的记录工时  |
| &nbsp;&nbsp;assess_hours                | string | F        |                  | 组的预估工时  |
| &nbsp;&nbsp;records                     | object | F        |                  | 组的记录      |
| &nbsp;&nbsp;&nbsp;&nbsp;project_uuid    | string | F        |                  | 项目 UUID     |
| &nbsp;&nbsp;&nbsp;&nbsp;project_name    | string | F        |                  | 项目名称      |
| &nbsp;&nbsp;&nbsp;&nbsp;issue_type_uuid | string | F        |                  | 任务类型 UUID |
| &nbsp;&nbsp;&nbsp;&nbsp;task_num        | int    | F        |                  | 任务 id       |
| &nbsp;&nbsp;&nbsp;&nbsp;task_UUID       | string | F        |                  | 任务 UUID     |
| &nbsp;&nbsp;&nbsp;&nbsp;task_name       | string | F        |                  | 任务名称      |
| &nbsp;&nbsp;&nbsp;&nbsp;status_category | string | F        |                  | 任务状态类型  |
| &nbsp;&nbsp;&nbsp;&nbsp;status          | string | F        |                  | 任务状态      |
| &nbsp;&nbsp;&nbsp;&nbsp;hours           | string | F        |                  | 记录工时      |
| &nbsp;&nbsp;&nbsp;&nbsp;start_time      | string | F        |                  | 工时开始时间  |
| &nbsp;&nbsp;&nbsp;&nbsp;remark          | string | F        |                  | 备注          |

### 返回体参考

```json
{
  "task_count": 6,
  "count": 2,
  "record_hours": 6,
  "assess_hours": 0,
  "groups": [
    {
      "name": "进行中",
      "count": 2,
      "record_hours": 2,
      "assess_hours": 0,
      "records": [
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Wri3STe4",
          "task_number": 10,
          "task_uuid": "D5FqnLf3RK4WYE2B",
          "task_name": "买10个糯米鸡",
          "status_category": "in_progress",
          "status": "进行中",
          "user_name": "肯德鸡",
          "hours": 1,
          "start_time": "2017年10月31日 16:45",
          "remark": ""
        },
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Wri3STe4",
          "task_number": 7,
          "task_uuid": "D5FqnLf3Hndglvhx",
          "task_name": "打包鸡",
          "status_category": "in_progress",
          "status": "进行中",
          "user_name": "肯德鸡",
          "hours": 1,
          "start_time": "2017年10月01日 16:45",
          "remark": ""
        }
      ]
    },
    {
      "name": "未开始",
      "count": 4,
      "record_hours": 4,
      "assess_hours": 0,
      "records": [
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Gb3TS1L1",
          "task_number": 2,
          "task_uuid": "D5FqnLf3cMctsN6Y",
          "task_name": "买半只盐焗鸡",
          "status_category": "to_do",
          "status": "未激活",
          "user_name": "游戏鸡",
          "hours": 1,
          "start_time": "2017年12月23日 11:03",
          "remark": ""
        },
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Gb3TS1L1",
          "task_number": 3,
          "task_uuid": "D5FqnLf3SC97C5rL",
          "task_name": "测试属性位置",
          "status_category": "to_do",
          "status": "未激活",
          "user_name": "游戏鸡",
          "hours": 1,
          "start_time": "2017年12月23日 11:03",
          "remark": ""
        },
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Gb3TS1L1",
          "task_number": 1,
          "task_uuid": "D5FqnLf3nY9x2oTW",
          "task_name": "买两份新奥尔良烤翅",
          "status_category": "to_do",
          "status": "未激活",
          "user_name": "肯德鸡",
          "hours": 1,
          "start_time": "2017年12月23日 10:54",
          "remark": ""
        },
        {
          "project_uuid": "D5FqnLf3q94KYAWW",
          "project_name": "白切鸡",
          "issue_type_uuid": "Gb3TS1L1",
          "task_number": 4,
          "task_uuid": "D5FqnLf34LxIiQQU",
          "task_name": "吃鸡走起",
          "status_category": "to_do",
          "status": "未激活",
          "user_name": "肯德鸡",
          "hours": 1,
          "start_time": "2017年12月23日 10:53",
          "remark": ""
        }
      ]
    }
  ]
}
```

## 10. 导出项目工时报表报表数据

获取团队下系统报表库的报表

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/reports/manhour_detail/export

### HTTP Method

post

### 调用权限

view_project_reports

### 传值方式

JSON

### 参数列表

| 参数名        | 值类型 | 允许空值 | 取值范围 | 说明                       |
| :------------ | :----- | :------- | :------- | :------------------------- |
| report_config | object | F        |          | 参考顶端的项目报表配置模型 |
