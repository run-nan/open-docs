"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[75777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||n;return a?o.createElement(b,r(r({ref:t},u),{},{components:a})):o.createElement(b,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<n;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=a(87462),l=(a(67294),a(3905));const n={},r="Global upload modal slot",i={unversionedId:"abilities/slot/global/global-modal-upload",id:"version-1.x/abilities/slot/global/global-modal-upload",title:"Global upload modal slot",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/slot/global/global-modal-upload.md",sourceDirName:"abilities/slot/global",slug:"/abilities/slot/global/global-modal-upload",permalink:"/open-docs/docs/abilities/slot/global/global-modal-upload",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Error code slot",permalink:"/open-docs/docs/abilities/slot/global/error-code"},next:{title:"Header action slot",permalink:"/open-docs/docs/abilities/slot/global/layout-header-action/"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:global:modal:upload",id:"onesglobalmodalupload",level:4},{value:"ones:global:modal",id:"onesglobalmodal",level:4},{value:"Usage",id:"usage",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"global-upload-modal-slot"},"Global upload modal slot"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"v3.6.0+")))),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"We provide some slots for the global popup scene to use."),(0,l.kt)("p",null,"The slots currently supported are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onesglobalmodalupload"},"ones:global:modal:upload")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onesglobalmodal"},"ones:global:modal"))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("h4",{id:"onesglobalmodalupload"},"ones:global:modal:upload"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"description\uff1a")," This is a global modal module, which will be shown before uploading a file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,l.kt)("strong",{parentName:"p"},"1")," slots in each plugin, and up to ",(0,l.kt)("strong",{parentName:"p"},"1")," slots in the system."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In the rich text editor (such as description), the slot will not be activated if the image is inserted by copying and pasting.")),(0,l.kt)("h4",{id:"onesglobalmodal"},"ones:global:modal"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ONES Requirement:")," v3.11.40+"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"description\uff1a")," Global popup window module, used for global popup window interaction or ",(0,l.kt)("a",{parentName:"p",href:"../../business/layout-custom-quick-action#2%E6%97%A0%E7%95%8C%E9%9D%A2%E7%BA%AF%E9%80%BB%E8%BE%91%E7%B1%BB%E5%9E%8B"},"logic layer carrier")," that does not require an interface."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,l.kt)("strong",{parentName:"p"},"10")," slots in each plugin, and up to ",(0,l.kt)("strong",{parentName:"p"},"100")," slots in the system."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Currently, only the ",(0,l.kt)("a",{parentName:"p",href:"../../business/layout-custom-quick-action"},"Custom Layout Shortcut")," scenario is supported.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: ones-global-modal-upload-rd74\n    title: upload\n    moduleType: ones:global:modal:upload\n    preload: true\n    manual: true\n    entry: modules/ones-global-modal-upload-rd74/index.html\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Supported config options\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../reference/config/plugin.yaml#preload"},"preload")),(0,l.kt)("p",{parentName:"li"},"This option is recommended to be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../reference/config/plugin.yaml#manual"},"manual(required)")),(0,l.kt)("p",{parentName:"li"},"This option must be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../reference/config/plugin.yaml#icon"},"icon")),(0,l.kt)("p",{parentName:"li"},"Works for ",(0,l.kt)("inlineCode",{parentName:"p"},"ones:global:modal"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"event"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type: ",(0,l.kt)("inlineCode",{parentName:"li"},'"modal:ok"|"modal:cancel"'))),(0,l.kt)("p",{parentName:"li"},"Works for ",(0,l.kt)("inlineCode",{parentName:"p"},"ones:global:modal:upload"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"modal:ok")," means the user can continue to upload the file. ",(0,l.kt)("inlineCode",{parentName:"p"},"modal:cancel")," means the user can't upload the file."),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This option will be deprecated in the future.")))))}d.isMDXComponent=!0}}]);