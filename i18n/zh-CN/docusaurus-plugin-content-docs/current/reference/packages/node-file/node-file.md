# @ones-op/node-file

我们提供了一套文件操作的相关接口，允许插件开发者对插件文件工作目录下的文件进行操作。

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### createFile

创建文件

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件名称 | string   | -          | 是       |

#### Example

```tsx
await createFile('./tmp/test/test.txt')
```

---

### makeDir

创建文件夹

#### Params

| **参数** | **说明**   | **类型** | **默认值** | **必填** |
| :------- | :--------- | :------- | :--------- | :------- |
| name     | 文件夹名称 | string   | -          | 是       |

#### Example

```tsx
await makeDir('./tmp/test')
```

---

### rename

修改文件名

#### Params

| **参数**     | **说明**           | **类型** | **默认值** | **必填** |
| :----------- | :----------------- | :------- | :--------- | :------- |
| originalPath | 原文件路径（名称） | string   | -          | 是       |
| newPath      | 新文件路径（名称） | string   | -          | 是       |

#### Example

```tsx
await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
```

---

### remove

移除文件

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件名称 | string   | -          | 是       |

#### Example

```tsx
await remove('./tmp/test/test4.txt')
```

---

### isExist

判断是否存在该文件或文件夹

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 名称     | string   | -          | 是       |

#### Returns

| **参数** | **说明**                        | **类型** |
| :------- | :------------------------------ | :------- |
| 是否存在 | 存在返回 true，不存在返回 false | bool     |

#### Example

```tsx
Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
```

---

### isFile

判断是否为文件类型

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 名称     | string   | -          | 是       |

#### Returns

| **参数**   | **说明**                  | **类型** |
| :--------- | :------------------------ | :------- |
| 是否为文件 | 是返回 true，否返回 false | bool     |

#### Example

```tsx
Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
```

---

### isDir

判断是否文件夹类型

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 名称     | string   | -          | 是       |

#### Returns

| **参数**           | **说明**                  | **类型** |
| :----------------- | :------------------------ | :------- |
| 判断是否文件夹类型 | 是返回 true，否返回 false | bool     |

#### Example

```tsx
Logger.info('======isDir', await isDir('./tmp'))
```

---

### copy

复制文件

#### Params

| **参数**     | **说明**           | **类型** | **默认值** | **必填** |
| :----------- | :----------------- | :------- | :--------- | :------- |
| originalPath | 文件路径（名称）   | string   | -          | 是       |
| newPath      | 目的地路径（名称） | string   | -          | 是       |

#### Example

```tsx
await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
```

---

### list

获取文件夹目录

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 名称     | string   | -          | 是       |

#### Returns

| **参数**       | **说明**       | **类型** |
| :------------- | :------------- | :------- |
| 文件夹目录列表 | 文件夹目录列表 | string[] |

#### Example

```tsx
Logger.info('======List', await list('./tmp/test'))
```

---

### read

读取文件

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件路径 | string   | -          | 是       |

#### Returns

| **参数** | **说明** | **类型**   |
| :------- | :------- | :--------- |
| 文件内容 | 文件内容 | Uint8Array |

#### Example

```tsx
Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
```

---

### readLines

读取文件指定行

#### Params

| **参数**  | **说明** | **类型** | **默认值** | **必填** |
| :-------- | :------- | :------- | :--------- | :------- |
| name      | 文件路径 | string   | -          | 是       |
| lineBegin | 开始行数 | number   | -          | 是       |
| lineEnd   | 结束行数 | number   | -          | 是       |

#### Returns

| **参数**   | **说明** | **类型** |
| :--------- | :------- | :------- |
| 指定行内容 | 文件信息 | string   |

#### Example

```tsx
const lines = await readLines('./tmp/test/test.txt', 0, 1)
```

---

### writeStrings

文件写入字符串

#### Params

| **参数** | **说明** | **默认值** | **必填** | **类型** |
| :------- | :------- | :--------- | :------- | :------- |
| name     | 文件路径 | -          | 是       | string   |
| content  | 写入内容 | -          | 是       | string[] |

#### Example

```tsx
await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
```

---

### appendStrings

文件追加写入字符串

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件路径 | string   | -          | 是       |
| content  | 开始行数 | string[] | -          | 是       |

#### Example

```tsx
await appendStrings('./tmp/test/test.txt', ['hello world!'])
```

---

### writeBytes

文件写入字节流

#### Params

| **参数**  | **说明**     | **类型**   | **默认值** | **必填** |
| :-------- | :----------- | :--------- | :--------- | :------- |
| name      | 文件路径     | string     | -          | 是       |
| byteSlice | 写入字节内容 | Uint8Array | -          | 是       |

#### Example

```tsx
await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```

---

### appendBytes

文件追加写入字节流

#### Params

| **参数**  | **说明**         | **类型**   | **默认值** | **必填** |
| :-------- | :--------------- | :--------- | :--------- | :------- |
| name      | 文件路径         | string     | -          | 是       |
| byteSlice | 追加写入字节内容 | Uint8Array | -          | 是       |

#### Example

```tsx
await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
```
