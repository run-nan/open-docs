# FAQ

## 实例协议非 https 时，本地调试插件的资源在 Chrome 94 或更高版本报 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 错误？

这是由于 Chrome 对 [私有网络接入升级](https://developer.chrome.com/blog/private-network-access-update/) 导致的，在不选择其他浏览器或者降低 Chrome 版本绕过的情况下，你可以通过修改 Chrome 配置关闭此限制。

1. 打开 Chrome 配置页面 [chrome://flags/#block-insecure-private-network-requests](chrome://flags/#block-insecure-private-network-requests)
2. 将其 Block insecure private network requests 设置为 Disabled, 然后点击浏览器下方弹出的 Relaunch 重启 Chrome

## Window 系统在插件或者 ONES 项目安装依赖时失败？

这通常会出现在 Window 家庭版中，插件后端的 zeromq 依赖以及 ONES 项目中的 sentry 依赖，均需要 Microsoft C 和 C++ ([MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B)) 运行时库，如果系统未预装此库，依赖安装将会失败。

进入 [下载地址](https://www.microsoft.com/en-us/download/details.aspx?id=48145)，选择与你电脑系统架构相匹配的安装包下载并安装。（当然，你也可以选择都安装）
