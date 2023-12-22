"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[3269],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91044:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(50959),r=n(45924);const l={tabItem:"tabItem_skN5"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},42181:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(28957),r=n(50959),l=n(45924),o=n(70562),u=n(94506),i=n(75814);const s={tabList:"tabList_Ifpf",tabItem:"tabItem_j1rW"};function c(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==u&&(d(t),i(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const t=p.indexOf(e.currentTarget)+1;n=null!=(a=p[t])?a:p[0];break}case"ArrowLeft":{var r;const t=p.indexOf(e.currentTarget)-1;n=null!=(r=p[t])?r:p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",s.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,u.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",s.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function m(e){const t=(0,i.default)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},94506:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(50959),r=n(28903),l=n(94150),o=n(40828),u=n(29163);function i(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:i(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(o.location.search);t.set(u,e),o.replace({...o.location,search:t.toString()})}),[u,o])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=s(e),[o,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=null!=d?d:f;return c({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),b(e)}),[m,b,l]),tabValues:l}}},25315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=n(28957),r=(n(50959),n(17942)),l=n(42181),o=n(91044);const u={sidebar_position:6,description:"\u5e73\u53f0\u63d0\u4f9b\u4e00\u5957\u7075\u6d3b\u7684\u6570\u636e\u83b7\u53d6\u673a\u5236\uff0c\u65b9\u4fbf\u5728\u63d2\u4ef6\u4e2d\u83b7\u53d6 ONES \u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"},i="\u6570\u636e\u83b7\u53d6",s={unversionedId:"guide/abilities/data-acquisition",id:"guide/abilities/data-acquisition",title:"\u6570\u636e\u83b7\u53d6",description:"\u5e73\u53f0\u63d0\u4f9b\u4e00\u5957\u7075\u6d3b\u7684\u6570\u636e\u83b7\u53d6\u673a\u5236\uff0c\u65b9\u4fbf\u5728\u63d2\u4ef6\u4e2d\u83b7\u53d6 ONES \u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/abilities/data-acquisition.md",sourceDirName:"guide/abilities",slug:"/guide/abilities/data-acquisition",permalink:"/open-docs/zh-CN/docs/guide/abilities/data-acquisition",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"\u5e73\u53f0\u63d0\u4f9b\u4e00\u5957\u7075\u6d3b\u7684\u6570\u636e\u83b7\u53d6\u673a\u5236\uff0c\u65b9\u4fbf\u5728\u63d2\u4ef6\u4e2d\u83b7\u53d6 ONES \u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"},sidebar:"guide",previous:{title:"\u63a5\u53e3\u8bf7\u6c42",permalink:"/open-docs/zh-CN/docs/guide/abilities/interface-request"},next:{title:"\u4e8b\u4ef6\u901a\u4fe1",permalink:"/open-docs/zh-CN/docs/guide/abilities/event-communication"}},c={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u8c03\u7528",id:"\u7b2c\u4e8c\u6b65\u8c03\u7528",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u83b7\u53d6"},"\u6570\u636e\u83b7\u53d6"),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v3.6.25+")))),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"\u5728\u63d2\u4ef6\u7684\u67d0\u4e9b\u529f\u80fd\u573a\u666f\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u83b7\u53d6\u4e00\u4e9b\u63d2\u69fd\u6240\u5728\u4f4d\u7f6e\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u6bd4\u5982\u5f53\u524d\u7684\u7528\u6237\u4fe1\u606f\u3001\u56e2\u961f\u4fe1\u606f\u7b49\u3002\u6240\u4ee5\u6211\u4eec\u7ed9\u4f60\u63d0\u4f9b\u4e86\u4e00\u5957\u6570\u636e\u83b7\u53d6\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\u83b7\u53d6 ONES \u7684\u90e8\u5206\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u4e0a\u4e0b\u6587\u6570\u636e\u7684\u83b7\u53d6\u4e00\u822c\u662f\u548c\u63d2\u69fd\u6240\u5728\u4f4d\u7f6e\u8fdb\u884c\u7ed1\u5b9a\u7684\uff0c\u6240\u4ee5\u4f60\u80fd\u83b7\u53d6\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u4f1a\u56e0\u4e3a\u63d2\u69fd\u4f4d\u7f6e\u7684\u4e0d\u540c\u800c\u6709\u6240\u4e0d\u540c\u3002\u6211\u4eec\u5c06\u8fd9\u4e9b\u6570\u636e\u5206\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u6570\u636e")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u4e0a\u4e0b\u6587\u6570\u636e"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u6570\u636e\uff1a")," \u6240\u6709\u63d2\u69fd\u4e2d\u90fd\u53ef\u4ee5\u83b7\u53d6\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u5982\u63d2\u4ef6\u4fe1\u606f\u3001\u7528\u6237\u4fe1\u606f\u3001\u7ec4\u7ec7\u4fe1\u606f\u3001\u56e2\u961f\u4fe1\u606f\u7b49"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u4e0a\u4e0b\u6587\u6570\u636e\uff1a")," \u53ea\u6709\u5728\u7279\u5b9a\u4f4d\u7f6e\u624d\u9700\u8981\u83b7\u53d6\u7684\u6570\u636e\uff0c\u4e5f\u53ea\u80fd\u5728\u7279\u5b9a\u7684\u63d2\u69fd\u4e2d\u83b7\u53d6\u7684\u5230"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",null,"\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.default,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/store\n"))),(0,r.kt)(o.default,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/store\n"))),(0,r.kt)(o.default,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @ones-op/store\n")))),(0,r.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u8c03\u7528"},"\u7b2c\u4e8c\u6b65\uff1a\u8c03\u7528"),(0,r.kt)("p",null,"\u5982\u83b7\u53d6\u5f53\u524d\u56e2\u961f\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTeamInfo } from '@ones-op/store'\n\nconst { uuid, name } = useTeamInfo()\n")),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67d0\u4e2a\u63d2\u69fd\u5177\u4f53\u80fd\u83b7\u53d6\u5230\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/abilities/slot/"},"\u63d2\u69fd\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u4ee5\u53ca\u53c2\u6570\u91ca\u4e49\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/reference/packages/store/"},"@ones-op/store")))))}f.isMDXComponent=!0}}]);