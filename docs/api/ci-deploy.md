# 持续集成: ci-deploy.yaml
## 插件持续集成配置
插件项目下有持续集成配置文件，与持续集成测试有关。

```Plain Text
/config/ci-deploy.yaml
```
#### 文件功能：
ci-deploy.yaml：持续集成测试安装插件所需的配置信息，会根据不同分支安装到不同持续集成测试环境中



文件为插件的开发环境配置信息，使用 [YAML](https://yaml.org/) 语法：

```yaml
P8022.host: http://120.76.45.123/project/api/project
P8022.ones-check-id: KzQ6SQdF
P8022.ones-check-point: team
P8022.ones-plugin-id: built_in_apis
P8022.organization_uuid: 9sMifrRw
P8022.team_uuid: KzQ6SQdF
P8022.token: uClIIQ3pvRNa8PFtlhW1cyLGAp32DNOalxRzhjVQLqDYzMTUa0DsPMAA2dGeBldc
P8022.user_uuid: TkFJWvwP
default.host: https://devapi.myones.net/project/P8022
default.ones-check-id: T7YB134K
default.ones-check-point: team
default.ones-plugin-id: built_in_apis
default.organization_uuid: JGpj1YSe
default.team_uuid: T7YB134K
default.token: xx5nL8YwdrcDB6SMzaNoBaA1Xevma6qSTA41m4ewzhyk7pZz5Q4uSDlpmVyuOZNp
default.user_uuid: WhFspqKJ
```
## 配置字段解析

### 分支号.host

- 类型：`string`

该分支号所对应的持续集成环境访问路径

### 分支号.ones-check-id

- 类型：`string`

对应权限检查点,与团队id相同

### 分支号.ones-check-point

- 类型：`string`

对应权限检查点,默认team

### 分支号.ones-plugin-id

- 类型：`string`

对应后端插件的实例ID

### 分支号.organization_uuid

- 类型：`string`

该分支号所对应的持续集成环境登录用户的组织id

### 分支号.team_uuid

- 类型：`string`

该分支号所对应的持续集成环境登录用户的团队id

### 分支号.token

- 类型：`string`

该分支号所对应的持续集成环境登录用户的token

### 分支号.user_uuid

- 类型：`string`

该分支号所对应的持续集成环境登录用户的用户id