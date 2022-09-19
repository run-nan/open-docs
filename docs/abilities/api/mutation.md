# Mutation Incident hijacking

It's better to know what it is before reading. [Graphql Mutation](https://graphql.cn/learn/queries/) 。

## Description of ability

The ONES system supports the use of Graphql operations for a lot of data. We can regard each `Graphql Mutation` (operate data\_ through Graphql) as an event. This ability is to hijack these events, thus expanding new business logic;

The ability will provide hijacking support for certain event types in advance, so that the plug-in can hijack the `Graphql Mutation` interface by specifying the event type;

At present, support for working hours-related Mutation events：addManhour,updateManhour。

## Ability use

### Statement of Competency

Add to the file plugin.yaml

```yaml
abilities:
  - id: manhour-upsert-limit # Customized id
    abilityType: item-mutation # Types of Competencies
    function:
      checkManhour: CheckManhourOp # Method name of implementation
    setting:
      prefix: check
      operating: addManhour,updateManhour #Check for relevant content before addManhour hours and updateManhour  hours.
```

### Call the method

The event type will determine whether the result of the hijacking event is successful based on whether the status code in the return value is 200.

```javascript
import { Logger } from '@ones-op/node-logger'

export async function CheckManhourOp(request: any) {
  const body = request.body || {}
  Logger.info('[Plugin] CheckManhourOp =======', body)
  return {
    body: {
      code: 200, // Note that whether the return value here is 200 will determine whether the check is successful.
      ResponseModel: 'Plugin.RegistrableDays',
      Reason: 'Success', // Can customize the reason for failure
      Type: null,
      Body: null,
    },
  }
}
```

### Example analysis

According to the above example configuration and implementation, we have completed the pre-interception check for adding hours and updating working hours. You can implement the verification logic by yourself to control whether the operation can continue. For example, you can verify that the hours added and updated must be integers.
