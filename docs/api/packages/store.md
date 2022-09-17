---
sidebar_position: 3
---

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

## API

### useDashboardInfo `v0.2.0+` `ONES v3.6.25+` {#useDashboardInfo}

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

### useOrganizationInfo `v0.2.0+` `ONES v3.6.25+` {#useOrganizationInfo}

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

### usePipelineInfo `v0.2.0+` `ONES v3.6.25+` {#usePipelineInfo}

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

### useProductInfo `v0.2.0+` `ONES v3.6.25+` {#useProductInfo}

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

### useProgramInfo `v0.2.0+` `ONES v3.6.25+` {#useProgramInfo}

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

### useProjectInfo `v0.2.0+` `ONES v3.6.25+` {#useProjectInfo}

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

### useTeamInfo `v0.2.0+` `ONES v3.6.25+` {#useTeamInfo}

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

### useTestCaseLibraryInfo `v0.2.0+` `ONES v3.6.25+` {#useTestCaseLibraryInfo}

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
  selectedUUIDs: Array<string> // 当前选中的用例信息
  isFullSelected?: boolean // 当前用例是否全选
  fullSelectedParams?: { [key: string]: any } // 全选场景下的查询条件以及标识
}
```

### useTestPlanInfo `v0.2.0+` `ONES v3.6.25+` {#useTestPlanInfo}

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

### useUserInfo `v0.2.0+` `ONES v3.6.25+` {#useUserInfo}

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

### useProjectRoleInfo `v0.3.0+` `ONES v3.10.14+` {#useProjectRoleInfo}

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
