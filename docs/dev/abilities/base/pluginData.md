---
sidebar_position: 2
---
# 插件数据库
## 能力描述
有时候插件希望可以持久化自己的数据。我们提供了插件数据库能力可以让每个插件拥有自己独立的数据库，并提供访问和操作它的方法。

⚠️注意：插件需要先创建表，然后才可以在后续的业务中使用

## 使用
数据库的能被封装在 @ones-op/node-database 包中，使用之前需要先安装包

```bash
npm i @ones-op/node-database
```
## API
### **importSQL **创建数据库表
该方法用来创建数据库表，方法接收一个文件名，但是注意文件必须放在 **workspace** 目录中

在"workspace/plugin.sql"文件中添加如下内容

⚠️ 注意：表名需要用 {{}} 括起来

```sql
CREATE TABLE IF NOT EXISTS `{{email_id_map}}`  (
    `email` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT '邮箱',
    `id_number` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '工号',
  PRIMARY KEY (`email`)
) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

```
可以在插件的 Install 生命周期中执行这个 sql 文件来达到创建表的目的

```typescript
// 生命周期钩子 安装插件
export async function Install() {
  // 初始化数据库
  return importSQL('plugin.sql');
}
```
### select 数据库查询
方法接收 sql 语句，并返回查询的结果。 如果sql执行是失败会 throw error。

```typescript
 const result = await select("select * from email_id_map limit 10;")
```
### exec 执行sql语句
方法接收 sql 语句，不会返回结果。如果sql执行是失败会 throw error。

```typescript
await exec("insert", `INSERT INTO email_id_map VALUES ("plugin@ones.ai", "001");`)
```
### count 数据库计数
方法接收 sql 语句，会返回 count。如果sql执行是失败会 throw error。

```typescript
const c = await count("select count(*) from email_id_map;")
```
## 💡开发与调试
在本地开发时，为了方便你开发和调试，也支持将数据库初始化在本地并使用它。本地使用的方法上面完全一致，你不需要修改代码，只要修改本地配置就行。

修改`config/local.yaml`中的配置，再重新执行`run`命令重启服务

```yaml
local:
  mysql_in_local: true
  mysql_user_name: "your mysql user name"
  mysql_user_password: "your mysql user password"
  mysql_database_name: "your mysql database name"
  mysql_host: "your mysql host"
  mysql_port: "your mysql port"
```
