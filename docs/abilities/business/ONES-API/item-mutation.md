---
sidebar_position: 4
---

# Item mutation

## Requirements

| **ONES** |
| :------- |
| v3.6.0+  |

## Overview

Many data in the ONES support Graphql operations. We can regard each [Graphql Mutation](https://graphql.cn/learn/queries/) as an event, and use the **Mutation event interception** ability to intercept these events and perform some additional Check or operate to expand new business logic. The ability will provide interception support for certain event types in advance, and the plugin can intercept the corresponding `Graphql Mutation` event by specifying the event type.

The event types that currently support interception are: `checkManhour` (man-hour verification)

## Usage

### checkManhour

Using the ability to intercept the `checkManhour` event type, you can perform some verification logic on the man-hour operation. If the verification fails, the modification operation will report an error. Only after passing the verification can the operation be completed normally.

The following are the steps to add pre-verification for **Add man-hour** and **Update man-hour**. During the development process, developers can write business code according to actual needs, such as verifying that the added and updated man-hour must be integers, modifying the value range, and other scenarios.

#### Step 1: Add ability

Use `npx op add ability` to add `item-mutation` ability.

Example configuration:

```yaml title="/config/plugin.yaml"
abilities:
  - id: Ksmnf_Mc
    name: Item mutation
    version: 1.0.0
    abilityType: item-mutation
    function:
      checkManhour: CheckManhourOp # checkManhour is the event type, CheckManhourOp is the processing function
    config:
      - key: prefix # interception position, prefix means pre-operation
        value: check # Indicates that the check operation is to be performed
        fieldType: Input
      - key: operating # operating indicates interception events
        value: addManhour,updateManhour # Indicates that the two events addManhour and updateManhour are to be intercepted
        fieldType: Input
```

#### Step 2: Write the handler function

Write the processing function `CheckManhourOp` in the `backend/src/item-mutation.ts` of the plugin project, which will be called when the event intercepted in the configuration occurs. The event type of `checkManhour` will judge whether the inspection of this event is successful or not according to whether the returned status code is **200**.

The `CheckManhourOp` function template looks like this:

```typescript title="backend/src/item-mutation.ts"
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
