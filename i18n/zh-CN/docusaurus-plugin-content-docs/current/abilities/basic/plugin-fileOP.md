# 插件文件操作

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## 概述

每个插件拥有自己独享的文件存储空间，允许插件创建、读写、预置自己的文件，该空间位于`{{插件根目录}}/workspace`下。

在插件打包之前，可以在`{{插件根目录}}/workspace`中放置需要使用到的文件，在插件成功安装并启用后，可以通过该能力操作插件文件操作目录下的文件。

为了方便对文件的读写，我们提供了使用本地文件进行调试的方式，以便开发者无需访问调试服务器，便能更直观的看到代码效果。若需要将目标插件的调试过程中的文件存储重定向到本地，需要：

- 修改`config/local.yaml`中的配置；

```yaml
local:
  file_in_local: true
```

## 能力使用

### SDK 文档：[@ones-op/node-file](../../reference/packages/node-file/node-file.md)

#### 第一步：安装依赖

在插件根目录下运行以下指令安装依赖。（注意，默认该能力是后端使用，并且使用目录在 backend 下）

```shell
cd backend
npm i @ones-op/node-file
```

#### 第二步: 使用示例

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
