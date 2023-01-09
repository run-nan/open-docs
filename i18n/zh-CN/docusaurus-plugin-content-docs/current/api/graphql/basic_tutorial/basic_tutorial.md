# ONES GraphQL 简易教程

## 概述

ONES GraphQL 是一种查询语言，可以根据语句内容返回指定的数据。

## ONES GraphQL 查询语句结构

```
{
	Item			# Query the item of a property type
	(
		...						# Query condition, including groupBy and orderBy
	)
	{
		...						# Return
	}
}
```

查询语句整个结构由一个 `{ }` 包括起来。其中：

- `user` 是 ONES 系统中的用户类型属性，而 `users` 是 ONES 系统中的 `Item`，表示用户类型属性列表；
- `( )` 部分包括查询条件，`filter` 为过滤关键字，过滤条件为 `uuid_equal = "4Y5qoeuL"`，表示过滤条件满足 `uuid` 等于 "4Y5qoeuL" 的对象，此处对象为用户；
- `( )` 后的 `{ } ` 表示返回域，返回域中 `name` 为用户名称，表示返回用户的名称信息。

整个查询语句可以描述成：查询 `uuid` 等于 "4Y5qoeuL" 的用户名称。

由以上的查询语句，衍生出 4 个部分的内容，分别是 ONES GraphQL 语句类型、查询对象、查询条件及返回域，文档会对这 4 部分内容分别进行描述。

## ONES GraphQL 语句类型

ONES GraphQL 支持查询和修改，查询语句为 `query{ }`，因为 ONES GraphQL 的主要用途是查询，所以默认情况下可以将关键字 `query` 省去，即 `{ }` 等同于 `query{ }` ，修改数据的语句为 `mutation{ }`，一般情况下很少使用 GraphQL 进行数据修改，如果需要**增删改**的操作，可以优先考虑调用其他 Restful API 实现。

## ONES GraphQL 查询对象

之前的描述中提到了 `user` 和 `users`。

`user` 属于用户类型属性，除了 `user` 之外，ONES 系统中还有 `task`、`project` 等类型属性，每种类型属性都是 ONES 系统已经定义好的数据模型，我们称之为 `Schema`。所有的类型属性组成了 ONES GraphQL 的类型系统，而所有的查询都是基于已被定义好的 Schema 之上。关于 ONES GraphQL Schema 定义，具体可以查看文档「ONES GraphQL Schema」部分。

而 ONES GraphQL 的查询对象都是基于不同类型属性的 `Item`，我们称之为属性列表，例如 `users`、 `tasks`、`projects` 等。

## ONES GraphQL 查询条件

ONES GraphQL 查询条件主要有三类： `filter`、`groupBy`、`orderBy`，对应的查询作用分别是过滤、分组和排序。

### filter

`filter` 表示过滤，语法根据属性是否为固有属性（可通过属性类型字段 `builtIn` 进行区分）会有所区别：

- 固有属性语法：field_operand
- 自定义属性语法： \_field_operand

以上语法中，`field` 部分表示属性的字段， `operand` 部分表示操作符，`filter` 的操作符可参照以下「操作符」部分的说明

#### 操作符

| 操作符   | 是否包含二级运算符 | 说明                                                |
| :------- | :----------------- | :-------------------------------------------------- |
| in       | 否                 | 当存在字段，且字段的值为数组内的其中一个时为 true   |
| notIn    | 否                 | 当存在字段，且字段的值不是数组内的任何一个时为 true |
| equal    | 否                 | 当存在字段，且字段的值等于指定的值时为 true         |
| notEqual | 否                 | 当存在字段，且字段的值不等于指定的值时为 true       |
| range    | 是                 | 日期字段，当存在字段，且字段的值在范围内时为 true   |
| between  | 是                 | 浮点型字段，当存在字段，且字段的值在范围内时为 true |
| match    | 否                 | 包含，相当于 sql like                               |
| notMatch | 否                 | 不包含，相当于 sql like 非                          |

##### 范围字段二级运算符

`range` 用于日期数据比较

| 操作符           | 说明                                                                                                                          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| quick            | 相对日期，取值范围：last_7_days，last_14_days，last_30_days，yesterday，today，this_week，this_month，this_quarter，this_year |
| from，to         | 日期间隔 string                                                                                                               |
| fromUnix，toUnix | 日期间隔 int                                                                                                                  |
| equal            | 等于，即大于等于某个日期的 0 点，并且小于下一天的 0 点                                                                        |
| notEqual         | 不等于，即小于某个日期的 0 点，或者大于等于下一天的 0 点                                                                      |
| gte              | 大于等于，即大于等于某个日期的 0 点                                                                                           |
| gt               | 大于                                                                                                                          |
| lt               | 小于                                                                                                                          |
| lte              | 小于等于，即小于下一天的 0 点                                                                                                 |

##### 浮点型字段二级运算符

`between` 用于整型浮点型数据比较

| 操作符   | 说明     |
| :------- | :------- |
| equal    | 等于     |
| notEqual | 不等于   |
| gte      | 大于等于 |
| gt       | 大于     |
| lt       | 小于     |
| lte      | 小于等于 |

#### 语法结构

```
// One level single condition
filter: {
	field_operand: Conditional value according to the specified type
}

// Multiple conditions at one level
filter: {
	field1_operand: Conditional value according to the specified type
	field2_operand: Conditional value according to the specified type
}

// If the fields in the filter criteria belong to the ONES object type, you need to expand them in order
// Two level single condition
filter: {
	field1: {
		field2_operand: Conditional value according to the specified type
	}
}
```

举例

```
// Query users and filter users with user name of "user1"
users
  filter: {
    name_equal: "user1"
  }
)

// Query items, filter items created yesterday, and the name of the responsible person includes "user1" and "user2"
// Since the person in charge is the user object and the name of the person in charge is used as the filter condition, it needs to be expanded
projects(
  filter: {
    createTime_quick: "yesterday"
    assign: {
    	name_in: ["user1", "user2"]
    }
  }
)

// The query conditions must be fields in the query object
projects(
  filter: {
    user: {
    	name_equal: "user1"
    }
  }
)
```

综上所述，我们可以知道：

- 过滤条件不局限于 `Item` 的直接属性，嵌套属性一样可以作为筛选条件，例如上面例子中 `project.name` 属于直接属性，而 `assign.name` 属于嵌套属性;
- 过滤条件是树状结构，叶子节点的属性必须要加下划线 + 操作符；
- 支持多个过滤条件。

### groupBy

`groupBy` 表示分组，这里需要引入 `bucket` 概念，`bucket` 主要配合 `groupBy` 条件语句进行查询分组工作，以下列举一个简单的分组例子进行说明

```
{
    buckets(
        groupBy: {
            projects: {
                assign: {}
            }
        }
    ){
        assign{
            name
        }
        projects{
            name
        }
    }
}
```

- 列出所有项目，即 `projects`

- 根据 `groupBy` 中的分组条件，按照负责人 `assign` 将数据分成 n 组，每一份都分别放到一个 `bucket` 中

- 因为是按照 `assign` 划分，所以每个 `bucket` 对应一个唯一的 `assign`，可以在每个 bucket 中取出 `assign` 的任意属性

#### bucket 中语法使用规范

- `groupBy` 的第一层必须是一个 `Item`，表明要将哪些数据放到 `bucket` 中；第二层不能出现 `Item`，表明这些数据要依据哪个属性来进行分组；

- `bucket` 能获取的属性，是依据 `groupBy` 决定，上面的例子按照 `projects.assign` 分组，因此可以在 `bucket` 中选取 `projects` 和 `assign` 属性。

### orderBy

`orderBy` 表示排序，可以对查询返回的结果，按照查询 `Item` 中的属性值进行升序或降序排序。以下通过一个例子进行说明：

```
projects(
  orderBy: {
		assign: {
    	uuid: "ASC"
    }
  }
)
```

排序同样不局限于 `Item` 的直接属性，嵌套属性一样可以进行排序，例如上面的 `assign.uuid`。支持多级排序，排序条件是树状结构，叶子节点的属性必须要指定升序/降序。

## ONES GraphQL 返回域

ONES GraphQL 返回域由一个 `{ }` 概括起来，返回域中的字段需要符合 ONES GraphQL Schema 定义，例如工作项 `task` 的 Schema 定义中不包含 `email` 属性，则无法在返回域中使用 `email` 字段，其他符合 Schema 定义的属性，均可以在返回域中进行返回，嵌套属性需要依次展开返回。

```
projects(
	// query
){
	uuid
	name
	assign{
		name
	}
}
```

**以上内容，主要介绍了 ONES GraphQL 的相关概念，接下来会介绍如何使用 ONES GraphQL。主要是如何通过 API 进行调用、如何在 Postman 中使用 GraphQL。**

## ONES GraphQL 接口

### ONES GraphQL

#### 接口描述

用于根据 ONES GraphQL 查询语句，返回查询结果。

#### 接口地址

> https://{your-host-name}/project/api/project/team/{team-uuid}/items/graphql

#### 请求方式

> POST

#### 请求类型

> application/json

#### 请求参数

##### Headers

| **参数名**      | **值类型** | **描述**                                |
| --------------- | ---------- | --------------------------------------- |
| Content-Type    | string     | 内容类型，传值：`application/json`      |
| Ones-User-Id    | string     | 用户 uuid                               |
| Ones-Auth-Token | string     | 登录接口用户登录成功后返回的 token 信息 |

##### Params

| **参数名** | **值类型** | **参数位置** | **必传** | **描述**                                      |
| ---------- | ---------- | ------------ | -------- | --------------------------------------------- |
| team-uuid  | string     | In path      | 是       | 团队 uuid，可以在用户登录接口的响应结果中获取 |

##### Body

| **参数名** | **值类型** | **必传** | **描述**                           |
| ---------- | ---------- | -------- | ---------------------------------- |
| query      | string     | 是       | ONES GraphQL 查询语句              |
| variables  | map        | 否       | 键值对类型， 作为 GraphQL 查询参数 |

###### 请求样例

GraphQL 查询语句

```
{
    tasks{
        uuid
        name
    }
}
```

以上 GraphQL 查询语句对应的 json 接口请求格式为：

```json
{
  "query": "{\n    tasks{\n        uuid\n        name\n    }\n}",
  "variables": {
    "orderBy": {
      "uuid": "ASC"
    }
  }
}
```

## 常见问题

### 1.如何获取属性详细信息

可以通过「ONES GraphQL Schema」文档进行查阅，或者通过 ONES GraphQL 语句进行查询，建议使用后者获取**最新**的属性信息。

获取特定 Schema 的所有属性（包含自定义属性）以及属性详情，示例：取 ` task` 所有属性以及属性详情。

```
{
    fields(filter: { pool_in: ["task"], context: { type_equal: "team" }
        }) {
        context{
            type
        }
        key
        uuid
        name
        itemType
        fieldType
        allowEmpty
        required
        builtIn
        defaultValue
        aliases
        options{
            uuid
            value
            color
        }
    }
}
```

`pool` 表示属性池，取值范围包括 ONES 所有 Schema name，`context` 表示上下文， 一般取 `team`。需要注意，ONES GraphQL Schema 定义的数据模型，均使用小驼峰命名，而通过以上 ONES GraphQL 接口查询返回的属性名称，使用下划线命名，在实际的使用过程中注意进行转换。

### 2.什么是自定义属性

自定义属性，是由用户在 ONES 系统自行定义的属性，由于自定义属性不具备固定性，所以自定义属性的属性字段由 ONES 系统根据内部规范与规则自动生成，开发者可通过 ONES GraphQL 查询获取自定义属性的字段。

### 3.如何查询工作项自定义属性以及对应的属性值

具体流程如下：

**步骤一：** 根据工作项属性名称，查找属性对应的字段名称

说明：自定义属性的字段名称由系统生成的编码组成，开发者需要调用 GraphQL 接口获取属性的字段名称，以下查询中根据自定义属性「需求来源」进行举例。

GraphQL 查询语句

```
{
    fields(
        filter: {
            pool_in: ["task"],
            context: {
                type_equal: "team"
            }
            name_match: "Task"
        }
    ) {
        uuid
        name
        aliases
        fieldType
    }
}
```

GraphQL 查询返回

```json
{
  "data": {
    "fields": [
      {
        "aliases": ["GAMEuBgs"],
        "fieldType": "option",
        "name": "Task",
        "uuid": "GAMEuBgs"
      }
    ]
  }
}
```

**注意：**

- `fieldType` 为 option 类型，通过 `_field.value` 或 `field.value` 获取属性值；
- `fieldType` 为 date、text、integer、float 类型，通过 `_field` 或 `field` 获取属性值。

从查询返回结果中可以获知，「需求来源」属性对应的字段名称为 `GAMEuBgs`，字段类型为 `option`。

**步骤二：** 根据步骤一中获取到的字段名称，查询不同工作项中的属性的取值

说明：从**步骤一**中获取到「需求来源」属性的字段后，通过 GraphQL 接口查询指定工作项下「需求来源」属性的值，由于「需求来源」的字段类型为 `option`，属性值对应 `option.value`。

其中，使用自定义属性进行查询时，需要在字段名称前添加下划线，例如「需求来源」该属性的字段名称为 `GAMEuBgs`，调用 GraphQL 接口进行查询时，传值为 `_GAMEuBgs`。以下查询中，筛选项目名称为 "demo"，工作项类型为 "需求" 的工作项，并查询工作项中字段为 `_GAMEuBgs` 的属性及其属性值，即「需求来源」该属性的值。

GraphQL 查询语句

```
{
    tasks(
        filter: {
            project: {
                name_equal: "demo"
            }
            issueType: {
                name_equal: "Requirement"
            }
        }
    ){
        _GAMEuBgs{
            value
        }
    }
}
```

GraphQL 查询返回

```json
{
  "data": {
    "tasks": [
      {
        "_GAMEuBgs": {
          "value": "Technical Support"
        }
      },
      {
        "_GAMEuBgs": {
          "value": "User"
        }
      },
      {
        "_GAMEuBgs": {
          "value": "Sales"
        }
      },
      {
        "_GAMEuBgs": null
      },
      {
        "_GAMEuBgs": null
      }
    ]
  }
}
```

## 附录

### 1.常见 Schema

| **Schema**    | **描述**   |
| ------------- | ---------- |
| activity      | 活动       |
| activityChart | 活动视图   |
| department    | 部门       |
| issueType     | 工作项类型 |
| manhour       | 工时       |
| milestone     | 里程碑     |
| product       | 产品       |
| productModule | 产品模块   |
| project       | 项目       |
| sprint        | 迭代       |
| task          | 工作项     |
