# Trigger 插槽

## 要求

| **ONES**  |
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

- [preload](../../../../reference/config/plugin.md#preload)
- [manual（必填）](../../../../reference/config/plugin.md#manual)
- actions（必填）

  - 类型：`Array<string>`

  配置本模块需要处理的[触发事件](./list.md)

### 可访问的上下文数据

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

<h3>多个 module 使用了同一个 action ，开放平台是如何处理冲突？</h3>

开放平台将会按插件管理页列表顺序串行激活 `module` ，每个 `module` 都将拿到 `action` 的原始数据，所有 `module` 处理完后，使用 lodash 的 [`merge`](https://lodash.com/docs/#merge) 函数合并处理结果并返回给 ONES 系统。

我们强烈不建议你多个模块或插件同时使用同一个 `action`，因为这将会受限于上述逻辑，无法在某个插件内删除特定数据，修改数据属性值也将会受限于插件顺序（数据属性路径相同时，后者将会覆盖前者）。
