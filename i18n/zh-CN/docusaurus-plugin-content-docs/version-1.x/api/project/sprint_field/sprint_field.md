<!-- TOC depthTo:2 -->

# 目录

- [模型](#模型)
  - [迭代属性](#迭代属性)
  - [迭代属性值](#迭代属性值)
- [API 说明](#api说明)
  - [添加项目下迭代属性](#添加项目下迭代属性)
  - [修改项目下迭代属性](#修改项目下迭代属性)
  - [删除项目下迭代属性](#删除项目下迭代属性)
  - [获取项目下迭代属性列表](#获取项目下迭代属性列表)
  - [修改迭代属性值](#修改迭代属性值)

<!-- /TOC -->

# 模型

## 迭代属性

sprint_field

| 参数名  | 类型   | 说明     |
| :------ | :----- | :------- |
| uuid    | string | 属性 id  |
| name    | string | 属性名   |
| type    | string | 属性类型 |
| options | array  | 选项     |

options 对象

| 参数名 | 类型   | 说明   |
| :----- | :----- | :----- |
| value  | string | 选项值 |

## 迭代属性值

sprint_field_value

| 参数名     | 类型       | 说明     |
| :--------- | :--------- | :------- |
| field_uuid | string     | 属性 id  |
| name       | string     | 属性名   |
| type       | string     | 属性类型 |
| value      | int/string | 属性值   |

#### 属性类型

type

| 类型            | 值类型 | 说明                                                        |
| :-------------- | :----- | :---------------------------------------------------------- |
| option          | string | 选项，值是当前选中的选项 u                                  |
| text            | string | 文本                                                        |
| multi_line_text | string | 多行文本                                                    |
| integer         | int64  | 整数，值 = 实际数值 x 100                                   |
| float           | int64  | 浮点数，值 = 向下取整(实际 x 100000)，小数点后有效位数 5 位 |
| date            | int64  | 日期，utc 时间戳，以秒为单                                  |
| time            | int64  | 时间，utc 时间戳，以秒为单                                  |
| user            | string | 团队内成员，值是用户 uuid                                   |

### 状态码说明

| 状态码 | 说明         |
| :----- | :----------- |
| 200    | 成功         |
| 403    | 没权限       |
| 500    | 服务器内部错 |
| 630    | 找不到对应数 |
| 801    | 参数不合法   |

# API 说明

## 添加项目下迭代属性

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields/add
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名 | 类型   | 是否必填 | 说明 |
| :----- | :----- | :------- | :--- |
| field  | object | T        | 属性 |

field 对象

| 参数名  | 类型   | 是否必填 | 说明                       |
| :------ | :----- | :------- | :------------------------- |
| uuid    | string | F        | 属性 id,程序生成不需要填写 |
| name    | string | T        | 属性名                     |
| type    | string | T        | 属性类型                   |
| options | array  | F        | 选项                       |

options 对象

| 参数名 | 类型   | 是否必填 | 说明   |
| :----- | :----- | :------- | :----- |
| value  | string | F        | 选项值 |

### 返回参数

| 参数名              | 类型   | 是否必填 | 说明                 |
| :------------------ | :----- | :------- | :------------------- |
| field               | object | T        | 属性                 |
| server_update_stamp | int    | T        | 数据更新时间（微妙） |

field 对象

| 参数名  | 类型   | 是否必填 | 说明             |
| :------ | :----- | :------- | :--------------- |
| uuid    | string | F        | 属性 id 程序生成 |
| name    | string | T        | 属性名           |
| type    | string | T        | 属性类型         |
| options | array  | F        | 选项             |

options 对象

| 参数名 | 类型   | 是否必填 | 说明   |
| :----- | :----- | :------- | :----- |
| value  | string | F        | 选项值 |

### 请求体示例

```json
{
  "field": {
    "name": "optionsName",
    "type": "option",
    "options": [
      {
        "value": "aa"
      },
      {
        "value": "bb"
      },
      {
        "value": "cc"
      }
    ]
  }
}
```

### 返回值示例

```json
{
  "field": {
    "uuid": "GMeL5qUm",
    "name": "optionsName",
    "type": "option",
    "default_value": null,
    "default_value_type": "default",
    "built_in": false,
    "options": [
      {
        "uuid": "85yjp9FH",
        "value": "aa",
        "selected": false
      },
      {
        "uuid": "JEp1hct9",
        "value": "bb",
        "selected": false
      },
      {
        "uuid": "HmVo4twR",
        "value": "cc",
        "selected": false
      }
    ],
    "required": false,
    "can_modify_required": false
  },
  "server_update_stamp": 1648720066672304
}
```

## 修改项目下迭代属性

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/update
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名  | 类型   | 是否必填 | 说明     |
| :------ | :----- | :------- | :------- |
| field   | object | T        | 属性     |
| uuid    | string | T        | 属性 id  |
| name    | string | T        | 属性名   |
| type    | string | T        | 属性类型 |
| options | array  | F        | 选项     |

options 对象

| 参数名 | 类型   | 是否必填 | 说明   |
| :----- | :----- | :------- | :----- |
| value  | string | F        | 选项值 |

### 返回参数列表

| 参数名 | 类型   | 是否必填 | 说明   |
| :----- | :----- | :------- | :----- |
| value  | string | F        | 选项值 |

### 请求体示例

```json
{
  "field": {
    "uuid": "5nknReY2",
    "name": "updatOptionsName",
    "type": "option",
    "options": [
      {
        "uuid": "EfPrwc7C",
        "value": "aa",
        "selected": false
      },
      {
        "uuid": "WnPt1XR8",
        "value": "bb",
        "selected": false
      },
      {
        "uuid": "JBhCLAWF",
        "value": "cc",
        "selected": false
      }
    ]
  }
}
```

### 返回值示例

```json
{
  "server_update_stamp": 1594377519830304
}
```

## 删除项目下迭代属性

删除操作将会一并删除已有迭代的该项属性内容，此操作不可撤销

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/delete
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

无

### 请求体示例

无

### 返回值示例

```json
{
  "server_update_stamp": 1565943793853952
}
```

## 获取项目下迭代属性列表

### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields
```

### HTTP Method

GET

### 是否需要登录

### 调用权限

BrowseProject

### 请求参数

无

### 返回参数列表

| 参数名 | 类型     | 是否必填 | 说明 |
| :----- | :------- | :------- | :--- |
| fields | []object | T        | 属性 |

fields 对象

| 参数名  | 类型   | 是否必填 | 说明     |
| :------ | :----- | :------- | :------- |
| uuid    | string | T        | 属性 id  |
| name    | string | T        | 属性名   |
| type    | string | T        | 属性类型 |
| options | array  | T        | 选项     |

### 请求体示例

无

### 返回值示例

```json
{
  "fields": [
    {
      "uuid": "SY2XZe8H",
      "name": "Name of this sprint",
      "type": "text",
      "options": null
    }
  ]
}
```

## 修改迭代属性值

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_field/:fieldUUID/update
```

### HTTP Method

POST

### 是否需要登录

是

### 调用权限

manage_sprints

### 请求参数

| 参数名      | 类型   | 是否必填 | 说明           |
| :---------- | :----- | :------- | :------------- |
| field_value | object | T        | 只需要传 value |

### 请求参数参考

```json
{
  "field_value": {
    "value": "newValue, and the uuid of this option"
  }
}
```

### 返回值示例

```json
{
  "server_update_stamp": 1594378116861072
}
```
