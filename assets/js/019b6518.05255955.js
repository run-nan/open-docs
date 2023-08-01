"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[37901],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>o});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),f=k(a),o=r,g=f["".concat(d,".").concat(o)]||f[o]||N[o]||l;return a?n.createElement(g,p(p({ref:e},m),{},{components:a})):n.createElement(g,p({ref:e},m))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88857:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={},p="Sprint field",i={unversionedId:"api/project/sprint_field/sprint_field",id:"version-1.x/api/project/sprint_field/sprint_field",title:"Sprint field",description:"- \u6a21\u578b",source:"@site/versioned_docs/version-1.x/api/project/sprint_field/sprint_field.md",sourceDirName:"api/project/sprint_field",slug:"/api/project/sprint_field/",permalink:"/open-docs/docs/api/project/sprint_field/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Sprint",permalink:"/open-docs/docs/api/project/sprint/"},next:{title:"Spring status",permalink:"/open-docs/docs/api/project/sprint_status/"}},d={},k=[{value:"\u8fed\u4ee3\u5c5e\u6027",id:"\u8fed\u4ee3\u5c5e\u6027",level:2},{value:"\u8fed\u4ee3\u5c5e\u6027\u503c",id:"\u8fed\u4ee3\u5c5e\u6027\u503c",level:2},{value:"\u5c5e\u6027\u7c7b\u578b",id:"\u5c5e\u6027\u7c7b\u578b",level:4},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"1.\u6dfb\u52a0\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",id:"1\u6dfb\u52a0\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u53c2\u6570",id:"\u8fd4\u56de\u53c2\u6570",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:3},{value:"2.\u4fee\u6539\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",id:"2\u4fee\u6539\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-1",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:3},{value:"3.\u5220\u9664\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",id:"3\u5220\u9664\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027",level:2},{value:"URL",id:"url-2",level:3},{value:"HTTP Method",id:"http-method-2",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-2",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-2",level:3},{value:"4.\u83b7\u53d6\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027\u5217\u8868",id:"4\u83b7\u53d6\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027\u5217\u8868",level:2},{value:"URL",id:"url-3",level:3},{value:"HTTP Method",id:"http-method-3",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-3",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-3",level:3},{value:"5.\u4fee\u6539\u8fed\u4ee3\u5c5e\u6027\u503c",id:"5\u4fee\u6539\u8fed\u4ee3\u5c5e\u6027\u503c",level:2},{value:"HTTP Method",id:"http-method-4",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-4",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-4",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-4",level:3}],m={toc:k};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sprint-field"},"Sprint field"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%A8%A1%E5%9E%8B"},"\u6a21\u578b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7"},"\u8fed\u4ee3\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7%E5%80%BC"},"\u8fed\u4ee3\u5c5e\u6027\u503c")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1%E6%B7%BB%E5%8A%A0%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7"},"1.\u6dfb\u52a0\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2%E4%BF%AE%E6%94%B9%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7"},"2.\u4fee\u6539\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3%E5%88%A0%E9%99%A4%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7"},"3.\u5220\u9664\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4%E8%8E%B7%E5%8F%96%E9%A1%B9%E7%9B%AE%E4%B8%8B%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8"},"4.\u83b7\u53d6\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5%E4%BF%AE%E6%94%B9%E8%BF%AD%E4%BB%A3%E5%B1%9E%E6%80%A7%E5%80%BC"},"5.\u4fee\u6539\u8fed\u4ee3\u5c5e\u6027\u503c"))))),(0,r.kt)("h1",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,r.kt)("h2",{id:"\u8fed\u4ee3\u5c5e\u6027"},"\u8fed\u4ee3\u5c5e\u6027"),(0,r.kt)("p",null,"sprint_field"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u503c")))),(0,r.kt)("h2",{id:"\u8fed\u4ee3\u5c5e\u6027\u503c"},"\u8fed\u4ee3\u5c5e\u6027\u503c"),(0,r.kt)("p",null,"sprint_field_value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int/string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u503c")))),(0,r.kt)("h4",{id:"\u5c5e\u6027\u7c7b\u578b"},"\u5c5e\u6027\u7c7b\u578b"),(0,r.kt)("p",null,"type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\uff0c\u503c\u662f\u5f53\u524d\u9009\u4e2d\u7684\u9009\u9879 u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"multi_line_text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u591a\u884c\u6587\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6574\u6570\uff0c\u503c = \u5b9e\u9645\u6570\u503c x 100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d6e\u70b9\u6570\uff0c\u503c = \u5411\u4e0b\u53d6\u6574(\u5b9e\u9645 x 100000)\uff0c\u5c0f\u6570\u70b9\u540e\u6709\u6548\u4f4d\u6570 5 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e5\u671f\uff0cutc \u65f6\u95f4\u6233\uff0c\u4ee5\u79d2\u4e3a\u5355")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u95f4\uff0cutc \u65f6\u95f4\u6233\uff0c\u4ee5\u79d2\u4e3a\u5355")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u5185\u6210\u5458\uff0c\u503c\u662f\u7528\u6237 uuid")))),(0,r.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6743\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"630"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u627e\u4e0d\u5230\u5bf9\u5e94\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u4e0d\u5408\u6cd5")))),(0,r.kt)("h1",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h2",{id:"1\u6dfb\u52a0\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"},"1.\u6dfb\u52a0\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields/add\n")),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_sprints"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id,\u7a0b\u5e8f\u751f\u6210\u4e0d\u9700\u8981\u586b\u5199")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u503c")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570"},"\u8fd4\u56de\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id \u7a0b\u5e8f\u751f\u6210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"server_update_stamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u66f4\u65b0\u65f6\u95f4\uff08\u5fae\u5999\uff09")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": {\n    "name": "optionsName",\n    "type": "option",\n    "options": [\n      {\n        "value": "aa"\n      },\n      {\n        "value": "bb"\n      },\n      {\n        "value": "cc"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": {\n    "uuid": "GMeL5qUm",\n    "name": "optionsName",\n    "type": "option",\n    "default_value": null,\n    "default_value_type": "default",\n    "built_in": false,\n    "options": [\n      {\n        "uuid": "85yjp9FH",\n        "value": "aa",\n        "selected": false\n      },\n      {\n        "uuid": "JEp1hct9",\n        "value": "bb",\n        "selected": false\n      },\n      {\n        "uuid": "HmVo4twR",\n        "value": "cc",\n        "selected": false\n      }\n    ],\n    "required": false,\n    "can_modify_required": false\n  },\n  "server_update_stamp": 1648720066672304\n}\n')),(0,r.kt)("h2",{id:"2\u4fee\u6539\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"},"2.\u4fee\u6539\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/update\n")),(0,r.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-1"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_sprints"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-1"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u503c")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","\xa0","\xa0","value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879\u503c")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": {\n    "uuid": "5nknReY2",\n    "name": "updatOptionsName",\n    "type": "option",\n    "options": [\n      {\n        "uuid": "EfPrwc7C",\n        "value": "aa",\n        "selected": false\n      },\n      {\n        "uuid": "WnPt1XR8",\n        "value": "bb",\n        "selected": false\n      },\n      {\n        "uuid": "JBhCLAWF",\n        "value": "cc",\n        "selected": false\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1594377519830304\n}\n')),(0,r.kt)("h2",{id:"3\u5220\u9664\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"},"3.\u5220\u9664\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027"),(0,r.kt)("p",null,"\u5220\u9664\u64cd\u4f5c\u5c06\u4f1a\u4e00\u5e76\u5220\u9664\u5df2\u6709\u8fed\u4ee3\u7684\u8be5\u9879\u5c5e\u6027\u5185\u5bb9\uff0c\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500"),(0,r.kt)("h3",{id:"url-2"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/delete\n")),(0,r.kt)("h3",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-2"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_sprints"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-2"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-2"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1565943793853952\n}\n')),(0,r.kt)("h2",{id:"4\u83b7\u53d6\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027\u5217\u8868"},"4.\u83b7\u53d6\u9879\u76ee\u4e0b\u8fed\u4ee3\u5c5e\u6027\u5217\u8868"),(0,r.kt)("h3",{id:"url-3"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint_fields\n")),(0,r.kt)("h3",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-3"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"BrowseProject"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-3"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u9879")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-3"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fields": [\n    {\n      "uuid": "SY2XZe8H",\n      "name": "\u8fed\u4ee3\u5c5e\u6027\u540d\u79f0",\n      "type": "text",\n      "options": null\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"5\u4fee\u6539\u8fed\u4ee3\u5c5e\u6027\u503c"},"5.\u4fee\u6539\u8fed\u4ee3\u5c5e\u6027\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_field/:fieldUUID/update\n")),(0,r.kt)("h3",{id:"http-method-4"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-4"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"manage_sprints"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-4"},"\u8bf7\u6c42\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field_value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ea\u9700\u8981\u4f20 value")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"},"\u8bf7\u6c42\u53c2\u6570\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field_value": {\n    "value": "newValue, option \u7c7b\u578b\u4f20\u9009\u9879\u7684 uuid"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-4"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1594378116861072\n}\n')))}N.isMDXComponent=!0}}]);