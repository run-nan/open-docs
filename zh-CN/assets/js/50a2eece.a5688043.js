"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7040],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(28957),a=(n(50959),n(17942));const o={sidebar_position:1},i="ONES \u63a5\u53e3\u8bbf\u95ee",s={unversionedId:"abilities/basic/ones-api/access",id:"abilities/basic/ones-api/access",title:"ONES \u63a5\u53e3\u8bbf\u95ee",description:"\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/abilities/basic/ones-api/access.md",sourceDirName:"abilities/basic/ones-api",slug:"/abilities/basic/ones-api/access",permalink:"/open-docs/zh-CN/docs/abilities/basic/ones-api/access",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"abilities",previous:{title:"ONES \u63a5\u53e3",permalink:"/open-docs/zh-CN/docs/abilities/basic/ones-api/"},next:{title:"ONES \u63a5\u53e3\u6ce8\u518c",permalink:"/open-docs/zh-CN/docs/abilities/basic/ones-api/registration"}},p={},l=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u8bbf\u95ee ONES API",id:"\u7b2c\u4e8c\u6b65\u8bbf\u95ee-ones-api",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ones-\u63a5\u53e3\u8bbf\u95ee"},"ONES \u63a5\u53e3\u8bbf\u95ee"),(0,a.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+")))),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u63a5\u53e3\u8bbf\u95ee\u80fd\u529b\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u4e86\u8bbf\u95ee ONES API \u7684\u65b9\u6cd5\u3002 ONES API \u662f ONES \u6807\u54c1\u6240\u6709\u5bf9\u5916\u5f00\u653e\u7684\u63a5\u53e3\uff0c\u6bd4\u5982\u67e5\u770b\u67d0\u5de5\u4f5c\u9879\u8be6\u60c5\uff0c\u6dfb\u52a0\u5de5\u4f5c\u9879\u7b49\u63a5\u53e3\uff0c\u53ef\u901a\u8fc7\u8bbf\u95ee\u8fd9\u4e9b\u63a5\u53e3\u4e0e ONES \u6807\u54c1\u8fdb\u884c\u4ea4\u4e92\u3002\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u4f1a\u5728\u7cfb\u7edf\u4e2d\u751f\u6210\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/abilities/basic/super-admin"},"\u63d2\u4ef6\u8d85\u7ea7\u7528\u6237"),"\uff0c\u8d85\u7ea7\u7528\u6237\u5728\u8bbf\u95ee ONES API \u65f6\uff0c\u4f1a\u62e5\u6709\u6240\u6709\u6570\u636e\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("p",null,"\u8fdb\u5165\u63d2\u4ef6\u5de5\u7a0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/backend"),"\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u4f9d\u8d56\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/fetch\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u8bbf\u95ee-ones-api"},"\u7b2c\u4e8c\u6b65\uff1a\u8bbf\u95ee ONES API"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API\uff1a")," OPFetch"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u5728\u540e\u7aef\u4ee5\u76f8\u5bf9\u8def\u5f84\u8bf7\u6c42 ONES API \u7684\u65f6\u5019\uff0c\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u63d2\u4ef6\u8d85\u7ea7\u7528\u6237\uff0c\u5728\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"OPFetch")," \u65b9\u6cd5\u65f6\uff0c\u5165\u53c2\u4e2d\u5e26\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"root=true"),"\uff0c\u8868\u793a\u4f7f\u7528\u8d85\u7ea7\u7528\u6237\u8c03\u7528\u63a5\u53e3\u3002\u7ec4\u7ec7\u7ea7\u522b\u7684\u63d2\u4ef6\u9700\u8981\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"teamUUID"),"\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")," \u4f7f\u7528\u63d2\u4ef6\u8d85\u7ea7\u7528\u6237\u8c03\u7528 ONES API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OPFetch } from '@ones-op/fetch'\n\nconst response = await OPFetch({\n  path: `/team/${globalThis.onesEnv.teamUUID}/items/view`,\n  method: 'POST',\n  body: {\n    query: {\n      must: [\n        { equal: { item_type: 'field' } },\n        { in: { pool: ['project'] } },\n        { in: { 'context.type': ['team'] } },\n      ],\n    },\n    view: ['[default]'],\n  },\n  root: true, //\u9ed8\u8ba4\u4e3atrue\n  teamUUID: '',\n})\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4e0d\u60f3\u4ee5\u63d2\u4ef6\u8d85\u7ea7\u7528\u6237\u8eab\u4efd\u8bf7\u6c42\uff0c\u90a3\u4e48\u6211\u4eec\u9996\u5148\u8981\u5728\u4ee3\u7801\u4e2d\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u7136\u540e\u5728\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-User-Id"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-Auth-Token"),"\u4e24\u4e2a\u53c2\u6570\u5373\u53ef\u3002\u5f53\u63d2\u4ef6\u88ab\u5b89\u88c5\u5230\u5b9e\u4f8b\u73af\u5883\u540e\uff0c\u7528\u6237\u901a\u8fc7\u70b9\u51fb\u9875\u9762\u8bbf\u95ee\u63d2\u4ef6\u63a5\u53e3\u65f6\u4f1a\u81ea\u884c\u5e26\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-User-Id"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-Auth-Token"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ones-User-Id"),": \u7528\u6237 ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ones-Auth-Token"),": \u767b\u5f55\u6210\u529f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"token")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")," \u4f7f\u7528\u5176\u4ed6\u7528\u6237\u8c03\u7528 ONES API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OPFetch } from '@ones-op/fetch'\n\nexport async function getUserme(\n  request: PluginRequest<Record<string, any>>,\n): Promise<PluginResponse> {\n  let userUUID = ''\n  let userToken = ''\n  if (request.headers['Ones-User-Id'] != null) {\n    userUUID = request.headers['Ones-User-Id']\n    userToken = request.headers['Ones-Auth-Token']\n  }\n  return OPFetch({\n    path: `/users/me`,\n    method: 'GET',\n    headers: {\n      'Ones-User-Id': userUUID,\n      'Ones-Auth-Token': [userToken],\n    },\n    root: false, //\u9ed8\u8ba4\u4e3atrue\n    teamUUID: '',\n  })\n}\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u91ca\u4e49\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/reference/packages/fetch/"},"@ones-op/fetch")))}d.isMDXComponent=!0}}]);