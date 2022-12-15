---
sidebar_position: 1
---

# 插件自定义权限点 Demo 实例

### Demo 代码示例

```json
const response = await fetchONES({
    path: `/team`, //接口有url非空校验，只要headers带上AbilityName: ['ConfigList'],path不为空就可以
    method: 'GET',
    headers: {
      'Ones-Plugin-Id': ['built_in_apis'],
      'Ones-Check-Point': ['team'],
      'Ones-Check-Id': [`${globalThis.onesEnv.teamUUID}`],
      AbilityName: ['ConfigList'],
    },
    body: {
      instance_id: `${globalThis.onesEnv.instanceId}`,
      team_uuid: `${globalThis.onesEnv.teamUUID}`,
      organization_uuid: `${globalThis.onesEnv.organizationUUID}`,
    },
  });
  var data = JSON.parse(JSON.stringify(response?.body.toString()))
  var obj = JSON.parse(data)
  return {
    body: {
      content: obj[0].arg_value
    }
  };
```

### plugin.yaml 配置

```json
service:
  app_id: ykwHs6lm2342d23432
  name: nodejs-plugin-example
  version: 1.0.0
  description: 描述
  mode: org
  logo: ""
  language: nodejs
  language_version: 16.13.0
  host_version: 1.0.2
  host_sub_version: 1.0.0
  min_system_version: 3.5.0
  permission:
    -
      name: "页面编辑权限"
      field: "table_edit_permission"
      desc : "管理员可以给予用户页面的编辑权限，可查看可编辑"
    -
      name: "页面查看权限"
      field: "table_view_permission"
      desc : "管理员可以给予用户页面的查看权限，只可查看不可编辑"
```

### 功能描述

前端可调用 team/:team_uuid/plugin/permissionrule/check 接口查看用户是否有权限进行操作
