# ONES TestCase Library API

## model 说明

### error

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明             |
| :------ | :----- | :------- | :------- | :--------------- |
| code    | int    |          | 200      | 服务器更新时间戳 |
| errcode | string |          | "OK"     | 错误消息         |
| type    | string |          |          | 错误类型         |

### TestCasePayload

| 参数名       | 值类型                                        | 取值范围   | 取值例子 | 说明                                                |
| ------------ | --------------------------------------------- | ---------- | -------- | --------------------------------------------------- |
| uuid         | string                                        | len=8      |          | 随机 8 位字符                                       |
| library_uuid | string                                        |            |          | 用例库 uuid                                         |
| module_uuid  | string                                        |            |          | 用例直属的模块 uuid                                 |
| path         | string                                        |            |          | 模块路径(module_uuid-sub_module_uuid-testcase_uuid) |
| name         | string                                        | len<=1024  |          | 用例名称                                            |
| priority     | string                                        |            |          | testcase 优先级                                     |
| type         | string                                        |            |          | 用例类型                                            |
| assign       | string                                        | len=8      |          | 维护人                                              |
| desc         | string                                        | len<=65536 |          | 用例描述                                            |
| create_time  | int64                                         |            |          | 用例创建时间，微秒                                  |
| id_key       | string                                        |            |          |                                                     |
| number       | int                                           |            |          | 用例编号                                            |
| id           | string                                        |            |          | 前置条件                                            |
| lib_name     | string                                        |            |          |                                                     |
| condition    | string                                        |            |          | 前置条件                                            |
| steps        | [][testcasesteppayload](#TestCaseStepPayload) |            |          | 用例操作步骤                                        |
| name_pinyin  | string                                        |            |          |                                                     |

### TestCaseStepPayload

| 参数名         | 值类型 | 取值范围 | 取值例子 | 说明      |
| -------------- | ------ | -------- | -------- | --------- |
| uuid           | string | len=8    |          |           |
| case_uuid      | string |          |          | 用例 uuid |
| desc           | string |          |          |           |
| result         | string |          |          |           |
| execute_result | string |          |          |           |
| actual_result  | string |          |          |           |

### TestCaseLibPayload

| 参数名            | 值类型                                            | 取值范围 | 取值例子 | 说明 |
| ----------------- | ------------------------------------------------- | -------- | -------- | ---- |
| uuid              | string                                            | len=8    |          |      |
| name              | string                                            |          |          |      |
| create_time       | int64                                             |          |          |      |
| is_pin            | bool                                              |          |          |      |
| field_config_uuid | string                                            |          |          |      |
| modules           | [][testcasemodulepayload](#TestCaseModulePayload) |          |          |      |

### TestCaseModulePayload

| 参数名       | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------------ | ------ | -------- | -------- | ---- |
| uuid         | string | len=8    |          |      |
| parent_uuid  | string |          |          |      |
| library_uuid | string |          |          |      |
| path         | string |          |          |      |
| name         | string |          |          |      |
| create_time  | int64  |          |          |      |
| is_default   | bool   |          |          |      |
| position     | int64  |          |          |      |
| name_pinyin  | string |          |          |      |

### priority 说明

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

### library model 说明

| 参数名                  | 值类型       | 取值范围 | 取值例子   | 说明                    |
| ----------------------- | ------------ | -------- | ---------- | ----------------------- |
| uuid                    | string       | len=8    |            | 随机 8 位字符           |
| name                    | string       | len<=32  |            | 用例名称                |
| create_time             | int64        |          |            | 用例创建时间，微秒      |
| members                 | []string     |          |            | 编撰人员 uuids          |
| &emsp;user_domain_type  | string       |          | 用户域类型 |                         |
| &emsp;user_domain_param | string       |          | 用户域参数 |                         |
| modules                 | object array |          |            | 用例库下模块,按深度优先 |
| create_time             | int64        |          |            | 用例创建时间，微秒      |

### module 说明

| 参数名       | 值类型 | 取值范围 | 取值例子 | 说明                                             |
| ------------ | ------ | -------- | -------- | ------------------------------------------------ |
| uuid         | string | len=8    |          | 随机 8 位字符组成                                |
| parent_uuid  | string | len=8    |          | 随机 8 位字符组成,父模块 uuid,传""代表没有父模块 |
| name         | string | len<=32  |          | 模块名称                                         |
| path         | string |          |          | 模块路径(module_uuid-sub_module_uuid)            |
| library_uuid | string |          |          | 模块所属 library                                 |
| create_time  | int64  |          |          | 用例创建时间，微秒                               |
| is_default   | bool   |          |          | true 为无所属模块，false 为用户创建的模块        |

### module relation

| 值      | 说明     |
| ------- | -------- |
| brother | 兄弟关系 |
| child   | 父子关系 |

### 用例操作步骤 说明

| 参数名 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明          |
| ------ | ------ | -------- | ------ | -------- | ------------- |
| uuid   | string | len=8    |        |          | 用例步骤 uuid |
| desc   | string |          |        |          | 步骤描述      |
| result | string |          |        |          | 步骤预期结果  |

## API 说明

### 添加测试用例

添加测试用例到用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型              | 是否必须 | 说明 |
| ------ | ------------------- | -------- | ---- |
| item   | TestCaseItemPayload | 是       |      |

TestCaseItemPayload

| 参数名              | 值类型 | 是否必须 | 说明             |
| ------------------- | ------ | -------- | ---------------- |
| name                | string | 是       | 测试用例名称     |
| assign              | string | 是       | 负责人           |
| priority            | string | 是       | 优先级           |
| type                | string | 是       | 类型             |
| module_uuid         | string | 是       | 模块 UUID        |
| condition           | string | 否       | 前置条件         |
| library_uuid        | string | 是       | 用例库 UUID      |
| desc                | string | 否       | 描述             |
| steps               | step   | 否       | 操作步骤         |
| related_wiki_page   | array  | 否       | 关联的 wiki 页面 |
| testcase_case_steps | array  | 否       | 操作步骤         |
| item_type           | string | 是       | 类型             |
| testcase_library    | string | 是       | 所属用例库       |
| testcase_module     | string | 是       | 所属模块         |

#### 返回参数列表

| 参数名           | 值类型 | 说明          |
| :--------------- | :----- | :------------ |
| uuid             | string | 测试用例 uuid |
| key              | string | item key      |
| name             | string | 测试用例名称  |
| assign           | string | 负责人        |
| desc             | string | 描述          |
| condition        | string | 前置条件      |
| path             | string | 模块路径      |
| item_type        | string | 类型          |
| testcase_library | string | 所属用例库    |
| testcase_module  | string | 所属模块      |
| create_time      | int64  | 创建时间      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/items/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"item":{"name":"123","assign":"BWxt3PAW","priority":"6ibNTRBd","type":"LyCk7yci","module_uuid":"JrsKwtoS","condition":"","library_uuid":"G8f4GEWE","desc":"","steps":[],"related_wiki_page":[],"testcase_case_steps":[],"item_type":"testcase_case","testcase_library":"G8f4GEWE","testcase_module":"JrsKwtoS"}}'
```

#### 返回示例

```json
{
  "item": {
    "assign": "BWxt3PAW",
    "condition": "",
    "create_time": 1579424856,
    "desc": "",
    "item_type": "testcase_case",
    "key": "testcase_case-GdmpxB9U",
    "name": "123",
    "path": "JrsKwtoS-GdmpxB9U",
    "testcase_library": "G8f4GEWE",
    "testcase_module": "JrsKwtoS",
    "uuid": "GdmpxB9U"
  }
}
```

### 修改测试用例

修改测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型                                | 是否必须 | 说明 |
| ------ | ------------------------------------- | -------- | ---- |
| cases  | [][testcasepayload](#TestCasePayload) | 是       |      |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/cases/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"cases":[{"uuid":"GdmpxB9U","name":"123","assign":"BWxt3PAW","priority":"6ibNTRBd","type":"LyCk7yci","module_uuid":"JrsKwtoS","condition":"","library_uuid":"G8f4GEWE","desc":"testdesc1","steps":[],"related_wiki_page":[],"testcase_case_steps":[],"item_type":"testcase_case","testcase_library":"G8f4GEWE","testcase_module":"JrsKwtoS"}]}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 删除测试用例

删除测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型     | 是否必须 | 说明             |
| ---------- | ---------- | -------- | ---------------- |
| case_uuids | []string   | 否       |                  |
| all        | bool       | 否       |                  |
| query      | string     | 否       | GraphQL 查询     |
| variables  | OrderedMap | 否       | GraphQL 查询变量 |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/cases/delete' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"case_uuids":["XLELFTJo"]}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取某个用例库下的用例列表

获取用例库下的用例列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/cases

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型                                | 说明       |
| ------------------- | ------------------------------------- | ---------- |
| cases               | [][testcasepayload](#TestCasePayload) |            |
| server_update_stamp | int64                                 | 缓存时间戳 |

#### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/cases' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "cases": [
    {
      "uuid": "GdmpxB9U",
      "library_uuid": "G8f4GEWE",
      "module_uuid": "JrsKwtoS",
      "path": "JrsKwtoS-GdmpxB9U",
      "name": "123",
      "priority": "6ibNTRBd",
      "type": "LyCk7yci",
      "assign": "BWxt3PAW",
      "desc": "testdesc1",
      "create_time": 1570574561,
      "id_key": "T",
      "number": 7,
      "id": "T7",
      "condition": "",
      "steps": [],
      "name_pinyin": "123"
    }
  ],
  "server_update_stamp": 1570575795477187
}
```

### 添加用例库

添加用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 值类型             | 是否必须 | 说明 |
| ------- | ------------------ | -------- | ---- |
| library | TestCaseLibPayload | 是       |      |

#### 返回参数列表

| 参数名              | 值类型             | 说明 |
| ------------------- | ------------------ | ---- |
| library             | TestCaseLibPayload |      |
| server_update_stamp | int64              |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/libraries/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"library":{"name":"lib1","field_config_uuid":"3F4uBj5t"}}'
```

#### 返回示例

```json
{
  "library": {
    "uuid": "S8QpwTxJ",
    "name": "lib1",
    "create_time": 1570576195,
    "modules": [
      {
        "uuid": "4wLytqvF",
        "parent_uuid": "",
        "library_uuid": "S8QpwTxJ",
        "path": "4wLytqvF",
        "name": "无所属模块",
        "create_time": 1570576195,
        "is_default": true,
        "position": 0,
        "name_pinyin": "wu2suo3shu3mo2kuai4"
      }
    ],
    "is_pin": false,
    "field_config_uuid": "3F4uBj5t"
  },
  "server_update_stamp": 1570576195539615
}
```

### 修改用例库

修改用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 值类型             | 是否必须 | 说明 |
| ------- | ------------------ | -------- | ---- |
| library | TestCaseLibPayload | 是       |      |

#### 返回参数列表

| 参数名              | 值类型             | 说明 |
| ------------------- | ------------------ | ---- |
| library             | TestCaseLibPayload |      |
| server_update_stamp | int64              |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/S8QpwTxJ/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"library":{"name":"lib12","field_config_uuid":"3F4uBj5t","uuid":"S8QpwTxJ"}}'
```

#### 返回示例

```json
{
  "library": {
    "uuid": "S8QpwTxJ",
    "name": "lib12",
    "create_time": 0,
    "modules": [
      {
        "uuid": "4wLytqvF",
        "parent_uuid": "",
        "library_uuid": "S8QpwTxJ",
        "path": "4wLytqvF",
        "name": "无所属模块",
        "create_time": 1570576195,
        "is_default": true,
        "position": 0,
        "name_pinyin": ""
      }
    ],
    "is_pin": false,
    "field_config_uuid": "3F4uBj5t"
  },
  "server_update_stamp": 1570576320655156
}
```

### 删除用例库

删除用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/S8QpwTxJ/delete' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 获取用例库列表

获取用户有权限查看的用例库列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型                                      | 说明 |
| ------------------- | ------------------------------------------- | ---- |
| libraries           | [][testcaselibpayload](#TestCaseLibPayload) |      |
| server_update_stamp | int64                                       |      |

#### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/libraries' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "libraries": [
    {
      "uuid": "G8f4GEWE",
      "name": "订单系统",
      "create_time": 1557074706,
      "modules": [
        {
          "uuid": "3Hw9NaF2",
          "parent_uuid": "",
          "library_uuid": "G8f4GEWE",
          "path": "3Hw9NaF2",
          "name": "按功能模块",
          "create_time": 1557074706,
          "is_default": false,
          "position": 100000,
          "name_pinyin": ""
        }
      ],
      "is_pin": false,
      "field_config_uuid": ""
    }
  ],
  "server_update_stamp": 1570576440948387
}
```

### 添加用例库模块

添加用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型                | 是否必须 | 说明 |
| ------ | --------------------- | -------- | ---- |
| module | TestCaseModulePayload | 是       |      |

#### 返回参数列表

| 参数名              | 值类型                | 说明 |
| ------------------- | --------------------- | ---- |
| module              | TestCaseModulePayload |      |
| server_update_stamp | int64                 |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/modules/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"module":{"name":"m1","parent_uuid":""}}'
```

#### 返回示例

```json
{
  "module": {
    "uuid": "YAdd9TdB",
    "parent_uuid": "",
    "library_uuid": "G8f4GEWE",
    "path": "YAdd9TdB",
    "name": "m1",
    "create_time": 1570576692,
    "is_default": false,
    "position": 0,
    "name_pinyin": ""
  },
  "server_update_stamp": 1570576692896874
}
```

### 删除用例库模块

删除用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 值类型 | 是否必须 | 说明 |
| ----------- | ------ | -------- | ---- |
| module_uuid | string | 是       |      |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/modules/delete' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"module_uuid":"YAdd9TdB"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 修改用例库模块

修改用例库模块

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 请求参数列表

| 参数名 | 值类型                | 是否必须 | 说明 |
| ------ | --------------------- | -------- | ---- |
| module | TestCaseModulePayload | 是       |      |

#### 返回参数列表

| 参数名              | 值类型                | 说明 |
| ------------------- | --------------------- | ---- |
| module              | TestCaseModulePayload |      |
| server_update_stamp | int64                 |      |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/modules/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"module":{"name":"m3","uuid":"55sVGwDC"}}'
```

#### 返回示例

```json
{
  "module": {
    "uuid": "55sVGwDC",
    "parent_uuid": "",
    "library_uuid": "G8f4GEWE",
    "path": "55sVGwDC",
    "name": "m3",
    "create_time": 1570576975,
    "is_default": false,
    "position": 0,
    "name_pinyin": ""
  },
  "server_update_stamp": 1570576982067653
}
```

### 绑定测试用例到任务

绑定测试用例或测试用例的执行结果到任务

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/bind_case

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型             | 是否必须 | 说明                 |
| ------ | ------------------ | -------- | -------------------- |
| cases  | []BindCasesPayload | 是       | 批量绑定的 case 数组 |

BindCasesPayload

| 参数名     | 值类型   | 是否必须 | 说明                                         |
| ---------- | -------- | -------- | -------------------------------------------- |
| task_uuid  | string   | 是       | 绑定的任务 uuid                              |
| case_uuids | []string | 是       | 用例 uuids                                   |
| plan_uuid  | string   | 否       | 传则代表绑定用例结果，不传则代表绑定用例本身 |

#### 返回参数列表

| 参数名                          | 值类型       | 说明                          |
| ------------------------------- | ------------ | ----------------------------- |
| success_cases                   | []string     | 成功绑定的用例 uuid           |
| success_tasks                   | []string     | 成功绑定的任务 uuid           |
| not_found_cases                 | []string     | 未找到的用例 uuid             |
| not_found_cases_object          | []SimpleCase | 未找到的用例对象              |
| no_permission_plan_cases        | []string     | 无测试计划浏览权限的用例 uuid |
| no_permission_plan_cases_object | []SimpleCase |                               |
| no_permission_libs              | []string     | 无用例库浏览权限的用例 uuid   |
| no_permission_libs_object       | []SimpleCase |                               |
| no_permission_tasks             | []string     | 无任务浏览权限的任务 uuid     |
| no_permission_tasks_object      | []SimpleCase |                               |

SimpleCase

| 参数名 | 值类型 | 说明          |
| ------ | ------ | ------------- |
| name   | string | 用例名称      |
| id_key | string | 用例 id_key   |
| number | int    | 用例 number   |
| id     | string | id_key+number |
| uuid   | string | 用例 uuid     |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/bind_case' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"cases":[{"task_uuid":"BWxt3PAWbpFhBA23","case_uuids":["3MoRnyP1"],"plan_uuid":"JECeUr6k"}]}'
```

#### 返回示例

```json
{
  "success_cases": ["3MoRnyP1"],
  "success_tasks": ["BWxt3PAWbpFhBA23"],
  "not_found_cases": [],
  "not_found_cases_object": [],
  "no_permission_plan_cases": [],
  "no_permission_plan_cases_object": [],
  "no_permission_libs": [],
  "no_permission_libs_object": [],
  "no_permission_tasks": [],
  "no_permission_tasks_object": []
}
```

### 解除测试用例和任务的绑定

解除测试用例和任务的绑定

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/unbind_case

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型 | 是否必须 | 说明                                         |
| --------- | ------ | -------- | -------------------------------------------- |
| case_uuid | string | 是       | 用例 uuid                                    |
| task_uuid | string | 是       | 绑定的任务 uuid                              |
| plan_uuid | string | 否       | 传则代表绑定用例结果，不传则代表绑定用例本身 |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/unbind_case' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"case_uuid":"3MoRnyP1","task_uuid":"BWxt3PAWbpFhBA23","plan_uuid":"JECeUr6k"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 按 ID 搜索测试用例

按用例 ID 搜索测试用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/search

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型 | 是否必须 | 说明                       |
| --------- | ------ | -------- | -------------------------- |
| key       | string | 是       | 用例 ID                    |
| plan_uuid | string | 否       | 传则代表搜索 plan 下的用例 |

#### 返回参数列表

| 参数名 | 值类型                                | 说明 |
| ------ | ------------------------------------- | ---- |
| cases  | [][testcasepayload](#TestCasePayload) |      |

#### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/search?key=3'\
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "cases": [
    {
      "uuid": "3MoRnyP1",
      "library_uuid": "G8f4GEWE",
      "module_uuid": "JrsKwtoS",
      "path": "JrsKwtoS-3MoRnyP1",
      "name": "test case 1",
      "priority": "6ibNTRBd",
      "type": "LyCk7yci",
      "assign": "BWxt3PAW",
      "desc": "",
      "create_time": 1557164506,
      "id_key": "T",
      "number": 3,
      "id": "T3",
      "lib_name": "订单系统",
      "condition": "",
      "steps": [],
      "name_pinyin": ""
    }
  ]
}
```

### 调整功能模块位置

调整功能模块位置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/sort

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名            | 值类型 | 是否必须 | 说明                            |
| ----------------- | ------ | -------- | ------------------------------- |
| module_uuid       | string | 是       | 被操作的模块的 uuid             |
| previous_uuid     | string | 是       | 操作后的上个模块的 uuid         |
| previous_relation | string | 是       | 两个模块间的关系: brother,child |

#### 返回参数列表

[error](#error)

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/modules/sort' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"module_uuid":"55sVGwDC","previous_uuid":"HNcvXbWH","previous_relation":"child"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
