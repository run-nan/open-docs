---
id: timer
sidebar_position: 8
description: 提供简便的定时任务使用方法。
---

# 定时器

## 要求

| ONES      |
| :-------- |
| v3.10.52+ |

## 概述

在开发的过程中，我们经常需要定时的执行一些操作。定时器能力提供了一种设置定时任务的方式，可以让你的程序在指定的时间点执行，也可以按照一定的间隔时间执行。

## 使用

定时器支持定频和定时两种定义方式：定频为按固定间隔时间执行；定时为在某一时间点执行，使用[cron](https://help.aliyun.com/document_detail/133509.html)表达式。

### 定频

#### 第一步：添加配置

使用`npx op add ability` 添加`timer-task`类型的能力，会在插件配置文件中添加能力配置和生成`timer-task.ts`文件。在配置中，定频方式的`key`字段的值为`interval`，`value`字段的值为间隔时间，单位为**秒**。

示例配置：每个 30 秒执行一次`taskAction`函数。

```yaml
abilities:
  - id: vvOZFOyt
    name: 固定间隔时间任务
    version: 1.0.0
    abilityType: TimerTask
    function:
      taskActionFunc: taskAction #定时任务的函数名
    config:
      - key: interval #定频方式
        value: 30 #间隔时间为30s
        fieldType: Number
        show: false
        required: true
```

#### 第二步：编写定时任务

函数名需与能力配置中的`taskActionFunc`字段相同

```typescript
export async function taskAction() {
  //...
}
```

### 定时

#### 第一步：添加配置

在插件的配置文件中添加能力配置，在配置中，定时方式的`key`字段的值为`cron`，`value`字段的值为`cron`表达式。

示例配置：在每分钟的第 30 秒执行一次`cronTaskAction`函数

```yaml
abilities:
  - id: XKggffGc
    name: cron任务
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

#### 第二步：编写定时任务

```typescript
export async function cronTaskAction() {
  //...
}
```

:::caution 注意

定时器中设置的时间均为服务器上的时间，不保证与本地时间一致。

:::

## 常见问题

**定时器能力参数如何配置？**

当以定频方式配置时，`value`值必须是大于 0 的整数间隔时间；当以定时方式配置时，`value`值为`cron`表达式。 注意一个定时器能力只能使用一种类型方式配置。

**如果我想创建多个定时器任务怎么办？**

可以在 `abilities` 中声明多个定时器能力，并且将定时器能力的 `taskActionFunc` 的值分别定义为不同的函数名称，以此来区分不同的定时器任务。
