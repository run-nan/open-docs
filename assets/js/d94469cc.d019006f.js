"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[66968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,description:"ONES Open Platform command line diagnostic tools."},l="CLI Usage",r={unversionedId:"tools/diagtools/cli-introduction",id:"version-1.x/tools/diagtools/cli-introduction",title:"CLI Usage",description:"ONES Open Platform command line diagnostic tools.",source:"@site/versioned_docs/version-1.x/tools/diagtools/cli-introduction.md",sourceDirName:"tools/diagtools",slug:"/tools/diagtools/cli-introduction",permalink:"/docs/tools/diagtools/cli-introduction",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"ONES Open Platform command line diagnostic tools."},sidebar:"tools",previous:{title:"Desktop Usage",permalink:"/docs/tools/diagtools/desktop-introduction"},next:{title:"CLI Commands",permalink:"/docs/tools/diagtools/cli-commands"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Help Information",id:"help-information",level:2},{value:"Update Config (config)",id:"update-config-config",level:2},{value:"Add and Switch Profile (profile)",id:"add-and-switch-profile-profile",level:2},{value:"View Logs (log)",id:"view-logs-log",level:2},{value:"View Status (list)",id:"view-status-list",level:2},{value:"Dump Data (dump)",id:"dump-data-dump",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-usage"},"CLI Usage"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v3.12.0+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ONES Open Platform command line diagnostic tools, it can connect to the ONES Open Platform according to the configuration you set, view the logs and status of the platform and plug in, so that you can troubleshoot problems, or export the current data, to others joint troubleshooting."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Its main features are the same as Desktop.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./install#desktop-tools"},"Download and Installation"),"."),(0,a.kt)("h2",{id:"help-information"},"Help Information"),(0,a.kt)("p",null,"CLI provides a variety of ways to help information output, you can add ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," at the end of each command to output the help information of the current command, or use the ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#help"},(0,a.kt)("inlineCode",{parentName:"a"},"help"))," command to view the help information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools help\n")),(0,a.kt)("p",null,"At the same time, the TAB key to automatically complete the command. You can use the ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#autocomplete"},(0,a.kt)("inlineCode",{parentName:"a"},"autocomplete"))," command to output the current automatic completion function installation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools autocomplete\n")),(0,a.kt)("h2",{id:"update-config-config"},"Update Config (config)"),(0,a.kt)("p",null,"CLI provides ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#config-set"},(0,a.kt)("inlineCode",{parentName:"a"},"config"))," sub-command, you can use the following command to manage the profile currently in use."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config set")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config delete"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The initial behavior of the CLI is slightly different from that of the desktop. By default, a profile named default is automatically created for you."),(0,a.kt)("p",{parentName:"admonition"},"If you only have one profile (There's only one open platform that you can connect to)\uff0cYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," subcommand without using any of the ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," subcommands.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools config set address tcp://127.0.0.1:9006\n")),(0,a.kt)("h2",{id:"add-and-switch-profile-profile"},"Add and Switch Profile (profile)"),(0,a.kt)("p",null,"CLI provides ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#profile-new"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," sub-command, if you have multiple server profile that you need to connect to, you can use the following command to manage each profile."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile new")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile use")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile delete")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile list"))),(0,a.kt)("p",null,"The following is an example of the second profile and used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools profile add secondProfileName\n\n$ diagtools profile use secondProfileName\n\n$ diagtools config set address tcp://127.0.0.1:9007\n")),(0,a.kt)("h2",{id:"view-logs-log"},"View Logs (log)"),(0,a.kt)("p",null,"CLI provides ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#log"},(0,a.kt)("inlineCode",{parentName:"a"},"log"))," command, you can use the ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#log"},(0,a.kt)("inlineCode",{parentName:"a"},"log"))," command to view the logs of each component if your profile is correct or if you temporarily specify a required configuration."),(0,a.kt)("p",null,"Interactive selection to view the log of a plugin\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools log plugin\n")),(0,a.kt)("p",null,"Non-interactive Specifies that logs for a plugin are viewed (the id is instanceID; if the id does not exist, no information is output):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools log plugin --id ce1f55d2\n")),(0,a.kt)("p",null,"Interactive selection to view logs for a host instance (non-interactive command as above):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools log host\n")),(0,a.kt)("p",null,"Interactive selection to view logs for a platform instance (non-interactive command as above):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools log platform\n")),(0,a.kt)("h2",{id:"view-status-list"},"View Status (list)"),(0,a.kt)("p",null,"CLI provides ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#list"},(0,a.kt)("inlineCode",{parentName:"a"},"list"))," command, you can use the ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#list"},(0,a.kt)("inlineCode",{parentName:"a"},"list"))," command to see the status of each component if your profile is correct or if you have temporarily specified a required configuration."),(0,a.kt)("p",null,"View abilities status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools list abilities\n")),(0,a.kt)("p",null,"View plugins status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools list plugins\n")),(0,a.kt)("p",null,"View components status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools list components\n")),(0,a.kt)("h2",{id:"dump-data-dump"},"Dump Data (dump)"),(0,a.kt)("p",null,"CLI provides ",(0,a.kt)("a",{parentName:"p",href:"./cli-commands#dump"},(0,a.kt)("inlineCode",{parentName:"a"},"dump"))," command, when it is inconvenient to view on the server, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dump")," command to export and import it to the desktop to view."),(0,a.kt)("p",null,"Export to the current directory (default file suffix is the year month day hour minute second of the current UTC time):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools dump .\n")),(0,a.kt)("p",null,"Export to the current directory and specify the name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools dump ./data.json\n")))}c.isMDXComponent=!0}}]);