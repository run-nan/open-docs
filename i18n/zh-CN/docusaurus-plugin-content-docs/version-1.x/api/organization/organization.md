# 组织

- [通用说明](#通用说明)
  - [organization](#organization)
  - [organization_type](#organization_type)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [获取组织信息](#获取组织信息)
  - [将组织成员添加到团队](#将组织成员添加到团队)
  - [删除组织成员](#删除组织成员)
  - [获取组织下所有团队](#获取组织下所有团队)
  - [获取用户有权限的所有团队](#获取用户有权限的所有团队)
  - [获取组织成员列表](#获取组织成员列表)
  - [获取组织额外支持信息](#获取组织额外支持信息)
  - [获取第三方组织架构信息](#获取第三方组织架构信息)
  - [在组织下获取某团队绑定的第三方组织信息](#在组织下获取某团队绑定的第三方组织信息)

## 通用说明

### organization

| 参数名              | 值类型 | 取值范围           | 说明                        |
| :------------------ | :----- | :----------------- | :-------------------------- |
| uuid                | string | len=8              | 组织 UUID                   |
| name                | string | len<=128           | 组织名称                    |
| scale               | int    |                    | 组织规模（最大成员数）      |
| type                | string |                    | 组织类型，详见下方说明      |
| sync_data           | array  | sync_data 对象     | 第三方同步数据              |
| owner               | string | len=8              | 组织创建者 uuid             |
| logo                | string | len<=255           | 组织 logo                   |
| status              | int    |                    | 组织状态 1：正常；2：已过期 |
| visibility          | bool   |                    | 组织页是否可见              |
| server_update_stamp | int64  |                    | 更新时间戳，单位微秒        |
| sidebar_menus       | array  | sidebar_menus 对象 | 侧边栏配置                  |

sync_data 对象

| 参数名         | 值类型 | 取值范围 | 说明                           |
| :------------- | :----- | :------- | :----------------------------- |
| sync_type      | int    | 1        | 第三方企业类型 1:微信；2：钉钉 |
| sync_corp_uuid | int    |          | 第三方企业 id                  |
| sync_corp_name | string |          | 第三方企业名称                 |
| sync_agent_id  | int    |          | 第三方企业应用名称             |

sidebar_menus 对象

| 参数名                | 值类型 | 取值范围 | 说明                           |
| :-------------------- | :----- | :------- | :----------------------------- |
| key                   | string |          | 侧边栏配置 key                 |
| default_value         | string |          | 侧边栏配置默认值               |
| element_show          | bool   |          | 是否在管理界面展示此侧边栏组件 |
| value                 | string |          | 侧边栏配置 value               |
| is_show               | bool   |          | 侧边栏配置是否展示             |
| is_can_update_text    | bool   |          | 侧边栏配置是否可以更改 value   |
| is_can_update_is_show | bool   |          | 侧边栏配置是否可以更改是否展示 |

### organization_type

| 组织类型 | 说明         | 功能限制                              |
| :------- | :----------- | :------------------------------------ |
| free     | 免费组织     | 无过期时间，15 人，3 个项目，30M 附件 |
| pro      | 高级付费组织 | 有过期时间，300M 附件                 |

### 状态码说明

| 状态码 | 说明           |
| :----- | :------------- |
| 200    | 成功           |
| 403    | 没有创建的权限 |
| 500    | 服务器内部错误 |

## API 说明

### 获取组织信息

根据 organizationUUID，获取组织信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/info

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

无

#### 返回参数列表

参见通用说明 [organization](#organization)

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/info \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "uuid": "CbuJaGWN",
  "name": "Organization I",
  "owner": "9uaNjXTJ",
  "logo": "",
  "favicon": "",
  "type": "pro",
  "status": 1,
  "scale": 5000,
  "member_count": 6,
  "disable_member_count": 1,
  "sync_data": [],
  "create_time": 1624865025,
  "visibility": false,
  "enable_workorder_component": false
}
```

### 将组织成员添加到团队

将团队添加到组织

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/add

#### HTTP Method

POST

#### 调用权限

manage_organization_member 或 administer_organization(只可添加自己)

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

| 参数名    | 是否必须 | 值类型       | 取值范围 | 说明           |
| :-------- | :------- | :----------- | :------- | :------------- |
| team_uuid | T        | string       |          | 指定团队       |
| members   | T        | string array |          | 用户 UUID 列表 |

#### 返回参数列表

| 参数名      | 值类型 | 取值范围        | 取值例子 | 说明             |
| :---------- | :----- | :-------------- | :------- | :--------------- |
| bad_members | array  | bad_member 对象 |          | 添加失败用户信息 |

bad_member 对象

| 参数名 | 值类型 | 取值范围 | 取值例子 | 说明      |
| :----- | :----- | :------- | :------- | :-------- |
| uuid   | string |          |          | 用户 UUID |
| code   | int    |          |          | 返回码    |
| desc   | string |          |          | 错误描述  |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/organization/CbuJaGWN/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "team_uuid": "StM3ZoDJ",
    "members": ["W426Dryc"
    ]
  }'
```

#### 返回示例

```json
{
  "bad_members": [
    {
      "uuid": "W426Dryc",
      "code": 409,
      "desc": "user already in team"
    }
  ]
}
```

### 删除组织成员

删除组织下团队成员

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/delete_member

#### HTTP Method

POST

#### 调用权限

manage_organization_member

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 说明      |
| :----- | :------- | :----- | :------- | :-------- |
| member | T        | string |          | 用户 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 取值范围 | 取值例子         | 说明                       |
| :------------------ | :----- | :------- | :--------------- | :------------------------- |
| server_update_stamp | int64  |          | 1461314935107445 | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/organization/W426Dryc/delete_member \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{
    "member": "W426Dryc"
  }'
```

#### 返回示例

```json
{
  "server_update_stamp": 1584068675766464
}
```

### 获取组织下所有团队

根据 organizationUUID，获取该组织下所有团队

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/teams

#### HTTP Method

GET

#### 调用权限

manage_organization_member 或者 administrator_organization

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围  | 取值例子                    | 说明                       |
| :------------------ | :----- | :-------- | :-------------------------- | :------------------------- |
| teams               | array  | team 对象 | 参见[team](../team/team.md) | 团队列表信息               |
| server_update_stamp | int64  |           | 1461314935107445            | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/teams \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "teams": [
    {
      "uuid": "SZtf7SUp",
      "status": 1,
      "name": "11107",
      "owner": "SMS8ciyv",
      "logo": "",
      "cover_url": "",
      "domain": "",
      "create_time": 1665993589904223
    }
  ],
  "server_update_stamp": 1669274429810185
}
```

### 获取用户有权限的所有团队

获取当前用户有权限的所有团队

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/my_teams

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围  | 取值例子                    | 说明                       |
| :------------------ | :----- | :-------- | :-------------------------- | :------------------------- |
| teams               | array  | team 对象 | 参见[team](../team/team.md) | 团队列表信息               |
| server_update_stamp | int64  |           | 1461314935107445            | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/my_teams \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "teams": [
    {
      "uuid": "SZtf7SUp",
      "status": 1,
      "name": "11107",
      "owner": "SMS8ciyv",
      "logo": "",
      "cover_url": "",
      "domain": "",
      "create_time": 1665993589904223
    }
  ],
  "server_update_stamp": 1669274429810185
}
```

### 获取组织成员列表

根据 organizationUUID，获取该组织下所有成员

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/members

#### HTTP Method

GET

#### 调用权限

manage_organization_member 或 administer_organization

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名              | 值类型 | 取值范围  | 取值例子         | 说明                       |
| :------------------ | :----- | :-------- | :--------------- | :------------------------- |
| members             | array  | user 对象 |                  | 成员信息                   |
| server_update_stamp | int64  |           | 1461314935107445 | 服务器更新时间戳，单位微秒 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/members \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```JSON
{
  "members": [
    {
      "uuid": "J9cBwY9L",
      "email": "d831186d@ones.com",
      "name": "nodejs-plugin-ex",
      "name_pinyin": "",
      "title": "",
      "avatar": "",
      "phone": "",
      "create_time": 1655194745925178,
      "status": 1,
      "team_uuids": [
        "XhxdvRJz"
      ],
      "is_disable": false,
      "sync_types": [
        0
      ]
    }
  ],
  "server_update_stamp": 1669274429810185
}
```

### 获取组织额外支持信息

根据 organizationUUID，获取该组织额外支持信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/service

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

manage_organization_member 或 administer_organization

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名       | 值类型 | 取值范围          | 取值例子 | 说明         |
| :----------- | :----- | :---------------- | :------- | :----------- |
| organization | object | organization 对象 |          | 组织信息     |
| member_count | int    |                   |          | 包含成员数量 |
| unused_count | int    |                   |          |              |

organization 对象

| 参数名 | 值类型 | 取值范围 | 说明        |
| :----- | :----- | :------- | :---------- |
| uuid   | string | len=8    | 组织 UUID   |
| name   | string |          | 组织名称    |
| owner  | string |          | 所有者 uuid |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/service \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "organization": {
    "uuid": "5N6W3noj",
    "name": "test",
    "owner": "SMS8ciyv",
    "logo": "",
    "favicon": "",
    "type": "pro",
    "status": 1,
    "scale": 1000,
    "member_count": 0,
    "disable_member_count": 0,
    "sync_data": null,
    "create_time": 1653883606,
    "visibility": true,
    "enable_workorder_component": false
  },
  "member_count": 251,
  "unused_count": 749,
  "csm": null
}
```

### 获取第三方组织架构信息

根据 organizationUUID，获取第三方组织架构信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/sso/sync_data

#### HTTP Method

GET

#### 调用权限

administer_organization

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名    | 值类型 | 说明           |
| :-------- | :----- | :------------- |
| sync_data | array  | 第三方组织数据 |

sync_data 对象

| 参数名      | 值类型 | 说明           |
| :---------- | :----- | :------------- |
| sync_type   | int    | 第三方组织类型 |
| departments | array  | 部门集合       |
| members     | array  | 用户集合       |

departments 对象

| 参数名       | 值类型 | 说明              |
| :----------- | :----- | :---------------- |
| sync_id      | string | 部门 id           |
| parent_id    | string | 父节点 id         |
| name         | string | 部门名称          |
| next_id      | string | 下一个兄弟节点 id |
| member_count | int    | 部门成员数        |

members 对象

| 参数名  | 值类型 | 说明      |
| :------ | :----- | :-------- |
| sync_id | string | 用户 uuid |
| name    | string | 用户名    |
| email   | string | 用户邮箱  |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/sso/sync_data \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
null
```

### 在组织下获取某团队绑定的第三方组织信息

在组织下获取某团队绑定的第三方组织信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/team/:teamUUID/sync_data

#### HTTP Method

GET

#### 调用权限

administer_organization

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

无

#### 返回参数列表

| 参数名    | 值类型 | 取值例子 | 说明             |
| :-------- | :----- | :------- | :--------------- |
| sync_data | array  |          | 绑定的第三方组织 |

sync_data 对象

| 参数名         | 值类型 | 取值例子      | 说明                               |
| :------------- | :----- | :------------ | :--------------------------------- |
| sync_type      | int    | 1             | 第三方组织类型,1:wechat;2:dingding |
| sync_corp_uuid | string |               | 指定第三方组织企业 id              |
| sync_corp_name | string |               | 指定第三方组织企业名称             |
| sync_agent_id  | int    |               | 指定第三方组织企业应用名称         |
| departments    | array  | ["id1","id2"] | 指定部门 sync_ids                  |
| members        | array  | ["id1","id2"] | 指定成员 sync_ids                  |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/organization/5N6W3noj/team/AJkTaPb4/sync_data \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
null
```
