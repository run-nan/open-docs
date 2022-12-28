# ONES Department API

- [通用说明](#通用说明)
  - [model](#model)
- [API 说明](#api-说明)
  - [获取团队部门列表](#获取团队部门列表)
  - [添加部门](#添加部门)
  - [修改部门信息](#修改部门信息)
  - [删除部门](#删除部门)
  - [批量修改成员所属部门](#批量修改成员所属部门)
  - [同步团队部门架构](#同步团队部门架构)

## 通用说明

### model

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明                                                 |
| :---------- | :----- | :------- | :------- | :--------------------------------------------------- |
| uuid        | string | 否       | len=8    | 部门 uuid                                            |
| team_uuid   | string | 否       | len<=8   | 团队 uuid                                            |
| parent_uuid | string | 是       | len<=8   | 父节点 uuid                                          |
| name        | string | 否       | len<=16  | 部门名称                                             |
| name_pinyin | string | 是       |          | 名称拼音                                             |
| next_uuid   | string | 是       |          | 下一个兄弟节点 id                                    |
| sync_type   | int    | 否       | 0        | 0: ONES 部门<br/>1: wechat 部门<br/>2: dingding 部门 |

## API 说明

### 获取团队部门列表

获取团队部门列表信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/departments

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                         |
| :------------------ | :----- | :------- | :--------------------------- |
| departments         | array  | >=0      | 部门数据数组 [model](#model) |
| server_update_stamp | int64  |          | 服务器更新时间戳，单位微秒   |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/BDfDqJU7/departments \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "departments": [
    {
      "uuid": "T2dyKELb",
      "parent_uuid": "",
      "name": "草帽海贼",
      "name_pinyin": "cao3mao4hai3zei2",
      "next_uuid": "MNZj4TvY",
      "sync_type": 0
    },
    {
      "uuid": "StM3ZoDJ",
      "parent_uuid": "",
      "name": "船",
      "name_pinyin": "chuan2",
      "next_uuid": "T2dyKELb",
      "sync_type": 0
    },
    {
      "uuid": "6Mh4DVYE",
      "parent_uuid": "",
      "name": "海军",
      "name_pinyin": "hai3jun1",
      "next_uuid": "StM3ZoDJ",
      "sync_type": 0
    },
    {
      "uuid": "MNZj4TvY",
      "parent_uuid": "",
      "name": "test",
      "name_pinyin": "test",
      "next_uuid": "",
      "sync_type": 0
    }
  ],
  "server_update_stamp": 1545647679642848
}
```

### 添加部门

添加新部门

#### URL

https://your-host-name/project/api/project/team/:teamUUID/departments/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 说明              |
| :---------- | :------- | :----- | :------- | :---------------- |
| name        | T        | string | <=255    | 部门名称          |
| parent_uuid | T        | string | <=8      | 父节点 id         |
| next_uuid   | F        | string | <=8      | 下一个兄弟节点 id |

#### 返回参数列表

| 参数名              | 值类型          | 取值范围 | 说明                       |
| :------------------ | :-------------- | :------- | :------------------------- |
| add_department      | [model](#model) |          | 添加的部门数据             |
| server_update_stamp | int64           |          | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/departments/add \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "next_uuid": "StM3ZoDJ",
    "parent_uuid": "",
    "name": "海军分部G5"
  }'
```

#### 返回示例

```json
{
  "add_department": {
    "uuid": "LxeRRH9Q",
    "parent_uuid": "",
    "name": "海军分部G5",
    "name_pinyin": "",
    "next_uuid": "StM3ZoDJ",
    "team_uuid": "BDfDqJU7"
  },
  "server_update_stamp": 1584068238761264
}
```

### 修改部门信息

更新部门信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/department/update/:departmentUUID

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名      | 是否必须 | 值类型 | 取值范围 | 说明              |
| :---------- | :------- | :----- | :------- | :---------------- |
| name        | T        | string | <=255    | 部门名称          |
| parent_uuid | F        | string | <=8      | 父节点 id         |
| next_uuid   | F        | int    | <=8      | 下一个兄弟节点 id |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                       |
| :------------------ | :----- | :------- | :------------------------- |
| server_update_stamp | int64  |          | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/department/update/StM3ZoDJ \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
  "parent_uuid": "",
  "name": "海军分部G5->G2",
  "next_uuid": "StM3ZoDJ"
}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1584068675766464
}
```

### 删除部门

部门删除规则：移除部门时不会将成员移除，如果该部门下有子部门，则子部门会被同时移除。

#### URL

https://your-host-name/project/api/project/team/:teamUUID/department/delete/:departmentUUID

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 说明                       |
| :------------------ | :----- | :------- | :------------------------- |
| server_update_stamp | int64  |          | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/department/delete/StM3ZoDJ \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
```

#### 返回示例

```json
{
  "server_update_stamp": 1584069144209136
}
```

### 批量修改成员所属部门

接口支持同时对多个用户进行修改。更新规则：针对提交修改的成员，属于全量更新，即用户所在的部门需要全部请求上传，如果用户之前所在部门在当前请求中未上传，接口调用成功后，会自动将用户移出此部门。

#### URL

https://your-host-name/project/api/project/team/:teamUUID/users/update/department

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名           | 是否必须 | 值类型 | 取值范围 | 说明         |
| :--------------- | :------- | :----- | :------- | :----------- |
| user_departments | T        | array  | 下方说明 | 批量操作数据 |

user_department 对象

| 参数名           | 是否必须 | 值类型 | 取值范围 | 说明               |
| :--------------- | :------- | :----- | :------- | :----------------- |
| user_uuid        | T        | string | 下方说明 | 用户 UUID          |
| department_uuids | T        | array  | 下方说明 | 用户所属部门 UUIDs |

#### 返回参数列表

| JSON 键名           | 值类型 | 说明                       |
| :------------------ | :----- | :------------------------- |
| server_update_stamp | int64  | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/users/update/department \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "user_departments": [
      {
        "user_uuid": "FzG7j6Do",
        "department_uuids": ["6Mh4DVYE"]
      },
      {
        "user_uuid": "DKunKQR2",
        "department_uuids": ["6Mh4DVYE"]
      }
    ]
  }'
```

#### 返回示例

```json
{
  "server_update_stamp": 1584069144209639
}
```

### 同步团队部门架构

我们系统提供了通过 JSON 文件同步团队部门和人员信息的方式。用户只需要在指定的位置维护一个 JSON 文件（文件位置可配置），系统便可以自动同步您的部门和人员信息。

系统会定时（间隔时间可配置）从该配置文件中获取部门和人员信息，并同步到系统中。

如果需要支持自动同步更新，需要用户自行维护并更新该文件，并且该文件需要满足以下的格式。

#### JSON 配置文件格式参考

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
      "department": ["23001"],
      "email": "xiaowu001@ones.cn",
      "mobile": null,
      "avatar": null,
      "title": null
    },
    {
      "userid": "xiaowu002",
      "name": "xiaowu002",
      "department": [],
      "email": "xiaowu002@ones.cn",
      "mobile": null,
      "avatar": null,
      "title": null
    },
    {
      "userid": "cai77",
      "name": "cai77",
      "department": ["23002"],
      "email": "cai77@ones.cn",
      "mobile": null,
      "avatar": null,
      "title": null
    },
    {
      "userid": "lengbing",
      "name": "lengbing",
      "department": [],
      "email": "lengbing@ones.cn",
      "mobile": "15818685557",
      "avatar": null,
      "title": null
    },
    {
      "userid": "cmjcd",
      "name": "cmjcd",
      "department": [],
      "email": "cmjcd@ones.cn",
      "mobile": "15900009999",
      "avatar": null,
      "title": null
    }
  ]
}
```
