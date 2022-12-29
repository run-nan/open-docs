---
sidebar_position: 11
description: File storage for the plugin itself.
---

# Plugin file operation

## Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## Overview

Each plugin has its own file workspace, which allows the plugin to create, read, write and preset its own files, which is located under `{{plugin root directory}}/workspace`.

Before the plugin is packaged, you can place the files you need in `{{plugin root directory}}/workspace`. After the plugin is successfully installed and enabled, you can manipulate the plugin files and manipulate the files in the directory.

In order to facilitate the reading and writing of files, we provide a way to debug with local files, so that developers can see the effect of the code more intuitively without visiting the debugging server. If you need to redirect the file storage during debugging of the target plugin locally, you need to:

- modify the configuration in `config/local.yaml`；

```yaml
local:
  file_in_local: true
```

## Usage

### SDK document：[@ones-op/node-file](../../reference/packages/node-file/node-file.md)

#### Step 1: Installing dependencies

Run the following instructions under the plugin project root directory to install dependencies. (note that this ability is used by backend by default, and the usage directory is under `backend`)

```shell
cd backend
npm i @ones-op/node-file
```

#### Step 2: Example

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
