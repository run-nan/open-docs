"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[73508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},o="ONES CLI Commands",i={unversionedId:"tools/cli/ones-cli",id:"tools/cli/ones-cli",title:"ONES CLI Commands",description:"Overview",source:"@site/docs/tools/cli/ones-cli.md",sourceDirName:"tools/cli",slug:"/tools/cli/ones-cli",permalink:"/docs/next/tools/cli/ones-cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"Overview",permalink:"/docs/next/tools/cli/"},next:{title:"OP CLI Commands",permalink:"/docs/next/tools/cli/op-cli"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"create",id:"create",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"envinfo",id:"envinfo",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-cli-commands"},"ONES CLI Commands"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create"},"create")),(0,r.kt)("td",{parentName:"tr",align:null},"Create project from preset project template by type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#envinfo"},"envinfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Print environment info")))),(0,r.kt)("h2",{id:"create"},"create"),(0,r.kt)("p",null,"Create project from preset project template by type."),(0,r.kt)("p",null,"If developer leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"project-name")," blank:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"And not specified the specific path, then will use current folder name as default project name."),(0,r.kt)("li",{parentName:"ol"},"And path is also specified, then will use the folder name as default project name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ones create [options] [project-name]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project-name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name specified by the developer for the plugin, will also be used as the directory name of the plugin development project.")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--use-default-preset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip prompts and use default preset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--specific-path <path>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-s <path>")),(0,r.kt)("td",{parentName:"tr",align:null},"Create at a specific path, it will automatically detect relative or absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--plugin-type [type]")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the plugin type, support type: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"team")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"organization")))," Default type is ",(0,r.kt)("inlineCode",{parentName:"td"},"team"))))),(0,r.kt)("h2",{id:"envinfo"},"envinfo"),(0,r.kt)("p",null,"Print environment info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ones envinfo\n\n# System:\n#   OS: macOS Mojave 10.14.5\n#   CPU: (8) x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz\n#   Memory: 2.97 GB / 16.00 GB\n#   Shell: 5.3 - /bin/zsh\n# Binaries:\n#   Node: 8.16.0 - ~/.nvm/versions/node/v8.16.0/bin/node\n#   Yarn: 1.15.2 - ~/.yarn/bin/yarn\n#   npm: 6.9.0 - ~/.nvm/versions/node/v8.16.0/bin/npm\n#   Watchman: 4.9.0 - /usr/local/bin/watchman\n")))}s.isMDXComponent=!0}}]);