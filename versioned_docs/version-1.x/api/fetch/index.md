# Fetch API

We provide a set of open platform api, which can be used directly, allowing you to use various capabilities of the plugin management page in your plugin app, such as installPlugin, exportPluginLog, etc.

## Compatibility

### Environment

|  ONES   |
| :-----: |
| v3.7.6+ |

## Install

Go to the `/web` directory and install this package with the following command:

```bash npm2yarn
npm install @ones-op/fetch
```

## Use

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

## Overview

- `@ones-op/fetch` API is written in REST style.
- `@ones-op/fetch` API distinguish usage scenarios by parameter `scene`
  - Team scene `'TEAM'`, the default scene
  - Organizing scene `'ORG'`
- `@ones-op/fetch` API other common parameters are
  - Team UUID `team`，permission checkpoint in team scene.
  - Organization UUID `organization`，permission checkpoint in organizing scene.
  - Plugin UUID `app`
  - Plugin Instance UUID `instance`

## Implementation

There is no need to pay attention to this part during the development process. Here is the implementation introduction, and developers can choose to read it.

### URI Structure

@ones-op/fetch API provides access to resources via a URI path. Use `:team` or `{}` to mark part of the URI path as part of the URI path that can be replaced with parameters. URI paths follow these rules:

```ts
http(s)://{your-host-name}/project/api/project/team/:team/{fetch-api}
```

for example:

```ts
https://my-host-name/project/api/project/team/EW5GozZh/plugin/list
https://my-host-name/project/api/project/team/EW5GozZh/plugin/config/list
```

- `{fetch-api}` is the `url` of the @ones-op/fetch API
- `/plugin/list` is the `url` of `getPluginsList`
- `/plugin/config/list` is the `url` of `getPluginConfigs`

### Request Headers

| Parameter Name   | Parameter Location | Type   | Description                                        |
| :--------------- | :----------------- | :----- | :------------------------------------------------- |
| Ones-Plugin-Id   | HTTP Headers       | string | Instance UUID of the plugin                        |
| Ones-Check-Point | HTTP Headers       | string | Permission checkpoint team/organization            |
| Ones-Check-Id    | HTTP Headers       | string | Permission checkpoint Team UUID /Organization UUID |

- `Ones-Plugin-Id` passes a fixed value in @ones-op/fetch API: `'built_in_apis'`.
- `Ones-Check-Point`passes the parameter `scene`
- `Ones-Check-Id` passes in the Team UUID or Organization UUID depends on the `scene`

for example:

```bash
--request POST 'https://my-host-name/project/api/project/team/WDRiVkKD/plugin/list'
--header 'Ones-Check-Point: team'
--header 'Ones-Check-Id: WDRiVkKD'
--header 'Ones-Plugin-Id: built_in_apis'
```

## API

### 1. uploadPlugin

- Upload plugin
- Plugin files are `.opk` files
- The return value `app`, `id` and other attributes are used as input parameters of the post-method `installPlugin`, `upgradePlugin`, `deletePlugin`
- The return value `is_upgrade` indicates whether the file is an upgrade package

#### URL

- /plugin/upload_opk

#### Parameter

| Parameter Name | Type                | Required | Default | Description                                                  |
| :------------- | :------------------ | :------- | :------ | :----------------------------------------------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios                                              |
| organization   | string              | true     |         | Organization UUID                                            |
| team           | string              | true     |         | Team UUID                                                    |
| file           | blob                | true     |         | Uploaded plugin file (.opk)                                  |
| uploadOptions  | object              | false    | {}      | Upload options, you can customize methods such as onProgress |

- Get `file` example

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

#### Response

```javascript
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

- Install plugin
- Post method of `uploadPlugin`, `uploadPlugin` returns the value `app_uuid` as the value of the method input parameter `app`

#### URL

- /plugin/install

#### Parameter

| Parameter Name | Typ e               | Required | Default | Description       |
| :------------- | :------------------ | :------- | :------ | :---------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios   |
| organization   | string              | true     |         | Organization UUID |
| team           | string              | true     |         | Team UUID         |
| app            | string              | true     |         | Plugin UUID       |

#### Response

```javascript
{
  "data": [
    {
      "apis": [],
      "package_path": "/data/app/ones-platform-api/P8065/plugin/JGpj1YSe/EW5Goz3C706E1S-9A67-4F19-9B23-FA7S32C7DB53/1.0.4/",
      "service": {
        "app_id": "3C706E1S-9A67-4F19-9B23-FA7S32C7DB53",
        "instance_id": "c7cb75c9",
        "name": "plugin name",
        "version": "1.0.4",
        "language": "golang",
        "language_version": "1.14.0",
        "host_version": "0.2.0",
        "host_sub_version": "1.14.0",
        "min_system_version": "3.2.0",
        "description": "description description description",
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

- Upgrade plugin
- Post method of `uploadPlugin`, should be called when `uploadPlugin` returns `is_upgrade` as `true`
- `uploadPlugin` returns the value `app_uuid` as the value of the method input parameter `app`

#### URL

- Team scene: /plugin/upgrade2
- Organization scene: /plugin/upgrade

#### Parameter

| Parameter Name | Type                | Required | Default | Description       |
| :------------- | :------------------ | :------- | :------ | :---------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios   |
| organization   | string              | true     |         | Organization UUID |
| team           | string              | true     |         | Team UUID         |
| app            | string              | true     |         | Plugin UUID       |

#### Response

```javascript
{
    "data": [
        {
            "apis": [
                {
                    "methods": [
                        "POST"
                    ],
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

- Delete plugin
- The pre-method `uploadPlugin` needs to be called first, and the `app_uuid`, `id` in the return value are used as the value of the method input parameters `app`, `id`

#### URL

- plugin/delete_opk

#### Parameter

| Parameter Name | Type                | Required | De fault | Description       |
| :------------- | :------------------ | :------- | :------- | :---------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'   | Usage Scenarios   |
| organization   | string              | true     |          | Organization UUID |
| team           | string              | true     |          | Team UUID         |
| app            | string              | true     |          | Plugin UUID       |
| id             | string              | true     |          | Upload file id    |

#### Response

```javascript
{
  "data": true
}
```

### 5. uninstallPlugin

- Uninstall plugin
- Plugins should be uninstalled with plugins stopped.

#### URL

- plugin/uninstall

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| app            | string              | true     |         | Plugin UUID          |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "data": true
}
```

### 6. startPlugin

- Start plugin

#### URL

- plugin/enable

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| app            | string              | true     |         | Plugin UUID          |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "data": true
}
```

### 7. stopPlugin

- Stop plugin
- The plugin can be forcibly disabled by set the `forced` parameter to `true`

#### URL

- /plugin/disable

#### Parameter

| Parameter Name | Type                | Required | Default | Description              |
| :------------- | :------------------ | :------- | :------ | :----------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  | Usage Scenarios          |
| organization   | string              | true     |         | Organization UUID        |
| team           | string              | true     |         | Team UUID                |
| app            | string              | true     |         | Plugin UUID              |
| instance       | string              | true     |         | Plugin Instance UUID     |
| forced         | boolean             | false    | false   | Whether to force disable |

#### Response

```javascript
{
  "data": true
}
```

### 8. getPluginsList

- Get a list of plugins

#### URL

- /plugin/list

#### Parameter

| Parameter Name | Type                | Required | Default | Description       |
| :------------- | :------------------ | :------- | :------ | :---------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                   |
| organization   | string              | true     |         | Organization UUID |
| team           | string              | true     |         | Team UUID         |

#### Response

```javascript
{
  "data": [
    {
      "apis": [],
      "package_path": "",
      "service": {
        "app_id": "lt1ZZuQQ",
        "instance_id": "075d18c7",
        "name": "naaaa",
        "version": "1.0.0",
        "language": "",
        "language_version": "",
        "host_version": "",
        "host_sub_version": "",
        "min_system_version": "",
        "description": "1.122233333； 2.4334434334",
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

- Get plugin information details

#### URL

- /plugin/info

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| app            | string              | true     |         | Plugin UUID          |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "uuid": "DU6krHBN",
  "email": "niuqiang@ones.com",
  "name": "nisssss",
  "name_pinyin": "hui4fei1dexi1niu2zhang3",
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

- Get the configuration item array of the plugin function configuration page
- [config](../../reference/config/plugin.yaml.mdx#config)

#### URL

- /plugin/config/list

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "data": []
}
```

### 11. getPluginAbilities

- Get the ability configuration of the plugin
- [abilities](../../reference/config/plugin.yaml.mdx#abilities)

#### URL

- /plugin/config/ability/list

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "data": null
}
```

### 12. updatePluginAbilities

- Update plugin abilities configuration
- [abilities](../../reference/config/plugin.yaml.mdx#abilities)

#### URL

- /plugin/config/ability/batch_update

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| instance       | string              | true     |         | Plugin Instance UUID |
| configs        | object              | true     |         | ability configs      |

#### Response

```javascript
{
  "uuid": "DU6krHBN",
  "email": "niuqiang@ones.com",
  "name": "flyyyyy",
  "name_pinyin": "hui4fei1dexi1niu2zhang3",
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

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| instance       | string              | true     |         | Plugin Instance UUID |
| configs        | object              | true     |         | Configuration items  |

#### Response

```javascript
{
  "uuid": "DU6krHBN",
  "email": "niuqiang@ones.com",
  "name": "会飞的犀牛长",
  "name_pinyin": "hui4fei1dexi1niu2zhang3",
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

- Get the permission point configuration of the plugin
- [permission](../../abilities/business/permission)

#### URL

- /plugin/permissioninfo/list

#### Parameter

| Parameter Name | Type                | Required | Default | Description          |
| :------------- | :------------------ | :------- | :------ | :------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                      |
| organization   | string              | true     |         | Organization UUID    |
| team           | string              | true     |         | Team UUID            |
| instance       | string              | true     |         | Plugin Instance UUID |

#### Response

```javascript
{
  "data": [
    {
      "organization_uuid": "JGrg2YSe",
      "team_uuid": "EW9GftZh",
      "instance_uuid": "428a1243",
      "permission_name": "ddddd",
      "permission_field": "manage_filter_view_push",
      "permission_id": 56378,
      "permission_desc": "ddddddddddd",
      "rule_info": []
    }
  ]
}
```

### 15. addCustomPermissionDomain

- Add the permission point configuration of the plugin
- [permission](../../abilities/business/permission)

#### URL

- /plugin/permissionrule/add

#### Parameter

| Parameter Name   | Type                | Required | Default | Description       |
| :--------------- | :------------------ | :------- | :------ | :---------------- |
| scene            | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                   |
| organization     | string              | true     |         | Organization UUID |
| team             | string              | true     |         | Team UUID         |
| permissionDomain | object              | true     |         | Permission Domain |

- permissionDomain example

```javascript
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

#### Response

```javascript
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

- Remove the permission point configuration of the plugin
- [permission](../../abilities/business/permission)

#### URL

- /plugin/permissionrule/delete

#### Parameter

| Parameter Name     | Type                | Required | Default | Description       |
| :----------------- | :------------------ | :------- | :------ | :---------------- |
| scene              | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                   |
| organization       | string              | true     |         | Organization UUID |
| team               | string              | true     |         | Team UUID         |
| permissionDomainId | string              | true     |         | Permission UUID   |

#### Response

```javascript
{
  "data": true
}
```

### 17. getPluginLog

- Preview plugin log
- A single preview log is limited to 50
- `startTime`、`endTime` need to be handled with `unix()`

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

#### Parameter

| Parameter Name | Type                | Required | Default | Description            |
| :------------- | :------------------ | :------- | :------ | :--------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                        |
| organization   | string              | true     |         | Organization UUID      |
| team           | string              | true     |         | Team UUID              |
| app            | string              | true     |         | Plugin UUID            |
| instance       | string              | true     |         | Plugin Instance UUID   |
| startTime      | number              | true     |         | Preview log start time |
| endTime        | number              | true     |         | Preview log end time   |

#### Response

```javascript
{
    "data": "{\"Level\":\"Info\",\"Role\":\"Plugin\",\"Message\":\"[Plugin] Install\",\"ErrorCode\":\"\",\"Timestamp\":1658241611,\"CauseByMessage\":\"\",\"PluginInstanceDescriptor\":{\"PluginDescriptor\":{\"PluginName\":\"nodejs-plugin-example\",\"AppID\":\"A0UTeLsW\",\"AppVersion\":\"\",\"LanguageName\":\"nodejs\",\"Languageversion\":\"16.13.0\",\"Hostsubversion\":\"1.0.0\",\"Hostversion\":\"1.0.4\",\"Minsystemversion\":\"3.5.0\"},\"InstanceId\":\"3cd2d9a3\",\"OrgId\":\"U8CBemsb\",\"TeamId\":\"37WvfbQR\"},\"HostDescriptor\":{\"HostID\":\"Host-nodejs95974\",\"Name\":\"DefaultNodeJsHost\",\"Language\":\"nodejs\",\"HostVersion\":\"1.0.8\",\"HostSubVersion\":\"1.0.0\",\"MinSystemVersion\":\"3.5.0\",\"LanguageVersion\":\"16.13.1\"},\"HostBootDescriptor\":{\"HostBootID\":\"\",\"Name\":\"\",\"Version\":\"\"},\"PlatformDescriptor\":{\"ID\":\"R0000001\",\"Name\":\"plugin-platform\",\"Version\":\"1.0.0\",\"Address\":\"0.0.0.0\"},\"Ext\":null}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:40:11\",\"Message\":\"[Plugin] Install\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:40:11\",\"Message\":\"插件 Install 钩子函数运行成功!\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:52:58\",\"Message\":\"[Plugin] Enable\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:52:58\",\"Message\":\"插件 Enable 钩子函数运行成功!\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:56:58\",\"Message\":\"[Plugin] Disable\"}\n{\"Level\":\"Info\",\"Time\":\"2022-07-19 22:56:58\",\"Message\":\"插件 Disable 钩子函数运行成功!\"}\n"
}
```

### 18. exportPluginLog

- Export plugin logs
- Response is download link
- `startTime`、`endTime` need to be handled with `unix()`

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

#### Parameter

| Parameter Name | Type                | Required | Default | Description           |
| :------------- | :------------------ | :------- | :------ | :-------------------- |
| scene          | 'TEAM' &#124; 'ORG' | false    | 'TEAM'  |                       |
| organization   | string              | true     |         | Organization UUID     |
| team           | string              | true     |         | Team UUID             |
| app            | string              | true     |         | Plugin UUID           |
| instance       | string              | true     |         | Plugin Instance UUID  |
| startTime      | number              | true     |         | Export log start time |
| endTime        | number              | true     |         | Export log end time   |

#### Response

```javascript
{
    "url": "https://mars-dev.myones.net:11200/api/project/plugin/log/download?token=PrEbytovwgYLw422MwNAEp"
}
```
