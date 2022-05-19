# 项目集

- program
  - [schema](#schema)
  - [获取项目集属性详细信息](#获取项目集属性详细信息)
  - [查询项目集列表项目集详细信息](#查询项目集列表项目集详细信息)
  - [创建项目集](#创建项目集)
  - [编辑项目集信息](#编辑项目集信息)
  - [删除项目集](#删除项目集)
  - [项目集下新建子项目集](#项目集下新建子项目集)
  - [添加项目到项目集](#添加项目到项目集)
  - [从项目集中移除项目](#从项目集中移除项目)

## schema

项目集 itemKey: program-{program.uuid}

| aliases         | type    | required | canUpdate | allowEmpty | description                  |
| :-------------- | :------ | :------- | :-------- | :--------- | :--------------------------- |
| uuid            | text    | F        | F         | F          | [UUID]                       |
| item_type       | text    | T        | F         | F          | [Item 类型]                  |
| key             | text    | F        | F         | F          | [Item Key]                   |
| name            | text    | T        | T         | F          | 项目集名称                   |
| name_pinyin     | text    | F        | F         | F          | [名称拼音]                   |
| owner           | user    | F        | F         | F          | 项目集创建者                 |
| create_time     | time    | F        | F         | F          | 创建时间                     |
| assign          | user    | T        | T         | F          | 项目集负责人                 |
| plan_start_time | date    | F        | T         | F          | 计划开始日期                 |
| plan_end_time   | date    | F        | T         | F          | 计划结束日期                 |
| project_count   | integer | F        | F         | F          | [项目]                       |
| sprint_count    | integer | F        | F         | F          | [迭代数]                     |
| task_count      | integer | F        | F         | F          | [任务数]                     |
| parent          | text    | T        | T         | T          | [父节点]                     |
| path            | text    | F        | F         | T          | [层级路径]                   |
| position        | integer | F        | F         | T          | [位置]                       |
| after           | text    | F        | F         | T          | [在此节点后]                 |
| ancestors       | program | F        | F         | T          | [父项目集]                   |
| related_type    | enum    | T        | F         | T          | [关联数据类型][none,project] |
| project         | project | F        | F         | T          | [关联项目]                   |

---

## 获取项目集属性详细信息

[调用 graphql 接口](../../graphql/graphql.md#call_ones_graphql)

### 查询参数

```graphql
{
  fields(filter: { pool_in: ["program"], context: { type_equal: "team" } }) {
    aliases
    uuid
    name
    fieldType
    required
    canUpdate
    allowEmpty
    evaluated
    defaultValue
    builtIn
  }
}
```

### curl 示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql' \
--header 'Content-Type: application/json' \
--header 'Ones-User-Id: 6ZpgEzkk' \
--header 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\n    fields(filter: { pool_in: [\"program\"], context: { type_equal: \"team\" } }) {\n        aliases\n        uuid\n        name\n        fieldType\n        required\n        canUpdate\n        allowEmpty\n        evaluated\n        defaultValue\n        builtIn\n        \n    }\n}","variables":{}}'
```

---

## 查询项目集列表项目集详细信息

[调用 graphql 接口](../../graphql/graphql.md#call_ones_graphql)

### 查询参数

```graphql
query {
  programs {
    key
    uuid
    name
    assign {
      uuid
      name
      avatar
      __typename
    }
    project {
      uuid
    }
    relatedType
    createTime
    planStartTime
    planEndTime
    namePinyin
    parent
    path
    position
    projectCount
    sprintCount
    taskCount
  }
}
```

### 请求参数参考

```json
{
  "query": "programs {\n\t\tkey\n\t\tuuid\n\t\tname\n\t\tassign {\n\t\t\tuuid\n\t\t\tname\n\t\t\tavatar\n\t\t\t__typename\n\t\t}\n\t\tproject {\n\t\t\tuuid\n\t\t}\n\t\trelatedType\n\t\tcreateTime\n\t\tplanStartTime\n\t\tplanEndTime\n\t\tnamePinyin\n\t\tparent\n\t\tpath\n\t\tposition\n\t\tprojectCount\n\t\tsprintCount\n\t\ttaskCount\n\t}\n\n",
  "variables": {}
}
```

### 返回参数参考

```json
{
  "data": {
    "programs": [
      {
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "0002",
          "uuid": "3rzKDAtx"
        },
        "createTime": 1589351460,
        "key": "program-WAhBNNYr",
        "name": "定位到",
        "namePinyin": "ding4wei4dao4",
        "parent": "",
        "path": "WAhBNNYr",
        "planEndTime": null,
        "planStartTime": null,
        "position": 200000,
        "project": {
          "uuid": ""
        },
        "projectCount": 0,
        "relatedType": "none",
        "sprintCount": 0,
        "taskCount": 0,
        "uuid": "WAhBNNYr"
      },
      {
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "0002",
          "uuid": "3rzKDAtx"
        },
        "createTime": 1585626156,
        "key": "program-Q77yeVDE",
        "name": "辅导费",
        "namePinyin": "fu3dao3fei4",
        "parent": "",
        "path": "Q77yeVDE",
        "planEndTime": 1585798944,
        "planStartTime": 1585626144,
        "position": 100000,
        "project": {
          "uuid": ""
        },
        "projectCount": 1,
        "relatedType": "none",
        "sprintCount": 2,
        "taskCount": 11,
        "uuid": "Q77yeVDE"
      },
      {
        "assign": {
          "__typename": "User",
          "avatar": "",
          "name": "贝加庞克",
          "uuid": "6ZpgEzkk"
        },
        "createTime": 1585626166,
        "key": "program-SYmmVyGq",
        "name": "webhook_test",
        "namePinyin": "webhook_test",
        "parent": "Q77yeVDE",
        "path": "Q77yeVDE-SYmmVyGq",
        "planEndTime": null,
        "planStartTime": null,
        "position": 100000,
        "project": {
          "uuid": "6ZpgEzkkmkvOVIU6"
        },
        "projectCount": 1,
        "relatedType": "project",
        "sprintCount": 2,
        "taskCount": 11,
        "uuid": "SYmmVyGq"
      }
    ]
  }
}
```

---

## 创建项目集

[调用方式](../item.md#添加item)

[参数列表](#schema)

### 请求参数参考

```json
{
  "item": {
    "item_type": "program",
    "name": "dd",
    "plan_start_time": 1589179654,
    "plan_end_time": 1589438854,
    "related_type": "none",
    "parent": "",
    "assign": "3rzKDAtx"
  }
}
```

### 返回参数参考

```json
{
  "item": {
    "item_type": "program",
    "key": "program-WGyP2og6", // itemKey
    "uuid": "WGyP2og6"
  }
}
```

---

## 编辑项目集信息

[调用方式](../item.md#更新item)

[参数列表](#schema)

### 请求参数参考

```json
{
  "item": {
    "item_type": "program",
    "name": "new_name",
    "plan_start_time": 1589126400,
    "plan_end_time": 1589471999
  }
}
```

### 返回参数参考

```json
{
  "item": {
    "item_type": "program",
    "key": "program-WGyP2og6",
    "uuid": "WGyP2og6"
  }
}
```

---

## 删除项目集

[调用方式](../item.md#删除item)

### 返回参数参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

---

#### 项目集下新建子项目集

[调用方式](../item.md#item-add)

[参数列表](#schema)

### 请求参数参考

```json
{
  "item": {
    "item_type": "program",
    "name": "sub-program",
    "related_type": "none",
    "parent": "WGyP2og6", // 项目集下新建子项目集
    "assign": "X60Ow895"
  }
}
```

### 返回参数参考

```json
{
  "item": {
    "item_type": "program",
    "key": "program-RCu1xffH",
    "uuid": "RCu1xffH"
  }
}
```

---

## 添加项目到项目集

[调用方式](../item.md#批量添加item)

[参数列表](#schema)

### 请求体参考

```json
{
  "items": [
    {
      "item_type": "program",
      "parent": "WAhBNNYr",
      "related_type": "project",
      "project": "FzG7j6DoZ7NaA7Vr"
    }
  ]
}
```

### 返回参数参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

---

## 从项目集中移除项目

- 需要找出对应项目的项目集 uuid;
- relatedType=project 此项目集是关联的项目

[调用方式](../item.md#删除item)

### 参数列表参考

none

### 返回参数参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

---
