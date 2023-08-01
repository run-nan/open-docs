"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[28798],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=d(a),g=r,N=u["".concat(m,".").concat(g)]||u[g]||k[g]||l;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13702:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},p="Program",i={unversionedId:"api/item/program/program",id:"api/item/program/program",title:"Program",description:"- program",source:"@site/docs/api/item/program/program.md",sourceDirName:"api/item/program",slug:"/api/item/program/",permalink:"/open-docs/docs/next/api/item/program/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"ONES Item",permalink:"/open-docs/docs/next/api/item/"},next:{title:"Gantt",permalink:"/open-docs/docs/next/api/item/gantt/"}},m={},d=[{value:"schema",id:"schema",level:2},{value:"\u83b7\u53d6\u9879\u76ee\u96c6\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",id:"\u83b7\u53d6\u9879\u76ee\u96c6\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u67e5\u8be2\u53c2\u6570",id:"\u67e5\u8be2\u53c2\u6570",level:3},{value:"curl \u793a\u4f8b",id:"curl-\u793a\u4f8b",level:3},{value:"\u67e5\u8be2\u9879\u76ee\u96c6\u5217\u8868\u9879\u76ee\u96c6\u8be6\u7ec6\u4fe1\u606f",id:"\u67e5\u8be2\u9879\u76ee\u96c6\u5217\u8868\u9879\u76ee\u96c6\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u67e5\u8be2\u53c2\u6570",id:"\u67e5\u8be2\u53c2\u6570-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",level:3},{value:"\u521b\u5efa\u9879\u76ee\u96c6",id:"\u521b\u5efa\u9879\u76ee\u96c6",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-1",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-1",level:3},{value:"\u7f16\u8f91\u9879\u76ee\u96c6\u4fe1\u606f",id:"\u7f16\u8f91\u9879\u76ee\u96c6\u4fe1\u606f",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-2",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-2",level:3},{value:"\u5220\u9664\u9879\u76ee\u96c6",id:"\u5220\u9664\u9879\u76ee\u96c6",level:2},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-3",level:3},{value:"\u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6",id:"\u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-3",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-4",level:3},{value:"\u6dfb\u52a0\u9879\u76ee\u5230\u9879\u76ee\u96c6",id:"\u6dfb\u52a0\u9879\u76ee\u5230\u9879\u76ee\u96c6",level:2},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-5",level:3},{value:"\u4ece\u9879\u76ee\u96c6\u4e2d\u79fb\u9664\u9879\u76ee",id:"\u4ece\u9879\u76ee\u96c6\u4e2d\u79fb\u9664\u9879\u76ee",level:2},{value:"\u53c2\u6570\u5217\u8868\u53c2\u8003",id:"\u53c2\u6570\u5217\u8868\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003",id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-6",level:3}],o={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"program"},"Program"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"program",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema"},"schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E9%A1%B9%E7%9B%AE%E9%9B%86%E5%B1%9E%E6%80%A7%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF"},"\u83b7\u53d6\u9879\u76ee\u96c6\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%9F%A5%E8%AF%A2%E9%A1%B9%E7%9B%AE%E9%9B%86%E5%88%97%E8%A1%A8%E9%A1%B9%E7%9B%AE%E9%9B%86%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF"},"\u67e5\u8be2\u9879\u76ee\u96c6\u5217\u8868\u9879\u76ee\u96c6\u8be6\u7ec6\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E9%9B%86"},"\u521b\u5efa\u9879\u76ee\u96c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%BC%96%E8%BE%91%E9%A1%B9%E7%9B%AE%E9%9B%86%E4%BF%A1%E6%81%AF"},"\u7f16\u8f91\u9879\u76ee\u96c6\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%A0%E9%99%A4%E9%A1%B9%E7%9B%AE%E9%9B%86"},"\u5220\u9664\u9879\u76ee\u96c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%A1%B9%E7%9B%AE%E9%9B%86%E4%B8%8B%E6%96%B0%E5%BB%BA%E5%AD%90%E9%A1%B9%E7%9B%AE%E9%9B%86"},"\u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B7%BB%E5%8A%A0%E9%A1%B9%E7%9B%AE%E5%88%B0%E9%A1%B9%E7%9B%AE%E9%9B%86"},"\u6dfb\u52a0\u9879\u76ee\u5230\u9879\u76ee\u96c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E9%A1%B9%E7%9B%AE%E9%9B%86%E4%B8%AD%E7%A7%BB%E9%99%A4%E9%A1%B9%E7%9B%AE"},"\u4ece\u9879\u76ee\u96c6\u4e2d\u79fb\u9664\u9879\u76ee"))))),(0,r.kt)("h2",{id:"schema"},"schema"),(0,r.kt)("p",null,"\u9879\u76ee\u96c6 itemKey: program-{program.uuid}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"aliases"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"canUpdate"),(0,r.kt)("th",{parentName:"tr",align:"left"},"allowEmpty"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[UUID]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"item_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[Item \u7c7b\u578b]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[Item Key]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee\u96c6\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name_pinyin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u540d\u79f0\u62fc\u97f3]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee\u96c6\u521b\u5efa\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee\u96c6\u8d1f\u8d23\u4eba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"plan_start_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8ba1\u5212\u5f00\u59cb\u65e5\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"plan_end_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8ba1\u5212\u7ed3\u675f\u65e5\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"project_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u9879\u76ee]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sprint_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u8fed\u4ee3\u6570]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"task_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u4efb\u52a1\u6570]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u7236\u8282\u70b9]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u5c42\u7ea7\u8def\u5f84]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"position"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u4f4d\u7f6e]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"after"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u5728\u6b64\u8282\u70b9\u540e]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ancestors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"program"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u7236\u9879\u76ee\u96c6]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"related_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u5173\u8054\u6570\u636e\u7c7b\u578b][none,project]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"project"),(0,r.kt)("td",{parentName:"tr",align:"left"},"project"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u5173\u8054\u9879\u76ee]")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u83b7\u53d6\u9879\u76ee\u96c6\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"},"\u83b7\u53d6\u9879\u76ee\u96c6\u5c5e\u6027\u8be6\u7ec6\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/graphql/#call_ones_graphql"},"\u8c03\u7528 GraphQL \u63a5\u53e3")),(0,r.kt)("h3",{id:"\u67e5\u8be2\u53c2\u6570"},"\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  fields(filter: { pool_in: ["program"], context: { type_equal: "team" } }) {\n    aliases\n    uuid\n    name\n    fieldType\n    required\n    canUpdate\n    allowEmpty\n    evaluated\n    defaultValue\n    builtIn\n  }\n}\n')),(0,r.kt)("h3",{id:"curl-\u793a\u4f8b"},"curl \u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'https://your-host-name/project/api/project/team/BDfDqJU7/items/graphql' \\\n--header 'Content-Type: application/json' \\\n--header 'Ones-User-Id: 6ZpgEzkk' \\\n--header 'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"{\\n    fields(filter: { pool_in: [\\\"program\\\"], context: { type_equal: \\\"team\\\" } }) {\\n        aliases\\n        uuid\\n        name\\n        fieldType\\n        required\\n        canUpdate\\n        allowEmpty\\n        evaluated\\n        defaultValue\\n        builtIn\\n        \\n    }\\n}\",\"variables\":{}}'\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u67e5\u8be2\u9879\u76ee\u96c6\u5217\u8868\u9879\u76ee\u96c6\u8be6\u7ec6\u4fe1\u606f"},"\u67e5\u8be2\u9879\u76ee\u96c6\u5217\u8868\u9879\u76ee\u96c6\u8be6\u7ec6\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/graphql/#call_ones_graphql"},"\u8c03\u7528 GraphQL \u63a5\u53e3")),(0,r.kt)("h3",{id:"\u67e5\u8be2\u53c2\u6570-1"},"\u67e5\u8be2\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  programs {\n    key\n    uuid\n    name\n    assign {\n      uuid\n      name\n      avatar\n      __typename\n    }\n    project {\n      uuid\n    }\n    relatedType\n    createTime\n    planStartTime\n    planEndTime\n    namePinyin\n    parent\n    path\n    position\n    projectCount\n    sprintCount\n    taskCount\n  }\n}\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "programs {\\n\\t\\tkey\\n\\t\\tuuid\\n\\t\\tname\\n\\t\\tassign {\\n\\t\\t\\tuuid\\n\\t\\t\\tname\\n\\t\\t\\tavatar\\n\\t\\t\\t__typename\\n\\t\\t}\\n\\t\\tproject {\\n\\t\\t\\tuuid\\n\\t\\t}\\n\\t\\trelatedType\\n\\t\\tcreateTime\\n\\t\\tplanStartTime\\n\\t\\tplanEndTime\\n\\t\\tnamePinyin\\n\\t\\tparent\\n\\t\\tpath\\n\\t\\tposition\\n\\t\\tprojectCount\\n\\t\\tsprintCount\\n\\t\\ttaskCount\\n\\t}\\n\\n",\n  "variables": {}\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "programs": [\n      {\n        "assign": {\n          "__typename": "User",\n          "avatar": "",\n          "name": "0002",\n          "uuid": "3rzKDAtx"\n        },\n        "createTime": 1589351460,\n        "key": "program-WAhBNNYr",\n        "name": "\u5b9a\u4f4d\u5230",\n        "namePinyin": "ding4wei4dao4",\n        "parent": "",\n        "path": "WAhBNNYr",\n        "planEndTime": null,\n        "planStartTime": null,\n        "position": 200000,\n        "project": {\n          "uuid": ""\n        },\n        "projectCount": 0,\n        "relatedType": "none",\n        "sprintCount": 0,\n        "taskCount": 0,\n        "uuid": "WAhBNNYr"\n      },\n      {\n        "assign": {\n          "__typename": "User",\n          "avatar": "",\n          "name": "0002",\n          "uuid": "3rzKDAtx"\n        },\n        "createTime": 1585626156,\n        "key": "program-Q77yeVDE",\n        "name": "\u8f85\u5bfc\u8d39",\n        "namePinyin": "fu3dao3fei4",\n        "parent": "",\n        "path": "Q77yeVDE",\n        "planEndTime": 1585798944,\n        "planStartTime": 1585626144,\n        "position": 100000,\n        "project": {\n          "uuid": ""\n        },\n        "projectCount": 1,\n        "relatedType": "none",\n        "sprintCount": 2,\n        "taskCount": 11,\n        "uuid": "Q77yeVDE"\n      },\n      {\n        "assign": {\n          "__typename": "User",\n          "avatar": "",\n          "name": "\u8d1d\u52a0\u5e9e\u514b",\n          "uuid": "6ZpgEzkk"\n        },\n        "createTime": 1585626166,\n        "key": "program-SYmmVyGq",\n        "name": "webhook_test",\n        "namePinyin": "webhook_test",\n        "parent": "Q77yeVDE",\n        "path": "Q77yeVDE-SYmmVyGq",\n        "planEndTime": null,\n        "planStartTime": null,\n        "position": 100000,\n        "project": {\n          "uuid": "6ZpgEzkkmkvOVIU6"\n        },\n        "projectCount": 1,\n        "relatedType": "project",\n        "sprintCount": 2,\n        "taskCount": 11,\n        "uuid": "SYmmVyGq"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee\u96c6"},"\u521b\u5efa\u9879\u76ee\u96c6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#%E6%B7%BB%E5%8A%A0item"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#schema"},"\u53c2\u6570\u5217\u8868")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-1"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "name": "dd",\n    "plan_start_time": 1589179654,\n    "plan_end_time": 1589438854,\n    "related_type": "none",\n    "parent": "",\n    "assign": "3rzKDAtx"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-1"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "key": "program-WGyP2og6", // itemKey\n    "uuid": "WGyP2og6"\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u7f16\u8f91\u9879\u76ee\u96c6\u4fe1\u606f"},"\u7f16\u8f91\u9879\u76ee\u96c6\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#%E6%9B%B4%E6%96%B0item"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#schema"},"\u53c2\u6570\u5217\u8868")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-2"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "name": "new_name",\n    "plan_start_time": 1589126400,\n    "plan_end_time": 1589471999\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-2"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "key": "program-WGyP2og6",\n    "uuid": "WGyP2og6"\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u5220\u9664\u9879\u76ee\u96c6"},"\u5220\u9664\u9879\u76ee\u96c6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#%E5%88%A0%E9%99%A4item"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-3"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6"},"\u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#item-add"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#schema"},"\u53c2\u6570\u5217\u8868")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003-3"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "name": "sub-program",\n    "related_type": "none",\n    "parent": "WGyP2og6", // \u9879\u76ee\u96c6\u4e0b\u65b0\u5efa\u5b50\u9879\u76ee\u96c6\n    "assign": "X60Ow895"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-4"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_type": "program",\n    "key": "program-RCu1xffH",\n    "uuid": "RCu1xffH"\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u9879\u76ee\u5230\u9879\u76ee\u96c6"},"\u6dfb\u52a0\u9879\u76ee\u5230\u9879\u76ee\u96c6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#%E6%89%B9%E9%87%8F%E6%B7%BB%E5%8A%A0item"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#schema"},"\u53c2\u6570\u5217\u8868")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "items": [\n    {\n      "item_type": "program",\n      "parent": "WAhBNNYr",\n      "related_type": "project",\n      "project": "FzG7j6DoZ7NaA7Vr"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-5"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4ece\u9879\u76ee\u96c6\u4e2d\u79fb\u9664\u9879\u76ee"},"\u4ece\u9879\u76ee\u96c6\u4e2d\u79fb\u9664\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u627e\u51fa\u5bf9\u5e94\u9879\u76ee\u7684\u9879\u76ee\u96c6 uuid;"),(0,r.kt)("li",{parentName:"ul"},"relatedType=project \u6b64\u9879\u76ee\u96c6\u662f\u5173\u8054\u7684\u9879\u76ee")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/next/api/item/#%E5%88%A0%E9%99%A4item"},"\u8c03\u7528\u65b9\u5f0f")),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868\u53c2\u8003"},"\u53c2\u6570\u5217\u8868\u53c2\u8003"),(0,r.kt)("p",null,"none"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u53c2\u8003-6"},"\u8fd4\u56de\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);