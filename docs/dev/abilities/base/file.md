# 插件文件操作 workspace
## 能力描述
插件可以拥有自己独享的文件存储空间，用于创建、预置、读写自己的文件。

对文件的操作，只能通过这个能力进行。

平台为插件提供一系列的文件相关操作的方法。 

* 在插件工作时，其文件存储在插件的相对路径目录： `[当前插件]/workspace` ；
* 在插件代码中，可以对文件进行增删改查操作；
* 在插件打包时，可以在这个 workspace 中预置一些文件，安装时这些文件会一并部署到插件的工作目录中去。

## 安装工具包
```bash
npm i @ones-op/node-file
```
### 能力声明
```typescript
import {
  appendBytes,
  createFile,
  isDir,
  isExist,
  isFile,
  makeDir,
  readLines,
  writeBytes,
  writeStrings,
  appendStrings,
  read,
  list,
  copy,
  remove,
  rename,
} from '@ones-op/node-file'
```
## API

:::caution 注意
所有的方法在操作失败时会 throw error。 需要根据需要自行 try catch
:::

### createFile
创建文件

```typescript
await createFile('test.txt')
```
### makeDir
创建文件夹

```typescript
await makeDir('./tmp/test')
```
### rename
修改文件名

```typescript
await rename('./tmp/test/test.txt', './tmp/test/test1.txt')
```
### remove
移除文件

```typescript
await remove('./tmp/test/test.txt')
```
### isExist
判断文件是否存在

```typescript
await isExist('./tmp/test/test.txt')
```


### isFile
判断是否是文件类型

```typescript
await isFile('./tmp/test/test.txt')
```
### isDir
判断是否是文件夹类型

```typescript
await isDir('./tmp/test')
```
### copy
复制文件

```typescript
awiat copy('./tmp/test/test.txt', './tmp/test/test2.txt')
```
### list
获取文件夹目录

```typescript
await list('./tmp/test'))
```
### read
读取文件

```typescript
const res = await read('./tmp/test/test.txt')
```
### readLines
读取文件指定范围行

```typescript
const res = await readLines('./tmp/test/test.txt', 0, 1)
```
### writeStrings
文件写入字符串

```typescript
await writeStrings('./tmp/test/test.txt', ['hello world!'])
```
### appendStrings
文件追加写入字符串

```typescript
await appendStrings('./tmp/test/test.txt', ['hello world!'])
```
### writeBytes
文件写入字节流

```typescript
await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```
### appendBytes
文件追加写入字节流

```typescript
await appendBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```
### 完整Example
```typescript
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
    Logger.info('======read', Unit8Array2String(await read('./tmp/test/test.txt') as Uint8Array))
    const lines = await readLines('./tmp/test/test.txt', 0, 1)
    Logger.info('======readLines', Unit8Array2String(lines))
    await remove('./tmp/test/test4.txt')
    Logger.info('======List', await list('./tmp/test'))
  } catch (error) {
    Logger.error('ERROR: testFile callback:', error)
  }


  return {
    body: {
      code: 200,
      data: 'ok',
    }
  }
}
```
## 💡开发与调试
在插件开发过程中，为了方便对文件的读写，我们提供了使用本地文件进行调试的方式，以便开发者无需访问调试服务器，便能更直观的看到代码效果。

若需要将目标插件的调试过程中的文件存储重定向到本地，需要：

* 修改`config/local.yaml`中的配置；
* 执行`run`命令，重启插件；

```yaml
local:
    file_in_local: true
```
本地开发时所有的文件操作都是在你插件目录的 workspace 下

