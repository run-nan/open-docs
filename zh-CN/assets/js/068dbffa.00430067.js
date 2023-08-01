"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[71290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2,description:"\u591a\u6837\u7684\u80fd\u529b\u63d0\u4f9b\uff0c\u8f7b\u677e\u5236\u5b9a\u4f60\u7684 ONES\u3002"},l="\u6dfb\u52a0\u80fd\u529b",o={unversionedId:"guide/abilities/add-abilities",id:"guide/abilities/add-abilities",title:"\u6dfb\u52a0\u80fd\u529b",description:"\u591a\u6837\u7684\u80fd\u529b\u63d0\u4f9b\uff0c\u8f7b\u677e\u5236\u5b9a\u4f60\u7684 ONES\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guide/abilities/add-abilities.md",sourceDirName:"guide/abilities",slug:"/guide/abilities/add-abilities",permalink:"/zh-CN/docs/next/guide/abilities/add-abilities",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u591a\u6837\u7684\u80fd\u529b\u63d0\u4f9b\uff0c\u8f7b\u677e\u5236\u5b9a\u4f60\u7684 ONES\u3002"},sidebar:"guide",previous:{title:"\u6dfb\u52a0\u63d2\u69fd",permalink:"/zh-CN/docs/next/guide/abilities/add-slot"},next:{title:"\u56fd\u9645\u5316",permalink:"/zh-CN/docs/next/guide/abilities/multilingual"}},p={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u80fd\u529b",id:"\u80fd\u529b",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6dfb\u52a0\u80fd\u529b"},"\u6dfb\u52a0\u80fd\u529b"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5bf9 ONES \u7684\u4e1a\u52a1\u6a21\u5757\u4e2d\u7684\u4e00\u4e9b\u884c\u4e3a\u505a\u5b9a\u5236\u5316\u7684\u64cd\u4f5c\uff0c\u6211\u4eec\u4e5f\u4e3a\u4f60\u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u7684\u201c\u80fd\u529b\u201d\u3002\u8fd9\u4e9b\u80fd\u529b\u662f\u4f60\u80fd\u5b9a\u4e49\u4fee\u6539 ONES \u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u4ee5\u53ca\u80fd\u4f7f\u7528\u3001\u8bbf\u95ee ONES \u73b0\u6709\u8d44\u6e90\u7684\u6700\u5c0f\u5355\u4f4d\u3002\u524d\u9762\u8bf4\u5230\u7684\u201c\u63d2\u69fd\u201d\uff0c\u90a3\u662f\u7eaf\u524d\u7aef\u7684\u80fd\u529b\uff0c\u548c\u73b0\u5728\u8bf4\u7684\u80fd\u529b\u90fd\u4e0d\u592a\u4e00\u6837\u3002\u201c\u63d2\u69fd\u201d\u662f\u4f60\u5bf9 ONES UI \u8fdb\u884c\u8c03\u6574\u3001\u4fee\u6539\u7684\u6700\u5c0f\u5355\u4f4d\u3002"),(0,a.kt)("h2",{id:"\u80fd\u529b"},"\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/abilities/basic/"},"\u57fa\u7840\u80fd\u529b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/abilities/business/"},"\u4e1a\u52a1\u80fd\u529b"))),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u5de5\u7a0b\u6839\u76ee\u5f55\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx op add ability"),"\u6307\u4ee4\uff0c\u53ef\u4ee5\u5411\u63d2\u4ef6\u65b0\u589e\u5f00\u653e\u80fd\u529b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx op add ability\n  \u2714 Validating the input params\n  \u2714 Validating project files exists\n  \u2714 Generating initial answers by input params\n  \u2714 Parsing plugin config content\n\nPre-require tasks run successfully\n? Please select the ability you want to add: \u2026\naccount@1.0.0\napi-register-jack@1.0.0\napi-register-jack@2.0.0\nconfiguration-page@1.0.0\ncustom-permission@1.0.0\nitem-handler@1.0.0\nitem-mutation@1.0.0\nproject-custom-component@1.0.0\nscript-field-float@1.0.0\nscript-id@1.0.0\nsend-short-message@1.0.0\nsimple-auth@1.0.0\ntask-event-handler@1.0.0 (Ability does not match current system version)\n")),(0,a.kt)("p",null,"\u5728\u5217\u8868\u4e2d\u53ef\u4ee5\u901a\u8fc7\u65b9\u5411\u952e\u6216\u8f93\u5165\u80fd\u529b\u540d\u79f0\u641c\u7d22\u5e76\u9009\u62e9\u63a5\u53e3\u76f8\u5173\u80fd\u529b\u6216\u4e1a\u52a1\u5f00\u653e\u80fd\u529b\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5df2\u767b\u5f55\u7684\u60c5\u51b5\u4e0b\uff0c\u5de5\u5177\u4f1a\u6839\u636e\u6240\u8fde\u73af\u5883\uff0c\u63d0\u793a\u54ea\u4e9b\u80fd\u529b\u4e0d\u53ef\u7528")),(0,a.kt)("p",null,"\u9009\u5b9a\u80fd\u529b\u7248\u672c\u540e\uff0c\u5982\u80fd\u529b\u7248\u672c\u5b58\u5728\u591a\u6a21\u7248\u8fd8\u9700\u9009\u62e9\u6a21\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Please select a template: \u2026\n1.0\n1.0-cron\n\n")),(0,a.kt)("p",null,"\u5982\u679c\u9009\u5b9a\u7684\u80fd\u529b\u5fc5\u987b\u548c\u6a21\u7248\u7ed1\u5b9a\u4f7f\u7528\uff0c\u5219\u8fd8\u9700\u6309\u7167\u63d0\u793a\u7ed1\u5b9a\u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Please enter the module 'ones:global:modal' title you want to add: \u2026\n\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\u767b\u5f55\u6821\u9a8c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u7b80\u5355\u767b\u5f55\u6821\u9a8c\u80fd\u529b"),"\n\u6267\u884c\u4e0b\u65b9\u6307\u4ee4\uff0c\u5e76\u9009\u62e9\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleAuth")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx op add ability\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"/config/plugin.yaml")," \u4e2d")),(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.yaml")," \u6587\u4ef6\u7684 abilities \u5b57\u6bb5\u4e2d\u65b0\u589e\u4e86\u4e00\u6bb5\u5185\u5bb9"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/plugin.yaml"',title:'"/config/plugin.yaml"'},"abilities:\n  - id: iKvkTB5A\n    name: Simple-login\n    version: 1.0.0\n    abilityType: SimpleAuth\n    function:\n      validateFunc: SimpleAuthValidate\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5728",(0,a.kt)("inlineCode",{parentName:"strong"},"/backend/src"),"\u4e2d")),(0,a.kt)("p",{parentName:"li"},"\u4f1a\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-auth.ts"),"\uff0c\u8fd9\u4e2a\u5c31\u662f\u6211\u4eec\u63d0\u4f9b\u7ed9\u4f60\u7684\u80fd\u529b\u6a21\u7248\u3002"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u76f8\u540c\u7684\u80fd\u529b\u53ef\u4ee5\u91cd\u590d\u88ab\u6dfb\u52a0\u5230\u63d2\u4ef6\u5de5\u7a0b\u4e2d\uff0c\u5f53\u80fd\u529b\u88ab\u91cd\u590d\u6dfb\u52a0\u65f6\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"backend/src")," \u4e0b\u91cd\u590d\u751f\u6210\u6a21\u7248"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u90fd\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"config/plugin.yaml")," \u4e2d\u751f\u6210\u914d\u7f6e"))))}c.isMDXComponent=!0}}]);