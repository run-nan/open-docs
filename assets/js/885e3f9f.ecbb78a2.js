"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[16373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(34334),s=n(51048),l=n(33609),i=n(1943),p=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:s,block:c,defaultValue:h,values:m,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===h?h:null!=(t=null!=h?h:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[P,T]=(0,r.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=f){const e=v[f];null!=e&&e!==P&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==P&&(x(t),T(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>E.push(e),onKeyDown:I,onClick:O},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},91464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(34259),s=n(18679);const l={},i="@ones-op/fetch",p={unversionedId:"reference/packages/fetch/fetch",id:"reference/packages/fetch/fetch",title:"@ones-op/fetch",description:"We provide a set of interface request library that can help you request interfaces exposed to the backend of the plugin in the frontend of the plugin, or request external interfaces.",source:"@site/docs/reference/packages/fetch/fetch.md",sourceDirName:"reference/packages/fetch",slug:"/reference/packages/fetch/",permalink:"/open-docs/docs/next/reference/packages/fetch/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"reference",previous:{title:"@ones-op/router",permalink:"/open-docs/docs/next/reference/packages/router/"},next:{title:"Changelog",permalink:"/open-docs/docs/next/reference/packages/fetch/changelog"}},u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Index",id:"index",level:2},{value:"APIs",id:"apis",level:2},{value:"OPFetch",id:"OPFetch",level:3},{value:"Headers",id:"headers",level:4},{value:"Fetch",id:"Fetch",level:3},{value:"Interceptors",id:"interceptors",level:4},{value:"Params alias",id:"params-alias",level:5},{value:"isOPError",id:"isOPError",level:3},{value:"Params",id:"params",level:4},{value:"Returns",id:"returns",level:4},{value:"Types",id:"types",level:4},{value:"OPErrorHandler",id:"OPErrorHandler",level:3},{value:"Params",id:"params-1",level:4},{value:"Types",id:"types-1",level:4},{value:"&lt;Instance&gt;",id:"Instance",level:3},{value:"Types",id:"types-2",level:4},{value:"&lt;Instance&gt;.create",id:"instancecreate",level:4},{value:"Params",id:"params-2",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Types",id:"types-3",level:5},{value:"Examples",id:"examples",level:5},{value:"&lt;Instance&gt;.&lt;other&gt;",id:"instanceother",level:4},{value:"Types",id:"types-4",level:2},{value:"OPError",id:"Types.OPError",level:3},{value:"FetchInheritableInterceptors",id:"fetchinheritableinterceptors",level:3},{value:"FetchConfig",id:"fetchconfig",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why it still popup a toast without node-error when catch a interface&#39;s error?",id:"why-it-still-popup-a-toast-without-node-error-when-catch-a-interfaces-error",level:3}],c={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-opfetch"},"@ones-op/fetch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npm.partner.ones.cn/package/@ones-op/fetch"},(0,r.kt)("img",{parentName:"a",src:"https://npm.partner.ones.cn/badge/v/@ones-op/fetch.svg",alt:null}))),(0,r.kt)("p",null,"We provide a set of interface request library that can help you request interfaces exposed to the backend of the plugin in the frontend of the plugin, or request external interfaces."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"@ones-op/fetch")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.4.0+")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the package in the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," directory using the following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/fetch\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/fetch\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Request the ONES and plugin interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPFetch } from '@ones-op/fetch'\n\nfunction fetchData() {\n  OPFetch('api/project/users/me').then((response) => {\n    console.log('me: ', response)\n  })\n  OPFetch('api/project/hello').then((response) => {\n    console.log('hello: ', response)\n  })\n}\n")),(0,r.kt)("h2",{id:"index"},"Index"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#OPFetch"},"OPFetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Default ONES and plugin request instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Fetch"},"Fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Default request instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#isOPError"},"isOPError")),(0,r.kt)("td",{parentName:"tr",align:null},"Determine whether it is an open platform or plugin interface error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#OPErrorHandler"},"OPErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:null},"Open platform or plugin standard interface error processing method")))),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"OPFetch"},"OPFetch"),(0,r.kt)("p",null,"The default request instance of ",(0,r.kt)("strong",{parentName:"p"},"ONES standard and plugin"),", inherits from ",(0,r.kt)("a",{parentName:"p",href:"#Fetch"},(0,r.kt)("inlineCode",{parentName:"a"},"Fetch")),", and adds additional configurations related to ONES and plugin. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#Instance"},"instance method")," for use, This section is only a supplementary introduction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OPFetch")," instance built-in related configuration, it is inherited by the instance ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("h4",{id:"headers"},"Headers"),(0,r.kt)("p",null,"Built-in request header information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ones-check-id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"teamUUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Current team UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ones-check-point"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'team'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ones-check-id")," type, fixed value ",(0,r.kt)("inlineCode",{parentName:"td"},"'team'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ones-plugin-id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"instanceUUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Current plugin instance UUID")))),(0,r.kt)("h3",{id:"Fetch"},"Fetch"),(0,r.kt)("p",null,"Default request instance\uff0conly common configurations and interceptors that are ",(0,r.kt)("strong",{parentName:"p"},"business irrelevant")," are built in. You can use it directly or create multiple request instances based on it. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#Instance"},"instance method")," for use, This section is only a supplementary introduction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Fetch")," instance built-in related configuration, it is inherited by the instance ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("h4",{id:"interceptors"},"Interceptors"),(0,r.kt)("p",null,"Built-in inheritable interceptors, it is inherited by the instance ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("h5",{id:"params-alias"},"Params alias"),(0,r.kt)("p",null,"In normal businesses, we don't think there should be cases where a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request needs a ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),", so we've built in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamsAlias")," inheritable interceptor for you."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request, if ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," is empty, it will try to take ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", namely: ",(0,r.kt)("inlineCode",{parentName:"p"},"params: params || data"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// fetch: api/project/users/me?timestamp=1671015013733\nFetch('api/project/users/me', { method: 'GET', data: { timestamp: Date.now() } })\n")),(0,r.kt)("h3",{id:"isOPError"},"isOPError"),(0,r.kt)("p",null,"Determine whether it is an open platform or plugin interface error."),(0,r.kt)("p",null,"Reference for judging: ",(0,r.kt)("inlineCode",{parentName:"p"},"/^(plugin|platform)\\./i.test(response.model)"),"\u3002"),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response"),(0,r.kt)("td",{parentName:"tr",align:null},"Error data returned by the interface"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Types.OPError"},(0,r.kt)("inlineCode",{parentName:"a"},"OPError"))),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether it is an Open Platform or plugin interface error"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean"))))),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function isOPError(response: { model?: string }): boolean\n")),(0,r.kt)("h3",{id:"OPErrorHandler"},"OPErrorHandler"),(0,r.kt)("p",null,"Open Platform or plugin interface error standard handling method."),(0,r.kt)("p",null,"Based on the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," of the standard error data, ",(0,r.kt)("inlineCode",{parentName:"p"},"toast")," prompt."),(0,r.kt)("h4",{id:"params-1"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response"),(0,r.kt)("td",{parentName:"tr",align:null},"Interface standard error data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Types.OPError"},(0,r.kt)("inlineCode",{parentName:"a"},"OPError"))),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"types-1"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function OPErrorHandler(response: OPError) => void\n")),(0,r.kt)("h3",{id:"Instance"},"<Instance",">"),(0,r.kt)("p",null,"Request instance method introduction, not the actual export API."),(0,r.kt)("p",null,"Each instance can be called directly as a method, and the attributes mounted on the instance can be called."),(0,r.kt)("h4",{id:"types-2"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface FetchInstance<E extends object = EmptyObj> extends AxiosInstance {\n  <T = any, R = FetchResponse<T>, D = any>(config: FetchConfig<D, E>): Promise<R>\n  <T = any, R = FetchResponse<T>, D = any>(url: string, config?: FetchConfig<D, E>): Promise<R>\n  create: FetchCreate<E>\n}\n")),(0,r.kt)("h4",{id:"instancecreate"},"<Instance",">",".create"),(0,r.kt)("p",null,"Create a request sub-instance, the second parameter supports the ",(0,r.kt)("strong",{parentName:"p"},"inherited")," interceptor. When this instance is based on this instance, the interceptor will be passed into the sub-instance."),(0,r.kt)("h5",{id:"params-2"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"Request configuration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fetchconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchConfig"))),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inheritableInterceptors"),(0,r.kt)("td",{parentName:"tr",align:null},"Inherited interceptors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fetchinheritableinterceptors"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchInheritableInterceptors"))),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Request instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Instance"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchInstance")))))),(0,r.kt)("h5",{id:"types-3"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface FetchCreate<E extends object = EmptyObj> {\n  (\n    config?: FetchConfig<any, E>,\n    inheritableInterceptors?: FetchInheritableInterceptors<E>\n  ): FetchInstance<E>\n}\n")),(0,r.kt)("h5",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OPFetch } from '@ones-op/fetch'\n\nconst config = { baseURL: 'https://some-domain.com/api' }\n\nconst inheritableInterceptors = {\n  // request inheritable interceptor\n  request: [\n    [\n      function (config, instance) {\n        // Do something before request is sent\n        return config\n      },\n      function (error, instance) {\n        // Do something with request error\n        return Promise.reject(error)\n      },\n    ],\n    // [function (config) { return config }]\n    // [, function (error) { return Promise.reject(error) }]\n  ],\n  // response inheritable interceptor\n  response: [\n    [\n      function (response, instance) {\n        // Any status code that lie within the range of 2xx cause this function to trigger\n        // Do something with response data\n        return response\n      },\n      function (error, instance) {\n        // Any status codes that falls outside the range of 2xx cause this function to trigger\n        // Do something with response error\n        return Promise.reject(error)\n      },\n    ],\n  ],\n}\n\nconst request = OPFetch.create(config, inheritableInterceptors)\n")),(0,r.kt)("h4",{id:"instanceother"},"<Instance",">",".<other",">"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@ones-op/fetch")," is ultimately inherited from the ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/"},"axios")," library. The remaining APIs that have not been listed do not involve or affect. You can directly refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios/tree/v0.x#axios-api"},"axios")," reference version of the API documentation."),(0,r.kt)("h2",{id:"types-4"},"Types"),(0,r.kt)("h3",{id:"Types.OPError"},"OPError"),(0,r.kt)("p",null,"Definition of the type of error types of ONES Open Platform and plugin standard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface OPError {\n  model: string\n  reason: string\n  type: 'error' | 'warning' | 'info'\n  closable?: boolean\n}\n")),(0,r.kt)("h3",{id:"fetchinheritableinterceptors"},"FetchInheritableInterceptors"),(0,r.kt)("p",null,"The inherited interceptor is slightly different from ordinary interceptors. It will act on the current request instance and the sub-instance created by the current request instance."),(0,r.kt)("p",null,"Because the request instance is not fixed, we pass the current instance object in the second parameter of the interceptor method to facilitate your processing of some operations related to the request instance."),(0,r.kt)("p",null,"In order to facilitate distinction, the interceptor that can be inherited can only be passed through the second parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method, and the interceptor that the instance is added later will not be inherited."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface FetchInheritableInterceptors<E extends object = EmptyObj> {\n  request?: FetchInheritableInterceptor<FetchConfig<any, E>>[]\n  response?: FetchInheritableInterceptor<FetchConfig<any, E>>[]\n}\n\ntype FetchInheritableInterceptor<T = FetchConfig, D = any> =\n  | [(fulfilledValue: T, instance: FetchInstance) => T]\n  | [\n      (fulfilledValue: T, instance: FetchInstance) => T,\n      (rejectedError: D, instance: FetchInstance) => D\n    ]\n")),(0,r.kt)("h3",{id:"fetchconfig"},"FetchConfig"),(0,r.kt)("p",null,"These are the available config options for making requests. Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," is required. Requests will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," is not specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  // `url` is the server URL that will be used for the request\n  url: '/user',\n\n  // `method` is the request method to be used when making the request\n  method: 'get', // default\n\n  // `baseURL` will be prepended to `url` unless `url` is absolute.\n  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs\n  // to methods of that instance.\n  baseURL: 'https://some-domain.com/api',\n\n  // `autoErrorToast` indicates whether or not popup a window to show error info which request plugin's interface\n  // When using it, the plug-in backend needs to be used in conjunction with the corresponding `node-error` sdk\n  // `node-error` can refer from https://developer.ones.com/docs/reference/packages/node-error/\n  // It can deal with the plugin's interface's error automatically\n  autoErrorToast: true, //default\n\n  // `transformRequest` allows changes to the request data before it is sent to the server\n  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'\n  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,\n  // FormData or Stream\n  // You may modify the headers object.\n  transformRequest: [function (data, headers) {\n    // Do whatever you want to transform the data\n\n    return data;\n  }],\n\n  // `transformResponse` allows changes to the response data to be made before\n  // it is passed to then/catch\n  transformResponse: [function (data) {\n    // Do whatever you want to transform the data\n\n    return data;\n  }],\n\n  // `headers` are custom headers to be sent\n  headers: {'X-Requested-With': 'XMLHttpRequest'},\n\n  // `params` are the URL parameters to be sent with the request\n  // Must be a plain object or a URLSearchParams object\n  // NOTE: params that are null or undefined are not rendered in the URL.\n  params: {\n    ID: 12345\n  },\n\n  // `paramsSerializer` is an optional function in charge of serializing `params`\n  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)\n  paramsSerializer: function (params) {\n    return Qs.stringify(params, {arrayFormat: 'brackets'})\n  },\n\n  // \u26a0\ufe0f if the `params` is undefined and the method is 'GET'\n  // \u26a0\ufe0f the `data` will be used as an alias for the `params`\n\n  // `data` is the data to be sent as the request body\n  // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'\n  // When no `transformRequest` is set, must be of one of the following types:\n  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams\n  // - `GET` method only: string, plain object\n  // - Browser only: FormData, File, Blob\n  // - Node only: Stream, Buffer\n  data: {\n    firstName: 'Fred'\n  },\n\n  // syntax alternative to send data into the body\n  // method post\n  // only the value is sent, not the key\n  data: 'Country=Brasil&City=Belo Horizonte',\n\n  // `timeout` specifies the number of milliseconds before the request times out.\n  // If the request takes longer than `timeout`, the request will be aborted.\n  timeout: 1000, // default is `0` (no timeout)\n\n  // `withCredentials` indicates whether or not cross-site Access-Control requests\n  // should be made using credentials\n  withCredentials: false, // default\n\n  // `adapter` allows custom handling of requests which makes testing easier.\n  // Return a promise and supply a valid response (see lib/adapters/README.md).\n  adapter: function (config) {\n    /* ... */\n  },\n\n  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.\n  // This will set an `Authorization` header, overwriting any existing\n  // `Authorization` custom headers you have set using `headers`.\n  // Please note that only HTTP Basic auth is configurable through this parameter.\n  // For Bearer tokens and such, use `Authorization` custom headers instead.\n  auth: {\n    username: 'janedoe',\n    password: 's00pers3cret'\n  },\n\n  // `responseType` indicates the type of data that the server will respond with\n  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'\n  //   browser only: 'blob'\n  responseType: 'json', // default\n\n  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)\n  // Note: Ignored for `responseType` of 'stream' or client-side requests\n  responseEncoding: 'utf8', // default\n\n  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token\n  xsrfCookieName: 'XSRF-TOKEN', // default\n\n  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value\n  xsrfHeaderName: 'X-XSRF-TOKEN', // default\n\n  // `onUploadProgress` allows handling of progress events for uploads\n  // browser only\n  onUploadProgress: function (progressEvent) {\n    // Do whatever you want with the native progress event\n  },\n\n  // `onDownloadProgress` allows handling of progress events for downloads\n  // browser only\n  onDownloadProgress: function (progressEvent) {\n    // Do whatever you want with the native progress event\n  },\n\n  // `maxContentLength` defines the max size of the http response content in bytes allowed in Node.js\n  maxContentLength: 2000,\n\n  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed\n  maxBodyLength: 2000,\n\n  // `validateStatus` defines whether to resolve or reject the promise for a given\n  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`\n  // or `undefined`), the promise will be resolved; otherwise, the promise will be\n  // rejected.\n  validateStatus: function (status) {\n    return status >= 200 && status < 300; // default\n  },\n\n  // `maxRedirects` defines the maximum number of redirects to follow in node.js.\n  // If set to 0, no redirects will be followed.\n  maxRedirects: 5, // default\n\n  // `socketPath` defines a UNIX Socket to be used in node.js.\n  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.\n  // Only either `socketPath` or `proxy` can be specified.\n  // If both are specified, `socketPath` is used.\n  socketPath: null, // default\n\n  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http\n  // and https requests, respectively, in node.js. This allows options to be added like\n  // `keepAlive` that are not enabled by default.\n  httpAgent: new http.Agent({ keepAlive: true }),\n  httpsAgent: new https.Agent({ keepAlive: true }),\n\n  // `proxy` defines the hostname, port, and protocol of the proxy server.\n  // You can also define your proxy using the conventional `http_proxy` and\n  // `https_proxy` environment variables. If you are using environment variables\n  // for your proxy configuration, you can also define a `no_proxy` environment\n  // variable as a comma-separated list of domains that should not be proxied.\n  // Use `false` to disable proxies, ignoring environment variables.\n  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and\n  // supplies credentials.\n  // This will set an `Proxy-Authorization` header, overwriting any existing\n  // `Proxy-Authorization` custom headers you have set using `headers`.\n  // If the proxy server uses HTTPS, then you must set the protocol to `https`.\n  proxy: {\n    protocol: 'https',\n    host: '127.0.0.1',\n    port: 9000,\n    auth: {\n      username: 'mikeymike',\n      password: 'rapunz3l'\n    }\n  },\n\n  // `cancelToken` specifies a cancel token that can be used to cancel the request\n  // (see Cancellation section below for details)\n  cancelToken: new CancelToken(function (cancel) {\n  }),\n\n  // `decompress` indicates whether or not the response body should be decompressed\n  // automatically. If set to `true` will also remove the 'content-encoding' header\n  // from the responses objects of all decompressed responses\n  // - Node only (XHR cannot turn off decompression)\n  decompress: true // default\n\n}\n")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"why-it-still-popup-a-toast-without-node-error-when-catch-a-interfaces-error"},"Why it still popup a toast without ",(0,r.kt)("a",{parentName:"h3",href:"../../packages/node-error"},"node-error")," when catch a interface's error?"),(0,r.kt)("p",null,"When autoErrorToast set to be true, we will judge Whether to popup toast by calling isOPError method, so if you custom a response can pass the check of isOPError, it also works out."))}h.isMDXComponent=!0}}]);