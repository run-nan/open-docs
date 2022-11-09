---
sidebar_position: 3
---

# 接口劫持（待遗弃）

## 能力描述

插件可以劫持所有 project 对外提供的标准接口，支持前置、后置和替换方式；

- 前置劫持，是指当请求进入标准系统时，未被处理前就被转发到插件，由插件对请求进行修改后，回传给标准系统并继续执行。一般用于修改请求的参数，或检查请求是否满足特定条件；
- 后置劫持，是指当请求在标准系统完成处理后，将会被传递给插件，由插件对齐进行内容进行修改后再回传给标准系统，并返回给请求方。一般用于对应答内容进行加工；
- 另外，插件可以”替换“掉现有系统的某个接口，让插件能够对现有系统的某个请求进行完全的自定义处理。

:::caution 注意

**劫持**和**替换**都是比较底层的操作，可能对系统功能产生未知风险。

同时，目前对某个接口，只能有一个插件对它进行劫持或替换。

多个插件处理同一个接口会存在冲突。

只有在其它能力都不满足需求的情况下，才能使用接口劫持能力。

**待遗弃能力，不保证后续的持续兼容性。！！！**

:::

## 能力使用

### 接口类型说明

#### replace（插件替换标品接口）

![image](registration&hijacking2.jpg)

⚠️ 在插件代码中，如果插件还需要请求标品被替换的接口，需要在请求头中带上

```javascript
headers: { 'Replace': "replace", }
```

#### prefix（插件前置拦截标品接口）

![image](registration&hijacking3.jpg)

#### suffix（插件后置拦截标品接口）

![image](registration&hijacking4.jpg)

### 能力声明

在 plugin.yaml 中添加以下内容

```yaml
apis:
    - type: replace             //接口类型： replace:替换 prefix:前置 suffix:后置
    methods:                    //接口请求方式
      - GET
    url: /users/me              //劫持接口url
    scope: project/wiki         //project或wiki接口，没有该属性则默认为project
    function: jackFunc          //名称与代码里的函数名保持一致
    - type: prefix
    methods:
      - GET
    url: /标品url
    function: prefixFunc
     - type: suffix
    methods:
      - GET
    url: /标品url
    function: suffixFunc

```

:::caution 注意

如果修改了插件配置文件（`config/plugin.yaml`），需要运行 `npx op invoke clear` 并重新运行 `npx op invoke run` 指令才能使配置生效。
:::

### 调用方法

在 `backend/src/index.ts`文件下编写与 apis 配置的函数方法体，

```javascript
import { Logger } from '@ones-op/node-logger' //需要导入的依赖依赖包
import { fetchHttp, fetchONES } from '@ones-op/node-fetch'


//replace 劫持的接口对应方法
export async function jackFunc(
    request: PluginRequest<Record<string, any>>
): Promise<PluginResponse> {
    let userUUID = ''
    let userToken = ''
    if (request.headers['Ones-User-Id'] != null) {
    userUUID = request.headers['Ones-User-Id']
    userToken = request.headers['Ones-Auth-Token']
}
const response = await fetchONES({
    path: `/users/me`,
    method: 'GET',
    headers: {
        'Ones-User-Id': [userUUID],
        'Ones-Auth-Token': [userToken],
    },
    root: false, //默认为true
})
if (response) {
    return response
}
return {
    body: {},
}

//prefix 前置接口劫持
export async function prefixFunc(
    request: PluginRequest<Record<string, any>>
): Promise<PluginResponse> {
    let body = request?.body
    // code
    return {
        // 返回被处理后或者按原样返回的请求头
        body: body,
    }
}

//suffix 后置接口劫持
export async function suffixFunc(
    request: PluginRequest<Record<string, any>>
): Promise<PluginResponse> {
    let body = {}
    // code
    return {
        // 可以返回任意 body
        body: body,
    }
}

```

### 实现过程

:::caution 注意

**`replace`**接口请求参数需要注意以下几点，

1、劫持的是标品的 url，所以填写的 url 跟标品保持一致；

2、确认被替换接口本身是 POST 请求还是 GET 请求；

3、确认被替换接口请求头需要设置什么参数，请参考 api 接口文档。【[ONES-API](../../ones/readme/index.md)】
:::

```javascript
url：https://yourhost/users/me
headers:
    Ones-User-Id:{user_uuid}
    Ones-Auth-Token:{user_token}
    ...
method: GET
```

或命令行内容输入以下内容，

```javascript
curl --location --request GET 'https://yourhost/users/me' \
--header 'Ones-User-Id: {user_uuid}' \
--header 'Ones-Auth-Token: {user_token}' \
--header 'Content-Type: application/json' \
--data ''
```

返回结果如下：

![img](registertion&hijack7.png)
