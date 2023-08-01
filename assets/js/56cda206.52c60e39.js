"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:2},i="\u63a5\u53e3\u6ce8\u518c\u4e0e\u52ab\u6301",o={unversionedId:"abilities/api/registration&hijacking",id:"version-0.x/abilities/api/registration&hijacking",title:"\u63a5\u53e3\u6ce8\u518c\u4e0e\u52ab\u6301",description:"\u80fd\u529b\u63cf\u8ff0",source:"@site/versioned_docs/version-0.x/abilities/api/registration&hijacking.md",sourceDirName:"abilities/api",slug:"/abilities/api/registration&hijacking",permalink:"/open-docs/docs/0.x/abilities/api/registration&hijacking",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"abilities",previous:{title:"\u63a5\u53e3\u8bbf\u95ee",permalink:"/open-docs/docs/0.x/abilities/api/Interface-bility"},next:{title:"Mutation \u4e8b\u4ef6\u52ab\u6301",permalink:"/open-docs/docs/0.x/abilities/api/mutation"}},s={},p=[{value:"\u80fd\u529b\u63cf\u8ff0",id:"\u80fd\u529b\u63cf\u8ff0",level:2},{value:"\u80fd\u529b\u4f7f\u7528",id:"\u80fd\u529b\u4f7f\u7528",level:2},{value:"\u63a5\u53e3\u7c7b\u578b\u8bf4\u660e",id:"\u63a5\u53e3\u7c7b\u578b\u8bf4\u660e",level:3},{value:"1\u3001addition(\u63d2\u4ef6\u81ea\u8eab\u5b9e\u73b0\u7684\u63a5\u53e3)",id:"1addition\u63d2\u4ef6\u81ea\u8eab\u5b9e\u73b0\u7684\u63a5\u53e3",level:4},{value:"2\u3001replace(\u63d2\u4ef6\u66ff\u6362\u6807\u54c1\u63a5\u53e3)",id:"2replace\u63d2\u4ef6\u66ff\u6362\u6807\u54c1\u63a5\u53e3",level:4},{value:"3\u3001prefix(\u63d2\u4ef6\u524d\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3)",id:"3prefix\u63d2\u4ef6\u524d\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3",level:4},{value:"4\u3001suffix(\u63d2\u4ef6\u540e\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3)",id:"4suffix\u63d2\u4ef6\u540e\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3",level:4},{value:"5\u3001external(team \u7ea7\u522b\u7684\u65b0\u589e\u63a5\u53e3)",id:"5externalteam-\u7ea7\u522b\u7684\u65b0\u589e\u63a5\u53e3",level:3},{value:"\u80fd\u529b\u58f0\u660e",id:"\u80fd\u529b\u58f0\u660e",level:3},{value:"\u8c03\u7528\u65b9\u6cd5",id:"\u8c03\u7528\u65b9\u6cd5",level:3},{value:"\u5b9e\u73b0\u8fc7\u7a0b",id:"\u5b9e\u73b0\u8fc7\u7a0b",level:3},{value:"\u8bf7\u6c42\u8fc7\u7a0b",id:"\u8bf7\u6c42\u8fc7\u7a0b",level:3},{value:"\u8bf7\u6c42\u63d2\u4ef6\u6ce8\u518c\u7684\u63a5\u53e3",id:"\u8bf7\u6c42\u63d2\u4ef6\u6ce8\u518c\u7684\u63a5\u53e3",level:5},{value:"\u8bf7\u6c42\u63d2\u4ef6\u52ab\u6301\u7684\u63a5\u53e3",id:"\u8bf7\u6c42\u63d2\u4ef6\u52ab\u6301\u7684\u63a5\u53e3",level:5},{value:"\u8bf7\u6c42\u5934\u8bf4\u660e",id:"\u8bf7\u6c42\u5934\u8bf4\u660e",level:3},{value:"\u63a5\u53e3\u52ab\u6301\u793a\u4f8b\u63d2\u4ef6",id:"\u63a5\u53e3\u52ab\u6301\u793a\u4f8b\u63d2\u4ef6",level:3},{value:"FAQ",id:"faq",level:3}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a5\u53e3\u6ce8\u518c\u4e0e\u52ab\u6301"},"\u63a5\u53e3\u6ce8\u518c\u4e0e\u52ab\u6301"),(0,r.kt)("h2",{id:"\u80fd\u529b\u63cf\u8ff0"},"\u80fd\u529b\u63cf\u8ff0"),(0,r.kt)("p",null,"\u200b \u63d2\u4ef6\u53ef\u4ee5\u52ab\u6301\u6240\u6709 project \u5bf9\u5916\u63d0\u4f9b\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u652f\u6301\u524d\u7f6e/\u540e\u7f6e\u65b9\u5f0f\uff1b \u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u65b0\u7684\u63a5\u53e3\uff0c\u652f\u6301\u65b0\u7684\u63d2\u4ef6\u4e13\u7528\u7684\u5185\u90e8\u63a5\u53e3\u6216\u5916\u90e8\u63a5\u53e3\uff1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u8c13\u524d\u7f6e\u52ab\u6301\uff0c\u662f\u6307\u5f53\u8bf7\u6c42\u8fdb\u5165\u6807\u51c6\u7cfb\u7edf\u65f6\uff0c\u672a\u88ab\u5904\u7406\u524d\u5c31\u88ab\u8f6c\u53d1\u5230\u63d2\u4ef6\uff0c\u7531\u63d2\u4ef6\u5bf9\u8bf7\u6c42\u8fdb\u884c\u4fee\u6539\u540e\uff0c\u56de\u4f20\u7ed9\u6807\u51c6\u7cfb\u7edf\u5e76\u7ee7\u7eed\u6267\u884c\u3002\u4e00\u822c\u7528\u4e8e\u4fee\u6539\u8bf7\u6c42\u7684\u53c2\u6570\uff0c\u6216\u68c0\u67e5\u8bf7\u6c42\u662f\u5426\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u8c13\u540e\u7f6e\u52ab\u6301\uff0c\u662f\u6307\u5f53\u8bf7\u6c42\u5728\u6807\u51c6\u7cfb\u7edf\u5b8c\u6210\u5904\u7406\u540e\uff0c\u5c06\u4f1a\u88ab\u4f20\u9012\u7ed9\u63d2\u4ef6\uff0c\u7531\u63d2\u4ef6\u5bf9\u9f50\u8fdb\u884c\u5185\u5bb9\u8fdb\u884c\u4fee\u6539\u540e\u518d\u56de\u4f20\u7ed9\u6807\u51c6\u7cfb\u7edf\uff0c\u5e76\u8fd4\u56de\u7ed9\u8bf7\u6c42\u65b9\u3002\u4e00\u822c\u7528\u4e8e\u5bf9\u5e94\u7b54\u5185\u5bb9\u8fdb\u884c\u52a0\u5de5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53e6\u5916\uff0c\u63d2\u4ef6\u53ef\u4ee5\u201d\u66ff\u6362\u201c\u6389\u73b0\u6709\u7cfb\u7edf\u7684\u67d0\u4e2a\u63a5\u53e3\uff0c\u8ba9\u63d2\u4ef6\u80fd\u591f\u5bf9\u73b0\u6709\u7cfb\u7edf\u7684\u67d0\u4e2a\u8bf7\u6c42\u8fdb\u884c\u5b8c\u5168\u7684\u81ea\u5b9a\u4e49\u5904\u7406\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u52ab\u6301\u548c\u66ff\u6362\u90fd\u662f\u6bd4\u8f83\u5e95\u5c42\u7684\u64cd\u4f5c\uff0c\u53ef\u80fd\u5bf9\u7cfb\u7edf\u529f\u80fd\u4ea7\u751f\u672a\u77e5\u98ce\u9669\u3002\u540c\u65f6\uff0c\u76ee\u524d\u5bf9\u67d0\u4e2a\u63a5\u53e3\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u5b83\u8fdb\u884c\u52ab\u6301\u6216\u66ff\u6362\u3002\u591a\u4e2a\u63d2\u4ef6\u5904\u7406\u540c\u4e00\u4e2a\u63a5\u53e3\u4f1a\u5b58\u5728\u51b2\u7a81\u3002"),(0,r.kt)("p",null,"\u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u65b0\u7684\u63a5\u53e3\uff0c\u8fd9\u4e9b\u63a5\u53e3\u80fd\u591f\u50cf\u6b63\u5e38\u7684\u6807\u51c6\u7cfb\u7edf\u63a5\u53e3\u4e00\u6837\u88ab\u8c03\u7528\uff0c\u5982\u679c\u8def\u7531\u4ee5/team/:teamUUID \u5f00\u5934\uff0c\u5f53\u63d2\u4ef6\u5728\u67d0\u4e2a\u56e2\u961f\u5b89\u88c5\u65f6\uff0c\u53ef\u901a\u8fc7\u8bf7\u6c42 ",(0,r.kt)("strong",{parentName:"p"},'"/team/:teamUUID(\u56e2\u961f\u7684 uuid\uff09/xxx"')," \u8bbf\u95ee\u8def\u7531\u7ed1\u5b9a\u7684\u63d2\u4ef6\u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"\u80fd\u529b\u4f7f\u7528"},"\u80fd\u529b\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u63a5\u53e3\u7c7b\u578b\u8bf4\u660e"},"\u63a5\u53e3\u7c7b\u578b\u8bf4\u660e"),(0,r.kt)("h4",{id:"1addition\u63d2\u4ef6\u81ea\u8eab\u5b9e\u73b0\u7684\u63a5\u53e3"},"1\u3001addition(\u63d2\u4ef6\u81ea\u8eab\u5b9e\u73b0\u7684\u63a5\u53e3)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(58350).Z,width:"730",height:"340"})),(0,r.kt)("h4",{id:"2replace\u63d2\u4ef6\u66ff\u6362\u6807\u54c1\u63a5\u53e3"},"2\u3001replace(\u63d2\u4ef6\u66ff\u6362\u6807\u54c1\u63a5\u53e3)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(84082).Z,width:"730",height:"340"})),(0,r.kt)("p",null,"\u8fd9\u4e2a\u8def\u7531\u8fc7\u7a0b\u548c\u4e0a\u9762\u662f\u65b0\u5efa\u4e00\u6837\u7684\u3002"),(0,r.kt)("p",null,"\u26a0\ufe0f \u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u63d2\u4ef6\u8fd8\u9700\u8981\u8bf7\u6c42\u6807\u54c1\u88ab\u66ff\u6362\u7684\u63a5\u53e3\uff0c\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e2d\u5e26\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"headers: { 'Replace': \"replace\", }\n")),(0,r.kt)("h4",{id:"3prefix\u63d2\u4ef6\u524d\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3"},"3\u3001prefix(\u63d2\u4ef6\u524d\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55543).Z,width:"729",height:"421"})),(0,r.kt)("h4",{id:"4suffix\u63d2\u4ef6\u540e\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3"},"4\u3001suffix(\u63d2\u4ef6\u540e\u7f6e\u62e6\u622a\u6807\u54c1\u63a5\u53e3)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(31070).Z,width:"728",height:"353"})),(0,r.kt)("h3",{id:"5externalteam-\u7ea7\u522b\u7684\u65b0\u589e\u63a5\u53e3"},"5\u3001external(team \u7ea7\u522b\u7684\u65b0\u589e\u63a5\u53e3)"),(0,r.kt)("p",null,"external \u7684\u65b0\u589e\u63a5\u53e3\u5fc5\u987b\u4ee5 /team/:teamUUID \u5f00\u5934\uff0c\u5f53\u63d2\u4ef6\u5728\u67d0\u4e2a\u56e2\u961f\u6309\u7167\u65f6\uff0c\u53ef\u901a\u8fc7\u8bf7\u6c42/team/:teamUUID/xxx \u8bbf\u95ee\u8def\u7531\u7ed1\u5b9a\u7684\u63d2\u4ef6\u51fd\u6570\u3002"),(0,r.kt)("h3",{id:"\u80fd\u529b\u58f0\u660e"},"\u80fd\u529b\u58f0\u660e"),(0,r.kt)("p",null,"\u200b ",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u6ce8\u518c"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"addition"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"external"),"\u90fd\u53ef\u4ee5\u65b0\u589e\u63a5\u53e3\uff0c\u5176\u4e2d addition \u662f\u63d2\u4ef6\u7ea7\u522b\u7684\u63a5\u53e3\uff0c\u800c external \u662f\u56e2\u961f\u7ea7\u522b\u7684\u63a5\u53e3\uff0cexternal \u7c7b\u578b\u7684\u63a5\u53e3\u6ce8\u518c\u540e\uff0c\u5bf9\u5176\u6ce8\u518c\u7684\u63a5\u53e3\u53d1\u8d77\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u9700\u8981\u5728 url \u524d\u62fc\u63a5",(0,r.kt)("strong",{parentName:"p"},"/team/:teamUUID/","*","*"),"\uff0c","*","*","\u53ef\u4ee5\u901a\u8fc7\u53c2\u8003\u4e0b\u8ff0\u5185\u5bb9\u8fdb\u884c\u4e86\u89e3\uff0c"),(0,r.kt)("p",null,"\u5728 plugin.yaml \u4e2d\u58f0\u660e\u65b0\u6ce8\u518c\u7684\u63a5\u53e3\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apis:\n    - type: addition         //\u63a5\u53e3\u7c7b\u578b\uff1aaddition:\u65b0\u589e\n    methods:                 //\u63a5\u53e3\u8bf7\u6c42\u65b9\u5f0f\n      - POST\n    url: /hello              //\u81ea\u5b9a\u4e49url\n    function: hello          //\u540d\u79f0\u4e0e\u4ee3\u7801\u91cc\u7684\u51fd\u6570\u540d\u4fdd\u6301\u4e00\u81f4\n\n    - type: external         //external\u65b0\u589e(\u56e2\u961f\u7ea7\u522b\u7684\u63a5\u53e3)\n    methods:\n      - POST\n    url: /team/:teamUUID/hello1\n    function: hello1\n")),(0,r.kt)("p",null,"\u200b ",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u52ab\u6301"),"\uff0c"),(0,r.kt)("p",null,"\u5728 plugin.yaml \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apis:\n    - type: replace             //\u63a5\u53e3\u7c7b\u578b\uff1a replace:\u66ff\u6362 prefix:\u524d\u7f6e suffix:\u540e\u7f6e\n    methods:                    //\u63a5\u53e3\u8bf7\u6c42\u65b9\u5f0f\n      - GET\n    url: /users/me              //\u6807\u54c1url\n    function: jackFunc          //\u540d\u79f0\u4e0e\u4ee3\u7801\u91cc\u7684\u51fd\u6570\u540d\u4fdd\u6301\u4e00\u81f4\n\n")),(0,r.kt)("h3",{id:"\u8c03\u7528\u65b9\u6cd5"},"\u8c03\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"backend/src/index.ts"),"\u6587\u4ef6\u4e0b\u7f16\u5199\u4e0e apis \u914d\u7f6e\u7684\u51fd\u6570\u65b9\u6cd5\u4f53\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Logger } from '@ones-op/node-logger' //\u9700\u8981\u5bfc\u5165\u7684\u4f9d\u8d56\u4f9d\u8d56\u5305\nimport { fetchHttp, fetchONES } from '@ones-op/node-fetch'\n\n//addition \u6ce8\u518c\u7684\u63a5\u53e3\u5bf9\u5e94\u65b9\u6cd5\nexport async function hello(request: PluginRequest): Promise<PluginResponse> {\n  const body = request.body || {}\n  Logger.info('[Plugin] hello ======= \u8bf7\u6c42\u6210\u529f')\n  return {\n    body: {\n      res: 'hello world',\n      requestBody: body,\n    },\n  }\n}\n\n// external \u6ce8\u518c\u7684\u63a5\u53e3\u5bf9\u5e94\u65b9\u6cd5\nexport async function hello1(request: PluginRequest): Promise<PluginResponse> {\n  const body = request.body || {}\n  Logger.info('[Plugin] hello1 ======= \u8bf7\u6c42\u6210\u529f')\n  return {\n    body: {\n      res: 'hello world1',\n      requestBody: body,\n    },\n  }\n}\n\n//replace \u52ab\u6301\u7684\u63a5\u53e3\u5bf9\u5e94\u65b9\u6cd5\nexport async function jackFunc(\n  request: PluginRequest<Record<string, any>>\n): Promise<PluginResponse> {\n  let userUUID = ''\n  let userToken = ''\n  if (request.headers['Ones-User-Id'] != null) {\n    userUUID = request.headers['Ones-User-Id']\n    userToken = request.headers['Ones-Auth-Token']\n  }\n  const response = await fetchONES({\n    path: `/users/me`,\n    method: 'GET',\n    headers: {\n      'Ones-User-Id': [userUUID],\n      'Ones-Auth-Token': [userToken],\n    },\n    root: false, //\u9ed8\u8ba4\u4e3atrue\n  })\n  if (response) {\n    return response\n  }\n  return {\n    body: {},\n  }\n}\n")),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u8fc7\u7a0b"},"\u5b9e\u73b0\u8fc7\u7a0b"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u8fc7\u7a0b"},"\u8bf7\u6c42\u8fc7\u7a0b"),(0,r.kt)("h5",{id:"\u8bf7\u6c42\u63d2\u4ef6\u6ce8\u518c\u7684\u63a5\u53e3"},"\u8bf7\u6c42\u63d2\u4ef6\u6ce8\u518c\u7684\u63a5\u53e3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"addition \u63a5\u53e3")),(0,r.kt)("p",null,"\u5728 postman \u7b49 api \u63a5\u53e3\u8c03\u8bd5\u5de5\u5177\u4e2d\u586b\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"url\uff1ahttps://yourhost/hello\nheaders: Ones-Check-Point:team; Ones-Plugin-Id:{\u63d2\u4ef6\u5b9e\u4f8bID}\nmethod: POST\n\n")),(0,r.kt)("p",null,"\u6216\u547d\u4ee4\u884c\u5185\u5bb9\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"curl --location --request POST 'https://yourhost/hello' \\\n--header 'User-Agent: Apipost client Runtime/+https://www.apipost.cn/' \\\n--header 'Content-Type: application/json;charset=utf-8' \\\n--header 'Ones-Check-Point: team' \\\n--header 'Ones-Plugin-Id: {\u63d2\u4ef6\u5b9e\u4f8bID}' \\\n--data ''\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220427151328629",src:n(90833).Z,width:"2270",height:"1142"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"external \u63a5\u53e3")),(0,r.kt)("p",null,"\u200b \u5728 postman \u7b49 api \u63a5\u53e3\u8c03\u8bd5\u5de5\u5177\u4e2d\u586b\u5199\u5982\u4e0b\u5185\u5bb9\uff0c\u7ec6\u5fc3\u7684\u540c\u5b66\u53ef\u4ee5\u53d1\u4e0b\uff0cexternal \u7c7b\u578b\u63a5\u53e3\u548c addition \u7c7b\u578b\u63a5\u53e3\u533a\u522b\u5c31\u662f url \u591a\u4e86 team/teamUUID \uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"url\uff1ahttps://yourhost/team/{teamUUID}/hello1\nheaders: Ones-Check-Point:team; Ones-Plugin-Id:{\u63d2\u4ef6\u5b9e\u4f8bID}\nmethod: POST\n")),(0,r.kt)("p",null,"\u200b \u6216\u547d\u4ee4\u884c\u5185\u5bb9\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"curl --location --request POST 'https://yourhost/team/{teamUUID}/hello1' \\\n--header 'User-Agent: Apipost client Runtime/+https://www.apipost.cn/' \\\n--header 'Content-Type: application/json;charset=utf-8' \\\n--header 'Ones-Check-Point: team' \\\n--header 'Ones-Plugin-Id: {\u63d2\u4ef6\u5b9e\u4f8bID}' \\\n--data ''\n")),(0,r.kt)("p",null,"\u200b \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220427151740865",src:n(86179).Z,width:"2314",height:"1202"})),(0,r.kt)("h5",{id:"\u8bf7\u6c42\u63d2\u4ef6\u52ab\u6301\u7684\u63a5\u53e3"},"\u8bf7\u6c42\u63d2\u4ef6\u52ab\u6301\u7684\u63a5\u53e3"),(0,r.kt)("p",null,"\u200b replace \u63a5\u53e3\uff0c\u52ab\u6301\u7684\u662f\u6807\u54c1\u7684 url\uff0c\u6240\u4ee5\u586b\u5199\u7684 url \u8ddf\u6807\u54c1\u4fdd\u6301\u4e00\u81f4\uff0c\u5e76\u4e14\u5e26\u4e0a\u8fd9\u4e2a\u63a5\u53e3\u5fc5\u987b\u6709\u7684\u53c2\u6570\u4fe1\u606f\uff0c\u81f3\u4e8e\u8fd9\u4e2a\u63a5\u53e3\u672c\u8eab\u662f POST \u8bf7\u6c42\u8fd8\u662f GET \u8bf7\u6c42\uff0c\u8bf7\u6c42\u5934\u9700\u8981\u8bbe\u7f6e\u4ec0\u4e48\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 api \u63a5\u53e3\u6587\u6863\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"url\uff1ahttps://yourhost/users/me\nheaders:\n  Ones-User-Id:{user_uuid}\n  Ones-Auth-Token:{user_token}\nmethod: GET\n")),(0,r.kt)("p",null,"\u6216\u547d\u4ee4\u884c\u5185\u5bb9\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"curl --location --request GET 'https://yourhost/users/me' \\\n--header 'User-Agent: Apipost client Runtime/+https://www.apipost.cn/' \\\n--header 'Ones-User-Id: {user_uuid}' \\\n--header 'Ones-Auth-Token: {user_token}' \\\n--header 'Content-Type: application/json' \\\n--data ''\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(16633).Z,width:"2312",height:"1412"})),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5934\u8bf4\u660e"},"\u8bf7\u6c42\u5934\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ones-User-Id"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ones-Auth-Token"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u6210\u529f\u7684 token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ones-Plugin-Id"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u540e\u7aef\u63d2\u4ef6\u7684\u5b9e\u4f8b ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ones-Check-Point"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u6743\u9650\u68c0\u67e5\u70b9 team/organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ones-Check-Id"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94\u6743\u9650\u68c0\u67e5\u70b9 teamUUID/organizationUUID")))),(0,r.kt)("p",null,"Ones-Plugin-Id \u8bf4\u660e\uff1a\u5bf9\u4e8e\u524d\u7aef\u6765\u8bf4\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u56db\u79cd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"addition/replace/prefix/suffix \u7c7b\u578b\u5373\u65b0\u589e\u63a5\u53e3\uff0cOnes-Plugin-Id \u9700\u8981\u4f20\u5165\u5bf9\u5e94\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5e73\u53f0\u56fa\u6709\u63a5\u53e3\uff0cOnes-Plugin-Id \u4f20\u5165\u56fa\u5b9a\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"built_in_apis"),"\u3002")),(0,r.kt)("h3",{id:"\u63a5\u53e3\u52ab\u6301\u793a\u4f8b\u63d2\u4ef6"},"\u63a5\u53e3\u52ab\u6301\u793a\u4f8b\u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitlab.partner.ones.ai/example/api-register-jack"},"https://gitlab.partner.ones.ai/example/api-register-jack")),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"\u4f7f\u7528-addition\u65b0\u589e\u7c7b\u578b\u95ee\u9898\u63cf\u8ff0"},"\u4f7f\u7528 addition:\u65b0\u589e\u7c7b\u578b\u95ee\u9898\u63cf\u8ff0"),(0,r.kt)("p",{parentName:"blockquote"},"\u63d2\u4ef6 addtion \u8def\u7531, GET \u8bf7\u6c42\u4f20\u53c2\u6570\u4f1a\u5bfc\u81f4\u63a5\u53e3\u65e0\u6cd5\u62ff\u5230\u8fd4\u56de\u503c")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"\u51fa\u73b0\u539f\u56e0"},"\u51fa\u73b0\u539f\u56e0"),(0,r.kt)("p",{parentName:"blockquote"},"\u6807\u51c6\u7cfb\u7edf\u4f7f\u7528\u7684 fasthttp \u5305\u4e0d\u652f\u6301 get \u8bf7\u6c42\u4f20 body\u3002 \u8be5\u95ee\u9898\u5df2\u7ecf\u88ab\u5305\u4fee\u590d\uff0c \u662f\u6211\u4eec\u4f7f\u7528\u7684\u5305\u7248\u672c\u592a\u4e45")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5904\u7406\u65b9\u5f0f\uff1a\u4f7f\u7528 post \u8bf7\u6c42\u3002")))}d.isMDXComponent=!0},90833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registertion&hijack5-56b79ddf4ec953787d17551b9a8a94ad.png"},86179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registertion&hijack6-c4aa8034504b1e548f3e6919bfb12234.png"},16633:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registertion&hijack7-596dabdbfbf84b4757b4ecf92e8d294e.png"},58350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registration&hijacking1-ab470c1c4b99bba64bd4b7c7bade12dc.jpg"},84082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registration&hijacking2-ab470c1c4b99bba64bd4b7c7bade12dc.jpg"},55543:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registration&hijacking3-b6d060eef117ca892ea80b7a6aa944ed.jpg"},31070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/registration&hijacking4-1d9adaadcf14c7e665316cf358e57c25.jpg"}}]);