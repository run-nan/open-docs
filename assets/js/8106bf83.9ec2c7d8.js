"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[59126],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),k=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return r.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=k(a),g=n,f=N["".concat(d,".").concat(g)]||N[g]||o[g]||l;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},31427:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var r=a(87462),n=(a(67294),a(3905));const l={},i="ONES Organization API",p={unversionedId:"api/organization/organization",id:"api/organization/organization",title:"ONES Organization API",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/docs/api/organization/organization.md",sourceDirName:"api/organization",slug:"/api/organization/",permalink:"/docs/next/api/organization/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"api",previous:{title:"ONES Team API",permalink:"/docs/next/api/team/"},next:{title:"Version",permalink:"/docs/next/api/version/"}},d={},k=[{value:"\u7ec4\u7ec7",id:"\u7ec4\u7ec7",level:2},{value:"\u7ec4\u7ec7\u7c7b\u578b",id:"\u7ec4\u7ec7\u7c7b\u578b",level:2},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:2},{value:"1. \u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f",id:"1-\u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003",level:3},{value:"2. \u5c06\u7ec4\u7ec7\u6210\u5458\u6dfb\u52a0\u5230\u56e2\u961f",id:"2-\u5c06\u7ec4\u7ec7\u6210\u5458\u6dfb\u52a0\u5230\u56e2\u961f",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-1",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"3. \u5220\u9664\u7ec4\u7ec7\u6210\u5458",id:"3-\u5220\u9664\u7ec4\u7ec7\u6210\u5458",level:2},{value:"URL",id:"url-2",level:3},{value:"HTTP Method",id:"http-method-2",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-1",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:3},{value:"4. \u83b7\u53d6\u7ec4\u7ec7\u4e0b\u6240\u6709\u56e2\u961f",id:"4-\u83b7\u53d6\u7ec4\u7ec7\u4e0b\u6240\u6709\u56e2\u961f",level:2},{value:"URL",id:"url-3",level:3},{value:"HTTP Method",id:"http-method-3",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-2",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:3},{value:"5. \u83b7\u53d6\u7528\u6237\u6709\u6743\u9650\u7684\u6240\u6709\u56e2\u961f",id:"5-\u83b7\u53d6\u7528\u6237\u6709\u6743\u9650\u7684\u6240\u6709\u56e2\u961f",level:2},{value:"URL",id:"url-4",level:3},{value:"HTTP Method",id:"http-method-4",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:3},{value:"6. \u83b7\u53d6\u7ec4\u7ec7\u6210\u5458\u5217\u8868",id:"6-\u83b7\u53d6\u7ec4\u7ec7\u6210\u5458\u5217\u8868",level:2},{value:"URL",id:"url-5",level:3},{value:"HTTP Method",id:"http-method-5",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-3",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-5",level:3},{value:"7. \u83b7\u53d6\u7ec4\u7ec7\u989d\u5916\u652f\u6301\u4fe1\u606f",id:"7-\u83b7\u53d6\u7ec4\u7ec7\u989d\u5916\u652f\u6301\u4fe1\u606f",level:2},{value:"URL",id:"url-6",level:3},{value:"HTTP Method",id:"http-method-6",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-4",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-6",level:3},{value:"8. \u83b7\u53d6\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u67b6\u6784\u4fe1\u606f",id:"8-\u83b7\u53d6\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u67b6\u6784\u4fe1\u606f",level:2},{value:"URL",id:"url-7",level:3},{value:"HTTP Method",id:"http-method-7",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-5",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-7",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:3},{value:"9. \u5728\u7ec4\u7ec7\u4e0b\u83b7\u53d6\u67d0\u56e2\u961f\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4fe1\u606f",id:"9-\u5728\u7ec4\u7ec7\u4e0b\u83b7\u53d6\u67d0\u56e2\u961f\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4fe1\u606f",level:2},{value:"URL",id:"url-8",level:3},{value:"HTTP Method",id:"http-method-8",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-6",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-8",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-8",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-6",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:3}],m={toc:k};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-organization-api"},"ONES Organization API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E7%BB%84%E7%BB%87"},"\u7ec4\u7ec7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E7%BB%84%E7%BB%87%E7%B1%BB%E5%9E%8B"},"\u7ec4\u7ec7\u7c7b\u578b\u679a\u4e3e")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E7%BB%84%E7%BB%87%E4%BF%A1%E6%81%AF"},"1. \u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-%E5%B0%86%E7%BB%84%E7%BB%87%E6%88%90%E5%91%98%E6%B7%BB%E5%8A%A0%E5%88%B0%E5%9B%A2%E9%98%9F"},"2. \u5c06\u7ec4\u7ec7\u6210\u5458\u6dfb\u52a0\u5230\u56e2\u961f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-%E5%88%A0%E9%99%A4%E7%BB%84%E7%BB%87%E6%88%90%E5%91%98"},"3. \u5220\u9664\u7ec4\u7ec7\u6210\u5458")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-%E8%8E%B7%E5%8F%96%E7%BB%84%E7%BB%87%E4%B8%8B%E6%89%80%E6%9C%89%E5%9B%A2%E9%98%9F"},"4. \u83b7\u53d6\u7ec4\u7ec7\u4e0b\u6240\u6709\u56e2\u961f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#5-%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E6%9C%89%E6%9D%83%E9%99%90%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%A2%E9%98%9F"},"5. \u83b7\u53d6\u7528\u6237\u6709\u6743\u9650\u7684\u6240\u6709\u56e2\u961f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#6-%E8%8E%B7%E5%8F%96%E7%BB%84%E7%BB%87%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8"},"6. \u83b7\u53d6\u7ec4\u7ec7\u6210\u5458\u5217\u8868")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#7-%E8%8E%B7%E5%8F%96%E7%BB%84%E7%BB%87%E9%A2%9D%E5%A4%96%E6%94%AF%E6%8C%81%E4%BF%A1%E6%81%AF"},"7. \u83b7\u53d6\u7ec4\u7ec7\u989d\u5916\u652f\u6301\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#8-%E8%8E%B7%E5%8F%96%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84%E4%BF%A1%E6%81%AF"},"8. \u83b7\u53d6\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u67b6\u6784\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#9-%E5%9C%A8%E7%BB%84%E7%BB%87%E4%B8%8B%E8%8E%B7%E5%8F%96%E6%9F%90%E5%9B%A2%E9%98%9F%E7%BB%91%E5%AE%9A%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E7%BB%87%E4%BF%A1%E6%81%AF"},"9. \u5728\u7ec4\u7ec7\u4e0b\u83b7\u53d6\u67d0\u56e2\u961f\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4fe1\u606f"))))),(0,n.kt)("h1",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,n.kt)("h2",{id:"\u7ec4\u7ec7"},"\u7ec4\u7ec7"),(0,n.kt)("p",null,"organization"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7 UUID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scale"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u89c4\u6a21\uff08\u6700\u5927\u6210\u5458\u6570\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u7c7b\u578b\uff0c\u8be6\u89c1\u4e0b\u65b9\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sync_data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u540c\u6b65\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u7c7b\u578b 1:\u5fae\u4fe1\uff1b2\uff1a\u9489\u9489")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_corp_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_corp_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_agent_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"owner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u521b\u5efa\u8005")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7 logo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u72b6\u6001 1\uff1a\u6b63\u5e38\uff1b2\uff1a\u5df2\u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"visibility"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u9875\u662f\u5426\u53ef\u89c1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4\u6233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sidebar_menus"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4\u6233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","default_value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e\u9ed8\u8ba4\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","element_show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728\u7ba1\u7406\u754c\u9762\u5c55\u793a\u6b64\u4fa7\u8fb9\u680f\u7ec4\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","is_show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e\u662f\u5426\u5c55\u793a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","is_can_update_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u66f4\u6539 value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","is_can_update_is_show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fa7\u8fb9\u680f\u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u66f4\u6539\u662f\u5426\u5c55\u793a")))),(0,n.kt)("h2",{id:"\u7ec4\u7ec7\u7c7b\u578b"},"\u7ec4\u7ec7\u7c7b\u578b"),(0,n.kt)("p",null,"organization_type"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd\u9650\u5236"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"free"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u514d\u8d39\u7ec4\u7ec7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u8fc7\u671f\u65f6\u95f4\uff0c15 \u4eba\uff0c3 \u4e2a\u9879\u76ee\uff0c30M \u9644\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pro"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9ad8\u7ea7\u4ed8\u8d39\u7ec4\u7ec7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6709\u8fc7\u671f\u65f6\u95f4\uff0c300M \u9644\u4ef6")))),(0,n.kt)("h2",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u521b\u5efa\u7684\u6743\u9650")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")))),(0,n.kt)("h1",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,n.kt)("h2",{id:"1-\u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f"},"1. \u83b7\u53d6\u7ec4\u7ec7\u4fe1\u606f"),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/info"),(0,n.kt)("h3",{id:"http-method"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "CbuJaGWN",\n  "name": "xx\u7ec4\u7ec7",\n  "owner": "9uaNjXTJ",\n  "logo": "",\n  "favicon": "",\n  "type": "pro",\n  "status": 1,\n  "scale": 5000,\n  "member_count": 6,\n  "disable_member_count": 1,\n  "sync_data": [],\n  "create_time": 1624865025,\n  "visibility": false,\n  "enable_workorder_component": false\n}\n')),(0,n.kt)("h2",{id:"2-\u5c06\u7ec4\u7ec7\u6210\u5458\u6dfb\u52a0\u5230\u56e2\u961f"},"2. \u5c06\u7ec4\u7ec7\u6210\u5458\u6dfb\u52a0\u5230\u56e2\u961f"),(0,n.kt)("h3",{id:"url-1"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/add"),(0,n.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"manage_organization_member \u6216 administer_organization(\u53ea\u53ef\u6dfb\u52a0\u81ea\u5df1)"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u56e2\u961f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"members"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID \u5217\u8868")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"JSON \u952e\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bad_members"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u63cf\u8ff0")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bad_members": [\n    {\n      "uuid": "W426Dryc",\n      "code": 409,\n      "desc": "user already in team"\n    }\n  ]\n}\n')),(0,n.kt)("h2",{id:"3-\u5220\u9664\u7ec4\u7ec7\u6210\u5458"},"3. \u5220\u9664\u7ec4\u7ec7\u6210\u5458"),(0,n.kt)("h3",{id:"url-2"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/delete_member"),(0,n.kt)("h3",{id:"http-method-2"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-1"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"manage_organization_member"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"member"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")))),(0,n.kt)("h2",{id:"4-\u83b7\u53d6\u7ec4\u7ec7\u4e0b\u6240\u6709\u56e2\u961f"},"4. \u83b7\u53d6\u7ec4\u7ec7\u4e0b\u6240\u6709\u56e2\u961f"),(0,n.kt)("h3",{id:"url-3"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/teams"),(0,n.kt)("h3",{id:"http-method-3"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-2"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"manage_organization_member \u6216\u8005 administrator_organization"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h2",{id:"5-\u83b7\u53d6\u7528\u6237\u6709\u6743\u9650\u7684\u6240\u6709\u56e2\u961f"},"5. \u83b7\u53d6\u7528\u6237\u6709\u6743\u9650\u7684\u6240\u6709\u56e2\u961f"),(0,n.kt)("h3",{id:"url-4"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/my_teams"),(0,n.kt)("h3",{id:"http-method-4"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h2",{id:"6-\u83b7\u53d6\u7ec4\u7ec7\u6210\u5458\u5217\u8868"},"6. \u83b7\u53d6\u7ec4\u7ec7\u6210\u5458\u5217\u8868"),(0,n.kt)("h3",{id:"url-5"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/members"),(0,n.kt)("h3",{id:"http-method-5"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-3"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"manage_organization_member \u6216 administer_organization"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-5"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h2",{id:"7-\u83b7\u53d6\u7ec4\u7ec7\u989d\u5916\u652f\u6301\u4fe1\u606f"},"7. \u83b7\u53d6\u7ec4\u7ec7\u989d\u5916\u652f\u6301\u4fe1\u606f"),(0,n.kt)("h3",{id:"url-6"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/service"),(0,n.kt)("h3",{id:"http-method-6"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-4"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"manage_organization_member \u6216 administer_organization"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-6"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h2",{id:"8-\u83b7\u53d6\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u67b6\u6784\u4fe1\u606f"},"8. \u83b7\u53d6\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u67b6\u6784\u4fe1\u606f"),(0,n.kt)("h3",{id:"url-7"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/sso/sync_data"),(0,n.kt)("h3",{id:"http-method-7"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-5"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"administer_organization"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-7"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"url param"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sync_data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","departments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","sync_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8 id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","parent_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8282\u70b9 id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","next_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9 id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","member_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u6210\u5458\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","members"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","sync_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","email"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u90ae\u7bb1")))),(0,n.kt)("h2",{id:"9-\u5728\u7ec4\u7ec7\u4e0b\u83b7\u53d6\u67d0\u56e2\u961f\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4fe1\u606f"},"9. \u5728\u7ec4\u7ec7\u4e0b\u83b7\u53d6\u67d0\u56e2\u961f\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4fe1\u606f"),(0,n.kt)("h3",{id:"url-8"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/organization/:organizationUUID/team/:teamUUID/sync_data"),(0,n.kt)("h3",{id:"http-method-8"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-6"},"\u8c03\u7528\u6743\u9650"),(0,n.kt)("p",null,"administer_organization"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-8"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-8"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"URL"),(0,n.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-6"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sync_data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ed1\u5b9a\u7684\u7b2c\u4e09\u65b9\u7ec4\u7ec7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1:wechat;2:dingding"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_corp_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4f01\u4e1a id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_corp_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4f01\u4e1a\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","sync_agent_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7b2c\u4e09\u65b9\u7ec4\u7ec7\u4f01\u4e1a\u5e94\u7528\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","departments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},'["id1","id2"]'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u90e8\u95e8 sync_ids")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\xa0","members"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},'["id1","id2"]'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6210\u5458 sync_ids")))))}o.isMDXComponent=!0}}]);