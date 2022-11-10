# Trigger 事件

我们提供了一套 Trigger 事件方法，可以帮你在 ONES 的某些操作（Action）触发时，对操作的数据进行修改或者取消操作。

## 兼容性

### 环境依赖

|   ONES    |
| :-------: |
| v3.10.20+ |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/store
```

## 使用

```tsx
import { useAction } from '@ones-op/store'

useAction('action:pre:ones:task:fields:update', ({ sessionID, next, data, cancel }) => {
  console.log('task fields update data: ', data)
  next(data)
})
```

### 添加配置

```yaml title="config/plugin.yaml"
modules:
  - id: ones-global-trigger-QIOs
    title: trigger
    moduleType: ones:global:trigger
    entry: modules/ones-global-trigger-QIOs/index.html
    preload: true # 必须项
    manual: true # 必须项
    actions: # 必须项
      - action:pre:ones:task:fields:update
```

:::caution 注意

`actions` 里声明的类型，必须与代码里 `useAction` 用到的类型保持一致，否则将会导致系统无法调起插件，或者系统操作（Action）永久陷入 pending 状态。

:::

## API

### useAction

通过此 hook 方法，可以对系统内的一些操作（Action）进行拦截处理。

#### Params

|  参数   | 说明                                                              |                类型                | 必填 | 默认值 |
| :-----: | :---------------------------------------------------------------- | :--------------------------------: | :--: | :----: |
|  type   | trigger 类型字符串，完整的触发列表可以参考：[触发列表](./list.md) |            `ActionEnum`            |  是  |        |
| handler | 操作拦截处理方法                                                  | `(payload: ActionPayload) => void` |  是  |        |

#### Types

```ts
interface ActionPayload<T = unknown> {
  /** 会话 id，同一类的 action，每一次操作，pre 与 post 取得的值相同 */
  sessionID: string
  /** 操作的数据 */
  data: T
  /** 继续往下执行操作，并销毁插件！ */
  next: (data: T) => void
  /** 取消当前操作，并销毁插件！ */
  cancel: (message?: string) => void
}
```

:::caution 注意
当调用 `next` 或 `cancel` 方法后，插件将会被销毁，此时你将无法进行一些 DOM 操作，如 toast 提示等。  
如果你有页面提示需求，你应该在提示完成后，再调用 `next` 或 `cancel` 方法。
:::

#### Examples

```tsx
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
