<!-- TOC depthTo:3 -->

# 目录

- [API 说明](#api说明)
  - [1. 任务讨论发送消息](#1-任务讨论发送消息)
  - [2. 获取任务讨论消息](#2-获取任务讨论消息)
  - [~~3. 根据团队获取消息通知列表~~](#3-根据团队获取消息通知列表)
  - [~~4. 筛选项目消息通知信息~~](#4-筛选项目消息通知信息)

<!-- /TOC -->

## API 说明

## message 参数说明

| 字段名                    | 类型   | 说明                                                                                                                                                   |
| :------------------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| uuid                      | string | message uuid                                                                                                                                           |
| team_uuid                 | string | 团队 uuid                                                                                                                                              |
| ref_type                  | string | 消息引用类型：<br/>task：工作项<br/>project：项目                                                                                                      |
| ref_id                    | string | 消息引用类型的 uuid：<br/>如果"ref_type"是"task"的话，那么"ref_id"的值就是工作项 uuid<br/>如果"ref_type"是"project"的话，那么"ref_id"的值就是项目 uuid |
| type                      | string | 消息类型：<br/>discussion：评论类型动态<br/>system：系统类型动态                                                                                       |
| from                      | string | 谁发送的消息：<br/>BOT：代表系统                                                                                                                       |
| to                        | string | 操作的实体：某个工作项或者某个项目                                                                                                                     |
| send_time                 | int64  | 发送时间                                                                                                                                               |
| text                      | string | 当"type"为"discussion"才有，评论的内容                                                                                                                 |
| is_can_show_richtext_diff | bool   | 是否能查看工作项描述的 diff                                                                                                                            |
| subject_type              | string | 一般值为"user"                                                                                                                                         |
| subject_id                | string | 操作人 uuid                                                                                                                                            |
| action                    | string | 操作类型：<br/>add：新增<br/>update：更新<br/>delete:删除<br/>move:移动<br/>copy:复制                                                                  |
| object_type               | string | 消息实体 uuid                                                                                                                                          |
| object_name               | string | 消息实体名称                                                                                                                                           |
| object_attr               | string | 消息实体属性                                                                                                                                           |
| new_value                 | string | 更新后的值                                                                                                                                             |
| ext                       | object | [ext 参数说明](#ext-参数说明)                                                                                                                          |

## ext 参数说明

```desc
"ext": {
                "field_name": "描述",
                "field_type": 2,
                "field_uuid": "field002",
                "new_value": "123456",
                "old_value": ""
            }
```

### 1. 任务讨论发送消息

发送消息到项目讨论中

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/send_message

#### 请求类型

POST

#### 请求体示例

```json
{
  "uuid": "2VmirTDd",
  "text": "Hello world"
}
```

```json
{
  "uuid": "2VmirTDd",
  "resource_uuid": "6cLx85AV"
}
```

### HTTP status code 说明

| 状态码 | 说明                         |
| :----- | :--------------------------- |
| 200    | 成功                         |
| 400    | 请求参数错误                 |
| 403    | 没有在此任务中发送消息的权限 |
| 404    | 任务不存在                   |
| 500    | 服务器内部错误               |

#### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNrewAoGDF/send_message \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "uuid": "bSGaDSX8",
    "text": "hello world"
}'
```

#### 返回值示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 2. 获取任务讨论消息

按照时间戳分页获取任务讨论中的消息，服务端保证每条消息的时间戳是唯一的

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/messages

#### 请求类型

GET

#### URL 参数

```desc
since=1460543624049663&max=1460543328295374&count=100
```

since 表示需要获取的消息的最小时间戳，max 表示最大时间戳，两者均不包含自身，即获取 send_time > since && send_time < max 的消息

count 表示返回消息的最大数量，最大值为 100

#### 参数列表

无

#### HTTP status code 说明

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问此任务的权限 |
| 404    | 任务不存在           |
| 500    | 服务器内部错误       |

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNrewAoGDF/messages \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回值示例

```json
{
  "messages": [
    {
      "uuid": "3wkkE4zc",
      "ref_type": "task",
      "ref_id:": "2VmirTDdTv7D4q8G",
      "type": "discussion",
      "from": "2VmirTDd",
      "to": "2VmirTDdTv7D4q8G",
      "send_time": 1460543624049663,
      "resource": {
        "uuid": "2HGA6jzH",
        "type": "file",
        "name": "IM.jpg",
        "hash": "FjmX_gpQIPOEfOqvYeplLv83x7hc",
        "mime": "image/jpeg",
        "size": 783343,
        "image_width": 750,
        "image_height": 1334
      }
    },
    {
      "uuid": "91fESYkf",
      "ref_type": "task",
      "ref_id:": "2VmirTDdTv7D4q8G",
      "type": "discussion",
      "from": "2VmirTDd",
      "to": "2VmirTDdTv7D4q8G",
      "send_time": 1460542899686694,
      "text": "Hello"
    }
  ],
  "count": 2,
  "has_next": false
}
```

返回的消息按照 send_time 从晚到早逆序排列，如果 has_next 为 true，则表示符合条件的消息数超过了最大数量，需要用最后一条消息的 send_time 继续往前取

### ~~3. 根据团队获取消息通知列表~~

根据团队 team_uuid 获取 message 通知列表

#### URL

https://your-host-name/project/api/project/organization/:orgUUID/list_notice

#### 请求类型

POST

#### 参数列表

|   字段名   | 类型  | 是否必填 |         说明         |
| :--------: | :---: | :------: | :------------------: |
| team_uuids | array |    是    |    团队 uuid 列表    |
|   since    | int64 |    是    | 开始时间（单位：秒） |

#### 返回参数列表

##### list_notice 返回参数

| 字段名  | 类型   | 说明                                |
| :------ | :----- | :---------------------------------- |
| notices | notice | [notice 参数说明](#notice-参数说明) |

##### notice 参数说明

| 字段名              | 类型    | 说明                                  |
| :------------------ | :------ | :------------------------------------ |
| task_uuid           | string  | 工作项 uuid                           |
| is_read             | bool    | 是否已经阅览过                        |
| server_update_stamp | int64   | 更新时间（单位：纳秒）                |
| message             | message | [message 参数说明](#message-参数说明) |

## 请求体示例

```curl
curl -X POST \
 https://your-host-name/project/api/project/organization/XzZSjSVd/list_notice \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: DaYq37tqczRvGjuexuT0kXJ5j8JkHIaWR3dqCNXv2IkaX4Wn5qVxJlBT8btNYCUN' \
  -H 'Ones-User-Id: KKt3AotA' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "team_uuids": [
        "Pxizacww"
    ],
    "since": 1575009200
}'
```

## 返回体示例

```json
{
  "notices": [
    {
      "task_uuid": "KKt3AotAniBAKhKn",
      "is_read": false,
      "server_update_stamp": 1575602264876688,
      "message": {
        "uuid": "PJ6fK12M",
        "team_uuid": "Pxizacww",
        "ref_type": "project",
        "ref_id": "KKt3AotAEnFQ48hP",
        "type": "system",
        "from": "BOT",
        "to": "KKt3AotAEnFQ48hP",
        "send_time": 1575602264876688,
        "subject_type": "user",
        "subject_id": "KKt3AotA",
        "action": "update",
        "object_type": "task",
        "object_id": "KKt3AotAniBAKhKn",
        "object_name": "test",
        "object_attr": "field",
        "old_value": "7XTdci4G",
        "new_value": "4WDnCnfc",
        "ext": {
          "field_name": "状态",
          "field_type": 12,
          "field_uuid": "field005",
          "new_option": {
            "name": "测试中",
            "uuid": "4WDnCnfc"
          },
          "new_value": "",
          "old_option": {
            "name": "研发中",
            "uuid": "7XTdci4G"
          },
          "old_value": ""
        },
        "is_can_show_richtext_diff": false
      }
    }
    ///
  ]
}
```

### ~~4. 筛选项目消息通知信息~~

筛选项目 message 通知信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/filter_message

#### 请求类型

POST

#### 参数列表

| 字段名  | 类型   | 是否必填 | 说明                                                          |
| :------ | :----- | :------- | :------------------------------------------------------------ |
| project | string | 是       | 值为空字符串的时候，是筛选全部项目                            |
| user    | string | 是       | 值为空字符串的时候，是筛选全部成员                            |
| begin   | int64  | 是       | 开始时间（单位：纳秒）                                        |
| end     | int64  | 是       | 结束时间（单位：纳秒）（开始时间与结束时间间隔不能大于 7 天） |

#### 返回参数列表

| 字段名   | 类型    | 说明                                  |
| :------- | :------ | :------------------------------------ |
| messages | message | [message 参数说明](#message-参数说明) |
| count    | int     | 数量                                  |
| has_next | bool    | 是否还有，此接口默认没有              |

## 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/Pxizacww/filter_message \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: DaYq37tqczRvGjuexuT0kXJ5j8JkHIaWR3dqCNXv2IkaX4Wn5qVxJlBT8btNYCUN' \
  -H 'Ones-User-Id: KKt3AotA' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "project": "KKt3AotA1y2RIToS",
    "user": "",
    "begin": 1574211200000000,
    "end": 1574784000000000
}'
```

## 返回体示例

```json
{
  "messages": [
    {
      "uuid": "lquulQdj",
      "team_uuid": "U66S45tG",
      "ref_type": "task",
      "ref_id": "Gq8ZZZ7FLwTnQro9",
      "type": "discussion",
      "from": "Gq8ZZZ7F",
      "to": "Gq8ZZZ7FLwTnQro9",
      "send_time": 1574700685218272,
      "text": "123",
      "is_can_show_richtext_diff": false
    },
    ///
    {
      "uuid": "3GrhxETT",
      "team_uuid": "U66S45tG",
      "ref_type": "project",
      "ref_id": "Gq8ZZZ7FgWHaBtAc",
      "type": "system",
      "from": "BOT",
      "to": "Gq8ZZZ7FgWHaBtAc",
      "send_time": 1574268458074208,
      "subject_type": "user",
      "subject_id": "Gq8ZZZ7F",
      "action": "add",
      "object_type": "project",
      "object_id": "Gq8ZZZ7FgWHaBtAc",
      "object_name": "创建时间",
      "is_can_show_richtext_diff": false
    }
  ],
  "count": 16,
  "has_next": false
}
```
