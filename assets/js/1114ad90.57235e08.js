"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[2111],{17942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(28957),a=(n(50959),n(17942));const o={id:"package",sidebar_position:9},i="Package",l={unversionedId:"guide/package",id:"guide/package",title:"Package",description:"Overview",source:"@site/docs/guide/package.md",sourceDirName:"guide",slug:"/guide/package",permalink:"/open-docs/docs/guide/package",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:9,frontMatter:{id:"package",sidebar_position:9},sidebar:"guide",previous:{title:"Lifecycle",permalink:"/open-docs/docs/guide/lifecycle"},next:{title:"Deploy",permalink:"/open-docs/docs/guide/deploy"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"package"},"Package"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"When the plugin development is complete and the self test passes, you may want to make a plugin package to provide test verification. We provide you with a very convenient packaging method in ONES CLI, you only need to execute an instruction to complete the operation."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"In the root directory of the plugin project, execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx op packup\n")),(0,a.kt)("p",null,"The following actions are completed during the packaging process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"validating project directory structure or files status"),(0,a.kt)("li",{parentName:"ol"},"Checking module constraints"),(0,a.kt)("li",{parentName:"ol"},"Checking ability relate module"),(0,a.kt)("li",{parentName:"ol"},"Updating min_system_version in plugin.yaml"),(0,a.kt)("li",{parentName:"ol"},"Cleaning web & backend dist folders"),(0,a.kt)("li",{parentName:"ol"},"Building project dist files"),(0,a.kt)("li",{parentName:"ol"},"Generate plugin package")),(0,a.kt)("p",null,"After successful packaging, the console will output project related information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Successfully packed up the project\n")),(0,a.kt)("p",null,"After the package is completed, the plugin package is stored in the root directory of the plugin project, and you can take the plugin package to the corresponding ONES for installation."))}d.isMDXComponent=!0}}]);