"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[350],{17942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(50959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(50959),a=r(45924),c=r(70033),o=r(49253),i=r(16033),l=r(77959);const d={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function s(e){let{href:t,children:r}=e;return n.createElement(o.default,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:o},o))}function p(e){var t;let{item:r}=e;const a=(0,c.Wl)(r);return a?n.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r;let{item:a}=e;const o=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,c.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(u,{href:a.href,icon:o,title:a.label,description:null!=(r=a.description)?r:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},69516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(28957),a=(r(50959),r(17942)),c=r(6786);const o={},i="\u8fdb\u9636\u6307\u5357",l={unversionedId:"guide/advanced/advanced",id:"guide/advanced/advanced",title:"\u8fdb\u9636\u6307\u5357",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/advanced/advanced.mdx",sourceDirName:"guide/advanced",slug:"/guide/advanced/",permalink:"/open-docs/zh-CN/docs/guide/advanced/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",frontMatter:{},sidebar:"guide",previous:{title:"\u63d2\u4ef6\u5347\u7ea7",permalink:"/open-docs/zh-CN/docs/guide/upgrade"},next:{title:"\u65ad\u70b9\u8c03\u8bd5",permalink:"/open-docs/zh-CN/docs/guide/advanced/debugger"}},d={},s=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fdb\u9636\u6307\u5357"},"\u8fdb\u9636\u6307\u5357"),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u672c\u8282\u4e0d\u4f1a\u975e\u5e38\u7ed3\u6784\u5316\u7684\u4ecb\u7ecd\uff0c\u4f46\u6211\u4eec\u5c06\u6db5\u76d6\u4ee5\u4e0b\u4e3b\u9898\uff1a"),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);