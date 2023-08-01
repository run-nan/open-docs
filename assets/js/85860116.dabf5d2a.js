"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[22091],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(a),k=l,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:3,description:"ONES Open Platform Diagtools CLI Commands."},i="CLI Commands",p={unversionedId:"tools/diagtools/cli-commands",id:"version-1.x/tools/diagtools/cli-commands",title:"CLI Commands",description:"ONES Open Platform Diagtools CLI Commands.",source:"@site/versioned_docs/version-1.x/tools/diagtools/cli-commands.md",sourceDirName:"tools/diagtools",slug:"/tools/diagtools/cli-commands",permalink:"/open-docs/docs/tools/diagtools/cli-commands",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"ONES Open Platform Diagtools CLI Commands."},sidebar:"tools",previous:{title:"CLI Usage",permalink:"/open-docs/docs/tools/diagtools/cli-introduction"},next:{title:"Download and Installation",permalink:"/open-docs/docs/tools/diagtools/install"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Index",id:"index",level:2},{value:"Command",id:"command",level:2},{value:"help",id:"help",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Options",id:"options",level:4},{value:"Examples",id:"examples",level:4},{value:"autocomplete",id:"autocomplete",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Options",id:"options-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"config set",id:"config-set",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Options",id:"options-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"config get",id:"config-get",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"Options",id:"options-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"config delete",id:"config-delete",level:3},{value:"Arguments",id:"arguments-4",level:4},{value:"Options",id:"options-4",level:4},{value:"Examples",id:"examples-4",level:4},{value:"config list",id:"config-list",level:3},{value:"Options",id:"options-5",level:4},{value:"Examples",id:"examples-5",level:4},{value:"profile create",id:"profile-create",level:3},{value:"Arguments",id:"arguments-5",level:4},{value:"Options",id:"options-6",level:4},{value:"Examples",id:"examples-6",level:4},{value:"profile use",id:"profile-use",level:3},{value:"Arguments",id:"arguments-6",level:4},{value:"Options",id:"options-7",level:4},{value:"Examples",id:"examples-7",level:4},{value:"profile delete",id:"profile-delete",level:3},{value:"Arguments",id:"arguments-7",level:4},{value:"Options",id:"options-8",level:4},{value:"Examples",id:"examples-8",level:4},{value:"profile list",id:"profile-list",level:3},{value:"Options",id:"options-9",level:4},{value:"Examples",id:"examples-9",level:4},{value:"log",id:"log",level:3},{value:"Arguments",id:"arguments-8",level:4},{value:"Options",id:"options-10",level:4},{value:"Examples",id:"examples-10",level:4},{value:"list",id:"list",level:3},{value:"Arguments",id:"arguments-9",level:4},{value:"Options",id:"options-11",level:4},{value:"Examples",id:"examples-11",level:4},{value:"dump",id:"dump",level:3},{value:"Arguments",id:"arguments-10",level:4},{value:"Options",id:"options-12",level:4},{value:"Examples",id:"examples-12",level:4}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-commands"},"CLI Commands"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"ONES Open Platform Diagtools CLI Commands."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The developer invokes the CLI command template: ",(0,l.kt)("inlineCode",{parentName:"p"},"diagtools [command] [arguments] [options]"))),(0,l.kt)("h2",{id:"index"},"Index"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#help"},"help")),(0,l.kt)("td",{parentName:"tr",align:null},"Display help for Diagtools CLI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#autocomplete"},"autocomplete")),(0,l.kt)("td",{parentName:"tr",align:null},"Display autocomplete installation instructions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#config-set"},"config set")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the current profile variable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#config-get"},"config get")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the current profile variable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#config-delete"},"config delete")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete the current profile variable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#config-list"},"config list")),(0,l.kt)("td",{parentName:"tr",align:null},"List the current profile variables")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#profile-create"},"profile create")),(0,l.kt)("td",{parentName:"tr",align:null},"Create a new profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#profile-use"},"profile use")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch a specified profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#profile-delete"},"profile delete")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete a specified profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#profile-list"},"profile list")),(0,l.kt)("td",{parentName:"tr",align:null},"List all profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#log"},"log")),(0,l.kt)("td",{parentName:"tr",align:null},"Print a component logs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#list"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"List the component status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dump"},"dump")),(0,l.kt)("td",{parentName:"tr",align:null},"Dump current time data")))),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("h3",{id:"help"},"help"),(0,l.kt)("p",null,"Display help for Diagtools CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"diagtools help [COMMAND]\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"COMMAND")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#command"},"Command")," to show help for.")))),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--nested-commands")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-n")),(0,l.kt)("td",{parentName:"tr",align:null},"Include all nested commands in the output.")))),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools help autocomplete\ndisplay autocomplete installation instructions\n\nUSAGE\n  $ diagtools autocomplete [SHELL] [-r]\n\nARGUMENTS\n  SHELL  shell type\n\nFLAGS\n  -r, --refresh-cache  Refresh cache (ignores displaying instructions)\n\nDESCRIPTION\n  display autocomplete installation instructions\n\nEXAMPLES\n  $ diagtools autocomplete\n\n  $ diagtools autocomplete bash\n\n  $ diagtools autocomplete zsh\n\n  $ diagtools autocomplete --refresh-cache\n")),(0,l.kt)("h3",{id:"autocomplete"},"autocomplete"),(0,l.kt)("p",null,"Display autocomplete installation instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"diagtools autocomplete [SHELL]\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHELL")),(0,l.kt)("td",{parentName:"tr",align:null},"shell type")))),(0,l.kt)("h4",{id:"options-1"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--refresh-cache")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"Refresh cache (ignores displaying instructions)")))),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ diagtools autocomplete\nBuilding the autocomplete cache... done\n\nSetup Instructions for DIAGTOOLS CLI Autocomplete ---\n\n1) Add the autocomplete env var to your zsh profile and source it\n$ printf "eval $(diagtools autocomplete:script zsh)" >> ~/.zshrc; source ~/.zshrc\n\nNOTE: After sourcing, you can run `$ compaudit -D` to ensure no permissions conflicts are present\n\n2) Test it out, e.g.:\n$ diagtools <TAB>                 # Command completion\n$ diagtools command --<TAB>       # Flag completion\n\nEnjoy!\n')),(0,l.kt)("p",null,"Run the prompt command as prompted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ printf "eval $(diagtools autocomplete:script zsh)" >> ~/.zshrc\n$ source ~/.zshrc\n')),(0,l.kt)("p",null,"Try using the completion feature."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ diagtools l <TAB>\nlist  -- list the component status\nlog   -- print a component logs\n")),(0,l.kt)("h3",{id:"config-set"},"config set"),(0,l.kt)("p",null,"Set the current profile variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools config set KEY VALUE\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KEY")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration variable name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"VALUE")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration variable value")))),(0,l.kt)("h4",{id:"options-2"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools config set address tcp://127.0.0.1:9006\nconfig set successfully\n")),(0,l.kt)("h3",{id:"config-get"},"config get"),(0,l.kt)("p",null,"Get the current profile variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools config get KEY\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KEY")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration variable name")))),(0,l.kt)("h4",{id:"options-3"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-3"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools config get address\ntcp://127.0.0.1:9006\n")),(0,l.kt)("h3",{id:"config-delete"},"config delete"),(0,l.kt)("p",null,"Delete the current profile variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools config delete KEY\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KEY")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration variable name")))),(0,l.kt)("h4",{id:"options-4"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-4"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools config delete address\nconfig delete successfully\n")),(0,l.kt)("h3",{id:"config-list"},"config list"),(0,l.kt)("p",null,"List the current profile variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools config list\n")),(0,l.kt)("h4",{id:"options-5"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-5"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools config list\naddress = tcp://127.0.0.1:9006\n")),(0,l.kt)("h3",{id:"profile-create"},"profile create"),(0,l.kt)("p",null,"Create a new profile."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This command does not help you switch to the new profile, you need to use the ",(0,l.kt)("a",{parentName:"p",href:"#profile-use"},(0,l.kt)("inlineCode",{parentName:"a"},"profile use"))," manual switch.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools profile create NAME\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"New profile name")))),(0,l.kt)("h4",{id:"options-6"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-6"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools profile create example\nThe example profile successfully created\n")),(0,l.kt)("h3",{id:"profile-use"},"profile use"),(0,l.kt)("p",null,"Switch a specified profile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools profile use NAME\n")),(0,l.kt)("h4",{id:"arguments-6"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"Profile name")))),(0,l.kt)("h4",{id:"options-7"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-7"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools profile use example\nThe example profile successfully switched\n")),(0,l.kt)("h3",{id:"profile-delete"},"profile delete"),(0,l.kt)("p",null,"Delete a specified profile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools profile delete NAME\n")),(0,l.kt)("h4",{id:"arguments-7"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"Profile name")))),(0,l.kt)("h4",{id:"options-8"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-8"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools profile delete example\nThe example profile successfully deleted\n")),(0,l.kt)("h3",{id:"profile-list"},"profile list"),(0,l.kt)("p",null,"List all profiles."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools profile list\n")),(0,l.kt)("h4",{id:"options-9"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")))),(0,l.kt)("h4",{id:"examples-9"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools profile list\nexample\n")),(0,l.kt)("h3",{id:"log"},"log"),(0,l.kt)("p",null,"Print a component logs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools log TYPE\n")),(0,l.kt)("h4",{id:"arguments-8"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TYPE")),(0,l.kt)("td",{parentName:"tr",align:null},"The component type, options: (",(0,l.kt)("inlineCode",{parentName:"td"},"platform"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"host"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"plugin"),")")))),(0,l.kt)("h4",{id:"options-10"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--address <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"address")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--organizationUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"organizationUUID")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--teamUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"teamUUID")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--extended")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-x")),(0,l.kt)("td",{parentName:"tr",align:null},"show extra columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--columns <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"only show provided columns (comma-separated)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"filter property by partial string matching, ex: name=foo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--from <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"load the local data file (the value can be a relative path or an absolute path)")))),(0,l.kt)("h4",{id:"examples-10"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ diagtools log plugin --id ce1f55d2\n{"Level":"Info","Message":"[Plugin] Install","Time":"2022/11/29 14:55:27"}\n{"Level":"Info","Message":"[Plugin] Enable","Time":"2022/11/29 14:56:05"}\n')),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,"List the component status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools list TYPE\n")),(0,l.kt)("h4",{id:"arguments-9"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TYPE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u578b\uff0c\u9009\u9879\uff1a(",(0,l.kt)("inlineCode",{parentName:"td"},"plugins"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"abilities"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"components"),")")))),(0,l.kt)("h4",{id:"options-11"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--address <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"address")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--organizationUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"organizationUUID")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--teamUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"teamUUID")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--extended")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-x")),(0,l.kt)("td",{parentName:"tr",align:null},"Show extra columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--csv")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output=csv")),(0,l.kt)("td",{parentName:"tr",align:null},"Output is csv format ","[alias: --output=csv]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output <option>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Output in a more machine friendly format,options: (",(0,l.kt)("inlineCode",{parentName:"td"},"csv"),",",(0,l.kt)("inlineCode",{parentName:"td"},"json"),",",(0,l.kt)("inlineCode",{parentName:"td"},"yaml"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--columns <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Only show provided columns (comma-separated)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Filter property by partial string matching, ex: name=foo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--from <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Load the local data file (the value can be a relative path or an absolute path)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-header")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Hide table header from output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-truncate")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Do not truncate output to fit screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--sort <value>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Property to sort by (prepend '-' for descending)")))),(0,l.kt)("h4",{id:"examples-11"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ diagtools list plugins\n InstanceID AppName    AppID     AppVersion Scope        ScopeUUID HostID IsLocal Status         RealStatus     Apis\n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n ce1f55d2   Example    FSksKfHR3 1.0.0      Team         Pgg7h253         false   DisableSuccess DisableSuccess [{""Methods":["POST"],"Url":"/hello",...\n')),(0,l.kt)("h3",{id:"dump"},"dump"),(0,l.kt)("p",null,"Dump current time data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diagtools dump PATH\n")),(0,l.kt)("h4",{id:"arguments-10"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PATH")),(0,l.kt)("td",{parentName:"tr",align:null},"dump path, the value can be a relative path or an absolute path")))),(0,l.kt)("h4",{id:"options-12"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"Verbose output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--address <value>")),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"address")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--organizationUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"organizationUUID")," attribute in the profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--teamUUID <value>")),(0,l.kt)("td",{parentName:"tr",align:null},"Override the execution of the ",(0,l.kt)("inlineCode",{parentName:"td"},"teamUUID")," attribute in the profile")))),(0,l.kt)("h4",{id:"examples-12"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ diagtools dump .\ndump successfully\n")))}s.isMDXComponent=!0}}]);