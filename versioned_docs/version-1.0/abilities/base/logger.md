---
sidebar_position: 2
---

# 插件日志

## 能力描述

提供标准日志方法, 方便打印日志。日志的能力被封装在了 **@ones-op/node-logger** 这个包中。

日志文件会保存在插件目录的 **ones-plugin-node-host.log**。 在本地调试时，如果需要将日志打印在控制台可以在 **config/local.yaml** 中开启配置 **debug_mode: true**

## API

提供了 4 种级别的标准日志打印方法： **debug**，**info**，**warning**， **error**

## 使用

初始化的代码会默认安装这个包，如果没有可以手动安装

```bash
npm i @ones-op/node-logger
```

## 示例

```typescript
import { Logger } from '@ones-op/node-logger'

function logExample() {
  Logger.debug('test')
  Logger.info('hello world')
  Logger.warning('hello', 'world', { a: 1 })
  Logger.error('error: ', new Error('error message'))
}
```
