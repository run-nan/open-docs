---
sidebar_position: 11
---

# 审计日志

插件可以向系统写入审计日志

```javascript
import { AuditLog } from '@ones-op/node-ability'

const user = await AuditLog.createLog(request.headers, 'Hello')
```

效果演示

![image-20220427180716567](auditLog.png)
