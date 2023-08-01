"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[88402],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=d(a),g=r,u=o["".concat(m,".").concat(g)]||o[g]||N[g]||l;return a?n.createElement(u,i(i({ref:e},k),{},{components:a})):n.createElement(u,i({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},92882:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="ONES Team API",p={unversionedId:"api/team/team",id:"api/team/team",title:"ONES Team API",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/team/team.md",sourceDirName:"api/team",slug:"/api/team/",permalink:"/open-docs/zh-CN/docs/next/api/team/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"api",previous:{title:"ONES Department API",permalink:"/open-docs/zh-CN/docs/next/api/department/"},next:{title:"ONES Organization API",permalink:"/open-docs/zh-CN/docs/next/api/organization/"}},m={},d=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"team",id:"team",level:3},{value:"team_config",id:"team_config",level:3},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u83b7\u53d6\u56e2\u961f\u4fe1\u606f",id:"\u83b7\u53d6\u56e2\u961f\u4fe1\u606f",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b",level:4},{value:"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868",id:"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-1",level:4},{value:"\u79fb\u9664\u56e2\u961f\u6210\u5458",id:"\u79fb\u9664\u56e2\u961f\u6210\u5458",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:'<span id="delete_member\u8fd4\u56de\u793a\u4f8b">\u8fd4\u56de\u793a\u4f8b</span>',id:"\u8fd4\u56de\u793a\u4f8b-2",level:4},{value:"\u83b7\u53d6\u56e2\u961f\u6210\u5458",id:"\u83b7\u53d6\u56e2\u961f\u6210\u5458",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-3",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-3",level:4}],k={toc:d};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-team-api"},"ONES Team API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#team"},"team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#team_config"},"team_config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E7%A0%81%E8%AF%B4%E6%98%8E"},"\u72b6\u6001\u7801\u8bf4\u660e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E4%BF%A1%E6%81%AF"},"\u83b7\u53d6\u56e2\u961f\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A7%BB%E9%99%A4%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98"},"\u79fb\u9664\u56e2\u961f\u6210\u5458/\u9000\u51fa\u56e2\u961f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98"},"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u4fe1\u606f"))))),(0,r.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"team"},"team"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u7c7b\u578b",(0,r.kt)("br",null)," free: \u514d\u8d39\u56e2\u961f,\u65e0\u8fc7\u671f\u65f6\u95f4\uff0c15 \u4eba\uff0c3 \u4e2a\u9879\u76ee\uff0c30M \u9644\u4ef6 ",(0,r.kt)("br",null)," pro: \u9ad8\u7ea7\u4ed8\u8d39\u56e2\u961f,\u6709\u8fc7\u671f\u65f6\u95f4\uff0c300M \u9644\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u521b\u5efa\u8005 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f logo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cover_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u72b6\u6001 1\uff1a\u6b63\u5e38\uff1b2\uff1a\u5df2\u8fc7\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"team_config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u914d\u7f6e\u4fe1\u606f\uff0c\u8be6\u89c1\u4e0b\u65b9\u8bf4\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"member_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u6210\u5458\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u5fae\u79d2")))),(0,r.kt)("h3",{id:"team_config"},"team_config"),(0,r.kt)("p",null,"\u56e2\u961f\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u522b\u540d")))),(0,r.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u8bbf\u95ee\u6b64\u56e2\u961f\u7684\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"618"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd8\u6709\u9700\u8981\u79fb\u4ea4\u7684\u56e2\u961f/\u9879\u76ee/\u91cc\u7a0b\u7891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"819"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u64cd\u4f5c\u6743\u9650")))),(0,r.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u56e2\u961f\u4fe1\u606f"},"\u83b7\u53d6\u56e2\u961f\u4fe1\u606f"),(0,r.kt)("p",null,"\u6839\u636e teamUUID\uff0c\u83b7\u53d6\u67d0\u4e2a\u56e2\u961f\u4fe1\u606f"),(0,r.kt)("h4",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/info"),(0,r.kt)("h4",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u53c2\u89c1\u901a\u7528\u8bf4\u660e ",(0,r.kt)("a",{parentName:"p",href:"#team"},"team")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\nhttps://your-host-name/project/api/project/team/BDfDqJU7/info \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "BDfDqJU7",\n  "status": 1,\n  "name": "onePiece",\n  "owner": "FtuS5ApR",\n  "logo": "",\n  "cover_url": "",\n  "domain": "",\n  "create_time": 1535539298664608,\n  "type": "pro",\n  "config": {\n    "sprint": {\n      "alias": ""\n    }\n  },\n  "member_count": 56,\n  "org_uuid": "75tuQaF7",\n  "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],\n  "workhours": 800000,\n  "sprint_timeline_visibility": false,\n  "testcase_visibility": true,\n  "project_panel_visibility": false,\n  "support_script_actions": true,\n  "server_update_stamp": 1581921676849920\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868"},"\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868"),(0,r.kt)("p",null,"\u83b7\u53d6\u56e2\u961f\u5185\u7684\u6240\u6709\u6210\u5458\u4fe1\u606f\uff0c\u5305\u62ec\u81ea\u5df1\uff0c\u6309\u7167\u52a0\u5165\u65f6\u95f4\u5347\u5e8f\u6392\u5e8f"),(0,r.kt)("h4",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/members"),(0,r.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"member \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u5217\u8868\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pending_members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"member \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u5b9a\u6210\u5458\u5217\u8868\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1461314935107445"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u66f4\u65b0\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u5fae\u79d2")))),(0,r.kt)("p",null,"member \u5bf9\u8c61"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"136mQpBg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u7528\u6237 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"mailto:fengbin@bangwork.com"},"fengbin@bangwork.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u7528\u6237 email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KidFeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u7528\u6237\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name_pinyin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u7528\u6237\u540d\u79f0\u62fc\u97f3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"member \u6807\u9898")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avatar"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5934\u50cf\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"15512038909"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1547023260673072"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5fae\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviter_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7 url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviter_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7528\u6237\u540d")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/project/api/project/team/BDfDqJU7/members \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-1"},"\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "members": [\n    {\n      "uuid": "KtLMDi1K",\n      "email": "linhong+shkfhlksjkfssfsdf@ones.com",\n      "name": "",\n      "name_pinyin": "",\n      "title": "",\n      "avatar": "",\n      "phone": "",\n      "create_time": 1547023260673072,\n      "status": 3,\n      "team_member_status": 2,\n      "verify_status": 1,\n      "department_uuids": [],\n      "inviter_uuid": "",\n      "inviter_name": "",\n      "sync_types": [0]\n    },\n    {\n      "uuid": "13Jrwu7N",\n      "email": "linhong+01@ones.com",\n      "name": "",\n      "name_pinyin": "",\n      "title": "",\n      "avatar": "",\n      "phone": "",\n      "create_time": 1547023260671392,\n      "status": 3,\n      "team_member_status": 2,\n      "verify_status": 1,\n      "department_uuids": [],\n      "inviter_uuid": "",\n      "inviter_name": "",\n      "sync_types": [0]\n    }\n  ],\n  "pending_members": [\n    {\n      "uuid": "HNvREAkV",\n      "email": "linhong+1234@ones.com",\n      "name": "",\n      "name_pinyin": "",\n      "title": "",\n      "avatar": "",\n      "phone": "",\n      "create_time": 1547023318993280,\n      "status": 1,\n      "team_member_status": 3,\n      "verify_status": 1,\n      "department_uuids": [],\n      "inviter_uuid": "FtuS5ApR",\n      "inviter_name": "Arnie",\n      "sync_types": [0]\n    },\n    {\n      "uuid": "TGZ7Q17d",\n      "email": "linhong+43211234@ones.com",\n      "name": "",\n      "name_pinyin": "",\n      "title": "",\n      "avatar": "",\n      "phone": "",\n      "create_time": 1547023931529760,\n      "status": 3,\n      "team_member_status": 3,\n      "verify_status": 1,\n      "department_uuids": [],\n      "inviter_uuid": "FtuS5ApR",\n      "inviter_name": "Arnie",\n      "sync_types": [0]\n    }\n  ],\n  "server_update_stamp": 1584069280645760\n}\n')),(0,r.kt)("h3",{id:"\u79fb\u9664\u56e2\u961f\u6210\u5458"},"\u79fb\u9664\u56e2\u961f\u6210\u5458"),(0,r.kt)("p",null,"\u79fb\u9664\u56e2\u961f\u5185\u7684\u67d0\u4e2a\u6210\u5458\uff0c\u53ea\u6709\u56e2\u961f\u62e5\u6709\u8005\u624d\u80fd\u79fb\u9664\u9664\u4e86\u81ea\u5df1\u4e4b\u5916\u7684\u6210\u5458"),(0,r.kt)("p",null,"\u79fb\u9664\u6210\u529f\u540e\uff0c\u8be5\u6210\u5458\u5728\u5f53\u524d\u7cfb\u7edf\u4e2d\u4ea7\u751f\u7684\u5404\u7c7b\u6570\u636e\u5747\u4f1a\u4fdd\u7559\u3002\u91cd\u65b0\u9080\u8bf7\u52a0\u5165\u56e2\u961f\u540e\uff0c\u4f7f\u7528\u540c\u6837\u90ae\u7bb1\u7684\u6210\u5458\u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u662f\u540c\u4e00\u6210\u5458\uff0c\u4f1a\u5c06\u5386\u53f2\u6570\u636e\u4e0e\u8be5\u6210\u5458\u8fdb\u884c\u5173\u8054"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/delete_member"),(0,r.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"json"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"member"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u79fb\u9664\u7684\u6210\u5458 uuid")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#delete_member%E8%BF%94%E5%9B%9E%E7%A4%BA%E4%BE%8B"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/project/api/project/team/3pDzCwAe/delete_member \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n    \"member\": \"EE1FvEii\"\n  }'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-2"},(0,r.kt)("span",{id:"delete_member\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("p",null,"\u5f53\u8fd4\u56de\u7801\u4e3a 200 \u65f6\uff0c\u8fd4\u56de\u56e2\u961f\u6210\u5458\u4fe1\u606f\u4fee\u6539\u7684 server_update_stamp \u66f4\u65b0\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u5fae\u79d2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1565850418558480\n}\n')),(0,r.kt)("p",null,"\u5f53\u9519\u8bef\u7801\u4e3a 618 \u65f6\uff0c\u8fd4\u56de\u9700\u8981\u79fb\u4ea4\u7684\u9879\u76ee uuid \u5217\u8868\uff0c\u5982\u679c\u662f\u56e2\u961f\u62e5\u6709\u8005\uff0c\u8fd8\u8fd4\u56de\u56e2\u961f uuid\uff0c\u5982\u679c\u662f\u56e2\u961f\u7ba1\u7406\u5458\uff0c\u8fd4\u56de\u91cc\u7a0b\u7891 uuid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 618,\n  "desc": "Something need to be handed over",\n  "team": "CnCPeqyD",\n  "projects": ["RQbtzPNmDW1OkVti", "RQbtzPNmu46nUo8U"],\n  "milestones": ["DW1OkVti", "u46nUo8U"]\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u56e2\u961f\u6210\u5458"},"\u83b7\u53d6\u56e2\u961f\u6210\u5458"),(0,r.kt)("p",null,"\u83b7\u53d6\u56e2\u961f\u5185\u7684\u6210\u5458\u4fe1\u606f"),(0,r.kt)("h4",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/member/:userUUID"),(0,r.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"136mQpBg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"mailto:fengbin@bangwork.com"},"fengbin@bangwork.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KidFeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name_pinyin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KidFeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u62fc\u97f3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avatar"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5934\u50cf url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=32"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u624b\u673a\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1:\u6b63\u5e38 2.\u5220\u9664\u7684 3.\u5f85\u6fc0\u6d3b 4.\u7981\u7528\u7684"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1461314935107445"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6ce8\u518c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5fae\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviter_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7 url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviter_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"company"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u516c\u53f8\u4fe1\u606f")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-3"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/project/api/project/team/BDfDqJU7/member/TRPCkuR6 \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-3"},"\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "TRPCkuR6",\n  "email": "1812118986@qq.com",\n  "name": "1812118986",\n  "name_pinyin": "1812118986",\n  "title": "",\n  "avatar": "",\n  "phone": "",\n  "create_time": 1584945254292464,\n  "status": 1,\n  "team_member_status": 2,\n  "verify_status": 1,\n  "department_uuids": [],\n  "inviter_uuid": "PEP76x86",\n  "inviter_name": "",\n  "sync_types": [0],\n  "company": ""\n}\n')))}N.isMDXComponent=!0}}]);