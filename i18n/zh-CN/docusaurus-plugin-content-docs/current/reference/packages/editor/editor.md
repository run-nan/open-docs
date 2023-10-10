# @ones-op/editor

[![](https://npm.partner.ones.cn/badge/v/@ones-op/editor.svg)](https://npm.partner.ones.cn/package/@ones-op/editor)

我们提供了一套插件前端库，可以帮助你操作编辑器数据。

## 要求

| ONES       | **@ones-op/editor** |
| ---------- | ------------------- |
| `v3.6.25+` | `v0.1.0+`           |

## 安装

在插件 /web 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/editor
```

## Hooks

导出的标准 [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) 用法 API，具体参数详见下述：

### useEditor {#useEditor}

Get the wiz editor instance. It's used to create/update the editor data, get the block container, etc.

获取 wiz 编辑器实例。用于创建/更新编辑器数据，获取块容器等。

#### 返回

| 说明                | 类型       |
| ------------------- | ---------- |
| 当前 wiz 编辑器实例 | `MFEditor` |

#### 类型

```tsx
export interface MFEditor extends MFEditorEventEmitter {
  // 管理编辑器资源。
  //
  // 比如：你可以使用 `doc.uploadResource` 将资源上传到服务器，服务器返回资源的 id，然后你可以使用 `doc.buildResourceUrl` 获取资源的 url。
  doc: MFEditorDoc
  // `undoManager.runInGroup` 中插入数据、删除块等操作都会合并成一个操作进行撤销。
  undoManager: MFEditorUndoManager
  readonly: boolean
  // 用于选中块、更新光标、滚动到选中的块。
  selection: MFEditorSelection

  // 插入块到文档中。
  // 你可以通过 `props.blockData.pluginInfo.data` 在组件中获取 `blockData`。
  insertBlock: (
    containerId: string,
    blockIndex: number,
    // `blockData.type`` 是 `EditorBlockConfig` 中的 key
    blockData: MFInsertBlockData,
    options?: MFInsertBlockOptions,
  ) => BlockElement
  // 插入`Embed`块到文档中。
  insertEmbed: (
    containerId: string,
    blockIndex: number,
    blockData: MFInsertBaseData,
    options?: MFInsertBlockOptions,
  ) => BlockElement
  // 更新块的数据。
  updateBlockData: (block: BlockElement, data: MFInsertBlockData) => DocBlock
  // 更新`Embed`块的数据。
  updateEmbedData: (block: BlockElement, data: MFInsertBaseData) => DocBlock
  // 插入文本块到文档中。
  insertTextBlock: (text?: string, containerId?: string, blockIndex?: number) => BlockElement
  // 插入文本到块中。
  insertTextToBlock: (block: BlockElement, offset: number, text: string) => DocBlockText
  // 插入一个 `Box` 到块中
  insertBoxToBlock: (block: BlockElement, offset: number, boxData: MFInsertBaseData) => DocBlockText
  // 更新 `Box` 的数据。
  updateBoxData: (boxElement: BoxElement, boxData: MFInsertBaseData) => void
  // 插入一个可编辑的块到 `parentElement` 下面。
  createChildContainer: (
    path: BlockPath,
    parentElement: HTMLElement,
    childContainerId: string,
  ) => ContainerElement
  // 删除子容器。
  deleteChildContainers: (containerIds: string[]) => void
  // 删除块。
  deleteBlock: (block: BlockElement) => void
  findBlockById: (id: string) => BlockElement | null
  findBoxById: (id: string) => BoxElement | null
  getBlockById: (id: string) => BlockElement
  getBoxById: (id: string) => BoxElement
  getBlockByIndex: (containerId: string, blockIndex: number) => BlockElement
  getBlockIndex: (block: BlockElement | string) => number
  getContainerById: (id: string) => ContainerElement
  getParentContainer: (block: BlockElement) => ContainerElement
  reloadBlock: (block: BlockElement) => void
  isBlockWritable: (block: BlockElement | BlockElement[]) => boolean
}
```

### useEditorTools {#useEditorTools}

Get the wiz editor tools. It's used to create child container id, an selected range in the editor, etc.

获取 wiz 编辑器工具方法。用于创建子容器 ID，编辑器中的选中范围等。

#### 返回

| 说明               | 类型            |
| ------------------ | --------------- |
| wiz 编辑器工具方法 | `MFEditorTools` |

#### 类型

```tsx
export interface MFEditorTools {
  createComplexBlockPosition: typeof createComplexBlockPosition
  createEditorComplexSelectionRange: CreateEditorComplexSelectionRange

  getBlockId: typeof getBlockId
  isBlock: typeof isBlock
  getChildBlockCount: typeof getChildBlockCount
  getChildBlocks: typeof getChildBlocks
  getLastChildBlock: typeof getLastChildBlock
  getFirstChildBlock: typeof getFirstChildBlock
  getContainerId: typeof getContainerId
  isChildContainer: typeof isChildContainer
  isContainer: typeof isContainer
  // 让块对其他人不可编辑，除了当前用户。
  exclusiveBlock: (block: BlockElement) => void
  unexclusiveBlock: (block: BlockElement) => void

  // 创建子容器 ID。
  createEmptyContainer(text?: string): string
}
```

## Components

导出的标准 [React Component](https://reactjs.org/docs/react-component.html) 用法 API，具体参数详见下述：

### RenderEditorBlock

告诉编辑器如何渲染块数据。

#### 属性

| 参数   | 说明                   | 类型                | 必填 | 默认值 |
| ------ | ---------------------- | ------------------- | ---- | ------ |
| config | 与块数据渲染相关的配置 | `EditorBlockConfig` | 是   |        |

```ts
interface EditorBlockProps {
  blockData: MFDocBlock
  path: BlockPath
  registerLifeCycle: (lifecycle: BlockLifecycle) => void
  blockElement: BlockElement
  initParams: unknown
  selected: boolean
  setSelectedState: (selected: boolean) => void
}

interface EditorBlockConfig {
  // 键和 `props.blockData.pluginInfo.name` 保持一致。
  [name: string]: {
    render: (props: EditorBlockProps) => JSX.Element
    name: string
    icon: string
    resizeInfo?: MFPluginBlockResizeInfo
  }
}
```

#### 示例

```tsx
import { RenderEditorBlock } from '@ones-op/editor'

const config: EditorBlockConfig = {
  'my-tabs': {
    render: BlockTabs,
    icon: './logo.svg',
    name: 'my-tabs',
  },
}

function App() {
  return (
    <>
      <RenderEditorBlock config={config} />
    </>
  )
}
```

### RenderEditorEmbed

告诉编辑器如何渲染 `Embed` 的块数据。

#### 属性

| 参数   | 说明                        | 类型                | 必填 | 默认值 |
| ------ | --------------------------- | ------------------- | ---- | ------ |
| config | 与 `Embed` 块渲染相关的配置 | `EditorEmbedConfig` | Y    |        |

```ts
interface EditorEmbedProps {
  data: MFEmbedBlockData
  blockElement: BlockElement
  initParams: unknown
  registerLifeCycle: (lifecycle: EmbedLifecycle) => void
}

interface EditorEmbedConfig {
  // 键和 `props.blockData.embedData.pluginInfo.name` 保持一致。
  [name: string]: {
    render: (props: EditorEmbedProps) => JSX.Element
    name: string
    icon: string
    resizeInfo?: MFPluginBlockResizeInfo
  }
}
```

#### 示例

```tsx
import { RenderEditorEmbed } from '@ones-op/editor'

const config: EditorEmbedConfig = {
  'my-embed': {
    render: BlockEmbed,
    icon: './logo.svg',
    name: 'my-embed',
  },
}

function App() {
  return (
    <>
      <RenderEditorEmbed config={config} />
    </>
  )
}
```
