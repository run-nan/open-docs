# 关联 wiki 页面

- [获取用户可见的页面组列表](../wiki/space.md#7-获取用户可见的页面组列表)
- [获取页面组详情](../wiki/space.md#3-获取页面组详情)
- [添加关联 wiki 页面](#添加关联wiki页面)
- [移除关联 wiki 页面](#移除关联wiki页面)

## 添加关联 wiki 页面

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/bind_wiki_page

### HTTP Method

POST

### 调用权限

任务修改权限

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| 参数名 | 值类型 | 是否必须 | 说明          |
| :----- | :----- | :------- | :------------ |
| pages  | []page | T        | wiki 页面数组 |

page

| 参数名   | 值类型 | 是否必须 | 说明       |
| :------- | :----- | :------- | ---------- |
| uuid     | string | T        | 页面 uuid  |
| title    | string | T        | 页面 title |
| position | int64  | T        | 排序位置   |

### 请求参数示例

```json
{
  "pages": [
    {
      "uuid": "3snnvcEu",
      "title": "会议记录",
      "position": 3
    },
    {
      "uuid": "FBFrDoJG",
      "title": "更新日志",
      "position": 2
    }
  ]
}
```

### 返回值示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## 移除关联 wiki 页面

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/unbind_wiki_page

### HTTP Method

POST

### 调用权限

任务修改权限

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

page

| 参数名 | 值类型 | 是否必须 | 说明       |
| :----- | :----- | :------- | ---------- |
| uuid   | string | T        | 页面 uuid  |
| title  | string | T        | 页面 title |

### 请求参数示例

```json
{
  "page": {
    "title": "更新日志",
    "uuid": "FBFrDoJG"
  }
}
```

### 返回值示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
