"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[71352],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=m(a),u=r,N=s["".concat(d,".").concat(u)]||s[u]||o[u]||l;return a?n.createElement(N,i(i({ref:e},k),{},{components:a})):n.createElement(N,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26814:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},i="Message",p={unversionedId:"api/project/message/message",id:"api/project/message/message",title:"Message",description:"- API \u8bf4\u660e",source:"@site/docs/api/project/message/message.md",sourceDirName:"api/project/message",slug:"/api/project/message/",permalink:"/open-docs/docs/next/api/project/message/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Filter",permalink:"/open-docs/docs/next/api/project/filter/"},next:{title:"Report",permalink:"/open-docs/docs/next/api/project/report/"}},d={},m=[{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"message \u53c2\u6570\u8bf4\u660e",id:"message-\u53c2\u6570\u8bf4\u660e",level:2},{value:"ext \u53c2\u6570\u8bf4\u660e",id:"ext-\u53c2\u6570\u8bf4\u660e",level:2},{value:"1. \u4efb\u52a1\u8ba8\u8bba\u53d1\u9001\u6d88\u606f",id:"1-\u4efb\u52a1\u8ba8\u8bba\u53d1\u9001\u6d88\u606f",level:3},{value:"URL",id:"url",level:4},{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:4},{value:"HTTP status code \u8bf4\u660e",id:"http-status-code-\u8bf4\u660e",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"2. \u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u6d88\u606f",id:"2-\u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u6d88\u606f",level:3},{value:"URL",id:"url-1",level:3},{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b-1",level:4},{value:"URL \u53c2\u6570",id:"url-\u53c2\u6570",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"HTTP status code \u8bf4\u660e",id:"http-status-code-\u8bf4\u660e-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:4},{value:"<del>3. \u6839\u636e\u56e2\u961f\u83b7\u53d6\u6d88\u606f\u901a\u77e5\u5217\u8868</del>",id:"3-\u6839\u636e\u56e2\u961f\u83b7\u53d6\u6d88\u606f\u901a\u77e5\u5217\u8868",level:3},{value:"URL",id:"url-2",level:4},{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"list_notice \u8fd4\u56de\u53c2\u6570",id:"list_notice-\u8fd4\u56de\u53c2\u6570",level:5},{value:"notice \u53c2\u6570\u8bf4\u660e",id:"notice-\u53c2\u6570\u8bf4\u660e",level:5},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3",level:2},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b",level:2},{value:"<del>4. \u7b5b\u9009\u9879\u76ee\u6d88\u606f\u901a\u77e5\u4fe1\u606f</del>",id:"4-\u7b5b\u9009\u9879\u76ee\u6d88\u606f\u901a\u77e5\u4fe1\u606f",level:3},{value:"URL",id:"url-3",level:4},{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-4",level:2},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1",level:2}],k={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"message"},"Message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-%E4%BB%BB%E5%8A%A1%E8%AE%A8%E8%AE%BA%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF"},"1. \u4efb\u52a1\u8ba8\u8bba\u53d1\u9001\u6d88\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-%E8%8E%B7%E5%8F%96%E4%BB%BB%E5%8A%A1%E8%AE%A8%E8%AE%BA%E6%B6%88%E6%81%AF"},"2. \u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u6d88\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-%E6%A0%B9%E6%8D%AE%E5%9B%A2%E9%98%9F%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5%E5%88%97%E8%A1%A8"},(0,r.kt)("del",{parentName:"a"},"3. \u6839\u636e\u56e2\u961f\u83b7\u53d6\u6d88\u606f\u901a\u77e5\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-%E7%AD%9B%E9%80%89%E9%A1%B9%E7%9B%AE%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5%E4%BF%A1%E6%81%AF"},(0,r.kt)("del",{parentName:"a"},"4. \u7b5b\u9009\u9879\u76ee\u6d88\u606f\u901a\u77e5\u4fe1\u606f")))))),(0,r.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h2",{id:"message-\u53c2\u6570\u8bf4\u660e"},"message \u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"message uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5f15\u7528\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"task\uff1a\u5de5\u4f5c\u9879",(0,r.kt)("br",null),"project\uff1a\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5f15\u7528\u7c7b\u578b\u7684 uuid\uff1a",(0,r.kt)("br",null),'\u5982\u679c"ref_type"\u662f"task"\u7684\u8bdd\uff0c\u90a3\u4e48"ref_id"\u7684\u503c\u5c31\u662f\u5de5\u4f5c\u9879 uuid',(0,r.kt)("br",null),'\u5982\u679c"ref_type"\u662f"project"\u7684\u8bdd\uff0c\u90a3\u4e48"ref_id"\u7684\u503c\u5c31\u662f\u9879\u76ee uuid')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"discussion\uff1a\u8bc4\u8bba\u7c7b\u578b\u52a8\u6001",(0,r.kt)("br",null),"system\uff1a\u7cfb\u7edf\u7c7b\u578b\u52a8\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c01\u53d1\u9001\u7684\u6d88\u606f\uff1a",(0,r.kt)("br",null),"BOT\uff1a\u4ee3\u8868\u7cfb\u7edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u7684\u5b9e\u4f53\uff1a\u67d0\u4e2a\u5de5\u4f5c\u9879\u6216\u8005\u67d0\u4e2a\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"send_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u9001\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u5f53"type"\u4e3a"discussion"\u624d\u6709\uff0c\u8bc4\u8bba\u7684\u5185\u5bb9')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"is_can_show_richtext_diff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u80fd\u67e5\u770b\u5de5\u4f5c\u9879\u63cf\u8ff0\u7684 diff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subject_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u4e00\u822c\u503c\u4e3a"user"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subject_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u4eba uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"add\uff1a\u65b0\u589e",(0,r.kt)("br",null),"update\uff1a\u66f4\u65b0",(0,r.kt)("br",null),"delete:\u5220\u9664",(0,r.kt)("br",null),"move:\u79fb\u52a8",(0,r.kt)("br",null),"copy:\u590d\u5236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_attr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"new_value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u540e\u7684\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#ext-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"ext \u53c2\u6570\u8bf4\u660e"))))),(0,r.kt)("h2",{id:"ext-\u53c2\u6570\u8bf4\u660e"},"ext \u53c2\u6570\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-desc"},'"ext": {\n                "field_name": "\u63cf\u8ff0",\n                "field_type": 2,\n                "field_uuid": "field002",\n                "new_value": "123456",\n                "old_value": ""\n            }\n')),(0,r.kt)("h3",{id:"1-\u4efb\u52a1\u8ba8\u8bba\u53d1\u9001\u6d88\u606f"},"1. \u4efb\u52a1\u8ba8\u8bba\u53d1\u9001\u6d88\u606f"),(0,r.kt)("p",null,"\u53d1\u9001\u6d88\u606f\u5230\u9879\u76ee\u8ba8\u8bba\u4e2d"),(0,r.kt)("h4",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/send_message"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u7c7b\u578b"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "2VmirTDd",\n  "text": "Hello world"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "2VmirTDd",\n  "resource_uuid": "6cLx85AV"\n}\n')),(0,r.kt)("h3",{id:"http-status-code-\u8bf4\u660e"},"HTTP status code \u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u5728\u6b64\u4efb\u52a1\u4e2d\u53d1\u9001\u6d88\u606f\u7684\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u4e0d\u5b58\u5728")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNrewAoGDF/send_message \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n    \"uuid\": \"bSGaDSX8\",\n    \"text\": \"hello world\"\n}'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h3",{id:"2-\u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u6d88\u606f"},"2. \u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u6d88\u606f"),(0,r.kt)("p",null,"\u6309\u7167\u65f6\u95f4\u6233\u5206\u9875\u83b7\u53d6\u4efb\u52a1\u8ba8\u8bba\u4e2d\u7684\u6d88\u606f\uff0c\u670d\u52a1\u7aef\u4fdd\u8bc1\u6bcf\u6761\u6d88\u606f\u7684\u65f6\u95f4\u6233\u662f\u552f\u4e00\u7684"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/messages"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u7c7b\u578b-1"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"url-\u53c2\u6570"},"URL \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-desc"},"since=1460543624049663&max=1460543328295374&count=100\n")),(0,r.kt)("p",null,"since \u8868\u793a\u9700\u8981\u83b7\u53d6\u7684\u6d88\u606f\u7684\u6700\u5c0f\u65f6\u95f4\u6233\uff0cmax \u8868\u793a\u6700\u5927\u65f6\u95f4\u6233\uff0c\u4e24\u8005\u5747\u4e0d\u5305\u542b\u81ea\u8eab\uff0c\u5373\u83b7\u53d6 send_time > since && send_time < max \u7684\u6d88\u606f"),(0,r.kt)("p",null,"count \u8868\u793a\u8fd4\u56de\u6d88\u606f\u7684\u6700\u5927\u6570\u91cf\uff0c\u6700\u5927\u503c\u4e3a 100"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"http-status-code-\u8bf4\u660e-1"},"HTTP status code \u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u8bbf\u95ee\u6b64\u4efb\u52a1\u7684\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u4e0d\u5b58\u5728")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  https://your-host-name/project/api/project/team/3pDzCwAe/task/DU6krHBNrewAoGDF/messages \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: Vu5L6yfEf8iZ2rWxTyh2fSovKVb42jGv6vlq1aYaMC09hK13usIYgv45ih119Z9B' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "uuid": "3wkkE4zc",\n      "ref_type": "task",\n      "ref_id:": "2VmirTDdTv7D4q8G",\n      "type": "discussion",\n      "from": "2VmirTDd",\n      "to": "2VmirTDdTv7D4q8G",\n      "send_time": 1460543624049663,\n      "resource": {\n        "uuid": "2HGA6jzH",\n        "type": "file",\n        "name": "IM.jpg",\n        "hash": "FjmX_gpQIPOEfOqvYeplLv83x7hc",\n        "mime": "image/jpeg",\n        "size": 783343,\n        "image_width": 750,\n        "image_height": 1334\n      }\n    },\n    {\n      "uuid": "91fESYkf",\n      "ref_type": "task",\n      "ref_id:": "2VmirTDdTv7D4q8G",\n      "type": "discussion",\n      "from": "2VmirTDd",\n      "to": "2VmirTDdTv7D4q8G",\n      "send_time": 1460542899686694,\n      "text": "Hello"\n    }\n  ],\n  "count": 2,\n  "has_next": false\n}\n')),(0,r.kt)("p",null,"\u8fd4\u56de\u7684\u6d88\u606f\u6309\u7167 send_time \u4ece\u665a\u5230\u65e9\u9006\u5e8f\u6392\u5217\uff0c\u5982\u679c has_next \u4e3a true\uff0c\u5219\u8868\u793a\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u6570\u8d85\u8fc7\u4e86\u6700\u5927\u6570\u91cf\uff0c\u9700\u8981\u7528\u6700\u540e\u4e00\u6761\u6d88\u606f\u7684 send_time \u7ee7\u7eed\u5f80\u524d\u53d6"),(0,r.kt)("h3",{id:"3-\u6839\u636e\u56e2\u961f\u83b7\u53d6\u6d88\u606f\u901a\u77e5\u5217\u8868"},(0,r.kt)("del",{parentName:"h3"},"3. \u6839\u636e\u56e2\u961f\u83b7\u53d6\u6d88\u606f\u901a\u77e5\u5217\u8868")),(0,r.kt)("p",null,"\u6839\u636e\u56e2\u961f team_uuid \u83b7\u53d6 message \u901a\u77e5\u5217\u8868"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/organization/:orgUUID/list_notice"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u7c7b\u578b-2"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"team_uuids"),(0,r.kt)("td",{parentName:"tr",align:"center"},"array"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u56e2\u961f uuid \u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"since"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("h5",{id:"list_notice-\u8fd4\u56de\u53c2\u6570"},"list_notice \u8fd4\u56de\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"notices"),(0,r.kt)("td",{parentName:"tr",align:"left"},"notice"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#notice-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"notice \u53c2\u6570\u8bf4\u660e"))))),(0,r.kt)("h5",{id:"notice-\u53c2\u6570\u8bf4\u660e"},"notice \u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"task_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u9879 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"is_read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5df2\u7ecf\u9605\u89c8\u8fc7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u7eb3\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"message"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#message-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"message \u53c2\u6570\u8bf4\u660e"))))),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n https://your-host-name/project/api/project/organization/XzZSjSVd/list_notice \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: DaYq37tqczRvGjuexuT0kXJ5j8JkHIaWR3dqCNXv2IkaX4Wn5qVxJlBT8btNYCUN' \\\n  -H 'Ones-User-Id: KKt3AotA' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n    \"team_uuids\": [\n        \"Pxizacww\"\n    ],\n    \"since\": 1575009200\n}'\n")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "notices": [\n    {\n      "task_uuid": "KKt3AotAniBAKhKn",\n      "is_read": false,\n      "server_update_stamp": 1575602264876688,\n      "message": {\n        "uuid": "PJ6fK12M",\n        "team_uuid": "Pxizacww",\n        "ref_type": "project",\n        "ref_id": "KKt3AotAEnFQ48hP",\n        "type": "system",\n        "from": "BOT",\n        "to": "KKt3AotAEnFQ48hP",\n        "send_time": 1575602264876688,\n        "subject_type": "user",\n        "subject_id": "KKt3AotA",\n        "action": "update",\n        "object_type": "task",\n        "object_id": "KKt3AotAniBAKhKn",\n        "object_name": "test",\n        "object_attr": "field",\n        "old_value": "7XTdci4G",\n        "new_value": "4WDnCnfc",\n        "ext": {\n          "field_name": "\u72b6\u6001",\n          "field_type": 12,\n          "field_uuid": "field005",\n          "new_option": {\n            "name": "\u6d4b\u8bd5\u4e2d",\n            "uuid": "4WDnCnfc"\n          },\n          "new_value": "",\n          "old_option": {\n            "name": "\u7814\u53d1\u4e2d",\n            "uuid": "7XTdci4G"\n          },\n          "old_value": ""\n        },\n        "is_can_show_richtext_diff": false\n      }\n    }\n    ///\n  ]\n}\n')),(0,r.kt)("h3",{id:"4-\u7b5b\u9009\u9879\u76ee\u6d88\u606f\u901a\u77e5\u4fe1\u606f"},(0,r.kt)("del",{parentName:"h3"},"4. \u7b5b\u9009\u9879\u76ee\u6d88\u606f\u901a\u77e5\u4fe1\u606f")),(0,r.kt)("p",null,"\u7b5b\u9009\u9879\u76ee message \u901a\u77e5\u4fe1\u606f"),(0,r.kt)("h4",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/filter_message"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u7c7b\u578b-3"},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"project"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u662f\u7b5b\u9009\u5168\u90e8\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u662f\u7b5b\u9009\u5168\u90e8\u6210\u5458")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u59cb\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u7eb3\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u675f\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u7eb3\u79d2\uff09\uff08\u5f00\u59cb\u65f6\u95f4\u4e0e\u7ed3\u675f\u65f6\u95f4\u95f4\u9694\u4e0d\u80fd\u5927\u4e8e 7 \u5929\uff09")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"messages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"message"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#message-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"},"message \u53c2\u6570\u8bf4\u660e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"has_next"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u8fd8\u6709\uff0c\u6b64\u63a5\u53e3\u9ed8\u8ba4\u6ca1\u6709")))),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-4"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/project/api/project/team/Pxizacww/filter_message \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: DaYq37tqczRvGjuexuT0kXJ5j8JkHIaWR3dqCNXv2IkaX4Wn5qVxJlBT8btNYCUN' \\\n  -H 'Ones-User-Id: KKt3AotA' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n    \"project\": \"KKt3AotA1y2RIToS\",\n    \"user\": \"\",\n    \"begin\": 1574211200000000,\n    \"end\": 1574784000000000\n}'\n")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "uuid": "lquulQdj",\n      "team_uuid": "U66S45tG",\n      "ref_type": "task",\n      "ref_id": "Gq8ZZZ7FLwTnQro9",\n      "type": "discussion",\n      "from": "Gq8ZZZ7F",\n      "to": "Gq8ZZZ7FLwTnQro9",\n      "send_time": 1574700685218272,\n      "text": "123",\n      "is_can_show_richtext_diff": false\n    },\n    ///\n    {\n      "uuid": "3GrhxETT",\n      "team_uuid": "U66S45tG",\n      "ref_type": "project",\n      "ref_id": "Gq8ZZZ7FgWHaBtAc",\n      "type": "system",\n      "from": "BOT",\n      "to": "Gq8ZZZ7FgWHaBtAc",\n      "send_time": 1574268458074208,\n      "subject_type": "user",\n      "subject_id": "Gq8ZZZ7F",\n      "action": "add",\n      "object_type": "project",\n      "object_id": "Gq8ZZZ7FgWHaBtAc",\n      "object_name": "\u521b\u5efa\u65f6\u95f4",\n      "is_can_show_richtext_diff": false\n    }\n  ],\n  "count": 16,\n  "has_next": false\n}\n')))}o.isMDXComponent=!0}}]);