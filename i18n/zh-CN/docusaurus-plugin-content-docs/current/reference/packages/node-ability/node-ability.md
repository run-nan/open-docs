---
toc_max_heading_level: 4
---

# @ones-op/node-ability

我们提供了一套接口请求库，允许插件开发者调用插件的基础能力。

## 要求

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### getLanguage

获取用户语言

#### Params

| 参数      | 说明      | 类型   | 必填 | 默认值 |
| :-------- | :-------- | :----- | :--- | :----- |
| user_uuid | 用户 uuid | string | 是   | -      |

#### Returns

| 参数     | 说明         | 类型   |
| :------- | :----------- | :----- |
| language | 用户语言种类 | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

---

### getLanguageString

获取指定语言的对应内容

#### Params

| 参数     | 说明           | 类型   | 必填 | 默认值 |
| :------- | :------------- | :----- | :--- | :----- |
| language | 语言种类       | string | 是   | -      |
| key      | 想要获取的字段 | string | 是   | -      |

#### Returns

| 参数  | 说明                   | 类型   |
| :---- | :--------------------- | :----- |
| value | key 在该语言下对应的值 | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const description = await Language.getLanguageString(language, 'PluginDescription')
}
```

---

### downloadFile

下载插件存储空间 `workspace` 内的文件

- ONES 要求：`v3.11.0+`

#### Params

| 参数           | 说明     | 类型   | 必填 | 默认值  |
| :------------- | :------- | :----- | :--- | :------ |
| filePath       | 文件路径 | string | 是   | -       |
| timeoutSeconds | 有效时间 | number | 否   | 300(秒) |

#### Returns

| 参数 | 说明         | 类型   |
| :--- | :----------- | :----- |
| url  | 文件下载链接 | string |

#### Example

```typescript
import { downloadFile } from '@ones-op/node-ability'

export async function downloadUrl() {
  const url = await downloadFile('plugin.sql')

  return url
}
```

---

### uploadFile

上传文件至插件存储空间 `workspace`

- ONES 要求：`v3.11.40+`

#### Params

| 参数           | 说明                         | 类型   | 必填 | 默认值   |
| :------------- | :--------------------------- | :----- | :--- | :------- |
| filePath       | 想要上传到的插件存储空间目录 | string | 否   | -        |
| timeoutSeconds | 有效时间                     | number | 否   | 3600(秒) |

#### Returns

| 参数 | 说明         | 类型   |
| :--- | :----------- | :----- |
| url  | 文件上传链接 | string |

#### Example

```typescript
import { uploadFile } from '@ones-op/node-ability'

export async function uploadFileToPlugin(request: PluginRequest): Promise<PluginResponse> {
  const url = await uploadFile()

  return {
    body: {
      res: url,
    },
  }
}
```

---

### createLog

生成插件审计日志

#### Params

| 参数    | 说明                         | 类型                   | 必填 | 默认值 |
| :------ | :--------------------------- | :--------------------- | :--- | :----- |
| headers | 需包含操作人 uuid 及 ip 地址 | Record<string, string> | 是   | -      |
| message | 审计日志信息                 | string                 | 是   | -      |

#### Returns

| 参数 | 说明     | 类型                |
| :--- | :------- | :------------------ |
| res  | 操作结果 | Record<string, any> |

#### Example

```typescript
import { getAbilityConfig } from '@ones-op/node-ability'

const response = await getAbilityConfig()
```

---

### getAbilityConfig

获取能力配置信息

#### 要求

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| 待发布   | 待发布                    |

#### Params

| 参数      | 说明    | 类型   | 必填 | 默认值 |
| :-------- | :------ | :----- | :--- | :----- |
| abilityID | 能力 id | string | 否   | -      |

#### Returns

| 参数     | 说明         | 类型                |
| :------- | :----------- | :------------------ |
| response | 能力配置信息 | Record<string, any> |

#### Example

```typescript
import { getAbilityConfig } from '@ones-op/node-ability'

const response = await getAbilityConfig()
```

---

### addRepos

新增代码仓

- 可用：`v0.4.0+`
- ONES 要求：`v3.13.9+`

#### Params

| 参数     | 说明                                              | 类型                    | 必填 | 取值范围     |
| :------- | :------------------------------------------------ | :---------------------- | :--- | :----------- |
| toolUUID | 关联代码仓方式 UUID                               | string                  | 是   | len=8        |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string                  | 否   | len=8        |
| list     | 新增关联代码仓列表                                | [RepoInfo](#RepoInfo)[] | 是   | 0<=size<=100 |

##### RepoInfo {#RepoInfo}

| 参数              | 说明                                                                              | 类型   | 必填 | 取值范围 |
| :---------------- | :-------------------------------------------------------------------------------- | :----- | :--- | :------- |
| userUUID          | 关联代码仓操作人员 UUID（可以从插槽提供的获取用户方法获取）                       | string | 是   | len=8    |
| uri               | 关联代码仓 URI（举例https://github.com/nodejs/node为https://github.com)           | string | 是   | len<=100 |
| namespace         | 命名空间（举例https://github.com/nodejs/node为Node.js)                            | string | 是   | len<=256 |
| name              | 仓库名称（举例https://github.com/nodejs/node为node)                               | string | 是   | len<=256 |
| certificationType | 认证方式，只用于代码仓列表页面展示（枚举值：OAUTH、PASSWORD、TOKEN、NONE、OTHER） | enum   | 是   | -        |

#### Returns

##### BatchRepoResponse

| 参数         | 说明                   | 类型                            | 必填 |
| :----------- | :--------------------- | :------------------------------ | :--- |
| successCount | 关联代码仓成功数量     | int                             | 是   |
| failureCount | 关联代码仓失败数量     | int                             | 是   |
| Responses    | 关联代码仓详细信息列表 | [RepoResponse](#RepoResponse)[] | 是   |

##### RepoResponse {#RepoResponse}

| 参数      | 说明               | 类型    | 必填 |
| :-------- | :----------------- | :------ | :--- |
| success   | 是否关联成功       | boolean | 是   |
| uri       | 关联代码仓 URI     | string  | 是   |
| namespace | 命名空间           | string  | 是   |
| name      | 仓库名称           | string  | 是   |
| repoUUID  | 代码仓 UUID        | string  | 是   |
| error     | 关联失败时错误描述 | string  | 否   |

#### Example

```javascript
import {
  addRepos
} from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
const batchResponse = await addRepos(toolUUID, list);
```

---

### queryRepo

查询已关联的单个代码仓。

- 可用：`v0.4.0+`
- ONES 要求：`v3.13.9+`

#### Params

| 参数      | 说明                                              | 类型   | 必填 | 取值范围 |
| :-------- | :------------------------------------------------ | :----- | :--- | :------- |
| teamUUID  | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string | 否   | len=8    |
| toolUUID  | 关联代码仓方式 UUID                               | string | 是   | len=8    |
| uri       | 关联代码仓 URI                                    | string | 是   | len<=100 |
| namespace | 代码仓命名空间                                    | string | 是   | len<=256 |
| name      | 代码仓名称                                        | string | 是   | len<=256 |

#### Returns

| 参数              | 说明                                                    | 类型   | 必填 |
| :---------------- | :------------------------------------------------------ | :----- | :--- |
| repoUUID          | 关联代码仓 UUID                                         | string | 是   |
| userUUID          | 关联操作人员 UUID                                       | string | 是   |
| uri               | 关联代码仓 URI                                          | string | 是   |
| namespace         | 关联代码仓命名空间                                      | string | 是   |
| name              | 关联代码仓名称                                          | string | 是   |
| certificationType | 认证方式（枚举值：oauth、password、token、none、other） | enum   | 是   |

#### Example

```typescript
import { queryRepo } from '@ones-op/node-ability'

const toolUUID = 'xxx'
const uri = 'xxx'
const namespace = 'xxx'
const name = 'xxx'
const repoInfo = await queryRepo(toolUUID, uri, namespace, name)
```

---

### queryRepos

查询已关联的所有代码仓

- 可用：`v0.4.0+`
- ONES 要求：`v3.13.9+`

#### Params

| 参数     | 说明                                              | 类型   | 必填 | 取值范围 |
| :------- | :------------------------------------------------ | :----- | :--- | :------- |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string | 否   | len=8    |
| toolUUID | 关联代码仓方式 UUID                               | string | 是   | len=8    |

#### Returns

##### RepoInfo[]

| 参数              | 说明                                                    | 类型   | 必填 |
| :---------------- | :------------------------------------------------------ | :----- | :--- |
| repoUUID          | 关联代码仓 UUID                                         | string | 是   |
| userUUID          | 关联操作人员 UUID                                       | string | 是   |
| uri               | 关联代码仓 URI                                          | string | 是   |
| namespace         | 关联代码仓命名空间                                      | string | 是   |
| name              | 关联代码仓仓库名称                                      | string | 是   |
| certificationType | 认证方式（枚举值：oauth、password、token、none、other） | enum   | 是   |

#### Example

```typescript
import { queryRepos } from '@ones-op/node-ability'

const toolUUID = 'xxx'
const repoInfos = await queryRepos(toolUUID)
```

---

### addRepoCommits

新增代码仓提交 commit

- 可用：`v0.4.0+`
- ONES 要求：`v3.13.9+`

#### Params

| 参数     | 说明                                          | 类型                        | 必填 | 取值范围     |
| :------- | :-------------------------------------------- | :-------------------------- | :--- | :----------- |
| toolUUID | 关联代码仓方式 UUID                           | string                      | 是   | len=8        |
| repoUUID | 代码仓 UUID                                   | string                      | 是   | len=8        |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插必填） | string                      | 否   | len=8        |
| list     | 代码仓 commit 列表                            | [RepoCommit](#RepoCommit)[] | 是   | 0<=size<=100 |

##### RepoCommit {#RepoCommit}

| 参数           | 说明                      | 类型   | 必填 | 取值范围       |
| :------------- | :------------------------ | :----- | :--- | :------------- |
| hash           | commit 唯一标识           | string | 是   | len<=48        |
| author         | commit 作者名称           | string | 是   | len<=128       |
| message        | commit 描述               | string | 是   | -              |
| branch         | commit 提交分支           | string | 是   | len<=128       |
| url            | commit 可访问的 web url   | string | 是   | len<=2048      |
| createAt       | commit 时间戳（单位：秒） | int64  | 是   | min=1          |
| statsTotal     | 统计影响行总数            | int64  | 否   | max=2147483647 |
| statsAdditions | 统计添加影响行总数        | int64  | 否   | max=2147483647 |
| statsDeletions | 统计删除影响行总数        | int64  | 否   | max=2147483647 |

#### Example

```typescript
import { addRepoCommits } from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const repoUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
await addRepoCommits(toolUUID, repoUUID, list)
```

---

### addRepoPullRequest

新增代码仓合并请求 pull request（支持新增和更新）

- 可用：`v0.4.0+`
- ONES 要求：`v3.13.9+`

#### Params

| 参数     | 说明                                              | 类型                                | 必填 | 取值范围 |
| :------- | :------------------------------------------------ | :---------------------------------- | :--- | :------- |
| toolUUID | 关联代码仓方式 UUID                               | string                              | 是   | len=8    |
| repoUUID | 代码仓 UUID                                       | string                              | 是   | len=8    |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string                              | 否   | len=8    |
| pr       | 代码仓 pull request 信息                          | [RepoPullRequest](#RepoPullRequest) | 是   | -        |

##### RepoPullRequest {#RepoPullRequest}

| 参数       | 说明                                                 | 类型         | 必填 | 取值范围       |
| :--------- | :--------------------------------------------------- | :----------- | :--- | :------------- |
| number     | pr 编号（pr 唯一标识）                               | number       | 是   | max=2147483647 |
| action     | pr 动作（枚举值：UPDATE、CLOSE、ADD、REOPEN、MERGE） | enum         | 是   | -              |
| author     | pr 作者名称                                          | string       | 是   | len<=128       |
| title      | pr 标题                                              | string       | 是   | len<=256       |
| url        | pr 可访问的 web url                                  | string       | 是   | len<=1024      |
| fromBranch | pr 源分支                                            | string       | 是   | len<=128       |
| toBranch   | pr 目标分支                                          | string       | 是   | len<=128       |
| createAt   | pr 创建时间戳（单位：秒）                            | int64        | 是   | min=1          |
| state      | pr 状态（枚举值：OPEN、MERGED、CLOSED）              | enum         | 是   | -              |
| reviewers  | pr 审核人员名称列表                                  | string array | 否   | len<=1024      |
| updateAt   | pr 最后更新时间戳（单位：秒）                        | int64        | 否   | min=1          |
| updateUser | pr 最后更新用户名称                                  | string       | 否   | len<=128       |

#### Example

```typescript
import { addRepoPullRequest } from '@ones-op/node-ability'

const toolUUID: string = 'xxx'
const repoUUID: string = 'xxx'
const pullRequest: RepoPullRequest = '{...}'
await addRepoPullRequest(toolUUID, repoUUID, pullRequest)
```

---

### Notify {#Notify}

向特定用户发送第三方的通知信息。

#### Params

| **参数**    | **说明**                                                                                                                                                                    | **类型**       | **必填** | **默认值** |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------- | :--------- |
| Title       | 信息标题                                                                                                                                                                    | string         | 是       | -          |
| ToUsers     | 接收通知的用户数组                                                                                                                                                          | string[]       | 是       | -          |
| NotifyWay   | 通知类型，可选值：<br />- 邮件: NotifyWay. Email<br />- 飞书: NotifyWay. Lark<br />- 有度: NotifyWay. YouDu<br />- 微信: NotifyWay. WeChat<br />- 钉钉: NotifyWay. DingDing | NotifyWay      | 是       | -          |
| MessageBody | 消息体数组，每个消息体中包含：<br />- Body: 通知内容<br />- url：通知的跳转链接                                                                                             | IMessageBody[] | 是       | -          |
| Ext         | 拓展字段                                                                                                                                                                    | string         | 是       | -          |
| Source      | 消息来源，供记录使用                                                                                                                                                        | string         | 是       | -          |

#### Example

```typescript
import { Notify, NotifyWay } from '@ones-op/node-ability'

export async function sendEmail(request: PluginRequest): Promise<PluginResponse> {
  const { user_uuid } = request?.body as any
  if (!user_uuid) {
    return {
      body: {
        error: 'Missing parameters user_uuid',
      },
    }
  }
  const NotifyRes = await Notify({
    Title: 'Test',
    ToUsers: [user_uuid],
    NotifyWay: NotifyWay.Email,
    MessageBody: [
      {
        Body: 'Email sending test',
        Url: 'https://ones.cn/',
      },
    ],
    Ext: 'ext string',
    Source: 'source string',
  })
  return {
    body: {
      NotifyRes: NotifyRes,
      data: 'success',
    },
  }
}
```

---

### Plugin.getPluginUser {#getPluginUser}

获取插件超级用户的信息

#### Params

| **参数** | **说明**      | **类型** | **必填** | **默认值** |
| :------- | :------------ | :------- | :------- | :--------- |
| teamUUID | 团队的 `uuid` | string   | 否       | -          |

#### Returns

| 参数          | 说明                  | 类型   |
| :------------ | :-------------------- | :----- |
| user_uuid     | 用户的 `uuid`         | string |
| org_uuid      | 插件所属组织的 `uuid` | string |
| team_uuid     | 插件所属团队的 `uuid` | string |
| app_uuid      | 插件的 `app_id`       | string |
| instance_uuid | 插件实例的 `id`       | string |
| name          | 用户名称              | string |
| email         | 用户邮箱              | string |

#### Example

```typescript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

---

### Field. FieldsAdd {#FieldsAdd}

添加工作项的脚本属性

#### Params

| 参数 | 说明                                            | 类型   | **必填** | **默认值** |
| :--- | :---------------------------------------------- | :----- | :------- | :--------- |
| Name | 属性名称                                        | string | 是       | -          |
| Type | 脚本属性类型<br />- 1001：单选<br/>- 1002：多选 | int    | 是       | -          |

#### Returns

| 参数 | 说明              | 类型   |
| :--- | :---------------- | :----- |
| UUID | 脚本属性的 `uuid` | string |

#### Example

```typescript
const FieldsAddRes = await Field.FieldsAdd({
  Name: 'task_field',
  Type: 1001, //表示添加单选类型脚本属性
})
if (FieldsAddRes.Error) {
  throw new Error('Failed to create field')
}
const { UUID: fieldUUID } = FieldsAddRes //获取属性uuid
```

---

### Field. ItemsAdd {#ItemsAdd}

添加项目脚本属性

#### Params

| 参数        | 说明                                                                                              | 类型   | **必填** | **默认值** |
| :---------- | :------------------------------------------------------------------------------------------------ | :----- | :------- | :--------- |
| FieldType   | 脚本属性类型：<br />- `FieldTypeEnum.SingleLabel` : 单选<br />- `FieldTypeEnum.MultiLabel` : 多选 | string | 是       | -          |
| Name        | 属性名称                                                                                          | string | 是       | -          |
| ItemType    | 固定值： `field`                                                                                  | string | 是       | -          |
| Pool        | 可选值: `PoolEnum.Project` 和 `PoolEnum.Product`                                                  | string | 是       | -          |
| ContextType | 上下文类型                                                                                        | string | 是       | -          |
| required    | 是否必填                                                                                          | bool   | 是       | -          |

#### Returns

| 参数 | 说明              | 类型   |
| :--- | :---------------- | :----- |
| UUID | 脚本属性的 `uuid` | string |

#### Example

```typescript
const ItemsAddProjectRes = await Field.ItemsAdd({
  FieldType: FieldTypeEnum.SingleLabel, //表示添加单选类型脚本属性
  Name: 'project_field',
  ItemType: 'field',
  Pool: PoolEnum.Project, //实体类型为项目
  ContextType: 'team',
  required: false,
})
if (ItemsAddProjectRes.Error) {
  throw new Error('Failed to create field')
}
const { UUID: fieldUUID } = ItemsAddProjectRes //获取属性`uuid`
```

---

### Field. AddGroupField {#AddGroupField}

添加属性组至实体

#### Params

| 参数       | 说明                                                                                        | 类型                                    | **必填** | **默认值** |
| :--------- | :------------------------------------------------------------------------------------------ | :-------------------------------------- | :------- | :--------- |
| ObjectType | 属性组的实体类型，可选值：<br />- `PoolEnum.Project` : 项目<br />- `PoolEnum.Task` : 工作项 | string                                  | 是       | -          |
| Name       | 属性组名称                                                                                  | string                                  | 是       | -          |
| Relations  | 关系信息数组                                                                                | [IRelationMessage](#IRelationMessage)[] | 是       | -          |

##### IRelationMessage {#IRelationMessage}

| 参数            | 说明                                     | 类型   |
| :-------------- | :--------------------------------------- | :----- |
| FieldUUID       | 属性的 `fieldUUID`                       | string |
| FieldParentUUID | 父属性 `UUID` ，表示和该属性形成层级关系 | string |
| Position        | `Position` : 在属性组中的位置            | string |

#### Returns

| 参数      | 说明              | 类型     |
| :-------- | :---------------- | :------- |
| GroupUUID | 脚本属性组 `uuid` | string[] |

#### Example

```typescript
const relateionsTask: any[] = []
// `fieldUUIDs` 数组为添加的脚本属性的`uuid`数组
fieldUUIDs.forEach((fieldUUID, index) => {
  const relation = {
    FieldUUID: fieldUUID,
    FieldParentUUID: '',
    Position: index,
  }
  relateionsTask.push(relation)
})
const AddGroupFieldRes = await Field.AddGroupField({
  ObjectType: PoolEnum.Task,
  Name: 'issueFieldGroup',
  Relations: relateionsTask,
})
```

---

### PluginFile.uploadFile {#PluginFile_uploadFile}

上传文件至工作项附件

#### Params

| **参数**    | **说明**                                                               | **类型** | **必填** | **默认值** |
| :---------- | :--------------------------------------------------------------------- | :------- | :------- | :--------- |
| filePath    | 文件地址， `workspace` 目录下的路径                                    | string   | 是       | -          |
| referenceID | 工作项的 `uuid`                                                        | string   | 是       | -          |
| desc        | 文件描述                                                               | string   | 是       | -          |
| teamUUID    | 团队 `uuid` ，组织级别的插件必须带上该参数，团队级别的插件可不带该参数 | string   | 是       | -          |

#### Returns

| 参数    | 说明             | 类型   |
| :------ | :--------------- | :----- |
| hash    | 文件的 `hash` 值 | string |
| url     | 文件的下载 `url` | string |
| name    | 文件名称         | string |
| size    | 文件大小         | int    |
| mime    | 文件类型         | string |
| version | 文件版本         | int    |

#### Example

```typescript
const file = await PluginFile.uploadFile('files/test.txt', 'taskuuid', 'desc')
```

---

### Process.create

创建进度管理器。

#### Params

| 参数           | 说明                                                                                                                              | 类型                        | 必填 | 默认值 |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :--- | :----- |
| processType    | 进度管理器类型, 可选值: <br /> **下载进度管理器**: ProcessType. DownloadFile <br /> **数据同步进度管理器**: ProcessType. DataSync | string                      | 是   | -      |
| userUUID       | 用户 uuid                                                                                                                         | string                      | 是   | -      |
| title          | 进度标题                                                                                                                          | [LanguagePkg](#LanguagePkg) | 是   | -      |
| timeoutSeconds | 超时时间，进度管理器在时间内未完成则失败                                                                                          | number                      | 否   | 60(秒) |
| moduleID       | 进度管理器插槽 ID（仅适用于数据同步进度管理器）                                                                                   | string                      | 否   | -      |
| teamUUID       | 进度管理器所属团队 uuid，仅当插件为组织级别下使用                                                                                 | string                      | 否   | -      |

##### LanguagePkg {#LanguagePkg}

| 参数 | 说明     | 类型   | 必填 | 默认值 |
| :--- | :------- | :----- | :--- | :----- |
| zh   | 中文内容 | string | 是   | -      |
| en   | 英文内容 | string | 是   | -      |

#### Returns

| 参数        | 说明            | 类型   |
| :---------- | :-------------- | :----- |
| processUUID | 进度管理器 UUID | string |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult, AbilityError } from '@ones-op/node-ability'

export async function createProcess(request: PluginRequest): Promise<PluginResponse> {
  //从请求中获取参数
  const { user_uuid, title, timeout } = request?.body as any
  //进度管理器多语言标题
  const titlePkg: LanguagePkg = {
    en: 'process',
    zh: title,
  }
  //创建进度管理器，获取返回值processUUID
  let processUUID = ""
  try{
      const processUUID = await Process.create(ProcessType.DownloadFile, user_uuid, titlePkg, timeout)
  }catch (e){
    if (e instaedof AbilityError){

    }
  }

  return {
    body: {
      process_uuid: processUUID,
    },
  }
}
```

---

### Process.update

更新进度管理器的进度。

#### Params

| 参数                   | 说明            | 类型   | 必填 | 默认值 |
| :--------------------- | :-------------- | :----- | :--- | :----- |
| processUUID            | 进度管理器 uuid | string | 是   | -      |
| currentSuccessfulCount | 当前完成数      | number | 是   | -      |
| currentFailedCount     | 当前失败数      | number | 是   | -      |
| currentRemainingCount  | 当前剩余数      | number | 是   | -      |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult } from '@ones-op/node-ability'

export async function updateProgress(request: PluginRequest): Promise<PluginResponse> {
  //从请求中获取参数
  const { process_uuid: processUUID } = request?.body as any
  const currentSuccessfulCount = 10
  const currentFailedCount = 5
  const currentRemainingCount = 30
  //进度管理器更新
  await Process.update(
    processUUID,
    currentSuccessfulCount,
    currentFailedCount,
    currentRemainingCount
  )
  return {
    body: {
      status: 'ok',
    },
  }
}
```

---

### Process.done

将进度管理器状态置为已完成。

#### Params

| 参数        | 说明            | 类型                            | 必填 | 默认值 |
| :---------- | :-------------- | :------------------------------ | :--- | :----- |
| processUUID | 进度管理器 uuid | string                          | 是   | -      |
| isSuccess   | 成功或失败      | bool                            | 是   | -      |
| resultText  | 详情内容        | [LanguagePkg](#LanguagePkg)     | 是   | -      |
| payload     | 完成动作        | [ProcessResult](#ProcessResult) | 是   | -      |

#### Returns {#ProcessResult}

| 参数     | 说明                                         | 类型   | 必填 | 默认值 |
| :------- | :------------------------------------------- | :----- | :--- | :----- |
| filePath | 文件路径，类型为**下载进度管理器**时可用     | string | 否   | -      |
| data     | 额外内容，类型为**数据同步进度管理器**时可用 | string | 否   | -      |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult } from '@ones-op/node-ability'

export async function doneProcess(request: PluginRequest): Promise<PluginResponse> {
  //从请求中获取参数
  const { process_uuid: processUUID } = request?.body as any
  //多语言详情内容
  const resultText: LanguagePkg = {
    en: 'content',
    zh: '详情内容',
  }
  //进度管理器完成时的动作，下载进度管理器下载指定的文件，数据同步进度管理器可以展示额外的内容
  const payload: ProcessResult = {
    filePath: './plugin.sql',
  }

  const isSuccess = true
  //完成进度
  await Process.done(processUUID, isSuccess, resultText, payload)

  return {
    body: {
      status: 'ok',
      process_uuid: processUUID,
    },
  }
}
```

---

### getUserTeamUUIDsByEmail

根据用户的邮箱查找用户的 `uuid` 以及其所在的团队 `uuid` 列表。

#### Params

| 参数  | 说明     | 类型   | 必填 | 默认值 |
| :---- | :------- | :----- | :--- | :----- |
| email | 用户邮箱 | string | 是   | -      |

#### Returns

| 参数       | 说明                       | 类型     |
| :--------- | :------------------------- | :------- |
| user_uuid  | 用户的`uuid`               | string   |
| team_uuids | 用户所在的团队 `uuid` 列表 | string[] |

#### Example

```typescript
import { getUserTeamUUIDsByEmail } from '@ones-op/node-ability'

const resp = await getUserTeamUUIDsByEmail('marsdev@ones.ai')
```

---

### getUserTeamUUIDsByIdNumber

根据用户的工号查找用户的 `uuid` 以及其所在的团队 `uuid` 列表。

#### Params

| 参数      | 说明       | 类型   | 必填 | 默认值 |
| :-------- | :--------- | :----- | :--- | :----- |
| id_number | 用户的工号 | string | 是   | -      |

#### Returns

| 参数       | 说明                       | 类型     |
| :--------- | :------------------------- | :------- |
| user_uuid  | 用户的`uuid`               | string   |
| team_uuids | 用户所在的团队 `uuid` 列表 | string[] |

#### Example

```typescript
import { getUserTeamUUIDsByIdNumber } from '@ones-op/node-ability'

const resp = await getUserTeamUUIDsByIdNumber('123456')
```

---

### getUserTeamUUIDsByEmail

根据用户的第三方系统 id 以及第三方系统类型查找用户的 `uuid` 以及其所在的团队 `uuid` 列表。

#### Params

| 参数             | 说明                 | 类型   | 必填 | 默认值 |
| :--------------- | :------------------- | :----- | :--- | :----- |
| third_party_id   | 用户的第三方系统 id  | string | 是   | -      |
| third_party_type | 第三方系统的类型代号 | number | 是   | -      |

#### Returns

| 参数       | 说明                       | 类型     |
| :--------- | :------------------------- | :------- |
| user_uuid  | 用户的`uuid`               | string   |
| team_uuids | 用户所在的团队 `uuid` 列表 | string[] |

#### Example

```typescript
import { getUserTeamUUIDsByThirdPartyIDAndThirdPartyType } from '@ones-op/node-ability'

const resp = await getUserTeamUUIDsByThirdPartyIDAndThirdPartyType('12345678', 0)
```

---
