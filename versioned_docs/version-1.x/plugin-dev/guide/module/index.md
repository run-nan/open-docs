# 添加插槽模块

在插件工程根目录执行 op 的 `add module` 或 `add sub-module` 指令，可以向插件新增插槽模块或子模块：

```
npx op add module
# 或
npx op add sub-module

➜ npx op add module
  ✔ Validating the input params
  ✔ Validating project files exists
  ✔ Generating initial answers by input params
  ✔ Parsing plugin config content

Pre-require tasks run successfully
? Please select the module type you want to add: …
ones:desk
ones:manhour
ones:performance
ones:plan
ones:pipeline
ones:product
ones:project
ones:testcase
ones:version
ones:wiki
```

在列表中可以通过选择方向键或输入字符串搜索并选择插槽模块在列表中可以通过选择方向键或输入字符串搜索并选择插槽模块

## 插槽列表

- [插槽模块列表](../../../api/slot/global.md)

## 插槽添加示例

这里我们以 `ones:global:banner` 全局插槽为例，当选择添加这个模块后，可以看到在 `/config/plugin.yaml` 文件的`modules` 字段中新增了一项内容：

```yaml title="/config/plugin.yaml"
modules:
  - id: ones-global-banner-3QC4
    title: banner
    entry: modules/ones-global-banner-3QC4/index.html
    moduleType: ones:global:banner
```

同时，还会生成与 `entry` 字段对应的 `/web/src/modules/ones-global-banner-3QC4` 目录，其中包含 `index.tsx` 与 `index.css` 两个文件：

![](../images/banner.png)

细心的你可能发现了，`/web/src/modules/ones-global-banner-3QC4` 目录下并不存在 `entry` 字段中指定的 `index.html` 文件，不过你不必担心，我们将在下一节中为你解答疑惑。
