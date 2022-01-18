# Webhook 消息体描述

- [消息体说明](#消息体说明)
- [message](#message)
- [user](#user)
- [raw](#raw)
- [ext](#ext)
- [desc](#desc)


## 消息体说明

|字段名|类型|说明|
|:--|:--|:---|
|id|string|消息体唯一标识 16位|
|messages| []message |消息体数组(目前消息推送只支持推送单条消息)|

## `message`

|字段名|类型|说明|
|:--|:--|:---|
|from_user|user|消息来源|
|to_users|[]user|ONES 系统内的配置的消息通知列表|
|title|string|消息标题：格式 [团队名称]工作项名称|
|desc|string|消息描述 格式：`who [do_what]`|
|url|string|工作项 url 地址|
|task_uuid|string|工作项UUID|
|issue_type_uuid|string|工作项类型UUID|
|issue_type_name|string|作项类型名称|
|event_type|string|事件类型|
|event_name|string|事件名称|
|raw_message|raw|ONES 系统中消息体|


## `user`

|字段名|类型|说明|
|:--|:--|:---|
|uuid|string|用户UUID|
|name|string|用户名称|


## `raw`

|字段名|类型|说明|
|:---|:---|:---|
|uuid|string|message uuid|
|team_uuid|string|团队uuid|
|ref_type|string|消息引用类型：<br>task：工作项<br>project：项目|
|ref_id|string|消息引用类型的uuid：<br>如果"ref_type"是"task"的话，那么"ref_id"的值就是工作项uuid<br>如果"ref_type"是"project"的话，那么"ref_id"的值就是项目uuid|
|type|string|消息类型：<br>discussion：评论类型动态<br>system：系统类型动态|
|from|string|谁发送的消息：<br>BOT：代表系统|
|to|string|操作的实体：某个工作项或者某个项目|
|send_time|int64|发送时间|
|text|string|当"type"为"discussion"才有，评论的内容|
|is_can_show_richtext_diff|bool|是否能查看工作项描述的diff|
|subject_type|string|一般值为"user"|
|subject_id|string|操作人uuid|
|action|string|操作类型：<br>add：新增<br>update：更新<br>delete:删除<br>move:移动<br>copy:复制|
|object_type|string|消息实体uuid|
|object_name|string|消息实体名称|
|object_attr|string|消息实体属性|
|new_value|string|更新后的值|
|ext|ext|修改数据说明|

## `ext`

|字段名|类型|说明|
|:---|:---|:---|
|field_uuid|string|属性UUID|
|field_name|string|属性名称，omitempty|
|field_type|int|属性类型|
|old_value|string|属性旧值|
|new_value|string|属性新值|
|old_option|desc|旧属性项，omitempty|
|new_option|desc|新属性项，omitempty|
|new_multi_option|[]desc|旧属性项列表，omitempty|
|old_multi_option|[]desc|新属性项列表，omitempty|
|batch_action|string|批处理动作|
|parent_message_uuid|string|主消息UUID|
|trigger_task_uuid|string|触发工作项UUID|
|trigger_task_title|string|触发工作项标题|

## `desc`


|字段名|类型|说明|
|:--|:--|:---|
|uuid|string|UUID|
|name|string|名称|