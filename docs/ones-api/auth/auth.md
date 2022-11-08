<!-- TOC depthFrom:1 depthTo:2 updateOnSave:true withLinks:true -->

# ONES Auth API

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
  - [字段格式](#字段格式)
- [API 说明](#api-说明)
  - [用户登录](#用户登录)
  - [获取登录信息](#获取登录信息)
  - [用户登出](#用户登出)

<!-- /TOC -->

# 通用说明

如果您需要调用 ONES 应用程序接口， 通常用户登录是必须的。您可以通过调用 ONES [用户登录](#1-用户登录)接口完成用户登录。 如果您是合法用户，登录接口返回值会包含 user.uuid 和 user.token, 此二值用于 ONES 用户登录凭证。

ONES API 接口登录凭证作为 HTTP Header 为接口调用提供身份校验:

| 参数名          | 参数位置     | 值类型 | 描述                                        |
| :-------------- | :----------- | :----- | :------------------------------------------ |
| Ones-User-Id    | HTTP Headers | string | 用户 uuid                                   |
| Ones-Auth-Token | HTTP Headers | string | 登录成功的 token                            |
| Referer         | HTTP Headers | string | 请求地址 url,示例：`https://your-host-name` |

## 状态码说明

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数格式错误     |
| 401    | 用户名或者密码不正确 |
| 801    | 无效参数             |
| 813    | 账户过期             |
| 500    | 服务器内部错误       |
| 630    | 未注册               |
| 814    | 无团队用户           |

## 字段格式

### email

email 的长度必须小于等于 128，并符合以下正则表达式

```email
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

### phone

```phone
\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
```

### password

密码要求：[8,32] 位 [ascii chart](http://defindit.com/ascii.html) 可打印字符

```password
^[\x21-\x7E]{8,32}$
```

# API 说明

## 用户登录

用户登录接口返回值中 token 用于其他 api 访问时的登录字段，token 没有过期时间，用户修改密码、被移出团队或者用户主动登出时会导致 token 失效。

### URL

```
https://your-host-name/project/api/project/auth/login
```

### HTTP Method

POST

### 是否需要登录

否

### 传值方式

JSON

### 参数列表

| 参数名   | 是否必须 | 值类型 | 取值范围              | 说明     |
| :------- | :------- | :----- | :-------------------- | :------- |
| email    | F        | string | [email](#email)       | 邮箱     |
| phone    | F        | string | [phone](#phone)       | 手机号   |
| password | T        | string | [password](#password) | 登录密码 |

其中，`email`和`phone`必须填其中一个，当`email`和`phone`同时存在时，只有`email`生效

### 返回参数列表

| 参数名            | 值类型 | 取值范围 | 取值例子                         | 说明                                   |
| :---------------- | :----- | :------- | :------------------------------- | :------------------------------------- |
| user              | object |          |                                  | 用户登录信息                           |
| &emsp;uuid        | string | len=8    | 136mQpBg                         | 用户 uuid                              |
| &emsp;email       | string | len<=128 | fengbin@bangwork.com             | 用户 email                             |
| &emsp;name        | string | len<=16  | KidFeng                          | 用户名称                               |
| &emsp;name_pinyin | string | len<=128 | KidFeng                          | 用户名拼音                             |
| &emsp;avatar      | string | len<=255 |                                  | 头像 url                               |
| &emsp;phone       | string | len<=32  |                                  | 用户手机号                             |
| &emsp;status      | int    |          | 1:正常                           | 用户状态                               |
| &emsp;create_time | int    | int64    | 1461314935107445                 | 用户注册时间                           |
| &emsp;channel     | string | len<=32  | u136mQpBge05C38a5396491a145Eeb7A | 用户所属的推送频道                     |
| &emsp;token       | string | len<=64  |                                  | token 用户接口登录                     |
| teams             | array  |          |                                  | 用户当前所属团队信息(目前只有一个团队) |
| &emsp;uuid        | string | len<=8   | WNiMa6DR                         | 用户当前所属团队 uuid                  |
| &emsp;name        | string | len<=255 | ones.cn                          | 用户当前所属团队名称                   |
| &emsp;status      | int    |          | 1:正常,3:过期                    | 团队状态                               |
| org               | object |          |                                  | 组织简略信息                           |
| &emsp;uuid        | string |          |                                  | 组织 UUID                              |
| &emsp;name        | string |          |                                  | 组织名称                               |

### 返回值参考

http_status_code=200

```json
{
  "user": {
    "uuid": "Gq8ZZZ7F",
    "email": "timliudream+200@163.com",
    "name": "timliudream+200",
    "name_pinyin": "timliudream+200",
    "title": "",
    "avatar": "",
    "phone": "",
    "create_time": 1547538969719424,
    "status": 1,
    "channel": "uGq8ZZZ7FflUZ6X5J7pqNlQclsWmkTUD",
    "token": "vBRxnkWypojEA2xxqe92GhhXW3f2FbjC9xZ1A2p7kW0mFhskEwX0wHDpvYZJkpM3",
    "license_types": [1, 2, 3, 4, 5]
  },
  "teams": [
    {
      "uuid": "U66S45tG",
      "status": 1,
      "name": "tim",
      "owner": "Gq8ZZZ7F",
      "logo": "",
      "cover_url": "",
      "domain": "",
      "create_time": 1547538969731072,
      "expire_time": -1,
      "type": "pro",
      "config": {
        "sprint": {
          "alias": ""
        }
      },
      "member_count": 6,
      "org_uuid": "369VHsHp",
      "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],
      "workhours": 800000
    }
  ],
  "org": {
    "uuid": "369VHsHp",
    "name": "tim",
    "org_type": 0,
    "style_hash": "7acb764ba7bbe3137a0ad6ee9ca45cc7"
  }
}
```

### 异常返回值参考

http_status_code=813

```json
{
  "is_owner": true,
  "expire_time": 1578053867,
  "csm": {
    "email": "lianxun@ones.cn",
    "name": "??",
    "title": "??????",
    "phone": "???????????"
  }
}
```

## 获取登录信息

登录后获取登录用户的信息(包括组织、团队信息，登录人员基本信息以及 token)

### URL

```
https://your-host-name/project/api/project/auth/token_info
```

### HTTP Method

GET

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

无

### 返回参数列表

| 参数名            | 值类型 | 取值范围 | 取值例子                         | 说明                                   |
| :---------------- | :----- | :------- | :------------------------------- | :------------------------------------- |
| user              | object |          |                                  | 用户登录信息                           |
| &emsp;uuid        | string | len=8    | 136mQpBg                         | 用户 uuid                              |
| &emsp;email       | string | len<=128 | fengbin@bangwork.com             | 用户 email                             |
| &emsp;name        | string | len<=16  | KidFeng                          | 用户名称                               |
| &emsp;name_pinyin | string | len<=128 | KidFeng                          | 用户名拼音                             |
| &emsp;avatar      | string | len<=255 |                                  | 头像 url                               |
| &emsp;phone       | string | len<=32  |                                  | 用户手机号                             |
| &emsp;status      | int    |          | 1:正常                           | 用户状态                               |
| &emsp;create_time | int    | int64    | 1461314935107445                 | 用户注册时间                           |
| &emsp;channel     | string | len<=32  | u136mQpBge05C38a5396491a145Eeb7A | 用户所属的推送频道                     |
| &emsp;token       | string | len<=64  |                                  | token 用户接口登录                     |
| teams             | array  |          |                                  | 用户当前所属团队信息(目前只有一个团队) |
| &emsp;uuid        | string | len<=8   | WNiMa6DR                         | 用户当前所属团队 uuid                  |
| &emsp;name        | string | len<=255 | ones.cn                          | 用户当前所属团队名称                   |
| &emsp;status      | int    |          | 1:正常,3:过期                    | 团队状态                               |
| org               | object |          |                                  | 组织简略信息                           |
| &emsp;uuid        | string |          |                                  | 组织 UUID                              |
| &emsp;name        | string |          |                                  | 组织名称                               |

### 返回值参考

http_status_code=200

```json
{
  "user": {
    "uuid": "Gq8ZZZ7F",
    "email": "timliudream+200@163.com",
    "name": "timliudream+200",
    "name_pinyin": "timliudream+200",
    "title": "",
    "avatar": "",
    "phone": "",
    "create_time": 1547538969719424,
    "status": 1,
    "channel": "uGq8ZZZ7FflUZ6X5J7pqNlQclsWmkTUD",
    "token": "vBRxnkWypojEA2xxqe92GhhXW3f2FbjC9xZ1A2p7kW0mFhskEwX0wHDpvYZJkpM3",
    "license_types": [1, 2, 3, 4, 5]
  },
  "teams": [
    {
      "uuid": "U66S45tG",
      "status": 1,
      "name": "tim",
      "owner": "Gq8ZZZ7F",
      "logo": "",
      "cover_url": "",
      "domain": "",
      "create_time": 1547538969731072,
      "expire_time": -1,
      "type": "pro",
      "config": {
        "sprint": {
          "alias": ""
        }
      },
      "member_count": 6,
      "org_uuid": "369VHsHp",
      "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],
      "workhours": 800000
    }
  ],
  "org": {
    "uuid": "369VHsHp",
    "name": "tim",
    "org_type": 0,
    "style_hash": "7acb764ba7bbe3137a0ad6ee9ca45cc7"
  }
}
```

## 用户登出

### URL

```
https://your-host-name/project/api/project/auth/logout
```

### HTTP Method

GET

### 是否需要登录

是

### 传值方式

wu

### 参数列表

无

### 返回值参考

http_status_code=200

null

### 错误返回值参考

http_status_code=401

```json
{
  "code": 401,
  "errcode": "AuthFailure.InvalidToken",
  "reason": "InvalidToken",
  "type": "AuthFailure"
}
```
