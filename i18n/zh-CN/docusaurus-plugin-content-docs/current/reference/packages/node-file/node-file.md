# @ones-op/node-file（文件操作）

我们提供了一套文件操作的相关接口，允许插件开发者对插件文件工作目录下的文件进行操作。

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### createFile

创建文件

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 文件名称 | -          | 是       |

#### Example

```tsx
await createFile('./tmp/test/test.txt')
```

---

### makeDir

创建文件夹

#### Params

| **参数** | **类型** | **说明**   | **默认值** | **必填** |
| :------- | :------- | :--------- | :--------- | :------- |
| name     | string   | 文件夹名称 | -          | 是       |

#### Example

```tsx
await makeDir('./tmp/test')
```

---

### rename

修改文件名

#### Params

| **参数**     | **类型** | **说明**           | **默认值** | **必填** |
| :----------- | :------- | :----------------- | :--------- | :------- |
| originalPath | string   | 原文件路径（名称） | -          | 是       |
| newPath      | string   | 新文件路径（名称） | -          | 是       |

#### Example

```tsx
await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
```

---

### remove

移除文件

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 文件名称 | -          | 是       |

#### Example

```tsx
await remove('./tmp/test/test4.txt')
```

---

### isExist

判断是否存在该文件或文件夹

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 名称     | -          | 是       |

#### Returns

| **参数** | **类型** | **说明**                        |
| :------- | :------- | :------------------------------ |
| 是否存在 | bool     | 存在返回 true，不存在返回 false |

#### Example

```tsx
Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
```

---

### isFile

判断是否为文件类型

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 名称     | -          | 是       |

#### Returns

| **参数**   | **类型** | **说明**                  |
| :--------- | :------- | :------------------------ |
| 是否为文件 | bool     | 是返回 true，否返回 false |

#### Example

```tsx
Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
```

---

### isDir

判断是否文件夹类型

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 名称     | -          | 是       |

#### Returns

| **参数**           | **类型** | **说明**                  |
| :----------------- | :------- | :------------------------ |
| 判断是否文件夹类型 | bool     | 是返回 true，否返回 false |

#### Example

```tsx
Logger.info('======isDir', await isDir('./tmp'))
```

---

### copy

复制文件

#### Params

| **参数**     | **类型** | **说明**           | **默认值** | **必填** |
| :----------- | :------- | :----------------- | :--------- | :------- |
| originalPath | string   | 文件路径（名称）   | -          | 是       |
| newPath      | string   | 目的地路径（名称） | -          | 是       |

#### Example

```tsx
await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
```

---

### list

获取文件夹目录

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 名称     | -          | 是       |

#### Returns

| **参数**       | **类型** | **说明**       |
| :------------- | :------- | :------------- |
| 文件夹目录列表 | string[] | 文件夹目录列表 |

#### Example

```tsx
Logger.info('======List', await list('./tmp/test'))
```

---

### read

读取文件

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 文件路径 | -          | 是       |

#### Returns

| **参数** | **类型**   | **说明** |
| :------- | :--------- | :------- |
| 文件内容 | Uint8Array | 文件内容 |

#### Example

```tsx
Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
```

---

### readLines

读取文件指定行

#### Params

| **参数**  | **类型** | **说明** | **默认值** | **必填** |
| :-------- | :------- | :------- | :--------- | :------- |
| name      | string   | 文件路径 | -          | 是       |
| lineBegin | number   | 开始行数 | -          | 是       |
| lineEnd   | number   | 结束行数 | -          | 是       |

#### Returns

| **参数**   | **类型** | **说明** |
| :--------- | :------- | :------- |
| 指定行内容 | string   | 文件信息 |

#### Example

```tsx
const lines = await readLines('./tmp/test/test.txt', 0, 1)
```

---

### writeStrings

文件写入字符串

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 文件路径 | -          | 是       |
| content  | string[] | 写入内容 | -          | 是       |

#### Example

```tsx
await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
```

---

### appendStrings

文件追加写入字符串

#### Params

| **参数** | **类型** | **说明** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | string   | 文件路径 | -          | 是       |
| content  | string[] | 开始行数 | -          | 是       |

#### Example

```tsx
await appendStrings('./tmp/test/test.txt', ['hello world!'])
```

---

### writeBytes

文件写入字节流

#### Params

| **参数**  | **类型**   | **说明**     | **默认值** | **必填** |
| :-------- | :--------- | :----------- | :--------- | :------- |
| name      | string     | 文件路径     | -          | 是       |
| byteSlice | Uint8Array | 写入字节内容 | -          | 是       |

#### Example

```tsx
await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```

---

### appendBytes

文件追加写入字节流

#### Params

| **参数**  | **类型**   | **说明**         | **默认值** | **必填** |
| :-------- | :--------- | :--------------- | :--------- | :------- |
| name      | string     | 文件路径         | -          | 是       |
| byteSlice | Uint8Array | 追加写入字节内容 | -          | 是       |

#### Example

```tsx
await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
```
