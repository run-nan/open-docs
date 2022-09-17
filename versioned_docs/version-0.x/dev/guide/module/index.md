# 添加插槽模块

在插件根目录运行 op 的 `add` 命令，可以向插件新增插槽模块：

```
op add
```

其输出如下：

```
? 请选择插件后端(ability) 或 前端(module)的能力配置:  [Use arrows to move, type to filter]
> 能力 ability
  模块 module
  退出 exit
```

选择「模块 module」，可以看到如下插槽模块列表：

![](../images/module.png)

详细的插槽模块可以参考：[插槽模块列表](../../../api/module-type/)

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
