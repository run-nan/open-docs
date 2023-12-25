"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8747],{17942:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(50959);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6786:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(50959),r=o(45924),a=o(70033),i=o(49253),l=o(16033),c=o(77959);const s={cardContainer:"cardContainer_IIa3",cardTitle:"cardTitle_S8Q6",cardDescription:"cardDescription_dblB"};function d(e){let{href:t,children:o}=e;return n.createElement(i.default,{href:t,className:(0,r.Z)("card padding--lg",s.cardContainer)},o)}function p(e){let{href:t,icon:o,title:a,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:a},o," ",a),i&&n.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:i},i))}function u(e){var t;let{item:o}=e;const r=(0,a.Wl)(o);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:o.label,description:null!=(t=o.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:o.items.length})}):null}function m(e){var t,o;let{item:r}=e;const i=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:i,title:r.label,description:null!=(o=r.description)?o:null==c?void 0:c.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const o=(0,a.jA)();return n.createElement(h,{items:o.items,className:t})}function h(e){const{items:t,className:o}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",o)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},49686:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(28957),r=(o(50959),o(17942)),a=o(6786);const i={},l="Overview",c={unversionedId:"tools/diagtools/index",id:"tools/diagtools/index",title:"Overview",description:"ONES Diagtools CLI and ONES Diagtools Desktop are the diagnostic tools for the ONES Open Platform. We provide command line tools and desktop tools, it can help developers view the log and status of the ONES Open Platform and plugins on the server or common graphical user interface system for troubleshooting.",source:"@site/docs/tools/diagtools/index.mdx",sourceDirName:"tools/diagtools",slug:"/tools/diagtools/",permalink:"/open-docs/docs/tools/diagtools/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{},sidebar:"tools",previous:{title:"Changelog",permalink:"/open-docs/docs/tools/cli/changelog"},next:{title:"Desktop Usage",permalink:"/open-docs/docs/tools/diagtools/desktop-introduction"}},s={},d=[],p={toc:d},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ONES Diagtools CLI and ONES Diagtools Desktop are the diagnostic tools for the ONES Open Platform. We provide command line tools and desktop tools, it can help developers view the log and status of the ONES Open Platform and plugins on the server or common graphical user interface system for troubleshooting."),(0,r.kt)("p",null,"To learn about the installation and use of ONES Diagtools CLI and ONES Diagtools Desktop, refer to the following documents For installation and use, please refer to the following documentation:"),(0,r.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);