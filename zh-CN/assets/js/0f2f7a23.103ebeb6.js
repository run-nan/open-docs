"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[67004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),i=r(34334),o=r(78259),a=r(83699),c=r(2735),l=r(97325);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:r}=e;const i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},68241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),o=r(17661);const a={},c="\u4e3b\u8981\u6982\u5ff5",l={unversionedId:"guide/abilities/abilities",id:"version-1.x/guide/abilities/abilities",title:"\u4e3b\u8981\u6982\u5ff5",description:"\u8fd9\u90e8\u5206\u6db5\u76d6\u4e86\u4f60\u5728\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\u65f6\u4e00\u4e9b\u5fc5\u4e0d\u53ef\u5c11\u7684\u80fd\u529b\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u8fd9\u90e8\u5206\u5f52\u7eb3\u4e3a\u4e00\u4e2a\u5408\u96c6\u3002\u901a\u8fc7\u5bf9\u8fd9\u4e9b\u80fd\u529b\u7684\u5b66\u4e60\u638c\u63e1\uff0c\u76f8\u4fe1\u4f60\u80fd\u5feb\u901f\u7684\u5199\u51fa\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u5584\u7684\u63d2\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guide/abilities/abilities.mdx",sourceDirName:"guide/abilities",slug:"/guide/abilities/",permalink:"/open-docs/zh-CN/docs/guide/abilities/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"guide",previous:{title:"\u98ce\u683c\u6307\u5357",permalink:"/open-docs/zh-CN/docs/guide/style-guide"},next:{title:"\u6dfb\u52a0\u63d2\u69fd",permalink:"/open-docs/zh-CN/docs/guide/abilities/add-slot"}},s={},u=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e3b\u8981\u6982\u5ff5"},"\u4e3b\u8981\u6982\u5ff5"),(0,i.kt)("p",null,"\u8fd9\u90e8\u5206\u6db5\u76d6\u4e86\u4f60\u5728\u8fdb\u884c\u63d2\u4ef6\u5f00\u53d1\u65f6\u4e00\u4e9b\u5fc5\u4e0d\u53ef\u5c11\u7684\u80fd\u529b\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u8fd9\u90e8\u5206\u5f52\u7eb3\u4e3a\u4e00\u4e2a\u5408\u96c6\u3002\u901a\u8fc7\u5bf9\u8fd9\u4e9b\u80fd\u529b\u7684\u5b66\u4e60\u638c\u63e1\uff0c\u76f8\u4fe1\u4f60\u80fd\u5feb\u901f\u7684\u5199\u51fa\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u5584\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);