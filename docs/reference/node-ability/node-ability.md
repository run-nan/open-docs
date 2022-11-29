# @ones-op/node-ability（Business ability library，Encapsulation of business abilities and requests）

We provide a set of interface request libraries that allow plugin developers to call the basic abilities of plugins.

## Compatibility Requirements

| **Constraint** | **Content**                    |
| :------------- | :----------------------------- |
| ONES VERSION   | LTS：3.6.x<br />Feature：3.6.x |

## API

### getLanguage

Get user language

#### Params

| parameters | explain   |  type  | required | default value |
| :--------: | :-------- | :----: | :------: | :-----------: |
| user_uuid  | user uuid | string |    Y     |               |

#### Returns

| parameters | explain            |  type  |
| :--------: | :----------------- | :----: |
|  language  | user language type | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const language = await Language.getLanguage(user_uuid)
}
```

### getLanguageString

Gets the corresponding content of the specified language

#### Params

| parameters | explain                   |  type  | required | default value |
| :--------: | :------------------------ | :----: | :------: | :-----------: |
|  language  | language type             | string |    Y     |               |
|    key     | the field you want to get | string |    Y     |               |

#### Returns

| parameters | explain                                         |  type  |
| :--------: | :---------------------------------------------- | :----: |
|   value    | The corresponding value of key in this language | string |

#### Example

```javascript
import { Language } from '@ones-op/node-ability'

export async function multiple_language() {
  const description = await Language.getLanguageString(language, 'PluginDescription')
}
```
