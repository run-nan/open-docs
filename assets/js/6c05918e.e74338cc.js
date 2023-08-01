"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[75249],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=d(a),g=l,s=N["".concat(m,".").concat(g)]||N[g]||u[g]||r;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},11215:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={},i="Testcase",p={unversionedId:"api/testcase/testcase",id:"version-1.x/api/testcase/testcase",title:"Testcase",description:"TestCase \u90e8\u5206\u63a5\u53e3 item \u5316",source:"@site/versioned_docs/version-1.x/api/testcase/testcase.md",sourceDirName:"api/testcase",slug:"/api/testcase/",permalink:"/open-docs/docs/api/testcase/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Wiki recyecler",permalink:"/open-docs/docs/api/wiki/recyecler/"},next:{title:"Import",permalink:"/open-docs/docs/api/testcase/import/"}},m={},d=[{value:"TestCase \u90e8\u5206\u63a5\u53e3 item \u5316",id:"testcase-\u90e8\u5206\u63a5\u53e3-item-\u5316",level:4},{value:"TestCaseItem",id:"testcaseitem",level:2},{value:"library",id:"library",level:3},{value:"module",id:"module",level:3},{value:"case",id:"case",level:3},{value:"plan",id:"plan",level:3},{value:'<p id="plan_case">plan_case</p>',id:"plan_case",level:3},{value:'<p id="plan_case_step">plan_case_step</p>',id:"plan_case_step",level:3},{value:'<p id="field_config">field_config</p>',id:"field_config",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u7279\u6b8a\u8bf4\u660e\uff1a",id:"\u7279\u6b8a\u8bf4\u660e",level:3},{value:"1. \u67e5\u8be2\u7528\u4f8b\u5e93",id:"1-\u67e5\u8be2\u7528\u4f8b\u5e93",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"GraphQL \u8bf7\u6c42\u811a\u672c",id:"graphql-\u8bf7\u6c42\u811a\u672c",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4}],k={toc:d};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"testcase"},"Testcase"),(0,l.kt)("h4",{id:"testcase-\u90e8\u5206\u63a5\u53e3-item-\u5316"},"TestCase \u90e8\u5206\u63a5\u53e3 item \u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#TestCaseItem"},"TestCase Item"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#library"},"library")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module"},"module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#case"},"case")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#plan"},"plan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"#plan_case"},"plan_case")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"#plan_case_step"},"plan_case_step")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"#field_config"},"field_config")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%E6%9F%A5%E8%AF%A2%E7%94%A8%E4%BE%8B%E5%BA%93"},"1. \u67e5\u8be2\u7528\u4f8b\u5e93"))))),(0,l.kt)("h2",{id:"testcaseitem"},"TestCaseItem"),(0,l.kt)("h3",{id:"library"},"library"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7f6e\u9876"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"userdomain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseFieldConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseFieldConfig")))),(0,l.kt)("h3",{id:"module"},"module"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u65e0\u6240\u5c5e\u6a21\u5757"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseModule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibrary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h3",{id:"case"},"case"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u65e0\u6240\u5c5e\u6a21\u5757"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseModule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibrary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h3",{id:"plan"},"plan"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u9636\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"planStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"UserDomain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedProject"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"Project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedSprint"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u8fed\u4ee3"),(0,l.kt)("td",{parentName:"tr",align:null},"Sprint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedIssueType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u4efb\u52a1\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"IuuseType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"todoCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f85\u6d4b\u8bd5\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skippedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assigns"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"plan_case"},(0,l.kt)("p",{id:"plan_case"},"plan_case")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"note"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warnStep"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8b66\u544a\u6b65\u9aa4\uff08\u6682\u65f6\u6ca1\u7528\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u4efb\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcasePlan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCasePlan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCase"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"plan_case_step"},(0,l.kt)("p",{id:"plan_case_step"},"plan_case_step")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stepResult"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b65\u9aa4\u6267\u884c\u7ed3\u679c"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actualResult"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u7ed3\u679c"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcasePlan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCase"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCaseStep"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u6b65\u9aa4"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"field_config"},(0,l.kt)("p",{id:"field_config"},"field_config")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0\u7684\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u9ed8\u8ba4"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibraries"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u7279\u6b8a\u8bf4\u660e"},"\u7279\u6b8a\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u4f7f\u7528 GraphQL \u67e5\u8be2\uff0c\u53ef\u4ee5\u81ea\u884c\u6784\u5efa\u8bf7\u6c42\u53c2\u6570\u548c\u7b5b\u9009\u6761\u4ef6\u7b49\u7b49"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/open-docs/docs/api/graphql/"},"GraphQL \u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003 GraphQL \u6587\u6863")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"1-\u67e5\u8be2\u7528\u4f8b\u5e93"},"1. \u67e5\u8be2\u7528\u4f8b\u5e93"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/items/graphql"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h3",{id:"\u8c03\u7528\u6743\u9650"},"\u8c03\u7528\u6743\u9650"),(0,l.kt)("p",null,"manage_library_cases"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u7a7a"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL \u8bf7\u6c42\u811a\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h4",{id:"graphql-\u8bf7\u6c42\u811a\u672c"},"GraphQL \u8bf7\u6c42\u811a\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n    testcaseLibraries{\n        key\n        uuid\n        name\n        isPin\n        namePinyin\n        createTime\n        members{\n            type\n            param\n        }\n    }\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "testcaseLibraries": [\n      {\n        "createTime": 1547783373,\n        "isPin": false,\n        "key": "testcase_library-4VxhZDds",\n        "members": [\n          {\n            "param": "Gq8ZZZ7F",\n            "type": "single_user"\n          },\n          {\n            "param": "",\n            "type": "testcase_administrators"\n          }\n        ],\n        "name": "test",\n        "namePinyin": "test",\n        "testcaseFieldConfig": {\n          "key": "testcase_field_config-BWViJmUg",\n          "name": "\u9ed8\u8ba4\u914d\u7f6e"\n        },\n        "uuid": "4VxhZDds"\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);