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

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件名称 | string   | -          | 是       |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,createFile} from "@ones-op/node-file"

export async function testCreateFile() {
  try{
		await createFile('./tmp/test/test.txt')
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### makeDir

创建文件夹

#### Params

| **参数** | **说明**   | **类型** | **默认值** | **必填** |
| :------- | :--------- | :------- | :--------- | :------- |
| name     | 文件夹名称 | string   | -          | 是       |

#### Error

| errcode         | reason                                                           | level | statusCode |
| --------------- | ---------------------------------------------------------------- | ----- | ---------- |
| DB.QuerySqlErr  | 执行 select 方法时发生了未知错误，具体错误场景给出具体错误原因。 | error | 500        |
| DB.SqlSyntaxErr | sql 不符合语法规范，具体错误场景给出具体错误原因。               | error | 400        |

#### Example

```tsx
import {FileError,makeDir} from "@ones-op/node-file"

export async function testMakeDir() {
  try{
		await makeDir('./tmp/test/test.txt')
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### rename

修改文件名

#### Params

| **参数**     | **说明**           | **类型** | **默认值** | **必填** |
| :----------- | :----------------- | :------- | :--------- | :------- |
| originalPath | 原文件路径（名称） | string   | -          | 是       |
| newPath      | 新文件路径（名称） | string   | -          | 是       |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,rename} from "@ones-op/node-file"

export async function testRename() {
  try{
		await rename('./tmp/test/test3.txt', './tmp/test/test4.txt')
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}


```

---

### remove

移除文件

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件名称 | string   | -          | 是       |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,remove} from "@ones-op/node-file"

export async function testRemove() {
  try{
		await remove('./tmp/test/test4.txt')('./tmp/test/test.txt')
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,isExist} from "@ones-op/node-file"

export async function testIsExist() {
  try{
		Logger.info('======isExist', await isExist('./tmp/test/test.txt'))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,isFile} from "@ones-op/node-file"

export async function testIsFile() {
  try{
		Logger.info('======isFile', await isFile('./tmp/test/test.txt'))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,isDir} from "@ones-op/node-file"

export async function testIsDir() {
  try{
		Logger.info('======isDir', await isDir('./tmp'))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### copy

复制文件

#### Params

| **参数**     | **说明**           | **类型** | **默认值** | **必填** |
| :----------- | :----------------- | :------- | :--------- | :------- |
| originalPath | 文件路径（名称）   | string   | -          | 是       |
| newPath      | 目的地路径（名称） | string   | -          | 是       |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,copy} from "@ones-op/node-file"

export async function testCopy() {
  try{
		await copy('./tmp/test/test.txt', './tmp/test/test2.txt')
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}

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

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,list} from "@ones-op/node-file"

export async function testList() {
  try{
		Logger.info('======List', await list('./tmp/test'))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}

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

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,read} from "@ones-op/node-file"

export async function testRead() {
  try{
		Logger.info('======read', Unit8Array2String((await read('./tmp/test/test.txt')) as Uint8Array))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}

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

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,readLines} from "@ones-op/node-file"

export async function testReadLines() {
  try{
		const lines = await readLines('./tmp/test/test.txt', 0, 1)
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### writeStrings

文件写入字符串

#### Params

| **参数** | **说明** | **默认值** | **必填** | **类型** |
| :------- | :------- | :--------- | :------- | :------- |
| name     | 文件路径 | -          | 是       | string   |
| content  | 写入内容 | -          | 是       | string[] |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,writeStrings} from "@ones-op/node-file"

export async function testWriteStrings() {
  try{
		await writeStrings('./tmp/test/test.txt', ['hello world!\n'])
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```

---

### appendStrings

文件追加写入字符串

#### Params

| **参数** | **说明** | **类型** | **默认值** | **必填** |
| :------- | :------- | :------- | :--------- | :------- |
| name     | 文件路径 | string   | -          | 是       |
| content  | 开始行数 | string[] | -          | 是       |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,appendStrings} from "@ones-op/node-file"

export async function testAppendStrings() {
  try{
		await appendStrings('./tmp/test/test.txt', ['hello world!'])
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}

```

---

### writeBytes

文件写入字节流

#### Params

| **参数**  | **说明**     | **类型**   | **默认值** | **必填** |
| :-------- | :----------- | :--------- | :--------- | :------- |
| name      | 文件路径     | string     | -          | 是       |
| byteSlice | 写入字节内容 | Uint8Array | -          | 是       |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```tsx
import {FileError,writeBytes} from "@ones-op/node-file"

export async function testWriteBytes() {
  try{
		await writeBytes('./tmp/test/test.txt', String2Unit8Array('hello bytes!\n'))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}

```

---

### appendBytes

文件追加写入字节流

#### Params

| **参数**  | **说明**         | **类型**   | **默认值** | **必填** |
| :-------- | :--------------- | :--------- | :--------- | :------- |
| name      | 文件路径         | string     | -          | 是       |
| byteSlice | 追加写入字节内容 | Uint8Array | -          | 是       |

#### Error

| errcode                   | reason                     | level | statusCode |
| ------------------------- | -------------------------- | ----- | ---------- |
| InvalidParameter          | Invalid parameter.         | error | 400        |
| File.CannotFindTargetFile | No such file or directory. | error | 400        |

#### Example

```tsx
import {FileError,appendBytes} from "@ones-op/node-file"

export async function testAppendBytes() {
  try{
		await appendBytes('./tmp/test/test.txt', Object2Unit8Array({ name: 'hello bytes!' }))
  }catch(error){
    if(error insteadof FileError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
    }
  }
}
```
