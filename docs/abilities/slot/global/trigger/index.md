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
- [manual(required)](../../../../reference/config/plugin.yaml#manual)
- actions(required)

  - type: `Array<string>`

  Configure the [trigger event](./list.md) this module needs to be handle.

  :::warning
  The type used in `useAction` must be consistent with the `actions` declaration in the corresponding module of `plugin.yaml`, otherwise the plugin cannot be called up or the Action is permanently stuck in pending state.
  :::

### Available Hook API

- [useAction](../../../../reference/packages/store/store.md#useAction)

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
