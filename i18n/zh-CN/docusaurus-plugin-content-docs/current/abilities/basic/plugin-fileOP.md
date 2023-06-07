---
sidebar_position: 12
description: 插件本身的文件存储。
---

# 插件文件操作

## 要求

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="2" label="3.13.60+">

| ONES    | @ones-op/node-fs |
| :------ | :--------------- |
| v3.13.60+ |    v0.0.1+              |

</TabItem>

<TabItem value="1" label="3.6.0+ ">

| ONES    | @ones-op/node-utils | @ones-op/node-file |
| :------ | :------------------ | :----------------- |
| v3.6.0+ | v0.2.0+             | v0.3.0+            |

</TabItem>
</Tabs>

## 概述

<Tabs>
<TabItem value="2" label="3.13.60+">

每个插件拥有自己独享的文件存储空间，允许插件创建、读写、预置自己的文件，该空间位于`{{插件根目录}}/workspace`下。

在插件打包之前，可以在`{{插件根目录}}/workspace`中放置需要使用到的文件，在插件成功安装并启用后，可以通过该能力操作插件文件操作目录下的文件。

</TabItem>
<TabItem value="1" label="3.6.0+ ">

每个插件拥有自己独享的文件存储空间，允许插件创建、读写、预置自己的文件，该空间位于`{{插件根目录}}/workspace`下。

在插件打包之前，可以在`{{插件根目录}}/workspace`中放置需要使用到的文件，在插件成功安装并启用后，可以通过该能力操作插件文件操作目录下的文件。

为了方便对文件的读写，我们提供了使用本地文件进行调试的方式，以便开发者无需访问调试服务器，便能更直观的看到代码效果。若需要将目标插件的调试过程中的文件存储重定向到本地，需要：

- 修改`config/local.yaml`中的配置；

```yaml
local:
  file_in_local: true
```
</TabItem>
</Tabs>

## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

<Tabs>
<TabItem value="2" label="3.13.60+">

```shell
npm i @ones-op/node-fs
```

</TabItem>
<TabItem value="1" label="3.6.0+ ">

```shell
npm i @ones-op/node-file
```

</TabItem>
</Tabs>

### 第二步: 使用示例

<Tabs>
<TabItem value="2" label="3.13.60+">

```javascript
import {promises} from '@ones-op/node-fs'
import { Logger } from '@ones-op/node-logger'
import { String2Unit8Array, Object2Unit8Array, Unit8Array2String } from '@ones-op/node-utils'

const dir1_name = './dir1'
const dir2_name = './dir1/dir2'
const dir3_name = './dir1/dir2/dir3'
const file21_name = './dir1/dir2/file21.txt'
const file21_copy_name = './dir1/dir2/file21_copy.txt'
const file21_cp_name = './dir1/dir2/file21_cp.txt'
const file21_rename_name = './dir1/dir2/file21_rename.txt'
const file21_copy_link_name = './dir1/dir2/file21_copy_link'
const file21_copy_symlink_name = './dir1/dir2/file21_copy_symlink'
const file22_name = './dir1/dir2/file22.txt'
const file23_name = './dir1/dir2/file23.txt'


export async function TestFile() {
  let res
  try {
      await promises.mkdir(dir1_name)
      await promises.mkdir(dir3_name, {recursive: true}) //返回创建的顶级父级目录
      await promises.mkdtemp(path.join(dir2_name, 'foo-'))
      await promises.writeFile(file21_name, '')

      await promises.writeFile(file21_name, 'hello world\n')
      await promises.appendFile(file21_name, "this is append content\n")
      await promises.copyFile(file21_name, file21_copy_name)
      await promises.copyFile(file21_name, file22_name)
      await promises.copyFile(file21_name, file23_name)
      await promises.cp(file21_name, file21_cp_name)
      await promises.rename(file21_name, file21_rename_name)

      res = await promises.readFile(file22_name)
      Logger.info("readFile:", Unit8Array2String(res))
      const dir = await promises.opendir(dir2_name);
      for await (const dirent of dir)
          Logger.info("opendir dirent:", dirent.name);
      const files = await promises.readdir(dir2_name);
      for (const file of files)
          Logger.info("readdir file:", file);

      await promises.access(file21_copy_name)
      await promises.realpath(file21_copy_name)
      await promises.link(file21_copy_name, file21_copy_link_name)
      await promises.symlink(file21_copy_name, file21_copy_symlink_name)
      await promises.readlink(file21_copy_symlink_name)
      await promises.unlink(file21_copy_symlink_name)
      
      await promises.truncate(file22_name, 2)

      await promises.stat(file22_name)
      await promises.lstat(file22_name)

      await promises.utimes(file22_name, 1684339200, 1684339200)
      await promises.lutimes(file23_name, 1684252800, 1684252800)

      await promises.chmod(file22_name, '777')
      await promises.lchmod(file23_name, '644')

      await promises.chown(file22_name, 2, 1)
      await promises.lchown(file23_name, 2, 1)

      await promises.rmdir(dir3_name)
      await promises.rm(dir1_name, {recursive: true})
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

</TabItem>
<TabItem value="1" label="3.6.0+ ">

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

</TabItem>
</Tabs>

## 相关 SDK

<Tabs>
<TabItem value="2" label="3.13.60+">

具体参数释义请参考：[@ones-op/node-fs](../../reference/packages/node-fs/node-fs.mdx)

</TabItem>
<TabItem value="1" label="3.6.0+ ">

具体参数释义请参考：[@ones-op/node-file](../../reference/packages/node-file/node-file.mdx)

</TabItem>
</Tabs>