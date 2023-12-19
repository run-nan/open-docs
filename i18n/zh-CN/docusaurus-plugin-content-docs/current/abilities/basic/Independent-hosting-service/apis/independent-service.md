# 发现服务

## 要求

| ONES      |
| --------- |
| v3.16.18+ |

## 获取独立服务的信息（外部）

根据插件的app_id获取独立服务地址信息。

该外部接口，用于前端web调用。

### URL

https://{your-host-name}/project/api/project/plugin/web_service/info

### HTTP Method

POST

### 是否需要登录

是

### 传值方式

JSON

### 参数列表

Header

| 参数名           | 是否必须 | 值类型 | 取值例子         | 说明                |
| :--------------- | :------- | :----- | :--------------- | :------------------ |
| Content-Type     | T        | string | application/json | JSON 格式的数据     |
| Ones-Check-Point | T        | string | team             | 固定值              |
| Ones-Plugin-Id   | T        | string | built_in_apis    | 固定值              |
| Ones-Check-Id    | T        | string | ATVswGgy         | team_uuid，用于校验 |
| Ones-User-Id     | T        | string | 4qumKXgM         | user_uuid，用于校验 |
| Origin           | F        | string | https://xxxx.com | ONES的Base地址      |

Body

| 参数名   | 是否必须 | 值类型 | 取值例子         | 说明                                                           |
| :------- | :------- | :----- | :--------------- | :------------------------------------------------------------- |
| app_id   | T        | string | "Xy4-EYjw"       | 插件的app_id信息                                               |
| base_url | F        | string | https://xxxx.com | ONES的Base地址。优先使用该字段，为空则会使用Header中Origin字段 |

### 返回参数列表

| 参数名 | 值类型   | 取值例子     | 说明             |
| :----- | :------- | :----------- | :--------------- |
| data   | []object | 参见data对象 | 返回data数组数据 |

data对象

| 参数名     | 值类型 | 取值例子                  | 说明                      |
| :--------- | :----- | :------------------------ | :------------------------ |
| app_id     | string | Xy4-EYjw                  | 插件的app_id信息          |
| root_route | string | /node_demo                | 托管独立服务跟路由信息    |
| http_url   | string | https://xxx.com/node_demo | 托管独立服务http地址      |
| ws_url     | string | ws://xxx.com/node_demo    | 托管独立服务websocket地址 |

### 请求体示例

```curl
curl --location --request POST 'https://xxx.com/project/api/project/plugin/web_service/info' \
--header 'Ones-Check-Id: ATVswGgy' \
--header 'Ones-Check-Point: team' \
--header 'Ones-Plugin-Id: built_in_apis' \
--header 'Ones-User-Id: 4qumKXgM' \
--header 'Content-Type: application/json' \
--data-raw '{
    "base_url": "https://xxx.com/",
    "app_id":"Xy4-EYjw"
}'

```

### 返回示例

```json
{
  "data": [
    {
      "app_id": "Xy4-EYjw",
      "root_route": "/node_demo",
      "http_url": "https://xxx.com/plugin_service/node_demo",
      "ws_url": "ws://xxx.com/api/plugin_service_ws/node_demo"
    }
  ]
}
```

## 获取独立服务的信息（内部）

根据插件的app_id获取独立服务地址信息。

该内部接口，用于后端服务之间调用。

### URL

{platform_address}/plugin/web_service/info/internal

### HTTP Method

POST

### 传值方式

JSON

### 参数列表

Header

| 参数名       | 是否必须 | 值类型 | 取值例子         | 说明            |
| :----------- | :------- | :----- | :--------------- | :-------------- |
| Content-Type | T        | string | application/json | JSON 格式的数据 |

Body

| 参数名 | 是否必须 | 值类型 | 取值例子     | 说明               |
| :----- | :------- | :----- | :----------- | :----------------- |
| app_id | T        | string | ["Xy4-EYjw"] | 插件的app_id信息， |

### 返回参数列表

| 参数名 | 值类型   | 取值例子     | 说明             |
| :----- | :------- | :----------- | :--------------- |
| data   | []object | 参见data对象 | 返回data数组数据 |

data对象

| 参数名     | 值类型 | 取值例子                        | 说明                      |
| :--------- | :----- | :------------------------------ | :------------------------ |
| app_id     | string | Xy4-EYjw                        | 插件的app_id信息          |
| root_route | string | /node_demo                      | 托管独立服务跟路由信息    |
| http_url   | string | http://127.0.0.1:9008/node_demo | 托管独立服务http地址      |
| ws_url     | string | ws://127.0.0.1:9008/node_demo   | 托管独立服务websocket地址 |

### 请求体示例

```curl
curl --location --request POST 'http://127.0.0.1:9005/plugin/web_service/info/internal' \
--header 'Content-Type: application/json' \
-d '{
    "app_id":"Xy4-EYjw"
}'


```

### 返回示例

```json
{
  "data": [
    {
      "app_id": "Xy4-EYjw",
      "root_route": "/node_demo",
      "http_url": "http://127.0.0.1:9008/node_demo",
      "ws_url": "ws://127.0.0.1:9008/node_demo"
    }
  ]
}
```
