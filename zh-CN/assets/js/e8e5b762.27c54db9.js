"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5679],{17942:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(50959);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),u=n,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(c,p(p({ref:e},m),{},{components:a})):r.createElement(c,p({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[k]="string"==typeof t?t:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13865:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(28957),n=(a(50959),a(17942));const l={},p="ONES TestCase Import/Export API",i={unversionedId:"api/testcase/import/import",id:"api/testcase/import/import",title:"ONES TestCase Import/Export API",description:"model \u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/testcase/import/import.md",sourceDirName:"api/testcase/import",slug:"/api/testcase/import/",permalink:"/open-docs/zh-CN/docs/api/testcase/import/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"api",previous:{title:"ONES TestCase Item API",permalink:"/open-docs/zh-CN/docs/api/testcase/"},next:{title:"ONES TestCase Library API",permalink:"/open-docs/zh-CN/docs/api/testcase/library/"}},d={},o=[{value:"model \u8bf4\u660e",id:"model-\u8bf4\u660e",level:2},{value:"error",id:"error",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u677f",id:"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u677f",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b",level:4},{value:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6",id:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-1",level:4},{value:"\u5bfc\u5165\u7528\u4f8b",id:"\u5bfc\u5165\u7528\u4f8b",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-2",level:4}],m={toc:o},k="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-testcase-importexport-api"},"ONES TestCase Import/Export API"),(0,n.kt)("h2",{id:"model-\u8bf4\u660e"},"model \u8bf4\u660e"),(0,n.kt)("h3",{id:"error"},"error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u66f4\u65b0\u65f6\u95f4\u6233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'"OK"'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7c7b\u578b")))),(0,n.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,n.kt)("h3",{id:"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u677f"},"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u677f"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u5bfc\u5165\u6a21\u7248\uff0c\u7528\u6237\u5728\u586b\u5199\u7528\u4f8b\u5bfc\u5165\u6587\u4ef6\u65f6\u53ef\u4ee5\u53c2\u8003\u8be5\u6a21\u7248"),(0,n.kt)("h4",{id:"url"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/download_template"),(0,n.kt)("h4",{id:"http-method"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/download_template' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nContent-Disposition: attachment;filename=\"%E6%A8%A1%E6%9D%BF.xlsx\";filename*=utf-8''%E6%A8%A1%E6%9D%BF.xlsx\nContent-Type: application/octet-stream\n...\n")),(0,n.kt)("h3",{id:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6"},"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6"),(0,n.kt)("p",null,"\u4e0a\u4f20\u7528\u4f8b xlsx \u6587\u4ef6\uff0c\u4f9b\u540e\u7eed\u5bfc\u5165\u63a5\u53e3\u4f7f\u7528"),(0,n.kt)("h4",{id:"url-1"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/upload"),(0,n.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"multipart/form-data"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"file"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u4f20\u6587\u4ef6")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"column_names"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7528\u7684\u5217\u6570\u636e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"file_hash"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u4f20\u6587\u4ef6\u7684 hash \u503c\uff0c\u4f9b\u540e\u7eed\u5bfc\u5165\u63a5\u53e3\u4f7f\u7528")))),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/upload' \\\n  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundaryxAKmbtaB0lzHERDG' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache' \\\n  -d $'------WebKitFormBoundaryxAKmbtaB0lzHERDG\\r\\nContent-Disposition: form-data; name=\"file\"; filename=\"order_system.xlsx\"\\r\\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\\r\\n\\r\\n\\r\\n------WebKitFormBoundaryxAKmbtaB0lzHERDG--\\r\\n'\n")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-1"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "column_names": [\n    "ID",\n    "primary module",\n    "secondary module",\n    "case name",\n    "priority",\n    "case type",\n    "pre-condition",\n    "describing procedures",\n    "expected result",\n    "remark",\n    "maintainer"\n  ],\n  "file_hash": "Fr3tMrDQ2jHVSwlHqTWYWt4iiY5d"\n}\n')),(0,n.kt)("h3",{id:"\u5bfc\u5165\u7528\u4f8b"},"\u5bfc\u5165\u7528\u4f8b"),(0,n.kt)("p",null,"\u5f02\u6b65\u5bfc\u5165\u7528\u4f8b\uff0c\u901a\u8fc7\u8fdb\u5ea6\u7ba1\u7406\u5668\u67e5\u8be2\u7ed3\u679c"),(0,n.kt)("h4",{id:"url-2"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/testcase/library/:libraryUUID/import"),(0,n.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mapping"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MappingPayLoad"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6620\u5c04\u914d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"file_hash"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6 hash\uff0c\u4ece\u4e4b\u524d\u7684\u4e0a\u4f20\u6587\u4ef6\u63a5\u53e3\u83b7\u53d6")))),(0,n.kt)("p",null,"MappingPayLoad"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4f8b\u6807\u9898")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"module_name_1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u4e00\u7ea7\u6a21\u5757\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"module_name_2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u4e8c\u7ea7\u6a21\u5757\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"..."),(0,n.kt)("td",{parentName:"tr",align:"left"},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:"left"},"...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"module_name_12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u5341\u4e8c\u7ea7\u7ea7\u6a21\u5757\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"condition"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u524d\u7f6e\u6761\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"step_desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u6b65\u9aa4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"step_result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9884\u671f\u7ed3\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5907\u6ce8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"priority"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f18\u5148\u7ea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"assign"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ef4\u62a4\u4eba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4f8b\u7c7b\u578b")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#error"},"error")),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST \\\n  \'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/library/G8f4GEWE/import\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP\' \\\n  -H \'Ones-User-Id: 6ZpgEzkk\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{"mapping":{"module_name_1":"primary module","module_name_2":"secondary module","name":"case name","priority":"priority","type":"case type","condition":"pre-condition","step_desc":"describing procedures","step_result":"expected result","desc":"remark","assign":"maintainer "},"file_hash":"Fr3tMrDQ2jHVSwlHqTWYWt4iiY5d"}\'\n')),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-2"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}s.isMDXComponent=!0}}]);