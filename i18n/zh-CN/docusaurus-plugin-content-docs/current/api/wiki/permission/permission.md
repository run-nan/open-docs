# wiki 权限

说明： ONES 系统采用了一致性的权限模型，wiki 权限模型参考 [ONES 权限模型](../../permission/permission.md#权限规则)

- [通用说明](#通用说明)
  - [rule](#rule)
  - [permission](#permission)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取 wiki 权限](#获取wiki权限)
  - [添加 wiki 权限](#添加wiki权限)
  - [删除 wiki 权限](#删除wiki权限)
  - [获取 wiki 有效权限](#获取wiki有效权限)
  - [设置单页面权限](#设置单页面权限)
  - [获取单页面权限](#获取单页面权限)
  - [设置页面分享权限](#设置页面分享权限)
  - [获取页面分享权限](#获取页面分享权限)

## 通用说明

wiki 权限相关接口。

### rule

[permission_rule](../../permission/permission.md#权限规则)

### permission

[evaluated_permission](../../permission/permission.md#权限计算结果)

### 状态码说明

| 状态码 | 说明             |
| :----- | :--------------- |
| 200    | 成功             |
| 403    | 没有权限         |
| 404    | 已删除的返回 404 |
| 500    | 服务端异常       |

## API 说明

### 获取 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules

#### Http Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名              | 值类型 | 取值范围      | 说明     |
| :------------------ | :----- | :------------ | :------- |
| server_update_stamp | int    |               |          |
| permission_rules    | array  | [rule](#rule) | 权限列表 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 响应示例

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
  ],
  "server_update_stamp": 0
}
```

### 添加 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules/add

#### Http Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 请求参数列表

| 参数名          | 是否必须 | 值类型 | 取值范围      | 默认值 | 取值例子 | 说明             |
| --------------- | -------- | ------ | ------------- | ------ | -------- | ---------------- |
| permission_rule | 是       | struct | [rule](#rule) | 无     |          | 要添加的权限规则 |

#### 响应参数列表

| 参数名              | 值类型 | 取值范围      | 说明     |
| :------------------ | :----- | :------------ | :------- |
| server_update_stamp | int    |               | 更新时间 |
| permission_rule     | struct | [rule](#rule) | 权限列表 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
      "permission_rule": {
        "context_type": "space",
        "context_param": {
          "space_uuid": "DV1NU3Ab",
        },
        "permission": "view_page",
        "user_domain_type": "single_user",
        "user_domain_param": "3rzKDAtx"
      }
    }'
```

#### 响应示例

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

### 删除 wiki 权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rule/:ruleUUID/delete

#### Http Method

POST

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名              | 值类型 | 取值范围 | 说明 |
| :------------------ | :----- | :------- | :--- |
| server_update_stamp | int    |          |      |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rule/:ruleUUID/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
```

#### 响应示例

```json
{
  "server_update_stamp": 1571297934745044
}
```

### 获取 wiki 有效权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/evaluated_permissions

#### Http Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名                | 值类型 | 取值范围                  | 说明     |
| :-------------------- | :----- | :------------------------ | :------- |
| server_update_stamp   | int    |                           |          |
| evaluated_permissions | array  | [permission](#permission) | 权限列表 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/evaluated_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
```

#### 响应示例

```json
{
  "evaluated_permissions": [
    {
      "key": "1--:1",
      "context_type": "team",
      "context_param": {},
      "permission": "administer_team"
    },
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

### 设置单页面权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_permissions

#### Http Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 请求参数列表

| 参数名              | 值类型 | 取值范围      | 说明                     |
| :------------------ | :----- | :------------ | :----------------------- |
| page_encrypt_status | int    | 1,2,3         | 1:不加密，2:只读，3:加密 |
| permission_rules    | array  | [rule](#rule) | 规则列表                 |

#### 响应参数列表

无

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
      "page_encrypt_status": 3,
      "permission_rules": {
        "context_type": "space",
        "context_param": {
          "space_uuid": "DV1NU3Ab",
        },
        "permission": "page_edit",
        "user_domain_type": "single_user",
        "user_domain_param": "6ZpgEzkk"
      }
    }'
```

#### 响应示例

```json

```

### 获取单页面权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_permissions

#### Http Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名                | 值类型 | 取值范围                  | 说明                     |
| :-------------------- | :----- | :------------------------ | :----------------------- |
| page_encrypt_status   | int    | 1,2,3                     | 1:不加密，2:只读，3:加密 |
| evaluated_permissions | array  | [permission](#permission) | 权限列表                 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
```

#### 响应示例

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

### 设置页面分享权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_share_permissions

#### Http Method

POST

#### 是否需要登录

是

#### 传值方式

json

#### 请求参数列表

| 参数名                     | 值类型 | 取值范围      | 说明                                                                       |
| :------------------------- | :----- | :------------ | :------------------------------------------------------------------------- |
| page_share_permission_type | int    | 0,1,2,3       | 0:不共享，1:共享给所有人看，2:共享给所有人编辑，3:指定成员可以查看或者编辑 |
| is_share_sub_page          | bool   |               | 是否共享子页面                                                             |
| permission_rules           | array  | [rule](#rule) | 规则列表                                                                   |

#### 响应参数列表

| 参数名                     | 值类型 | 取值范围 | 说明           |
| :------------------------- | :----- | :------- | :------------- |
| team_uuid                  | string |          | 团队 uuid      |
| space_uuid                 | string |          | 页面组 uuid    |
| page_uuid                  | string |          | 页面 uuid      |
| user_uuid                  | string |          | 用户 uuid      |
| page_share_permission_type | int    | 0,1,2,3  | 共享类型       |
| is_share_sub_page          | bool   |          | 是否共享子页面 |
| share_uuid                 | string |          | 共享 uuid      |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_share_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
      "page_share_permission_type": 3,
      "is_share_sub_page": false,
      "permission_rules": {
        "context_type": "page",
        "context_param": {
          "page_uuid": "UyZkFDM5",
        },
        "permission": "page_share_edit",
        "user_domain_type": "single_user",
        "user_domain_param": "6ZpgEzkk"
      }
    }'
```

#### 响应示例

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

### 获取页面分享权限

#### URL

https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_share_permissions

#### Http Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 响应参数列表

| 参数名                     | 值类型 | 取值范围                  | 说明           |
| :------------------------- | :----- | :------------------------ | :------------- |
| page_share_permission_type | int    | 0,1,2,3                   | 共享类型       |
| is_share_sub_page          | bool   |                           | 是否共享子页面 |
| share_uuid                 | string |                           | 共享 uuid      |
| evaluated_permissions      | array  | [permission](#permission) | 权限列表       |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_share_permissions \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
```

#### 响应示例

````json
{
  "page_share_permission_type": 3,
  "is_share_sub_page": false,
  "share_uuid": "3zrN7jQY",
  "evaluated_permissions": [
    {
      "key": "1103-UyZkFDM5-:2004",
      "context_type": "page",
      "context_param": {
        "page_uuid": "UyZkFDM5"
      },
      "permission": "page_share_edit",
      "user_domain_type": "single_user",
      "user_domain_param": "6ZpgEzkk"
    }
  ]
}
```
````
