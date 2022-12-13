# Manage repositories

import Image from '@theme/IdealImage'

## Requirements

| **ONES** |
| :------: |
|   3.6+   |

## Overview

<Image img={require('./images/repository.png')} />

We have provided slots for "Configuration" - "Pipeline settings" - "Manage repositories" to customize the page module for the application.

The slots currently supported are as follows:

- [ones:settings:pipeline:default:repo:link](#onessettingspipelinedefaultrepolink)

## Slots

#### ones:settings:pipeline:default:repo:link

**Module path：** Configuration / Pipeline settings / Manage repositories / Create linked repository / select repository / Open the plugin modal by clicking the next button

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

:::caution

This slot need the ability [custom code repository](../../../business/custom-code-repository/custom-code-repository.mdx).

:::

## Usage

```yaml
modules:
  - id: ones-settings-pipeline-default-repo-link-JnJi
    title: GitHub
    moduleType: ones:settings:pipeline:default:repo:link
    preload: true
    manual: true
    entry: modules/ones-settings-pipeline-default-repo-link-JnJi/index.html
```

**Supported config options：**

- [manual(required)](../../../../reference/config/plugin.md#manual)
- [preload](../../../../reference/config/plugin.md#preload)

### Available Hook API

- [useCodeRepository](../../../../reference/packages/store/store.md#useCodeRepository)

```ts
import { useCodeRepositoryInfo } from '@ones-op/store'
const codeRepositoryInfo = useCodeRepositoryInfo()
```

### Third-party authentication

If the third-party authentication needs to jump to the third-party page, you can create a new `Redirect URI` page by using
the slot [`about-blank`](../../global/blank). After the authentication is finished and succeed, it will jump to the
`Redirect URI` page with the authentication token, you can save it to the localStorage. In the slot `ones:settings:pipeline:default:repo:link`,
you can listen the data change in the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent), and
do more things with the token.

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
