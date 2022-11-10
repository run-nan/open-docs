---
sidebar_position: 9
---

# ItemHandler

## Ability Description

Support intercept Item's Add、Update、Delete operations. When the system generates these operations for an item, the plugin registered with this ability will receive the data

1. Ignore:not handle this event；
2. Accept:not modify this event, but pay attention to its subsequent processing results；
3. Modify: modify the content of the event, but not support adding changes；
4. Reject:prevent this event；

## Ability Scope

- item graphql interface: add、update、delete mutation's operations
  - Manhour
  - RemainingHour
  - ActivityRelease
  - Activity
  - Deliverable
  - ActivityRelationLink
  - Project(add、update）
  - Task（add、update）
- add project and modify project field
- modify remainingHour, estimatedHour(Normal mode)
- task（refer to [TaskEventHandler](./task-event-handler.md) for scope）

## Ability Method Flow Chart

![image ](item-handler.jpg)

## Ability Usage

1. Use the op tool to add ability

   Include the following file changes:

   - file modify：config/plugin.yaml add ability configuration
   - file add：itemHandler.ts

2. Configure file config/plugin.yaml

   Under ability config, configure the "itemType" and "action"

   - itemType:use lowercase hump，such as：project,remainingHour,activityRelease
   - action: add,update,delete

```yaml
abilities:
  - id: b705b4ec
    name: ItemHandler
    version: 1.0.0
    abilityType: ItemHandler
    function:
      itemPreActionFunc: itemPreAction
      itemActionDoneFunc: itemActionDone
    config:
      - key: itemType
        value: project,remainingHour,task
        fieldType: Input
        label: 'Item Type'
        show: true
      - key: action
        value: update,add,delete
        fieldType: Input
        label: 'Operation'
        show: true
```

3. Modify backend/src/itemHandler.ts

   the file contains two methods ：

   - itemPreAction
   - itemActionDone

   add the processing logic to the method

```ts
// pre
export async function itemPreAction(request: PluginRequest): Promise<PluginResponse> {
  var body = request?.body as any
  var userUUID = body.user_uuid
  var lang = body.lang
  var args = body.args
  var itemType = body.item_type
  var action = body.action
  Logger.info('itemType', itemType)
  Logger.info('userID:', userUUID)
  Logger.info('lang', lang)
  Logger.info('args', args)
  Logger.info('action', action)
  var isFollow = true
  var isReject = false
  if (itemType == 'project' && action == 'update') {
  } else if (itemType == 'project' && action == 'add') {
    var pName = args.name
    var pMembers = args.members
    Logger.info('project_name', pName)
    Logger.info('project_member:', pMembers)
  } else if (itemType == 'manhour' && action == 'add') {
    var hours = args.hours
    Logger.info('hours', hours)
  } else if (itemType == 'remainingHour' && action == 'update') {
    var taskUUID = args.task
    var hours = args.hours
    Logger.info('hours', hours)
    Logger.info('taskUUID', taskUUID)
    args.hours = 3838000
  } else if (itemType == 'manhour' && action == 'update') {
    var type = args.type
    if (type == 'estimated') {
      var hours = args.hours
      Logger.info('hours', hours)
      args.hours = 2828000
    }
  } else if (itemType == 'task') {
    var events = body.args // TaskEventHandler: body.task_events
    for (var i = 0; i < events[0].task_fields.length; i++) {
      var field = events[0].task_fields[i]
      Logger.info('=========', i, '=============')
      Logger.info('field_uuid:', field.field_uuid)
      Logger.info('field_type:', field.field_type)
      Logger.info('field_name:', field.field_name)
      Logger.info('field_name_map:', field.field_name_map)
      Logger.info('field_value_type:', field.field_value_type)
      Logger.info('value:', field.value)
      isFollow = true
      isReject = false
    }
  }
  return {
    statusCode: 200,
    body: {
      code: 200,
      body: {
        is_follow: isFollow,
        is_reject: isReject,
        reject_reason: '',
        args: args,
        other_data: '',
      },
    },
  }
}
// done
export async function itemActionDone(request: PluginRequest): Promise<PluginResponse> {
  var body = request?.body as any
  var userUUID = body.user_uuid
  Logger.info('ans userUUID', userUUID)
  var itemType = body.item_type
  Logger.info('ans itemType', itemType)
  var action = body.action
  Logger.info('ans action', action)
  var lang = body.lang
  Logger.info('ans lang', lang)
  var graphqlQuery = body.graphql_query
  Logger.info('ans query', graphqlQuery)
  var args = body.args
  Logger.info('ans args', args)
  var otherData = body.other_data
  Logger.info('ans otherData', otherData)
  return {
    statusCode: 200,
    body: {
      code: 200,
    },
  }
}
```

# Struct Definition

## itemActionDone method

##### input param

| param         | type                                                                                                                                                                                                                                                                                 | **required** | explain           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------- |
| user_uuid     | string                                                                                                                                                                                                                                                                               | Y            | user id           |
| item_type     | string                                                                                                                                                                                                                                                                               | Y            | item type         |
| action        | string                                                                                                                                                                                                                                                                               | Y            | add/update/delete |
| lang          | string                                                                                                                                                                                                                                                                               | Y            | lang              |
| graphql_query | graphql.Query                                                                                                                                                                                                                                                                        | N            |                   |
| args          | add project：add_project<br/>modify project field：update_project<br/>modify estimatedHour(simple mode)：estimated_manhour<br/>modify remainingHour(simple mode)：remain_manhour <br/>task：[TaskEvent](./task-event-handler#struct-definition)<br/>other：map[string]interface<br/> | Y            | args              |

##### output param

| param         | type                 | **required** | explain                               |
| ------------- | -------------------- | ------------ | ------------------------------------- |
| is_follow     | string               | Y            | user id                               |
| is_reject     | string               | Y            | item type                             |
| reject_reason | string               | N            |                                       |
| args          | map[string]interface | Y            |                                       |
| other_data    | interface            | N            | otherData will transfer to actionDone |

### itemActionDone 方法定义

#### input param

| param         | type          | **required** | explain                     |
| ------------- | ------------- | ------------ | --------------------------- |
| user_uuid     | string        | Y            | user id                     |
| item_type     | string        | Y            | item type                   |
| action        | string        | Y            | add/update/delete           |
| lang          | string        | Y            | lang                        |
| graphql_query | graphql.Query | N            |                             |
| args          |               | Y            | args                        |
| other_data    | interface     | N            | otherData（from preAction） |

#### output param

none

### add_project

| param        | type     | explain      |
| ------------ | -------- | ------------ |
| uuid         | string   | project id   |
| name         | string   | project name |
| members      | []string |              |
| template_id  | string   |              |
| program_uuid | string   |              |

### update_project

| param     | type      | explain   |
| --------- | --------- | --------- |
| key       | string    | key       |
| item_type | string    | item type |
| other key | interface |           |

### estimated_manhour（simple mode）

| param | type   | explain         |
| ----- | ------ | --------------- |
| task  | string | task id         |
| hours | int64  | estimated hours |
| type  | string | estimated       |

### remain_manhour（simple mode）

| param | type   | explain               |
| ----- | ------ | --------------------- |
| key   | string | manhour-taskid-userid |
| hours | int64  | remain manhour        |
