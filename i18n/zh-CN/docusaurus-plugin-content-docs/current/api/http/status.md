# Status Code

<!-- # 状态码说明 -->

## 通用状态码说明

| code | errcode             | 说明                                             |
| :--- | :------------------ | :----------------------------------------------- |
| 200  | OK                  | 操作成功                                         |
| 400  | VerificationFailure | 校验失败，比如校验码无效或者过期                 |
| 400  | Timeout             | 操作超时                                         |
| 400  | MissingParameter    | 客户端没有传入某个必填参数                       |
| 400  | InUse               | 某项资源正在使用中，因此无法被删除               |
| 400  | InvalidParameter    | 客户端传入的参数不合法，主要是指格式上的错误     |
| 400  | Malformed           | 数据格式不正确，解析失败                         |
| 400  | InvalidFileExt      | 用户上传的文件后缀不合法                         |
| 401  | AuthFailure         | 用户授权失败，比如登录失败或者 token 过期        |
| 403  | ConstraintViolation | 未满足指定的约束条件，因此无法执行操作           |
| 403  | PermissionDenied    | 用户没有某项权限，因此无法执行操作               |
| 403  | LimitExceeded       | 资源的使用超出了限额                             |
| 403  | AccessDenied        | 用户没有权限访问某项资源，或者某项资源不存在     |
| 403  | Blocked             | 用户被封禁                                       |
| 404  | NotFound            | 某项资源不存在                                   |
| 409  | AlreadyExists       | 某项资源已经存在，因此无法添加                   |
| 410  | gone                | 接口停用                                         |
| 500  | Deleted             | 某项资源被删除                                   |
| 500  | CorruptedData       | 脏数据，即数据理应满足某项要求，但实际却没有满足 |
| 500  | UnexpectedArguments | 意料之外的参数                                   |
| 500  | SourceDeleted       | 某项资源的源资源被删除                           |
| 500  | SQLError            | 由 MySQL 产生的错误                              |
| 500  | UnknownError        | 未知错误，用来表示那些没有标注错误码的错误 s     |
| 500  | AppStoreBotError    | 由 AppStore 爬虫产生的错误                       |
| 500  | ElasticSearchError  | 由 ElasticSearch 产生的错误                      |
| 500  | LeanCloudError      | 由 LeanCloud 产生的错误                          |
| 500  | WechatError         | 由 Wechat 产生的错误                             |
| 500  | BadConfig           | 配置文件错误                                     |
| 500  | TelesignError       | 由 Telesign 产生的错误                           |
| 500  | RedisError          | 由 Redis 产生的错误                              |
| 500  | ServerError         | 服务器内部错误                                   |
| 500  | TypeMismatch        | 变量类型不符合预期要求                           |
| 500  | DingDingError       | 由 DingDing 产生的错误                           |
| 500  | InvalidEnum         | 无效的枚举值                                     |
| 500  | KeyConflict         | 主键冲突                                         |
| 500  | OutLimit            | 超出限制                                         |

## 个性状态码说明

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
