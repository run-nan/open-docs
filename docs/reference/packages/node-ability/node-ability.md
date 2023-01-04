---
toc_max_heading_level: 4
---

# @ones-op/node-ability

We provide a set of interface request libraries that allow plugin developers to call the basic abilities of plugins.

## Compatibility Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## API

### getLanguage

Get user language

#### Params

| Param     | Description | Type   | Required | Default |
| :-------- | :---------- | :----- | :------- | :------ |
| user_uuid | user uuid   | string | Y        | -       |

#### Returns

| Param    | Description        | Type   |
| :------- | :----------------- | :----- |
| language | user language type | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

---

### getLanguageString

Gets the corresponding content of the specified language

#### Params

| Param    | Description               | Type   | Required | Default |
| :------- | :------------------------ | :----- | :------- | :------ |
| language | language type             | string | Y        | -       |
| key      | the field you want to get | string | Y        | -       |

#### Returns

| Param | Description                                     | Type   |
| :---- | :---------------------------------------------- | :----- |
| value | The corresponding value of key in this language | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

---

### downloadFile

Download the file in the plugin storage space `workspace`

#### Requirements

| **ONES** |
| :------- |
| v3.11.0+ |

#### Params

| Param          | Description    | Type   | Required | Default |
| :------------- | :------------- | :----- | :------- | :------ |
| filePath       | path of file   | string | Y        | -       |
| timeoutSeconds | effective time | number | N        | 300(s)  |

#### Returns

| Param | Description       | Type   |
| :---- | :---------------- | :----- |
| url   | file download URL | string |

#### Example

```javascript
import { downloadFile } from '@ones-op/node-ability'

export async function downloadUrl() {
  const url = await downloadFile('plugin.sql')

  return url
}
```

---

### uploadFile

Upload file to plugin storage space `workspace`

#### Requirements

| **ONES**  |
| :-------- |
| v3.11.40+ |

#### Params

| Param          | Description                                                     | Type   | Required | Default |
| :------------- | :-------------------------------------------------------------- | :----- | :------- | :------ |
| filePath       | The directory of the plugin storage space you want to upload to | string | N        | .       |
| timeoutSeconds | effective time                                                  | number | N        | 3600(s) |

#### Returns

| Param | Description      | Type   |
| :---- | :--------------- | :----- |
| url   | file upload link | string |

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

### addRepos

Add linked repositories

#### Requirements

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| v3.13.9+ | v0.4.0+                   |

#### Params

| Param    | Description                                                                           | Type                    | Required | value range  |
| :------- | :------------------------------------------------------------------------------------ | :---------------------- | :------- | :----------- |
| toolUUID | UUID of the link code repository type                                                 | string                  | Y        | len=8        |
| teamUUID | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string                  | N        | len=8        |
| list     | Add a list of code repositories                                                       | [RepoInfo](#RepoInfo)[] | Y        | 0<=size<=100 |

##### RepoInfo {#RepoInfo}

| Param             | Description                                                                                                            | Type   | Required | value range |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :---------- |
| userUUID          | add repository user UUID                                                                                               | string | Y        | len=8       |
| uri               | add repository URI（https://github.com/nodejs/node is https://github.com)                                              | string | Y        | len<=100    |
| namespace         | add repository namespace（https://github.com/nodejs/node is Node.js)                                                   | string | Y        | len<=256    |
| name              | add repository name（https://github.com/nodejs/node is node)                                                           | string | Y        | len<=256    |
| certificationtype | authentication type, it is only used for code repository list page display (enum: OAUTH、PASSWORD、TOKEN、NONE、OTHER) | enum   | Y        | -           |

#### Returns

##### BatchRepoResponse

| Param        | Description                                   | Type                            | Required |
| :----------- | :-------------------------------------------- | :------------------------------ | :------- |
| successCount | the number of successfully added repositories | int                             | Y        |
| failureCount | the number of failures added repositories     | int                             | Y        |
| Responses    | the detail info of add repositories           | [RepoResponse](#RepoResponse)[] | Y        |

##### RepoResponse {#RepoResponse}

| Param     | Description          | Type    | Required |
| :-------- | :------------------- | :------ | :------- |
| success   | whether succeed      | boolean | Y        |
| uri       | repository uri       | string  | Y        |
| namespace | repository namespace | string  | Y        |
| name      | repository name      | string  | Y        |
| repoUUID  | repository UUID      | string  | Y        |
| error     | error detail         | string  | N        |

#### Example

```typescript
import { addRepos } from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
const batchResponse = await addRepos(toolUUID, list);
```

---

### queryRepo

query linked single code repository

#### Requirements

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| v3.13.9+ | v0.4.0+                   |

#### Params

| Param     | Description                                                                           | Type   | Required | value range |
| :-------- | :------------------------------------------------------------------------------------ | :----- | :------- | :---------- |
| toolUUID  | UUID of the link code repository type                                                 | string | Y        | len=8       |
| teamUUID  | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string | N        | len=8       |
| uri       | repository URI                                                                        | string | Y        | len<=100    |
| namespace | repository namespace                                                                  | string | Y        | len<=256    |
| name      | repository name                                                                       | string | Y        | len<=256    |

#### Returns

##### RepoInfo

| Param             | Description                                                     | Type   | Required |
| :---------------- | :-------------------------------------------------------------- | :----- | :------- |
| repoUUID          | repository UUID                                                 | string | Y        |
| userUUID          | linked repository user UUID                                     | string | Y        |
| uri               | repository URI                                                  | string | Y        |
| namespace         | repository namespace                                            | string | Y        |
| name              | repository name                                                 | string | Y        |
| certificationtype | authentication type (enum: OAUTH、PASSWORD、TOKEN、NONE、OTHER) | enum   | Y        |

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

query all linked code repositories

#### Requirements

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| v3.13.9+ | v0.4.0+                   |

#### Params

| Param    | Description                                                                           | Type   | Required | value range |
| :------- | :------------------------------------------------------------------------------------ | :----- | :------- | :---------- |
| toolUUID | UUID of the link code repository type                                                 | string | Y        | len=8       |
| teamUUID | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string | N        | len=8       |

#### Returns

##### RepoInfo[]

| Param             | Description                                                     | Type   | Required |
| :---------------- | :-------------------------------------------------------------- | :----- | :------- |
| repoUUID          | repository UUID                                                 | string | Y        |
| userUUID          | linked repository user UUID                                     | string | Y        |
| uri               | repository URI                                                  | string | Y        |
| namespace         | repository namespace                                            | string | Y        |
| name              | repository name                                                 | string | Y        |
| certificationtype | authentication type (enum: OAUTH、PASSWORD、TOKEN、NONE、OTHER) | enum   | Y        |

#### Example

```typescript
import { queryRepos } from '@ones-op/node-ability'

const toolUUID = 'xxx'
const repoInfos = await queryRepos(toolUUID)
```

---

### addRepoCommits

add repo commits

#### Requirements

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| v3.13.9+ | v0.4.0+                   |

#### Params

| Param    | Description                                                                           | Type                        | Required | value range  |
| :------- | :------------------------------------------------------------------------------------ | :-------------------------- | :------- | :----------- |
| toolUUID | UUID of the link code repository type                                                 | string                      | Y        | len=8        |
| repoUUID | UUID of the code repository                                                           | string                      | Y        | len=8        |
| teamUUID | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string                      | N        | len=8        |
| list     | Add a list of code commits                                                            | [RepoCommit](#RepoCommit)[] | Y        | 0<=size<=100 |

##### RepoCommit {#RepoCommit}

| Param          | Description                                                  | Type   | Required | value range    |
| :------------- | :----------------------------------------------------------- | :----- | :------- | :------------- |
| hash           | commit unique identifier                                     | string | Y        | len<=48        |
| author         | commit author                                                | string | Y        | len<=128       |
| message        | commit message                                               | string | Y        | -              |
| branch         | commit branch                                                | string | Y        | len<=128       |
| url            | commit web url                                               | string | Y        | len<=2048      |
| createAt       | commit timestamp (unit: second)                              | int64  | Y        | min=1          |
| statsTotal     | Statistics affect the total number of rows                   | int64  | N        | max=2147483647 |
| statsAdditions | Count the total number of rows affected by adding statistics | int64  | N        | max=2147483647 |
| statsDeletions | Count the total number of rows affected by deletion          | int64  | N        | max=2147483647 |

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

add single repo pull request (support for add and update)

#### Requirements

| **ONES** | **@ones-op/node-ability** |
| :------- | :------------------------ |
| v3.13.9+ | v0.4.0+                   |

#### Params

| Param    | Description                                                                           | Type                                | Required | value range |
| :------- | :------------------------------------------------------------------------------------ | :---------------------------------- | :------- | :---------- |
| toolUUID | UUID of the link code repository type                                                 | string                              | Y        | len=8       |
| repoUUID | UUID of the code repository                                                           | string                              | Y        | len=8       |
| teamUUID | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string                              | N        | len=8       |
| pr       | pull request info                                                                     | [RepoPullRequest](#RepoPullRequest) | Y        | -           |

##### RepoPullRequest {#RepoPullRequest}

| Param      | Description                                         | Type         | Required | value range    |
| :--------- | :-------------------------------------------------- | :----------- | :------- | :------------- |
| number     | pr unique identifier                                | number       | Y        | max=2147483647 |
| action     | pr action (enum: UPDATE、CLOSE、ADD、REOPEN、MERGE) | enum         | Y        | -              |
| author     | pr author                                           | string       | Y        | len<=128       |
| title      | pr title                                            | string       | Y        | len<=256       |
| url        | pr web url                                          | string       | Y        | len<=1024      |
| fromBranch | pr source branch                                    | string       | Y        | len<=128       |
| toBranch   | pr dest branch                                      | string       | Y        | len<=128       |
| createAt   | pr timestamp (unit: second)                         | int64        | Y        | min=1          |
| state      | pr state (enum: OPEN、MERGED、CLOSED)               | enum         | Y        | -              |
| reviewers  | pr reviewers                                        | string array | N        | len<=1024      |
| updateAt   | last update pr timestamp (unit: second)             | int64        | N        | min=1          |
| updateUser | last updat pr user name                             | string       | N        | len<=128       |

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

Send third-party notification information to specific users.

#### Params

| **Param**   | **Description**                                                                                                                                                                                             | **Type**       | **Required** | **Default** |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :----------- | :---------- |
| Title       | information title                                                                                                                                                                                           | string         | Y            | -           |
| ToUsers     | Array of users to receive notifications                                                                                                                                                                     | string[]       | Y            | -           |
| NotifyWay   | Notification type, optional values:<br />- Email: NotifyWay. Email<br />- Lark: NotifyWay. Lark<br />- YouDu: NotifyWay. YouDu<br />- WeChat: NotifyWay. WeChat<br />- DingDing: NotifyWay. DingD NotifyWay | ing            | Y            | -           |
| MessageBody | Array of message bodies, each message body contains:<br />- Body: notification content<br />- url：notification jump link                                                                                   | IMessageBody[] | Y            | -           |
| Ext         | Extension field                                                                                                                                                                                             | string         | Y            | -           |
| Source      | Source, for the record                                                                                                                                                                                      | string         | Y            | -           |

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

Get information about the plugin super admin

#### Params

| Param    | Description            | Type   | Required | Default |
| :------- | :--------------------- | :----- | :------- | :------ |
| teamUUID | The `uuid` of the team | string | N        | -       |

#### Returns

| Param         | Description                                          |
| :------------ | :--------------------------------------------------- |
| user_uuid     | User's `uuid`                                        |
| org_uuid      | The `uuid` of the organization the plugin belongs to |
| team_uuid     | The `uuid` of the team the plugin belongs to         |
| app_uuid      | The `app_id` of the plugin                           |
| instance_uuid | The `id` of the plugin instance                      |
| name          | Username                                             |
| email         | User email                                           |

#### Example

```typescript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

---

### Field. FieldsAdd {#FieldsAdd}

Add script-field to issue

#### Params

| Param | Description                                                                       | Type   | Required | Default |
| :---- | :-------------------------------------------------------------------------------- | :----- | :------- | :------ |
| Name  | field name                                                                        | string | Y        | -       |
| Type  | script-field type<br />- 1001: single-selectionion<br/>- 1002: multiple-selection | int    | Y        | -       |

#### Returns

| Param | Description             | Type   |
| :---- | :---------------------- | :----- |
| UUID  | `uuid` for script-field | string |

#### Example

```typescript
const FieldsAddRes = await Field.FieldsAdd({
  Name: 'task_field',
  Type: 1001,
})
if (FieldsAddRes.Error) {
  throw new Error('Failed to create field')
}
const { UUID: fieldUUID } = FieldsAddRes
```

---

### Field. ItemsAdd {#ItemsAdd}

Add project script-field

#### Params

| Param       | Description                                                                                                                       | Type   | Required | Default |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :------ |
| FieldType   | script-field type<br />- `FieldTypeEnum.SingleLabel` : single-selectionion<br />- `FieldTypeEnum.MultiLabel` : multiple-selection | string | Y        | -       |
| Name        | Field name                                                                                                                        | string | Y        | -       |
| ItemType    | Fixed value： `field`                                                                                                             | string | Y        | -       |
| Pool        | Fixed value： `PoolEnum.Project` : project                                                                                        | string | Y        | -       |
| ContextType | context type                                                                                                                      | string | Y        | -       |
| required    | Is it required                                                                                                                    | bool   | Y        | -       |

#### Returns

| Param | Description             | Type   |
| :---- | :---------------------- | :----- |
| UUID  | `uuid` for script-field | string |

#### Example

```typescript
const ItemsAddProjectRes = await Field.ItemsAdd({
  FieldType: FieldTypeEnum.SingleLabel,
  Name: 'project_field',
  ItemType: 'field',
  Pool: PoolEnum.Project,
  ContextType: 'team',
  Required: false,
})
if (ItemsAddProjectRes.Error) {
  throw new Error('Failed to create field')
}
const { UUID: fieldUUID } = ItemsAddProjectRes
```

---

### Field. AddGroupField {#AddGroupField}

Add field group to entity

#### Params

| Param      | Description                                                                                                           | Type                                    | Required | Default |
| :--------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :------- | :------ |
| ObjectType | The entity type of the FieldGroup, optional value:<br />- `PoolEnum.Project` : project<br />- `PoolEnum.Task` : issue | string                                  | Y        | -       |
| Name       | FieldGroup name                                                                                                       | string                                  | Y        | -       |
| Relations  | Relationship information array                                                                                        | [IRelationMessage](#IRelationMessage)[] | Y        | -       |

##### IRelationMessage {#IRelationMessage}

| Param           | Description                                                                                    | Type   |
| :-------------- | :--------------------------------------------------------------------------------------------- | :----- |
| FieldUUID       | The `fieldUUID` of the field                                                                   | string |
| FieldParentUUID | The parent field `UUID` , indicating that it forms a hierarchical relationship with this field | string |
| Position        | `Position` : the position in the fieldgroup                                                    | string |

#### Returns

| Param     | Description               | Type     |
| :-------- | :------------------------ | :------- |
| GroupUUID | script-field group `uuid` | string[] |

#### Example

```typescript
const relateionsTask: any[] = []
// The `fieldUUIDs` array is the `uuid` array of the added script-field
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

Upload files to issue attachments

#### Params

| Param       | Description                                                                                                             | Type   | Required | Default |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :------ |
| filePath    | file address, the path under the `workspace` directory                                                                  | string | Y        | -       |
| referenceID | `uuid` of the issue                                                                                                     | string | Y        | -       |
| desc        | file description                                                                                                        | string | Y        | -       |
| teamUUID    | `uuid` of the team, organization-level plugins must have this parameter, team-level plugins may not have this parameter | string | N        | -       |

#### Returns

| Param   | Description              | Type   |
| :------ | :----------------------- | :----- |
| hash    | `hash` value of the file | string |
| url     | file download `url`      | string |
| name    | file name                | string |
| size    | file size                | int    |
| mime    | file type                | string |
| version | file version             | int    |

#### Example

```typescript
const file = await PluginFile.uploadFile('files/test.txt', 'taskuuid', 'desc')
```

---

### Process.create

Create a progress manager.

#### Params

| Param          | Description                                                                                                                                                       | Type                        | Required | Default |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :------- | :------ |
| processType    | type of Progress Manager,Optional values: <br /> **Download Progress Manager**:ProcessType.DownloadFile <br /> **Datasync Progress Manager**:ProcessType.DataSync | string                      | Y        | -       |
| userUUID       | uuid of user                                                                                                                                                      | string                      | Y        | -       |
| title          | title of progress                                                                                                                                                 | [LanguagePkg](#LanguagePkg) | Y        | -       |
| timeoutSeconds | Timeout limit, if the Progress Manager is not completed within the time limit, it fails.                                                                          | number                      | N        | 60(s)   |
| moduleID       | moduleID of Progress Manager（only applicable to **Datasync Progress Manager**）                                                                                  | string                      | N        | -       |
| teamUUID       | uuid of the team which the Progress Manager belongs，only if the plugin is used at the organizational level                                                       | string                      | N        | -       |

##### LanguagePkg {#LanguagePkg}

| Param | Description   | Type   | Required | Default |
| :---- | :------------ | :----- | :------- | :------ |
| zh    | Chinese title | string | Y        | -       |
| en    | English title | string | Y        | -       |

#### Returns

| Param       | Description                  | Type   |
| :---------- | :--------------------------- | :----- |
| processUUID | the uuid of Progress Manager | string |

#### Error

| errcode          | reason             | level | statusCode |
| ---------------- | ------------------ | ----- | ---------- |
| InvalidParameter | Invalid parameter. | error | 400        |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult } from '@ones-op/node-ability'

export async function createProcess(request: PluginRequest): Promise<PluginResponse> {
  //Get parameters from request
  const { user_uuid, title, timeout } = request?.body as any
  //Progress Manager Multilingual Titles
  const titlePkg: LanguagePkg = {
    en: 'file',
    zh: title,
  }
  //Create a progress manager and get the return value processUUID
  let processUUID = ""
  try{
      const processUUID = await Process.create(ProcessType.DownloadFile, user_uuid, titlePkg, timeout)
  }catch (error){
    if (error instaedof AbilityError){
       Logger.error("error:", error.errcode, error.statusCode, error.level, error.reason)
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

Update the progress of the progress manager.

#### Params

| Param                  | Description                   | Type   | Required | Default |
| :--------------------- | :---------------------------- | :----- | :------- | :------ |
| processUUID            | uuid of Process Manager       | string | Y        | -       |
| currentSuccessfulCount | current number of completions | number | Y        | -       |
| currentFailedCount     | current number of failures    | number | Y        | -       |
| currentRemainingCount  | current remaining number      | number | Y        | -       |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult } from '@ones-op/node-ability'

export async function updateProgress(request: PluginRequest): Promise<PluginResponse> {
  //Get parameters from request
  const { process_uuid: processUUID } = request?.body as any
  const currentSuccessfulCount = 10
  const currentFailedCount = 5
  const currentRemainingCount = 30
  //Progress Manager Update
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

Set progress manager status to completed.

#### Params

| Param       | Description              | Type                            | Required | Default |
| :---------- | :----------------------- | :------------------------------ | :------- | :------ |
| processUUID | uuid of Process Manager  | string                          | Y        | -       |
| isSuccess   | Success or failure       | bool                            | Y        | -       |
| resultText  | Details                  | [LanguagePkg](#LanguagePkg)     | Y        | -       |
| payload     | The action at completion | [ProcessResult](#ProcessResult) | Y        | -       |

#### Returns {#ProcessResult}

| Param    | Description                                                | Type   | Required | Default |
| :------- | :--------------------------------------------------------- | :----- | :------- | :------ |
| filePath | File path,available when **Download Progress Manager**     | string | N        | -       |
| data     | Extra content,available when **Datasync Progress Manager** | string | N        | -       |

#### Example

```typescript
import type { PluginRequest, PluginResponse } from '@ones-op/node-types'
import { Process, LanguagePkg, ProcessType, ProcessResult } from '@ones-op/node-ability'

export async function doneProcess(request: PluginRequest): Promise<PluginResponse> {
  //Get parameters from request
  const { process_uuid: processUUID } = request?.body as any
  //Multilingual details
  const resultText: LanguagePkg = {
    en: 'content',
    zh: '详情内容',
  }
  //The action when the progress manager is completed, the download progress manager downloads the specified file, and the data synchronization progress manager can display additional content
  const payload: ProcessResult = {
    filePath: './plugin.sql',
  }

  const isSuccess = true
  //Complete schedule
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

### getUserTeamUUIDsByIdNumber

Find the user's `uuid` and the `uuid` list of the team they belong to based on the user's job number.

#### Params

| Param     | Description | Type   | Required | Default |
| :-------- | :---------- | :----- | :------- | :------ |
| id_number | user ID     | string | Y        | -       |

#### Returns

| Param      | Description                        | Type     |
| :--------- | :--------------------------------- | :------- |
| user_uuid  | user's `uuid`                      | string   |
| team_uuids | list of `uuid`s of the user's team | string[] |

#### Example

```typescript
import { getUserTeamUUIDsByIdNumber } from '@ones-op/node-ability'

const resp = await getUserTeamUUIDsByIdNumber('123456')
```

---

### getUserTeamUUIDsByEmail

According to the user's third-party system id and third-party system type, find the user's `uuid` and the `uuid` list of the team he belongs to.

#### Params

| Param            | Description                         | Type   | Required | Default |
| :--------------- | :---------------------------------- | :----- | :------- | :------ |
| third_party_id   | user's third party system id        | string | Y        | -       |
| third_party_type | type code of the third party system | number | Y        | -       |

#### Returns

| Param      | Description                        | Type     |
| :--------- | :--------------------------------- | :------- |
| user_uuid  | user's `uuid`                      | string   |
| team_uuids | list of `uuid`s of the user's team | string[] |

#### Example

```typescript
import { getUserTeamUUIDsByThirdPartyIDAndThirdPartyType } from '@ones-op/node-ability'

const resp = await getUserTeamUUIDsByThirdPartyIDAndThirdPartyType('12345678', 0)
```

---
