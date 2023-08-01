"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},i="\u63d2\u4ef6\u65e5\u5fd7",l={unversionedId:"abilities/base/logger",id:"version-0.x/abilities/base/logger",title:"\u63d2\u4ef6\u65e5\u5fd7",description:"\u80fd\u529b\u63cf\u8ff0",source:"@site/versioned_docs/version-0.x/abilities/base/logger.md",sourceDirName:"abilities/base",slug:"/abilities/base/logger",permalink:"/docs/0.x/abilities/base/logger",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"abilities",previous:{title:"\u57fa\u7840\u80fd\u529b",permalink:"/docs/0.x/abilities/base/"},next:{title:"\u63d2\u4ef6\u6570\u636e\u5e93",permalink:"/docs/0.x/abilities/base/plugin-db"}},p={},s=[{value:"\u80fd\u529b\u63cf\u8ff0",id:"\u80fd\u529b\u63cf\u8ff0",level:2},{value:"API",id:"api",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u9884\u89c8\u4e0e\u5bfc\u51fa",id:"\u9884\u89c8\u4e0e\u5bfc\u51fa",level:2}],c={toc:s};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d2\u4ef6\u65e5\u5fd7"},"\u63d2\u4ef6\u65e5\u5fd7"),(0,o.kt)("h2",{id:"\u80fd\u529b\u63cf\u8ff0"},"\u80fd\u529b\u63cf\u8ff0"),(0,o.kt)("p",null,"\u63d0\u4f9b\u6807\u51c6\u65e5\u5fd7\u65b9\u6cd5, \u65b9\u4fbf\u6253\u5370\u65e5\u5fd7\u3002\u65e5\u5fd7\u7684\u80fd\u529b\u88ab\u5c01\u88c5\u5728\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@ones-op/node-logger")," \u8fd9\u4e2a\u5305\u4e2d\u3002"),(0,o.kt)("p",null,"\u65e5\u5fd7\u6587\u4ef6\u4f1a\u4fdd\u5b58\u5728\u63d2\u4ef6\u76ee\u5f55\u7684 ",(0,o.kt)("strong",{parentName:"p"},"ones-plugin-node-host.log"),"\u3002 \u5728\u672c\u5730\u8c03\u8bd5\u65f6\uff0c\u5982\u679c\u9700\u8981\u5c06\u65e5\u5fd7\u6253\u5370\u5728\u63a7\u5236\u53f0\u53ef\u4ee5\u5728 ",(0,o.kt)("strong",{parentName:"p"},"config/local.yaml")," \u4e2d\u5f00\u542f\u914d\u7f6e ",(0,o.kt)("strong",{parentName:"p"},"debug_mode: true")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"\u63d0\u4f9b\u4e86 4 \u79cd\u7ea7\u522b\u7684\u6807\u51c6\u65e5\u5fd7\u6253\u5370\u65b9\u6cd5\uff1a ",(0,o.kt)("strong",{parentName:"p"},"debug"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"info"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"warning"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"error")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u7684\u4ee3\u7801\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u8fd9\u4e2a\u5305\uff0c\u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ones-op/node-logger\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Logger } from '@ones-op/node-logger'\n\nfunction logExample() {\n  Logger.debug('test')\n  Logger.info('hello world')\n  Logger.warning('hello', 'world', { a: 1 })\n  Logger.error('error: ', new Error('error message'))\n}\n")),(0,o.kt)("h2",{id:"\u9884\u89c8\u4e0e\u5bfc\u51fa"},"\u9884\u89c8\u4e0e\u5bfc\u51fa"),(0,o.kt)("p",null,"\u63d2\u4ef6\u65e5\u5fd7\u652f\u6301\u9884\u89c8\u4e0e\u5bfc\u51fa\uff0c\u8bb0\u5f55\u65e5\u5fd7\u7ea7\u522b\u5305\u62ec ",(0,o.kt)("strong",{parentName:"p"},"info"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"warning"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"error"),"\uff0c\u4e0d\u5305\u62ec ",(0,o.kt)("strong",{parentName:"p"},"debug"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u63d2\u4ef6\u65e5\u5fd7\u9884\u89c8\u4e0e\u5bfc\u51fa",src:r(26506).Z,width:"1468",height:"687"})))}g.isMDXComponent=!0},26506:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pluginlog-preview-export-cdd2e5806bfeb93c947c1edbb27fbc76.jpg"}}]);