# ONES Item

- [简介](#简介)
- [Field](#field)
- [FieldType](#fieldtype)
- [Schema 示例](#schema示例)
- [调用 Item](#调用item)
  - [查询 Item](../graphql/introduction.md#call_ones_graphql)
  - [添加 Item](#添加item)
  - [批量添加 Item](#批量添加item)
  - [更新 Item](#更新item)
  - [删除 Item](#删除item)

## 简介

- ONES Item 是 ONES 产品关于数据筛选、数据的存储的解决方案。是基于 rest、graphql 实现的后端服务框架。
- Item 的核心是类型系统（Type System），每个类型（Schema）对应一个对象实体（例如：用户实体）。
- Item 用属性（Field）集合去描述每个类型（Schema）。
- 在 Item 中最重要的部分是属性（Field）以及描述属性的元数据。
- 在 Item 中 Schema 之间是有联系的。像数据结构中的图，每一个 Schema 本身是一个点，Schema 中的 Field 作为连接的边。Item 定义了 ONES 中所有实体之间的关系。

## <div id="Field">Field</div>

每个 Schema 由多个 Field 组成，Field 作为元数据具有以下固有属性：

<div style={{overflow:scroll}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td>

别名列表

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allowEmpty</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[允许空值]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否内置属性]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canUpdate</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否可以更新属性值]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="#context">Context</a></td>
<td>

[所在上下文]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[创建时间]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultValue</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[默认值]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>evaluated</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[计算属性值生成器]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fieldType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[属性类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hidden</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否在属性配置界面上显示]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[ItemKey]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[最大长度]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[属性名称]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]</td>
<td>

[单选/多选属性：选项列表]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pool</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[属性池]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[必须值不等于 nil]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfigs</strong></td>
<td valign="top">[<a href="#testcasefieldconfig">TestcaseFieldConfig</a>!]</td>
<td>

使用此属性的属性配置列表

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usedIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[使用到的 item]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

## FieldType

属性类型

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

---

## Schema 示例

用户实体 User Schema 示例,

- type 属性类型，可通过 FiledType 找到对应的字段类型
- required 是否必填，T 必填，F 非必填。
- canUpdate 能否被更新
- allowEmpty 是否为空
- 查看更多属性信息，可通过调用接口获取[获取属性详细信息](../graphql/introduction.md#获取属性详细信息)

| aliases     | type       | required | canUpdate | allowEmpty | description      |
| :---------- | :--------- | :------- | :-------- | :--------- | :--------------- |
| uuid        | text       | F        | F         | F          | [UUID]           |
| item_type   | text       | T        | F         | F          | [Item 类型]      |
| key         | text       | F        | F         | F          | [Item Key]       |
| name        | text       | T        | T         | F          | 用户名称         |
| name_pinyin | text       | F        | F         | F          | [名称拼音]       |
| avatar      | text       | F        | T         | F          | 用户头像         |
| email       | text       | F        | F         | F          | 邮箱             |
| sync_types  | integer    | F        | F         | F          | 关联类型         |
| manhours    | manhour    | F        | F         | F          | [用户登记工时]   |
| tasks       | task       | F        | F         | F          | [用户负责的任务] |
| status      | enum       | F        | F         | F          | 成员状态         |
| projects    | project    | F        | F         | F          | [用户参与的项目] |
| user_groups | user_group | F        | F         | F          | [用户所在用户组] |
| departments | department | F        | F         | F          | [用户所在部门]   |

---

## 调用 Item

说明：

- item_type 取值为具体 schema_name
- key 取值具体 schema_name-uuid

---

## 添加 Item

向 item 添加数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/add

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| aliases   | type              | required | canUpdate | allowEmpty | description                              |
| :-------- | :---------------- | :------- | :-------- | :--------- | :--------------------------------------- |
| item_type | text              | T        | F         | F          | [Item 类型]                              |
| key       | text              | F        | F         | F          | [Item Key]                               |
| values    | map[string]object |          |           |            | 具体参数见[Schema](../graphql/schema.md) |

### 返回值列表

| aliases   | type   | description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| item_type | text   | [Item 类型]                                           |
| key       | text   | [Item Key]                                            |
| print()   | object | 每个 schema 会实现自己的 print 接口，输出一个额外信息 |

---

## 批量添加 Item

向 item 批量添加数据

### URL

https://your-host-name/project/api/project/team/:teamUUID/items/batch_add

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| aliases | type   | required | canUpdate | allowEmpty | description |
| :------ | :----- | :------- | :-------- | :--------- | :---------- |
| items   | []item | F        |           |            | item 数组   |

item

| aliases   | type              | required | canUpdate | allowEmpty | description                              |
| :-------- | :---------------- | :------- | :-------- | :--------- | :--------------------------------------- |
| item_type | text              | T        | F         | F          | [Item 类型]                              |
| key       | text              | F        | F         | F          | [Item Key]                               |
| values    | map[string]object |          |           |            | 具体参数见[Schema](../graphql/schema.md) |

### 返回值列表

| aliases   | type   | description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| item_type | text   | [Item 类型]                                           |
| key       | text   | [Item Key]                                            |
| print()   | object | 每个 schema 会实现自己的 print 接口，输出一个额外信息 |

---

## 更新 Item

### URL

https://your-host-name/project/api/project/team/:teamUUID/item/itemKey/update

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

| aliases   | type              | required | canUpdate | allowEmpty | description                              |
| :-------- | :---------------- | :------- | :-------- | :--------- | :--------------------------------------- |
| item_type | text              | T        | F         | F          | [Item 类型]                              |
| key       | text              | F        | F         | F          | [Item Key]                               |
| values    | map[string]object |          |           |            | 具体参数见[Schema](../graphql/schema.md) |

### 返回值列表

| aliases   | type   | description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| item_type | text   | [Item 类型]                                           |
| key       | text   | [Item Key]                                            |
| print()   | object | 每个 schema 会实现自己的 print 接口，输出一个额外信息 |

---

## 删除 Item

### URL

https://your-host-name/project/api/project/team/:teamUUID/item/itemKey/delete

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

none

### 返回值列表

| 参数名              | 值类型 | 说明       |
| :------------------ | :----- | :--------- |
| server_udpate_stamp | int64  | 更新时间戳 |

---
