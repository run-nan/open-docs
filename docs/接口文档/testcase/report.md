# 测试报表

- [testcase report model 说明](#testcase_report-model-说明)
- [API 说明](#api-说明)
  - [1. 查看测试报告](#1-修改关联项目配置)

## testcase_report model 说明

| 参数名      | 值类型 | 取值范围 | 取值例子 | 说明        |
| ----------- | ------ | -------- | -------- | ----------- |
| uuid        | string | len=8    |          | 随机8位字符 |
| owner       | string |          |          |             |
| start_time  | int    |          |          |             |
| end_time    | int    |          |          |             |
| create_time | int    |          |          |             |
| summary     | string |          |          |             |
| title       | string |          |          |             |
| team_uuid   | string |          |          |             |
| status      | bool   |          |          |             |



## API 说明

### 1. 修改关联项目配置

#### URL

https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/view_report

#### HTTP Method

Get

#### 调用权限

administer_testcase

#### 传值方式

无

#### 参数列表

无

#### 返回JSON

```
{
    "reports": [
        {
            "uuid": "TFXDSjuD",
            "start_time": 0,
            "end_time": 0,
            "summary": "{\"components\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"contentMap\":{\"richTextComponentTitleSet\":{},\"richTextComponentContentSet\":{}}}",
            "title": "11",
            "related_task": [
                {
                    "uuid": "WhFspqKJAdgpBm1U",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "123",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "Highest",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJDvOaDfav",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "123",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "普通",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJP3TJ7fnw",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "123",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "普通",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJXU9f2Ckp",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "看见你看见你",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "普通",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJdEP3P2dl",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "1",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "Highest",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJo57Xwmqn",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "来看你了",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "Highest",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                },
                {
                    "uuid": "WhFspqKJodWbbBbh",
                    "project_uuid": "WhFspqKJTIQOcskP",
                    "issue_type_uuid": "UnDBBPVF",
                    "summary": "123",
                    "status_name": "测试提交",
                    "status_category_name": "to_do",
                    "important_field_configs": [
                        {
                            "name": "优先级",
                            "value": "普通",
                            "background_color": "#e0ecfb",
                            "color": "#307fe2",
                            "field_uuid": "field012"
                        },
                        {
                            "name": "负责人",
                            "value": "8.28",
                            "background_color": "",
                            "color": "",
                            "field_uuid": "field004"
                        }
                    ]
                }
            ]
        }
    ]
}
```



#### 返回的HTTP status code

| 状态码 | 说明     |
| :----- | :------- |
| 200    | 操作成功 |
| 500    | 接口错误 |
| 403    | 无权限   |

