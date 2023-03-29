# Import

- [API 说明](#api-说明)
  - [1. 下载导入模板](#1-下载导入模板)
  - [2. 导入用例](#2-导入用例)
  - [3. 上传导入文件](#3-上传导入文件)

## API 说明

## HTTP status code 说明

| 状态码 | errcode                      | 说明                         |
| :----- | :--------------------------- | :--------------------------- |
| 200    |                              | 操作成功                     |
| 401    |                              | 无权限                       |
| 500    |                              | 接口错误                     |
| 801    |                              | 参数无效                     |
| 400    | Malformed.XLSX               | 文件格式错误                 |
| 403    | LimitExceeded.File           | 文件大小超限制               |
| 403    | LimitExceeded.ImportTestCase | 超过 5000 行限制             |
| 403    | LimitExceeded.TestCase       | 超过免费版 TestCase 数量限制 |
| 403    | LimitExceeded.ImportTestCase | 超过 5000 行限制             |

### 1. 下载导入模板

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/download_template

#### HTTP Method

GET

### 调用权限

manage_library_cases

#### 传值方式

无

#### 返回 JSON

无，下载 xlsx 模板文件

### 2. 导入用例

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/import

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

JSON

### 参数列表

| 参数名    | 值类型 | 说明               |
| :-------- | :----- | :----------------- |
| mapping   | 键值对 | 键值对             |
| file_hash | string | 上传文件的 hash 值 |

mapping 字段的内容如下：

```json
{
  "name": "标题",
  "module_name": "",
  "condition": "",
  "step": "",
  "result": "",
  "desc": ""
}
```

键填以下值:

| 键名        | 是否必须 | 备注       |
| :---------- | :------- | :--------- |
| name        | 是       | 用例标题   |
| module_name | 是       | 所属模块名 |
| condition   | 否       | 前置条件   |
| step_desc   | 否       | 操作步骤   |
| step_result | 否       | 预期结果   |
| desc        | 否       | 备注       |
| priority    | 否       | 优先级     |
| assign      | 否       | 维护人     |
| type        | 否       | 用例类型   |

#### 返回 JSON

##### 成功

| 参数名          | 值类型 | 说明           |
| :-------------- | :----- | :------------- |
| success_cases   | int    | 导入成功的用例 |
| success_modules | int    | 导入成功的模块 |

### 3. 上传导入文件

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/upload

#### HTTP Method

POST

### 调用权限

manage_library_cases

#### 传值方式

xxxx.xlsx 文件，最大 10M FormData key 为 file，content-type 为 application/x-xls

#### 返回 JSON

##### 成功

| 参数名       | 值类型      | 说明               |
| :----------- | :---------- | :----------------- |
| column_names | string 数组 | 可用的列数据       |
| file_hash    | string      | 上传文件的 hash 值 |
