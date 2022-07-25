---
sidebar_position: 5
---

# 在持续集成中调试插件

> 持续集成视频教程: [插件持续集成测试](../examples/videos/ci.mdx)

## 通过 Gitlab CI 自动安装插件到目标环境

当插件代码托管在 Gitlab 上，且进行了相关的配置时，本地代码一旦提交，便会触发 Gitlab 的流水线。

流水线会将插件打包并安装到配置的目标环境中：

![ONES Open Platform - CI](images/ONES%20Open%20Platform%20-%20CI.png)

### 前置条件

- Gitlab 上已经配置了流水线，如果你使用的是 [https://gitlab.plugins.myones.net/](https://gitlab.plugins.myones.net/) 来托管插件代码，则无需额外配置；
- 正确配置了项目文件夹中的 `/config/ci-deploy.yaml` 文件，详见下文。

### 配置 ci-deploy.yaml

开发者需要在项目根目录下分别通过以下指令为特定分支进行配置设置：

```
# Step 1
# When step 1 done will prompt execute 'npx op pickteam ci'
npx op ci

# Step 2
# You can learn more about 'pickteam' command by executing 'npx op help local'
npx op pickteam ci
```

```bash
➜ npx op ci
? Branch name: master
? Please enter the environment base URL: http://120.76.45.123
? Username: test1@ones.ai
? Password: [hidden]
  ✔ Converting CI deployment params
  ✔ Validating CI deployment params
  ✔ Updating configuration into config/ci-deploy.yaml
✔ Successfully updated CI deployment configuration
Now you can commit your changes to the remote repository and deploy your project
? Do you want to execute 'npx op pickteam' for update team information into config file? (Y/n)
```

```raw
➜ npx op pickteam ci
? Pick the team below to update information into the config file: (Use arrow keys)
❯ TEAM A (RPWfqknE)
  TEAM B (Q8ecrHks)
  TEAM C (QCiUKNE7)
(Move up and down to reveal more choices)

? Pick the team below to update information into the config file: TEAM A (RPWfqknE)
✔ Successfully updated team information for local configuration.
```

`ci` 与 `pickteam ci` 指令执行完登录操作后会将「用户凭证」与「团队信息」写入工程下的 `config/ci-deploy.yaml` 文件中。

```yaml title="/config/ci-deploy.yaml"
default:
  host: http://120.76.45.123
  username: test1@ones.ai
  password: ibJDTEf7PET1
  ones-check-id: RPWfqknE
  ones-check-point: team
  ones-plugin-id: built_in_apis
  organization_uuid: 5N6W3noj
  team_uuid: RPWfqknE
```

### 凭证信息脱敏

`/config/ci-deploy.yaml` 文件中会明文存储用户凭证。

在不便于明文存储凭证的场景下，开发者可以将用户凭证添加至 「[CI/CD variable](https://gitlab.plugins.myones.net/help/ci/variables/index.md#add-a-cicd-variable-to-a-project)」

以 Gitlab 添加 CI/CD 变量为例：

![Add Gitlab CI/CD variable](images/Gitlab%20CI%3ACD%20variable.png)

:::caution 注意

`Gitlab CI/CD Variable` 配置的 `Key` 必须为 `username` 和 `password`

:::

随后编辑 `/config/ci-deploy.yaml` 的 `username` 和 `password` 字段，使用以下占位符替换着两个字段的值：

- **${username}**
- **${password}**

```yaml title="/config/ci-deploy.yaml"
default:
  host: http://120.76.45.123
  username: ${username}
  password: ${password}
  ones-check-id: RPWfqknE
  ones-check-point: team
  ones-plugin-id: built_in_apis
  organization_uuid: 5N6W3noj
  team_uuid: RPWfqknE
```

随后开发者可以通过 `git push` 将本地配置文件的更改推送到远端触发构建：

![Gitlab CI piping](images/Gitlab%20CI%20piping.png)

### 关于分支

1. 配置文件中包含 **default** 开头的配置，这是在其它配置不生效时的默认配置；
2. 在为以下分支进行配置设置时会自动将分支名转换为 **default**
   - **master**
   - **main**
3. 可以配置其它分支号开头的配置组，当本体提交代码的分支命中配置时，流水线将基于此分支的配置，将分支代码打包并部署到持续集成环境；
4. 这是为了让多个插件开发人员在同一个插件仓库进行开发，或者某个插件升级过程中的分支开发时，其各自的分支相互独立；
