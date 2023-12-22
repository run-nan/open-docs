"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7162],{17942:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var n=a(50959);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=k(a),N=l,f=u["".concat(d,".").concat(N)]||u[N]||o[N]||r;return a?n.createElement(f,i(i({ref:e},m),{},{components:a})):n.createElement(f,i({ref:e},m))}));function f(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},95689:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=a(28957),l=(a(50959),a(17942));const r={},i="Wiki online draft",p={unversionedId:"api/wiki/online_draft/online_draft",id:"api/wiki/online_draft/online_draft",title:"Wiki online draft",description:"- 1. \u521b\u5efa\u534f\u540c\u8349\u7a3f(\u4e34\u65f6\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)",source:"@site/docs/api/wiki/online_draft/online_draft.md",sourceDirName:"api/wiki/online_draft",slug:"/api/wiki/online_draft/",permalink:"/open-docs/docs/api/wiki/online_draft/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{},sidebar:"api",previous:{title:"Wiki draft",permalink:"/open-docs/docs/api/wiki/draft/"},next:{title:"Wiki permission",permalink:"/open-docs/docs/api/wiki/permission/"}},d={},k=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"HTTP status code \u8bf4\u660e",id:"http-status-code-\u8bf4\u660e",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"1. \u521b\u5efa\u534f\u540c\u8349\u7a3f(\u4e34\u65f6\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)",id:"1-\u521b\u5efa\u534f\u540c\u8349\u7a3f\u4e34\u65f6\u8349\u7a3f\u9875\u9762\u590d\u5236\u4ece\u6a21\u677f\u521b\u5efa",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"2. \u83b7\u53d6\u8349\u7a3f Token",id:"2-\u83b7\u53d6\u8349\u7a3f-token",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP METHOD",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:4},{value:"3. \u83b7\u53d6\u8349\u7a3f\u6b63\u6587",id:"3-\u83b7\u53d6\u8349\u7a3f\u6b63\u6587",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP METHOD",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-2",level:4},{value:"4. \u53d1\u5e03\u8349\u7a3f",id:"4-\u53d1\u5e03\u8349\u7a3f",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP METHOD",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-3",level:4},{value:"5. \u66f4\u65b0\u6807\u9898",id:"5-\u66f4\u65b0\u6807\u9898",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP METHOD",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-4",level:4}],m={toc:k},u="wrapper";function o(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wiki-online-draft"},"Wiki online draft"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E5%8D%8F%E5%90%8C%E8%8D%89%E7%A8%BF(%E4%B8%B4%E6%97%B6%E8%8D%89%E7%A8%BF%E3%80%81%E9%A1%B5%E9%9D%A2%E5%A4%8D%E5%88%B6%E3%80%81%E4%BB%8E%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA)"},"1. \u521b\u5efa\u534f\u540c\u8349\u7a3f(\u4e34\u65f6\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BFToken"},"2. \u83b7\u53d6\u8349\u7a3f Token")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E6%AD%A3%E6%96%87"},"3. \u83b7\u53d6\u8349\u7a3f\u6b63\u6587")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%8F%91%E5%B8%83%E8%8D%89%E7%A8%BF"},"4. \u53d1\u5e03\u8349\u7a3f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E6%9B%B4%E6%96%B0%E6%A0%87%E9%A2%98"},"5. \u66f4\u65b0\u6807\u9898"))),(0,l.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,l.kt)("h3",{id:"http-status-code-\u8bf4\u660e"},"HTTP status code \u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"200"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"403"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u53d7\u9650\uff0c\u4f1a\u8fd4\u56de\u9650\u5236\u7684\u6570\u91cf LimitExceeded.Resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u627e\u5230 NotFound.Draft")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"630"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6b64\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u683c\u5f0f\u6709\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"817"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5df2\u7ecf\u5b58\u5728\u9875\u9762\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"819"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u51b2\u7a81")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"901"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5bb9\u8fc7\u957f")))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u534f\u540c\u8349\u7a3f\u4e34\u65f6\u8349\u7a3f\u9875\u9762\u590d\u5236\u4ece\u6a21\u677f\u521b\u5efa"},"1. \u521b\u5efa\u534f\u540c\u8349\u7a3f(\u4e34\u65f6\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/add"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"copy_src_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'template,page,""'),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u62f7\u8d1d\u6765\u6e90\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"copy_src_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u62f7\u8d1d\u5bf9\u8c61\u7684 uuid\uff0c\u4e0e copy_src_uuid \u914d\u5408\u4f7f\u7528")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e34\u65f6\u8349\u7a3f\uff0c \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // \u7236\u8282\u70b9\u7684page uuid\n  "title": "title",\n  "copy_src_type": "",\n  "copy_src_uuid": ""\n}\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9875\u9762\u590d\u5236, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // \u7236\u8282\u70b9\u7684page uuid\n  "title": "title",\n  "copy_src_type": "page",\n  "copy_src_uuid": "TPaN4NBa"\n}\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6a21\u677f\u521b\u5efa, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // \u7236\u8282\u70b9\u7684page uuid\n  "title": "title",\n  "copy_src_type": "template",\n  "copy_src_uuid": "TPaN4NBa"\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "TPaN4NBc",\n  "space_uuid": "KPq8SX5Z",\n  "page_uuid": "UyZkFDM5",\n  "owner_uuid": "8eyieheZ",\n  "status": 1,\n  "create_time": 1495527956,\n  "ref_type": 6,\n  "ref_uuid": "XPaN4NBa"\n}\n')),(0,l.kt)("h3",{id:"2-\u83b7\u53d6\u8349\u7a3f-token"},"2. \u83b7\u53d6\u8349\u7a3f Token"),(0,l.kt)("h4",{id:"url-1"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/token?action=:action"),(0,l.kt)("h4",{id:"http-method-1"},"HTTP METHOD"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"QUERY_STRING"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"edit, browse"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"edit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u679a\u4e3e")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw"\n}\n')),(0,l.kt)("h3",{id:"3-\u83b7\u53d6\u8349\u7a3f\u6b63\u6587"},"3. \u83b7\u53d6\u8349\u7a3f\u6b63\u6587"),(0,l.kt)("h4",{id:"url-2"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/content"),(0,l.kt)("h4",{id:"http-method-2"},"HTTP METHOD"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-2"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": "",\n  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw",\n  "latest": 1642593507711,\n  "version": 1642593508711\n}\n')),(0,l.kt)("h3",{id:"4-\u53d1\u5e03\u8349\u7a3f"},"4. \u53d1\u5e03\u8349\u7a3f"),(0,l.kt)("h4",{id:"url-3"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/publish"),(0,l.kt)("h4",{id:"http-method-3"},"HTTP METHOD"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5",\n  "title": "title"\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-3"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "team_uuid": "RDjYMhKq",\n  "space_uuid": "QdmnDT57",\n  "page_uuid": "MqYk1map",\n  "draft_uuid": "KLzJ5uvc",\n  "status": 3\n}\n')),(0,l.kt)("h3",{id:"5-\u66f4\u65b0\u6807\u9898"},"5. \u66f4\u65b0\u6807\u9898"),(0,l.kt)("h4",{id:"url-4"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_draft/:draftUUID/update_title"),(0,l.kt)("h4",{id:"http-method-4"},"HTTP METHOD"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "title"\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-4"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")))}o.isMDXComponent=!0}}]);