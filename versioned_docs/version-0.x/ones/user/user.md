<!-- TOC depthTo:3 -->

# ONES User API

- [通用说明](#通用说明)
- [API 说明](#api-说明)
  - [1. 获取当前用户信息](#1-获取当前用户信息)
  - [2. 修改团队成员信息](#2-修改团队成员信息)
  - [3. 邀请成员](#3-邀请成员)
  - [4. 禁用用户](#4-禁用用户)
  - [5. 查看邀请记录](#5-查看邀请记录)
  - [6. 邀请成员确认加入](#6-邀请成员确认加入)
  - [7. 删除用户](#7-删除用户)

<!-- /TOC -->

## 通用说明

### user

| 参数名           | 必填 | 类型         | 说明           |
| :--------------- | :--- | :----------- | :------------- |
| avatar           | 否   | string       | 头像 url       |
| department_uuids | 否   | array string | 部门 uuid 列表 |
| name             | 否   | string       | 用户名称       |
| title            | 否   | string       | 职位           |
| user_uuid        | 是   | string       | 用户[UUID]     |

## API 说明

## 1. 获取当前用户信息

获取当前用户的信息

#### URL

https://your-host-name/project/api/project/team/:teamUUID/info

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

### 请求体参考

```curl
curl -X GET \
  https://your-host-name/project/api/project/users/me \
  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回值参考

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
  "org_uuid": "AbsatFo2"
}
```

## 2. 修改团队成员信息

#### URL

https://your-host-name/project/api/project/team/teamUUID/users/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 参数列表

| 参数名 | 类型   | 必填 | 说明          |
| :----- | :----- | :--- | :------------ |
| user   | object | 是   | [user](#user) |

### 请求体参考

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

### 返回值参考

```json
{
  "server_update_stamp": 1565850418558480
}
```

## 3. 邀请成员

#### URL

https://your-host-name/project/api/project/team/teamUUID/invitations/add_batch

#### HTTP Method

POST

#### 是否需要登录

是

#### 参数列表

| 参数名        | 类型     | 必填 | 说明             |
| :------------ | :------- | :--- | :--------------- |
| email         | []string | 是   | 邀请的邮箱       |
| license_types | []string | 否   | 邀请时授权的产品 |

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

### 请求体参考

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

### 返回值参考

```json
{
  "bad_emails": []
}
```

## 4. 禁用用户

#### URL

https://your-host-name//project/api/project/organization/:orgUUID/disable_members

#### HTTP Method

POST

#### 是否需要登录

是

#### 参数列表

| 参数名  | 类型     | 必填 | 说明                         |
| :------ | :------- | :--- | :--------------------------- |
| orgUUID | string   | 是   | 组织 UUID，传参方式：In path |
| members | []string | 是   | 用户 UUID                    |

### 请求体参考

```curl
curl -X POST \
  https://your-host-name//project/api/project/organization/9pSBWJtj/disable_members \
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

### 返回值参考

```json
{
  "server_update_stamp": 1565850418558480
}
```

## 5. 查看邀请记录

#### URL

https://your-host-name//project/api/project/team/:teamUUID/invitations

#### HTTP Method

GET

#### 是否需要登录

是

#### 参数列表

无

#### 返回参数说明

| 参数名                  | 类型     |     | 说明      |
| :---------------------- | :------- | :-- | :-------- |
| invitations             | array    |     | 用户 UUID |
| &nbsp;&nbsp;code        | []string |     | 邀请码    |
| &nbsp;&nbsp;invite_link | []string |     | 邀请链接  |
| &nbsp;&nbsp;email       | []string |     | 邮箱      |
| &nbsp;&nbsp;is_expired  | bool     |     | 是否过期  |

#### 返回值参考

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

## 6. 邀请成员确认加入

#### URL

https://your-host-name/project/api/project/auth/invite_join_team

#### HTTP Method

POST

#### 是否需要登录

否

#### 参数列表

| 参数名      | 类型     | 必填 | 说明                                                    |
| :---------- | :------- | :--- | :------------------------------------------------------ |
| email       | string   | 是   | 用户邮箱（不可更改） [5. 查看邀请记录](#5-查看邀请记录) |
| invite_code | []string | 是   | 邀请码 [5. 查看邀请记录](#5-查看邀请记录)               |
| name        | []string | 是   | 用户名称                                                |
| password    | []string | 是   | 密码                                                    |

#### 请求体参考

```json
{
  "email": "11111@ones.com",
  "password": "ONESzsy888",
  "name": "1111",
  "invite_code": "M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ"
}
```

#### 返回值参考

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

## 7. 删除用户

#### URL

https://your-host-name//project/api/project/team/:teamUUID/delete_members

#### HTTP Method

POST

#### 是否需要登录

是

#### 参数列表

| 参数名  | 类型     | 必填 | 说明      |
| :------ | :------- | :--- | :-------- |
| members | []string | 是   | 用户 UUID |

### 请求体参考

```curl
curl -X POST \
  https://your-host-name//project/api/project/team/3pDzCwAe/delete_members \
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

### 返回值参考

```json
{
  "server_update_stamp": 1565850418558480
}
```
