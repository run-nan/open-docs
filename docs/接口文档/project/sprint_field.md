<!-- TOC depthTo:2 -->
# 迭代属性

- [模型](#模型)
  - [迭代属性](#迭代属性)
  - [迭代属性值](#迭代属性值)
- [API说明](#api说明)
  - [1.添加项目下迭代属性](#1添加项目下迭代属性)
  - [2.修改项目下迭代属性](#2修改项目下迭代属性)
  - [3.删除项目下迭代属性](#3删除项目下迭代属性)
  - [4.获取项目下迭代属性列表](#4获取项目下迭代属性列表)
  - [5.修改迭代属性值](#5修改迭代属性值)
  
## 模型

### 迭代属性

sprint_field

|参数名             | 类型   | 说明    |
|:-----------------|:-------|:-------|
|uuid              | string | 属性id |
|name              | string | 属性名  |
|type              | string | 属性类型|
|options           | array  | 选项    |
|&nbsp;&nbsp;value | string | 选项值  |

### 迭代属性值

sprint_field_value

|参数名      | 类型        | 说明      |
|:-------   |:--------   |:--------  |
|field_uuid | string     | 属性id     |
|name       | string     | 属性名     |
|type       | string     | 属性类型   |
|value      | int/string | 属性值     |

### 属性类型

type

| 类型         | 值类型 | 说明                    |
| :---------- | :----- | :----------------------|
| option      | string | 选项，值是当前选中的选项 u|
| text        | string | 文本                    |
| integer     | int64  | 整数，值 = 实际数值 x 100|
| float       | int64  | 浮点数，值 = 向下取整(实际 x 100000)，小数点后有效位数 5 位|
| date        | int64  | 日期，utc 时间戳，以秒为单|
| time        | int64  | 时间，utc 时间戳，以秒为单|
| user        | string | 团队内成员，值是用户 uuid |
| project         | string | 项目，值是项目 uuid              |
| task            | string | 工作项，值是工作项的uuid         |
| issue_type      |string | issue_type，值issue_type的uuid   |
| task_status     | string | 工作项状态，值是工作项状态的uuid |
| user_list       | array  | 用户列表                         |
| number          | int    | 工作项编号                       |
| multi_line_text  |string | 多行文本                         |
| multi_option    | array  | 多选，值 = 选中的选项uuid数组    |

### 状态码说明

| 状态码  | 说明       |
| :----  | :----------|
| 200    | 成功       |  
| 403    | 没权限      |            
| 500    | 服务器内部错|
| 630    | 找不到对应数|
| 801    | 参数不合法  |

## API说明

### 1.添加项目下迭代属性

#### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields/add
```

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_sprints

#### 请求参数

|参数名                         | 类型   | 是否必填   | 说明                       |
|:-----------------------------|:-------|:-------- |:------- -----------------|
|field                         | object | T        |属性                         |
|&nbsp;&nbsp;uuid              | string | F        |属性id,程序生成不需要填写     |
|&nbsp;&nbsp;name              | string | T        |属性名                     |
|&nbsp;&nbsp;type              | string | T        |属性类型                    |
|&nbsp;&nbsp;options           | array  | F        |选项                       |
|&nbsp;&nbsp;&nbsp;&nbsp;value | string | F        |选项值                     |   

#### 返回参数

|参数名                         | 类型   | 是否必填   | 说明                       |
|:-----------------------------|:-------|:-------- |:------- -----------------|
|field                         | object | T        |属性                         |
|&nbsp;&nbsp;uuid              | string | F        |属性id 程序生成            |
|&nbsp;&nbsp;name              | string | T        |属性名                     |
|&nbsp;&nbsp;type              | string | T        |属性类型                    |
|&nbsp;&nbsp;options           | array  | F        |选项                       |
|&nbsp;&nbsp;&nbsp;&nbsp;value | string | F        |选项值                     |                   
|server_update_stamp           | int    | T       | 数据更新时间（微妙）          |

#### 请求体示例

 ```json
{
	"field": {
		"name": "optionsName",
		"type": "option",
		"options": [{
			"value": "aa"
		}, {
			"value": "bb"
		}, {
			"value": "cc"
		}]
	}
}
```

#### 返回值示例

```json
{
  "field":{
    "uuid":"PqtoiVoY",
    "name":"optionsName",
    "type":"option",
    "default_value":null,
    "default_value_type":"default",
    "built_in":false,
    "options":[
      {
        "uuid":"59KQHFbS",
        "value":"aa",
        "selected":false
      },
      {
        "uuid":"T2uPBdkU",
        "value":"bb",
        "selected":false
      },
      {
        "uuid":"XHARTSeC",
        "value":"cc",
        "selected":false
      }
    ]
  },
  "server_update_stamp":1626677179492944
}
```

### 2.修改项目下迭代属性

#### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/update
```

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_sprints

#### 请求参数

|参数名                         | 类型   | 是否必填   | 说明                       |
|:-----------------------------|:-------|:-------- |:------- -----------------|
|field                         | object | T        |属性                         |
|&nbsp;&nbsp;uuid              | string | T        |属性id                       |
|&nbsp;&nbsp;name              | string | T        |属性名                     |
|&nbsp;&nbsp;type              | string | T        |属性类型 [属性类型 ](./field.md#field_type)                   |
|&nbsp;&nbsp;default_value     | string/int | F        |默认值                     |
|&nbsp;&nbsp;options           | array  | F        |选项                       |
|&nbsp;&nbsp;&nbsp;&nbsp;value | string | F        |选项值                     |   
|&nbsp;&nbsp;&nbsp;&nbsp;uuid | string | F        |选项值                     |

#### 返回参数列表

|参数名                         | 类型   | 是否必填   | 说明                      |
|:-----------------------------|:-------|:-------- |:------- -----------------|
|&nbsp;&nbsp;&nbsp;&nbsp;value | string | F        |选项值                     |   
 
#### 请求体示例

```json
{
	"field": {
		"uuid": "5nknReY2",
		"name": "updatOptionsName",
		"type": "option",
		"options": [{
			"uuid": "EfPrwc7C",
			"value": "aa",
			"selected": false
		}, {
			"uuid": "WnPt1XR8",
			"value": "bb",
			"selected": false
		}, {
			"uuid": "JBhCLAWF",
			"value": "cc",
			"selected": false
		}]
	}
}
```

#### 返回值示例

```json
{
	"server_update_stamp": 1594377519830304
}
```

### 3.删除项目下迭代属性

删除操作将会一并删除已有迭代的该项属性内容，此操作不可撤销

#### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/delete
```

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_sprints

#### 请求参数

无

#### 请求体示例

无

#### 返回值示例 

```json
{
    "server_update_stamp": 1565943793853952
}
```

### 4.获取项目下迭代属性列表

#### URL

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields
```

#### HTTP Method

GET

#### 是否需要登录


#### 调用权限

BrowseProject

#### 请求参数

无

#### 返回参数列表

|参数名                         | 类型   | 是否必填   | 说明                       |
|:-----------------------------|:-------|:-------- |:------- ----------------- |
|fields                        | []object |         |属性                      |
|&nbsp;&nbsp;uuid              | string |         |属性id                      |
|&nbsp;&nbsp;name              | string |         |属性名                      |
|&nbsp;&nbsp;type              | string |        |属性类型 [属性类型 ](./field.md#field_type)                   |
|&nbsp;&nbsp;default_value     | string/int |         |默认值                     |
|&nbsp;&nbsp;built_in     | bool |         |内置                    |
|&nbsp;&nbsp;options           | array  |         |选项                        |

#### 请求体示例

无

#### 返回值示例

```json
{
  "fields": [
    {
      "uuid": "sprint01",
      "name": "迭代名称",
      "type": "text",
      "default_value": "auto",
      "default_value_type": "default",
      "built_in": true,
      "options": null
    }
  ]
}
```

### 5.修改迭代属性值

```
https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_field/:fieldUUID/update
```

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_sprints

#### 请求参数

|参数名       | 类型     | 是否必填 | 说明            |
|:--------   |:--------|:--------|:-----           |
|field_value | object  | T       |只需要传 value     |

#### 请求参数参考

```json
{
	"field_value": {
		"value": "setedValue"
	}
}
```

#### 返回值示例

```json
{
    "server_update_stamp": 1594378116861072
}
```
