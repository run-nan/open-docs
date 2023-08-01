"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[74400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={id:"structure",sidebar_position:5},o="\u76ee\u5f55\u7ed3\u6784",i={unversionedId:"guide/structure",id:"version-1.x/guide/structure",title:"\u76ee\u5f55\u7ed3\u6784",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guide/structure.md",sourceDirName:"guide",slug:"/guide/structure",permalink:"/open-docs/zh-CN/docs/guide/structure",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:5,frontMatter:{id:"structure",sidebar_position:5},sidebar:"guide",previous:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/open-docs/zh-CN/docs/guide/create"},next:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/open-docs/zh-CN/docs/guide/development"}},p={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784-1",level:3},{value:"\u76ee\u5f55\u4ecb\u7ecd",id:"\u76ee\u5f55\u4ecb\u7ecd",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u3001\u66f4\u96c6\u6210\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u4f7f\u7528 ONES CLI \u521b\u5efa\u7684\u63d2\u4ef6\u5de5\u7a0b\u90fd\u9075\u5faa\u76f8\u540c\u7684\u57fa\u672c\u76ee\u5f55\u7ed3\u6784\u3002"),(0,a.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784-1"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 <Plugin name>\n  \u251c\u2500\u2500 backend # \u540e\u7aef\u8d44\u6e90\u76ee\u5f55\n  \u2502\xa0\xa0 \u251c\u2500\u2500 src\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.ts\n  \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n  \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n  \u251c\u2500\u2500 config # \u63d2\u4ef6\u914d\u7f6e\n  \u2502\xa0\xa0 \u251c\u2500\u2500 ci-deploy.yaml\n  \u2502\xa0\xa0 \u251c\u2500\u2500 local.yaml\n  \u2502\xa0\xa0 \u251c\u2500\u2500 upgrade.yaml\n  \u2502\xa0\xa0 \u2514\u2500\u2500 plugin.yaml\n  \u251c\u2500\u2500 web # \u524d\u7aef\u8d44\u6e90\u76ee\u5f55\n  \u2502\xa0\xa0 \u251c\u2500\u2500 node_modules\n  \u2502\xa0\xa0 \u251c\u2500\u2500 public\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg # \u63d2\u4ef6 Logo\n  \u2502\xa0\xa0 \u251c\u2500\u2500 browserslist\n  \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n  \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n  \u251c\u2500\u2500 workspace\n  \u2502   \u2514\u2500\u2500 language # \u914d\u7f6e\u6587\u4ef6\u4f7f\u7528\u7684\u8bed\u8a00\u5305\n  \u2502   \u2502   \u2514\u2500\u2500 zh.yaml # \u7b80\u4f53\u4e2d\u6587\n  \u2502   \u2502   \u2514\u2500\u2500 en.yaml # \u82f1\u6587\n  \u2502   \u2502   \u2514\u2500\u2500 ja.yaml # \u65e5\u6587\n  \u2502   \u2514\u2500\u2500 plugin.sql\n  \u251c\u2500\u2500 package-lock.json\n  \u251c\u2500\u2500 package.json\n  \u251c\u2500\u2500 node_modules\n  \u251c\u2500\u2500 README.md\n")),(0,a.kt)("h3",{id:"\u76ee\u5f55\u4ecb\u7ecd"},"\u76ee\u5f55\u4ecb\u7ecd"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File/Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u8d44\u6e90\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend / package.json"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5de5\u7a0b\u540e\u7aef\u7684\u5143\u6570\u636e\u6587\u4ef6\uff0c\u5305\u62ec\u4f60\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u7684\u4f9d\u8d56\u6216\u811a\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/ci-deploy.yaml"},"config / ci-deploy.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5de5\u7a0b\u6301\u7eed\u96c6\u6210\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/local.yaml"},"config / local.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u8c03\u8bd5\u914d\u7f6e\uff08\u4e0d\u4f1a\u88ab git \u8bb0\u5f55\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/upgrade.yaml"},"config / upgrade.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5347\u7ea7\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../reference/config/plugin.yaml"},"config / plugin.yaml")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684\u914d\u7f6e\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web"),(0,a.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef\u8d44\u6e90\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web / package.json"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5de5\u7a0b\u524d\u7aef\u7684\u5143\u6570\u636e\u6587\u4ef6\uff0c\u5305\u62ec\u4f60\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u7684\u4f9d\u8d56\u6216\u811a\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"web / public / logo.svg"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684 Logo\uff08\u53ea\u4f1a\u8bfb\u53d6 logo.svg\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workspace"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684\u7269\u7406\u5b58\u50a8\u7a7a\u95f4\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u5b58\u653e\u4e00\u4e9b\u63d2\u4ef6\u7684\u914d\u7f6e\u6216\u5185\u5bb9\uff0c\u5171\u63d2\u4ef6\u8fd0\u884c\u65f6\u6d88\u8d39")))))}d.isMDXComponent=!0}}]);