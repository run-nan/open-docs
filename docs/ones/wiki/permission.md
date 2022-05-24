# wiki 权限

说明： ONES 系统采用了一致性的权限模型，wiki 权限模型参考 [ONES 权限模型](../permission/permission.md#权限规则)

- [1. 获取 wiki 权限](#1-获取wiki权限)
- [2. 添加 wiki 权限](#2-添加wiki权限)
- [3. 删除 wiki 权限](#3-删除wiki权限)
- [4. 获取 wiki 有效权限](#4-获取wiki有效权限)
- [5. 设置单页面权限](#5-设置单页面权限)
- [6. 获取单页面权限](#6-获取单页面权限)
- [7. 设置页面分享权限](#7-设置页面分享权限)
- [8. 获取页面分享权限](#8-获取页面分享权限)

## API 说明

### 1. 获取 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

| 参数名  | 是否必须 | 值类型 | 取值范围 | 默认值 | 取值例子 | 说明                                 |
| :------ | :------- | :----- | :------- | :----- | :------- | :----------------------------------- |
| version | F        | int    | [0,n)    |        | 0        | 根据版本号获取 page,默认获取最近版本 |

#### 返回值示例

```json
{
  "permission_rules": [
    {
      "uuid": "Va23KBER",
      "context_type": "team",
      "context_param": {},
      "user_domain_type": "team_owner",
      "user_domain_param": "",
      "permission": "administer_team",
      "read_only": true,
      "create_time": 1535539298,
      "position": 0
    },
    {
      "uuid": "U1SgSHf2",
      "context_type": "team",
      "context_param": {},
      "user_domain_type": "single_user",
      "user_domain_param": "C8cpoKbn",
      "permission": "administer_team",
      "read_only": false,
      "create_time": 1543904554,
      "position": 7
    },
    {
      "uuid": "8FdyM4cC",
      "context_type": "team",
      "context_param": {},
      "user_domain_type": "single_user",
      "user_domain_param": "6ZpgEzkk",
      "permission": "administer_team",
      "read_only": false,
      "create_time": 1545647761,
      "position": 8
    }
    ///
  ],
  "server_update_stamp": 0
}
```

### 2. 添加 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 参数列表

#### 请求参数

```json
{
  "permission_rule": {
    "context_type": "space",
    "context_param": {
      "space_uuid": "DV1NU3Ab"
    },
    "permission": "view_page",
    "user_domain_type": "single_user",
    "user_domain_param": "3rzKDAtx"
  }
}
```

#### 返回值示例

```json
{
  "permission_rule": {
    "uuid": "NUJkyHLn",
    "context_type": "space",
    "context_param": {
      "space_uuid": "DV1NU3Ab"
    },
    "user_domain_type": "single_user",
    "user_domain_param": "3rzKDAtx",
    "permission": "view_page",
    "read_only": false,
    "create_time": 1584613289,
    "position": 1
  },
  "server_update_stamp": 1584613289343728
}
```

### 3. 删除 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rule/:ruleUUID/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回体示例

```json
{
  "server_update_stamp": 1571297934745044
}
```

### 4. 获取 wiki 有效权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/evaluated_permissions

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数

无

#### 返回值示例

```json
{
  "evaluated_permissions": [
    {
      "key": "1--:1",
      "context_type": "team",
      "context_param": {},
      "permission": "administer_team"
    },
    ///
    {
      "key": "1102-3xCZqxb7-:2001",
      "context_type": "space",
      "context_param": {
        "space_uuid": "3xCZqxb7"
      },
      "permission": "manage_space"
    }
  ],
  "server_update_stamp": 1584598538242784
}
```

### 5. 设置单页面权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_permissions

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 参数列表

#### 请求参数示例

```json
{
  "page_encrypt_status": 3,
  "permission_rules": [
    {
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "6ZpgEzkk"
    },
    {
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "3rzKDAtx"
    }
  ]
}
```

### 6. 获取单页面权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_permissions

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数

无

#### 返回 JSON

```json
{
  "page_encrypt_status": 3,
  "evaluated_permissions": [
    {
      "key": "1103-UyZkFDM5-:2004",
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "6ZpgEzkk"
    },
    {
      "key": "1103-UyZkFDM5-:2004",
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "3rzKDAtx"
    }
  ]
}
```

### 7. 设置页面分享权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_share_permissions

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 参数列表

#### 请求体示例

```json
{
  "page_share_permission_type": 3,
  "is_share_sub_page": false,
  "permission_rules": [
    {
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_share_edit",
      "user_domain_type": "group",
      "user_domain_param": "PDzSPeAM"
    }
  ]
}
```

#### 返回值示例

```json
{
  "team_uuid": "BDfDqJU7",
  "space_uuid": "DV1NU3Ab",
  "page_uuid": "UyZkFDM5",
  "user_uuid": "6ZpgEzkk",
  "page_share_permission_type": 3,
  "is_share_sub_page": false,
  "share_uuid": "3zrN7jQY"
}
```

### 8. 获取页面分享权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_share_permissions

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 参数列表

无

#### 返回值示例

```json
{
  "page_encrypt_status": 3,
  "evaluated_permissions": [
    {
      "key": "1103-UyZkFDM5-:2004",
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "6ZpgEzkk"
    },
    {
      "key": "1103-UyZkFDM5-:2004",
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "3rzKDAtx"
    }
  ]
}
```
