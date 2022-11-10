---
sidebar_position: 3
---

# Ability CustomPermission(New)

### New Feature

- Support plugin implement custom permission verification methods

### Ability Declare

1. Use the op tool to add ability

   ![image](new.jpg)

- Include the following file changes ：
  - file modify：config/plugin.yaml ability configuration is added to the file
  - file add：backend/src/custompermission.ts

2. Configure file config/plugin.yaml

```yaml
abilities:
  - id: 98b399b0-IqCW
    name: 自定义权限点
    abilityType: CustomPermission
    version: 1.0.0
    function:
      customPermissionCheckFunc: customPermissionCheck
    config:
      - key: name
        label: 权限点名称
        show: false
        value: 工作项编辑权限
      - key: field
        label: 权限点字段
        show: false
        value: task_edit_permission
      - key: desc
        label: 权限点描述
        show: false
        value: 工作项编辑权限描述
      - key: is_plugin_custom_check
        label: 插件自定义权限校验
        show: false
        value: true
```

- If is_plugin_custom_check == true :
  - Api interface：/team/:team_uuid/plugin/permissionrule/check the custom verification method of the plugin will be called(customPermissionCheckFunc)
  - Developer can implement logic in customPermissionCheckFunc

```ts
export async function customPermissionCheck(request: PluginRequest): Promise<PluginResponse> {
  Logger.info('[Plugin] customPermissionCheck ======= 请求成功')
  var body = request?.body as any
  var userUUID = body.user_uuid
  var field = body.permission_field
  var context = body.context
  Logger.info('userID:', userUUID)
  Logger.info('permission_field', field)
  Logger.info('context', context)
  //  permission check logic
  return {
    statusCode: 200,
    body: {
      code: 200,
      body: {
        is_permission: true,
      },
    },
  }
}
```
