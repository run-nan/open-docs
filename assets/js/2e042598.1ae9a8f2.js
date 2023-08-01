"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[98551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Introduction to the runtime environment of the plugin in the ONES system."},i="Runtime Environment",p={unversionedId:"guide/advanced/runtime-environment",id:"guide/advanced/runtime-environment",title:"Runtime Environment",description:"Introduction to the runtime environment of the plugin in the ONES system.",source:"@site/docs/guide/advanced/runtime-environment.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/runtime-environment",permalink:"/open-docs/docs/next/guide/advanced/runtime-environment",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{description:"Introduction to the runtime environment of the plugin in the ONES system."},sidebar:"guide",previous:{title:"Debugging",permalink:"/open-docs/docs/next/guide/advanced/debugger"}},s={},c=[{value:"Backend",id:"backend",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtime-environment"},"Runtime Environment"),(0,a.kt)("p",null,"This section will introduce the runtime environment of the plugin in the ONES system. You can read this section to know the actual runtime environment of the plugin so that you can know the boundaries of how the plugin is written."),(0,a.kt)("h2",{id:"backend"},"Backend"),(0,a.kt)("p",null,"ONES Open Platform Node.js HOST provides a sandbox environment for plugin backends based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patriksimek/vm2"},"VM2"),", where plugin lifecycle methods and any ability methods are called up and executed by the HOST after receiving messages from the Open Platform."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We ",(0,a.kt)("strong",{parentName:"p"},"strongly discourage you from using in-memory operations")," (global variables, etc.). The Open Platform provides a backend plugin system based on method-level calls (class ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Function_as_a_service"},"FaaS")," mode), and the Open Platform internal scheduling may perform restarts and other operations on the plugin, so memory operations are very unreliable.")),(0,a.kt)("p",null,"Node.js Host provides a relatively loose sandbox environment, and does not restrict the use of Node.js native modules much, but supports plugins in full with ",(0,a.kt)("inlineCode",{parentName:"p"},"builtin: ['*']"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The native modules that the plugin can get are still a subset of those provided by Node.js, because ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patriksimek/vm2"},"VM2")," will automatically get rid of unsafe modules or methods, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"process.exit")," method.")),(0,a.kt)("p",null,"We configured the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," template with ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," writing in the plugin template, but this does not mean that the final runtime environment of the plugin supports ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM"),"."),(0,a.kt)("p",null,"The plugin backend builder will ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"},"Tree Shaking")," and package your code and the code from the ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," library referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"/backend/dist")," directory to eliminate any ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," syntax from your code. Thus."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For pure ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," exported libraries, ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," references are ",(0,a.kt)("strong",{parentName:"p"},"not supported"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For libraries exported by default ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," (package.json ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," field entry file is in ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," format), ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," references are also ",(0,a.kt)("strong",{parentName:"p"},"not supported")," for now.")))}m.isMDXComponent=!0}}]);