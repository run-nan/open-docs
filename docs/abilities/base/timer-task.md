---
sidebar_position: 15
---

# Timer

## Ability Declare

The timer ability supports timing task execution.

Timer ability supports two definition types (unit: second):

- fixed interval time: periodic execute task with a given second delay (range: [1,315360000]);
- cron expression: execute tasks with a given cron expression.

## Ability Use

Declare use ability in `plugin.yaml`:

```yaml
abilities:
  # fixed interval time
  - id: 98b399b0-NTtg
    name: 'fixed interval time task'
    abilityType: TimerTask
    function:
      taskActionFunc: intervalTaskAction
    config:
      - key: interval
        value: 30 # execute every 30 seconds
        fieldType: Number
        show: false
        required: true
  # cron expression
  - id: 98b399b0-pbx9
    name: 'cron expression task'
    abilityType: TimerTask
    function:
      taskActionFunc: cronTaskAction
    config:
      - key: cron
        value: '0 0 6 * * *' # execute every day at 06:00:00 am
        fieldType: Input
        show: false
        required: true
```

Declare scheduled task call methods in `backend/index.js`:

```typescript
// fixed interval time task
async function intervalTaskAction() {
  // ...
}

// cron expression task
async function cronTaskAction() {
  // ...
}
```

## FAQ

##### How to configure the parameters of the timer ability?

When use the "fixed interval time", the parameter value is a second delay; when use "cron expression", the parameter value is cron expression with second unit. Note that a timer ability can only be configured in one type.

##### What if I want to create multiple timers tasks?

You can declare multiple timer capabilities in the `Abilities`, and define the value of the timer's ability to define different function names respectively to distinguish different timer tasks.
