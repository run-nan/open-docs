"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[94366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>o});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=d(n),o=l,g=s["".concat(u,".").concat(o)]||s[o]||m[o]||r;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function o(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={},i="Wiki permission",p={unversionedId:"api/wiki/permission/permission",id:"version-1.x/api/wiki/permission/permission",title:"Wiki permission",description:"\u8bf4\u660e\uff1a ONES \u7cfb\u7edf\u91c7\u7528\u4e86\u4e00\u81f4\u6027\u7684\u6743\u9650\u6a21\u578b\uff0cwiki \u6743\u9650\u6a21\u578b\u53c2\u8003 ONES \u6743\u9650\u6a21\u578b",source:"@site/versioned_docs/version-1.x/api/wiki/permission/permission.md",sourceDirName:"api/wiki/permission",slug:"/api/wiki/permission/",permalink:"/docs/api/wiki/permission/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"api",previous:{title:"Wiki online draft",permalink:"/docs/api/wiki/online_draft/"},next:{title:"Wiki recyecler",permalink:"/docs/api/wiki/recyecler/"}},u={},d=[{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"1. \u83b7\u53d6 wiki \u6743\u9650",id:"1-\u83b7\u53d6-wiki-\u6743\u9650",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b",level:4},{value:"2. \u6dfb\u52a0 wiki \u6743\u9650",id:"2-\u6dfb\u52a0-wiki-\u6743\u9650",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-1",level:4},{value:"3. \u5220\u9664 wiki \u6743\u9650",id:"3-\u5220\u9664-wiki-\u6743\u9650",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u4f53\u793a\u4f8b",id:"\u8fd4\u56de\u4f53\u793a\u4f8b",level:4},{value:"4. \u83b7\u53d6 wiki \u6709\u6548\u6743\u9650",id:"4-\u83b7\u53d6-wiki-\u6709\u6548\u6743\u9650",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-2",level:4},{value:"5. \u8bbe\u7f6e\u5355\u9875\u9762\u6743\u9650",id:"5-\u8bbe\u7f6e\u5355\u9875\u9762\u6743\u9650",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:4},{value:"6. \u83b7\u53d6\u5355\u9875\u9762\u6743\u9650",id:"6-\u83b7\u53d6\u5355\u9875\u9762\u6743\u9650",level:3},{value:"URL",id:"url-5",level:4},{value:"HTTP Method",id:"http-method-5",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-5",level:4},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json",level:4},{value:"7. \u8bbe\u7f6e\u9875\u9762\u5206\u4eab\u6743\u9650",id:"7-\u8bbe\u7f6e\u9875\u9762\u5206\u4eab\u6743\u9650",level:3},{value:"URL",id:"url-6",level:4},{value:"HTTP Method",id:"http-method-6",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-6",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-3",level:4},{value:"8. \u83b7\u53d6\u9875\u9762\u5206\u4eab\u6743\u9650",id:"8-\u83b7\u53d6\u9875\u9762\u5206\u4eab\u6743\u9650",level:3},{value:"URL",id:"url-7",level:4},{value:"HTTP Method",id:"http-method-7",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-7",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:4},{value:"\u8fd4\u56de\u503c\u793a\u4f8b",id:"\u8fd4\u56de\u503c\u793a\u4f8b-4",level:4}],k={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wiki-permission"},"Wiki permission"),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a ONES \u7cfb\u7edf\u91c7\u7528\u4e86\u4e00\u81f4\u6027\u7684\u6743\u9650\u6a21\u578b\uff0cwiki \u6743\u9650\u6a21\u578b\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/wiki/permission/#%E6%9D%83%E9%99%90%E8%A7%84%E5%88%99"},"ONES \u6743\u9650\u6a21\u578b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96wiki%E6%9D%83%E9%99%90"},"1. \u83b7\u53d6 wiki \u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E6%B7%BB%E5%8A%A0wiki%E6%9D%83%E9%99%90"},"2. \u6dfb\u52a0 wiki \u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%E5%88%A0%E9%99%A4wiki%E6%9D%83%E9%99%90"},"3. \u5220\u9664 wiki \u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E8%8E%B7%E5%8F%96wiki%E6%9C%89%E6%95%88%E6%9D%83%E9%99%90"},"4. \u83b7\u53d6 wiki \u6709\u6548\u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E8%AE%BE%E7%BD%AE%E5%8D%95%E9%A1%B5%E9%9D%A2%E6%9D%83%E9%99%90"},"5. \u8bbe\u7f6e\u5355\u9875\u9762\u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-%E8%8E%B7%E5%8F%96%E5%8D%95%E9%A1%B5%E9%9D%A2%E6%9D%83%E9%99%90"},"6. \u83b7\u53d6\u5355\u9875\u9762\u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#7-%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%88%86%E4%BA%AB%E6%9D%83%E9%99%90"},"7. \u8bbe\u7f6e\u9875\u9762\u5206\u4eab\u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#8-%E8%8E%B7%E5%8F%96%E9%A1%B5%E9%9D%A2%E5%88%86%E4%BA%AB%E6%9D%83%E9%99%90"},"8. \u83b7\u53d6\u9875\u9762\u5206\u4eab\u6743\u9650"))),(0,l.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,l.kt)("h3",{id:"1-\u83b7\u53d6-wiki-\u6743\u9650"},"1. \u83b7\u53d6 wiki \u6743\u9650"),(0,l.kt)("h4",{id:"url"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules"),(0,l.kt)("h4",{id:"http-method"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"F"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[0,n)"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u7248\u672c\u53f7\u83b7\u53d6 page,\u9ed8\u8ba4\u83b7\u53d6\u6700\u8fd1\u7248\u672c")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permission_rules": [\n    {\n      "uuid": "Va23KBER",\n      "context_type": "team",\n      "context_param": {},\n      "user_domain_type": "team_owner",\n      "user_domain_param": "",\n      "permission": "administer_team",\n      "read_only": true,\n      "create_time": 1535539298,\n      "position": 0\n    },\n    {\n      "uuid": "U1SgSHf2",\n      "context_type": "team",\n      "context_param": {},\n      "user_domain_type": "single_user",\n      "user_domain_param": "C8cpoKbn",\n      "permission": "administer_team",\n      "read_only": false,\n      "create_time": 1543904554,\n      "position": 7\n    },\n    {\n      "uuid": "8FdyM4cC",\n      "context_type": "team",\n      "context_param": {},\n      "user_domain_type": "single_user",\n      "user_domain_param": "6ZpgEzkk",\n      "permission": "administer_team",\n      "read_only": false,\n      "create_time": 1545647761,\n      "position": 8\n    }\n  ],\n  "server_update_stamp": 0\n}\n')),(0,l.kt)("h3",{id:"2-\u6dfb\u52a0-wiki-\u6743\u9650"},"2. \u6dfb\u52a0 wiki \u6743\u9650"),(0,l.kt)("h4",{id:"url-1"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rules/add"),(0,l.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"json"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"space_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u7ec4 UUID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context_type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u89c4\u5219\u9002\u7528\u7684",(0,l.kt)("a",{parentName:"td",href:"/docs/api/permission/context/##%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B"},"\u4e0a\u4e0b\u6587\u7c7b\u578b"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permission"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_domain_param"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_domain_type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df\u7c7b\u578b")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permission_rule": {\n    "context_type": "space",\n    "context_param": {\n      "space_uuid": "DV1NU3Ab"\n    },\n    "permission": "view_page",\n    "user_domain_type": "single_user",\n    "user_domain_param": "3rzKDAtx"\n  }\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-1"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permission_rule": {\n    "uuid": "NUJkyHLn",\n    "context_type": "space",\n    "context_param": {\n      "space_uuid": "DV1NU3Ab"\n    },\n    "user_domain_type": "single_user",\n    "user_domain_param": "3rzKDAtx",\n    "permission": "view_page",\n    "read_only": false,\n    "create_time": 1584613289,\n    "position": 1\n  },\n  "server_update_stamp": 1584613289343728\n}\n')),(0,l.kt)("h3",{id:"3-\u5220\u9664-wiki-\u6743\u9650"},"3. \u5220\u9664 wiki \u6743\u9650"),(0,l.kt)("h4",{id:"url-2"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/permission_rule/:ruleUUID/delete"),(0,l.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u4f53\u793a\u4f8b"},"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1571297934745044\n}\n')),(0,l.kt)("h3",{id:"4-\u83b7\u53d6-wiki-\u6709\u6548\u6743\u9650"},"4. \u83b7\u53d6 wiki \u6709\u6548\u6743\u9650"),(0,l.kt)("h4",{id:"url-3"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/evaluated_permissions"),(0,l.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570-1"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-2"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "evaluated_permissions": [\n    {\n      "key": "1--:1",\n      "context_type": "team",\n      "context_param": {},\n      "permission": "administer_team"\n    },\n    {\n      "key": "1102-3xCZqxb7-:2001",\n      "context_type": "space",\n      "context_param": {\n        "space_uuid": "3xCZqxb7"\n      },\n      "permission": "manage_space"\n    }\n  ],\n  "server_update_stamp": 1584598538242784\n}\n')),(0,l.kt)("h3",{id:"5-\u8bbe\u7f6e\u5355\u9875\u9762\u6743\u9650"},"5. \u8bbe\u7f6e\u5355\u9875\u9762\u6743\u9650"),(0,l.kt)("h4",{id:"url-4"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_permissions"),(0,l.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"json"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page_encrypt_status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u52a0\u5bc6\u72b6\u6001\uff0c",(0,l.kt)("br",null),"1\uff1a\u6240\u6709\u4eba\u90fd\u80fd\u67e5\u770b\u4e0e\u7f16\u8f91\uff1b",(0,l.kt)("br",null),"2\uff1a\u4ec5\u67e5\u770b\uff0c\u6240\u6709\u4eba\u90fd\u80fd\u67e5\u770b\uff0c\u7279\u5b9a\u7528\u6237\u53ef\u7f16\u8f91\uff1b",(0,l.kt)("br",null),"3\uff1a\u52a0\u5bc6\uff0c\u53ea\u6709\u7279\u5b9a\u7528\u6237\u80fd\u67e5\u770b\u6216\u7f16\u8f91")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permission_rules"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u89c4\u5219")))),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_encrypt_status": 3,\n  "permission_rules": [\n    {\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "6ZpgEzkk"\n    },\n    {\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "3rzKDAtx"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"6-\u83b7\u53d6\u5355\u9875\u9762\u6743\u9650"},"6. \u83b7\u53d6\u5355\u9875\u9762\u6743\u9650"),(0,l.kt)("h4",{id:"url-5"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_permissions"),(0,l.kt)("h4",{id:"http-method-5"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-5"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570-2"},"\u8bf7\u6c42\u53c2\u6570"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de-json"},"\u8fd4\u56de JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_encrypt_status": 3,\n  "evaluated_permissions": [\n    {\n      "key": "1103-UyZkFDM5-:2004",\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "6ZpgEzkk"\n    },\n    {\n      "key": "1103-UyZkFDM5-:2004",\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "3rzKDAtx"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"7-\u8bbe\u7f6e\u9875\u9762\u5206\u4eab\u6743\u9650"},"7. \u8bbe\u7f6e\u9875\u9762\u5206\u4eab\u6743\u9650"),(0,l.kt)("h4",{id:"url-6"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/set_share_permissions"),(0,l.kt)("h4",{id:"http-method-6"},"HTTP Method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-6"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"json"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c\u4f8b\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page_share_permission_type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5171\u4eab\u7c7b\u578b\uff0c",(0,l.kt)("br",null),"0\uff1a\u4e0d\u5171\u4eab\uff1b",(0,l.kt)("br",null),"1\uff1a\u5171\u4eab\u7ed9\u6240\u6709\u4eba\u770b\uff1b",(0,l.kt)("br",null),"2\uff1a\u5171\u4eab\u7ed9\u6240\u6709\u4eba\u7f16\u8f91\uff1b",(0,l.kt)("br",null),"3\uff1a\u6307\u5b9a\u6210\u5458\u53ef\u4ee5\u67e5\u770b\u6216\u7f16\u8f91")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_share_sub_page"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5171\u4eab\u5b50\u9875\u9762\uff1a",(0,l.kt)("br",null),"\u9ed8\u8ba4\uff1a\u4e0d\u5171\u4eab\u5b50\u9875\u9762")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permission_rules"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u89c4\u5219")))),(0,l.kt)("p",null,"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_share_permission_type": 3,\n  "is_share_sub_page": false,\n  "permission_rules": [\n    {\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_share_edit",\n      "user_domain_type": "group",\n      "user_domain_param": "PDzSPeAM"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-3"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "team_uuid": "BDfDqJU7",\n  "space_uuid": "DV1NU3Ab",\n  "page_uuid": "UyZkFDM5",\n  "user_uuid": "6ZpgEzkk",\n  "page_share_permission_type": 3,\n  "is_share_sub_page": false,\n  "share_uuid": "3zrN7jQY"\n}\n')),(0,l.kt)("h3",{id:"8-\u83b7\u53d6\u9875\u9762\u5206\u4eab\u6743\u9650"},"8. \u83b7\u53d6\u9875\u9762\u5206\u4eab\u6743\u9650"),(0,l.kt)("h4",{id:"url-7"},"URL"),(0,l.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/page/:pageUUID/get_share_permissions"),(0,l.kt)("h4",{id:"http-method-7"},"HTTP Method"),(0,l.kt)("p",null,"GET"),(0,l.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-7"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,l.kt)("p",null,"\u662f"),(0,l.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-7"},"\u4f20\u503c\u65b9\u5f0f"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c\u793a\u4f8b-4"},"\u8fd4\u56de\u503c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "page_encrypt_status": 3,\n  "evaluated_permissions": [\n    {\n      "key": "1103-UyZkFDM5-:2004",\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "6ZpgEzkk"\n    },\n    {\n      "key": "1103-UyZkFDM5-:2004",\n      "context_type": "page",\n      "context_param": {\n        "page_uuid": "UyZkFDM5"\n      },\n      "permission": "page_edit",\n      "user_domain_type": "single_user",\n      "user_domain_param": "3rzKDAtx"\n    }\n  ]\n}\n```_\n')))}m.isMDXComponent=!0}}]);