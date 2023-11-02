# 贡献指南

## 安装 pnpm

> 需要安装 Node.js v16.14+

从 v16.13 开始，Node.js 发布了 [Corepack](https://nodejs.org/api/corepack.html) 来管理包管理器。 这是一项实验性功能，因此你需要通过运行如下脚本来启用它：

```
corepack enable
```

如果你已经使用 Homebrew 安装了 Node.js，你需要单独安装Corepack：

```
brew install corepack
```

这会自动将 pnpm 安装在你的系统上。

## 安装项目依赖

```
pnpm install
```

## 本地开发

```
# 内部文档
pnpm run dev

# 外部文档
pnpm start
```

此命令会启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映出来，而无需重新启动服务器。

### i18n

使用你所选择的语言，以开发模式启动本地化站点，以中文为例：

```
# 内部文档
pnpm run dev:zh

# 外部文档
pnpm run start:zh
```

#### 目录结构

最新版本文档目录：

```
/docs # 英文文档
/i18n/zh-CN/docusaurus-plugin-content-docs/current # 中文文档
```

- 未上线的迭代文档提交 PR 到 next 分支，会自动 merge 并发布至 [docs.partner.ones.cn](https://docs.partner.ones.cn/)
- 迭代上线后再提交 PR 到 main 分支

### 构建

```
$ pnpm run build
```

该命令将静态内容生成到 `dist` 目录中，通常由 GitHub Action 执行。

### OpenAPI

文档配置入口（如果没有新增大版本，无需修改）：`docusaurus.openapi.config.js`

#### 命令

重新生成最新 OpenAPI 文档：

```
$ pnpm run rebuild-api
```

生成所有 OpenAPI 文档（如果存在则跳过）：

```
$ pnpm run gen-api
```

删除所有 OpenAPI 文档：

```
$ pnpm run clean-api
```

#### 维护

`openapi/source` 目录只放 OpenAPI 源文件，不放任何 Markdown 文件，作为 OpenAPI 文档的构建读取目录使用

##### 更新

如果是修改已有 yaml 内容，在更新完 yaml 后执行 `pnpm run rebuild-api` 命令，会自动清空并重新生成 OpenAPI 文档

##### 新增

如果是新增 yaml，你需要在「更新」流程的基础上，找到 api 对应的目录下，添加 `_category_.json` 目录描述，并在 `i18n/zh-CN/docusaurus-plugin-content-docs/[version].json` 下添加侧边栏文案翻译

##### 注意

接口相关的新增与修改，请在描述里说明是 ONES 的最低支持版本

请以相同的操作同步修改中文内容，中文目录位置：`i18n/docusaurus-plugin-content-docs`
