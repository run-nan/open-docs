"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[95371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Slots",i={unversionedId:"abilities/slot/slot",id:"abilities/slot/slot",title:"Slots",description:"There are three types of front-end slots: global slots, application slots, and module slots.",source:"@site/docs/abilities/slot/slot.md",sourceDirName:"abilities/slot",slug:"/abilities/slot/",permalink:"/open-docs/docs/next/abilities/slot/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",next:{title:"App slot",permalink:"/open-docs/docs/next/abilities/slot/app/"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slots"},"Slots"),(0,a.kt)("p",null,"There are three types of front-end slots: global slots, application slots, and module slots."),(0,a.kt)("p",null,"The available hook of a slot is divided into two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Global data: that can be accessed by all slots (except for that have a special note on the slot page), for example,the plugin info, the organization info, the team info, the user info, etc."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#usePluginInfo"},"usePluginInfo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useOrganizationInfo"},"useOrganizationInfo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useTeamInfo"},"useTeamInfo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useUserInfo"},"useUserInfo")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Context data: that can only be accessed within the scope. For example, the slot under the path "ONES Project" - "Project component" can get the project info instead of the test plan info. Please refer to the chapter "Available Hook API" of a slot page.'))),(0,a.kt)("p",null,"The supported configuration options by a slot will only list the configuration that needs special instructions, and the configurations of the following categories will not be listed additionally:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The configuration added by the ONES CLI automatically:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../reference/config/plugin.yaml#moduleId"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../reference/config/plugin.yaml#title"},"title")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../reference/config/plugin.yaml#entry"},"entry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../reference/config/plugin.yaml#enablememoryrouter"},"enableMemoryRouter")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The configuration supported by all the slots by default (that are not supported will be noted on the slot page):"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../reference/config/plugin.yaml#modulePermission"},"permission"))))))}u.isMDXComponent=!0}}]);