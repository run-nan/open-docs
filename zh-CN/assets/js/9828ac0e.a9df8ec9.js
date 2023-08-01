"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[73400],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),f=m(a),g=r,N=f["".concat(d,".").concat(g)]||f[g]||k[g]||l;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},87032:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},p="@ones-op/node-fetch",i={unversionedId:"reference/packages/node-fetch/node-fetch",id:"version-1.x/reference/packages/node-fetch/node-fetch",title:"@ones-op/node-fetch",description:"\u63d2\u4ef6\u540e\u7aef\u63a5\u53e3\u8bbf\u95ee\u80fd\u529b\u76f8\u5173 API",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/reference/packages/node-fetch/node-fetch.md",sourceDirName:"reference/packages/node-fetch",slug:"/reference/packages/node-fetch/",permalink:"/open-docs/zh-CN/docs/reference/packages/node-fetch/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"@ones-op/node-fs",permalink:"/open-docs/zh-CN/docs/reference/packages/node-fs/"},next:{title:"@ones-op/node-third-import",permalink:"/open-docs/zh-CN/docs/reference/packages/node-third-import/"}},d={},m=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"API",id:"api",level:2},{value:"fetchHttp",id:"fetchhttp",level:3},{value:"Params",id:"params",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"fetchONES",id:"fetchones",level:3},{value:"Params",id:"params-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4}],o={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-opnode-fetch"},"@ones-op/node-fetch"),(0,r.kt)("p",null,"\u63d2\u4ef6",(0,r.kt)("strong",{parentName:"p"},"\u540e\u7aef"),"\u63a5\u53e3\u8bbf\u95ee\u80fd\u529b\u76f8\u5173 API"),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"fetchhttp"},"fetchHttp"),(0,r.kt)("p",null,"\u7528\u4e8e\u8bbf\u95ee\u5916\u90e8\u670d\u52a1"),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u5fc5\u586b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object/Uint8Array/string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5934"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Record<string, string[]>"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u5fc5\u586b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"statusCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number / string / undefined -"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object / Uint8Array / string -"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u5934"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Record<string, string[]> -"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u8bf7\u6c42\u767e\u5ea6\u63a5\u53e3\nconst response = await fetchHttp({\n  url: 'https://www.baidu.com',\n  method: 'GET',\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetchones"},"fetchONES"),(0,r.kt)("p",null,"\u7528\u4e8e\u8bbf\u95ee ONES \u7cfb\u7edf\u6807\u51c6\u63a5\u53e3"),(0,r.kt)("h4",{id:"params-1"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u5fc5\u586b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5730\u5740\uff0c\u5982\u679c\u662f wiki \u63a5\u53e3 \u9700\u8981\u5728\u53c2\u6570\u524d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"td"},"/wiki")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object/Uint8Array/string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5934"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Record<string, string[]>"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4f7f\u7528\u63d2\u4ef6\u8d85\u7ea7\u7528\u6237"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"teamUUID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f",(0,r.kt)("inlineCode",{parentName:"td"},"uuid"),",\u7ec4\u7ec7\u7ea7\u522b\u63d2\u4ef6\u9700\u8981\u643a\u5e26\u8be5\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u5fc5\u586b")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"statusCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number / string / undefined"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4f53"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object / Uint8Array / string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u5934"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Record<string, string[]>"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u4f7f\u7528\u8d85\u7ea7\u7528\u6237\u8bf7\u6c42\nconst response = await fetchONES({\n  path: `/team/${globalThis.onesEnv.teamUUID}/items/view`,\n  method: 'POST',\n  body: {\n    query: {\n      must: [\n        { equal: { item_type: 'field' } },\n        { in: { pool: ['project'] } },\n        { in: { 'context.type': ['team'] } },\n      ],\n    },\n    view: ['[default]'],\n  },\n  root: true, //\u9ed8\u8ba4\u4e3atrue\n})\n\n//\u4f7f\u7528\u666e\u901a\u7528\u6237\u8bf7\u6c42\nconst response = await fetchONES({\n  path: `/users/me`,\n  method: 'GET',\n  headers: {\n    'Ones-User-Id': [userUUID],\n    'Ones-Auth-Token': [userToken],\n  },\n  root: false, //\u9ed8\u8ba4\u4e3atrue\n})\n")),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);