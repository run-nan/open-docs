---
title: 组织相关接口
group:
  title: Organization
  order: 4
---
<!-- TOC depthFrom:1 depthTo:2 orderedList:false -->

# ONES Organization API

- [通用说明](#通用说明)
  - [组织](#组织)
  - [组织类型枚举](#组织类型)
- [API 说明](#api-说明)
  - [1. 获取组织信息](#1-获取组织信息)
  - [2. 将组织成员添加到团队](#2-将组织成员添加到团队)
  - [3. 删除组织成员](#3-删除组织成员)
  - [4. 获取组织下所有团队](#4-获取组织下所有团队)
  - [5. 获取用户有权限的所有团队](#5-获取用户有权限的所有团队)
  - [6. 获取组织成员列表](#6-获取组织成员列表)
  - [7. 获取组织额外支持信息](#7-获取组织额外支持信息)
  - [8. 获取第三方组织架构信息](#8-获取第三方组织架构信息)
  - [9. 在组织下获取某团队绑定的第三方组织信息](#9-在组织下获取某团队绑定的第三方组织信息)

<!-- /TOC -->

## 通用说明

### 组织

organization

| 参数名                      | 值类型 | 取值范围 | 说明                           |
| :-------------------------- | :----- | :------- | :----------------------------- |
| uuid                        | string | len=8    | 组织 UUID                      |
| name                        | string |          | 组织名称                       |
| scale                       | int    |          |组织规模（最大成员数）         |
| type                        | string |          | 组织类型，详见下方说明         |
| sync_data                   | array  |          | 第三方同步数据                 |
| &nbsp;sync_type             | int    |          | 第三方企业类型 1:微信；2：钉钉 |
| &nbsp;sync_corp_uuid        | int    |          | 第三方企业 id                  |
| &nbsp;sync_corp_name        | string |          | 第三方企业名称                 |
| &nbsp;sync_agent_id         | int    |          | 第三方企业应用名称             |
| owner                       | string |          | 组织创建者                     |
| logo                        | string |          | 组织 logo                      |
| status                      | int    |          | 组织状态 1：正常；2：已过期    |
| visibility                  | bool   |          | 组织页是否可见                 |
| server_update_stamp         | int64  |          | 更新时间戳                     |
| sidebar_menus               | array  |          | 更新时间戳                     |
| &nbsp;key                   | string |          | 侧边栏配置 key                 |
| &nbsp;default_value         | string |          | 侧边栏配置默认值               |
| &nbsp;element_show          | bool   |          | 是否在管理界面展示此侧边栏组件 |
| &nbsp;value                 | string |          | 侧边栏配置 value               |
| &nbsp;is_show               | bool   |          | 侧边栏配置是否展示             |
| &nbsp;is_can_update_text    | bool   |          | 侧边栏配置是否可以更改 value   |
| &nbsp;is_can_update_is_show | bool   |          | 侧边栏配置是否可以更改是否展示 |

### 组织类型

organization_type

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

### 1. 获取组织信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/info

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

无

### 2. 将组织成员添加到团队

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/add

#### HTTP Method

POST

#### 调用权限

manage_organization_member 或 administer_organization(只可添加自己)

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名    | 是否必须 | 值类型       | 取值范围 | 说明           |
| :-------- | :------- | :----------- | :------- | :------------- |
| team_uuid | T        | string       |          | 指定团队       |
| members   | T        | string array |          | 用户 UUID 列表 |

#### 返回参数列表

| JSON 键名        | 值类型 | 说明      |
| :--------------- | :----- | :-------- |
| bad_members      |        |           |
| &nbsp;&nbsp;uuid | string | 用户 UUID |
| &nbsp;&nbsp;code | int    | 返回码    |
| &nbsp;&nbsp;desc | string | 错误描述  |

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

### 3. 删除组织成员

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/delete_member

#### HTTP Method

POST

#### 调用权限

manage_organization_member

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围 | 说明      |
| :----- | :------- | :----- | :------- | :-------- |
| member | T        | string |          | 用户 UUID |

### 4. 获取组织下所有团队

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/teams

#### HTTP Method

GET

#### 调用权限

manage_organization_member 或者 administrator_organization

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

无

### 5. 获取用户有权限的所有团队

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/my_teams

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

无

### 6. 获取组织成员列表

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/members

#### HTTP Method

GET

#### 调用权限

manage_organization_member 或 administer_organization

#### 是否需要登录

是

#### 传值方式

url param

### 7. 获取组织额外支持信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/service

#### HTTP Method

GET

#### 是否需要登录

是

#### 调用权限

manage_organization_member 或 administer_organization

#### 传值方式

url param

### 8. 获取第三方组织架构信息

#### URL

https://your-host-name/project/api/project/organization/:organizationUUID/sso/sync_data

#### HTTP Method

GET

#### 调用权限

administer_organization

#### 是否需要登录

是

#### 传值方式

url param

#### 参数列表

无

#### 返回参数列表

| 参数名                   | 值类型 | 说明              |
| :----------------------- | :----- | :---------------- |
| sync_data                | array  | 第三方组织数据    |
| &nbsp;sync_type          | int    | 第三方组织类型    |
| &nbsp;departments        | array  | 部门集合          |
| &nbsp;&nbsp;sync_id      | string | 部门 id           |
| &nbsp;&nbsp;parent_id    | string | 父节点 id         |
| &nbsp;&nbsp;name         | string | 部门名称          |
| &nbsp;&nbsp;next_id      | string | 下一个兄弟节点 id |
| &nbsp;&nbsp;member_count | int    | 部门成员数        |
| &nbsp;members            | array  | 用户集合          |
| &nbsp;&nbsp;sync_id      | string | 用户 uuid         |
| &nbsp;&nbsp;name         | string | 用户名            |
| &nbsp;&nbsp;email        | string | 用户邮箱          |

### 9. 在组织下获取某团队绑定的第三方组织信息

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

#### 参数列表

无

#### 返回参数列表

| 参数名               | 值类型 | 取值例子            | 说明                       |
| :------------------- | :----- | :------------------ | :------------------------- |
| sync_data            | array  |                     | 绑定的第三方组织           |
| &nbsp;sync_type      | int    | 1:wechat;2:dingding | 第三方组织类型             |
| &nbsp;sync_corp_uuid | string |                     | 指定第三方组织企业 id      |
| &nbsp;sync_corp_name | string |                     | 指定第三方组织企业名称     |
| &nbsp;sync_agent_id  | int    |                     | 指定第三方组织企业应用名称 |
| &nbsp;departments    | array  | ["id1","id2"]       | 指定部门 sync_ids          |
| &nbsp;members        | array  | ["id1","id2"]       | 指定成员 sync_ids          |
