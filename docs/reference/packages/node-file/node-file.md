# @ones-op/node-file（文件操作）

We provide a set of API related to file manipulation, allowing plugin developers to manipulate files under the plugin file working directory.

## Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### createFile

Create a file

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | file name       | -           | Y            |

#### Example

```tsx
await createFile('./tmp/test/test.txt')
```

---

### makeDir

Create a folder

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | folder name     | -           | Y            |

#### Example

```tsx
await makeDir('./tmp/test')
```

---

### rename

Modify file name

#### Params

| **Param**    | **Type** | **Description**           | **Default** | **Required** |
| :----------- | :------- | :------------------------ | :---------- | :----------- |
| originalPath | string   | Original file path (name) | -           | Y            |
| newPath      | string   | New file path (name)      | -           | Y            |

#### Example

```tsx
await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
```

---

### remove

Remove File name

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | file name       | -           | Y            |

#### Example

```tsx
await remove('./tmp/test/test4.txt')
```

---

### isExist

Determine whether the file or folder exists

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | name            | -           | Y            |

#### Returns

| **Param** | **Type** | **Description**                       |
| :-------- | :------- | :------------------------------------ |
| exist     | bool     | Exist return true，empty return false |

#### Example

```tsx
Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
```

---

### isFile

Determine whether it is a file or not

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | name            | -           | Y            |

#### Returns

| **Param** | **Type** | **Description**                  |
| :-------- | :------- | :------------------------------- |
| fileExist | bool     | Yes return true，no return false |

#### Example

```tsx
Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
```

---

### isDir

Determine whether it is a folder

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | name            | -           | Y            |

#### Returns

| **Param** | **Type** | **Description**                  |
| :-------- | :------- | :------------------------------- |
| isDir     | bool     | Yes return true，or return false |

#### Example

```tsx
Logger.info('======isDir', await isDir('./tmp'))
```

---

### copy

Copy a file

#### Params

| **Param**    | **Type** | **Description**         | **Default** | **Required** |
| :----------- | :------- | :---------------------- | :---------- | :----------- |
| originalPath | string   | File path (name)        | -           | Y            |
| newPath      | string   | Destination path (name) | -           | Y            |

#### Example

```tsx
await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
```

---

### list

Get a list of folder

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | folder name     | -           | Y            |

#### Returns

| **Param**  | **Type** | **Description**       |
| :--------- | :------- | :-------------------- |
| folderList | string[] | folder directory list |

#### Example

```tsx
Logger.info('======List', await list('./tmp/test'))
```

---

### read

Read a file

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | file path       | -           | Y            |

#### Returns

| **Param**   | **Type**   | **Description** |
| :---------- | :--------- | :-------------- |
| fileContent | Uint8Array | file content    |

#### Example

```tsx
Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
```

---

### readLines

Read the specified line of the file

#### Params

| **Param** | **Type** | **Description**         | **Default** | **Required** |
| :-------- | :------- | :---------------------- | :---------- | :----------- |
| name      | string   | file path               | -           | Y            |
| lineBegin | number   | number of lines started | -           | Y            |
| lineEnd   | number   | number of lines ended   | -           | Y            |

#### Returns

| **Param**   | **Type** | **Description**  |
| :---------- | :------- | :--------------- |
| lineContent | string   | file information |

#### Example

```tsx
const lines = await readLines('./tmp/test/test.txt', 0, 1)
```

---

### writeStrings

Write a string to a file

#### Params

| **Param** | **Type** | **Description** | **Default** | **Required** |
| :-------- | :------- | :-------------- | :---------- | :----------- |
| name      | string   | file path       | -           | Y            |
| content   | string[] | written content | -           | Y            |

#### Example

```tsx
await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
```

---

### appendStrings

Append string to file

#### Params

| **Param** | **Type** | **Description**         | **Default** | **Required** |
| :-------- | :------- | :---------------------- | :---------- | :----------- |
| name      | string   | file path               | -           | Y            |
| content   | string[] | number of lines started | -           | Y            |

#### Example

```tsx
await appendStrings('./tmp/test/test.txt', ['hello world!'])
```

---

### writeBytes

Write byte stream to file

#### Params

| **Param** | **Type**   | **Description**     | **Default** | **Required** |
| :-------- | :--------- | :------------------ | :---------- | :----------- |
| name      | string     | file path           | -           | Y            |
| byteSlice | Uint8Array | byte stream content | -           | Y            |

#### Example

```tsx
await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```

---

### appendBytes

Append byte stream to file

#### Params

| **Param** | **Type**   | **Description**     | **Default** | **Required** |
| :-------- | :--------- | :------------------ | :---------- | :----------- |
| name      | string     | file path           | -           | Y            |
| byteSlice | Uint8Array | byte stream content | -           | Y            |

#### Example

```tsx
await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
```
