# wiki 页面

- [通用说明](#通用说明)
  - [page_detail](#page_detail)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取页面详情](#获取页面详情)
  - [获取页面详情(路由中不带 space_uuid)](<#获取页面详情(路由中不带space_uuid)>)
  - [删除页面](#删除页面)
  - [获取页面组的页面列表](#获取页面组的页面列表)
  - [获取页面组的带历史的页面列表](#获取页面组的带历史的页面列表)
  - [获取页面组的已加密的页面列表](#获取页面组的已加密的页面列表)
  - [关注/取消关注页面](#关注/取消关注页面)
  - [移动页面](#移动页面)
  - [页面的历史版本](#页面的历史版本)
  - [页面历史版本(路由不带 space_uuid)](<#页面历史版本(路由不带space_uuid)]>)
  - [页面回滚特定版本](#页面回滚特定版本)
  - [页面排序](#页面排序)
  - [获取页面附件](#获取页面附件)
  - [更新页面附件](#更新页面附件)
  - [获取页面的 messages](#获取页面的messages)
  - [页面导出](#页面导出)
  - [发送页面评论](#发送页面评论)
  - [检查页面冲突](#检查页面冲突)

## 通用说明

### page_detail

| 参数名                     | 值类型   | 取值范围 | 说明                                                                                              |
| :------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------- |
| uuid                       | string   | len=8    | 页面 id，随机 8 位字符组成                                                                        |
| space_uuid                 | string   | len=8    | 空间 id，随机 8 位字符组成                                                                        |
| owner_uuid                 | string   | len=8    | 创建者 id，随机 8 位字符组成                                                                      |
| title                      | string   | len<=64  | 页面标题                                                                                          |
| content                    | string   |          | 非协同编辑页面值为正文内容，协同编辑页面值为版本号                                                |
| version                    | int      |          | 版本号                                                                                            |
| draft_uuid                 | string   | len=8    | 草稿 id，随机 8 位字符组成                                                                        |
| updated_time               | int64    |          | 更新时间                                                                                          |
| watch_users                | []string |          | 页面关注者 id                                                                                     |
| encrypt_status             | int      |          | 加密状态：<br/>1 不加密<br/>2 所有人都能查看，特定用户可编辑<br/>3 加密，只有特定用户能查看或编辑 |
| is_can_edit                | bool     |          | 是否有页面编辑权限                                                                                |
| share_uuid                 | string   | len=8    | 页面共享 uuid                                                                                     |
| is_can_share               | bool     |          | 当前用户是否可以共享页面给他人                                                                    |
| is_can_edit_share          | bool     |          | 当前用户是否可以编辑共享页面                                                                      |
| space_view_page_permission | bool     |          | 在空间内是否具有查看或者编辑页面的权限                                                            |
| share_view_page_permission | bool     |          | 页面是否共享给了当前用户                                                                          |
| ref_type                   | int64    |          | 页面关联类型                                                                                      |
| ref_uuid                   | string   | len=8    | 页面关联 uuid                                                                                     |
| edit_users                 | []string |          | 协同编辑用户                                                                                      |

### page info

| 参数名                | 值类型                                            | 取值范围 | 说明                                                                                              |
| :-------------------- | ------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| uuid                  | string                                            | len=8    | 页面 id，随机 8 位字符组成                                                                        |
| space_uuid            | string                                            | len=8    | 空间 id，随机 8 位字符组成                                                                        |
| owner_uuid            | string                                            | len=8    | 创建者 id，随机 8 位字符组成                                                                      |
| parent_uuid           | string                                            | len=8    | 父页面 id，随机 8 位字符组成                                                                      |
| title                 | string                                            | len<=64  | 页面标题                                                                                          |
| updated_time          | int64                                             |          | 更新时间                                                                                          |
| evaluated_permissions | [evaluated permission](#evaluated-permission)数组 |          | 详见权限文档权限计算结果部分                                                                      |
| encrypt_status        | int                                               |          | 加密状态：<br/>1 不加密<br/>2 所有人都能查看，特定用户可编辑<br/>3 加密，只有特定用户能查看或编辑 |
| is_can_edit           | bool                                              |          | 是否有页面编辑权限                                                                                |
| ref_type              | int64                                             |          | 页面关联类型                                                                                      |
| ref_uuid              | string                                            | len=8    | 页面关联 uuid                                                                                     |
| creator               | string                                            | len=8    | 页面创建者 uuid                                                                                   |

### evaluated permission

| 参数名        | 值类型 | 取值范围 | 说明                                                                      |
| :------------ | ------ | -------- | ------------------------------------------------------------------------- |
| key           | string |          | 权限计算结果唯一标识，根据 context_type, context_param 和 permission 生成 |
| context_type  | string |          | 上下文类型                                                                |
| context_param | string |          | 上下文参数                                                                |
| permission    | string |          | 权限点                                                                    |

### page history

| 参数名                  | 值类型 | 取值范围 | 说明                             |
| :---------------------- | ------ | -------- | -------------------------------- |
| uuid                    | string | len=8    | 页面 id，随机 8 位字符组成       |
| space_uuid              | string | len=8    | 空间 id，随机 8 位字符组成       |
| parent_uuid             | string | len=8    | 父页面 id，随机 8 位字符组成     |
| title                   | string | len<=64  | 页面标题                         |
| last_modified_time      | int64  |          | 最后修改时间                     |
| last_modified_user_uuid | string | len=8    | 最后修改人 id，随机 8 位字符组成 |
| ref_type                | int64  |          | 页面关联类型                     |
| ref_uuid                | string | len=8    | 页面关联 uuid                    |

### page history detail

| 参数名       | 值类型            | 取值范围 | 说明                         |
| :----------- | ----------------- | -------- | ---------------------------- |
| page_uuid    | string            | len=8    | 页面 id，随机 8 位字符组成   |
| space_uuid   | string            | len=8    | 空间 id，随机 8 位字符组成   |
| owner_uuid   | string            | len=8    | 创建者 id，随机 8 位字符组成 |
| title        | string            | len<=64  | 页面标题                     |
| version      | int               |          | 版本号                       |
| updated_time | int64             |          | 更新时间                     |
| is_revert    | bool              |          | 是否为回滚某个版本           |
| from         | [from](#from)数组 |          | 回滚版本的信息               |

### from

| 参数名       | 值类型 | 取值范围 | 说明     |
| :----------- | ------ | -------- | -------- |
| version      | int    |          | 版本号   |
| updated_time | int64  |          | 更新时间 |

### attachment

| 参数名 | 值类型 | 取值范围 | 说明                       |
| :----- | ------ | -------- | -------------------------- |
| uuid   | string | len=8    | 附件 id，随机 8 位字符组成 |
| name   | string | len<=255 | 附件名称                   |

#### attachment model

| 参数名 | 是否必须 | 值类型 | 取值范围     | 默认值 | 取值例子  | 说明      |
| :----- | :------- | :----- | :----------- | :----- | :-------- | :-------- |
| uuid   | 是       | string | len=8        |        | QEfqHHfN  | 附件 uuid |
| name   | 是       | string | len: (0,255] |        | readme.md | 附件 name |

### message

| 参数名      | 值类型 | 取值范围 | 说明                                                                                                                                                 |
| :---------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| uuid        | string | len=8    | 消息 id，随机 8 位字符组成                                                                                                                           |
| space_uuid  | string | len=8    | 空间 id，随机 8 位字符组成                                                                                                                           |
| user_uuid   | string | len=8    | 用户 id，随机 8 位字符组成                                                                                                                           |
| page_uuid   | string | len=8    | 页面 id，随机 8 位字符组成                                                                                                                           |
| title       | string | len<=64  | 页面标题                                                                                                                                             |
| send_time   | int64  |          | 创建时间                                                                                                                                             |
| action      | string |          | 动作：<br/>add<br/>update<br/>delete<br/>move<br/>restore<br/>revert<br/>watch<br/>import_confluence<br/>import_word<br/>import_wps<br/>resolve<br/> |
| message     | string |          | 消息体                                                                                                                                               |
| object_attr | int64  |          | 对象属性                                                                                                                                             |
| ext         | string |          | 扩展数据                                                                                                                                             |
| type        | type   |          | 消息类型：<br/>comment<br/>system<br/>reply<br/>mention<br/>page_annotation                                                                          |

### HTTP status code 说明

| 状态码 | 说明                                                     |
| :----- | :------------------------------------------------------- |
| 200    | 成功                                                     |
| 403    | 主页不能被删除(ConstraintViolation.RootPageCannotDelete) |
| 404    | 没有找到 page                                            |
| 607    | uuid invalid                                             |
| 620    | 不存在 page version                                      |
| 630    | 没有 page 记录                                           |
| 801    | uuid 无效、数据格式有误                                  |
| 817    | root page 不能删除、不能修改(移动到子页面情况下)         |

## API 说明

### 获取页面详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 请求参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :------ | :------- | :----- | :------- | :----- | :------- | :----------------------------------- |
| version | F        | int    | [0,n)    |        | 0        | 根据版本号获取 page,默认获取最近版本 |

#### 响应说明

返回 [page detail](#page-detail) 对象

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/CbA3y4i1?version=0' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

```json
{
  "uuid": "63EQTwrX",
  "space_uuid": "ReNYACb3",
  "owner_uuid": "9uaNjXTJ",
  "title": "标题",
  "content": "<p>正文内容</p>\n",
  "version": 2,
  "draft_uuid": "",
  "updated_time": 1626854953,
  "watch_users": ["9uaNjXTJ"],
  "encrypt_status": 1,
  "is_can_edit": true,
  "share_uuid": "",
  "is_can_share": false,
  "is_can_edit_share": true,
  "space_view_page_permission": false,
  "share_view_page_permission": false,
  "ref_type": 1,
  "ref_uuid": "",
  "edit_users": null
}
```

### 获取页面详情(路由中不带 space_uuid)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :------ | :------- | :----- | :------- | :----- | :------- | :----------------------------------- |
| version | F        | int    | [0,n)    |        | 0        | 根据版本号获取 page,默认获取最近版本 |

#### 响应说明

返回 [page detail](#page-detail) 对象

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/page/CbA3y4i1?version=0' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "uuid": "63EQTwrX",
  "space_uuid": "ReNYACb3",
  "owner_uuid": "9uaNjXTJ",
  "title": "标题",
  "content": "<p>正文内容</p>\n",
  "version": 2,
  "draft_uuid": "",
  "updated_time": 1626854953,
  "watch_users": ["9uaNjXTJ"],
  "encrypt_status": 1,
  "is_can_edit": true,
  "share_uuid": "",
  "is_can_share": false,
  "is_can_edit_share": false,
  "space_view_page_permission": true,
  "share_view_page_permission": false,
  "ref_type": 1,
  "ref_uuid": "",
  "edit_users": null
}
```

### 删除页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/delete \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取页面组的页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/pages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

无

#### 响应说明

| 参数名 | 值类型 | 取值范围 | 说明                         |
| :----- | :----- | :------- | :--------------------------- |
| pages  | array  |          | [page info](#page-info) 数组 |

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/pages' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "pages": [
    {
      "uuid": "J5ZdeRPb",
      "space_uuid": "ReNYACb3",
      "title": "主页",
      "parent_uuid": "",
      "encrypt_status": 1,
      "evaluated_permissions": [],
      "is_can_edit": true,
      "ref_type": 1,
      "ref_uuid": ""
    },
    {
      "uuid": "5rTDW8Gn",
      "space_uuid": "ReNYACb3",
      "title": "标题",
      "parent_uuid": "J5ZdeRPb",
      "encrypt_status": 1,
      "evaluated_permissions": [],
      "is_can_edit": true,
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 获取页面组的带历史的页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/pages_with_history

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 响应说明

| 参数名 | 值类型 | 取值范围 | 说明                               |
| :----- | :----- | :------- | :--------------------------------- |
| pages  | array  |          | [page history](#page-history) 数组 |

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/pages_with_history' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "pages": [
    {
      "uuid": "5rTDW8Gn",
      "space_uuid": "ReNYACb3",
      "title": "标题",
      "parent_uuid": "J5ZdeRPb",
      "last_modified_time": 1626856261,
      "last_modified_user_uuid": "9uaNjXTJ",
      "ref_type": 1,
      "ref_uuid": ""
    },
    {
      "uuid": "J5ZdeRPb",
      "space_uuid": "ReNYACb3",
      "title": "主页",
      "parent_uuid": "",
      "last_modified_time": 1626847887,
      "last_modified_user_uuid": "9uaNjXTJ",
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 获取页面组的已加密的页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/encrypt_pages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回体结构

| 参数名 | 值类型 | 取值范围 | 说明                         |
| :----- | :----- | :------- | :--------------------------- |
| pages  | array  |          | [page info](#page-info) 数组 |

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/encrypt_pages' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "pages": [
    {
      "uuid": "W61EiMp4",
      "space_uuid": "SCEFCtg1",
      "title": "F2045 1 草稿6",
      "parent_uuid": "KSGQChyD",
      "encrypt_status": 2,
      "evaluated_permissions": [
        {
          "key": "1103-W61EiMp4-:2005",
          "context_type": "page",
          "context_param": {
            "page_uuid": "W61EiMp4"
          },
          "permission": "page_view"
        }
      ],
      "is_can_edit": false,
      "ref_type": 6,
      "ref_uuid": "9Yg1DjRn",
      "updated_time": 0,
      "creator": "Vutv7vAj"
    }
  ]
}
```

### 关注/取消关注页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/watch

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型   | 取值范围 | 默认值 | 说明                        |
| :----------- | :------- | :------- | :------- | :----- | :-------------------------- |
| add_users    | 否       | []string |          |        | 添加关注，数组内为用户 uuid |
| delete_users | 否       | []string |          |        | 取消关注，数组内为用户 uuid |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/watch \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{"add_users":["GkCsxtXd"],"delete_users":["2LzKDBvz"]}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 移动页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :---------- | :------- | :----- | :------- | :----- | :------- | :--------------- |
| space_uuid  | 是       | string |          |        |          | space uuid       |
| parent_uuid | 是       | string |          |        |          | 父节点 page uuid |
| version     | 是       | int    |          |        |          | page version     |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/update \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{
      "space_uuid": "DV1NU3Ab",
      "parent_uuid": "4VSnJJmk",
      "version": 0
  }'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 页面的历史版本

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/history

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明                                             |
| :------ | :----- | :------- | :----------------------------------------------- |
| history | array  |          | [page history detail](#page-history-detail) 数组 |

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/5rTDW8Gn/history' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回 JSON

```json
{
  "history": [
    {
      "space_uuid": "DV1NU3Ab",
      "page_uuid": "4VSnJJmk",
      "owner_uuid": "6ZpgEzkk",
      "title": "主页",
      "version": 0,
      "is_revert": false,
      "updated_time": 1584598502
    }
  ]
}
```

### 页面历史版本(路由不带 space_uuid)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/page/:pageUUID/history

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明                                             |
| :------ | :----- | :------- | :----------------------------------------------- |
| history | array  |          | [page history detail](#page-history-detail) 数组 |

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/5rTDW8Gn/history' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回 JSON

```json
{
  "history": [
    {
      "space_uuid": "DV1NU3Ab",
      "page_uuid": "4VSnJJmk",
      "owner_uuid": "6ZpgEzkk",
      "title": "主页",
      "version": 0,
      "is_revert": false,
      "updated_time": 1584598502
    }
  ]
}
```

### 页面回滚特定版本

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/revert

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明         |
| :------ | :------- | :----- | :------- | :----- | :------- | :----------- |
| version | 是       | int    | [0,n)    | 0      | 1        | page version |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/revert \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{"version": 1}'
```

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 页面排序

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/sort

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名            | 是否必须 | 值类型 | 取值范围       | 默认值 | 取值例子 | 说明                              |
| :---------------- | :------- | :----- | :------------- | :----- | :------- | :-------------------------------- |
| previous_uuid     | T        | string |                |        |          | page uuid（移动位置的前一个页面） |
| previous_relation | T        | string | brother, child |        |          | 关系                              |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/revert \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{
        "previous_uuid": "5rTDW8Gn",
        "previous_relation": "child"
  }'
```

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取页面附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:page/attachments

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 响应说明

| 参数名      | 值类型 | 取值范围 | 说明                           |
| :---------- | :----- | :------- | :----------------------------- |
| attachments | array  |          | [attachment](#attachment) 数组 |

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/attachments \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回 JSON

```json
{
  "attachments": [
    {
      "uuid": "3VxaVhCV",
      "name": "readme"
    }
  ]
}
```

获取 project 的附件的方式见：[3-获取附件资源](../../resource/resource.md/#3-获取附件资源)

### 更新页面附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/attachments/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :----- | :------- | :----- | :------- | :----- | :------- | :----------------------------------- |
| add    | F        | array  |          |        |          | 新增 [attachment](#attachment-model) |
| remove | F        | array  |          |        |          | 删除 [attachment](#attachment-model) |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/watch \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "add": [
        {
          "uuid": "JRt5hJke",
          "name": "img.jpeg"
        }
      ]
    }'
```

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取页面的 messages

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/messages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :----- | :------- | :----- | :------- | :----- | :------- | :--- |
| since  | T        | int    |          |        |          |      |
| max    | T        | int    |          |        |          |      |
| count  | T        | int    |          |        |          |      |

#### 响应说明

| 参数名   | 值类型 | 取值范围 | 说明                     |
| :------- | :----- | :------- | :----------------------- |
| messages | array  |          | [message](#message) 数组 |
| count    | int    |          | 消息数量                 |
| has_next | bool   |          | 是否有下一页             |

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/CbA3y4i1/messages??since=0&count=500' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回 JSON

```json
{
  "messages": [
    {
      "uuid": "R3R6tg6X",
      "user_uuid": "ThDxgFxK",
      "space_uuid": "SCEFCtg1",
      "page_uuid": "W61EiMp4",
      "send_time": 1571020963790806,
      "action": "add",
      "title": "F2045 1 草稿6",
      "message": "",
      "object_attr": "",
      "ext": {
        "updated_time": 1571020963,
        "version": 0
      },
      "type": "system"
    }
  ],
  "count": 1,
  "has_next": false
}
```

### 页面导出

##### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/export

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 |
| :----- | :------- | :----- | :------- | :----- | :------- |
| format | 是       | string | doc, pdf | doc    |          |

#### 响应说明

响应为导出的文件

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/CbA3y4i1/export?format=pdf \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 发送页面评论

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/send_comment

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型 | 取值范围       | 说明             |
| :----------- | :------- | :----- | :------------- | :--------------- |
| content      | 是       | string |                | 文本内容         |
| parent_uuid  | 否       | string |                | 回复评论的 uuid  |
| content_type | 否       | int    | 0，1（默认 0） | 正常文本，富文本 |

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/send_comment \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
          "content": "test",
          "content_type": 1,
          "parent_uuid": "TfhTrngz"
    }'
```

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 检查页面冲突

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/check_version_conflict

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :----------- | -------- | ------ | -------- | ------ | -------- | ---- | --------- |
| page_uuid    | T        | string |          |        |          |      | 页面 UUID |
| from_version | T        | int    |          |        |          |      | 来源版本  |

#### 响应说明

| 参数名       | 值类型 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- |
| code         | int    |          | 结果代码 |
| errcode      | string |          | 错误消息 |
| type         | string |          | 错误类型 |
| page_version | int    |          | 冲突版本 |
| reason       | string |          | 错误原因 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/send_comment \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "from_version": 1,
      "page_uuid": "5rTDW8Gn"
    }'
```

#### 没有冲突

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

#### 有冲突

```json
{
  "code": 403,
  "errcode": "ConstraintViolation.PageVersionConflict",
  "page_version": 0,
  "reason": "PageVersionConflict",
  "type": "ConstraintViolation"
}
```
