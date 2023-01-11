# ONES Auth API

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
  - [字段格式](#字段格式)
- [API 说明](#api-说明)
  - [用户登录](#用户登录)
  - [获取登录信息](#获取登录信息)
  - [用户登出](#用户登出)

## 通用说明

如果您需要调用 ONES 应用程序接口， 通常用户登录是必须的。您可以通过调用 ONES [用户登录](#用户登录)接口完成用户登录。 如果您是合法用户，登录接口返回值会包含 user.uuid 和 user.token, 此二值用于 ONES 用户登录凭证。

ONES API 接口登录凭证作为 HTTP Header 为接口调用提供身份校验:

| 参数名          | 参数位置     | 值类型 | 描述                                        |
| :-------------- | :----------- | :----- | :------------------------------------------ |
| Ones-User-Id    | HTTP Headers | string | 用户 uuid                                   |
| Ones-Auth-Token | HTTP Headers | string | 登录成功的 token                            |
| Referer         | HTTP Headers | string | 请求地址 url,示例：`https://your-host-name` |

### 状态码说明

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

### 字段格式

#### email

email 的长度必须小于等于 128，并符合以下正则表达式

```email
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

#### phone

```phone
\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$
```

#### password

密码要求：[8,32] 位 [ascii chart](http://defindit.com/ascii.html) 可打印字符

```password
^[\x21-\x7E]{8,32}$
```

## API 说明

### 用户登录

用户登录接口返回值中 token 用于其他 api 访问时的登录字段，token 没有过期时间，用户修改密码、被移出团队或者用户主动登出时会导致 token 失效。

#### URL

```
https://your-host-name/project/api/project/auth/login
```

#### HTTP Method

POST

#### 是否需要登录

否

#### 传值方式

JSON

#### 请求参数列表

| 参数名   | 是否必须 | 值类型 | 取值范围              | 说明     |
| :------- | :------- | :----- | :-------------------- | :------- |
| email    | F        | string | [email](#email)       | 邮箱     |
| phone    | F        | string | [phone](#phone)       | 手机号   |
| password | T        | string | [password](#password) | 登录密码 |

其中，`email`和`phone`必须填其中一个，当`email`和`phone`同时存在时，只有`email`生效

#### <span id="login返回参数">返回参数列表</span>

| 参数名 | 值类型 | 取值范围  | 取值例子 | 说明                                   |
| :----- | :----- | :-------- | :------- | :------------------------------------- |
| user   | object | user 对象 |          | 用户登录信息                           |
| teams  | array  | team 对象 |          | 用户当前所属团队信息(目前只有一个团队) |
| org    | object | org 对象  |          | 组织简略信息                           |

user 对象

| 参数名             | 值类型 | 取值范围                          | 取值例子             | 说明                     |
| :----------------- | :----- | :-------------------------------- | :------------------- | :----------------------- |
| uuid               | string | len=8                             | 136mQpBg             | 用户 uuid                |
| email              | string | len<=128                          | fengbin@bangwork.com | 用户 email               |
| name               | string | len<=16                           | KidFeng              | 用户名称                 |
| name_pinyin        | string | len<=128                          | KidFeng              | 用户名拼音               |
| avatar             | string | len<=255                          |                      | 头像 url                 |
| phone              | string | len<=32                           |                      | 用户手机号               |
| status             | int    | 1:正常 2.删除的 3.待激活 4.禁用的 | 1                    | 用户状态                 |
| create_time        | int    | int64                             | 1461314935107445     | 用户注册时间，单位是微秒 |
| channel            | string | len<=32                           |                      | 用户所属的推送频道       |
| token              | string | len<=64                           |                      | token 用户接口登录       |
| license_types      | int[]  |                                   | 1, 2, 3, 4, 5        | license 授权信息         |
| imported_jira_user | bool   | true,false                        | false                | 是否通过 jira 导入       |
| is_init_password   | bool   | true,false                        | false                | 是否初始化密码           |
| language           | string | zh：简体中文，en：英语            | zh                   | 语言环境                 |

team 对象

| 参数名         | 值类型   | 取值范围              | 取值例子         | 说明                                           |
| :------------- | :------- | :-------------------- | :--------------- | :--------------------------------------------- |
| uuid           | string   | len=8                 | WNiMa6DR         | 用户当前所属团队 uuid                          |
| name           | string   | len<=255              |                  | 用户当前所属团队名称                           |
| status         | int      | 1:正常,3:过期         | 1                | 团队状态                                       |
| owner          | string   | len=8                 |                  | 团队 owner 的 uuid                             |
| logo           | string   |                       |                  | 图标                                           |
| create_time    | int      | int64                 | 1461314935107445 | 用户创建时间，单位是微秒                       |
| expire_time    | int      | int64                 | -1               | 有效期，-1 表示永久有效                        |
| member_count   | int      |                       | 6                | 成员数量                                       |
| org_uuid       | string   | len=8                 |                  | 团队所属组织的 uuid                            |
| workdays       | []string | "Mon", "Tue", "Wed"等 |                  | work 日期                                      |
| workhours      | int      | int64                 | 800000           | work 小时数，单位 10^5，如 8 小时，对应 800000 |
| workhours_unit | string   | hour                  |                  | work 单位                                      |

org 对象

| 参数名     | 值类型 | 取值范围        | 取值例子 | 说明      |
| :--------- | :----- | :-------------- | :------- | :-------- |
| uuid       | string | len=8           | 3V69HsHp | 组织 UUID |
| name       | string | len<=255        |          | 组织名称  |
| org_type   | int    | int             | 0        | 组织类型  |
| style_hash | string |                 |          |           |
| favicon    | string |                 |          | 图标信息  |
| status     | int    | 1:正常 2.删除的 | 1        | 组织状态  |
| visibility | bool   | true,false      | true     | 可见性    |

#### 请求示例

```curl
curl -X POST \
    https://your-host-name/project/api/project/auth/login \
    -H 'Content-Type: application/json' \
    -d '{
        "email": "test@ones.com",
        "password": "ibJDTEf7PETr"
    }'
```

#### <span id="login返回示例">返回示例</span>

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
    "license_types": [1, 2, 3, 4, 5],
    "imported_jira_user": false,
    "is_init_password": false,
    "language": "zh"
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
      "workhours": 800000,
      "workhours_unit": "hour"
    }
  ],
  "org": {
    "uuid": "369VHsHp",
    "name": "tim",
    "org_type": 0,
    "style_hash": "7acb764ba7bbe3137a0ad6ee9ca45cc7",
    "favicon": "",
    "notifications": [],
    "status": 1,
    "visibility": true
  }
}
```

http_status_code=813

```json
{
  "is_owner": true,
  "expire_time": 1578053867,
  "csm": {
    "email": "lianxun@ones.com",
    "name": "lianxun",
    "title": "",
    "phone": ""
  }
}
```

### 获取登录信息

登录后获取登录用户的信息(包括组织、团队信息，登录人员基本信息以及 token)。

#### URL

```
https://your-host-name/project/api/project/auth/token_info
```

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

无

#### 返回参数列表

参见 [用户登录返回参数列表](#login返回参数)

#### 请求示例

```curl
curl -X GET \
    https://your-host-name/project/api/project/auth/token_info \
    -H 'Ones-Auth-Token: m4Bp0Y9g0wYFwJ2hUZVcfbuQD95DvboAAPPeSA17HmJGzOtl919ydVmIXNyJf8NC' \
    -H 'Ones-User-Id: SMS8ciyv'
```

#### 返回示例

参见 [用户登录返回示例](#login返回示例)

### 用户登出

登录后用户主动登出时，调用该接口。

#### URL

```
https://your-host-name/project/api/project/auth/logout
```

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

[参见返回示例](#logout返回示例)

#### 请求示例

```curl
curl -X GET \
    https://your-host-name/project/api/project/auth/logout \
    -H 'Ones-Auth-Token: m4Bp0Y9g0wYFwJ2hUZVcfbuQD95DvboAAPPeSA17HmJGzOtl919ydVmIXNyJf8NC' \
    -H 'Ones-User-Id: SMS8ciyv'
```

#### <span id="logout返回示例">返回示例</span>

http_status_code=200

```json
null
```

http_status_code=401

```json
{
  "code": 401,
  "errcode": "AuthFailure.InvalidToken",
  "reason": "InvalidToken",
  "type": "AuthFailure"
}
```
