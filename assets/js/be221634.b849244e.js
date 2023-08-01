"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[13987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(34334),l=n(51048),i=n(33609),s=n(1943),u=n(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:h,groupId:f,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[q,E]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==q&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==q&&(x(t),E(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:e=>O.push(e),onKeyDown:I,onClick:P},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===q))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},94935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(34259),l=n(18679);const i={sidebar_position:5,description:"Multiple request schemes, request any data you want."},s="Request",u={unversionedId:"guide/abilities/interface-request",id:"guide/abilities/interface-request",title:"Request",description:"Multiple request schemes, request any data you want.",source:"@site/docs/guide/abilities/interface-request.md",sourceDirName:"guide/abilities",slug:"/guide/abilities/interface-request",permalink:"/docs/next/guide/abilities/interface-request",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Multiple request schemes, request any data you want."},sidebar:"guide",previous:{title:"Internationalization",permalink:"/docs/next/guide/abilities/multilingual"},next:{title:"Data acquisition",permalink:"/docs/next/guide/abilities/data-acquisition"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Frontend request",id:"frontend-request",level:3},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:4},{value:"Step 2: Request",id:"step-2-request",level:4},{value:"Backend request",id:"backend-request",level:3},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency-1",level:4},{value:"Step 2: Request",id:"step-2-request-1",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request"},"Request"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In the plugin project, it is necessary to request the interface to obtain data, so the platform provides the frontend request ability package ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/packages/fetch/"},"@ones-op/fetch")," and the backend request ability package ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/packages/node-fetch/"},"@ones-op/node-fetch"),". So before you make a request, you need to know who you are asking for. Then choose the appropriate ability to use."),(0,r.kt)("p",null,"At the same time, in each package, we provide different request methods for you to call according to different scenarios. In this way, you don't have to write repetitive information such as request headers in each request, which simplifies your development workload."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"frontend-request"},"Frontend request"),(0,r.kt)("p",null,"In order to let you quickly call API, we provide you with ",(0,r.kt)("inlineCode",{parentName:"p"},"OPFetch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetch")," and other methods. The following will take ",(0,r.kt)("inlineCode",{parentName:"p"},"OPFetch")," as an example to show you how to send a request to the plugin backend."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OPFetch"),"API related to ONES"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fetch")," Other API"))),(0,r.kt)("h4",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," directory of the plugin project, and execute the following command for dependent installation:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/fetch\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/fetch\n")))),(0,r.kt)("h4",{id:"step-2-request"},"Step 2: Request"),(0,r.kt)("p",null,"When you use ONES CLI to create a plugin project, you register an API: ",(0,r.kt)("strong",{parentName:"p"},"hello")," with ONES by default."),(0,r.kt)("p",null,"A new configuration has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/plugin.yaml"',title:'"/config/plugin.yaml"'},"apis:\n  - type: addition\n    methods:\n      - POST\n    url: /hello\n    function: hello\n")),(0,r.kt)("p",null,"Injected the implementation of API into ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/backend/src/index.ts"',title:'"/backend/src/index.ts"'},"// example function\nexport async function hello(request: PluginRequest): Promise<PluginResponse> {\n  const body = request.body || {}\n  Logger.info('[Plugin] hello ======= Request successful')\n  return {\n    body: {\n      res: 'hello world',\n      requestBody: body,\n    },\n  }\n}\n")),(0,r.kt)("p",null,"Next, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"OPFetch")," to request this API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport { Button } from '@ones-design/core'\nimport { OPFetch } from '@ones-op/fetch'\n\nexport const App = () => {\n  const handleFetchHello = () => {\n    const response = OPFetch({\n      url: '/project/api/project/hello',\n      method: 'POST',\n    })\n  }\n\n  return (\n    <div>\n      <Button onClick={handleFetchHello}>Fetch hello</Button>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"For specific API usage and parameter resolution, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/packages/fetch/"},"@ones-op/fetch")),(0,r.kt)("h3",{id:"backend-request"},"Backend request"),(0,r.kt)("p",null,"In order to let you quickly call API, we provide you with ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchONES"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchHttp")," and other methods. The following will take ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchONES")," as an example to teach you how to send a request to ONES."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetchONES")," API related to ONES"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetchHttp")," Other API"))),(0,r.kt)("p",null,"We request ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/project/#%E6%A0%B9%E6%8D%AE%E9%A1%B9%E7%9B%AE-id-%E8%8E%B7%E5%8F%96%E9%A1%B9%E7%9B%AE%E5%88%97%E8%A1%A8"},"ONES Project")," data in hello by modifying the ",(0,r.kt)("strong",{parentName:"p"},"hello")," API above."),(0,r.kt)("h4",{id:"step-1-installation-dependency-1"},"Step 1: Installation dependency"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/node-fetch\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/node-fetch\n")))),(0,r.kt)("h4",{id:"step-2-request-1"},"Step 2: Request"),(0,r.kt)("p",null,"Modify the code implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/backend/src/index.ts"',title:'"/backend/src/index.ts"'},"import { Logger } from '@ones-op/node-logger'\nimport { fetchONES } from '@ones-op/node-fetch'\nimport type { PluginRequest, PluginResponse } from '@ones-op/node-types'\n\nexport async function hello(request: PluginRequest): Promise<PluginResponse> {\n  const projects = await fetchONES<ProjectResponseBody>({\n    path: `/team/${globalThis.onesEnv.teamUUID}/projects/my_project`,\n    method: 'GET',\n    root: true, // default is true\n  })\n    .then((resolve) => {\n      const {\n        body: { projects },\n      } = resolve\n\n      return projects\n    })\n    .catch((error) => {\n      Logger.info('fetch project error. the error message: ', error)\n    })\n\n  return {\n    body: {\n      project: projects,\n    },\n  }\n}\n")),(0,r.kt)("p",null,"You may have noticed that we brought a ",(0,r.kt)("inlineCode",{parentName:"p"},"root: true")," when we requested it, and also told you that its default value is: ",(0,r.kt)("strong",{parentName:"p"},"true"),", is actually what we use to distinguish permissions. If you use an ordinary user to make a request, you will be required to bring two request headers, ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-User-Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Auth-Token"),". But currently, you can only obtain these two request headers in the following two ways."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When making a frontend request, put ",(0,r.kt)("inlineCode",{parentName:"li"},"Ones-User-Id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Ones-Auth-Token")," in the request header, and then obtain the request header from the request object."),(0,r.kt)("li",{parentName:"ul"},"Request ONES ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/auth/#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E4%BF%A1%E6%81%AF"},"Get login information")," API.")),(0,r.kt)("p",null,"For other information about super admin, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/abilities/basic/super-admin"},"super admin")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/packages/node-fetch/"},"@ones-op/node-fetch"),"."))}m.isMDXComponent=!0}}]);