"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[18540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:11,description:"\u4ece\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u4e0b\u8f7d\u6587\u4ef6\u3002"},o="\u4e0b\u8f7d\u6587\u4ef6",l={unversionedId:"abilities/basic/downloadFile",id:"abilities/basic/downloadFile",title:"\u4e0b\u8f7d\u6587\u4ef6",description:"\u4ece\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u4e0b\u8f7d\u6587\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/abilities/basic/downloadFile.mdx",sourceDirName:"abilities/basic",slug:"/abilities/basic/downloadFile",permalink:"/open-docs/zh-CN/docs/next/abilities/basic/downloadFile",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"\u4ece\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u4e0b\u8f7d\u6587\u4ef6\u3002"},sidebar:"abilities",previous:{title:"\u4e0a\u4f20\u6587\u4ef6",permalink:"/open-docs/zh-CN/docs/next/abilities/basic/uploadFile"},next:{title:"\u63d2\u4ef6\u6587\u4ef6\u64cd\u4f5c",permalink:"/open-docs/zh-CN/docs/next/abilities/basic/plugin-fileOP"}},p={},d=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528\u80fd\u529b",id:"\u7b2c\u4e8c\u6b65\u4f7f\u7528\u80fd\u529b",level:3},{value:"\u76f8\u5173 SDK",id:"\u76f8\u5173-sdk",level:2}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0b\u8f7d\u6587\u4ef6"},"\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,a.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-ability"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.11.40+"),(0,a.kt)("td",{parentName:"tr",align:"left"},"v0.3.5+")))),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u8be5\u80fd\u529b\u5b9e\u73b0\u4e86\u5bf9\u4e8e\u63d2\u4ef6\u5b58\u50a8\u7a7a\u95f4",(0,a.kt)("inlineCode",{parentName:"p"},"workspace"),"\u5185\u7684\u6587\u4ef6\u8fdb\u884c\u6d41\u5f0f\u4e0b\u8f7d"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("p",null,"\u8fdb\u5165\u63d2\u4ef6\u5de5\u7a0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/backend"),"\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u4f9d\u8d56\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-ability\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u4f7f\u7528\u80fd\u529b"},"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528\u80fd\u529b"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"downloadFile"),"\u65b9\u6cd5\u6307\u5b9a\u4e0b\u8f7d\u6587\u4ef6\u8def\u5f84\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"downloadFile"),"\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740\u7684 url\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u6216\u8005\u76f4\u63a5\u8bf7\u6c42\u8be5 url \u5747\u80fd\u76f4\u63a5\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6587\u4ef6\u5fc5\u987b\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"workspace"),"\u76ee\u5f55\u4e0b\uff0c\u4e14\u751f\u6210\u7684\u4e0b\u8f7d\u94fe\u63a5\u9ed8\u8ba4\u7684\u6709\u6548\u65f6\u95f4\u4e3a 5 \u5206\u949f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { downloadFile } from '@ones-op/node-ability'\n\nexport async function downloadUrl() {\n  const url = await downloadFile('plugin.sql')\n\n  return {\n    body: {\n      res: url,\n    },\n  }\n}\n")),(0,a.kt)("h2",{id:"\u76f8\u5173-sdk"},"\u76f8\u5173 SDK"),(0,a.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u91ca\u4e49\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/next/reference/packages/node-ability/"},"@ones-op/node-ability")))}s.isMDXComponent=!0}}]);