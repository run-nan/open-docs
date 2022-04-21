# 系统数据库
## 能力描述
提供访问系统 project 数据库数据能力。

:::caution 注意

建议尽量谨慎的使用这个能力。数据库层面的修改，我们不会保障其向前兼容。也就是说，基于这个能力开发的插件，很可能会在依赖的数据库表结构修改后，失去其功能的完整性。

:::

:::danger 危险

这个能力能够操作 project 数据库，使用不当会影响系统功能，请谨慎使用！！！

:::

## 使用
系统数据库能力被封装在了 **@ones-op/node-system-db** 这个包中，使用之前需要安装

```bash
npm i @ones-op/node-system-db
```
## API
提供了 **select, count, exec  **三个方法，使用方式和本地数据库的完全一样，可以参考上一章节 [插件数据库](./plugin-db)