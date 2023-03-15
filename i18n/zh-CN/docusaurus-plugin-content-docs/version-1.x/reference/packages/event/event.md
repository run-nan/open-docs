# @ones-op/event

[![](https://npm.partner.ones.cn/badge/v/@ones-op/event.svg)](https://npm.partner.ones.cn/package/@ones-op/event)

我们提供了一套事件通信库，可以帮你在插件内通信，或者通过事件触发 ONES 的一些事件。

## 要求

| **@ones-op/event** |
| ------------------ |
| `v0.6.2+`          |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/event
```

## 使用

```tsx
import { OPDispatch } from '@ones-op/event'

OPDispatch('invoke:ones:global:progressManager')
```

## 索引

| API                                   | 描述                  |
| ------------------------------------- | --------------------- |
| [OPDispatch](#opdispatch)             | ONES 级别事件派发方法 |
| [OPPluginListener](#oppluginlistener) | 插件级别事件监听方法  |
| [OPPluginDispatch](#opplugindispatch) | 插件级别事件派发方法  |

## APIs

### OPDispatch

通过此方法可以触发 ONES 系统内的一些事件。

#### 参数

| 参数 | 说明     | 类型   | 必填 | 默认值 |
| ---- | -------- | ------ | ---- | ------ |
| type | 事件名称 | string | 是   |        |

### OPPluginListener

添加插件级别的事件监听，无法跨插件使用，由 [`OPPluginDispatch`](#opplugindispatch) 派发事件触发。

:::warning
在组件销毁时，你应该调用返回的取消监听函数，以避免内存泄漏，以及重复监听导致的一些意料之外的 BUG。
:::

:::caution
仅在同一个插件下，且模块同时激活时，才支持跨模块通信。
:::

#### 参数

| 参数     | 说明         | 类型                 | 必填 | 默认值            |
| -------- | ------------ | -------------------- | ---- | ----------------- |
| type     | 事件名称     | `string`             | 是   |                   |
| listener | 事件处理方法 | `OPListenFunc`       | 是   |                   |
| options  | 监听器配置   | `{ once?: boolean }` | 否   | `{ once: false }` |

**options.once**

表示 `listener` 在添加之后最多只调用一次。如果为 `true`，`listener` 会在其被调用之后自动移除。

#### 返回

移除当前事件监听的函数。

#### 类型

```ts
type OPListenFunc<P, R = unknown> = (
  params: P
) => Promise<OPListenerProcessResult<R> | void> | OPListenerProcessResult<R> | void

interface OPListenerProcessResult<T> {
  state: OPListenerProcessResultState
  data: T
}

enum OPListenerProcessResultState {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
```

#### 示例

```ts
useEffect(() => {
  const cancelFn = OPPluginListener('onChange', (params) => {
    console.log(`new value: ${params?.value}`)
  })
  return () => cancelFn()
}, [])
```

### OPPluginDispatch

派发插件级别的事件，无法跨插件使用，将触发 [`OPPluginListener`](#oppluginlistener) 添加的事件监听。

:::caution
仅在同一个插件下，且模块同时激活时，才支持跨模块通信。
:::

#### 参数

| 参数   | 说明               | 类型     | 必填 | 默认值 |
| ------ | ------------------ | -------- | ---- | ------ |
| type   | 自定义的事件名称   | `string` | 是   |        |
| params | 需要附带的事件参数 | `any`    | 否   |        |

#### 返回

以 `Promise` 的方式返回所有事件处理结果，你可以根据此特性实现简单的通信问答。

如果无此类需求，可以忽略返回值，并无需看下述介绍。

**要求**

| @ones-op/event |
| -------------- |
| `v0.6.1+`      |

实际返回 `Promise.all(resultList)` 对象，`resultList` 为所有事件处理结果的 `Promise`，因此你的事件方法无论是否出错，都应该始终有一个返回值响应。

:::caution
如果同一个事件存在多个监听，将会按事件注册顺序将返回结果推进 `resultList` 数组。
:::

我们强烈建议你按如下 `OPListenerProcessResult` 格式书写事件处理方法的返回值。

```ts
enum OPListenerProcessResultState {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

interface OPListenerProcessResult<T> {
  state: OPListenerProcessResultState
  data: T
}
```

如果你没在事件处理方法里做任何返回，或者返回值为 `undefined` ，我们将默认返回以下数据：

```ts
{
  state: MFListenerProcessResultState.SUCCESS,
  data: undefined,
}
```

#### 示例

`OPPluginListener` 处理函数返回数据。

```ts title="OPPluginListener"
import { OPPluginListener, OPListenerProcessResultState } from '@ones-op/event'

useEffect(() => {
  const cancelFn = OPPluginListener('onChange', (params) => {
    return {
      state: OPListenerProcessResultState.SUCCESS,
      data: params.value + 1,
    }
  })
  return () => cancelFn()
}, [])
```

`OPPluginDispatch` 打印其返回值。

```ts title="OPPluginDispatch"
OPPluginDispatch('onChange', { value: 0 }).then((resultList) => {
  console.log(`value is increased: ${resultList[0].data === 1}`)
})
```
