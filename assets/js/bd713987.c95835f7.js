"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[18068],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=k(a),u=r,s=N["".concat(d,".").concat(u)]||N[u]||o[u]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},67970:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"ones/version/version",id:"version-0.x/ones/version/version",title:"version",description:"- \u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868",source:"@site/versioned_docs/version-0.x/ones/version/version.md",sourceDirName:"ones/version",slug:"/ones/version/",permalink:"/open-docs/docs/0.x/ones/version/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"organization",permalink:"/open-docs/docs/0.x/ones/organization/"},next:{title:"ONES Permission API Document",permalink:"/open-docs/docs/0.x/ones/permission/"}},d={},k=[{value:"MODEL",id:"model",level:2},{value:"version",id:"version",level:3},{value:"sprint",id:"sprint",level:3},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:2},{value:"\u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868",id:"\u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003",level:2},{value:"\u65b0\u5efa\u7248\u672c\u7ba1\u7406",id:"\u65b0\u5efa\u7248\u672c\u7ba1\u7406",level:2},{value:"HTTP Method",id:"http-method-1",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-1",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-1",level:3},{value:"\u7f16\u8f91\u7248\u672c\u7ba1\u7406",id:"\u7f16\u8f91\u7248\u672c\u7ba1\u7406",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-2",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-2",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-1",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-2",level:3},{value:"\u5220\u9664\u7248\u672c\u7ba1\u7406",id:"\u5220\u9664\u7248\u672c\u7ba1\u7406",level:2},{value:"URL",id:"url-2",level:3},{value:"HTTP Method",id:"http-method-3",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-3",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-3",level:3},{value:"\u5173\u8054\u8fed\u4ee3",id:"\u5173\u8054\u8fed\u4ee3",level:2},{value:"URL",id:"url-3",level:3},{value:"HTTP Method",id:"http-method-4",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-4",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-2",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-4",level:3},{value:"\u79fb\u51fa\u5173\u8054\u7684\u8fed\u4ee3",id:"\u79fb\u51fa\u5173\u8054\u7684\u8fed\u4ee3",level:2},{value:"URL",id:"url-4",level:3},{value:"HTTP Method",id:"http-method-5",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-5",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-5",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-3",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-5",level:3},{value:"\u5173\u8054\u4ea7\u54c1",id:"\u5173\u8054\u4ea7\u54c1",level:2},{value:"URL",id:"url-5",level:3},{value:"HTTP Method",id:"http-method-6",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-6",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-6",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-6",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-4",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-6",level:3},{value:"\u79fb\u51fa\u5173\u8054\u7684\u4ea7\u54c1",id:"\u79fb\u51fa\u5173\u8054\u7684\u4ea7\u54c1",level:2},{value:"URL",id:"url-6",level:3},{value:"HTTP Method",id:"http-method-7",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-7",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-7",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-7",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-5",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003-7",level:3}],m={toc:k};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7248\u672c\u7ba1\u7406"},"\u7248\u672c\u7ba1\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%96%B0%E5%BB%BA%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86"},"\u65b0\u5efa\u7248\u672c\u7ba1\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%BC%96%E8%BE%91%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86"},"\u7f16\u8f91\u7248\u672c\u7ba1\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%A0%E9%99%A4%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86"},"\u5220\u9664\u7248\u672c\u7ba1\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%85%B3%E8%81%94%E8%BF%AD%E4%BB%A3"},"\u5173\u8054\u8fed\u4ee3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A7%BB%E5%87%BA%E5%85%B3%E8%81%94%E7%9A%84%E8%BF%AD%E4%BB%A3"},"\u79fb\u51fa\u5173\u8054\u7684\u8fed\u4ee3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%85%B3%E8%81%94%E4%BA%A7%E5%93%81"},"\u5173\u8054\u4ea7\u54c1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A7%BB%E5%87%BA%E5%85%B3%E8%81%94%E7%9A%84%E4%BA%A7%E5%93%81"},"\u79fb\u51fa\u5173\u8054\u7684\u4ea7\u54c1"))),(0,r.kt)("h2",{id:"model"},"MODEL"),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u968f\u673a 8 \u4f4d\u5b57\u7b26\u7ec4\u6210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=65536"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u76ee\u6807\uff08\u5bcc\u6587\u672c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u8d1f\u8d23\u4eba uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"release_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u53d1\u5e03\u65f6\u95f4(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65f6\u95f4 \u5355\u4f4d\u79d2 readonly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5206\u7c7b ",(0,r.kt)("br",null),'\u672a\u5f00\u59cb\uff1a"todo" ',(0,r.kt)("br",null),'\u8fdb\u884c\u4e2d\uff1a"in_progress" ',(0,r.kt)("br",null),'\u5df2\u5b8c\u6210\uff1a"done"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprints"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[][sprint]","(#sprint)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3 uuid \u6570\u7ec4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"product_uuids"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ea7\u54c1 uuid \u5217\u8868")))),(0,r.kt)("h3",{id:"sprint"},"sprint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"project_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee UUID")))),(0,r.kt)("h2",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6743\u9650 or \u6ca1\u6709\u5f00\u542f\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5df2\u5220\u9664\u7684\u8fd4\u56de 404")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"409"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint \u5df2\u88ab\u5b58\u5728\uff0c\u4e0d\u5e94\u8be5\u91cd\u590d\u6dfb\u52a0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7aef\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"812"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u8d1f\u8d23\u4eba\u4e0d\u5728 team \u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"890"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u4e0d\u5b58\uff08\u672a\u627e\u5230\u6216\u5df2\u5220\u9664\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"891"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u4e0d\u5b58\u5728\uff08\u672a\u627e\u5230\u6216\u5df2\u5220\u9664\uff09")))),(0,r.kt)("h2",{id:"\u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868"},"\u83b7\u53d6\u7248\u672c\u7ba1\u7406\u5217\u8868"),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/versions"),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"versions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[][version]","(#version)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u4f53\u53c2\u8003"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "versions": [\n    {\n      "uuid": "AyS9QWs8",\n      "title": "V1.0.0",\n      "desc": "",\n      "assign": "FtuS5ApR",\n      "release_time": 1541924064,\n      "create_time": 1538122469,\n      "category": "todo",\n      "sprints": [],\n      "product_uuids": []\n    },\n    {\n      "uuid": "M5an6x7r",\n      "title": "\u6211\u7684\u7248\u672c\u6d4b\u8bd5",\n      "desc": "",\n      "assign": "6ZpgEzkk",\n      "release_time": 1580029633,\n      "create_time": 1579424856,\n      "category": "in_progress",\n      "sprints": [\n        {\n          "sprint_uuid": "Y2NmGbMu",\n          "project_uuid": "FtuS5ApROKcAI7U1"\n        },\n        {\n          "sprint_uuid": "TvXzWmcQ",\n          "project_uuid": "FtuS5ApROKcAI7U1"\n        }\n      ],\n      "product_uuids": []\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"\u65b0\u5efa\u7248\u672c\u7ba1\u7406"},"\u65b0\u5efa\u7248\u672c\u7ba1\u7406"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/versions/add"),(0,r.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-1"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","assign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u8d1f\u8d23\u4eba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","release_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u5e03\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u76ee\u6807\uff08\u5bcc\u6587\u672c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5206\u7c7b ",(0,r.kt)("br",null),'\u672a\u5f00\u59cb\uff1a"todo" ',(0,r.kt)("br",null),'\u8fdb\u884c\u4e2d\uff1a"in_progress" ',(0,r.kt)("br",null),'\u5df2\u5b8c\u6210\uff1a"done"')))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "release_time": 1593316656,\n    "title": "version_create_test",\n    "assign": "6ZpgEzkk"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-1"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "AX3jDED4",\n    "title": "version_create_test",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1593316656,\n    "create_time": 1590983862,\n    "category": "todo",\n    "sprints": [],\n    "product_uuids": []\n  }\n}\n')),(0,r.kt)("h2",{id:"\u7f16\u8f91\u7248\u672c\u7ba1\u7406"},"\u7f16\u8f91\u7248\u672c\u7ba1\u7406"),(0,r.kt)("p",null,"\u6ce8\u610f\u7f16\u8f91\u7248\u672c\uff0c\u8981\u4f20\u5165\u5168\u91cf\u7684\u66f4\u65b0\u540e\u7684\u53c2\u6570\uff0c\u5426\u5219\u76f8\u5173\u5b57\u6bb5\u4f1a\u4f7f\u7528\u5176\u521d\u59cb\u5316\u53c2\u6570"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/update"),(0,r.kt)("h3",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-2"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","assign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u8d1f\u8d23\u4eba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","release_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u5e03\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u76ee\u6807\uff08\u5bcc\u6587\u672c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5206\u7c7b ",(0,r.kt)("br",null),'\u672a\u5f00\u59cb\uff1a"todo" ',(0,r.kt)("br",null),'\u8fdb\u884c\u4e2d\uff1a"in_progress" ',(0,r.kt)("br",null),'\u5df2\u5b8c\u6210\uff1a"done"')))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-1"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "release_time": 1593316656,\n    "title": "update_version_name_test",\n    "assign": "6ZpgEzkk",\n    "uuid": "AX3jDED4"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-2"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "AX3jDED4",\n    "title": "update_version_name_test",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1593316656,\n    "create_time": 1590983862,\n    "category": "todo",\n    "sprints": [],\n    "product_uuids": ["6ZpgEzkk79SQCVLJ"]\n  }\n}\n')),(0,r.kt)("h2",{id:"\u5220\u9664\u7248\u672c\u7ba1\u7406"},"\u5220\u9664\u7248\u672c\u7ba1\u7406"),(0,r.kt)("h3",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/delete"),(0,r.kt)("h3",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-3"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-3"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h2",{id:"\u5173\u8054\u8fed\u4ee3"},"\u5173\u8054\u8fed\u4ee3"),(0,r.kt)("h3",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/sprints/add"),(0,r.kt)("h3",{id:"http-method-4"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-4"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u4efb\u52a1\u7684 uuid")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-2"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sprint_uuid": "5J6xysRB"\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-4"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "M5an6x7r",\n    "title": "\u6211\u7684\u7248\u672c\u6d4b\u8bd5",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1580029633,\n    "create_time": 1579424856,\n    "category": "in_progress",\n    "sprints": [\n      {\n        "sprint_uuid": "5J6xysRB",\n        "project_uuid": "FtuS5ApRTSAkfwI7"\n      }\n    ],\n    "product_uuids": []\n  }\n}\n')),(0,r.kt)("h2",{id:"\u79fb\u51fa\u5173\u8054\u7684\u8fed\u4ee3"},"\u79fb\u51fa\u5173\u8054\u7684\u8fed\u4ee3"),(0,r.kt)("h3",{id:"url-4"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/sprint/:sprintUUID/delete"),(0,r.kt)("h3",{id:"http-method-5"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-5"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-5"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-3"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-5"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "GKy9yuUj",\n    "title": "version_name",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1591150748,\n    "create_time": 1590977961,\n    "category": "todo",\n    "sprints": [\n      {\n        "sprint_uuid": "Y2NmGbMu",\n        "project_uuid": "FtuS5ApROKcAI7U1"\n      }\n    ],\n    "product_uuids": ["6ZpgEzkkUVfH1vUy"]\n  }\n}\n')),(0,r.kt)("h2",{id:"\u5173\u8054\u4ea7\u54c1"},"\u5173\u8054\u4ea7\u54c1"),(0,r.kt)("h3",{id:"url-5"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/products/add"),(0,r.kt)("h3",{id:"http-method-6"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-6"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-6"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-6"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"product_uuids"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ea7\u54c1 uuid \u5217\u8868")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-4"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "product_uuids": ["6ZpgEzkk79SQCVLJ"]\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-6"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "AX3jDED4",\n    "title": "version_create_test",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1593316656,\n    "create_time": 1590983862,\n    "category": "todo",\n    "sprints": [],\n    "product_uuids": ["6ZpgEzkk79SQCVLJ"]\n  }\n}\n')),(0,r.kt)("h2",{id:"\u79fb\u51fa\u5173\u8054\u7684\u4ea7\u54c1"},"\u79fb\u51fa\u5173\u8054\u7684\u4ea7\u54c1"),(0,r.kt)("h3",{id:"url-6"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/version/:versionUUID/product/:productUUID/delete"),(0,r.kt)("h3",{id:"http-method-7"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-7"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_versions"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-7"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-7"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-5"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#version"},"version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u5217\u8868")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003-7"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": {\n    "uuid": "GKy9yuUj",\n    "title": "version_name",\n    "desc": "",\n    "assign": "6ZpgEzkk",\n    "release_time": 1591150748,\n    "create_time": 1590977961,\n    "category": "todo",\n    "sprints": [\n      {\n        "sprint_uuid": "Y2NmGbMu",\n        "project_uuid": "FtuS5ApROKcAI7U1"\n      }\n    ],\n    "product_uuids": []\n  }\n}\n')))}o.isMDXComponent=!0}}]);