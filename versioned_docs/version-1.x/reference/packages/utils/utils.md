# @ones-op/utils

[![](https://npm.partner.ones.cn/badge/v/@ones-op/utils.svg)](https://npm.partner.ones.cn/package/@ones-op/utils)

We provide some commonly used tool library encapsulation.

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/utils
```

## Usage

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

## Index

| **API**                                       | **Description**                    |
| --------------------------------------------- | ---------------------------------- |
| [stringifySearchQuery](#stringifySearchQuery) | Splicing URL and search parameters |

## APIs

### stringifySearchQuery

Splicing URL and search parameters.

##### Requirements

| ONES      | **@ones-op/bridge** |
| --------- | ------------------- |
| v3.13.35+ | v0.21.1             |

##### Params

| Params      | Description       | Type              | Required | Default |
| ----------- | ----------------- | ----------------- | -------- | ------- |
| url         | Target page url   | `string`          | Y        | `-`     |
| searchQuery | Search parameters | `SearchQueryType` | Y        | `-`     |

##### Type

```tsx
export interface SearchQueryType {
  /** filter query criteria */
  conditions: {
    /** filter field */
    field: FieldType
    /** filter operate */
    operate: OperateType
    /** filter value */
    value: string[]
  }[]
  /** full screen of the page */
  allow?: 'fullscreen'
}

/** filter field: currently only support 'test_plan_related_project' */
type FieldType = 'test_plan_related_project'

/** filter operate: include: equal, exclude: not equal */
type OperateType = 'include' | 'exclude'
```
