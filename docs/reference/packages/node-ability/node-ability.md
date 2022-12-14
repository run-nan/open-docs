# @ones-op/node-ability（Business ability library，Encapsulation of business abilities and requests）

We provide a set of interface request libraries that allow plugin developers to call the basic abilities of plugins.

## Compatibility Requirements

| **Constraint** | **Content**                    |
| :------------- | :----------------------------- |
| ONES VERSION   | LTS：3.6.x<br />Feature：3.6.x |

## API

### getLanguage

Get user language

#### Params

| parameters | explain   |  type  | required | default value |
| :--------: | :-------- | :----: | :------: | :-----------: |
| user_uuid  | user uuid | string |    Y     |               |

#### Returns

| parameters | explain            |  type  |
| :--------: | :----------------- | :----: |
|  language  | user language type | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

### getLanguageString

Gets the corresponding content of the specified language

#### Params

| parameters | explain                   |  type  | required | default value |
| :--------: | :------------------------ | :----: | :------: | :-----------: |
|  language  | language type             | string |    Y     |               |
|    key     | the field you want to get | string |    Y     |               |

#### Returns

| parameters | explain                                         |  type  |
| :--------: | :---------------------------------------------- | :----: |
|   value    | The corresponding value of key in this language | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const description = await Language.getLanguageString(language, 'PluginDescription')
}
```

### addRepos

Add linked repositories.

#### Params

| parameters | explain                                                                               | type       | required | value range  |
| ---------- | ------------------------------------------------------------------------------------- | ---------- | -------- | ------------ |
| toolUUID   | UUID of the link code repository type                                                 | string     | Y        | len=8        |
| teamUUID   | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string     | N        | len=8        |
| list       | Add a list of code repositories                                                       | RepoInfo[] | Y        | 0<=size<=100 |

> RepoInfo

| parameters        | explain                                                                   | type   | required | value range |
| ----------------- | ------------------------------------------------------------------------- | ------ | -------- | ----------- |
| userUUID          | add repository user UUID                                                  | string | Y        | len=8       |
| uri               | add repository URI（https://github.com/nodejs/node is https://github.com) | string | Y        | len<=100    |
| namespace         | add repository namespace（https://github.com/nodejs/node is nodejs)       | string | Y        | len<=256    |
| name              | add repository name（https://github.com/nodejs/node is node)              | string | Y        | len<=256    |
| certificationtype | authentication type (enum: OAUTH、PASSWORD、TOKEN、NONE、OTHER)           | enum   | Y        | -           |

#### Returns

> BatchRepoResponse

| parameters   | explain                                       | type           | required |
| ------------ | --------------------------------------------- | -------------- | -------- |
| successCount | the number of successfully added repositories | int            | Y        |
| failureCount | the number of failures added repositories     | int            | Y        |
| Responses    | the detail info of add repositories           | RepoResponse[] | Y        |

> RepoResponse

| parameters | explain              | type    | required |
| ---------- | -------------------- | ------- | -------- |
| success    | whether succeed      | boolean | Y        |
| uri        | repository uri       | string  | Y        |
| namespace  | repository namespace | string  | Y        |
| name       | repository name      | string  | Y        |
| repoUUID   | repository UUID      | string  | Y        |
| error      | error detail         | string  | N        |

#### Example

```typescript
import { addRepos } from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
const batchResponse = await addRepos(toolUUID, list);
```

The `toolUUID` field corresponds to the UUID unique identifier of the custom code repository type in the ONES system, which can be obtained by defining the following method, where `CkrqExqC` corresponds to the capability ID in the `plugin.yaml` file:

```typescript
import { getAbilityProperties } from '@ones-op/node-ability'

export async function getRepoToolUUID(): Promise<string> {
  const repoToolUUIDKey = 'repoToolUUID'
  const abilityID = 'CkrqExqC'

  let repoToolUUID = ''
  const property = await getAbilityProperties(abilityID, [repoToolUUIDKey])
  if (property?.repoToolUUID) {
    repoToolUUID = property[repoToolUUIDKey]
  }
  return repoToolUUID
}
```

:::caution notice
When calling the `getAbilityProperties` method for a team-level plugin, `teamUUID` can be omitted, and when calling for an organization-level plugin, `teamUUID` must be passed.
:::

### queryRepo

query linked single code repository.

#### Params

| parameters | explain                                                                               | type   | required | value range |
| ---------- | ------------------------------------------------------------------------------------- | ------ | -------- | ----------- |
| toolUUID   | UUID of the link code repository type                                                 | string | Y        | len=8       |
| teamUUID   | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string | N        | len=8       |
| uri        | repository URI                                                                        | string | Y        | len<=100    |
| namespace  | repository namespace                                                                  | string | Y        | len<=256    |
| name       | repository name                                                                       | string | Y        | len<=256    |

#### Returns

> RepoInfo

| parameters        | explain                                                         | type   | required |
| ----------------- | --------------------------------------------------------------- | ------ | -------- |
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

### queryRepos

query all linked code repositories.

#### Params

| parameters | explain                                                                               | type   | required | value range |
| ---------- | ------------------------------------------------------------------------------------- | ------ | -------- | ----------- |
| toolUUID   | UUID of the link code repository type                                                 | string | Y        | len=8       |
| teamUUID   | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string | N        | len=8       |

#### Returns

> RepoInfo[]

| parameters        | explain                                                         | type   | required |
| ----------------- | --------------------------------------------------------------- | ------ | -------- |
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

### addRepoCommits

add repo commits.

#### Params

| parameters | explain                                                                               | type         | required | value range  |
| ---------- | ------------------------------------------------------------------------------------- | ------------ | -------- | ------------ |
| toolUUID   | UUID of the link code repository type                                                 | string       | Y        | len=8        |
| repoUUID   | UUID of the code repository                                                           | string       | Y        | len=8        |
| teamUUID   | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string       | N        | len=8        |
| list       | Add a list of code commits                                                            | RepoCommit[] | Y        | 0<=size<=100 |

> RepoCommit

| parameters     | explain                                                      | type   | required | value range    |
| -------------- | ------------------------------------------------------------ | ------ | -------- | -------------- |
| hash           | commit unique identifier                                     | string | Y        | len<=48        |
| author         | commit author                                                | string | Y        | len<=128       |
| message        | commit message                                               | string | Y        | -              |
| branch         | commit branch                                                | string | Y        | len<=128       |
| url            | commit web url                                               | string | Y        | len<=2048      |
| createAt       | commit timestamp (unit: second)                              | int64  | Y        | min=1          |
| statsTotal     | Statistics affect the total number of rows                   | int64  | N        | max=2147483647 |
| statsAdditions | Count the total number of rows affected by adding statistics | int64  | N        | max=2147483647 |
| statsDeletions | Count the total number of rows affected by deletion          | int64  | N        | max=2147483647 |

#### Returns

none.

#### Example

```typescript
import { addRepoCommits } from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const repoUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
await addRepoCommits(toolUUID, repoUUID, list)
```

### addRepoPullRequest

add single repo pull request.

#### Params

| parameters | explain                                                                               | type            | required | value range |
| ---------- | ------------------------------------------------------------------------------------- | --------------- | -------- | ----------- |
| toolUUID   | UUID of the link code repository type                                                 | string          | Y        | len=8       |
| repoUUID   | UUID of the code repository                                                           | string          | Y        | len=8       |
| teamUUID   | Team UUID (mandatory for organization-level plugins, optional for team-level plugins) | string          | N        | len=8       |
| pr         | pull request info                                                                     | RepoPullRequest | Y        | -           |

> RepoPullRequest

| parameters | explain                                             | type         | required | value range    |
| ---------- | --------------------------------------------------- | ------------ | -------- | -------------- |
| number     | pr unique identifier                                | number       | Y        | max=2147483647 |
| action     | pr action (enum: UPDATE、CLOSE、ADD、REOPEN、MERGE) | enum         | Y        | -              |
| author     | pr author                                           | string       | Y        | len<=128       |
| title      | pr title                                            | string       | Y        | len<=256       |
| url        | pr web url                                          | string       | Y        | len<=1024      |
| fromBranch | pr source branch                                    | string       | Y        | len<=128       |
| toBranch   | pr dest branch                                      | string       | Y        | len<=128       |
| createAt   | pr timestamp (unit: second)                         | int64        | Y        | min=1          |
| state      | pr state (enum: OPEN、MERGED、CLOSED)               | enum         | Y        | -              |
| reviewers  | pr reviewers                                        | string array | N        | -              |
| updateAt   | last update pr timestamp (unit: second)             | int64        | N        | min=1          |
| updateUser | last updat pr user name                             | string       | N        | len<=128       |

#### Returns

none.

#### Example

```typescript
import { addRepoPullRequest } from '@ones-op/node-ability'

const toolUUID: string = 'xxx'
const repoUUID: string = 'xxx'
const pullRequest: RepoPullRequest = '{...}'
await addRepoPullRequest(toolUUID, repoUUID, pullRequest)
```
