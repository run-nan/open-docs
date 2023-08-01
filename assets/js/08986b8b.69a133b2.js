"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[77174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(34334),i=n(51048),s=n(33609),o=n(1943),p=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:c,values:k,groupId:g,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===c?c:null!=(t=null!=c?c:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[O,C]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==O&&N.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=N[n].value;a!==O&&(E(t),C(a),null!=g&&P(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:D,onClick:T},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},33087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const s={},o="@ones-op/event",p={unversionedId:"reference/packages/event/event",id:"reference/packages/event/event",title:"@ones-op/event",description:"We provide a set of event communication library that can help you communicate within the plugin, or trigger some ONES events via events.",source:"@site/docs/reference/packages/event/event.md",sourceDirName:"reference/packages/event",slug:"/reference/packages/event/",permalink:"/open-docs/docs/next/reference/packages/event/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Changelog",permalink:"/open-docs/docs/next/reference/packages/store/changelog"},next:{title:"Changelog",permalink:"/open-docs/docs/next/reference/packages/event/changelog"}},u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Index",id:"index",level:2},{value:"APIs",id:"apis",level:2},{value:"OPDispatch",id:"opdispatch",level:3},{value:"Params",id:"params",level:4},{value:"OPPluginListener",id:"oppluginlistener",level:3},{value:"Params",id:"params-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Types",id:"types",level:4},{value:"Examples",id:"examples",level:4},{value:"OPPluginDispatch",id:"opplugindispatch",level:3},{value:"Params",id:"params-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Examples",id:"examples-1",level:4}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-opevent"},"@ones-op/event"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npm.partner.ones.cn/package/@ones-op/event"},(0,r.kt)("img",{parentName:"a",src:"https://npm.partner.ones.cn/badge/v/@ones-op/event.svg",alt:null}))),(0,r.kt)("p",null,"We provide a set of event communication library that can help you communicate within the plugin, or trigger some ONES events via events."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"@ones-op/event")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.6.2+"))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the package in the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," directory using the following command:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/event\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/event\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPDispatch } from '@ones-op/event'\n\nOPDispatch('invoke:ones:global:progressManager')\n")),(0,r.kt)("h2",{id:"index"},"Index"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#opdispatch"},"OPDispatch")),(0,r.kt)("td",{parentName:"tr",align:null},"The ONES-level dispatcher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#oppluginlistener"},"OPPluginListener")),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin-level listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#opplugindispatch"},"OPPluginDispatch")),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin-level dispatcher")))),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"opdispatch"},"OPDispatch"),(0,r.kt)("p",null,"This method triggers a number of events within the ONES system."),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Event name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"oppluginlistener"},"OPPluginListener"),(0,r.kt)("p",null,"Add plugin-level event listener, which cannot be used across plugin and are triggered by events dispatched by ",(0,r.kt)("a",{parentName:"p",href:"#opplugindispatch"},(0,r.kt)("inlineCode",{parentName:"a"},"OPPluginDispatch")),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When the component is destroyed, you should call the returned unlistener function to avoid memory leaks and some unexpected bugs caused by repeated listening.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Cross-module communication is supported only under the same plugin and when the modules are active at the same time.")),(0,r.kt)("h4",{id:"params-1"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Event name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},"Event handler function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OPListenFunc")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"listener options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ once?: boolean }")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ once: false }"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"options.once")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," should be invoked at most once after being added. If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," would be automatically removed when invoked. If not specified, defaults to false."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The function to remove the current event listener."),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type OPListenFunc<P, R = unknown> = (\n  params: P\n) => Promise<OPListenerProcessResult<R> | void> | OPListenerProcessResult<R> | void\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n\nenum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(() => {\n  const cancelFn = OPPluginListener('onChange', (params) => {\n    console.log(`new value: ${params?.value}`)\n  })\n  return () => cancelFn()\n}, [])\n")),(0,r.kt)("h3",{id:"opplugindispatch"},"OPPluginDispatch"),(0,r.kt)("p",null,"Dispatching plugin-level event, which cannot be used across plugins, will trigger an event listener added by ",(0,r.kt)("a",{parentName:"p",href:"#oppluginlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"OPPluginListener")),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Cross-module communication is supported only under the same plugin and when the modules are active at the same time.")),(0,r.kt)("h4",{id:"params-2"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Event name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"Event params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"Returns all event processing results as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," and you can implement a simple communication quiz based on this feature."),(0,r.kt)("p",null,"If there is no such need, you can ignore the return value and do not need to see the following introduction."),(0,r.kt)("p",null,"The actual ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.all(resultList)")," object is returned, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"resultList")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," of all event processing results, so your event method should always have a return value response whether it errors or not."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If there are multiple listeners for the same event, the returned results will be pushed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"resultList")," array in the order of event registration.")),(0,r.kt)("p",null,"We strongly recommend that you write the return value of the event handler method in the following ",(0,r.kt)("inlineCode",{parentName:"p"},"OPListenerProcessResult")," format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n")),(0,r.kt)("p",null,"If you don't do any return in the event handler, or if the return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", we will return the following data by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  state: MFListenerProcessResultState.SUCCESS,\n  data: undefined,\n}\n")),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#oppluginlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"OPPluginListener"))," handler returns data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginListener"',title:'"OPPluginListener"'},"import { OPPluginListener, OPListenerProcessResultState } from '@ones-op/event'\n\nuseEffect(() => {\n  const cancelFn = OPPluginListener('onChange', (params) => {\n    return {\n      state: OPListenerProcessResultState.SUCCESS,\n      data: params.value + 1,\n    }\n  })\n  return () => cancelFn()\n}, [])\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#opplugindispatch"},(0,r.kt)("inlineCode",{parentName:"a"},"OPPluginDispatch"))," prints its return value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginDispatch"',title:'"OPPluginDispatch"'},"OPPluginDispatch('onChange', { value: 0 }).then((resultList) => {\n  console.log(`value is increased: ${resultList[0].data === 1}`)\n})\n")))}c.isMDXComponent=!0}}]);