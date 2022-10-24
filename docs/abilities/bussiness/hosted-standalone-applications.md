# 托管独立应用

## 能力描述

&emsp;&emsp;开放平台提供通过部署独立应用的能力，以插件的形式部署独立的 webservice，满足更定制的功能。 使用这个能力，你能通过插件部署管理一个自己的 webservice , 并通过特定的 URL 访问它。

&emsp;&emsp;💡**只能在 nodejs 插件中使用这个能力**

## 能力使用

在 plugin.yaml 中增加能力

```yaml
abilities:
  - id: qRUFfcomn
    name: 'web service'
    version: 1.0.0
    abilityType: web_service
    config:
      - key: root_route
        value: file_storage
        fieldType: Input
        show: false
      - key: start_file
        value: 'start.sh'
        fieldType: Input
        show: false
      - key: is_open
        value: false
        fieldType: Input
        show: false
      - key: args
        value: 'name'
        fieldType: Input
        show: false
```

### web 服务实现

1. 服务需要在指定的端口启动，端口号会通过 --port=10000 的形式传递给服务器 ；
2. 如果需要额外的参数传递可以使用能力配置中的 args，args 也会以启动参数的形式传递给 web 服务，需要自行接收。 例如：--args=name；
3. web 服务需要打包成二进制(linux 的 amd64)；
4. 将生成的二进制文件放入到插件项目的 workspace 目录下;
5. web 服务的实现需要将启动服务的进程 ID 写入到本地文件 ;
6. 请确保你的二进制文件有可执行权限启动服务的 shell 文件，shell 文件需要满足一定条件：
   1. 需要支持 start 和 stop 指令
   2. start 指令需要接收参数 port，args,例如： ./hello_service --port=`PARAMS_PORT --args=Args`
   3. start 指令在实现启动时需要后台启动,例如：/usr/bin/nohup ./hello_service `--port=$PARAMS_PORT --args=$Args` >/dev/null 2>&1 &

### **环境依赖**

独立应用提供的运行环境依赖 ONES 部署的镜像环境，目前是 **centos:7.2**

### **如何访问服务**

#### **外部访问**

**将插件安装到 ONES 中并成功启用后可以通过如下 url 访问你的 web 服务**

https://mars-dev.myones.net:{port}/plugin_service/file_storage/

1. https://mars-dev.myones.net:{port}这一段是域名根据你的环境决定
2. plugin_service 是访问独立拥有的特定前缀
3. file_storage 是你在能力中声明的 **root_route 的值**

#### **内部访问**

单机部署： http://127.0.0.1:**9008**/file_storage/

高可用部署：http://plugin-service-proxy-svc:9007/file_storage/

### **限制太多！有没有最佳实践？**

##### **web 服务推荐写法(golang)**

```go
package main

import (
	"flag"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"os"
	"strconv"
)

var (
	port int
	args string
)

func init() {
	flag.IntVar(&port, "port", 0, "int flag value")
	flag.StringVar(&args, "args", "", "int flag value")
}

func main() {
	pid := os.Getpid()
	fmt.Printf("进程 PID: %d \n", pid)

	err := os.WriteFile("./pid.txt", []byte(strconv.Itoa(pid)), 0644)
	if err != nil {
		log.Fatal("记录进程失败", err)
	}

	flag.Parse()
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello World!")
	})
	fmt.Println("port:", port)
	fmt.Println("args:", args)
	log.Fatal(r.Run(fmt.Sprintf(":%d", port)))
}
```

**将 go 服务编译成二进制文件(必须是 linux 的 amd64)**

```shell
GOOS=linux GOARCH=amd64 go build -o=plugin_platform
```

**ℹ️**

**后续将支持 arm64 架构**

##### **shell 文件写法**

```shell
#!/bin/bash

usage() {
    echo -e "Usage: $(basename $0) [options]"
    echo -e " start 启动"

    exit 1
}

# 处理启动服务
start() {
    echo "/usr/bin/nohup ./hello_service --port=$PARAMS_PORT --args=$ARGS >/dev/null 2>&1 &"
    /usr/bin/nohup ./hello_service --port=$PARAMS_PORT --args=$ARGS > nohup.out 2>&1 &
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

### 测试代码

在 backend/index.ts 中添加如下代码，

```javascript
export async function helloWeb(request: PluginRequest): Promise<PluginResponse> {
  const response = await fetchHttp({
    url: 'http://127.0.0.1:9008/file_storage/',
    method: 'GET',
  })
  Logger.info(JSON.stringify(response))
  return {
    body: response,
  }
}
```

通过内部的方式，访问独立应用服务：通过 postman 访问 helloWeb 接口

## **使用场景**

1. **当你想实现一个 ONES 内置的标准外部服务，如 API 账号同步、通用存储服务 等；**
2. **将已经存在的服务部署到系统内部，以便插件或者其他外部服务调用；**
3. **静态网站服务，在 ONES 部署实例的子域名上内嵌一个独立网站；**

## 常见问题

1. 使用独立应用能力的插件，除了在私有部署测试以外， 应用本身一定要确保在 node:16.13.1 的 docker 容器中可以运行，如果有异常应当及时联系开放平台。例如：当独立应用使用 Golang 语言开发，并且编译参数 CGO_ENABLED=1，这代表该程序可能有动态链接，动态链接库在 Runtime 环境（node:16.13.1）中很可能没有。
