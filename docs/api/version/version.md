# Version

- [获取版本管理列表](#获取版本管理列表)
- [新建版本管理](#新建版本管理)
- [编辑版本管理](#编辑版本管理)
- [删除版本管理](#删除版本管理)
- [关联迭代](#关联迭代)
- [移出关联的迭代](#移出关联的迭代)
- [关联产品](#关联产品)
- [移出关联的产品](#移出关联的产品)

<!-- /TOC -->

## MODEL

### version

| 参数名        | 值类型              | 取值范围   | 说明                                                                    |
| :------------ | :------------------ | :--------- | :---------------------------------------------------------------------- |
| uuid          | string              | len=8      | 随机 8 位字符组成                                                       |
| title         | string              | len=64     | 版本号                                                                  |
| desc          | string              | len<=65536 | 版本目标（富文本）                                                      |
| assign        | string              | len=8      | 版本负责人 uuid                                                         |
| release_time  | int64               |            | 版本发布时间(s)                                                         |
| create_time   | int64               |            | 创建时间 单位秒 readonly                                                |
| category      | string              |            | 分类 <br/>未开始："todo" <br/>进行中："in_progress" <br/>已完成："done" |
| sprints       | [][sprint](#sprint) |            | 迭代 uuid 数组                                                          |
| product_uuids | []string            | len=16     | 产品 uuid 列表                                                          |

### sprint

| 参数名       | 值类型 | 取值范围 | 说明      |
| :----------- | :----- | :------- | :-------- |
| sprint_uuid  | string | len=8    | 迭代 UUID |
| project_uuid | string | len=16   | 项目 UUID |

## 状态码说明

| 状态码 | 说明                            |
| :----- | :------------------------------ |
| 200    | 成功                            |
| 403    | 没有权限 or 没有开启配置        |
| 404    | 已删除的返回 404                |
| 409    | sprint 已被存在，不应该重复添加 |
| 500    | 服务端异常                      |
| 812    | 版本负责人不在 team 中          |
| 890    | 迭代不存（未找到或已删除）      |
| 891    | 版本不存在（未找到或已删除）    |

## 获取版本管理列表

### URL

https://your-host-name/project/api/project/team/:teamUUID/versions

### HTTP Method

GET

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

无

### 返回参数列表

| 参数名   | 值类型                | 取值 | 说明     |
| :------- | :-------------------- | :--- | :------- |
| versions | [][version](#version) |      | 版本列表 |

## 返回体参考

```json
{
  "versions": [
    {
      "uuid": "AyS9QWs8",
      "title": "V1.0.0",
      "desc": "",
      "assign": "FtuS5ApR",
      "release_time": 1541924064,
      "create_time": 1538122469,
      "category": "todo",
      "sprints": [],
      "product_uuids": []
    },
    {
      "uuid": "M5an6x7r",
      "title": "我的版本测试",
      "desc": "",
      "assign": "6ZpgEzkk",
      "release_time": 1580029633,
      "create_time": 1579424856,
      "category": "in_progress",
      "sprints": [
        {
          "sprint_uuid": "Y2NmGbMu",
          "project_uuid": "FtuS5ApROKcAI7U1"
        },
        {
          "sprint_uuid": "TvXzWmcQ",
          "project_uuid": "FtuS5ApROKcAI7U1"
        }
      ],
      "product_uuids": []
    }
  ]
}
```

## 新建版本管理

https://your-host-name/project/api/project/team/:teamUUID/versions/add

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

| 参数名             | 值类型              | 是否必须 | 取值范围 | 说明                                                                    |
| :----------------- | :------------------ | :------- | :------- | :---------------------------------------------------------------------- |
| version            | [version](#version) | T        |          | 版本信息                                                                |
| &emsp;title        | string              | T        | len=64   | 版本名称                                                                |
| &emsp;assign       | string              | F        | len=8    | 版本负责人                                                              |
| &emsp;release_time | int64               | F        |          | 发布时间                                                                |
| &emsp;desc         | string              | F        |          | 版本目标（富文本）                                                      |
| &emsp;category     | string              | F        |          | 分类 <br/>未开始："todo" <br/>进行中："in_progress" <br/>已完成："done" |

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 请求参数参考

```json
{
  "version": {
    "release_time": 1593316656,
    "title": "version_create_test",
    "assign": "6ZpgEzkk"
  }
}
```

### 返回体参考

```json
{
  "version": {
    "uuid": "AX3jDED4",
    "title": "version_create_test",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1593316656,
    "create_time": 1590983862,
    "category": "todo",
    "sprints": [],
    "product_uuids": []
  }
}
```

## 编辑版本管理

注意编辑版本，要传入全量的更新后的参数，否则相关字段会使用其初始化参数

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/update

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

| 参数名             | 值类型              | 是否必须 | 取值范围 | 说明                                                                    |
| :----------------- | :------------------ | :------- | :------- | :---------------------------------------------------------------------- |
| version            | [version](#version) | T        |          | 版本信息                                                                |
| &emsp;title        | string              | T        | len=64   | 版本名称                                                                |
| &emsp;assign       | string              | F        | len=8    | 版本负责人                                                              |
| &emsp;release_time | int64               | F        |          | 发布时间                                                                |
| &emsp;desc         | string              | F        |          | 版本目标（富文本）                                                      |
| &emsp;category     | string              | F        |          | 分类 <br/>未开始："todo" <br/>进行中："in_progress" <br/>已完成："done" |

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 请求体参考

```json
{
  "version": {
    "release_time": 1593316656,
    "title": "update_version_name_test",
    "assign": "6ZpgEzkk",
    "uuid": "AX3jDED4"
  }
}
```

### 返回体参考

```json
{
  "version": {
    "uuid": "AX3jDED4",
    "title": "update_version_name_test",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1593316656,
    "create_time": 1590983862,
    "category": "todo",
    "sprints": [],
    "product_uuids": ["6ZpgEzkk79SQCVLJ"]
  }
}
```

## 删除版本管理

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/delete

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

无

### 返回参数列表

无

### 返回体参考

```json
{
  "code": 200,
  "errcode": "OK",
  "type": "OK"
}
```

## 关联迭代

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/sprints/add

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

| 参数名      | 值类型 | 是否必须 | 取值范围 | 说明            |
| :---------- | :----- | :------- | :------- | :-------------- |
| sprint_uuid | string | T        | len=8    | 迭代任务的 uuid |

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 请求体参考

```json
{
  "sprint_uuid": "5J6xysRB"
}
```

### 返回体参考

```json
{
  "version": {
    "uuid": "M5an6x7r",
    "title": "我的版本测试",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1580029633,
    "create_time": 1579424856,
    "category": "in_progress",
    "sprints": [
      {
        "sprint_uuid": "5J6xysRB",
        "project_uuid": "FtuS5ApRTSAkfwI7"
      }
    ],
    "product_uuids": []
  }
}
```

## 移出关联的迭代

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/sprint/:sprintUUID/delete

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

无

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 返回体参考

```json
{
  "version": {
    "uuid": "GKy9yuUj",
    "title": "version_name",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1591150748,
    "create_time": 1590977961,
    "category": "todo",
    "sprints": [
      {
        "sprint_uuid": "Y2NmGbMu",
        "project_uuid": "FtuS5ApROKcAI7U1"
      }
    ],
    "product_uuids": ["6ZpgEzkkUVfH1vUy"]
  }
}
```

## 关联产品

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/products/add

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

| 参数名        | 值类型   | 是否必须 | 取值范围 | 说明           |
| :------------ | :------- | :------- | :------- | :------------- |
| product_uuids | []string | T        | len=16   | 产品 uuid 列表 |

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 请求体参考

```json
{
  "product_uuids": ["6ZpgEzkk79SQCVLJ"]
}
```

### 返回体参考

```json
{
  "version": {
    "uuid": "AX3jDED4",
    "title": "version_create_test",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1593316656,
    "create_time": 1590983862,
    "category": "todo",
    "sprints": [],
    "product_uuids": ["6ZpgEzkk79SQCVLJ"]
  }
}
```

## 移出关联的产品

### URL

https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/product/:productUUID/delete

### HTTP Method

POST

### 调用权限

manage_versions

### 传值方式

JSON

### 参数列表

无

### 返回参数参考

| 参数名  | 值类型              | 取值 | 说明     |
| :------ | :------------------ | :--- | :------- |
| version | [version](#version) |      | 版本列表 |

### 返回体参考

```json
{
  "version": {
    "uuid": "GKy9yuUj",
    "title": "version_name",
    "desc": "",
    "assign": "6ZpgEzkk",
    "release_time": 1591150748,
    "create_time": 1590977961,
    "category": "todo",
    "sprints": [
      {
        "sprint_uuid": "Y2NmGbMu",
        "project_uuid": "FtuS5ApROKcAI7U1"
      }
    ],
    "product_uuids": []
  }
}
```
