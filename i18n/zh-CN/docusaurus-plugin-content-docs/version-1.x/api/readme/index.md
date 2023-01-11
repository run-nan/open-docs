# ONES API

## 概述

- ONES API 基于 REST 风格编写，大部分接口都需要在[登录](../auth/auth.md#1-用户登录)状态下使用。

- ONES 常见的对象有`项目 project`、`工作项 task`、`工作项属性 field`、`工作项类型 issue_type`、`工作项状态 task_status` 等等，一般这些对象都会拥有 ID，在 ONES API 体系中，我们称之为 UUID，注意这里的 UUID 与业界定义的 ID 是不同的，这是内部的命名方式，一般我们指的 UUID 是长度为 8 个字符或 16 个字符的串。

- 创建工作项的流程：先获取到项目 UUID 以及工作项类型的 UUID，然后调用创建工作项的接口，传入相关参数参数来创建工作项。

## URI 结构 {#url}

ONES REST API 通过 URI 路径提供对资源的访问，使用 `{}` 或 `:name` 将 URI 路径的一部分标记为可使用参数替换的部分，URI 路径遵循以下规则：

```
http(s)://{your-host-name}/project/api/project/{api-path}
```

例如：

```
https://my-host-name/project/api/project/auth/login
https://my-host-name/project/api/project/users/me
https://your-host-name/project/api/project/team/:teamUUID/projects/info
```

所有请求都是基于 `http` 或者 `https`。 `{your-host-name}`为 ONES 部署机器的` 域名` 或者 `ip:port`。

## 通过授权

如果您需要调用 ONES API 接口, 通常用户登录是必须的。您可以通过调用 ONES [用户登录](../auth/auth.md#1-用户登录)接口完成用户登录。 如果您是合法用户，登录接口返回值会包含 `user.uuid` 和 `user.token`, 此二值用于 ONES 用户登录凭证。

ONES API 接口登录凭证作为 HTTP Header 为接口调用提供身份校验:

| 参数名          | 参数位置     | 值类型 | 描述                                        |
| :-------------- | :----------- | :----- | :------------------------------------------ |
| Ones-User-Id    | HTTP Headers | string | 用户 uuid                                   |
| Ones-Auth-Token | HTTP Headers | string | 登录成功的 token                            |
| Referer         | HTTP Headers | string | 请求地址 url,示例：`https://your-host-name` |

通过授权，调用获取当前用户信息接口，示例如下。

```curl
curl -X GET \
    https://your-host-name/project/api/project/users/me \
    -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \
    -H 'Ones-User-Id: DU6krHBN' \
    -H 'Referer: https://your-host-name' \
    -H 'cache-control: no-cache'
```

## 状态码说明

| 状态码 | 说明                                                                                        |
| :----- | :------------------------------------------------------------------------------------------ |
| 200    | 成功                                                                                        |
| 400    | 请求参数格式异常错误(json 解析失败)                                                         |
| 401    | 用户名/密码失败, 或登录 token 不正确                                                        |
| 403    | 登录验证成功但没有权限访问资源                                                              |
| 404    | url 无效                                                                                    |
| 409    | 账户已经存在, 或文件已经存在                                                                |
| 500    | 服务器内部错误                                                                              |
| 600    | 无效的电子邮箱                                                                              |
| 605    | 验证码不正确                                                                                |
| 606    | 验证码已过期                                                                                |
| 607    | UUID 格式不正确，表示添加 project/task 时，对应的 uuid 没有将用户 uuid 加到此 uuid 的头部时 |
| 608    | UUID 重复，表示添加 project/task 时，对应的 uuid 已存在云端                                 |
| 609    | Project UUID Not Found                                                                      |
| 610    | Task UUID Not Found                                                                         |
| 611    | Project/Task 字段的值没有符合约定                                                           |
| 612    | 邀请码不可用                                                                                |
| 613    | 邀请码已过期                                                                                |
| 614    | 当前用户已经加入了一个正式 team                                                             |
| 615    | 邮箱/手机号没有注册                                                                         |
| 616    | 重置验证码无效                                                                              |
| 617    | 重置验证码过期                                                                              |
| 618    | Something need to be handed over                                                            |
| 619    | API cannot be used in personal team                                                         |
| 620    | Not exist                                                                                   |
| 621    | Email/phone exist                                                                           |
| 622    | Invalid phone                                                                               |
| 623    | Invalid message type                                                                        |
| 624    | Not Found Invite code                                                                       |
| 625    | Ticket is expired                                                                           |
| 626    | Invalid Ticket                                                                              |
| 627    | Exchange code expired                                                                       |
| 628    | Exchange code is invalid                                                                    |
| 629    | Exchange code not found                                                                     |
| 630    | Not Found Record                                                                            |
| 623    | Invalid message type                                                                        |
| 800    | Some params is miss                                                                         |
| 801    | Params is invalid                                                                           |
| 802    | Auth info is miss                                                                           |
| 803    | Nothing updated                                                                             |
| 804    | IP Ban                                                                                      |
| 805    | Search timeout                                                                              |
| 806    | User Exists                                                                                 |
| 807    | Not Found Team                                                                              |
| 808    | Not Team Owner                                                                              |
| 809    | Not Project Owner                                                                           |
| 810    | Not Project Member                                                                          |
| 811    | Project Not In Team                                                                         |
| 812    | User Not In Team                                                                            |
| 813    | Account Expire                                                                              |
| 814    | Account Leave Team                                                                          |
| 815    | Project Not Bing Template                                                                   |
| 816    | Template Not Target                                                                         |
| 817    | Not Modify Data                                                                             |
| 818    | Field Duplicated                                                                            |
| 819    | Not Access Modify                                                                           |
| 820    | Not Valid Stamp                                                                             |
| 821    | Not Allow Related Itself                                                                    |
| 822    | Milestone Not In Team                                                                       |
| 823    | Not Milestone Member                                                                        |
| 824    | Team Fulled                                                                                 |
