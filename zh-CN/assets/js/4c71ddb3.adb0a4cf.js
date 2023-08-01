"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[10271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(i,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o="upgrade.yaml",p={unversionedId:"reference/config/upgrade.yaml",id:"reference/config/upgrade.yaml",title:"upgrade.yaml",description:"\u63d2\u4ef6\u5347\u7ea7\u7684\u8fc1\u79fb\u914d\u7f6e\u6587\u4ef6\uff0c\u58f0\u660e\u63d2\u4ef6\u5347\u7ea7\u65f6\u7684\u8d44\u6e90\u6587\u4ef6\u5904\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/config/upgrade.yaml.md",sourceDirName:"reference/config",slug:"/reference/config/upgrade.yaml",permalink:"/zh-CN/docs/next/reference/config/upgrade.yaml",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"local.yaml",permalink:"/zh-CN/docs/next/reference/config/local.yaml"},next:{title:"\u6ce8\u610f\u4e8b\u9879",permalink:"/zh-CN/docs/next/reference/packages/"}},i={},c=[{value:"workspace",id:"workspace",level:2},{value:"rule",id:"rule",level:3},{value:"exclude",id:"exclude",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgradeyaml"},"upgrade.yaml"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5347\u7ea7\u7684\u8fc1\u79fb\u914d\u7f6e\u6587\u4ef6\uff0c\u58f0\u660e\u63d2\u4ef6\u5347\u7ea7\u65f6\u7684\u8d44\u6e90\u6587\u4ef6\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\u4e0e\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/upgrade.yaml"',title:'"/config/upgrade.yaml"'},"workspace:\n  rule: save_new\n  exclude:\n    - a.txt\n    - temp/*\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/workspace")," \u76ee\u5f55\u4e0b\u5b58\u5728\u6587\u4ef6\uff0c\u5219\u4f60\u5fc5\u987b\u58f0\u660e\u6b64\u6587\u4ef6\uff0c\u63d2\u4ef6\u624d\u80fd\u5347\u7ea7\u6210\u529f\u3002")),(0,a.kt)("h2",{id:"workspace"},"workspace"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u5bf9\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/workspace")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u66ff\u6362\u89c4\u5219\u914d\u7f6e\uff0c\u7528\u4e8e\u89c4\u8303\u6587\u4ef6\u51b2\u7a81\u5904\u7406\u8fc7\u7a0b\u3002"),(0,a.kt)("h3",{id:"rule"},"rule"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a"),(0,a.kt)("inlineCode",{parentName:"li"},"'save_new' | 'save_old'"))),(0,a.kt)("p",null,"\u6587\u4ef6\u66ff\u6362\u89c4\u5219\uff0c\u53ef\u9009\u503c\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89c4\u5219"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"save_new")),(0,a.kt)("td",{parentName:"tr",align:null},"\u65b0\u6587\u4ef6\u8ddf\u65e7\u6587\u4ef6\u53d1\u751f\u51b2\u7a81\u65f6\uff0c\u4fdd\u7559\u65b0\u6587\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"save_old")),(0,a.kt)("td",{parentName:"tr",align:null},"\u65b0\u6587\u4ef6\u8ddf\u65e7\u6587\u4ef6\u53d1\u751f\u51b2\u7a81\u65f6\uff0c\u4fdd\u7559\u65e7\u6587\u4ef6")))),(0,a.kt)("h3",{id:"exclude"},"exclude"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7c7b\u578b\uff1a"),(0,a.kt)("inlineCode",{parentName:"li"},"(string | RegExp)[]"))),(0,a.kt)("p",null,"\u6392\u9664\u6587\u4ef6\u5217\u8868\uff0c\u652f\u6301\u6b63\u5219\u5339\u914d\uff0c\u8be5\u5217\u8868\u4e2d\u7684\u6587\u4ef6\u4f7f\u7528\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"rule")," \u76f8\u53cd\u7684\u89c4\u5219\u3002"))}d.isMDXComponent=!0}}]);