"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[42115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={id:"super-admin",sidebar_position:7,description:"Plugin's virtual user in ONES."},o="Super admin",l={unversionedId:"abilities/basic/super-admin",id:"abilities/basic/super-admin",title:"Super admin",description:"Plugin's virtual user in ONES.",source:"@site/docs/abilities/basic/super-admin.md",sourceDirName:"abilities/basic",slug:"/abilities/basic/super-admin",permalink:"/open-docs/docs/next/abilities/basic/super-admin",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:7,frontMatter:{id:"super-admin",sidebar_position:7,description:"Plugin's virtual user in ONES."},sidebar:"abilities",previous:{title:"Get plugin ability configuration",permalink:"/open-docs/docs/next/abilities/basic/ability-config"},next:{title:"Timer",permalink:"/open-docs/docs/next/abilities/basic/timer"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2: Get super admin information",id:"step-2-get-super-admin-information",level:3},{value:"Other",id:"other",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"super-admin"},"Super admin"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,a.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-ability"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+"),(0,a.kt)("td",{parentName:"tr",align:"left"},"v0.1.9+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Each plugin has a dedicated super admin in ONES who has access to all ONES data. When the plugin uses certain abilities, it needs to use an ONES user with higher privileges, and you can directly use the super admin without preconfiguring a specific user."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-ability\n")),(0,a.kt)("h3",{id:"step-2-get-super-admin-information"},"Step 2: Get super admin information"),(0,a.kt)("p",null,"For team-level plugins, you can directly call the API in the code to obtain the information of the super admin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Plugin } from '@ones-op/node-ability'\n\nconst user = await Plugin.getPluginUser()\n")),(0,a.kt)("p",null,"When an organization-level plugin is installed, its own super admin will be created in all teams under the organization. Therefore, when obtaining the super admin information of the plugin at the organization level, the ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," of a certain team needs to be passed in, and the super admin information of the plugin under the team will be obtained, otherwise the returned content is empty, and the usage method is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await Plugin.getPluginUser(teamUUID)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"data": {\n  "user_uuid": "PEFDXMK1",\n  "org_uuid": "",\n  "team_uuid": "3JjYLsNk",\n  "app_uuid": "",\n  "instance_uuid": "3fcca29f",\n  "name": "pluginTest",\n  "email": "3JjYLsNk_3fcca29f@ones.com"\n}\n')),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"For the definition of specific parameters, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/next/reference/packages/node-ability/#getPluginUser"},"@ones-op/node-ability")))}d.isMDXComponent=!0}}]);