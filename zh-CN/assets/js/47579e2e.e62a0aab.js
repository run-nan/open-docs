"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[68002],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),o=k(a),N=l,s=o["".concat(d,".").concat(N)]||o[N]||m[N]||r;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},61788:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={},i="wiki \u56de\u6536\u7ad9",p={unversionedId:"api/wiki/recyecler/recyecler",id:"version-1.x/api/wiki/recyecler/recyecler",title:"wiki \u56de\u6536\u7ad9",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/api/wiki/recyecler/recyecler.md",sourceDirName:"api/wiki/recyecler",slug:"/api/wiki/recyecler/",permalink:"/open-docs/zh-CN/docs/api/wiki/recyecler/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"api",previous:{title:"wiki \u6743\u9650",permalink:"/open-docs/zh-CN/docs/api/wiki/permission/"},next:{title:"\u6d4b\u8bd5\u7ba1\u7406\u63a5\u53e3",permalink:"/open-docs/zh-CN/docs/api/testcase/"}},d={},k=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5",id:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u54cd\u5e94\u793a\u4f8b",id:"\u54cd\u5e94\u793a\u4f8b",level:4},{value:"\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",id:"\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u54cd\u5e94\u793a\u4f8b",id:"\u54cd\u5e94\u793a\u4f8b-1",level:4},{value:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868",id:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-2",level:4},{value:"item",id:"item",level:5},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:"\u54cd\u5e94\u793a\u4f8b",id:"\u54cd\u5e94\u793a\u4f8b-2",level:4},{value:"\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",id:"\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-3",level:4},{value:"\u54cd\u5e94\u793a\u4f8b",id:"\u54cd\u5e94\u793a\u4f8b-3",level:4},{value:"\u6e05\u7a7a\u56de\u6536\u7ad9",id:"\u6e05\u7a7a\u56de\u6536\u7ad9",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u54cd\u5e94\u53c2\u6570\u5217\u8868",id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-4",level:4},{value:"\u54cd\u5e94\u793a\u4f8b",id:"\u54cd\u5e94\u793a\u4f8b-4",level:4}],u={toc:k};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wiki-\u56de\u6536\u7ad9"},"wiki \u56de\u6536\u7ad9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E7%A0%81%E8%AF%B4%E6%98%8E"},"\u72b6\u6001\u7801\u8bf4\u660e")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%AF%A6%E6%83%85"},"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%88%A0%E9%99%A4%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2"},"\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%81%A2%E5%A4%8D%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2"},"\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B8%85%E7%A9%BA%E5%9B%9E%E6%94%B6%E7%AB%99"},"\u6e05\u7a7a\u56de\u6536\u7ad9"))))),(0,l.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"code"),(0,l.kt)("th",{parentName:"tr",align:"left"},"errcode"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"403"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ConstraintViolation.DestinationInvalid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u6062\u590d page \u7684\u539f\u8def\u5f84\u4e0d\u5408\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NotFound.Page"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230 Page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NotFound.PageVersion"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230 PageVersion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NotFound.Draft"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NotFound.Message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u6d88\u606f(\u4e00\u822c\u4e0d\u4f1a\u51fa\u73b0)")))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5"},"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868"},"\u54cd\u5e94\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u7ec4 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"owner_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f5c\u8005 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"operator_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u8005 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"operate_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ref_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u7c7b\u578b\uff0c1\uff1a\u4f20\u7edf\u9875\u9762\uff0c2\uff1awps word\uff0c3\uff1awps excel\uff0c4\uff1awps ppt\uff0c5\uff1aconfluence \u5bfc\u5165\u540e\u7684\u4f20\u7edf\u9875\u9762\uff0c6\uff1a\u534f\u540c\u9875\u9762")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ref_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u5185\u5bb9")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u54cd\u5e94\u793a\u4f8b"},"\u54cd\u5e94\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "PZwFcWei",\n  "space_uuid": "ReNYACb3",\n  "owner_uuid": "9uaNjXTJ",\n  "title": "title a",\n  "content": "<p>go to school</p>\\n",\n  "operator_uuid": "9uaNjXTJ",\n  "operate_time": 1626946365743522,\n  "ref_type": 1,\n  "ref_uuid": ""\n}\n')),(0,l.kt)("h3",{id:"\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"},"\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"),(0,l.kt)("h4",{id:"url-1"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete"),(0,l.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-1"},"\u54cd\u5e94\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u54cd\u5e94\u793a\u4f8b-1"},"\u54cd\u5e94\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,l.kt)("h3",{id:"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868"},"\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868"),(0,l.kt)("h4",{id:"url-2"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages"),(0,l.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("h4",{id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-2"},"\u54cd\u5e94\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pages"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#item"},"item")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u5217\u8868")))),(0,l.kt)("h5",{id:"item"},"item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u7ec4 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7236\u9875\u9762 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ref_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u7c7b\u578b\uff0c1\uff1a\u4f20\u7edf\u9875\u9762\uff0c2\uff1awps word\uff0c3\uff1awps excel\uff0c4\uff1awps ppt\uff0c5\uff1aconfluence \u5bfc\u5165\u540e\u7684\u4f20\u7edf\u9875\u9762\uff0c6\uff1a\u534f\u540c\u9875\u9762")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ref_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054 uuid")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u54cd\u5e94\u793a\u4f8b-2"},"\u54cd\u5e94\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages": [\n    {\n      "uuid": "PZwFcWei",\n      "space_uuid": "ReNYACb3",\n      "title": "title a",\n      "parent_uuid": "2FEdnsbk",\n      "ref_type": 1,\n      "ref_uuid": ""\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"},"\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"),(0,l.kt)("h4",{id:"url-3"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore"),(0,l.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"new_space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u81f3\u65b0\u7684 space \u7684 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"new_parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u81f3\u65b0\u7684\u9875\u9762\u7684 parent_uuid")))),(0,l.kt)("h4",{id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-3"},"\u54cd\u5e94\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-3"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n    \"new_space_uuid\": \"\",\n    \"new_parent_uuid\": \"\"\n  }'\n")),(0,l.kt)("h4",{id:"\u54cd\u5e94\u793a\u4f8b-3"},"\u54cd\u5e94\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,l.kt)("h3",{id:"\u6e05\u7a7a\u56de\u6536\u7ad9"},"\u6e05\u7a7a\u56de\u6536\u7ad9"),(0,l.kt)("h4",{id:"url-4"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages"),(0,l.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-4"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u54cd\u5e94\u53c2\u6570\u5217\u8868-4"},"\u54cd\u5e94\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-4"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u54cd\u5e94\u793a\u4f8b-4"},"\u54cd\u5e94\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}m.isMDXComponent=!0}}]);