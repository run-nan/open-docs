# Wiki Model

## space

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明         |
| :----------- | :----- | :------- | :------- | :----------- |
| uuid         | string | 否       | len=8    | uuid         |
| owner_uuid   | string | 否       | len=8    | 页面组创建者 |
| title        | string | 否       |          | 页面组标题   |
| description  | string | 是       |          | 页面组描述   |
| create_time  | int    | 否       |          | 创建时间     |
| updated_time | int    | 否       |          | 更新时间     |

## page

| 参数名      | 值类型 | 允许空值 | 取值范围 | 说明 |
| :---------- | :----- | :------- | :------- | :--- |
| uuid        | string | 否       | len=8    | uuid |
| space_uuid  | string | 否       | len=8    |
| parent_uuid | string | 否       | len=8    |
| title       | string | 否       |          | 标题 |

## page_detail

| 参数名       | 值类型 | 允许空值 | 取值范围 | 说明     |
| :----------- | :----- | :------- | :------- | :------- |
| owner_uuid   | string | 否       |          |
| title        | string | 是       |          |
| content      | string | 是       |          |
| version      | int    | 否       |          | 版本号   |
| is_watch     | bool   | 否       |          | 是否关注 |
| create_time  | int    | 否       |          | 创建时间 |
| updated_time | int    | 否       |          | 更新时间 |

## message

| 参数名         | 值类型 | 允许空值 | 取值范围                        | 说明     |
| :------------- | :----- | :------- | :------------------------------ | :------- |
| uuid           | string | 否       |                                 |
| from_uuid      | string | 否       |                                 | 操作者   |
| reference_id   | string | 是       |                                 | 操作对象 |
| reference_type | int    | 否       | [1,2] {space,page}              | 对象类型 |
| action         | int    | 否       | [1,4] {新增,修改,删除,权限变更} | 操作动作 |
| create_time    | int64  | 否       |                                 | 创建时间 |
