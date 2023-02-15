# @ones-op/utils

[![](https://npm.partner.ones.cn/badge/v/@ones-op/utils.svg)](https://npm.partner.ones.cn/package/@ones-op/utils)

我们提供了一些常用的工具库封装。

## 安装

在插件 /web 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/utils
```

## 使用

```tsx
import { stringifySearchQuery } from '@ones-op/utils'
import type { SearchQueryType } from '@ones-op/utils'

const testCasePlanURL = 'https://ones.com/project/#/testcase/team/JTsTqqQo/plan'

const App = () => {
  const searchQuery: SearchQueryType = {
    allow: 'fullscreen',
    conditions: [
      {
        field: 'test_plan_related_project',
        operate: 'include',
        value: ['SbmRCmXZ36snAhUY'],
      },
    ],
  }

  const src = stringifySearchQuery(testCasePlanURL, searchQuery)

  return <iframe width="1500" height="800" allow="payment" src={src}></iframe>
}
```

## 索引

| **API**                                       | **描述**                    |
| --------------------------------------------- | --------------------------- |
| [stringifySearchQuery](#stringifySearchQuery) | 拼接 URL 和 search 查询参数 |

## APIs

### stringifySearchQuery

拼接 URL 和 search 查询参数。

##### 要求

| **ONES** | **@ones-op/utils** |
| -------- | ------------------ |
| todo     | todo               |

##### 参数

| 参数        | 描述         | 类型              | 必填 | 默认值 |
| ----------- | ------------ | ----------------- | ---- | ------ |
| url         | 目标页面地址 | `string`          | 是   | `-`    |
| searchQuery | 插叙参数     | `SearchQueryType` | 是   | `-`    |

##### 类型

```tsx
export interface SearchQueryType {
  /** 筛选器筛选条件 */
  conditions: {
    /** 筛选字段 */
    field: FieldType
    /** 操作 */
    operate: OperateType
    /** 筛选值 */
    value: string[]
  }[]
  /** 页面全屏 */
  allow?: 'fullscreen'
}

/** 筛选字段: 当前只支持 'test_plan_related_project' */
type FieldType = 'test_plan_related_project'

/** 操作: include: 相等, exclude: 不相等 */
type OperateType = 'include' | 'exclude'
```
