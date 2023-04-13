# Trigger slot

## Requirements

| **ONES**  |
| :-------: |
| v3.10.20+ |

## Overview

We have provided slots for the trigger event to edit the data or cancel the action which is triggered in the system.

The slots currently supported are as follows:

- [ones:global:trigger](#onesglobaltrigger)

## Slots

#### ones:global:trigger

**Number limit：** Declare a maximum of **10** slots in each plugin, and up to **100** slots in the system.

## Usage

```yaml
modules:
  - id: ones-global-trigger-QIOs
    title: trigger
    moduleType: ones:global:trigger
    entry: modules/ones-global-trigger-QIOs/index.html
    preload: true
    manual: true
    actions:
      - action:pre:ones:task:fields:update
```

**Supported config options：**

- [preload](../../../../reference/config/plugin.yaml#preload)

  This option is recommended to be set to `true`.

- [manual(required)](../../../../reference/config/plugin.yaml#manual)

  This option must be set to `true`.

- actions(required)

  - type: `Array<string>`

  Configure the [trigger event](./list.md) this module needs to be handle.

  :::warning
  When the plugin is activated, you must use the `useVariablesInfo` or `useAction` method in [accessible context data](#context) below to get the `next` or `cancel` function and call it, otherwise the system action (Action) will be permanently in the pending state.
  :::

### Available Hook API {#context}

#### [useVariablesInfo](../../../../reference/packages/store/store.md#useVariablesInfo)

- ONES Requirement: `v3.13.43+`

Similarities and differences with `useAction`.

- Return data directly, no longer need to get it by way of callback pairs.
- No parameters, return value is inferred by paradigm.
- The `next` and `cancel` methods of this method do not bind to the plugin destruction operation, but let the plugin control the module destruction timing by calling the `lifecycle.destroy` method.
- A new `actionType` return is added to determine what Action triggered the current plugin module.

:::warning
When the plugin calls `next` or `cancel`, it needs to call the `lifecycle.destroy` method to destroy itself as soon as possible, so that the user can't reactivate the plugin when it is triggered again.
:::

```tsx
import { useVariablesInfo } from '@ones-op/store'
import { lifecycle } from '@ones-op/bridge'
function TriggerPlugin() {
  const [visible, setVisible] = useState(true)
  const moduleData = useVariablesInfo<'ones:global:trigger'>()
  const { sessionID, next, cancel, data: payload, actionType } = moduleData
  const handleOk = useCallback(() => {
    setVisible(false)
    next?.(payload)
    lifecycle.destroy()
  }, [next, payload])
  const handleCancel = useCallback(() => {
    setVisible(false)
    toast.warning('cancel')
    setTimeout(() => {
      cancel?.()
      lifecycle.destroy()
    }, 1100)
  }, [cancel])
  return (
    <Modal visible={visible} title="Confirm Data" onOk={handleOk} onCancel={handleCancel}>
      <p>sessionID: {sessionID}</p>
      <p>data: </p>
      <p>{JSON.stringify(payload?.data)}</p>
    </Modal>
  )
}
```

#### [useAction](../../../../reference/packages/store/store.md#useAction) (Deprecated)

```tsx
import { useAction } from '@ones-op/store'

function TriggerPlugin() {
  const [visible, setVisible] = useState(false)
  const [sessionID, setSessionID] = useState('')
  const [payload, setPayload] = useState<Record<string, any>>()
  const onOkRef = useRef<Function>()
  const onCancelRef = useRef<Function>()

  useAction('action:pre:ones:task:fields:update', ({ sessionID, next, data, cancel }) => {
    console.log('task fields update data: ', data)
    setSessionID(sessionID)
    setPayload(data)
    onOkRef.current = next
    onCancelRef.current = cancel
    setVisible(true)
  })

  const handleOk = useCallback(() => {
    setVisible(false)
    onOkRef.current?.(payload)
  }, [payload])

  const handleCancel = useCallback(() => {
    setVisible(false)
    toast.warning('cancel')
    setTimeout(() => {
      onCancelRef.current?.()
    }, 1100)
  }, [])

  return (
    <Modal visible={visible} title="Confirm Data" onOk={handleOk} onCancel={handleCancel}>
      <p>sessionID: {sessionID}</p>
      <p>data: </p>
      <p>{JSON.stringify(payload?.data)}</p>
    </Modal>
  )
}
```

## FAQ

<h3>How does the open platform handles the conflict when multiple modules use the same action?</h3>

The open platform will activate the modules serially with the order in the plugin management page, every module will get
the original data from the action, after all, modules are handled, the result is merged by the function [`merge`](https://lodash.com/docs/#merge)
from the `lodash` and return to the system.

We strongly do not recommend that you use the same `action` for multiple modules or plugins at the same time, because of
the reason described above, and you cannot delete specific data in a plugin, and modifying attributes of the data ​​will
also be limited by the order of plugins (For the same attribute in the data, the former is overridden by the latter).
