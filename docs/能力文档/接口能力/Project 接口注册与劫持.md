---
title: 接口注册与劫持
order: 2
group:
    title: 接口能力
    order: 2
---

|       能力代号        |    能力名称    |
| :-------------------: | :------------: |
| Api Register & Hijack | 接口注册与劫持 |


## 能力描述
插件可以劫持所有 project 对外提供的标准接口，支持前置/后置方式；
插件可以注册新的接口，支持新的插件专用的内部接口或外部接口；

## 能力使用

### 能力声明

在plugin.yaml中添加以下内容

```yaml
apis:
	-  
		type: prefix         //接口类型确认：addition:新增 replace:替换 enhance:增强 prefix:前置 suffix:后置
    methods:
      - GET
    url: /url            //标品url
    function:TestJack    //名称与代码里的函数名保持一致 并首字母必须大写
```

### 调用方法

在生成的 "backend/src/ApiHiJack.ts"文件中编写与apis下的function同名的函数

```javascript
import { Logger } from '@ones-op/node-logger'

export async function TestJack(request: any) {
	const body = request.body || {}
	Logger.info('[Plugin] TestJack =======', body)
	return {
		body: {
			Headers:    null,
			Body:       body,
			StatusCode: 200,
		}
	}
}
```






### 实现过程
1、配置插件声明文件 

2、配置需要注册或劫持的接口内容
参考：https://ones.ai/wiki/#/team/RDjYMhKq/space/DJn91vTZ/page/3ZfeRLms



## 示例插件

P8023 插件地址 : https://github.com/BangWork/ones-platform-plugin/tree/P8023/workflow-expansion