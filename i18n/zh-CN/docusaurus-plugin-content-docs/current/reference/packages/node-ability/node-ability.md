# @ones-op/node-ability（业务能力库，对业务能力、请求的封装）

我们提供了一套接口请求库，允许插件开发者调用插件的基础能力。

## 兼容要求

| **约束**  | **内容**                       |
| :-------- | :----------------------------- |
| ONES 版本 | LTS：3.6.x<br />Feature：3.6.x |

## API 列表

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

### getLanguageString

获取指定语言的对应内容

#### Params

| 参数     | 说明           | 类型   | 必填 | 默认值 |
| :------- | :------------- | :----- | :--- | :----- |
| language | 语言种类       | string | 是   |        |
| key      | 想要获取的字段 | string | 是   |        |

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

### addRepos

新增代码仓

#### Params

| 参数     | 说明                                              | 类型       | 必填 | 取值范围     |
| :------- | :------------------------------------------------ | :--------- | :--- | :----------- |
| toolUUID | 关联代码仓方式 UUID                               | string     | 是   | len=8        |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string     | 否   | len=8        |
| list     | 新增关联代码仓列表                                | RepoInfo[] | 是   | 0<=size<=100 |

> RepoInfo

| 参数              | 说明                                                                              | 类型   | 必填 | 取值范围 |
| :---------------- | :-------------------------------------------------------------------------------- | :----- | :--- | :------- |
| userUUID          | 关联代码仓操作人员 UUID（可以从插槽提供的获取用户方法获取）                       | string | 是   | len=8    |
| uri               | 关联代码仓 URI（举例https://github.com/nodejs/node为https://github.com)           | string | 是   | len<=100 |
| namespace         | 命名空间（举例https://github.com/nodejs/node为nodejs)                             | string | 是   | len<=256 |
| name              | 仓库名称（举例https://github.com/nodejs/node为node)                               | string | 是   | len<=256 |
| certificationType | 认证方式，只用于代码仓列表页面展示（枚举值：OAUTH、PASSWORD、TOKEN、NONE、OTHER） | enum   | 是   | -        |

#### Returns

> BatchRepoResponse

| 参数         | 类型           | 说明                   | 必填 |
| :----------- | :------------- | :--------------------- | :--- |
| successCount | int            | 关联代码仓成功数量     | 是   |
| failureCount | int            | 关联代码仓失败数量     | 是   |
| Responses    | RepoResponse[] | 关联代码仓详细信息列表 | 是   |

> RepoResponse

| 参数      | 类型    | 说明               | 必填 |
| :-------- | :------ | :----------------- | :--- |
| success   | boolean | 是否关联成功       | 是   |
| uri       | string  | 关联代码仓 URI     | 是   |
| namespace | string  | 命名空间           | 是   |
| name      | string  | 仓库名称           | 是   |
| repoUUID  | string  | 代码仓 UUID        | 是   |
| error     | string  | 关联失败时错误描述 | 否   |

#### Example

```javascript
import { addRepos } from '@ones-op/node-ability'

const toolUUID: string = 'xxx';
const list: AddRepoInfo[] = [...];
const batchResponse = await addRepos(toolUUID, list);
```

### queryRepo

查询已关联的单个代码仓。

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

### queryRepos

查询已关联的所有代码仓

#### Params

| 参数     | 说明                                              | 类型   | 必填 | 取值范围 |
| :------- | :------------------------------------------------ | :----- | :--- | :------- |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string | 否   | len=8    |
| toolUUID | 关联代码仓方式 UUID                               | string | 是   | len=8    |

#### Returns

> RepoInfo[]

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

### addRepoCommits

新增代码仓提交 commit

#### Params

| 参数     | 说明                                          | 类型         | 必填 | 取值范围     |
| :------- | :-------------------------------------------- | :----------- | :--- | :----------- |
| toolUUID | 关联代码仓方式 UUID                           | string       | 是   | len=8        |
| repoUUID | 代码仓 UUID                                   | string       | 是   | len=8        |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插必填） | string       | 否   | len=8        |
| list     | 代码仓 commit 列表                            | RepoCommit[] | 是   | 0<=size<=100 |

> RepoCommit

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

### addRepoPullRequest

新增代码仓合并请求 pull request（支持新增和更新）

#### Params

| 参数     | 说明                                              | 类型            | 必填 | 取值范围 |
| :------- | :------------------------------------------------ | :-------------- | :--- | :------- |
| toolUUID | 关联代码仓方式 UUID                               | string          | 是   | len=8    |
| repoUUID | 代码仓 UUID                                       | string          | 是   | len=8    |
| teamUUID | 团队 UUID（组织级别插件必填，团队级别插件非必填） | string          | 否   | len=8    |
| pr       | 代码仓 pull request 信息                          | RepoPullRequest | 是   | -        |

> RepoPullRequest

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
