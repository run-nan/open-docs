# 插件上传文件

插件文件上传附件到指定工作项中。

```javascript
import { PluginFile } from '@ones-op/node-ability'
//上传文件到指定工作项
const file = await PluginFile.uploadFile('files/test.txt', 'taskuuid', 'desc')
```

| 参数名称 | 参数类型 | 参数说明                      | 默认值 |
| -------- | -------- | ----------------------------- | ------ |
| filepath | string   | 文件在 workspace 下的相对路径 | -      |
| taskuuid | string   | 需要上传附件到的工作项 UUID   | -      |
| desc     | string   | 附件描述                      | -      |

确认插件的 workspace 中存在该文件

![image-20220428183219531](pluginUpload.png)

返回结果：

```json
file: {
  hash: 'Furn-xxxxxxxxxxxxxxxxxx',
  url: 'http://yourhost/file/attachment/Furn-xxxxxxxxxxxxxxxxxx?e=1651145575&token=xxxxxxxxxxxxx',
  name: 'filename',
  size: 21,
  mime: 'text/plain',
  version: 1
}
```
