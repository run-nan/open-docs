"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5608],{17942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(50959);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(50959),i=r(45924),a=r(70033),c=r(49253),s=r(16033),o=r(77959);const l={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function u(e){let{href:t,children:r}=e;return n.createElement(c.default,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function d(e){var t;let{item:r}=e;const i=(0,a.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r;let{item:i}=e;const c=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:c,title:i.label,description:null!=(r=i.description)?r:null==o?void 0:o.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},25210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(28957),i=(r(50959),r(17942)),a=r(6786);const c={},s="TestCase",o={unversionedId:"abilities/business/testcase/testcase",id:"abilities/business/testcase/testcase",title:"TestCase",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/abilities/business/testcase/testcase.mdx",sourceDirName:"abilities/business/testcase",slug:"/abilities/business/testcase/",permalink:"/open-docs/zh-CN/docs/abilities/business/testcase/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",frontMatter:{},sidebar:"abilities",previous:{title:"\u573a\u666f\uff1a\u96c6\u6210\u6307\u5b9a\u7248\u672c\u79c1\u6709 Gitlab \u4ee3\u7801\u4ed3",permalink:"/open-docs/zh-CN/docs/abilities/business/devops/custom-code-repository/custom-code-repository-private-gitlab"},next:{title:"\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u62a5\u544a\u7ec4\u4ef6",permalink:"/open-docs/zh-CN/docs/abilities/business/testcase/testcase-report-component/"}},l={},u=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testcase"},"TestCase"),(0,i.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);