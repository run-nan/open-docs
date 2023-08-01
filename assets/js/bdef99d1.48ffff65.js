"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[99073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17661:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),o=n(34334),i=n(78259),l=n(83699),c=n(2735),a=n(97325);const s="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:i,description:l}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:i},n," ",i),l&&r.createElement("p",{className:(0,o.Z)("text--truncate",u),title:l},l))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:o,title:n.label,description:null==l?void 0:l.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function O(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(O,e);const l=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},24821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(17661);const l={},c="Overview",a={unversionedId:"tools/cli/index",id:"version-1.x/tools/cli/index",title:"Overview",description:"ONES CLI and OP CLI are command-line interface tools that help developers build plugins for the ONES Open Platform.",source:"@site/versioned_docs/version-1.x/tools/cli/index.mdx",sourceDirName:"tools/cli",slug:"/tools/cli/",permalink:"/open-docs/docs/tools/cli/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"tools",next:{title:"ONES CLI Commands",permalink:"/open-docs/docs/tools/cli/ones-cli"}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"ONES CLI and OP CLI are command-line interface tools that help developers build plugins for the ONES Open Platform."),(0,o.kt)("p",null,"ONES CLI can efficiently initialize the plugin project. During the initialization process of the plugin project, OP CLI will be installed as a project dependency of the plugin project. Developers can use it to perform many common development tasks."),(0,o.kt)("p",null,"Developers need to install ONES CLI and OP CLI using Node.js, to learn how to use ONES CLI and OP CLI to perform other tasks, please refer to the following documents:"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);