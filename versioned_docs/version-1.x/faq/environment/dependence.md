---
title: Dependence
sidebar_position: 2
---

## Does the window system fail when installing dependencies on plugin project or ONES?

### Overview

This usually occurs in Window Home Edition. Both zeromq dependencies in plugin backend and sentry dependencies in ONES require Microsoft C and C++ ([MSVC](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B)) runtime libraries. If this library is not preinstalled on the system, the dependency installation will fail.

### Solution

Go to the [download address](https://www.microsoft.com/en-us/download/details.aspx?id=48145) and select the installation package that matches your computer system architecture to download and install. (of course, you can also choose to install them all)
