"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[86865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},o="ONES API registration",l={unversionedId:"abilities/business/ONES-API/ONES-API-registration",id:"version-1.x/abilities/business/ONES-API/ONES-API-registration",title:"ONES API registration",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/business/ONES-API/ONES-API-registration.md",sourceDirName:"abilities/business/ONES-API",slug:"/abilities/business/ONES-API/ONES-API-registration",permalink:"/docs/abilities/business/ONES-API/ONES-API-registration",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"abilities",previous:{title:"ONES API access",permalink:"/docs/abilities/business/ONES-API/ONES-API-access"},next:{title:"ONES API interception",permalink:"/docs/abilities/business/ONES-API/ONES-API-interception"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Parameter Description",id:"parameter-description",level:3},{value:"addition",id:"addition",level:3},{value:"Step 1: Register API",id:"step-1-register-api",level:4},{value:"Step 2: Write the handling function",id:"step-2-write-the-handling-function",level:4},{value:"Step 3: Request",id:"step-3-request",level:4},{value:"external",id:"external",level:3},{value:"Step 1: Register API",id:"step-1-register-api-1",level:4},{value:"Step 2: Write the handling function",id:"step-2-write-the-handling-function-1",level:4},{value:"Step 3: Request",id:"step-3-request-1",level:4},{value:"Error handling (required by ONES version)",id:"error-handling-required-by-ones-version",level:3},{value:"backend interface logic",id:"backend-interface-logic",level:4},{value:"Front-end processing logic",id:"front-end-processing-logic",level:4},{value:"Other",id:"other",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ones-api-registration"},"ONES API registration"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,a.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-error"),(0,a.kt)("th",{parentName:"tr",align:"left"},"@ones-op/fetch"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+"),(0,a.kt)("td",{parentName:"tr",align:"left"},"v0.1.1+"),(0,a.kt)("td",{parentName:"tr",align:"left"},"v0.5.3+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The plugin can register a new API on the ONES, and the plugin will directly process the request. When ONES API cannot meet business needs, you can use this ability to add API to solve data processing in specific business scenarios. For example the following scenario:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When some plugin front-end pages are added, and the data ONES API to which the page needs to be rendered cannot be fully met, it can be solved through the plugin registration API."),(0,a.kt)("li",{parentName:"ol"},"When some other abilities are used, they must have their own specific API for processing, and the API can be registered through this capability.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The ONES API registration ability allows plugin to register API at two levels, namely plugin-level and team-level. Among them, plugin-level API with different plugin can register the same path, while team-level API cannot register API with the same path under the same team."),(0,a.kt)("h3",{id:"parameter-description"},"Parameter Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Location"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Ones-Plugin-Id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"plugin ",(0,a.kt)("inlineCode",{parentName:"td"},"instance_uuid"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Ones-Check-Point"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"permission checkpoint ",(0,a.kt)("inlineCode",{parentName:"td"},"team"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"organization"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Ones-Check-Id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"permission checkpoint uuid ",(0,a.kt)("inlineCode",{parentName:"td"},"teamUUID"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"organizationUUID"))))),(0,a.kt)("h3",{id:"addition"},"addition"),(0,a.kt)("p",null,"Add plugin-level API by ",(0,a.kt)("inlineCode",{parentName:"p"},"addition"),"."),(0,a.kt)("h4",{id:"step-1-register-api"},"Step 1: Register API"),(0,a.kt)("p",null,"Declare the API in the plugin configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"apis:\n  - type: addition #API type: addition\n    methods: #Interface request method\n      - POST\n    url: /hello #Custom url\n    function: hello #The name is consistent with the function name in the code\n")),(0,a.kt)("h4",{id:"step-2-write-the-handling-function"},"Step 2: Write the handling function"),(0,a.kt)("p",null,"Write the handling function configured when the API is registered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="backend/src/index.ts"',title:'"backend/src/index.ts"'},"import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported\n\n//Interface correspondence method for addition registration\nexport async function hello(request: PluginRequest): Promise<PluginResponse> {\n  const body = request.body || {}\n  Logger.info('[Plugin] hello ======= Request successful')\n  return {\n    body: {\n      res: 'hello world',\n      requestBody: body,\n    },\n  }\n}\n")),(0,a.kt)("h4",{id:"step-3-request"},"Step 3: Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request parameter example"),(0,a.kt)("p",{parentName:"li"},"When requesting an API registered through ",(0,a.kt)("inlineCode",{parentName:"p"},"addition"),", three request header parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-Check-Point"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-Plugin-Id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Ones-Check-Id")," must be carried."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"url\uff1ahttps://yourhost/hello\nheaders:\n    Ones-Check-Point : team,\n    Ones-Plugin-Id : {plugin_instance_uuid},\n    Ones-Check-Id: {team_uuid},\nmethod: POST\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," tool to request, take the ",(0,a.kt)("inlineCode",{parentName:"p"},"/hello")," API as an example"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://yourhost/hello' \\\n--header 'Content-Type: application/json;charset=utf-8' \\\n--header 'Ones-Check-Point: team' \\\n--header 'Ones-Plugin-Id: {plugin_instance_uuid}' \\\n--header 'Ones-Check-Id: {team_uuid}' \\\n--data ''\n")))),(0,a.kt)("h3",{id:"external"},"external"),(0,a.kt)("p",null,"Add a team-level API through ",(0,a.kt)("inlineCode",{parentName:"p"},"external"),", and the path of the API added in this way must be prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"/team/:teamUUID"),"."),(0,a.kt)("h4",{id:"step-1-register-api-1"},"Step 1: Register API"),(0,a.kt)("p",null,"Declare the API in the plugin configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"apis:\n  - type: external #New to external (team-level interface)\n    methods:\n      - POST\n    url: /team/:teamUUID/hello1\n    function: hello1\n")),(0,a.kt)("h4",{id:"step-2-write-the-handling-function-1"},"Step 2: Write the handling function"),(0,a.kt)("p",null,"Write the handling function configured when the API is registered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="backend/src/index.ts"',title:'"backend/src/index.ts"'},"import { Logger } from '@ones-op/node-logger' //Dependency packages that need to be imported\n\n// Interface correspondence method for external registration\nexport async function hello1(request: PluginRequest): Promise<PluginResponse> {\n  const body = request.body || {}\n  Logger.info('[Plugin] hello1 ======= Request successful')\n  return {\n    body: {\n      res: 'hello world1',\n      requestBody: body,\n    },\n  }\n}\n")),(0,a.kt)("h4",{id:"step-3-request-1"},"Step 3: Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request parameter example"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"url\uff1ahttps://yourhost/team/:teamUUID/hello1\nmethod: POST\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," tool to access, take the ",(0,a.kt)("inlineCode",{parentName:"p"},"/team/:teamUUID/hello1")," API as an example"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://yourhost/team/:teamUUID/hello1' \\\n--header 'Content-Type: application/json;charset=utf-8' \\\n--data ''\n")))),(0,a.kt)("h3",{id:"error-handling-required-by-ones-version"},"Error handling (required by ONES version)"),(0,a.kt)("p",null,"The caller of the plug-in registration interface is generally the front-end of the plug-in, which represents the front-end logic injected into a certain slot of the ONES system. We provide a standard error handling method, which is that when an exception occurs in the registration interface, the plug-in can Return the error information to the front end of the plug-in, and pop up a pop-up window at the corresponding call place of the ONES system. The plug-in developer can customize the color, text, and status code of the pop-up window."),(0,a.kt)("h4",{id:"backend-interface-logic"},"backend interface logic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Throw a specific error type, and you can specify the error code, reason, and type to achieve the status code of the specified request, the text of the pop-up window, and the color."),(0,a.kt)("p",{parentName:"li"},"type: The type of error, which can be divided into error and warning. Error is a server error, and warning is a user operation error."),(0,a.kt)("p",{parentName:"li"},"reason: The reason for the error."),(0,a.kt)("p",{parentName:"li"},"code: Consistent with the http status code, not 200.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PluginError, PluginErrorTypeEnum } from '@ones-op/node-error'\n\nexport async function TestPluginError() {\n  throw new PluginError(PluginErrorTypeEnum.error, 500, 'test')\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In a more convenient way, errors can be divided into two types caused by user operations and plug-in logic, so two functions are provided respectively. This function also returns a specific error type, but it has a default type and code. Plug-ins Developers only need to specify reason."),(0,a.kt)("p",{parentName:"li"},"serverError: code:500\uff0ctype:error"),(0,a.kt)("p",{parentName:"li"},"clientError: code:400, type:warning"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { serverError, clientError } from '@ones-op/node-error'\n\nexport async function TestServerError() {\n  throw serverError('this is server error reason.')\n}\n\nexport async function TestClientError() {\n  throw clientError('this is client error reason.')\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the plug-in calls the sdk method in the registration interface, the sdk method may throw an exception. At this time, the plug-in developer can also directly throw the error in the registration interface. The rules are as follows:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the sdk error information is converted into the standard error of the plug-in interface, the conversion rules are as follows: level is converted to type, statusCode is converted to code, and reason is converted to reason.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'When the statusCode in the sdk error is 500, it means that the error is a platform-side error, and the corresponding error reason should not be directly exposed to the user, so at this time, the reason in the error will be uniformly converted to "Service unavailable. Try again later."')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It also provides a function to convert sdk errors into plug-in interface errors, which can be modified and thrown again:"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { sdkErrorToPluginError } from '@ones-op/node-error'\nimport { isExist } from '@ones-op/node-file'\n\nexport async function testSdkErrorToPluginError(request: PluginRequest) {\n  try {\n    await isExist('../test.txt')\n  } catch (e) {\n    const pluginErr = sdkErrorToPluginError(e)\n    pluginErr.reason = 'test'\n    throw pluginErr\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We have also made a series of summaries on the causes of common errors. These error causes are more standard. Plug-in developers can consider using these standard errors when throwing errors. The specific usage is as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CommonReason, serverError } from '@ones-op/node-error'\n\nexport async function testCommonReason(request: PluginRequest) {\n  throw serverError(CommonReason.NetworkError)\n}\n")))),(0,a.kt)("h4",{id:"front-end-processing-logic"},"Front-end processing logic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We recommend using the ",(0,a.kt)("a",{parentName:"p",href:"../../../reference/packages/fetch"},"OPFetch")," SDK method we provide when calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"ONES interface")," to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"ONES interface")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"OPFetch"),", we A default behavior for handling errors is built into ",(0,a.kt)("inlineCode",{parentName:"p"},"OPFetch"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"default error handling"),(0,a.kt)("p",{parentName:"li"},"By default, we will automatically pop up the error message for the interface handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"@ones-op/node-error"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPFetch } from '@ones-op/fetch'\n\nconst fetchData = async () => {\n  try {\n    await OPFetch.post('/project/api/project/hello', {})\n  } catch (e) {\n    // OPFetch will pop up an error message in the interceptor by default, no need for developers to pop up the window manually\n    // toast.error(e?.errorMessage)\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Custom Error Handling"),(0,a.kt)("p",{parentName:"li"},"If you need to customize error handling, set ",(0,a.kt)("inlineCode",{parentName:"p"},"autoErrorToast")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"OPFetch")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OPFetch } from '@ones-op/fetch'\n\nconst fetchData = async () => {\n  try {\n    await OPFetch.post(\n      '/project/api/project/hello',\n      {},\n      {\n        // Turn off the built-in automatic error reporting\n        autoErrorToast: false,\n      }\n    )\n  } catch (e) {\n    // User-definable error handling behavior\n  }\n}\n")),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("p",null,"For detailed parameters, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/packages/node-error/"},"@ones-op/node-error")))}c.isMDXComponent=!0}}]);