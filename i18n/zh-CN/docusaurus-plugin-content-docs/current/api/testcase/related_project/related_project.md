# ONES TestCase RelatedProject API

## model 说明

### error

| 参数名  | 值类型 | 取值例子 | 说明             |
| :------ | :----- | :------- | :--------------- |
| code    | int    | 200      | 服务器更新时间戳 |
| errcode | string | "OK"     | 错误消息         |
| type    | string |          | 错误类型         |

### CheckPoint

执行用例检查点配置

| 参数名      | 值类型 | 取值范围                         | 说明     |
| ----------- | ------ | -------------------------------- | -------- |
| case_result | string | passed、failed、blocked、skipped | 执行结果 |
| check_point | string | note、file                       | 检查属性 |
| is_must     | bool   |                                  | 是否必填 |

### UserDomainPayload

| 参数名            | 值类型 | 说明       |
| ----------------- | ------ | ---------- |
| user_domain_type  | string | 用户域类型 |
| user_domain_param | string | 用户域参数 |

## API 说明

### 修改关联项目配置

修改关联项目配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/config/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名           | 值类型                      | 是否可以空 | 说明                     |
| :--------------- | :-------------------------- | :--------- | :----------------------- |
| issue_type_uuid  | string                      | 否         | 默认缺陷对应工作项类型   |
| show_issue_track | bool                        | 否         | 是否启用「需求跟踪」组件 |
| check_points     | [][checkpoint](#CheckPoint) | 否         | 执行结果属性配置         |

#### 返回参数列表

| 参数名              | 值类型 | 说明     |
| :------------------ | :----- | :------- |
| server_update_stamp | int64  | 更新时间 |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/related_project/BWxt3PAWObBoyBxk/config/update' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"issue_type_uuid":"N2S4a86i","show_issue_track":false}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1670582052490964
}
```

### 添加默认成员

添加默认成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/default_members/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

[UserDomainPayload](#UserDomainPayload)

#### 返回参数列表

| 参数名              | 值类型 | 说明     |
| :------------------ | :----- | :------- |
| server_update_stamp | int64  | 更新时间 |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/related_project/BWxt3PAWObBoyBxk/default_members/add' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"user_domain_type":"role","user_domain_param":"MaW6tuRb"}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1670582159333871
}
```

### 删除默认成员

删除默认成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/related_project/:projectUUID/default_members/delete

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

[UserDomainPayload](#UserDomainPayload)

#### 返回参数列表

| 参数名              | 值类型 | 说明     |
| :------------------ | :----- | :------- |
| server_update_stamp | int64  | 更新时间 |

#### 请求示例

```bash
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/related_project/BWxt3PAWObBoyBxk/default_members/delete' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"user_domain_type":"role","user_domain_param":"MaW6tuRb","type":"role","role":{"uuid":"MaW6tuRb","name":"测试","name_pinyin":"ce4shi4","built_in":false,"is_project_member":false,"create_time":1657187209,"projects":[{"uuid":"BWxt3PAWObBoyBxk","name":"归档项目1"},{"uuid":"BWxt3PAWQSgkX98D","name":"敏捷项目 A"},{"uuid":"BWxt3PAWUwAZAHjt","name":"项目AA"},{"uuid":"BWxt3PAWmN1mAnZX","name":"敏捷项目 B"},{"uuid":"BWxt3PAWr11JcpXS","name":"项目A"}],"isRoleMemberAvailable":true,"members":[]},"members":[],"tag":"项目角色","name":"测试","subText":"0人"}'
```

#### 返回示例

```json
{
  "server_update_stamp": 1670582209615477
}
```
