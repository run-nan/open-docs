# 插件接口标准错误处理
## 能力描述
当接口异常时，插件可以自行决定返回的错误类型与内容

## 能力使用
返回错误格式的body，如下，

example：

```javascript
return {
    body: {
      code: 502,
      reason: "插件服务不可用",
      type: 'error',
      model: 'plugin.xxx',
   }
}

```
参数属性如下，

|参数|类型|说明|
| ----- | ----- | ----- |
|code|number|状态码|
|reason|string|错误原因描述|
|type|warning \| error|错误类型|
|model|plugin.xxx|错误的模型(以”plugin.“开头的返回值)|
