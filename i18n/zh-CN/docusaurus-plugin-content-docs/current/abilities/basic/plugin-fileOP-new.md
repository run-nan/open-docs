---
sidebar_position: 13
description: 插件本身的文件存储。
---

# [新]插件文件操作

## 要求

| **ONES** | @ones-op/node-fs |
| :------- | :------------------ |
| v3.6.0+  |            |

## 概述

每个插件拥有自己独享的文件存储空间，允许插件创建、读写、预置自己的文件，该空间位于`{{插件根目录}}/workspace`下。

在插件打包之前，可以在`{{插件根目录}}/workspace`中放置需要使用到的文件，在插件成功安装并启用后，可以通过该能力操作插件文件操作目录下的文件。


## 使用

### 第一步：安装依赖

进入插件工程的`/backend`目录，执行以下命令进行依赖安装：

```shell
npm i @ones-op/node-fs
```

### 第二步: 使用示例

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

## 相关 SDK

具体参数释义请参考：[@ones-op/node-fs](../../reference/packages/node-fs/node-fs.mdx)
