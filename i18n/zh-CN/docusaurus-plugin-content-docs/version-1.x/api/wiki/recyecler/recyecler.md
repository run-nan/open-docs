# wiki 回收站

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取回收站内的页面详情](#获取回收站内的页面详情)
  - [删除回收站内的页面](#删除回收站内的页面)
  - [获取回收站内的页面列表](#获取回收站内的页面列表)
  - [恢复回收站内的页面](#恢复回收站内的页面)
  - [清空回收站](#清空回收站)

## 通用说明

### 状态码说明

| code | errcode                                | 说明                             |
| :--- | :------------------------------------- | :------------------------------- |
| 403  | ConstraintViolation.DestinationInvalid | 待恢复 page 的原路径不合法       |
| 404  | NotFound.Page                          | 没有找到 Page                    |
| 404  | NotFound.PageVersion                   | 没有找到 PageVersion             |
| 404  | NotFound.Draft                         | 没有找到对应的草稿               |
| 404  | NotFound.Message                       | 没有找到对应的消息(一般不会出现) |

## API 说明

### 获取回收站内的页面详情

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名        | 值类型 | 取值范围 | 说明                                                                                                      |
| :------------ | :----- | :------- | :-------------------------------------------------------------------------------------------------------- |
| uuid          | string | len=8    | 页面 uuid                                                                                                 |
| space_uuid    | string | len=8    | 页面组 uuid                                                                                               |
| owner_uuid    | string | len=8    | 作者 uuid                                                                                                 |
| title         | string | len<=64  | 标题                                                                                                      |
| operator_uuid | string | len=8    | 操作者 uuid                                                                                               |
| operate_time  | int    |          | 操作时间                                                                                                  |
| ref_type      | int    |          | 关联类型，1：传统页面，2：wps word，3：wps excel，4：wps ppt，5：confluence 导入后的传统页面，6：协同页面 |
| ref_uuid      | string | len=8    | 关联 uuid                                                                                                 |
| content       | string |          | 页面内容                                                                                                  |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "uuid": "PZwFcWei",
  "space_uuid": "ReNYACb3",
  "owner_uuid": "9uaNjXTJ",
  "title": "title a",
  "content": "<p>go to school</p>\n",
  "operator_uuid": "9uaNjXTJ",
  "operate_time": 1626946365743522,
  "ref_type": 1,
  "ref_uuid": ""
}
```

### 删除回收站内的页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 响应参数列表

无

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取回收站内的页面列表

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

#### 响应参数列表

| 参数名 | 值类型 | 取值范围      | 说明     |
| :----- | :----- | :------------ | :------- |
| pages  | array  | [item](#item) | 页面列表 |

##### item

| 参数名      | 值类型 | 取值范围 | 说明                                                                                                      |
| :---------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------- |
| uuid        | string | len=8    | 页面 uuid                                                                                                 |
| space_uuid  | string | len=8    | 页面组 uuid                                                                                               |
| parent_uuid | string | len=8    | 父页面 uuid                                                                                               |
| title       | string | len<=64  | 标题                                                                                                      |
| ref_type    | int    |          | 关联类型，1：传统页面，2：wps word，3：wps excel，4：wps ppt，5：confluence 导入后的传统页面，6：协同页面 |
| ref_uuid    | string | len=8    | 关联 uuid                                                                                                 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "pages": [
    {
      "uuid": "PZwFcWei",
      "space_uuid": "ReNYACb3",
      "title": "title a",
      "parent_uuid": "2FEdnsbk",
      "ref_type": 1,
      "ref_uuid": ""
    }
  ]
}
```

### 恢复回收站内的页面

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名          | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                         |
| :-------------- | :------- | :----- | :------- | :----- | :------- | :--------------------------- |
| new_space_uuid  | F        | string |          |        |          | 恢复至新的 space 的 uuid     |
| new_parent_uuid | F        | string |          |        |          | 恢复至新的页面的 parent_uuid |

#### 响应参数列表

无

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "new_space_uuid": "",
    "new_parent_uuid": ""
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

### 清空回收站

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 响应参数列表

无

#### 请求示例

```curl
curl -X POST \
 https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
