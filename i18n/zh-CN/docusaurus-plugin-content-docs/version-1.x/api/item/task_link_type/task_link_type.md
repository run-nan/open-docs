# 工作项关联类型

- [通用说明](#通用说明)
  - [task_link_type](#task_link_type)
- [API 说明](#api-说明)
  - [添加关联关系类型](#添加关联关系类型)
  - [查询关联关系类型列表](#查询关联关系类型列表)
  - [更新关联关联类型](#更新关联关系类型)

## 通用说明

### task_link_type

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

## API 说明

### 添加关联关系类型

添加关联关系类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql?t=object-link-types

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型 | 说明                                                                         |
| :-------- | :----- | :--------------------------------------------------------------------------- |
| query     | string | GraphQL 查询语句，参考下方请求示例和 [调用方式](../item.md#添加item)         |
| variables | object | GraphQL 查询变量，参考顶部 [task_link_type](##task_link_type) 和下方请求示例 |

#### 返回参数列表

| 参数名 | 值类型 | 说明             |
| :----- | :----- | :--------------- |
| data   | object | 返回的 item 数据 |

data 结构

| 参数名            | 值类型 | 说明                       |
| :---------------- | :----- | :------------------------- |
| addObjectLinkType | object | 对应添加时的 mutation 名称 |

addObjectLinkType 结构

| 参数名 | 值类型 | 说明                 |
| :----- | :----- | :------------------- |
| key    | string | 新添加的 item 的 key |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/items/graphql?t=object-link-types \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "query": "\n    mutation AddObjectLinkType {\n      addObjectLinkType (link_indesc: $link_indesc link_outdesc: $link_outdesc name: $name source_condition: $source_condition source_type: $source_type target_condition: $target_condition target_type: $target_type link_in_desc: $link_in_desc link_out_desc: $link_out_desc link_model: $link_model) {\n        key\n      }\n    }\n  ",
    "variables": {
        "link_indesc": "",
        "link_outdesc": "",
        "name": "B",
        "source_condition": "{}",
        "source_type": "task",
        "target_condition": "{}",
        "target_type": "task",
        "link_in_desc": "This is associate task description.",
        "link_out_desc": "BBB",
        "link_model": 102
    }
}'
```

#### 返回示例

```json
{
  "data": {
    "addObjectLinkType": {
      "key": "object_link_type-LTeH9rst"
    }
  }
}
```

### 查询关联关系类型列表

查询关联关系类型列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql?t=object-link-types

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型 | 说明                                                                                   |
| :-------- | :----- | :------------------------------------------------------------------------------------- |
| query     | string | GraphQL 查询语句，参考下方请求示例和 [调用方式](../item.md#添加item)                   |
| variables | object | GraphQL 查询变量，参考 [调用 GraphQL 接口](../../graphql/graphql.md#call_ones_graphql) |

#### 返回参数列表

| 参数名 | 值类型 | 说明             |
| :----- | :----- | :--------------- |
| data   | object | 返回的 item 数据 |

data 结构

| 参数名          | 值类型 | 说明                                                                               |
| :-------------- | :----- | :--------------------------------------------------------------------------------- |
| objectLinkTypes | object | 查询的关联关系类型列表，参考顶部 [task_link_type](##task_link_type) 和下方返回示例 |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/items/graphql?t=object-link-types \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "query": "query OBJECT_LINK_TYPES($filter: Filter, $orderBy: OrderBy) {\n      objectLinkTypes (filter: $filter, orderBy: $orderBy) {\n        uuid\n        name\n        namePinyin\n        builtIn\n        sourceType\n        sourceCondition\n        linkOutDesc\n        targetType\n        targetCondition\n        linkInDesc\n        linkModel\n        key\n        createTime\n      }\n    }",
    "variables": {
        "orderBy": {
            "createTime": "DESC"
        }
    }
}'
```

#### 返回示例

```json
{
  "data": {
    "objectLinkTypes": [
      {
        "builtIn": true,
        "createTime": 0,
        "key": "object_link_type-UUID0005",
        "linkInDesc": "task comes from requirement",
        "linkModel": 102,
        "linkOutDesc": "task comes from sub-requirement",
        "name": "task A",
        "namePinyin": "task A",
        "sourceCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"5P91KaHg\"]}]}",
        "sourceType": "task",
        "targetCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"FF78d8EL\"]}]}",
        "targetType": "task",
        "uuid": "UUID0005"
      },
      {
        "builtIn": true,
        "createTime": 0,
        "key": "object_link_type-UUID0001",
        "linkInDesc": "associate",
        "linkModel": 212,
        "linkOutDesc": "associate",
        "name": "associate",
        "namePinyin": "guan1lian2",
        "sourceCondition": "{}",
        "sourceType": "task",
        "targetCondition": "{}",
        "targetType": "task",
        "uuid": "UUID0001"
      },
      {
        "builtIn": true,
        "createTime": 0,
        "key": "object_link_type-UUID0002",
        "linkInDesc": "requirement comes from bug",
        "linkModel": 202,
        "linkOutDesc": "bug changes to requirement",
        "name": "bug changes to requirement",
        "namePinyin": "que1xian4zhuan3xu1qiu2",
        "sourceCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"Gp41jFwa\"]}]}",
        "sourceType": "task",
        "targetCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"5P91KaHg\"]}]}",
        "targetType": "task",
        "uuid": "UUID0002"
      },
      {
        "builtIn": true,
        "createTime": 0,
        "key": "object_link_type-UUID0003",
        "linkInDesc": "merge",
        "linkModel": 212,
        "linkOutDesc": "merge",
        "name": "merge",
        "namePinyin": "he2bing4",
        "sourceCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"Gp41jFwa\"]}]}",
        "sourceType": "task",
        "targetCondition": "{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"Gp41jFwa\"]}]}",
        "targetType": "task",
        "uuid": "UUID0003"
      }
    ]
  }
}
```

### 更新关联关系类型

通过 GraphQL 更新关联关系类型

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql?t=object-link-types

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型 | 说明                                                                         |
| :-------- | :----- | :--------------------------------------------------------------------------- |
| query     | string | GraphQL 查询语句，参考下方请求示例和 [调用方式](../item.md#更新item)         |
| variables | object | GraphQL 查询变量，参考顶部 [task_link_type](##task_link_type) 和下方请求示例 |

#### 返回参数列表

| 参数名 | 值类型 | 说明             |
| :----- | :----- | :--------------- |
| data   | object | 返回的 item 数据 |

data 结构

| 参数名               | 值类型 | 说明                       |
| :------------------- | :----- | :------------------------- |
| updateObjectLinkType | object | 对应添加时的 mutation 名称 |

updateObjectLinkType 结构

| 参数名 | 值类型 | 说明               |
| :----- | :----- | :----------------- |
| key    | string | 被更新 item 的 key |

#### 请求示例

```shell
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/items/graphql?t=object-link-types \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "query": "\n    mutation UpdateObjectLinkType {\n      updateObjectLinkType (link_indesc: $link_indesc link_outdesc: $link_outdesc name: $name source_condition: $source_condition source_type: $source_type target_condition: $target_condition target_type: $target_type built_in: $built_in create_time: $create_time key: $key link_in_desc: $link_in_desc link_model: $link_model link_out_desc: $link_out_desc name_pinyin: $name_pinyin uuid: $uuid) {\n        key\n      }\n    }\n  ",
    "variables": {
        "link_indesc": "",
        "link_outdesc": "",
        "name": "111",
        "source_condition": "{}",
        "source_type": "task",
        "target_condition": "{}",
        "target_type": "task",
        "built_in": false,
        "create_time": 1671435529,
        "key": "object_link_type-R7Ubay8h",
        "link_in_desc": "a",
        "link_model": 102,
        "link_out_desc": "c",
        "name_pinyin": "111",
        "uuid": "R7Ubay8h"
    }
}'
```

#### 返回示例

```json
{
  "updateObjectLinkType": {
    "key": "object_link_type-R7Ubay8h"
  }
}
```
