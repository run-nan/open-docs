# @ones-op/editor

[![](https://npm.partner.ones.cn/badge/v/@ones-op/editor.svg)](https://npm.partner.ones.cn/package/@ones-op/editor)

We provide a set of plugin front-end library that can help you manipulate editor data.

## Requirements

| ONES       | **@ones-op/editor** |
| ---------- | ------------------- |
| `v3.6.25+` | `v0.1.0+`           |

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/editor
```

## Hooks

The exported standard [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) usage API, the specific parameters are shown in the following:

### useEditor {#useEditor}

Get the wiz editor instance. It's used to create/update the editor data, get the block container, etc.

#### Returns

| Description                 | Type       |
| --------------------------- | ---------- |
| Current wiz editor instance | `MFEditor` |

#### Types

```tsx
export interface MFEditor extends MFEditorEventEmitter {
  // Manage the editor resource.
  //
  // For example, you can use the `doc.uploadResource` to upload an resource to the server, the server returns the id of
  // the resource, and then you can use the `doc.buildResourceUrl` to get the url of the resource.
  doc: MFEditorDoc
  // All operations such as inserting data, and deleting blocks in the `undoManager.runInGroup` are merged into one operation for undo.
  undoManager: MFEditorUndoManager
  readonly: boolean
  // Used to select a block, update the cursor, and scroll in the selected block.
  selection: MFEditorSelection

  // Insert a block into the document.
  // You can get the `blockData` in the component by `props.blockData.pluginInfo.data`.
  insertBlock: (
    containerId: string,
    blockIndex: number,
    // `blockData.type` is the key of `EditorBlockConfig`
    blockData: MFInsertBlockData,
    options?: MFInsertBlockOptions,
  ) => BlockElement
  // Insert an embed block into the document.
  insertEmbed: (
    containerId: string,
    blockIndex: number,
    blockData: MFInsertBaseData,
    options?: MFInsertBlockOptions,
  ) => BlockElement
  // Update the data of the block.
  updateBlockData: (block: BlockElement, data: MFInsertBlockData) => DocBlock
  // Update the data of the embed block.
  updateEmbedData: (block: BlockElement, data: MFInsertBaseData) => DocBlock
  // Insert a text block into the document.
  insertTextBlock: (text?: string, containerId?: string, blockIndex?: number) => BlockElement
  // Insert a text into a block.
  insertTextToBlock: (block: BlockElement, offset: number, text: string) => DocBlockText
  // Insert a box into a block.
  insertBoxToBlock: (block: BlockElement, offset: number, boxData: MFInsertBaseData) => DocBlockText
  // Update the data of the box.
  updateBoxData: (boxElement: BoxElement, boxData: MFInsertBaseData) => void
  // Insert an editable block under the `parentElement`.
  createChildContainer: (
    path: BlockPath,
    parentElement: HTMLElement,
    childContainerId: string,
  ) => ContainerElement
  // Delete the children containers.
  deleteChildContainers: (containerIds: string[]) => void
  // Delete the block.
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

#### Returns

| Description              | Type            |
| ------------------------ | --------------- |
| Current wiz editor tools | `MFEditorTools` |

#### Types

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
  // Make the block uneditable for others except the current user.
  exclusiveBlock: (block: BlockElement) => void
  unexclusiveBlock: (block: BlockElement) => void

  // create child container id.
  createEmptyContainer(text?: string): string
}
```

## Components

The exported standard [React Component](https://reactjs.org/docs/react-component.html) usage API, the specific parameters are shown in the following:

### RenderEditorBlock

Tell the editor how to render the block data.

#### Props

| Params | Description                                   | Type                | Required | Default |
| ------ | --------------------------------------------- | ------------------- | -------- | ------- |
| config | the config about how to render the block data | `EditorBlockConfig` | Y        |         |

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
  // The kye is the `props.blockData.pluginInfo.name`.
  [name: string]: {
    render: (props: EditorBlockProps) => JSX.Element
    name: string
    icon: string
    resizeInfo?: MFPluginBlockResizeInfo
  }
}
```

#### Examples

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

Tell the editor how to render the embed data.

#### Props

| Params | Description                                   | Type                | Required | Default |
| ------ | --------------------------------------------- | ------------------- | -------- | ------- |
| config | the config about how to render the embed data | `EditorEmbedConfig` | Y        |         |

```ts
interface EditorEmbedProps {
  data: MFEmbedBlockData
  blockElement: BlockElement
  initParams: unknown
  registerLifeCycle: (lifecycle: EmbedLifecycle) => void
}

interface EditorEmbedConfig {
  // The kye is the `props.blockData.embedData.pluginInfo.name`.
  [name: string]: {
    render: (props: EditorEmbedProps) => JSX.Element
    name: string
    icon: string
    resizeInfo?: MFPluginBlockResizeInfo
  }
}
```

#### Examples

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
