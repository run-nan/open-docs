---
id: timer
sidebar_position: 8
description: Provides a simple way to use timed tasks.
---

# Timer

## Requirements

| ONES      |
| :-------- |
| v3.10.52+ |

## Overview

In the process of development, we often need to perform some operations regularly. The Timer ability provides a way to set a timed task, allowing your program to execute at a specified time point, or at a certain interval.

## Usage

The timer supports two definition methods of fixed frequency and timing: the frequency is executed at a fixed interval; the timing is executed at a certain point in time, using [cron](https://help.aliyun.com/document_detail/133509.html) expression.

### Fixed frequency

#### Step 1: Add configuration

Use `npx op add ability` to add the ability of `timer-task` type and select `1.0.0` template, which will add the ability configuration to the plugin configuration file and generate `timer-task.ts` file. In the configuration, the value of the `key` field in the fixed frequency mode is `interval`, and the value of the `value` field is the interval time, in **second**.

Example: execute the `taskAction` function every 30 seconds.

```yaml title="config/plugin.yaml"
abilities:
  - id: vvOZFOyt
    name: TimerTask
    version: 1.0.0
    abilityType: TimerTask
    function:
      taskActionFunc: taskAction #The function name of the scheduled task
    config:
      - key: interval #Fixed frequency mode
        value: 30 #The interval time is 30s
        fieldType: Number
        show: false
        required: true
```

#### Step 2: Write a scheduled task

The function name must be the same as the `taskActionFunc` field in the ability configuration

```typescript
export async function taskAction() {
  //...
}
```

### Timing

#### Step 1: Add configuration

Use `npx op add ability` to add the ability of `timer-task` type and select `1.0.0-cron` template, which will add the ability configuration to the plugin configuration file and generate `timer-task.ts` file. In the configuration, the value of the `key` field of the timing method is `cron`, and the value of the `value` field is `cron` expression.

Example: execute the `cronTaskAction` function every 30th second of the minute

```yaml title="config/plugin.yaml"
abilities:
  - id: XKggffGc
    name: TimerTask
    version: 1.0.0
    abilityType: TimerTask
    function:
      taskActionFunc: cronTaskAction
    config:
      - key: cron
        value: '30 * * * * *'
        fieldType: Input
        show: false
        required: true
```

#### Step 2: Write a scheduled task

```typescript
export async function cronTaskAction() {
  //...
}
```

:::caution NOTICE

The time set in the timer is the time on the server, which is not guaranteed to be consistent with the local time.

:::

## FAQ

**How to configure timer ability params?**

When configured in fixed frequency mode, `value` must be an integer interval greater than 0; when configured in timing mode, `value` must be a `cron` expression. Note that a timer capability can only be configured in one type.

**What if I want to create multiple timer tasks?**

Multiple timer abilities can be declared in `abilities`, and the values of `taskActionFunc` of the timer abilities can be defined as different function names to distinguish different timer tasks.
