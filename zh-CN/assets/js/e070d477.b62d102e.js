"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[52504],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=k(a),N=r,h=o["".concat(d,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(h,p(p({ref:e},m),{},{components:a})):n.createElement(h,p({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},36411:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={},p=void 0,i={unversionedId:"api/project/manhour/manhour",id:"api/project/manhour/manhour",title:"manhour",description:"- manhour",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/project/manhour/manhour.md",sourceDirName:"api/project/manhour",slug:"/api/project/manhour/",permalink:"/zh-CN/docs/next/api/project/manhour/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u5173\u8054 wiki \u9875\u9762",permalink:"/zh-CN/docs/next/api/project/related_wiki/"},next:{title:"Wiki model",permalink:"/zh-CN/docs/next/api/wiki/"}},d={},k=[{value:"manhour",id:"manhour",level:2},{value:"HTTP status code \u8bf4\u660e",id:"http-status-code-\u8bf4\u660e",level:2},{value:"<del>\u767b\u8bb0\u5de5\u65f6</del> (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)",id:"\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b",level:3},{value:"<del>\u4fee\u6539\u767b\u8bb0\u5de5\u65f6</del> (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)",id:"\u4fee\u6539\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1",level:3},{value:"<del>\u5220\u9664\u767b\u8bb0\u5de5\u65f6</del> (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)",id:"\u5220\u9664\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-2",level:3},{value:"<del>\u83b7\u53d6\u5de5\u4f5c\u9879\u767b\u8bb0\u5de5\u65f6\u5217\u8868</del> (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)",id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u767b\u8bb0\u5de5\u65f6\u5217\u8868-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-3",level:3},{value:"\u7f16\u8f91\u9884\u4f30\u5de5\u65f6",id:"\u7f16\u8f91\u9884\u4f30\u5de5\u65f6",level:2},{value:"URL",id:"url-4",level:3},{value:"HTTP Method",id:"http-method-4",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-4",level:3},{value:"\u7f16\u8f91\u5269\u4f59\u5de5\u65f6",id:"\u7f16\u8f91\u5269\u4f59\u5de5\u65f6",level:2},{value:"URL",id:"url-5",level:3},{value:"HTTP Method",id:"http-method-5",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-5",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-5",level:3}],m={toc:k};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5de5\u65f6"},"\u5de5\u65f6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manhour"},"manhour")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%99%BB%E8%AE%B0%E5%B7%A5%E6%97%B6"},"\u767b\u8bb0\u5de5\u65f6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BF%AE%E6%94%B9%E7%99%BB%E8%AE%B0%E5%B7%A5%E6%97%B6"},"\u4fee\u6539\u767b\u8bb0\u5de5\u65f6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%A0%E9%99%A4%E7%99%BB%E8%AE%B0%E5%B7%A5%E6%97%B6"},"\u5220\u9664\u767b\u8bb0\u5de5\u65f6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%99%BB%E8%AE%B0%E5%B7%A5%E6%97%B6%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u5de5\u4f5c\u9879\u767b\u8bb0\u5de5\u65f6\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%BC%96%E8%BE%91%E9%A2%84%E4%BC%B0%E5%B7%A5%E6%97%B6"},"\u7f16\u8f91\u9884\u4f30\u5de5\u65f6"))),(0,r.kt)("h2",{id:"manhour"},"manhour"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u56e2\u961f id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"task_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u4efb\u52a1 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u65f6\u95f4(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hours"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u65f6 (h)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")))),(0,r.kt)("h2",{id:"http-status-code-\u8bf4\u660e"},"HTTP status code \u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u662f\u8be5\u5de5\u65f6\u7684\u521b\u5efa\u8005\uff0c\u65e0\u5220\u9664\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"610"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u627e\u4e0d\u5230\u8be5\u4efb\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"630"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u627e\u4e0d\u5230\u8be5\u6761\u5de5\u65f6\uff0c\u6216\u8005\u8be5\u6761\u5de5\u65f6\u5df2\u662f\u5220\u9664\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u4e0d\u5408\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"810"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u662f\u8be5\u4efb\u52a1\u6240\u5c5e\u9879\u76ee\u7684\u6210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"819"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u5f00\u542f\u6a21\u677f\u7684\u5de5\u65f6\u5f00\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"825"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u5f00\u542f\u5de5\u65f6\u63d2\u4ef6")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6ce8\u610f"))," \u5728 ONES \u4e2d ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6574\u6570\u503c"))," = \u5b9e\u9645\u6570\u503c x 100000"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u4f8b\u5982: \u767b\u8bb0\u5de5\u65f6 1h, hours = 1 ","*"," 100000")))),(0,r.kt)("h2",{id:"\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f"},(0,r.kt)("del",{parentName:"h2"},"\u767b\u8bb0\u5de5\u65f6")," (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)"),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhours/add"),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remaining_manhour"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[0, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e null \u65f6\u8868\u793a\u672a\u8bbe\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hours"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(100000, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},(0,r.kt)("a",{parentName:"h3",href:"#manhour"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "start_time": 1591340400,\n  "hours": 200000,\n  "remark": "remarks on registered man-hour"\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "BCq4DHNh",\n  "team_uuid": "BDfDqJU7",\n  "task_uuid": "6ZpgEzkkBcfDnnnx",\n  "user_uuid": "6ZpgEzkk",\n  "start_time": 1591340400,\n  "hours": 200000,\n  "remark": "remarks on registered man-hour"\n}\n')),(0,r.kt)("h3",{id:"\u4fee\u6539\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f"},(0,r.kt)("del",{parentName:"h3"},"\u4fee\u6539\u767b\u8bb0\u5de5\u65f6")," (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)"),(0,r.kt)("h4",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhour/update"),(0,r.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u767b\u8bb0\u5de5\u65f6 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remaining_manhour"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[0, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e null \u65f6\u8868\u793a\u672a\u8bbe\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hours"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(100000, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "N9tGpKrm",\n  "start_time": 1591344000,\n  "hours": 200000,\n  "remark": ""\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h3",{id:"\u5220\u9664\u767b\u8bb0\u5de5\u65f6-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f"},(0,r.kt)("del",{parentName:"h3"},"\u5220\u9664\u767b\u8bb0\u5de5\u65f6")," (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/manhour/:manhourUUID/delete"),(0,r.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"Post"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-2"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u767b\u8bb0\u5de5\u65f6\u5217\u8868-\u5df2\u4e0d\u9002\u7528\u53c2\u8003\u65b0\u7684\u65b9\u5f0f"},(0,r.kt)("del",{parentName:"h3"},"\u83b7\u53d6\u5de5\u4f5c\u9879\u767b\u8bb0\u5de5\u65f6\u5217\u8868")," (\u5df2\u4e0d\u9002\u7528\uff0c\u53c2\u8003\u65b0\u7684\u65b9\u5f0f)"),(0,r.kt)("h4",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/manhours/list"),(0,r.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-3"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manhours": [\n    {\n      "uuid": "EPfHav6S",\n      "team_uuid": "BDfDqJU7",\n      "task_uuid": "6ZpgEzkkBcfDnnnx",\n      "user_uuid": "6ZpgEzkk",\n      "start_time": 1591329600,\n      "hours": 300000,\n      "remark": ""\n    },\n    {\n      "uuid": "PSrK8Vb7",\n      "team_uuid": "BDfDqJU7",\n      "task_uuid": "6ZpgEzkkBcfDnnnx",\n      "user_uuid": "6ZpgEzkk",\n      "start_time": 1591329600,\n      "hours": 200000,\n      "remark": ""\n    },\n    {\n      "uuid": "GX1x8xAv",\n      "team_uuid": "BDfDqJU7",\n      "task_uuid": "6ZpgEzkkBcfDnnnx",\n      "user_uuid": "6ZpgEzkk",\n      "start_time": 1591329600,\n      "hours": 300000,\n      "remark": ""\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"\u7f16\u8f91\u9884\u4f30\u5de5\u65f6"},"\u7f16\u8f91\u9884\u4f30\u5de5\u65f6"),(0,r.kt)("p",null,"\u4fee\u6539\u5de5\u4f5c\u9879\u7684\u603b\u9884\u4f30\u5de5\u65f6"),(0,r.kt)("h3",{id:"url-4"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/assess_manhour/update"),(0,r.kt)("h3",{id:"http-method-4"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[0, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e null \u65f6\u8868\u793a\u672a\u8bbe\u7f6e")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 400000\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-4"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h2",{id:"\u7f16\u8f91\u5269\u4f59\u5de5\u65f6"},"\u7f16\u8f91\u5269\u4f59\u5de5\u65f6"),(0,r.kt)("p",null,"\u4fee\u6539\u5de5\u4f5c\u9879\u7684\u5269\u4f59\u5de5\u65f6"),(0,r.kt)("h3",{id:"url-5"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/remaining_hour/update"),(0,r.kt)("h3",{id:"http-method-5"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-5"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[0, 999900000]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7b49\u4e8e null \u65f6\u8868\u793a\u672a\u8bbe\u7f6e")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": 400000\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-5"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}u.isMDXComponent=!0}}]);