import Image from '@theme/IdealImage'
import wikiNewPage01 from './images/wiki-new-page-01.png'

# 场景：wiki接入新页面类型


## 场景描述

用户希望通过插件向wiki接入新页面类型，如接入葡萄城的表格编辑器。

## 解决方案

### 实现思路：

标品侧wiki-api已抽象出`editor`，从而支持动态的添加和使用不同`editor`。

使用独立应用实现用户自定义的 `editor` 的接口规范，通过开放平台借助于插件支持向wiki接入新页面类型。

### 实现原理：

<Image img={wikiNewPage01}></Image>


## 插件开发

wiki接入新页面类型插件的开发分为两步，分别是独立应用的开发及插件托管独立应用能力添加。

### wiki接入新页面类型独立应用开发

#### 第一步：编写独立应用管理脚本

独立应用可执行程序名字为：`GrapeCityServer`

```shell title="workspace/start.sh"
#!/bin/bash
usage() {
    echo -e "Usage: $(basename $0) [options]"
    echo -e " start 启动"

    exit 1
}
# 处理启动服务
start() {
    echo "/usr/bin/nohup ./GrapeCityServer --port=$PARAMS_PORT --args=$ARGS >/dev/null 2>&1 &"
    /usr/bin/nohup ./GrapeCityServer --port=$PARAMS_PORT --args=$ARGS > nohup.out 2>&1 &
}
# 处理停止服务
stop() {
  # 这里的 pid.txt 必须和服务内部保持一致
  echo "kill -9 $(cat pid.txt)"
  kill -9 "$(cat pid.txt)"
}
parse_config() {
    for arg in ${ARGS}
    do
        case ${arg} in
            --port=*)
                PARAMS_PORT=${arg#*=}
                ;;
            --path=*)
                PATH=${arg#*=}
                ;;
            --args=*)
                ARGS=${arg#*=}
                ;;
        esac
    done
}
ARGS="$@"
# 申明指令！！！(这里是入口)
parse_config
case $1 in
help) usage;;
start) start;;
stop) stop;;
*) usage;;
esac
```

#### 第二步：按照独立应用规范编写程序启动入口

```go
//Goland
package main

var (
	port int
	args string
)

func initFlags() {
	flag.IntVar(&port, "port", 18000, "service port")
	flag.StringVar(&args, "args", "", "service other parameters")
	flag.Parse()
	parse_other_args()
}

func parse_other_args() {
    //将传入的args字符串按照规范进行解析，规范可自定义，但在设计中args字符串中不可有空白符
}

//独立应用保存进程PID
func savePid() {
	pid := os.Getpid()
	log.Infof("process PID: %d \n", pid)

	err := os.WriteFile("./pid.txt", []byte(strconv.Itoa(pid)), 0644)
	if err != nil {
		log.Fatalf("Logging PID failed: %+v", err)
	}
}

func main() {
        //解析参数
	initFlags()
        savePid()

        //... 其他初始化内容
        //启动web service
	addr := fmt.Sprintf("%s:%d", "localhost", port)
        // router.Run 函数可参见步骤3
	err := router.Run(addr)
	if err != nil {
		log.Fatal("start service fail")
	}
}
```

#### 第三步：按照Editor Server规范实现独立服务相关的接口

自定义Editor Server服务需要支持http、websocket方法，主要包括：

```go
//Goland
package router

func Run(addr string) error {
	gin.SetMode(gin.ReleaseMode)
	app := gin.New()

	//http request
	app.POST("/getToken", controllers.GetToken)

	//websocket request
	app.GET("/edit", controllers.Edit)

	return app.Run(addr)
}
```

#### 第四步：编译成可执行文件，并验证可执行文件的兼容性

### 添加wiki新页面类型插槽

开发插槽，可能需要获取独立应用（Editor Server）url地址。通过fetchONES获取独立服务地址信息，接口参见[服务发现](./apis/independent-service)


### 添加托管独立应用能力

配置如下所示：可按需修改配置

```yaml title="config/plugin.yaml"
abilities:
  - id: xxxxxxxx
    name: xxxxxxx_GrapeCityServer
    abilityType: web_service
    version: 1.0.0
    config:
      - fieldType: Input
        key: root_route
        show: false
        value: /GrapeCityServer
      - fieldType: Input
        key: args
        show: true
        value: ''
      - fieldType: Input
        key: start_file
        show: false
        value: start.sh
      - fieldType: Switch
        key: is_open
        show: false
        value: true
```
