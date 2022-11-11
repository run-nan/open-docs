# Webhook 用户指南

- [概述](#概述)
- [使用 webhook](#使用webhook)
  - [1 前提条件](#1-前提条件)
  - <a href="#mymy">如何在 ONES 中启用 Webhook</a>
  - <a href="#3">3 配置 Webhook</a>
  - [4 场景示例](#4-场景示例)
- [消息重传机制](#消息重传机制)
- [消息类型与消息体格式](#消息类型与消息体格式)
  - [1 消息交互方式](#1-消息交互方式)
  - [2 消息字段说明](#2-消息字段说明)

## 概述

Webhook 是 ONES 系统的外部事件通知机制的实现。用户提供 Webhook 钩子的地址，并且实现简单的消息应答，就可以使用 Webhook 来获取系统中发生的事件的通知。

## 使用 webhook

### 1 前提条件

要使用我们的 Webhook 通知，需要提供一个 http 服务并实现一个 post 接口。此接口需要在收到消息后返回一个确认消息。若收不到返回的确认消息，我们的 Webhook 将尝试进行重发。在一定时间内若收不到任何确认，
则不再发送通知消息，并将自己的状态设置为未启用。此时，需要在配置页面手动重新启用后，Webhook 才能正常工作。

关于消息格式与确认消息的格式，请参考[消息类型与消息体格式](#消息类型与消息体格式)。

关于消息重传与停止/重新发送的技术细节，请参考[消息重传机制](#消息重传机制)。

### 2 如何在 ONES 中启用 Webhook

<div id="mymy">请联系我们的服务人员，我们会对您的部署实例进行升级、配置。</div>

### 3 配置 Webhook

<div id="3"> Webhook 的配置非常简单，用户只需要在配置页面中新建 Webhook 钩子，并指定自己实现的web接口地址就可以了。</div>

![PNG](FndkB5kXV4HfGyq9Q-IDFTSOsfdA.png)

我们也提供通知的过滤。用户可以在配置页面根据实际情况选择只接受满足哪些条件的通知消息。

![PNG](event.png)

配置的过程中，可以对接收端进行测试。

配置完成后，可以点击“保存并启用”来启动 Webhook 通知。

### 4 场景示例

打通项目管理平台 ONES 与内部通讯平台
您的公司使用一个统一的通讯平台，希望能够在平台上接入我们的通知消息。当 ONES 系统中发生您觉得需要通知给干系人的事件以后，将事件通知到有关的人员。

这种情况下，您可以实现一个简单的 web 接口并在 ONES 中配置 Webhook。当收到我们的通知消息后，将消息进行处理后对接到您的通知平台上。

## 消息重传机制

用户需要在其钩子 api 上实现简单的消息应答协议。用户的 Webhook 钩子收到消息后，需要将消息中的 ID 返回，这是为了让我们的消息尽可能送达。通过获取送达的消息的 ID，我们可以实现在网络环境不佳导致消息未送达时的消息重发。

目前我们的重试策略是：5 秒内未收到应答即重发，每个消息最大重发数量是 3 次。

若 Webhook 在一定的时间（30 分钟）内，未能收到任意一笔消息的应答（系统没有产生通知时，我们会每 5 分钟发送一次心跳消息），我们认为对端的 web 服务已经失效，将停止发送通知。一旦发生这种情况，
则需要用户手动的在配置页面重新启用此 Webhook。

## 消息类型与消息体格式

### 1 消息交互方式

我们将发送两种消息:

系统产生的通知；
用于定时检测接口有效性的心跳消息；
用户无论是收到的系统通知，还是心跳消息，都需要返回其 ID。如果未收到返回消息，则判定当前消息发送失败。

接收通知消息的服务可以按照需要继续处理，心跳消息可以直接应答后抛弃。通知消息和心跳消息都是 json 标准的字符串。

我们在消息中提供了部分描述信息，以便于用户的使用。根据这些描述信息，用户可以直接得到一个可读性高的消息（与我们在微信或者 ONES 网页右上角收到的通知一样），而不需要根据某些 ID 去查询其对应的值。

事件通知消息示例如下：

```json
{
  "id": "SWzhDqzxDDzgsJPB",
  "messages": [
    {
      "from_user": {
        "uuid": "6ZpgEzkk",
        "name": "贝加庞克"
      },
      "to_users": [],
      "title": "[onePiece]双方各被污染",
      "desc": "贝加庞克 将属性「状态」修改为「已计划」",
      "url": "https://xxxxxxx/#/team/BDfDqJU7/project/6ZpgEzkkmkvOVIU6/issue_type/GwNxpqQh/task/6ZpgEzkkUmmWMLeg",
      "task_uuid": "6ZpgEzkkUmmWMLeg",
      "issue_type_uuid": "GwNxpqQh",
      "issue_type_name": "需求",
      "event_type": "update_task_status",
      "event_name": "更新任务状态",
      "raw_message": {
        "uuid": "P6KGV72t",
        "team_uuid": "BDfDqJU7",
        "ref_type": "project",
        "ref_id": "6ZpgEzkkmkvOVIU6",
        "type": "system",
        "from": "BOT",
        "to": "6ZpgEzkkmkvOVIU6",
        "send_time": 1583152234311552,
        "subject_type": "user",
        "subject_id": "6ZpgEzkk",
        "action": "update",
        "object_type": "task",
        "object_id": "6ZpgEzkkUmmWMLeg",
        "object_name": "双方各被污染",
        "object_attr": "field",
        "old_value": "SriNNDVw",
        "new_value": "FXapje9B",
        "ext": {
          "field_name": "状态",
          "field_type": 12,
          "field_uuid": "field005",
          "new_option": {
            "name": "已计划",
            "uuid": "FXapje9B"
          },
          "new_value": "",
          "old_option": {
            "name": "进行中",
            "uuid": "SriNNDVw"
          },
          "old_value": "",
          "parent_message_uuid": "FBRsgsj3"
        },
        "is_can_show_richtext_diff": false
      }
    }
  ]
}
```

心跳消息如下：

```json
{
  "id": "hhqS4Wa3UQYJeHZv"
}
```

应答消息如下：

直接以字符串写入应答的消息体

```text
hhqS4Wa3UQYJeHZv
```

在使用时应尽量关注心跳答复，如遇到 webhook 没有发送消息时，可以先查看心跳是否正常。

### 2 消息字段说明

[消息体字段说明](./webhook_desc/webhook_desc.md)
