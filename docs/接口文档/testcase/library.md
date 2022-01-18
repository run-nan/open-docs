# 测试用例库

- 通用说明
   [testcase modul 说明](#testcase modul说明)
- API 说明
  - [获取用例库列表（采用Graphql）](#1.获取用例库列表（采用Graphql）)
  - [2. 添加用例库](#2.添加用例库)
  - [3. 修改用例库](#3.修改用例库)
  - [4. 删除用例库](#4.删除用例库)
  - [5. 获得某个用例库的所有用例（graphql）](#5.获得某个用例库的所有用例（graphql）)
  - [6. 获得某个用例库的功能模块信息（graphql）](#6.获得某个用例库的功能模块信息（graphql）)
  - [7. 添加用例库的功能模块](#7.添加用例库的功能模块)
  - [8. 删除用例库的功能模块](#8.删除用例库的功能模块)
  - [9. 修改用例库的功能模块](#9.修改用例库的功能模块)
  - [10. 绑定测试用例到任务](#10.绑定测试用例到任务)
  - [11. 解除测试用例和任务的绑定](#11.解除测试用例和任务的绑定)
  - [12. 按ID搜索测试用例](#12.按ID搜索测试用例)
  - [13. 排序用例库模块](#13.排序用例库模块)


## testcase modul说明

| 参数名       | 值类型 | 取值范围 | 说明 | 说明                    |
| ------------ | ------ | -------- | ---- | ----------------------- |
| uuid         | string |          |      | 随机 8 位字符           |
| parent_uuid  | string |          |      |                         |
| library_uuid | string |          |      |                         |
| path         | string |          |      |                         |
| name         | string |          |      | 名字                    |
| create_time  | int64  |          |      |                         |
| status       | int    |          |      | 用例库下模块,按深度优先 |
| is_default   | bool   |          |      | 用例创建时间，微秒      |
| position     | int64  |          |      |                         |
| name_pinyin  | string |          |      | 拼音名字                |
| update_time  | int64  |          |      |                         |
| updater      | string |          |      |                         |

### 返回的 HTTP status code

| 状态码 | 说明                                                 |
| ------ | ---------------------------------------------------- |
| 200    | 操作成功                                             |
| 500    | 接口错误                                             |
| 801    | 参数无效                                             |
| 403    | LimitExceeded.TestCase(超过免费版 TestCase 数量限制) |



## API 说明

### 1.获取用例库列表（采用Graphql）

#### URL

```
【POST】https://dev.myones.net/project/master/api/project/team/Jpa4piQQ/items/graphql
```

#### 传值方式

无

#### 参数列表

参考示例

#### json格式body示例

```json
{"query":"query QUERY_LIBRARY_LIST{\n  testcaseLibraries(\n    orderBy:{\n      isPin:DESC\n      namePinyin:ASC\n    }\n  ){\n    uuid,\n    name,\n    isPin,\n    isSample,\n    testcaseCaseCount,\n    testcaseFieldConfig{\n      key,\n      uuid,\n      name\n    }\n  }\n}","variables":{}}
```

#### Graphql格式body示例

```scheme
{
    testcaseLibraries(orderBy:{
        isPin:DESC
        namePinyin:ASC
    }){
        uuid,
        name,
        isPin,
        isSample,
        testcaseCaseCount,
        testcaseFieldConfig{
            key,
            uuid,
            name
        }
    }
}
```


#### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9001/team/Jpa4piQQ/items/graphql' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query QUERY_LIBRARY_LIST{\n  testcaseLibraries(\n    orderBy:{\n      isPin:DESC\n      namePinyin:ASC\n    }\n  ){\n    uuid,\n    name,\n    isPin,\n    isSample,\n    testcaseCaseCount,\n    testcaseFieldConfig{\n      key,\n      uuid,\n      name\n    }\n  }\n}","variables":{}}'
```



#### 返回体示例

```json
{
    "data": {
        "testcaseLibraries": [
            {
                "isPin": false,
                "isSample": false,
                "name": "23日用例库",
                "testcaseCaseCount": 2,
                "testcaseFieldConfig": {
                    "key": "testcase_field_config-VDsVJjqo",
                    "name": "默认配置",
                    "uuid": "VDsVJjqo"
                },
                "uuid": "2zWNa6nS"
            },
            {
                "isPin": false,
                "isSample": true,
                "name": "订单系统",
                "testcaseCaseCount": 2,
                "testcaseFieldConfig": {
                    "key": "testcase_field_config-VDsVJjqo",
                    "name": "默认配置",
                    "uuid": "VDsVJjqo"
                },
                "uuid": "Vigvz2hb"
            }
        ]
    }
}
```



### 2.添加用例库

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries/add
```



#### 传值方式

JSON



#### 参数列表

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------- | ------ | -------- | -------- | ---- |
| library | object |          |          |      |

| 参数名            | 值类型       | 取值范围 | 取值例子   | 说明           |
| ----------------- | ------------ | -------- | ---------- | -------------- |
| name              | string       | len<=32  |            | 用例名称       |
| field_config_uuid | string       |          |            |                |
| members           | string array |          |            | 编撰人员 uuids |
| user_domain_type  | string       |          | 用户域类型 |                |
| user_domain_param | string       |          | 用户域参数 |                |



#### 返回 JSON

| 参数名              | 值类型 | 说明 |
| ------------------- | ------ | ---- |
| library             | object |      |
| server_update_stamp | int64  |      |

| 参数名            | 值类型       | 取值范围 | 取值例子 | 说明                    |
| ----------------- | ------------ | -------- | -------- | ----------------------- |
| uuid              | string       | len=8    |          | 随机 8 位字符           |
| name              | string       | len<=32  |          | 用例名称                |
| create_time       | int64        |          |          | 用例创建时间，微秒      |
| members           | string array |          |          | 编撰人员 uuids          |
| user_domain_type  | string       |          |          | 用户域类型              |
| user_domain_param | string       |          |          | 用户域参数              |
| modules           | object array |          |          | 用例库下模块,按深度优先 |
| field_config_uuid | string       |          |          |                         |
| is_pin            | bool         |          |          |                         |



#### body示例

```json
{
    "library":{
        "name":"23日第一个用例库",
        "members":[
            {
                "user_domain_type":"testcase_administrators",
                "user_domain_param":""
            },
            {
                "user_domain_type":"single_user",
                "user_domain_param":"9uaNjXTJ"
            },
            {
                "user_domain_type":"department",
                "user_domain_param":"U6eXmXCq"
            }
        ],
        "field_config_uuid":"VDsVJjqo"
    }
}
```


#### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9002/team/Jpa4piQQ/testcase/libraries/add' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "library":{
        "name":"23日第一个用例库",
        "members":[
            {
                "user_domain_type":"testcase_administrators",
                "user_domain_param":""
            },
            {
                "user_domain_type":"single_user",
                "user_domain_param":"9uaNjXTJ"
            },
            {
                "user_domain_type":"department",
                "user_domain_param":"U6eXmXCq"
            }
        ],
        "field_config_uuid":"VDsVJjqo"
    }
}'
```



#### 返回体示例

```json
{
    "library":{
        "uuid":"DdnuVf81",
        "name":"23日第一个用例库",
        "create_time":1627024834,
        "members":[
            {
                "user_domain_type":"testcase_administrators",
                "user_domain_param":""
            },
            {
                "user_domain_type":"single_user",
                "user_domain_param":"9uaNjXTJ"
            },
            {
                "user_domain_type":"department",
                "user_domain_param":"U6eXmXCq"
            }
        ],
        "modules":[
            {
                "uuid":"9nw1RYzw",
                "parent_uuid":"",
                "library_uuid":"DdnuVf81",
                "path":"9nw1RYzw",
                "name":"无所属模块",
                "create_time":1627024834,
                "is_default":true,
                "position":0,
                "name_pinyin":"wu2suo3shu3mo2kuai4"
            }
        ],
        "is_pin":false,
        "field_config_uuid":"VDsVJjqo"
    },
    "server_update_stamp":1627024834500880
}


```



### 3.修改用例库

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:library_uuid/update
```



#### 传值方式

JSON



#### 参数列表

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------- | ------ | -------- | -------- | ---- |
| library | object |          |          |      |

| 参数名            | 值类型       | 取值范围 | 取值例子   | 说明           |
| ----------------- | ------------ | -------- | ---------- | -------------- |
| name              | string       | len<=32  |            | 用例名称       |
| field_config_uuid | string       |          |            |                |
| members           | string array |          |            | 编撰人员 uuids |
| user_domain_type  | string       |          | 用户域类型 |                |
| user_domain_param | string       |          | 用户域参数 |                |



#### body示例

```json
{
    "library":{
        "name":"23日第二个用例",
        "members":[
            {
                "user_domain_type":"testcase_administrators",
                "user_domain_param":""
            },
            {
                "user_domain_type":"single_user",
                "user_domain_param":"9uaNjXTJ"
            },
            {
                "user_domain_type":"department",
                "user_domain_param":"U6eXmXCq"
            }
        ],
        "field_config_uuid":"VDsVJjqo"
    }
}
```


#### 返回 JSON

| 参数名              | 值类型 | 说明 |
| ------------------- | ------ | ---- |
| library             | object |      |
| server_update_stamp | int64  |      |

| 参数名            | 值类型       | 取值范围 | 取值例子 | 说明                    |
| ----------------- | ------------ | -------- | -------- | ----------------------- |
| uuid              | string       | len=8    |          | 随机 8 位字符           |
| name              | string       | len<=32  |          | 用例名称                |
| create_time       | int64        |          |          | 用例创建时间，微秒      |
| members           | string array |          |          | 编撰人员 uuids          |
| user_domain_type  | string       |          |          | 用户域类型              |
| user_domain_param | string       |          |          | 用户域参数              |
| modules           | object array |          |          | 用例库下模块,按深度优先 |
| field_config_uuid | string       |          |          |                         |
| is_pin            | bool         |          |          |                         |



#### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9001/team/Jpa4piQQ/testcase/library/DdnuVf81/update' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "library":{
        "name":"23日第二个用例",
        "members":[
            {
                "user_domain_type":"testcase_administrators",
                "user_domain_param":""
            },
            {
                "user_domain_type":"single_user",
                "user_domain_param":"9uaNjXTJ"
            },
            {
                "user_domain_type":"department",
                "user_domain_param":"U6eXmXCq"
            }
        ],
        "field_config_uuid":"VDsVJjqo"
    }
}'
```



#### 返回体示例

```json
{
    "library": {
        "uuid": "DdnuVf81",
        "name": "23日第二个用例",
        "create_time": 0,
        "members": [
            {
                "user_domain_type": "testcase_administrators",
                "user_domain_param": ""
            },
            {
                "user_domain_type": "single_user",
                "user_domain_param": "9uaNjXTJ"
            },
            {
                "user_domain_type": "department",
                "user_domain_param": "U6eXmXCq"
            }
        ],
        "modules": [
            {
                "uuid": "9nw1RYzw",
                "parent_uuid": "",
                "library_uuid": "DdnuVf81",
                "path": "9nw1RYzw",
                "name": "无所属模块",
                "create_time": 1627024834,
                "is_default": true,
                "position": 0,
                "name_pinyin": ""
            }
        ],
        "is_pin": false,
        "field_config_uuid": "VDsVJjqo"
    },
    "server_update_stamp": 1627027664910160
}
```



### 4.删除用例库

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:library_uuid/delete
```



#### 传值方式

无



#### 参数列表

无



#### body示例

无



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:library_uuid/delete' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5'
```



#### 返回体示例

```json
{
    "code":200,
    "errcode":"OK",
    "type":"OK"
}
```



### 5.获得某个用例库的所有用例（graphql）

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/items/graphql
```



#### 传值方式

无



#### 参数列表

无



#### Graphql格式body示例

```scheme
{
    testcaseLibraries(orderBy: {
                    isPin: DESC,
                    namePinyin: ASC
                }
            ){
                uuid,
                name,
                isPin,
                isSample,
                testcaseCaseCount,
                testcaseFieldConfig{
                    key,
                    uuid,
                    name,
                    __typename
                },
                __typename
            }
}
```



#### json格式body示例

```json
{
    "variables":{
    },
    "query":"query QUERY_LIBRARY_LIST {\n  testcaseLibraries(orderBy: {isPin: DESC, namePinyin: ASC}) {\n    uuid\n    name\n    isPin\n    isSample\n    testcaseCaseCount\n    testcaseFieldConfig {\n      key\n      uuid\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"
}
```



#### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9001/team/Jpa4piQQ/items/graphql' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "variables":{
    },
    "query":"query QUERY_LIBRARY_LIST {\n  testcaseLibraries(orderBy: {isPin: DESC, namePinyin: ASC}) {\n    uuid\n    name\n    isPin\n    isSample\n    testcaseCaseCount\n    testcaseFieldConfig {\n      key\n      uuid\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"
}'
```



#### 返回体示例

```json
{
    "data": {
        "testcaseLibraries": [
            {
                "__typename": "TestcaseLibrary",
                "isPin": false,
                "isSample": false,
                "name": "23日用例库",
                "testcaseCaseCount": 2,
                "testcaseFieldConfig": {
                    "__typename": "TestcaseFieldConfig",
                    "key": "testcase_field_config-VDsVJjqo",
                    "name": "默认配置",
                    "uuid": "VDsVJjqo"
                },
                "uuid": "2zWNa6nS"
            },
            {
                "__typename": "TestcaseLibrary",
                "isPin": false,
                "isSample": true,
                "name": "订单系统",
                "testcaseCaseCount": 2,
                "testcaseFieldConfig": {
                    "__typename": "TestcaseFieldConfig",
                    "key": "testcase_field_config-VDsVJjqo",
                    "name": "默认配置",
                    "uuid": "VDsVJjqo"
                },
                "uuid": "Vigvz2hb"
            }
        ]
    }
}
```



### 6.获得某个用例库的功能模块信息（graphql）

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/items/graphql
```



#### 传值方式

无



#### 参数列表

无



#### Graphql格式body示例

```scheme
{
    testcaseModules(filter:{
            testcaseLibrary_in:[
                "Vigvz2hb"
            ]
        },
        groupBy:{
            testcaseLibrary:{}
        },
        orderBy:{
            isDefault:ASC,
            position:ASC
        }
        ){
            uuid,
            name,
            path,
            createTime,
            isDefault,
            position,
            key,
            testcaseCaseCount,
            testcaseLibrary{
                key,
                uuid,
                name,
                testcaseCaseCount
            },
            parent{
                uuid,
                name,
                path,
                createTime,
                isDefault,
                position,
                key
            }
        }
}
```



#### json格式body示例

```json
{
    "query":"query QUERY_MODULES_IN_LIBRARY($moduleFilter:Filter){\n  testcaseModules(\n    filter:$moduleFilter,\n    groupBy:{\n      testcaseLibrary:{}\n    },\n    orderBy: {\n      isDefault: ASC,\n      position: ASC\n    }\n  ){\n    uuid,\n    name,\n    path,\n    createTime,\n    isDefault,\n    position,\n    key,\n    testcaseCaseCount,\n    testcaseLibrary{\n      key,\n      uuid,\n      name,\n      testcaseCaseCount,\n    },\n    parent{\n      uuid,\n      name,\n      path,\n      createTime,\n      isDefault,\n      position,\n      key\n    }\n  }\n}",
    "variables":{
        "moduleFilter":{
            "testcaseLibrary_in":[
                "Vigvz2hb"  //用例库的uuid
            ]
        }
    }
}
```



#### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9001/team/Jpa4piQQ/items/graphql' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query QUERY_MODULES_IN_LIBRARY($moduleFilter:Filter){\n  testcaseModules(\n    filter:$moduleFilter,\n    groupBy:{\n      testcaseLibrary:{}\n    },\n    orderBy: {\n      isDefault: ASC,\n      position: ASC\n    }\n  ){\n    uuid,\n    name,\n    path,\n    createTime,\n    isDefault,\n    position,\n    key,\n    testcaseCaseCount,\n    testcaseLibrary{\n      key,\n      uuid,\n      name,\n      testcaseCaseCount,\n    },\n    parent{\n      uuid,\n      name,\n      path,\n      createTime,\n      isDefault,\n      position,\n      key\n    }\n  }\n}","variables":{"moduleFilter":{"testcaseLibrary_in":["Vigvz2hb"]}}}'
```



#### 返回体示例

```json
{
    "data":{
        "testcaseModules":[
            {
                "createTime":1624865052,
                "isDefault":false,
                "key":"testcase_module-NNWk83Se",
                "name":"按功能模块",
                "parent":{
                    "createTime":null,
                    "isDefault":null,
                    "key":"testcase_module-",
                    "name":null,
                    "path":null,
                    "position":null,
                    "uuid":""
                },
                "path":"NNWk83Se",
                "position":100000,
                "testcaseCaseCount":0,
                "testcaseLibrary":{
                    "key":"testcase_library-Vigvz2hb",
                    "name":"订单系统",
                    "testcaseCaseCount":2,
                    "uuid":"Vigvz2hb"
                },
                "uuid":"NNWk83Se"
            },
            {
                "createTime":1624865052,
                "isDefault":false,
                "key":"testcase_module-Rg4GEss2",
                "name":"消息通知",
                "parent":{
                    "createTime":1624865052,
                    "isDefault":false,
                    "key":"testcase_module-NNWk83Se",
                    "name":"按功能模块",
                    "path":"NNWk83Se",
                    "position":100000,
                    "uuid":"NNWk83Se"
                },
                "path":"NNWk83Se-Rg4GEss2",
                "position":100000,
                "testcaseCaseCount":0,
                "testcaseLibrary":{
                    "key":"testcase_library-Vigvz2hb",
                    "name":"订单系统",
                    "testcaseCaseCount":2,
                    "uuid":"Vigvz2hb"
                },
                "uuid":"Rg4GEss2"
            }
        ]
    }
}
```



### 7.添加用例库的功能模块

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries/modules/add
```



#### 传值方式

JSON



#### 参数列表

| 参数名 | 值类型 | 取值范围 | 取值例子 | 说明 |
| ------ | ------ | -------- | -------- | ---- |
| module | object |          |          |      |

| 参数名      | 值类型 | 是否必填 | 取值例子 | 说明             |
| ----------- | ------ | -------- | -------- | ---------------- |
| name        | string | T        |          | 名称             |
| parent_uuid | string | F        |          | 父功能模块的uuid |



#### body示例

```json
{
    "module":{
        "name":"新功能模块",
        "parent_uuid":""
    }
}
```
 

#### 返回 JSON

| 参数名              | 值类型 | 说明 |
| ------------------- | ------ | ---- |
| module              | object |      |
| server_update_stamp | int64  |      |

| 参数名       | 值类型 | 取值范围 | 取值例子 | 说明               |
| ------------ | ------ | -------- | -------- | ------------------ |
| uuid         | string | len=8    |          | 随机 8 位字符      |
| name         | string |          |          | 名称               |
| create_time  | int64  |          |          | 用例创建时间，微秒 |
| name_pinyin  | string |          |          | 名称拼音           |
| library_uuid | string |          |          | 用例库uuid         |
| parent_uuid  | string |          |          | 父的功能模块的uuid |
| position     | int    |          |          | 位置               |
| path         | string |          |          |                    |



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/libraries/modules/add' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "module":{
        "name":"新功能模块",
        "parent_uuid":""
    }
}'
```



#### 返回体示例

```json
{
    "module": {
        "uuid": "HT3ko9cj",
        "parent_uuid": "",
        "library_uuid": "Vigvz2hb",
        "path": "HT3ko9cj",
        "name": "新功能模块",
        "create_time": 1627035399,
        "is_default": false,
        "position": 0,
        "name_pinyin": ""
    },
    "server_update_stamp": 1627035399653808
}
```



### 8.删除用例库的功能模块

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete
```



#### 传值方式

JSON



#### 参数列表

| 参数名      | 值类型 | 取值范围 | 取值例子         | 说明 |
| ----------- | ------ | -------- | ---------------- | ---- |
| module_uuid | string |          | 用例库功能的uuid |      |



#### body示例

```json
{
    "module_uuid":"HT3ko9cj"
}
```



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "module_uuid":"HT3ko9cj"
}'
```



#### 返回体示例

```json
{
    "code":200,
    "errcode":"OK",
    "type":"OK"
}
```



### 9.修改用例库的功能模块

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete
```



#### 传值方式

JSON



#### 参数列表

| 参数名 | 值类型 | 是否必填 | 取值范围 | 取值例子 | 说明                 |
| ------ | ------ | -------- | -------- | -------- | -------------------- |
| module | Object | T        |          |          |                      |
| uuid   | string | T        |          |          | 用例库功能模块的uuid |
| name   | string | T        |          |          | 名称                 |

#### body示例

```json
{
    "module":{
        "name":"修改名字",
        "uuid":"DejJVEnz"
    }
}
```



#### 返回 JSON

| 参数名              | 值类型 | 说明 |
| ------------------- | ------ | ---- |
| module              | object |      |
| server_update_stamp | int64  |      |



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/delete' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "module":{
        "name":"修改名字",
        "uuid":"DejJVEnz"
    }
}'
```



#### 返回体示例

```json
{
    "module":{
        "uuid":"DejJVEnz",
        "parent_uuid":"",
        "library_uuid":"Vigvz2hb",
        "path":"DejJVEnz",
        "name":"修改名字",
        "create_time":1627034740,
        "is_default":false,
        "position":0,
        "name_pinyin":""
    },
    "server_update_stamp":1627265035455616
}
```



### 10.绑定测试用例到任务

绑定测试用例到任务

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/bind_case
```



#### 传值方式

JSON



#### 参数列表

| 参数名     | 值类型       | 允许空值 | 取值范围 | 默认值 | 取值例子 | 说明                                         |
| ---------- | ------------ | -------- | -------- | ------ | -------- | -------------------------------------------- |
| cases      | array        | F        |          |        |          | 绑定的 case 数组                             |
| task_uuid  | string       | F        | len=16   |        |          | 绑定的任务 uuid                              |
| case_uuids | string array | F        | len=8    |        |          | 用例 uuids                                   |
| plan_uuid  | string       | T        | len=8    |        |          | 传则代表绑定用例结果，不传则代表绑定用例本身 |



#### body示例

```json
{
    "cases":[
        {
            "task_uuid":"9uaNjXTJIuJANnIl",
            "case_uuids":[
                "ErKK2TLk",
                "5BQ1zLM1"
            ]
        }
    ]
}
```
 

#### 返回 JSON

| 参数名                          | 值类型       | 说明 |
| ------------------------------- | ------------ | ---- |
| success_cases                   | string array |      |
| success_tasks                   | string array |      |
| not_found_cases                 | string array |      |
| not_found_cases_object          | string array |      |
| no_permission_plan_cases        | string array |      |
| no_permission_plan_cases_object | string array |      |
| no_permission_libs              | string array |      |
| no_permission_libs_object       | string array |      |
| no_permission_tasks             | string array |      |



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/bind_case' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cases":[
        {
            "task_uuid":"9uaNjXTJIuJANnIl",
            "case_uuids":[
                "ErKK2TLk",
                "5BQ1zLM1"
            ]
        }
    ]
}'
```



#### 返回体示例

```json
{
    "success_cases":[
        "ErKK2TLk",
        "5BQ1zLM1"
    ],
    "success_tasks":[
        "9uaNjXTJIuJANnIl"
    ],
    "not_found_cases":[

    ],
    "not_found_cases_object":[

    ],
    "no_permission_plan_cases":[

    ],
    "no_permission_plan_cases_object":[

    ],
    "no_permission_libs":[

    ],
    "no_permission_libs_object":[

    ],
    "no_permission_tasks":[

    ]
}
```



### 11.解除测试用例和任务的绑定

解除测试用例和任务的绑定

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/unbind_case
```



#### 传值方式

JSON



#### 参数列表

| 参数名    | 值类型 | 是否必填 | 取值范围 | 默认值 | 取值例子 | 说明                                         |
| --------- | ------ | -------- | -------- | ------ | -------- | -------------------------------------------- |
| case_uuid | string | T        | len=8    |        |          | 用例 uuid                                    |
| task_uuid | string | T        | len=16   |        |          | 绑定的任务 uuid                              |
| plan_uuid | string |          | len=8    |        |          | 传则代表绑定用例结果，不传则代表绑定用例本身 |



##### body示例

```json
{
    "case_uuid":"ErKK2TLk",
    "task_uuid":"9uaNjXTJIuJANnIl"
}
```

#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/unbind_case' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "case_uuid":"ErKK2TLk",
    "task_uuid":"9uaNjXTJIuJANnIl"
}'
```



#### 返回体示例

```json
{
    "code":200,
    "errcode":"OK",
    "type":"OK"
}
```



### 12.按 ID 搜索测试用例

#### URL

```
【GET】https://your-host-name/project/api/project/team/:teamUUID/testcase/search
```



#### 传值方式

URL prams



#### 参数列表

| 参数名    | 值类型 | 是否必填 | 取值范围 | 默认值 | 取值例子 | 说明                       |
| --------- | ------ | -------- | -------- | ------ | -------- | -------------------------- |
| key       | string | T        |          |        |          | 用例 ID                    |
| plan_uuid | string | F        |          |        |          | 传则代表搜索 plan 下的用例 |



#### body示例

无



#### 请求体示例

```curl
curl --location --request GET 'https://your-host-name/project/api/project/team/:teamUUID/testcase/search?key=4&plan_uuid=S8q1kCbt' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5'
```



#### 返回体示例

```json
{
    "cases": [
        {
            "uuid": "5BQ1zLM1",
            "library_uuid": "2zWNa6nS",
            "module_uuid": "AUwY5crU",
            "path": "AUwY5crU-5BQ1zLM1",
            "name": "23日第二个用例",
            "priority": "8R2FErfu",
            "type": "KFzDaHGL",
            "assign": "9uaNjXTJ",
            "desc": "<p>备注，正文</p>\n",
            "create_time": 1627021575,
            "number": 4,
            "lib_name": "23日用例库",
            "condition": "",
            "steps": [
                {
                    "uuid": "VJmWKCR8",
                    "case_uuid": "5BQ1zLM1",
                    "desc": "步骤1",
                    "result": "预期结果1",
                    "execute_result": "",
                    "actual_result": ""
                },
                {
                    "uuid": "QDtKSjQM",
                    "case_uuid": "5BQ1zLM1",
                    "desc": "步骤2",
                    "result": "预期结果2",
                    "execute_result": "",
                    "actual_result": ""
                },
                {
                    "uuid": "M9p5K7Lv",
                    "case_uuid": "5BQ1zLM1",
                    "desc": "步骤3",
                    "result": "预期结果3",
                    "execute_result": "",
                    "actual_result": ""
                }
            ],
            "name_pinyin": ""
        }
    ]
}
```



### 13.排序用例库模块

#### URL

```
【POST】https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/sort
```



#### 传值方式

Json



#### 参数列表

| 参数名            | 值类型 | 是否可以空 | 取值范围      | 取值例子 | 说明                    |
| ----------------- | ------ | ---------- | ------------- | -------- | ----------------------- |
| module_uuid       | string | 否         |               |          | 被操作的模块的 uuid     |
| previous_uuid     | string | 否         |               |          | 操作后的上个模块的 uuid |
| previous_relation | string | 否         | brother,child |          | 两个模块间的关系        |



#### body示例

```json
{
    "module_uuid":"QCdmNhMZ",
    "previous_uuid":"7V8CsVdL",
    "previous_relation":"child"
}
```



#### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/modules/sort' \
--header 'Ones-User-ID: 9uaNjXTJ' \
--header 'Ones-Auth-Token: xSFI8URBUz77e85gr6xICCl9syHnJMxIpgmPV6pPc70JsTFMn3wmS5x3h4HksIL5' \
--header 'Content-Type: application/json' \
--data-raw '{
    "module_uuid":"QCdmNhMZ",
    "previous_uuid":"7V8CsVdL",
    "previous_relation":"child"
}'
```



#### 返回体示例

```json
{
    "code":200,
    "errcode":"OK",
    "type":"OK"
}
```

