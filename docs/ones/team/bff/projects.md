<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [model](#model)
- [接口说明](#接口说明)
  - [1.获取项目详细中顶部 top N 个项目列表](#1获取项目详细中顶部-top-n-个项目列表)

<!-- /code_chunk_output -->

# model

# 接口说明

## 1.获取项目详细中顶部 top N 个项目列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/bff/projects/top

### HTTP Method

POST

### 参数类型

JSON

### 参数

| 参数名 | 是否必须 | 值类型 | 取值范围 | 说明       |
| :----- | :------- | :----- | :------- | :--------- |
| search | F        | string |          | 搜索参数   |
| total  | T        | int    |          | 返回的数量 |

### 返回数据参考

```json
{
  "in_progress": [
    {
      "key": "project-QmPCusvSm9t8dilU",
      "uuid": "QmPCusvSm9t8dilU",
      "name": "创建项目-项目报表二",
      "is_pin": true,
      "status_category": "in_progress",
      "is_archive": false
    }
  ],
  "to_do": [],
  "done": []
}
```
