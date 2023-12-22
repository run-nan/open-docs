"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[2950],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(28957),r=(n(50959),n(17942));const a={sidebar_position:6},o="ONES API Subscribe",s={unversionedId:"abilities/basic/ones-api/internal-subscribe",id:"abilities/basic/ones-api/internal-subscribe",title:"ONES API Subscribe",description:"This ability is obsolete as of October 13, 2023. If relevant requirements require similar capabilities, please submit a new request form to the open platform.",source:"@site/docs/abilities/basic/ones-api/internal-subscribe.md",sourceDirName:"abilities/basic/ones-api",slug:"/abilities/basic/ones-api/internal-subscribe",permalink:"/open-docs/docs/abilities/basic/ones-api/internal-subscribe",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"abilities",previous:{title:"ONES API Intercept",permalink:"/open-docs/docs/abilities/basic/ones-api/internal-Intercept"},next:{title:"Item mutation",permalink:"/open-docs/docs/abilities/basic/ones-api/item-mutation"}},l={},u=[{value:"Require",id:"require",level:2},{value:"Overview",id:"overview",level:2},{value:"use",id:"use",level:2},{value:"Terms and Conditions",id:"terms-and-conditions",level:3},{value:"Request process",id:"request-process",level:3},{value:"Configuration file",id:"configuration-file",level:3},{value:"Specific code",id:"specific-code",level:3},{value:"Debugging method",id:"debugging-method",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-api-subscribe"},"ONES API Subscribe"),(0,r.kt)("admonition",{title:"ability deprecation instructions",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This ability is obsolete as of October 13, 2023. If relevant requirements require similar capabilities, please submit a new request form to the open platform.")),(0,r.kt)("h2",{id:"require"},"Require"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Sometimes we need to change the performance of certain behaviors in the ONES system and add some operations after a certain behavior. The plug-in can post-subscribe to all open interfaces in the ONES standard system."),(0,r.kt)("h2",{id:"use"},"use"),(0,r.kt)("h3",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The difference between the organization-level interface and the team-level interface is that the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," of the team-level interface contains ",(0,r.kt)("inlineCode",{parentName:"li"},"/team/:teamUUID"),"."),(0,r.kt)("li",{parentName:"ol"},"The same interface can be post-subscribed by multiple plug-ins at the same time in its level context."),(0,r.kt)("li",{parentName:"ol"},"For the same interface in the context of its level, the post-subscription capability and the interface hijacking capability cannot be used at the same time."),(0,r.kt)("li",{parentName:"ol"},"For the same interface in the context of its level, pre-interception and post-subscription can be used at the same time."),(0,r.kt)("li",{parentName:"ol"},"The results returned by the plug-in do not affect the original interface."),(0,r.kt)("li",{parentName:"ol"},"In local debugging, if the plug-in configuration file ",(0,r.kt)("inlineCode",{parentName:"li"},"config/plugin.yaml")," is modified, you need to run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx op invoke clear")," and re-run the ",(0,r.kt)("inlineCode",{parentName:"li"},"npx op invoke run")," command to make the configuration take effect.")),(0,r.kt)("h3",{id:"request-process"},"Request process"),(0,r.kt)("mermaid",{value:"sequenceDiagram\n     autonumber\n     User frontend->>+ONES: request\n     ONES->>ONES: request processing\n     ONES->>+Plugin: Batch forwarding\n     Plugin->>Plugin: perform post-subscription processing\n     Plugin->>-ONES: Return\n     ONES->>-User Frontend: Return"}),(0,r.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"Add the following configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"apis")," field in the plugin configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='/config/plugin.yaml'",title:"'/config/plugin.yaml'"},"apis:\n  - type: subscribe #Interface type: subscribe: post-subscription\n    methods: #Interface request method\n      - GET\n    url: /users/me #Hijack interface url\n    scope: project #project or wiki interface, without this attribute, the default is project\n    function: jackFunc #The name should be consistent with the function name in the code\n")),(0,r.kt)("h3",{id:"specific-code"},"Specific code"),(0,r.kt)("p",null,"This example pre-intercepts the project's personal information acquisition interface. The headers and body in the code are the request header and request body of the original request respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Logger } from '@ones-op/node-logger'\n\nexport async function jackFunc(\n  request: PluginRequest<Record<string, any>>,\n): Promise<PluginResponse> {\n  const reqBody = request.reqBody as any\n  const respBody = request.respBody as any\n  const reqHeaders = request.reqHeaders as any\n  const respHeaders = request.respHeaders as any\n  Logger.info('[Plugin] hello ======= Request successful')\n  Logger.info('[Plugin] respBody ======= Request successful', respBody)\n  Logger.info('[Plugin] respHeaders ======= Request successful', respHeaders)\n  Logger.info('[Plugin] reqBody ======= Request successful', reqBody)\n  Logger.info('[Plugin] reqHeaders ======= Request successful', reqHeaders)\n  return {\n    body: {\n      res: 'hello world',\n      requestBody: {},\n    },\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Precautions"),(0,r.kt)("p",{parentName:"li"},"The following points need to be noted when using interface request parameters:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What is being intercepted is the ONES API, so the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," filled in must be consistent with the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," used to access the ONES API;"),(0,r.kt)("li",{parentName:"ul"},"Confirm whether the intercepted interface itself is a ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," request or a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request;")))),(0,r.kt)("h3",{id:"debugging-method"},"Debugging method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," tool to access, taking the ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/me")," interface as an example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://yourhost/users/me' \\\n--header 'Ones-User-Id: {user_uuid}' \\\n--header 'Ones-Auth-Token: {user_token}' \\\n--header 'Content-Type: application/json' \\\n--data ''\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Example of code request parameters"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"url: https://yourhost/users/me\nheaders:\n    Ones-User-Id:{user_uuid}\n    Ones-Auth-Token:{user_token}\n    ...\nmethod: GET\n")))))}d.isMDXComponent=!0}}]);