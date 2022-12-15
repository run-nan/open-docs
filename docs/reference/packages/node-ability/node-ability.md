# @ones-op/node-ability

我们提供了一套接口请求库，允许插件开发者调用插件的基础能力。

## 要求

| **内容**                       |
| :----------------------------- |
| LTS：3.6.x<br />Feature：3.6.x |

## API

### getLanguage

获取用户语言

#### Params

|   参数    | 说明      |  类型  | 必填 | 默认值 |
| :-------: | :-------- | :----: | :--: | :----: |
| user_uuid | 用户 uuid | string |  是  |        |

#### Returns

|   参数   | 说明         |  类型  |
| :------: | :----------- | :----: |
| language | 用户语言种类 | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

### getLanguageString

获取指定语言的对应内容

#### Params

|   参数   | 说明           |  类型  | 必填 | 默认值 |
| :------: | :------------- | :----: | :--: | :----: |
| language | 语言种类       | string |  是  |        |
|   key    | 想要获取的字段 | string |  是  |        |

#### Returns

| 参数  | 说明                   |  类型  |
| :---: | :--------------------- | :----: |
| value | key 在该语言下对应的值 | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const description = await Language.getLanguageString(language, 'PluginDescription')
}
```
