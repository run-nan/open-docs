"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[10326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=k(a),g=r,f=o["".concat(d,".").concat(g)]||o[g]||N[g]||l;return a?n.createElement(f,p(p({ref:e},m),{},{components:a})):n.createElement(f,p({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},17195:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={},p="\u9274\u6743",i={unversionedId:"api/auth/auth",id:"version-1.x/api/auth/auth",title:"\u9274\u6743",description:"- \u901a\u7528\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/api/auth/auth.md",sourceDirName:"api/auth",slug:"/api/auth/",permalink:"/open-docs/zh-CN/docs/api/auth/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u63a5\u53e3",permalink:"/open-docs/zh-CN/docs/api/readme/"},next:{title:"\u7528\u6237",permalink:"/open-docs/zh-CN/docs/api/user/"}},d={},k=[{value:"\u901a\u7528\u8bf4\u660e",id:"\u901a\u7528\u8bf4\u660e",level:2},{value:"\u72b6\u6001\u7801\u8bf4\u660e",id:"\u72b6\u6001\u7801\u8bf4\u660e",level:3},{value:"\u5b57\u6bb5\u683c\u5f0f",id:"\u5b57\u6bb5\u683c\u5f0f",level:3},{value:"email",id:"email",level:4},{value:"phone",id:"phone",level:4},{value:"password",id:"password",level:4},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u7528\u6237\u767b\u5f55",id:"\u7528\u6237\u767b\u5f55",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:'<span id="login\u8fd4\u56de\u53c2\u6570">\u8fd4\u56de\u53c2\u6570\u5217\u8868</span>',id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:'<span id="login\u8fd4\u56de\u793a\u4f8b">\u8fd4\u56de\u793a\u4f8b</span>',id:"\u8fd4\u56de\u793a\u4f8b",level:4},{value:"\u83b7\u53d6\u767b\u5f55\u4fe1\u606f",id:"\u83b7\u53d6\u767b\u5f55\u4fe1\u606f",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-1",level:4},{value:"\u7528\u6237\u767b\u51fa",id:"\u7528\u6237\u767b\u51fa",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:'<span id="logout\u8fd4\u56de\u793a\u4f8b">\u8fd4\u56de\u793a\u4f8b</span>',id:"\u8fd4\u56de\u793a\u4f8b-2",level:4}],m={toc:k};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9274\u6743"},"\u9274\u6743"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%8A%B6%E6%80%81%E7%A0%81%E8%AF%B4%E6%98%8E"},"\u72b6\u6001\u7801\u8bf4\u660e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%AD%97%E6%AE%B5%E6%A0%BC%E5%BC%8F"},"\u5b57\u6bb5\u683c\u5f0f")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-%E8%AF%B4%E6%98%8E"},"API \u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95"},"\u7528\u6237\u767b\u5f55")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E4%BF%A1%E6%81%AF"},"\u83b7\u53d6\u767b\u5f55\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%94%A8%E6%88%B7%E7%99%BB%E5%87%BA"},"\u7528\u6237\u767b\u51fa"))))),(0,r.kt)("h2",{id:"\u901a\u7528\u8bf4\u660e"},"\u901a\u7528\u8bf4\u660e"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u8c03\u7528 ONES \u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3\uff0c \u901a\u5e38\u7528\u6237\u767b\u5f55\u662f\u5fc5\u987b\u7684\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ONES ",(0,r.kt)("a",{parentName:"p",href:"#%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95"},"\u7528\u6237\u767b\u5f55"),"\u63a5\u53e3\u5b8c\u6210\u7528\u6237\u767b\u5f55\u3002 \u5982\u679c\u60a8\u662f\u5408\u6cd5\u7528\u6237\uff0c\u767b\u5f55\u63a5\u53e3\u8fd4\u56de\u503c\u4f1a\u5305\u542b user.uuid \u548c user.token, \u6b64\u4e8c\u503c\u7528\u4e8e ONES \u7528\u6237\u767b\u5f55\u51ed\u8bc1\u3002"),(0,r.kt)("p",null,"ONES API \u63a5\u53e3\u767b\u5f55\u51ed\u8bc1\u4f5c\u4e3a HTTP Header \u4e3a\u63a5\u53e3\u8c03\u7528\u63d0\u4f9b\u8eab\u4efd\u6821\u9a8c:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-User-Id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-Auth-Token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u767b\u5f55\u6210\u529f\u7684 token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Referer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u5730\u5740 url,\u793a\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"https://your-host-name"))))),(0,r.kt)("h3",{id:"\u72b6\u6001\u7801\u8bf4\u660e"},"\u72b6\u6001\u7801\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u53c2\u6570\u683c\u5f0f\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"401"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u6216\u8005\u5bc6\u7801\u4e0d\u6b63\u786e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"801"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u6548\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"813"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8d26\u6237\u8fc7\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"630"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6ce8\u518c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"814"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e0\u56e2\u961f\u7528\u6237")))),(0,r.kt)("h3",{id:"\u5b57\u6bb5\u683c\u5f0f"},"\u5b57\u6bb5\u683c\u5f0f"),(0,r.kt)("h4",{id:"email"},"email"),(0,r.kt)("p",null,"email \u7684\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e 128\uff0c\u5e76\u7b26\u5408\u4ee5\u4e0b\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-email"},"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\n")),(0,r.kt)("h4",{id:"phone"},"phone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-phone"},"\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$\n")),(0,r.kt)("h4",{id:"password"},"password"),(0,r.kt)("p",null,"\u5bc6\u7801\u8981\u6c42\uff1a","[8,32]"," \u4f4d ",(0,r.kt)("a",{parentName:"p",href:"http://defindit.com/ascii.html"},"ascii chart")," \u53ef\u6253\u5370\u5b57\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-password"},"^[\\x21-\\x7E]{8,32}$\n")),(0,r.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,r.kt)("h3",{id:"\u7528\u6237\u767b\u5f55"},"\u7528\u6237\u767b\u5f55"),(0,r.kt)("p",null,"\u7528\u6237\u767b\u5f55\u63a5\u53e3\u8fd4\u56de\u503c\u4e2d token \u7528\u4e8e\u5176\u4ed6 api \u8bbf\u95ee\u65f6\u7684\u767b\u5f55\u5b57\u6bb5\uff0ctoken \u6ca1\u6709\u8fc7\u671f\u65f6\u95f4\uff0c\u7528\u6237\u4fee\u6539\u5bc6\u7801\u3001\u88ab\u79fb\u51fa\u56e2\u961f\u6216\u8005\u7528\u6237\u4e3b\u52a8\u767b\u51fa\u65f6\u4f1a\u5bfc\u81f4 token \u5931\u6548\u3002"),(0,r.kt)("h4",{id:"url"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/auth/login\n")),(0,r.kt)("h4",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u5426"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#email"},"email")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#phone"},"phone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u624b\u673a\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#password"},"password")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u767b\u5f55\u5bc6\u7801")))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),"\u5fc5\u987b\u586b\u5176\u4e2d\u4e00\u4e2a\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),"\u540c\u65f6\u5b58\u5728\u65f6\uff0c\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\u751f\u6548"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},(0,r.kt)("span",{id:"login\u8fd4\u56de\u53c2\u6570"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"user \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u767b\u5f55\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"teams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"team \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5f53\u524d\u6240\u5c5e\u56e2\u961f\u4fe1\u606f(\u76ee\u524d\u53ea\u6709\u4e00\u4e2a\u56e2\u961f)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"org"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"org \u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u7b80\u7565\u4fe1\u606f")))),(0,r.kt)("p",null,"user \u5bf9\u8c61"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"136mQpBg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"mailto:fengbin@bangwork.com"},"fengbin@bangwork.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KidFeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name_pinyin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"KidFeng"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u62fc\u97f3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"avatar"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5934\u50cf url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=32"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u624b\u673a\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1:\u6b63\u5e38 2.\u5220\u9664\u7684 3.\u5f85\u6fc0\u6d3b 4.\u7981\u7528\u7684"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1461314935107445"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6ce8\u518c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5fae\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"channel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=32"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u6240\u5c5e\u7684\u63a8\u9001\u9891\u9053")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=64"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"token \u7528\u6237\u63a5\u53e3\u767b\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"license_types"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int[]"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1, 2, 3, 4, 5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"license \u6388\u6743\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"imported_jira_user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true,false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u901a\u8fc7 jira \u5bfc\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"is_init_password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true,false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u521d\u59cb\u5316\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"zh\uff1a\u7b80\u4f53\u4e2d\u6587\uff0cen\uff1a\u82f1\u8bed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"zh"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bed\u8a00\u73af\u5883")))),(0,r.kt)("p",null,"team \u5bf9\u8c61"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WNiMa6DR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5f53\u524d\u6240\u5c5e\u56e2\u961f uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u5f53\u524d\u6240\u5c5e\u56e2\u961f\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1:\u6b63\u5e38,3:\u8fc7\u671f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"owner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f owner \u7684 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56fe\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"create_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1461314935107445"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u521b\u5efa\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u5fae\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expire_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u6548\u671f\uff0c-1 \u8868\u793a\u6c38\u4e45\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"member_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6210\u5458\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"org_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f\u6240\u5c5e\u7ec4\u7ec7\u7684 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"workdays"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Mon", "Tue", "Wed"\u7b49'),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"work \u65e5\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"workhours"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"800000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"work \u5c0f\u65f6\u6570\uff0c\u5355\u4f4d 10^5\uff0c\u5982 8 \u5c0f\u65f6\uff0c\u5bf9\u5e94 800000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"workhours_unit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"hour"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"work \u5355\u4f4d")))),(0,r.kt)("p",null,"org \u5bf9\u8c61"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len=8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3V69HsHp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"len<=255"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"org_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"style_hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"favicon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56fe\u6807\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1:\u6b63\u5e38 2.\u5220\u9664\u7684"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visibility"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true,false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u89c1\u6027")))),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST \\\n    https://your-host-name/project/api/project/auth/login \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "email": "test@ones.com",\n        "password": "ibJDTEf7PETr"\n    }\'\n')),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b"},(0,r.kt)("span",{id:"login\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("p",null,"http_status_code=200"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user": {\n    "uuid": "Gq8ZZZ7F",\n    "email": "timliudream+200@163.com",\n    "name": "timliudream+200",\n    "name_pinyin": "timliudream+200",\n    "title": "",\n    "avatar": "",\n    "phone": "",\n    "create_time": 1547538969719424,\n    "status": 1,\n    "channel": "uGq8ZZZ7FflUZ6X5J7pqNlQclsWmkTUD",\n    "token": "vBRxnkWypojEA2xxqe92GhhXW3f2FbjC9xZ1A2p7kW0mFhskEwX0wHDpvYZJkpM3",\n    "license_types": [1, 2, 3, 4, 5],\n    "imported_jira_user": false,\n    "is_init_password": false,\n    "language": "zh"\n  },\n  "teams": [\n    {\n      "uuid": "U66S45tG",\n      "status": 1,\n      "name": "tim",\n      "owner": "Gq8ZZZ7F",\n      "logo": "",\n      "cover_url": "",\n      "domain": "",\n      "create_time": 1547538969731072,\n      "expire_time": -1,\n      "type": "pro",\n      "config": {\n        "sprint": {\n          "alias": ""\n        }\n      },\n      "member_count": 6,\n      "org_uuid": "369VHsHp",\n      "workdays": ["Mon", "Tue", "Wed", "Thu", "Fri"],\n      "workhours": 800000,\n      "workhours_unit": "hour"\n    }\n  ],\n  "org": {\n    "uuid": "369VHsHp",\n    "name": "tim",\n    "org_type": 0,\n    "style_hash": "7acb764ba7bbe3137a0ad6ee9ca45cc7",\n    "favicon": "",\n    "notifications": [],\n    "status": 1,\n    "visibility": true\n  }\n}\n')),(0,r.kt)("p",null,"http_status_code=813"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_owner": true,\n  "expire_time": 1578053867,\n  "csm": {\n    "email": "lianxun@ones.com",\n    "name": "lianxun",\n    "title": "",\n    "phone": ""\n  }\n}\n')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u767b\u5f55\u4fe1\u606f"},"\u83b7\u53d6\u767b\u5f55\u4fe1\u606f"),(0,r.kt)("p",null,"\u767b\u5f55\u540e\u83b7\u53d6\u767b\u5f55\u7528\u6237\u7684\u4fe1\u606f(\u5305\u62ec\u7ec4\u7ec7\u3001\u56e2\u961f\u4fe1\u606f\uff0c\u767b\u5f55\u4eba\u5458\u57fa\u672c\u4fe1\u606f\u4ee5\u53ca token)\u3002"),(0,r.kt)("h4",{id:"url-1"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/auth/token_info\n")),(0,r.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"#login%E8%BF%94%E5%9B%9E%E5%8F%82%E6%95%B0"},"\u7528\u6237\u767b\u5f55\u8fd4\u56de\u53c2\u6570\u5217\u8868")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n    https://your-host-name/project/api/project/auth/token_info \\\n    -H 'Ones-Auth-Token: m4Bp0Y9g0wYFwJ2hUZVcfbuQD95DvboAAPPeSA17HmJGzOtl919ydVmIXNyJf8NC' \\\n    -H 'Ones-User-Id: SMS8ciyv'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-1"},"\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("p",null,"\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"#login%E8%BF%94%E5%9B%9E%E7%A4%BA%E4%BE%8B"},"\u7528\u6237\u767b\u5f55\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("h3",{id:"\u7528\u6237\u767b\u51fa"},"\u7528\u6237\u767b\u51fa"),(0,r.kt)("p",null,"\u767b\u5f55\u540e\u7528\u6237\u4e3b\u52a8\u767b\u51fa\u65f6\uff0c\u8c03\u7528\u8be5\u63a5\u53e3\u3002"),(0,r.kt)("h4",{id:"url-2"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your-host-name/project/api/project/auth/logout\n")),(0,r.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,r.kt)("p",null,"GET"),(0,r.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,r.kt)("p",null,"\u662f"),(0,r.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#logout%E8%BF%94%E5%9B%9E%E7%A4%BA%E4%BE%8B"},"\u53c2\u89c1\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n    https://your-host-name/project/api/project/auth/logout \\\n    -H 'Ones-Auth-Token: m4Bp0Y9g0wYFwJ2hUZVcfbuQD95DvboAAPPeSA17HmJGzOtl919ydVmIXNyJf8NC' \\\n    -H 'Ones-User-Id: SMS8ciyv'\n")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-2"},(0,r.kt)("span",{id:"logout\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("p",null,"http_status_code=200"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"null\n")),(0,r.kt)("p",null,"http_status_code=401"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "errcode": "AuthFailure.InvalidToken",\n  "reason": "InvalidToken",\n  "type": "AuthFailure"\n}\n')))}N.isMDXComponent=!0}}]);