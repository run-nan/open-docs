# Context

- [通用说明](#通用说明)
  - [上下文类型](#上下文类型)
  - [上下文参数](#上下文参数)

# 通用说明

## 模型

### 上下文类型

permission_context_type

| 类型名            | 说明                                                     |
| :---------------- | :------------------------------------------------------- |
| organization      | 适用于组织管理的权限                                     |
| team              | 适用于团队在所有产品下的权限                             |
| do                | 适用于产品 project 相关权限                              |
| project           | 适用于产品 project（do）中某个项目内的权限               |
| issue_type        | 适用于产品 project（do）中某个项目的某个任务类型内的权限 |
| task              | 适用于产品 project（do）中的某个工作项                   |
| component         | 适用于某个项目中 component 相关权限                      |
| program           | 适用于产品 project（do）中项目集关权限                   |
| product           | 适用于产品 「产品管理」相关权限                          |
| product_component | 适用于产品 「产品组件」相关权限                          |
| wiki              | 适用于产品 wiki 相关权限                                 |
| space             | 适用于 wiki 的某个 space 的权限                          |
| page              | 适用于 wiki 的某个 page 的权限                           |
| testcase          | 适用于产品 testcase 相关权限                             |
| testcase_library  | 适用于产品 testcase 中某个用例库权限                     |
| testcase_plan     | 适用于产品 testcase 中某个测试计划权限                   |

### 上下文参数

permission_context_param

#### organization 参数

无

#### team 参数

无

#### do 参数

无

#### project 参数

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明      |
| :----------- | :----- | :------- | :------- | :-------- |
| project_uuid | string | F        | len=16   | 项目 uuid |

#### issue_type 参数

| 参数名          | 值类型 | 允许空值 | 取值范围 | 说明          |
| :-------------- | :----- | :------- | :------- | :------------ |
| project_uuid    | string | F        | len=16   | 项目 uuid     |
| issue_type_uuid | string | F        | len=8    | 任务类型 uuid |

#### task 参数

| 参数名    | 值类型 | 允许空值 | 取值范围 | 说明        |
| :-------- | :----- | :------- | :------- | :---------- |
| task_uuid | string | F        | len=16   | 工作项 uuid |

#### component 参数

| 参数名         | 值类型 | 允许空值 | 取值范围 | 说明      |
| :------------- | :----- | :------- | :------- | :-------- |
| project_uuid   | string | F        | len=16   | 项目 uuid |
| component_uuid | string | F        | len=8    | 组件 uuid |

#### program 参数

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明        |
| :----------- | :----- | :------- | :------- | :---------- |
| program_uuid | string | F        | len=8    | 项目集 uuid |

#### product 参数

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明      |
| :----------- | :----- | :------- | :------- | :-------- |
| product_uuid | string | F        | len=16   | 产品 uuid |

#### product_component 参数

| 参数名                 | 值类型 | 允许空值 | 取值范围 | 说明          |
| :--------------------- | :----- | :------- | :------- | :------------ |
| product_component_uuid | string | F        | len=8    | 产品组件 uuid |

#### wiki 参数

无

#### space 参数

| 参数名     | 值类型 | 允许空值 | 取值范围 | 说明       |
| :--------- | :----- | :------- | :------- | :--------- |
| space_uuid | string | F        | len=8    | space uuid |

#### page 参数

| 参数名    | 值类型 | 允许空值 | 取值范围 | 说明       |
| :-------- | :----- | :------- | :------- | :--------- |
| page_uuid | string | F        | len=8    | space uuid |

#### testcase 参数

无

#### testcase_library 参数

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明            |
| :----------- | :----- | :------- | :------- | :-------------- |
| library_uuid | string | F        | len=8    | 测试用例库 uuid |

#### testcase_plan 参数

| 参数名    | 值类型 | 允许空值 | 取值范围 | 说明          |
| :-------- | :----- | :------- | :------- | :------------ |
| plan_uuid | string | F        | len=8    | 测试计划 uuid |
