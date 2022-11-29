# Mutation event hijacking

## Requirements

| **ONES** |
| -------- |
| 3.6+     |

## Overview

Many data in the ONES support Graphql operations. We can regard each Graphql Mutation (operating data through Graphql) as an event, and use the **Mutation event hijacking** ability to hijack these events and perform some additional checks or operations, thereby expanding new business logic. abilities provide hijacking support for certain event types in advance, and plugin can hijack corresponding Graphql Mutation events by specifying event types.

The event types that currently support hijacking are: `checkManhour` (man-hour verification)

## Usage

Using the ability to hijack the `checkManhour` event type, you can perform some verification logic on the man-hour operation. If the verification fails, the modification operation will report an error. Only after passing the verification can the operation be completed normally.

The following are the steps to use the pre-intercept verification for the two operations of adding man-hours and updating man-hours. During the development process, developers can write business codes according to actual needs, such as verifying that the added and updated man-hours must be integers, Scenarios such as modifying the value range.

### Step 1: Add ability

Add the Mutation event hijacking ability in the plugin configuration file, you can use `op add ability` to add the `item-mutation` ability.

Example configuration:

```yaml
abilities:
  - id: Ksmnf_Mc
    name: 事件劫持
    version: 1.0.0
    abilityType: item-mutation
    function:
      checkManhour: CheckManhourOp # checkManhour is the event type, CheckManhourOp is the processing function
    config:
      - key: prefix # Hijacking position, prefix means pre-operation
        value: check # Indicates that the check operation is to be performed
        fieldType: Input
      - key: operating # operating indicates hijacking events
        value: addManhour,updateManhour # Indicates that the two events addManhour and updateManhour are to be hijacked
        fieldType: Input
```

### Step 2: Write the handler function

Write the processing function `CheckManhourOp` in `backend/src/item-mutation.ts` of the plugin project, and this function will be called when the hijacking event occurs in the configuration. The event type of `checkManhour` will judge whether the check of this event is successful or not according to whether the returned status code is **200**.

The `CheckManhourOp` function template looks like this:

```typescript
interface CheckManhourOpRequest {
  Selections: {
    args: {
      start_time: number
      type: string
    }
  }[]
}
// The man-hour verification logic can obtain the relevant information of this request from Selections
export async function CheckManhourOp(request: any) {
  const body = request.body || {}
  const { Selections } = body as CheckManhourOpRequest
  Logger.info(JSON.stringify(Selections))
  return {
    body: {
      code: 200,
      ResponseModel: 'Plugin.RegistrableDays',
      Reason: 'Success',
      Type: null,
      Body: null,
    },
  }
}
```
