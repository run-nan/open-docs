# Fetch API

我们提供了一套插件平台相关的接口，开箱即用，可以让你在插件内使用插件管理页的各种能力，如安装插件、导出插件日志等。

## 兼容性

### 环境依赖

|  ONES   |
| :-----: |
| v3.7.6+ |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/fetch
```

## 使用

```ts
import { getPluginsList } from '@ones-op/fetch'

function PluginList() {
  const team = 'your_team'
  const organization = 'your_organization'

  useEffect(() => {
    getPluginsList({
      team,
      organization,
    })
      .then(console.log)
      .catch(console.error)
  }, [])

  return <div>fetch api demo</div>
}
```

## 概述

- @ones-op/fetch API 基于 REST 风格编写。
- @ones-op/fetch API 通过参数 `scene` 区分使用场景
  - 团队场景 `scene = 'TEAM'`，为默认场景
  - 组织场景 `scene = 'ORG'`
- @ones-op/fetch API 其他常见的参数有
  - 团队唯一标志 `team`，团队场景下的权限检查点
  - 组织唯一标志 `organization`，组织场景下的权限检查点
  - 插件唯一标志 `app`
  - 插件实例唯一标志 `instance`

## 实现

开发过程中无需关注此部分，此处为实现介绍，开发者可选择性阅读

### URI 结构

@ones-op/fetch API 通过 URI 路径提供对资源的访问，使用 `:team` 或 `{}` 将 URI 路径的一部分标记为可使用参数替换的部分，URI 路径遵循以下规则：

```ts
http(s)://{your-host-name}/project/api/project/team/:team/{fetch-api}
```

例如

```ts
https://my-host-name/project/api/project/team/EW5GozZh/plugin/list
https://my-host-name/project/api/project/team/EW5GozZh/plugin/config/list
```

- `{fetch-api}` 为 @ones-op/fetch API 的 `url`
- 此处 `/plugin/list` 为 `getPluginsList` 的 `url`
- 此处 `/plugin/config/list` 为 `getPluginConfigs` 的 `url`

### 请求头说明

| 参数名           | 参数位置     | 值类型 | 描述                                     |
| :--------------- | :----------- | :----- | :--------------------------------------- |
| Ones-Plugin-Id   | HTTP Headers | string | 对应后端插件的实例 ID                    |
| Ones-Check-Point | HTTP Headers | string | 对应权限检查点 team/organization         |
| Ones-Check-Id    | HTTP Headers | string | 对应权限检查点 teamUUID/organizationUUID |

- Ones-Plugin-Id 在 @ones-op/fetch API 中传入固定值：`'built_in_apis'`。
- Ones-Check-Point 的值为接口的参数 `scene`
- Ones-Check-Id 的值为不同 `scene` 下对应的唯一标志

例如

```bash
--request POST 'https://my-host-name/project/api/project/team/WDRiVkKD/plugin/list'
--header 'Ones-Check-Point: team'
--header 'Ones-Check-Id: WDRiVkKD'
--header 'Ones-Plugin-Id: built_in_apis'
```

## API

### 1. uploadPlugin

- 上传插件文件
- 插件文件为 `.opk` 文件
- 返回值中的 `app`、`id` 等属性用于后置方法 `installPlugin`、`upgradePlugin`、`deletePlugin` 的入参
- 返回值中的 `is_upgrade` 表示是否为升级包

#### URL

- /plugin/upload_opk

#### 参数列表

| 参数名        | 类型                | 必填  | 默认值 | 说明                                     |
| ------------- | ------------------- | ----- | ------ | ---------------------------------------- |
| scene         | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景                             |
| organization  | string              | true  |        | 组织唯一标识                             |
| team          | string              | true  |        | 团队唯一标识                             |
| file          | blob                | true  |        | 上传的插件文件（.opk）                   |
| uploadOptions | object              | false | {}     | 上传插件参数，可自定义 onProgress 等方法 |

- 获取 `file` 文件结构案例

```typescript
import { get } from 'lodash-es'

const input = (
  <div>
    <input
      type="file"
      accept=".opk"
      onChange={(e) => {
        const file = get(e, ['target', 'files', 0])
        uploadPlugin({ organization, team, file })
      }}
    />
  </div>
)
```

#### 返回参数参考

```json
{
  "data": {
    "id": 1,
    "create_time": 1656558473,
    "update_time": 0,
    "deleted": false,
    "org_uuid": "JGpj1YSe",
    "team_uuid": "EW5GozZh",
    "app_uuid": "lt1ZZuQQ",
    "name": "plugin.opk",
    "size": 0,
    "path": "/data/app/ones-platform-api/P8065/plugin/JGlk1YSp/EW5GocZh/lt2ZZtQQ/1.0.0/",
    "version": "1.0.0",
    "executable_file_path": "",
    "config_file_path": "",
    "web_file_path": "",
    "icon": "",
    "new_version": "",
    "is_upgrade": false
  }
}
```

### 2. installPlugin

- 安装插件
- `uploadPlugin` 的后置方法，`uploadPlugin` 返回值中的 `app_uuid` 作为该方法入参 `app` 的值

#### URL

- /plugin/install

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明         |
| ------------ | ------------------- | ----- | ------ | ------------ |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景 |
| organization | string              | true  |        | 组织唯一标识 |
| team         | string              | true  |        | 团队唯一标识 |
| app          | string              | true  |        | 插件唯一标识 |

#### 返回值参考

```json
{
  "data": [
    {
      "apis": [],
      "package_path": "/data/app/ones-platform-api/P8065/plugin/JGpj1YSe/EW5Goz3C706E1S-9A67-4F19-9B23-FA7S32C7DB53/1.0.4/",
      "service": {
        "app_id": "3C706E1S-9A67-4F19-9B23-FA7S32C7DB53",
        "instance_id": "c7cb75c9",
        "name": "Plugin Name",
        "version": "1.0.4",
        "language": "golang",
        "language_version": "1.14.0",
        "host_version": "0.2.0",
        "host_sub_version": "1.14.0",
        "min_system_version": "3.2.0",
        "description": "This is description of the plugin.",
        "contact": "",
        "status": 0,
        "org_uuid": "JGpj2YSq",
        "team_uuid": "EW9GozZh",
        "config": null,
        "auth": null,
        "permission": [],
        "path": "",
        "icon": ""
      },
      "modules": null,
      "abilities": []
    }
  ]
}
```

### 3. upgradePlugin

- 升级插件
- `uploadPlugin` 的后置方法，应当在 `uploadPlugin` 返回值的 `is_upgrade` 为 `true` 的情况下调用
- `uploadPlugin` 返回值中的 `app_uuid` 作为该方法入参 `app`的值

#### URL

- team 场景下： /plugin/upgrade2
- organization 场景下：/plugin/upgrade

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明         |
| ------------ | ------------------- | ----- | ------ | ------------ |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景 |
| organization | string              | true  |        | 组织唯一标识 |
| team         | string              | true  |        | 团队唯一标识 |
| app          | string              | true  |        | 插件唯一标识 |

#### 返回值参考

```json
{
  "data": [
    {
      "apis": [
        {
          "methods": ["POST"],
          "url": "/hello",
          "type": "addition",
          "function": "hello",
          "team_uuid": "37WvfbQR",
          "scope": ""
        }
      ],
      "package_path": "/data/plugin/upload/U8CBemsb/37WvfbQR/B1UTeLsW/1.0.2/",
      "service": {
        "app_id": "B1UTeLsW",
        "instance_id": "c6a7081a",
        "name": "Fetch",
        "version": "1.0.2",
        "language": "nodejs",
        "language_version": "16.13.0",
        "host_version": "1.0.4",
        "host_sub_version": "1.0.0",
        "min_system_version": "3.5.0",
        "description": "Fetch api test 1.0.1",
        "contact": "",
        "status": 0,
        "org_uuid": "U8CBemsb",
        "team_uuid": "37WvfbQR",
        "config": null,
        "auth": null,
        "permission": null,
        "path": "",
        "icon": ""
      },
      "modules": [
        {
          "entry": "modules/ones-workspace-new-uu1d/index.html",
          "id": "ones-workspace-new-uu1d",
          "moduleType": "ones:workspace:new",
          "title": "upload"
        }
      ],
      "abilities": []
    }
  ]
}
```

### 4. deletePlugin

- 删除插件
- 需要先调用前置方法 `uploadPlugin`，其返回值中的 `app_uuid`、`id` 作为该方法入参 `app`、`id` 的值

#### URL

- plugin/delete_opk

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| id           | string              | true  |        | 上传插件唯一标识 |

#### 返回值参考

```json
{
  "data": true
}
```

### 5. uninstallPlugin

- 卸载插件
- 应当在插件停用状态下卸载插件

#### URL

- plugin/uninstall

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场       |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "data": true
}
```

### 6. startPlugin

- 启动插件

#### URL

- plugin/enable

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "data": true
}
```

### 7. stopPlugin

- 停用插件
- 可通过配置参数 `forced` 为 `true`参数对插件进行强制停用

#### URL

- /plugin/disable

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |
| forced       | boolean             | false | false  | 是否强制停用     |

#### 返回值参考

```json
{
  "data": true
}
```

### 8. getPluginsList

- 获取插件列表

#### URL

- /plugin/list

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明         |
| ------------ | ------------------- | ----- | ------ | ------------ |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场   |
| organization | string              | true  |        | 组织唯一标识 |
| team         | string              | true  |        | 团队唯一标识 |

#### 返回值参考

```json
{
  "data": [
    {
      "apis": [],
      "package_path": "",
      "service": {
        "app_id": "lt1ZZuQQ",
        "instance_id": "075d18c7",
        "name": "Plugin Name",
        "version": "1.0.0",
        "language": "",
        "language_version": "",
        "host_version": "",
        "host_sub_version": "",
        "min_system_version": "",
        "description": "",
        "contact": "",
        "status": 2,
        "org_uuid": "JGpj1YSe",
        "team_uuid": "EW5GozZh",
        "config": null,
        "auth": null,
        "permission": null,
        "path": "/JGpj1YSe/EW5GozZh/lt1ZZuQQ/1.0.0/",
        "icon": "/plugin/JGpj1YSe/EW5GozZh/lt1ZZuQQ/1.0.0/logo.svg"
      },
      "modules": [],
      "abilities": []
    }
  ]
}
```

### 9. getPluginDetail

- 获取插件信息详情

#### URL

- /plugin/info

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "uuid": "DU6krHBN",
  "email": "Ruddy@ones.com",
  "name": "Ruddy",
  "name_pinyin": "Ruddy",
  "title": "",
  "avatar": "",
  "phone": "",
  "create_time": 1565770697227728,
  "access_time": 0,
  "status": 1,
  "org_uuid": "AbsatFo2"
}
```

### 10. getPluginConfigs

- 获取插件功能配置页的配置项数组
- [详见文档 config 部分](../../reference/config/plugin.yaml.mdx#config)

#### URL

- /plugin/config/list

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "data": []
}
```

### 11. getPluginAbilities

- 获取插件的能力配置
- [详见 abilities 文档](../../reference/config/plugin.yaml.mdx/#abilities)

#### URL

- /plugin/config/ability/list

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "data": null
}
```

### 12. updatePluginAbilities

- 更新插件的能力配置
- [详见 abilities 文档](../../reference/config/plugin.yaml.mdx/#abilities)

#### URL

- /plugin/config/ability/batch_update

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |
| configs      | object              | true  |        | 插件能力配置     |

#### 返回值参考

```json
{
  "uuid": "DU6krHBN",
  "email": "Ruddy@ones.com",
  "name": "Ruddy",
  "name_pinyin": "Ruddy",
  "title": "",
  "avatar": "",
  "phone": "",
  "create_time": 1565770697227728,
  "access_time": 0,
  "status": 1,
  "org_uuid": "AbsatFo2"
}
```

### 13. batchUpdatePluginConfig

- 批量更新插件配置
- [详见文档 config 部分](../../reference/config/plugin.yaml.mdx#config)

#### URL

- /plugin/config/batch_update

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明                   |
| ------------ | ------------------- | ----- | ------ | ---------------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景           |
| organization | string              | true  |        | 组织唯一标识           |
| team         | string              | true  |        | 团队唯一标识           |
| instance     | string              | true  |        | 插件实例唯一标识       |
| configs      | object              | true  |        | 插件功能配置页的配置项 |

#### 返回值参考

```json
{
  "uuid": "DU6krHBN",
  "email": "Ruddy@ones.com",
  "name": "Ruddy",
  "name_pinyin": "Ruddy",
  "title": "",
  "avatar": "",
  "phone": "",
  "create_time": 1565770697227728,
  "access_time": 0,
  "status": 1,
  "org_uuid": "AbsatFo2"
}
```

### 14. getCustomPermissions

- 获取插件的权限点配置
- [详见文档 permission 部分](../../abilities/business/permission)

#### URL

- /plugin/permissioninfo/list

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |

#### 返回值参考

```json
{
  "data": [
    {
      "organization_uuid": "JGrg2YSe",
      "team_uuid": "EW9GftZh",
      "instance_uuid": "428a1243",
      "permission_name": "Plugin Permission",
      "permission_field": "manage_filter_view_push",
      "permission_id": 56378,
      "permission_desc": "the follow members has layout permission.",
      "rule_info": []
    }
  ]
}
```

### 15. addCustomPermissionDomain

- 添加插件的权限点配置
- [详见文档 permission 部分](../../abilities/business/permission)

#### URL

- /plugin/permissionrule/add

#### 参数列表

| 参数名           | 类型                | 必填  | 默认值 | 说明             |
| ---------------- | ------------------- | ----- | ------ | ---------------- |
| scene            | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization     | string              | true  |        | 组织唯一标识     |
| team             | string              | true  |        | 团队唯一标识     |
| permissionDomain | object              | true  |        | 权限点配置作用域 |

- permissionDomain 案例

```json
{
  "permissionDomain": {
    "context_type": "plugin",
    "context_param": {
      "plugin_uuid": "4d2eb3c0"
    },
    "permission": 57459,
    "user_domain_type": "single_user",
    "user_domain_param": "7BnuPj7S"
  }
}
```

#### 返回值参考

```json
{
  "data": {
    "id": 1,
    "create_time": 1656562042,
    "update_time": 1656562042,
    "deleted": false,
    "org_uuid": "JGpj1YSe",
    "team_uuid": "EW5GozZh",
    "permission_id": 56378,
    "context_type": 5001,
    "context_param_1": "428a0758",
    "context_param_2": "",
    "user_domain_type": 10,
    "user_domain_param": "WhFspqKJ",
    "position": 0
  }
}
```

### 16. removeCustomPermissionDomain

- 删除插件的权限点配置
- [详见文档 permission 部分](../../abilities/business/permission)

#### URL

- /plugin/permissionrule/delete

#### 参数列表

| 参数名             | 类型                | 必填  | 默认值 | 说明                |
| ------------------ | ------------------- | ----- | ------ | ------------------- |
| scene              | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景        |
| organization       | string              | true  |        | 组织唯一标识        |
| team               | string              | true  |        | 团队唯一标识        |
| permissionDomainId | string              | true  |        | permission 唯一标识 |

#### 返回值参考

```json
{
  "data": true
}
```

### 17. getPluginLog

- 预览插件日志
- 单次预览日志上限为 50 条
- `startTime`、`endTime` 的时间戳需要用 `unix()` 处理

```typescript
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'

const start: Dayjs = dayjs().subtract(6, 'day')
const end: Dayjs = dayjs()

getPluginLog({
  // ...
  startTime: start.unix(),
  endTime: end.unix(),
})
```

#### URL

- /plugin/log/preview

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |
| startTime    | number              | true  |        | 预览日志开始时间 |
| endTime      | number              | true  |        | 预览日志结束时间 |

#### 返回值参考

```json
{
  "data": "{\"Level\":\"Info\",\"Role\":\"Plugin\",\"Message\":\"[Plugin] Install\",\"ErrorCode\":\"\",\"Timestamp\":1658241611,\"CauseByMessage\":\"\",\"PluginInstanceDescriptor\":{\"PluginDescriptor\":{\"PluginName\":\"nodejs-plugin-example\",\"AppID\":\"A0UTeLsW\",\"AppVersion\":\"\",\"LanguageName\":\"nodejs\",\"Languageversion\":\"16.13.0\",\"Hostsubversion\":\"1.0.0\",\"Hostversion\":\"1.0.4\",\"Minsystemversion\":\"3.5.0\"},\"InstanceId\":\"3cd2d9a3\",\"OrgId\":\"U8CBemsb\",\"TeamId\":\"37WvfbQR\"},\"HostDescriptor\":{\"HostID\":\"Host-nodejs95974\",\"Name\":\"DefaultNodeJsHost\",\"Language\":\"nodejs\",\"HostVersion\":\"1.0.8\",\"HostSubVersion\":\"1.0.0\",\"MinSystemVersion\":\"3.5.0\",\"LanguageVersion\":\"16.13.1\"},\"HostBootDescriptor\":{\"HostBootID\":\"\",\"Name\":\"\",\"Version\":\"\"},\"PlatformDescriptor\":{\"ID\":\"R0000001\",\"Name\":\"plugin-platform\",\"Version\":\"1.0.0\",\"Address\":\"0.0.0.0\"},\"Ext\":null}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:40:11\",\"Message\":\"[Plugin] Install\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:40:11\",\"Message\":\"Plugin Install callback success!\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:52:58\",\"Message\":\"[Plugin] Enable\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:52:58\",\"Message\":\"Plugin Enable callback success!\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:56:58\",\"Message\":\"[Plugin] Disable\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:56:58\",\"Message\":\"Plugin Disable callback success!\"}\n"
}
```

### 18. exportPluginLog

- 导出插件日志
- 返回值为日志的下载链接
- `startTime`、`endTime` 的时间戳需要用 `unix()` 处理

```typescript
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'

const start: Dayjs = dayjs().subtract(6, 'day')
const end: Dayjs = dayjs()

getPluginLog({
  // ...
  startTime: start.unix(),
  endTime: end.unix(),
})
```

#### URL

- /plugin/log/export

#### 参数列表

| 参数名       | 类型                | 必填  | 默认值 | 说明             |
| ------------ | ------------------- | ----- | ------ | ---------------- |
| scene        | 'TEAM' &#124; 'ORG' | false | 'TEAM' | 接口使用场景     |
| organization | string              | true  |        | 组织唯一标识     |
| team         | string              | true  |        | 团队唯一标识     |
| app          | string              | true  |        | 插件唯一标识     |
| instance     | string              | true  |        | 插件实例唯一标识 |
| startTime    | number              | true  |        | 导出日志开始时间 |
| endTime      | number              | true  |        | 导出日志结束时间 |

#### 返回值参考函数运行成功

```json
{
  "url": "https://mars-dev.myones.net:11200/api/project/plugin/log/download?token=PrEbytovwgYLw422MwNAEp"
}
```
