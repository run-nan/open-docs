# ONES TestCase Import/Export API

## model 说明

### error

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明             |
| :------ | :----- | :------- | :------- | :--------------- |
| code    | int    |          | 200      | 服务器更新时间戳 |
| errcode | string |          | "OK"     | 错误消息         |
| type    | string |          |          | 错误类型         |

## API 说明

### 下载导入模板

下载导入模版，用户在填写用例导入文件时可以参考该模版

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/download_template

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

无

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/download_template' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```
HTTP/1.1 200 OK
Content-Disposition: attachment;filename="%E6%A8%A1%E6%9D%BF.xlsx";filename*=utf-8''%E6%A8%A1%E6%9D%BF.xlsx
Content-Type: application/octet-stream
...
```

### 上传导入文件

上传用例 xlsx 文件，供后续导入接口使用

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/upload

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

multipart/form-data

#### 请求参数列表

| 参数名 | 值类型 | 是否必须 | 说明     |
| :----- | :----- | -------- | :------- |
| file   | file   | 是       | 上传文件 |

#### 返回参数列表

| 参数名       | 值类型   | 说明                                   |
| :----------- | :------- | :------------------------------------- |
| column_names | []string | 可用的列数据                           |
| file_hash    | string   | 上传文件的 hash 值，供后续导入接口使用 |

#### 请求示例

```curl
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/upload' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundaryxAKmbtaB0lzHERDG' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d $'------WebKitFormBoundaryxAKmbtaB0lzHERDG\r\nContent-Disposition: form-data; name="file"; filename="order_system.xlsx"\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r\n\r\n------WebKitFormBoundaryxAKmbtaB0lzHERDG--\r\n'
```

#### 返回示例

```json
{
  "column_names": [
    "ID",
    "primary module",
    "secondary module",
    "case name",
    "priority",
    "case type",
    "pre-condition",
    "describing procedures",
    "expected result",
    "remark",
    "maintainer"
  ],
  "file_hash": "Fr3tMrDQ2jHVSwlHqTWYWt4iiY5d"
}
```

### 导入用例

异步导入用例，通过进度管理器查询结果

#### URL

https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/import

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名    | 值类型         | 是否必须 | 说明                                |
| :-------- | :------------- | -------- | :---------------------------------- |
| mapping   | MappingPayLoad | 是       | 映射配置                            |
| file_hash | string         | 是       | 文件 hash，从之前的上传文件接口获取 |

MappingPayLoad

| 参数名         | 值类型 | 是否必须 | 说明               |
| :------------- | :----- | -------- | :----------------- |
| name           | string | 是       | 用例标题           |
| module_name_1  | string | 否       | 所属一级模块名     |
| module_name_2  | string | 否       | 所属二级模块名     |
| ...            | ...    | ...      | ...                |
| module_name_12 | string | 否       | 所属十二级级模块名 |
| condition      | string | 否       | 前置条件           |
| step_desc      | string | 否       | 操作步骤           |
| step_result    | string | 否       | 预期结果           |
| desc           | string | 否       | 备注               |
| priority       | string | 否       | 优先级             |
| assign         | string | 否       | 维护人             |
| type           | string | 否       | 用例类型           |

#### 返回参数列表

[error](#error)

#### 请求示例

```curl
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/import' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"mapping":{"module_name_1":"primary module","module_name_2":"secondary module","name":"case name","priority":"priority","type":"case type","condition":"pre-condition","step_desc":"describing procedures","step_result":"expected result","desc":"remark","assign":"maintainer "},"file_hash":"Fr3tMrDQ2jHVSwlHqTWYWt4iiY5d"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```
