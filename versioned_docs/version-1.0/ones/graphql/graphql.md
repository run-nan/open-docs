# ONES GraphQL API

<ul>
<li><a href="#前言">前言</a></li>
<ul>
<li><a href="#type_system">类型系统</a></li>
<li><a href="#learn_resource">学习 GraphQL</a></li>
</ul>
<li><a href="schema">ONES GraphQL Schema</a></li>
<li><a href="#call_ones_graphql">调用 GraphQL 接口</a></li>
<li><a href="#操作符">操作符</a></li>
<ul>
<li><a href="#范围字段二级运算符">范围字段二级运算符</a></li>
<li><a href="#浮点型字段二级运算符">浮点型字段二级运算符</a></li>
</ul>
<li><a href="#组织筛选条件">组织筛选条件</a></li>
<li><a href="#聚合函数">聚合函数</a></li>
<li><a href="#分页">分页</a></li>
</ul>

## 前言

对接 ONES GraphQL API 需要对 GraphQL 有一定的了解。

GraphQL 是一种用于 API 的查询语言。也是一个满足你数据查询的运行时。 GraphQL 对 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

GraphQL 是关于图的查询语言。它是对连接现代应用程序到云服务这一问题的全面解决方案。因此，它构成了现代应用程序开发堆栈中一个新的重要层的基础：数据图。这个新的层将 ONES 的所有应用程序数据和服务集中在同一个地方，具有一致、安全且易于使用的界面，因此任何人都能够通过最小的磨合利用它。

## <p id="type_system">类型系统</p>

GraphQL 是定义在类型系统（Type System）上的图查询语言。所有的查询都是基于已被定义好的 Schema 模型之上。查看 [ONES GraphQL Schema](./schema/schema.md) 定义。

### <p id="learn_resource">学习 GraphQL</p>

如果您刚开始接触 GraphQL， 对语言本身还不是很了解， 请移步至 GraphQL 资源学习网站，进行详细的学习与了解。

<a href="https://graphql.org/learn/">GraphQL 英文网站</a>

<a href="https://graphql.cn/learn/">GraphQL 中文网站</a>

[GraphQL 草案](https://spec.graphql.cn/#)

## <p id="call_ones_graphql">调用 GraphQL 接口</p>

数据查询接口

### 接口请求 URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

### HTTP Method

post

### 是否需要登录

是 [点我获取登录方法](../auth/auth.md)

### 请求参数列表

| 参数名    | 值类型 | 说明                               |
| :-------- | :----- | :--------------------------------- |
| query     | string | GraphQL 查询语句                   |
| variables | map    | 键值对类型， 作为 GraphQL 查询参数 |

### 返回值列表

| 参数名 | 值类型      | 说明                    |
| :----- | :---------- | :---------------------- |
| data   | interface{} | 任意类型， 作为查询结果 |

### 请求体参考

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"query":"query PRODUCTS($filter: Filter, $orderBy: OrderBy) {\n    products(filter: $filter, orderBy: $orderBy) {\n      name\n      uuid\n      key\n      owner {\n        uuid\n        name\n      }\n\n      createTime\n      assign {\n        uuid\n        name\n      }\n      \n    productComponents {\n      uuid\n      name\n      parent{\n        uuid\n      }\n      key\n      type\n      contextType\n      contextParam1\n      contextParam2\n      position\n      urlSetting{\n        url\n      }\n      views{\n        key\n        uuid\n        name\n        builtIn\n      }\n    }\n  \n      \n    taskCount\n    taskCountToDo\n    taskCountDone\n    taskCountInProgress\n  \n    }\n  }","variables":{"orderBy":{"createTime":"DESC"}}}'
```

### 错误值参考

当接口传入字段 query 有语法错误 或者 variables 参数值与 query 需求参数不匹配，接口将返回错误 500

```json
{
  "code": 500,
  "errcode": "ServerError",
  "type": "ServerError"
}
```

### 返回值参考

```json
{
    "data": {
        "products": [
            {
                "assign": {
                    "name": "”沙鳄鱼“沙·克洛克达尔",
                    "uuid": "QuRAYz3k"
                },
                "createTime": 1581999173,
                "key": "product-6ZpgEzkkLPikRNXX",
                "name": "啊啊啊",
                "owner": {
                    "name": "贝加庞克",
                    "uuid": "6ZpgEzkk"
                },
                "productComponents": [
                    {
                        "contextParam1": "",
                        "contextParam2": null,
                        "contextType": 0,
                        "key": "product_component-XrqBwPaC",
                        "name": "模块",
                        "parent": null,
                        "position": 3,
                        "type": 6,
                        "urlSetting": null,
                        "uuid": "XrqBwPaC",
                        "views": []
                    },
                    {
                        "contextParam1": "3D2UjSN6",
                        "contextParam2": null,
                        "contextType": 1,
                        "key": "product_component-QCBCdgqM",
                        "name": "任务",
                        "parent": null,
                        "position": 1,
                        "type": 3,
                        "urlSetting": null,
                        "uuid": "QCBCdgqM",
                        "views": [
                            {
                                "builtIn": true,
                                "key": "product_component_view-Q6QZEXM9",
                                "name": "全部任务",
                                "uuid": "Q6QZEXM9"
                            }
                        ]
                    },
                    {
                        "contextParam1": "4sBPV4Eh",
                        "contextParam2": null,
                        "contextType": 1,
                        "key": "product_component-NpawYgE9",
                        "name": "缺陷",
                        "parent": null,
                        "position": 2,
                        "type": 3,
                        "urlSetting": null,
                        "uuid": "NpawYgE9",
                        "views": [
                            {
                                "builtIn": true,
                                "key": "product_component_view-DQRDXBCC",
                                "name": "全部缺陷",
                                "uuid": "DQRDXBCC"
                            }
                        ]
                    },
                    {
                        "contextParam1": "GwNxpqQh",
                        "contextParam2": null,
                        "contextType": 1,
                        "key": "product_component-TFBoaLF9",
                        "name": "需求",
                        "parent": null,
                        "position": 0,
                        "type": 3,
                        "urlSetting": null,
                        "uuid": "TFBoaLF9",
                        "views": [
                            {
                                "builtIn": true,
                                "key": "product_component_view-UcK9jVug",
                                "name": "全部需求",
                                "uuid": "UcK9jVug"
                            }
                        ]
                    }
                ],
                "taskCount": 0,
                "taskCountDone": 0,
                "taskCountInProgress": 0,
                "taskCountToDo": 0,
                "uuid": "6ZpgEzkkLPikRNXX"
            },
           ....
        ]
    }
}
```

---

如果您在编写 GraphQL 语句调用 ONES GraphQL 接口时遇到了一些问题。可以在使用 ONES 系统时打开浏览器控制台，参考 ONES 前端界面调用 ONES GraphQL 接口的方式。

---

### 操作符

查询操作符（Operand），定义了 GraphQL 语法筛选器(filter)中允许的操作符。

| 操作符           | 是否包含二级运算符 | 说明                                                |
| :--------------- | :----------------- | :-------------------------------------------------- |
| in               | 否                 | 当存在字段，且字段的值为数组内的其中一个时为 true   |
| notIn            | 否                 | 当存在字段，且字段的值不是数组内的任何一个时为 true |
| equal            | 否                 | 当存在字段，且字段的值等于指定的值时为 true         |
| notEqual         | 否                 | 当存在字段，且字段的值不等于指定的值时为 true       |
| range            | 是                 | 日期字段，当存在字段，且字段的值在范围内时为 true   |
| between          | 是                 | 浮点型字段，当存在字段，且字段的值在范围内时为 true |
| match            | 否                 | 包含，相当于 sql like                               |
| notMatch         | 否                 | 不包含，相当于 sql like 非                          |
| matchFilterGroup | 是                 | 多选下拉框的组合条件                                |

#### 范围字段二级运算符

range 用于日期数据比较

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

#### 浮点型字段二级运算符

between 用于整型浮点型数据比较

| 操作符   | 说明     |
| :------- | :------- |
| equal    | 等于     |
| notEqual | 不等于   |
| gte      | 大于等于 |
| gt       | 大于     |
| lt       | 小于     |
| lte      | 小于等于 |

### 组织筛选条件

需要根据属性（字段名）是否为固有属性（通过属性类型：builtIn 判断）来组织筛选条件。

固有属性语法：field_operand

自定义属性语法： \_field_operand

---

### 获取属性详细信息

获取特定 Schema 的所有属性（包含自定义属性）以及属性详情。pool 取值范围包括 ONES 所有 Schema name, context 取值同权限 context 相同, 一般取：team;

示例：取 task 所有属性以及属性详情。

```
{
    fields(filter: { pool_in: ["task"], context: { type_equal: "team" } }) {
        uuid
        name
        fieldType
        allowEmpty
        required
        builtIn
        defaultValue
        aliases
    }
}
```

返回值参考：

```json
{
  "data": {
    "fields": [
      {
        "aliases": ["uuid"],
        "allowEmpty": false,
        "builtIn": true, // 固有属性
        "defaultValue": null,
        "fieldType": "text",
        "name": "[UUID]",
        "required": false,
        "uuid": null
      },
      {
        "aliases": ["status"],
        "allowEmpty": false,
        "builtIn": false, // 自定义属性
        "defaultValue": null,
        "fieldType": "status",
        "name": "任务状态",
        "required": false,
        "uuid": null
      }
    ]
  }
}
```

---

组织筛选条件示例：[example](./example/example.md#request_graphql)

查询自定义属性多选下拉列表示例：

```graphql
{
  tasks(filter: { _LNCtECAx_matchFilterGroup: [{ uuid_match: "M3DdwZCv" }] }) {
    uuid
    _LNCtECAx {
      uuid
      value
    }
    name
    number
  }
}
```

### 聚合函数

目前聚合函数只支持： sum；用法和 sql 语句类似 通过分组 groupBy, 实现在某一列上的 sum 聚合操作。

示例：统计迭代工时

```graphql
{
  buckets(groupBy: { tasks: { sprint: {} } }) {
    key
    sprint {
      uuid
    }
    estimatedHours(sum: "tasks.estimatedHours")
    actualHours(sum: "tasks.manhours.hours")
    remainingHours(sum: "tasks.remainingManhour")
  }
}
```

### 分页

Item 分页是通过 bucket 实现的，以游标作为位置依据，同时支持向下和向上翻页。

Item 分页跟[官方建议的分页方式](https://graphql.org/learn/pagination)是类似的，只是官方文档用的是 connection，而这里用的是现有的 bucket。分页参数和信息所用的属性名称，也尽可能跟官方文档保持一致。

#### 示例

下面的请求，以 after 指定的游标为起点，获取游标后的 10 个任务：

```
{
    buckets(
        groupBy: {
            tasks: {}
        }
        pagination: {
            first: 10
            after: "70bbN1HY6ZkJAAAAdGFzay1HQXk2dUwzbTlqUTk3dHF3"
            preciseCount: false
        }
    ) {
	key
        pageInfo {
            count
            totalCount
            startCursor
            endCursor
            hasNextPage
            unstable
        }
        tasks(
            filter: {
                project_in: ["GAy6uL3m3WDwkYTL"]
            }
            orderBy: {
                number: ASC
            }
        ) {
            number
            uuid
        }
    }
}
```

返回结果：

```
{
    "data": {
        "buckets": [
            {
                "key": "bucket.0.__all",
                "pageInfo": {
                    "count": 10,
                    "endCursor": "70bbN1HY6ZkTAAAAdGFzay1HQXk2dUwzbUVadHZlS1Vu",
                    "hasNextPage": true,
                    "startCursor": "70bbN1HY6ZkKAAAAdGFzay1HQXk2dUwzbVhTY0o0SmRq",
                    "totalCount": 177,
                    "unstable": false
                },
                "tasks": [
                    {
                        "number": 11,
                        "uuid": "GAy6uL3mXScJ4Jdj"
                    },
                    {
                        "number": 12,
                        "uuid": "GAy6uL3mTy9xJ656"
                    },
                    {
                        "number": 13,
                        "uuid": "GAy6uL3mJH3BmXdb"
                    },
                    {
                        "number": 14,
                        "uuid": "GAy6uL3mNM5D86kt"
                    },
                    {
                        "number": 15,
                        "uuid": "GAy6uL3mMUmS4yTk"
                    },
                    {
                        "number": 16,
                        "uuid": "GAy6uL3mENqCAURW"
                    },
                    {
                        "number": 17,
                        "uuid": "GAy6uL3mMpKBVhJn"
                    },
                    {
                        "number": 18,
                        "uuid": "GAy6uL3mTw7xbKNw"
                    },
                    {
                        "number": 19,
                        "uuid": "GAy6uL3mDsjUuVkb"
                    },
                    {
                        "number": 20,
                        "uuid": "GAy6uL3mEZtveKUn"
                    }
                ]
            }
        ]
    }
}
```

#### 参数说明-Pagination

分页时需要给 bucket 加上 pagination 参数。

这个参数跟其它 bucket 参数一样，只在设置 bucket.groupBy 时生效。如果只对简单列表做分页，不需要分组，那么 groupBy 应该直接设置为这个列表。比如上面的例子，groupBy 的值设置为 tasks，没有再嵌套属性。此时，结果会返回单个 key 为 bucket.0.\_\_all 的分组。

没有参数时，为了向前兼容，默认返回整个列表，但以后这个行为可能发生变化。

pagination 可以设置以下几个参数：

- first：向后翻页时需要获取的数量。默认为 0。
- after：向后翻页时的游标。未设置或者值为空字符串，且没有设置 before 时，默认从列表的初始位置开始。
- last：向前翻页时需要获取的数量。默认为 0。
- before：向前翻页时的游标。未设置或者值为空字符串时，默认从列表的末尾位置开始
- around: 必须和 center 一起使用，从中间获取时的数量
- center：和 around 一起使用，从中间开始获取时的 item-key(注意这里不是游标，是 key)
- limit: 要取出的数量，可用于取代 first/last/around ， 不可和 first/last/around 同时使用
- preciseCount: 是否需要返回精确的条数，如为 false 速度会快很多，但是返回的总数是未经权限过滤的总数
  其中 first 和 after 用于向后翻页，last 和 before 用于向前翻页。当设置了 last 时，优先向前翻页。

around 和 center 必须一起使用,理由是从中间获取必然有一个起始点。如果对应 bucket/分组/筛选条件下，没有对应的 center-key 的时候，返回空数组

#### 参数说明-PageInfo

不管有没有设置 pagination 参数，所有 bucket 都能取到 pageInfo 属性。

pageInfo 包含以下几个属性：

- count：本次返回的 item 数量。
- totalCount：bucket 内的 item 总数。
- hasNextPage：是否还有下一页。向后翻页时指示本页后面是否还有 item，向前翻页时则指示本页前面是否还有 item。
- endCursor：本页最后一个 item 的游标。一般用于向后翻页。
- startCursor：本页第一个 item 的游标。一般用于向前翻页。
- unstable：分页是否不稳定。如果值为 true，则表示以下两种情况：
  - 本次分页使用的游标代表的 item，在整个列表中的位置发生了变化。比如：
    - 列表： [t1, t2, t3, t4, t5, t6]。
    - 第一次分页：first=3，after=null，取到 [t1, t2, t3]，endCursor=t3。
    - 列表发生变化： [t3, t4, t5, t6]，变化导致 t3 的位置从 2 变成了 0。
    - 第二次分页：first=3，after=t3，正常取到 [t4, t5, t6]，但列表不稳定，前面的 item 可能需要重新取。
  - 本次分页使用的游标代表的 item，已经从列表消失。比如： - 列表： [t1, t2, t3, t4, t5, t6]。 - 第一次分页：first=3，after=null，取到 [t1, t2, t3]，endCursor=t3。 - 列表发生变化： [t1, t4, t5, t6]，变化导致 t3 消失。 - 第二次分页：first=3，after=t3，由于无法找到 t3，cursor 失效，但仍然尝试用 t3 原本的位置 2 去分页，取到 [t6]。此时前面的 item 必须重新取。
    其中返回的游标只对有相同 filter 或者 orderBy 的 item 列表有效，如果更改了 item 列表的 filter 或者 orderBy，会提示游标格式错误。另外，游标都是临时的，不应该持久化存储。

#### 分组下的分页

有分组的情况下，分页更复杂一些。

分组时，界面上往往需要显示所有分组的信息，再考虑到分组的折叠和展开，最终决定使用这样的分页方案：返回所有分组，每个分组单独分页。

举个例子说明整个流程。下面是一个任务按任务负责人分组的请求：

```
{
    buckets(
        groupBy: {
            tasks: {
                assign: {}
            }
        }
        pagination: {
            first: 2
        }
        orderBy: {
            assign: {
                namePinyin: ASC
            }
        }
    ) {
        key
        pageInfo {
            count
            totalCount
            startCursor
            endCursor
            hasNextPage
            unstable
        }
        assign {
            uuid
        }
        tasks(
            filter: {
                project_in: ["GAy6uL3m3WDwkYTL"]
            }
            orderBy: {
                number: ASC
            }
        ) {
            number
            uuid
        }
    }
}
```

返回结果：

```
{
    "data": {
        "buckets": [
            {
                "assign": {
                    "uuid": "R5HpscHD"
                },
                "key": "bucket.0.user-R5HpscHD",
                "pageInfo": {
                    "count": 2,
                    "endCursor": "KdXEXLMPa5QBAAAAdGFzay01ZThOODVaTkpoZTNnRk1M",
                    "hasNextPage": true,
                    "startCursor": "KdXEXLMPa5QAAAAAdGFzay01ZThOODVaTlZmYmt1NkpI",
                    "totalCount": 4,
                    "unstable": false
                },
                "tasks": [
                    {
                        "number": 5913,
                        "uuid": "5e8N85ZNVfbku6JH"
                    },
                    {
                        "number": 5954,
                        "uuid": "5e8N85ZNJhe3gFML"
                    }
                ]
            },
            {
                "assign": {
                    "uuid": "GAy6uL3m"
                },
                "key": "bucket.0.user-GAy6uL3m",
                "pageInfo": {
                    "count": 2,
                    "endCursor": "KdXEXLMPa5QBAAAAdGFzay1HQXk2dUwzbThxVnJmZkE3",
                    "hasNextPage": true,
                    "startCursor": "KdXEXLMPa5QAAAAAdGFzay1HQXk2dUwzbVVvM3piNE1m",
                    "totalCount": 48,
                    "unstable": false
                },
                "tasks": [
                    {
                        "number": 1,
                        "uuid": "GAy6uL3mUo3zb4Mf"
                    },
                    {
                        "number": 2,
                        "uuid": "GAy6uL3m8qVrffA7"
                    }
                ]
            },
            {
                "assign": {
                    "uuid": "TFRz1DRP"
                },
                "key": "bucket.0.user-TFRz1DRP",
                "pageInfo": {
                    "count": 2,
                    "endCursor": "KdXEXLMPa5QBAAAAdGFzay01ZThOODVaTkJpNzh6c3Fw",
                    "hasNextPage": true,
                    "startCursor": "KdXEXLMPa5QAAAAAdGFzay01ZThOODVaTklSemV3QVVw",
                    "totalCount": 10,
                    "unstable": false
                },
                "tasks": [
                    {
                        "number": 5595,
                        "uuid": "5e8N85ZNIRzewAUp"
                    },
                    {
                        "number": 5611,
                        "uuid": "5e8N85ZNBi78zsqp"
                    }
                ]
            }
        ]
    }
}
```

可以看到，所有分组都返回了前 2 个任务，pagination 的 first 参数对所有分组同时起效。

每个分组都有自己独立的游标，要怎么继续给某个分组单独分页呢？以这里的第二个分组 bucket.0.user-GAy6uL3m 举例，下一次查询时，在 bucket 的 filter 里加上一个 key_equal 或者 key_in 条件就可以了。请求如下：

```
{
    buckets(
        groupBy: {
            tasks: {
                assign: {}
            }
        }
        filter: {
            key_equal: "bucket.0.user-GAy6uL3m"
        }
        pagination: {
            first: 10
            after: "KdXEXLMPa5QBAAAAdGFzay1HQXk2dUwzbThxVnJmZkE3"
        }
        orderBy: {
            assign: {
                namePinyin: ASC
            }
        }
    ) {
        key
        pageInfo {
            count
            totalCount
            startCursor
            endCursor
            hasNextPage
            unstable
        }
        assign {
            uuid
        }
        tasks(
            filter: {
                project_in: ["GAy6uL3m3WDwkYTL"]
            }
            orderBy: {
                number: ASC
            }
        ) {
            number
            uuid
        }
    }
}
```

返回结果：

```
{
    "data": {
        "buckets": [
            {
                "assign": {
                    "uuid": "GAy6uL3m"
                },
                "key": "bucket.0.user-GAy6uL3m",
                "pageInfo": {
                    "count": 10,
                    "endCursor": "KdXEXLMPa5QLAAAAdGFzay1HQXk2dUwzbVR5OXhKNjU2",
                    "hasNextPage": true,
                    "startCursor": "KdXEXLMPa5QCAAAAdGFzay1HQXk2dUwzbUtwMk41ZDV1",
                    "totalCount": 48,
                    "unstable": false
                },
                "tasks": [
                    {
                        "number": 3,
                        "uuid": "GAy6uL3mKp2N5d5u"
                    },
                    {
                        "number": 4,
                        "uuid": "GAy6uL3mDF5NFsCL"
                    },
                    {
                        "number": 5,
                        "uuid": "GAy6uL3m4fPaNaSv"
                    },
                    {
                        "number": 6,
                        "uuid": "GAy6uL3mfd7DWHTv"
                    },
                    {
                        "number": 7,
                        "uuid": "GAy6uL3m8QRzp2AY"
                    },
                    {
                        "number": 8,
                        "uuid": "GAy6uL3mSKVn88Zx"
                    },
                    {
                        "number": 9,
                        "uuid": "GAy6uL3m3L2D95P6"
                    },
                    {
                        "number": 10,
                        "uuid": "GAy6uL3m9jQ97tqw"
                    },
                    {
                        "number": 11,
                        "uuid": "GAy6uL3mXScJ4Jdj"
                    },
                    {
                        "number": 12,
                        "uuid": "GAy6uL3mTy9xJ656"
                    }
                ]
            }
        ]
    }
}
```
