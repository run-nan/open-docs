---
sidebar_position: 3
---

# @ones-op/store

[![](https://npm.partner.ones.ai/badge/v/@ones-op/store.svg)](https://npm.partner.ones.ai/package/@ones-op/store)

我们提供了一套数据获取库，可以帮你在插件内获取标品数据。

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

## API

### useDashboardInfo `v0.2.5+` `ONES v3+` {#useDashboardInfo}

### useOrganizationInfo `v0.2.5+` `ONES v3+` {#useOrganizationInfo}

### usePipelineInfo `v0.2.5+` `ONES v3+` {#usePipelineInfo}

### useProductInfo `v0.2.5+` `ONES v3+` {#useProductInfo}

### useProgramInfo `v0.2.5+` `ONES v3+` {#useProgramInfo}

### useProjectInfo `v0.2.5+` `ONES v3+` {#useProjectInfo}

### useTeamInfo `v0.2.5+` `ONES v3+` {#useTeamInfo}

### useTestCaseLibraryInfo `v0.2.5+` `ONES v3+` {#useTestCaseLibraryInfo}

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

### useTestCaseListInfo `v0.2.5+` `ONES v3+` {#useTestCaseListInfo}

获取当前访问的用例库的用例列表信息

#### Returns

| 说明                   |          类型          |
| :--------------------- | :--------------------: |
| 当前访问的用例库的信息 | `TestCaseListInfoType` |

#### Types

```tsx
interface TestCaseListInfoType {
  testCaseLibraryInfo: TestCaseLibraryInfoType
  testCaseListInfo: {
    selectedItems: Array<{ uuid: string }> // 当前选中的用例信息
  }
}
```

### useTestPlanInfo `v0.2.5+` `ONES v3+` {#useTestPlanInfo}

### useUserInfo `v0.2.5+` `ONES v3+` {#useUserInfo}
