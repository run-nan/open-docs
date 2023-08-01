"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[55086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||c[f]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:11,description:"Download files from the plugin workspace."},o="Download file",l={unversionedId:"abilities/basic/downloadFile",id:"abilities/basic/downloadFile",title:"Download file",description:"Download files from the plugin workspace.",source:"@site/docs/abilities/basic/downloadFile.mdx",sourceDirName:"abilities/basic",slug:"/abilities/basic/downloadFile",permalink:"/docs/next/abilities/basic/downloadFile",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"Download files from the plugin workspace."},sidebar:"abilities",previous:{title:"Upload file",permalink:"/docs/next/abilities/basic/uploadFile"},next:{title:"Plugin file operation",permalink:"/docs/next/abilities/basic/plugin-fileOP"}},d={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2\uff1aAbility to use",id:"step-2ability-to-use",level:3},{value:"SDK",id:"sdk",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"download-file"},"Download file"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,a.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-ability"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.11.40+"),(0,a.kt)("td",{parentName:"tr",align:"left"},"v0.3.5+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This ability enables streaming downloading of files in the plugin storage space ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-ability\n")),(0,a.kt)("h3",{id:"step-2ability-to-use"},"Step 2\uff1aAbility to use"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"downloadFile")," method to specify the download path of the file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"downloadFile")," method returns a url of the file download address. You can download the file directly by accessing it through a browser or directly requesting the url."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The file must be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," directory, and the default validity time of the generated download link is 5 minutes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { downloadFile } from '@ones-op/node-ability'\n\nexport async function downloadUrl() {\n  const url = await downloadFile('plugin.sql')\n\n  return {\n    body: {\n      res: url,\n    },\n  }\n}\n")),(0,a.kt)("h2",{id:"sdk"},"SDK"),(0,a.kt)("p",null,"Parameters reference\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/packages/node-ability/"},"@ones-op/node-ability")))}c.isMDXComponent=!0}}]);