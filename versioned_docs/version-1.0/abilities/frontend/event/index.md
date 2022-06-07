# 事件通信

我们提供了一套事件通信库，可以帮你在插件内（跨模块）通信，或者通过事件触发 ONES 的某些事件。

## 兼容性

### 环境依赖

|  ONES  |
| :----: |
| 3.7.1+ |

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

## API

### OPDispatch

通过此方法可以触发系统内的一些事件。

#### 参数

##### `type`

- 类型：`EventEnum`

事件类型字符串，完整的事件列表可以参考：[事件列表](./list.md)

### OPPluginListener

通过此方法可以在插件内部添加自定义监听器，无法跨插件使用。

:::caution 注意

在组件销毁时，请保证调用取消监听函数，以避免占用内存，以及产生一些意料之外的 BUG。

:::

#### 参数

##### `type`

- 类型：`string`

事件类型字符串

##### `listener`

- 类型：`(event) => any`

事件监听回调

#### 返回值

移除事件监听的函数

#### 示例

```ts
useEffect(() => {
  const cancelFn = OPPluginListener('onChange', ({ value }) => {
    console.log(`new value: ${value}`)
  })
  return () => cancelFn()
}, [])
```

### OPPluginDispatch

通过此方法可以在插件内部派发事件，无法跨插件使用。

#### 参数

##### `type`

- 类型：`string`

事件类型字符串

##### `params`

- 类型：`object`

事件参数对象

#### 返回值

Promise 对象，参数为 `OPPluginListener` 事件处理函数返回的数据。

返回数据格式约定如下：

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

如果你没做任何返回，或者返回为 `undefined`，我们将默认返回以下数据：

```ts
{
  state: MFListenerProcessResultState.SUCCESS,
  data: undefined,
}
```

#### 示例

`OPPluginListener` 事件处理函数返回数据：

```ts title="OPPluginListener"
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

`OPPluginDispatch` 打印其返回值：

```ts title="OPPluginDispatch"
OPPluginDispatch('onChange', { value: 'new value' }).then((result) => {
  console.log(`listener processed value: ${result.data}`)
})
```
