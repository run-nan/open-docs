# ONES Project Role API

- [通用说明](#通用说明)
  - [规则](#规则)
  - [角色](#角色)
  - [角色配置](#角色配置)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [创建角色](#创建角色)
  - [修改角色](#修改角色)
  - [删除角色](#删除角色)
  - [获取角色列表](#获取角色列表)
  - [添加角色配置](#添加角色配置)
  - [删除角色配置](#删除角色配置)
  - [获取角色配置列表](#获取角色配置列表)
  - [在项目角色下添加成员](#在项目角色下添加成员)
  - [在项目角色下移除成员](#在项目角色下移除成员)
  - [替换项目下的角色成员](#替换项目下的角色成员)
  - [获取项目下的角色成员](#获取项目下的角色成员)

## 通用说明

### 规则

| 标识                | 说明                                               |
| :------------------ | :------------------------------------------------- |
| len                 | 表示字段限制长度，单位：character，比如 uuid,len=8 |
| create_time         | 表示创建时间，单位：秒                             |
| server_update_stamp | 表示数据更新时间，单位：微秒                       |

### 角色

| 参数名            | 值类型 | 允许空值 | 取值范围             | 说明                                               |
| :---------------- | :----- | :------- | :------------------- | :------------------------------------------------- |
| uuid              | string | F        | len=8                | 角色 uuid                                          |
| team_uuid         | string | F        | len=8                | 团队 uuid                                          |
| name              | string | F        | len > 0 && len <= 24 | 角色名称                                           |
| built_in          | bool   | F        |                      | 是否系统内置角色，内置角色无法删除                 |
| is_project_member | bool   | T        |                      | 是否项目成员角色                                   |
| projects          | array  | T        |                      | 目前在使用这个角色的项目，临时结果，不应该持久存储 |
| uuid              | string | F        |                      | 项目 uuid                                          |
| name              | string | F        |                      | 项目当前的名称                                     |

### 角色配置

- 角色配置的有无决定项目下角色的有无，即添加一条角色配置意味着在项目下添加这个角色，删除一条角色配置意味着在项目下删除这个角色

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明      |
| :----------- | :----- | :------- | :------- | :-------- |
| project_uuid | string | F        | len=16   | 项目 uuid |
| role_uuid    | string | F        | len=8    | 角色 uuid |
| create_time  | int    | F        |          | 创建时间  |

### 状态码说明

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数格式错误     |
| 401    | 用户名或者密码不正确 |
| 801    | 无效参数             |
| 802    | 缺失 token（凭证）   |
| 813    | 账户过期             |
| 500    | 服务器内部错误       |
| 630    | 未注册               |
| 814    | 无团队用户           |

## API 说明

### 创建角色

创建一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/roles/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明                                      |
| :----- | :----- | :------- | :------- | :---------------------------------------- |
| role   | object | F        |          | 参考顶端的角色模型，但不需要提供角色 uuid |

role 对象

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明           |
| :----- | :----- | :------- | :------- | :------------- |
| name   | string | F        |          | 角色名称：管理 |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明               |
| :------------------ | :----- | :------- | :------- | :----------------- |
| role                | object | F        |          | 参考顶端的角色模型 |
| server_update_stamp | int    | F        |          | 数据更新时间：微秒 |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/roles/add \
  -H 'Content-Type: application/json' \
  -d '{
      "role":{
        "name":"部门经理"
      }
    }'
```

#### 返回示例

```json
{
  "role": {
    "uuid": "WivAvG2x",
    "name": "部门经理",
    "name_pinyin": "bu4men2jing1li3",
    "built_in": false,
    "is_project_member": false,
    "create_time": 1669615615
  },
  "server_update_stamp": 1669615615272513
}
```

### 修改角色

修改一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/role/:roleUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明                                      |
| :----- | :----- | :------- | :------- | :---------------------------------------- |
| role   | object | F        |          | 参考顶端的角色模型，但不需要提供角色 uuid |

role 对象

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明              |
| :----- | :----- | :------- | :------- | :---------------- |
| name   | string | F        |          | 角色名称:部门经理 |
| uuid   | string | F        |          | 角色标识 uuid     |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明               |
| :------------------ | :----- | :------- | :------- | :----------------- |
| role                | object | F        |          | 参考顶端的角色模型 |
| server_update_stamp | int    | F        |          | 数据更新时间：微秒 |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/role/5teYvt1n/update \
  -H 'Content-Type: application/json' \
  -d '{
      "role":{
        "name":"部门经理",
        "uuid":"5teYvt1n"
      }
    }'
```

#### 返回示例

```json
{
  "role": {
    "uuid": "WivAvG2x",
    "name": "部门经理",
    "name_pinyin": "bu4men2jing1li3",
    "built_in": false,
    "is_project_member": false,
    "create_time": 1669615615
  },
  "server_update_stamp": 1669615615272513
}
```

### 删除角色

删除一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/role/:roleUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明              |
| :------------------ | :----- | :------- | :------- | :---------------- |
| server_update_stamp | int    | F        |          | 数据更新时间 微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/role/WivAvG2x/delete \
  -H 'Content-Type: application/json' \
  -d '{}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1669617898749973
}
```

### 获取角色列表

列出当前团队下的所有角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/stamps/data

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----- | :----- | :------- | :------- | :------- |
| role   | object | F        |          | 角色对象 |

#### 返回参数列表

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明         |
| :----- | :----- | :------- | :------- | :----------- |
| role   | object | F        |          | 角色列表对象 |

role 对象

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明         |
| :----- | :----- | :------- | :------- | :----------- |
| roles  | array  | F        |          | 角色列表信息 |

roles 数组

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |
| projects          | array  | T        |          | 项目信息                             |

project 数组

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明      |
| :----- | :----- | :------- | :------- | :-------- |
| name   | string | T        |          | 项目名称  |
| uuid   | string | T        |          | 项目 uuid |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/stamps/data?t=role \
  -H 'Content-Type: application/json' \
  -d '{
      "role":1669688015280672
    }'
```

#### 返回示例

```json
{
  "role": {
    "roles": [
      {
        "uuid": "BusJpbyA",
        "name": "项目成员",
        "name_pinyin": "",
        "built_in": true,
        "is_project_member": true,
        "create_time": 1668566592,
        "projects": [
          {
            "uuid": "JaWA3grP6Sr5fRuN",
            "name": "【示例】敏捷式研发管理"
          },
          {
            "uuid": "JaWA3grPPfzvzVJu",
            "name": "【示例】瀑布式研发管理"
          }
        ]
      },
      {
        "uuid": "NgwK9nj1",
        "name": "UI设计师",
        "name_pinyin": "UIshe4ji4shi1",
        "built_in": false,
        "is_project_member": false,
        "create_time": 1669688015,
        "projects": [
          {
            "uuid": "JaWA3grP6Sr5fRuN",
            "name": "【示例】敏捷式研发管理"
          }
        ]
      }
    ],
    "server_update_stamp": 1669690410402281
  }
}
```

### 添加角色配置

添加一条或多条角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/roles/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名     | 值类型 | 允许空值 | 取值范围 | 说明           |
| :--------- | :----- | :------- | :------- | :------------- |
| role_uuids | array  | F        |          | 角色 uuid 列表 |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明              |
| :------------------ | :----- | :------- | :------- | :---------------- |
| server_update_stamp | int    | F        |          | 数据更新时间 微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/roles/add \
  -H 'Content-Type: application/json' \
  -d '{
      "role_uuids":[
          "5teYvt1n",
          "6teYvt1n"
        ]
    }'
```

#### 返回示例

```json
{
  "server_update_stamp": 1669618801583103
}
```

### 删除角色配置

删除一条角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明         |
| :------------------ | :----- | :------- | :------- | :----------- |
| server_update_stamp | int    | F        |          | 数据更新时间 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/role/5teYvt1n/delete \
  -H 'Content-Type: application/json' \
  -d '{}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1669619260116418
}
```

### 获取角色配置列表

列出当前用户在当前团队下能访问到的所有角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/stamps/data

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明         |
| :---------- | :----- | :------- | :------- | :----------- |
| role_config | int    | F        |          | 时间戳，微秒 |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 取值范围 | 说明           |
| :------------------ | :----- | :------- | :------- | :------------- |
| role_config         | object | F        |          | 配置项内容对象 |
| server_update_stamp | int    | F        |          | 数据更新时间   |

role_config 对象

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明       |
| :----------- | :----- | :------- | :------- | :--------- |
| role_configs | array  | F        |          | 配置项内容 |

role_configs 数组

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明             |
| :----------- | :----- | :------- | :------- | :--------------- |
| create_time  | int    | F        |          | 创建时间，单位秒 |
| project_uuid | string | F        |          | 项目标识 uuid    |
| role_uuid    | string | F        |          | 角色标识 uuid    |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/stamps/data?t=role_config \
  -H 'Content-Type: application/json' \
  -d '{
      "role_config":1669620201084317
    }'
```

#### 返回示例

```json
{
  "role_config": {
    "role_configs": [
      {
        "project_uuid": "JaWA3grP6Sr5fRuN",
        "role_uuid": "BusJpbyA",
        "create_time": 1668566593
      },
      {
        "project_uuid": "JaWA3grP6Sr5fRuN",
        "role_uuid": "NgwK9nj1",
        "create_time": 1669689013
      }
    ],
    "server_update_stamp": 1669689013441299
  }
}
```

### 在项目角色下添加成员

在某个项目的角色下添加一个或多个成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| members | array  | F        |          | 需要添加的成员 uuid 列表 |

#### 返回参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- | :------- |
| role_members | array  | F        |          | 角色分组 |

role_members 数组

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| role    | object | F        |          | 角色，参考顶端的角色模型 |
| members | array  | F        |          | 角色下的成员 uuid 列表   |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/role/RR2yrTuZ/members/add \
  -H 'Content-Type: application/json' \
  -d '{
      "members":[
          "GQvp2LtG",
          "MQvp2LtG",
        ]
    }'
```

#### 返回示例

```json
{
  "role_members": [
    {
      "role": {
        "uuid": "BusJpbyA",
        "name": "项目成员",
        "name_pinyin": "",
        "built_in": true,
        "is_project_member": true,
        "create_time": 1668566592
      },
      "members": ["EccJpR5o", "GQvp2LtG", "JaWA3grP"]
    }
  ]
}
```

### 在项目角色下移除成员

在某个项目的角色下移除一个或多个成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| members | array  | F        |          | 需要移除的成员 uuid 列表 |

#### 返回参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- | :------- |
| role_members | array  | F        |          | 角色分组 |

role_members 数组

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| role    | object | F        |          | 角色，参考顶端的角色模型 |
| members | array  | F        |          | 角色下的成员 uuid 列表   |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/role/RR2yrTuZ/members/delete \
  -H 'Content-Type: application/json' \
  -d '{
      "members":[
          "GQvp2LtG"
        ]
    }'
```

#### 返回示例

```json
{
  "role_members": [
    {
      "role": {
        "uuid": "BusJpbyA",
        "name": "项目成员",
        "name_pinyin": "",
        "built_in": true,
        "is_project_member": true,
        "create_time": 1668566592
      },
      "members": ["GQvp2LtG", "JaWA3grP"]
    }
  ]
}
```

### 替换项目下的角色成员

将某个项目角色下的成员替换成指定列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| members | array  | F        |          | 需要移除的成员 uuid 列表 |

#### 返回参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- | :------- |
| role_members | array  | F        |          | 角色分组 |

role_members 数组

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| role    | object | F        |          | 角色，参考顶端的角色模型 |
| members | array  | T        |          | 角色下的成员 uuid 列表   |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/role/RR2yrTuZ/members/update \
  -H 'Content-Type: application/json' \
  -d '{
      "members":[
          "GQvp2LtG",
          "MQvp2LtG"
        ]
    }'
```

#### 返回示例

```json
{
  "role_members": [
    {
      "role": {
        "uuid": "BusJpbyA",
        "name": "项目成员",
        "name_pinyin": "",
        "built_in": true,
        "is_project_member": true,
        "create_time": 1668566592
      },
      "members": ["F46g5WW2", "EccJpR5o", "GQvp2LtG", "JaWA3grP"]
    },
    {
      "role": {
        "uuid": "NgwK9nj1",
        "name": "UI设计师",
        "name_pinyin": "UIshe4ji4shi1",
        "built_in": false,
        "is_project_member": false,
        "create_time": 1669688015
      },
      "members": []
    }
  ]
}
```

### 获取项目下的角色成员

列出项目下所有角色的所有成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role_members

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- | :------- |
| role_members | array  | F        |          | 角色分组 |

role_members 数组

| 参数名  | 值类型 | 允许空值 | 取值范围 | 说明                     |
| :------ | :----- | :------- | :------- | :----------------------- |
| role    | object | F        |          | 角色，参考顶端的角色模型 |
| members | array  | T        |          | 角色下的成员 uuid 列表   |

role 对象

| 参数名            | 值类型 | 允许空值 | 取值范围 | 说明                                 |
| :---------------- | :----- | :------- | :------- | :----------------------------------- |
| built_in          | bool   | F        |          | 是否系统内置角色：fasle 否，true：是 |
| create_time       | int    | F        |          | 创建时间 单位：秒                    |
| is_project_member | bool   | F        |          | 是否项目成员角色：fasle 否，true：是 |
| name              | string | F        |          | 角色名称                             |
| name_pinyin       | string | F        |          | 角色名称拼音                         |
| uuid              | string | F        |          | 角色 uuid                            |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/WKhc9KjZ/project/JaWA3grP6Sr5fRuN/role_members \
  -H 'Content-Type: application/json' \
  -d '{}'
```

#### 返回示例

```json
{
  "role_members": [
    {
      "role": {
        "uuid": "BusJpbyA",
        "name": "项目成员",
        "name_pinyin": "",
        "built_in": true,
        "is_project_member": true,
        "create_time": 1668566592
      },
      "members": ["F46g5WW2", "EccJpR5o", "GQvp2LtG", "JaWA3grP"]
    },
    {
      "role": {
        "uuid": "NgwK9nj1",
        "name": "UI设计师",
        "name_pinyin": "UIshe4ji4shi1",
        "built_in": false,
        "is_project_member": false,
        "create_time": 1669688015
      },
      "members": []
    }
  ]
}
```
