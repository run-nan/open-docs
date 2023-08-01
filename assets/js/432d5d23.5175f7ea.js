"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[6429],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>o});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),N=m(a),o=l,f=N["".concat(d,".").concat(o)]||N[o]||u[o]||r;return a?n.createElement(f,p(p({ref:e},k),{},{components:a})):n.createElement(f,p({ref:e},k))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=N;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},82357:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={},p=void 0,i={unversionedId:"ones/department/department",id:"version-0.x/ones/department/department",title:"department",description:"ONES Department API",source:"@site/versioned_docs/version-0.x/ones/department/department.md",sourceDirName:"ones/department",slug:"/ones/department/",permalink:"/docs/0.x/ones/department/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"api",previous:{title:"user",permalink:"/docs/0.x/ones/user/"},next:{title:"team",permalink:"/docs/0.x/ones/team/"}},d={},m=[{value:"ONES Department API",id:"ones-department-api",level:2},{value:"model",id:"model",level:3},{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",level:4},{value:"1. \u83b7\u53d6\u56e2\u961f\u90e8\u95e8\u5217\u8868",id:"1-\u83b7\u53d6\u56e2\u961f\u90e8\u95e8\u5217\u8868",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003",level:3},{value:"2. \u6dfb\u52a0\u90e8\u95e8",id:"2-\u6dfb\u52a0\u90e8\u95e8",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-1",level:3},{value:"3. \u4fee\u6539\u90e8\u95e8\u4fe1\u606f",id:"3-\u4fee\u6539\u90e8\u95e8\u4fe1\u606f",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-2",level:3},{value:"4. \u5220\u9664\u90e8\u95e8",id:"4-\u5220\u9664\u90e8\u95e8",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-3",level:3},{value:"5. \u6279\u91cf\u4fee\u6539\u6210\u5458\u6240\u5c5e\u90e8\u95e8",id:"5-\u6279\u91cf\u4fee\u6539\u6210\u5458\u6240\u5c5e\u90e8\u95e8",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3",level:3},{value:"6. \u901a\u8fc7 JSON \u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u67b6\u6784",id:"6-\u901a\u8fc7-json-\u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u67b6\u6784",level:3},{value:"JSON \u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u53c2\u8003",id:"json-\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u53c2\u8003",level:3}],k={toc:m};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ones-department-api"},"ONES Department API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#model"},"model"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E9%83%A8%E9%97%A8%E5%88%97%E8%A1%A8"},"1. \u83b7\u53d6\u56e2\u961f\u90e8\u95e8\u5217\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E6%B7%BB%E5%8A%A0%E9%83%A8%E9%97%A8"},"2. \u6dfb\u52a0\u90e8\u95e8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%E4%BF%AE%E6%94%B9%E9%83%A8%E9%97%A8%E4%BF%A1%E6%81%AF"},"3. \u4fee\u6539\u90e8\u95e8\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%88%A0%E9%99%A4%E9%83%A8%E9%97%A8"},"4. \u5220\u9664\u90e8\u95e8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9%E6%88%90%E5%91%98%E6%89%80%E5%B1%9E%E9%83%A8%E9%97%A8"},"5. \u6279\u91cf\u4fee\u6539\u6210\u5458\u6240\u5c5e\u90e8\u95e8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-%E9%80%9A%E8%BF%87json%E6%96%87%E4%BB%B6%E5%90%8C%E6%AD%A5%E5%9B%A2%E9%98%9F%E9%83%A8%E9%97%A8%E6%9E%B6%E6%9E%84"},"6. \u901a\u8fc7 JSON \u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u67b6\u6784"))))),(0,l.kt)("h3",{id:"model"},"model"),(0,l.kt)("h4",{id:"\u5b57\u6bb5"},"\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5141\u8bb8\u7a7a\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8282\u70b9 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"len<=16"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name_pinyin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0\u62fc\u97f3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"next_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sync_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"0: ONES \u90e8\u95e8",(0,l.kt)("br",null),"1: wechat \u90e8\u95e8",(0,l.kt)("br",null),"2: dingding \u90e8\u95e8")))),(0,l.kt)("h3",{id:"1-\u83b7\u53d6\u56e2\u961f\u90e8\u95e8\u5217\u8868"},"1. \u83b7\u53d6\u56e2\u961f\u90e8\u95e8\u5217\u8868"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/departments"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  https://devapi.myones.net/project/master/team/BDfDqJU7/departments \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"departments"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},">=0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u6570\u636e\u6570\u7ec4 ",(0,l.kt)("a",{parentName:"td",href:"#model"},"model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u90e8\u95e8\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "departments": [\n    {\n      "uuid": "T2dyKELb",\n      "parent_uuid": "",\n      "name": "\u8349\u5e3d\u6d77\u8d3c",\n      "name_pinyin": "cao3mao4hai3zei2",\n      "next_uuid": "MNZj4TvY",\n      "sync_type": 0\n    },\n    {\n      "uuid": "StM3ZoDJ",\n      "parent_uuid": "",\n      "name": "\u8239",\n      "name_pinyin": "chuan2",\n      "next_uuid": "T2dyKELb",\n      "sync_type": 0\n    },\n    {\n      "uuid": "6Mh4DVYE",\n      "parent_uuid": "",\n      "name": "\u6d77\u519b",\n      "name_pinyin": "hai3jun1",\n      "next_uuid": "StM3ZoDJ",\n      "sync_type": 0\n    },\n    {\n      "uuid": "MNZj4TvY",\n      "parent_uuid": "",\n      "name": "test",\n      "name_pinyin": "test",\n      "next_uuid": "",\n      "sync_type": 0\n    }\n  ],\n  "server_update_stamp": 1545647679642848\n}\n')),(0,l.kt)("h3",{id:"2-\u6dfb\u52a0\u90e8\u95e8"},"2. \u6dfb\u52a0\u90e8\u95e8"),(0,l.kt)("h4",{id:"url-1"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/departments/add"),(0,l.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=255"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8282\u70b9 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"next_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9 id")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_department"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#model"},"model")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u7684\u90e8\u95e8\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u90e8\u95e8\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4")))),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "next_uuid": "StM3ZoDJ",\n  "parent_uuid": "",\n  "name": "\u6d77\u519b\u5206\u90e8G5"\n}\n')),(0,l.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-1"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "add_department": {\n    "uuid": "LxeRRH9Q",\n    "parent_uuid": "",\n    "name": "\u6d77\u519b\u5206\u90e8G5",\n    "name_pinyin": "",\n    "next_uuid": "StM3ZoDJ",\n    "team_uuid": "BDfDqJU7"\n  },\n  "server_update_stamp": 1584068238761264\n}\n')),(0,l.kt)("h3",{id:"3-\u4fee\u6539\u90e8\u95e8\u4fe1\u606f"},"3. \u4fee\u6539\u90e8\u95e8\u4fe1\u606f"),(0,l.kt)("h4",{id:"url-2"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/department/update/:departmentUUID"),(0,l.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=255"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8282\u70b9 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"next_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"<=8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u5144\u5f1f\u8282\u70b9 id")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u90e8\u95e8\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4")))),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parent_uuid": "",\n  "name": "\u6d77\u519b\u5206\u90e8G5->G2",\n  "next_uuid": "StM3ZoDJ"\n}\n')),(0,l.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-2"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1584068675766464\n}\n')),(0,l.kt)("h3",{id:"4-\u5220\u9664\u90e8\u95e8"},"4. \u5220\u9664\u90e8\u95e8"),(0,l.kt)("p",null,"\u90e8\u95e8\u5220\u9664\u89c4\u5219\uff1a\u79fb\u9664\u90e8\u95e8\u65f6\u4e0d\u4f1a\u5c06\u6210\u5458\u79fb\u9664\uff0c\u5982\u679c\u8be5\u90e8\u95e8\u4e0b\u6709\u5b50\u90e8\u95e8\uff0c\u5219\u5b50\u90e8\u95e8\u4f1a\u88ab\u540c\u65f6\u79fb\u9664\u3002"),(0,l.kt)("h4",{id:"url-3"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/department/delete/:departmentUUID"),(0,l.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u90e8\u95e8\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-3"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1584069144209136\n}\n')),(0,l.kt)("h3",{id:"5-\u6279\u91cf\u4fee\u6539\u6210\u5458\u6240\u5c5e\u90e8\u95e8"},"5. \u6279\u91cf\u4fee\u6539\u6210\u5458\u6240\u5c5e\u90e8\u95e8"),(0,l.kt)("p",null,"\u63a5\u53e3\u652f\u6301\u540c\u65f6\u5bf9\u591a\u4e2a\u7528\u6237\u8fdb\u884c\u4fee\u6539\u3002\u66f4\u65b0\u89c4\u5219\uff1a\u9488\u5bf9\u63d0\u4ea4\u4fee\u6539\u7684\u6210\u5458\uff0c\u5c5e\u4e8e\u5168\u91cf\u66f4\u65b0\uff0c\u5373\u7528\u6237\u6240\u5728\u7684\u90e8\u95e8\u9700\u8981\u5168\u90e8\u8bf7\u6c42\u4e0a\u4f20\uff0c\u5982\u679c\u7528\u6237\u4e4b\u524d\u6240\u5728\u90e8\u95e8\u5728\u5f53\u524d\u8bf7\u6c42\u4e2d\u672a\u4e0a\u4f20\uff0c\u63a5\u53e3\u8c03\u7528\u6210\u529f\u540e\uff0c\u4f1a\u81ea\u52a8\u5c06\u7528\u6237\u79fb\u51fa\u6b64\u90e8\u95e8\u3002"),(0,l.kt)("h4",{id:"url-4"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/users/update/department"),(0,l.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"user_departments"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u65b9\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u64cd\u4f5c\u6570\u636e")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"user_departments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"user_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u65b9\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"department_uuids"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u65b9\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6240\u5c5e\u90e8\u95e8 UUIDs")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-4"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"JSON \u952e\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u90e8\u95e8\u4fe1\u606f\u66f4\u65b0\u65f6\u95f4")))),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_departments": [\n    {\n      "user_uuid": "FzG7j6Do",\n      "department_uuids": ["6Mh4DVYE"]\n    },\n    {\n      "user_uuid": "DKunKQR2",\n      "department_uuids": ["6Mh4DVYE"]\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"6-\u901a\u8fc7-json-\u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u67b6\u6784"},"6. \u901a\u8fc7 JSON \u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u67b6\u6784"),(0,l.kt)("p",null,"\u6211\u4eec\u7cfb\u7edf\u63d0\u4f9b\u4e86\u901a\u8fc7 JSON \u6587\u4ef6\u540c\u6b65\u56e2\u961f\u90e8\u95e8\u548c\u4eba\u5458\u4fe1\u606f\u7684\u65b9\u5f0f\u3002\u7528\u6237\u53ea\u9700\u8981\u5728\u6307\u5b9a\u7684\u4f4d\u7f6e\u7ef4\u62a4\u4e00\u4e2a JSON \u6587\u4ef6\uff08\u6587\u4ef6\u4f4d\u7f6e\u53ef\u914d\u7f6e\uff09\uff0c\u7cfb\u7edf\u4fbf\u53ef\u4ee5\u81ea\u52a8\u540c\u6b65\u60a8\u7684\u90e8\u95e8\u548c\u4eba\u5458\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u7cfb\u7edf\u4f1a\u5b9a\u65f6\uff08\u95f4\u9694\u65f6\u95f4\u53ef\u914d\u7f6e\uff09\u4ece\u8be5\u914d\u7f6e\u6587\u4ef6\u4e2d\u83b7\u53d6\u90e8\u95e8\u548c\u4eba\u5458\u4fe1\u606f\uff0c\u5e76\u540c\u6b65\u5230\u7cfb\u7edf\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u652f\u6301\u81ea\u52a8\u540c\u6b65\u66f4\u65b0\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u7ef4\u62a4\u5e76\u66f4\u65b0\u8be5\u6587\u4ef6\uff0c\u5e76\u4e14\u8be5\u6587\u4ef6\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u7684\u683c\u5f0f\u3002"),(0,l.kt)("h3",{id:"json-\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u53c2\u8003"},"JSON \u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "department": [\n    {\n      "id": "21000",\n      "name": "\u7814fa\u7ec4\u90e8",\n      "parentid": "",\n      "order": 7\n    },\n    {\n      "id": "23000",\n      "name": "\u7814\u7ec4\u90e803",\n      "parentid": "22000",\n      "order": 1\n    },\n    {\n      "id": "23001",\n      "name": "\u7814\u7ec4\u90e803-1",\n      "parentid": "22000",\n      "order": 1\n    },\n    {\n      "id": "23002",\n      "name": "\u7814\u7ec4\u90e804",\n      "parentid": "22002",\n      "order": 1\n    }\n  ],\n  "members": [\n    {\n      "userid": "xiaowu001",\n      "name": "xiaowu001",\n      "department": ["23001"],\n      "email": "xiaowu001@ones.com",\n      "mobile": null,\n      "avatar": null,\n      "title": null\n    },\n    {\n      "userid": "xiaowu002",\n      "name": "xiaowu002",\n      "department": [],\n      "email": "xiaowu002@ones.com",\n      "mobile": null,\n      "avatar": null,\n      "title": null\n    },\n    {\n      "userid": "cai77",\n      "name": "cai77",\n      "department": ["23002"],\n      "email": "cai77@ones.com",\n      "mobile": null,\n      "avatar": null,\n      "title": null\n    },\n    {\n      "userid": "lengbing",\n      "name": "lengbing",\n      "department": [],\n      "email": "lengbing@ones.com",\n      "mobile": "15818685557",\n      "avatar": null,\n      "title": null\n    },\n    {\n      "userid": "cmjcd",\n      "name": "cmjcd",\n      "department": [],\n      "email": "cmjcd@ones.com",\n      "mobile": "15900009999",\n      "avatar": null,\n      "title": null\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);