# 常见问题

## 实例协议非 https 时，本地调试插件的资源在 Chrome 94 或更高版本报 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 错误？

这是由于 Chrome 对 [私有网络接入升级](https://developer.chrome.com/blog/private-network-access-update/) 导致的，在不选择其他浏览器或者降低 Chrome 版本绕过的情况下，你可以通过修改 Chrome 配置关闭此限制。

1. 打开 Chrome 配置页面 [chrome://flags/#block-insecure-private-network-requests](chrome://flags/#block-insecure-private-network-requests)
2. 将其 Block insecure private network requests 设置为 Disabled, 然后点击浏览器下方弹出的 Relaunch 重启 Chrome
3. 将 local.yaml 下的 local.web_service_ip 修改为 127.0.0.1

## Window 系统在插件或者 ONES 项目安装依赖时失败？

这通常会出现在 Window 家庭版中，插件后端的 zeromq 依赖以及 ONES 项目中的 sentry 依赖，均需要 Microsoft C 和 C++ ([MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B)) 运行时库，如果系统未预装此库，依赖安装将会失败。

进入 [下载地址](https://www.microsoft.com/en-us/download/details.aspx?id=48145)，选择与你电脑系统架构相匹配的安装包下载并安装。（当然，你也可以选择都安装）

## 插件本地调试的时候，提示连接超时

在 Windows 系统中可以使用 telnet 命令来监听插件项目中 local.yaml 里配置的 tcp 地址。

在 Mac 系统中可以使用 nc 命令来监听插件项目中 local.yaml 里配置的 tcp 地址。

## 插件本地调试的时候，没有"开始连接"提示，没有响应信息

1. 插件项目是从其他不同的 CPU 体系结构的操作系统拷贝过来（如 Windows 到 Mac），拷贝内容携带了 node_modules 文件，使用 npx op invoke run 命令的时候，会编译插件项目，由于 CPU 体系结构不同，执行依赖的相关二进制文件也不同，就会影响调试的过程，没有相关的插件信息返回。
2. 如果插件项目是相同的 CPU 体系结构的操作系统生成的，使用 ones envinfo 或 node --> process.arch 检查一下编译插件项目的 node 版本，是否在不同开发调试环境上，使用 node 版本也是一样的。

## 安装插件接口冲突

插件代码中，可能对同一个接口使用了劫持或替换能力，可以检查当前团队下是否有其他插件和当前安装的插件冲突的接口。

## 新增前端插槽或后端能力后，能力配置没有成功展示

每次新增前端插槽或后端能力后，都会修改 plugin.yaml 文件，涉及到了 plugin.yaml 的修改，需要先执行 npx op invoke clear 或 op runlocal -t=clear 命令把实例环境上的插件信息给清空，然后再执行 npx op invoke run 命令把插件重新安装到调试环境，最后可以在环境上看到能力的相关展示。

当然，workspace/plugin.sql 如果修改了，也可以按照上方说的步骤去操作。
