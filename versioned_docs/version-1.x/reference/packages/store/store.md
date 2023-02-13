---
sidebar_position: 3
notice: 按版本发布顺序从上往下添加包；对于类型的定义，与代码相反，先用后定义。
---

# @ones-op/store

[![](https://npm.partner.ones.cn/badge/v/@ones-op/store.svg)](https://npm.partner.ones.cn/package/@ones-op/store)

We provide a set of plugin front-end data acquisition library that can help you get ONES standard data in the plugin. In order to ensure the readability of the data, objects and array data will use `Proxy`. You cannot and should not modify the data obtained from the standard.

## Requirements

| **ONES**   | **@ones-op/store** |
| ---------- | ------------------ |
| `v3.6.25+` | `v0.1.0+`          |

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/store
```

## Usage

```tsx
import { useTeamInfo } from '@ones-op/store'

function App() {
  const teamInfo = useTeamInfo()
  return <div>{teamInfo?.uuid ?? 'unknown'}</div>
}
```

## Index

| API                                               | Description                                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [useTeamInfo](#useTeamInfo)                       | Get current team information                                                             |
| [useOrganizationInfo](#useOrganizationInfo)       | Get the current organization information                                                 |
| [useProductInfo](#useProductInfo)                 | Get current product information                                                          |
| [useDashboardInfo](#useDashboardInfo)             | Get current dashboard information                                                        |
| [useFilterInfo](#useFilterInfo)                   | Get information about the currently accessed filter view                                 |
| [usePipelineInfo](#usePipelineInfo)               | Get current pipeline information                                                         |
| [usePluginInfo](#usePluginInfo)                   | Get current plugin information                                                           |
| [useProgramInfo](#useProgramInfo)                 | Get the current program information                                                      |
| [useProjectInfo](#useProjectInfo)                 | Get current project information                                                          |
| [useProjectRoleInfo](#useProjectRoleInfo)         | Get the information of the selected project role in the current project member component |
| [useTestCaseLibraryInfo](#useTestCaseLibraryInfo) | Get the information of the currently access testcase library                             |
| [useTestCaseListInfo](#useTestCaseListInfo)       | Get the information of the currently access testcase library list                        |
| [useTestPlanInfo](#useTestPlanInfo)               | Get the current test plan information                                                    |
| [useUserInfo](#useUserInfo)                       | Get the current user information                                                         |
| [useAction](#useAction)                           | Action interception method in the system                                                 |
| [useProgressJobInfo](#useProgressJobInfo)         | Get the information of the current task in details of the progress manager task          |
| [useDocumentInfo](#useDocumentInfo)               | Get the data of the custom macro in the wiki editor                                      |
| [useTaskInfo](#useTaskInfo)                       | Get current task information                                                             |

## Hooks

The exported standard [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) usage API, the specific parameters are shown in the following:

### useTeamInfo {#useTeamInfo}

Get current team information.

#### Returns

| Description              | Type           |
| ------------------------ | -------------- |
| Current team information | `TeamInfoType` |

#### Types

```tsx
interface TeamInfoType {
  uuid: string // Current team UUID
  name: string // Current team name
}
```

### useOrganizationInfo {#useOrganizationInfo}

Get the current organization information.

#### Returns

| Description                      | Type                   |
| -------------------------------- | ---------------------- |
| Current organization information | `OrganizationInfoType` |

#### Types

```tsx
interface OrganizationInfoType {
  uuid: string // Current organization UUID
  name: string // Current organization name
}
```

### useProductInfo {#useProductInfo}

Get current product information.

#### Returns

| Description                 | Type              |
| --------------------------- | ----------------- |
| Current product information | `ProductInfoType` |

#### Types

```tsx
interface ProductInfoType {
  uuid: string // Current product UUID
  name: string // Current product name
}
```

### useDashboardInfo {#useDashboardInfo}

Get current dashboard information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                   | Type                |
| ----------------------------- | ------------------- |
| Current dashboard information | `DashboardInfoType` |

#### Types

```tsx
interface DashboardInfoType {
  uuid: string // Current dashboard UUID
  name: string // Current dashboard name
}
```

### useFilterInfo {#useFilterInfo}

Get information about the currently accessed filter view.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                                    | Type             |
| ---------------------------------------------- | ---------------- |
| The currently accessed filter view information | `FilterInfoType` |

#### Types

```tsx
interface FilterInfoType {
  uuid: string // The currently accessed filter view UUID
  name: string // The currently accessed filter view name
}
```

### usePipelineInfo {#usePipelineInfo}

Get current pipeline information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                  | Type               |
| ---------------------------- | ------------------ |
| Current pipeline information | `PipelineInfoType` |

#### Types

```tsx
interface PipelineInfoType {
  uuid: string // Current pipeline information UUID
  name: string // Current pipeline information name
}
```

### usePluginInfo {#usePluginInfo}

Get current plugin information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                | Type             |
| -------------------------- | ---------------- |
| Current plugin information | `PluginInfoType` |

#### Types

```tsx
interface PluginInfoType {
  appID: string // Current plugin ID
  name: string // Current plugin name
  description: string // Current plugin description
  version: string // Current plugin version
  /**
   * Plugin status
   * 1：Enabled
   * 2：Disabled
   */
  status: 1 | 2
  instanceID: string // Current plugin instance ID
}
```

### useProgramInfo {#useProgramInfo}

Get the current program information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                 | Type              |
| --------------------------- | ----------------- |
| Current program information | `ProgramInfoType` |

#### Types

```tsx
interface ProgramInfoType {
  uuid: string // Current program UUID
  name: string // Current program name
}
```

### useProjectInfo {#useProjectInfo}

Get current project information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                 | Type              |
| --------------------------- | ----------------- |
| Current project information | `ProjectInfoType` |

#### Types

```tsx
interface ProjectInfoType {
  uuid: string // Current project information UUID
  name: string // Current project information name
}
```

### useProjectRoleInfo {#useProjectRoleInfo}

Get the information of the selected project role in the current project member component.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                           | Type                  |
| ------------------------------------- | --------------------- |
| The selected project role information | `ProjectRoleInfoType` |

#### Types

```tsx
interface ProjectRoleInfoType {
  uuid: string // The selected project role UUID
  name: string // The selected project role name
}
```

### useTestCaseLibraryInfo {#useTestCaseLibraryInfo}

Get the information of the currently access testcase library.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                                          | Type                      |
| ---------------------------------------------------- | ------------------------- |
| Information of the currently access testcase library | `testCaseLibraryInfoType` |

#### Types

```tsx
interface TestCaseLibraryInfoType {
  uuid: string // UUID of the currently access testcase library
  name: string // Name of the currently access testcase library
}
```

### useTestCaseListInfo {#useTestCaseListInfo}

Get the information of the currently access testcase library list.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                                               | Type                   |
| --------------------------------------------------------- | ---------------------- |
| Information of the currently access testcase library list | `TestCaseListInfoType` |

#### Types

```tsx
interface TestCaseListInfoType {
  selectedUUIDs: Array<string> // The current selected testcase information
  isFullSelected?: boolean // Whether to full selected
  fullSelectedParams?: { [key: string]: any } // Search parameters and identifiers in full selected
}
```

### useTestPlanInfo {#useTestPlanInfo}

Get the current test plan information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description                   | Type               |
| ----------------------------- | ------------------ |
| Current test plan information | `TestPlanInfoType` |

#### Types

```tsx
interface TestPlanInfoType {
  uuid: string // Current test plan UUID
  name: string // Current test plan name
}
```

### useUserInfo {#useUserInfo}

Get the current user information.

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Returns

| Description              | Type           |
| ------------------------ | -------------- |
| Current user information | `UserInfoType` |

#### Types

```tsx
interface UserInfoType {
  uuid: string // Current user UUID
  name: string // Current user name
}
```

### useAction {#useAction}

By calling this hook method, some action in the system can be intercepted. For details about usage and configuration, see [Trigger Slot](../../../abilities/slot/global/trigger/index.md)。

- Added in: `v0.3.0+`
- ONES Requirement: `v3.10.26+`

#### Params

| Params  | Description                              | Type                                                           | Required | Default |
| ------- | ---------------------------------------- | -------------------------------------------------------------- | -------- | ------- |
| type    | Trigger type                             | [`ActionEnum`](../../../abilities/slot/global/trigger/list.md) | Y        |         |
| handler | Operation interception processing method | `(payload: ActionPayload) => void`                             | Y        |         |

#### Types

```ts
function useAction(type: ActionEnum, handler: (payload: ActionPayload) => void): void

interface ActionPayload<T = unknown> {
  /** Session id，the `pre` and `post` values are the same for each action of the same category */
  sessionID: string
  /** Operating data */
  data: T
  /** Go ahead and destroy the plugin! */
  next: (data: T) => void
  /** Cancel the current action and destroy the plugin! */
  cancel: (message?: string) => void
}
```

:::warning
The type used in `useAction` must be consistent with the `actions` declaration in the corresponding module of `plugin.yaml`, otherwise the plugin cannot be called up or the Action is permanently stuck in pending state.
:::

:::caution
When the `next` or `cancel` method is called, the plugin will be destroyed. At this time, you will not be able to perform some [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) operations, such as the prompt of `toast`.
If you have a page prompt, you should call the `next` or `cancel` method after the prompt is completed.
:::

### useProgressJobInfo {#useProgressJobInfo}

Get the information of the current task in details of the progress manager task.

- Added in: `v0.3.1+`
- ONES Requirement: `v3.11.0+`

#### Returns

| Description          | Type                       |
| -------------------- | -------------------------- |
| Current task details | `ProgressJobInfoStateType` |

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
  appID: string // Current plugin appID
  moduleID: string // The slot module ID of the current task binding
  jobType: ProgressJobType // Current job type
  jobStatus: ProgressJobStatus // Current job status
  successfulCount: number // Number of tasks successfully executed
  unprocessedCount: number // Number of tasks in execution
  unsuccessfulCount: number // Number of task execution failures
  // Ability payload parameter passed in when using Done
  payload: {
    data: string
    filePath: string
  }
}
```

### useDocumentInfo {#useDocumentInfo}

Get the data of the custom macro in the wiki editor.

- Added in: `v0.4.0+`
- ONES Requirement: `v3.11.30+`

#### Returns

| Description                              | Type          |
| ---------------------------------------- | ------------- |
| The data and the operation for the macro | `PluginState` |

#### Types

```tsx
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
  // Delete the current custom macro
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
```

### useTaskInfo {#useTaskInfo}

Get current task information.

- Added in: `v0.5.0+`
- ONES Requirement: `v3.11.40+`

#### Returns

| Description              | Type           |
| ------------------------ | -------------- |
| Current task information | `TaskInfoType` |

#### Types

```tsx
interface TaskInfoType {
  uuid: string // Current task UUID
}
```

### useCodeRepository {#useCodeRepository}

Get the code repository info that the current user selected.

- Added in: `v0.6.0+`
- ONES Requirement: `v3.13.9+`

#### Returns

| Description                                             | Type                 |
| ------------------------------------------------------- | -------------------- |
| The code repository info that the current user selected | `CodeRepositoryInfo` |

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