"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[6048],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(28957),r=(n(50959),n(17942));const l={sidebar_position:1},i="ONES CLI \u6307\u4ee4",o={unversionedId:"tools/cli/ones-cli",id:"tools/cli/ones-cli",title:"ONES CLI \u6307\u4ee4",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/ones-cli.md",sourceDirName:"tools/cli",slug:"/tools/cli/ones-cli",permalink:"/open-docs/zh-CN/docs/tools/cli/ones-cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"\u6982\u89c8",permalink:"/open-docs/zh-CN/docs/tools/cli/"},next:{title:"OP CLI \u6307\u4ee4",permalink:"/open-docs/zh-CN/docs/tools/cli/op-cli"}},p={},d=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"create",id:"create",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:3},{value:"envinfo",id:"envinfo",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-cli-\u6307\u4ee4"},"ONES CLI \u6307\u4ee4"),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u7c7b\u578b\u4ece\u9884\u8bbe\u9879\u76ee\u6a21\u677f\u521b\u5efa\u9879\u76ee\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#envinfo"},"envinfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u73af\u5883\u4fe1\u606f\u3002")))),(0,r.kt)("h2",{id:"create"},"create"),(0,r.kt)("p",null,"\u6839\u636e\u63d2\u4ef6\u5de5\u7a0b\u7c7b\u578b\u4ece\u9884\u8bbe\u9879\u76ee\u6a21\u677f\u4e2d\u521d\u59cb\u5316\u63d2\u4ef6\u5de5\u7a0b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u5c06\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"project-name")," \u7559\u7a7a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5e76\u4e14\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"--specific-path")," \u9009\u9879\u6307\u5b9a\u5177\u4f53\u8def\u5f84\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u5939\u540d\u79f0\u4f5c\u4e3a\u9879\u76ee\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5e76\u4e14\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"--specific-path")," \u9009\u9879\u6307\u5b9a\u5177\u4f53\u8def\u5f84\uff0c\u5219\u4f7f\u7528\u6307\u5b9a\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u5939\u540d\u79f0\u4f5c\u4e3a\u9ed8\u8ba4\u9879\u76ee\u540d\u79f0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ones create [options] [project-name]\n")),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project-name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5de5\u7a0b\u540d\u79f0\uff0c\u9ed8\u8ba4\u4f1a\u5c06\u5f53\u524d\u76ee\u5f55\u540d\u79f0\u4f5c\u4e3a\u63d2\u4ef6\u5de5\u7a0b\u540d\u79f0\u3002")))),(0,r.kt)("h3",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879\u522b\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--use-default-preset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u4ea4\u4e92\u5f0f\u95ee\u7b54\u5e76\u4f7f\u7528\u9ed8\u8ba4\u9884\u8bbe\u521b\u5efa\u63d2\u4ef6\u5de5\u7a0b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--specific-path <path>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-s <path>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7279\u5b9a\u7684\u8def\u5f84\u4e2d\u521d\u59cb\u5316\u63d2\u4ef6\u5de5\u7a0b\uff0cCLI \u4f1a\u68c0\u6d4b\u4f20\u5165\u8def\u5f84\u662f\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--plugin-type [type]")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u521b\u5efa\u7684\u63d2\u4ef6\u5de5\u7a0b\u7c7b\u578b, \u652f\u6301\u7684\u7c7b\u578b\u6709: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"team")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"organization")))," \u9ed8\u8ba4\u7684\u63d2\u4ef6\u5de5\u7a0b\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"team"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--policy <policy>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u63d2\u4ef6\u7684",(0,r.kt)("a",{parentName:"td",href:"/open-docs/zh-CN/docs/guide/policy"},"\u552e\u5356\u7b56\u7565"),"\uff0c\u9ed8\u8ba4\u7684\u552e\u5356\u7b56\u7565\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"simple"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ones-version <ver>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u63d2\u4ef6\u8981\u5b89\u88c5\u5230\u7684\u76ee\u6807ONES\u7cfb\u7edf\u7248\u672c")))),(0,r.kt)("h2",{id:"envinfo"},"envinfo"),(0,r.kt)("p",null,"\u8f93\u51fa\u73af\u5883\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ones envinfo\n\n# System:\n#   OS: macOS Mojave 10.14.5\n#   CPU: (8) x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz\n#   Memory: 2.97 GB / 16.00 GB\n#   Shell: 5.3 - /bin/zsh\n# Binaries:\n#   Node: 8.16.0 - ~/.nvm/versions/node/v8.16.0/bin/node\n#   Yarn: 1.15.2 - ~/.yarn/bin/yarn\n#   npm: 6.9.0 - ~/.nvm/versions/node/v8.16.0/bin/npm\n#   Watchman: 4.9.0 - /usr/local/bin/watchman\n")))}u.isMDXComponent=!0}}]);