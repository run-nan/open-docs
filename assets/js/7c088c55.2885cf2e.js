"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[66507],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=m(a),s=r,N=u["".concat(d,".").concat(s)]||u[s]||o[s]||l;return a?n.createElement(N,i(i({ref:e},k),{},{components:a})):n.createElement(N,i({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85943:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},i="ONES User API",p={unversionedId:"api/user/user",id:"version-1.x/api/user/user",title:"ONES User API",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/versioned_docs/version-1.x/api/user/user.md",sourceDirName:"api/user",slug:"/api/user/",permalink:"/open-docs/docs/api/user/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"ONES Auth API",permalink:"/open-docs/docs/api/auth/"},next:{title:"ONES Department API",permalink:"/open-docs/docs/api/department/"}},d={},m=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"user",id:"user",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"1. \u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f",id:"1-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f",level:2},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003",level:3},{value:"2. \u4fee\u6539\u56e2\u961f\u6210\u5458\u4fe1\u606f",id:"2-\u4fee\u6539\u56e2\u961f\u6210\u5458\u4fe1\u606f",level:2},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-1",level:3},{value:"3. \u9080\u8bf7\u6210\u5458",id:"3-\u9080\u8bf7\u6210\u5458",level:2},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-2",level:3},{value:"4. \u7981\u7528\u7528\u6237",id:"4-\u7981\u7528\u7528\u6237",level:2},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-3",level:3},{value:"5. \u67e5\u770b\u9080\u8bf7\u8bb0\u5f55",id:"5-\u67e5\u770b\u9080\u8bf7\u8bb0\u5f55",level:2},{value:"URL",id:"url-4",level:4},{value:"HTTP Method",id:"http-method-4",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-4",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",id:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-4",level:4},{value:"6. \u9080\u8bf7\u6210\u5458\u786e\u8ba4\u52a0\u5165",id:"6-\u9080\u8bf7\u6210\u5458\u786e\u8ba4\u52a0\u5165",level:2},{value:"URL",id:"url-5",level:4},{value:"HTTP Method",id:"http-method-5",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-5",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-4",level:4},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-5",level:4},{value:"7. \u5220\u9664\u7528\u6237",id:"7-\u5220\u9664\u7528\u6237",level:2},{value:"URL",id:"url-6",level:4},{value:"HTTP Method",id:"http-method-6",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6",level:4},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868-6",level:4},{value:"\u8bf7\u6c42\u4f53\u53c2\u8003",id:"\u8bf7\u6c42\u4f53\u53c2\u8003-5",level:3},{value:"\u8fd4\u56de\u503c\u53c2\u8003",id:"\u8fd4\u56de\u503c\u53c2\u8003-6",level:3}],k={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-user-api"},"ONES User API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF"},"1. \u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-%E4%BF%AE%E6%94%B9%E5%9B%A2%E9%98%9F%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF"},"2. \u4fee\u6539\u56e2\u961f\u6210\u5458\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-%E9%82%80%E8%AF%B7%E6%88%90%E5%91%98"},"3. \u9080\u8bf7\u6210\u5458")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-%E7%A6%81%E7%94%A8%E7%94%A8%E6%88%B7"},"4. \u7981\u7528\u7528\u6237")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5-%E6%9F%A5%E7%9C%8B%E9%82%80%E8%AF%B7%E8%AE%B0%E5%BD%95"},"5. \u67e5\u770b\u9080\u8bf7\u8bb0\u5f55")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#6-%E9%82%80%E8%AF%B7%E6%88%90%E5%91%98%E7%A1%AE%E8%AE%A4%E5%8A%A0%E5%85%A5"},"6. \u9080\u8bf7\u6210\u5458\u786e\u8ba4\u52a0\u5165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#7-%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7"},"7. \u5220\u9664\u7528\u6237"))))),(0,r.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"user"},"user"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avatar"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5934\u50cf url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"department_uuids"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u95e8 uuid \u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u804c\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237","[UUID]")))),(0,r.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h2",{id:"1-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f"},"1. \u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u7684\u4fe1\u606f"),(0,r.kt)("h4",{id:"url"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/:teamUUID/info"),(0,r.kt)("h4",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  https://your-host-name/project/api/project/users/me \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "DU6krHBN",\n  "email": "niuqiang@ones.com",\n  "name": "\u4f1a\u98de\u7684\u7280\u725b\u957f",\n  "name_pinyin": "hui4fei1dexi1niu2zhang3",\n  "title": "",\n  "avatar": "",\n  "phone": "",\n  "create_time": 1565770697227728,\n  "access_time": 0,\n  "status": 1,\n  "org_uuid": "AbsatFo2"\n}\n')),(0,r.kt)("h2",{id:"2-\u4fee\u6539\u56e2\u961f\u6210\u5458\u4fe1\u606f"},"2. \u4fee\u6539\u56e2\u961f\u6210\u5458\u4fe1\u606f"),(0,r.kt)("h4",{id:"url-1"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/teamUUID/users/update"),(0,r.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-1"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#user"},"user"))))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-1"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST \\\n  https://your-host-name/project/api/project/team/3pDzCwAe/users/update \\\n  -H \'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ\' \\\n  -H \'Ones-User-Id: DU6krHBN\' \\\n  -H \'Referer: https://your-host-name\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{\n    "user_uuid": "DU6krHBN",\n    "name": "\u4f1a\u98de\u7684\u7280\u725b\u957f",\n    "title": "update title"\n}\'\n')),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-1"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1565850418558480\n}\n')),(0,r.kt)("h2",{id:"3-\u9080\u8bf7\u6210\u5458"},"3. \u9080\u8bf7\u6210\u5458"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/team/teamUUID/invitations/add_batch"),(0,r.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-2"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7684\u90ae\u7bb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"license_types"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u65f6\u6388\u6743\u7684\u4ea7\u54c1")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4ea7\u54c1\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4ea7\u54c1\u7f16\u53f7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"project"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wiki"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TestCase"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pipeline"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Plan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Desk"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Performance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-2"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name/project/api/project/team/3pDzCwAe/invitations/add_batch \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\"invite_settings\":[\n          {\n            \"email\":\"123414@ones.com\"\n          }\n        ],\n        \"license_types\":[\n            7,\n            8,\n            4,\n            5,\n            1,\n            3,\n            2\n          ]\n  }'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-2"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bad_emails": []\n}\n')),(0,r.kt)("h2",{id:"4-\u7981\u7528\u7528\u6237"},"4. \u7981\u7528\u7528\u6237"),(0,r.kt)("h4",{id:"url-3"},"URL"),(0,r.kt)("p",null,"https://your-host-name//project/api/project/organization/:orgUUID/disable_members"),(0,r.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-3"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orgUUID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7 UUID\uff0c\u4f20\u53c2\u65b9\u5f0f\uff1aIn path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-3"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name//project/api/project/organization/9pSBWJtj/disable_members \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n        \"members\":[\n          \"Jky1qMsA\"\n        ]\n  }'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-3"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1565850418558480\n}\n')),(0,r.kt)("h2",{id:"5-\u67e5\u770b\u9080\u8bf7\u8bb0\u5f55"},"5. \u67e5\u770b\u9080\u8bf7\u8bb0\u5f55"),(0,r.kt)("h4",{id:"url-4"},"URL"),(0,r.kt)("p",null,"https://your-host-name//project/api/project/team/:teamUUID/invitations"),(0,r.kt)("h4",{id:"http-method-4"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-4"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-4"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"},"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invitations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","invite_link"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u94fe\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0","\xa0","is_expired"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u8fc7\u671f")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u53c2\u8003-4"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "invitations": [\n    {\n      "code": "JUzlZSRGU4ZcN0upv3VF7aI0tyl9GpJ1",\n      "invite_link": "https://dev.myones.net/project/master/#/auth/join_team?invitation=JUzlZSRGU4ZcN0upv3VF7aI0tyl9GpJ1",\n      "email": "2222@ones.com",\n      "create_time": 1635302823,\n      "status": 1,\n      "is_expired": false\n    },\n    {\n      "code": "M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ",\n      "invite_link": "https://dev.myones.net/project/master/#/auth/join_team?invitation=M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ",\n      "email": "11111@ones.com",\n      "create_time": 1635302711,\n      "status": 1,\n      "is_expired": false\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"6-\u9080\u8bf7\u6210\u5458\u786e\u8ba4\u52a0\u5165"},"6. \u9080\u8bf7\u6210\u5458\u786e\u8ba4\u52a0\u5165"),(0,r.kt)("h4",{id:"url-5"},"URL"),(0,r.kt)("p",null,"https://your-host-name/project/api/project/auth/invite_join_team"),(0,r.kt)("h4",{id:"http-method-5"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-5"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u5426"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-5"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u90ae\u7bb1\uff08\u4e0d\u53ef\u66f4\u6539\uff09 ",(0,r.kt)("a",{parentName:"td",href:"#5-%E6%9F%A5%E7%9C%8B%E9%82%80%E8%AF%B7%E8%AE%B0%E5%BD%95"},"5. \u67e5\u770b\u9080\u8bf7\u8bb0\u5f55"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"invite_code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7801 ",(0,r.kt)("a",{parentName:"td",href:"#5-%E6%9F%A5%E7%9C%8B%E9%82%80%E8%AF%B7%E8%AE%B0%E5%BD%95"},"5. \u67e5\u770b\u9080\u8bf7\u8bb0\u5f55"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-4"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "11111@ones.com",\n  "password": "ONESzsy888",\n  "name": "1111",\n  "invite_code": "M4NZ7ztkyIBASEzk5nhJbOEqiOnwWlAZ"\n}\n')),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c\u53c2\u8003-5"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user": {\n    "uuid": "JYNRQUEv",\n    "email": "11111@ones.com",\n    "name": "1111",\n    "name_pinyin": "",\n    "title": "",\n    "avatar": "",\n    "phone": "",\n    "create_time": 1635302711283792,\n    "status": 1,\n    "channel": "uJYNRQUEvpbtIFpus8UAcjhAgw3z2fdE",\n    "token": "0MC0hxg7bxIO9fMrE*********AZzErKPwBSFAW22f2i",\n    "license_types": [1, 2, 3, 4, 5, 7, 8],\n    "imported_jira_user": false,\n    "is_init_password": false\n  },\n  "teams": [\n    {\n      "uuid": "Jpa4piQQ",\n      "status": 1,\n      "name": "\u5b87\u5b99\u6700\u5f3a",\n      "owner": "9uaNjXTJ",\n      "logo": "",\n      "cover_url": "",\n      "domain": "",\n      "create_time": 1624865026011200,\n      "expire_time": -1,\n      "type": "pro",\n      "config": {\n        "sprint": {\n          "alias": ""\n        }\n      },\n      "member_count": 6,\n      "pending_member_count": 0,\n      "disable_member_count": 0,\n      "org_uuid": "CbuJaGWN",\n      "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],\n      "workhours": 800000,\n      "workhours_unit": "hour"\n    }\n  ],\n  "org": {\n    "org_type": 0,\n    "uuid": "CbuJaGWN",\n    "name": "\u5b87\u5b99\u6700\u5f3ateam",\n    "style_hash": "",\n    "favicon": "",\n    "notifications": []\n  }\n}\n')),(0,r.kt)("h2",{id:"7-\u5220\u9664\u7528\u6237"},"7. \u5220\u9664\u7528\u6237"),(0,r.kt)("h4",{id:"url-6"},"URL"),(0,r.kt)("p",null,"https://your-host-name//project/api/project/team/:teamUUID/delete_members"),(0,r.kt)("h4",{id:"http-method-6"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-6"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u53c2\u6570\u5217\u8868-6"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u4f53\u53c2\u8003-5"},"\u8bf7\u6c42\u4f53\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  https://your-host-name//project/api/project/team/3pDzCwAe/delete_members \\\n  -H 'Ones-Auth-Token: ILg1uaO9d8MOG6rqQoe6Ozqkv27sTbgiKeDDgapEtIYnkyu8m6d51nq7og0koETZ' \\\n  -H 'Ones-User-Id: DU6krHBN' \\\n  -H 'Referer: https://your-host-name' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\n        \"members\":[\n          \"Jky1qMsA\"\n        ]\n  }'\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c\u53c2\u8003-6"},"\u8fd4\u56de\u503c\u53c2\u8003"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server_update_stamp": 1565850418558480\n}\n')))}o.isMDXComponent=!0}}]);