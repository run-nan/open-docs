"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[2743],{17942:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var l=a(50959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=l.createContext({}),o=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return l.createElement(d.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=o(a),m=n,s=k["".concat(d,".").concat(m)]||k[m]||c[m]||r;return a?l.createElement(s,i(i({ref:t},u),{},{components:a})):l.createElement(s,i({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=a(28957),n=(a(50959),a(17942));const r={},i="Wiki recyecler",p={unversionedId:"api/wiki/recyecler/recyecler",id:"api/wiki/recyecler/recyecler",title:"Wiki recyecler",description:"- 1. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5",source:"@site/docs/api/wiki/recyecler/recyecler.md",sourceDirName:"api/wiki/recyecler",slug:"/api/wiki/recyecler/",permalink:"/open-docs/docs/api/wiki/recyecler/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{},sidebar:"api",previous:{title:"Wiki permission",permalink:"/open-docs/docs/api/wiki/permission/"},next:{title:"TestCase",permalink:"/open-docs/docs/api/testcase/"}},d={},o=[{value:"errcode \u8bf4\u660e",id:"errcode-\u8bf4\u660e",level:2},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"1. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5",id:"1-\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json",level:4},{value:"2. \u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",id:"2-\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-1",level:4},{value:"3. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868",id:"3-\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-2",level:4},{value:"4. \u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",id:"4-\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"body \u793a\u4f8b",id:"body-\u793a\u4f8b",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-3",level:4},{value:"5. \u6e05\u7a7a\u56de\u6536\u7ad9",id:"5-\u6e05\u7a7a\u56de\u6536\u7ad9",level:3},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8fd4\u56de JSON",id:"\u8fd4\u56de-json-4",level:4}],u={toc:o},k="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wiki-recyecler"},"Wiki recyecler"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%AF%A6%E6%83%85"},"1. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-%E5%88%A0%E9%99%A4%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2"},"2. \u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-%E8%8E%B7%E5%8F%96%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2%E5%88%97%E8%A1%A8"},"3. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-%E6%81%A2%E5%A4%8D%E5%9B%9E%E6%94%B6%E7%AB%99%E5%86%85%E7%9A%84%E9%A1%B5%E9%9D%A2"},"4. \u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#5-%E6%B8%85%E7%A9%BA%E5%9B%9E%E6%94%B6%E7%AB%99"},"5. \u6e05\u7a7a\u56de\u6536\u7ad9"))),(0,n.kt)("h2",{id:"errcode-\u8bf4\u660e"},"errcode \u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ConstraintViolation.DestinationInvalid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f85\u6062\u590d page \u7684\u539f\u8def\u5f84\u4e0d\u5408\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NotFound.Page"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230 Page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NotFound.PageVersion"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230 PageVersion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NotFound.Draft"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u8349\u7a3f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NotFound.Message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u6d88\u606f(\u4e00\u822c\u4e0d\u4f1a\u51fa\u73b0)")))),(0,n.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,n.kt)("h3",{id:"1-\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5"},"1. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u8be6\u60c5"),(0,n.kt)("h4",{id:"url"},"URL"),(0,n.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID"),(0,n.kt)("h4",{id:"http-method"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de-json"},"\u8fd4\u56de JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "PZwFcWei",\n  "space_uuid": "ReNYACb3",\n  "owner_uuid": "9uaNjXTJ",\n  "title": "\u8fdb\u53bb\u56de\u6536\u7ad9",\n  "content": "<p>\u6211\u8981\u53bb\u56de\u6536\u7ad9</p>\\n",\n  "operator_uuid": "9uaNjXTJ",\n  "operate_time": 1626946365743522,\n  "ref_type": 1,\n  "ref_uuid": ""\n}\n')),(0,n.kt)("h3",{id:"2-\u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"},"2. \u5220\u9664\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"),(0,n.kt)("h4",{id:"url-1"},"URL"),(0,n.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/delete"),(0,n.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de-json-1"},"\u8fd4\u56de JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,n.kt)("h3",{id:"3-\u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868"},"3. \u83b7\u53d6\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762\u5217\u8868"),(0,n.kt)("h4",{id:"url-2"},"URL"),(0,n.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_pages"),(0,n.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de-json-2"},"\u8fd4\u56de JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"JSON \u952e\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"deleted_pages"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"deleted_pages")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages": [\n    {\n      "uuid": "PZwFcWei",\n      "space_uuid": "ReNYACb3",\n      "title": "\u8fdb\u53bb\u56de\u6536\u7ad9",\n      "parent_uuid": "2FEdnsbk",\n      "encrypt_status": 0,\n      "evaluated_permissions": null,\n      "is_can_edit": false,\n      "ref_type": 1,\n      "ref_uuid": ""\n    },\n    {\n      "uuid": "2FEdnsbk",\n      "space_uuid": "ReNYACb3",\n      "title": "\u56de\u6536\u7ad9",\n      "parent_uuid": "",\n      "encrypt_status": 0,\n      "evaluated_permissions": null,\n      "is_can_edit": false,\n      "ref_type": 1,\n      "ref_uuid": ""\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"4-\u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"},"4. \u6062\u590d\u56de\u6536\u7ad9\u5185\u7684\u9875\u9762"),(0,n.kt)("h4",{id:"url-3"},"URL"),(0,n.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/deleted_page/:pageUUID/restore"),(0,n.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"new_space_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"F"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u81f3\u65b0\u7684 space \u7684 uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"new_parent_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"F"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6062\u590d\u81f3\u65b0\u7684\u9875\u9762\u7684 parent_uuid")))),(0,n.kt)("h4",{id:"body-\u793a\u4f8b"},"body \u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "new_space_uuid": "",\n  "new_parent_uuid": ""\n}\n')),(0,n.kt)("h4",{id:"\u8fd4\u56de-json-3"},"\u8fd4\u56de JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,n.kt)("h3",{id:"5-\u6e05\u7a7a\u56de\u6536\u7ad9"},"5. \u6e05\u7a7a\u56de\u6536\u7ad9"),(0,n.kt)("h4",{id:"url-4"},"URL"),(0,n.kt)("p",null,"https://your-host-name/wiki/api/wiki/team/:teamUUID/space/:spaceUUID/delete_all_pages"),(0,n.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-4"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de-json-4"},"\u8fd4\u56de JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')))}c.isMDXComponent=!0}}]);