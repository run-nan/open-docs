"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[70300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,m=s["".concat(u,".").concat(k)]||s[k]||c[k]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),l=(n(67294),n(3905));const r={sidebar_position:4},a="ci-deploy.yaml",o={unversionedId:"api/config/ci-deploy",id:"version-0.x/api/config/ci-deploy",title:"ci-deploy.yaml",description:"\u63d2\u4ef6\u6301\u7eed\u96c6\u6210\u914d\u7f6e",source:"@site/versioned_docs/version-0.x/api/config/ci-deploy.md",sourceDirName:"api/config",slug:"/api/config/ci-deploy",permalink:"/open-docs/docs/0.x/api/config/ci-deploy",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reference",previous:{title:"upgrade.yaml",permalink:"/open-docs/docs/0.x/api/config/upgrade"},next:{title:"local.yaml",permalink:"/open-docs/docs/0.x/api/config/local"}},u={},p=[{value:"\u63d2\u4ef6\u6301\u7eed\u96c6\u6210\u914d\u7f6e",id:"\u63d2\u4ef6\u6301\u7eed\u96c6\u6210\u914d\u7f6e",level:2},{value:"\u6587\u4ef6\u529f\u80fd\uff1a",id:"\u6587\u4ef6\u529f\u80fd",level:4},{value:"\u914d\u7f6e\u5b57\u6bb5\u89e3\u6790",id:"\u914d\u7f6e\u5b57\u6bb5\u89e3\u6790",level:2},{value:"\u5206\u652f\u53f7.host",id:"\u5206\u652f\u53f7host",level:3},{value:"\u5206\u652f\u53f7.ones-check-id",id:"\u5206\u652f\u53f7ones-check-id",level:3},{value:"\u5206\u652f\u53f7.ones-check-point",id:"\u5206\u652f\u53f7ones-check-point",level:3},{value:"\u5206\u652f\u53f7.ones-plugin-id",id:"\u5206\u652f\u53f7ones-plugin-id",level:3},{value:"\u5206\u652f\u53f7.organization_uuid",id:"\u5206\u652f\u53f7organization_uuid",level:3},{value:"\u5206\u652f\u53f7.team_uuid",id:"\u5206\u652f\u53f7team_uuid",level:3},{value:"\u5206\u652f\u53f7.token",id:"\u5206\u652f\u53f7token",level:3},{value:"\u5206\u652f\u53f7.user_uuid",id:"\u5206\u652f\u53f7user_uuid",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ci-deployyaml"},"ci-deploy.yaml"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u6301\u7eed\u96c6\u6210\u914d\u7f6e"},"\u63d2\u4ef6\u6301\u7eed\u96c6\u6210\u914d\u7f6e"),(0,l.kt)("p",null,"\u63d2\u4ef6\u9879\u76ee\u4e0b\u6709\u6301\u7eed\u96c6\u6210\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0e\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u6709\u5173\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"/config/ci-deploy.yaml\n")),(0,l.kt)("h4",{id:"\u6587\u4ef6\u529f\u80fd"},"\u6587\u4ef6\u529f\u80fd\uff1a"),(0,l.kt)("p",null,"ci-deploy.yaml\uff1a\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u5b89\u88c5\u63d2\u4ef6\u6240\u9700\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u6839\u636e\u4e0d\u540c\u5206\u652f\u5b89\u88c5\u5230\u4e0d\u540c\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u73af\u5883\u4e2d"),(0,l.kt)("p",null,"\u6587\u4ef6\u4e3a\u63d2\u4ef6\u7684\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u4fe1\u606f\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," \u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"P8022.host: http://120.76.45.123/project/api/project\nP8022.ones-check-id: KzQ6SQdF\nP8022.ones-check-point: team\nP8022.ones-plugin-id: built_in_apis\nP8022.organization_uuid: 9sMifrRw\nP8022.team_uuid: KzQ6SQdF\nP8022.token: uClIIQ3pvRNa8PFtlhW1cyLGAp32DNOalxRzhjVQLqDYzMTUa0DsPMAA2dGeBldc\nP8022.user_uuid: TkFJWvwP\ndefault.host: https://devapi.myones.net/project/P8022\ndefault.ones-check-id: T7YB134K\ndefault.ones-check-point: team\ndefault.ones-plugin-id: built_in_apis\ndefault.organization_uuid: JGpj1YSe\ndefault.team_uuid: T7YB134K\ndefault.token: xx5nL8YwdrcDB6SMzaNoBaA1Xevma6qSTA41m4ewzhyk7pZz5Q4uSDlpmVyuOZNp\ndefault.user_uuid: WhFspqKJ\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5b57\u6bb5\u89e3\u6790"},"\u914d\u7f6e\u5b57\u6bb5\u89e3\u6790"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7host"},"\u5206\u652f\u53f7.host"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u8be5\u5206\u652f\u53f7\u6240\u5bf9\u5e94\u7684\u6301\u7eed\u96c6\u6210\u73af\u5883\u8bbf\u95ee\u8def\u5f84"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7ones-check-id"},"\u5206\u652f\u53f7.ones-check-id"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u5bf9\u5e94\u6743\u9650\u68c0\u67e5\u70b9,\u4e0e\u56e2\u961f id \u76f8\u540c"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7ones-check-point"},"\u5206\u652f\u53f7.ones-check-point"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u5bf9\u5e94\u6743\u9650\u68c0\u67e5\u70b9,\u9ed8\u8ba4 team"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7ones-plugin-id"},"\u5206\u652f\u53f7.ones-plugin-id"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u5bf9\u5e94\u540e\u7aef\u63d2\u4ef6\u7684\u5b9e\u4f8b ID"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7organization_uuid"},"\u5206\u652f\u53f7.organization_uuid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u8be5\u5206\u652f\u53f7\u6240\u5bf9\u5e94\u7684\u6301\u7eed\u96c6\u6210\u73af\u5883\u767b\u5f55\u7528\u6237\u7684\u7ec4\u7ec7 id"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7team_uuid"},"\u5206\u652f\u53f7.team_uuid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u8be5\u5206\u652f\u53f7\u6240\u5bf9\u5e94\u7684\u6301\u7eed\u96c6\u6210\u73af\u5883\u767b\u5f55\u7528\u6237\u7684\u56e2\u961f id"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7token"},"\u5206\u652f\u53f7.token"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u8be5\u5206\u652f\u53f7\u6240\u5bf9\u5e94\u7684\u6301\u7eed\u96c6\u6210\u73af\u5883\u767b\u5f55\u7528\u6237\u7684 token"),(0,l.kt)("h3",{id:"\u5206\u652f\u53f7user_uuid"},"\u5206\u652f\u53f7.user_uuid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("p",null,"\u8be5\u5206\u652f\u53f7\u6240\u5bf9\u5e94\u7684\u6301\u7eed\u96c6\u6210\u73af\u5883\u767b\u5f55\u7528\u6237\u7684\u7528\u6237 id"))}c.isMDXComponent=!0}}]);