# 关联工作项

- [状态码说明](#状态码说明)
- [批量添加关联工作项](#批量添加关联工作项)
- [批量删除关联工作项](#批量删除关联工作项)

## 模型
### task_link_type

工作项关联关系类型

|aliases             |type   |required|canUpdate|allowEmpty|description               |
| :----------------- | :---- | :----- | :------ | :------- | :----------------------- |
|uuid                |text   |F       |F        |F         |[UUID]                    |
|item_type           |text   |T       |F        |F         |[Item类型]                |
|key                 |text   |F       |F        |F         |[Item Key]                |
|name                |text   |T       |T        |F         |关联类型名称              |
|name_pinyin         |text   |F       |F        |F         |[名称拼音]                |
|link_out_desc       |text   |T       |T        |F         |链出描述                  |
|link_out_desc_pinyin|text   |F       |F        |F         |[链入描述拼音]            |
|link_in_desc        |text   |T       |T        |F         |链入描述                  |
|link_in_desc_pinyin |text   |F       |F        |F         |[链入描述拼音]            |
|built_in            |boolean|F       |F        |T         |[是否系统内置任务关联类型]|
|create_time         |time   |F       |F        |F         |创建时间                  |
|link_count          |integer|F       |F        |F         |[关联数]                  |
|source_type          |text|F       |F        |F         |[源对象类型]                  |
|source_condition          |text|F       |F        |F         |[源对象过滤条件]                  |
|target_type          |text|F       |F        |F         |[目的对象类型]                  |
|target_condition          |text|F       |F        |F         |[目的对象过滤条件]                  |
|link_model          |integer|F       |F        |F         |[关联关系]                  |

### 状态码说明

状态码|说明
:----|:----
200| 成功
403| 无权限
500| 其它未知错误
610| 找不到对应的任务
607| 所关联的任务无所属项目
608| task_uuids中有重复的uuid/重复关联
801| 关联的UUID长度不符；
821| task关联的任务task_uuids中，包括了自身task的uuid

## API说明

### 批量添加关联工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/related_tasks

#### HTTP Method

POST

#### 传值方式

JSON

### 是否需要登录

是

#### 参数列表

|参数名              |值类型    |是否必须|   说明|
|:------------------|:--------|:------|:-----------------|
|task_uuids         |[]string |T      |关联的task的UUID数组|
|task_link_type_uuid|string   |T      |[关联关系类型](../item/task_link_type.md#task_link_type) uuid|
|link_desc_type     |string   |T      |[关联关系类型](../item/task_link_type.md#task_link_type) desc|

#### 返回参数列表

| 参数名            | 值类型    | 说明                                    |
| :--------------- | :------- | :------------------------------------  |
|error_relate_tasks|[]badItem  |关联错误工作项                        |

badItem

| 参数名            | 值类型    | 说明                                    |
| :--------------- | :------- | :------------------------------------  |
|UUID              |string    |错误数据                                  |
|Key               |string    |key                                      |
|Err               |string    |key                                      |

#### 请求体示例

```json
{
	"task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],
	"task_link_type_uuid": "5NDAfTqk",
	"link_desc_type": "link_in_desc" //link_out_desc
}
```

#### 返回体示例

```json
{
	"error_relate_tasks": []
}
```

### 批量删除关联工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/delete/related_tasks

#### HTTP Method

POST

#### 传值方式

JSON

#### 是否需要登录

是

#### 参数列表

|参数名              |值类型    |是否必须|   说明|
|:------------------|:--------|:------|:-----------------|
|task_uuids         |[]string |T      |关联的task的UUID数组|
|task_link_type_uuid|string   |T      |[关联关系类型](../item/task_link_type.md#task_link_type) uuid|
|link_desc_type     |string   |T      |[关联关系类型](../item/task_link_type.md#task_link_type) desc|

#### 返回参数列表

| 参数名            | 值类型    | 说明                                    |
| :--------------- | :------- | :------------------------------------  |
|error_relate_tasks|[]badItem  |关联错误工作项                        |

badItem

| 参数名            | 值类型    | 说明                                    |
| :--------------- | :------- | :------------------------------------  |
|UUID              |string    |错误数据                                  |
|Key               |string    |key                                      |
|Err               |string    |key                                      |


```json
{
	"task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],
	"task_link_type_uuid": "5NDAfTqk",
	"link_desc_type": "link_in_desc"//link_out_desc
}
```

#### 返回体示例

```json
{
	"error_relate_tasks": []
}
```