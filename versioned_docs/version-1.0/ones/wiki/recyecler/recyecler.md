# wiki 回收站

- [1. 获取回收站内的页面详情](#1-获取回收站内的页面详情)
- [2. 删除回收站内的页面](#2-删除回收站内的页面)
- [3. 获取回收站内的页面列表](#3-获取回收站内的页面列表)
- [4. 恢复回收站内的页面](#4-恢复回收站内的页面)
- [5. 清空回收站](#5-清空回收站)

## errcode 说明

| code | errcode                                | 说明                             |
| :--- | :------------------------------------- | :------------------------------- |
| 403  | ConstraintViolation.DestinationInvalid | 待恢复 page 的原路径不合法       |
| 404  | NotFound.Page                          | 没有找到 Page                    |
| 404  | NotFound.PageVersion                   | 没有找到 PageVersion             |
| 404  | NotFound.Draft                         | 没有找到对应的草稿               |
| 404  | NotFound.Message                       | 没有找到对应的消息(一般不会出现) |

## API 说明

### 1. 获取回收站内的页面详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回 JSON

```json
{
  "uuid": "PZwFcWei",
  "space_uuid": "ReNYACb3",
  "owner_uuid": "9uaNjXTJ",
  "title": "进去回收站",
  "content": "<p>我要去回收站</p>\n",
  "operator_uuid": "9uaNjXTJ",
  "operate_time": 1626946365743522,
  "ref_type": 1,
  "ref_uuid": ""
}
```

### 2. 删除回收站内的页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

无

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 3. 获取回收站内的页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回 JSON

| JSON 键名     | 值类型 | 取值范围 | 取值例子 | 说明          |
| :------------ | :----- | :------- | :------- | :------------ |
| deleted_pages | array  |          |          | deleted_pages |

```json
{
  "pages": [
    {
      "uuid": "PZwFcWei",
      "space_uuid": "ReNYACb3",
      "title": "进去回收站",
      "parent_uuid": "2FEdnsbk",
      "encrypt_status": 0,
      "evaluated_permissions": null,
      "is_can_edit": false,
      "ref_type": 1,
      "ref_uuid": ""
    },
    {
      "uuid": "2FEdnsbk",
      "space_uuid": "ReNYACb3",
      "title": "回收站",
      "parent_uuid": "",
      "encrypt_status": 0,
      "evaluated_permissions": null,
      "is_can_edit": false,
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 4. 恢复回收站内的页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名          | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                         |
| :-------------- | :------- | :----- | :------- | :----- | :------- | :--------------------------- |
| new_space_uuid  | F        | string |          |        |          | 恢复至新的 space 的 uuid     |
| new_parent_uuid | F        | string |          |        |          | 恢复至新的页面的 parent_uuid |

#### body 示例

```json
{
  "new_space_uuid": "",
  "new_parent_uuid": ""
}
```

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 5. 清空回收站

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

无

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
