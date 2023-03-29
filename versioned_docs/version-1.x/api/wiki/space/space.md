# Wiki space

- [1. 获取页面组列表](#1-获取页面组列表)
- [2. 新增页面组](#2-新增页面组)
- [3. 获取页面组详情](#3-获取页面组详情)
- [4. 更新页面组](#4-更新页面组)
- [5. 删除](#5-删除)
- [6. 归档](#6-归档)
- [7. 获取用户可见的页面组列表](#7-获取用户可见的页面组列表)
- [8. 获取最近浏览页面组列表](#8-获取最近浏览页面组列表)
- [9. 获取页面组卡片的报表数据](#9-获取页面组卡片的报表数据)
- [10. 记录页面组浏览接口](#10-记录space浏览接口)
- [11. 置顶页面组](#11-置顶页面组)
- [12. 取消置顶页面组](#12-取消置顶页面组)
- [13. 获取免费团队的新建页面时是否超出限额](#13-获取免费团队的新建页面时是否超出限额)
- [14. 获取页面组的分享页面列表](#14-获取页面组的分享页面列表)

### HTTP status code 说明

| 状态码 | 说明                            |
| :----- | :------------------------------ |
| 200    | 成功                            |
| 403    | 没有权限                        |
| 500    | 服务器错误                      |
| 630    | 没有 space 记录                 |
| 801    | spaceUUID 无效/请求参数格式错误 |
| 900    | 资源达到上限                    |

## API 说明

### 1. 获取页面组列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/spaces

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明   |
| :-------- | :----- | :------- | :------- | :----- |
| spaces    | array  |          |          | spaces |

#### 请求体示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/3pDzCwAe/spaces \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "spaces": [
    {
      "uuid": "Gj7aPmA1",
      "owner_uuid": "DU6krHBN",
      "is_archive": false,
      "title": "wiki_sapce_test_mul",
      "description": "wiki space test multiple",
      "create_time": 1566354577,
      "updated_time": 1566354577,
      "admins": ["DU6krHBN"],
      "page_count": 1,
      "is_pin": false
    },
    {
      "uuid": "MAJPYt6j",
      "owner_uuid": "DU6krHBN",
      "is_archive": false,
      "title": "wiki_space_test",
      "description": "wiki space create test",
      "create_time": 1566354342,
      "updated_time": 1566354342,
      "admins": ["DU6krHBN"],
      "page_count": 1,
      "is_pin": false
    }
    //
  ]
}
```

### 2. 新增页面组

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/spaces/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :---------- | :------- | :----- | :------- | :----- | :------- | :--- |
| title       | T        | string |          |        |          | 标题 |
| description | T        | string |          |        |          | 描述 |

#### body 示例

```json
{
  "title": "wiki_sapce_test_mul",
  "description": "wiki space test multiple"
}
```

#### 请求体示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/spaces/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "title": "wiki_sapce_test_mul",
    "description": "wiki space test multiple"
}'
```

#### 返回体示例

```json
{
  "uuid": "xdduo8hY",
  "team_uuid": "3pDzCwAe",
  "owner_uuid": "DU6krHBN",
  "title": "wiki_sapce_test_mul",
  "create_time": 1566354872
}
```

### 3. 获取页面组详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明  |
| :-------- | :----- | :------- | :------- | :---- |
| space     | object |          |          | space |

#### 请求体示例

```curl
curl -X GET \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/Gj7aPmA1 \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "title": "wiki_sapce_test_mul",
    "description": "wiki space test multiple"
}'
```

#### 返回体示例

```json
{
  "uuid": "Gj7aPmA1",
  "owner_uuid": "DU6krHBN",
  "is_archive": false,
  "title": "wiki_sapce_test_mul",
  "description": "wiki space test multiple",
  "create_time": 1566354577,
  "updated_time": 1566354577,
  "admins": ["DU6krHBN"],
  "is_pin": false,
  "is_open_share_page": true,
  "is_sample": false
}
```

### 4. 更新页面组

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明 |
| :---------- | :------- | :----- | :------- | :----- | :------- | :--- |
| title       | T        | string |          |        |          | 标题 |
| description | T        | string |          |        |          | 描述 |

#### body 示例

```json
{
  "title": "wiki_sapce_test_mul",
  "description": "wiki space test multiple"
}
```

#### 请求体示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/XTDEpeEQ/update \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "title": "update_wiki_sapce_test_mul",
    "description": "wiki space test multiple"
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

### 5. 删除

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete

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
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/XTDEpeEQ/delete \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 6. 归档

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/archive

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名     | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :--------- | :------- | :----- | :------- | :----- | :------- | :--------------- |
| is_archive | F        | bool   |          | false  |          | 归档或者取消归档 |

#### 请求体参考

```curl
curl -X POST \
  https://devapi.myones.net/wiki/master/team/BDfDqJU7/space/3xCZqxb7/archive \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
  -d '{
    "is_crchive": true
}'
```

#### 返回值参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 7. 获取用户可见的页面组列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/my_spaces

#### HTTP Method

GET

#### 是否需要登录

是

### 传值方式

无

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明   |
| :-------- | :----- | :------- | :------- | :----- |
| spaces    | array  |          |          | spaces |

#### 返回体参考

```json
{
  "spaces": [
    {
      "uuid": "3xCZqxb7",
      "owner_uuid": "6ZpgEzkk",
      "is_archive": false,
      "title": "space_test",
      "description": "制作 api 文档示例的页面组",
      "create_time": 1584588038,
      "updated_time": 1584598922,
      "admins": ["6ZpgEzkk"],
      "page_count": 1,
      "is_pin": true,
      "is_open_share_page": true
    },
    {
      "uuid": "DV1NU3Ab",
      "owner_uuid": "6ZpgEzkk",
      "is_archive": false,
      "title": "wiki_sapce_test_mul",
      "description": "wiki space test multiple",
      "create_time": 1584598502,
      "updated_time": 1584598502,
      "admins": ["6ZpgEzkk"],
      "page_count": 1,
      "is_pin": true,
      "is_open_share_page": false
    }
  ]
}
```

### 8. 获取最近浏览页面组列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/recent_spaces

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明   |
| :-------- | :----- | :------- | :------- | :----- |
| spaces    | array  |          |          | spaces |

#### 返回体参考

```json
{
  "spaces": [
    {
      "uuid": "DV1NU3Ab",
      "owner_uuid": "6ZpgEzkk",
      "is_archive": false,
      "title": "wiki_sapce_test_mul",
      "description": "wiki space test multiple",
      "create_time": 1584598502,
      "updated_time": 1584598502,
      "admins": ["6ZpgEzkk"],
      "page_count": 1,
      "is_pin": true,
      "is_open_share_page": false
    },
    {
      "uuid": "3xCZqxb7",
      "owner_uuid": "6ZpgEzkk",
      "is_archive": false,
      "title": "space_test",
      "description": "制作 api 文档示例的页面组",
      "create_time": 1584588038,
      "updated_time": 1584598922,
      "admins": ["6ZpgEzkk"],
      "page_count": 1,
      "is_pin": true,
      "is_open_share_page": true
    }
  ]
}
```

### 9. 获取页面组卡片的报表数据

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/spaces/card_report_data

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围   | 默认值 | 取值例子 | 说明                                              |
| :----- | :------- | :----- | :--------- | :----- | :------- | :------------------------------------------------ |
| ids    | T        | string | space_uuid |        | ojytvgw3 | 多个使用逗号隔开,单个 uuid 长度为 8，并且不能重复 |

#### 请求体参考

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/BDfDqJU7/spaces/card_report_data?ids=3xCZqxb7,DV1NU3Ab' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://your-host-name/wiki/api/wiki' \
  -H 'cache-control: no-cache'
```

#### 返回结果

```json
{
  "3xCZqxb7": {
    "total": 0,
    "labels": [
      "2020-03-06",
      "2020-03-07",
      "2020-03-08",
      "2020-03-09",
      "2020-03-10",
      "2020-03-11",
      "2020-03-12",
      "2020-03-13",
      "2020-03-14",
      "2020-03-15",
      "2020-03-16",
      "2020-03-17",
      "2020-03-18",
      "2020-03-19"
    ],
    "datasets": [
      {
        "label": "修改次数",
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      }
    ]
  },
  "DV1NU3Ab": {
    "total": 0,
    "labels": [
      "2020-03-06",
      "2020-03-07",
      "2020-03-08",
      "2020-03-09",
      "2020-03-10",
      "2020-03-11",
      "2020-03-12",
      "2020-03-13",
      "2020-03-14",
      "2020-03-15",
      "2020-03-16",
      "2020-03-17",
      "2020-03-18",
      "2020-03-19"
    ],
    "datasets": [
      {
        "label": "修改次数",
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      }
    ]
  }
}
```

### 10. 记录页面组浏览接口

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/browse

#### HTTP Method

POST

#3## 是否需要登录

是

#### 传值方式

无

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

### 11. 置顶页面组

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/pin

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

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

### 12. 取消置顶页面组

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/unpin

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

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

### 13. 获取免费团队的新建页面时是否超出限额

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/team_space_limit

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
  "is_over_page_limit": false,
  "max_page_count": 100
}
```

### 14. 获取页面组的分享页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/share_pages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

JSON

### 参数列表

无

#### 返回 JSON

```json
{
  "share_pages": [
    [
      {
        "team_uuid": "U66S45tG",
        "space_uuid": "SCEFCtg1",
        "share_uuid": "",
        "page_uuid": "RbktqkAH",
        "parent_uuid": "KSGQChyD",
        "title": "F2045 2 1",
        "user_uuid": "",
        "share_permission_type": 0,
        "is_share_sub_page": false,
        "share_time": 0
      },
      {
        "team_uuid": "U66S45tG",
        "space_uuid": "SCEFCtg1",
        "share_uuid": "",
        "page_uuid": "W61EiMp4",
        "parent_uuid": "KSGQChyD",
        "title": "F2045 1 草稿6",
        "user_uuid": "",
        "share_permission_type": 0,
        "is_share_sub_page": false,
        "share_time": 0
      }
    ],
    [
      {
        "team_uuid": "U66S45tG",
        "space_uuid": "SCEFCtg1",
        "share_uuid": "6B8QZWCPYN7WLjVG",
        "page_uuid": "5iWSUBcx",
        "parent_uuid": "",
        "title": "F2045 2",
        "user_uuid": "Gq8ZZZ7F",
        "share_permission_type": 3,
        "is_share_sub_page": true,
        "share_time": 1570609796
      }
    ]
  ]
}
```
