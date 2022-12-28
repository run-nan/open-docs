# 目录

- [project model 说明](#project-model-说明)
- [API 说明](#api-说明)
  - [添加项目](#添加项目)
  - [复制项目](#复制项目)
  - [更新项目](#更新项目)
  - [删除项目](#删除项目)
  - [根据项目 id 获取项目列表](#根据项目-id-获取项目列表)
  - [获取当前用户 Project 列表](#获取当前用户项目列表)
  - [获取团队的项目列表](#获取团队的项目列表)

<!-- /TOC -->

## project model 说明

| 参数名               | 值类型 | 取值范围 | 说明                                                                    |
| :------------------- | :----- | :------- | :---------------------------------------------------------------------- |
| uuid                 | string | len=16   | 由创建者 uuid+随机 8 位字符组成，需要客户端生成                         |
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

添加项目

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/add

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 请求参数列表

| 参数名      | 是否必须 | 值类型   | 取值范围                   | 说明                                      |
| :---------- | :------- | :------- | :------------------------- | :---------------------------------------- |
| project     | T        | project  |                            | [项目对象](#project-model-说明)           |
| template_id | F        | string   | [参考 template](#template) | 项目模板, 默认为：project-t1 敏捷项目管理 |
| members     | F        | []string |                            | 项目成员 uuid 数组                        |

### 返回参数列表

| 参数名              | 值类型  | 取值范围 | 取值例子         | 说明                            |
| :------------------ | :------ | :------- | :--------------- | :------------------------------ |
| project             | project |          |                  | [项目对象](#project-model-说明) |
| server_update_stamp | int64   |          | 1671084606858692 | 项目更新时间，单位微秒          |

### 请求示例

```bash
curl --location --request POST 'https://your-host-name/project/api/project/team/T8Zbied7/projects/add' \
--header 'Ones-User-ID: XPvprKLy' \
--header 'Ones-Auth-Token: fa34FWMz74bsXyvcZP7wvzL79obaX7atFszLnSS9hrAqAuFsMH5zHotgxfp3s8Bb' \
--header 'Content-Type: application/json' \
--header 'Cookie: language=zh' \
-d '{
  "project": {
      "uuid": "XPvprKLykkkkkk45",
      "owner": "XPvprKLy",
      "name": "new_project",
      "status": 1,
      "members": []
   },
   "template_id": "project-t1",
   "members": []
}'
```

### 返回示例

```json
{
  "project": {
    "uuid": "XPvprKLykkkkkk45",
    "name": "new_project",
    "assign": "XPvprKLy",
    "status_uuid": "to_do",
    "status_category": "to_do",
    "announcement": "",
    "deadline": 0,
    "is_pin": false,
    "status": 1,
    "is_open_email_notify": false,
    "task_update_time": 0,
    "program_uuid": "",
    "type": "agile",
    "is_sample": false,
    "is_archive": false,
    "archive_user": "",
    "archive_time": 0
  },
  "server_update_stamp": 1671084606858692
}
```

## 复制项目

复制项目

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/copy2

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 请求参数列表

| 参数名       | 值类型   | 是否可以空 | 说明                                                                                                                                                                |
| ------------ | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| project_uuid | string   | 否         | 复制项目的 uuid                                                                                                                                                     |
| project_name | string   | 否         | 新项目名                                                                                                                                                            |
| issue_types  | string   | 是         | 工作项类型 uuid                                                                                                                                                     |
| options      | []string | 是         | 项目其他组件，可传值：<br/>sprint：迭代<br/>member：成员<br/>plan：项目计划<br/>attachment：文件<br/>milestone：里程碑<br/>report：项目报表<br/>deliverable：交付物 |
| members      | string   | 是         | 项目成员，当 options 中有 members 时，此处的 members 可以不写                                                                                                       |

### 返回参数列表

| 参数名              | 值类型 | 说明                                                     |
| ------------------- | ------ | -------------------------------------------------------- |
| project             | object | 复制成功 project,见上方 [model](#project-model-说明)说明 |
| server_update_stamp | int64  | 更新时间，单位微秒                                       |

### 请求示例

```bash
curl -L -X POST 'https://your-host-name/project/api/project/team/T8Zbied7/projects/copy2' \
-H 'Ones-User-ID: XPvprKLy' \
-H 'Ones-Auth-Token: fa34FWMz74bsXyvcZP7wvzL79obaX7atFszLnSS9hrAqAuFsMH5zHotgxfp3s8Bb' \
-H 'Content-Type: application/json' \
-H 'Cookie: language=zh' \
-d '{
  "project_uuid": "XPvprKLyVUmf7QPq",
  "project_name": "测试项目1",
  "issue_types": [
    "D63PEwbg"
  ],
  "component_template_uuid": [],
  "options": [
    "sprint",
    "member",
    "plan",
    "attachment",
    "milestone",
    "report",
    "deliverable"
  ]
}'
```

### 返回示例

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

### 是否需要登录

是

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

### 返回参数列表

| 参数名 | 值类型         | 取值范围 | 取值例子 | 说明                                                             |
| :----- | :------------- | :------- | :------- | :--------------------------------------------------------------- |
| item   | project object |          |          | 和[项目对象](#project-model-说明)基本一样，多了 item_type 和 key |

### 请求示例

```bash
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/item/project-6ZpgEzkk12345678/update' \
--header 'Content-Type: application/json' \
--header 'Ones-User-Id: 6ZpgEzkk' \
--header 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
--header 'Content-Type: application/json' \
-d '{
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

### 返回示例

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

删除项目

### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/delete

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

无

### 请求参数列表

无

### 返回参数列表

| 参数名              | 值类型 | 说明               |
| :------------------ | :----- | :----------------- |
| server_udpate_stamp | int64  | 更新时间，单位微秒 |

### 请求示例

```bash
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/project/DU6krHBNRJ8sVGyN/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

```json
{
  "server_update_stamp": 1566200792018064
}
```

## 根据项目 id 获取项目列表

根据项目 id 获取项目列表，可传多个 id

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/info

### HTTP Method

GET

### 是否需要登录

是

### 传值方式

query params

### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 说明                                     |
| :----- | :------- | :----- | :--------------------------------------- |
| ids    | T        | string | 多个 id 使用逗号隔开，并且 uuid 不能重复 |

### 返回参数列表

| 参数名   | 值类型 | 说明                             |
| :------- | :----- | :------------------------------- |
| projects | array  | 项目数组，参考上面 project model |
| errors   | array  | 获取失败的项目列表               |
| uuid     | string | 项目 uuid                        |
| code     | int    | 错误码                           |
| desc     | string | 错误描述                         |

### 请求示例

```bash
curl -X GET \
  'https://your-host-name/project/api/project/team/3pDzCwAe/projects/info?ids=RGzJnspW7PFk7mZk,DU6krHBNJEEeoG8G' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

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

## 获取当前用户项目列表

获取当前用户项目列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/my_project

### HTTP Method

GET

### 是否需要登录

是

### 请求参数列表

无

### 返回参数列表

| 参数名              | 值类型    | 说明                                                                 |
| :------------------ | :-------- | :------------------------------------------------------------------- |
| projects            | []project | 项目数组，参考上面 [project model 说明](#project-model-说明)         |
| archive_projects    | []project | 归档 Project 数组，参考上面[project model 说明](#project-model-说明) |
| server_update_stamp | int64     | 项目数据的更新时间，单位微秒                                         |

### 请求示例

```bash
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/projects/my_project \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

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
  ],
  "archive_projects": [],
  "server_update_stamp": 1566200426835856
}
```

## 获取团队的项目列表

获取团队的项目列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/projects/all

### HTTP Method

GET

### 是否需要登录

是

### 传值方式

query params

### 请求参数列表

| 参数名 | 是否必须 | 值类型 | 取值范围            | 说明                                               |
| :----- | :------- | :----- | :------------------ | :------------------------------------------------- |
| type   | F        | string | all/general/archive | 返回进行中和归档项目(默认)/返回进行中/归档项目类型 |
| limit  | F        | int    | >0                  | 返回项目数                                         |

### 返回参数列表

| JSON 键名           | 值类型    | 说明                                                                 |
| :------------------ | :-------- | :------------------------------------------------------------------- |
| projects            | []project | 项目数组，参考上面 [project model 说明](#project-model-说明)         |
| archive_projects    | []project | 归档 Project 数组，参考上面[project model 说明](#project-model-说明) |
| server_update_stamp | int64     | 项目数据的更新时间，单位微秒                                         |

### 请求示例

```bash
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/projects/all \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: WuX0XphkP7370DjtlTq3TrXQ0VdGWmQmDFrGEpj3HNvevWbLgH5TNPycbbzvSYhT' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

### 返回示例

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
  ],
  "archive_projects": [],
  "server_update_stamp": 1566200797728400
}
```
