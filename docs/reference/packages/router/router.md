# @ones-op/router

[![](https://npm.partner.ones.cn/badge/v/@ones-op/router.svg)](https://npm.partner.ones.cn/package/@ones-op/router)

:::caution

This package is deprecated, please use the "react-router-dom" instead. Before replacing "@ones-op/router", please make sure to read the document about the configuration ["enableMemoryRouter"](../../config/plugin.yaml#enablememoryrouter) and set it to true.

:::

We provide a set of front-end routing component library that can use this library to operate the URL of the current page.

## Requirements

| ONES     |
| -------- |
| v3.6.25+ |

## Installation

Install the package in the plugin `/web` directory using the following command:

```bash npm2yarn
npm install @ones-op/router
```

## Usage

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

The exported standard [React Component](https://reactjs.org/docs/react-component.html) usage API, the specific parameters are shown in the following:

### OPHashRouter

Provide a unified global routing configuration for the plugin, and wrap it in the periphery of the root component (such as `ReactDOM.render()`) to take effect once.

#### Props

| Params   | Description                                    | Type     | Required | Default  |
| -------- | ---------------------------------------------- | -------- | -------- | -------- |
| basename | Basic URL in all locations                     | `string` | N        |          |
| window   | The window that needs to be tracked by the URL | `Window` | N        | `window` |

#### Examples

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

A `OPLink` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `OPLink` renders an accessible `a` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `OPLink` work as you'd expect. You can use `reloadDocument` prop to skip client side routing and let the browser handle the transition normally (as if it were an `a` href).

#### Props

| Params         | Description                                    | Type      | Required | Default |
| -------------- | ---------------------------------------------- | --------- | -------- | ------- |
| to             | Destination route                              | `string`  | Y        |         |
| reloadDocument | Skip client route                              | `boolean` | N        |         |
| replace        | Replace the current route in the routing stack | `boolean` | N        |         |
| state          | Parameters carried when routing jump           | `object`  | N        |         |

#### Examples

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

A `OPNavigate` element changes the current location when it is rendered. It's a component wrapper around [`useOPNavigate`](#useopnavigate), and accepts all the same arguments as props.

#### Props

| Params  | Description                                                                                | Type      | Required | Default |
| ------- | ------------------------------------------------------------------------------------------ | --------- | -------- | ------- |
| to      | Compared to the parse of the parent route (no need to start from `/`)                      | `string`  | Y        |         |
| replace | If the URL has not changed, whether to replace or increase the operation (replace or push) | `boolean` | N        |         |
| state   | Parameters carried when routing jump                                                       | `object`  | N        |         |

#### Examples

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

A `OPNavLink` is a special kind of [`OPLink`](#oplink) that knows whether or not it is `active`. This is useful when building a navigation menu such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected.

#### Props

| Params        | Description                                                                                         | Type                                                                           | Required | Default |
| ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- | ------- |
| to            | Destination route                                                                                   | `string`                                                                       | Y        |         |
| caseSensitive | Decides whether to match in a case-sensitive manner                                                 | `boolean`                                                                      | N        | false   |
| children      | React children                                                                                      | `React.ReactNode｜((props: { isActive: boolean }) => React.ReactNode)`         | N        |         |
| className     | CSS class                                                                                           | `string｜((props: { isActive: boolean }) => string｜undefined)`                | N        |         |
| end           | When the descendant path is matched, make sure that the component will not be displayed as selected | `boolean`                                                                      | N        |         |
| style         | Inline styles                                                                                       | `React.CSSProperties｜((props: { isActive: boolean }) => React.CSSProperties)` | N        |         |

#### Examples

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

An `OPOutlet` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

#### Examples

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

Rendering content based on the current position. Can be nested and rendered the sub-routing.

#### Props

| Params        | Description                                                                                      | Type        | Required | Default        |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------- | -------- | -------------- |
| caseSensitive | Decides whether to match in a case-sensitive manner                                              | `boolean`   | N        | false          |
| children      | Used to rendering sub-routing                                                                    | `ReactNode` | N        |                |
| element       | Used to rendering UI                                                                             | `ReactNode` | N        | `<OPOutlet />` |
| index         | If no match is found, the index route is displayed                                               | `boolean`   | N        |                |
| path          | It is used to match the current url, and the element of the rendering of `element` is successful | `string`    | N        |                |

#### Examples

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

Rendered anywhere in the app, `OPRoutes` will match a set of child [`OPRoute`](#oproute)s from the current location.

#### Props

| Params   | Description                    | Type        | Required | Default |
| -------- | ------------------------------ | ----------- | -------- | ------- |
| children | React children                 | `ReactNode` | N        |         |
| location | Used for matching sub-elements | `string`    | N        |         |

#### Examples

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

The exported standard [React Hooks](https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper) usage API, the specific parameters are shown in the following:

### useOPHref

The `useOPHref` hook returns a URL that may be used to link to the given to location.

#### Params

| Params | Description       | Type     | Required | Default |
| ------ | ----------------- | -------- | -------- | ------- |
| to     | Destination route | `string` | N        |         |

#### Returns

| Description                        | Type     |
| ---------------------------------- | -------- |
| The URL returned according to `to` | `string` |

#### Examples

```tsx
import { useHref } from '@ones-op/router'

const StyledLink = styled('a', { color: 'fuchsia' })

const Link = React.forwardRef(({ to, ...rest }, ref) => {
  let href = useHref(to)

  return <StyledLink {...rest} href={href} ref={ref} target={target} />
})
```

### useOPLocation

The `useOPLocation` hook returns the current `location` object. This can be useful if you'd like to perform some side effect whenever the current `location` changes.

#### Returns

| Description                    | Type     |
| ------------------------------ | -------- |
| Current `location` information | Location |

#### Types

```tsx
interface Location {
  state: unknown
  key: Key
}
```

#### Examples

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

The `useOPRoutes` hook is the functional equivalent of [`OPRoutes`](#oproutes), but it uses JavaScript objects instead of [`OPRoutes`](#oproutes) elements to define your routes. These objects have the same properties as normal [`OPRoutes`](#oproutes) elements, but they don't require JSX.

The return value of useRoutes is either a valid React element you can use to render the route tree, or null if nothing matched.

#### Params

| Params   | Description            | Type               | Required | Default |
| -------- | ---------------------- | ------------------ | -------- | ------- |
| routes   | `Router` object array  | `RouteObject[]`    | Y        |         |
| location | `Location` information | `Location｜string` | N        |         |

#### Returns

| Description     | Type        |
| --------------- | ----------- |
| Route Component | `ReactNode` |

#### Examples

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

The `useOPParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the [`OPRoute`](#oproute) `path`.

#### Returns

| Description            | Type                  |
| ---------------------- | --------------------- |
| An object of key/value | `Readonly<Params<K>>` |

#### Examples

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

The `useOPNavigate` hook returns a function that lets you navigate programmatically, for example after submitting the form.

#### Returns

| Description       | Type               |
| ----------------- | ------------------ |
| Navigate function | `NavigateFunction` |

#### Types

```tsx
interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void
  (delta: number): void
}
```

#### Examples

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

Returns match data about a route at the given path relative to the current location.

#### Params

| Params  | Description           | Type                      | Required | Default |
| ------- | --------------------- | ------------------------- | -------- | ------- |
| pattern | `Router` object array | `PathPattern<Path>｜Path` | Y        |         |

#### Returns

| Description  | Type                        |
| ------------ | --------------------------- |
| Matched data | `PathMatch<ParamKey>｜null` |

#### Types

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
