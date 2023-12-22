"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7678],{17942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(50959);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(50959),i=r(45924),a=r(70033),c=r(49253),o=r(16033),l=r(77959);const s={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function u(e){let{href:t,children:r}=e;return n.createElement(c.default,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:c},c))}function p(e){var t;let{item:r}=e;const i=(0,a.Wl)(r);return i?n.createElement(d,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r;let{item:i}=e;const c=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(d,{href:i.href,icon:c,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},40237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(28957),i=(r(50959),r(17942)),a=r(6786);const c={},o="\u4e3b\u8981\u6982\u5ff5",l={unversionedId:"guide/abilities/abilities",id:"guide/abilities/abilities",title:"\u4e3b\u8981\u6982\u5ff5",description:"\u8fd9\u90e8\u5206\u6db5\u76d6\u4e86\u4f60\u5728\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\u65f6\u4e00\u4e9b\u5fc5\u4e0d\u53ef\u5c11\u7684\u80fd\u529b\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u8fd9\u90e8\u5206\u5f52\u7eb3\u4e3a\u4e00\u4e2a\u5408\u96c6\u3002\u901a\u8fc7\u5bf9\u8fd9\u4e9b\u80fd\u529b\u7684\u5b66\u4e60\u638c\u63e1\uff0c\u76f8\u4fe1\u4f60\u80fd\u5feb\u901f\u7684\u5199\u51fa\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u5584\u7684\u63d2\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/abilities/abilities.mdx",sourceDirName:"guide/abilities",slug:"/guide/abilities/",permalink:"/open-docs/zh-CN/docs/guide/abilities/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"guide",previous:{title:"\u98ce\u683c\u6307\u5357",permalink:"/open-docs/zh-CN/docs/guide/style-guide"},next:{title:"\u6dfb\u52a0\u63d2\u69fd",permalink:"/open-docs/zh-CN/docs/guide/abilities/add-slot"}},s={},u=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e3b\u8981\u6982\u5ff5"},"\u4e3b\u8981\u6982\u5ff5"),(0,i.kt)("p",null,"\u8fd9\u90e8\u5206\u6db5\u76d6\u4e86\u4f60\u5728\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\u65f6\u4e00\u4e9b\u5fc5\u4e0d\u53ef\u5c11\u7684\u80fd\u529b\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u8fd9\u90e8\u5206\u5f52\u7eb3\u4e3a\u4e00\u4e2a\u5408\u96c6\u3002\u901a\u8fc7\u5bf9\u8fd9\u4e9b\u80fd\u529b\u7684\u5b66\u4e60\u638c\u63e1\uff0c\u76f8\u4fe1\u4f60\u80fd\u5feb\u901f\u7684\u5199\u51fa\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u5584\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);