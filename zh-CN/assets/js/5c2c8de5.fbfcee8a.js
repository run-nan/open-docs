"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[1e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(n),u=a,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},65995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"\u63d2\u4ef6\u5728 ONES \u7cfb\u7edf\u4e2d\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4ecb\u7ecd\u3002"},i="\u8fd0\u884c\u65f6\u73af\u5883",p={unversionedId:"guide/advanced/runtime-environment",id:"version-1.x/guide/advanced/runtime-environment",title:"\u8fd0\u884c\u65f6\u73af\u5883",description:"\u63d2\u4ef6\u5728 ONES \u7cfb\u7edf\u4e2d\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4ecb\u7ecd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guide/advanced/runtime-environment.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/runtime-environment",permalink:"/open-docs/zh-CN/docs/guide/advanced/runtime-environment",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{description:"\u63d2\u4ef6\u5728 ONES \u7cfb\u7edf\u4e2d\u7684\u8fd0\u884c\u65f6\u73af\u5883\u4ecb\u7ecd\u3002"},sidebar:"guide",previous:{title:"\u65ad\u70b9\u8c03\u8bd5",permalink:"/open-docs/zh-CN/docs/guide/advanced/debugger"}},c={},s=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u540e\u7aef",id:"\u540e\u7aef",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fd0\u884c\u65f6\u73af\u5883"},"\u8fd0\u884c\u65f6\u73af\u5883"),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u5c06\u4f1a\u4ecb\u7ecd\u63d2\u4ef6\u5728 ONES \u7cfb\u7edf\u4e2d\u7684\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u6b64\u7ae0\u8282\u4e86\u89e3\u5230\u63d2\u4ef6\u7684\u5b9e\u9645\u8fd0\u884c\u73af\u5883\uff0c\u4ece\u800c\u77e5\u9053\u63d2\u4ef6\u7684\u5199\u6cd5\u8fb9\u754c\u3002"),(0,a.kt)("h2",{id:"\u540e\u7aef"},"\u540e\u7aef"),(0,a.kt)("p",null,"ONES \u5f00\u653e\u5e73\u53f0 Node.js Host \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patriksimek/vm2"},"VM2")," \u63d0\u4f9b\u4e86\u4e00\u5957\u63d2\u4ef6\u540e\u7aef\u8fd0\u884c\u7684\u6c99\u7bb1\u73af\u5883\uff0c\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4ee5\u53ca\u4efb\u4f55\u80fd\u529b\u65b9\u6cd5\u5747\u7531 Host \u63a5\u6536\u5230\u5f00\u653e\u5e73\u53f0\u7684\u6d88\u606f\u540e\u8c03\u8d77\u6267\u884c\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec",(0,a.kt)("strong",{parentName:"p"},"\u5f3a\u70c8\u4e0d\u5efa\u8bae\u4f60\u4f7f\u7528\u5185\u5b58\u64cd\u4f5c"),"\uff08\u5168\u5c40\u53d8\u91cf\u7b49\uff09\u3002\u5f00\u653e\u5e73\u53f0\u63d0\u4f9b\u7684\u662f\u57fa\u4e8e\u65b9\u6cd5\u7ea7\u522b\u8c03\u7528\uff08\u7c7b ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Function_as_a_service"},"FaaS")," \u6a21\u5f0f\uff09\u7684\u540e\u7aef\u63d2\u4ef6\u4f53\u7cfb\uff0c\u5f00\u653e\u5e73\u53f0\u5185\u90e8\u8c03\u5ea6\u53ef\u80fd\u4f1a\u5bf9\u63d2\u4ef6\u8fdb\u884c\u91cd\u542f\u7b49\u64cd\u4f5c\uff0c\u56e0\u6b64\uff0c\u5185\u5b58\u64cd\u4f5c\u662f\u975e\u5e38\u4e0d\u53ef\u9760\u7684\u3002")),(0,a.kt)("p",null,"Node.js Host \u63d0\u4f9b\u7684\u662f\u4e00\u4e2a\u76f8\u5bf9\u5bbd\u677e\u7684\u6c99\u7bb1\u73af\u5883\uff0c\u5bf9\u4e8e Node.js \u539f\u751f\u6a21\u5757\u7684\u4f7f\u7528\u5e76\u6ca1\u6709\u505a\u8fc7\u591a\u7684\u9650\u5236\uff0c\u800c\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"builtin: ['*']")," \u7684\u65b9\u5f0f\u5168\u91cf\u652f\u6301\u63d2\u4ef6\u4f7f\u7528\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u80fd\u62ff\u5230\u7684\u539f\u751f\u6a21\u5757\u4ecd\u7136\u662f\u4e00\u4e2a Node.js \u63d0\u4f9b\u7684\u5b50\u96c6\uff0c\u56e0\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/patriksimek/vm2"},"VM2")," \u4f1a\u81ea\u52a8\u5904\u7406\u6389\u4e00\u4e9b\u4e0d\u5b89\u5168\u7684\u6a21\u5757\u6216\u8005\u65b9\u6cd5\uff0c\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"process.exit")," \u65b9\u6cd5\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u63d2\u4ef6\u6a21\u7248\u4e2d\u914d\u7f6e\u7684\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u5199\u6cd5\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," \u6a21\u7248\uff0c\u4f46\u8fd9\u5e76\u4e0d\u4ee3\u8868\u7740\u63d2\u4ef6\u7684\u6700\u7ec8\u8fd0\u884c\u73af\u5883\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM"),"\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u540e\u7aef\u6784\u5efa\u5de5\u5177\u4f1a\u5c06\u4f60\u7684\u4ee3\u7801\u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u5f15\u7528\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u5e93\u4e2d\u7684\u4ee3\u7801 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"},"Tree Shaking")," \u540e\u5168\u90e8\u6253\u5305\u8fdb ",(0,a.kt)("inlineCode",{parentName:"p"},"/backend/dist")," \u76ee\u5f55\u4e0b\uff0c\u4ee5\u6b64\u6d88\u9664\u4ee3\u7801\u4e2d\u5b58\u5728\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u8bed\u6cd5\u3002\u56e0\u6b64\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u7eaf ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u5bfc\u51fa\u7684\u5e93\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301")," ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," \u5f15\u7528\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u9ed8\u8ba4 ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u5bfc\u51fa\u7684\u5e93\uff08package.json ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5b57\u6bb5\u5165\u53e3\u6587\u4ef6\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"ESM")," \u683c\u5f0f\uff09\uff0c\u4e5f\u6682",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301")," ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," \u5f15\u7528\u3002")))}m.isMDXComponent=!0}}]);