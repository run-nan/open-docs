# Library

- [testcase model 说明](#testcase-model-说明)
  - [priority 值说明](#priority-值说明)
  - [casetype 说明](#casetype-说明)
  - [用例操作步骤 说明](#用例操作步骤-说明)
- [library model 说明](#library-model-说明)
- [module 说明](#module-说明)
- [API 说明](#api-说明)
  - [1. 添加测试用例](#1-添加测试用例)
  - [2. 修改测试用例](#2-修改测试用例)
  - [3. 删除测试用例](#3-删除测试用例)
  - [4. 获取某个用例库下的用例列表](#4-获取某个用例库下的用例列表)
  - [5. 添加用例库](#5-添加用例库)
  - [6. 修改用例库](#6-修改用例库)
  - [7. 删除用例库](#7-删除用例库)
  - [8. 获取用户有权限查看的用例库列表](#8-获取用户有权限查看的用例库列表)
  - [9. 添加用例库模块](#9-添加用例库模块)
  - [10. 删除用例库模块](#10-删除用例库模块)
  - [11. 修改用例库模块](#11-修改用例库模块)
  - [12. 绑定测试用例到任务](#12-绑定测试用例到任务)
  - [13. 解除测试用例和任务的绑定](#13-解除测试用例和任务的绑定)
  - [14. 按 ID 搜索测试用例](#14-按ID搜索测试用例)
  - [15. 调整功能模块位置](#15-调整功能模块位置)

## testcase model 说明

| 参数名       | 值类型      | 取值范围   | 取值例子 | 说明                                                |
| ------------ | ----------- | ---------- | -------- | --------------------------------------------------- |
| uuid         | string      | len=8      |          | 随机 8 位字符                                       |
| library_uuid | string      |            |          | 用例库 uuid                                         |
| module_uuid  | string      |            |          | 用例直属的模块 uuid                                 |
| path         | string      |            |          | 模块路径(module_uuid-sub_module_uuid-testcase_uuid) |
| name         | string      | len<=1024  |          | 用例名称                                            |
| priority     | string      |            |          | testcase 优先级                                     |
| type         | string      |            |          | 用例类型                                            |
| assign       | string      | len=8      |          | 维护人                                              |
| desc         | string      | len<=65536 |          | 用例描述                                            |
| create_time  | int64       |            |          | 用例创建时间，微秒                                  |
| number       | int         |            |          | 用例编号                                            |
| condition    | string      |            |          | 前置条件                                            |
| steps        | object 数组 |            |          | 用例操作步骤                                        |

tips:testcase 全页面可见性由 team 实体中的 testcase_visibility 控制

### priority 值说明

| 值       | 说明 |
| -------- | ---- |
| PRIOPThh | 最高 |
| PRIOPThi | 高   |
| PRIOPTno | 普通 |
| PRIOPTlo | 低   |
| PRIOPTll | 最低 |

### casetype 说明

| 值          | 说明             |
| ----------- | ---------------- |
| functional  | 功能测试（默认） |
| performance | 性能测试         |
| api         | 接口测试         |
| install     | 安装部署         |
| config      | 配置相关         |
| safety      | 安全相关         |
| other       | 其他             |

## library model 说明

| 参数名                  | 值类型       | 取值范围 | 取值例子   | 说明                    |
| ----------------------- | ------------ | -------- | ---------- | ----------------------- |
| uuid                    | string       | len=8    |            | 随机 8 位字符           |
| name                    | string       | len<=32  |            | 用例名称                |
| create_time             | int64        |          |            | 用例创建时间，微秒      |
| members                 | string array |          |            | 编撰人员 uuids          |
| &emsp;user_domain_type  | string       |          | 用户域类型 |                         |
| &emsp;user_domain_param | string       |          | 用户域参数 |                         |
| modules                 | object array |          |            | 用例库下模块,按深度优先 |
| create_time             | int64        |          |            | 用例创建时间，微秒      |

## module 说明

| 参数名       | 值类型 | 取值范围 | 取值例子 | 说明                                             |
| ------------ | ------ | -------- | -------- | ------------------------------------------------ |
| uuid         | string | len=8    |          | 随机 8 位字符组成                                |
| parent_uuid  | string | len=8    |          | 随机 8 位字符组成,父模块 uuid,传""代表没有父模块 |
| name         | string | len<=32  |          | 模块名称                                         |
| path         | string |          |          | 模块路径(module_uuid-sub_module_uuid)            |
| library_uuid | string |          |          | 模块所属 library                                 |
| create_time  | int64  |          |          | 用例创建时间，微秒                               |
| is_default   | bool   |          |          | true 为无所属模块，false 为用户创建的模块        |

## 用例操作步骤 说明

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明          |
| ------ | ------ | -------- | ------ | -------- | ------------- |
| uuid   | string | len=8    |        |          | 用例步骤 uuid |
| desc   | string |          |        |          | 步骤描述      |
| result | string |          |        |          | 步骤预期结果  |

## API 说明

### 1. 添加测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

JSON

#### 参数列表

| 参数名              | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明             |
| ------------------- | ------ | ---------- | -------- | -------- | ---------------- |
| name                | string | 否         |          |          | 测试用例名称     |
| assign              | string | 否         |          |          | 负责人           |
| priority            | string | 否         |          |          | 优先级           |
| type                | string | 否         |          |          | 类型             |
| module_uuid         | string | 否         |          |          | 模块 UUID        |
| condition           | string | 是         |          |          | 前置条件         |
| library_uuid        | string | 否         |          |          | 用例库 UUID      |
| desc                | string | 是         |          |          | 描述             |
| steps               | step   | 是         |          |          | 操作步骤         |
| related_wiki_page   | array  | 是         |          |          | 关联的 wiki 页面 |
| testcase_case_steps | array  | 是         |          |          | 操作步骤         |
| item_type           | string | 否         |          |          | 类型             |
| testcase_library    | string | 否         |          |          | 所属用例库       |
| testcase_module     | string | 否         |          |          | 所属模块         |
| createTime          | string | 是         |          |          | 创建时间         |

#### 请求体参考

```
{
    "item":{
        "name":"埋得很深的用例",
        "assign":"Pqmud3zh",
        "priority":"EuXiaKfb",
        "type":"DYAmwpym",
        "module_uuid":"TfbK82Pf",
        "condition":"",
        "library_uuid":"E9CnzCJb",
        "desc":"",
        "steps":[],
        "related_wiki_page":[],
        "testcase_case_steps":[],
        "item_type":"testcase_case",
        "testcase_library":"E9CnzCJb",
        "testcase_module":"TfbK82Pf",
        "createTime":1615880000
    }
}
```

#### 返回值参考

```
{
    "item": {
        "assign": "Pqmud3zh",
        "condition": "",
        "create_time": 1620470220,
        "desc": "",
        "item_type": "testcase_case",
        "key": "testcase_case-7fAnWt8y",
        "name": "埋得很深的用例",
        "number": 3655,
        "path": "CLiZNFWL-HzWmz2vg-RmZ6mAWU-TfbK82Pf-7fAnWt8y",
        "testcase_library": "E9CnzCJb",
        "testcase_module": "TfbK82Pf",
        "uuid": "7fAnWt8y"
    }
}
```

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 返回的 errcode 说明

| code | errcode                | 说明                         |
| ---- | ---------------------- | ---------------------------- |
| 403  | LimitExceeded.TestCase | 超过免费版 TestCase 数量限制 |

### 2. 修改测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases/update

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

JSON

#### 参数列表

| 参数名            | 值类型       | 是否可以空 | 取值范围 | 取值例子       | 说明 |
| ----------------- | ------------ | ---------- | -------- | -------------- | ---- |
| cases             | array        | 否         |          | 参考上方 model |      |
| &emsp;uuid        | string       | 否         |          |                |      |
| &emsp;module_uuid | string       | 否         |          |                |      |
| &emsp;name        | string       | 否         |          |                |      |
| &emsp;priority    | string       | 否         |          |                |      |
| &emsp;type        | string       | 否         |          |                |      |
| &emsp;assign      | string       | 否         |          |                |      |
| &emsp;desc        | string       | 是         |          |                |      |
| &emsp;steps       | object array | 是         |          |                |      |
| &emsp;condition   | string       | 是         |          |                |      |

#### 返回 JSON

| 参数名 | 值类型 | 说明                 |
| ------ | ------ | -------------------- |
| cases  | array  | library 下所有 cases |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 3. 删除测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases/delete

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

JSON

#### 参数列表

| 参数名     | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明 |
| ---------- | ------ | ---------- | -------- | -------- | ---- |
| case_uuids | array  | 否         |          |          |      |

#### 返回 JSON

| 参数名 | 值类型 | 说明                 |
| ------ | ------ | -------------------- |
| cases  | array  | library 下所有 cases |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 4. 获取某个用例库下的用例列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases

#### HTTP Method

GET

### 调用权限

manage_library_cases

#### 传值方式

无

#### 返回 JSON

| 参数名 | 值类型 | 说明          |
| ------ | ------ | ------------- |
| cases  | array  | testcase 列表 |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 5. 添加用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries/add

#### HTTP Method

POST

### 调用权限

manage_library

#### 传值方式

JSON

#### 参数列表

| 参数名                        | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明       |
| ----------------------------- | ------ | ---------- | -------- | -------- | ---------- |
| library                       | Object | 否         |          |          |            |
| &emsp;name                    | string | 否         |          |          |            |
| &emsp;members                 | array  | 否         |          |          |            |
| &emsp;&emsp;user_domain_type  | string | 否         |          |          | 用户域类型 |
| &emsp;&emsp;user_domain_param | string | 否         |          |          | 用户域参数 |

#### 返回 JSON

| 参数名  | 值类型 | 说明                      |
| ------- | ------ | ------------------------- |
| library | object | library model，见上方说明 |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 6. 修改用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/update

#### HTTP Method

POST

### 调用权限

manage_library

#### 传值方式

JSON

#### 参数列表

| 参数名                        | 值类型 | 是否可以空 | 取值范围 | 取值例子       | 说明       |
| ----------------------------- | ------ | ---------- | -------- | -------------- | ---------- |
| library                       | object | 否         |          | 参考上方 model |            |
| &emsp;name                    | string | 否         |          |                |            |
| &emsp;uuid                    | string | 否         |          |                |            |
| &emsp;members                 | array  | 否         |          |                |            |
| &emsp;&emsp;user_domain_type  | string | 否         |          |                | 用户域类型 |
| &emsp;&emsp;user_domain_param | string | 否         |          |                | 用户域参数 |

#### 返回 JSON

| 参数名  | 值类型 | 说明                      |
| ------- | ------ | ------------------------- |
| library | object | library model，见上方说明 |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 7. 删除用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/delete

#### HTTP Method

POST

### 调用权限

manage_library 和 manage_library_cases

#### 传值方式

无

#### 返回 JSON

无

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 8. 获取用户有权限查看的用例库列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries

#### HTTP Method

GET

### 调用权限

无，但返回的列表根据 manage_library_cases 权限过滤

#### 传值方式

无

#### 返回 JSON

| 参数名    | 值类型 | 说明               |
| --------- | ------ | ------------------ |
| libraries | array  | library model 列表 |

### 请求体参考

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/BDfDqJU7/testcase/libraries \
  -H 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回值示例

```json
{
  "libraries": [
    {
      "uuid": "21mSiFwp",
      "name": "示例用例库",
      "create_time": 1535539299,
      "members": [
        {
          "user_domain_type": "testcase_administrators",
          "user_domain_param": ""
        },
        {
          "user_domain_type": "everyone",
          "user_domain_param": ""
        }
      ],
      "modules": [
        {
          "uuid": "PtEVHyC4",
          "parent_uuid": "",
          "library_uuid": "21mSiFwp",
          "path": "PtEVHyC4",
          "name": "主模块",
          "create_time": 1535539299,
          "is_default": false,
          "position": 0,
          "name_pinyin": ""
        },
        {
          "uuid": "3GP7YmqC",
          "parent_uuid": "PtEVHyC4",
          "library_uuid": "21mSiFwp",
          "path": "PtEVHyC4-3GP7YmqC",
          "name": "子模块1",
          "create_time": 1535539299,
          "is_default": false,
          "position": 0,
          "name_pinyin": ""
        },
        {
          "uuid": "sSQV8R5s",
          "parent_uuid": "PtEVHyC4",
          "library_uuid": "21mSiFwp",
          "path": "PtEVHyC4-sSQV8R5s",
          "name": "子模块2",
          "create_time": 1535539299,
          "is_default": false,
          "position": 0,
          "name_pinyin": ""
        },
        {
          "uuid": "8ZmFpYxB",
          "parent_uuid": "",
          "library_uuid": "21mSiFwp",
          "path": "8ZmFpYxB",
          "name": "无所属模块",
          "create_time": 1535539299,
          "is_default": true,
          "position": 0,
          "name_pinyin": ""
        }
      ],
      "is_pin": false,
      "field_config_uuid": ""
    }
  ],
  "server_update_stamp": 1548335882522139
}
```

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 9. 添加用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/add

#### HTTP Method

POST

### 调用权限

manage_library

#### 传值方式

JSON

#### 参数列表

| 参数名             | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明                    |
| ------------------ | ------ | ---------- | -------- | -------- | ----------------------- | --- |
| module             | Object | 否         |          |          |                         |
| &emsp;library_uuid | string | 否         |          |          |                         |
| &emsp;parent_uuid  | string | 是         |          |          | 父模块 uuid，没有则传"" |
| &emsp;name         | string | 否         |          |          |                         |     |

#### 返回 JSON

| 参数名 | 值类型 | 说明               |
| ------ | ------ | ------------------ |
| module | object | module，见上方说明 |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 10. 删除用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete

#### HTTP Method

POST

### 调用权限

manage_library

#### 传值方式

JSON

#### 参数列表

| 参数名      | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明 |
| ----------- | ------ | ---------- | -------- | -------- | ---- | --- |
| module_uuid | string | 否         |          |          |      |     |

#### 返回 JSON

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

### 11. 修改用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/update

#### HTTP Method

POST

### 调用权限

manage_library

#### 参数列表

| 参数名     | 值类型 | 是否可以空 | 取值范围 | 取值例子 | 说明 |
| ---------- | ------ | ---------- | -------- | -------- | ---- | --- |
| module     | Object | 否         |          |          |      |
| &emsp;uuid | string | 否         |          |          |      |
| &emsp;name | string | 否         |          |          |      |     |

#### 返回 JSON

| 参数名 | 值类型 | 说明              |
| ------ | ------ | ----------------- |
| module | object | model，见上方说明 |

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |

## 12. 绑定测试用例到任务

绑定测试用例到任务

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/bind_case

### HTTP Method

POST

### 调用权限

同时有任务的 update_tasks 以及用例的 manage_library_cases

### 传值方式

JSON

### 参数列表

| 参数名           | 值类型       | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                                         |
| ---------------- | ------------ | -------- | -------- | ------ | -------- | -------------------------------------------- |
| cases            | array        | F        |          |        |          | 绑定的 case 数组                             |
| task_uuid        | string       | F        | len=16   |        |          | 绑定的任务 uuid                              |
| &emsp;case_uuids | string array | F        | len=8    |        |          | 用例 uuids                                   |
| &emsp;plan_uuid  | string       | T        | len=8    |        |          | 传则代表绑定用例结果，不传则代表绑定用例本身 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| ------ | ------------ |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

无

## 13. 解除测试用例和任务的绑定

解除测试用例和任务的绑定

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/unbind_case

### HTTP Method

POST

### 调用权限

同时有任务的 update_tasks 以及用例的 manage_library_cases

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                                         |
| --------- | ------ | -------- | -------- | ------ | -------- | -------------------------------------------- |
| case_uuid | string | F        | len=8    |        |          | 用例 uuid                                    |
| task_uuid | string | F        | len=16   |        |          | 绑定的任务 uuid                              |
| plan_uuid | string |          | len=8    |        |          | 传则代表绑定用例结果，不传则代表绑定用例本身 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| ------ | ------------ |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

无

## 14. 按 ID 搜索测试用例

按 ID 搜索测试用例

### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/search

### HTTP Method

GET

### 调用权限

无，但返回的列表根据 manage_library_cases 权限过滤

### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                       |
| --------- | ------ | -------- | -------- | ------ | -------- | -------------------------- |
| key       | string | F        |          |        |          | 用例 ID                    |
| plan_uuid | string | F        |          |        |          | 传则代表搜索 plan 下的用例 |

### 返回的 HTTP status code

| 状态码 | 说明         |
| ------ | ------------ |
| 200    | 成功         |
| 400    | 请求结构错误 |
| 401    | 登录信息错误 |
| 403    | 无权限       |
| 500    | 服务器错误   |
| 801    | 参数错误     |

### 返回 JSON

| 参数名 | 值类型 | 说明          |
| ------ | ------ | ------------- |
| cases  | array  | testcase 列表 |

### 15. 调整功能模块位置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/sort

#### HTTP Method

POST

#### 参数列表

| 参数名            | 值类型 | 是否可以空 | 取值范围      | 取值例子 | 说明                    |
| ----------------- | ------ | ---------- | ------------- | -------- | ----------------------- |
| module_uuid       | string | 否         |               |          | 被操作的模块的 uuid     |
| previous_uuid     | string | 否         |               |          | 操作后的上个模块的 uuid |
| previous_relation | string | 否         | brother,child |          | 两个模块间的关系        |

#### 返回 JSON

无

#### 返回的 HTTP status code

| 状态码 | 说明     |
| ------ | -------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 801    | 参数无效 |
| 817    | 不能修改 |
