"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[20703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17661:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),i=n(34334),o=n(78259),a=n(83699),c=n(2735),l=n(97325);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:a},a))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},59369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(17661);const a={},c="Main concepts",l={unversionedId:"guide/abilities/abilities",id:"guide/abilities/abilities",title:"Main concepts",description:"This section covers some of the capabilities that are essential to your plugin development, so we summarize this section into a collection. Through the learning and mastery of these abilities, I believe you can quickly write a relatively perfect plugin.",source:"@site/docs/guide/abilities/abilities.mdx",sourceDirName:"guide/abilities",slug:"/guide/abilities/",permalink:"/open-docs/docs/next/guide/abilities/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"guide",previous:{title:"Style guide",permalink:"/open-docs/docs/next/guide/style-guide"},next:{title:"Add slot",permalink:"/open-docs/docs/next/guide/abilities/add-slot"}},s={},u=[{value:"Overview",id:"overview",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"main-concepts"},"Main concepts"),(0,i.kt)("p",null,"This section covers some of the capabilities that are essential to your plugin development, so we summarize this section into a collection. Through the learning and mastery of these abilities, I believe you can quickly write a relatively perfect plugin."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);