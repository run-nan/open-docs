"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8986],{17942:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(50959);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=d(n),s=r,c=u["".concat(m,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74787:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(28957),r=(n(50959),n(17942));const l={},i="ONES Team API",p={unversionedId:"api/team/team",id:"api/team/team",title:"ONES Team API",description:"- model",source:"@site/docs/api/team/team.md",sourceDirName:"api/team",slug:"/api/team/",permalink:"/open-docs/docs/api/team/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{},sidebar:"api",previous:{title:"ONES Department API",permalink:"/open-docs/docs/api/department/"},next:{title:"ONES Organization API",permalink:"/open-docs/docs/api/organization/"}},m={},d=[{value:"model",id:"model",level:2},{value:"team",id:"team",level:3},{value:"team_config",id:"team_config",level:3},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"1. \u83b7\u53d6\u56e2\u961f\u4fe1\u606f",id:"1-\u83b7\u53d6\u56e2\u961f\u4fe1\u606f",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003",level:3},{value:"2. \u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868",id:"2-\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-1",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1",level:3},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json",level:3},{value:"3. \u79fb\u9664\u56e2\u961f\u6210\u5458",id:"3-\u79fb\u9664\u56e2\u961f\u6210\u5458",level:2},{value:"URL",id:"url-2",level:3},{value:"HTTP Method",id:"http-method-2",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2",level:3},{value:"\u8fd4\u56de\u4f53\u53c2\u8003",id:"\u8fd4\u56de\u4f53\u53c2\u8003",level:3},{value:"4. \u83b7\u53d6\u56e2\u961f\u6210\u5458",id:"4-\u83b7\u53d6\u56e2\u961f\u6210\u5458",level:2},{value:"URL",id:"url-3",level:3},{value:"HTTP Method",id:"http-method-3",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:3},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3",level:3},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-1",level:3}],o={toc:d},u="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-team-api"},"ONES Team API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model"},"model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#team"},"team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#teamconfig"},"team_config")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E4%BF%A1%E6%81%AF"},"1. \u83b7\u53d6\u56e2\u961f\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8"},"2. \u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-%E7%A7%BB%E9%99%A4%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98"},"3. \u79fb\u9664\u56e2\u961f\u6210\u5458/\u9000\u51fa\u56e2\u961f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-%E8%8E%B7%E5%8F%96%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98"},"4. \u83b7\u53d6\u56e2\u961f\u6210\u5458\u4fe1\u606f"))))),(0,r.kt)("h2",{id:"model"},"model"),(0,r.kt)("h3",{id:"team"},"team"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u7c7b\u578b",(0,r.kt)("br",null)," free: \u514d\u8d39\u56e2\u961f,\u65e0\u8fc7\u671f\u65f6\u95f4\uff0c15 \u4eba\uff0c3 \u4e2a\u9879\u76ee\uff0c30M \u9644\u4ef6 ",(0,r.kt)("br",null)," pro: \u9ad8\u7ea7\u4ed8\u8d39\u56e2\u961f,\u6709\u8fc7\u671f\u65f6\u95f4\uff0c300M \u9644\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u521b\u5efa\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f logo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cover_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u72b6\u6001 1\uff1a\u6b63\u5e38\uff1b2\uff1a\u5df2\u8fc7\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u914d\u7f6e\u4fe1\u606f\uff0c\u8be6\u89c1\u4e0b\u65b9\u8bf4\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"member_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u6210\u5458\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4\u6233")))),(0,r.kt)("h3",{id:"team_config"},"team_config"),(0,r.kt)("p",null,"\u56e2\u961f\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2003","alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fed\u4ee3\u522b\u540d")))),(0,r.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u8bbf\u95ee\u6b64\u56e2\u961f\u7684\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"618"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd8\u6709\u9700\u8981\u79fb\u4ea4\u7684\u56e2\u961f/\u9879\u76ee/\u91cc\u7a0b\u7891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"819"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u64cd\u4f5c\u6743\u9650")))),(0,r.kt)("h1",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h2",{id:"1-\u83b7\u53d6\u56e2\u961f\u4fe1\u606f"},"1. \u83b7\u53d6\u56e2\u961f\u4fe1\u606f"),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/info"),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u53c2\u8003\u9876\u7aef team \u901a\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\nhttps://your-host-name/project/api/project/team/BDfDqJU7/info \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "BDfDqJU7",\n  "status": 1,\n  "name": "onePiece",\n  "owner": "FtuS5ApR",\n  "logo": "",\n  "cover_url": "",\n  "domain": "",\n  "create_time": 1535539298664608,\n  "type": "pro",\n  "config": {\n    "sprint": {\n      "alias": ""\n    }\n  },\n  "member_count": 56,\n  "org_uuid": "75tuQaF7",\n  "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],\n  "workhours": 800000,\n  "sprint_timeline_visibility": false,\n  "testcase_visibility": true,\n  "project_panel_visibility": false,\n  "support_script_actions": true,\n  "server_update_stamp": 1581921676849920\n}\n')),(0,r.kt)("h2",{id:"2-\u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868"},"2. \u83b7\u53d6\u56e2\u961f\u6210\u5458\u5217\u8868"),(0,r.kt)("p",null,"\u83b7\u53d6\u56e2\u961f\u5185\u7684\u6240\u6709\u6210\u5458\u4fe1\u606f\uff0c\u5305\u62ec\u81ea\u5df1\uff0c\u6309\u7167\u52a0\u5165\u65f6\u95f4\u5347\u5e8f\u6392\u5e8f"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/members"),(0,r.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/project/api/project/team/BDfDqJU7/members \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de-json"},"\u8fd4\u56de JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "members": [\n        {\n            "uuid": "KtLMDi1K",\n            "email": "linhong+shkfhlksjkfssfsdf@ones.com",\n            "name": "",\n            "name_pinyin": "",\n            "title": "",\n            "avatar": "",\n            "phone": "",\n            "create_time": 1547023260673072,\n            "status": 3,\n            "team_member_status": 2,\n            "verify_status": 1,\n            "department_uuids": [],\n            "inviter_uuid": "",\n            "inviter_name": "",\n            "sync_types": [\n                0\n            ]\n        },\n        {\n            "uuid": "13Jrwu7N",\n            "email": "linhong+01@ones.com",\n            "name": "",\n            "name_pinyin": "",\n            "title": "",\n            "avatar": "",\n            "phone": "",\n            "create_time": 1547023260671392,\n            "status": 3,\n            "team_member_status": 2,\n            "verify_status": 1,\n            "department_uuids": [],\n            "inviter_uuid": "",\n            "inviter_name": "",\n            "sync_types": [\n                0\n            ]\n        },\n        ...\n    ],\n    "pending_members": [\n        {\n            "uuid": "HNvREAkV",\n            "email": "linhong+1234@ones.com",\n            "name": "",\n            "name_pinyin": "",\n            "title": "",\n            "avatar": "",\n            "phone": "",\n            "create_time": 1547023318993280,\n            "status": 1,\n            "team_member_status": 3,\n            "verify_status": 1,\n            "department_uuids": [],\n            "inviter_uuid": "FtuS5ApR",\n            "inviter_name": "\u201c\u8349\u5e3d\u201d\u8499\u5947\xb7D\xb7\u8def\u98de",\n            "sync_types": [\n                0\n            ]\n        },\n        {\n            "uuid": "TGZ7Q17d",\n            "email": "linhong+43211234@ones.com.cns",\n            "name": "",\n            "name_pinyin": "",\n            "title": "",\n            "avatar": "",\n            "phone": "",\n            "create_time": 1547023931529760,\n            "status": 3,\n            "team_member_status": 3,\n            "verify_status": 1,\n            "department_uuids": [],\n            "inviter_uuid": "FtuS5ApR",\n            "inviter_name": "\u201c\u8349\u5e3d\u201d\u8499\u5947\xb7D\xb7\u8def\u98de",\n            "sync_types": [\n                0\n            ]\n        },\n        ...\n    ],\n    "server_update_stamp": 1584069280645760\n}\n')),(0,r.kt)("h2",{id:"3-\u79fb\u9664\u56e2\u961f\u6210\u5458"},"3. \u79fb\u9664\u56e2\u961f\u6210\u5458"),(0,r.kt)("p",null,"\u79fb\u9664\u56e2\u961f\u5185\u7684\u67d0\u4e2a\u6210\u5458\uff0c\u53ea\u6709\u56e2\u961f\u62e5\u6709\u8005\u624d\u80fd\u79fb\u9664\u9664\u4e86\u81ea\u5df1\u4e4b\u5916\u7684\u6210\u5458"),(0,r.kt)("p",null,"\u79fb\u9664\u6210\u529f\u540e\uff0c\u8be5\u6210\u5458\u5728\u5f53\u524d\u7cfb\u7edf\u4e2d\u4ea7\u751f\u7684\u5404\u7c7b\u6570\u636e\u5747\u4f1a\u4fdd\u7559\u3002\u91cd\u65b0\u9080\u8bf7\u52a0\u5165\u56e2\u961f\u540e\uff0c\u4f7f\u7528\u540c\u6837\u90ae\u7bb1\u7684\u6210\u5458\u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u662f\u540c\u4e00\u6210\u5458\uff0c\u4f1a\u5c06\u5386\u53f2\u6570\u636e\u4e0e\u8be5\u6210\u5458\u8fdb\u884c\u5173\u8054"),(0,r.kt)("h3",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/delete_member"),(0,r.kt)("h3",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"json"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"member"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u79fb\u9664\u7684\u6210\u5458 uuid")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "member": "EE1FvEii"\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u4f53\u53c2\u8003"},"\u8fd4\u56de\u4f53\u53c2\u8003"),(0,r.kt)("p",null,"\u5f53\u9519\u8bef\u7801\u4e3a 618 \u65f6\uff0c\u8fd4\u56de\u9700\u8981\u79fb\u4ea4\u7684\u9879\u76ee uuid \u5217\u8868\uff0c\u5982\u679c\u662f\u56e2\u961f\u62e5\u6709\u8005\uff0c\u8fd8\u8fd4\u56de\u56e2\u961f uuid\uff0c\u5982\u679c\u662f\u56e2\u961f\u7ba1\u7406\u5458\uff0c\u8fd4\u56de\u91cc\u7a0b\u7891 uuid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 618,\n  "desc": "Something need to be handed over",\n  "team": "CnCPeqyD",\n  "projects": ["RQbtzPNmDW1OkVti", "RQbtzPNmu46nUo8U"],\n  "milestones": ["DW1OkVti", "u46nUo8U"]\n}\n')),(0,r.kt)("p",null,"\u5f53\u8fd4\u56de\u7801\u4e3a 200 \u65f6\uff0c\u8fd4\u56de\u56e2\u961f\u6210\u5458\u4fe1\u606f\u4fee\u6539\u7684 server_update_stamp \u66f4\u65b0\u65f6\u95f4\u6233"),(0,r.kt)("h2",{id:"4-\u83b7\u53d6\u56e2\u961f\u6210\u5458"},"4. \u83b7\u53d6\u56e2\u961f\u6210\u5458"),(0,r.kt)("p",null,"\u83b7\u53d6\u56e2\u961f\u5185\u7684\u6210\u5458\u4fe1\u606f"),(0,r.kt)("h3",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/member/:userUUID"),(0,r.kt)("h3",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/project/api/project/team/BDfDqJU7/member/TRPCkuR6 \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de-json-1"},"\u8fd4\u56de JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "TRPCkuR6",\n  "email": "1812118986@qq.com",\n  "name": "1812118986",\n  "name_pinyin": "1812118986",\n  "title": "",\n  "avatar": "",\n  "phone": "",\n  "create_time": 1584945254292464,\n  "status": 1,\n  "team_member_status": 2,\n  "verify_status": 1,\n  "department_uuids": [],\n  "inviter_uuid": "PEP76x86",\n  "inviter_name": "",\n  "sync_types": [0],\n  "company": ""\n}\n')))}k.isMDXComponent=!0}}]);