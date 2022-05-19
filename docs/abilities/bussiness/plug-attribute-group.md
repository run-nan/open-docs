---
sidebar_position: 4
---
# 插件承载属性组
## 能力描述
插件可以提供属性组的具体关联关系的业务实现。插件启用时，在产品属性的全局工作项属性中生成的脚本属性，并同时为它们建立属性组关系，脚本属性不能被进行编辑与删除操作。

## 能力使用
### 能力声明
```typescript
import {
  PluginRequest,
  PluginResponse,
} from '@ones-op/node-types';
import {
  Field,
  Notify,
  NotifyWay,
  FieldTypeEnum,
  PoolEnum,
} from '@ones-op/node-ability';
```
### 实现过程
使用FieldGroupProvider()方法

入参

|参数|类型|说明|默认值|
| ----- | ----- | ----- | ----- |
|field\_name|string|属性名称|\-|
|item\_name|string|属性组名称|\-|

返回

|参数|类型|说明|默认值|
| ----- | ----- | ----- | ----- |
|FieldsAdd|object|属性新增到全局的处理结果|\-|
|ItemsAddProjectRes|object|属性组新增到全局的处理结果| |
|UpdateFieldOptionRes|object|属性组更新的处理结果| |
|AddGroupFieldRes|ovject|属性组新增属性的处理结果| |
|data|string|返回的自定义信息|\-|

```javascript
async function FieldGroupProvider(request: PluginRequest): Promise<PluginResponse> {
    const {field_name, item_name} = request?.body as any
    if (!field_name || !item_name) {
        return {
            body: {
                error: "缺少参数 field_name 或 item_name"
            }
        }
    }
    const FieldsAddRes = await Field.FieldsAdd({
        Name: field_name,
        Type: 1009,
        Renderer: 1,
        FilterOption: 0,
        SearchOption: 1,
    });
    if (FieldsAddRes.Error) {
        return {
            body: {
                message: "Field Add Error",
                FieldsAddRes
            }
        }
    }
    const {UUID: fieldUUID} = FieldsAddRes

    const ItemsAddProjectRes = await Field.ItemsAdd({
        FieldType: FieldTypeEnum.SingleLabel,
        Name: field_name,
        ItemType: 'field',
        Pool: PoolEnum.Product,
        ContextType: 'team',
        required: false,
    });
    if (ItemsAddProjectRes.Error) {
        return {
            body: {
                message: "ItemsAddProject Error",
                ItemsAddProjectRes
            }
        }
    }
    const {UUID: itemUUID} = ItemsAddProjectRes


    const AddGroupFieldRes = await Field.AddGroupField({
        ObjectType: PoolEnum.Product,
        Name: item_name,
        Relations: [
            {
                FieldUUID: fieldUUID,
                FieldParentUUID: itemUUID,
                Position: 1,
            },
        ],
    });
    if (AddGroupFieldRes.Error) {
        return {
            body: {
                message: "AddGroupField Error",
                AddGroupFieldRes
            }
        }
    }

    const UpdateFieldOptionRes = await Field.UpdateFieldOption([
        {
            TeamUUID: globalThis.onesEnv.teamUUID,
            FieldUUID: fieldUUID,
            UUID: itemUUID,
            Value: 'test 111',
            ObjectType: 1,
        },
    ]);
    return {
        body: {
            FieldsAdd: FieldsAddRes,
            ItemsAddProjectRes: ItemsAddProjectRes,
            AddGroupFieldRes: AddGroupFieldRes,
            UpdateFieldOptionRes: UpdateFieldOptionRes,
            data: 'ok',
        },
    }
}
```
**增加脚本属性方法**

```javascript
const FieldsAddRes = await Field.FieldsAdd({
	Name: field_name,
	Type: 1009,
	Renderer: 1,
	FilterOption: 0,
	SearchOption: 1,
});
```
|参数|类型| 说明                                                            |默认值|
| ----- | ----- |---------------------------------------------------------------| ----- |
|Name|string| 新增的脚本属性名称                                                     |\-|
|Type|int| 新增的脚本属性类型<br />1001：脚本属性单选<br />1002：脚本属性多选<br />1009：脚本属性浮点型 |\-|
|Renderer| |                                                               | |
|FilterOption| |                                                               | |
|SearchOption| |                                                               | |



**往属性组增加脚本属性方法**

```javascript
await Field.AddGroupField({
        ObjectType: PoolEnum.Product,
        Name: item_name,
        Relations: [
            {
                FieldUUID: fieldUUID,
                FieldParentUUID: itemUUID,
                Position: 1,
            },
        ],
 });
```


|参数|类型| 说明                                                                                                                                                                                                |默认值|
| ----- | ----- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----- |
|ObjectType|object|                                                                                                                                                                                                   |\-|
|Name|string| 属性组名称                                                                                                                                                                                             |\-|
|Relations|object| FieldUUID：属性ID，      <br />FieldParentUUID：属性组ID，<br />Position：添加属性在属性组位置<br /> {<br />        FieldUUID: fieldUUID,<br />        FieldParentUUID: itemUUID,<br />         Position: 1,<br /> }, |\-|



## 