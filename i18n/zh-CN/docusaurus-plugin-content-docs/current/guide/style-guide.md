---
sidebar_position: 7
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 风格指南

本文是针对 ONES 开放平台代码的官方风格指南。它可以帮助你规避错误和反模式，减少对细枝末节的过度纠结。

我们的规范包含两类规则：

- 格式化规则
- 代码质量规则

它们大都来源于行业内的最佳实践，不过我们认为任何风格指南都不会完美适用于所有的团队或项目，所以基于过去的经验、周围的技术堆栈和团队价值观，进行了一些调整。

## 格式化规则

我们采用 [Prettier](https://prettier.io/) 作为格式化规则的首选参考，因为 [Prettier](https://prettier.io/) 可以减少对这类规则的定制需求。我们并不介意你是否使用分号或尾逗号，也不介意你在 HTML 属性中使用单引号还是双引号，因为 [Prettier](https://prettier.io/) 将统一从头开始格式化你的代码。

我们遵循大部分 [Prettier](https://prettier.io/) 的 [推荐规则](https://prettier.io/docs/en/options.html)，除了以下这些：

### 最大行长

为了便于阅读，我们默认使用 100 个字符。

### 引号

使用单引号代替双引号。

:::info 提示

JSX 中的引号忽略该选项 – 请查阅 [jsx-single-quote](https://prettier.io/docs/en/options.html#jsx-quotes).

:::

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
// prettier-ignore
let name = "ones"
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
let name = 'ones'
```

  </TabItem>
</Tabs>

### 属性引号

如果对象中至少有一个属性需要引号，则为所有属性加上引号。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
{
  'user-name': 'ones',
  home: 'ones.com'
}
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
{
  'user-name': 'ones',
  'home': 'ones.com'
}
// 或者
{
  user: 'ones',
  home: 'ones.com'
}
```

  </TabItem>
</Tabs>

### 分号

仅在 [可能导致 ASI 失败](https://prettier.io/docs/en/rationale.html#semicolons) 的行首添加分号。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
// prettier-ignore
let shouldAddLines = true;
if (shouldAddLines) {
  // prettier-ignore
  [-1, 1].forEach((delta) => addLine(delta * 20));
}
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
let shouldAddLines = true
if (shouldAddLines) {
  ;[-1, 1].forEach((delta) => addLine(delta * 20))
}
```

  </TabItem>
</Tabs>

## 代码质量规则

由于我们使用 TypeScript 编写所有的代码，所以我们使用 [TypeScript ESLint](https://typescript-eslint.io/) 来保证代码质量。[TypeScript ESLint](https://typescript-eslint.io/) 使得 [ESLint](https://eslint.org/) 可以在 TypeScript 代码上运行。它结合了这两种工具的优点，帮助你尽可能地编写最好的 JavaScript 或 TypeScript 代码。

我们把这类规则分成了两个优先级：

- 优先级 A：必要的（规避错误）
- 优先级 B：推荐的

当然，我们基本遵循 [TypeScript ESLint](https://typescript-eslint.io/) 的 [推荐规则](https://typescript-eslint.io/rules/)，除了以下这些：

### 优先级 A 的规则：必要的

#### 一致的构造函数泛型参数

强制在构造函数调用的类型批注或构造函数名称上指定泛型类型参数。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
const map: Map<string, number> = new Map()
const set: Set<string> = new Set()
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
const map = new Map<string, number>()
const map: Map<string, number> = new MyMap()
const set = new Set<string>()
const set: Set<string> = new Set<string>()
```

  </TabItem>
</Tabs>

#### 一致的类型定义

强制类型定义始终使用 `interface`

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
type T = { x: number }
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
type T = string
type Foo = string | {}

interface T {
  x: number
}
```

  </TabItem>
</Tabs>

#### 一致的类型导出

强制一致的类型导出

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
interface ButtonProps {
  onClick: () => void
}
class Button implements ButtonProps {
  onClick() {
    console.log('button!')
  }
}
export { Button, ButtonProps } from 'some-library'
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
interface ButtonProps {
  onClick: () => void
}
class Button implements ButtonProps {
  onClick() {
    console.log('button!')
  }
}
export { Button, type ButtonProps } from 'some-library'
```

  </TabItem>
</Tabs>

#### 一致的类型导入

强制一致的类型导入

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
import { Foo } from 'Foo'
import Bar from 'Bar'
type T = Foo
const x: Bar = 1
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
import { type Foo } from 'Foo'
import type Bar from 'Bar'
type T = Foo
const x: Bar = 1
```

  </TabItem>
</Tabs>

#### 穷举 React Hooks 的依赖

它会帮助你找出无法一致地处理更新的组件。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
function Example({ someProp }) {
  function doSomething() {
    console.log(someProp)
  }
  useEffect(() => {
    doSomething()
  }, [])
}
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
function Example({ someProp }) {
  useEffect(() => {
    function doSomething() {
      console.log(someProp)
    }
    doSomething()
  }, [someProp])
}
```

  </TabItem>
</Tabs>

#### 禁止常量二进制表达式

不允许存在操作不影响值的表达式。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
const value1 = +x == null
const value3 = !foo == null
const value4 = new Boolean(foo) === true
const arrIsEmpty = someArr === []
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
const value1 = x == null
const value3 = !(foo == null)
const value4 = Boolean(foo) === true
const arrIsEmpty = someArr.length === 0
```

  </TabItem>
</Tabs>

#### 禁止重复导入

不允许重复的模块导入。

对每个模块使用一条导入语句将使代码更清晰，因为你可以在一行上看到从该模块导入的所有内容。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
import { merge } from 'module'
import something from 'another-module'
import { find } from 'module'
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
import { merge, find } from 'module'
import something from 'another-module'
```

  </TabItem>
</Tabs>

#### 禁止多余的类型成分

不允许不执行任何操作或重写类型信息的联合和交集类型。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
type UnionAny = any | 'foo'
type UnionUnknown = unknown | 'foo'
type UnionNever = never | 'foo'

type UnionNumberLiteral = number | 1
type UnionStringLiteral = string | 'foo'

type IntersectionAny = any & 'foo'
type IntersectionUnknown = string & unknown

type IntersectionBooleanLiteral = boolean & false
type IntersectionStringLiteral = string & 'foo'
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
type UnionAny = any
type UnionUnknown = unknown
type UnionNever = never

type UnionNumberLiteral = number
type UnionStringLiteral = string

type IntersectionAny = any
type IntersectionUnknown = string

type IntersectionBooleanLiteral = false
type IntersectionStringLiteral = 'foo'

type ReturnUnionNever = () => string | never
```

  </TabItem>
</Tabs>

#### 禁止使用下划线

不允许在标识符中使用下划线。

加下划线的目的是要清楚地表明，该方法在某些方面是特殊的。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
var foo_
var __proto__ = {}
foo._bar()
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
obj.__proto__ = {}
var file = __filename
function foo(_bar) {}
```

  </TabItem>
</Tabs>

#### 禁止在定义之前使用变量

在定义变量之前不允许使用它们。

在 ES6 中，块级作用域（`let` 和 `const`）引入了一个“暂时性死区”，在这个死区中，任何试图在变量声明之前访问变量的行为都会抛出 `ReferenceError`。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
alert(a)
var a = 10

f()
function f() {}
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
var a
a = 10
alert(a)

function f() {}
f(1)
```

  </TabItem>
</Tabs>

#### const 优先

对于声明后永远不会重新赋值的变量，需要 `const` 声明。

`const` 声明告诉读者“这个变量永远不会被重新赋值”，从而减少了认知负担，提高了可维护性。

:::info 提示

如果解构中的所有变量都应该为常量，此规则才会进行警告，否则将忽略它们。

:::

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
let { a, b } = obj
export { a, b }
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
let { a, b } = obj
a = a + 1
// 或者
const { a, b } = obj
export { a, b }
```

  </TabItem>
</Tabs>

### 优先级 B 的规则：推荐

#### 禁止 console

不允许使用 `console`，除了 `console.warn` 和 `console.error`。

此类信息被认为是出于调试目的，因此不适合发送给客户端。一般来说，使用 `console` 的调用在推送到生产环境之前应该被剔除。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
console.log('log')
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
console.error('error')
```

  </TabItem>
</Tabs>

#### 可选链优先

强制使用简明的可选链表达式，而不是链式的逻辑与。

<Tabs>
  <TabItem value="incorrect" label="❌ 错误的">

```tsx
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method()
foo &&
  foo.a != null &&
  foo.a.b !== null &&
  foo.a.b.c != undefined &&
  foo.a.b.c.d !== undefined &&
  foo.a.b.c.d.e
```

  </TabItem>
  <TabItem value="correct" label="✅ 正确的">

```tsx
foo?.a?.b?.method?.()
foo?.a?.b?.c?.d?.e
```

  </TabItem>
</Tabs>
