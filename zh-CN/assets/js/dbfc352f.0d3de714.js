"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[76965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(34334),o=n(51048),s=n(33609),i=n(1943),u=n(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:k,groupId:h,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,i.U)(),[O,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=N[h];null!=e&&e!==O&&y.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==O&&(E(t),w(a),null!=h&&T(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:j,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},84772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),o=n(18679);const s={},i="@ones-op/utils",u={unversionedId:"reference/packages/utils/utils",id:"version-1.x/reference/packages/utils/utils",title:"@ones-op/utils",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u5e93\u5c01\u88c5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/reference/packages/utils/utils.md",sourceDirName:"reference/packages/utils",slug:"/reference/packages/utils/",permalink:"/open-docs/zh-CN/docs/reference/packages/utils/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/open-docs/zh-CN/docs/reference/packages/bridge/changelog"},next:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/open-docs/zh-CN/docs/reference/packages/utils/changelog"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"APIs",id:"apis",level:2},{value:"stringifySearchQuery",id:"stringifysearchquery",level:3},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:5},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:5},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:5}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-oputils"},"@ones-op/utils"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npm.partner.ones.cn/package/@ones-op/utils"},(0,r.kt)("img",{parentName:"a",src:"https://npm.partner.ones.cn/badge/v/@ones-op/utils.svg",alt:null}))),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u5e93\u5c01\u88c5\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u5728\u63d2\u4ef6 /web \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/utils\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/utils\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { stringifySearchQuery } from '@ones-op/utils'\nimport type { SearchQueryType } from '@ones-op/utils'\n\nconst testCasePlanURL = 'https://ones.com/project/#/testcase/team/JTsTqqQo/plan'\n\nconst App = () => {\n  const searchQuery: SearchQueryType = {\n    allow: 'fullscreen',\n    conditions: [\n      {\n        field: 'test_plan_related_project',\n        operate: 'include',\n        value: ['SbmRCmXZ36snAhUY'],\n      },\n    ],\n  }\n\n  const src = stringifySearchQuery(testCasePlanURL, searchQuery)\n\n  return <iframe width=\"1500\" height=\"800\" allow=\"payment\" src={src}></iframe>\n}\n")),(0,r.kt)("h2",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"API")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#stringifySearchQuery"},"stringifySearchQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"\u62fc\u63a5 URL \u548c search \u67e5\u8be2\u53c2\u6570")))),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"stringifysearchquery"},"stringifySearchQuery"),(0,r.kt)("p",null,"\u62fc\u63a5 URL \u548c search \u67e5\u8be2\u53c2\u6570\u3002"),(0,r.kt)("h5",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ONES"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"@ones-op/utils")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v3.13.35+"),(0,r.kt)("td",{parentName:"tr",align:null},"v0.21.1")))),(0,r.kt)("h5",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u9875\u9762\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"searchQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u53d9\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SearchQueryType")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))))),(0,r.kt)("h5",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface SearchQueryType {\n  /** \u7b5b\u9009\u5668\u7b5b\u9009\u6761\u4ef6 */\n  conditions: {\n    /** \u7b5b\u9009\u5b57\u6bb5 */\n    field: FieldType\n    /** \u64cd\u4f5c */\n    operate: OperateType\n    /** \u7b5b\u9009\u503c */\n    value: string[]\n  }[]\n  /** \u9875\u9762\u5168\u5c4f */\n  allow?: 'fullscreen'\n}\n\n/** \u7b5b\u9009\u5b57\u6bb5: \u5f53\u524d\u53ea\u652f\u6301 'test_plan_related_project' */\ntype FieldType = 'test_plan_related_project'\n\n/** \u64cd\u4f5c: include: \u76f8\u7b49, exclude: \u4e0d\u76f8\u7b49 */\ntype OperateType = 'include' | 'exclude'\n")))}m.isMDXComponent=!0}}]);