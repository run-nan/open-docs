---
toc_max_heading_level: 4
---

# @ones-op/node-ability（Business ability library，Encapsulation of business abilities and requests）

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
| namespace         | add repository namespace（https://github.com/nodejs/node is nodejs)                                                    | string | Y        | len<=256    |
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

| **Param**   | **Type**       | **Description**                                                                                                                                                                                 | **Required** | **Default** |
| :---------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- | :---------- |
| Title       | string         | information title                                                                                                                                                                               | Y            | -           |
| ToUsers     | string[]       | Array of users to receive notifications                                                                                                                                                         | Y            | -           |
| NotifyWay   | NotifyWay      | Notification type, optional values:<br />- Email: NotifyWay.Email<br />- Lark: NotifyWay.Lark<br />- YouDu: NotifyWay.YouDu<br />- WeChat: NotifyWay.WeChat<br />- DingDing: NotifyWay.DingDing | Y            | -           |
| MessageBody | IMessageBody[] | Array of message bodies, each message body contains:<br />- Body: notification content<br />- url：notification jump link                                                                       | Y            | -           |
| Ext         | string         | Extension field                                                                                                                                                                                 | Y            | -           |
| Source      | string         | Source, for the record                                                                                                                                                                          | Y            | -           |

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

| Param    | Type   | Description            | Required | Default |
| :------- | :----- | :--------------------- | :------- | :------ |
| teamUUID | string | The `uuid` of the team | N        | -       |

#### Returns

| Param         | Type   | Description                                          | Required | Default |
| :------------ | :----- | :--------------------------------------------------- | -------- | ------- |
| user_uuid     | string | User's `uuid`                                        |
| org_uuid      | string | The `uuid` of the organization the plugin belongs to |
| team_uuid     | string | The `uuid` of the team the plugin belongs to         |
| app_uuid      | string | The `app_id` of the plugin                           |
| instance_uuid | string | The `id` of the plugin instance                      |
| name          | string | Username                                             |
| email         | string | User email                                           |

#### Example

```typescript
import { Plugin } from '@ones-op/node-ability'

const user = await Plugin.getPluginUser()
```

---

### Field.FieldsAdd {#FieldsAdd}

Add script-field to issue

#### Params

| Param | Type   | Description                                                                       | Required | Default |
| :---- | :----- | :-------------------------------------------------------------------------------- | :------- | :------ |
| Name  | string | field name                                                                        | Y        | -       |
| Type  | int    | script-field type<br />- 1001: single-selectionion<br/>- 1002: multiple-selection | Y        | -       |

#### Returns

| Param | Type   | Description             |
| :---- | :----- | :---------------------- |
| UUID  | string | `uuid` for script-field |

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

### Field.ItemsAdd {#ItemsAdd}

Add project script-field

#### Params

| Param       | Type   | Description                                                                                                                     | Required | Default |
| :---------- | :----- | :------------------------------------------------------------------------------------------------------------------------------ | :------- | :------ |
| FieldType   | string | script-field type<br />- `FieldTypeEnum.SingleLabel`: single-selectionion<br />- `FieldTypeEnum.MultiLabel`: multiple-selection | Y        | -       |
| Name        | string | Field name                                                                                                                      | Y        | -       |
| ItemType    | string | Fixed value：`field`                                                                                                            | Y        | -       |
| Pool        | string | Fixed value：`PoolEnum.Project`: project                                                                                        | Y        | -       |
| ContextType | string | context type                                                                                                                    | Y        | -       |
| required    | bool   | Is it required                                                                                                                  | Y        | -       |

#### Returns

| Param | Type   | Description             |
| :---- | :----- | :---------------------- |
| UUID  | string | `uuid` for script-field |

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

### Field.AddGroupField {#AddGroupField}

Add field group to entity

#### Params

| Param      | Type                                    | Description                                                                                                         | Required | Default |
| :--------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------- | :------ |
| ObjectType | string                                  | The entity type of the FieldGroup, optional value:<br />- `PoolEnum.Project`: project<br />- `PoolEnum.Task`: issue | Y        | -       |
| Name       | string                                  | FieldGroup name                                                                                                     | Y        | -       |
| Relations  | [IRelationMessage](#IRelationMessage)[] | Relationship information array                                                                                      | Y        | -       |

##### IRelationMessage {#IRelationMessage}

| Param           | Type   | Description                                                                                   |
| :-------------- | :----- | :-------------------------------------------------------------------------------------------- |
| FieldUUID       | string | The `fieldUUID` of the field                                                                  |
| FieldParentUUID | string | The parent field `UUID`, indicating that it forms a hierarchical relationship with this field |
| Position        | string | `Position`: the position in the fieldgroup                                                    |

#### Returns

| Param     | Type     | Description               |
| :-------- | :------- | :------------------------ |
| GroupUUID | string[] | script-field group `uuid` |

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

| Param       | Type   | Description                                                                                                             | Required | Default |
| :---------- | :----- | :---------------------------------------------------------------------------------------------------------------------- | :------- | :------ |
| filePath    | string | file address, the path under the `workspace` directory                                                                  | Y        | -       |
| referenceID | string | `uuid` of the issue                                                                                                     | Y        | -       |
| desc        | string | file description                                                                                                        | Y        | -       |
| teamUUID    | string | `uuid` of the team, organization-level plugins must have this parameter, team-level plugins may not have this parameter | N        | -       |

#### Returns

| Param   | Type   | Description              |
| :------ | :----- | :----------------------- |
| hash    | string | `hash` value of the file |
| url     | string | file download `url`      |
| name    | string | file name                |
| size    | int    | file size                |
| mime    | string | file type                |
| version | int    | file version             |

#### Example

```typescript
const file = await PluginFile.uploadFile('files/test.txt', 'taskuuid', 'desc')
```

---
