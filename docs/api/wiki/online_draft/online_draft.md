# Wiki online draft

- [1. 创建协同草稿(临时草稿、页面复制、从模板创建)](<#1-创建协同草稿(临时草稿、页面复制、从模板创建)>)
- [2. 获取草稿 Token](#2-获取草稿Token)
- [3. 获取草稿正文](#3-获取草稿正文)
- [4. 发布草稿](#4-发布草稿)
- [5. 更新标题](#5-更新标题)

## 通用说明

### HTTP status code 说明

| 状态码 | 说明                                              |
| :----- | :------------------------------------------------ |
| 200    | 成功                                              |
| 403    | 资源受限，会返回限制的数量 LimitExceeded.Resource |
| 404    | 未找到 NotFound.Draft                             |
| 630    | 没有此草稿                                        |
| 801    | 参数格式有误                                      |
| 817    | 用户已经存在页面草稿                              |
| 819    | 版本冲突                                          |
| 901    | 内容过长                                          |

## API 说明

### 1. 创建协同草稿(临时草稿、页面复制、从模板创建)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名        | 是否必须 | 值类型 | 取值范围         | 默认值 | 取值例子 | 说明                                         |
| :------------ | :------- | :----- | :--------------- | :----- | :------- | :------------------------------------------- |
| space_uuid    | T        | string |                  |        |          |                                              |
| parent_uuid   | T        | string |                  |        |          |                                              |
| title         | F        | string |                  |        |          |                                              |
| copy_src_type | F        | string | template,page,"" |        |          | 拷贝来源类型                                 |
| copy_src_uuid | F        | string |                  |        |          | 被拷贝对象的 uuid，与 copy_src_uuid 配合使用 |

#### 请求示例

示例：

1. 创建临时草稿， 请求内容为

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5", // 父节点的page uuid
  "title": "title",
  "copy_src_type": "",
  "copy_src_uuid": ""
}
```

1. 页面复制, 请求内容为

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5", // 父节点的page uuid
  "title": "title",
  "copy_src_type": "page",
  "copy_src_uuid": "TPaN4NBa"
}
```

3. 基于模板创建, 请求内容为

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5", // 父节点的page uuid
  "title": "title",
  "copy_src_type": "template",
  "copy_src_uuid": "TPaN4NBa"
}
```

#### 返回值示例

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

### 2. 获取草稿 Token

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/token?action=:action

#### HTTP METHOD

GET

#### 是否需要登录

是

#### 传值方式

QUERY_STRING

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围     | 默认值 | 取值例子 | 说明 |
| :----- | :------- | :----- | :----------- | :----- | :------- | :--- |
| action | T        | string | edit, browse |        | edit     | 枚举 |

#### 返回值示例

```json
{
  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw"
}
```

### 3. 获取草稿正文

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/content

#### HTTP METHOD

GET

#### 是否需要登录

是

#### 返回值示例

```json
{
  "content": "",
  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw",
  "latest": 1642593507711,
  "version": 1642593508711
}
```

### 4. 发布草稿

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/publish

#### HTTP METHOD

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :---------- | :------- | :----- | :------- | :----- | :------- | :--- |
| space_uuid  | T        | string |          |        |          |      |
| parent_uuid | T        | string |          |        |          |      |
| title       | T        | string |          |        |          |      |

#### 请求示例

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5",
  "title": "title"
}
```

#### 返回值示例

```json
{
  "team_uuid": "RDjYMhKq",
  "space_uuid": "QdmnDT57",
  "page_uuid": "MqYk1map",
  "draft_uuid": "KLzJ5uvc",
  "status": 3
}
```

### 5. 更新标题

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/update_title

#### HTTP METHOD

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :----- | :------- | :----- | :------- | :----- | :------- | :--- |
| title  | T        | string |          |        |          |      |

#### 请求示例

```json
{
  "title": "title"
}
```

#### 返回值示例

```json
{}
```
