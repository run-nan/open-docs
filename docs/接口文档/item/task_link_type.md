# 关联关系类型

- [task_link_type](#tasklinktype)
- [添加关联关系类型](#添加关联关系类型)
- [查询关联关系类型列表](#查询关联关系类型列表)
- [删除关联关系类型](#删除关联关系类型)
- [更新关联关联类型](#更新关联关联类型)

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

## API 说明

### 添加关联关系类型

https://your-host-name/project/api/project/team/:teamUUID/items/graphql


[参数列表](#task_link_type)

#### 请求体参考(graphql)

```text
mutation addObjectLinkType{
    addObjectLinkType(
            name:"link_name",
            source_condition:"{}",
            source_type:"task",
            target_condition:"{}",
            target_type:"task",
            link_in_desc:"发起",
            link_out_desc:"被关",
            link_model:212 
    ){
        key
    }
}
```
#### 请求体参考(json)
```json
{
        "query":"\n    mutation AddObjectLinkType {\n      addObjectLinkType (name: $name source_condition: $source_condition source_type: $source_type target_condition: $target_condition target_type: $target_type link_in_desc: $link_in_desc link_out_desc: $link_out_desc link_model: $link_model) {\n        key\n      }\n    }\n  ",
        "variables":{
            "name":"link_name",
            "source_condition":"{}",
            "source_type":"task",
            "target_condition":"{}",
            "target_type":"task",
            "link_in_desc":"发起",
            "link_out_desc":"被关",
            "link_model":212
        }
}
```

#### 返回体参考

```json
{
  "data": {
    "addObjectLinkType": {
      "key": "object_link_type-CBVR3WwC"
    }
  }
}
```

### 查询关联关系类型列表

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

#### 请求体参考

```json
{
  "query":"query OBJECT_LINK_TYPES($filter: Filter, $orderBy: OrderBy) {\n      objectLinkTypes (filter: $filter, orderBy: $orderBy) {\n        uuid\n        name\n        namePinyin\n        builtIn\n        sourceType\n        sourceCondition\n        linkOutDesc\n        targetType\n        targetCondition\n        linkInDesc\n        linkModel\n        key\n        createTime\n      }\n    }",
  "variables":{
    "orderBy":{
      "createTime":"DESC"
    }
  }
}
```

#### 返回体参考

```json
{
  "data":{
    "objectLinkTypes":[
      {
        "builtIn":false,
        "createTime":1635496864,
        "key":"object_link_type-CBVR3WwC",
        "linkInDesc":"发起..",
        "linkModel":212,
        "linkOutDesc":"被关..",
        "name":"link_name",
        "namePinyin":"link_name",
        "sourceCondition":"{}",
        "sourceType":"task",
        "targetCondition":"{}",
        "targetType":"task",
        "uuid":"CBVR3WwC"
      },
      {
        "builtIn":false,
        "createTime":1635495610,
        "key":"object_link_type-byoyB2xP",
        "linkInDesc":"12出现在v",
        "linkModel":202,
        "linkOutDesc":"好几个饭",
        "name":"第三方",
        "namePinyin":"di4san1fang1",
        "sourceCondition":"{}",
        "sourceType":"task",
        "targetCondition":"{\"lock_filter\":[{\"field\":\"issueType\",\"operator\":\"in\",\"operand\":[\"XGfdJYP1\"]}]}",
        "targetType":"task",
        "uuid":"byoyB2xP"
      },
      ...
    ]
  }
}
```



### 删除关联关系类型

无工作项引用关联关系才可以删除

#### URL

https://your-host-name/project/api/project/team/:teamUUID/items/graphql

#### HTTP Method

POST

#### 请求参数

```json
{
  "query":"\n    mutation DeleteObjectLinkType {\n      deleteObjectLinkType (key: $key) {\n        key\n      }\n    }\n  ",
  "variables":{
    "key":"object_link_type-CBVR3WwC"
  }
}
```

### 返回参数参考

```json
{
  "data":{
    "deleteObjectLinkType":{
      "key":"object_link_type-CBVR3WwC"
    }
  }
}
```


### 更新关联关联类型

https://your-host-name/project/api/project/team/:teamUUID/items/graphql


[参数列表](#task_link_type)

#### 请求体示例(graphql)

```text
mutation updateObjectLinkType{
  updateObjectLinkType(
  name:"link_name是的",
  source_condition:"{}",
  source_type:"task",
  target_condition:"{}",
  target_type:"task",
  key:"object_link_type-UH1Fg9tV",
  link_in_desc:"发起..多少发多少",
  link_out_desc:"被关..史蒂夫v多少",
  link_model:212
  ){
  key
}
}

```
#### 请求体示例（json）
```json
{
  "query":"\n    mutation UpdateObjectLinkType {\n      updateObjectLinkType (name: $name source_condition: $source_condition source_type: $source_type target_condition: $target_condition target_type: $target_type key: $key link_in_desc: $link_in_desc link_model: $link_model link_out_desc: $link_out_desc) {\n        key\n      }\n    }\n  ",
  "variables":{
    "name":"1111",
    "source_condition":"{}",
    "source_type":"task",
    "target_condition":"{}",
    "target_type":"task",
    "key":"object_link_type-UH1Fg9tV",
    "link_in_desc":"3333s",
    "link_model":102,
    "link_out_desc":"4444s"
  }
}
```

#### 返回体示例

```json
{
  "data": {
    "updateObjectLinkType": {
      "key": "object_link_type-UH1Fg9tV"
    }
  }
}
```