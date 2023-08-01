"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[44043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(34334);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),i=a(34334),r=a(51048),l=a(33609),s=a(1943),u=a(72957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:r,block:d,defaultValue:m,values:f,groupId:b,className:v}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,s.U)(),[O,w]=(0,o.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&g.some((t=>t.value===e))&&w(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==O&&(E(t),w(n),null!=b&&x(b,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var o;const t=T.indexOf(e.currentTarget)-1;a=null!=(o=T[t])?o:T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:q},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),r?(0,o.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},43541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(34259),r=a(18679);const l={sidebar_position:6,description:"The platform provides a flexible data acquisition mechanism to facilitate the acquisition of context information of ONES in plugin."},s="Data acquisition",u={unversionedId:"guide/abilities/data-acquisition",id:"guide/abilities/data-acquisition",title:"Data acquisition",description:"The platform provides a flexible data acquisition mechanism to facilitate the acquisition of context information of ONES in plugin.",source:"@site/docs/guide/abilities/data-acquisition.md",sourceDirName:"guide/abilities",slug:"/guide/abilities/data-acquisition",permalink:"/open-docs/docs/next/guide/abilities/data-acquisition",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"The platform provides a flexible data acquisition mechanism to facilitate the acquisition of context information of ONES in plugin."},sidebar:"guide",previous:{title:"Request",permalink:"/open-docs/docs/next/guide/abilities/interface-request"},next:{title:"Event communication",permalink:"/open-docs/docs/next/guide/abilities/event-communication"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2: Call",id:"step-2-call",level:3},{value:"Other",id:"other",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-acquisition"},"Data acquisition"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v3.6.25+")))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In some functional scenarios of the plugin, you may need to get some context information about the location of the slot. For example, current user information, team information and so on. So we provide you with a set of data acquisition libraries that can help you get part of the data of ONES in the plugin."),(0,o.kt)("p",null,"This kind of contextual data acquisition is generally bound to the location of the slot, so the type of data you can get varies depending on the location of the slot. We divide this data into ",(0,o.kt)("strong",{parentName:"p"},"global data")," and ",(0,o.kt)("strong",{parentName:"p"},"specific context data"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"global data:")," Contextual information available in all slots, such as plugin information, user information, organization information, team information, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"specific context data:")," Data that needs to be obtained only in a specific location can only be obtained in a specific slot."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/web")," directory and install the package with the following command:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/store\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/store\n")))),(0,o.kt)("h3",{id:"step-2-call"},"Step 2: Call"),(0,o.kt)("p",null,"For example, get the current team information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTeamInfo } from '@ones-op/store'\n\nconst { uuid, name } = useTeamInfo()\n")),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For more information about the context that can be obtained by a slot, please see: ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/next/abilities/slot/"},"Slots"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For specific usage examples and parameter definitions, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/next/reference/packages/store/"},"@ones-op/store")))))}m.isMDXComponent=!0}}]);