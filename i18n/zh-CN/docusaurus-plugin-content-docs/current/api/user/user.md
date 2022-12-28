# ONES User API

- [通用说明](#通用说明)
  - [user](#user)
  - [license 授权信息](#license-授权信息)
- [API 说明](#api-说明)
  - [获取当前用户信息](#获取当前用户信息)
  - [修改团队成员信息](#修改团队成员信息)
  - [邀请成员](#邀请成员)
  - [禁用用户](#禁用用户)
  - [查看邀请记录](#查看邀请记录)
  - [邀请成员确认加入](#邀请成员确认加入)
  - [删除用户](#删除用户)

## 通用说明

### user

| 参数名           | 必填 | 类型         | 说明           |
| :--------------- | :--- | :----------- | :------------- |
| avatar           | 否   | string       | 头像 url       |
| department_uuids | 否   | array string | 部门 uuid 列表 |
| name             | 否   | string       | 用户名称       |
| title            | 否   | string       | 职位           |
| user_uuid        | 是   | string       | 用户[UUID]     |

### license 授权信息

| 产品名称    | 产品编号 |
| :---------- | :------- |
| project     | 1        |
| wiki        | 2        |
| TestCase    | 3        |
| Pipeline    | 4        |
| Plan        | 5        |
| Account     | 6        |
| Desk        | 7        |
| Performance | 8        |

## API 说明

### 获取当前用户信息

获取当前用户的信息

#### URL

https://your-host-name/project/api/project/users/me

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名        | 值类型 | 取值范围               | 取值例子                          | 说明                     |
| :------------ | :----- | :--------------------- | :-------------------------------- | :----------------------- |
| uuid          | string | len=8                  | 136mQpBg                          | 用户 uuid                |
| email         | string | len<=128               | fengbin@bangwork.com              | 用户 email               |
| name          | string | len<=16                | KidFeng                           | 用户名称                 |
| name_pinyin   | string | len<=128               | KidFeng                           | 用户名拼音               |
| avatar        | string | len<=255               |                                   | 头像 url                 |
| phone         | string | len<=32                |                                   | 用户手机号               |
| status        | int    |                        | 1:正常 2.删除的 3.待激活 4.禁用的 | 用户状态                 |
| create_time   | int    | int64                  | 1461314935107445                  | 用户注册时间，单位是微秒 |
| company       | string | len<=255               |                                   | 公司信息                 |
| license_types | int[]  |                        | 1, 2, 3, 4, 5                     | license 授权信息         |
| language      | string | zh：简体中文，en：英语 | zh                                | 语言环境                 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/users/me \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "uuid": "DU6krHBN",
  "email": "niuqiang@ones.cn",
  "name": "会飞的犀牛长",
  "name_pinyin": "hui4fei1dexi1niu2zhang3",
  "title": "",
  "avatar": "",
  "phone": "",
  "create_time": 1565770697227728,
  "access_time": 0,
  "status": 1,
  "org_uuid": "AbsatFo2",
  "company": "",
  "license_types": [1, 2, 3, 4, 5, 6, 7, 8],
  "language": ""
}
```

### 修改团队成员信息

更新用户信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/users/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 类型   | 必填 | 说明          |
| :----- | :----- | :--- | :------------ |
| user   | object | 是   | [user](#user) |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围         | 取值例子 | 说明                       |
| :------------------ | :----- | :--------------- | :------- | :------------------------- |
| server_update_stamp | int64  | 1461314935107445 |          | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/users/update \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
    "user_uuid": "DU6krHBN",
    "name": "会飞的犀牛长",
    "title": "update title"
}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565850418558480
}
```

### 邀请成员

邀请成员加入团队，可批量邀请，可指定授权的产品。

#### URL

https://your-host-name/project/api/project/team/:teamUUID/invitations/add_batch

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名        | 类型     | 必填 | 说明             |
| :------------ | :------- | :--- | :--------------- |
| email         | []string | 是   | 邀请的邮箱       |
| license_types | []string | 否   | 邀请时授权的产品 |

#### 返回参数列表

| 参数名         | 值类型   | 取值范围       | 取值例子 | 说明             |
| :------------- | :------- | :------------- | :------- | :--------------- |
| success_emails | []string |                |          | 成功邀请用户邮箱 |
| bad_emails     | array    | bad_email 对象 |          | 邀请失败用户信息 |

bad_email 对象

| 参数名 | 值类型 | 取值范围 | 取值例子 | 说明       |
| :----- | :----- | :------- | :------- | :--------- |
| UUID   | string | len=8    | 136mQpBg | 用户 uuid  |
| Err    | error  |          |          | 错误 error |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/invitations/add_batch \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{"invite_settings":[
          {
            "email":"123414@ones.cn"
          }
        ],
        "license_types":[
            7,
            8,
            4,
            5,
            1,
            3,
            2
          ]
  }'
```

#### 返回示例

```json
{
  "success_emails": ["123414@ones.cn"],
  "bad_emails": []
}
```

### 禁用用户

将用户设置为不可用状态

#### URL

https://your-host-name/project/api/project/organization/:orgUUID/disable_members

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名  | 类型     | 必填 | 说明      |
| :------ | :------- | :--- | :-------- |
| members | []string | 是   | 用户 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 取值例子         | 说明                       |
| :------------------ | :----- | :------- | :--------------- | :------------------------- |
| server_update_stamp | int64  |          | 1461314935107445 | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/organization/9pSBWJtj/disable_members \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
        "members":[
          "Jky1qMsA"
        ]
  }'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565850418558480
}
```

### 查看邀请记录

查看邀请记录信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/invitations

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名      | 类型  | 取值例子 | 说明             |
| :---------- | :---- | :------- | :--------------- |
| invitations | array |          | 邀请用户列表信息 |

invitation 对象

| 参数名      | 类型   | 取值例子 | 说明     |
| :---------- | :----- | :------- | :------- |
| code        | string |          | 邀请码   |
| invite_link | string |          | 邀请链接 |
| email       | string |          | 邮箱     |
| is_expired  | bool   |          | 是否过期 |
| status      | int    |          | 用户状态 |

#### 请求示例

```curl
curl -X GET \
    https://your-host-name/project/api/project/team/AJkTaPb4/invitations \
    -H 'Ones-Auth-Token: m4Bp0Y9g0wYFwJ2hUZVcfbuQD95DvboAAPPeSA17HmJGzOtl919ydVmIXNyJf8NC' \
    -H 'Ones-User-Id: SMS8ciyv'
    -H 'Referer: https://your-host-name' \
    -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "invitations": [
    {
      "code": "JUzlZSRGU4ZcN0upv3VF7aI0tyl9GpJ1",
      "invite_link": "https://dev.myones.net/project/master/#/auth/join_team?invitation=JUzlZSRGU4ZcN0upv3VF7aI0tyl9GpJ1",
      "email": "2222@ones.com",
      "create_time": 1635302823,
      "status": 1,
      "is_expired": false
    },
    {
      "code": "M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ",
      "invite_link": "https://dev.myones.net/project/master/#/auth/join_team?invitation=M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ",
      "email": "11111@ones.com",
      "create_time": 1635302711,
      "status": 1,
      "is_expired": false
    }
  ]
}
```

### 邀请成员确认加入

邀请成员加入团队后，被邀请成员需要确认才能加入到团队。

#### URL

https://your-host-name/project/api/project/auth/invite_join_team

#### HTTP Method

POST

#### 是否需要登录

否

#### 传值方式

JSON

#### 参数请求列表

| 参数名      | 类型   | 必填 | 说明                                               |
| :---------- | :----- | :--- | :------------------------------------------------- |
| email       | string | 是   | 用户邮箱（不可更改） [查看邀请记录](#查看邀请记录) |
| invite_code | string | 是   | 邀请码 [查看邀请记录](#查看邀请记录)               |
| name        | string | 是   | 用户名称                                           |
| password    | string | 是   | 密码                                               |

#### 参数返回列表

| 参数名 | 值类型 | 取值范围  | 取值例子 | 说明                                   |
| :----- | :----- | :-------- | :------- | :------------------------------------- |
| user   | object | user 对象 |          | 用户登录信息                           |
| teams  | array  | team 对象 |          | 用户当前所属团队信息(目前只有一个团队) |
| org    | object | org 对象  |          | 组织简略信息                           |

user 对象

| 参数名             | 值类型 | 取值范围               | 取值例子                          | 说明                     |
| :----------------- | :----- | :--------------------- | :-------------------------------- | :----------------------- |
| uuid               | string | len=8                  | 136mQpBg                          | 用户 uuid                |
| email              | string | len<=128               | fengbin@bangwork.com              | 用户 email               |
| name               | string | len<=16                | KidFeng                           | 用户名称                 |
| name_pinyin        | string | len<=128               | KidFeng                           | 用户名拼音               |
| avatar             | string | len<=255               |                                   | 头像 url                 |
| phone              | string | len<=32                |                                   | 用户手机号               |
| status             | int    |                        | 1:正常 2.删除的 3.待激活 4.禁用的 | 用户状态                 |
| create_time        | int    | int64                  | 1461314935107445                  | 用户注册时间，单位是微秒 |
| channel            | string | len<=32                | u136mQpBge05C38a5396491a145Eeb7A  | 用户所属的推送频道       |
| token              | string | len<=64                |                                   | token 用户接口登录       |
| license_types      | int[]  |                        | 1, 2, 3, 4, 5                     | license 授权信息         |
| imported_jira_user | bool   | true,false             | false                             | 是否通过 jira 导入       |
| is_init_password   | bool   | true,false             | false                             | 是否初始化密码           |
| language           | string | zh：简体中文，en：英语 | zh                                | 语言环境                 |

team 对象

| 参数名         | 值类型   | 取值范围              | 取值例子         | 说明                                          |
| :------------- | :------- | :-------------------- | :--------------- | :-------------------------------------------- |
| uuid           | string   | len<=8                | WNiMa6DR         | 用户当前所属团队 uuid                         |
| name           | string   | len<=255              | ones.cn          | 用户当前所属团队名称                          |
| status         | int      |                       | 1:正常,3:过期    | 团队状态                                      |
| owner          | string   | len=8                 |                  | 团队 owner 的 uuid                            |
| logo           | string   |                       |                  | 图标                                          |
| create_time    | int      | int64                 | 1461314935107445 | 用户创建时间，单位是微秒                      |
| expire_time    | int      | int64                 | -1               | 有效期，-1 表示永久有效                       |
| member_count   | int      |                       | 6                | 成员数量                                      |
| org_uuid       | string   | len=8                 |                  | 团队所属组织的 uuid                           |
| workdays       | []string | "Mon", "Tue", "Wed"等 |                  | work 日期                                     |
| workhours      | int      | int64                 | 800000           | work 小时数，单位 10^5，如 8 小时，对应 80000 |
| workhours_unit | string   | hour                  |                  | work 单位                                     |

org 对象

| 参数名     | 值类型 | 取值范围        | 取值例子 | 说明      |
| :--------- | :----- | :-------------- | :------- | :-------- | --- | --- | --- | --- |
| uuid       | string | len=8           |          | 组织 UUID |
| name       | string | len<=255        |          | 组织名称  |
| org_type   | int    | int             | 0        | 组织类型  |
| style_hash | string |                 |          |           |
| favicon    | string |                 |          | 图标信息  |
| status     | int    | 1:正常 2.删除的 | 1        | 组织状态  |
| visibility | bool   | true,false      | true     | 可见性    |     |     |     |     |

#### 请求示例

```curl
curl -X POST \
    https://your-host-name/project/api/project/auth/invite_join_team \
    -H 'Content-Type: application/json' \
    -H 'Referer: https://your-host-name' \
    -H 'cache-control: no-cache' \
    -d '{
      "email": "11111@ones.com",
      "password": "ONESzsy888",
      "name": "1111",
      "invite_code": "M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ"
    }'
```

#### 返回示例

```json
{
  "user": {
    "uuid": "JYNRQUEv",
    "email": "11111@ones.com",
    "name": "1111",
    "name_pinyin": "",
    "title": "",
    "avatar": "",
    "phone": "",
    "create_time": 1635302711283792,
    "status": 1,
    "channel": "uJYNRQUEvpbtIFpus8UAcjhAgw3z2fdE",
    "token": "0MC0hxg7bxIO9fMrE*********AZzErKPwBSFAW22f2i",
    "license_types": [1, 2, 3, 4, 5, 7, 8],
    "imported_jira_user": false,
    "is_init_password": false
  },
  "teams": [
    {
      "uuid": "Jpa4piQQ",
      "status": 1,
      "name": "宇宙最强",
      "owner": "9uaNjXTJ",
      "logo": "",
      "cover_url": "",
      "domain": "",
      "create_time": 1624865026011200,
      "expire_time": -1,
      "type": "pro",
      "config": {
        "sprint": {
          "alias": ""
        }
      },
      "member_count": 6,
      "pending_member_count": 0,
      "disable_member_count": 0,
      "org_uuid": "CbuJaGWN",
      "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],
      "workhours": 800000,
      "workhours_unit": "hour"
    }
  ],
  "org": {
    "org_type": 0,
    "uuid": "CbuJaGWN",
    "name": "宇宙最强team",
    "style_hash": "",
    "favicon": "",
    "notifications": []
  }
}
```

### 删除用户

删除用户信息，可批量删除。

#### URL

https://your-host-name/project/api/project/team/:teamUUID/delete_members

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

| 参数名  | 类型     | 必填 | 说明      |
| :------ | :------- | :--- | :-------- |
| members | []string | 是   | 用户 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 取值例子         | 说明                       |
| :------------------ | :----- | :------- | :--------------- | :------------------------- |
| server_update_stamp | int64  |          | 1461314935107445 | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/delete_members \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
        "members":[
          "Jky1qMsA"
        ]
  }'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565850418558480
}
```
