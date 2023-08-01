"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[83081],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),o=k(a),s=l,h=o["".concat(p,".").concat(s)]||o[s]||m[s]||r;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},54580:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={},i="Wiki draft",d={unversionedId:"api/wiki/draft/draft",id:"api/wiki/draft/draft",title:"Wiki draft",description:"- 1. \u83b7\u53d6\u8349\u7a3f\u5217\u8868",source:"@site/docs/api/wiki/draft/draft.md",sourceDirName:"api/wiki/draft",slug:"/api/wiki/draft/",permalink:"/open-docs/docs/next/api/wiki/draft/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Wiki online page",permalink:"/open-docs/docs/next/api/wiki/online_page/"},next:{title:"Wiki online draft",permalink:"/open-docs/docs/next/api/wiki/online_draft/"}},p={},k=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"HTTP status code \u8bf4\u660e",id:"http-status-code-\u8bf4\u660e",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"1. \u83b7\u53d6\u8349\u7a3f\u5217\u8868",id:"1-\u83b7\u53d6\u8349\u7a3f\u5217\u8868",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b",level:4},{value:"2. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5",id:"2-\u83b7\u53d6\u8349\u7a3f\u8be6\u60c5",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1",level:4},{value:"3. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5(\u8def\u7531\u4e0d\u5e26 space_uuid)",id:"3-\u83b7\u53d6\u8349\u7a3f\u8be6\u60c5\u8def\u7531\u4e0d\u5e26-space_uuid",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-2",level:4},{value:"4. \u521b\u5efa\u8349\u7a3f(space \u4e34\u65f6\u8349\u7a3f\u3001page \u9875\u9762\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)",id:"4-\u521b\u5efa\u8349\u7a3fspace-\u4e34\u65f6\u8349\u7a3fpage-\u9875\u9762\u8349\u7a3f\u9875\u9762\u590d\u5236\u4ece\u6a21\u677f\u521b\u5efa",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"5. \u4fdd\u5b58/\u53d1\u5e03\u8349\u7a3f",id:"5-\u4fdd\u5b58\u53d1\u5e03\u8349\u7a3f",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3",level:4},{value:"\u6b63\u786e\u7684\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u6b63\u786e\u7684\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"\u9519\u8bef\u7684\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u9519\u8bef\u7684\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"6. \u5220\u9664\u8349\u7a3f",id:"6-\u5220\u9664\u8349\u7a3f",level:3},{value:"URL",id:"url-5",level:4},{value:"HTTP Method",id:"http-method-5",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-5",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:4},{value:"\u8fd4\u56de json",id:"\u8fd4\u56de-json",level:4},{value:"7. \u83b7\u53d6\u8349\u7a3f\u9644\u4ef6",id:"7-\u83b7\u53d6\u8349\u7a3f\u9644\u4ef6",level:3},{value:"URL",id:"url-6",level:4},{value:"HTTP Method",id:"http-method-6",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-6",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-6",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-1",level:4},{value:"8. \u66f4\u65b0\u8349\u7a3f\u9644\u4ef6",id:"8-\u66f4\u65b0\u8349\u7a3f\u9644\u4ef6",level:3},{value:"URL",id:"url-7",level:4},{value:"HTTP Method",id:"http-method-7",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-7",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-7",level:4},{value:"Body \u793a\u4f8b",id:"body-\u793a\u4f8b",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-2",level:4},{value:"9. \u83b7\u53d6\u5206\u4eab\u9875\u9762\u5217\u8868\u7684\u8349\u7a3f\u5217\u8868",id:"9-\u83b7\u53d6\u5206\u4eab\u9875\u9762\u5217\u8868\u7684\u8349\u7a3f\u5217\u8868",level:3},{value:"URL",id:"url-8",level:4},{value:"HTTP Method",id:"http-method-8",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-8",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-8",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-8",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:4}],u={toc:k};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wiki-draft"},"Wiki draft"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E5%88%97%E8%A1%A8"},"1. \u83b7\u53d6\u8349\u7a3f\u5217\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E8%AF%A6%E6%83%85"},"2. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E8%AF%A6%E6%83%85%E8%B7%AF%E7%94%B1%E4%B8%8D%E5%B8%A6space_uuid"},"3. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5\u8def\u7531\u4e0d\u5e26 space_uuid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%88%9B%E5%BB%BA%E8%8D%89%E7%A8%BF(%E4%B8%B4%E6%97%B6%E8%8D%89%E7%A8%BF%E3%80%81%E9%A1%B5%E9%9D%A2%E8%8D%89%E7%A8%BF%E3%80%81%E9%A1%B5%E9%9D%A2%E5%A4%8D%E5%88%B6%E3%80%81%E4%BB%8E%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA)"},"4. \u521b\u5efa\u8349\u7a3f(\u4e34\u65f6\u8349\u7a3f\u3001\u9875\u9762\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E4%BF%9D%E5%AD%98/%E5%8F%91%E5%B8%83%E8%8D%89%E7%A8%BF"},"5. \u4fdd\u5b58/\u53d1\u5e03\u8349\u7a3f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-%E5%88%A0%E9%99%A4%E8%8D%89%E7%A8%BF"},"6. \u5220\u9664\u8349\u7a3f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#7-%E8%8E%B7%E5%8F%96%E8%8D%89%E7%A8%BF%E9%99%84%E4%BB%B6"},"7. \u83b7\u53d6\u8349\u7a3f\u9644\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#8-%E6%9B%B4%E6%96%B0%E8%8D%89%E7%A8%BF%E9%99%84%E4%BB%B6"},"8. \u66f4\u65b0\u8349\u7a3f\u9644\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#9-%E8%8E%B7%E5%8F%96%E5%88%86%E4%BA%AB%E9%A1%B5%E9%9D%A2%E5%88%97%E8%A1%A8%E7%9A%84%E8%8D%89%E7%A8%BF%E5%88%97%E8%A1%A8"},"9. \u83b7\u53d6\u5206\u4eab\u9875\u9762\u5217\u8868\u7684\u8349\u7a3f\u5217\u8868"))),(0,l.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,l.kt)("h3",{id:"http-status-code-\u8bf4\u660e"},"HTTP status code \u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"200"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"403"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u53d7\u9650\uff0c\u4f1a\u8fd4\u56de\u9650\u5236\u7684\u6570\u91cf LimitExceeded.Resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"404"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u627e\u5230 NotFound.Draft")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"630"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6b64\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u683c\u5f0f\u6709\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"817"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5df2\u7ecf\u5b58\u5728\u9875\u9762\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"819"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u51b2\u7a81")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"901"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5bb9\u8fc7\u957f")))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("h3",{id:"1-\u83b7\u53d6\u8349\u7a3f\u5217\u8868"},"1. \u83b7\u53d6\u8349\u7a3f\u5217\u8868"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/drafts"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/drafts \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "drafts": [\n    {\n      "uuid": "EbHDiJpk",\n      "space_uuid": "ReNYACb3",\n      "page_uuid": "5rTDW8Gn",\n      "from_version": 0,\n      "title": "\u6807\u9898",\n      "status": 2,\n      "create_time": 1626938305,\n      "updated_time": 1626938316,\n      "ref_type": 1,\n      "ref_uuid": ""\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"2-\u83b7\u53d6\u8349\u7a3f\u8be6\u60c5"},"2. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5"),(0,l.kt)("h4",{id:"url-1"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID"),(0,l.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/draft/TTo4mJgo \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "Ug8sTPzy",\n  "space_uuid": "DV1NU3Ab",\n  "page_uuid": "UyZkFDM5",\n  "from_version": -1,\n  "title": "\u6ca1\u6709\u611f\u60c5\u7684\u8349\u7a3f",\n  "content": "<p>\u5723\u8bde\u8282\u4f1a\u8ba1\u5e08\u7684\u57fa\u672c\u529f&nbsp;</p>\\n",\n  "status": 1,\n  "create_time": 1584607114,\n  "updated_time": 1584607263\n}\n')),(0,l.kt)("h3",{id:"3-\u83b7\u53d6\u8349\u7a3f\u8be6\u60c5\u8def\u7531\u4e0d\u5e26-space_uuid"},"3. \u83b7\u53d6\u8349\u7a3f\u8be6\u60c5(\u8def\u7531\u4e0d\u5e26 space_uuid)"),(0,l.kt)("h4",{id:"url-2"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/draft/:draftUUID"),(0,l.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/3pDzCwAe/space/MAJPYt6j/draft/TTo4mJgo \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-2"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "Ug8sTPzy",\n  "space_uuid": "DV1NU3Ab",\n  "page_uuid": "UyZkFDM5",\n  "from_version": -1,\n  "title": "\u6ca1\u6709\u611f\u60c5\u7684\u8349\u7a3f",\n  "content": "<p>\u5723\u8bde\u8282\u4f1a\u8ba1\u5e08\u7684\u57fa\u672c\u529f&nbsp;</p>\\n",\n  "status": 1,\n  "create_time": 1584607114,\n  "updated_time": 1584607263\n}\n')),(0,l.kt)("h3",{id:"4-\u521b\u5efa\u8349\u7a3fspace-\u4e34\u65f6\u8349\u7a3fpage-\u9875\u9762\u8349\u7a3f\u9875\u9762\u590d\u5236\u4ece\u6a21\u677f\u521b\u5efa"},"4. \u521b\u5efa\u8349\u7a3f(space \u4e34\u65f6\u8349\u7a3f\u3001page \u9875\u9762\u8349\u7a3f\u3001\u9875\u9762\u590d\u5236\u3001\u4ece\u6a21\u677f\u521b\u5efa)"),(0,l.kt)("h4",{id:"url-3"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/drafts/add"),(0,l.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"page_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"status"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[1,2]"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"1: space \u4e34\u65f6\u8349\u7a3f, 2: page \u9875\u9762\u8349\u7a3f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"copy_src_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"template,page"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"template"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u62f7\u8d1d\u6765\u6e90\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"copy_src_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u62f7\u8d1d\u5bf9\u8c61\u7684 uuid\uff0c\u4e0e copy_src_uuid \u914d\u5408\u4f7f\u7528")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa space \u4e34\u65f6\u8349\u7a3f\uff0c \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": "content",\n  "page_uuid": "UyZkFDM5", // \u7236\u8282\u70b9\u7684page uuid\n  "status": 1,\n  "title": "title"\n}\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa page \u9875\u9762\u7684\u8349\u7a3f\uff0c\u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": "content",\n  "page_uuid": "UyZkFDM5", // \bpage \u9875\u9762\u7684 uuid\n  "status": 2,\n  "title": "title"\n}\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u9875\u9762\u590d\u5236, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_uuid": "UyZkFDM5",\n  "copy_src_type": "page", // \u7c7b\u578b\u662f page\n  "copy_src_uuid": "UyZkFDM5",\n  "status": 1,\n  "title": "title" // \u65b0\u7684\u6807\u9898\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u586b\u8be5\u5b57\u6bb5\u5219\u9ed8\u8ba4\u4f7f\u7528\u88ab\u590d\u5236\u6a21\u677f\u7684\u6807\u9898\u4e3a\u65b0\u7684\u6807\u9898\n}\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6a21\u677f\u521b\u5efa, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_uuid": "string", // \u7236\u8282\u70b9\u7684page uuid\n  "copy_src_type": "template", // \u7c7b\u578b\u662ftemplate\n  "copy_src_uuid": "string",\n  "status": 1,\n  "title": "string" // \u65b0\u7684\u6807\u9898\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u586b\u8be5\u5b57\u6bb5\u5219\u9ed8\u8ba4\u4f7f\u7528\u88ab\u590d\u5236\u6a21\u677f\u7684\u6807\u9898\u4e3a\u65b0\u7684\u6807\u9898\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "TPaN4NBc",\n  "space_uuid": "KPq8SX5Z",\n  "page_uuid": "F8JoKZY2",\n  "owner_uuid": "8eyieheZ",\n  "status": 1,\n  "create_time": 1495527956\n}\n')),(0,l.kt)("h3",{id:"5-\u4fdd\u5b58\u53d1\u5e03\u8349\u7a3f"},"5. \u4fdd\u5b58/\u53d1\u5e03\u8349\u7a3f"),(0,l.kt)("h4",{id:"url-4"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/update"),(0,l.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e34\u65f6\u8349\u7a3f\u65f6,\u53ef\u4ee5\u53e6\u9009\u5176\u4ed6 space")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"page_uuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e34\u65f6\u8349\u7a3f\u65f6,\u53ef\u4ee5\u53e6\u9009\u5176\u4ed6 page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"content"),(0,l.kt)("td",{parentName:"tr",align:"left"},"T"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"is_published"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53d1\u5e03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"is_forced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f3a\u5236\u66f4\u65b0, ",(0,l.kt)("inlineCode",{parentName:"td"},"is_published")," \u4e3a true \u624d\u751f\u6548")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "XM9VHifj",\n  "space_uuid": "DV1NU3Ab",\n  "page_uuid": "4VSnJJmk",\n  "from_version": -1,\n  "title": "shjdfgkvlsbhl",\n  "content": "<h1>\u80cc\u666f</h1>\\n\\n<p>\u7528\u6237\u662f\u8c01\uff0c\u5728\u4ec0\u4e48\u573a\u666f\u4e0b\u9047\u5230\u4ec0\u4e48\u95ee\u9898\u3002\u8fd9\u4e2a\u95ee\u9898\u5728\u6570\u636e\u6837\u672c\u91cc\u7684\u8868\u73b0\u662f\u600e\u4e48\u6837\u7684\u3002</p>\\n\\n<h1>\u8fed\u4ee3\u76ee\u6807</h1>\\n\\n<p>\u4e3a\u8fed\u4ee3\u9884\u4f30\u6570\u5b57\u6307\u6807\u3002</p>\\n\\n<h1>\u9700\u6c42\u6982\u8ff0</h1>\\n\\n<p>\u63cf\u8ff0\u8fd9\u4e2a\u8fed\u4ee3\u6709\u54ea\u4e9b\u9700\u6c42\u70b9\u3002\u6bd4\u5982\uff1a</p>\\n\\n<ol>\\n\\t<li>\u7528\u6237\u548c\u5546\u54c1\u753b\u50cf\uff1a\u5b9e\u73b0\u5bf9\u7528\u6237\u548c\u5546\u54c1\u7279\u5f81\u7684\u6316\u6398\uff0c\u4e3a\u5339\u914d\u7b56\u7565\u63d0\u4f9b\u6570\u636e\u57fa\u7840</li>\\n\\t<li>&hellip;&hellip;</li>\\n\\t<li>&hellip;&hellip;</li>\\n</ol>\\n\\n<h1>\u9700\u6c42\u8be6\u8ff0</h1>\\n\\n<table style=\\"width:307.5px\\">\\n\\t<thead>\\n\\t\\t<tr>\\n\\t\\t\\t<th>&nbsp;</th>\\n\\t\\t\\t<th>\u4f18\u5148\u7ea7</th>\\n\\t\\t\\t<th>\u9700\u6c42\u63cf\u8ff0</th>\\n\\t\\t\\t<th>\u5907\u6ce8</th>\\n\\t\\t</tr>\\n\\t</thead>\\n\\t<tbody>\\n\\t\\t<tr>\\n\\t\\t\\t<td>1</td>\\n\\t\\t\\t<td>P0</td>\\n\\t\\t\\t<td>\\n\\t\\t\\t<p>\u8bb0\u5f55\u7528\u6237\u5728\u9875\u9762 A \u91cc\u7684\u70b9\u51fb\u884c\u4e3a&hellip;&hellip;</p>\\n\\t\\t\\t</td>\\n\\t\\t\\t<td>&hellip;&hellip;</td>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<td>2</td>\\n\\t\\t\\t<td>P0</td>\\n\\t\\t\\t<td>&hellip;&hellip;</td>\\n\\t\\t\\t<td>&hellip;&hellip;</td>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<td>3</td>\\n\\t\\t\\t<td>P1</td>\\n\\t\\t\\t<td>&hellip;&hellip;</td>\\n\\t\\t\\t<td>&hellip;&hellip;</td>\\n\\t\\t</tr>\\n\\t</tbody>\\n</table>\\n",\n  "status": 1,\n  "create_time": 1584608120000000,\n  "updated_time": 1584608120000000,\n  "is_published": true\n}\n')),(0,l.kt)("h4",{id:"\u6b63\u786e\u7684\u8fd4\u56de\u503c\u793a\u4f8b"},"\u6b63\u786e\u7684\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "team_uuid": "BDfDqJU7",\n  "space_uuid": "DV1NU3Ab",\n  "page_uuid": "8oNtjtGW",\n  "draft_uuid": "XM9VHifj",\n  "status": 3\n}\n')),(0,l.kt)("h4",{id:"\u9519\u8bef\u7684\u8fd4\u56de\u503c\u793a\u4f8b"},"\u9519\u8bef\u7684\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 403,\n  "errcode": "LimitExceeded.Page",\n  "exceeded_page_limit": 100,\n  "model": "Page",\n  "type": "LimitExceeded"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exceeded_page_limit"),"\u662f\u9875\u9762\u6570\u7684\u9650\u5236\u6570\u91cf"),(0,l.kt)("h3",{id:"6-\u5220\u9664\u8349\u7a3f"},"6. \u5220\u9664\u8349\u7a3f"),(0,l.kt)("h4",{id:"url-5"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/delete"),(0,l.kt)("h4",{id:"http-method-5"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-5"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de-json"},"\u8fd4\u56de json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,l.kt)("h3",{id:"7-\u83b7\u53d6\u8349\u7a3f\u9644\u4ef6"},"7. \u83b7\u53d6\u8349\u7a3f\u9644\u4ef6"),(0,l.kt)("h4",{id:"url-6"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments"),(0,l.kt)("h4",{id:"http-method-6"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-6"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-6"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de-json-1"},"\u8fd4\u56de JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attachments": [\n    {\n      "uuid": "XhL5nJ43",\n      "name": "img.jpeg",\n      "mimetype": ""\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"8-\u66f4\u65b0\u8349\u7a3f\u9644\u4ef6"},"8. \u66f4\u65b0\u8349\u7a3f\u9644\u4ef6"),(0,l.kt)("h4",{id:"url-7"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/draft/:draftUUID/attachments/update"),(0,l.kt)("h4",{id:"http-method-7"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-7"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-7"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u589e ",(0,l.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/wiki/page/#attachment-model"},"attachment"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5220\u9664 ",(0,l.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/wiki/page/#attachment-model"},"attachment"))))),(0,l.kt)("h4",{id:"body-\u793a\u4f8b"},"Body \u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "add": [\n    {\n      "uuid": "Hc5acJYi",\n      "name": "img.jpeg"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de-json-2"},"\u8fd4\u56de JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,l.kt)("h3",{id:"9-\u83b7\u53d6\u5206\u4eab\u9875\u9762\u5217\u8868\u7684\u8349\u7a3f\u5217\u8868"},"9. \u83b7\u53d6\u5206\u4eab\u9875\u9762\u5217\u8868\u7684\u8349\u7a3f\u5217\u8868"),(0,l.kt)("h4",{id:"url-8"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/share/:shareUUID/drafts"),(0,l.kt)("h4",{id:"http-method-8"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-8"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-8"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-8"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "drafts": [\n    {\n      "uuid": "3KV1Tfh2",\n      "space_uuid": "",\n      "page_uuid": "KSGQChyD",\n      "from_version": -1,\n      "title": "F2045 1 \u8349\u7a3f6",\n      "status": 1,\n      "create_time": 1570690646,\n      "updated_time": 1571279628\n    },\n    {\n      "uuid": "8hhPPKq2",\n      "space_uuid": "",\n      "page_uuid": "KSGQChyD",\n      "from_version": -1,\n      "title": "F2045 1 \u8349\u7a3f3",\n      "status": 1,\n      "create_time": 1570873284,\n      "updated_time": 1570873284\n    },\n    {\n      "uuid": "LLNkd6Up",\n      "space_uuid": "",\n      "page_uuid": "5iWSUBcx",\n      "from_version": -1,\n      "title": "F2045 2 \u8349\u7a3f1",\n      "status": 1,\n      "create_time": 1570690661,\n      "updated_time": 1570690661\n    },\n    {\n      "uuid": "Et2GgYUB",\n      "space_uuid": "",\n      "page_uuid": "KSGQChyD",\n      "from_version": -1,\n      "title": "F2045 1 \u8349\u7a3f2",\n      "status": 1,\n      "create_time": 1570690650,\n      "updated_time": 1570690650\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);