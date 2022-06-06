<<<<<<< HEAD

# ONES Project API 示例调用 简易流程

- [1. 创建一个项目](#1-创建一个项目)
- [2. 批量创建两条任务](#2-批量创建两条任务)
- [3. 查询创建的任务](#3-查询创建的任务)

## 1. 创建一个项目

- 创建项目请参考 [添加项目](./project.md)

## 步骤

- 首先填充 project model 参数
- 填充项目模板 id 默认值: project-t1
- 调用 [获取当前用户信息](../user/user.md#1-获取当前用户信息) 获取用户 UUID
- 将获取的用户 UUID 填充到项目成员 members

## 2. 批量创建两条任务

- 批量创建任务请参考[添加任务](./task/task.md#1-添加任务)

## 步骤

- 生成任务 uuid 生成规则：创建者 uuid+随机 8 位字符组成(共十六位)
- 按照 [参数列表](./task/task.md#参数列表) 填充数据。支持同时创建多条任务。
- 检查参数返回值，参考 [返回值示例](./task/task.md#传建任务返回值) 查看是否有创建失败的任务。

## 3. 查询创建的任务

- 查询请参考 [筛选器](./filter/filter.md) 通用说明介绍。了解筛选器查询原理，才能组装查询结构。

## 步骤

- 组装查询条件进行查询，请参考 [获取某个过滤条件下的任务列表](./filter/filter.md#2-获取某个过滤条件下的任务列表)
- 调用 [获取全局属性列表](./field/field.md#4-获取全局属性列表) 获取属性定义。例如：field006 代表 任务所属项目, field006 代表 任务类型。
- # 参照 [查询任务列表参数](./filter/filter.md#查询任务列表参数) 组装参数进行查询。
<!-- TOC depthFrom:1 depthTo:3 -->

# 目录

- [project model 说明](#project-model-说明)
- [API 说明](#api-说明)
  - [添加项目](#添加项目)
  - [复制项目](#复制项目)
  - [更新项目](#更新项目)
  - [删除项目](#删除项目)
  - [根据项目 id 获取项目列表](#根据项目-id-获取项目列表)
  - [获取当前用户 Project 列表](#获取当前用户-Project-列表)
  - [获取团队的项目列表](#获取团队的项目列表)
  - [获取项目下的角色成员](./role/role.md#11-获取项目下的角色成员)

<!-- /TOC -->

## project model 说明

| 参数名               | 值类型 | 取值范围 | 说明                                                                    |
| :------------------- | :----- | :------- | :---------------------------------------------------------------------- |
| uuid                 | string | len=16   | 由创建者 uuid+随机 8 位字符组成                                         |
| name                 | string | len<=128 | 项目名称                                                                |
| assign               | string | len=8    | 项目负责人                                                              |
| owner                | string | len=8    | 项目创建者                                                              |
| status_uuid          | string | len=8    | 项目状态 uuid                                                           |
| status_category      | string |          | 项目状态分类                                                            |
| plan_start_time      | int    |          | 计划开始日期 单位秒                                                     |
| plan_end_time        | int    |          | 计划结束日期 单位秒                                                     |
| is_pin               | bool   |          | 是否置顶                                                                |
| status               | int    |          | 项目状态，1：正常；2：删除 (兼容移动端，目前接口只返回 status=1 的数据) |
| is_open_email_notify | bool   |          | 是否开通邮件通知                                                        |
| announcement         | string | len<=512 | 项目公告                                                                |
| deadline             | int64  |          | 截止时间，与 1970 的秒差                                                |
| task_update_time     | int64  |          | 项目下任务更新时间(单位秒)                                              |
| program_uuid         | string |          | 所属项目集                                                              |
| is_archive           | bool   |          | 是否归档                                                                |
| archive_user         | string | len<=128 | 归档用户                                                                |

## template

| template-id | name           | desc                                                                                                                              |
| :---------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| project-t1  | 敏捷项目管理   | 通过内置的敏捷研发管理组件，可以轻松实现迭代管控、需求分配、缺陷管理等核心研发工作，通过各类报表实时掌控项目进度状况。            |
| project-t2  | 通用任务管理   | 简单易用的通用任务处理模板，适用于诸如个人安排等活动管理。                                                                        |
| project-t3  | 从已有项目复制 | 从系统已存在的项目复制配置信息，适用于项目成员、组件、权限，工作项配置相同的项目。                                                |
| project-t4  | 瀑布式项目管理 | 通过内置的瀑布式项目管理组件，可以轻松实现项目阶段规划、 里程碑计划、WBS 工作分解等项目管理工作，通过甘特图实时掌控项目进度状况。 |

## 状态码说明

| 状态码 | 说明                 |
| :----- | :------------------- |
| 200    | 成功                 |
| 400    | 请求参数无效         |
| 403    | 无访问权限           |
| 500    | 服务器错误           |
| 609    | 项目 uuid 不存在     |
| 630    | 找不到需要删除的项目 |
| 801    | 参数错误             |
| 808    | 不是团队管理员       |
| 819    | 没有操作权限         |

## API 说明

## 添加项目

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/add

### HTTP Method

POST

### 调用权限

administer_do

### 传值方式

JSON

### 请求体示例

```json
{
  "project": {
    "uuid": "6ZpgEzkk12345678", // 需要客户端生成
    "assign": "6ZpgEzkk",
    "name": "test111"
  },
  "template_id": "project-t1", // 项目模板 （可选), 默认为：project-t1 敏捷项目管理
  "members": [
    "6ZpgEzkk" // 项目成员 （可选）
  ]
}
```

### 返回值示例

```json
{
  "project": {
    "uuid": "6ZpgEzkk12345678",
    "name": "test111",
    "assign": "6ZpgEzkk",
    "status_uuid": "to_do",
    "status_category": "to_do",
    "announcement": "",
    "deadline": 0,
    "is_pin": false,
    "status": 1,
    "is_open_email_notify": false,
    "task_update_time": 0,
    "program_uuid": ""
  },
  "server_update_stamp": 1588063781987072
}
```

### 复制项目

#### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/copy2

#### HTTP Method

POST

#### 调用权限

manage_project

#### 传值方式

JSON

#### 参数列表

| 参数名       | 值类型   | 是否可以空 | 说明                                                                                                                                                                |
| ------------ | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| project_uuid | string   | 否         | 复制项目的 uuid                                                                                                                                                     |
| project_name | string   | 否         | 新项目名                                                                                                                                                            |
| issue_types  | string   | 是         | 工作项类型 uuid                                                                                                                                                     |
| options      | []string | 是         | 项目其他组件，可传值：<br/>sprint：迭代<br/>member：成员<br/>plan：项目计划<br/>attachment：文件<br/>milestone：里程碑<br/>report：项目报表<br/>deliverable：交付物 |
| members      | string   | 是         | 项目成员                                                                                                                                                            |

#### 返回参数说明

| 参数名              | 值类型 | 说明                               |
| ------------------- | ------ | ---------------------------------- |
| project             | object | 复制成功 project,见上方 model 说明 |
| server_update_stamp | int64  | 更新时间                           |

### 请求体参考

```json
{
  "project_uuid": "M3AdEeqE97KA7cKl",
  "project_name": "12314212",
  "issue_types": ["BQDVWbQK", "5fgXqE3E"],
  "options": ["sprint", "member", "plan", "attachment", "milestone", "report", "deliverable"],
  "members": [
    "M3AdEeqE" // 当options中有members时，此处的members可以不写
  ]
}
```

### 返回值参考

```json
{
  "uuid": "6ZsSYgbh",
  "team_uuid": "BDfDqJU7",
  "owner": "Pqmud3zh",
  "job_type": "copy_project",
  "job_status": "in_progress",
  "batch_type": "single",
  "status": "show",
  "start_time": 1620463818,
  "end_time": 0,
  "extra": "{\"project_uuid\":\"Pqmud3zhUIZKvkOt\",\"project_name\":\"12314212\",\"program_uuid\":\"\",\"issue_types\":[\"BQDVWbQK\",\"5fgXqE3E\"],\"options\":[\"sprint\",\"member\",\"plan\",\"attachment\",\"milestone\",\"report\",\"deliverable\"],\"members\":null}",
  "successful_count": 0,
  "unsuccessful_count": 0,
  "unprocessed_count": 0
}
```

## 更新项目

由于一些历史原因 ONES 项目更新接口已经 items 化，更新项目接口会和普通的 REST 接口有些区别。这些区别体现在 REST 调用地址，以及调用参数上。`items` 接口通过 `itemKey` 识别要更新的对象.

itemKey 格式 `item_name-obj_uuid` <br/>
project itemKey 取值示例： project-6ZpgEzkkv2neMHNH

### URL

https://your-host-name/project/api/project/team/:teamUUID/item/:itemKey/update

### HTTP Method

POST

### 调用权限

administer_do

### 传值方式

JSON

### 请求参数列表

| 参数名          | 值类型 | 取值范围 | 说明                                                                    |
| :-------------- | :----- | :------- | :---------------------------------------------------------------------- |
| name            | string | len<=128 | 项目名称                                                                |
| assign          | string | len=8    | 项目负责人                                                              |
| status_uuid     | string | len=8    | 项目状态 uuid                                                           |
| plan_start_time | int    |          | 计划开始日期 单位秒                                                     |
| plan_end_time   | int    |          | 计划结束日期 单位秒                                                     |
| is_pin          | bool   |          | 是否置顶                                                                |
| is_archive      | bool   |          | 是否归档                                                                |
| status          | int    |          | 项目状态，1：正常；2：删除 (兼容移动端，目前接口只返回 status=1 的数据) |
| announcement    | string | len<=512 | 项目公告                                                                |

### 请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/item/project-6ZpgEzkk12345678/update' \
--header 'Content-Type: application/json' \
--header 'Ones-User-Id: 6ZpgEzkk' \
--header 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "item": {
        "assign": "6ZpgEzkk",
        "description": "2335tbdgh",
        "name": "test111222",
        "plan_end_time": null,
        "plan_start_time": null,
        "status": "in_progress",
        "announcement": "12232324ddfv",
        "is_pin": false,
        "is_archive":true
    }
}'
```

### 返回值示例

```json
{
  "item": {
    "assign": "6ZpgEzkk",
    "create_time": 1588063639546992,
    "description": "2335tbdgh",
    "item_type": "project",
    "key": "project-6ZpgEzkk12345678",
    "name": "test111222",
    "name_pinyin": "test111222",
    "owner": "6ZpgEzkk",
    "plan_end_time": null,
    "plan_start_time": null,
    "status": "in_progress",
    "uuid": "6ZpgEzkk12345678",
    "is_archive": true,
    "archive_time": 1603424013912352,
    "archive_user": "JYRdkNiz"
  }
}
```

## 删除项目

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/delete

### HTTP Method

POST

### 调用权限

administer_do

### 传值方式

JSON

### 参数列表

无

### 返回参数列表

| 参数名              | 值类型 | 说明       |
| :------------------ | :----- | :--------- |
| server_udpate_stamp | int64  | 更新时间戳 |

### 请求体示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/project/DU6krHBNRJ8sVGyN/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

```json
{
  "server_update_stamp": 1566200792018064
}
```

## 根据项目 id 获取项目列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/info

### HTTP Method

GET

### 调用权限

需要 `查看团队项目列表` 权限

### 参数列表

| 参数名 | 是否必须 | 值类型 | 说明                                                             |
| :----- | :------- | :----- | :--------------------------------------------------------------- |
| ids    | T        | string | 多个 id 使用逗号隔开，并且 uuid 不能重复，传参方式：query params |

### 返回参数列表

| 参数名           | 值类型 | 说明                             |
| :--------------- | :----- | :------------------------------- |
| projects         | array  | 项目数组，参考上面 project model |
| errors           | array  | 获取失败的项目列表               |
| &emsp;&emsp;uuid | string | 项目 uuid                        |
| &emsp;&emsp;code | int    | 错误码                           |
| &emsp;&emsp;desc | string | 错误描述                         |

### 请求体示例

```curl
curl -X GET \
  'https://your-host-name/project/api/project/team/3pDzCwAe/projects/info?ids=RGzJnspW7PFk7mZk,DU6krHBNJEEeoG8G' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

```json
{
  "projects": [
    {
      "uuid": "RGzJnspW7PFk7mZk",
      "name": "GOOD",
      "assign": "RGzJnspW",
      "status_uuid": "to_do",
      "status_category": "to_do",
      "announcement": "",
      "deadline": 0,
      "is_pin": false,
      "status": 1,
      "is_open_email_notify": false,
      "task_update_time": 1565580444,
      "program_uuid": ""
    },
    {
      "uuid": "DU6krHBNJEEeoG8G",
      "name": "test",
      "assign": "DU6krHBN",
      "status_uuid": "in_progress",
      "status_category": "in_progress",
      "announcement": "",
      "deadline": 0,
      "is_pin": false,
      "status": 1,
      "is_open_email_notify": false,
      "task_update_time": 1565938541,
      "program_uuid": ""
    }
  ],
  "errors": []
}
```

## 获取当前用户 Project 列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/my_project

### HTTP Method

GET

### 参数列表

### 返回 JSON

| JSON 键名           | 值类型 | 说明                                      |
| :------------------ | :----- | :---------------------------------------- |
| projects            | Array  | 项目数组，参考上面 project model          |
| archive_projects    | Array  | 归档 Project 数组，参考上面 project model |
| server_update_stamp | int64  | 项目数据的更新时间                        |

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/projects/my_project \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

```json
{
  "projects": [
    {
      "uuid": "DU6krHBNRJ8sVGyN",
      "name": "txx",
      "assign": "DU6krHBN",
      "status_uuid": "to_do",
      "status_category": "to_do",
      "announcement": "",
      "deadline": 0,
      "is_pin": false,
      "status": 1,
      "is_open_email_notify": false,
      "task_update_time": 1565863546,
      "program_uuid": ""
    }
    //
  ],
  "archive_projects": [],
  "server_update_stamp": 1566200426835856
}
```

## 获取团队的项目列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/all

### HTTP Method

GET

### 传值方式

JSON

### 需要权限

administer_do

### 参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围            | 说明                                                                       |
| :----- | :------- | :----- | :------------------ | :------------------------------------------------------------------------- |
| type   | F        | string | all/general/archive | 返回进行中和归档项目(默认)/返回进行中/归档项目类型，传参方式：query params |
| limit  | F        | int    | >0                  | 返回项目数，传参方式：query params                                         |

### 返回参数列表

| JSON 键名           | 值类型 | 说明                                      |
| :------------------ | :----- | :---------------------------------------- |
| projects            | Array  | 项目数组，参考上面 project model          |
| archive_projects    | Array  | 归档 Project 数组，参考上面 project model |
| server_update_stamp | int64  | 项目数据的更新时间                        |

### 请求体示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/projects/all \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回体示例

```json
{
  "projects": [
    {
      "uuid": "RGzJnspW7PFk7mZk",
      "name": "GOOD",
      "assign": "RGzJnspW",
      "status_uuid": "to_do",
      "status_category": "to_do",
      "announcement": "",
      "deadline": 0,
      "is_pin": false,
      "status": 1,
      "is_open_email_notify": false,
      "task_update_time": 1565580444,
      "program_uuid": ""
    }
    //
  ],
  "archive_projects": [],
  "server_update_stamp": 1566200797728400
}
```

> > > > > > > main
