"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8910],{17942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(50959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),g=a,m=s["".concat(c,".").concat(g)]||s[g]||u[g]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},24120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(28957),a=(r(50959),r(17942));const l={},o="Changelog",i={unversionedId:"reference/packages/bridge/changelog",id:"reference/packages/bridge/changelog",title:"Changelog",description:"All notable changes to this package will be documented in this file.",source:"@site/docs/reference/packages/bridge/changelog.md",sourceDirName:"reference/packages/bridge",slug:"/reference/packages/bridge/changelog",permalink:"/open-docs/docs/reference/packages/bridge/changelog",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{},sidebar:"reference",previous:{title:"@ones-op/bridge",permalink:"/open-docs/docs/reference/packages/bridge/"},next:{title:"@ones-op/utils",permalink:"/open-docs/docs/reference/packages/utils/"}},c={},d=[{value:"0.6.1 (2023-05-15)",id:"061-2023-05-15",level:2},{value:"0.10.0 (2023-04-25)",id:"0100-2023-04-25",level:2},{value:"0.9.0 (2023-03-31)",id:"090-2023-03-31",level:2},{value:"0.2.0 (2023-02-07)",id:"020-2023-02-07",level:2},{value:"Features",id:"features",level:3},{value:"0.3.0 (2023-02-20)",id:"030-2023-02-20",level:2},{value:"Features",id:"features-1",level:3}],p={toc:d},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"All notable changes to this package will be documented in this file."),(0,a.kt)("h2",{id:"061-2023-05-15"},"0.6.1 (2023-05-15)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the method ",(0,a.kt)("inlineCode",{parentName:"li"},"lifecycle.onDestroy")," to listen to the lifecycle of plugin destroy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the provider ",(0,a.kt)("inlineCode",{parentName:"li"},"OPProvider")," to unmount its children component when the plugin calls the ",(0,a.kt)("inlineCode",{parentName:"li"},"lifecycle.destroy"))),(0,a.kt)("h2",{id:"0100-2023-04-25"},"0.10.0 (2023-04-25)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge")," \ud83c\udf1f Added the module ",(0,a.kt)("inlineCode",{parentName:"li"},"dashboardCard")," to complete the related functions of custom cards")),(0,a.kt)("h2",{id:"090-2023-03-31"},"0.9.0 (2023-03-31)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the method ",(0,a.kt)("inlineCode",{parentName:"li"},"lifecycle")," to operate and listen to part of the current plugin's lifecycle")),(0,a.kt)("h2",{id:"020-2023-02-07"},"0.2.0 (2023-02-07)"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the module ",(0,a.kt)("inlineCode",{parentName:"li"},"module")," to open the dialog in the ONES System")),(0,a.kt)("h2",{id:"030-2023-02-20"},"0.3.0 (2023-02-20)"),(0,a.kt)("h3",{id:"features-1"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the method ",(0,a.kt)("inlineCode",{parentName:"li"},"refreshList")," to refresh the lists in the ONES System"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OpBridge:")," \ud83c\udf1f Added the method ",(0,a.kt)("inlineCode",{parentName:"li"},"invokeProgressManager")," to invoke the progress manager in the ONES System")))}u.isMDXComponent=!0}}]);