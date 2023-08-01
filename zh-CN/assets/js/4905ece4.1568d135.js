"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[26839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_position:4},i="\u5728\u672c\u5730\u8c03\u8bd5\u63d2\u4ef6",o={unversionedId:"dev/guide/test",id:"version-0.x/dev/guide/test",title:"\u5728\u672c\u5730\u8c03\u8bd5\u63d2\u4ef6",description:"\u672c\u5730\u8c03\u8bd5\u89c6\u9891\u6559\u7a0b: \u63d2\u4ef6\u5f00\u53d1\u4e0e\u8c03\u8bd5",source:"@site/versioned_docs/version-0.x/dev/guide/test.md",sourceDirName:"dev/guide",slug:"/dev/guide/test",permalink:"/zh-CN/docs/0.x/dev/guide/test",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"TypeScript",permalink:"/zh-CN/docs/0.x/dev/guide/module/typescript"},next:{title:"\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5",permalink:"/zh-CN/docs/0.x/dev/guide/ci-deploy"}},p={},s=[{value:"\u767b\u5f55\u8c03\u8bd5\u73af\u5883",id:"\u767b\u5f55\u8c03\u8bd5\u73af\u5883",level:2},{value:"\u8be6\u7ec6\u8bf4\u660e",id:"\u8be6\u7ec6\u8bf4\u660e",level:3},{value:"\u5173\u4e8e\u300c\u5b89\u88c5\u63d2\u4ef6\u6d4b\u8bd5\u662f\u5426\u6307\u5411\u53e6\u4e00\u4e2a\u73af\u5883?\u300d",id:"\u5173\u4e8e\u5b89\u88c5\u63d2\u4ef6\u6d4b\u8bd5\u662f\u5426\u6307\u5411\u53e6\u4e00\u4e2a\u73af\u5883",level:4},{value:"\u542f\u52a8\u63d2\u4ef6",id:"\u542f\u52a8\u63d2\u4ef6",level:2},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",level:2},{value:"\u8c03\u8bd5\u524d\u7aef",id:"\u8c03\u8bd5\u524d\u7aef",level:3},{value:"\u8c03\u8bd5\u540e\u7aef",id:"\u8c03\u8bd5\u540e\u7aef",level:3},{value:"\u8c03\u8bd5\u63a5\u53e3",id:"\u8c03\u8bd5\u63a5\u53e3",level:4}],u={toc:s};function d(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5728\u672c\u5730\u8c03\u8bd5\u63d2\u4ef6"},"\u5728\u672c\u5730\u8c03\u8bd5\u63d2\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u8c03\u8bd5\u89c6\u9891\u6559\u7a0b: ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.x/dev/sample-tutorial/videos/test"},"\u63d2\u4ef6\u5f00\u53d1\u4e0e\u8c03\u8bd5"))),(0,r.kt)("p",null,"\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u672c\u5730\u6253\u5305\uff0c\u7136\u540e\u5728\u63d2\u4ef6\u7ba1\u7406\u4e2d\u4e0a\u4f20\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5728\u672c\u5730\u8fdb\u884c\u63d2\u4ef6\u7684\u5b9e\u65f6\u8c03\u8bd5\uff0c\u8fd9\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u3002"),(0,r.kt)("h2",{id:"\u767b\u5f55\u8c03\u8bd5\u73af\u5883"},"\u767b\u5f55\u8c03\u8bd5\u73af\u5883"),(0,r.kt)("p",null,"\u5728\u8fdb\u884c\u63d2\u4ef6\u8c03\u8bd5\u524d\uff0c\u4f60\u9700\u8981\u5148\u767b\u5f55\u8c03\u8bd5\u73af\u5883\u3002"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"op login")," \u547d\u4ee4\uff0c\u8fdb\u884c\u767b\u5f55\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"op login\n")),(0,r.kt)("p",null,"\u6309\u7167\u63d0\u793a\u4f9d\u6b21\u8f93\u5165\u8c03\u8bd5\u73af\u5883\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% op login\n? \u8f93\u5165\u767b\u5f55\u5f00\u53d1\u73af\u5883\u73af\u5883url: https://devapi.myones.net/project/P8022\n? \u8f93\u5165\u7528\u6237\u90ae\u7bb1: wangxueying@ones.com\n? \u8f93\u5165\u5bc6\u7801: **********\n2022/02/23 16:22:20 \u767b\u5f55\u6210\u529f!!\n\n? \u9009\u62e9\u9700\u8981\u6307\u5b9a\u7684team: GSwm2Lix ones\n? \u5b89\u88c5\u63d2\u4ef6\u6d4b\u8bd5\u662f\u5426\u6307\u5411\u53e6\u4e00\u4e2a\u73af\u5883? No\n2022/02/23 16:22:31 \u5f53\u524d\u5df2\u6709\u5386\u53f2\u767b\u5f55\u6ce8\u518c\u7528\u6237\u4fe1\u606f..\n? \u662f\u5426\u8986\u76d6\u5f53\u524d\u767b\u5f55\u6ce8\u518c\u7528\u6237\u4fe1\u606f: Yes\n2022/02/23 16:22:33 \u6ce8\u518c\u7528\u6237\u4fe1\u606f\u6210\u529f!\n\n2022/02/23 16:22:33 \u5f00\u59cb\u751f\u6210\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e..\n? \u8bf7\u8f93\u5165\u5e73\u53f0\u670d\u52a1ip\u548c\u7aef\u53e3\u53f7: tcp://119.23.130.213:20001\n? \u8f93\u5165\u63a8\u9001\u4ee3\u7801\u76ee\u6807\u5206\u652f: master\n2022/02/23 16:22:52 \u914d\u7f6eci-deploy.yaml\u6210\u529f!!\n")),(0,r.kt)("h3",{id:"\u8be6\u7ec6\u8bf4\u660e"},"\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("p",null,"\u63d2\u4ef6\u7684\u672c\u5730\u8c03\u8bd5\uff0c\u9996\u5148\u9700\u8981\u811a\u624b\u67b6\u5de5\u5177\u5177\u5907\u8fdc\u7a0b\u8c03\u8bd5\u73af\u5883\u7684\u6743\u9650\uff0c\u80fd\u591f\u83b7\u53d6\u6570\u636e\u3001\u64cd\u4f5c\u56e2\u961f\u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(98327).Z,width:"1607",height:"916"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6211\u4eec\u7684\u8fdc\u7a0b\u5b9e\u65f6\u8c03\u8bd5\uff0c\u5b9e\u9645\u4e0a\u662f\u5728\u672c\u5730\u6267\u884c\u4e00\u4e2a\u201c\u8fdc\u7a0b\u5bbf\u4e3b\u673a\u201d\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"op login")," \u6d41\u7a0b\u4e2d\u586b\u5165\u7684\u4e3b\u8981\u662f\u5c31\u662f\u4e24\u4e2a\u90e8\u5206\u7684\u5185\u5bb9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u73af\u5883 url \u53ca\u767b\u5f55\u4fe1\u606f\uff1a")," \u56e0\u4e3a\u5728 \u5f00\u53d1 / \u8c03\u8bd5 \u8fc7\u7a0b\u4e2d\uff0cOP \u5de5\u5177\u9700\u8981\u80fd\u591f\u83b7\u53d6\u8c03\u8bd5\u73af\u5883\u7684\u6388\u6743\uff0c\u4ee5\u4fbf\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u83b7\u53d6\u56e2\u961f\u7b49\u6570\u636e\u3002\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528\u6b64\u73af\u5883\u7684\u767b\u5f55\u7528\u6237\u4f7f\u7528\u7ec4\u7ec7\u7ba1\u7406\u5458\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5728 CLI \u76f4\u63a5\u521b\u5efa\u65b0\u56e2\u961f\u5e76\u8fdb\u884c\u8c03\u8bd5\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5e73\u53f0\u670d\u52a1 ip \u548c\u7aef\u53e3\u53f7\uff1a")," \u4e3a\u4e86\u80fd\u591f\u672c\u5730\u8c03\u8bd5\uff0c\u9700\u8981\u5728\u8fd9\u91cc\u586b\u5165\u8fdc\u7a0b\u8c03\u8bd5\u73af\u5883\u7684\u5f00\u653e\u5e73\u53f0\u7ec4\u4ef6\u5bf9\u5916\u7684 tcp \u670d\u52a1\u7aef\u53e3\uff08\u9700\u8981\u73af\u5883\u914d\u7f6e\u4e86\u5bf9\u5916\u5f00\u653e\u6b64\u7aef\u53e3\uff09\uff1b")),(0,r.kt)("h4",{id:"\u5173\u4e8e\u5b89\u88c5\u63d2\u4ef6\u6d4b\u8bd5\u662f\u5426\u6307\u5411\u53e6\u4e00\u4e2a\u73af\u5883"},"\u5173\u4e8e\u300c\u5b89\u88c5\u63d2\u4ef6\u6d4b\u8bd5\u662f\u5426\u6307\u5411\u53e6\u4e00\u4e2a\u73af\u5883?\u300d"),(0,r.kt)("p",null,"OP \u5de5\u5177\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.x/dev/guide/ci-deploy"},"\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5"),"\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u590d\u7528\u8c03\u8bd5\u73af\u5883\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u82e5\u9009\u62e9\u662f\uff0c\u5219\u96c6\u6210\u6d4b\u8bd5\u65f6\uff0c\u63d2\u4ef6\u5305\u5c06\u4f1a\u63a8\u9001\u5230\u6b64\u73af\u5883\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u9009\u62e9\u5426\uff0c\u5219\u8fdb\u5165\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u7684\u914d\u7f6e\u8fc7\u7a0b\uff1b")),(0,r.kt)("p",null,"\u5b8c\u6210\u8c03\u8bd5\u73af\u5883\u7684\u767b\u5f55\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/config")," \u76ee\u5f55\u4e2d\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"local.yaml")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/local.yaml"',title:'"/config/local.yaml"'},"platform:\n  address: tcp://120.76.45.123:9006\nlocal:\n  id: '73412830'\n  language: nodejs\n  debug_mode: true\n  timeout_sec: 30\n  organization_uuid: 8Z6vS8FZ\n  team_uuid: GSwm2Lix\n  web_service_port: '3000'\n  web_service_ip: '192.168.2.11'\n  user_uuid: 01duxk8t\n  token: INMOIa9VUhX72Ym0ZrP0eSo980iXifz8W4CSVG1T0318RFmUuS@EWGMhekzi6Mqz\n  log_in_local: false\n  file_in_local: false\n  mysql_in_local: false\n  mysql_user_name: ''\n  mysql_user_password: ''\n  mysql_database_name: ''\n  mysql_host: ''\n  mysql_port: ''\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u7684\u5b57\u6bb5\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.x/api/config/local"},"local.yaml")," \u7684\u914d\u7f6e\u6587\u6863\u3002")),(0,r.kt)("h2",{id:"\u542f\u52a8\u63d2\u4ef6"},"\u542f\u52a8\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5b8c\u6210\u767b\u5f55\u4e4b\u540e\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"op run")," \u547d\u4ee4\u5373\u53ef\u542f\u52a8\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"op run\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% op run\n2022/02/25 14:30:49 > node_plugin_demo1@1.0.0 build\n> cd backend && npm run build && cd ../web && npm run build\n2022/02/25 14:30:49 > node-plugin-template@1.0.0 build\n> rm -rf dist && set NODE_ENV=production && rollup -c rollup.config.js\n2022/02/25 14:30:49\n/Users/huangyao/go/src/cli-test0214/backend/src/index.ts \u2192 dist/index.js...\n2022/02/25 14:30:50 created dist/index.js in 756ms\n2022/02/25 14:30:50 > cli-test0214@0.0.0 build\n> ones-plugin build\n/opt/homebrew/bin/npm start\n2022/02/25 14:30:51 ----\u5f00\u53d1\u73af\u5883\u8bbf\u95ee\u8def\u5f84\uff1ahttp://120.76.45.123\n2022/02/25 14:30:52 {\n  action: 'run',\n  email: '',\n  password: '',\n  reinstall: false,\n  instance_uuid: undefined,\n  hostID: undefined,\n  webIp: '192.168.2.11',\n  webPort: '3000',\n  orgUUID: '8Z6vS8FZ',\n  teamUUID: 'GSwm2Lix',\n  user_uuid: 'Q1duxk8t',\n  token: 'lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz',\n  webServiceUrl: '192.168.2.11:3000'\n}\n\n> cli-test0214@0.0.0 start\n> ones-plugin start\n\nasset logo.svg 489 bytes [emitted] [from: public/logo.svg] [copied]\norphan modules 161 KiB [orphan] 22 modules\nwebpack 5.68.0 compiled successfully in 384 ms\n<i> [webpack-dev-server] Project is running at:\n<i> [webpack-dev-server] Loopback: http://localhost:3000/\n<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.2.11:3000/\n<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/\n<i> [webpack-dev-server] Content not from webpack is served from '/Users/huangyao/go/src/cli-test0214/web/public' directory\n2022/02/25 14:30:58 \u672c\u5730\u8c03\u8bd5\u8fd4\u56de\u503c: {\"instance_uuid\":\"5a21a6d7\",\"token\":\"lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz\",\"user_uuid\":\"Q1duxk8t\"}\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4fee\u6539\u4e86\u63d2\u4ef6\u914d\u7f6e\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"/config/plugin.yaml"),"\uff09\uff0c\u9700\u8981\u91cd\u65b0\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"op run")," \u547d\u4ee4\u624d\u80fd\u770b\u5230\u6548\u679c\u3002\u4f8b\u5982\uff1a\u65b0\u589e\u4e86\u80fd\u529b\uff0c\u4fee\u6539\u4e86\u914d\u7f6e\u9879\uff0c\u58f0\u660e\u4e86\u65b0\u6743\u9650\u70b9\u7b49")),(0,r.kt)("h2",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,r.kt)("h3",{id:"\u8c03\u8bd5\u524d\u7aef"},"\u8c03\u8bd5\u524d\u7aef"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"op run")," \u547d\u4ee4\u4f1a\u4e3a\u524d\u7aef\u542f\u52a8\u4e00\u4e2a\u5f00\u53d1\u670d\u52a1\u5668\uff08\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack-dev-server"},"webpack-dev-server"),"\uff09\u5e76\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6a21\u5757\u70ed\u91cd\u8f7d\u3002"),(0,r.kt)("h3",{id:"\u8c03\u8bd5\u540e\u7aef"},"\u8c03\u8bd5\u540e\u7aef"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"op run")," \u547d\u4ee4\u4e5f\u4f1a\u4e3a\u540e\u7aef\u542f\u52a8\u4e00\u4e2a\u5f00\u53d1\u670d\u52a1\uff0c\u7b2c\u4e00\u6b21\u542f\u52a8\u540e\uff0c\u63a7\u5236\u53f0\u4f1a\u8fd4\u56de\u4e00\u4e9b\u53ef\u4f9b\u672c\u5730\u8c03\u8bd5\u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022/02/25 14:30:58 \u672c\u5730\u8c03\u8bd5\u8fd4\u56de\u503c: {"instance_uuid":"5a21a6d7","token":"lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz","user_uuid":"Q1duxk8t"\n')),(0,r.kt)("p",null,"\u8fd9\u4e9b\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u63a5\u53e3\u8bf7\u6c42\u5934\u7684\u503c\u6765\u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5\u3002"),(0,r.kt)("h4",{id:"\u8c03\u8bd5\u63a5\u53e3"},"\u8c03\u8bd5\u63a5\u53e3"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u63a7\u5236\u53f0\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_uuid")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," \u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," \u4e2d\u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(49135).Z,width:"1474",height:"564"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6211\u4eec\u5728\u63a5\u53e3\u7684\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Check-Point")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Plugin-Id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Ones-Plugin-Token")," \u4e09\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Header"',title:'"Header"'},'{\n  "Ones-Check-Point": "team",\n  "Ones-Plugin-Id": "5a21a6d7", // instance_uuid\n  "Ones-Plugin-Token": "lNMOIa9VUhX72Ym0ZrP0eSo98OiXifz8W4CSVG1T03i8RFmUuS0EWGMhekzi6Mqz", // token\n}\n')),(0,r.kt)("p",null,'\u53ef\u4ee5\u770b\u5230\uff0c\u63a5\u53e3\u8c03\u7528\u6210\u529f\u540e\u7ed9\u6211\u4eec\u8fd4\u56de\u4e86 "Hello world"\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "res": "Hello world",\n    "requestBody": {}\n  }\n}\n')))}d.isMDXComponent=!0},98327:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/test1-ae14b0bac3baf28a72ae7fc7eaeeebe7.png"},49135:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/test3-85ba223471f0835d13fe333e86675893.png"}}]);