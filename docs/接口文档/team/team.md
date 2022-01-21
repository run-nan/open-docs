<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

# ONES Team API

- [model](#model)
	- [team](#team)
	- [team_config](#teamconfig)
- [API 说明](#api-说明)
	- [1. 获取团队信息](#1-获取团队信息)
	- [2. 获取团队成员列表](#2-获取团队成员列表)
    - [3. 移除团队成员/退出团队](#3-移除团队成员)
    - [4. 获取团队成员信息](#3-获取团队成员)
	- [5.成员加入/移出部门](#5-成员加入/移出部门)
	- [6.批量修改成员所属部门](#6-批量修改成员所属部门)


## model

### team

| 参数名              | 值类型 | 取值范围  | 说明                               |
|:--------------------|:-------|:---------|:-----------------------------------|
| uuid                | string | len=8    | 团队UUID                           |
| name                | string |          | 团队名称                           |
| type                | string |          | 团队类型<br> free: 免费团队,无过期时间，15 人，3 个项目，30M 附件 <br> pro: 高级付费团队,有过期时间，300M 附件 |
| owner               | string |          | 团队创建者                         |
| logo                | string |          | 团队logo                           |
| cover_url           | string |          | 团队url                            |
| status              | int    |          | 团队状态1：正常；2：已过期         |
| config              | object |          | 团队配置信息，详见下方说明         |
| member_count        | int    |          | 团队成员数         |
| server_update_stamp | int64  |          | 更新时间戳         |

### team_config

团队配置

| 参数名      | 值类型 | 取值范围 | 说明     |
|:------------|:-------|:---------|:---------|
| sprint      | object |          | 迭代配置 |
| &emsp;alias | string |          | 迭代别名 |

### 状态码说明

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 403    | 没有访问此团队的权限 |
| 400    | 请求参数错误                   |
| 500    | 服务器内部错误                 |
| 618    | 还有需要移交的团队/项目/里程碑 |
| 819    | 没有操作权限                   |


## API 说明

### 1. 获取团队信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/info

#### HTTP Method

GET

#### 是否需要登录

是

#### 参数列表

无

#### 返回参数列表

参考顶端 team 通用说明

#### 请求体参考

```curl
curl -X GET \
https://your-host-name/project/api/project/team/BDfDqJU7/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回值参考

```json
{
	"uuid": "BDfDqJU7",
	"status": 1,
	"name": "onePiece",
	"owner": "Pqmud3zh",
	"logo": "",
	"cover_url": "",
	"domain": "",
	"create_time": 1535539298664608,
	"expire_time": -1,
	"type": "pro",
	"config": {
		"sprint": {
			"alias": ""
		}
	},
	"member_count": 243,
	"pending_member_count": 69,
	"disable_member_count": 3,
	"org_uuid": "75tuQaF7",
	"workdays": [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri"
	],
	"workhours": 800000,
	"workhours_unit": "hour",
	"sprint_timeline_visibility": false,
	"testcase_visibility": true,
	"project_panel_visibility": false,
	"support_script_actions": false,
	"server_update_stamp": 1626340232161280,
	"configs": [
		{
			"type": "manhour_mode",
			"data": "simple"
		}
	]
}
```

### 2. 获取团队成员列表

获取团队内的所有成员信息，包括自己，按照加入时间升序排序

#### URL

https://your-host-name/project/api/project/team/:teamUUID/members

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求体参考

```curl
curl -X GET \
 https://your-host-name/project/api/project/team/BDfDqJU7/members \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回JSON

```json
{
    "members": [
        {
            "uuid": "KtLMDi1K",
            "email": "linhong+shkfhlksjkfssfsdf@ones.ai.wwwwwww",
            "name": "",
            "name_pinyin": "",
            "title": "",
            "avatar": "",
            "phone": "",
            "create_time": 1547023260673072,
            "status": 3,
            "team_member_status": 2,
            "verify_status": 1,
            "department_uuids": [],
            "inviter_uuid": "",
            "inviter_name": "",
            "sync_types": [
                0
            ]
        },
        {
            "uuid": "13Jrwu7N",
            "email": "linhong+01@ones.ai",
            "name": "",
            "name_pinyin": "",
            "title": "",
            "avatar": "",
            "phone": "",
            "create_time": 1547023260671392,
            "status": 3,
            "team_member_status": 2,
            "verify_status": 1,
            "department_uuids": [],
            "inviter_uuid": "",
            "inviter_name": "",
            "sync_types": [
                0
            ]
        },
        ...
    ],
    "pending_members": [
        {
            "uuid": "HNvREAkV",
            "email": "linhong+1234@ones.ai",
            "name": "",
            "name_pinyin": "",
            "title": "",
            "avatar": "",
            "phone": "",
            "create_time": 1547023318993280,
            "status": 1,
            "team_member_status": 3,
            "verify_status": 1,
            "department_uuids": [],
            "inviter_uuid": "FtuS5ApR",
            "inviter_name": "“草帽”蒙奇·D·路飞",
            "sync_types": [
                0
            ]
        },
        {
            "uuid": "TGZ7Q17d",
            "email": "linhong+43211234@ones.ai.ais",
            "name": "",
            "name_pinyin": "",
            "title": "",
            "avatar": "",
            "phone": "",
            "create_time": 1547023931529760,
            "status": 3,
            "team_member_status": 3,
            "verify_status": 1,
            "department_uuids": [],
            "inviter_uuid": "FtuS5ApR",
            "inviter_name": "“草帽”蒙奇·D·路飞",
            "sync_types": [
                0
            ]
        },
        ...
    ],
    "server_update_stamp": 1584069280645760
}
```


### 3. 移除团队成员

移除团队内的某个成员，只有团队拥有者才能移除除了自己之外的成员

移除成功后，该成员在当前系统中产生的各类数据均会保留。重新邀请加入团队后，使用同样邮箱的成员系统会认为是同一成员，会将历史数据与该成员进行关联

#### URL

https://your-host-name/project/api/project/team/:teamUUID/delete_member

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 说明                |
| :----- | :------- | :----- | :------- | :------------------ |
| member | T        | string |          | 需要移除的成员 uuid |

#### 请求体参考

```json
{
    "member": "EE1FvEii"
}
```

#### 返回体参考

当错误码为618时，返回需要移交的项目uuid列表，如果是团队拥有者，还返回团队uuid，如果是团队管理员，返回里程碑uuid

```json
{
    "code": 618,
    "desc": "Something need to be handed over",
    "team": "CnCPeqyD",
    "projects": [
        "RQbtzPNmDW1OkVti",
        "RQbtzPNmu46nUo8U"
    ],
    "milestones": [
        "DW1OkVti",
        "u46nUo8U"
    ]
}
```

当返回码为200时，返回团队成员信息修改的server_update_stamp更新时间戳



### 4. 获取团队成员

获取团队内的成员信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/member/:userUUID

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求体参考

```curl
curl -X GET \
 https://your-host-name/project/api/project/team/BDfDqJU7/member/TRPCkuR6 \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回JSON

```json
{
    "uuid": "TRPCkuR6",
    "email": "1812118986@qq.com",
    "name": "1812118986",
    "name_pinyin": "1812118986",
    "title": "",
    "avatar": "",
    "phone": "",
    "create_time": 1584945254292464,
    "status": 1,
    "team_member_status": 2,
    "verify_status": 1,
    "department_uuids": [],
    "inviter_uuid": "PEP76x86",
    "inviter_name": "",
    "sync_types": [
        0
    ],
    "company": ""
}

```

### 5.成员加入/移出部门

#### URL

```
【POST】https://your-host-name/project/api/project/team/团队UUID/users/update/department
```

#### 传值方式

JSON


#### 参数列表

| 参数名              | 是否必须 | 值类型   | 允许空值 | 说明                                                      |
| ------------------- | -------- | -------- | -------- | --------------------------------------------------------- |
| user_departments    | F        | []string | T        | 旧接口遗留下来的，当前接口不需要传值                      |
| departments_to_join | T        | []string | F        | 要加入的部门UUID<br />(移出部门时为:departments_to_leave) |
| all                 | T        | boolean  | F        |                                                           |
| query               | T        | string   | F        | 接口后端调用的graphql(无需修改)                           |
| selectedUserUUIDs   | T        | []string | F        | 成员UUID                                                  |
| memberStatus        | T        | []string | F        | 成员状态范围(无需修改)                                    |

#### Body示例

```json
{
    "user_departments":[],
    "all":true,
    "departments_to_join":["XzVPR7DL"],
    "query":"{ \n      users(\n        orderBy: {\n          tag: DESC\n          namePinyin: ASC\n        }\n        \n        filterGroup: [{\n          \n          \n          uuid_in: $selectedUserUUIDs\n          status_in: $memberStatus\n        }]\n        \n      ){\n        \n    uuid\n    name\n    email\n  \n      }\n   }",
    "variables":{
        "selectedUserUUIDs":["FdNMfm4a"],
        "memberStatus":[
            "pending",
            "disable",
            "normal"
        ]
    }
}
```

#### 请求体参考

```
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/users/update/department' \
--header 'Ones-User-ID: Pqmud3zh' \
--header 'Ones-Auth-Token: SBV6asOxAvimb0njG1J1Ff3q0ebKTlWRq3TpW54Uy6nLd2S0BvdhWaP9evP0cY35' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_departments":[],
    "all":true,
    "departments_to_join":["XzVPR7DL"],
    "query":"{ \n      users(\n        orderBy: {\n          tag: DESC\n          namePinyin: ASC\n        }\n        \n        filterGroup: [{\n          \n          \n          uuid_in: $selectedUserUUIDs\n          status_in: $memberStatus\n        }]\n        \n      ){\n        \n    uuid\n    name\n    email\n  \n      }\n   }",
    "variables":{
        "selectedUserUUIDs":["FdNMfm4a"],
        "memberStatus":[
            "pending",
            "disable",
            "normal"
        ]
    }
}'
```

#### 返回体参考

```json
{
    "server_update_stamp": 1626333334962320,
    "success_count": 1,
    "fail_count": 0
}
```





### 6.批量修改成员所属部门

注：此处接口为旧版接口，存在后续删除的风险，推荐使用新版接口[2.成员加入/移出部门](2.成员加入/移出部门)



#### URL

```
【POST】https://your-host-name/project/api/project/team/团队UUID/users/update/department
```



#### 传值方式

JSON

#### 参数列表

user_departments

| 参数名           | 是否必须 | 值类型   | 允许空值 | 说明             |
| ---------------- | -------- | -------- | -------- | ---------------- |
| user_uuid        | T        | []string | F        | 用户UUID         |
| department_uuids | T        | []string | T        | 用户所属部门UUID |



#### Body示例

```json
{
    "user_departments":[
        {
            "user_uuid":"KRes2XS8",
            "department_uuids":[
                "6Mh4DVYE"
            ]
        },
        {
            "user_uuid":"FtuS5ApR",
            "department_uuids":[
                "MMXVv6de",
                "61kCZMex"
            ]
        }
    ]
}
```



#### 请求体参考

```
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/users/update/department' \
--header 'Ones-User-ID: Pqmud3zh' \
--header 'Ones-Auth-Token: SBV6asOxAvimb0njG1J1Ff3q0ebKTlWRq3TpW54Uy6nLd2S0BvdhWaP9evP0cY35' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_departments":[
        {
            "user_uuid":"KRes2XS8",
            "department_uuids":[
                "6Mh4DVYE"
            ]
        },
        {
            "user_uuid":"FtuS5ApR",
            "department_uuids":[
                "MMXVv6de",
                "61kCZMex"
            ]
        }
    ]
}'
```



#### 返回体参考

```json
{
    "server_update_stamp": 1626335396769360,
    "success_count": 2,
    "fail_count": 0
}
```

