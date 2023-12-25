"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[4827],{17942:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(50959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(r),u=n,g=k["".concat(i,".").concat(u)]||k[u]||s[u]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[k]="string"==typeof e?e:n,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(28957),n=(r(50959),r(17942));const l={toc_max_heading_level:4},o="@ones-op/node-error",p={unversionedId:"reference/packages/node-error/node-error",id:"reference/packages/node-error/node-error",title:"@ones-op/node-error",description:"Require",source:"@site/docs/reference/packages/node-error/node-error.md",sourceDirName:"reference/packages/node-error",slug:"/reference/packages/node-error/",permalink:"/open-docs/docs/reference/packages/node-error/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{toc_max_heading_level:4},sidebar:"reference",previous:{title:"@ones-op/node-third-import",permalink:"/open-docs/docs/reference/packages/node-third-import/"},next:{title:"Changelog",permalink:"/open-docs/docs/reference/packages/node-error/changelog"}},i={},m=[{value:"Require",id:"require",level:2},{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"clientError",id:"clienterror",level:3},{value:"Params",id:"params",level:4},{value:"Example",id:"example",level:4},{value:"serverError",id:"servererror",level:3},{value:"Params",id:"params-1",level:4},{value:"Example",id:"example-1",level:4},{value:"sdkErrorToPluginError",id:"sdkerrortopluginerror",level:3},{value:"Params",id:"params-2",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-2",level:4},{value:"Type",id:"type",level:2},{value:"PluginError",id:"pluginerror",level:3},{value:"Enum",id:"enum",level:2},{value:"PluginErrorTypeEnum",id:"PluginErrorTypeEnum",level:3},{value:"CommonReason",id:"CommonReason",level:3}],d={toc:m},k="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-opnode-error"},"@ones-op/node-error"),(0,n.kt)("h2",{id:"require"},"Require"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v3.13.31+")))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plug-in project, and execute the following command to install dependencies:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-error\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"clienterror"},"clientError"),(0,n.kt)("p",null,"throw client error"),(0,n.kt)("h4",{id:"params"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"wrong reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { clientError } from '@ones-op/node-error'\n\nexport async function testClientError() {\n  throw clientError('test client error')\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"servererror"},"serverError"),(0,n.kt)("p",null,"Throw server error error"),(0,n.kt)("h4",{id:"params-1"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"wrong reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { serverError } from '@ones-op/node-error'\n\nexport async function testServerError() {\n  throw serverError('test server error')\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sdkerrortopluginerror"},"sdkErrorToPluginError"),(0,n.kt)("p",null,"The error of the sdk package is converted into a plug-in registration interface error"),(0,n.kt)("h4",{id:"params-2"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"abilityError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The wrong type of an sdk package"),(0,n.kt)("td",{parentName:"tr",align:"left"},"any"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Plugin error corresponding to sdk package error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PluginError")))),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { sdkErrorToPluginError } from '@ones-op/node-error'\n\nexport async function testSdkErrorToPluginErrorr() {\n  const e = new AbilityError('error', 'errrcode', 500, 'reason')\n  e.statusCode = 500\n  e.reason = 'reason'\n  e.level = 'level'\n  e.errcode = 'errcode'\n  const pluginError = SdkErrorToPluginError(e)\n}\n")),(0,n.kt)("h2",{id:"type"},"Type"),(0,n.kt)("h3",{id:"pluginerror"},"PluginError"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error level"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#PluginErrorTypeEnum"},(0,n.kt)("inlineCode",{parentName:"a"},"PluginErrorTypeEnum")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"wrong reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"statusCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Corresponding http status code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h2",{id:"enum"},"Enum"),(0,n.kt)("h3",{id:"PluginErrorTypeEnum"},"PluginErrorTypeEnum"),(0,n.kt)("p",null,"pluginError error level"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Enum"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PluginErrorTypeEnum.error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error level")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PluginErrorTypeEnum.warning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"warning level")))),(0,n.kt)("h3",{id:"CommonReason"},"CommonReason"),(0,n.kt)("p",null,"pluginError common error reason"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Enum"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CommonReason.RequestTimeOut"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Request time out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CommonReason.ServiceUnresponsive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service unresponsive.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CommonReason.ServiceIsNotAvailable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service is not available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CommonReason.InvalidParameter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid parameter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CommonReason.NetworkError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Network error.")))))}s.isMDXComponent=!0}}]);