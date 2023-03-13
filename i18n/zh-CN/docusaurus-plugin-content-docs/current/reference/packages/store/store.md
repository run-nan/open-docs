---
sidebar_position: 3
notice: 按版本发布顺序从上往下添加包；对于类型的定义，与代码相反，先用后定义。
---

# @ones-op/store

[![](https://npm.partner.ones.cn/badge/v/@ones-op/store.svg)](https://npm.partner.ones.cn/package/@ones-op/store)

我们提供了一套插件**前端**数据获取库，可以帮你在插件内获取 ONES 标品数据。为了保证数据的只读性，对象和数组数据将会使用 `Proxy` 代理，你不能也不应该修改从标品获取的数据。

## 要求

| **ONES**   | **@ones-op/store** |
| ---------- | ------------------ |
| `v3.6.25+` | `v0.1.0+`          |

## 安装

在插件 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/store
```

## 使用

```tsx
import { useTeamInfo } from '@ones-op/store'

function App() {
  const teamInfo = useTeamInfo()
  return <div>{teamInfo?.uuid ?? 'unknown'}</div>
}
```

## 索引

| API                                               | 描述                                                   |
| ------------------------------------------------- | ------------------------------------------------------ |
| [useTeamInfo](#useTeamInfo)                       | 获取当前团队信息                                       |
| [useOrganizationInfo](#useOrganizationInfo)       | 获取当前组织信息                                       |
| [useProductInfo](#useProductInfo)                 | 获取当前产品信息                                       |
| [useDashboardInfo](#useDashboardInfo)             | 获取当前访问的仪表盘信息                               |
| [useFilterInfo](#useFilterInfo)                   | 获取当前访问的筛选器视图信息                           |
| [usePipelineInfo](#usePipelineInfo)               | 获取当前流水线信息                                     |
| [usePluginInfo](#usePluginInfo)                   | 获取当前的插件信息                                     |
| [useProgramInfo](#useProgramInfo)                 | 获取当前项目集信息                                     |
| [useProjectInfo](#useProjectInfo)                 | 获取当前项目信息                                       |
| [useProjectRoleInfo](#useProjectRoleInfo)         | 获取当前项目成员组件中，所选项目角色的信息             |
| [useTestCaseLibraryInfo](#useTestCaseLibraryInfo) | 获取当前访问的用例库的信息                             |
| [useTestCaseListInfo](#useTestCaseListInfo)       | 获取当前访问的用例库的用例列表信息                     |
| [useTestPlanInfo](#useTestPlanInfo)               | 获取当前测试计划信息                                   |
| [useUserInfo](#useUserInfo)                       | 获取当前用户信息                                       |
| [useAction](#useAction)                           | 系统内操作（Action）拦截方法                           |
| [useProgressJobInfo](#useProgressJobInfo)         | 在进度管理器任务详情弹窗中，获取当前任务的信息         |
| [useDocumentInfo](#useDocumentInfo)               | 在 wiki 编辑器的自定义宏中，获取当前宏的数据和操作方法 |
| [useTaskInfo](#useTaskInfo)                       | 获取当前工作项信息                                     |
| [useWikiSpaceInfo](#useWikiSpaceInfo)             | 获取当前访问的页面组信息                               |

## Hooks

导出的标准 [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) 用法 API，具体参数详见下述：

### useTeamInfo {#useTeamInfo}

获取当前团队信息。

#### 返回

| 说明         | 类型           |
| ------------ | -------------- |
| 当前团队信息 | `TeamInfoType` |

#### 类型

```tsx
interface TeamInfoType {
  uuid: string // 当前团队的 UUID
  name: string // 当前团队的名称
}
```

### useOrganizationInfo {#useOrganizationInfo}

获取当前组织信息。

#### 返回

| 说明         | 类型                   |
| ------------ | ---------------------- |
| 当前组织信息 | `OrganizationInfoType` |

#### 类型

```tsx
interface OrganizationInfoType {
  uuid: string // 当前组织的 UUID
  name: string // 当前组织的名称
}
```

### useProductInfo {#useProductInfo}

获取当前产品信息。

#### 返回

| 说明         | 类型              |
| ------------ | ----------------- |
| 当前产品信息 | `ProductInfoType` |

#### 类型

```tsx
interface ProductInfoType {
  uuid: string // 当前产品的 UUID
  name: string // 当前产品的名称
}
```

### useDashboardInfo {#useDashboardInfo}

获取当前访问的仪表盘信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明                 | 类型                |
| -------------------- | ------------------- |
| 当前访问的仪表盘信息 | `DashboardInfoType` |

#### 类型

```tsx
interface DashboardInfoType {
  uuid: string // 当前仪表盘的 UUID
  name: string // 当前仪表盘的名称
}
```

### useFilterInfo {#useFilterInfo}

获取当前访问的筛选器视图信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明                     | 类型             |
| ------------------------ | ---------------- |
| 当前访问的筛选器视图信息 | `FilterInfoType` |

#### 类型

```tsx
interface FilterInfoType {
  uuid: string // 当前筛选器视图的 UUID
  name: string // 当前筛选器视图的名称
}
```

### usePipelineInfo {#usePipelineInfo}

获取当前流水线信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明           | 类型               |
| -------------- | ------------------ |
| 当前流水线信息 | `PipelineInfoType` |

#### 类型

```tsx
interface PipelineInfoType {
  uuid: string // 当前流水线的 UUID
  name: string // 当前流水线的名称
}
```

### usePluginInfo {#usePluginInfo}

获取当前的插件信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明               | 类型             |
| ------------------ | ---------------- |
| 获取当前的插件信息 | `PluginInfoType` |

#### 类型

```tsx
interface PluginInfoType {
  appID: string // 插件 ID
  name: string // 插件名称
  description: string // 插件描述
  version: string // 插件版本
  /**
   * 插件状态
   * 1：启用
   * 2：禁用
   */
  status: 1 | 2
  instanceID: string // 实例 ID
}
```

### useProgramInfo {#useProgramInfo}

获取当前项目集信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明           | 类型              |
| -------------- | ----------------- |
| 当前项目集信息 | `ProgramInfoType` |

#### 类型

```tsx
interface ProgramInfoType {
  uuid: string // 当前项目集的 UUID
  name: string // 当前项目集的名称
}
```

### useProjectInfo {#useProjectInfo}

获取当前项目信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明         | 类型              |
| ------------ | ----------------- |
| 当前项目信息 | `ProjectInfoType` |

#### 类型

```tsx
interface ProjectInfoType {
  uuid: string // 当前项目的 UUID
  name: string // 当前项目的名称
}
```

### useProjectRoleInfo {#useProjectRoleInfo}

获取当前项目成员组件中，所选项目角色的信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明             | 类型                  |
| ---------------- | --------------------- |
| 所选项目角色信息 | `ProjectRoleInfoType` |

#### 类型

```tsx
interface ProjectRoleInfoType {
  uuid: string // 当前选中角色的 UUID
  name: string // 当前选中角色的名称
}
```

### useTestCaseLibraryInfo {#useTestCaseLibraryInfo}

获取当前访问的用例库的信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明                   | 类型                      |
| ---------------------- | ------------------------- |
| 当前访问的用例库的信息 | `testCaseLibraryInfoType` |

#### 类型

```tsx
interface TestCaseLibraryInfoType {
  uuid: string // 当前用例库的 UUID
  name: string // 当前用例库的名称
}
```

### useTestCaseListInfo {#useTestCaseListInfo}

获取当前访问的用例库的用例列表信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明                   | 类型                   |
| ---------------------- | ---------------------- |
| 当前访问的用例库的信息 | `TestCaseListInfoType` |

#### 类型

```tsx
interface TestCaseListInfoType {
  selectedUUIDs: Array<string> // 当前选中的用例信息
  isFullSelected?: boolean // 当前用例是否全选
  fullSelectedParams?: { [key: string]: any } // 全选场景下的查询条件以及标识
}
```

### useTestPlanInfo {#useTestPlanInfo}

获取当前测试计划信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明             | 类型               |
| ---------------- | ------------------ |
| 当前测试计划信息 | `TestPlanInfoType` |

#### 类型

```tsx
interface TestPlanInfoType {
  uuid: string // 当前测试计划的 UUID
  name: string // 当前测试计划的名称
}
```

### useUserInfo {#useUserInfo}

获取当前用户信息。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`

#### 返回

| 说明         | 类型           |
| ------------ | -------------- |
| 当前用户信息 | `UserInfoType` |

#### 类型

```tsx
interface UserInfoType {
  uuid: string // 当前用户的 UUID
  name: string // 当前用户的名称
}
```

### useAction {#useAction}

通过调用此 hook 方法，可以对系统内的一些操作（Action）进行拦截处理，具体用法与配置请参阅 [Trigger 插槽](../../../abilities/slot/global/trigger/index.md)。

- 可用：`v0.3.0+`
- ONES 要求：`v3.10.26+`
- 已废弃

:::warning
如果你正在编写新插件，推荐你使用 [`useVariablesInfo`](#useVariablesInfo) 方法获取数据，`useAction` 方法将会在未来废弃掉。
:::

#### 参数

| 参数    | 说明               | 类型                                                           | 必填 | 默认值 |
| ------- | ------------------ | -------------------------------------------------------------- | ---- | ------ |
| type    | trigger 类型字符串 | [`ActionEnum`](../../../abilities/slot/global/trigger/list.md) | 是   |        |
| handler | 操作拦截处理方法   | `(payload: ActionPayload) => void`                             | 是   |        |

#### 类型

```ts
interface ActionPayload<T = unknown> {
  /** 会话 id，同一类的 action，每一次操作，pre 与 post 取得的值相同 */
  sessionID: string
  /** 操作的数据 */
  data: T
  /** 继续往下执行操作，并销毁插件！ */
  next: (data: T) => void
  /** 取消当前操作，并销毁插件！ */
  cancel: (message?: string) => void
}
```

:::warning
代码里 `useAction` 用到的类型必须与 `plugin.yaml` 相应模块下的 `actions` 声明保持一致，否则将会导致系统无法调起插件，或者系统操作（Action）永久陷入 pending 状态。
:::

:::caution
当调用 `next` 或 `cancel` 方法后，插件将会被销毁，此时你将无法进行一些包含 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 操作，如 `toast` 提示等。
如果你有页面提示需求，你应该在提示完成后，再调用 `next` 或 `cancel` 方法。
:::

### useProgressJobInfo {#useProgressJobInfo}

在进度管理器任务详情弹窗中，获取当前任务的信息。

- 可用：`v0.3.1+`
- ONES 要求：`v3.11.0+`

#### 返回

| 说明           | 类型                       |
| -------------- | -------------------------- |
| 当前任务的信息 | `ProgressJobInfoStateType` |

#### 类型

```tsx
enum ProgressJobType {
  PluginDataSync = 'plugin_data_sync',
}

enum ProgressJobStatus {
  DONE = 'done',
  FAIL = 'fail',
}

interface ProgressJobInfoStateType {
  appID: string // 当前插件的appID
  moduleID: string // 当前任务绑定的插槽模块id
  jobType: ProgressJobType // 当前任务的类型
  jobStatus: ProgressJobStatus // 任务的状态
  successfulCount: number // 任务执行成功的个数
  unprocessedCount: number // 任务执行中的个数
  unsuccessfulCount: number // 任务执行失败的个数
  // 能力使用done时传入的payload参数
  payload: {
    data: string
    filePath: string
  }
}
```

### useDocumentInfo {#useDocumentInfo}

在 wiki 编辑器的自定义宏中，获取当前宏的数据和操作方法。

- 可用：`v0.4.0+`
- ONES 要求：`v3.11.30+`

#### 返回

| 说明                           | 类型          |
| ------------------------------ | ------------- |
| 当前宏的数据和对数据的操作方法 | `PluginState` |

#### 类型

```tsx
interface PluginState<DocumentCustomData, Toolbar> {
  // 是否是当前用户触发的，如果文档刷新后，就会变成`false`。
  isTriggerByUser: boolean | undefined
  // 当前是否在编辑页面
  editable: boolean | undefined
  toolbarState: ToolbarState<Toolbar> | undefined

  saveData: (
    data: DocumentCustomData,
    config: {
      exportSpec: ExportSpec[]
    }
  ) => void
  // 跳转到 toolbar，获取关闭 toolbar
  goToState: (state: ToolbarState<Toolbar>) => void
  // 删除文档的自定义宏
  destroy: () => void
  data: DocumentCustomData | undefined
  id: string

  exportSpec: ExportSpec[] | undefined
  // 上传资源到 wiz 服务器，因为导出 word/PDF 时，如果使用图片格式，图片必须先上传到 wiz 服务器。
  uploadResource:
    | ((
        file: File,
        onProgress: (error: Error | null, percentage: number) => void
      ) => Promise<string>)
    | undefined
  // 获取 wiz 服务器资源的地址，用来获取服务器上的资源。
  getApiService: () => Promise<string | undefined>

  // 插件运行时状态，比如，插件数据有问题，插件开发者可以展示公共的错误模板。
  status: EmbedPluginRuntimeStatus | undefined
  setStatus: (status: EmbedPluginRuntimeStatus) => void
}

interface ExportText {
  type: 'text'
  data: string
}

interface ExportLink {
  type: 'link'
  data: {
    url: string
    title: string
  }
}

interface ExportImage {
  type: 'image'
  // 图片在编辑器服务器中的资源名称
  data: string
}

type ExportSpec = ExportImage | ExportLink | ExportText

enum EmbedPluginRuntimeStatus {
  /**
   * 插件正常运行
   */
  VALID = 'VALID',
  /**
   * 插件数据有问题（插件开发者使用）
   */
  DATA_INVALID = 'DATA_INVALID',
  /**
   * 插件资源加载错误（插槽错误边界捕获的错误）
   */
  PLUGIN_RESOURCE_INVALID = 'PLUGIN_RESOURCE_INVALID',
}

type BuiltInToolbarStep = 'init'

// 初始化状态，默认所有的 toolbar 处于关闭状态
interface BuiltInToolbarState<T> {
  builtIn: true
  value: BuiltInToolbarStep
  /**
   * 开发者在插槽之间跳转时（切换 toolbar），可以携带自定义参数。
   * 因为 toolbar 的插槽关闭后就销毁了，不能保存状态，可以通过这个参数保存到渲染文档块的插槽中。
   */
  customData?: T
}

// 打开开发者定义的 toolbar
interface CustomToolbarState<T> {
  builtIn: false
  value: {
    // 对应的 moduleID
    id: string
    title: string
  }
  customData?: T
}

type ToolbarState<T> = BuiltInToolbarState<T> | CustomToolbarState<T>
```

### useTaskInfo {#useTaskInfo}

获取当前工作项信息。

- 可用：`v0.5.0+`
- ONES 要求：`v3.11.40+`

#### 返回

| 说明           | 类型           |
| -------------- | -------------- |
| 当前工作项信息 | `TaskInfoType` |

#### 类型

```tsx
interface TaskInfoType {
  uuid: string // 当前工作项的 UUID
}
```

### useCodeRepository {#useCodeRepository}

获取用户当前选择的代码仓信息。

- 可用：`v0.6.0+`
- ONES 要求：`v3.13.9+`

#### 返回

| 说明                     | 类型                 |
| ------------------------ | -------------------- |
| 用户当前选择的代码仓信息 | `CodeRepositoryInfo` |

#### 类型

> `CodeRepositoryInfo.uuid` 和能力方法 `addRepoCommits` 中的 [`toolUUID`](../../../reference/packages/node-ability/node-ability.mdx#addrepocommits) 一致。

```tsx
interface CodeRepositoryInfo {
  uuid: string
  // 上一步，可以打开上一步的“选择代码仓“的弹窗
  previous: () => void
}
```

### useTestReportComponentInfo {#useTestReportComponentInfo}

在插件自定义测试报告组件中，获取当前组件的数据以及对数据进行操作的方法。

#### 要求

- 可用：`v0.7.0+`
- ONES 要求：`v3.13.22+`

#### 返回

| 说明                           | 类型                          |
| ------------------------------ | ----------------------------- |
| 当前组件的数据以及对数据的操作 | `TestcaseReportComponentInfo` |

#### 类型

```tsx
interface ExportTitle {
  // 导出标题
  type: 'title'
  content: string
}

interface ExportText {
  // 导出普通文本
  type: 'text'
  content: string
}

interface ExportLink {
  // 导出链接
  type: 'link'
  content: string
  url: string
}

interface ExportImage {
  // 导出图片
  type: 'image'
  url: string
}

interface ExportCustomContent {
  // 导出自定义内容
  type: 'custom'
  content: string // html文本
}

type ExportItem = ExportTitle | ExportText | ExportLink | ExportImage | ExportCustomContent

interface TestcaseReportComponentInfo<T extends Record<string, any> = {}> {
  isReportMode: boolean // 是否处于报告页面，如果为false的话则为报告模板页面
  isViewMode: boolean // 是否处于查看模式，如果为false的话则为编辑模式
  contentUUID: string // 如果当前处于报告页面，表示报告ID，如果处于报告模板页面，表示报告模板ID
  componentSetting: T // 组件的配置信息
  componentUUID: string // 组件的ID
  updateComponentSettingConfig: (newConfig: Partial<T>) => void // 更新组件的配置信息的方法
  updateComponentExportContent: (exportItems: ExportItem[]) => void // 更新组件的导出内容的方法
  addOnSubmitSettingListener: (next: () => void) => () => void // 监听点击配置弹窗确认按钮时的回调函数的方法，返回值的是取消监听的方法
}
```

### useWikiSpaceInfo {#useWikiSpaceInfo}

获取当前访问的页面组信息。

- 可用：`v0.x.x+`
- ONES 要求：`v3.x.x+`

#### 返回

| 说明           | 类型                |
| -------------- | ------------------- |
| 当前页面组信息 | `WikiSpaceInfoType` |

#### 类型

```tsx
interface WikiSpaceInfoType {
  uuid: string // 当前页面组的 UUID
  name: string // 当前页面组的名称
}
```

### useVariablesInfo {#useVariablesInfo}

获取当前插槽传递过来的非标准临时数据，你可以通过指定范型获得当前插槽传递数据的类型推断。

- 可用：`v0.x.x+`

#### 返回

| 说明               | 类型              |
| ------------------ | ----------------- |
| 当前插槽传递的数据 | `VariablesMap[T]` |

#### 类型

```tsx
function useVariablesInfo<T extends keyof VariablesMap>(): VariablesMap[T]

type VariablesMap = TriggerActionMap & {
  // Trigger 统一类型
  'ones:global:trigger': Action<Record<PropertyKey, any>> & {
    actionType: keyof ActionType
  }
  // ......
}

type TriggerActionMap = {
  [T in keyof ActionType]: ActionType[T] & { actionType: T }
}
```

### useModuleInstanceInfo {#useModuleInstanceInfo}

获取当前插件模块实例信息。

- 可用：`v0.x.x+`
- ONES 要求：`v3.13.xx+`
- 模块限制：`'ones:global:trigger' | 'ones:global:modal'`

:::caution
目前仅提供给部分需要设置手动激活模式的模块。
:::

:::note
同一个手动激活模式的插件模块，在已经激活期间，不会再次被激活，而是更新模块再次被激活的次数。

在一些特殊场景，你可以监听此数据的变化，重新对组件进行 `mount` 操作。
:::

#### 返回

| 说明             | 类型                 |
| ---------------- | -------------------- |
| 当前插件实例信息 | `ModuleInstanceInfo` |

#### 类型

```tsx
interface ModuleInstanceInfo {
  invokeAgainCount: number
}
```
