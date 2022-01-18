# 产品管理

- schema
  - [product](#product)
  - [product_module](#productmodule)
  - [product_components](#productcomponents)
  - [product_component_view](#productcomponentview)
  - [product_component_view_config](#productcomponentviewconfig)
- api
  - [查询产品详细信息](#查询产品详细信息)
  - [新建产品](#新建产品)
  - [更新产品](#更新产品)
  - [删除产品](#删除产品)
  - [查询产品下模块列表](#查询产品下模块列表)
  - [新建模块](#新建模块)
  - [新建子模块](#新建子模块)
  - [更新模块](#更新模块)
  - [删除模块](#删除模块)


 说明：在产品管理中新建工作项请参考[创建工作项](../project/task.md#1-添加工作项)文档，通过 `product_uuids` 关联相应产品即可。


## schema

### product

|aliases               |type             |required|canUpdate|description     |
| :------------------- | :-------------- | :----- | :------ | :------------- |
|uuid                  |text             |F       |F        |[UUID]          |
|item_type             |text             |T       |F        |[Item类型]      |
|key                   |text             |F       |F        |[Item Key]      |
|name                  |text             |T       |F        |所属产品名称    |
|name_pinyin           |text             |F       |F        |[名称拼音]      |
|create_time           |time             |F       |F        |创建时间        |
|owner                 |user             |F       |F        |产品创建人      |
|assign                |user             |T       |F        |产品负责人      |
|task_count            |integer          |F       |F        |[工作项数]      |
|task_count_to_do      |integer          |F       |F        |[未开始工作项数]|
|task_count_in_progress|integer          |F       |F        |[进行中工作项数]|
|task_count_done       |integer          |F       |F        |[已完成工作项数]|
|product_components    |product_component|F       |F        |[产品下组件]    |

### product_module

|aliases                    |type          |required|canUpdate|description               |
| :------------------------ | :----------- | :----- | :------ | :----------------------- |
|uuid                       |text          |F       |F        |[UUID]                    |
|item_type                  |text          |T       |F        |[Item类型]                |
|key                        |text          |F       |F        |[Item Key]                |
|name                       |text          |T       |F        |所属功能模块名称          |
|name_pinyin                |text          |F       |F        |[名称拼音]                |
|create_time                |time          |F       |F        |创建时间                  |
|update_time                |time          |F       |F        |更新时间                  |
|product                    |product       |T       |F        |[产品]                    |
|position                   |integer       |F       |F        |[位置]                    |
|path                       |text          |F       |F        |[路径]                    |
|parent                     |product_module|F       |F        |[父模块]                  |
|task_count                 |integer       |F       |F        |[工作项数]                |
|task_count_include_children|integer       |F       |F        |[工作项数以子模块的任务数]|
|with_children              |text          |F       |F        |[所属功能模块及子模块]    |

### product_components

|aliases        |type                         |required|canUpdate|description             |
| :------------ | :-------------------------- | :----- | :------ | :--------------------- |
|uuid           |text                         |F       |F        |[UUID]                  |
|item_type      |text                         |T       |F        |[Item类型]              |
|key            |text                         |F       |F        |[Item Key]              |
|create_time    |time                         |F       |F        |创建时间                |
|product        |product                      |T       |F        |[产品]                  |
|position       |integer                      |F       |F        |位置                    |
|context_type   |integer                      |T       |F        |[上下文类型]            |
|context_param_1|text                         |T       |F        |[上下文参数1]           |
|context_param_2|text                         |F       |F        |[上下文参数2]           |
|template_uuid  |text                         |F       |F        |[组件模版uuid]          |
|parent         |product_component            |F       |F        |[父节点]                |
|name           |text                         |T       |F        |产品组件名称            |
|name_pinyin    |text                         |F       |F        |[名称拼音]              |
|description    |text                         |F       |F        |[组件描述]              |
|type           |integer                      |F       |F        |[组件类型]              |
|settings       |text                         |F       |F        |[组件功能设置]          |
|kanban_setting |text                         |F       |F        |[组件功能看板设置]      |
|url_setting    |url_setting                  |F       |F        |[组件功能自定义链接设置]|
|views          |product_component_view       |F       |F        |[组件视图]              |
|view_configs   |product_component_view_config|F       |F        |[组件视图配置]          |

### product_component_view

|aliases             |type             |required|canUpdate|description     |
| :----------------- | :-------------- | :----- | :------ | :------------- |
|uuid                |text             |F       |F        |[UUID]          |
|item_type           |text             |T       |F        |[Item类型]      |
|key                 |text             |F       |F        |[Item Key]      |
|product             |product          |T       |F        |[产品]          |
|owner               |user             |F       |F        |[所有者]        |
|product_component   |product_component|F       |F        |[产品组件]      |
|name                |text             |T       |F        |产品组件视图名称|
|layout              |enum             |F       |F        |[布局方式]      |
|query               |text             |F       |F        |[筛选方式]      |
|condition           |text             |F       |F        |[筛选条件]      |
|sort                |text             |F       |F        |[排序方式]      |
|group_by            |text             |F       |F        |[分组方式]      |
|create_time         |time             |F       |F        |创建时间        |
|built_in            |boolean          |F       |F        |[是否默认视图]  |
|include_subtasks    |boolean          |F       |F        |[是否包含子任务]|
|table_field_settings|text             |F       |F        |[表格模式的表头]|
|board_settings      |text             |F       |F        |[看板视图设置]  |
|is_fold_all_groups  |boolean          |F       |F        |[是否折叠分组]  |
|display_type        |enum             |F       |F        |[展示方式]      |
|is_show_derive      |boolean          |F       |F        |[是否显示派生]  |

### product_component_view_config

|aliases       |type                  |required|canUpdate|description|
| :----------- | :------------------- | :----- | :------ | :-------- |
|uuid          |text                  |F       |F        |[UUID]     |
|item_type     |text                  |T       |F        |[Item类型] |
|key           |text                  |F       |F        |[Item Key] |
|component_uuid|product_component     |T       |F        |[组件]     |
|owner         |user                  |F       |F        |[所有者]   |
|view          |product_component_view|T       |F        |[视图]     |
|type          |integer               |T       |F        |[类型]     |
|position      |integer               |T       |F        |[位置]     |
|is_show       |boolean               |T       |F        |[是否隐藏] |

## 查询产品详细信息

[调用graphql接口](../graphql/introduction.md#call_ones_graphql)

```graphql
{
	products(orderBy: { createTime: "DESC" }) {
		name
		uuid
		key
		owner {
			uuid
			name
		}
		createTime
		assign {
			uuid
			name
		}
		productComponents {
			uuid
			name
			parent {
				uuid
			}
			key
			type
			contextType
			contextParam1
			contextParam2
			position
			templateUUID
			urlSetting {
				url
			}
			views {
				key
				uuid
				name
				builtIn
			}
		}
		taskCount
		taskCountToDo
		taskCountDone
		taskCountInProgress
	}
}
```

### 调用示例

```json
{
	"query": "{\n\tproducts(orderBy: { createTime: \"DESC\" }) {\n\t\tname\n\t\tuuid\n\t\tkey\n\t\towner {\n\t\t\tuuid\n\t\t\tname\n\t\t}\n\t\tcreateTime\n\t\tassign {\n\t\t\tuuid\n\t\t\tname\n\t\t}\n\t\tproductComponents {\n\t\t\tuuid\n\t\t\tname\n\t\t\tparent {\n\t\t\t\tuuid\n\t\t\t}\n\t\t\tkey\n\t\t\ttype\n\t\t\tcontextType\n\t\t\tcontextParam1\n\t\t\tcontextParam2\n\t\t\tposition\n\t\t\ttemplateUUID\n\t\t\turlSetting {\n\t\t\t\turl\n\t\t\t}\n\t\t\tviews {\n\t\t\t\tkey\n\t\t\t\tuuid\n\t\t\t\tname\n\t\t\t\tbuiltIn\n\t\t\t}\n\t\t}\n\t\ttaskCount\n\t\ttaskCountToDo\n\t\ttaskCountDone\n\t\ttaskCountInProgress\n\t}\n}\n",
	"variables": {}
}
```

## 新建产品

[调用方式](../item/introduction.md#添加item)


[参数列表](#product)

### 请求体参考

```json
{
	"item": {
		"assign": "6ZpgEzkk",
		"name": "create_product",
		"item_type": "product"
	}
}
```

### 返回值参考

```json
{
	"item": {
		"assign": "6ZpgEzkk",
		"create_time": 1595299946,
		"item_type": "product",
		"key": "product-6ZpgEzkkQ7PkhGTv",
		"name": "create_product",
		"name_pinyin": "create_product",
		"owner": "6ZpgEzkk",
		"uuid": "6ZpgEzkkQ7PkhGTv"
	}
}
```

## 更新产品

[调用方式](../item/introduction.md#更新item)


[参数列表](#product)

### 请求体参考

```json
{
	"item": {
		"assign": "6ZpgEzkk",
		"name": "壮师傅"
	}
}
```

### 返回值参考

```json
{
	"item": {
		"assign": "6ZpgEzkk",
		"create_time": 1581999122,
		"item_type": "product",
		"key": "product-6ZpgEzkkUVfH1vUy",
		"name": "壮师傅",
		"name_pinyin": "zhuang4shi1fu4",
		"owner": "6ZpgEzkk",
		"uuid": "6ZpgEzkkUVfH1vUy"
	}
}
```

### 删除产品

[调用方式](../item/introduction.md#删除item)

### 返回值参考

```json
{
	"code": 200,
	"errcode": "OK",
	"type": "OK"
}
```

## 查询产品下模块列表

[调用graphql接口](../graphql/introduction.md#call_ones_graphql)

```graphql
{
	buckets(
		groupBy: { productModules: { product: {} } }
		filter: { product: { uuid_in: ["6ZpgEzkkQ7PkhGTv"] } }
	) {
		key
		product {
			uuid
			name
		}
		productModules {
			key
			name
			uuid
			position
			path
			updateTime
			parent {
				uuid
				name
			}
		}
	}
}
```

### 调用示例

```json
{
	"query": "{\n\tbuckets(\n\t\tgroupBy: { productModules: { product: {} } }\n\t\tfilter: { product: { uuid_in: [\"6ZpgEzkkQ7PkhGTv\"] } }\n\t) {\n\t\tkey\n\t\tproduct {\n\t\t\tuuid\n\t\t\tname\n\t\t}\n\t\tproductModules {\n\t\t\tkey\n\t\t\tname\n\t\t\tuuid\n\t\t\tposition\n\t\t\tpath\n\t\t\tupdateTime\n\t\t\tparent {\n\t\t\t\tuuid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n}\n",
	"variables": {}
}
```

## 新建模块

[调用方式](../item/introduction.md#添加item)


[参数列表](#productmodule)

### 请求体参考

```json
{
	"item": {
		"name": "module1",
		"parent": null,
		"item_type": "product_module",
		"product": "6ZpgEzkkQ7PkhGTv"
	}
}
```

### 返回值参考

```json
{
	"item": {
		"create_time": 1595305580,
		"item_type": "product_module",
		"key": "product_module-YUczuVEL",
		"name": "module1",
		"name_pinyin": "module1",
		"parent": "",
		"path": "YUczuVEL",
		"position": 0,
		"product_uuid": "6ZpgEzkkQ7PkhGTv",
		"update_time": 1595305580,
		"uuid": "YUczuVEL"
	}
}
```

### 新建子模块

[调用方式](../item/introduction.md#添加item)


[参数列表](#productmodule)

### 请求体参考

```json
{
	"item": {
		"name": "submodule1",
		"parent": "YUczuVEL",
		"item_type": "product_module",
		"product": "6ZpgEzkkQ7PkhGTv"
	}
}
```

### 返回值参考

```json
{
	"item": {
		"create_time": 1595305880,
		"item_type": "product_module",
		"key": "product_module-NrBGJ6KK",
		"name": "submodule1",
		"name_pinyin": "submodule1",
		"parent": "YUczuVEL",
		"path": "YUczuVEL-NrBGJ6KK",
		"position": 1,
		"product_uuid": "6ZpgEzkkQ7PkhGTv",
		"update_time": 1595305880,
		"uuid": "NrBGJ6KK"
	}
}
```


### 更新模块

[调用方式](../item/introduction.md#更新item)


[参数列表](#productmodule)

### 请求体参考

```json
{
	"item": {
		"name": "updatemodule1name"
	}
}
```

### 返回值参考

```json
{
	"item": {
		"create_time": 1595305580,
		"item_type": "product_module",
		"key": "product_module-YUczuVEL",
		"name": "updatemodule1name",
		"name_pinyin": "updatemodule1name",
		"parent": "",
		"path": "YUczuVEL",
		"position": 0,
		"product_uuid": "6ZpgEzkkQ7PkhGTv",
		"update_time": 1595311936,
		"uuid": "YUczuVEL"
	}
}
```


### 删除模块

[调用方式](../item/introduction.md#删除item)

### 返回值参考

```json
{
	"code": 200,
	"errcode": "OK",
	"type": "OK"
}
```
