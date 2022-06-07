# wiki 协同页面

- [1. 创建协同页面(临时页面、页面复制、从模板创建)](<#1-创建协同页面(临时页面、页面复制、从模板创建)>)
- [2. 获取页面 Token](#2-获取页面Token)
- [3. 获取页面正文](#3-获取页面正文)
- [4. 发布页面](#4-发布页面)
- [5. 更新标题](#5-更新标题)
- [6. 恢复历史版本](#6-恢复历史版本)

## 通用说明

### HTTP status code 说明

| 状态码 | 说明                                              |
| :----- | :------------------------------------------------ |
| 200    | 成功                                              |
| 403    | 资源受限，会返回限制的数量 LimitExceeded.Resource |
| 404    | 未找到 NotFound.Draft                             |
| 630    | 没有此页面                                        |
| 801    | 参数格式有误                                      |
| 817    | 用户已经存在页面页面                              |
| 819    | 版本冲突                                          |
| 901    | 内容过长                                          |

## API 说明

### 1. 创建协同页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/add

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

1. 创建临时页面， 请求内容为

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
  "uuid": "7i6oLRLF",
  "team_uuid": "RDjYMhKq",
  "space_uuid": "QdmnDT57",
  "owner_uuid": "UrCAf4hi",
  "title": "title",
  "parent_uuid": "JUUw13TT",
  "status": 1,
  "create_time": 1643249000,
  "updated_time": 1643249000,
  "EncryptStatus": 1,
  "ref_type": 6,
  "ref_uuid": "MykkHt7m"
}
```

### 2. 获取页面 Token

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/token?action=:action

#### HTTP METHOD

GET

#### 是否需要登陆

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

### 3. 获取页面正文

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/content

#### HTTP METHOD

GET

#### 是否需要登陆

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

### 4. 发布页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/publish

#### HTTP METHOD

POST

#### 是否需要登陆

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

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/update_title

#### HTTP METHOD

POST

#### 是否需要登陆

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

### 6. 恢复历史版本

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/revert/:version

#### HTTP METHOD

POST

#### 是否需要登陆

是

#### 传值方式

JSON

#### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子                  | 说明 |
| :------ | :------- | :----- | :------- | :----- | :------------------------ | :--- |
| title   | T        | string |          |        |                           |      |
| version | T        | JSON   |          |        | {"Created":1643149369180} |      |

#### 请求示例

```json
{
  "title": "title",
  "version": { "Created": 1643149369180 }
}
```

#### 返回值示例

```json
{}
```
