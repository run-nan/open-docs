# 简单登录校验

## 能力描述

为插件提供对接第三方登录校验协议的能力。

使用该能力可以自定义登录的校验逻辑，从而实现自定义的登录方式。

💡 提示： 在接口请求返回值为 200，并且 response header 中 set-cookie 代表登录成功

## 能力使用

1. 在插件的 plugin.yaml，声明需要使用 SimpleAuth 简单登录校验能力

```yaml
abilities:
  - id: simple-login // id 可以自定义
    name: 登录  // name 自定义
    abilityType: SimpleAuth //  SimpleAuth 为简单登录能力
    function:
      validateFunc: SimpleAuthValidate  // 需要替换 validateFunc 的方法名
```

2. SimpleAuthValidate 的方法实现中，你需要返回将要登录的 user 的 uuid。能力将为你返回的 user 实现自动登录。返回格式参考如下：

```ts
// 这段代码示例实现了一个免校验的登录方式
export async function SimpleAuthValidate(
  request: PluginRequest
): Promise<PluginResponse> {
  const { user_uuid } = request?.body as any;
  if (!user_uuid) {
    return {
      body: {
        code: 400,
        reason: "缺少参数 user_uuid",
      },
    };
  }
  return {
    body: {
      code: 200,
      data: {
        uuid: user_uuid,
      },
    },
  };
}
```

## 效果测试

开发完成后你可以使用下面的 curl 方式访问接口查看实现效果。

⚠️ 注意：替换相应的地址和参数(所有 xxxx 的地方都需要替换为你自己的)

```
#  Ones-Plugin-Id, Ones-Check-Id 可以在你的 local.yaml 中找到。分别是 instance_uuid， team_uuid
#  Ones-Plugin-AbilityId 是你在 plugin.yaml 中声明的能力 id
#  body 中的 user_uuid 必须为系统中存在的 ID。 比如你可以写 local.yaml 中的 user_uuid
curl --location --request POST 'https://xxxx.com:xxxx/project/api/project/ability/simple_auth_login' \
--header 'Ones-Check-Point: team' \
--header 'Ones-Plugin-Id: xxxx' \
--header 'Ones-Check-Id: xxxx' \
--header 'Ones-Plugin-AbilityId: xxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
   "user_uuid": "xxxx"
}'
```
