"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[31707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const r={},a="Scene: Push information to WeChat official account",c={unversionedId:"abilities/business/layout-custom-quick-action/layout-custom-quick-action-example1",id:"abilities/business/layout-custom-quick-action/layout-custom-quick-action-example1",title:"Scene: Push information to WeChat official account",description:"Scene Description",source:"@site/docs/abilities/business/layout-custom-quick-action/layout-custom-quick-action-example1.mdx",sourceDirName:"abilities/business/layout-custom-quick-action",slug:"/abilities/business/layout-custom-quick-action/layout-custom-quick-action-example1",permalink:"/docs/next/abilities/business/layout-custom-quick-action/layout-custom-quick-action-example1",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Custom layout shortcut",permalink:"/docs/next/abilities/business/layout-custom-quick-action/"},next:{title:"Sidebar menu",permalink:"/docs/next/abilities/business/sidebar-menu"}},s={},u=[{value:"Scene Description",id:"scene-description",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation idea",id:"implementation-idea",level:3},{value:"Plugin development",id:"plugin-development",level:3}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scene-push-information-to-wechat-official-account"},"Scene: Push information to WeChat official account"),(0,i.kt)("h2",{id:"scene-description"},"Scene Description"),(0,i.kt)("p",null,'The user hopes to add a custom shortcut operation "Push WeChat Official Account" to the work item to realize the requirement that the status of the work item can be pushed to the WeChat Official Account synchronously.'),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("h3",{id:"implementation-idea"},"Implementation idea"),(0,i.kt)("p",null,"Use the layout shortcut ability of custom work items, use ",(0,i.kt)("inlineCode",{parentName:"p"},"useTaskInfo")," in the front-end plugin to obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid"),' of the current operation work item, use the ONES interface to obtain the detailed information of the current work item, and call the WeChat official account push interface after getting the information, In this way, the function of "push WeChat official account" is realized.'),(0,i.kt)("h3",{id:"plugin-development"},"Plugin development"),(0,i.kt)("p",null,"Front side module sample code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useEffect } from 'react'\nimport ReactDOM from 'react-dom'\nimport { ConfigProvider, toast } from '@ones-design/core';\nimport { lifecycle } from '@ones-op/bridge'\nimport { useTaskInfo } from '@ones-op/store'\nimport { OPFetch } from '@ones-op/fetch';\nimport './index.css'\n\nfunction App() {\n  const { uuid } = useTaskInfo()\n  const teamUUID = localStorage.getItem('teamUUID')\n\n  // get issue information\n  const getTaskInfo = () => {\n    return OPFetch(`/project/P8091/api/project/team/${teamUUID}/task/${uuid}/info`)\n  }\n\n  // push to WeChat official account\n  const wxPublicAccountPush = (taskInfo) => {\n    try {\n      // call the WeChat push interface\n      ...\n      toast.success('push successfully')\n    } catch (e) {\n      toast.error('push failed')\n    }\n  }\n\n  const initialDeal = async () => {\n    try {\n      const { data } = await getTaskInfo()\n      wxPublicAccountPush(data)\n    } catch (e) {\n      toast.error(e)\n    }\n  }\n\n  useEffect(() => {\n    initialDeal()\n    // destroy the current slot\n    setTimeout(() => {\n      lifecycle.destroy()\n    }, 0);\n  }, [])\n\n  return <></>\n}\nReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))\n")))}p.isMDXComponent=!0}}]);