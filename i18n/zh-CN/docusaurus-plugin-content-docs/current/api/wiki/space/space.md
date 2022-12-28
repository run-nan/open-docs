# wiki 页面组

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取页面组列表](#获取页面组列表)
  - [新增页面组](#新增页面组)
  - [获取页面组详情](#获取页面组详情)
  - [更新页面组](#更新页面组)
  - [删除](#删除)
  - [归档](#归档)
  - [获取用户可见的页面组列表](#获取用户可见的页面组列表)
  - [获取最近浏览页面组列表](#获取最近浏览页面组列表)
  - [获取页面组卡片的报表数据](#获取页面组卡片的报表数据)
  - [记录页面组浏览接口](#记录space浏览接口)
  - [置顶页面组](#置顶页面组)
  - [取消置顶页面组](#12-取消置顶页面组)
  - [获取免费团队的新建页面时是否超出限额](#获取免费团队的新建页面时是否超出限额)
  - [获取页面组的分享页面列表](#获取页面组的分享页面列表)

## 通用说明

### 状态码说明

| 状态码 | 说明                            |
| :----- | :------------------------------ |
| 200    | 成功                            |
| 403    | 没有权限                        |
| 500    | 服务器错误                      |
| 630    | 没有 space 记录                 |
| 801    | spaceUUID 无效/请求参数格式错误 |
| 900    | 资源达到上限                    |

## API 说明

### 获取页面组列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/spaces

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

| 参数名     | 是否必须 | 值类型 | 取值类型   | 说明                 |
| :--------- | :------- | :----- | :--------- | :------------------- |
| page_count | 否       | bool   | true/false | false 是不显示页面数 |

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明   |
| :-------- | :----- | :------- | :------- | :----- |
| spaces    | array  |          |          | spaces |

#### space 对象

| 参数名              | 值类型 | 取值类型        | 说明             |
| :------------------ | :----- | :-------------- | :--------------- |
| uuid                | string |                 | 空间 uuid        |
| owner_uuid          | string |                 | 创建者 uuid      |
| is_archive          | bool   |                 | 是否归档         |
| title               | string |                 | 标题             |
| description         | string |                 | 空间描述         |
| create_time         | int    |                 | 创建时间         |
| updated_time        | int    |                 | 更新时间         |
| admins              | array  |                 | 管理员 uuid      |
| space_category_uuid | string | 页面组分类 uuid |
| page_count          | int    |                 | 页面数           |
| is_open_share_page  | bool   |                 | 页面是否可以分享 |
| is_sample           | bool   |                 |                  |
| is_pin              | bool   |                 | 是否置顶         |

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
      "uuid": "3Rkf4Bud",
      "owner_uuid": "TqqdgyUb",
      "is_archive": false,
      "title": "test22",
      "description": "",
      "create_time": 1665477404,
      "updated_time": 1670572882,
      "admins": ["TqqdgyUb"],
      "space_category_uuid": "",
      "page_count": 10,
      "is_pin": true,
      "is_open_share_page": false,
      "is_sample": false
    },
    {
      "uuid": "Pwd2Haxg",
      "owner_uuid": "TqqdgyUb",
      "is_archive": false,
      "title": "0525",
      "description": "",
      "create_time": 1653478045,
      "updated_time": 1662558852,
      "admins": ["TqqdgyUb", "T7skoUhx"],
      "space_category_uuid": "",
      "page_count": 29,
      "is_pin": false,
      "is_open_share_page": true,
      "is_sample": false
    }
  ]
}
```

### 新增页面组

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

#### 返回参数

| 参数名      | 值类型 | 取值类型 | 说明        |
| :---------- | :----- | :------- | :---------- |
| uuid        | string |          | 空间 uuid   |
| team_uuid   | string |          | 团队 uuid   |
| owner_uuid  | string |          | 拥有者 uuid |
| title       | string |          | 空间标题    |
| create_time | int    |          | 创建时间    |

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

### 获取页面组详情

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

#### space 对象

| 参数名              | 值类型 | 取值类型        | 说明             |
| :------------------ | :----- | :-------------- | :--------------- |
| uuid                | string |                 | 空间 uuid        |
| owner_uuid          | string |                 | 创建者 uuid      |
| is_archive          | bool   |                 | 是否归档         |
| title               | string |                 | 标题             |
| description         | string |                 | 空间描述         |
| create_time         | int    |                 | 创建时间         |
| updated_time        | int    |                 | 更新时间         |
| admins              | array  |                 | 管理员 uuid      |
| space_category_uuid | string | 页面组分类 uuid |
| is_open_share_page  | bool   |                 | 页面是否可以分享 |
| is_sample           | bool   |                 |                  |
| is_pin              | bool   |                 | 是否置顶         |

#### 返回体示例

```json
{
  "uuid": "3Rkf4Bud",
  "owner_uuid": "TqqdgyUb",
  "is_archive": false,
  "title": "test22",
  "description": "",
  "create_time": 1665477404,
  "updated_time": 1670572882,
  "admins": ["TqqdgyUb"],
  "space_category_uuid": "UiRnmQCA",
  "is_pin": false,
  "is_open_share_page": false,
  "is_sample": false
}
```

### 更新页面组

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名              | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明             |
| :------------------ | :------- | :----- | :------- | :----- | :------- | :--------------- |
| title               | T        | string |          |        |          | 标题             |
| description         | T        | string |          |        |          | 描述             |
| space_category_uuid | T        | string |          |        |          | 页面组 uuid      |
| is_open_share_page  | T        | bool   |          |        |          | 是否打开分享页面 |

#### body 示例

```json
{
  "title": "wiki_sapce_test_mul",
  "description": "wiki space test multiple",
  "space_category_uuid": "UiRnmQCA",
  "is_open_share_page": "false"
}
```

#### 请求示例

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

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 删除

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

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/XTDEpeEQ/delete \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 归档

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

#### 请求示例

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

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取用户可见的页面组列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/my_spaces

#### HTTP Method

GET

#### 是否需要登录

是

### 传值方式

无

#### 请求示例

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/my_spaces\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 返回 JSON

| JSON 键名 | 值类型 | 取值范围 | 取值例子 | 说明   |
| :-------- | :----- | :------- | :------- | :----- |
| spaces    | array  |          |          | spaces |

#### space 对象

| 参数名              | 值类型 | 取值类型        | 说明             |
| :------------------ | :----- | :-------------- | :--------------- |
| uuid                | string |                 | 空间 uuid        |
| owner_uuid          | string |                 | 创建者 uuid      |
| is_archive          | bool   |                 | 是否归档         |
| title               | string |                 | 标题             |
| description         | string |                 | 空间描述         |
| create_time         | int    |                 | 创建时间         |
| updated_time        | int    |                 | 更新时间         |
| admins              | array  |                 | 管理员 uuid      |
| space_category_uuid | string | 页面组分类 uuid |
| page_count          | int    |                 | 页面数           |
| is_open_share_page  | bool   |                 | 页面是否可以分享 |
| is_sample           | bool   |                 |                  |
| is_pin              | bool   |                 | 是否置顶         |

#### 返回示例

```json
{
  "spaces": [
    {
      "uuid": "3Rkf4Bud",
      "owner_uuid": "TqqdgyUb",
      "is_archive": false,
      "title": "test22",
      "description": "",
      "create_time": 1665477404,
      "updated_time": 1670572882,
      "admins": ["TqqdgyUb"],
      "space_category_uuid": "",
      "page_count": 10,
      "is_pin": true,
      "is_open_share_page": false,
      "is_sample": false
    },
    {
      "uuid": "Pwd2Haxg",
      "owner_uuid": "TqqdgyUb",
      "is_archive": false,
      "title": "0525",
      "description": "",
      "create_time": 1653478045,
      "updated_time": 1662558852,
      "admins": ["TqqdgyUb", "T7skoUhx"],
      "space_category_uuid": "",
      "page_count": 29,
      "is_pin": false,
      "is_open_share_page": true,
      "is_sample": false
    }
  ]
}
```

### 获取最近浏览页面组列表

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

#### space 对象

| 参数名              | 值类型 | 取值类型        | 说明             |
| :------------------ | :----- | :-------------- | :--------------- |
| uuid                | string |                 | 空间 uuid        |
| owner_uuid          | string |                 | 创建者 uuid      |
| is_archive          | bool   |                 | 是否归档         |
| title               | string |                 | 标题             |
| description         | string |                 | 空间描述         |
| create_time         | int    |                 | 创建时间         |
| updated_time        | int    |                 | 更新时间         |
| admins              | array  |                 | 管理员 uuid      |
| space_category_uuid | string | 页面组分类 uuid |
| page_count          | int    |                 | 页面数           |
| is_open_share_page  | bool   |                 | 页面是否可以分享 |
| is_sample           | bool   |                 |                  |
| is_pin              | bool   |                 | 是否置顶         |

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/recent_spaces\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

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

### 获取页面组卡片的报表数据

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/spaces/card_report_data

#### HTTP Method

POST

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
  'https://your-host-name/wiki/api/wiki/team/BDfDqJU7/spaces/card_report_data' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://your-host-name/wiki/api/wiki' \
  -H 'cache-control: no-cache'
  -d '{
    "ids": ["3xCZqxb7","DV1NU3Ab"]
}'
```

#### 返回参数

| 参数名   | 值类型 | 取值类型 | 说明     |
| :------- | :----- | :------- | :------- |
| total    | int    |          | 总数     |
| labels   | array  |          | 时间标签 |
| datasets | array  |          | 数据设置 |

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

### 记录页面组浏览接口

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

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/browse\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 置顶页面组

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

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/space/:spaceUUID/pin\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 取消置顶页面组

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

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/space/:spaceUUID/unpin\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 返回 JSON

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取免费团队的新建页面时是否超出限额

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

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/team_space_limit\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 返回参数

| 参数名             | 值类型 | 取值类型 | 说明         |
| :----------------- | :----- | :------- | :----------- |
| is_over_page_limit | bool   |          | 是否超过限制 |
| max_page_count     | int    |          | 最大页面数   |

#### 返回 JSON

```json
{
  "is_over_page_limit": false,
  "max_page_count": 100
}
```

### 获取页面组的分享页面列表

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

#### 请求体参考

```curl
curl -X GET \
  https://devapi.myones.net/wiki/api/wiki/team/3Rkf4Bud/space/SCEFCtg1/share_pages\
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'Referer: https://devapi.myones.net/wiki/master' \
  -H 'cache-control: no-cache' \
```

#### 返回参数

| 参数名      | 值类型 | 取值类型 | 说明           |
| :---------- | :----- | :------- | :------------- |
| share_pages | array  |          | 分享的页面列表 |

#### object

| 参数名                | 值类型 | 取值类型 | 说明                                                                                                                       |
| :-------------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| team_uuid             | string |          | 团队 uuid                                                                                                                  |
| space_uuid            | string |          | 空间 uuid                                                                                                                  |
| share_uuid            | string |          | 分享 uuid                                                                                                                  |
| parent_uuid           | string |          | 父页面 uuid                                                                                                                |
| title                 | string |          | 标题                                                                                                                       |
| page_uuid             | string |          | 页面 uuid                                                                                                                  |
| share_permission_type | int    |          | 分享页面的权限                                                                                                             |
| is_share_sub_page     | bool   |          | 是否允许分享子页面                                                                                                         |
| share_time            | int    |          | 分享的时限                                                                                                                 |
| ref_type              | int    |          | 页面关联类型 1 默认 wiki page 类型，2 wps word，3 wps excel，4 wps ppt，5 confluence 导入转换后的 page，6 wiz 多人实时编辑 |
| ref_uuid              | array  |          | 页面关联 uuid                                                                                                              |

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
        "share_time": 0,
        "ref_type": "1",
        "ref_uuid": "KSGQChyD"
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
        "share_time": 0,
        "ref_type": "1",
        "ref_uuid": "KSGQChyD"
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
        "share_time": 1570609796,
        "ref_type": "1",
        "ref_uuid": "KSGQChyD"
      }
    ]
  ]
}
```
