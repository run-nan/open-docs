---
sidebar_position: 3
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# @ones-op/store

[![](https://npm.partner.ones.cn/badge/v/@ones-op/store.svg)](https://npm.partner.ones.cn/package/@ones-op/store)

我们提供了一套数据获取库，可以帮你在插件内获取标品数据。为了保证数据的只读性，对象和数组数据将会使用 Proxy 代理。

## 兼容性

### 环境依赖

|   ONES   |
| :------: |
| v3.6.25+ |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/store
```

## 使用

```tsx
import { useTestCaseLibraryInfo } from '@ones-op/store'

function App() {
  const { uuid, name } = useTestCaseLibraryInfo()
  return <div>{name}</div>
}
```

## Hooks

### useDashboardInfo {#useDashboardInfo}

获取当前访问的仪表盘信息

#### Returns

| 说明                 |        类型         |
| :------------------- | :-----------------: |
| 当前访问的仪表盘信息 | `DashboardInfoType` |

#### Types

```tsx
interface DashboardInfoType {
  uuid: string // 当前仪表盘的 UUID
  name: string // 当前仪表盘的名称
}
```

### useFilterInfo {#useFilterInfo}

- Added in: `v0.3.0`
- ONES Requirement: `v3.10.26+`

获取当前访问的筛选器视图信息

#### Returns

| 说明                     |       类型       |
| :----------------------- | :--------------: |
| 当前访问的筛选器视图信息 | `FilterInfoType` |

#### Types

```tsx
interface FilterInfoType {
  uuid: string // 当前筛选器视图的 UUID
  name: string // 当前筛选器视图的名称
}
```

### useOrganizationInfo {#useOrganizationInfo}

获取当前组织信息

#### Returns

| 说明         |          类型          |
| :----------- | :--------------------: |
| 当前组织信息 | `OrganizationInfoType` |

#### Types

```tsx
interface OrganizationInfoType {
  uuid: string // 当前组织的 UUID
  name: string // 当前组织的名称
}
```

### usePipelineInfo {#usePipelineInfo}

获取当前流水线信息

#### Returns

| 说明           |        类型        |
| :------------- | :----------------: |
| 当前流水线信息 | `PipelineInfoType` |

#### Types

```tsx
interface PipelineInfoType {
  uuid: string // 当前流水线的 UUID
  name: string // 当前流水线的名称
}
```

### usePluginInfo {#usePluginInfo}

- Added in: `v0.3.0`
- ONES Requirement: `v3.10.26+`

获取当前的插件信息

#### Returns

| 说明               |       类型       |
| :----------------- | :--------------: |
| 获取当前的插件信息 | `PluginInfoType` |

#### Types

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

### useProductInfo {#useProductInfo}

获取当前产品信息

#### Returns

| 说明         |       类型        |
| :----------- | :---------------: |
| 当前产品信息 | `ProductInfoType` |

#### Types

```tsx
interface ProductInfoType {
  uuid: string // 当前产品的 UUID
  name: string // 当前产品的名称
}
```

### useProgramInfo {#useProgramInfo}

获取当前项目集信息

#### Returns

| 说明           |       类型        |
| :------------- | :---------------: |
| 当前项目集信息 | `ProgramInfoType` |

#### Types

```tsx
interface ProgramInfoType {
  uuid: string // 当前项目集的 UUID
  name: string // 当前项目集的名称
}
```

### useProjectInfo {#useProjectInfo}

获取当前项目信息

#### Returns

| 说明         |       类型        |
| :----------- | :---------------: |
| 当前项目信息 | `ProjectInfoType` |

#### Types

```tsx
interface ProjectInfoType {
  uuid: string // 当前项目的 UUID
  name: string // 当前项目的名称
}
```

### useProjectRoleInfo {#useProjectRoleInfo}

- Added in: `v0.3.0`
- ONES Requirement: `v3.10.14+`

获取当前项目成员组件中，所选项目角色的信息

#### Returns

| 说明             |         类型          |
| :--------------- | :-------------------: |
| 所选项目角色信息 | `ProjectRoleInfoType` |

#### Types

```tsx
interface ProjectRoleInfoType {
  uuid: string // 当前选中角色的 UUID
  name: string // 当前选中角色的名称
}
```

### useTeamInfo {#useTeamInfo}

获取当前团队信息

#### Returns

| 说明         |      类型      |
| :----------- | :------------: |
| 当前团队信息 | `TeamInfoType` |

#### Types

```tsx
interface TeamInfoType {
  uuid: string // 当前团队的 UUID
  name: string // 当前团队的名称
}
```

### useTestCaseLibraryInfo {#useTestCaseLibraryInfo}

获取当前访问的用例库的信息

#### Returns

| 说明                   |           类型            |
| :--------------------- | :-----------------------: |
| 当前访问的用例库的信息 | `testCaseLibraryInfoType` |

#### Types

```tsx
interface TestCaseLibraryInfoType {
  uuid: string // 当前用例库的 UUID
  name: string // 当前用例库的名称
}
```

### useTestCaseListInfo {#useTestCaseListInfo}

- Added in: `v0.3.0`
- ONES Requirement: `v3.10.0+`

获取当前访问的用例库的用例列表信息

#### Returns

| 说明                   |          类型          |
| :--------------------- | :--------------------: |
| 当前访问的用例库的信息 | `TestCaseListInfoType` |

#### Types

```tsx
interface TestCaseListInfoType {
  selectedUUIDs: Array<string> // 当前选中的用例信息
  isFullSelected?: boolean // 当前用例是否全选
  fullSelectedParams?: { [key: string]: any } // 全选场景下的查询条件以及标识
}
```

### useTestPlanInfo {#useTestPlanInfo}

获取当前测试计划信息

#### Returns

| 说明             |        类型        |
| :--------------- | :----------------: |
| 当前测试计划信息 | `TestPlanInfoType` |

#### Types

```tsx
interface TestPlanInfoType {
  uuid: string // 当前测试计划的 UUID
  name: string // 当前测试计划的名称
}
```

### useUserInfo {#useUserInfo}

获取当前用户信息

#### Returns

| 说明         |      类型      |
| :----------- | :------------: |
| 当前用户信息 | `UserInfoType` |

#### Types

```tsx
interface UserInfoType {
  uuid: string // 当前用户的 UUID
  name: string // 当前用户的名称
}
```

### useProgressJobInfo {#useProgressJobInfo}

- Added in: `v0.3.1`
- ONES Requirement: `v3.11.0+`

在进度管理器任务详情弹窗中，获取当前任务的信息

#### Returns

| 说明           |            类型            |
| :------------- | :------------------------: |
| 当前任务的信息 | `ProgressJobInfoStateType` |

#### Types

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

- Version Requirements：`v0.4.0+`
- ONES Environment Requirements：`v3.11.30+`

Get the data of the custom macro in the wiki editor.

#### Returns

| explaination                             |     type      |
| :--------------------------------------- | :-----------: |
| The data and the operation for the macro | `PluginState` |

#### Types

```tsx
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
  // The name of the image in the wiki server
  data: string
}

type ExportSpec = ExportImage | ExportLink | ExportText

enum EmbedPluginRuntimeStatus {
  /**
   * The plugin works fine
   */
  VALID = 'VALID',
  /**
   * The data of the plugin is invalid
   */
  DATA_INVALID = 'DATA_INVALID',
  /**
   * The plugin resource load error
   */
  PLUGIN_RESOURCE_INVALID = 'PLUGIN_RESOURCE_INVALID',
}

type BuiltInToolbarStep = 'init'

// Initialization state, all toolbars are closed by default
interface BuiltInToolbarState<T> {
  builtIn: true
  value: BuiltInToolbarStep
  /**
   * When the developer opens another slot in the macro(for example, open edit interface), this param can carry the custom data.
   * Because the slot is closed and destroyed, the state of the slot will be cleaned, you can save it to the render slot.
   */
  customData?: T
}

// Open the toolbar defined by the developer
interface CustomToolbarState<T> {
  builtIn: false
  value: {
    // The moduleID of the toolbar
    id: string
    title: string
  }
  customData?: T
}

type ToolbarState<T> = BuiltInToolbarState<T> | CustomToolbarState<T>

interface PluginState<DocumentCustomData, Toolbar> {
  // Whether it is triggered by the user, if the document is refreshed, it will become `false`.
  isTriggerByUser: boolean | undefined
  // Whether the user is in the edit interface
  editable: boolean | undefined
  toolbarState: ToolbarState<Toolbar> | undefined

  saveData: (
    data: DocumentCustomData,
    config: {
      exportSpec: ExportSpec[]
    }
  ) => void
  // Open or close the toolbar slot
  goToState: (state: ToolbarState<Toolbar>) => void
  // delete the current custom macro
  destroy: () => void
  data: DocumentCustomData | undefined
  id: string

  exportSpec: ExportSpec[] | undefined
  // Upload the resource to the wiki server, because when exporting to word or PDF, and the data needs to be rendered as an image, the image must be uploaded to the wiki server first.
  uploadResource:
    | ((
        file: File,
        onProgress: (error: Error | null, percentage: number) => void
      ) => Promise<string>)
    | undefined
  // Get the URL of the wiki resource which is used to get the resource from the wiki server.
  getApiService: () => Promise<string | undefined>

  // The plugin runtime status, for example, if the plugin data is not expected, the developers can show the public error templates.
  status: EmbedPluginRuntimeStatus | undefined
  setStatus: (status: EmbedPluginRuntimeStatus) => void
}
```

### useAction {#useAction}

通过此 hook 方法，可以对系统内的一些操作（Action）进行拦截处理。

#### Params

|  参数   | 说明                                                                                               |                类型                | 必填 | 默认值 |
| :-----: | :------------------------------------------------------------------------------------------------- | :--------------------------------: | :--: | :----: |
|  type   | trigger 类型字符串，完整的触发列表可以参考：[触发列表](../../../abilities/frontend/event/list.mdx) |            `ActionEnum`            |  是  |        |
| handler | 操作拦截处理方法                                                                                   | `(payload: ActionPayload) => void` |  是  |        |

#### Types

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

:::caution 注意
当调用 `next` 或 `cancel` 方法后，插件将会被销毁，此时你将无法进行一些 DOM 操作，如 toast 提示等。  
如果你有页面提示需求，你应该在提示完成后，再调用 `next` 或 `cancel` 方法。
:::

### useCodeRepository {#useCodeRepository}

- Added in: `v0.3.0`
- ONES Requirement: `v3.10.0+`

Get the code repository info that the current user selected.

#### Returns

| Description                                              |         Type         |
| :------------------------------------------------------- | :------------------: |
| the code repository info that the current user selected. | `CodeRepositoryInfo` |

#### Types

> `CodeRepositoryInfo.uuid` is consistent with the [`toolUUID`](../../../reference/packages/node-ability/node-ability.md#addrepocommits)
> of the ability's function `addRepoCommits`.

```tsx
interface CodeRepositoryInfo {
  uuid: string
  // Back to the preview modal.
  previous: () => void
}
```