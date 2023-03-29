# Task attachment upload example

- 第一步上传资源

请求体示例

```curl
curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/res/attachments/upload' \
--header 'Ones-User-Id: 6ZpgEzkk' \
--header 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "attachment",
    "name": "untitled",
    "ref_type": "task",
    "ref_id": "6ZpgEzkkFOLPsD5s",
    "description": "this is a upload test"
}'
```

返回体示例

```json
{
  "need_upload": true,
  "base_url": "https://your-host-name/project/api/project",
  "upload_url": "https://up.qbox.me",
  "token": "3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==",
  "resource_uuid": "Q1ZE77v9",
  "size_limit": 314572800
}
```

- 第二部上传文件

请求体示例

```curl
curl --location --request POST 'https://up.qbox.me' \
--form 'token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==' \
--form 'file=@/Users/lixiaohua/Desktop/untitled'
```

返回体示例

```json
{
  "hash": "Fj3GlNDc6g81Mas7UBghxXmvD-9L",
  "mime": "application/octet-stream",
  "name": "untitled",
  "size": 1184,
  "url": "https://your-host-name/project/api/project/Fj3GlNDc6g81Mas7UBghxXmvD-9L?e=1587875659&token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:w4poYi22ai0WIRKsUegMlcGQ9DI"
}
```

错误返回体示例: 重复文件

```json
{
  "error": "{\"callback_url\":\"https://your-host-name/project/api/project/res/uploadcallback\",\"callback_bodyType\":\"application/x-www-form-urlencoded\",\"callback_body\":\"hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq\\u0026type=attachment\\u0026name=text.txt\\u0026size=1826\\u0026mime=text%2Fplain\\u0026ext=.txt\\u0026exif=\\u0026width=\\u0026height=\\u0026user=6ZpgEzkk\\u0026team=BDfDqJU7\\u0026resource=4xXTySmK\\u0026end_user=\",\"callback_fetchKey\":1,\"token\":\"\",\"err_code\":614,\"error\":\"file exists\",\"hash\":\"FtUYw_aeF-p06Dd_uVmJDD1j4Utq\",\"key\":\"BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0\"}"
}
```

```json
{
  "callback_url": "https://your-host-name/project/api/project/res/uploadcallback",
  "callback_bodyType": "application/x-www-form-urlencoded",
  "callback_body": "hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq&type=attachment&name=text.txt&size=1826&mime=text%2Fplain&ext=.txt&exif=&width=&height=&user=6ZpgEzkk&team=BDfDqJU7&resource=4xXTySmK&end_user=",
  "callback_fetchKey": 1,
  "token": "",
  "err_code": 614,
  "error": "file exists",
  "hash": "FtUYw_aeF-p06Dd_uVmJDD1j4Utq",
  "key": "BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0"
}
```
