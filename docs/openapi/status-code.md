---
id: status-code
sidebar_position: 3
---

# Status Codes

The ONES REST API uses the [standard HTTP status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

The response body of the error response is structured as follows:

```
{
    "result":"xxx",
    "errorCode":"XXX",
    "errorMsg":"XXX",
}
```

- result：The result of the current request， SUCCESS | FAIL.
- errorCode：Error code.
- errorMsg：Error message.

| Error Code            | Description                        |
| --------------------- | ---------------------------------- |
| Unauthorized          | Unauthorized、Invalid access token |
| Forbidden             | Forbidden、Invalid scope           |
| BadGateway            | Gateway Service Error              |
| Internal Server Error | Internal Server Error              |
| InvalidParameter      | Invalid parameters                 |
| NotFound              | Resource Not Found、API Not Found  |
| InvalidFileExt        | Invalid file extension             |
| ConstraintViolation   | Constraint Violation               |
