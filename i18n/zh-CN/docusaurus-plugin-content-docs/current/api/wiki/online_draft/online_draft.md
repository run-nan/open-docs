# wiki 协同草稿

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [创建协同草稿(临时草稿、页面复制、从模板创建)](<#创建协同草稿(临时草稿、页面复制、从模板创建)>)
  - [获取草稿 Token](#获取草稿Token)
  - [获取草稿正文](#获取草稿正文)
  - [发布草稿](#发布草稿)
  - [更新标题](#更新标题)

## 通用说明

协同草稿相关接口。

### 状态码说明

| 状态码 | 说明                                              |
| :----- | :------------------------------------------------ |
| 200    | 成功                                              |
| 403    | 资源受限，会返回限制的数量 LimitExceeded.Resource |
| 404    | 未找到 NotFound.Draft                             |
| 630    | 没有此草稿                                        |
| 801    | 参数格式有误                                      |

## API 说明

### 创建协同草稿(临时草稿、页面复制、从模板创建)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名        | 是否必须 | 值类型 | 取值范围         | 默认值 | 取值例子 | 说明                                         |
| :------------ | :------- | :----- | :--------------- | :----- | :------- | :------------------------------------------- |
| space_uuid    | T        | string |                  |        |          | 页面组 uuid                                  |
| parent_uuid   | T        | string |                  |        |          | 父页面 uuid                                  |
| title         | F        | string | len <= 64        |        |          | 标题                                         |
| copy_src_type | F        | string | template,page,"" |        |          | 拷贝来源类型,空字符串为直接新建              |
| copy_src_uuid | F        | string |                  |        |          | 被拷贝对象的 uuid，与 copy_src_uuid 配合使用 |

#### 响应参数列表

| 参数名      | 值类型 | 取值范围 | 说明                   |
| :---------- | :----- | :------- | :--------------------- |
| uuid        | string | len=8    | 草稿 uuid              |
| space_uuid  | string | len=8    | 页面组 uuid            |
| page_uuid   | string | len=8    | 父页面 uuid            |
| owner_uuid  | string | len=8    | 作者 uuid              |
| create_time | int    |          | 创建时间               |
| ref_type    | int    | 6        | 固定值 6，协同页面类型 |
| ref_uuid    | string | len=8    | 草稿关联的文档 uuid    |
| status      | int    | 1        | 固定值 1，临时草稿状态 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "space_uuid": "LLNkd6Up",
    "parent_uuid": "UyZkFDM5",
    "copy_src_type": "",
    "copy_src_uuid": ""
  }'
```

#### 响应示例

```json
{
  "uuid": "TPaN4NBc",
  "space_uuid": "KPq8SX5Z",
  "page_uuid": "UyZkFDM5",
  "owner_uuid": "8eyieheZ",
  "status": 1,
  "create_time": 1495527956,
  "ref_type": 6,
  "ref_uuid": "XPaN4NBa"
}
```

### 获取草稿 Token

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/token?action=:action

#### HTTP METHOD

GET

#### 是否需要登陆

是

#### 传值方式

QUERY_STRING

#### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围     | 默认值 | 取值例子 | 说明                                     |
| :----- | :------- | :----- | :----------- | :----- | :------- | :--------------------------------------- |
| action | T        | string | edit, browse |        | edit     | 获取 token 的类型，可选值为 编辑 或 阅读 |

#### 响应参数列表

| 参数名 | 值类型 | 取值范围 | 说明       |
| :----- | :----- | :------- | :--------- |
| token  | string |          | 文档 token |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/token?action=edit \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw"
}
```

### 获取草稿正文

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/content

#### HTTP METHOD

GET

#### 是否需要登陆

是

#### 传值方式

json

#### 请求参数列表

无

#### 响应参数列表

| 参数名             | 值类型 | 取值范围 | 说明         |
| :----------------- | :----- | :------- | :----------- |
| content            | string |          | 内容         |
| token              | string |          | token        |
| online_users_count | int    |          | 在线人数     |
| owner_uuid         | string |          | 作者 uuid    |
| version            | int    |          | 创建时间     |
| latest             | int    |          | 最后修改时间 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/content \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "content": "{\"blocks\":[{\"heading\":1,\"id\":\"_ByNpoBmp\",\"text\":[{\"insert\":\"草稿\"}],\"type\":\"text\"},{\"text\":[],\"id\":\"_tyWZWF42\",\"type\":\"text\"}],\"comments\":{},\"meta\":{\"version\":876,\"updatedBy\":{\"userId\":\"UrCAf4hi\",\"displayName\":\"abc\"},\"ctime\":1654497195849,\"mtime\":1671331612680},\"authors\":[\"UrCAf4hi\"],\"commentators\":[]}",
  "version": 1654497195849,
  "latest": 1671331612680,
  "token": "W.ZyLVksHAx6DtMN5YeAUXTkrBWJ7XNYizrMy3aEnaMNPLk-eFBvKo6l-O_rlLUtJQo1cqTPb_X5gG6WkDBmCK1SN0uBxO4eQ-ISeEjq0lha0xWc2Ql2oKxQhqHmJt2rOVCLZsbIqWQLknGaioNxVAauW0FngbJLkQnx-0IQftfUhHsdk",
  "online_users_count": 0,
  "owner_uuid": "UrCAf4hi"
}
```

### 发布草稿

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/publish

#### HTTP METHOD

POST

#### 是否需要登陆

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围  | 默认值 | 取值例子 | 说明        |
| :---------- | :------- | :----- | :-------- | :----- | :------- | :---------- |
| space_uuid  | T        | string | len=8     |        |          | 页面组 uuid |
| parent_uuid | T        | string | len=8     |        |          | 父页面 uuid |
| title       | T        | string | len <= 64 |        |          | 标题        |

#### 响应参数列表

| 参数名     | 值类型 | 取值范围 | 说明        |
| :--------- | :----- | :------- | :---------- |
| team_uuid  | string | len=8    | 团队 uuid   |
| space_uuid | string | len=8    | 页面组 uuid |
| page_uuid  | string | len=8    | 页面 uuid   |
| draft_uuid | string | len=8    | 草稿 uuid   |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/publish \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "space_uuid": "LLNkd6Up",
    "parent_uuid": "UyZkFDM5",
    "title": "title"
  }'
```

#### 响应示例

```json
{
  "team_uuid": "RDjYMhKq",
  "space_uuid": "QdmnDT57",
  "page_uuid": "MqYk1map",
  "draft_uuid": "KLzJ5uvc"
}
```

### 更新标题

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/update_title

#### HTTP METHOD

POST

#### 是否需要登陆

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :----- | :------- | :----- | :------- | :----- | :------- | :--- |
| title  | T        | string | len<=64  |        |          | 标题 |

#### 响应参数列表

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "title": "title"
  }'
```

#### 响应示例

```json
{}
```
