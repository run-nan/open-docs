# 更新日志

这个包所有值得注意的变化都将记录在这个文件中。

# 0.12.0 (2023-12-01)

### 新特性

- **Store:** 🌟 提供 `useWikiShareInfo` hook 获取当前访问的分享页面组信息
- **Store:** 🌟 提供 `useWikiTemplatePageInfo` hook 获取当前访问的页面模版的信息
- **Store:** 🌟 提供 `useCustomEditorInfo` hook 获取自定义编辑器所需上下文信息

### Bug 修复

- **Store:** 🐞 修复 `Suspense` 用法下可能存在的死循环问题

# 0.10.0 (2023-04-25)

### 新特性

- **Store:** 🌟 提供 `useDashboardCardInfo` hook 获取自定义卡片的上下文数据
- **Store:** 🌟 提供 `useDashboardCardConfigInfo` hook 获取自定义卡片配置弹窗的上下文数据

# 0.9.0 (2023-03-31)

### 新特性

- **Store:** 🌟 提供 `useVariablesInfo` hook 获取插槽传递的非标准数据
- **Store:** 🌟 提供 `useModuleInstanceInfo` hook 获取手动激活的插件实例信息

# 0.8.0 (2023-02-21)

### 新特性

- **Store:** 🌟 提供 `useWikiSpaceInfo` hook 获取当前页面组上下文信息

# 0.5.0 (2022-11-25)

### 新特性

- **Store:** 🌟 提供 `destroyCurrentModule` 方法销毁当前插槽
- **Store:** 🌟 提供 `useTaskInfo` hook 获取插件工作项上下文信息
- **Store:** 🌟 提供 `useDocumentInfo` hook 获取当前宏的数据和操作

# 0.3.0 (2022-09-26)

### 新特性

- **Store:** 🌟 提供 `useAction` hook 获取 ONES 拦截处理方法
- **Store:** 🌟 提供 `useProgressJobInfo` hook 在进度管理器任务详情弹窗中，获取当前任务的信息
- **Store:** 🌟 提供 `useProjectRoleInfo` hook 获取当前项目成员组件中，所选项目角色的信息
- **Store:** 🌟 提供 `usePluginInfo` hook 获取当前的插件信息
- **Store:** 🌟 提供 `useFilterInfo` hook 获取当前访问的筛选器视图信息
- **Store:** 🌟 提供 `useDashboardInfo` hook 获取当前访问的仪表盘信息
- **Store:** 🌟 提供 `useProjectInfo` hook 获取当前项目信息
- **Store:** 🌟 提供 `useTestPlanInfo` hook 获取当前测试计划信息
- **Store:** 🌟 提供 `useTestCaseLibraryInfo` hook 获取当前访问的用例库的信息
- **Store:** 🌟 提供 `usePipelineInfo` hook 获取当前流水线信息
- **Store:** 🌟 提供 `useProgramInfo` hook 获取当前项目集信息
- **Store:** 🌟 提供 `useUserInfo` hook 获取当前用户信息

# 0.1.0 (2022-04-07)

### 新特性

- **Store:** 🌟 提供 `useTeamInfo` hook 获取当前团队信息
- **Store:** 🌟 提供 `useOrganizationInfo` hook 获取当前组织信息
- **Store:** 🌟 提供 `useProductInfo` hook 获取当前产品信息
