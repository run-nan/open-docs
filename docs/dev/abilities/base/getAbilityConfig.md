---
sidebar_position: 14
---

# 获取插件能力配置

## 能力描述

获取插件能力配置信息

### API

fetchones 请求只需要请求头内带上 AbilityName: ['GetAbilityConfig']

### 使用

调用方法获取插件能力信息

```javascript
import { fetchONES } from '@ones-op/node-fetch'

export async function getAbilityConfig() {
  const response = await fetchONES({
    path: `/team`,
    method: 'POST',
    headers: {
      'Ones-Plugin-Id': ['built_in_apis'],
      'Ones-Check-Point': ['team'],
      'Ones-Check-Id': [`${globalThis.onesEnv.teamUUID}`],
      'AbilityName': ['GetAbilityConfig'],
    },
    body: {},
  })

  return {
    body: response?.body.toString(),
  }
}
```

接下来安装完插件就可以调用这个接口

### 效果展示
