"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5803],{17942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(50959);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=c,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(50959),c=r(45924),a=r(70033),o=r(49253),i=r(16033),l=r(77959);const s={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function p(e){let{href:t,children:r}=e;return n.createElement(o.default,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:o},o))}function d(e){var t;let{item:r}=e;const c=(0,a.Wl)(r);return c?n.createElement(u,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function f(e){var t,r;let{item:c}=e;const o=(0,i.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(u,{href:c.href,icon:o,title:c.label,description:null!=(r=c.description)?r:null==l?void 0:l.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},87878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(28957),c=(r(50959),r(17942)),a=r(6786);const o={},i="\u6ce8\u610f\u4e8b\u9879",l={unversionedId:"reference/packages/index",id:"reference/packages/index",title:"\u6ce8\u610f\u4e8b\u9879",description:"\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/packages/index.mdx",sourceDirName:"reference/packages",slug:"/reference/packages/",permalink:"/open-docs/zh-CN/docs/reference/packages/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"op.config.mjs",permalink:"/open-docs/zh-CN/docs/reference/config/op.config.mjs"},next:{title:"@ones-op/node-ability",permalink:"/open-docs/zh-CN/docs/reference/packages/node-ability/"}},s={},p=[{value:"\u8bed\u4e49\u5316",id:"\u8bed\u4e49\u5316",level:2},{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2}],u={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,c.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,c.kt)("p",null,"\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002"),(0,c.kt)("h2",{id:"\u8bed\u4e49\u5316"},"\u8bed\u4e49\u5316"),(0,c.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u7684\u80fd\u529b\u5305\u9075\u5faa ",(0,c.kt)("a",{parentName:"p",href:"http://semver.org/lang/zh-CN/"},"Semantic Versioning 2.0.0")," \u8bed\u4e49\u5316\u7248\u672c\u89c4\u8303\u3002"),(0,c.kt)("p",null,"\u5728\u80fd\u529b\u5305\u8fbe\u5230 1.0 \u7248\u672c\u4e4b\u524d\uff0c\u7834\u574f\u6027\u66f4\u6539\u5c06\u4ee5\u65b0\u7684\u6b21\u8981\u7248\u672c\u53d1\u5e03\u3002 \u4f8b\u5982 0.5.1 \u548c 0.5.4 \u5c06\u5177\u6709\u76f8\u540c\u7684 API\uff0c\u4f46 0.6.0 \u5c06\u5177\u6709\u91cd\u5927\u53d8\u5316\u3002"),(0,c.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);