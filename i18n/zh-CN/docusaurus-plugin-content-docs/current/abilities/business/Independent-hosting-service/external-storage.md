# 使用外部存储

## 场景描述

用户希望将 ONES 系统的底层存储对接到其他的存储服务，如用户自建的文件存储服务或其他 ONES 系统没有直接支持的存储服务。

## 解决方案

### 实现思路：

使用 ONES 系统 `generic` 存储方式（通用存储），并且使用独立应用实现 `generic` 的接口规范并将相关文件操作转化到外部存储。如需要使用 wiz，独立应用还需要实现 wiz 通用云存储的接口规范。通过插件使用托管独立应用能力将开发的服务进行部署，实现对接外部存储。

### 实现原理：

```mermaid
sequenceDiagram
    ONES->>+独立应用: 上传文件
    独立应用->>+外部存储: 上传文件
    外部存储->>-独立应用: 返回结果
    独立应用->>-ONES: 返回结果

    ONES->>+独立应用: 下载文件
    独立应用->>+外部存储: 下载文件
    外部存储->>-独立应用: 返回结果
    独立应用->>-ONES: 返回结果
```

## 插件开发

文件存储插件的开发分为两步，分别是独立应用的开发及插件托管独立应用能力添加。

### 文件存储独立应用开发

#### 第一步：编写独立应用管理脚本

独立应用可执行程序名字为：`file_storage`

```shell title="workspace/start.sh"
#!/bin/bash
usage() {
    echo -e "Usage: $(basename $0) [options]"
    echo -e " start 启动"

    exit 1
}
# 处理启动服务
start() {
    echo "/usr/bin/nohup ./file_storage --port=$PARAMS_PORT --args=$ARGS >/dev/null 2>&1 &"
    /usr/bin/nohup ./file_storage --port=$PARAMS_PORT --args=$ARGS > nohup.out 2>&1 &
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

#### 第三步：实现 ONES 系统 generic 文件存储的接口规范

若还需开启 wiz，需一并实现 wiz 通用云存储的接口规范。ONES 系统的 `generic` 通用存储和 wiz 通用云存储的接口规范可查看相关文档，两者需实现以下接口：

```go
//Goland
package router

func Run(addr string) error {
	gin.SetMode(gin.ReleaseMode)
	api := gin.Default()

	//project generic storage
	generic := api
	generic.GET("/download/:hash", Download)
	generic.POST("/upload", Upload)
	generic.POST("/preupload", PreUpload)
	generic.POST("/mkzip", Mkzip)
	generic.POST("/persist", Persist)

	//wiki wiz 以下接口为wiz通用云存储依赖接口
	wiki_wiz := api.Group("wiki")
	wiki_wiz.GET("/download", wiki.Download)
	wiki_wiz.GET("/download_stream", wiki.DownloadStream)
	wiki_wiz.POST("/upload", wiki.Upload)
	wiki_wiz.POST("/upload_stream", wiki.UploadStream)
	wiki_wiz.DELETE("/file", wiki.Delete)
	wiki_wiz.GET("/exists", wiki.Exists)
	wiki_wiz.POST("/copy", wiki.Copy)
	wiki_wiz.POST("/move", wiki.Move)

	return api.Run(addr)
}
```

#### 第四步：编译成可执行文件，并验证可执行文件的兼容性

### 添加托管独立应用能力

配置如下所示：可按需修改配置

```yaml title="config/plugin.yaml"
abilities:
  - id: xxxxxxxx
    name: xxxxxxx_file_storage
    abilityType: web_service
    version: 1.0.0
    config:
      - fieldType: Input
        key: root_route
        show: false
        value: storage
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
