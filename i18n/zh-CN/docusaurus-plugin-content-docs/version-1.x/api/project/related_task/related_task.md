# 目录

- [通用说明](#通用说明)
  - [状态码说明](#状态码说明)
- [API 说明](#api-说明)
  - [批量添加关联工作项](#批量添加关联工作项)
  - [批量删除关联工作项](#批量删除关联工作项)

## 通用说明

### 状态码说明

| 状态码 | 说明                                                   |
| :----- | :----------------------------------------------------- |
| 200    | 成功                                                   |
| 403    | 无权限                                                 |
| 500    | 其它未知错误                                           |
| 610    | 找不到对应的任务                                       |
| 607    | 所关联的任务无所属项目                                 |
| 608    | task_uuids 中有重复的 uuid/重复关联                    |
| 801    | 关联的 UUID 长度不符；                                 |
| 821    | task 关联的任务 task_uuids 中，包括了自身 task 的 uuid |

## API 说明

### 批量添加关联工作项

#### URL

https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/related_tasks

#### HTTP Method

POST

#### 传值方式

JSON

#### 是否需要登录

是

#### 请求参数列表

| 参数名              | 值类型   | 是否必须 | 说明                                                                            |
| :------------------ | :------- | :------- | :------------------------------------------------------------------------------ |
| task_uuids          | []string | T        | 关联的 task 的 UUID 数组                                                        |
| task_link_type_uuid | string   | T        | [关联关系类型](../../item/task_link_type/task_link_type.md#task_link_type) uuid |
| link_desc_type      | string   | T        | [关联关系类型](../../item/task_link_type/task_link_type.md#task_link_type) desc |

#### 返回参数列表

| 参数名             | 值类型    | 说明           |
| :----------------- | :-------- | :------------- |
| error_relate_tasks | []badItem | 关联错误工作项 |

badItem

| 参数名 | 值类型 | 说明     |
| :----- | :----- | :------- |
| UUID   | string | 错误数据 |
| Key    | string | key      |
| Err    | string | key      |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/FyZoT7nur9ABCDE/related_tasks \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
  -d '{
  "task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],
  "task_link_type_uuid": "5NDAfTqk",
  "link_desc_type": "link_in_desc"
}'
```

#### 返回示例

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

#### 请求参数列表

| 参数名              | 值类型   | 是否必须 | 说明                                                                            |
| :------------------ | :------- | :------- | :------------------------------------------------------------------------------ |
| task_uuids          | []string | T        | 关联的 task 的 UUID 数组                                                        |
| task_link_type_uuid | string   | T        | [关联关系类型](../../item/task_link_type/task_link_type.md#task_link_type) uuid |
| link_desc_type      | string   | T        | [关联关系类型](../../item/task_link_type/task_link_type.md#task_link_type) desc |

#### 返回参数列表

| 参数名             | 值类型    | 说明           |
| :----------------- | :-------- | :------------- |
| error_relate_tasks | []badItem | 关联错误工作项 |

badItem

| 参数名 | 值类型 | 说明     |
| :----- | :----- | :------- |
| UUID   | string | 错误数据 |
| Key    | string | key      |
| Err    | string | key      |

#### 请求示例

```curl
curl -X POST \
  https://your-host-name/project/api/project/team/3pDzCwAe/task/FyZoT7nur9ABCDE/delete/related_tasks \
  -H 'Content-Type: application/json' \
  -H 'Ones-Auth-Token: CUVZQSUJwRLfcVGSQoHEzI14LumPflYxJasP8MZHOLLgcjV5Rlnxy3YOjRN4z75w' \
  -H 'Ones-User-Id: DU6krHBN' \
  -H 'Referer: https://your-host-name' \
  -H 'cache-control: no-cache' \
	-d '{
  "task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],
  "task_link_type_uuid": "5NDAfTqk",
  "link_desc_type": "link_in_desc"
}'
```

#### 返回示例

```json
{
  "error_relate_tasks": []
}
```
