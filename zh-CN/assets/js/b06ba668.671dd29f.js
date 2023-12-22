"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[3397],{17942:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(50959);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),N=l,g=k["".concat(d,".").concat(N)]||k[N]||s[N]||r;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},75638:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(28957),l=(a(50959),a(17942));const r={},i="ONES TestCase Item API",p={unversionedId:"api/testcase/testcase",id:"api/testcase/testcase",title:"ONES TestCase Item API",description:"TestCaseItem",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/testcase/testcase.md",sourceDirName:"api/testcase",slug:"/api/testcase/",permalink:"/open-docs/zh-CN/docs/api/testcase/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"api",previous:{title:"wiki \u56de\u6536\u7ad9",permalink:"/open-docs/zh-CN/docs/api/wiki/recyecler/"},next:{title:"ONES TestCase Import/Export API",permalink:"/open-docs/zh-CN/docs/api/testcase/import/"}},d={},u=[{value:"TestCaseItem",id:"testcaseitem",level:2},{value:"library",id:"library",level:3},{value:"module",id:"module",level:3},{value:"case",id:"case",level:3},{value:"plan",id:"plan",level:3},{value:'<p id="plan_case">plan_case</p>',id:"plan_case",level:3},{value:'<p id="plan_case_step">plan_case_step</p>',id:"plan_case_step",level:3},{value:'<p id="field_config">field_config</p>',id:"field_config",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u7279\u6b8a\u8bf4\u660e\uff1a",id:"\u7279\u6b8a\u8bf4\u660e",level:3},{value:"\u67e5\u8be2\u7528\u4f8b\u5e93",id:"\u67e5\u8be2\u7528\u4f8b\u5e93",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b",level:4}],m={toc:u},k="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ones-testcase-item-api"},"ONES TestCase Item API"),(0,l.kt)("h2",{id:"testcaseitem"},"TestCaseItem"),(0,l.kt)("h3",{id:"library"},"library"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7f6e\u9876"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"userdomain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseFieldConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseFieldConfig")))),(0,l.kt)("h3",{id:"module"},"module"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u65e0\u6240\u5c5e\u6a21\u5757"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseModule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibrary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h3",{id:"case"},"case"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u65e0\u6240\u5c5e\u6a21\u5757"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7236\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseModule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibrary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h3",{id:"plan"},"plan"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u5b57\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u9636\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"planStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"UserDomain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedProject"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"Project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedSprint"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u8fed\u4ee3"),(0,l.kt)("td",{parentName:"tr",align:null},"Sprint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedIssueType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u4efb\u52a1\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"IuuseType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"todoCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f85\u6d4b\u8bd5\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skippedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failedCaseCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u7528\u4f8b\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assigns"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"plan_case"},(0,l.kt)("p",{id:"plan_case"},"plan_case")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"note"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warnStep"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8b66\u544a\u6b65\u9aa4\uff08\u6682\u65f6\u6ca1\u7528\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relatedTasks"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u4efb\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcasePlan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCasePlan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCase"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u4eba"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"plan_case_step"},(0,l.kt)("p",{id:"plan_case_step"},"plan_case_step")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stepResult"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b65\u9aa4\u6267\u884c\u7ed3\u679c"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actualResult"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u7ed3\u679c"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcasePlan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8ba1\u5212"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCase"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseCaseStep"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u6b65\u9aa4"),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h3",{id:"field_config"},(0,l.kt)("p",{id:"field_config"},"field_config")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namePinyin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0\u7684\u62fc\u97f3"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isDefault"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u9ed8\u8ba4"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testcaseLibraries"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4f8b\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"TestCaseLibrary")))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u7279\u6b8a\u8bf4\u660e"},"\u7279\u6b8a\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u4f7f\u7528 GraphQL \u67e5\u8be2\uff0c\u53ef\u4ee5\u81ea\u884c\u6784\u5efa\u8bf7\u6c42\u53c2\u6570\u548c\u7b5b\u9009\u6761\u4ef6\u7b49\u7b49"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/graphql/"},"GraphQL \u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003 GraphQL \u6587\u6863")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u67e5\u8be2\u7528\u4f8b\u5e93"},"\u67e5\u8be2\u7528\u4f8b\u5e93"),(0,l.kt)("p",null,"\u67e5\u8be2\u7528\u4f8b\u5e93"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/items/graphql"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"manage_library_cases"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u7a7a"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL \u8bf7\u6c42\u811a\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u6839\u636e GraphQL Query \u8fd4\u56de"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST https://your-host-name/project/api/project/team/:teamUUID/items/graphql \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Ones-Auth-Token: ${token}\' \\\n  -H \'Ones-User-Id: ${user_uuid}\' \\\n  -H \'Referer: https://your-host-name\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n  "query": "\\n    query QUERY_LIBRARY_LIST {\\n      buckets (\\n        pagination: $pagination,\\n        groupBy: {\\n          testcaseLibraries: {}\\n        }\\n      ) {\\n        pageInfo {\\n          count\\n          totalCount\\n          startPos\\n          startCursor\\n          endPos\\n          endCursor\\n          hasNextPage\\n        }\\n        testcaseLibraries(\\n          orderBy: {\\n            isPin:DESC\\n            namePinyin:ASC\\n          }\\n          \\n          \\n        ){\\n          uuid,\\n          name,\\n          isPin,\\n          isSample,\\n          testcaseCaseCount,\\n          testcaseFieldConfig{\\n            key,\\n            uuid,\\n            name\\n          }\\n        }\\n      }\\n    }\\n  ",\n  "variables": {\n    "endCursor": "",\n    "pagination": {\n      "limit": 50\n    }\n  }\n}\'\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "buckets": [\n      {\n        "pageInfo": {\n          "count": 5,\n          "endCursor": "AK6VfLfjlPQEAAAAdGVzdGNhc2VfbGlicmFyeS1QU3pqbTdHTA==",\n          "endPos": 4,\n          "hasNextPage": false,\n          "startCursor": "AK6VfLfjlPQAAAAAdGVzdGNhc2VfbGlicmFyeS1MaHJHOFVoTQ==",\n          "startPos": 0,\n          "totalCount": 5\n        },\n        "testcaseLibraries": [\n          {\n            "isPin": false,\n            "isSample": false,\n            "name": "test1",\n            "testcaseCaseCount": 2000,\n            "testcaseFieldConfig": {\n              "key": "testcase_field_config-GbAeM9uH",\n              "name": "default",\n              "uuid": "GbAeM9uH"\n            },\n            "uuid": "LhrG8UhM"\n          },\n          {\n            "isPin": false,\n            "isSample": true,\n            "name": "order system",\n            "testcaseCaseCount": 2,\n            "testcaseFieldConfig": {\n              "key": "testcase_field_config-GbAeM9uH",\n              "name": "default",\n              "uuid": "GbAeM9uH"\n            },\n            "uuid": "V4o6KTJF"\n          },\n          {\n            "isPin": false,\n            "isSample": false,\n            "name": "lib2",\n            "testcaseCaseCount": 2000,\n            "testcaseFieldConfig": {\n              "key": "testcase_field_config-GbAeM9uH",\n              "name": "default",\n              "uuid": "GbAeM9uH"\n            },\n            "uuid": "3LdYp7bP"\n          },\n          {\n            "isPin": false,\n            "isSample": false,\n            "name": "lib3",\n            "testcaseCaseCount": 2000,\n            "testcaseFieldConfig": {\n              "key": "testcase_field_config-GbAeM9uH",\n              "name": "default",\n              "uuid": "GbAeM9uH"\n            },\n            "uuid": "MPM5bDMK"\n          },\n          {\n            "isPin": false,\n            "isSample": false,\n            "name": "lib4",\n            "testcaseCaseCount": 4000,\n            "testcaseFieldConfig": {\n              "key": "testcase_field_config-GbAeM9uH",\n              "name": "default",\n              "uuid": "GbAeM9uH"\n            },\n            "uuid": "PSzjm7GL"\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}s.isMDXComponent=!0}}]);