---
title: 依赖相关
sidebar_position: 2
---

## Window 系统在插件或者 ONES 项目安装依赖时失败？

### 概述

这通常会出现在 Window 家庭版中，插件后端的 zeromq 依赖以及 ONES 项目中的 sentry 依赖，均需要 Microsoft C 和 C++ ([MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B)) 运行时库，如果系统未预装此库，依赖安装将会失败。

### 解决方法

进入 [下载地址](https://www.microsoft.com/en-us/download/details.aspx?id=48145)，选择与你电脑系统架构相匹配的安装包下载并安装。（当然，你也可以选择都安装）
