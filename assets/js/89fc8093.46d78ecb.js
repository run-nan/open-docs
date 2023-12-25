"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8434],{17942:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(50959);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=o(a),c=r,s=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25567:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(28957),r=(a(50959),a(17942));const l={},i="Related wiki",p={unversionedId:"api/project/related_wiki/related_wiki",id:"api/project/related_wiki/related_wiki",title:"Related wiki",description:"- \u83b7\u53d6\u7528\u6237\u53ef\u89c1\u7684\u9875\u9762\u7ec4\u5217\u8868",source:"@site/docs/api/project/related_wiki/related_wiki.md",sourceDirName:"api/project/related_wiki",slug:"/api/project/related_wiki/",permalink:"/open-docs/docs/api/project/related_wiki/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{},sidebar:"api",previous:{title:"Related task",permalink:"/open-docs/docs/api/project/related_task/"},next:{title:"Manhour",permalink:"/open-docs/docs/api/project/manhour/"}},d={},o=[{value:"\u6dfb\u52a0\u5173\u8054 wiki \u9875\u9762",id:"\u6dfb\u52a0\u5173\u8054-wiki-\u9875\u9762",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:3},{value:"\u79fb\u9664\u5173\u8054 wiki \u9875\u9762",id:"\u79fb\u9664\u5173\u8054-wiki-\u9875\u9762",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-1",level:3},{value:"\u8c03\u7528\u6743\u9650",id:"\u8c03\u7528\u6743\u9650-1",level:3},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:3},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b-1",level:3},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:3}],k={toc:o},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"related-wiki"},"Related wiki"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/open-docs/docs/api/wiki/space/#7-%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%8F%AF%E8%A7%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E7%BB%84%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u7528\u6237\u53ef\u89c1\u7684\u9875\u9762\u7ec4\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/open-docs/docs/api/wiki/space/#3-%E8%8E%B7%E5%8F%96%E9%A1%B5%E9%9D%A2%E7%BB%84%E8%AF%A6%E6%83%85"},"\u83b7\u53d6\u9875\u9762\u7ec4\u8be6\u60c5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B7%BB%E5%8A%A0%E5%85%B3%E8%81%94wiki%E9%A1%B5%E9%9D%A2"},"\u6dfb\u52a0\u5173\u8054 wiki \u9875\u9762")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A7%BB%E9%99%A4%E5%85%B3%E8%81%94wiki%E9%A1%B5%E9%9D%A2"},"\u79fb\u9664\u5173\u8054 wiki \u9875\u9762"))),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u5173\u8054-wiki-\u9875\u9762"},"\u6dfb\u52a0\u5173\u8054 wiki \u9875\u9762"),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/bind_wiki_page"),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"\u4efb\u52a1\u4fee\u6539\u6743\u9650"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"wiki \u9875\u9762\u6570\u7ec4")))),(0,r.kt)("p",null,"page"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9875\u9762 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9875\u9762 title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"position"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6392\u5e8f\u4f4d\u7f6e")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages": [\n    {\n      "uuid": "3snnvcEu",\n      "title": "\u4f1a\u8bae\u8bb0\u5f55",\n      "position": 3\n    },\n    {\n      "uuid": "FBFrDoJG",\n      "title": "\u66f4\u65b0\u65e5\u5fd7",\n      "position": 2\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h2",{id:"\u79fb\u9664\u5173\u8054-wiki-\u9875\u9762"},"\u79fb\u9664\u5173\u8054 wiki \u9875\u9762"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/unbind_wiki_page"),(0,r.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"\u8c03\u7528\u6743\u9650-1"},"\u8c03\u7528\u6743\u9650"),(0,r.kt)("p",null,"\u4efb\u52a1\u4fee\u6539\u6743\u9650"),(0,r.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h3",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"page"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9875\u9762 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9875\u9762 title")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b-1"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page": {\n    "title": "\u66f4\u65b0\u65e5\u5fd7",\n    "uuid": "FBFrDoJG"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}m.isMDXComponent=!0}}]);