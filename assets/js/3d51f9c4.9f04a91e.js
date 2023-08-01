"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[39047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||s[g]||l;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const l={id:"upgrade",sidebar_position:12},r="Upgrade",o={unversionedId:"guide/upgrade",id:"version-1.x/guide/upgrade",title:"Upgrade",description:"Overview",source:"@site/versioned_docs/version-1.x/guide/upgrade.md",sourceDirName:"guide",slug:"/guide/upgrade",permalink:"/docs/guide/upgrade",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:12,frontMatter:{id:"upgrade",sidebar_position:12},sidebar:"guide",previous:{title:"Deploy",permalink:"/docs/guide/deploy"},next:{title:"Advanced Guide",permalink:"/docs/guide/advanced/"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Upgrade",id:"upgrade-1",level:2},{value:"Step 1: Modify the <code>plugin.yaml</code> file",id:"step-1-modify-the-pluginyaml-file",level:3},{value:"Step 2: write the <code>upgrade.yaml</code> file",id:"step-2-write-the-upgradeyaml-file",level:3},{value:"Constraints",id:"constraints",level:2},{value:"service.config",id:"serviceconfig",level:3},{value:"abilities.config",id:"abilitiesconfig",level:3}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade"},"Upgrade"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The plugin supports uninstall-free upgrades, and upgrading the plugin in this way preserves the data of the old plugin."),(0,a.kt)("h2",{id:"upgrade-1"},"Upgrade"),(0,a.kt)("h3",{id:"step-1-modify-the-pluginyaml-file"},"Step 1: Modify the ",(0,a.kt)("inlineCode",{parentName:"h3"},"plugin.yaml")," file"),(0,a.kt)("p",null,"To upgrade a plugin, you need to modify the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/plugin.yaml")," of the plugin. The modified ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.yaml")," file must meet the following two points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"app_id")," field in the new plugin and the old plugin must remain the same"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," field of the new version of the plugin must be higher than the old version of the plugin")),(0,a.kt)("p",null,"Example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Old version\nservice:\n  app_id: O2MgOGxE\n  version: 1.0.0\n  ...\n# New version\nservice:\n  app_id: O2MgOGxE\n  version: 1.0.1\n  ...\n")),(0,a.kt)("h3",{id:"step-2-write-the-upgradeyaml-file"},"Step 2: write the ",(0,a.kt)("inlineCode",{parentName:"h3"},"upgrade.yaml")," file"),(0,a.kt)("p",null,"When the plugin upgrades, it replaces the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," directory according to the rules in ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/upgrade.yaml"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/upgrade.yaml")," does not exist, it will cause the plugin upgrade to fail."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"upgrade.yaml")," must be written in accordance with yaml syntax, and the content rules are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"rule"),(0,a.kt)("p",{parentName:"li"},"File replacement rules. Available values are as follows:"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Rules")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"save_new"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When a new file conflicts with an old one, keep the new file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"save_old"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When a new file conflicts with an old one, keep the old file."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"exclude"),(0,a.kt)("p",{parentName:"li"},"Exclusion list, supports regular expression matching files, the hit files do not apply ",(0,a.kt)("inlineCode",{parentName:"p"},"rule")," rules."))),(0,a.kt)("p",null,"Sample configuration: This configuration means that when the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," directory of the old and new plugin conflict, the files in the new plugin will be kept. The files matched by ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude"),", except ",(0,a.kt)("inlineCode",{parentName:"p"},"a.txt")," and files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"temp")," directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/upgrade.yaml"',title:'"config/upgrade.yaml"'},"workspace:\n  rule: save_new\n  exclude:\n    - a.txt\n    - temp/*\n")),(0,a.kt)("h2",{id:"constraints"},"Constraints"),(0,a.kt)("h3",{id:"serviceconfig"},"service.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The declaration of ",(0,a.kt)("inlineCode",{parentName:"li"},"service.config")," is not allowed to be modified when the plugin is upgraded, even if it is modified, it will not take effect."),(0,a.kt)("li",{parentName:"ul"},"Adding and deleting ",(0,a.kt)("inlineCode",{parentName:"li"},"service.config")," is allowed when the plugin is upgraded.")),(0,a.kt)("h3",{id:"abilitiesconfig"},"abilities.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The mapping of ",(0,a.kt)("inlineCode",{parentName:"li"},"abilities.id")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"abilities.version:abilities.type")," is not allowed to be changed when the plugin is upgraded."),(0,a.kt)("li",{parentName:"ul"},"When the plugin is upgraded, ",(0,a.kt)("inlineCode",{parentName:"li"},"abilities.config")," only supports modifying the ",(0,a.kt)("inlineCode",{parentName:"li"},"show")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," fields.")))}s.isMDXComponent=!0}}]);