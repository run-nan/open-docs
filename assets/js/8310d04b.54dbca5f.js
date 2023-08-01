"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[45981],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,l(l({ref:e},c),{},{components:r})):n.createElement(k,l({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19254:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"scope",sidebar_position:4},l="OAuth 2.0 Scopes",i={unversionedId:"openapi/scope",id:"openapi/scope",title:"OAuth 2.0 Scopes",description:"| Scope name                     | Description                          |",source:"@site/docs/openapi/scope.md",sourceDirName:"openapi",slug:"/openapi/scope",permalink:"/docs/next/openapi/scope",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:4,frontMatter:{id:"scope",sidebar_position:4},sidebar:"openapi",previous:{title:"Status Codes",permalink:"/docs/next/openapi/status-code"},next:{title:"Introduction",permalink:"/docs/next/openapi/api/auth/auth"}},p={},s=[],c={toc:s};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oauth-20-scopes"},"OAuth 2.0 Scopes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scope name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:testcase:library"),(0,a.kt)("td",{parentName:"tr",align:null},"Access test case library information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write:testcase:library"),(0,a.kt)("td",{parentName:"tr",align:null},"Add, edit, delete test case library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issue"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write:project:issue"),(0,a.kt)("td",{parentName:"tr",align:null},"Add, edit, delete issue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:project"),(0,a.kt)("td",{parentName:"tr",align:null},"Access project information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write:project:project"),(0,a.kt)("td",{parentName:"tr",align:null},"Add, edit, delete project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issueType"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issueStatus"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issueField"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issue-workflow"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue workflow")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write:project:issue-workflow"),(0,a.kt)("td",{parentName:"tr",align:null},"Add, edit, delete issue workflow")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read:project:issue-attachment"),(0,a.kt)("td",{parentName:"tr",align:null},"Access issue attachment information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write:project:issue-attachment"),(0,a.kt)("td",{parentName:"tr",align:null},"Add, edit, delete issue attachment")))))}d.isMDXComponent=!0}}]);