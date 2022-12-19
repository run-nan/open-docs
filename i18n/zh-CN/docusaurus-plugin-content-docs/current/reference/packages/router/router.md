# @ones-op/router

[![](https://npm.partner.ones.cn/badge/v/@ones-op/router.svg)](https://npm.partner.ones.cn/package/@ones-op/router)

我们提供了一套前端路由组件库，你的插件能够使用此库操纵当前页面的 URL。

## 兼容性

### 环境依赖

|   ONES   |
| :------: |
| v3.6.25+ |

## 安装

进入 `/web` 目录，通过以下命令安装此包：

```bash npm2yarn
npm install @ones-op/router
```

## 使用

```tsx
import { OPHashRouter } from '@ones-op/router'

ReactDOM.render(
  <OPHashRouter>
    <App />
  </OPHashRouter>,
  document.getElementById('root')
)
```

## Components

导出的标准 [React Component](https://reactjs.org/docs/react-component.html) 用法 API，具体参数详见下述：

### OPHashRouter

为插件提供统一的全局化路由配置，在根组件外围（如 `ReactDOM.render()` 中）包裹一次即可生效。

#### 属性

|   参数   | 说明                      |   类型   | 必填 |  默认值  |
| :------: | :------------------------ | :------: | :--: | :------: |
| basename | 所有位置的基本 URL        | `string` |  否  |          |
|  window  | 需要被跟踪 URL 更改的窗口 | `Window` |  否  | `window` |

#### 示例

```tsx
import { OPHashRouter } from '@ones-op/router'

ReactDOM.render(
  <OPHashRouter>
    <App />
  </OPHashRouter>,
  document.getElementById('root')
)
```

### OPLink

`OPLink` 是一个锚元素，允许用户通过单击或者点击它来导航到另一个页面。一个 `OPLink` 渲染一个可访问的 `a` 元素，该元素带有一个真正的 `href`, 这个 `href` 指向它所链接的资源。 这意味着像右键 `OPLink` 这样的操作也是可以正常工作。你也可以使用 `reloadDocument` 参数跳过客户端路由，让浏览器正常处理转换，就像它是一个 `a` 一样。

#### 属性

|      参数      | 说明                   |   类型    | 必填 | 默认值 |
| :------------: | :--------------------- | :-------: | :--: | :----: |
|       to       | 目的路由               | `string`  |  是  |        |
| reloadDocument | 跳过客户端路由         | `boolean` |  否  |        |
|    replace     | 替换路由栈中当前的路由 | `boolean` |  否  |        |
|     state      | 路由跳转时携带的参数   | `object`  |  否  |        |

#### 示例

```tsx
import { OPLink } from '@ones-op/router'

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <OPLink to={user.id}>{user.name}</OPLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

### OPNavigate

用来更改当前元素的 `location`, 它是 [`useOPNavigate`](#useopnavigate) 的组件封装。

#### 属性

|  参数   | 说明                                                       |   类型    | 必填 | 默认值 |
| :-----: | :--------------------------------------------------------- | :-------: | :--: | :----: |
|   to    | 相对于父路由进行解析（不需要从 `/` 开始）                  | `string`  |  是  |        |
| replace | 如果 URL 没有改变，是做替换还是增加操作（replace or push） | `boolean` |  否  |        |
|  state  | 路由跳转时携带的参数                                       | `object`  |  否  |        |

#### 示例

```tsx
import { OPNavigate } from '@ones-op/router'

class LoginForm extends React.Component {
  state = { user: null, error: null }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      let user = await login(event.target)
      this.setState({ user })
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    let { user, error } = this.state
    return (
      <div>
        {error && <p>{error.message}</p>}
        {user && <OPNavigate to="/dashboard" replace={true} />}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="username" />
          <input type="password" name="password" />
        </form>
      </div>
    )
  }
}
```

### OPNavLink

`OPNavLink` 是一种特殊的 [`OPLink`](#oplink)，它知道自己是否处于 `选中` 状态。这一特性在构建导航菜单时很有作用。

#### 属性

|     参数      | 说明                                         |                                      类型                                      | 必填 | 默认值 |
| :-----------: | :------------------------------------------- | :----------------------------------------------------------------------------: | :--: | :----: |
|      to       | 目的路由                                     |                                    `string`                                    |  是  |        |
| caseSensitive | 决定是否以区分大小写的方式进行匹配           |                                   `boolean`                                    |  否  | false  |
|   children    | 子元素                                       |     `React.ReactNode｜((props: { isActive: boolean }) => React.ReactNode)`     |  否  |        |
|   className   | 样式名                                       |        `string｜((props: { isActive: boolean }) => string｜undefined)`         |  否  |        |
|      end      | 当后代路径被匹配时，确保该组件不会展示为选中 |                                   `boolean`                                    |  否  |        |
|     style     | 行内样式                                     | `React.CSSProperties｜((props: { isActive: boolean }) => React.CSSProperties)` |  否  |        |

#### 示例

```tsx
import { OPNavLink } from '@ones-op/router'

function NavList() {
  let activeStyle = {
    textDecoration: 'underline',
  }

  let activeClassName = 'underline'

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="messages" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>Tasks</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
```

### OPOutlet

应该在父路由元素中使用 `OPOutlet` 来呈现子路由元素。这允许在呈现子路由时显示嵌套 UI。如果父路由完全匹配，它将呈现子索引路由，如果没有索引路由，则不呈现。

#### 示例

```tsx
import { OPOutlet, OPRoute, OPRoutes } from '@ones-op/router'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <OPOutlet />
    </div>
  )
}

function App() {
  return (
    <OPRoutes>
      <OPRoute path="/" element={<Dashboard />}>
        <OPRoute path="messages" element={<DashboardMessages />} />
        <OPRoute path="tasks" element={<DashboardTasks />} />
      </OPRoute>
    </OPRoutes>
  )
}
```

### OPRoute

基于当前位置来渲染内容。可以嵌套渲染子路由。

#### 属性

|     参数      | 说明                                              |    类型     | 必填 |    默认值    |
| :-----------: | :------------------------------------------------ | :---------: | :--: | :----------: |
| caseSensitive | 是否应该以区分大小的方式进行匹配                  |  `boolean`  |  否  |    false     |
|   children    | 用来渲染子路由                                    | `ReactNode` |  否  |              |
|    element    | 用来渲染 UI                                       | `ReactNode` |  否  | `<Outlet />` |
|     index     | 没有匹配上则呈现索引路由                          |  `boolean`  |  否  |              |
|     path      | 用来匹配当前 URL，匹配成功则渲染 `element` 的元素 |  `string`   |  否  |              |

#### 示例

```tsx
import { OPRoutes, OPRoute } from '@ones-op/router'
;<OPRoutes>
  <OPRoute path="/" element={<Dashboard />}>
    <OPRoute path="messages" element={<DashboardMessages />} />
    <OPRoute path="tasks" element={<DashboardTasks />} />
  </OPRoute>
  <OPRoute path="about" element={<AboutPage />} />
</OPRoutes>
```

### OPRoutes

`OPRoutes` 查找它的所有子元素 [`OPRoute`](#oproute)，以找到最佳匹配并呈现 UI 的那个分支。

#### 属性

|   参数   | 说明           |    类型     | 必填 | 默认值 |
| :------: | :------------- | :---------: | :--: | :----: |
| children | 子组件         | `ReactNode` |  否  |        |
| location | 用于匹配子元素 |  `string`   |  否  |        |

#### 示例

```tsx
import { OPRoutes, OPRoute } from '@ones-op/router'
;<OPRoutes>
  <OPRoute path="/" element={<Dashboard />}>
    <OPRoute path="messages" element={<DashboardMessages />} />
    <OPRoute path="tasks" element={<DashboardTasks />} />
  </OPRoute>
  <OPRoute path="about" element={<AboutPage />} />
</OPRoutes>
```

## Hooks

导出的标准 [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) 用法 API，具体参数详见下述：

### useOPHref

`useOPHref` 返回一个 URL，这个 URL 可以用于链接到给定位置。

#### 参数

| 参数 | 说明           |   类型   | 必填 | 默认值 |
| :--- | :------------- | :------: | :--: | :----: |
| to   | 链接到给定位置 | `string` |  否  |        |

#### 返回

| 说明                 |   类型   |
| :------------------- | :------: |
| 根据 `to` 返回的 URL | `string` |

#### 示例

```tsx
import { useHref } from '@ones-op/router'

const StyledLink = styled('a', { color: 'fuchsia' })

const Link = React.forwardRef(({ to, ...rest }, ref) => {
  let href = useHref(to)

  return <StyledLink {...rest} href={href} ref={ref} target={target} />
})
```

### useOPLocation

`useOPLocation` 返回当前的 `location` 对象。你可以在当前 `location` 变化的时候执行一些副作用操作。

#### 返回

| 说明                 |   类型   |
| :------------------- | :------: |
| 当前 `location` 信息 | Location |

#### 类型

```tsx
interface Location {
  state: unknown
  key: Key
}
```

#### 示例

```tsx
import { useOPLocation } from '@ones-op/router'

function App() {
  let location = useOPLocation();

  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}
```

### useOPRoutes

`useOPRoutes` 的功能相当于 [`OPRoutes`](#oproutes)，但是它使用 JS 对象而不是 [`OPRoute`](#oproute) 元素来定义路由。 这些对象具有与普通 [`OPRoute`](#oproute) 元素相同的属性，但它们不需要 JSX。 `useOPRoutes` 返回的是一个 React 元素，你可以用它来渲染路由树，如果返回为空，则不会匹配任何路由。

#### 参数

| 参数     | 说明              |        类型        | 必填  | 默认值 |
| :------- | :---------------- | :----------------: | :---: | :----: |
| routes   | `Router` 对象数组 |  `RouteObject[]`   | true  |        |
| location | `Location` 信息   | `Location｜string` | false |        |

#### 返回

| 说明     |    类型     |
| :------- | :---------: |
| 路由组件 | `ReactNode` |

#### 示例

```tsx
import { useOPRoutes } from '@ones-op/router'

function App() {
  let element = useOPRoutes([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: 'messages',
          element: <DashboardMessages />,
        },
        { path: 'tasks', element: <DashboardTasks /> },
      ],
    },
    { path: 'team', element: <AboutPage /> },
  ])

  return element
}
```

### useOPParams

`useOPParams` 从当前 URL 返回一个动态参数的键/值对象，该对象与 [`OPRoute`](#oproute) 组件 `path` 属性的参数对应。

#### 返回

| 说明                |         类型          |
| :------------------ | :-------------------: |
| 动态参数的键/值对象 | `Readonly<Params<K>>` |

#### 示例

```tsx
import { useParams } from '@ones-op/router'
function ProfilePage() {
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <OPRoutes>
      <OPRoute path="users">
        <OPRoute path=":userId" element={<ProfilePage />} />
        <OPRoute path="me" element={...} />
      </OPRoute>
    </OPRoutes>
  );
}
```

### useOPNavigate

`useOPNavigate` 返回一个函数，该函数允许以编程方式导航，例如在表单提交后。

#### 返回

| 说明           |        类型        |
| :------------- | :----------------: |
| 返回的调用方法 | `NavigateFunction` |

#### 类型

```tsx
interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void
  (delta: number): void
}
```

#### 示例

```tsx
import { useOPNavigate } from '@ones-op/router'

function SignForm() {
  let navigate = useOPNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    await submitForm(event.target)
    navigate('../success', { replace: true })
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>
}
```

### useMatch

返回关于给定路径上相对于当前位置的路由的匹配数据。

#### 参数

| 参数    | 说明              |           类型            | 必填 | 默认值 |
| :------ | :---------------- | :-----------------------: | :--: | :----: |
| pattern | `Router` 对象数组 | `PathPattern<Path>｜Path` |  是  |        |

#### 返回

| 说明       |            类型             |
| :--------- | :-------------------------: |
| 匹配的数据 | `PathMatch<ParamKey>｜null` |

#### 类型

```ts
interface PathPattern<Path extends string = string> {
  path: Path
  caseSensitive?: boolean
  end?: boolean
}

interface PathMatch<ParamKey extends string = string> {
  params: Params<ParamKey>
  pathname: string
  pattern: PathPattern
}
```
