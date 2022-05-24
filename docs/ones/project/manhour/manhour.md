<!-- TOC depthTo:3 -->

# 工时

- [manhour](#manhour)
- [登记工时](#登记工时)
- [修改登记工时](#修改登记工时)
- [删除登记工时](#删除登记工时)
- [获取工作项登记工时列表](#获取工作项登记工时列表)
- [编辑预估工时](#编辑预估工时)

## manhour

| 参数名     | 值类型 | 取值范围 | 说明        |
| :--------- | :----- | :------- | :---------- |
| uuid       | string | len=8    | uuid        |
| team_uuid  | string | len=8    | 所属团队 id |
| task_uuid  | string | len=16   | 所属任务 id |
| user_uuid  | string | len=8    | 用户 id     |
| start_time | int    |          | 开始时间(s) |
| hours      | int    |          | 工时 (h)    |
| remark     | string | len<=64  | 备注        |

## HTTP status code 说明

| 状态码 | 说明                                     |
| :----- | :--------------------------------------- |
| 200    | 服务端异常                               |
| 403    | 不是该工时的创建者，无删除权限           |
| 500    | 服务端异常                               |
| 610    | 找不到该任务                             |
| 630    | 找不到该条工时，或者该条工时已是删除状态 |
| 801    | 参数不合法                               |
| 810    | 不是该任务所属项目的成                   |
| 819    | 没有开启模板的工时开关                   |
| 825    | 没有开启工时插件                         |

**_注意_** 在 ONES 中 **_整数值_** = 实际数值 x 100000

- **_例如: 登记工时 1h, hours = 1 \* 100000_**

## ~~登记工时~~ [(已不适用，参考新的方式)](https://ones.ai/project/open-api-doc/graphql/example.html#工时 '工时')

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhours/add

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

| 参数名            | 值类型 | 是否必须 | 取值范围            | 说明                   |
| :---------------- | :----- | :------- | :------------------ | :--------------------- |
| remaining_manhour | int    | 否       | [0, 999900000]      | 等于 null 时表示未设置 |
| start_time        | int    | 是       |                     | 开始时间               |
| hours             | string | 是       | (100000, 999900000] | 工时                   |
| remark            | string | 是       | len<=64             | 备注                   |

### [返回参数列表](#manhour)

### 请求体示例

```json
{
  "start_time": 1591340400,
  "hours": 200000,
  "remark": "登记工时备注"
}
```

### 返回体示例

```json
{
  "uuid": "BCq4DHNh",
  "team_uuid": "BDfDqJU7",
  "task_uuid": "6ZpgEzkkBcfDnnnx",
  "user_uuid": "6ZpgEzkk",
  "start_time": 1591340400,
  "hours": 200000,
  "remark": "登记工时备注"
}
```

### ~~修改登记工时~~ [(已不适用，参考新的方式)](https://ones.ai/project/open-api-doc/graphql/example.html#工时 '工时')

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhour/update

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

| 参数名            | 值类型 | 是否必须 | 取值范围            | 说明                   |
| :---------------- | :----- | :------- | :------------------ | :--------------------- |
| uuid              | string | 是       |                     | 登记工时 uuid          |
| remaining_manhour | int    | 否       | [0, 999900000]      | 等于 null 时表示未设置 |
| start_time        | int    | 是       |                     | 开始时间               |
| hours             | string | 是       | (100000, 999900000] | 工时                   |
| remark            | string | 是       | len<=64             | 备注                   |

### 请求体示例

```json
{
  "uuid": "N9tGpKrm",
  "start_time": 1591344000,
  "hours": 200000,
  "remark": ""
}
```

### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### ~~删除登记工时~~ [(已不适用，参考新的方式)](https://ones.ai/project/open-api-doc/graphql/example.html#工时 '工时')

#### URL

https://your-host-name/project/api/project/team/:teamUUID/manhour/:manhourUUID/delete

#### HTTP Method

Post

#### 传值方式

JSON

#### 参数列表

无

### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### ~~获取工作项登记工时列表~~ [(已不适用，参考新的方式)](https://ones.ai/project/open-api-doc/graphql/example.html#工时 '工时')

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhours/list

#### HTTP Method

GET

#### 传值方式

JSON

#### 参数列表

无

### 返回体示例

```json
{
  "manhours": [
    {
      "uuid": "EPfHav6S",
      "team_uuid": "BDfDqJU7",
      "task_uuid": "6ZpgEzkkBcfDnnnx",
      "user_uuid": "6ZpgEzkk",
      "start_time": 1591329600,
      "hours": 300000,
      "remark": ""
    },
    {
      "uuid": "PSrK8Vb7",
      "team_uuid": "BDfDqJU7",
      "task_uuid": "6ZpgEzkkBcfDnnnx",
      "user_uuid": "6ZpgEzkk",
      "start_time": 1591329600,
      "hours": 200000,
      "remark": ""
    },
    {
      "uuid": "GX1x8xAv",
      "team_uuid": "BDfDqJU7",
      "task_uuid": "6ZpgEzkkBcfDnnnx",
      "user_uuid": "6ZpgEzkk",
      "start_time": 1591329600,
      "hours": 300000,
      "remark": ""
    }
  ]
}
```

## 编辑预估工时

修改工作项的总预估工时

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/assess_manhour/update

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

| 参数名 | 值类型 | 是否必须 | 取值范围       | 说明                   |
| :----- | :----- | :------- | :------------- | :--------------------- |
| value  | int64  | 是       | [0, 999900000] | 等于 null 时表示未设置 |

### 请求体示例

```json
{
  "value": 400000
}
```

### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## 编辑剩余工时

修改工作项的剩余工时

### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/remaining_hour/update

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

| 参数名 | 值类型 | 是否必须 | 取值范围       | 说明                   |
| :----- | :----- | :------- | :------------- | :--------------------- |
| value  | int64  | 是       | [0, 999900000] | 等于 null 时表示未设置 |

### 请求体示例

```json
{
  "value": 400000
}
```

### 返回体示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
