---
nav:
  title: CLI工具操作文档
order: 3
toc: menu
---

# 扩展



## 插件配置



## 后端能力模板配置

**模板配置说明：**

   cli工具的能力自定义功能，是建立在能力开发者设置好相关的模板上进行配置的，每当开放一个新的能力，我们希望能力开发者能按照能力模板的配置规则完成配置信息，

使用“约定大于配置”的理念。

​    [开放平台-开放能力模板配置地址](https://gitlab.plugins.myones.net/example/abilitycodesnippet.git) 

​    能力开发者将项目拉取到本地后，先对基本项目的结构进行了解。

​    --abilitys: 能力配置模板的yaml文件

​    --bankend：插件后端生成的代码

​    --codeModel：往bankend文件下的main.go增加的能力内容的go文件

​    --config：插件自身配置文件

​    --web：插件前端生成的代码

​    --workspace：插件运行环境的配置文件

   能力开发者着重关注在abilitys下添加 abilityName.yaml（能力配置模板yaml文件）和在codeModel下添加abilityName.go（能力示例代码go文件）



**（1）能力标题设置**

   abilitys下的content.yaml就是能力列表，内容如下，

```YAML
contents:
  titles:
    -
      "abilityid": "lt1ZZuQQ"
      "description": "系统提供简单认证的能力，可以让插件开发者自定义登录认证的验证逻辑"
      "defaultname": "简单登录认证"
      "configfilename": "SimpleAuth"
    -
      "abilityid": "lt1ZZuMM"
      "description": "拦截接口被调用时间"
      "defaultname": "拦截时间"
      "configfilename": "Manhours"
```



​    每新增一个能力，先在content.yaml文件下设置该能力可以被选择，能力开发者在titles下配置内容如下，

   abilitysid：  能力的UUID，长度为八位的字符串；

   description： 能力的描述；

   defaultname：能力的名称；

   configfilename：能力的模板配置文件名称



**（2）能力模板设置**

   比如"简单登录认证"能力的configfilename是“Manhours”,那么就在abilitys文件下新建一个“Manhours.yaml”文件，文件内容如下，

```YAML
abilityid: lt1ZZuMM
defaultname: 拦截时间
templates:
  abilities:
    - id: manhour-upsert-limit
      name: 拦截时间
      abilityType: ManhourLimit
      function:
        impl: CheckManhourOp
      setting:
        timing: ${1}
        operating: ${2}
customizes:
  -
    value: ${1}
    msg: abilities.setting.timing的配置
    help: 时间点确认：前置(prefix)或者后置(suffix)
    type: 104
    scope: prefix,suffix
    scopedesc: 前置接口,后置接口
    defaultvalue: prefix
    allowUserConfig: true
  -
    value: ${2}
    msg: abilities.setting.operating的配置
    help: 针对时间点的函数名称
    type: 105
    scope: addManhour,updateManhour
    scopedesc: 添加工时,更新工时
    defaultvalue: addManhour
    allowUserConfig: true
```

 能力模板主要分为以下四个内容：

​     "abilitysID":    能力ID，要求与content.yaml设置的一致   
​     "defaultname": 能力名称，要求与content.yaml设置的一致 

​     "templates"  : 往plugin.yaml文件添加的能力模板内容

​     "customizes" : 自定义能力填写规则



| 属性名称   |              | 属性作用                                                     |
| ---------- | ------------ | ------------------------------------------------------------ |
| customizes |              | 自定义能力填写规则                                           |
|            | value        | 与template下的${num}对应，指定需要自定义的内容               |
|            | msg          | 在交互界面上，显示自定义内容的选项信息                       |
|            | help         | 在交互界面上，显示自定义内容的帮助信息                       |
|            | type         | 在交互界面上，显示自定义内容的类型  101：input（文本框） 102：textarea（多行文本） 103：password（密码） 104：select（单选） 105：multiSelect（多选） |
|            | defaultvalue | 自定义内容的默认值                                           |
|            | scope        | 目前生效类型有104、105，属性作用是给单选和多选提供选项内容，填写时用逗号隔开选项信息，如"key1,key2,key3" |
|            | scopedesc    | 单选和多选的选项内容的具体描述，填写时用逗号隔开选项信息，例如能力开发者想要对key2进行描述，可以这样填写",key2的描述," |
|            | rule         | 目前生效类型有101、102、103，对输入内容进行正则校验，例如"^[A-Z][A-Za-z]*$",要求输入字符串是大小写的中英文字符串 |



尽量遵循以下约定：

   1、 abilitysID和defaultname与content.yaml所写的配置一致；

   2、在template中的结构与plugin.yaml的结构保持一致，允许用户自定义属性在属性名称前添加下划线；

   3、在template中的${num}出现数量与customizes的${num}数量一致

   4、设置${num}的类型的时候，记得添加相关属性，例如类型为“104”的时候，记得添加“scope”、“scopedesc”，当然可以在每个自定义内容中都添加这些选项，在不设置的时候可以让属性内容为空。



**（3）能力示例代码设置**

   在 codemodel文件下添加configfilename.go文件，例如Manhours.go文件内容如下，

```Go
package main

import (
	"encoding/json"
	"fmt"
	"github.com/bangwork/ones-plugin-common/golang/common"
	"net/http"
)

// 实现计算脚本属性统计能力
func (p *mockPlugin) GetAllManHours(request *common.HttpRequest) *common.HttpResponse {
	fmt.Println("进入工时统计方法....")
	resp := new(common.HttpResponse)
	type Manhours struct {
		TaskUUID string `json:"taskUUID"`
		Manhour  int64  `json:"value"`
	}
	type ManhourResp struct {
		Manhour []Manhours `json:"values"`
	}
	var mhr ManhourResp
	body, _ := json.Marshal(mhr)
	resp.StatusCode = http.StatusOK
	resp.Body = body
	return resp
}
```

   当“Manhours”能力被选中并且配置后，backend文件下会生成"ability+manhours.go"文件。

   编写能力示例代码 **import导入相关包的时候留意导入的包是否完整**，不然会在生成项目的时候失败。



## 前端能力说明



## 后端能力说明



## 相关api文档
