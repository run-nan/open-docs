"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[43970],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=k(t,["components","mdxType","originalType","parentName"]),s=d(a),N=n,f=s["".concat(i,".").concat(N)]||s[N]||o[N]||l;return a?r.createElement(f,p(p({ref:e},m),{},{components:a})):r.createElement(f,p({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=s;var k={};for(var i in e)hasOwnProperty.call(e,i)&&(k[i]=e[i]);k.originalType=t,k.mdxType="string"==typeof t?t:n,p[1]=k;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},40148:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>k,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},p="Related task",k={unversionedId:"api/project/related_task/related_task",id:"api/project/related_task/related_task",title:"Related task",description:"- \u72b6\u6001\u7801\u8bf4\u660e",source:"@site/docs/api/project/related_task/related_task.md",sourceDirName:"api/project/related_task",slug:"/api/project/related_task/",permalink:"/open-docs/docs/next/api/project/related_task/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Role",permalink:"/open-docs/docs/next/api/project/role/"},next:{title:"Related wiki",permalink:"/open-docs/docs/next/api/project/related_wiki/"}},i={},d=[{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:2},{value:"\u6279\u91cf\u6dfb\u52a0\u5173\u8054\u5de5\u4f5c\u9879",id:"\u6279\u91cf\u6dfb\u52a0\u5173\u8054\u5de5\u4f5c\u9879",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u4f53\u793a\u4f8b",id:"\u8bf7\u6c42\u4f53\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b",level:3},{value:"\u6279\u91cf\u5220\u9664\u5173\u8054\u5de5\u4f5c\u9879",id:"\u6279\u91cf\u5220\u9664\u5173\u8054\u5de5\u4f5c\u9879",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:3},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1",level:3}],m={toc:d};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"related-task"},"Related task"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E7%A0%81%E8%AF%B4%E6%98%8E"},"\u72b6\u6001\u7801\u8bf4\u660e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E6%89%B9%E9%87%8F%E6%B7%BB%E5%8A%A0%E5%85%B3%E8%81%94%E5%B7%A5%E4%BD%9C%E9%A1%B9"},"\u6279\u91cf\u6dfb\u52a0\u5173\u8054\u5de5\u4f5c\u9879")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4%E5%85%B3%E8%81%94%E5%B7%A5%E4%BD%9C%E9%A1%B9"},"\u6279\u91cf\u5220\u9664\u5173\u8054\u5de5\u4f5c\u9879"))),(0,n.kt)("h2",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6743\u9650")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5176\u5b83\u672a\u77e5\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"610"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u627e\u4e0d\u5230\u5bf9\u5e94\u7684\u4efb\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"607"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5173\u8054\u7684\u4efb\u52a1\u65e0\u6240\u5c5e\u9879\u76ee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"608"),(0,n.kt)("td",{parentName:"tr",align:"left"},"task_uuids \u4e2d\u6709\u91cd\u590d\u7684 uuid/\u91cd\u590d\u5173\u8054")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"801"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u7684 UUID \u957f\u5ea6\u4e0d\u7b26\uff1b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"821"),(0,n.kt)("td",{parentName:"tr",align:"left"},"task \u5173\u8054\u7684\u4efb\u52a1 task_uuids \u4e2d\uff0c\u5305\u62ec\u4e86\u81ea\u8eab task \u7684 uuid")))),(0,n.kt)("h3",{id:"\u6279\u91cf\u6dfb\u52a0\u5173\u8054\u5de5\u4f5c\u9879"},"\u6279\u91cf\u6dfb\u52a0\u5173\u8054\u5de5\u4f5c\u9879"),(0,n.kt)("h4",{id:"url"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/related_tasks"),(0,n.kt)("h4",{id:"http-method"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"task_uuids"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u7684 task \u7684 UUID \u6570\u7ec4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"task_link_type_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/item/task_link_type/#task_link_type"},"\u5173\u8054\u5173\u7cfb\u7c7b\u578b")," uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_desc_type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/item/task_link_type/#task_link_type"},"\u5173\u8054\u5173\u7cfb\u7c7b\u578b")," desc")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"error_relate_tasks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]badItem"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u9519\u8bef\u5de5\u4f5c\u9879")))),(0,n.kt)("p",null,"badItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Err"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"key")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u793a\u4f8b"},"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],\n  "task_link_type_uuid": "5NDAfTqk",\n  "link_desc_type": "link_in_desc"\n}\n')),(0,n.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error_relate_tasks": []\n}\n')),(0,n.kt)("h3",{id:"\u6279\u91cf\u5220\u9664\u5173\u8054\u5de5\u4f5c\u9879"},"\u6279\u91cf\u5220\u9664\u5173\u8054\u5de5\u4f5c\u9879"),(0,n.kt)("h4",{id:"url-1"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/task/:taskUUID/delete/related_tasks"),(0,n.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h3",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"task_uuids"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u7684 task \u7684 UUID \u6570\u7ec4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"task_link_type_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/item/task_link_type/#task_link_type"},"\u5173\u8054\u5173\u7cfb\u7c7b\u578b")," uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_desc_type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"T"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/open-docs/docs/next/api/item/task_link_type/#task_link_type"},"\u5173\u8054\u5173\u7cfb\u7c7b\u578b")," desc")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"error_relate_tasks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]badItem"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5173\u8054\u9519\u8bef\u5de5\u4f5c\u9879")))),(0,n.kt)("p",null,"badItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Err"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"key")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task_uuids": ["FyZoT7nur9MLvjM2", "6ZpgEzkkIrwXjPjq"],\n  "task_link_type_uuid": "5NDAfTqk",\n  "link_desc_type": "link_in_desc"\n}\n')),(0,n.kt)("h3",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b-1"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error_relate_tasks": []\n}\n')))}o.isMDXComponent=!0}}]);