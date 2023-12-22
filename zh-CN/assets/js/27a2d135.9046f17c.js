"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[312],{17942:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(50959);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),d=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(k.Provider,{value:e},t.children)},N="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=d(a),o=r,u=N["".concat(k,".").concat(o)]||N[o]||g[o]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p[N]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},13732:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(28957),r=(a(50959),a(17942));const l={},i="wiki \u534f\u540c\u9875\u9762",p={unversionedId:"api/wiki/online_page/online_page",id:"api/wiki/online_page/online_page",title:"wiki \u534f\u540c\u9875\u9762",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/wiki/online_page/online_page.md",sourceDirName:"api/wiki/online_page",slug:"/api/wiki/online_page/",permalink:"/open-docs/zh-CN/docs/api/wiki/online_page/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"api",previous:{title:"wiki \u9875\u9762",permalink:"/open-docs/zh-CN/docs/api/wiki/page/"},next:{title:"wiki \u8349\u7a3f",permalink:"/open-docs/zh-CN/docs/api/wiki/draft/"}},k={},d=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u521b\u5efa\u534f\u540c\u9875\u9762",id:"\u521b\u5efa\u534f\u540c\u9875\u9762",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u54cd\u5e94\u8bf4\u660e",id:"\u54cd\u5e94\u8bf4\u660e",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"\u83b7\u53d6\u9875\u9762 Token",id:"\u83b7\u53d6\u9875\u9762-token",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP METHOD",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u9646",id:"\u662f\u5426\u9700\u8981\u767b\u9646",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:4},{value:"\u83b7\u53d6\u9875\u9762\u6b63\u6587",id:"\u83b7\u53d6\u9875\u9762\u6b63\u6587",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP METHOD",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u9646",id:"\u662f\u5426\u9700\u8981\u767b\u9646-1",level:4},{value:"\u54cd\u5e94\u8bf4\u660e",id:"\u54cd\u5e94\u8bf4\u660e-1",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-2",level:4},{value:"\u53d1\u5e03\u9875\u9762",id:"\u53d1\u5e03\u9875\u9762",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP METHOD",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u9646",id:"\u662f\u5426\u9700\u8981\u767b\u9646-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u54cd\u5e94\u8bf4\u660e",id:"\u54cd\u5e94\u8bf4\u660e-2",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-3",level:4},{value:"\u66f4\u65b0\u6807\u9898",id:"\u66f4\u65b0\u6807\u9898",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP METHOD",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u9646",id:"\u662f\u5426\u9700\u8981\u767b\u9646-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u54cd\u5e94\u8bf4\u660e",id:"\u54cd\u5e94\u8bf4\u660e-3",level:4},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-4",level:4},{value:"\u6062\u590d\u5386\u53f2\u7248\u672c",id:"\u6062\u590d\u5386\u53f2\u7248\u672c",level:3},{value:"URL",id:"url-5",level:4},{value:"HTTP METHOD",id:"http-method-5",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u9646",id:"\u662f\u5426\u9700\u8981\u767b\u9646-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u54cd\u5e94\u8bf4\u660e",id:"\u54cd\u5e94\u8bf4\u660e-4",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-5",level:4}],m={toc:d},N="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(N,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wiki-\u534f\u540c\u9875\u9762"},"wiki \u534f\u540c\u9875\u9762"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E7%A0%81%E8%AF%B4%E6%98%8E"},"\u72b6\u6001\u7801\u8bf4\u660e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E5%8D%8F%E5%90%8C%E9%A1%B5%E9%9D%A2"},"\u521b\u5efa\u534f\u540c\u9875\u9762")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%3C%E8%8E%B7%E5%8F%96%E9%A1%B5%E9%9D%A2Token%3E"},"\u83b7\u53d6\u9875\u9762 Token")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E9%A1%B5%E9%9D%A2%E6%AD%A3%E6%96%87"},"\u83b7\u53d6\u9875\u9762\u6b63\u6587")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%8F%91%E5%B8%83%E9%A1%B5%E9%9D%A2"},"\u53d1\u5e03\u9875\u9762")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%9B%B4%E6%96%B0%E6%A0%87%E9%A2%98"},"\u66f4\u65b0\u6807\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%81%A2%E5%A4%8D%E5%8E%86%E5%8F%B2%E7%89%88%E6%9C%AC"},"\u6062\u590d\u5386\u53f2\u7248\u672c"))))),(0,r.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u53d7\u9650\uff0c\u4f1a\u8fd4\u56de\u9650\u5236\u7684\u6570\u91cf LimitExceeded.Resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u627e\u5230 NotFound.Draft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"630"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u6b64\u9875\u9762")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u683c\u5f0f\u6709\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"817"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5df2\u7ecf\u5b58\u5728\u9875\u9762\u9875\u9762")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"819"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c\u51b2\u7a81")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"901"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5bb9\u8fc7\u957f")))),(0,r.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h3",{id:"\u521b\u5efa\u534f\u540c\u9875\u9762"},"\u521b\u5efa\u534f\u540c\u9875\u9762"),(0,r.kt)("h4",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_pages/add"),(0,r.kt)("h4",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"copy_src_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'template,page,""'),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u62f7\u8d1d\u6765\u6e90\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"copy_src_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u62f7\u8d1d\u5bf9\u8c61\u7684 uuid\uff0c\u4e0e copy_src_uuid \u914d\u5408\u4f7f\u7528")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e34\u65f6\u9875\u9762\uff0c \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // page uuid of the parent node\n  "title": "title",\n  "copy_src_type": "",\n  "copy_src_uuid": ""\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u9875\u9762\u590d\u5236, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // page uuid of the parent node\n  "title": "title",\n  "copy_src_type": "page",\n  "copy_src_uuid": "TPaN4NBa"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6a21\u677f\u521b\u5efa, \u8bf7\u6c42\u5185\u5bb9\u4e3a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "space_uuid": "LLNkd6Up",\n  "parent_uuid": "UyZkFDM5", // page uuid of the parent node\n  "title": "title",\n  "copy_src_type": "template",\n  "copy_src_uuid": "TPaN4NBa"\n}\n')),(0,r.kt)("h4",{id:"\u54cd\u5e94\u8bf4\u660e"},"\u54cd\u5e94\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"space_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u95f4 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u62e5\u6709\u8005 uid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parent_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7236\u9875\u9762 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updated_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EncryptStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u5bc6\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u5173\u8054\u7c7b\u578b 1 \u9ed8\u8ba4 wiki page \u7c7b\u578b\uff0c2 wps word\uff0c3 wps excel\uff0c4 wps ppt\uff0c5 confluence \u5bfc\u5165\u8f6c\u6362\u540e\u7684 page\uff0c6 wiz \u591a\u4eba\u5b9e\u65f6\u7f16\u8f91")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9875\u9762\u5173\u8054 uuid")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "7i6oLRLF",\n  "team_uuid": "RDjYMhKq",\n  "space_uuid": "QdmnDT57",\n  "owner_uuid": "UrCAf4hi",\n  "title": "title",\n  "parent_uuid": "JUUw13TT",\n  "status": 1,\n  "create_time": 1643249000,\n  "updated_time": 1643249000,\n  "EncryptStatus": 1,\n  "ref_type": 6,\n  "ref_uuid": "MykkHt7m"\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u9875\u9762-token"},"\u83b7\u53d6\u9875\u9762 Token"),(0,r.kt)("h4",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/token?action=:action"),(0,r.kt)("h4",{id:"http-method-1"},"HTTP METHOD"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u9646"},"\u662f\u5426\u9700\u8981\u767b\u9646"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"QUERY_STRING"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"edit, browse"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"edit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u679a\u4e3e")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/token?action=edit \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw"\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u9875\u9762\u6b63\u6587"},"\u83b7\u53d6\u9875\u9762\u6b63\u6587"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/content"),(0,r.kt)("h4",{id:"http-method-2"},"HTTP METHOD"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u9646-1"},"\u662f\u5426\u9700\u8981\u767b\u9646"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u54cd\u5e94\u8bf4\u660e-1"},"\u54cd\u5e94\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"latest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u540e\u4fee\u6539\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"online_users_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u7ebf\u7528\u6237\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u8005 uuid")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-1"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/content \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-2"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": "",\n  "token": "W.3HQK1toUwumd1tUhvPufkdiPp5qLm3uKOjAvzWrh9zr4ZQoncOBiR7PqGH-9tBfFiAwQd09Bpdh8xK8Sjw",\n  "latest": 1642593507711,\n  "version": 1642593508711,\n  "online_users_count": 100,\n  "owner_uuid": "1204jhk9"\n}\n')),(0,r.kt)("h3",{id:"\u53d1\u5e03\u9875\u9762"},"\u53d1\u5e03\u9875\u9762"),(0,r.kt)("h4",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/publish"),(0,r.kt)("h4",{id:"http-method-3"},"HTTP METHOD"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u9646-2"},"\u662f\u5426\u9700\u8981\u767b\u9646"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"\u54cd\u5e94\u8bf4\u660e-2"},"\u54cd\u5e94\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u679c\u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7c7b\u578b")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-2"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/MmjszXgX/publish \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n  -d '{\"title\":\"title\"}'\n")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "title"\n}\n')),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-3"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h3",{id:"\u66f4\u65b0\u6807\u9898"},"\u66f4\u65b0\u6807\u9898"),(0,r.kt)("h4",{id:"url-4"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/update_title"),(0,r.kt)("h4",{id:"http-method-4"},"HTTP METHOD"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u9646-3"},"\u662f\u5426\u9700\u8981\u767b\u9646"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"\u54cd\u5e94\u8bf4\u660e-3"},"\u54cd\u5e94\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u679c\u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7c7b\u578b")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b-3"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/SwkBtFNA/update_title \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n  -d '{\"title\":\"title\"}'\n\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-4"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,r.kt)("h3",{id:"\u6062\u590d\u5386\u53f2\u7248\u672c"},"\u6062\u590d\u5386\u53f2\u7248\u672c"),(0,r.kt)("h4",{id:"url-5"},"URL"),(0,r.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/online_page/:pageUUID/revert/:version"),(0,r.kt)("h4",{id:"http-method-5"},"HTTP METHOD"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u9646-4"},"\u662f\u5426\u9700\u8981\u767b\u9646"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"Created":1643149369180}'),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"\u54cd\u5e94\u8bf4\u660e-4"},"\u54cd\u5e94\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u679c\u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7c7b\u578b")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n https://your-host-name/wiki/api/wiki/team/UjN1PnmK/online_page/XoKhewh7/revert/1663244218963 \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n  -d '{\n    \"version\":{\"Created\":1663244218963},\n    \"title\":\"todo: remove this param\"\n  }'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-5"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}g.isMDXComponent=!0}}]);