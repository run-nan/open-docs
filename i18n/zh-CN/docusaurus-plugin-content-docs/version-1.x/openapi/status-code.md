---
id: status-code
sidebar_position: 3
---

# 状态码

ONES REST API 使用[标准的 HTTP 状态代码](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)。

返回错误的响应正文，响应主体的架构如下所示：

```
{
    "result":"xxx",
    "errorCode":"XXX",
    "errorMsg":"XXX",
}
```

- result：本次请求的结果， SUCCESS | FAIL
- errorCode：错误码
- errorMsg：错误信息

| 错误码                | 说明                       |
| --------------------- | -------------------------- |
| Unauthorized          | 未授权、Access token 无效  |
| Forbidden             | 禁止访问、scope 无效       |
| BadGateway            | 网关服务错误               |
| Internal Server Error | 内部服务错误               |
| InvalidParameter      | 参数不合法                 |
| NotFound              | 某项资源不存在、接口不存在 |
| InvalidFileExt        | 文件后缀不合法             |
| ConstraintViolation   | 未满足指定的约束条件       |
