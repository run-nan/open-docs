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

### useTestCaseLibraryInfo `v0+` `ONES v3+`

获取当前访问的用例库的信息

#### Returns

| 说明                   |           类型            |
| :--------------------- | :-----------------------: |
| 当前访问的用例库的信息 | `testCaseLibraryInfoType` |

#### Types

```tsx
interface testCaseLibraryInfoType {
  uuid: string // 当前用例库的 UUID
  name: string // 当前用例库的名称
}
```
