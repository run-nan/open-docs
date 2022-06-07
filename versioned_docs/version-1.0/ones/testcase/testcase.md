#### TestCase 部分接口 item 化

- [TestCase Item](#TestCaseItem)
  - [library](#library)
  - [module](#module)
  - [case](#case)
  - [plan](#plan)
  - <a href="#plan_case">plan_case</a>
  - <a href="#plan_case_step">plan_case_step</a>
  - <a href="#field_config">field_config</a>
- [API 说明](#api-说明)
  - [1. 查询用例库](#1-查询用例库)

## TestCaseItem

### library

| 属性名              | 属性名说明         | 属性类型            |
| ------------------- | ------------------ | ------------------- |
| key                 | key                | string              |
| uuid                | uuid               | string              |
| name                | 用例库名字         | string              |
| isPin               | 是否置顶           | bool                |
| namePinyin          | 名字拼音           | string              |
| createTime          | 创建时间（时间戳） | int64               |
| members             | 用户域             | userdomain          |
| testcaseFieldConfig | 属性配置           | TestCaseFieldConfig |

### module

| 属性名          | 属性名说明         | 属性类型        |
| --------------- | ------------------ | --------------- |
| key             | key                | string          |
| uuid            | uuid               | string          |
| name            | 用例库名字         | string          |
| path            | 路径               | string          |
| namePinyin      | 名字拼音           | string          |
| createTime      | 创建时间（时间戳） | int64           |
| isDefault       | 是否是无所属模块   | bool            |
| position        | position           | int64           |
| parent          | 父节点             | TestCaseModule  |
| testcaseLibrary | 用例库             | TestCaseLibrary |

### case

| 属性名          | 属性名说明         | 属性类型        |
| --------------- | ------------------ | --------------- |
| key             | key                | string          |
| uuid            | uuid               | string          |
| name            | 用例库名字         | string          |
| path            | 路径               | string          |
| namePinyin      | 名字拼音           | string          |
| createTime      | 创建时间（时间戳） | int64           |
| isDefault       | 是否是无所属模块   | bool            |
| position        | position           | int64           |
| parent          | 父节点             | TestCaseModule  |
| testcaseLibrary | 用例库             | TestCaseLibrary |

### plan

| 属性名           | 属性名说明         | 属性类型   |
| ---------------- | ------------------ | ---------- |
| key              | key                | string     |
| uuid             | uuid               | string     |
| name             | 用例库名字         | string     |
| owner            | 创建人             | User       |
| namePinyin       | 名字拼音           | string     |
| createTime       | 创建时间（时间戳） | int64      |
| stage            | 测试阶段           | string     |
| planStatus       | 测试计划状态       | string     |
| members          | 用户域             | UserDomain |
| relatedProject   | 关联项目           | Project    |
| relatedSprint    | 关联迭代           | Sprint     |
| relatedIssueType | 关联任务类型       | IuuseType  |
| todoCaseCount    | 待测试用例数       | int        |
| passedCaseCount  | 通过用例数         | int        |
| blockedCaseCount | 阻塞用例数         | int        |
| skippedCaseCount | 跳过用例数         | int        |
| failedCaseCount  | 失败用例数         | int        |
| assigns          | 负责人             | User       |

### <p id="plan_case">plan_case</p>

| 属性名       | 属性名说明           | 属性类型     |
| ------------ | -------------------- | ------------ |
| key          | key                  | string       |
| note         | 备注                 | string       |
| result       | 用例状态             | string       |
| createTime   | 创建时间（时间戳）   | int64        |
| warnStep     | 警告步骤（暂时没用） | string       |
| relatedTasks | 关联任务             | string       |
| testcasePlan | 测试计划             | TestCasePlan |
| testcaseCase | 用例                 | TestCaseCase |
| executor     | 执行人               | User         |

### <p id="plan_case_step">plan_case_step</p>

| 属性名           | 属性名说明   | 属性类型     |
| ---------------- | ------------ | ------------ |
| key              | key          | string       |
| stepResult       | 步骤执行结果 | string       |
| actualResult     | 实际结果     | string       |
| testcasePlan     | 测试计划     | string       |
| testcaseCase     | 用例         | TestCaseCase |
| testcaseCaseStep | 用例步骤     | User         |

### <p id="field_config">field_config</p>

| 属性名            | 属性名说明         | 属性类型        |
| ----------------- | ------------------ | --------------- |
| key               | key                | string          |
| uuid              | uuid               | string          |
| name              | 配置名称           | string          |
| namePinyin        | 配置名称的拼音     | string          |
| createTime        | 创建时间（时间戳） | int64           |
| isDefault         | 是否是默认         | bool            |
| testcaseLibraries | 用例库             | TestCaseLibrary |

## API 说明

---

### 特殊说明：

使用 graphql 查询，可以自行构建请求参数和筛选条件等等

[graphql 使用方法请参考 GraphQL 文档](../graphql/graphql.md)

---

### 1. 查询用例库

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

JSON

#### 参数列表

| 参数名 | 值类型 | 值说明           | 是否可以空 |
| ------ | ------ | ---------------- | ---------- |
| query  | string | graphql 请求脚本 | 否         |

#### graphql 请求脚本

```
{
    testcaseLibraries{
        key
        uuid
        name
        isPin
        namePinyin
        createTime
        members{
            type
            param
        }
    }
}
```

#### 返回值

```json
{
  "data": {
    "testcaseLibraries": [
      {
        "createTime": 1547783373,
        "isPin": false,
        "key": "testcase_library-4VxhZDds",
        "members": [
          {
            "param": "Gq8ZZZ7F",
            "type": "single_user"
          },
          {
            "param": "",
            "type": "testcase_administrators"
          }
        ],
        "name": "test",
        "namePinyin": "test",
        "testcaseFieldConfig": {
          "key": "testcase_field_config-BWViJmUg",
          "name": "默认配置"
        },
        "uuid": "4VxhZDds"
      }
    ]
  }
}
```
