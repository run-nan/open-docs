# wiki 草稿

- [通用说明](#通用说明)
  - [draft](#draft)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取草稿列表](#获取草稿列表)
  - [获取草稿详情](#获取草稿详情)
  - [获取草稿详情路由不带 space_uuid](#获取草稿详情路由不带space_uuid)
  - [创建草稿(临时草稿、页面草稿、页面复制、从模板创建)](<#创建草稿(临时草稿、页面草稿、页面复制、从模板创建)>)
  - [保存/发布草稿](#保存/发布草稿)
  - [删除草稿](#删除草稿)
  - [获取草稿附件](#获取草稿附件)
  - [更新草稿附件](#更新草稿附件)
  - [获取分享页面列表的草稿列表](#获取分享页面列表的草稿列表)

## 通用说明

### draft

| 参数名       | 值类型 | 取值范围 | 说明                        |
| :----------- | ------ | -------- | --------------------------- |
| uuid         | string | len=8    | 草稿 uuid                   |
| page_uuid    | string | len=8    | 页面 uuid                   |
| from_version | int    |          | 草稿来源版本。-1 默认版本。 |
| title        | string | len<=64  | 标题                        |
| status       | int    |          | 草稿状态类型                |
| create_time  |        |          | 草稿创建时间                |
| updated_time |        |          | 草稿修改时间                |
| space_uuid   |        |          | 页面组 uuid                 |

### 状态码说明

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

### 获取草稿列表

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

#### 响应说明

| 参数名       | 值类型 | 取值范围 | 说明                                                                                                  |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| uuid         | string | len=8    | 草稿 id，随机 8 位字符组成                                                                            |
| space_uuid   | string | len=8    | 空间 id，随机 8 位字符组成                                                                            |
| page_uuid    | string | len=8    | 页面 id，随机 8 位字符组成                                                                            |
| from_version | int    |          | 来源版本                                                                                              |
| title        | string | len<=64  | 页面标题                                                                                              |
| status       | int    |          | 状态：<br/>1 临时草稿<br/>2 在已有 page 上创建一个草稿<br/>3 草稿已发布<br/>4 已删除<br/>5 在回收站中 |
| content      | string |          | 非协同编辑页面值为正文内容，协同编辑页面值为版本号                                                    |
| create_time  | int64  |          | 创建时间                                                                                              |
| updated_time | int64  |          | 更新时间                                                                                              |
| ref_type     | int64  |          | 页面关联类型                                                                                          |
| ref_uuid     | string | len=8    | 页面关联 uuid                                                                                         |

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
      "title": "title",
      "status": 2,
      "create_time": 1626938305,
      "updated_time": 1626938316,
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 获取草稿详情

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

#### 响应说明

| 参数名       | 值类型 | 取值范围 | 说明                                                                                                  |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| uuid         | string | len=8    | 草稿 id，随机 8 位字符组成                                                                            |
| space_uuid   | string | len=8    | 空间 id，随机 8 位字符组成                                                                            |
| page_uuid    | string | len=8    | 页面 id，随机 8 位字符组成                                                                            |
| from_version | int    |          | 来源版本                                                                                              |
| title        | string | len<=64  | 页面标题                                                                                              |
| status       | int    |          | 状态：<br/>1 临时草稿<br/>2 在已有 page 上创建一个草稿<br/>3 草稿已发布<br/>4 已删除<br/>5 在回收站中 |
| content      | string |          | 非协同编辑页面值为正文内容，协同编辑页面值为版本号                                                    |
| create_time  | int64  |          | 创建时间                                                                                              |
| updated_time | int64  |          | 更新时间                                                                                              |
| ref_type     | int64  |          | 页面关联类型                                                                                          |
| ref_uuid     | string | len=8    | 页面关联 uuid                                                                                         |

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
  "title": "this is draft",
  "content": "<p>this is content.this is a test page.</p>\n",
  "status": 1,
  "create_time": 1584607114,
  "updated_time": 1584607263
}
```

### 获取草稿详情(路由不带 space_uuid)

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

#### 响应说明

| 参数名       | 值类型 | 取值范围 | 说明                                                                                                  |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| uuid         | string | len=8    | 草稿 id，随机 8 位字符组成                                                                            |
| space_uuid   | string | len=8    | 空间 id，随机 8 位字符组成                                                                            |
| page_uuid    | string | len=8    | 页面 id，随机 8 位字符组成                                                                            |
| from_version | int    |          | 来源版本                                                                                              |
| title        | string | len<=64  | 页面标题                                                                                              |
| status       | int    |          | 状态：<br/>1 临时草稿<br/>2 在已有 page 上创建一个草稿<br/>3 草稿已发布<br/>4 已删除<br/>5 在回收站中 |
| content      | string |          | 非协同编辑页面值为正文内容，协同编辑页面值为版本号                                                    |
| create_time  | int64  |          | 创建时间                                                                                              |
| updated_time | int64  |          | 更新时间                                                                                              |
| ref_type     | int64  |          | 页面关联类型                                                                                          |
| ref_uuid     | string | len=8    | 页面关联 uuid                                                                                         |

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
  "title": "this is draft",
  "content": "<p>this is content.this is a test page.</p>\n",
  "status": 1,
  "create_time": 1584607114,
  "updated_time": 1584607263
}
```

### 创建草稿

可以创建 space 临时草稿、page 页面草稿、页面复制、从模板创建草稿

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
| page_uuid     | 否       | string |               |        |          |                                              |
| title         | 否       | string |               |        |          |                                              |
| content       | 否       | string |               |        |          |                                              |
| status        | 是       | int    | [1,2]         |        |          | 1: space 临时草稿, 2: page 页面草稿          |
| copy_src_type | 否       | string | template,page |        | template | 拷贝来源类型                                 |
| copy_src_uuid | 否       | string |               |        |          | 被拷贝对象的 uuid，与 copy_src_uuid 配合使用 |

#### 响应说明

| 参数名      | 值类型 | 取值范围 | 说明                                                                                                  |
| :---------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| uuid        | string | len=8    | 草稿 id，随机 8 位字符组成                                                                            |
| space_uuid  | string | len=8    | 空间 id，随机 8 位字符组成                                                                            |
| page_uuid   | string | len=8    | 页面 id，随机 8 位字符组成                                                                            |
| owner_uuid  | string | len=8    | 创建者 id，随机 8 位字符组成                                                                          |
| status      | int    |          | 状态：<br/>1 临时草稿<br/>2 在已有 page 上创建一个草稿<br/>3 草稿已发布<br/>4 已删除<br/>5 在回收站中 |
| create_time | int64  |          | 创建时间                                                                                              |

#### 请求示例

示例：

1. 创建 space 临时草稿，此时参数 page_uuid 为草稿父节点的 page_uuid

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "content": "content",
      "page_uuid": "UyZkFDM5",
      "status": 1,
      "title": "title"
    }'
```

2. 创建 page 页面的草稿，此时 page_uuid 参数为正在编辑的 page 页面的 uuid

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "content": "content",
      "page_uuid": "UyZkFDM5", //
      "status": 2,
      "title": "title"
    }'
```

3. 从页面复制

注意： title 参数为新的标题名称，如果不填该字段则默认使用被复制页面的标题为新的标题

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "page_uuid": "UyZkFDM5",
      "copy_src_type": "page",
      "copy_src_uuid": "UyZkFDM5",
      "status": 1,
      "title": "title"
    }'
```

4. 基于模板创建, 请求内容为

注意：参数中的 page_uuid 为草稿父节点的页面 uuid，title 为新的标题名称，如果不填该字段则默认使用被复制模板的标题为新的标题

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d ' {
      "page_uuid": "string",
      "copy_src_type": "template",
      "copy_src_uuid": "string",
      "status": 1,
      "title": "string"
    }'
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

### 保存/发布草稿

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
| title        | 是       | string |          |        |          |                                             |
| content      | 是       | string |          |        |          |                                             |
| is_published | 否       | bool   |          | false  | false    | 是否发布                                    |
| is_forced    | 否       | bool   |          | false  | true     | 是否强制更新, `is_published` 为 true 才生效 |
| from_version | int      |        | 来源版本 |

#### 响应说明

| 参数名     | 值类型 | 取值范围 | 说明                                                                                                  |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| team_uuid  | string | len=8    | 团队 id，随机 8 位字符组成                                                                            |
| space_uuid | string | len=8    | 空间 id，随机 8 位字符组成                                                                            |
| page_uuid  | string | len=8    | 页面 id，随机 8 位字符组成                                                                            |
| draft_uuid | string | len=8    | 草稿 id，随机 8 位字符组成                                                                            |
| status     | int    |          | 状态：<br/>1 临时草稿<br/>2 在已有 page 上创建一个草稿<br/>3 草稿已发布<br/>4 已删除<br/>5 在回收站中 |

#### 请求体示例

```json
{
  "uuid": "XM9VHifj",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "4VSnJJmk",
  "from_version": -1,
  "title": "shjdfgkvlsbhl",
  "content": "<h1>Background</h1>\n\n<p>Who are the users, and what problems are encountered in this scenarios? How does this problem behave in the data sample?</p>\n\n<h1>sprint target</h1>\n\n<p>some targets</p>\n\n<h1>Requirements overview</h1>\n\n<p>Describe what are the requirements for this iteration. for example:</p>\n\n<ol>\n\t<li>User and product portraits: realize the mining of user and product characteristics</li>\n\t<li>&hellip;&hellip;</li>\n\t<li>&hellip;&hellip;</li>\n</ol>\n\n<h1>需求详述</h1>\n\n<table style=\"width:307.5px\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>&nbsp;</th>\n\t\t\t<th>优先级</th>\n\t\t\t<th>需求描述</th>\n\t\t\t<th>备注</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>1</td>\n\t\t\t<td>P0</td>\n\t\t\t<td>\n\t\t\t<p>记录用户在页面 A 里的点击行为&hellip;&hellip;</p>\n\t\t\t</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>2</td>\n\t\t\t<td>P0</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>3</td>\n\t\t\t<td>P1</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t\t<td>&hellip;&hellip;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n",
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

### 删除草稿

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

#### 响应说明

| 参数名  | 值类型 | 取值范围 | 说明     |
| :------ | :----- | :------- | :------- |
| code    | int    |          | 结果代码 |
| errcode | string |          | 错误消息 |
| type    | string |          | 错误类型 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/draft/kyu8m6d5/delete \
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

### 获取草稿附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名      | 值类型 | 取值范围                                       | 说明     |
| :---------- | :----- | :--------------------------------------------- | :------- |
| attachments | array  | [attachment](../page/page.md#attachment-model) | 附件列表 |

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "attachments": [
    {
      "uuid": "XhL5nJ43",
      "name": "img.jpeg"
    }
  ]
}
```

### 更新草稿附件

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                                |
| :----- | :------- | :----- | :------- | :----- | :------- | :-------------------------------------------------- |
| add    | F        | array  |          |        |          | 新增 [attachment](../page/page.md#attachment-model) |
| remove | F        | array  |          |        |          | 删除 [attachment](../page/page.md#attachment-model) |

#### 响应参数列表

无

#### 请求示例

```curl
curl -X POST \
  'https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments/update' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
  -d '{
    "add": [
      {
        "uuid": "Hc5acJYi",
        "name": "abc.png"
      }
    ]
  }'
```

#### 响应示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取分享页面列表的草稿列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/share/:shareUUID/drafts

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名 | 值类型 | 取值范围        | 说明     |
| :----- | :----- | :-------------- | :------- |
| drafts | array  | [draft](#draft) | 草稿列表 |

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/wiki/api/wiki/team/:teamUUID/share/:shareUUID/drafts' \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "drafts": [
    {
      "uuid": "3KV1Tfh2",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 draft 6",
      "status": 1,
      "create_time": 1570690646,
      "updated_time": 1571279628
    },
    {
      "uuid": "8hhPPKq2",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 draft 3",
      "status": 1,
      "create_time": 1570873284,
      "updated_time": 1570873284
    },
    {
      "uuid": "LLNkd6Up",
      "space_uuid": "",
      "page_uuid": "5iWSUBcx",
      "from_version": -1,
      "title": "F2045 2 draft 1",
      "status": 1,
      "create_time": 1570690661,
      "updated_time": 1570690661
    },
    {
      "uuid": "Et2GgYUB",
      "space_uuid": "",
      "page_uuid": "KSGQChyD",
      "from_version": -1,
      "title": "F2045 1 draft 2",
      "status": 1,
      "create_time": 1570690650,
      "updated_time": 1570690650
    }
  ]
}
```
