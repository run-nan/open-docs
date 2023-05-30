---
sidebar_position: 12
description: 插件本身的文件存储。
---

# 插件文件操作

由于`@ones-op/node-file`包存在 bug，当 ONES 版本超过`v3.13.60`时候，请使用[`@ones-op/node-fs`](plugin-fileOP-new.md)包进行替换。

## 要求

| ONES    | @ones-op/node-utils | @ones-op/node-file |
| :------ | :------------------ | :----------------- |
| v3.6.0+ | v0.2.0+             | v0.3.0+            |

## 概述

每个插件拥有自己独享的文件存储空间，允许插件创建、读写、预置自己的文件，该空间位于`{{插件根目录}}/workspace`下。

在插件打包之前，可以在`{{插件根目录}}/workspace`中放置需要使用到的文件，在插件成功安装并启用后，可以通过该能力操作插件文件操作目录下的文件。

为了方便对文件的读写，我们提供了使用本地文件进行调试的方式，以便开发者无需访问调试服务器，便能更直观的看到代码效果。若需要将目标插件的调试过程中的文件存储重定向到本地，需要：

- 修改`config/local.yaml`中的配置；

```yaml
local:
  file_in_local: true
```

## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm i @ones-op/node-file
```

### 第二步: 使用示例

```javascript
import { makeDir, createFile, writeStrings, appendStrings, copy, rename, writeBytes, appendBytes, list, isExist, isDir, isFile, read, readLines, remove } from '@ones-op/node-file'
import { Logger } from '@ones-op/node-logger'
import { String2Unit8Array, Object2Unit8Array, Unit8Array2String } from '@ones-op/node-utils'

export async function TestFile() {
  try {
    await makeDir('./tmp/test')
    await createFile('./tmp/test/test.txt')
    await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
    await appendStrings('./tmp/test/test.txt', ['hello world!'])
    await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
    await copy('./tmp/test/test.txt', './tmp/test/test3.txt')
    await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
    await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
    await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
    Logger.info('======List', await list('./tmp/test'))
    Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
    Logger.info('======isDir', await isDir('./tmp'))
    Logger.info('======isDir', await isDir('./tmp/test'))
    Logger.info('======isDir', await isDir('./tmp/test/test.txt'))
    Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
    Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
    const lines = await readLines('./tmp/test/test.txt', 0, 1)
    Logger.info('======readLines', lines)
    await remove('./tmp/test/test4.txt')
    Logger.info('======List', await list('./tmp/test'))
  } catch (error) {
    Logger.error('ERROR: testFile callback:', error)
  }

  return {
    body: {
      code: 200,
      data: 'ok',
    },
  }
}
```

## 相关 SDK

具体参数释义请参考：[@ones-op/node-file](../../reference/packages/node-file/node-file.mdx)
