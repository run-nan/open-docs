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
