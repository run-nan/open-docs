# Trigger 插槽

## 要求

|   ONES    |
| :-------: |
| v3.10.20+ |

## 概述

Trigger 事件，可以帮你在 ONES 的某些操作（Action）触发时，对操作的数据进行修改或者取消操作。

当前支持的插槽：

- [ones:global:trigger](#onesglobaltrigger)

## 插槽

#### ones:global:trigger

**个数限制：** 一个插件中最多可声明 **10 **个该插槽，系统中最多同时存在 **100 **个该插槽

## 使用

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

**支持的配置项：**

- [preload](../../../../reference/config/plugin.yaml#preload)

  此选项建议设置为 `true`。

- [manual（必填）](../../../../reference/config/plugin.yaml#manual)

  此选项必须设置为 `true`。

- actions（必填）

  - 类型：`Array<string>`

  配置本模块需要处理的[触发事件](./list)

  :::warning
  当插件被激活时，你必须使用下述 [可访问的上下文数据](#context) 中的 `useVariablesInfo` 或 `useAction` 方法，获取 `next` 或者 `cancel` 函数并调用，否则系统操作（Action）将永久陷入 pending 状态。
  :::

### 可访问的上下文数据{#context}

#### [useVariablesInfo](../../../../reference/packages/store/store.md#useVariablesInfo)

- ONES 要求：`v3.13.43+`

与 `useAction` 异同点：

- 直接返回数据，不再需要通过回调对方式获取。
- 没有参数，通过范型推断返回值。
- 此方法拿到的 `next` 与 `cancel` 方法并没有绑定插件销毁操作，而是由插件通过调用 `lifecycle.destroy` 方法自行控制模块销毁时机。
- 新增 `actionType` 返回，用于判断是什么操作（Action）触发了当前插件模块。

:::warning
当插件调用 `next` 或者 `cancel` 后，需要尽可能快的时间内调用 `lifecycle.destroy` 方法将自身销毁，避免用户再次触发时无法重新激活插件。
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

#### [useAction](../../../../reference/packages/store/store.md#useAction)（已废弃）

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

<h3>多个 module 使用了同一个 action ，开放平台是如何处理冲突？</h3>

开放平台将会按插件管理页列表顺序串行激活 `module` ，每个 `module` 都将拿到 `action` 的原始数据，所有 `module` 处理完后，使用 lodash 的 [`merge`](https://lodash.com/docs/#merge) 函数合并处理结果并返回给 ONES 系统。

我们强烈不建议你多个模块或插件同时使用同一个 `action`，因为这将会受限于上述逻辑，无法在某个插件内删除特定数据，修改数据属性值也将会受限于插件顺序（数据属性路径相同时，后者将会覆盖前者）。
