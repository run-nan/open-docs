"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[6646],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(28957),r=(n(50959),n(17942));const s={sidebar_position:1},i="ONES API access",o={unversionedId:"abilities/basic/ones-api/access",id:"abilities/basic/ones-api/access",title:"ONES API access",description:"Requirements",source:"@site/docs/abilities/basic/ones-api/access.md",sourceDirName:"abilities/basic/ones-api",slug:"/abilities/basic/ones-api/access",permalink:"/open-docs/docs/abilities/basic/ones-api/access",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"abilities",previous:{title:"ONES API",permalink:"/open-docs/docs/abilities/basic/ones-api/"},next:{title:"ONES API registration",permalink:"/open-docs/docs/abilities/basic/ones-api/registration"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2: Access the ONES API",id:"step-2-access-the-ones-api",level:3},{value:"Other",id:"other",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-api-access"},"ONES API access"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+")))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ONES API access ability provides a method for plugins to access the ONES API. ONES API is all the API open to the outside world of ONES , such as viewing the details of an issue, adding issue and other API, which can be accessed to interact with ONES. Each plugin will generate a ",(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/basic/super-admin"},"super-admin")," in the ONES, and the superuser will have access to all data when accessing ONES API."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/fetch\n")),(0,r.kt)("h3",{id:"step-2-access-the-ones-api"},"Step 2: Access the ONES API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API\uff1a")," OPFetch"),(0,r.kt)("p",null,"When the developer requested the ONES API with a relative path, they will use the super admin by default. When calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchONES")," method, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"root=true")," in the input parameter, indicating that the superuser is used to call the API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example one"),": Use super admin to call ONES API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OPFetch } from '@ones-op/fetch'\n\nconst response = await OPFetch({\n  path: `/team/${globalThis.onesEnv.teamUUID}/items/view`,\n  method: 'POST',\n  body: {\n    query: {\n      must: [\n        { equal: { item_type: 'field' } },\n        { in: { pool: ['project'] } },\n        { in: { 'context.type': ['team'] } },\n      ],\n    },\n    view: ['[default]'],\n  },\n  root: true, //default is true\n  teamUUID: '',\n})\n")),(0,r.kt)("p",null,"If we do not want to request as a super admin, we should first set ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the code, and then add ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-User-Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Auth-Token")," to the request header. When the plugin is installed in the instance environment, the user will also bring the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-User-Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Auth-Token "),"when accessing the plugin API by clicking the page.Organization-level plugins need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"teamUUID")," param."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ones-User-Id"),": User's ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ones-Auth-Token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," for successful login"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example two\uff1a")," Use other role to request the ONES API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OPFetch } from '@ones-op/fetch'\n\nexport async function getUserme(\n  request: PluginRequest<Record<string, any>>,\n): Promise<PluginResponse> {\n  let userUUID = ''\n  let userToken = ''\n  if (request.headers['Ones-User-Id'] != null) {\n    userUUID = request.headers['Ones-User-Id']\n    userToken = request.headers['Ones-Auth-Token']\n  }\n  return OPFetch({\n    path: `/users/me`,\n    method: 'GET',\n    headers: {\n      'Ones-User-Id': userUUID,\n      'Ones-Auth-Token': [userToken],\n    },\n    root: false, //default is true\n    teamUUID: '',\n  })\n}\n")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("p",null,"For detailed parameters, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/open-docs/docs/reference/packages/fetch/"},"@ones-op/fetch")))}u.isMDXComponent=!0}}]);