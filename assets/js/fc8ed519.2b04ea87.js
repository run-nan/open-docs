"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[69183],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),i=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=i(t.components);return r.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=i(a),f=n,g=o["".concat(m,".").concat(f)]||o[f]||N[f]||l;return a?r.createElement(g,p(p({ref:e},k),{},{components:a})):r.createElement(g,p({ref:e},k))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=o;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:n,p[1]=d;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},59070:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={},p="Status code",d={unversionedId:"api/http/status/status",id:"version-1.x/api/http/status/status",title:"Status code",description:"\u901a\u7528\u72b6\u6001\u7801\u8bf4\u660e",source:"@site/versioned_docs/version-1.x/api/http/status/status.md",sourceDirName:"api/http/status",slug:"/api/http/status/",permalink:"/docs/api/http/status/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"api",previous:{title:"ONES graphQL useage",permalink:"/docs/api/graphql/example/"},next:{title:"Fetch API",permalink:"/docs/api/fetch/"}},m={},i=[{value:"\u901a\u7528\u72b6\u6001\u7801\u8bf4\u660e",id:"\u901a\u7528\u72b6\u6001\u7801\u8bf4\u660e",level:2},{value:"\u4e2a\u6027\u72b6\u6001\u7801\u8bf4\u660e",id:"\u4e2a\u6027\u72b6\u6001\u7801\u8bf4\u660e",level:2}],k={toc:i};function N(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"status-code"},"Status code"),(0,n.kt)("h2",{id:"\u901a\u7528\u72b6\u6001\u7801\u8bf4\u660e"},"\u901a\u7528\u72b6\u6001\u7801\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u6210\u529f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VerificationFailure"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6821\u9a8c\u5931\u8d25\uff0c\u6bd4\u5982\u6821\u9a8c\u7801\u65e0\u6548\u6216\u8005\u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u8d85\u65f6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MissingParameter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u6ca1\u6709\u4f20\u5165\u67d0\u4e2a\u5fc5\u586b\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"InUse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67d0\u9879\u8d44\u6e90\u6b63\u5728\u4f7f\u7528\u4e2d\uff0c\u56e0\u6b64\u65e0\u6cd5\u88ab\u5220\u9664")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"InvalidParameter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u4f20\u5165\u7684\u53c2\u6570\u4e0d\u5408\u6cd5\uff0c\u4e3b\u8981\u662f\u6307\u683c\u5f0f\u4e0a\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Malformed"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u89e3\u6790\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"InvalidFileExt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u4e0d\u5408\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"401"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AuthFailure"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6388\u6743\u5931\u8d25\uff0c\u6bd4\u5982\u767b\u5f55\u5931\u8d25\u6216\u8005 token \u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ConstraintViolation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6ee1\u8db3\u6307\u5b9a\u7684\u7ea6\u675f\u6761\u4ef6\uff0c\u56e0\u6b64\u65e0\u6cd5\u6267\u884c\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PermissionDenied"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6ca1\u6709\u67d0\u9879\u6743\u9650\uff0c\u56e0\u6b64\u65e0\u6cd5\u6267\u884c\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LimitExceeded"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u7684\u4f7f\u7528\u8d85\u51fa\u4e86\u9650\u989d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AccessDenied"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u67d0\u9879\u8d44\u6e90\uff0c\u6216\u8005\u67d0\u9879\u8d44\u6e90\u4e0d\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Blocked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u88ab\u5c01\u7981")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NotFound"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67d0\u9879\u8d44\u6e90\u4e0d\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"409"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AlreadyExists"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67d0\u9879\u8d44\u6e90\u5df2\u7ecf\u5b58\u5728\uff0c\u56e0\u6b64\u65e0\u6cd5\u6dfb\u52a0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"410"),(0,n.kt)("td",{parentName:"tr",align:"left"},"gone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u505c\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deleted"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67d0\u9879\u8d44\u6e90\u88ab\u5220\u9664")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CorruptedData"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u810f\u6570\u636e\uff0c\u5373\u6570\u636e\u7406\u5e94\u6ee1\u8db3\u67d0\u9879\u8981\u6c42\uff0c\u4f46\u5b9e\u9645\u5374\u6ca1\u6709\u6ee1\u8db3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UnexpectedArguments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u610f\u6599\u4e4b\u5916\u7684\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SourceDeleted"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u67d0\u9879\u8d44\u6e90\u7684\u6e90\u8d44\u6e90\u88ab\u5220\u9664")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SQLError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 MySQL \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UnknownError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u77e5\u9519\u8bef\uff0c\u7528\u6765\u8868\u793a\u90a3\u4e9b\u6ca1\u6709\u6807\u6ce8\u9519\u8bef\u7801\u7684\u9519\u8bef s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AppStoreBotError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 AppStore \u722c\u866b\u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ElasticSearchError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 ElasticSearch \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LeanCloudError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 LeanCloud \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WechatError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 Wechat \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BadConfig"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u6587\u4ef6\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TelesignError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 Telesign \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RedisError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 Redis \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ServerError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TypeMismatch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53d8\u91cf\u7c7b\u578b\u4e0d\u7b26\u5408\u9884\u671f\u8981\u6c42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DingDingError"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531 DingDing \u4ea7\u751f\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"InvalidEnum"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u7684\u679a\u4e3e\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"KeyConflict"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u952e\u51b2\u7a81")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OutLimit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8d85\u51fa\u9650\u5236")))),(0,n.kt)("h2",{id:"\u4e2a\u6027\u72b6\u6001\u7801\u8bf4\u660e"},"\u4e2a\u6027\u72b6\u6001\u7801\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u683c\u5f0f\u5f02\u5e38\u9519\u8bef(json \u89e3\u6790\u5931\u8d25)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"401"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d/\u5bc6\u7801\u5931\u8d25, \u6216\u767b\u5f55 token \u4e0d\u6b63\u786e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u767b\u5f55\u9a8c\u8bc1\u6210\u529f\u4f46\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u8d44\u6e90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"url \u65e0\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"409"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8d26\u6237\u5df2\u7ecf\u5b58\u5728, \u6216\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"500"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"600"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u7684\u7535\u5b50\u90ae\u7bb1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"605"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"606"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9a8c\u8bc1\u7801\u5df2\u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"607"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UUID \u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8868\u793a\u6dfb\u52a0 project/task \u65f6\uff0c\u5bf9\u5e94\u7684 uuid \u6ca1\u6709\u5c06\u7528\u6237 uuid \u52a0\u5230\u6b64 uuid \u7684\u5934\u90e8\u65f6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"608"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UUID \u91cd\u590d\uff0c\u8868\u793a\u6dfb\u52a0 project/task \u65f6\uff0c\u5bf9\u5e94\u7684 uuid \u5df2\u5b58\u5728\u4e91\u7aef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"609"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Project UUID Not Found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"610"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Task UUID Not Found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"611"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Project/Task \u5b57\u6bb5\u7684\u503c\u6ca1\u6709\u7b26\u5408\u7ea6\u5b9a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"612"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7801\u4e0d\u53ef\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"613"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9080\u8bf7\u7801\u5df2\u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"614"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u7528\u6237\u5df2\u7ecf\u52a0\u5165\u4e86\u4e00\u4e2a\u6b63\u5f0f team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"615"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1/\u624b\u673a\u53f7\u6ca1\u6709\u6ce8\u518c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"616"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u91cd\u7f6e\u9a8c\u8bc1\u7801\u65e0\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"617"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u91cd\u7f6e\u9a8c\u8bc1\u7801\u8fc7\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"618"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Something need to be handed over")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"619"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API cannot be used in personal team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"620"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"621"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Email/phone exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"622"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid phone")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"623"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid message type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"624"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Found Invite code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"625"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ticket is expired")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"626"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid Ticket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"627"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exchange code expired")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"628"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exchange code is invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"629"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exchange code not found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"630"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Found Record")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"623"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid message type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"800"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Some params is miss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"801"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Params is invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"802"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Auth info is miss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"803"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nothing updated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"804"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP Ban")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"805"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search timeout")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"806"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"807"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Found Team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"808"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Team Owner")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"809"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Project Owner")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"810"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Project Member")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"811"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Project Not In Team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"812"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User Not In Team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"813"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Account Expire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"814"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Account Leave Team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"815"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Project Not Bing Template")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"816"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Template Not Target")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"817"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Modify Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"818"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Field Duplicated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"819"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Access Modify")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"820"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Valid Stamp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"821"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Allow Related Itself")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"822"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Milestone Not In Team")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"823"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Milestone Member")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"824"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Team Fulled")))))}N.isMDXComponent=!0}}]);