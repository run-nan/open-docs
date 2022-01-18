
## 获取所有监听器的接口

### URL

https://your-host-name/project/api/project/team/:teamUUID/webhook/list

### HTTP Method

GET

### 调用权限

administer_do


### 返回值
| 参数名              | 值类型 | 取值范围 | 说明                                      |
| :------------------ | :----- | :------- | :---------------------------------------- |
| uuid             | string  |          | webhook的uuid |
| name        | string  |          | 监听器名称                       |
| url    | string  |          | 配置的地址                               |
| status    | int  |    1为启用，2为禁用      | 状态                           |


## 修改监听器的状态接口

### URL

https://your-host-name/project/api/project/team/:teamUUID/webhook/update

### HTTP Method

POST

### 调用权限

administer_do


### 参数值
| 参数名              | 值类型 | 取值范围 | 说明                                      |
| :------------------ | :----- | :------- | :---------------------------------------- |
| uuid             | string  |          | webhook的uuid |
| webhook_type        | int  |      固定为1      | webhook类型                    |
| status    | int  |    1为启用，2为禁用      | 状态                           |
