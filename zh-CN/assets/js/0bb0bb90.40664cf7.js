"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[14505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"package",sidebar_position:9},i="\u63d2\u4ef6\u6253\u5305",l={unversionedId:"guide/package",id:"version-1.x/guide/package",title:"\u63d2\u4ef6\u6253\u5305",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guide/package.md",sourceDirName:"guide",slug:"/guide/package",permalink:"/open-docs/zh-CN/docs/guide/package",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:9,frontMatter:{id:"package",sidebar_position:9},sidebar:"guide",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/open-docs/zh-CN/docs/guide/lifecycle"},next:{title:"\u6301\u7eed\u96c6\u6210",permalink:"/open-docs/zh-CN/docs/guide/deploy"}},p={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63d2\u4ef6\u6253\u5305"},"\u63d2\u4ef6\u6253\u5305"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5f53\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u5e76\u4e14\u81ea\u6d4b\u901a\u8fc7\u4e4b\u540e\uff0c\u4f60\u53ef\u80fd\u60f3\u6253\u4e00\u4e2a\u63d2\u4ef6\u5305\u51fa\u6765\u63d0\u4f9b\u7ed9\u6d4b\u8bd5\u9a8c\u8bc1\uff0c\u6211\u4eec\u5728 ONES CLI \u4e2d\u4e3a\u4f60\u63d0\u4f9b\u4e86\u975e\u5e38\u65b9\u4fbf\u7684\u6253\u5305\u65b9\u5f0f\uff0c\u4ec5\u4ec5\u53ea\u9700\u8981\u6267\u884c\u4e00\u6761\u6307\u4ee4\u5c31\u53ef\u4ee5\u5b8c\u6210\u8be5\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u5de5\u7a0b\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx op packup\n")),(0,a.kt)("p",null,"\u6253\u5305\u8fc7\u7a0b\u4e2d\u4f1a\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6821\u9a8c\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6a21\u5757\u7ea6\u675f"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u80fd\u529b\u7ed1\u5b9a\u6a21\u5757"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"plugin.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"min_system_version")," \u503c"),(0,a.kt)("li",{parentName:"ol"},"\u6e05\u9664\u524d\u540e\u7aef\u6784\u5efa\u4ea7\u7269"),(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa\u524d\u540e\u7aef"),(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u63d2\u4ef6\u5305")),(0,a.kt)("p",null,"\u6253\u5305\u6210\u529f\u4e4b\u540e\u63a7\u5236\u53f0\u4f1a\u8f93\u51fa\u5de5\u7a0b\u76f8\u5173\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Successfully packed up the project\n")),(0,a.kt)("p",null,"\u6253\u5305\u5b8c\u6210\u4e4b\u540e\uff0c\u63d2\u4ef6\u5305\u5b58\u653e\u5728\u63d2\u4ef6\u5de5\u7a0b\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u81f3\u6b64\u4f60\u5c31\u53ef\u4ee5\u62ff\u7740\u8fd9\u4e2a\u63d2\u4ef6\u5305\u53bb\u5bf9\u5e94\u7684 ONES \u4e2d\u8fdb\u884c\u5b89\u88c5\u4e86\u3002"))}s.isMDXComponent=!0}}]);