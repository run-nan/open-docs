---
nav:
  title: CLI工具操作文档
order: 4
toc: menu
---
# 排疑解难

（1）**前端依赖安装出现问题**

如果安装node 包报 404 解决方法：在用户目录( ~) 下新建 .npmrc 文件，执行以下命令，

**cd ~  && vim .npmrc**

文件内容如下：

```Bash
registry=https://npm2.myones.net/
@ones-ai:registry=https://npm2.myones.net/
@ones-design:registry=https://npm2.myones.net/
@ones-plugin:registry=https://npm2.myones.net/
always-auth=true
//npm2.myones.net/:_password="SGFpbE9uZXM="
//npm2.myones.net/:username=ones
//npm2.myones.net/:email=你的邮箱@ones.ai
//npm2.myones.net/:always-auth=true
unsafe-perm=true
```

保存执行 **"./工具名称  init -m=depend"** ,交互界面提示成功即可。

