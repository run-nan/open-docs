---
nav:
  title: 指南
  order: 1
--- 

# Sample2

### 实现内容

工作流扩展插件是为了变更迭代状态时验证迭代下关联的所有需求状态都为已完成，则允许迭代状态变更成功且将关联需求状态都变更为已发布，以便于规范迭代管理流程。变更项目状态时支持自定义验证条件，以便于规范管理项目流程

### 代码API

```
apis:
  -
    type: addition
    methods:
      - POST
    url: /getRegistrableDays
    function: GetRegistrableDays
  - 
    type: prefix
    methods:
      - POST
    url: /team/:teamUUID/item/:itemKey/update
    function: CheckCondition
  - 
    type: suffix
    methods:
      - POST
    url: /team/:teamUUID/tasks/add2
    function: Add
  - 
    type: addition
    methods:
      - POST
    url: /setCondition
    function: Filter
  - 
    type: addition
    methods:
      - POST
    url: /getCondition
    function: GetCondition
  - 
    type: addition
    methods:
      - POST
    url: /getFilterView
    function: GetFilterView
  - 
    type: addition
    methods:
      - POST
    url: /getFilterGraql
    function: Filtergraphql
```

Type: addition(新增)、prefix(前置)、suffix(后置)

Url: 访问路径

Function:函数名

### 功能描述

前端应用筛选器添加验证条件，变更项目状态时根据自定义验证条件判断是否能够修改项目状态并进行相应操作，更新迭代状态是根据添加的后置动作从上至下依次执行添加的条件进行相应的操作

### 筛选结构

- 筛选关系：是指几个筛选条件之间的关系，为 `且`、`或`关系，即「且」关系为几个条件之间的并集；「或」关系为几个条件之间的联集。
- 筛选字段：是指在筛选当中，所要的筛选项，一般为表单当中的所有可筛选的字段。

- 筛选操作：是指筛选字段和筛选值之间的关系，常见的筛选操作有：`大于`、`大于等于`、`小于`、`小于等于`、`等于`、`不等于`、`介于`、`包含`、`不包含`、`为空`、`不为空`等等。
- 筛选值： 是指所需要筛选的数值。展示效果通过筛选字段类型及操作控制。

### 筛选结构

- 筛选关系：是指几个筛选条件之间的关系，为 `且`、`或`关系，即「且」关系为几个条件之间的并集；「或」关系为几个条件之间的联集。
- 筛选字段：是指在筛选当中，所要的筛选项，一般为表单当中的所有可筛选的字段。

- 筛选操作：是指筛选字段和筛选值之间的关系，常见的筛选操作有：`大于`、`大于等于`、`小于`、`小于等于`、`等于`、`不等于`、`介于`、`包含`、`不包含`、`为空`、`不为空`等等。
- 筛选值： 是指所需要筛选的数值。展示效果通过筛选字段类型及操作控制。

### Props

```
enum FieldType = {
  text: 'text',
  number: 'number',
  time: 'time',
  
  select: 'select',
  userSelect: 'userSelect'
}

enum OperateType = {
	eq: 'eq', // (equal) 相等
  neq: 'neq', // (not equal)不相等  
  gt: 'gt', // (greater than) 大于
  geq: 'geq', // (greater than or equal) 大于等于
  lt: 'lt', // (less than) 小于
  leq: 'leq', // (less than or equal)小于等于
  include: 'include', // (include) 包含
  exclude: 'exclude', // (exclude) 不包含
  between: 'between', // (between) 介于
  empty: 'empty', // (empty) 为空
  some: 'some', // (not empty) 不为空
}
```
