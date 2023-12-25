"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7977],{17942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(50959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(50959),o=r(45924),c=r(70033),i=r(49253),a=r(16033),l=r(77959);const s={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function u(e){let{href:t,children:r}=e;return n.createElement(i.default,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function d(e){var t;let{item:r}=e;const o=(0,c.Wl)(r);return o?n.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r;let{item:o}=e;const i=(0,a.Z)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=o.docId)?t:void 0);return n.createElement(p,{href:o.href,icon:i,title:o.label,description:null!=(r=o.description)?r:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(O,{items:r.items,className:t})}function O(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},20230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(28957),o=(r(50959),r(17942)),c=r(6786);const i={},a="\u6982\u89c8",l={unversionedId:"tools/cli/index",id:"tools/cli/index",title:"\u6982\u89c8",description:"ONES CLI \u548c OP CLI \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u754c\u9762\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u5f00\u53d1\u8005\u6784\u5efa ONES \u5f00\u653e\u5e73\u53f0\u63d2\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/index.mdx",sourceDirName:"tools/cli",slug:"/tools/cli/",permalink:"/open-docs/zh-CN/docs/tools/cli/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",frontMatter:{},sidebar:"tools",next:{title:"ONES CLI \u6307\u4ee4",permalink:"/open-docs/zh-CN/docs/tools/cli/ones-cli"}},s={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,o.kt)("p",null,"ONES CLI \u548c OP CLI \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u754c\u9762\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u5f00\u53d1\u8005\u6784\u5efa ONES \u5f00\u653e\u5e73\u53f0\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"ONES CLI \u53ef\u4ee5\u5feb\u901f\u521d\u59cb\u5316 ONES \u5f00\u653e\u5e73\u53f0\u63d2\u4ef6\u5de5\u7a0b\uff0c\u5728\u63d2\u4ef6\u5de5\u7a0b\u521d\u59cb\u5316\u7684\u8fc7\u7a0b OP CLI \u4f1a\u4f5c\u4e3a\u63d2\u4ef6\u5de5\u7a0b\u7684\u9879\u76ee\u4f9d\u8d56\u88ab\u5b89\u88c5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u6267\u884c\u8bb8\u591a\u5e38\u89c1\u7684\u5f00\u53d1\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528 Node.js \u5b89\u88c5 ONES CLI \u548c OP CLI\uff0c\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ONES CLI \u4e0e OP CLI \u6267\u884c\u5176\u4ed6\u4efb\u52a1\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,o.kt)(c.Z,{mdxType:"DocCardList"}),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);