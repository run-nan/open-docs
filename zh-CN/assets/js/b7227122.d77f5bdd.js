"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[3041],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},91855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={},l="\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757",i={unversionedId:"dev/guide/module/index",id:"version-0.x/dev/guide/module/index",title:"\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757",description:"\u5728\u63d2\u4ef6\u6839\u76ee\u5f55\u8fd0\u884c op \u7684 add \u547d\u4ee4\uff0c\u53ef\u4ee5\u5411\u63d2\u4ef6\u65b0\u589e\u63d2\u69fd\u6a21\u5757\uff1a",source:"@site/versioned_docs/version-0.x/dev/guide/module/index.md",sourceDirName:"dev/guide/module",slug:"/dev/guide/module/",permalink:"/zh-CN/docs/0.x/dev/guide/module/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{},sidebar:"guide",previous:{title:"\u6dfb\u52a0\u5f00\u653e\u80fd\u529b",permalink:"/zh-CN/docs/0.x/dev/guide/ability"},next:{title:"HTML",permalink:"/zh-CN/docs/0.x/dev/guide/module/html"}},p={},d=[],u={toc:d};function c(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757"},"\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757"),(0,o.kt)("p",null,"\u5728\u63d2\u4ef6\u6839\u76ee\u5f55\u8fd0\u884c op \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u5411\u63d2\u4ef6\u65b0\u589e\u63d2\u69fd\u6a21\u5757\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"op add\n")),(0,o.kt)("p",null,"\u5176\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u63d2\u4ef6\u540e\u7aef(ability) \u6216 \u524d\u7aef(module)\u7684\u80fd\u529b\u914d\u7f6e:  [Use arrows to move, type to filter]\n> \u80fd\u529b ability\n  \u6a21\u5757 module\n  \u9000\u51fa exit\n")),(0,o.kt)("p",null,"\u9009\u62e9\u300c\u6a21\u5757 module\u300d\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u63d2\u69fd\u6a21\u5757\u5217\u8868\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(14346).Z,width:"718",height:"468"})),(0,o.kt)("p",null,"\u8be6\u7ec6\u7684\u63d2\u69fd\u6a21\u5757\u53ef\u4ee5\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"../../../api/module-type/"},"\u63d2\u69fd\u6a21\u5757\u5217\u8868")),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"ones:global:banner")," \u5168\u5c40\u63d2\u69fd\u4e3a\u4f8b\uff0c\u5f53\u9009\u62e9\u6dfb\u52a0\u8fd9\u4e2a\u6a21\u5757\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"/config/plugin.yaml")," \u6587\u4ef6\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," \u5b57\u6bb5\u4e2d\u65b0\u589e\u4e86\u4e00\u9879\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/plugin.yaml"',title:'"/config/plugin.yaml"'},"modules:\n  - id: ones-global-banner-3QC4\n    title: banner\n    entry: modules/ones-global-banner-3QC4/index.html\n    moduleType: ones:global:banner\n")),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u4f1a\u751f\u6210\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," \u5b57\u6bb5\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/web/src/modules/ones-global-banner-3QC4")," \u76ee\u5f55\uff0c\u5176\u4e2d\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"index.css")," \u4e24\u4e2a\u6587\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(33543).Z,width:"390",height:"150"})),(0,o.kt)("p",null,"\u7ec6\u5fc3\u7684\u4f60\u53ef\u80fd\u53d1\u73b0\u4e86\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"/web/src/modules/ones-global-banner-3QC4")," \u76ee\u5f55\u4e0b\u5e76\u4e0d\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," \u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," \u6587\u4ef6\uff0c\u4e0d\u8fc7\u4f60\u4e0d\u5fc5\u62c5\u5fc3\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u4e2d\u4e3a\u4f60\u89e3\u7b54\u7591\u60d1\u3002"))}c.isMDXComponent=!0},33543:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/banner-c397637807e30a6b97f3b19dc6587bb2.png"},14346:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/module-d2758d00daf229e071d9e3629e3b1332.png"}}]);