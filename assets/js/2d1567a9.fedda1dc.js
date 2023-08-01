"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[10034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"Dependence",sidebar_position:2},a=void 0,l={unversionedId:"faq/environment/dependence",id:"faq/environment/dependence",title:"Dependence",description:"Does the window system fail when installing dependencies on plugin project or ONES?",source:"@site/docs/faq/environment/dependence.md",sourceDirName:"faq/environment",slug:"/faq/environment/dependence",permalink:"/open-docs/docs/next/faq/environment/dependence",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:2,frontMatter:{title:"Dependence",sidebar_position:2},sidebar:"faq",previous:{title:"Development",permalink:"/open-docs/docs/next/faq/development/"}},s={},c=[{value:"Does the window system fail when installing dependencies on plugin project or ONES?",id:"does-the-window-system-fail-when-installing-dependencies-on-plugin-project-or-ones",level:2},{value:"Overview",id:"overview",level:3},{value:"Solution",id:"solution",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"does-the-window-system-fail-when-installing-dependencies-on-plugin-project-or-ones"},"Does the window system fail when installing dependencies on plugin project or ONES?"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This usually occurs in Window Home Edition. Both zeromq dependencies in plugin backend and sentry dependencies in ONES require Microsoft C and C++ (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B"},"MSVC"),") runtime libraries. If this library is not preinstalled on the system, the dependency installation will fail."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"},"download address")," and select the installation package that matches your computer system architecture to download and install. (of course, you can also choose to install them all)"))}d.isMDXComponent=!0}}]);