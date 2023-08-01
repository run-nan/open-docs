"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[45747],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58216:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const a={id:"sdk-error-handling",sidebar_position:14,description:"sdk error handling\u3002"},i="Sdk error handling",s={unversionedId:"abilities/basic/sdk-error-handling",id:"abilities/basic/sdk-error-handling",title:"Sdk error handling",description:"sdk error handling\u3002",source:"@site/docs/abilities/basic/sdk-error-handling.md",sourceDirName:"abilities/basic",slug:"/abilities/basic/sdk-error-handling",permalink:"/open-docs/docs/next/abilities/basic/sdk-error-handling",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:14,frontMatter:{id:"sdk-error-handling",sidebar_position:14,description:"sdk error handling\u3002"},sidebar:"abilities",previous:{title:"Plugin file operation",permalink:"/open-docs/docs/next/abilities/basic/plugin-fileOP"},next:{title:"App Modules",permalink:"/open-docs/docs/next/abilities/business/"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"wrong description",id:"wrong-description",level:4},{value:"Examples",id:"examples",level:4},{value:"log output",id:"log-output",level:4},{value:"Special error scenarios",id:"special-error-scenarios",level:4}],c={toc:d};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-error-handling"},"Sdk error handling"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,o.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-file"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"v3.13.31+"),(0,o.kt)("td",{parentName:"tr",align:"left"},"v0.6.0+")))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When using the sdk methods provided by ONES, some error scenarios may occur. There is a standard processing method for how to catch and identify errors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each sdk package has its own error type, for example, the ones-op/node-file package has the error type FileError, and the ones-op/node-database package has the error type DBError."),(0,o.kt)("li",{parentName:"ul"},"The error types corresponding to the sdk package and the error scenarios corresponding to the sdk can be found in the corresponding api documentation."),(0,o.kt)("li",{parentName:"ul"},"After knowing the error type corresponding to the sdk package, the plug-in developer can judge and obtain the error information by means of instanceof.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"wrong-description"},"wrong description"),(0,o.kt)("p",null,"Although each sdk package has its own error types, the corresponding types have common attributes, which are composed of reason, statusCode, level, and errcode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reason: Briefly describe the reason for the error."),(0,o.kt)("li",{parentName:"ul"},"level: Error level, which is divided into error and warning levels. An error at the error level indicates that an error has occurred that blocks related actions, and an error at the warning level indicates that an error has occurred but does not block related actions."),(0,o.kt)("li",{parentName:"ul"},"statusCode: It is consistent with the http status code, for example, 500 is an error on the platform side, and 400 is an error caused by the incorrect usage of the sdk caller."),(0,o.kt)("li",{parentName:"ul"},"errcode: The error code corresponding to the error, each error code corresponds to an error scenario.")),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here we use the makeDir method in the @ones-op/node-file package as an example."),(0,o.kt)("p",null,"This method has an error scenario. When the path passed in by the plug-in developer is not a legal path, a related error will be reported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n  await makeDir('../tmp/test')\n} catch (e) {\n  if (e instanceof FileError) {\n    // InvalidParameter\n    console.log(e.errcode)\n    // 400\n    console.log(e.statusCode)\n    // Invalid parameter.\n    console.log(e.reason)\n    // error\n    console.log(e.level)\n  }\n}\n")),(0,o.kt)("h4",{id:"log-output"},"log output"),(0,o.kt)("p",null,"After a plug-in fails to call the sdk method, a plug-in log of warning level will be automatically displayed. The content of the log is the error message. The plug-in administrator can view the information in the log interface of the plug-in details interface."),(0,o.kt)("h4",{id:"special-error-scenarios"},"Special error scenarios"),(0,o.kt)("p",null,"There is an error scenario common to all SDKs, which is an error on the platform side. When the errcode is ServerError, it means that an error has occurred on the platform side. At this time, the corresponding reason is the error stack information of the code. At this time, the plug-in developer needs to add reason is provided to technical support students to troubleshoot error messages."))}p.isMDXComponent=!0}}]);