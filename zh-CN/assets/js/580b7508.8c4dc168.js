"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[83621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),r=n(34334),i=n(51048),p=n(33609),o=n(1943),s=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:c,values:k,groupId:g,className:N}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,p.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(t=null!=c?c:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:y}=(0,o.U)(),[O,C]=(0,l.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:L}=(0,s.o5)();if(null!=g){const e=P[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==O&&(L(t),C(a),null!=g&&y(g,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;n=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},N)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:w,onClick:S},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function c(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},44371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(34259),i=n(18679);const p={},o="@ones-op/event",s={unversionedId:"reference/packages/event/event",id:"version-1.x/reference/packages/event/event",title:"@ones-op/event",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u4e8b\u4ef6\u901a\u4fe1\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\u901a\u4fe1\uff0c\u6216\u8005\u901a\u8fc7\u4e8b\u4ef6\u89e6\u53d1 ONES \u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/reference/packages/event/event.md",sourceDirName:"reference/packages/event",slug:"/reference/packages/event/",permalink:"/open-docs/zh-CN/docs/reference/packages/event/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/open-docs/zh-CN/docs/reference/packages/store/changelog"},next:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/open-docs/zh-CN/docs/reference/packages/event/changelog"}},u={},d=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"APIs",id:"apis",level:2},{value:"OPDispatch",id:"opdispatch",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"OPPluginListener",id:"oppluginlistener",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:4},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"OPPluginDispatch",id:"opplugindispatch",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ones-opevent"},"@ones-op/event"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://npm.partner.ones.cn/package/@ones-op/event"},(0,l.kt)("img",{parentName:"a",src:"https://npm.partner.ones.cn/badge/v/@ones-op/event.svg",alt:null}))),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u4e8b\u4ef6\u901a\u4fe1\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\u901a\u4fe1\uff0c\u6216\u8005\u901a\u8fc7\u4e8b\u4ef6\u89e6\u53d1 ONES \u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"@ones-op/event")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.6.2+"))))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"/web")," \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/event\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/event\n")))),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPDispatch } from '@ones-op/event'\n\nOPDispatch('invoke:ones:global:progressManager')\n")),(0,l.kt)("h2",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#opdispatch"},"OPDispatch")),(0,l.kt)("td",{parentName:"tr",align:null},"ONES \u7ea7\u522b\u4e8b\u4ef6\u6d3e\u53d1\u65b9\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#oppluginlistener"},"OPPluginListener")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7ea7\u522b\u4e8b\u4ef6\u76d1\u542c\u65b9\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#opplugindispatch"},"OPPluginDispatch")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7ea7\u522b\u4e8b\u4ef6\u6d3e\u53d1\u65b9\u6cd5")))),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("h3",{id:"opdispatch"},"OPDispatch"),(0,l.kt)("p",null,"\u901a\u8fc7\u6b64\u65b9\u6cd5\u53ef\u4ee5\u89e6\u53d1 ONES \u7cfb\u7edf\u5185\u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"oppluginlistener"},"OPPluginListener"),(0,l.kt)("p",null,"\u6dfb\u52a0\u63d2\u4ef6\u7ea7\u522b\u7684\u4e8b\u4ef6\u76d1\u542c\uff0c\u65e0\u6cd5\u8de8\u63d2\u4ef6\u4f7f\u7528\uff0c\u7531 ",(0,l.kt)("a",{parentName:"p",href:"#opplugindispatch"},(0,l.kt)("inlineCode",{parentName:"a"},"OPPluginDispatch"))," \u6d3e\u53d1\u4e8b\u4ef6\u89e6\u53d1\u3002"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\uff0c\u4f60\u5e94\u8be5\u8c03\u7528\u8fd4\u56de\u7684\u53d6\u6d88\u76d1\u542c\u51fd\u6570\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\uff0c\u4ee5\u53ca\u91cd\u590d\u76d1\u542c\u5bfc\u81f4\u7684\u4e00\u4e9b\u610f\u6599\u4e4b\u5916\u7684 BUG\u3002")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4ec5\u5728\u540c\u4e00\u4e2a\u63d2\u4ef6\u4e0b\uff0c\u4e14\u6a21\u5757\u540c\u65f6\u6fc0\u6d3b\u65f6\uff0c\u624d\u652f\u6301\u8de8\u6a21\u5757\u901a\u4fe1\u3002")),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listener"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u5904\u7406\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OPListenFunc")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u5668\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ once?: boolean }")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ once: false }"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"options.once")),(0,l.kt)("p",null,"\u8868\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"listener")," \u5728\u6dfb\u52a0\u4e4b\u540e\u6700\u591a\u53ea\u8c03\u7528\u4e00\u6b21\u3002\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"listener")," \u4f1a\u5728\u5176\u88ab\u8c03\u7528\u4e4b\u540e\u81ea\u52a8\u79fb\u9664\u3002"),(0,l.kt)("h4",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,l.kt)("p",null,"\u79fb\u9664\u5f53\u524d\u4e8b\u4ef6\u76d1\u542c\u7684\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type OPListenFunc<P, R = unknown> = (\n  params: P\n) => Promise<OPListenerProcessResult<R> | void> | OPListenerProcessResult<R> | void\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n\nenum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n")),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(() => {\n  const cancelFn = OPPluginListener('onChange', (params) => {\n    console.log(`new value: ${params?.value}`)\n  })\n  return () => cancelFn()\n}, [])\n")),(0,l.kt)("h3",{id:"opplugindispatch"},"OPPluginDispatch"),(0,l.kt)("p",null,"\u6d3e\u53d1\u63d2\u4ef6\u7ea7\u522b\u7684\u4e8b\u4ef6\uff0c\u65e0\u6cd5\u8de8\u63d2\u4ef6\u4f7f\u7528\uff0c\u5c06\u89e6\u53d1 ",(0,l.kt)("a",{parentName:"p",href:"#oppluginlistener"},(0,l.kt)("inlineCode",{parentName:"a"},"OPPluginListener"))," \u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4ec5\u5728\u540c\u4e00\u4e2a\u63d2\u4ef6\u4e0b\uff0c\u4e14\u6a21\u5757\u540c\u65f6\u6fc0\u6d3b\u65f6\uff0c\u624d\u652f\u6301\u8de8\u6a21\u5757\u901a\u4fe1\u3002")),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7684\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u9644\u5e26\u7684\u4e8b\u4ef6\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"\u8fd4\u56de-1"},"\u8fd4\u56de"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u7684\u65b9\u5f0f\u8fd4\u56de\u6240\u6709\u4e8b\u4ef6\u5904\u7406\u7ed3\u679c\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u6b64\u7279\u6027\u5b9e\u73b0\u7b80\u5355\u7684\u901a\u4fe1\u95ee\u7b54\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u65e0\u6b64\u7c7b\u9700\u6c42\uff0c\u53ef\u4ee5\u5ffd\u7565\u8fd4\u56de\u503c\uff0c\u5e76\u65e0\u9700\u770b\u4e0b\u8ff0\u4ecb\u7ecd\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8981\u6c42")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"@ones-op/event"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.6.1+"))))),(0,l.kt)("p",null,"\u5b9e\u9645\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.all(resultList)")," \u5bf9\u8c61\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"resultList")," \u4e3a\u6240\u6709\u4e8b\u4ef6\u5904\u7406\u7ed3\u679c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u56e0\u6b64\u4f60\u7684\u4e8b\u4ef6\u65b9\u6cd5\u65e0\u8bba\u662f\u5426\u51fa\u9519\uff0c\u90fd\u5e94\u8be5\u59cb\u7ec8\u6709\u4e00\u4e2a\u8fd4\u56de\u503c\u54cd\u5e94\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u4e00\u4e2a\u4e8b\u4ef6\u5b58\u5728\u591a\u4e2a\u76d1\u542c\uff0c\u5c06\u4f1a\u6309\u4e8b\u4ef6\u6ce8\u518c\u987a\u5e8f\u5c06\u8fd4\u56de\u7ed3\u679c\u63a8\u8fdb ",(0,l.kt)("inlineCode",{parentName:"p"},"resultList")," \u6570\u7ec4\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u6309\u5982\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"OPListenerProcessResult")," \u683c\u5f0f\u4e66\u5199\u4e8b\u4ef6\u5904\u7406\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u5728\u4e8b\u4ef6\u5904\u7406\u65b9\u6cd5\u91cc\u505a\u4efb\u4f55\u8fd4\u56de\uff0c\u6216\u8005\u8fd4\u56de\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," \uff0c\u6211\u4eec\u5c06\u9ed8\u8ba4\u8fd4\u56de\u4ee5\u4e0b\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  state: MFListenerProcessResultState.SUCCESS,\n  data: undefined,\n}\n")),(0,l.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u5904\u7406\u51fd\u6570\u8fd4\u56de\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginListener"',title:'"OPPluginListener"'},"import { OPPluginListener, OPListenerProcessResultState } from '@ones-op/event'\n\nuseEffect(() => {\n  const cancelFn = OPPluginListener('onChange', (params) => {\n    return {\n      state: OPListenerProcessResultState.SUCCESS,\n      data: params.value + 1,\n    }\n  })\n  return () => cancelFn()\n}, [])\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OPPluginDispatch")," \u6253\u5370\u5176\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginDispatch"',title:'"OPPluginDispatch"'},"OPPluginDispatch('onChange', { value: 0 }).then((resultList) => {\n  console.log(`value is increased: ${resultList[0].data === 1}`)\n})\n")))}c.isMDXComponent=!0}}]);