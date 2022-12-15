# 插入块元素

![](images/block.png)

该能力可以在 `wiki` 文档声明一个块元素，独占一整行（如上图选中的区域），在块内是不可编辑的，如果需要编辑，需要声明一个单独的入口，入口会显示在 `toolbar` 区域，用户点击后会打开编辑界面。

![](images/menu.png)
![](images/shortcut.png)

用户插入这个宏的方式有两种：通过点击左侧的菜单或者输入快捷指令，开发者可以在配置中进行声明。

详细的声明可以参考配置说明

## 兼容性

### 环境依赖

|   ONES    |
| :-------: |
| v3.11.30+ |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/store
```

## 使用

### 添加配置

```yaml title="config/plugin.yaml"
modules:
  - id: ones-wiki-editor-embed-Pl6y
    title: 工作项
    moduleType: ones:wiki:editor:embed
    # 快捷指令，宏会出现在用户通过输入"/"触发的菜单中
    macroShortcut: issue
    # 宏的描述
    describe: 插入工作项
    # 宏的图标
    icon: macro-icon.svg
    modules:
      - id: ones-wiki-editor-embed-syM2
        title: 展示
        # 当前插槽的类型，
        # render 表示用来渲染展示界面
        # toolbar 表示用来渲染文档块的编辑界面
        scene: render
        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-syM2/index.html
      - id: ones-wiki-editor-embed-BUmK
        # toolbar 对应的名称
        title: 编辑
        # toolbar 对应的图标
        icon: edit.svg # 必须项
        scene: toolbar
        preload: true # 必须项
        manual: true # 必须项
        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-BUmK/index.html
```

一个宏插件主要由两部分组成：

- 块元素渲染（`scene: render`），必须项，用来显示文档中对应的数据，当一个用户编辑该元素时，另一个用户的对应的块元素会处于禁用状态。

:::caution 注意

渲染块里面不应该有 `Input` 等编辑框（在渲染界面，大部分事件会被拦截，导致用户不能输入），这些编辑操作应该放到单独的编辑界面，通过 `toolbar` 打开编辑界面。

:::

- 编辑界面（`scene: toolbar`），可选项，通过 `toolbar` 触发。每次打开，编辑界面会初始化，关闭时，编辑界面实例会被销毁。

### 主动触发编辑界面

一般编辑界面是由用户点击 `toolbar` 触发，如果想在用户第一次插入自定义宏到文档时，主动弹出编辑界面，可以使用 `isTriggerByUser` 加上一个本地标识（是否已经主动弹出过编辑界面）来处理。

展示界面

```tsx
let shouldOpenEditPage = true

function App() {
  const document = useDocumentInfo<unknown, boolean>()

  useEffect(() => {
    if (document.isTriggerByUser && shouldOpenEditPage) {
      // 跳转到编辑界面
      document.goToState({
        builtIn: false,
        value: {
          id: 'ones-wiki-editor-embed-BUmK',
          title: '编辑',
        },
        customData: true,
      })
      shouldOpenEditPage = false
    }
  }, [document])

  return <div />
}
```

编辑界面

```tsx
function App() {
  const document = useDocumentInfo<unknown, boolean>()

  const cancel = useCallback(() => {
    if (document.toolbarState.customData) {
      document.destroy()
    } else {
      // 关闭 toolbar
      document.goToState({
        builtIn: true,
        value: 'init',
      })
    }
  }, [document])

  return <Modal title="插件开发" onCancel={cancel} />
}
```

### 保存数据

当调用 `saveData` 保存数据时，数据是保存在文档中的。如果是简单的用户输入的数据（比如 `URL`，文本等），可以直接调用 `saveData` 保存。
但是如果数据量很大，建议通过调用后台接口将数据保存在后台数据库中，然后将返回的 `ID` 保存在文档中。

:::caution 注意

在 `saveData` 中保存的数据会用于用户的撤销、版本回退等操作，每次用户执行撤销、回退等操作，编辑器会返回对应版本的数据给到插件去渲染。

:::

在保存数据的同时，也需要告诉编辑器，在导出 word/PDF 时，数据如何展示（比如：插入工作项，保存的数据是工作项 `ID`，导出 word/PDF 时，会展示成一个链接），
目前导出支持三种格式（文本，链接，图片），可以参考 `API` 里面类型的定义。其中，图片比较特殊，需要先将图片保存到编辑器的后台服务器上（调用 `uploadResource` 方法），服务器会返回资源的文件名，
最后利用返回的文件名生成导出数据，可以参考下面的例子。

:::caution 注意

在利用 `uploadResource` 上传资源到编辑器的服务中时，资源是和当前的文档绑定的，在跨文档复制自定义宏时，资源也需要复制到对应的文档中，所以在文档的数据结构中约定了一个字段（`resources`）来保存这些资源，平台会
默认对字段里面的资源进行复制。

导出里面的图片资源不需要在这个字段中保存了，平台会处理导出数据中的图片资源。

请勿将自定义的值传递给字段`resources`，否则会被当作资源 ID 处理。

```ts
document.saveData(
  {
    resources: [resourceId],
  },
  {
    exportSpec: [
      {
        type: 'image',
        data: resourceName,
      },
    ],
  }
)
```

:::

```ts
const document = useDocumentInfo()

document
  .uploadResource(File /** 需要导出的图片文件  */, 'test.svg'), () => {})
  .then((resourceName) => {
    document.saveData(
      // 需要保存到文档中的数据
      {
        data: value,
        // 请勿将自定义的值传递给字段`resources`，否则会被当作资源 ID 处理。
        resources: [resourceId]
      },
      {
        exportSpec: [
          {
            type: 'image',
            data: resourceName,
          },
        ],
      }
    )
    // 关闭 toolbar
    document.goToState({
      builtIn: true,
      value: 'init',
    })
  })
```

### 插件运行状态

通过 `status`，可以获取插件的运行状态。同时，插件也可以修改这个状态，比如，当文档保存的数据有问题，需要提示用户重新编辑该数据，插件只需要调用下面的方法。具体状态的定义可以参考 `API` 类型定义。

```ts
const document = useDocumentInfo()
document.setStatus(EmbedPluginRuntimeStatus.DATA_INVALID)
```

## API

请查阅 [@ones-op/store](../../../api/packages/store.mdx#useDocumentInfo) 库 API 文档。