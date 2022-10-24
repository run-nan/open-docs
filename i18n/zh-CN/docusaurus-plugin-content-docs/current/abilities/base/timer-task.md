---
sidebar_position: 15
---

# 定时器

## 能力描述

定时器能力提供定时任务执行功能。

定时器能力支持 2 种定义方式（单位：秒）：

- 固定间隔时间：按指定间隔时间周期性的执行任务 (取值范围: [1,315360000])；
- cron 表达式：按 cron 表达式定时执行任务。

## 能力使用

在 `plugin.yaml` 中声明使用该能力：

```yaml
abilities:
  # 固定间隔时间类型
  - id: 98b399b0-NTtg
    name: 固定间隔时间任务
    abilityType: TimerTask
    function:
      taskActionFunc: intervalTaskAction
    config:
      - key: interval
        value: 30 # 循环间隔30秒执行
        fieldType: Number
        show: false
        required: true
  # cron表达式类型
  - id: 98b399b0-pbx9
    name: cron任务
    abilityType: TimerTask
    function:
      taskActionFunc: cronTaskAction
    config:
      - key: cron
        value: '0 0 6 * * *' # 每天上午06:00:00执行
        fieldType: Input
        show: false
        required: true
```

在 `backend/src/index.ts` 中声明定时任务调用方法：

```typescript
// 固定间隔时间任务
async function intervalTaskAction() {
  // ...
}

// cron任务
async function cronTaskAction() {
  // ...
}
```

## FAQ

##### 定时器能力参数如何配置？

当为 "固定间隔时间类型" 时，参数值为大于 0 的整数间隔时间；当为 "cron 表达式类型" 时，参数值为 cron 表达式，两者的单位均为秒。 注意一个定时器能力只能使用一种类型方式配置。

##### 如果我想创建多个定时器任务怎么办？

可以在 `abilities` 中声明多个定时器能力，并且将定时器能力的 `taskActionFunc` 的值分别定义为不同的函数名称，以此来区分不同的定时器任务。
