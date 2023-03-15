# @ones-op/event

[![](https://npm.partner.ones.cn/badge/v/@ones-op/event.svg)](https://npm.partner.ones.cn/package/@ones-op/event)

We provide a set of event communication library that can help you communicate within the plugin, or trigger some ONES events via events.

## Requirements

| **@ones-op/event** |
| ------------------ |
| `v0.6.2+`          |

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/event
```

## Usage

```tsx
import { OPDispatch } from '@ones-op/event'

OPDispatch('invoke:ones:global:progressManager')
```

## Index

| API                                   | Description                 |
| ------------------------------------- | --------------------------- |
| [OPDispatch](#opdispatch)             | The ONES-level dispatcher   |
| [OPPluginListener](#oppluginlistener) | The plugin-level listener   |
| [OPPluginDispatch](#opplugindispatch) | The plugin-level dispatcher |

## APIs

### OPDispatch

This method triggers a number of events within the ONES system.

#### Params

| Params | Description | Type   | Required | Default |
| ------ | ----------- | ------ | -------- | ------- |
| type   | Event name  | string | Y        |         |

### OPPluginListener

Add plugin-level event listener, which cannot be used across plugin and are triggered by events dispatched by [`OPPluginDispatch`](#opplugindispatch).

:::warning
When the component is destroyed, you should call the returned unlistener function to avoid memory leaks and some unexpected bugs caused by repeated listening.
:::

:::caution
Cross-module communication is supported only under the same plugin and when the modules are active at the same time.
:::

#### Params

| Params   | Description            | Type                 | Required | Default           |
| -------- | ---------------------- | -------------------- | -------- | ----------------- |
| type     | Event name             | `string`             | Y        |                   |
| listener | Event handler function | `OPListenFunc`       | Y        |                   |
| options  | listener options       | `{ once?: boolean }` | N        | `{ once: false }` |

**options.once**

The `listener` should be invoked at most once after being added. If `true`, the `listener` would be automatically removed when invoked. If not specified, defaults to false.

#### Returns

The function to remove the current event listener.

#### Types

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

#### Examples

```ts
useEffect(() => {
  const cancelFn = OPPluginListener('onChange', (params) => {
    console.log(`new value: ${params?.value}`)
  })
  return () => cancelFn()
}, [])
```

### OPPluginDispatch

Dispatching plugin-level event, which cannot be used across plugins, will trigger an event listener added by [`OPPluginListener`](#oppluginlistener).

:::caution
Cross-module communication is supported only under the same plugin and when the modules are active at the same time.
:::

#### Params

| Params | Description  | Type     | Required | Default |
| ------ | ------------ | -------- | -------- | ------- |
| type   | Event name   | `string` | Y        |         |
| params | Event params | `any`    | N        |         |

#### Returns

Returns all event processing results as `Promise` and you can implement a simple communication quiz based on this feature.

If there is no such need, you can ignore the return value and do not need to see the following introduction.

The actual `Promise.all(resultList)` object is returned, and the `resultList` is the `Promise` of all event processing results, so your event method should always have a return value response whether it errors or not.

:::caution
If there are multiple listeners for the same event, the returned results will be pushed into the `resultList` array in the order of event registration.
:::

We strongly recommend that you write the return value of the event handler method in the following `OPListenerProcessResult` format.

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

If you don't do any return in the event handler, or if the return value is `undefined`, we will return the following data by default.

```ts
{
  state: MFListenerProcessResultState.SUCCESS,
  data: undefined,
}
```

#### Examples

The [`OPPluginListener`](#oppluginlistener) handler returns data.

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

[`OPPluginDispatch`](#opplugindispatch) prints its return value.

```ts title="OPPluginDispatch"
OPPluginDispatch('onChange', { value: 0 }).then((resultList) => {
  console.log(`value is increased: ${resultList[0].data === 1}`)
})
```
