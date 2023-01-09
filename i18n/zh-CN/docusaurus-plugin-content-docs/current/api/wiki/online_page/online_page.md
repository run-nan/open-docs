# wiki 协同页面

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [创建协同页面](#创建协同页面)
  - [获取页面 Token](#<获取页面Token>)
  - [获取页面正文](#获取页面正文)
  - [发布页面](#发布页面)
  - [更新标题](#更新标题)
  - [恢复历史版本](#恢复历史版本)

## 通用说明

### 状态码说明

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

### 创建协同页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_pages/add

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
  "parent_uuid": "UyZkFDM5", // page uuid of the parent node
  "title": "title",
  "copy_src_type": "",
  "copy_src_uuid": ""
}
```

2. 页面复制, 请求内容为

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5", // page uuid of the parent node
  "title": "title",
  "copy_src_type": "page",
  "copy_src_uuid": "TPaN4NBa"
}
```

3. 基于模板创建, 请求内容为

```json
{
  "space_uuid": "LLNkd6Up",
  "parent_uuid": "UyZkFDM5", // page uuid of the parent node
  "title": "title",
  "copy_src_type": "template",
  "copy_src_uuid": "TPaN4NBa"
}
```

#### 响应说明

| 参数名        | 值类型 | 取值范围 | 说明                                                                                                                       |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| uuid          | string |          | 页面 uuid                                                                                                                  |
| team_uuid     | string |          | 团队 uuid                                                                                                                  |
| space_uuid    | string |          | 空间 uuid                                                                                                                  |
| owner_uuid    | string |          | 拥有者 uid                                                                                                                 |
| title         | string |          | 标题                                                                                                                       |
| parent_uuid   | string |          | 父页面 uuid                                                                                                                |
| status        | int    |          | 状态                                                                                                                       |
| create_time   | int    |          | 创建时间                                                                                                                   |
| updated_time  | int    |          | 更新时间                                                                                                                   |
| EncryptStatus | int    |          | 加密状态                                                                                                                   |
| ref_type      | int    |          | 页面关联类型 1 默认 wiki page 类型，2 wps word，3 wps excel，4 wps ppt，5 confluence 导入转换后的 page，6 wiz 多人实时编辑 |
| ref_uuid      | array  |          | 页面关联 uuid                                                                                                              |

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

### 获取页面 Token

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

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/token?action=edit \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回值示例

```json
{
  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw"
}
```

### 获取页面正文

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/content

#### HTTP METHOD

GET

#### 是否需要登陆

是

#### 响应说明

| 参数名             | 值类型 | 取值范围 | 说明         |
| :----------------- | :----- | :------- | :----------- |
| content            | string |          | 返回内容     |
| token              | string |          | token        |
| latest             | int    |          | 最后修改时间 |
| version            | int    |          | 版本         |
| online_users_count | int    |          | 在线用户数量 |
| owner_uuid         | string |          | 创建者 uuid  |

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/content \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回值示例

```json
{
  "content": "",
  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw",
  "latest": 1642593507711,
  "version": 1642593508711,
  "online_users_count": 100,
  "owner_uuid": "1204jhk9"
}
```

### 发布页面

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

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/publish \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{"title":"title"}'
```

#### 请求示例

```json
{
  "title": "title"
}
```

#### 返回值示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 更新标题

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

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/SwkBtFNA/update_title \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{"title":"title"}'

```

#### 返回值示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 恢复历史版本

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

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/XoKhewh7/revert/1663244218963 \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{
    "version":{"Created":1663244218963},
    "title":"todo: remove this param"
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
