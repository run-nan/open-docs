<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->
#角色
- [通用说明](#通用说明)
	- [模型](#模型)
- [API 说明](#api-说明)
	- [1. 创建角色](#1-创建角色)
	- [2. 修改角色](#2-修改角色)
	- [3. 删除角色](#3-删除角色)
	- [4. 获取角色列表](#4-获取角色列表)
	- [5. 添加角色配置](#5-添加角色配置)
	- [6. 删除角色配置](#6-删除角色配置)
	- [7. 获取角色配置列表](#7-获取角色配置列表)
	- [8. 在项目角色下添加成员](#8-在项目角色下添加成员)
	- [9. 在项目角色下移除成员](#9-在项目角色下移除成员)
	- [10. 替换项目下的角色成员](#10-替换项目下的角色成员)
	- [11. 获取项目下的角色成员](#11-获取项目下的角色成员)
	
## 通用说明

## 模型

### 角色（role）

| 参数名   	 	 | 值类型     | 允许空值 | 取值范围  | 说明                                                 |
| :---------------- | :----- | :------- | :-------| :--------------------------------------------------- |
| uuid     			| string | F        | len=8   | 角色 uuid                                            |
| name     			| string | F        | len<=32 | 角色名称                                             |
| built_in 			| bool	 | F		| 		  | 是否系统内置角色，内置角色无法删除					 |
| is_project_member | bool	 | T		|		  | 是否项目成员角色									  |
| projects 			| array  | T        |         | 目前在使用这个角色的项目，临时结果，不应该持久存储   |
| &emsp;uuid 		| string | F      	|         | 项目 uuid                                            |
| &emsp;name 		| string | F      	|         | 项目当前的名称                                       |

### 角色配置（role_config)

- 角色配置的有无决定项目下角色的有无，即添加一条角色配置意味着在项目下添加这个角色，删除一条角色配置意味着在项目下删除这个角色

| 参数名          | 值类型 | 允许空值    | 取值范围 | 说明              |
| :-------------- | :----- | :------- | :-------| :---------------- |
| project_uuid    | string | F        | len=16  | 项目 uuid         |
| role_uuid       | string | F        | len=8   | 角色 uuid         |

## API 说明

### 1. 创建角色

创建一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/roles/add

#### HTTP Method

POST

#### 调用权限

administer_do

#### 传值方式

JSON

#### 参数列表

| 参数名 | 值类型 | 是否必填 | 取值范围 | 说明 |
| :----- | :----- | :------- | :------- | :--- |
| role   | object | T        |          |      |
| name   | string | T        |          |      |

#### 返回参数列表

| 参数名                 | 值类型 | 允许空值 | 取值范围  | 说明                                              |
| :-------------------- | :----- | :------- | :------| :------------------------------------------------ |
| role                  | object | F        |        | 参考顶端的角色模型                                |
| server_update_stamp   | int64  | F        |        | role 类型的数据更新时间                           |

#### 请求体参考

```json
{
    "role": {
        "name": "new_role"
    }
}

```

#### 返回体参考

```json
{
    "role": {
        "uuid": "9powCjKx",
        "name": "new_role",
        "name_pinyin": "new_role",
        "built_in": false,
        "is_project_member": false,
        "create_time": 1585904500
    },
    "server_update_stamp": 1585904500294224
}
```
### 2. 修改角色

修改一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/role/:roleUUID/update

#### HTTP Method

POST

#### 调用权限

administer_do

#### 传值方式

JSON

#### 参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------- | :----- | :------- | :-------| :------------------------------------------------ |
| role            | object | F        |         | 参考顶端的角色模型，但不需要提供角色 uuid         |

#### 返回参数列表

| 参数名                | 值类型 | 允许空值    | 取值范围 |说明                                              |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------ |
| role                  | object | F        |         | 参考顶端的角色模型                                |
| server_update_stamp   | int64  | F        |         | role 类型的数据更新时间                           |

#### 请求体参考

```json
{
    "role": {
        "name": "new_role"
    }
}
```

#### 返回体参考

```json
{
    "role": {
        "uuid": "28Rh2BZX",
        "name": "update role",
        "name_pinyin": "update role",
        "built_in": false,
        "is_project_member": false,
        "create_time": 1626254325
    },
    "server_update_stamp": 1626770385219008
}
```


### 3. 删除角色

删除一个角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/role/:roleUUID/delete

#### 调用权限

administer_do

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    |  说明                                              |
| :-------------------- | :----- | :------- | :------- | :------------------------------------------------ |
| server_update_stamp   | int64  | F        |          | role 类型的数据更新时间                           |

#### 返回体参考

```json
{
    "server_update_stamp": 1626771175185472
}
```

### 4. 获取角色列表

列出当前团队下的所有角色

#### URL

https://your-host-name/project/api/project/team/:teamUUID/roles

#### HTTP Method

GET

#### 调用权限

无

#### 传值方式

URL

#### 参数列表

无

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------ |
| roles                 | array  | F        |         | 角色列表，参考顶端的角色模型                      |
| server_update_stamp   | int64  | F        |         | role 类型的数据更新时间                           |

#### 返回体参考

```json
{
    "roles": [
        {
            "uuid": "4Gs6LPzp",
            "name": "项目成员",
            "name_pinyin": "xiang4mu4cheng2yuan2",
            "built_in": true,
            "is_project_member": true,
            "create_time": 1624865026,
            "projects": [
                {
                    "uuid": "9uaNjXTJHNjLHQYm",
                    "name": "终极项目"
                },
                {
                    "uuid": "9uaNjXTJJzZmtwzj",
                    "name": "瀑布式研发管理"
                },
                {
                    "uuid": "9uaNjXTJMXZuhyiu",
                    "name": "敏捷式研发管理"
                }
            ]
        },
        {
            "uuid": "NDKb3Jyy",
            "name": "new role",
            "name_pinyin": "new role",
            "built_in": false,
            "is_project_member": false,
            "create_time": 1626769815,
            "projects": []
        }
    ],
    "server_update_stamp": 1626771175185472
}
```


### 5. 添加角色配置

添加一条或多条角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/roles/add

#### HTTP Method

POST

#### 调用权限

manage_project

#### 传值方式

JSON

#### 参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------- | :----- | :------- | :-------| :------------------------------------------------ |
| role_uuids      | array  | F        |         | 角色 uuid 列表                                    |

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------ |
| role_configs          | array  | F        |         | 角色配置列表，参考顶端的角色配置模型              |
| server_update_stamp   | int64  | F        |         | role_config 类型的数据更新时间                    |

#### body示例

```json
{
    "role_uuids":[
        "28Rh2BZX"
    ]
}
```
#### 返回体参考

```json
{"server_update_stamp":1626769703846912}
```


### 6. 删除角色配置

删除一条角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/delete

#### 调用权限

manage_project

#### HTTP Method

POST

#### 传值方式

JSON

#### 参数列表

无

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------ |
| server_update_stamp   | int64  | F        |         | role_config 类型的数据更新时间                    |

#### 返回体参考

```json
{"server_update_stamp":1626769703846912}
```


### 7. 获取角色配置列表

列出当前用户在当前团队下能访问到的所有角色配置

#### URL

https://your-host-name/project/api/project/team/:teamUUID/role_configs

#### HTTP Method

GET

#### 调用权限

无

#### 传值方式

URL

#### 参数列表

无

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------ |
| role_configs          | array  | F        |         | 角色配置列表，参考顶端的角色配置模型              |
| server_update_stamp   | int64  | F        |         | role_config 类型的数据更新时间                    |

#### 返回体参考

```json
{
    "role_configs": [
        {
            "project_uuid": "9uaNjXTJHNjLHQYm",
            "role_uuid": "4Gs6LPzp",
            "create_time": 1626256561
        },
        {
            "project_uuid": "9uaNjXTJJzZmtwzj",
            "role_uuid": "4Gs6LPzp",
            "create_time": 1624865046
        }
    ],
    "server_update_stamp": 1626771977094928
}
```


### 8. 在项目角色下添加成员

在某个项目的角色下添加一个或多个成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/add

#### HTTP Method

POST

#### 调用权限

manage_project

#### 传值方式

JSON

#### 参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------- | :----- | :------- | :-------| :------------------------------------------------ |
| members    	  | array  | F        |         | 需要添加的成员 uuid 列表                          |

#### 返回参数列表

| 参数名                | 值类型 | 允许空值    | 取值范围 | 说明                                                                |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------------------------ |
| role_members          | array  | F        |         | 角色分组                                              			     |
| &emsp;role       		| object | F        |         | 角色，参考顶端的角色模型                                            |
| &emsp;members 		| array  | F        |         | 角色下的成员 uuid 列表           									 |

#### body示例

```json
{
    "members":[
        "9uaNjXTJ"
    ]
}
```

#### 返回体参考

```json
{
    "role_members": [
        {
            "role": {
                "uuid": "4Gs6LPzp",
                "name": "项目成员",
                "name_pinyin": "xiang4mu4cheng2yuan2",
                "built_in": true,
                "is_project_member": true,
                "create_time": 1624865026
            },
            "members": [
                "9uaNjXTJ"
            ]
        },
        {
            "role": {
                "uuid": "NDKb3Jyy",
                "name": "new role",
                "name_pinyin": "new role",
                "built_in": false,
                "is_project_member": false,
                "create_time": 1626769815
            },
            "members": [
                "9uaNjXTJ"
            ]
        }
    ]
}
```



### 9. 在项目角色下移除成员

在某个项目的角色下移除一个或多个成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/delete

#### HTTP Method

POST

#### 调用权限

manage_project

#### 传值方式

JSON

#### 参数列表

| 参数名          | 值类型 | 允许空值 | 取值范围    | 说明                                              |
| :-------------- | :----- | :------- | :-------| :------------------------------------------------ |
| members    	  | array  | F        |         | 需要移除的成员 uuid 列表                          |

#### 返回参数列表

| 参数名                 | 值类型 | 允许空值 | 取值范围   | 说明                                                                |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------------------------ |
| role_members          | array  | F        |         | 角色分组                                              			     |
| &emsp;role       		| object | F        |         | 角色，参考顶端的角色模型                                            |
| &emsp;members 		| array  | F        |         | 角色下的成员 uuid 列表           									 |

#### body示例

```json
{
    "members":[
        "9uaNjXTJ"
    ]
}
```

#### 返回体参考

```json
{
    "role_members": [
        {
            "role": {
                "uuid": "4Gs6LPzp",
                "name": "项目成员",
                "name_pinyin": "xiang4mu4cheng2yuan2",
                "built_in": true,
                "is_project_member": true,
                "create_time": 1624865026
            },
            "members": [
                "9uaNjXTJ"
            ]
        },
        {
            "role": {
                "uuid": "NDKb3Jyy",
                "name": "new role",
                "name_pinyin": "new role",
                "built_in": false,
                "is_project_member": false,
                "create_time": 1626769815
            },
            "members": []
        }
    ]
}
```



### 10. 替换项目下的角色成员

将某个项目角色下的成员替换成指定列表

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/update

#### HTTP Method

POST

#### 调用权限

manage_project

#### 传值方式

JSON

#### 参数列表

| 参数名          | 值类型 | 允许空值    | 取值范围 | 说明                                              |
| :-------------- | :----- | :------- | :-------| :------------------------------------------------ |
| members    	  | array  | F        |         | 替换后的的成员 uuid 列表                          |

#### 返回参数列表

| 参数名                | 值类型 | 允许空值 | 取值范围    | 说明                                                                |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------------------------ |
| role_members          | array  | F        |         | 角色分组                                              			     |
| &emsp;role       		| object | F        |         | 角色，参考顶端的角色模型                                            |
| &emsp;members 		| array  | F        |         | 角色下的成员 uuid 列表           									 |

#### body示例

```json
{
    "members":[
        "9uaNjXTJ"
    ]
}
```
#### 返回体参考

```json
{
    "role_members": [
        {
            "role": {
                "uuid": "4Gs6LPzp",
                "name": "项目成员",
                "name_pinyin": "xiang4mu4cheng2yuan2",
                "built_in": true,
                "is_project_member": true,
                "create_time": 1624865026
            },
            "members": [
                "9uaNjXTJ"
            ]
        },
        {
            "role": {
                "uuid": "NDKb3Jyy",
                "name": "new role",
                "name_pinyin": "new role",
                "built_in": false,
                "is_project_member": false,
                "create_time": 1626769815
            },
            "members": [
                "9uaNjXTJ"
            ]
        }
    ]
}
```

### 11. 获取项目下的角色成员

列出项目下所有角色的所有成员

#### URL

https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/role_members

#### HTTP Method

GET

#### 调用权限

browse_project

#### 传值方式

URL

#### 参数列表

无

#### 返回参数列表

| 参数名                 | 值类型 | 允许空值   | 取值范围 | 说明                                                                |
| :-------------------- | :----- | :------- | :-------| :------------------------------------------------------------------ |
| role_members          | array  | F        |         | 角色分组                                              			     |
| &emsp;role       		| object | F        |         | 角色，参考顶端的角色模型                                            |
| &emsp;members 		| array  | F        |         | 角色下的成员 uuid 列表           									 |

#### 返回体参考

```json
{
    "role_members": [
        {
            "role": {
                "uuid": "NeQBPnGj",
                "name": "项目成员",
                "name_pinyin": "xiang4mu4cheng2yuan2",
                "built_in": true,
                "is_project_member": true,
                "create_time": 1535539298
            },
            "members": [
                "EE1FvEii",
                "3rzKDAtx",
                "JfaASqi2",
                "NqHNQxeN",
                "FdNMfm4a",
                ...
            ]
        },
        {
            "role": {
                "uuid": "UVerkzCX",
                "name": "查看项目",
                "name_pinyin": "cha2kan4xiang4mu4",
                "built_in": false,
                "is_project_member": false,
                "create_time": 1585647584
            },
            "members": [
                "3rzKDAtx",
                "JfaASqi2",
                "NqHNQxeN",
                "FdNMfm4a",
                "6ZpgEzkk"
            ]
        }
    ]
}
```