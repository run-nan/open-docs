"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[36059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"structure",sidebar_position:5},l="Directory structure",i={unversionedId:"guide/structure",id:"guide/structure",title:"Directory structure",description:"Overview",source:"@site/docs/guide/structure.md",sourceDirName:"guide",slug:"/guide/structure",permalink:"/docs/next/guide/structure",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:5,frontMatter:{id:"structure",sidebar_position:5},sidebar:"guide",previous:{title:"Create an Plugin",permalink:"/docs/next/guide/create"},next:{title:"Development",permalink:"/docs/next/guide/development"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Directory structure",id:"directory-structure-1",level:3},{value:"Catalogue introduction",id:"catalogue-introduction",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directory-structure"},"Directory structure"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"To provide a better and more integrated development experience, plugin projects created with ONES CLI follow the same basic directory structure."),(0,a.kt)("h3",{id:"directory-structure-1"},"Directory structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 <Plugin name>\n  \u251c\u2500\u2500 backend # backend resource directory\n  \u2502\xa0\xa0 \u251c\u2500\u2500 src\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.ts\n  \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n  \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n  \u251c\u2500\u2500 config # plugin configuration\n  \u2502\xa0\xa0 \u251c\u2500\u2500 ci-deploy.yaml\n  \u2502\xa0\xa0 \u251c\u2500\u2500 local.yaml\n  \u2502\xa0\xa0 \u251c\u2500\u2500 upgrade.yaml\n  \u2502\xa0\xa0 \u2514\u2500\u2500 plugin.yaml\n  \u251c\u2500\u2500 web # frontend resource directory\n  \u2502\xa0\xa0 \u251c\u2500\u2500 node_modules\n  \u2502\xa0\xa0 \u251c\u2500\u2500 public\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg # plugin Logo\n  \u2502\xa0\xa0 \u251c\u2500\u2500 browserslist\n  \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n  \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n  \u251c\u2500\u2500 workspace\n  \u2502   \u2514\u2500\u2500 language # language pack\n  \u2502   \u2502   \u2514\u2500\u2500 zh.yaml # Simplified Chinese\n  \u2502   \u2502   \u2514\u2500\u2500 en.yaml # English\n  \u2502   \u2502   \u2514\u2500\u2500 ja.yaml # Japanese\n  \u2502   \u2514\u2500\u2500 plugin.sql\n  \u251c\u2500\u2500 package-lock.json\n  \u251c\u2500\u2500 package.json\n  \u251c\u2500\u2500 node_modules\n  \u251c\u2500\u2500 README.md\n")),(0,a.kt)("h3",{id:"catalogue-introduction"},"Catalogue introduction"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File/Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend"),(0,a.kt)("td",{parentName:"tr",align:null},"backend resource directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend / package.json"),(0,a.kt)("td",{parentName:"tr",align:null},"the metadata file at the backend of the plugin project, including the dependencies or scripts that you install using the package manager")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/ci-deploy.yaml"},"config / ci-deploy.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"plugin project continuous integration configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/local.yaml"},"config / local.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"debug configuration locally (will not be recorded by git)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/upgrade.yaml"},"config / upgrade.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"plugin upgrade profile")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/plugin.yaml"},"config / plugin.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"configuration information for the plugin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web"),(0,a.kt)("td",{parentName:"tr",align:null},"frontend resource directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web / package.json"),(0,a.kt)("td",{parentName:"tr",align:null},"the metadata file at the frontend of the plugin project, including the dependencies or scripts that you install using the package manager")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web / public / logo.svg"),(0,a.kt)("td",{parentName:"tr",align:null},"logo of the plug-in (only logo.svg will be read)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workspace"),(0,a.kt)("td",{parentName:"tr",align:null},"the physical storage space of the plugin, where you can store some configuration or content of the plugin, which is consumed by the plug-in at runtime.")))))}d.isMDXComponent=!0}}]);