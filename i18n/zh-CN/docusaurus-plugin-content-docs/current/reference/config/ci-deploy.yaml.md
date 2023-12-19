---
sidebar_position: 2
---

# ci-deploy.yaml

插件持续集成配置文件，包含了持续集成测试安装插件所需的配置信息，由脚手架工具生成，具体用法详见 [持续集成](../../guide/deploy.mdx)。

文件位置与结构：

```yaml title="/config/ci-deploy.yaml"
default:
  host: https://ones.com
  username: ci@ones.com
  password: '********'
  ones-check-id: '********'
  ones-check-point: team
  ones-plugin-id: built_in_apis
  organization_uuid: '********'
  team_uuid: '********'
```

## default

默认分支配置，`default` 能够满足大多数场景。

为了便于你后续的升级，我们不建议你在此处添加更多的分支配置，脚手架将会在 2.0 版本对此处进行优化。

:::note
当你通过脚手架相关命令输入分支参数是 `main` 或者 `master` 时，将会自动使用合并名称 `default`。
:::

### host

- **类型：**`string`

ONES 持续集成环境访问路径。

### username

- **类型：**`string`

ONES 持续集成环境登录用账号。

### password

- **类型：**`string`

ONES 持续集成环境登录用密码。

### ones-check-id

- **类型：**`string`

ONES 持续集成环境团队或组织 UUID。

:::caution
如果你当前插件是组织级别生效，请将此 UUID 修改成需要安装到的组织 UUID。
:::

### ones-check-point

- **类型：**`'team' | 'organization'`

ONES 持续集成环境 `ones-check-id` 类型。

:::caution
如果你当前插件是组织级别生效，请将此类型修改成 `organization`。
:::

### ones-plugin-id

- **类型：**`'built_in_apis'`

ONES 持续集成环境接口请求头，固定值 `built_in_apis`，请求到开放平台。

### organization_uuid

- **类型：**`string`

ONES 持续集成环境插件安装的组织 UUID。

### team_uuid

- **类型：**`string`

ONES 持续集成环境插件安装的团队 UUID。
