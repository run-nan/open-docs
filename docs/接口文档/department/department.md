---
title:  部门相关接口
group:
  title: Department
  order: 3
---
# ONES Department API


- [model](#model)
  - [1. 获取团队部门列表](#1-获取团队部门列表)
  - [2. 添加部门](#2-添加部门)
  - [3. 修改部门信息](#3-修改部门信息)
  - [4. 删除部门](#4-删除部门)
  - [5. 批量修改成员所属部门](#5-批量修改成员所属部门)
  - [6. 通过JSON文件同步团队部门架构](#6-通过json文件同步团队部门架构)


## model

### 字段

参数名|值类型|允许空值|取值范围|说明
:----|:----|:----|:----|:----
uuid|string|否|len=8|部门 uuid
team_uuid|string|否|len<=8|团队 uuid
parent_uuid|string|是|len<=8|父节点 uuid
name|string|否|len<=16|部门名称
name_pinyin|string|是||名称拼音
next_uuid|string|是||下一个兄弟节点id
sync_type|int|否||0: ONES 部门<br>1: wechat 部门<br>2: dingding 部门

## API 说明

### 1. 获取团队部门列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/departments

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求体参考

```curl
curl --location --request GET 'https://your-host-name/project/api/project/team/BDfDqJU7/departments' \
--header 'Ones-User-ID: Pqmud3zh' \
--header 'Ones-Auth-Token: SBV6asOxAvimb0njG1J1Ff3q0ebKTlWRq3TpW54Uy6nLd2S0BvdhWaP9evP0cY35' \
--header 'Content-Type: application/json'
```

#### 返回参数列表

参数名|值类型|取值范围|说明
:----|:----|:----|:----|
departments|array|>=0|部门数据数组 [model](#model) 
server_update\_stamp|int64||团队部门信息更新时间

#### 返回值参考

```json 
{
    "departments": [
        {
            "uuid": "61kCZMex",
            "parent_uuid": "",
            "name": "3213213",
            "name_pinyin": "3213213",
            "next_uuid": "BRYqFVxn",
            "sync_type": 0,
            "member_count": 0
        },
        {
            "uuid": "54T94HDU",
            "parent_uuid": "SKn3cLUR",
            "name": "A",
            "name_pinyin": "A",
            "next_uuid": "Qw7vXECe",
            "sync_type": 0,
            "member_count": 1
        },
        {
            "uuid": "BpAzFeW1",
            "parent_uuid": "61kCZMex",
            "name": "??????",
            "name_pinyin": "??????",
            "next_uuid": "",
            "sync_type": 0,
            "member_count": 1
        }
    ],
    "server_update_stamp": 1626234355928576
}
```

### 2. 添加部门

#### URL

https://your-host-name/project/api/project/team/:teamUUID/departments/add 

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

参数名|是否必须|值类型|取值范围|说明
:----|:----|:----|:----|:----
name|T|string|<=255|部门名称
parent_uuid|F|string|<=8|父部门的UUID(子部门需要填写)
next_uuid|F|string|<=8|下一个同级节点的UUID(不填默认为最后节点)

#### 返回参数列表

参数名|值类型|取值范围|说明
:----|:----|:----|:----
add_department|[model](#model)||添加的部门数据
server_update\_stamp|int64||团队部门信息更新时间

### 请求体参考

```json
{
  "next_uuid":"",
  "parent_uuid":"3i3kNgZ2",
  "name":"啊哈哈哈哈"
}
```

#### 返回值参考

```json
{
  "add_department": {
    "uuid": "Dpqx2d82",
    "parent_uuid": "MMXVv6de",
    "name": "好多东西啊",
    "name_pinyin": "",
    "next_uuid": "",
    "team_uuid": "BDfDqJU7"
  },
  "server_update_stamp": 1626236238668784
}
```

### 3. 修改部门信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/department/update/:departmentUUID 

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

参数名|是否必须|值类型|取值范围|说明
:----|:----|:----|:----|:----
name|T|string|<=255|部门名称
parent_uuid|F|string|<=8|父节点id
next_uuid|F|int|<=8|下一个兄弟节点id

#### 返回参数列表

参数名|值类型|取值范围|说明
:----|:----|:----|:----|
server_update\_stamp|int64||团队部门信息更新时间

#### 请求体参考

```json
{
  "name": "海军分部",
  "next_uuid": "HdhvhHeb",
  "parent_uuid": ""
}
```

#### 返回值参考

```json
{
    "server_update_stamp": 1584068675766464
}
```

### 4. 删除部门

部门删除规则：移除部门时不会将成员移除，如果该部门下有子部门，则子部门会被同时移除。

#### URL

https://your-host-name/project/api/project/team/:teamUUID/department/delete/:departmentUUID

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 参数列表

无

#### 返回参数列表

参数名|值类型|取值范围|说明
:----|:----|:----|:----
server_update\_stamp|int64||团队部门信息更新时间

#### 返回值参考

```json
{
    "server_update_stamp": 1584069144209136
}
```



### 5. 批量修改成员所属部门

#### URL

https://your-host-name/project/api/project/team/:teamUUID/users/update/department 

#### HTTP Method

POST

#### 是否需要登录

是

#### 参数列表

参数名|是否必须|值类型|取值范围|说明
:----|:----|:----|:----|:----
user_departments|T|array|下方说明|批量操作数据


`user_departments`

参数名|是否必须|值类型|取值范围|说明
:----|:----|:----|:----|:----
user_uuid|T|string|下方说明|用户 UUID
department_uuids|T|array|下方说明|用户所属部门UUIDs

#### 返回参数列表

JSON键名|值类型|说明
:---|:---|:---
server_update_stamp|int64|团队部门信息更新时间


#### 请求体参考

```json
{
    "user_departments": [
        {
            "user_uuid": "FzG7j6Do",
            "department_uuids": [
                "6Mh4DVYE"
            ]
        },
        {
            "user_uuid": "DKunKQR2",
            "department_uuids": [
                "6Mh4DVYE"
            ]
        }
    ]
}
```


### 6. 通过JSON文件同步团队部门架构

我们系统提供了通过JSON文件同步团队部门和人员信息的方式。用户只需要在指定的位置维护一个JSON文件（文件位置可配置），系统便可以自动同步您的部门和人员信息。

系统会定时（间隔时间可配置）从该配置文件中获取部门和人员信息，并同步到系统中。

如果需要支持自动同步更新，需要用户自行维护并更新该文件，并且该文件需要满足以下的格式。

#### JSON配置文件格式参考

```json
{
    "department": [
        {
            "id": "21000",
            "name": "研fa组部",
            "parentid": "",
            "order": 7
        },
        {
            "id": "23000",
            "name": "研组部03",
            "parentid": "22000",
            "order": 1
        },
        {
            "id": "23001",
            "name": "研组部03-1",
            "parentid": "22000",
            "order": 1
        },
        {
            "id": "23002",
            "name": "研组部04",
            "parentid": "22002",
            "order": 1
        }
    ],
    "members": [
        {
            "userid": "xiaowu001",
            "name": "xiaowu001",
            "department": [
                "23001"
            ],
            "email": "xiaowu001@ones.ai",
            "mobile": null,
            "avatar": null,
            "title": null
        },
        {
            "userid": "xiaowu002",
            "name": "xiaowu002",
            "department": [],
            "email": "xiaowu002@ones.ai",
            "mobile": null,
            "avatar": null,
            "title": null
        },
        {
            "userid": "cai77",
            "name": "cai77",
            "department": [
                "23002"
            ],
            "email": "cai77@ones.ai",
            "mobile": null,
            "avatar": null,
            "title": null
        },
        {
            "userid": "lengbing",
            "name": "lengbing",
            "department": [],
            "email": "lengbing@ones.ai",
            "mobile": "15818685557",
            "avatar": null,
            "title": null
        },
        {
            "userid": "cmjcd",
            "name": "cmjcd",
            "department": [],
            "email": "cmjcd@ones.ai",
            "mobile": "15900009999",
            "avatar": null,
            "title": null
        }
    ]
}
```

