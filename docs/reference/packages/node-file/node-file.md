# @ones-op/node-file

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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, createFile } from '@ones-op/node-file'

export async function testCreateFile() {
  try {
    await createFile('./tmp/test/test.txt')
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### makeDir

Create a folder

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | folder name     | string   | -           | Y            |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, makeDir } from '@ones-op/node-file'

export async function testMakeDir() {
  try {
    await makeDir('./tmp/test/test.txt')
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### rename

Modify file name

#### Params

| **Param**    | **Description**           | **Type** | **Default** | **Required** |
| :----------- | :------------------------ | :------- | :---------- | :----------- |
| originalPath | Original file path (name) | string   | -           | Y            |
| newPath      | New file path (name)      | string   | -           | Y            |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, rename } from '@ones-op/node-file'

export async function testRename() {
  try {
    await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### remove

Remove File name

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file name       | string   | -           | Y            |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, remove } from '@ones-op/node-file'

export async function testRemove() {
  try {
    await remove('./tmp/test/test4.txt')('./tmp/test/test.txt')
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, isExist } from '@ones-op/node-file'

export async function testIsExist() {
  try {
    Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, isFile } from '@ones-op/node-file'

export async function testIsFile() {
  try {
    Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, isDir } from '@ones-op/node-file'

export async function testIsDir() {
  try {
    Logger.info('======isDir', await isDir('./tmp'))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### copy

Copy a file

#### Params

| **Param**    | **Description**         | **Type** | **Default** | **Required** |
| :----------- | :---------------------- | :------- | :---------- | :----------- |
| originalPath | File path (name)        | string   | -           | Y            |
| newPath      | Destination path (name) | string   | -           | Y            |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, copy } from '@ones-op/node-file'

export async function testCopy() {
  try {
    await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, list } from '@ones-op/node-file'

export async function testList() {
  try {
    Logger.info('======List', await list('./tmp/test'))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, read } from '@ones-op/node-file'

export async function testRead() {
  try {
    Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, readLines } from '@ones-op/node-file'

export async function testReadLines() {
  try {
    const lines = await readLines('./tmp/test/test.txt', 0, 1)
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### writeStrings

Write a string to a file

#### Params

| **Param** | **Description** | **Type** | **Default** | **Required** |
| :-------- | :-------------- | :------- | :---------- | :----------- |
| name      | file path       | string   | -           | Y            |
| content   | written content | string[] | -           | Y            |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, writeStrings } from '@ones-op/node-file'

export async function testWriteStrings() {
  try {
    await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### appendStrings

Append string to file

#### Params

| **Param** | **Description**         | **Type** | **Default** | **Required** |
| :-------- | :---------------------- | :------- | :---------- | :----------- |
| name      | file path               | string   | -           | Y            |
| content   | number of lines started | string[] | -           | Y            |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, appendStrings } from '@ones-op/node-file'

export async function testAppendStrings() {
  try {
    await appendStrings('./tmp/test/test.txt', ['hello world!'])
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### writeBytes

Write byte stream to file

#### Params

| **Param** | **Description**     | **Type**   | **Default** | **Required** |
| :-------- | :------------------ | :--------- | :---------- | :----------- |
| name      | file path           | string     | -           | Y            |
| byteSlice | byte stream content | Uint8Array | -           | Y            |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import { FileError, writeBytes } from '@ones-op/node-file'

export async function testWriteBytes() {
  try {
    await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### appendBytes

Append byte stream to file

#### Params

| **Param** | **Description**     | **Type**   | **Default** | **Required** |
| :-------- | :------------------ | :--------- | :---------- | :----------- |
| name      | file path           | string     | -           | Y            |
| byteSlice | byte stream content | Uint8Array | -           | Y            |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import { FileError, appendBytes } from '@ones-op/node-file'

export async function testAppendBytes() {
  try {
    await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
  } catch (error) {
    if (error instanceof FileError) {
      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

## Type

### FileError

| Param      | Description      | Type     |
| :--------- | :--------------- | :------- |
| level      | error level      | `string` |
| reason     | error reason     | `string` |
| statusCode | http status code | `string` |
| errcode    | error code       | `string` |
