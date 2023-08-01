"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[95576],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,l(l({ref:e},d),{},{components:r})):n.createElement(f,l({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79988:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"status-code",sidebar_position:3},l="Status Codes",i={unversionedId:"openapi/status-code",id:"version-1.x/openapi/status-code",title:"Status Codes",description:"The ONES REST API uses the standard HTTP status codes.",source:"@site/versioned_docs/version-1.x/openapi/status-code.md",sourceDirName:"openapi",slug:"/openapi/status-code",permalink:"/docs/openapi/status-code",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:3,frontMatter:{id:"status-code",sidebar_position:3},sidebar:"openapi",previous:{title:"Authorization",permalink:"/docs/openapi/authorization"},next:{title:"OAuth 2.0 Scopes",permalink:"/docs/openapi/scope"}},p={},s=[],d={toc:s};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"status-codes"},"Status Codes"),(0,a.kt)("p",null,"The ONES REST API uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"standard HTTP status codes"),"."),(0,a.kt)("p",null,"The response body of the error response is structured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "result":"xxx",\n    "errorCode":"XXX",\n    "errorMsg":"XXX",\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"result\uff1aThe result of the current request\uff0c SUCCESS | FAIL."),(0,a.kt)("li",{parentName:"ul"},"errorCode\uff1aError code."),(0,a.kt)("li",{parentName:"ul"},"errorMsg\uff1aError message.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,a.kt)("td",{parentName:"tr",align:null},"Unauthorized\u3001Invalid access token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:null},"Forbidden\u3001Invalid scope")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BadGateway"),(0,a.kt)("td",{parentName:"tr",align:null},"Gateway Service Error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internal Server Error"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal Server Error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"InvalidParameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NotFound"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource Not Found\u3001API Not Found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"InvalidFileExt"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid file extension")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ConstraintViolation"),(0,a.kt)("td",{parentName:"tr",align:null},"Constraint Violation")))))}u.isMDXComponent=!0}}]);