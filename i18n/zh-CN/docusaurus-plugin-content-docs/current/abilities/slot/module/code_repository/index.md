# 代码仓管理

import Image from '@theme/IdealImage'

## 要求

| **ONES**  |
| :-------: |
| v3.11.58+ |

## 概述

<Image img={require('./images/repository.png')} />

我们为「配置中心」-「流水线管理」- 「代码仓管理」提供了一些插槽，以便于为该应用定制化页面模块。

当前支持的插槽：

- [ones:settings:pipeline:default:repo:link](#onessettingspipelinedefaultrepolink)

## 插槽

#### ones:settings:pipeline:default:repo:link

**模块路径：** 配置中心 / 流水线管理 / 代码仓管理 / 新建关联代码仓 / 选择插件代码仓 / 下一步的弹窗

**个数限制：** 一个插件中最多可声明 **10 **个该插槽，系统中最多同时存在 **100 **个该插槽

:::caution 注意

当前插槽需要使用[自定义代码仓](../../../business/custom-code-repository/custom-code-repository.mdx)能力。

:::

## 使用

```yaml
modules:
  - id: ones-settings-pipeline-default-repo-link-JnJi
    title: GitHub
    moduleType: ones:settings:pipeline:default:repo:link
    preload: true
    manual: true
    entry: modules/ones-settings-pipeline-default-repo-link-JnJi/index.html
```

**支持的配置项：**

- [manual（必填）](../../../../reference/config/plugin.yaml#manual)
- [preload](../../../../reference/config/plugin.yaml#preload)

### 可访问的上下文数据：

- [useCodeRepository](../../../../reference/packages/store/store.md#useCodeRepository)

```ts
import { useCodeRepositoryInfo } from '@ones-op/store'
const codeRepositoryInfo = useCodeRepositoryInfo()
```

### 第三方认证

如果三方认证需要跳转到第三方的页面去认证，那么你可以使用插槽 [`about-blank`](../../global/blank) 来新建一个认证的 `Redirect URI` 页面，
三方认证结束，且成功后，会跳转到 `Redirect URI` 页面，并附带上授权的 token，你可以将其保存到 localStorage，在插槽 `ones:settings:pipeline:default:repo:link`
页面中，你可以监听到 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent) 数据的变化，并获取到 token 做进一步的处理。

```ts
// about-blank
localStorage.setItem('your unique storage key', code)
```

```ts
// ones:settings:pipeline:default:repo:link
const codeRepoInfo = useCodeRepositoryInfo()

useEffect(() => {
  if (!codeRepoInfo?.uuid) {
    return () => {}
  }
  const listener = (event: StorageEvent) => {
    if (event.key !== 'your unique storage key') {
      return
    }
    const token = event.newValue
    // TODO: save the token with the code repo uuid.
  }

  window.addEventListener('storage', listener)
  return () => {
    window.removeEventListener('storage', listener)
  }
}, [codeRepoInfo])
```
