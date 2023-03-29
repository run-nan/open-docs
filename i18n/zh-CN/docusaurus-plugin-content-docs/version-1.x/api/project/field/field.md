# 目录

- [通用说明](#通用说明)
  - [固有属性](#固有属性)
  - [属性详细信息](#属性详细信息)
  - [属性配置信息](#属性配置信息)
  - [属性类型](#属性类型)
- [API 说明](#api-说明)
  - [创建全局属性](#创建全局属性)
  - [修改全局属性](#修改全局属性)
  - [删除全局属性](#删除全局属性)
  - [获取全局属性列表](#获取全局属性列表)
  - [获取属性配置列表](#获取属性配置列表)
  <!-- /TOC -->

## 通用说明

### 模型

#### 固有属性

fixed_field

| 属性 uuid | 属性别名            | 类型            | 属性描述               |
| :-------- | :------------------ | :-------------- | :--------------------- |
| field001  | summary             | text            | 标题                   |
| field002  | desc                | text            | 描述                   |
| field003  | owner               | user            | 创建者                 |
| field004  | assign              | user            | 负责人                 |
| field005  | status              | task_status     | 状态                   |
| field006  | project_uuid        | project         | 所属项目               |
| field007  | issue_type          | issue_type      | 工作项类型             |
| field008  | watchers            | user_list       | 关注者                 |
| field009  | create_time         | time            | 创建时间               |
| field010  | server_update_stamp | integer         | 更新时间               |
| field011  | sprint_uuid         | sprint          | 所属 sprint            |
| field012  | priority            | option          | 优先级                 |
| field013  | deadline            | date            | 截止日期               |
| field014  | parent_uuid         | task            | 父工作项               |
| field015  | number              | number          | 工作项编号             |
| field016  | desc_rich           | text            | 富文本                 |
| field017  | status_category     | status_category | 任务状态分类           |
| field018  | assess_manhour      | float           | 预估工时               |
| field019  | total_manhour       | float           | 已登记工时合计         |
| field020  | remaining_manhour   | float           | 剩余工时               |
| field021  | sub_issue_type_uuid | issue_type      | 子工作项类型           |
| field023  | related_count       | integer         | 关联工作项数量         |
| field025  | estimate_variance   | float           | 预估偏差               |
| field026  | time_process        | float           | 工时进度               |
| field027  | plan_start_date     | date            | 计划开始日期           |
| field028  | plan_end_date       | date            | 计划结束日期           |
| field029  | products            | product         | 所属产品（多选项）     |
| field030  | product_module      | product_module  | 所属产品模块（多选项） |
| field033  | progress            | float           | 进度                   |

#### 属性详细信息

field

- built_in 和 fixed 目前仅用于系统内置属性，用户自定义的属性，这两个值永远为 false，调用 add 和 update 接口时也不需要提供这两个值
- options 中如果是优先级，属性 value 长度为 12，desc 描述长度 128

| 参数名        | 值类型 | 允许空值 | 取值范围 | 说明                                               |
| :------------ | :----- | :------- | :------- | :------------------------------------------------- |
| uuid          | string | F        | len=8    | 属性 uuid                                          |
| name          | string | F        | len<=32  | 属性名称                                           |
| name_pinyin   | string | F        | len<=256 | 属性名称拼音                                       |
| desc          | text   | T        |          | 属性描述                                           |
| type          | int    | F        |          | 属性类型                                           |
| default_value | string | T        |          | 属性默认值                                         |
| renderer      | int    | T        |          | 属性渲染方式                                       |
| filter_option | int    | T        | 0,1      | 属性过滤选项（比如是否能作为过滤条件）             |
| search_option | int    | T        | 0,1      | 属性搜索选项（比如是否能作为搜索关键字）           |
| create_time   | int64  | F        |          | 属性创建时间，用于排序                             |
| built_in      | bool   | T        |          | 是系统内置属性，内置属性无法修改或者删除           |
| fixed         | bool   | T        |          | 是固有属性，固有属性无法通过属性配置使其隐藏       |
| options       | array  | T        |          | 属性选项，具体结构见下方表格                       |
| projects      | array  | T        |          | 目前在使用这个属性的项目，临时结果，不应该持久存储 |

options 结构

| 参数名           | 值类型 | 允许空值 | 取值范围 | 说明                 |
| :--------------- | :----- | :------- | :------- | :------------------- |
| uuid             | string | F        | len=8    | 属性选项 uuid        |
| value            | string | F        |          | 属性选项值           |
| selected         | bool   | T        | false    | 属性选项是否默认选中 |
| background_color | string | T        | len<=9   | 背景色               |
| color            | string | T        | len<=9   | 字体色               |
| desc             | string | T        | len<=128 | 描述                 |

projects 结构

| 参数名 | 值类型 | 允许空值 | 取值范围 | 说明           |
| :----- | :----- | :------- | :------- | :------------- |
| uuid   | string | F        |          | 项目 uuid      |
| name   | string | F        |          | 项目当前的名称 |

#### 属性配置信息

field_config

- 属性配置是指某个项目的某个工作项类型下的某个属性的配置
- 属性配置的有无也决定工作项类型下属性的有无，即添加一条属性配置意味着在工作项类型下添加这个属性，删除一条属性配置意味着在工作项类型下删除这个属性

| 参数名                   | 值类型 | 允许空值 | 取值范围 | 说明                                             |
| :----------------------- | :----- | :------- | :------- | :----------------------------------------------- |
| project_uuid             | string | F        | len=16   | 项目 uuid                                        |
| issue_type_uuid          | string | F        | len=8    | 工作项类型 uuid                                  |
| field_uuid               | string | T        | len=8    | 全局属性 uuid                                    |
| is_important_field       | bool   | T        |          | 是否关键属性                                     |
| important_field_position | int    | T        |          | 关键属性位置                                     |
| default_value            | string | F        |          | 属性默认值覆盖                                   |
| required                 | bool   | F        |          | 属性是否必填                                     |
| can_delete               | bool   | T        |          | 是否可以删除                                     |
| can_modify_required      | bool   | T        |          | 是否可以修改"必填项"                             |
| renderer                 | int    | F        |          | 属性渲染方式覆盖                                 |
| filter_option            | int    | F        | 0,1      | 属性过滤选项覆盖                                 |
| search_option            | int    | F        | 0,1      | 属性搜索选项覆盖                                 |
| position                 | int64  | T        |          | 屬性位置                                         |
| option_configs           | object | F        |          | 属性选项覆盖，具体结构见下方表格                 |
| generated                | bool   | F        |          | 属性的值是否是由系统生成的，生成的属性值无法修改 |

option_configs 结构

| 参数名   | 值类型 | 允许空值 | 取值范围 | 说明                 |
| :------- | :----- | :------- | :------- | :------------------- |
| uuid     | string | T        | len=8    | 全局属性选项 uuid    |
| selected | bool   | F        | false    | 属性选项默认选中覆盖 |

#### 属性类型

field_type

| 类型            | 类型枚举值 | 值类型 | 说明                                                            |
| :-------------- | :--------- | :----- | :-------------------------------------------------------------- |
| option          | 1          | string | 选项，值是当前选中的选项 uuid                                   |
| text            | 2          | string | 文本                                                            |
| integer         | 3          | int    | 整数，值 = 实际数值 x 100000                                    |
| float           | 4          | int    | 浮点数，值 = 向下取整(实际数值 x 100000)，小数点后有效位数 5 位 |
| date            | 5          | int    | 日期，utc 时间戳，以秒为单位                                    |
| time            | 6          | int    | 时间，utc 时间戳，以秒为单位                                    |
| milestone       | 7          | string | 里程碑，值是里程碑 uuid                                         |
| user            | 8          | string | 团队内成员，值是用户 uuid                                       |
| project         | 9          | string | 项目，值是项目 uuid                                             |
| task            | 10         | string | 工作项，值是工作项的 uuid                                       |
| issue_type      | 11         | string | issue_type，值 issue_type 的 uuid                               |
| task_status     | 12         | string | 工作项状态，值是工作项状态的 uuid                               |
| user_list       | 13         | array  | 用户列表                                                        |
| number          | 14         | int    | 工作项编号                                                      |
| multi_line_text | 15         | string | 多行文本                                                        |
| multi_option    | 16         | array  | 多选，值 = 选中的选项 uuid 数组                                 |

## API 说明

### 创建全局属性

创建一个全局属性

#### URL

https://your-host-name/project/api/project/team/:teamUUID/fields/add

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 允许空值 | 说明                                           |
| :----- | :----- | :------- | :--------------------------------------------- |
| field  | object | F        | [属性详细信息](#属性详细信息)但不需要提供 uuid |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 说明                   |
| :------------------ | :----- | :------- | :--------------------- |
| field               | object | F        | [全局属性](#固有属性)  |
| server_update_stamp | int64  | F        | 数据更新时间单位：微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/fields/add \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
  "field": {
    "name": "field_create",
    "type": 2,
    "renderer": 1,
    "filter_option": 0,
    "search_option": 1
  }
}'
```

#### 返回示例

```json
{
  "field": {
    "uuid": "5QiY2jyp",
    "name": "field_create",
    "name_pinyin": "",
    "desc": "",
    "type": 2,
    "default_value": null,
    "renderer": 1,
    "filter_option": 0,
    "search_option": 1,
    "create_time": 1595405661,
    "built_in": false,
    "fixed": false,
    "options": null
  },
  "server_update_stamp": 1595405661640464
}
```

### 修改全局属性

修改一个全局属性

#### URL

https://your-host-name/project/api/project/team/:teamUUID/field/:fieldUUID/update

#### HTTP Method

POST

#### 是否需要登录

是

#### 调用权限

administer_do

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 允许空值 | 说明                                             |
| :----- | :----- | :------- | :----------------------------------------------- |
| field  | object | F        | [属性详细信息](#属性详细信息)，但不需要提供 uuid |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 说明                   |
| :------------------ | :----- | :------- | :--------------------- |
| field               | object | F        | [全局属性](#固有属性)  |
| server_update_stamp | int64  | F        | 数据更新时间单位：微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/field/KXPq1Ez8/update \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
  "field": {
    "name": "12",
    "type": 2
  }
}'
```

#### 返回示例

```json
{
  "field": {
    "uuid": "5QiY2jyp",
    "name": "update_field_nam",
    "name_pinyin": "field_create",
    "desc": "",
    "type": 2,
    "default_value": null,
    "renderer": 1,
    "filter_option": 0,
    "search_option": 1,
    "create_time": 1595405661,
    "built_in": false,
    "fixed": false,
    "options": null
  },
  "server_update_stamp": 1595405856961344
}
```

### 删除全局属性

删除一个全局属性, 删除不可撤销

#### URL

https://your-host-name/project/api/project/team/:teamUUID/field/:fieldUUID/delete

#### 调用权限

administer_do

#### 是否需要登录

是

#### HTTP Method

POST

#### 传值方式

URL

#### 请求参数列表

| 参数名    | 值类型 | 允许空值 | 说明              |
| :-------- | :----- | :------- | :---------------- |
| teamUUID  | string | F        | 所属团队 UUID     |
| fieldUUID | string | F        | 要删除的属性 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 说明                   |
| :------------------ | :----- | :------- | :--------------------- |
| server_update_stamp | int64  | F        | 数据更新时间单位：微秒 |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task_status/KXPq1Ez8/delete \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "server_update_stamp": 1565854531016352
}
```

### 获取全局属性列表

列出当前团队下的所有全局属性

#### URL

https://your-host-name/project/api/project/team/:teamUUID/fields

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 说明                   |
| :------------------ | :----- | :------- | :--------------------- |
| fields              | array  | F        | [全局属性](#固有属性)  |
| server_update_stamp | int64  | F        | 数据更新时间单位：微秒 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/fields \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "fields": [
    {
      "uuid": "AajgmACP",
      "name": "Android",
      "name_pinyin": "Androidxi4tong3ban3ben3",
      "desc": "",
      "type": 1,
      "default_value": null,
      "renderer": 0,
      "filter_option": 0,
      "search_option": 0,
      "create_time": 1564741783,
      "built_in": false,
      "fixed": false,
      "options": [
        {
          "uuid": "9kSD2ggy",
          "value": "V7.1",
          "selected": false,
          "background_color": "#307fe2",
          "color": "#fff",
          "desc": ""
        }
      ]
    }
  ],
  "server_update_stamp": 1565838569015120
}
```

### 获取属性配置列表

列出当前用户在当前团队下能访问到的所有属性配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/field_configs

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

URL

#### 请求参数列表

| 参数名   | 值类型 | 允许空值 | 说明          |
| :------- | :----- | :------- | :------------ |
| teamUUID | string | F        | 所属团队 UUID |

#### 返回参数列表

| 参数名              | 值类型 | 允许空值 | 说明                   |
| :------------------ | :----- | :------- | :--------------------- |
| field_configs       | array  | F        | [全局属性](#固有属性)  |
| server_update_stamp | int64  | F        | 数据更新时间单位：微秒 |

#### 请求示例

```curl
curl -X GET \
  https://your-host-name/project/api/project/team/3pDzCwAe/field_configs \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "field_configs": [
    {
      "project_uuid": "DU6krHBNXuPAbpv8",
      "issue_type_uuid": "Ux99P1Vn",
      "field_uuid": "LcznabZj",
      "is_important_field": false,
      "important_field_position": 0,
      "default_value": null,
      "renderer": 0,
      "filter_option": 0,
      "search_option": 0,
      "required": false,
      "can_delete": true,
      "can_modify_required": true,
      "generated": false,
      "position": 0,
      "option_configs": [
        {
          "uuid": "LXTuy9aE",
          "selected": false,
          "background_color": "",
          "color": "",
          "desc": ""
        },
        {
          "uuid": "HW8Fnxvi",
          "selected": false,
          "background_color": "",
          "color": "",
          "desc": ""
        }
      ],
      "type": 1
    }
  ],
  "server_update_stamp": 1565855548617888
}
```
