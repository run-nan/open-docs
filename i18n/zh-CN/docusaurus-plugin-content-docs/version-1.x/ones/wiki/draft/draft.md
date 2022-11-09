# wiki 草稿

- [1. 获取草稿列表](#1-获取草稿列表)
- [2. 获取草稿详情](#2-获取草稿详情)
- [3. 获取草稿详情路由不带 space_uuid](#3-获取草稿详情路由不带space_uuid)
- [4. 创建草稿(临时草稿、页面草稿、页面复制、从模板创建)](<#4-创建草稿(临时草稿、页面草稿、页面复制、从模板创建)>)
- [5. 保存/发布草稿](#5-保存/发布草稿)
- [6. 删除草稿](#6-删除草稿)
- [7. 获取草稿附件](#7-获取草稿附件)
- [8. 更新草稿附件](#8-更新草稿附件)
- [9. 获取分享页面列表的草稿列表](#9-获取分享页面列表的草稿列表)

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

### 1. 获取草稿列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/drafts

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
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "drafts": [
    {
      "uuid": "EbHDiJpk",
      "space_uuid": "ReNYACb3",
      "page_uuid": "5rTDW8Gn",
      "from_version": 0,
      "title": "标题",
      "status": 2,
      "create_time": 1626938305,
      "updated_time": 1626938316,
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 2. 获取草稿详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID

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
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/draft/TTo4mJgo \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "uuid": "Ug8sTPzy",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "UyZkFDM5",
  "from_version": -1,
  "title": "没有感情的草稿",
  "content": "<p>圣诞节会计师的基本功&nbsp;</p>\n",
  "status": 1,
  "create_time": 1584607114,
  "updated_time": 1584607263
}
```

### 3. 获取草稿详情(路由不带 space_uuid)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/draft/:draftUUID

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
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/draft/TTo4mJgo \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回体示例

```json
{
  "uuid": "Ug8sTPzy",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "UyZkFDM5",
  "from_version": -1,
  "title": "没有感情的草稿",
  "content": "<p>圣诞节会计师的基本功&nbsp;</p>\n",
  "status": 1,
  "create_time": 1584607114,
  "updated_time": 1584607263
}
```

### 4. 创建草稿(space 临时草稿、page 页面草稿、页面复制、从模板创建)

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/drafts/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名        | 是否必须 | 值类型 | 取值范围      | 默认值 | 取值例子 | 说明                                         |
| :------------ | :------- | :----- | :------------ | :----- | :------- | :------------------------------------------- |
| page_uuid     | F        | string |               |        |          |                                              |
| title         | F        | string |               |        |          |                                              |
| content       | F        | string |               |        |          |                                              |
| status        | T        | int    | [1,2]         |        |          | 1: space 临时草稿, 2: page 页面草稿          |
| copy_src_type | F        | string | template,page |        | template | 拷贝来源类型                                 |
| copy_src_uuid | F        | string |               |        |          | 被拷贝对象的 uuid，与 copy_src_uuid 配合使用 |

#### 请求示例

示例：

1. 创建 space 临时草稿， 请求内容为

```json
{
  "content": "content",
  "page_uuid": "UyZkFDM5", // 父节点的page uuid
  "status": 1,
  "title": "title"
}
```

2. 创建 page 页面的草稿，请求内容为

```json
{
  "content": "content",
  "page_uuid": "UyZkFDM5", // page 页面的 uuid
  "status": 2,
  "title": "title"
}
```

3. 页面复制, 请求内容为

```json
{
  "page_uuid": "UyZkFDM5",
  "copy_src_type": "page", // 类型是 page
  "copy_src_uuid": "UyZkFDM5",
  "status": 1,
  "title": "title" // 新的标题名称，如果不填该字段则默认使用被复制模板的标题为新的标题
}
```

4. 基于模板创建, 请求内容为

```json
{
  "page_uuid": "string", // 父节点的page uuid
  "copy_src_type": "template", // 类型是template
  "copy_src_uuid": "string",
  "status": 1,
  "title": "string" // 新的标题名称，如果不填该字段则默认使用被复制模板的标题为新的标题
}
```

#### 返回值示例

```json
{
  "uuid": "TPaN4NBc",
  "space_uuid": "KPq8SX5Z",
  "page_uuid": "F8JoKZY2",
  "owner_uuid": "8eyieheZ",
  "status": 1,
  "create_time": 1495527956
}
```

### 5. 保存/发布草稿

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名       | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                        |
| :----------- | :------- | :----- | :------- | :----- | :------- | :------------------------------------------ |
| space_uuid   | F        | string |          |        |          | 临时草稿时,可以另选其他 space               |
| page_uuid    | F        | string |          |        |          | 临时草稿时,可以另选其他 page                |
| title        | T        | string |          |        |          |                                             |
| content      | T        | string |          |        |          |                                             |
| is_published | F        | bool   |          | false  | false    | 是否发布                                    |
| is_forced    | F        | bool   |          | false  | true     | 是否强制更新, `is_published` 为 true 才生效 |

#### 请求体示例

```json
{
  "uuid": "XM9VHifj",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "4VSnJJmk",
  "from_version": -1,
  "title": "shjdfgkvlsbhl",
  "content": "<h1>背景</h1>\n\n<p>用户是谁，在什么场景下遇到什么问题。这个问题在数据样本里的表现是怎么样的。</p>\n\n<h1>迭代目标</h1>\n\n<p>为迭代预估数字指标。</p>\n\n<h1>需求概述</h1>\n\n<p>描述这个迭代有哪些需求点。比如：</p>\n\n<ol>\n\t<li>用户和商品画像：实现对用户和商品特征的挖掘，为匹配策略提供数据基础</li>\n\t<li>&hellip;&hellip;</li>\n\t<li>&hellip;&hellip;</li>\n</ol>\n\n<h1>需求详述</h1>\n\n<table style=\"width:307.5px\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>&nbsp;</th>\n\t\t\t<th>优先级</th>\n\t\t\t<th>需求描述</th>\n\t\t\t<th>备注</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>1</td>\n\t\t\t<td>P0</td>\n\t\t\t<td>\n\t\t\t<p>记录用户在页面 A 里的点击行为&hellip;&hellip;</p>\n\t\t\t</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>2</td>\n\t\t\t<td>P0</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>3</td>\n\t\t\t<td>P1</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n",
  "status": 1,
  "create_time": 1584608120000000,
  "updated_time": 1584608120000000,
  "is_published": true
}
```

#### 正确的返回值示例

```json
{
  "team_uuid": "BDfDqJU7",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "8oNtjtGW",
  "draft_uuid": "XM9VHifj",
  "status": 3
}
```

#### 错误的返回值示例

```json
{
  "code": 403,
  "errcode": "LimitExceeded.Page",
  "exceeded_page_limit": 100,
  "model": "Page",
  "type": "LimitExceeded"
}
```

`exceeded_page_limit`是页面数的限制数量

### 6. 删除草稿

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回 json

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 7. 获取草稿附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments

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
  "attachments": [
    {
      "uuid": "XhL5nJ43",
      "name": "img.jpeg",
      "mimetype": ""
    }
  ]
}
```

### 8. 更新草稿附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                                |
| :----- | :------- | :----- | :------- | :----- | :------- | :-------------------------------------------------- |
| add    | F        | array  |          |        |          | 新增 [attachment](../page/page.md#attachment-model) |
| remove | F        | array  |          |        |          | 删除 [attachment](../page/page.md#attachment-model) |

#### Body 示例

```json
{
  "add": [
    {
      "uuid": "Hc5acJYi",
      "name": "img.jpeg"
    }
  ]
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

### 9. 获取分享页面列表的草稿列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/share/:shareUUID/drafts

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回值示例

```json
{
  "drafts": [
    {
      "uuid": "3KV1Tfh2",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 草稿6",
      "status": 1,
      "create_time": 1570690646,
      "updated_time": 1571279628
    },
    {
      "uuid": "8hhPPKq2",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 草稿3",
      "status": 1,
      "create_time": 1570873284,
      "updated_time": 1570873284
    },
    {
      "uuid": "LLNkd6Up",
      "space_uuid": "",
      "page_uuid": "5iWSUBcx",
      "from_version": -1,
      "title": "F2045 2 草稿1",
      "status": 1,
      "create_time": 1570690661,
      "updated_time": 1570690661
    },
    {
      "uuid": "Et2GgYUB",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 草稿2",
      "status": 1,
      "create_time": 1570690650,
      "updated_time": 1570690650
    }
  ]
}
```
