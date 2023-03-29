# Task link type

- [task_link_type](#task_link_type)
- [添加关联关系类型](#添加关联关系类型)
- [查询关联关系类型列表](#查询关联关系类型列表)
- [删除关联关系类型](#删除关联关系类型)
- [更新关联关联类型](#更新关联关联类型)

## task_link_type

工作项关联关系类型

| aliases              | type    | required | canUpdate | allowEmpty | description                |
| :------------------- | :------ | :------- | :-------- | :--------- | :------------------------- |
| uuid                 | text    | F        | F         | F          | [UUID]                     |
| item_type            | text    | T        | F         | F          | [Item 类型]                |
| key                  | text    | F        | F         | F          | [Item Key]                 |
| name                 | text    | T        | T         | F          | 关联类型名称               |
| name_pinyin          | text    | F        | F         | F          | [名称拼音]                 |
| link_out_desc        | text    | T        | T         | F          | 链出描述                   |
| link_out_desc_pinyin | text    | F        | F         | F          | [链入描述拼音]             |
| link_in_desc         | text    | T        | T         | F          | 链入描述                   |
| link_in_desc_pinyin  | text    | F        | F         | F          | [链入描述拼音]             |
| built_in             | boolean | F        | F         | T          | [是否系统内置任务关联类型] |
| create_time          | time    | F        | F         | F          | 创建时间                   |
| link_count           | integer | F        | F         | F          | [关联数]                   |

## 添加关联关系类型

[调用方式](../item.md#添加item)

[参数列表](#task_link_type)

### 请求体参考

```json
{
  "item": {
    "item_type": "task_link_type",
    "name": "test_task_link_type",
    "link_out_desc": "test_link_out",
    "link_in_desc": "test_link_in"
  }
}
```

### 返回体参考

```json
{
  "item": {
    "built_in": false,
    "create_time": 1589801466,
    "item_type": "task_link_type",
    "key": "task_link_type-5NDAfTqk",
    "link_in_desc": "test_link_in",
    "link_in_desc_pinyin": "test_link_in",
    "link_out_desc": "test_link_out",
    "link_out_desc_pinyin": "test_link_out",
    "name": "test_task_link_type",
    "name_pinyin": "test_task_link_type",
    "uuid": "5NDAfTqk"
  }
}
```

## 查询关联关系类型列表

[调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql)

### 请求体参考

```json
{
  "query": "query TASK_RELATED_TYPES($filter: Filter, $orderBy: OrderBy) {\n    taskLinkTypes(filter: $filter, orderBy: $orderBy) {\n      key\n      uuid\n      name\n      builtIn\n      createTime\n      linkOutDesc\n      linkInDesc\n      linkCount\n    }\n  }",
  "variables": {
    "orderBy": {
      "createTime": "ASC"
    }
  }
}
```

## 返回体参考

```json
{
  "data": {
    "taskLinkTypes": [
      {
        "builtIn": true,
        "createTime": 1568207736,
        "key": "task_link_type-GPdpmkRX",
        "linkCount": 19,
        "linkInDesc": "关联",
        "linkOutDesc": "关联",
        "name": "关联",
        "uuid": "GPdpmkRX"
      },
      {
        "builtIn": false,
        "createTime": 1589796898,
        "key": "task_link_type-PWEJei8M",
        "linkCount": 0,
        "linkInDesc": "link_desc",
        "linkOutDesc": "link_out",
        "name": "link_type",
        "uuid": "PWEJei8M"
      },
      {
        "builtIn": false,
        "createTime": 1589801466,
        "key": "task_link_type-5NDAfTqk",
        "linkCount": 0,
        "linkInDesc": "test_link_in",
        "linkOutDesc": "test_link_out",
        "name": "test_task_link_type",
        "uuid": "5NDAfTqk"
      }
    ]
  }
}
```

## 删除关联关系类型

### URL

https://your-host-name/project/api/project/team/:teamUUID/task_link_type/:taskLinkTypeUUID/delete

### HTTP Method

POST

### 请求参数

none

### 返回参数参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## 更新关联关联类型

[调用方式](../item.md#更新item)

[参数列表](#task_link_type)

### 请求体示例

```json
{
  "item": {
    "item_type": "task_link_type",
    "name": "link_type1",
    "link_out_desc": "link_out",
    "link_in_desc": "link_desc"
  }
}
```

### 返回体示例

```json
{
  "item": {
    "built_in": false,
    "create_time": 1589796898,
    "item_type": "task_link_type",
    "key": "task_link_type-PWEJei8M",
    "link_in_desc": "link_desc",
    "link_in_desc_pinyin": "link_desc",
    "link_out_desc": "link_out",
    "link_out_desc_pinyin": "link_out",
    "name": "link_type1",
    "name_pinyin": "link_type1",
    "uuid": "PWEJei8M"
  }
}
```
