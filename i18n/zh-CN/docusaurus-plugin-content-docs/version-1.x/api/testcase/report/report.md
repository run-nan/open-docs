# 报告

## model 说明

### error

| 参数名  | 值类型 | 取值范围 | 取值例子 | 说明             |
| :------ | :----- | :------- | :------- | :--------------- |
| code    | int    |          | 200      | 服务器更新时间戳 |
| errcode | string |          | "OK"     | 错误消息         |
| type    | string |          |          | 错误类型         |

### TestCaseReportPayload

| 参数名                | 值类型                          | 说明             |
| :-------------------- | :------------------------------ | :--------------- |
| uuid                  | string                          |                  |
| start_time            | int64                           | 废弃字段，可忽略 |
| end_time              | int64                           | 废弃字段，可忽略 |
| summary               | string                          |                  |
| title                 | string                          |                  |
| related_task          | [][taskinreport](#TaskInReport) |                  |
| related_task_uuids    | []string                        |                  |
| important_field_uuids | []string                        |                  |

### TaskInReport

| 参数名                  | 值类型                                          | 说明 |
| :---------------------- | :---------------------------------------------- | :--- |
| uuid                    | string                                          |      |
| project_uuid            | string                                          |      |
| issue_type_uuid         | string                                          |      |
| summary                 | string                                          |      |
| status_name             | string                                          |      |
| status_category_name    | string                                          |      |
| important_field_configs | [][importantfieldconfig](#ImportantFieldConfig) |      |

### ImportantFieldConfig

| 参数名           | 值类型 | 说明 |
| :--------------- | :----- | :--- |
| name             | string |      |
| value            | string |      |
| background_color | string |      |
| color            | string |      |
| field_uuid       | string |      |

## API 说明

### 查看测试报告

查看测试报告

#### URL

https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/view_report

#### HTTP Method

Get

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

| 参数名  | 值类型                                            | 说明 |
| :------ | :------------------------------------------------ | :--- |
| reports | [][testcasereportpayload](#TestCaseReportPayload) |      |

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/view_report' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache'
```

#### 返回示例

```json
{
  "reports": [
    {
      "uuid": "5cSLDuk6",
      "start_time": 0,
      "end_time": 0,
      "summary": "{\"component_uuids\":[\"l9Q3HqIy-overview\",\"QWPhPxZv-result_distribute\",\"TKCjsRSP-field_distribute\",\"oJpn6SpG-module_distribute\",\"OBff9kWG-task_list\"],\"component_config\":{\"OBff9kWG-task_list\":{\"header_config\":[{\"uuid\":\"field015\"},{\"uuid\":\"field001\"},{\"uuid\":\"field012\"},{\"uuid\":\"field004\"},{\"uuid\":\"field005\"}]}}}",
      "title": "report3",
      "related_task": null,
      "related_task_uuids": ["BWxt3PAWbpFhBA23"],
      "important_field_uuids": ["field012", "field004"]
    }
  ]
}
```

### 更新测试报告

更新测试报告

#### URL

https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/update_report

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

[TestCaseReportPayload model](#TestCaseReportPayload)

#### 返回参数列表

[error](#error)

#### 请求示例

```curl
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/update_report' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"uuid":"5cSLDuk6","start_time":0,"end_time":0,"title":"report3","summary":"{\"component_uuids\":[\"l9Q3HqIy-overview\",\"QWPhPxZv-result_distribute\",\"TKCjsRSP-field_distribute\",\"oJpn6SpG-module_distribute\",\"OBff9kWG-task_list\"],\"component_config\":{\"OBff9kWG-task_list\":{\"header_config\":[{\"uuid\":\"field015\"},{\"uuid\":\"field001\"},{\"uuid\":\"field012\"},{\"uuid\":\"field004\"},{\"uuid\":\"field005\"}]},\"l9Q3HqIy-overview\":{\"start_time\":1670256000}}}"}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 导出测试报告

导出测试报告

#### URL

https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/export_report

#### HTTP Method

POST

#### 是否需要登录

是

#### 传值方式

JSON

#### 请求参数列表

| 参数名 | 值类型 | 是否可以空 | 说明         |
| :----- | :----- | :--------- | :----------- |
| html   | string | 否         | 测试报告模板 |

#### 返回参数列表

[error](#error)

#### 请求示例

```curl
curl -X POST \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/export_report' \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  -d '{"html":"\n      <html>\n        <body>\n          <h1>report3</h1>...        </body>\n      </html>\n    "}'
```

#### 返回示例

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

### 下载测试报告

下载测试报告

#### URL

https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/download

#### HTTP Method

GET

#### 是否需要登录

是

#### 传值方式

无

#### 请求参数列表

无

#### 返回参数列表

文件

#### 请求示例

```curl
curl -X GET \
  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/download' \
  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \
  -H 'Ones-User-Id: 6ZpgEzkk' \
  -H 'cache-control: no-cache' \
  --output /tmp/report.docx
```

#### 返回示例

```
HTTP/2 200
content-type: application/octet-stream
```
