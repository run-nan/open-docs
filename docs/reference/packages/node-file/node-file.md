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

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file name       | string   | -           | Y            |

#### Example

```tsx
await createFile('./tmp/test/test.txt')
```

---

### makeDir

Create a folder

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | folder name     | string   | -           | Y            |

#### Example

```tsx
await makeDir('./tmp/test')
```

---

### rename

Modify file name

#### Params

| **Param**    | **Description**           | **Type** | **Default** | **Required** |
| :----------- | :------------------------ | :------- | :---------- | :----------- |
| originalPath | Original file path (name) | string   | -           | Y            |
| newPath      | New file path (name)      | string   | -           | Y            |

#### Example

```tsx
await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
```

---

### remove

Remove File name

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file name       | string   | -           | Y            |

#### Example

```tsx
await remove('./tmp/test/test4.txt')
```

---

### isExist

Determine whether the file or folder exists

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | name            | string   | -           | Y            |

#### Returns

| **Param** | **Description**                       | **Type** |
| :-------- | :------------------------------------ | :------- |
| exist     | Exist return true，empty return false | bool     |

#### Example

```tsx
Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
```

---

### isFile

Determine whether it is a file or not

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | name            | string   | -           | Y            |

#### Returns

| **Param** | **Description**                  | **Type** |
| :-------- | :------------------------------- | :------- |
| fileExist | Yes return true，no return false | bool     |

#### Example

```tsx
Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
```

---

### isDir

Determine whether it is a folder

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | name            | string   | -           | Y            |

#### Returns

| **Param** | **Description**                  | **Type** |
| :-------- | :------------------------------- | :------- |
| isDir     | Yes return true，or return false | bool     |

#### Example

```tsx
Logger.info('======isDir', await isDir('./tmp'))
```

---

### copy

Copy a file

#### Params

| **Param**    | **Description**         | **Type** | **Default** | **Required** |
| :----------- | :---------------------- | :------- | :---------- | :----------- |
| originalPath | File path (name)        | string   | -           | Y            |
| newPath      | Destination path (name) | string   | -           | Y            |

#### Example

```tsx
await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
```

---

### list

Get a list of folder

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | folder name     | string   | -           | Y            |

#### Returns

| **Param**  | **Description**       | **Type** |
| :--------- | :-------------------- | :------- |
| folderList | folder directory list | string[] |

#### Example

```tsx
Logger.info('======List', await list('./tmp/test'))
```

---

### read

Read a file

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file path       | string   | -           | Y            |

#### Returns

| **Param**   | **Description** | **Type**   |
| :---------- | :-------------- | :--------- |
| fileContent | file content    | Uint8Array |

#### Example

```tsx
Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
```

---

### readLines

Read the specified line of the file

#### Params

| **Param** | **Description**         | **Type** | **Default** | **Required** |
| :-------- | :---------------------- | :------- | :---------- | :----------- |
| name      | file path               | string   | -           | Y            |
| lineBegin | number of lines started | number   | -           | Y            |
| lineEnd   | number of lines ended   | number   | -           | Y            |

#### Returns

| **Param**   | **Description**  | **Type** |
| :---------- | :--------------- | :------- |
| lineContent | file information | string   |

#### Example

```tsx
const lines = await readLines('./tmp/test/test.txt', 0, 1)
```

---

### writeStrings

Write a string to a file

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file path       | string   | -           | Y            |
| content   | written content | string[] | -           | Y            |

#### Example

```tsx
await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
```

---

### appendStrings

Append string to file

#### Params

| **Param** | **Description**         | **Type** | **Default** | **Required** |
| :-------- | :---------------------- | :------- | :---------- | :----------- |
| name      | file path               | string   | -           | Y            |
| content   | number of lines started | string[] | -           | Y            |

#### Example

```tsx
await appendStrings('./tmp/test/test.txt', ['hello world!'])
```

---

### writeBytes

Write byte stream to file

#### Params

| **Param** | **Description**     | **Type**   | **Default** | **Required** |
| :-------- | :------------------ | :--------- | :---------- | :----------- |
| name      | file path           | string     | -           | Y            |
| byteSlice | byte stream content | Uint8Array | -           | Y            |

#### Example

```tsx
await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
```

---

### appendBytes

Append byte stream to file

#### Params

| **Param** | **Description**     | **Type**   | **Default** | **Required** |
| :-------- | :------------------ | :--------- | :---------- | :----------- |
| name      | file path           | string     | -           | Y            |
| byteSlice | byte stream content | Uint8Array | -           | Y            |

#### Example

```tsx
await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
```
