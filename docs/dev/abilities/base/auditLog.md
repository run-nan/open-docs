---
sidebar_position: 11
---

# 审计日志

## 能力描述

插件可以向系统写入审计日志

## 能力使用

```javascript
import { AuditLog } from '@ones-op/node-ability'

const user = await AuditLog.createLog(request.headers, 'Hello')
```

## 效果演示

![image-20220427180716567](auditLog.png)
