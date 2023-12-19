---
sidebar_position: 3
---

# 修改脚本属性

## 要求

| ONES      |
| :-------- |
| v3.16.18+ |

## 概述

当我们创建脚本属性后，我们可以对脚本属性做二次修改，当前可修改的是脚本属性的名称

### 能力范围

产品，工作项，项目下的单选，多选，浮点型脚本属性

## 使用

通过 OP 工具添加该能力，修改该能力相关配置，并且完成更新脚本属性方法中的业务逻辑，相关步骤如下所示。

### 第一步: 通过 OP 工具添加并使用能力

在`插件根目录`使用命令行输入 OP 命令添加能力（该指令需要 OP 工具版本 1.0 及以上）

```shell
npx op add ability
```

选中并添加`update-script-field@1.0.0`

<br />
OP 工具会询问是否使用默认值，选择是即可，OP 工具会为插件添加如下内容

在插件后端中新增文件`update-script-field.ts`

```typescript title="backend/src/script-field-float.ts"
import type {
  Relation,
  UpdateFieldGroupRequest,
  UpdateScriptFieldRequest,
} from '@ones-op/node-ability'
import { Field, FieldTypeEnum, PoolEnum, AbilityError } from '@ones-op/node-ability'
import { Logger } from '@ones-op/node-logger'
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'

export async function updateFieldName(request: PluginRequest): Promise<PluginResponse> {
  const u: UpdateScriptFieldRequest = {
    Pool: PoolEnum.Product,
    FieldUUID: 'fieldUUID',
    TeamUUID: 'teamUUID',
    Name: 'newFieldName',
  }
  try {
    const resp = await Field.UpdateScriptField(u)
  } catch (e) {
    if (e instanceof AbilityError) {
      Logger.error('err', e)
    }
  }
  return {
    body: {
      res: 'hello world',
    },
  }
}
```

**Field.UpdateScriptFieldRequest 参数介绍**

| 参数      | 类型   | 说明                                           |
| :-------- | :----- | :--------------------------------------------- |
| Pool      | string | 脚本属性所属上下文，包括产品，项目，工作项     |
| FieldUUID | string | 脚本属性UUID                                   |
| TeamUUID  | string | 属性所属团队UUID，只有当插件为组织级别时才生效 |
| Name      | string | 脚本属性新的名字                               |

### 第二步: 把函数中的逻辑修改正确即可
