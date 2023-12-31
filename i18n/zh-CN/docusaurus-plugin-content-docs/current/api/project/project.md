# ONES Project API 示例调用 简易流程

- [ONES Project API 示例调用 简易流程](#ones-project-api-示例调用-简易流程)
  - [创建一个项目](#创建一个项目)
  - [批量创建两条工作项](#批量创建两条工作项)
  - [查询创建的工作项](#查询创建的工作项)

## 创建一个项目

- 创建项目请参考 [添加项目](./project/project.md#添加项目)

- 首先填充 project model 参数
- 填充项目模板 id 默认值: project-t1
- 调用 [获取当前用户信息](../user/user.md#1-获取当前用户信息) 获取用户 UUID
- 将获取的用户 UUID 填充到项目成员 members

## 批量创建两条工作项

- 批量创建工作项请参考[添加工作项](./task/task.md#1-添加工作项)

- 生成工作项 uuid 生成规则：创建者 uuid+随机 8 位字符组成(共十六位)
- 按照 [参数列表](./task/task.md#参数列表) 填充数据。支持同时创建多条工作项。
- 检查参数返回值，参考 [返回值示例](./task/task.md#传建工作项返回值) 查看是否有创建失败的工作项。

## 查询创建的工作项

- 查询请参考 [筛选器](./filter/filter.md) 通用说明介绍。了解筛选器查询原理，才能组装查询结构。

- 组装查询条件进行查询，请参考 [获取某个过滤条件下的工作项列表](./filter/filter.md#2-获取某个过滤条件下的任务列表)
- 调用 [获取全局属性列表](./field/field.md#4-获取全局属性列表) 获取属性定义。例如：field006 代表 工作项所属项目, field006 代表 工作项类型。
- 参照 [示例](./filter/filter.md#请求体示例-1) 组装参数进行查询。
<!-- TOC depthFrom:1 depthTo:3 -->
