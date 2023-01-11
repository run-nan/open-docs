---
sidebar_position: 1
---

# ONES Item

- [简介](#简介)
- [Field](#field)
- [FieldType](#fieldtype)
- [Schema 示例](#schema示例)
- [调用 Item](#调用item)
  - [查询 Item](#查询item)
  - [添加 Item](#添加item)
  - [批量添加 Item](#批量添加item)
  - [更新 Item](#更新item)
  - [删除 Item](#删除item)

## 简介

- ONES Item 是 ONES 产品数据的存储和查询的解决方案，是一套基于 GraphQL 实现的后端服务框架。
- Item 的核心是类型系统（Type System），每个类型（Schema）对应一个对象实体（例如：用户实体）。
- Item 用属性（Field）集合去描述每个类型（Schema）。
- 在 Item 中最重要的部分是属性（Field）以及描述属性的元数据。
- 在 Item 中 Schema 之间是有联系的。像数据结构中的图，每一个 Schema 本身是一个点，Schema 中的 Field 作为连接的边。Item 定义了 ONES 中所有实体之间的关系。

## <div id="Field">Field</div>

每个 Schema 由多个 Field 组成，Field 作为元数据具有以下固有属性：

<div style={{overflow:"scroll"}}>
<table>
<thead>
<tr>
<th align="left">属性（Field）</th>
<th align="left">类型（Type）</th>
<th align="left">说明（Description）</th>
</tr>
</thead>
<tbody>
<tr>
<td ><strong>aliases</strong></td>
<td >string</td>
<td>
属性别名
</td>
</tr>
<tr>
<td ><strong>allowEmpty</strong></td>
<td >boolean</td>
<td>
是否允许空值
</td>
</tr>
<tr>
<td  ><strong>builtIn</strong></td>
<td >boolean</td>
<td>
是否为内置属性
</td>
</tr>
<tr>
<td  ><strong>canUpdate</strong></td>
<td >boolean</td>
<td>
该属性的值是否可更新
</td>
</tr>
<tr>
<td  ><strong>context</strong></td>
<td >Context</td>
<td>
属性所在的上下文，例如：团队、项目
</td>
</tr>
<tr>
<td  ><strong>createTime</strong></td>
<td >int</td>
<td>
属性创建时间
</td>
</tr>
<tr>
<td  ><strong>defaultValue</strong></td>
<td >string</td>
<td>
默认值
</td>
</tr>
<tr>
<td  ><strong>evaluated</strong></td>
<td >boolean</td>
<td>
该属性的值是否通过计算得到
</td>
</tr>
<tr>
<td  ><strong>fieldType</strong></td>
<td >string</td>
<td>
属性类型
</td>
</tr>
<tr>
<td  ><strong>hidden</strong></td>
<td >boolean</td>
<td>
是否在属性配置界面上显示
</td>
</tr>

<tr>
<td  ><strong>maxLength</strong></td>
<td >int</td>
<td>
属性值允许的最大长度
</td>
</tr>
<tr>
<td  ><strong>name</strong></td>
<td >string</td>
<td>
属性名称
</td>
</tr>
<tr>
<td  ><strong>namePinyin</strong></td>
<td >string</td>
<td>
属性名称拼音
</td>
</tr>
<tr>
<td  ><strong>options</strong></td>
<td >Option</td>
<td>
单选/多选属性的选项值列表
</td>
</tr>
<tr>
<td  ><strong>pool</strong></td>
<td >string</td>
<td>
属性所处的属性池
</td>
</tr>
<tr>
<td  ><strong>required</strong></td>
<td >boolean</td>
<td>
是否为必填属性
</td>
</tr>
<tr>
<td  ><strong>uuid</strong></td>
<td >string</td>
<td>
属性的 UUID
</td>
</tr>
</tbody>
</table>
</div>

## FieldType

属性类型

| 类型            | 类型枚举值 | 值类型       | 说明                                                             |
| :-------------- | :--------- | :----------- | :--------------------------------------------------------------- |
| option          | 1          | object       | 单选类型                                                         |
| text            | 2          | string       | 文本                                                             |
| integer         | 3          | int          | 整数，值等于实际数值 x 100000                                    |
| float           | 4          | int          | 浮点数，值等于向下取整(实际数值 x 100000)，小数点后有效位数 5 位 |
| date            | 5          | int          | 日期，utc 时间戳，以秒为单位                                     |
| user            | 8          | item         | 用户，其本身是一个 item                                          |
| user_list       | 13         | item array   | 用户列表                                                         |
| multi_line_text | 15         | string       | 多行文本                                                         |
| multi_option    | 16         | object array | 多选类型                                                         |

---

## <div id="schema示例">Schema 示例</div>

这里以用户实体 User Item 作为示例。下面是 User Item 所拥有的属性：

| aliases     | type       | required | canUpdate | allowEmpty | description        |
| :---------- | :--------- | :------- | :-------- | :--------- | :----------------- |
| uuid        | text       | F        | F         | F          | UUID]              |
| item_type   | text       | T        | F         | F          | Item 类型          |
| key         | text       | F        | F         | F          | Item Key           |
| name        | text       | T        | T         | F          | 用户名称           |
| name_pinyin | text       | F        | F         | F          | 名称拼音           |
| avatar      | text       | F        | T         | F          | 用户头像           |
| email       | text       | F        | F         | F          | 邮箱               |
| sync_types  | integer    | F        | F         | F          | 关联类型           |
| manhours    | manhour    | F        | F         | F          | 该用户登记的工时   |
| tasks       | task       | F        | F         | F          | 该用户负责的工作项 |
| status      | enum       | F        | F         | F          | 成员状态           |
| projects    | project    | F        | F         | F          | 用户参与的项目     |
| user_groups | user_group | F        | F         | F          | 用户所在用户组     |
| departments | department | F        | F         | F          | 用户所在部门       |
| inviter     | user       | F        | T         | F          | 邀请人             |
| id_number   | text       | F        | F         | F          | 工号               |
| phone       | text       | F        | F         | F          | 电话               |

---

- type：表示属性类型 FieldType，可通过 FiledType 找到对应的字段类型;
- required: 是否必填，T 必填，F 非必填;
- canUpdate: 该能否可被更新；
- allowEmpty： 是否允许为空。

查看更多属性信息，可通过调用接口获取[获取属性详细信息](../graphql/graphql.md#获取属性详细信息)

## <div id="调用item">调用 Item</div>

## <div id="查询item">查询 Item 列表数据</div>

---

查询 Item 列表数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | description            |
| :-------- | :----- | :--------------------- |
| query     | text   | GraphQL 查询语句       |
| variables | json   | GraphQL 查询语句的变量 |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
  "query":"{\n    users(\n        filterGroup: $filterGroup,\n        limit: 5\n    ){\n        name\n        uuid\n        email\n    }\n}",
  "variables":{
      "filterGroup":[{"name_match":"test"}]
    }
  }'
```

### 返回示例

```json
{
  "data": {
    "users": [
      {
        "email": "test123@ones.com",
        "name": "test123",
        "uuid": "GfYQd1g2"
      }
    ]
  }
}
```

更多查询方式可以参考[这里](../graphql/graphql.md#call_ones_graphql)。

## 查询单个 Item 数据

---

查询单个 Item

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | description            |
| :-------- | :----- | :--------------------- |
| query     | text   | GraphQL 查询语句       |
| variables | json   | GraphQL 查询语句的变量 |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
  "query":"{\n    user(\n        key: \"user-GfYQd1g2\",\n       ){\n        name\n        uuid\n        email\n    }\n}",
  "variables":{}
  }'
```

### 返回示例

```json
{
  "data": {
    "users": {
      "email": "test123@ones.com",
      "name": "test123",
      "uuid": "GfYQd1g2"
    }
  }
}
```

## <div id="添加item">添加 Item</div>

---

向 item 添加数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | description                 |
| :-------- | :----- | :-------------------------- |
| query     | text   | GraphQL mutation 语句       |
| variables | json   | GraphQL mutation 语句的变量 |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
      "query":"\n       mutation AddGanttData {\n     addActivity (name: $name assign: $assign chart_uuid: $chart_uuid type: $type progress: $progress start_time: $start_time end_time: $end_time parent: $parent) {\n         key\n         }\n          }\n    ",
      "variables":{
          "name":"milestone1",
          "assign":"A63euYZC",
          "chart_uuid":"6CKfQaSY",
          "type":"milestone",
          "progress":0,
          "start_time":1670515199,
          "end_time":1670515199,
          "parent":""
      }
    }'
```

### 返回示例

```json
{
  "data": {
    "addActivity": {
      "key": "activity-KDCyZ875"
    }
  }
}
```

## <div id="批量添加item">批量添加 Item</div>

---

向 item 批量添加数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/batch_add

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| aliases | type   | required | canUpdate | allowEmpty | description |
| :------ | :----- | :------- | :-------- | :--------- | :---------- |
| items   | []item | F        |           |            | item 数组   |

item

| aliases                  | type   | required | canUpdate | allowEmpty | description                                     |
| :----------------------- | :----- | :------- | :-------- | :--------- | :---------------------------------------------- |
| item_type                | text   | T        | F         | F          | [Item 类型]                                     |
| name                     | text   | F        | F         | F          | [Item Key]                                      |
| [每个 item 的参数不一样] | [类型] |          |           |            | 具体参数见[Schema](../graphql/schema/schema.md) |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/batch_add \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
      "items":[{
            "item_type": "program",
            "name": "test",
            "plan_start_time": null,
            "plan_end_time": null,
            "related_type": "none",
            "parent": "",
            "assign": "8bFdwBrF"
      }]
   }'
```

### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## <div id="更新item">更新 Item</div>

---

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | description                 |
| :-------- | :----- | :-------------------------- |
| query     | text   | GraphQL mutation 语句       |
| variables | json   | GraphQL mutation 语句的变量 |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
      "query":"\n  mutation UpdateGanttData {\n   updateActivity (key: $key name: $name) {\n     key\n     }\n   }\n",
      "variables":{
        "key":"activity-KDCyZ875",
        "name":"milestone22222"
        }
    }'
```

### 返回示例

```json
{
  "data": {
    "updateActivity": {
      "key": "activity-KDCyZ875"
    }
  }
}
```

## <div id="删除item">删除 Item</div>

---

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | description                 |
| :-------- | :----- | :-------------------------- |
| query     | text   | GraphQL mutation 语句       |
| variables | json   | GraphQL mutation 语句的变量 |

### 请求示例

```shell
curl -X POST \
https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
-H 'Content-Type: application/json' \
-H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
-H 'Ones-User-Id: 6ZpgEzkk' \
-d '{
      "query":"\n   mutation DeleteGanttData {\n   deleteActivity(\n   key: \"activity-KDCyZ875\"\n   ) {\n        key\n     }\n}\n  "
  }'
```

### 返回示例

```json
{
  "data": {
    "deleteActivity": {
      "key": "activity-KDCyZ875"
    }
  }
}
```
