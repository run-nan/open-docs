"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[825],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(50959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(28957),o=(t(50959),t(17942));const r={sidebar_position:2},a="ci-deploy.yaml",l={unversionedId:"reference/config/ci-deploy.yaml",id:"reference/config/ci-deploy.yaml",title:"ci-deploy.yaml",description:"The plugin Continuous Integration configuration file, which contains the configuration information required for Continuous integration testing and installation of plugins. It is generated by cli tools. For more information, please see the Continuous Integration document.",source:"@site/docs/reference/config/ci-deploy.yaml.md",sourceDirName:"reference/config",slug:"/reference/config/ci-deploy.yaml",permalink:"/open-docs/docs/reference/config/ci-deploy.yaml",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"plugin.yaml",permalink:"/open-docs/docs/reference/config/plugin.yaml"},next:{title:"local.yaml",permalink:"/open-docs/docs/reference/config/local.yaml"}},u={},p=[{value:"default",id:"default",level:2},{value:"host",id:"host",level:3},{value:"username",id:"username",level:3},{value:"password",id:"password",level:3},{value:"ones-check-id",id:"ones-check-id",level:3},{value:"ones-check-point",id:"ones-check-point",level:3},{value:"ones-plugin-id",id:"ones-plugin-id",level:3},{value:"organization_uuid",id:"organization_uuid",level:3},{value:"team_uuid",id:"team_uuid",level:3}],c={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ci-deployyaml"},"ci-deploy.yaml"),(0,o.kt)("p",null,"The plugin Continuous Integration configuration file, which contains the configuration information required for Continuous integration testing and installation of plugins. It is generated by cli tools. For more information, please see the ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/guide/deploy"},"Continuous Integration")," document."),(0,o.kt)("p",null,"File path and structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/ci-deploy.yaml"',title:'"/config/ci-deploy.yaml"'},"default:\n  host: https://ones.com\n  username: ci@ones.com\n  password: '********'\n  ones-check-id: '********'\n  ones-check-point: team\n  ones-plugin-id: built_in_apis\n  organization_uuid: '********'\n  team_uuid: '********'\n")),(0,o.kt)("h2",{id:"default"},"default"),(0,o.kt)("p",null,"The default branch configuration, 'default' can meet most scenarios."),(0,o.kt)("p",null,"In order to facilitate your subsequent upgrade, we do not recommend that you add more branch configurations here, the cli will be optimized for this in version 2.0."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you enter the branch parameter of the branches through the cli-related command are ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", the merger name ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," will be automatically used.")),(0,o.kt)("h3",{id:"host"},"host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"ONES Continuous Integration environment access path."),(0,o.kt)("h3",{id:"username"},"username"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"ONES Continuous Integration environment login username."),(0,o.kt)("h3",{id:"password"},"password"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"ONES Continuous Integration environment login password."),(0,o.kt)("h3",{id:"ones-check-id"},"ones-check-id"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"ONES Continuous Integration environment team or organization UUID."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your current plugin scope at the organization level, change this UUID to the organization UUID you want to install it to.")),(0,o.kt)("h3",{id:"ones-check-point"},"ones-check-point"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"'team' | 'organization'"))),(0,o.kt)("p",null,"ONES Continuous Integration environment ",(0,o.kt)("inlineCode",{parentName:"p"},"ones-check-id")," type."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your current plugin scope at the organization level, change this type to ",(0,o.kt)("inlineCode",{parentName:"p"},"organization"),".")),(0,o.kt)("h3",{id:"ones-plugin-id"},"ones-plugin-id"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"'built_in_apis'"))),(0,o.kt)("p",null,"ONES Continuous Integration environment interface request header, the fixed value ",(0,o.kt)("inlineCode",{parentName:"p"},"build_in_apis"),", request to the Open Platform."),(0,o.kt)("h3",{id:"organization_uuid"},"organization_uuid"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The organization UUID for the ONES Continuous Integration environment."),(0,o.kt)("h3",{id:"team_uuid"},"team_uuid"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"The team UUID for the ONES Continuous Integration environment."))}d.isMDXComponent=!0}}]);