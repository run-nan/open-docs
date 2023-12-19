# Discovery service

## Requirements

| ONES      |
| :-------- |
| v3.16.18+ |

## Get URL address for independent services（outer）

According to the app_id of the plugin, We can obtain independent service address information.

This api is used for front-end web calls.

### URL

https://{your-host-name}/project/api/project/plugin/web_service/info

### HTTP Method

POST

### Need Login

yes

### Value passing

JSON

### parameters

Header

| name             | require | value type | example          | illustrate                       |
| :--------------- | :------ | :--------- | :--------------- | :------------------------------- |
| Content-Type     | T       | string     | application/json | Data in JSON format              |
| Ones-Check-Point | T       | string     | team             | Fixed value                      |
| Ones-Plugin-Id   | T       | string     | built_in_apis    | Fixed value                      |
| Ones-Check-Id    | T       | string     | ATVswGgy         | team_uuid, used for verification |
| Ones-User-Id     | T       | string     | 4qumKXgM         | user_uuid, used for verification |
| Origin           | F       | string     | https://xxxx.com | Base address of ONES             |

Body

| name     | require | value type | example          | illustrate                                                                                                   |
| :------- | :------ | :--------- | :--------------- | :----------------------------------------------------------------------------------------------------------- |
| app_id   | T       | string     | "Xy4-EYjw"       | The app_id information of the plugin.                                                                        |
| base_url | F       | string     | https://xxxx.com | Base address of ONES. This field is used first. If it is empty, the Origin field in the Header will be used. |

### Return parameter

| name | value type | example         | illustrate             |
| :--- | :--------- | :-------------- | :--------------------- |
| data | []object   | See data object | Return data array data |

data object

| name       | value type | example                   | illustrate                                   |
| :--------- | :--------- | :------------------------ | :------------------------------------------- |
| app_id     | string     | Xy4-EYjw                  | app_id of the plugin                         |
| root_route | string     | /node_demo                | independent services and routing information |
| http_url   | string     | https://xxx.com/node_demo | independent service http address             |
| ws_url     | string     | wss://xxx.com/node_demo   | independent service websocket address        |

### Request Example

```curl
curl --location --request POST 'https://xxx.com/project/api/project/plugin/web_service/info' \
--header 'Ones-Check-Id: ATVswGgy' \
--header 'Ones-Check-Point: team' \
--header 'Ones-Plugin-Id: built_in_apis' \
--header 'Ones-User-Id: 4qumKXgM' \
--header 'Content-Type: application/json' \
--header 'Origin: https://xxx.com/' \
--data-raw '{
    "app_id":"Xy4-EYjw"
}'

```

### Return Example

```json
{
  "data": [
    {
      "app_id": "Xy4-EYjw",
      "root_route": "/node_demo",
      "http_url": "https://xxx.com/plugin_service/node_demo",
      "ws_url": "wss://xxx.com/api/plugin_service_ws/node_demo"
    }
  ]
}
```

## Get URL address for independent services（inner）

According to the app_id of the plugin, We can obtain independent service address information.

This apiis used for calling between backend services

### URL

{platform_address}/plugin/web_service/info/internal

### HTTP Method

POST

### Value passing

JSON

### parameters

Header

| name         | require | value type | example          | illustrate          |
| :----------- | :------ | :--------- | :--------------- | :------------------ |
| Content-Type | T       | string     | application/json | Data in JSON format |

Body

| name   | require | value type | example    | illustrate                            |
| :----- | :------ | :--------- | :--------- | :------------------------------------ |
| app_id | T       | string     | "Xy4-EYjw" | The app_id information of the plugin. |

### Return parameter

| name | value type | example         | illustrate             |
| :--- | :--------- | :-------------- | :--------------------- |
| data | []object   | See data object | Return data array data |

data object

| name       | value type | example                   | illustrate                                   |
| :--------- | :--------- | :------------------------ | :------------------------------------------- |
| app_id     | string     | Xy4-EYjw                  | app_id of the plugin                         |
| root_route | string     | /node_demo                | independent services and routing information |
| http_url   | string     | https://xxx.com/node_demo | independent service http address             |
| ws_url     | string     | ws://xxx.com/node_demo    | independent service websocket address        |

### Request Example

```curl
curl --location --request POST 'http://127.0.0.1:9005/plugin/web_service/info/internal' \
--header 'Content-Type: application/json' \
-d '{
    "app_id":"Xy4-EYjw"
}'


```

### Return Example

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
