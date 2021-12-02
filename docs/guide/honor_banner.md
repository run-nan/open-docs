---
nav:
  title: 指南
  order: 1
---
# Sample1

## 1、插件实现内容

​		页面顶部安全提示栏内容提示在插件中配置的内容

​		模板文件框架

​		backend-->插件后端开发相关文件

​			main.go--> 主要编写代码文件

​			mockPlugin.go-->相关的方法

​		config --> 插件配置相关文件

​			plugin.yaml --> 插件的配置信息

​		web -->  插件前端开发相关文件

​		workspace --> 其他相关的插件配置文件

​			config.yaml -->本地插件配置

​			plugin.sql -->  插件相关的数据库配置

## 2、插件配置

​		作为一名插件开发者，拿到开发模板文件前，首先建议对插件的配置文件熟悉，了解配置文件的参数信息，文件位置：**config/pugin.yaml**

```yaml
service:
  app_id: 9_mIJILb 		#插件应用ID 
  name: 顶部安全提示栏	 #插件名称
  version: 1.0.0
  description: 顶部安全提示栏 #插件描述
  mode: org
  logo: ''
  language: golang
  language_version: 1.14.0
  host_version: 0.2.0
  host_sub_version: 1.14.0
  min_system_version: 3.2.0
  auth:
  config:
    - key: "key_name"
      value: "本系统外网用户可访问，系统中反馈信息或上传附件请注意遵循信息安全要求。"
      type: 102       #101：input   102：inputtextarea    103：password
      required: true  #是否必填
  permission:
apis: 	#插件接口配置
  - type: addition       #接口类型 addition 新增 replace 替换 enhance 增强
  methods:               #接口请求方法
      - GET
    url: /getBanner  		 #接口请求url
    function: GetBanner  #接口请求方法，要求与代码中的名称保持一致，并首字母要大写
  - type: addition
    methods:
      - POST
    url: /setBanner
    function: SetBanner
  - type: addition
    methods:
      - POST
    url: /getPluginConfigFunc
    function: GetPluginConfigFunc
modules: #前端模块声明
  - id: ones-global-banner-3QC4
    title: banner
    entry: modules/ones-global-banner-3QC4/index.html
    moduleType: ones:global:banner
  - id: settings-t6K6
    title: 安全提示语配置
    entry: modules/settings-t6K6/index.html
    moduleType: settings

```

## 3、配置方法

​		在apis下配置了"GetPluginConfigFunc()"，此时需要来到代码中进行具体的方法开发，文件位置：backend/main.go

```go
func (p *mockPlugin) GetPluginConfigFunc() *common.HttpResponse {
   keyName, err := p.getPluginConfig("key_name")
   if err != nil {
      fmt.Println("err:", err.Error())
   }
   fmt.Println("key_name:", keyName)
   return &common.HttpResponse{
      StatusCode: 200,
   }
}
```

​		方法实现内容：通过"getPluginConfig()"方法获得在pugin.yaml中的”config“属性下"key"为"key_name"的配置信息，插件启用的前端界面也可以对其进行修改，并且可在插件后端中拿到修改的内容。

​		"getPluginConfig()"方法具体实现在**backend/mockPlugin.go**文件下

```go
func (p *mockPlugin) getPluginConfig(key string) (val string, err error) {
   // 从平台数据该插件的配置
   type PluginConfigList struct {
      InstanceUUID string `json:"instance_id"`
      TeamUUID     string `json:"team_uuid"`
      OrgUUID      string `json:"organization_uuid"`
      AppUUID      string `json:"app_id"`
   }
   ....
}
```

​		在本地开发过程中，可以使用postman可以对配置的方法进行请求，http://127.0.0.1:9001(your-host-name)/team/teamuuid/getPluginConfigFunc，给头部添加参数信息如下，

```properties
Ones-User-Id:WhFspqKJ （userid）
Ones-Auth-Token:tmPc7h2FX3nRy3p7zokmYyTfgZVQznsCUVi8nsb6aonWalO5U5zdQsQPFQmQmsNy （usertoken，可以访问 http://your-host-name/auth/login 得到）
Ones-Check-Point:team
Ones-Plugin-Id:f6f976bf5 （插件安装的实例ID）
```



## 4、添加数据表

​		在开放插件过程中，添加的数据表内容统一在插件数据库**”open_platform_plugin“**中，数据表的配置文件在**workspace/plugin.sql**中，在sql文件中可以添加相关的sql语句完成配置，例如，

```sql
CREATE TABLE IF NOT EXISTS `{{banner}}`  (
  `team_uuid` varchar(8) COLLATE latin1_bin NOT NULL DEFAULT '' COMMENT '团队uuid',
  `content` varchar(512) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '内容',
  `update_time` int(11) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`team_uuid`)
) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
```

​		这时候开发者可以选择在插件安装的时候，添加数据表配置，在main.go的 "Install()" 方法添加如下内容，

```go
// 安装插件
func (p *mockPlugin) Install() common.PluginError {
   err := p.resource.GetLocalDB().ImportSql("plugin.sql")
   if err != nil {
      return err
   }
   return nil
}
```






