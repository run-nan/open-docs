---
sidebar_position: 2
---

# CSS

每个插槽模块的样式代码，都存放于 `/web/src/modules/` 目录下以插槽模块 ID 命名的目录中。

以上一节添加的 `ones:global:banner` 为例，其对应的样式代码存放于 `/web/src/modules/ones-global-banner-3QC4/index.css` 文件中，默认生成的内容如下：

```css title="/web/src/modules/ones-global-banner-3QC4/index.css"
#ones-mf-root {
}
```

之前我们说到 `<div id="ones-mf-root">` 是插槽模块的根元素，因此你可以将样式写在 `#ones-mf-root` 选择器下，当然这不是必须的，你也可以将其移除，以任何喜欢的方式编写样式代码。

## PostCSS

我们为插件提供 [PostCSS](http://postcss.org/) 预处理器的天然支持，并默认开启以下功能：

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://cssnano.co/)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-nested](https://github.com/postcss/postcss-nested)

### autoprefixer

因为我们默认开启了 [autoprefixer](https://github.com/postcss/autoprefixer)，所以你只需使用无前缀的 CSS 规则编写插件样式即可，不必担心浏览器兼容问题。

### cssnano

我们使用 [cssnano](https://cssnano.co/) 来压缩插件样式代码，以减少插件的体积，提升插件运行性能。

### postcss-import

我们通过 [postcss-import](https://github.com/postcss/postcss-import) 预配置支持了 CSS `@import` 内联。

### postcss-nested

我们使用 [postcss-nested](https://github.com/postcss/postcss-nested) 允许你以嵌套的方式编写 CSS 选择器，就像你所熟悉的 Sass 一样：

```scss
.mf-bar-banner {
  width: 100%;
  height: 0;
  &--active {
    height: 40px;
  }
}
```
