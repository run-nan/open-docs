# 插件自定义权限点Demo实例
### Demo代码示例
@todo 待前端demo完成，后端外部访问开通

### plugin.yaml配置
```yaml
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
前端可调用team/:team\_uuid/plugin/permissionrule/check接口查看用户是否有权限进行操作