# 消息通知

- [通用说明](#通用说明)
  - [message 参数说明](#message-参数说明)
  - [ext 参数说明](#ext-参数说明)
  - [必要 header](#必要header)
- [API 说明](#api-说明)
  - [获取任务讨论消息](#获取任务讨论消息)
  - [任务讨论发送消息](#任务讨论发送消息)
  - [~~筛选项目消息通知信息~~](#筛选项目消息通知信息)

# 通用说明

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

| 字段名     | 类型   | 说明      |
| :--------- | :----- | :-------- |
| field_name | string | 属性名称  |
| field_type | int    | 属性类型  |
| field_uuid | string | 属性 UUID |
| new_value  | object | 新的值    |
| old_value  | object | 旧的值    |

## 必要 header

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明                         |
| :-------------- | :----- | :------- | :------- | :--------------------------- |
| Ones-User-Id    | string | F        | len=8    | 用户 id，可在登录接口获取    |
| Ones-Auth-Token | string | F        | len=32   | 用户 token，可在登录接口获取 |

# API 说明

## 获取任务讨论消息

按照时间戳分页获取任务讨论中的消息，服务端保证每条消息的时间戳是唯一的

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/messages

### HTTP Method

GET

### 是否需要登录

是

### 调用权限

ViewTasks

### 传值方式

URL

### 请求参数列表

| 字段名 | 类型  | 说明     |
| :----- | :---- | :------- |
| since  | int64 | 开始时间 |
| max    | int64 | 结束时间 |
| count  | int64 | 消息个数 |

since 表示需要获取的消息的最小时间戳，max 表示最大时间戳，两者均不包含自身，即获取 send_time > since && send_time < max 的消息

count 表示返回消息的最大数量，最大值为 100

### 返回参数列表

| JSON 键名 | 值类型  | 取值范围 | 说明                                                  |
| :-------- | :------ | :------- | :---------------------------------------------------- |
| count     | int64   |          | 消息条数                                              |
| has_next  | boolean |          | 是否还有消息                                          |
| messages  | array   |          | 参考通用说明中的[message 参数说明](#message-参数说明) |

### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNrewAoGDF/messages \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

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

## 任务讨论发送消息

发送消息到项目讨论中

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/send_message

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

ViewTasks

### 传值方式

json

### 请求参数列表

| 字段名        | 类型   | 说明                         |
| :------------ | :----- | :--------------------------- |
| uuid          | string | message UUID                 |
| text          | string | 文本内容，发送文本内容时传递 |
| resource_uuid | string | 附件内容，发送附件内容时传递 |

### 返回参数列表

| 字段名  | 类型   | 说明        |
| :------ | :----- | :---------- |
| code    | int    | http 状态码 |
| errcode | string | 错误码      |
| type    | string | 错误类型    |

### HTTP status code 说明

| 状态码 | 说明                         |
| :----- | :--------------------------- |
| 200    | 成功                         |
| 400    | 请求参数错误                 |
| 403    | 没有在此任务中发送消息的权限 |
| 404    | 任务不存在                   |
| 500    | 服务器内部错误               |

### 请求示例

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

### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## ~~筛选项目消息通知信息~~

筛选项目 message 通知信息

### URL

https://your-host-name/project/api/project/team/:teamUUID/filter_message

### HTTP Method

POST

### 是否需要登录

是

### 参数列表

| 字段名  | 类型   | 是否必填 | 说明                                                          |
| :------ | :----- | :------- | :------------------------------------------------------------ |
| project | string | 是       | 值为空字符串的时候，是筛选全部项目                            |
| user    | string | 是       | 值为空字符串的时候，是筛选全部成员                            |
| begin   | int64  | 是       | 开始时间（单位：纳秒）                                        |
| end     | int64  | 是       | 结束时间（单位：纳秒）（开始时间与结束时间间隔不能大于 7 天） |

### 返回参数列表

| 字段名   | 类型    | 说明                                  |
| :------- | :------ | :------------------------------------ |
| messages | message | [message 参数说明](#message-参数说明) |
| count    | int     | 数量                                  |
| has_next | bool    | 是否还有，此接口默认没有              |

### 请求体示例

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

### 返回体示例

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
