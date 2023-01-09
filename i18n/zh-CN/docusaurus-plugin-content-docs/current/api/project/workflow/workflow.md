<!-- TOC depthTo:2 withLinks:true -->

## 目录

- [通用说明](#通用说明)
  - [工作流步骤](#工作流步骤)
  - [触发器和验证条件](#触发器和验证条件)
  - [布尔运算符](#布尔运算符)
  - [后置动作](#后置动作)
  - [步骤属性](#步骤属性)
- [API 说明](#api-说明)
  - [获取团队工作流列表](#获取团队工作流列表)
  - [获取工作项对应工作流状态](#获取工作项对应工作流状态)
  - [修改工作流](#修改工作流)
  - [对任务执行工作流](#对任务执行工作流)

<!-- /TOC -->

## 通用说明

### 工作流步骤

transition

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                  |
| :---------------- | :----- | :------- | :------- | :------------------------------------ |
| uuid              | string | F        | len=8    | transition uuid                       |
| project_uuid      | string | F        | len=16   | 项目 uuid                             |
| issue_type_uuid   | string | F        | len=8    | 任务类型 uuid                         |
| start_status_uuid | string | F        | len=8    | 起始任务状态 uuid                     |
| end_status_uuid   | string | F        | len=8    | 结束任务状态 uuid                     |
| name              | string | T        | len<64   | 名称                                  |
| trigger           | object | T        |          | 触发器，详见下方 trigger 说明         |
| condition         | object | T        |          | 验证条件，详见下方 condition 说明     |
| post_function     | object | T        |          | 后置动作，详见下方 post_function 说明 |
| fields            | array  | T        |          | 步骤属性，详见下方 fields 说明        |
| position          | int64  | T        |          | 权限位置                              |

### 触发器和验证条件

trigger & condition

```json
{
  "trigger": {
    "should": [
      {
        "commit_created": {
          "repo": "https://github.com/BangWork/ones-ai-web"
        }
      },
      {
        "branch_created": {
          "repo": "https://github.com/BangWork/ones-ai-web"
        }
      }
    ]
  },
  "condition": {
    "must": [
      {
        "in_user_domains": {
          "user_domains": [
            {
              "user_domain_type": "group",
              "user_domain_param": "876gdkut"
            }
          ]
        }
      }
    ]
  }
}
```

#### 布尔运算符

布尔运算符里面可以嵌套其它运算符或者条件。
另外，trigger 和 condition 内必须有且只能有一个根布尔运算符，嵌套的表达式不能超过 5 层

| 运算符   | 能否嵌套 | 说明                                             |
| :------- | :------- | :----------------------------------------------- |
| must     | T        | and 运算，当数组内的所有条件都满足时为 true      |
| should   | T        | or 运算，当数组内任意一个条件满足时为 true       |
| must_not | T        | and-not 运算，当数组内任意一个条件满足时为 false |

#### condition 可以使用的条件

1. 操作者是否在用户域中（in_user_domains）

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明                           |
| :----------- | :----- | :------- | :------- | :----------------------------- |
| user_domains | array  | F        |          | 用户域列表，具体结构见下方表格 |

user_domains 结构

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明       |
| :---------------- | :----- | :------- | :------- | :--------- |
| user_domain_type  | string | F        |          | 用户域类型 |
| user_domain_param | string | F        |          | 用户域参数 |

### 后置动作

post_function

```json
{
  "post_function": [
    {
      "update_field_value": {
        "field_uuid": "field013",
        "value": 1503975977
      }
    },
    {
      "update_field_value": {
        "field_uuid": "XQqBAfPj",
        "value": "A6bURA4T"
      }
    },
    {
      "update_field_value": {
        "field_uuid": "field004",
        "variable": "self"
      }
    },
    {
      "run_script": {
        "uuid": "script01",
        "name": "script 01",
        "params": [
          {
            "uuid": "field001",
            "name": "callback url",
            "type": "string",
            "value": "ones.com"
          },
          {
            "uuid": "field002",
            "name": "success status",
            "type": "status",
            "value": "A6bURA4T"
          },
          {
            "uuid": "field003",
            "name": "fail status",
            "type": "status",
            "value": "saxURA4T"
          }
        ]
      }
    }
  ]
}
```

#### 后置动作列表

1. 修改任务属性（update_field_value）

| 参数名     | 值类型     | 允许空值 | 说明                                                                                                     |
| :--------- | :--------- | :------- | :------------------------------------------------------------------------------------------------------- |
| field_uuid | string     | F        | 属性 uuid                                                                                                |
| type       | int        | T        | 属性 field_uuid 的类型                                                                                   |
| value      | int,string | T        | 属性值                                                                                                   |
| value_type | int        | T        | 值类型（普通：0，任务类型属性：1, 迭代属性：2, 项目属性：3, testcase 属性: 4), 目前只有 【任务类型属性】 |
| \*variable | string     | T        | 变量名，可以将属性值设为某个变量，比如操作者自己。本期暂不支持                                           |

value_type 默认值为 0

当大于 0 时，value 为特殊的 uuid，他可能是从其他地方读取的数据

1. value_type 为 0 时，value 保持原有逻辑
2. value_type 为 1,2,3,4 时，则 value 的值则是存在其他地方的属性 uuid 的值

3. 执行脚本（run_script）

| 参数名 | 值类型 | 允许空值 | 说明      |
| :----- | :----- | :------- | :-------- |
| uuid   | string | F        | 脚本 uuid |
| params | object | F        | 参数      |

### 步骤属性

fields

| 参数名        | 值类型     | 允许空值 | 说明                              |
| :------------ | :--------- | :------- | :-------------------------------- |
| field_uuid    | string     | F        | 属性 uuid                         |
| default_value | int,string | T        | 默认值，如不需要默认值，则传 null |
| required      | bool       | F        | 是否必填                          |

```json
{
  "fields": [
    {
      "field_uuid": "field004",
      "default_value": null, // Non-text attributes, the rest will be passed as null
      "required": false
    },
    {
      "field_uuid": "field016",
      "default_value": "", // Text attribute, no default value can be passed ""
      "required": false
    }
  ]
}
```

步骤属性可以使用任务属性 uuid 作为 field_uuid，但不包含以下属性

| 属性 id  | 说明        |
| :------- | :---------- |
| field001 | 任务描述    |
| field003 | 任务创建者  |
| field005 | 任务状态    |
| field006 | 所属项目    |
| field007 | 任务类型    |
| field008 | 任务关注者  |
| field009 | 创建时间    |
| field010 | 更新时间    |
| field014 | 父任务 UUID |
| field015 | 任务 ID     |
| field017 | 状态类型    |
| field019 | 已登记工时  |
| field020 | 剩余工时    |

除任务属性外，还有额外的三个特殊属性

| 属性 id     | can_set_required | can_delete | can_set_default_value | 说明 |
| :---------- | :--------------- | :--------- | :-------------------- | :--- |
| tf-comment  | T                | F          | T                     | 评论 |
| tf-manhour  | T                | T          | F                     | 工时 |
| tf-resource | T                | T          | F                     | 文件 |

## API 说明

### 获取团队工作流列表

列出当前团队所有工作流状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/transitions

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

无

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                                        |
| :------------------ | :----- | :------- | :------- | :------------------------------------------ |
| transitions         | array  | F        |          | transition 列表，参考顶端的 transition 模型 |
| server_update_stamp | int64  | F        |          | transition 类型的数据更新时间               |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/transitions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "transitions": [
    {
      "uuid": "ERTwiy99",
      "project_uuid": "DU6krHBNJEEeoG8M",
      "issue_type_uuid": "BivBjw7n",
      "start_status_uuid": "51ufBBFm",
      "end_status_uuid": "PLPLfNYH",
      "name": "reactivation",
      "position": 0,
      "trigger": null,
      "condition": null,
      "post_function": [],
      "fields": [
        {
          "field_uuid": "tf-comment",
          "default_value": "",
          "required": false,
          "type": -1,
          "can_set_required": true,
          "can_delete": false,
          "can_set_default_value": true
        }
      ]
    }
  ],
  "server_update_stamp": 1566187581207696
}
```

### 获取工作项对应工作流状态

查询对应工作项的工作流状态

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/transitions

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

无

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |
| taskUUID | string | F        | 工作项 UUID   |

#### 返回参数列表

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明                         |
| :---------- | :----- | :------- | :------- | :--------------------------- |
| transitions | array  | F        |          | 步骤列表，具体结构见下方表格 |

transitions 结构

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明              |
| :---------------- | :----- | :------- | :------- | :---------------- |
| uuid              | string | F        |          | transition uuid   |
| name              | string | F        |          | 名称              |
| start_status_uuid | string | F        | len=8    | 起始任务状态 uuid |
| end_status_uuid   | string | F        | len=8    | 结束任务状态 uuid |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/PRZy8efJ3woCroT8/transitions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "transitions": [
    {
      "uuid": "DqWBk1sZ",
      "name": "start development",
      "start_status_uuid": "MZQu4VaM",
      "end_status_uuid": "HdMKu3yA"
    },
    {
      "uuid": "A6ZkuNFf",
      "name": "close requirement",
      "start_status_uuid": "MZQu4VaM",
      "end_status_uuid": "FqGfP5Lu"
    }
  ]
}
```

### 修改工作流

修改一个 transition

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transition/:transitionUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

manage_project

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型 | 允许空值 | 取值范围 | 说明                                                                     |
| :--------- | :----- | :------- | :------- | :----------------------------------------------------------------------- |
| transition | object | F        |          | 参考顶端的 transition 模型，但不需要提供 project_uuid 和 issue_type_uuid |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :------------------ | :----- | :------- | :------- | :---------------------------- |
| transition          | object | F        |          | 参考顶端的 transition 模型    |
| server_update_stamp | int64  | F        |          | transition 类型的数据更新时间 |

#### 请求示例

```curl
curl -X POST \
 https://your-host-name//project/api/project/team/14ZuYn5s/project/8m8X18wvKho6YOVv/issue_type/SRMtFidW/transition/EqucrZNi/update \
  -H 'Content-Type: application/json' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "transition": {
        "post_function": [
            {
                "run_script": {
                    "uuid": "add_manhour",
                    "name": "auto add remain manhour",
                    "params": []
                }
            }
        ]
    }
}'
```

#### 返回示例

```json
{
  "transition": {
    "uuid": "EqucrZNi",
    "project_uuid": "8m8X18wvKho6YOVv",
    "issue_type_uuid": "SRMtFidW",
    "start_status_uuid": "EycE51RF",
    "end_status_uuid": "USDYT4D3",
    "name": "regression pass",
    "position": 4,
    "trigger": null,
    "condition": null,
    "post_function": [
      {
        "run_script": {
          "name": "auto add remain manhour",
          "params": [],
          "uuid": "add_manhour"
        }
      }
    ],
    "fields": [
      {
        "field_uuid": "tf-comment",
        "default_value": "",
        "type": null,
        "required": false
      }
    ]
  },
  "server_update_stamp": 1576725042685040
}
```

### 对任务执行工作流

对任务执行工作流，即修改工作项状态。如果 transition 内包含 post_function，
则当 post_function 异步执行完毕后会发送一条刷新推送，格式详见[消息文档](../message/message.md)

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/new_transit

#### 是否需要登录

是

#### 调用权限

transit_tasks

#### HTTP Method

POST

#### 传值方式

JSON

#### 请求参数列表

URL

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |
| taskUUID | string | F        | 工作项 UUID   |

Body

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明                          |
| :-------------- | :----- | :------- | :------- | :---------------------------- |
| transition_uuid | string | F        |          | 需要执行的 transition 的 uuid |

#### 返回参数列表

无

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNNKSnnHNj/new_transit \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"transition_uuid":"7rPd2Qyi"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
