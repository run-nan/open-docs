---
sidebar_position: 13
description: File storage for the plugin itself.
---

# [new]Plugin file operation

## Requirements

| **ONES** | @ones-op/node-fs |
| :------- | :------------------ |
| v3.6.0+  |            |

## Overview

Each plugin has its own file workspace, which allows the plugin to create, read, write and preset its own files, which is located under `{{plugin root directory}}/workspace`.

Before the plugin is packaged, you can place the files you need in `{{plugin root directory}}/workspace`. After the plugin is successfully installed and enabled, you can manipulate the plugin files and manipulate the files in the directory.

## Usage

### Step 1: Installing dependencies

Enter the `/backend` directory of the plugin project, and execute the following command for dependent installation:

```shell
npm i @ones-op/node-fs
```

### Step 2: Example

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
      await promises.mkdir(dir3_name, {recursive: true}) //Returns the top-level parent directory created
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

## SDK

Parameters reference：[@ones-op/node-file](../../reference/packages/node-fs/node-fs.mdx)
