"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[54001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?o.createElement(b,a(a({ref:t},c),{},{components:r})):o.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const l={},a="Error code slot",i={unversionedId:"abilities/slot/global/error-code",id:"version-1.x/abilities/slot/global/error-code",title:"Error code slot",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/slot/global/error-code.md",sourceDirName:"abilities/slot/global",slug:"/abilities/slot/global/error-code",permalink:"/open-docs/docs/abilities/slot/global/error-code",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Blank slot",permalink:"/open-docs/docs/abilities/slot/global/blank"},next:{title:"Global upload modal slot",permalink:"/open-docs/docs/abilities/slot/global/global-modal-upload"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:global:error:code",id:"onesglobalerrorcode",level:4},{value:"Usage",id:"usage",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"error-code-slot"},"Error code slot"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"v3.6.0+")))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This is a global error code module, used to intercept specified error codes to show customized information."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This slot will be deprecated in the future, use the plugin's standard error handling.")),(0,n.kt)("p",null,"The slots currently supported are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#onesglobalerrorcode"},"ones:global:error:code"))),(0,n.kt)("h2",{id:"slots"},"Slots"),(0,n.kt)("h4",{id:"onesglobalerrorcode"},"ones:global:error:code"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,n.kt)("strong",{parentName:"p"},"10")," slots in each plugin, and up to ",(0,n.kt)("strong",{parentName:"p"},"100")," slots in the system."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: ones-global-error-code-Q2fV\n    title: 'error code'\n    moduleType: ones:global:error:code\n    errorMessage:\n      ConstraintViolation.BetaRelatedFieldNotDeletable: This attribute cannot be deleted\n      ConstraintViolation.BetaRelatedFieldNotEditable: This attribute cannot be edited\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supported config options\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"errorMessage(required)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Array"))),(0,n.kt)("p",{parentName:"li"},"Configure the error text corresponding to the error code."))))}d.isMDXComponent=!0}}]);