---
sidebar_position: 3
---

# Event 事件通信

我们提供了一套事件通信库，可以帮你在插件内（跨模块）通信，或者通过事件触发 ONES 的某些事件。

## 使用

你可以进入 web 目录，并通过以下命令安装此包

```bash npm2yarn
npm i @ones-op/event
```

## 声明

`@ones-op/event`包导出了以下方法

```typescript
import {
  OPPluginListener,
  OPPluginDispatch,
  OPDispatch,
  OPListenerProcessResultState,
} from '@ones-op/event'
```

## OPDispatch

插件可以通过此函数触发 ONES 系统内的一些事件，你可以跳转快速查询目前支持的[事件列表]()。

## OPPluginListener 插件监听方法

插件可以通过此函数添加自定义监听器。

基础使用与[`EventTarget.addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)类似。

:::caution 注意

此方法无法跨插件使用。

在组件销毁时，请调用取消监听函数，以避免占用内存，以及产生一些意料之外的 BUG

:::

```typescript
useEffect(() => {
  const cancelFn = OPPluginListener('onChange', ({ value }) => {
    console.log(`new value: ${value}`)
  })
  return () => cancelFn()
}, [])
```

## OPPluginDispatch 插件事件派发方法

插件可以通过此函数派发事件。

基础使用与[`EventTarget.dispatchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)类似。

:::caution 注意

此方法无法跨插件使用。

:::

```typescript
OPPluginDispatch('onChange', { value: 'new value' })
```

## 返回处理结果

`OPPluginListener`支持处理函数返回**约定格式**数据，`OPPluginDispatch`可以通过返回的`Promise`对象接收数据。

返回数据格式约定如下

```typescript
enum OPListenerProcessResultState {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

interface OPListenerProcessResult<T> {
  state: OPListenerProcessResultState
  data: T
}
```

如果你没做任何返回，或者返回为`undefined`，我们将默认返回以下数据

```typescript
{
  state: MFListenerProcessResultState.SUCCESS,
  data: undefined,
}
```

### 示例

事件监听器处理函数返回数据

```typescript title="listener"
useEffect(() => {
  const cancelFn = OPPluginListener('onChange', ({ value }) => {
    console.log(`new value: ${value}`)
    return {
      state: OPListenerProcessResultState.SUCCESS,
      data: value + 1,
    }
  })
  return () => cancelFn()
}, [])
```

事件派发方法打印返回值

```typescript title="dispatch"
OPPluginDispatch('onChange', { value: 'new value' }).then((result) => {
  console.log(`listener processed value: ${value}`)
})
```
