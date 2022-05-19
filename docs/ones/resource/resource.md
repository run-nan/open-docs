# 目录

- [model](#model)
  - [resource](#resource)
  - [type](#type)
- [1. 上传资源](#1-上传资源)
- [2. 上传文件](#2-上传文件)
- [3. 获取附件资源](#3-获取附件资源)
- [4. 获取项目相关附件资源列表](#4-获取项目相关附件资源列表)
- [5. 获取任务相关附件资源列表](#5-获取任务相关附件资源列表)
- [6. 获取里程碑附件资源列表](#6-获取里程碑附件资源列表)
- [7. 批量删除资源](#7-批量删除资源)
- [8. 修改资源名字和描述](#8-修改资源名字和描述)
- [9. 批量获取附件资源](#9-批量获取附件资源)

## 通用说明

## API 说明

## model

### resource

资源模型

| 参数名        | 参数类型 | 取值范围         | 说明                                                                                                                                                                                        |
| :------------ | :------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | string   | [type](#type)    | 资源类型                                                                                                                                                                                    |
| source        | string   | "",edit,page     | 图片来源, "edit": 编辑器, "page": 页面, 为了兼容之前版本, 默认值为 `page`                                                                                                                   |
| name          | string   | 字符个数 [0,255) | 资源 name                                                                                                                                                                                   |
| hash          | string   | len=28           | hash 值(可以留空或者省略)<br/>计算方法可以参照七牛[相关文档](http://developer.qiniu.com/article/kodo/kodo-developer/appendix.html#qiniu-etag)和[各平台示例](https://github.com/qiniu/qetag) |
| ref_type      | string   |                  | 当 type=attachment 时值 [ref_type](#reftype) 之一                                                                                                                                           |
| ref_id        | string   |                  | 对应 ref_type 的 uuid                                                                                                                                                                       |
| ignore_notice | bool     |                  | 是否忽略通知                                                                                                                                                                                |
| description   | string   | 字符个数 [0,64)  | 描述                                                                                                                                                                                        |

### type

资源类型

| 取值范围          | mime limit                                                              | 说明                                                |
| :---------------- | :---------------------------------------------------------------------- | :-------------------------------------------------- |
| avatar            | image/\*                                                                | 用户头像,大小限制`5MB`                              |
| team_logo         | image/\*                                                                | 团队 logo,大小限制`5MB`                             |
| attachment        | \*                                                                      | 任务/消息附件，能上传任意类型的文件，大小限制`50MB` |
| jira_backup       | application/zip                                                         |                                                     |
| confluence_backup | application/zip                                                         |                                                     |
| word              | application/vnd.openxmlformats-officedocument.wordprocessingml.document | word 文件                                           |
| word_zip          | application/zip                                                         | word 压缩文件                                       |

### reftype

当 type=attachment 时，ref_type

| 取值范围  | 说明       |
| :-------- | :--------- |
| project   | 项目附件   |
| milestone | 里程碑附件 |
| task      | 工作项附件 |
| space     | wiki 附件  |
| user      | 用户附件   |
| jira      | jira 附件  |

## 1. 上传资源

附件分为公开资源，和非公开资源。

公开资源指已上传到服务器上的公开资源文件。

非公开资源：需要调用资源上传接口上传文件。

### URL

https://your-host-name/project/api/project/team/:teamUUID/res/attachments/upload

### 请求类型

POST

### 请求参数

[resource](#resource)

### 返回参数列表

| 参数名        | 参数类型 | 说明             |
| :------------ | :------- | :--------------- |
| need_upload   | bool     | 是否需要上传文件 |
| base_url      | string   |                  |
| upload_url    | string   | 上传地址         |
| token         | string   | token            |
| resource_uuid | string   | 资源 UUID        |
| size_limit    | int      | size             |
| file          | file     | 文件描述         |

file

| 参数名 | 参数类型 | 说明      |
| :----- | :------- | :-------- |
| hash   | string   | 资源 hash |
| url    | string   | 资源地址  |
| name   | string   | name      |
| size   | int      | size      |
| mime   | string   | mime      |

#### 请求参数参考

```json
{
  "type": "avatar",
  "name": "IMG_3422.jpg",
  "hash": "FrZolWudsknm8xvTre8C58TXVGhw"
}
```

```json
{
  "type": "team_logo",
  "name": "IMG_3422.jpg",
  "hash": "re8C58TXVGhwFrZolWudsknm8xvT"
}
```

```json
{
  "type": "attachment",
  "ref_type": "project",
  "ref_id": "VcbR2ORJG1lPWlTq",
  "name": "example.ppt",
  "hash": "FhafioiyVcbR2ORJG1lPWlTqT8Tn"
}
```

```json
{
  "type": "jira_backup",
  "ref_type": "jira",
  "name": "jira_backup.zip"
}
```

#### 返回值参考

公开资源，比如 `avatar`，需要上传的情况

```json
{
  "need_upload": true,
  "base_url": "http://7xshmn.com1.z0.glb.clouddn.com",
  "token": "IOS8geS4mumCrnzln5/lkI0KOi0tLS0tfDotLS0tLQrohb7orq98IHFxLmNvbQrnvZHmmJN8IDE2My5jb20K6Zi...",
  "upload_url": "https://up.qbox.me"
}
```

非公开资源，比如 `attachment`，需要上传的情况

```json
{
  "need_upload": true,
  "base_url": "http://7xshmo.com2.z0.glb.qiniucdn.com",
  "token": "IOS8geS4mumCrnzln5/lkI0KOi0tLS0tfDotLS0tLQrohb7orq98IHFxLmNvbQrnvZHmmJN8IDE2My5jb20K6Zi...",
  "resource_uuid": "6cLx85AV",
  "upload_url": "https://up.qbox.me"
}
```

公开资源，比如 `avatar`，不需要上传的情况

```json
{
  "need_upload": false,
  "file": {
    "hash": "FrZolWudsknm8xvTre8C58TXVGhw",
    "url": "http://7xshmn.com1.z0.glb.clouddn.com/FrZolWudsknm8xvTre8C58TXVGhw",
    "name": "IMG_3422.jpg",
    "size": 60378,
    "mime": "image/jpeg"
  }
}
```

非公开资源，比如 `attachment`，不需要上传的情况

```json
{
  "need_upload": false,
  "resource_uuid": "6cLx85AV",
  "file": {
    "hash": "FhafioiyVcbR2ORJG1lPWlTqT8Tn",
    "url": "http://7xshmo.com2.z0.glb.qiniucdn.com/FhafioiyVcbR2ORJG1lPWlTqT8Tn?e=1458840222&token=OxDaCSJ45X9iu9rKxVuHm6SmSP3G6D4uEah1HBaZ:aHEoPUjV7zSvZt7I83jmZkV_Irc",
    "name": "example.ppt",
    "size": 1268382,
    "mime": "application/vnd.ms-powerpoint"
  }
}
```

当请求参数中没有填`hash`，服务器上又已经有相同**内容**的文件时，上传后七牛会返回`579`回调错误，里面包含文件的`hash`以及服务端返回的`409`错误，此时：

如果是公开资源，需要客户端自行根据`base_url`和`hash`拼接成可用的`url`

如果是非公开资源，已经可以直接使用请求 token 时返回的`resource_uuid`

### 2. 上传文件

### URL

[上传资源](#1-上传资源) 返回值中的 upload_url

### 请求类型

POST

### content-type

multipart/form-data; boundary=----WebKitFormBoundaryjQNEjXOM9W9Xq8Al

### 请求参数

token [上传资源](#1-上传资源) 返回值中的 token

file 文件流

### 返回参数列表

| 参数名 | 参数类型 | 说明      |
| :----- | :------- | :-------- |
| hash   | string   | 资源 hash |
| url    | string   | 资源地址  |
| name   | string   | name      |
| size   | int      | size      |
| mime   | string   | mime      |

### 3. 获取附件资源

获取任务/消息附件资源详情，包括下载资源所需要的临时 url

#### URL

https://your-host-name/project/api/project/team/:teamUUID/res/attachment/:attachmentUUID

#### 请求类型

GET

#### 请求参数

无

#### URL 参数

```
op=imageView2/2/w/200
```

op 表示七牛处理参数，具体请参考[七牛相关文档](http://developer.qiniu.com/code/v6/api/kodo-api/index.html#image)

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该资源的权限 |
| 404    | 指定的资源不存在     |
| 500    | 服务器内部错误       |

#### 正确返回值参考

```json
{
  "name": "example.ppt",
  "hash": "FhafioiyVcbR2ORJG1lPWlTqT8Tn",
  "mime": "application/vnd.ms-powerpoint",
  "size": 1268382,
  "url": "http://7xshmn.com1.z0.glb.clouddn.com/FhafioiyVcbR2ORJG1lPWlTqT8Tn?e=1458840222&token=OxDaCSJ45X9iu9rKxVuHm6SmSP3G6D4uEah1HBaZ:aHEoPUjV7zSvZt7I83jmZkV_Irc"
}
```

### 4. 获取项目相关附件资源列表

按照附件上传时间分页获取与某个项目相关联的附件资源列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/attachments

#### 请求类型

GET

#### URL 参数

```
since=1460543624049663&max=1460543328295374&count=100
```

since 表示需要获取的附件的最小上传时间，max 表示最大上传时间，两者均包含自身，即获取 create_time >= since && create_time =< max 的附件

count 表示返回附件的最大数量，最大值为 100

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该项目的权限 |
| 404    | 指定的项目不存在     |
| 500    | 服务器内部错误       |

#### 正确返回值

```json
{
    "attachments": [
        ...
    ],
    "count": 2,
    "has_next": false
}
```

`attachments` 包含 [Resource](https://github.com/BangWork/dev-doc/blob/master/bang-api/bang_api_models.md#Resource说明) 列表

返回的附件资源按照 create_time 从晚到早逆序排列，如果 has_next 为 true，则表示符合条件的附件数超过了最大数量，需要用最后一个附件的 create_time 继续往前取

### 5. 获取任务相关附件资源列表

按照附件上传时间分页获取与某个任务相关联的附件资源列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/attachments

#### 请求类型

GET

#### URL 参数

```
since=1460543624049663&max=1460543328295374&count=100
```

since 表示需要获取的附件的最小上传时间，max 表示最大上传时间，两者均包含自身，即获取 create_time >= since && create_time =< max 的附件

count 表示返回附件的最大数量，最大值为 100

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该任务的权限 |
| 404    | 指定的任务不存在     |
| 500    | 服务器内部错误       |

#### 正确返回值参考

```json
{
    "attachments": [
        ...
    ],
    "count": 2,
    "has_next": false
}
```

`attachments` 包含 [Resource](https://github.com/BangWork/dev-doc/blob/master/bang-api/bang_api_models.md#Resource说明) 列表

返回的附件资源按照 create_time 从晚到早逆序排列，如果 has_next 为 true，则表示符合条件的附件数超过了最大数量，需要用最后一个附件的 create_time 继续往前取

### 6. 获取里程碑附件资源列表

按照附件上传时间分页获取与某个任务相关联的附件资源列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/milestone/:milestoneUUID/attachments

#### 请求类型

GET

#### URL 参数

```
since=1460543624049663&max=1460543328295374&count=100
```

since 表示需要获取的附件的最小上传时间，max 表示最大上传时间，两者均包含自身，即获取 create_time >= since && create_time =< max 的附件

count 表示返回附件的最大数量，最大值为 100

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该任务的权限 |
| 404    | 指定的任务不存在     |
| 500    | 服务器内部错误       |

#### 正确返回值参考

```json
{
    "attachments": [
        ...
    ],
    "count": 2,
    "has_next": false
}
```

`attachments` 包含 [Resource](https://github.com/BangWork/dev-doc/blob/master/bang-api/bang_api_models.md#Resource说明) 列表

返回的附件资源按照 create_time 从晚到早逆序排列，如果 has_next 为 true，则表示符合条件的附件数超过了最大数量，需要用最后一个附件的 create_time 继续往前取

### 7. 批量删除资源

#### URL

https://your-host-name/project/api/project/team/:teamUUID/res/attachments/delete

#### 请求类型

POST

#### URL 参数

无

#### JSON 参数

```json
["6cLx85AV", "mCrnzln5"]
```

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该资源的权限 |
| 500    | 服务器内部错误       |

### 8. 修改资源名字和描述

#### URL

https://your-host-name/project/api/project/team/:teamUUID/res/attachment/update/:attachmentUUID

#### 请求类型

POST

#### 请求参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明     |
| :---------- | :------- | :----- | :------- | :----- | :------- | :------- |
| name        | string   | 否     | len<=64  |        | IM.png   | 文件名称 |
| description | string   | 否     | len<=64  |        |          | 文件描述 |

### 返回体参考

```json
{
  "name": "test_names",
  "description": "test_description"
}
```

#### 返回的 HTTP status code

| 状态码 | 说明           |
| :----- | :------------- |
| 200    | 成功           |
| 801    | 请求参数无效   |
| 500    | 服务器内部错误 |

### 9. 批量获取附件资源

#### URL

https://your-host-name/project/api/project/team/:teamUUID/res/attachments

#### 请求类型

GET

#### URL 参数

```
ids=VcbR2ORJ,G1lPWlTq
```

#### 返回的 HTTP status code

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数错误         |
| 403    | 没有访问该资源的权限 |
| 404    | 指定的资源不存在     |
| 500    | 服务器内部错误       |

#### 正确返回值

```json
{
  "attachments": [
    {
      "uuid": "",
      "name": "example.ppt",
      "hash": "FhafioiyVcbR2ORJG1lPWlTqT8Tn",
      "mime": "application/vnd.ms-powerpoint",
      "size": 1268382,
      "url": "http://7xshmn.com1.z0.glb.clouddn.com/FhafioiyVcbR2ORJG1lPWlTqT8Tn?e=1458840222&token=OxDaCSJ45X9iu9rKxVuHm6SmSP3G6D4uEah1HBaZ:aHEoPUjV7zSvZt7I83jmZkV_Irc"
    }
  ],
  "count": 1,
  "errors": [
    {
      "uuid": "",
      "code": "",
      "desc": ""
    }
  ]
}
```
