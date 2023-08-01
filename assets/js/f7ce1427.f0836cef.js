"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[17936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),k=r,N=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(34334),i=a(51048),o=a(33609),p=a(1943),u=a(72957);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a;const{lazy:i,block:d,defaultValue:k,values:N,groupId:c,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=N?N:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===k?k:null!=(t=null!=k?k:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:P}=(0,p.U)(),[O,R]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=c){const e=y[c];null!=e&&e!==O&&v.some((t=>t.value===e))&&R(e)}const w=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==O&&(C(t),R(n),null!=c&&P(c,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:w},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function k(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},91313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(34259),i=a(18679);const o={},p="@ones-op/router",u={unversionedId:"reference/packages/router/router",id:"version-1.x/reference/packages/router/router",title:"@ones-op/router",description:'This package is deprecated, please use the "react-router-dom" instead. Before replacing "@ones-op/router", please make sure to read the document about the configuration "enableMemoryRouter" and set it to true.',source:"@site/versioned_docs/version-1.x/reference/packages/router/router.md",sourceDirName:"reference/packages/router",slug:"/reference/packages/router/",permalink:"/docs/reference/packages/router/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Changelog",permalink:"/docs/reference/packages/node-error/changelog"},next:{title:"@ones-op/fetch",permalink:"/docs/reference/packages/fetch/"}},s={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Components",id:"components",level:2},{value:"OPHashRouter",id:"ophashrouter",level:3},{value:"Props",id:"props",level:4},{value:"Examples",id:"examples",level:4},{value:"OPLink",id:"oplink",level:3},{value:"Props",id:"props-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"OPNavigate",id:"opnavigate",level:3},{value:"Props",id:"props-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"OPNavLink",id:"opnavlink",level:3},{value:"Props",id:"props-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"OPOutlet",id:"opoutlet",level:3},{value:"Examples",id:"examples-4",level:4},{value:"OPRoute",id:"oproute",level:3},{value:"Props",id:"props-4",level:4},{value:"Examples",id:"examples-5",level:4},{value:"OPRoutes",id:"oproutes",level:3},{value:"Props",id:"props-5",level:4},{value:"Examples",id:"examples-6",level:4},{value:"Hooks",id:"hooks",level:2},{value:"useOPHref",id:"useophref",level:3},{value:"Params",id:"params",level:4},{value:"Returns",id:"returns",level:4},{value:"Examples",id:"examples-7",level:4},{value:"useOPLocation",id:"useoplocation",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Types",id:"types",level:4},{value:"Examples",id:"examples-8",level:4},{value:"useOPRoutes",id:"useoproutes",level:3},{value:"Params",id:"params-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Examples",id:"examples-9",level:4},{value:"useOPParams",id:"useopparams",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Examples",id:"examples-10",level:4},{value:"useOPNavigate",id:"useopnavigate",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Types",id:"types-1",level:4},{value:"Examples",id:"examples-11",level:4},{value:"useMatch",id:"usematch",level:3},{value:"Params",id:"params-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Types",id:"types-2",level:4}],d={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-oprouter"},"@ones-op/router"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npm.partner.ones.cn/package/@ones-op/router"},(0,r.kt)("img",{parentName:"a",src:"https://npm.partner.ones.cn/badge/v/@ones-op/router.svg",alt:null}))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'This package is deprecated, please use the "react-router-dom" instead. Before replacing "@ones-op/router", please make sure to read the document about the configuration ',(0,r.kt)("a",{parentName:"p",href:"../../config/plugin.yaml#enablememoryrouter"},'"enableMemoryRouter"')," and set it to true.")),(0,r.kt)("p",null,"We provide a set of front-end routing component library that can use this library to operate the URL of the current page."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v3.6.25+")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the package in the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," directory using the following command:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/router\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/router\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPHashRouter } from '@ones-op/router'\n\nReactDOM.render(\n  <OPHashRouter>\n    <App />\n  </OPHashRouter>,\n  document.getElementById('root')\n)\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The exported standard ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html"},"React Component")," usage API, the specific parameters are shown in the following:"),(0,r.kt)("h3",{id:"ophashrouter"},"OPHashRouter"),(0,r.kt)("p",null,"Provide a unified global routing configuration for the plugin, and wrap it in the periphery of the root component (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()"),") to take effect once."),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"basename"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic URL in all locations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"window"),(0,r.kt)("td",{parentName:"tr",align:null},"The window that needs to be tracked by the URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Window")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"window"))))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPHashRouter } from '@ones-op/router'\n\nReactDOM.render(\n  <OPHashRouter>\n    <App />\n  </OPHashRouter>,\n  document.getElementById('root')\n)\n")),(0,r.kt)("h3",{id:"oplink"},"OPLink"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"OPLink")," is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a ",(0,r.kt)("inlineCode",{parentName:"p"},"OPLink")," renders an accessible ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," element with a real href that points to the resource it's linking to. This means that things like right-clicking a ",(0,r.kt)("inlineCode",{parentName:"p"},"OPLink")," work as you'd expect. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"reloadDocument")," prop to skip client side routing and let the browser handle the transition normally (as if it were an ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," href)."),(0,r.kt)("h4",{id:"props-1"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination route"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reloadDocument"),(0,r.kt)("td",{parentName:"tr",align:null},"Skip client route"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace the current route in the routing stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters carried when routing jump"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPLink } from '@ones-op/router'\n\nfunction UsersIndexPage({ users }) {\n  return (\n    <div>\n      <h1>Users</h1>\n      <ul>\n        {users.map((user) => (\n          <li key={user.id}>\n            <OPLink to={user.id}>{user.name}</OPLink>\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"opnavigate"},"OPNavigate"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"OPNavigate")," element changes the current location when it is rendered. It's a component wrapper around ",(0,r.kt)("a",{parentName:"p",href:"#useopnavigate"},(0,r.kt)("inlineCode",{parentName:"a"},"useOPNavigate")),", and accepts all the same arguments as props."),(0,r.kt)("h4",{id:"props-2"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Compared to the parse of the parent route (no need to start from ",(0,r.kt)("inlineCode",{parentName:"td"},"/"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"If the URL has not changed, whether to replace or increase the operation (replace or push)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters carried when routing jump"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { OPNavigate } from \'@ones-op/router\'\n\nclass LoginForm extends React.Component {\n  state = { user: null, error: null }\n\n  async handleSubmit(event) {\n    event.preventDefault()\n    try {\n      let user = await login(event.target)\n      this.setState({ user })\n    } catch (error) {\n      this.setState({ error })\n    }\n  }\n\n  render() {\n    let { user, error } = this.state\n    return (\n      <div>\n        {error && <p>{error.message}</p>}\n        {user && <OPNavigate to="/dashboard" replace={true} />}\n        <form onSubmit={(event) => this.handleSubmit(event)}>\n          <input type="text" name="username" />\n          <input type="password" name="password" />\n        </form>\n      </div>\n    )\n  }\n}\n')),(0,r.kt)("h3",{id:"opnavlink"},"OPNavLink"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"OPNavLink")," is a special kind of ",(0,r.kt)("a",{parentName:"p",href:"#oplink"},(0,r.kt)("inlineCode",{parentName:"a"},"OPLink"))," that knows whether or not it is ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),". This is useful when building a navigation menu such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected."),(0,r.kt)("h4",{id:"props-3"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination route"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"caseSensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Decides whether to match in a case-sensitive manner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"React children"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode\uff5c((props: { isActive: boolean }) => React.ReactNode)")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"CSS class"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string\uff5c((props: { isActive: boolean }) => string\uff5cundefined)")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"When the descendant path is matched, make sure that the component will not be displayed as selected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"Inline styles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.CSSProperties\uff5c((props: { isActive: boolean }) => React.CSSProperties)")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-3"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPNavLink } from '@ones-op/router'\n\nfunction NavList() {\n  let activeStyle = {\n    textDecoration: 'underline',\n  }\n\n  let activeClassName = 'underline'\n\n  return (\n    <nav>\n      <ul>\n        <li>\n          <NavLink to=\"messages\" style={({ isActive }) => (isActive ? activeStyle : undefined)}>\n            Messages\n          </NavLink>\n        </li>\n        <li>\n          <NavLink\n            to=\"tasks\"\n            className={({ isActive }) => (isActive ? activeClassName : undefined)}\n          >\n            Tasks\n          </NavLink>\n        </li>\n        <li>\n          <NavLink to=\"tasks\">\n            {({ isActive }) => (\n              <span className={isActive ? activeClassName : undefined}>Tasks</span>\n            )}\n          </NavLink>\n        </li>\n      </ul>\n    </nav>\n  )\n}\n")),(0,r.kt)("h3",{id:"opoutlet"},"OPOutlet"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"OPOutlet")," should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route."),(0,r.kt)("h4",{id:"examples-4"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { OPOutlet, OPRoute, OPRoutes } from \'@ones-op/router\'\n\nfunction Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n      <OPOutlet />\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <OPRoutes>\n      <OPRoute path="/" element={<Dashboard />}>\n        <OPRoute path="messages" element={<DashboardMessages />} />\n        <OPRoute path="tasks" element={<DashboardTasks />} />\n      </OPRoute>\n    </OPRoutes>\n  )\n}\n')),(0,r.kt)("h3",{id:"oproute"},"OPRoute"),(0,r.kt)("p",null,"Rendering content based on the current position. Can be nested and rendered the sub-routing."),(0,r.kt)("h4",{id:"props-4"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"caseSensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Decides whether to match in a case-sensitive manner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to rendering sub-routing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"element"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to rendering UI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<OPOutlet />"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"If no match is found, the index route is displayed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"It is used to match the current url, and the element of the rendering of ",(0,r.kt)("inlineCode",{parentName:"td"},"element")," is successful"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-5"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { OPRoutes, OPRoute } from \'@ones-op/router\'\n;<OPRoutes>\n  <OPRoute path="/" element={<Dashboard />}>\n    <OPRoute path="messages" element={<DashboardMessages />} />\n    <OPRoute path="tasks" element={<DashboardTasks />} />\n  </OPRoute>\n  <OPRoute path="about" element={<AboutPage />} />\n</OPRoutes>\n')),(0,r.kt)("h3",{id:"oproutes"},"OPRoutes"),(0,r.kt)("p",null,"Rendered anywhere in the app, ",(0,r.kt)("inlineCode",{parentName:"p"},"OPRoutes")," will match a set of child ",(0,r.kt)("a",{parentName:"p",href:"#oproute"},(0,r.kt)("inlineCode",{parentName:"a"},"OPRoute")),"s from the current location."),(0,r.kt)("h4",{id:"props-5"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"React children"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for matching sub-elements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-6"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { OPRoutes, OPRoute } from \'@ones-op/router\'\n;<OPRoutes>\n  <OPRoute path="/" element={<Dashboard />}>\n    <OPRoute path="messages" element={<DashboardMessages />} />\n    <OPRoute path="tasks" element={<DashboardTasks />} />\n  </OPRoute>\n  <OPRoute path="about" element={<AboutPage />} />\n</OPRoutes>\n')),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"The exported standard ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html#gatsby-focus-wrapper"},"React Hooks")," usage API, the specific parameters are shown in the following:"),(0,r.kt)("h3",{id:"useophref"},"useOPHref"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOPHref")," hook returns a URL that may be used to link to the given to location."),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination route"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The URL returned according to ",(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"examples-7"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHref } from '@ones-op/router'\n\nconst StyledLink = styled('a', { color: 'fuchsia' })\n\nconst Link = React.forwardRef(({ to, ...rest }, ref) => {\n  let href = useHref(to)\n\n  return <StyledLink {...rest} href={href} ref={ref} target={target} />\n})\n")),(0,r.kt)("h3",{id:"useoplocation"},"useOPLocation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOPLocation")," hook returns the current ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," object. This can be useful if you'd like to perform some side effect whenever the current ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," changes."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current ",(0,r.kt)("inlineCode",{parentName:"td"},"location")," information"),(0,r.kt)("td",{parentName:"tr",align:null},"Location")))),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Location {\n  state: unknown\n  key: Key\n}\n")),(0,r.kt)("h4",{id:"examples-8"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useOPLocation } from '@ones-op/router'\n\nfunction App() {\n  let location = useOPLocation();\n\n  React.useEffect(() => {\n    ga('send', 'pageview');\n  }, [location]);\n\n  return (\n    // ...\n  );\n}\n")),(0,r.kt)("h3",{id:"useoproutes"},"useOPRoutes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOPRoutes")," hook is the functional equivalent of ",(0,r.kt)("a",{parentName:"p",href:"#oproutes"},(0,r.kt)("inlineCode",{parentName:"a"},"OPRoutes")),", but it uses JavaScript objects instead of ",(0,r.kt)("a",{parentName:"p",href:"#oproutes"},(0,r.kt)("inlineCode",{parentName:"a"},"OPRoutes"))," elements to define your routes. These objects have the same properties as normal ",(0,r.kt)("a",{parentName:"p",href:"#oproutes"},(0,r.kt)("inlineCode",{parentName:"a"},"OPRoutes"))," elements, but they don't require JSX."),(0,r.kt)("p",null,"The return value of useRoutes is either a valid React element you can use to render the route tree, or null if nothing matched."),(0,r.kt)("h4",{id:"params-1"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"routes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Router")," object array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RouteObject[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Location")," information"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Location\uff5cstring")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode"))))),(0,r.kt)("h4",{id:"examples-9"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useOPRoutes } from '@ones-op/router'\n\nfunction App() {\n  let element = useOPRoutes([\n    {\n      path: '/',\n      element: <Dashboard />,\n      children: [\n        {\n          path: 'messages',\n          element: <DashboardMessages />,\n        },\n        { path: 'tasks', element: <DashboardTasks /> },\n      ],\n    },\n    { path: 'team', element: <AboutPage /> },\n  ])\n\n  return element\n}\n")),(0,r.kt)("h3",{id:"useopparams"},"useOPParams"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOPParams")," hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the ",(0,r.kt)("a",{parentName:"p",href:"#oproute"},(0,r.kt)("inlineCode",{parentName:"a"},"OPRoute"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"An object of key/value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Readonly<Params<K>>"))))),(0,r.kt)("h4",{id:"examples-10"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from \'@ones-op/router\'\nfunction ProfilePage() {\n  let { userId } = useParams();\n  // ...\n}\n\nfunction App() {\n  return (\n    <OPRoutes>\n      <OPRoute path="users">\n        <OPRoute path=":userId" element={<ProfilePage />} />\n        <OPRoute path="me" element={...} />\n      </OPRoute>\n    </OPRoutes>\n  );\n}\n')),(0,r.kt)("h3",{id:"useopnavigate"},"useOPNavigate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useOPNavigate")," hook returns a function that lets you navigate programmatically, for example after submitting the form."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Navigate function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NavigateFunction"))))),(0,r.kt)("h4",{id:"types-1"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface NavigateFunction {\n  (to: To, options?: { replace?: boolean; state?: any }): void\n  (delta: number): void\n}\n")),(0,r.kt)("h4",{id:"examples-11"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useOPNavigate } from '@ones-op/router'\n\nfunction SignForm() {\n  let navigate = useOPNavigate()\n  async function handleSubmit(event) {\n    event.preventDefault()\n    await submitForm(event.target)\n    navigate('../success', { replace: true })\n  }\n\n  return <form onSubmit={handleSubmit}>{/* ... */}</form>\n}\n")),(0,r.kt)("h3",{id:"usematch"},"useMatch"),(0,r.kt)("p",null,"Returns match data about a route at the given path relative to the current location."),(0,r.kt)("h4",{id:"params-2"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Router")," object array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PathPattern<Path>\uff5cPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matched data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PathMatch<ParamKey>\uff5cnull"))))),(0,r.kt)("h4",{id:"types-2"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PathPattern<Path extends string = string> {\n  path: Path\n  caseSensitive?: boolean\n  end?: boolean\n}\n\ninterface PathMatch<ParamKey extends string = string> {\n  params: Params<ParamKey>\n  pathname: string\n  pattern: PathPattern\n}\n")))}k.isMDXComponent=!0}}]);