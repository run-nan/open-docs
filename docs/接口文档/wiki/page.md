# wiki页面

- [1. 获取页面详情](#1-获取页面详情)
- [2. 获取页面详情(路由中不带space_uuid)](#2-获取页面详情(路由中不带space_uuid))
- [3. 删除页面](#3-删除页面)
- [4. 获取页面组的页面列表](#4-获取页面组的页面列表)
- [5. 获取页面组的带历史的页面列表](#5-获取页面组的带历史的页面列表)
- [6. 获取页面组的已加密的页面列表](#6-获取页面组的已加密的页面列表)
- [7. 关注/取消关注页面](#7-关注/取消关注页面)
- [8. 移动页面](#8-移动页面)
- [9. 页面的历史版本](#9-页面的历史版本)
- [10. 页面历史版本(路由不带space_uuid)](#10-页面历史版本(路由不带space_uuid)])
- [11. 页面回滚特定版本](#11-页面回滚特定版本)
- [12. 页面排序](#12-页面排序)
- [13. 获取页面附件](#13-获取页面附件)
- [14. 更新页面附件](#14-更新页面附件)
- [15. 获取页面的messages](#15-获取页面的messages)
- [16. 页面导出](#16-页面导出)
- [17. 发送页面评论](#17-发送页面评论)
- [18. 检查页面冲突](#18-检查页面冲突)

## 通用说明

### HTTP status code 说明

|状态码|说明|
|:---|:---|
|200|成功|
|403|主页不能被删除(ConstraintViolation.RootPageCannotDelete)|
|404|没有找到 page|
|607|uuid invalid|
|620|不存在 page version|
|630|没有page记录|
|801|uuid 无效、数据格式有误|
|817|root page 不能删除、不能修改(移动到子页面情况下)|

## API说明

### 1. 获取页面详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|version|F|int|[0,n)||0|根据版本号获取page,默认获取最近版本|

####  请求体示例

```curl
curl -X GET \
  ' https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/CbA3y4i1?version=0' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

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
  "watch_users": [
    "9uaNjXTJ"
  ],
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


### 2. 获取页面详情(路由中不带space_uuid)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|version|F|int|[0,n)||0|根据版本号获取page,默认获取最近版本|

#### 返回JSON

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
  "watch_users": [
    "9uaNjXTJ"
  ],
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


### 3. 删除页面

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

#### 请求体示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/delete \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```
#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

### 4. 获取页面组的页面列表

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


#### 返回JSON

|JSON键名|值类型|取值范围|取值例子|说明|
|:---|:---|:---|:--|:---|
|pages|array|||pages|

#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/pages?status=1' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

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

### 5. 获取页面组的带历史的页面列表

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

#### 返回体结构

|JSON键名|值类型|取值范围|取值例子|说明|
|:---|:---|:---|:--|:---|
|pages|array|||pages|

#### 返回值示例

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

### 6. 获取页面组的已加密的页面列表

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

#### 返返回体结构

|JSON键名|值类型|取值范围|取值例子|说明|
|:---|:---|:---|:--|:---|
|pages|array|||pages|

#### 返回体示例

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
            "is_can_edit": false
        }
    ]
}
```

### 7. 关注/取消关注页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/watch

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型   | 取值范围 | 默认值 | 说明     |
| :----------- | :------- | :------- | :------- | :----- | :------- |
| add_users    | F        | []string |          |        | 添加关注 |
| delete_users | F        | []string |          |        | 取消关注 |

#### 返回体结构

| JSON键名 | 值类型 | 取值范围 | 取值例子 | 说明  |
| :------- | :----- | :------- | :------- | :---- |
| pages    | array  |          |          | pages |

#### body示例

```json
{
    "add_users":[
        "9uaNjXTJ"
    ]
}
```

#### 返回体示例

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

### 8. 移动页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|space_uuid|T|string||||space uuid|
|parent_uuid|T|string||||父节点 page uuid|
|version|T|int||||page version|

#### 请求体示例

```json
{
    "space_uuid": "DV1NU3Ab",
    "parent_uuid": "4VSnJJmk",
    "version": 0
}
```
#### 返回体示例

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

### 9. 页面的历史版本

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

#### 返回JSON

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

### 10. 页面历史版本(路由不带space_uuid)

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

#### 返回JSON

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

### 11. 页面回滚特定版本

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/revert

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|version|T|int|[0,n)|0|1|page version|

#### body示例

```json
{
    "version":0
}
```

#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```


### 12. 页面排序

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/sort

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|previous_uuid|T|string||||page uuid（移动位置的前一个页面）|
|previous_relation|T|string|brother, child|||关系|

#### body示例

```json
{
    "previous_uuid":"5rTDW8Gn",
    "previous_relation":"child"
}
```

#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```


### 13. 获取页面附件

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


#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/N9TcsWjJ/attachments \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回JSON

```json
{
    "attachments": [
        {
            "uuid": "3VxaVhCV", // 附件 uuid
            "name": "readme"    // 附件 name
        }
    ]
}
```


#### 获取project的附件则如下[3-获取附件资源](../resource/resource.md/#3-获取附件资源)
#### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/project/api/project/team/3pDzCwAe/res/attachment/3VxaVhCV?op=attname%3Dreadme' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体参考

```json
{
    "uuid": "3VxaVhCV",
    "type": "file",
    "ref_type": "space",
    "ref_id": "MAJPYt6j",
    "create_time": 1566357279151984,
    "owner_uuid": "DU6krHBN",
    "status": 1,
    "name": "readme",
    "hash": "FqAmtB4EXzOTcOgAKbNAkLqTvzvm",
    "mime": "text/plain",
    "size": 32,
    "url": " https://your-host-name/api/project/file/attachment/FqAmtB4EXzOTcOgAKbNAkLqTvzvm?attname=readme&e=1566362427&token=KkZ1kuDzSN9fSunHNUTb22zu7OVqjsU0QdvPMf94:QmI2dYIKmf6Xn9dFxqf_ebzf-J0", // 资源绝对路径
    "description": ""
}
```

### 14. 更新页面附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/attachments/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|add|F|array||||新增 [attachment](#attachment-model)|
|remove|F|array||||删除 [attachment](#attachment-model)|

#### attachment model

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|uuid|T|string|len=8|| QEfqHHfN |附件 uuid|
|name|T|string|len: (0,255]||readme.md|附件 name|

#### body示例

```json
{
    "add": [
        {
            "uuid": "JRt5hJke",
            "name": "img.jpeg"
        }
    ]
}
```

#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```



### 15. 获取页面的messages

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/messages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|since|T|int|||||
|max|T|int|||||
|count|T|int|||||


#### 返回JSON

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

### 16. 页面导出

##### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/export

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 |
| :----- | :------- | :----- | :------- | :----- | :------- |
| format | F        | string | doc, pdf | doc    |          |


#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/page/CbA3y4i1/export \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```


### 17. 发送页面评论

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/send_comment

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型 | 取值范围      | 说明             |
| :----------- | :------- | :----- | :------------ | :--------------- |
| content      | T        | string |               | 文本内容         |
| parent_uuid  | F        | string |               | 回复评论的uuid   |
| content_type | F        | int    | 0，1（默认0） | 正常文本，富文本 |

#### body示例

```json
{
    "content":"好的pq",
    "content_type":1,
    "parent_uuid":"TfhTrngz"
}
```

#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

### 18. 检查页面冲突

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/check_version_conflict

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

|参数名|是否必须|值类型|取值范围|默认值|取值例子|说明|
|:----|:---|:---|:--|:----|:---|:---|
|page_uuid|T|string|||||页面UUID|
|from_version|T|int|||||来源版本|

#### body示例

```json
{
    "from_version":1,
    "page_uuid":"5rTDW8Gn"
}
```

#### 返回JSON

```json
{
    "code": 200,
    "errcode": "OK",
    "type": "OK"
}
```

#### 返回冲突参考JSON

```json
{
    "code": 403,
    "errcode": "ConstraintViolation.PageVersionConflict",
    "page_version": 0,
    "reason": "PageVersionConflict",
    "type": "ConstraintViolation"
}
```


