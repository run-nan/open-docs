"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[86045],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),d=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=d(a),f=r,g=N["".concat(k,".").concat(f)]||N[f]||o[f]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},37192:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="webhook \u7528\u6237\u6307\u5357",p={unversionedId:"api/webhook/webhook",id:"api/webhook/webhook",title:"webhook \u7528\u6237\u6307\u5357",description:"- \u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/webhook/webhook.md",sourceDirName:"api/webhook",slug:"/api/webhook/",permalink:"/open-docs/zh-CN/docs/next/api/webhook/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u5de5\u4f5c\u9879\u4e0a\u4f20\u9644\u4ef6\u793a\u4f8b",permalink:"/open-docs/zh-CN/docs/next/api/resource/example/"},next:{title:"ONES Item",permalink:"/open-docs/zh-CN/docs/next/api/item/"}},k={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528 webhook",id:"\u4f7f\u7528-webhook",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u5982\u4f55\u5728 ONES \u4e2d\u542f\u7528 webhook",id:"\u5982\u4f55\u5728-ones-\u4e2d\u542f\u7528-webhook",level:3},{value:"\u914d\u7f6e webhook",id:"\u914d\u7f6e-webhook",level:3},{value:"\u573a\u666f\u793a\u4f8b",id:"\u573a\u666f\u793a\u4f8b",level:3},{value:"\u6d88\u606f\u91cd\u4f20\u673a\u5236",id:"\u6d88\u606f\u91cd\u4f20\u673a\u5236",level:2},{value:"\u6d88\u606f\u7c7b\u578b",id:"\u6d88\u606f\u7c7b\u578b",level:2},{value:"\u6d88\u606f\u4f53\u683c\u5f0f",id:"\u6d88\u606f\u4f53\u683c\u5f0f",level:2},{value:"\u6d88\u606f\u793a\u4f8b",id:"\u6d88\u606f\u793a\u4f8b",level:2},{value:"\u4e8b\u4ef6\u901a\u77e5\u6d88\u606f",id:"\u4e8b\u4ef6\u901a\u77e5\u6d88\u606f",level:3},{value:"\u5fc3\u8df3\u6d88\u606f",id:"\u5fc3\u8df3\u6d88\u606f",level:3},{value:"\u5e94\u7b54\u6d88\u606f",id:"\u5e94\u7b54\u6d88\u606f",level:3}],m={toc:d};function o(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhook-\u7528\u6237\u6307\u5357"},"webhook \u7528\u6237\u6307\u5357"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%A6%82%E8%BF%B0"},"\u6982\u8ff0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-webhook"},"\u4f7f\u7528 webhook"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"},"\u524d\u63d0\u6761\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#mymy"},"\u5982\u4f55\u5728 ONES \u4e2d\u542f\u7528 webhook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#3"},"\u914d\u7f6e webhook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%9C%BA%E6%99%AF%E7%A4%BA%E4%BE%8B"},"\u573a\u666f\u793a\u4f8b")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B6%88%E6%81%AF%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6"},"\u6d88\u606f\u91cd\u4f20\u673a\u5236")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B"},"\u6d88\u606f\u7c7b\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B6%88%E6%81%AF%E4%BD%93%E6%A0%BC%E5%BC%8F"},"\u6d88\u606f\u4f53\u683c\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B6%88%E6%81%AF%E7%A4%BA%E4%BE%8B"},"\u6d88\u606f\u793a\u4f8b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BA%8B%E4%BB%B6%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF"},"\u4e8b\u4ef6\u901a\u77e5\u6d88\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BF%83%E8%B7%B3%E6%B6%88%E6%81%AF"},"\u5fc3\u8df3\u6d88\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BA%94%E7%AD%94%E6%B6%88%E6%81%AF"},"\u5e94\u7b54\u6d88\u606f"))))),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"webhook \u662f ONES \u7cfb\u7edf\u7684\u5916\u90e8\u4e8b\u4ef6\u901a\u77e5\u673a\u5236\u7684\u5b9e\u73b0\u3002\u7528\u6237\u63d0\u4f9b webhook \u94a9\u5b50\u7684\u5730\u5740\uff0c\u5e76\u4e14\u5b9e\u73b0\u7b80\u5355\u7684\u6d88\u606f\u5e94\u7b54\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 webhook \u6765\u83b7\u53d6\u7cfb\u7edf\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\u7684\u901a\u77e5\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-webhook"},"\u4f7f\u7528 webhook"),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u6211\u4eec\u7684 webhook \u901a\u77e5\uff0c\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a http \u670d\u52a1\u5e76\u5b9e\u73b0\u4e00\u4e2a post \u63a5\u53e3\u3002\u6b64\u63a5\u53e3\u9700\u8981\u5728\u6536\u5230\u6d88\u606f\u540e\u8fd4\u56de\u4e00\u4e2a\u786e\u8ba4\u6d88\u606f\u3002\u82e5\u6536\u4e0d\u5230\u8fd4\u56de\u7684\u786e\u8ba4\u6d88\u606f\uff0c\u6211\u4eec\u7684 webhook \u5c06\u5c1d\u8bd5\u8fdb\u884c\u91cd\u53d1\u3002\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u82e5\u6536\u4e0d\u5230\u4efb\u4f55\u786e\u8ba4\uff0c\n\u5219\u4e0d\u518d\u53d1\u9001\u901a\u77e5\u6d88\u606f\uff0c\u5e76\u5c06\u81ea\u5df1\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a\u672a\u542f\u7528\u3002\u6b64\u65f6\uff0c\u9700\u8981\u5728\u914d\u7f6e\u9875\u9762\u624b\u52a8\u91cd\u65b0\u542f\u7528\u540e\uff0cwebhook \u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u6d88\u606f\u683c\u5f0f\u4e0e\u786e\u8ba4\u6d88\u606f\u7684\u683c\u5f0f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E6%B6%88%E6%81%AF%E4%BD%93%E6%A0%BC%E5%BC%8F"},"\u6d88\u606f\u4f53\u683c\u5f0f"),"\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u6d88\u606f\u91cd\u4f20\u4e0e\u505c\u6b62/\u91cd\u65b0\u53d1\u9001\u7684\u6280\u672f\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E6%B6%88%E6%81%AF%E9%87%8D%E4%BC%A0%E6%9C%BA%E5%88%B6"},"\u6d88\u606f\u91cd\u4f20\u673a\u5236"),"\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u5728-ones-\u4e2d\u542f\u7528-webhook"},"\u5982\u4f55\u5728 ONES \u4e2d\u542f\u7528 webhook"),(0,r.kt)("div",{id:"mymy"},"\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u670d\u52a1\u4eba\u5458\uff0c\u6211\u4eec\u4f1a\u5bf9\u60a8\u7684\u90e8\u7f72\u5b9e\u4f8b\u8fdb\u884c\u5347\u7ea7\u3001\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-webhook"},"\u914d\u7f6e webhook"),(0,r.kt)("div",{id:"3"}," webhook \u7684\u914d\u7f6e\u975e\u5e38\u7b80\u5355\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u914d\u7f6e\u9875\u9762\u4e2d\u65b0\u5efa webhook \u94a9\u5b50\uff0c\u5e76\u6307\u5b9a\u81ea\u5df1\u5b9e\u73b0\u7684web\u63a5\u53e3\u5730\u5740\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PNG",src:a(77046).Z,width:"1447",height:"939"})),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u63d0\u4f9b\u901a\u77e5\u7684\u8fc7\u6ee4\u3002\u7528\u6237\u53ef\u4ee5\u5728\u914d\u7f6e\u9875\u9762\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u53ea\u63a5\u53d7\u6ee1\u8db3\u54ea\u4e9b\u6761\u4ef6\u7684\u901a\u77e5\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PNG",src:a(69135).Z,width:"1452",height:"942"})),(0,r.kt)("p",null,"\u914d\u7f6e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u63a5\u6536\u7aef\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u70b9\u51fb\u201c\u4fdd\u5b58\u5e76\u542f\u7528\u201d\u6765\u542f\u52a8 webhook \u901a\u77e5\u3002"),(0,r.kt)("h3",{id:"\u573a\u666f\u793a\u4f8b"},"\u573a\u666f\u793a\u4f8b"),(0,r.kt)("p",null,"\u6253\u901a\u9879\u76ee\u7ba1\u7406\u5e73\u53f0 ONES \u4e0e\u5185\u90e8\u901a\u8baf\u5e73\u53f0\n\u60a8\u7684\u516c\u53f8\u4f7f\u7528\u4e00\u4e2a\u7edf\u4e00\u7684\u901a\u8baf\u5e73\u53f0\uff0c\u5e0c\u671b\u80fd\u591f\u5728\u5e73\u53f0\u4e0a\u63a5\u5165\u6211\u4eec\u7684\u901a\u77e5\u6d88\u606f\u3002\u5f53 ONES \u7cfb\u7edf\u4e2d\u53d1\u751f\u60a8\u89c9\u5f97\u9700\u8981\u901a\u77e5\u7ed9\u5e72\u7cfb\u4eba\u7684\u4e8b\u4ef6\u4ee5\u540e\uff0c\u5c06\u4e8b\u4ef6\u901a\u77e5\u5230\u6709\u5173\u7684\u4eba\u5458\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 web \u63a5\u53e3\u5e76\u5728 ONES \u4e2d\u914d\u7f6e webhook\u3002\u5f53\u6536\u5230\u6211\u4eec\u7684\u901a\u77e5\u6d88\u606f\u540e\uff0c\u5c06\u6d88\u606f\u8fdb\u884c\u5904\u7406\u540e\u5bf9\u63a5\u5230\u60a8\u7684\u901a\u77e5\u5e73\u53f0\u4e0a\u3002"),(0,r.kt)("h2",{id:"\u6d88\u606f\u91cd\u4f20\u673a\u5236"},"\u6d88\u606f\u91cd\u4f20\u673a\u5236"),(0,r.kt)("p",null,"\u7528\u6237\u9700\u8981\u5728\u5176\u94a9\u5b50 api \u4e0a\u5b9e\u73b0\u7b80\u5355\u7684\u6d88\u606f\u5e94\u7b54\u534f\u8bae\u3002\u7528\u6237\u7684 webhook \u94a9\u5b50\u6536\u5230\u6d88\u606f\u540e\uff0c\u9700\u8981\u5c06\u6d88\u606f\u4e2d\u7684 ID \u8fd4\u56de\uff0c\u8fd9\u662f\u4e3a\u4e86\u8ba9\u6211\u4eec\u7684\u6d88\u606f\u5c3d\u53ef\u80fd\u9001\u8fbe\u3002\u901a\u8fc7\u83b7\u53d6\u9001\u8fbe\u7684\u6d88\u606f\u7684 ID\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u5728\u7f51\u7edc\u73af\u5883\u4e0d\u4f73\u5bfc\u81f4\u6d88\u606f\u672a\u9001\u8fbe\u65f6\u7684\u6d88\u606f\u91cd\u53d1\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u7684\u91cd\u8bd5\u7b56\u7565\u662f\uff1a5 \u79d2\u5185\u672a\u6536\u5230\u5e94\u7b54\u5373\u91cd\u53d1\uff0c\u6bcf\u4e2a\u6d88\u606f\u6700\u5927\u91cd\u53d1\u6570\u91cf\u662f 3 \u6b21\u3002"),(0,r.kt)("p",null,"\u82e5 webhook \u5728\u4e00\u5b9a\u7684\u65f6\u95f4\uff0830 \u5206\u949f\uff09\u5185\uff0c\u672a\u80fd\u6536\u5230\u4efb\u610f\u4e00\u7b14\u6d88\u606f\u7684\u5e94\u7b54\uff08\u7cfb\u7edf\u6ca1\u6709\u4ea7\u751f\u901a\u77e5\u65f6\uff0c\u6211\u4eec\u4f1a\u6bcf 5 \u5206\u949f\u53d1\u9001\u4e00\u6b21\u5fc3\u8df3\u6d88\u606f\uff09\uff0c\u6211\u4eec\u8ba4\u4e3a\u5bf9\u7aef\u7684 web \u670d\u52a1\u5df2\u7ecf\u5931\u6548\uff0c\u5c06\u505c\u6b62\u53d1\u9001\u901a\u77e5\u3002\u4e00\u65e6\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\n\u5219\u9700\u8981\u7528\u6237\u624b\u52a8\u7684\u5728\u914d\u7f6e\u9875\u9762\u91cd\u65b0\u542f\u7528\u6b64 webhook\u3002"),(0,r.kt)("h2",{id:"\u6d88\u606f\u7c7b\u578b"},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u53d1\u9001\u4e24\u79cd\u6d88\u606f:"),(0,r.kt)("p",null,"\u2003","\u2003","\u7cfb\u7edf\u4ea7\u751f\u7684\u901a\u77e5\uff1b"),(0,r.kt)("p",null,"\u2003","\u2003","\u7528\u4e8e\u5b9a\u65f6\u68c0\u6d4b\u63a5\u53e3\u6709\u6548\u6027\u7684\u5fc3\u8df3\u6d88\u606f\uff1b"),(0,r.kt)("p",null,"\u7528\u6237\u65e0\u8bba\u662f\u6536\u5230\u7684\u7cfb\u7edf\u901a\u77e5\uff0c\u8fd8\u662f\u5fc3\u8df3\u6d88\u606f\uff0c\u90fd\u9700\u8981\u8fd4\u56de\u5176 ID\u3002\u5982\u679c\u672a\u6536\u5230\u8fd4\u56de\u6d88\u606f\uff0c\u5219\u5224\u5b9a\u5f53\u524d\u6d88\u606f\u53d1\u9001\u5931\u8d25\u3002"),(0,r.kt)("p",null,"\u63a5\u6536\u901a\u77e5\u6d88\u606f\u7684\u670d\u52a1\u53ef\u4ee5\u6309\u7167\u9700\u8981\u7ee7\u7eed\u5904\u7406\uff0c\u5fc3\u8df3\u6d88\u606f\u53ef\u4ee5\u76f4\u63a5\u5e94\u7b54\u540e\u629b\u5f03\u3002\u901a\u77e5\u6d88\u606f\u548c\u5fc3\u8df3\u6d88\u606f\u90fd\u662f json \u6807\u51c6\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u6d88\u606f\u4e2d\u63d0\u4f9b\u4e86\u90e8\u5206\u63cf\u8ff0\u4fe1\u606f\uff0c\u4ee5\u4fbf\u4e8e\u7528\u6237\u7684\u4f7f\u7528\u3002\u6839\u636e\u8fd9\u4e9b\u63cf\u8ff0\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u5f97\u5230\u4e00\u4e2a\u53ef\u8bfb\u6027\u9ad8\u7684\u6d88\u606f\uff08\u4e0e\u6211\u4eec\u5728\u5fae\u4fe1\u6216\u8005 ONES \u7f51\u9875\u53f3\u4e0a\u89d2\u6536\u5230\u7684\u901a\u77e5\u4e00\u6837\uff09\uff0c\u800c\u4e0d\u9700\u8981\u6839\u636e\u67d0\u4e9b ID \u53bb\u67e5\u8be2\u5176\u5bf9\u5e94\u7684\u503c\u3002"),(0,r.kt)("h2",{id:"\u6d88\u606f\u4f53\u683c\u5f0f"},"\u6d88\u606f\u4f53\u683c\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u4f53\u552f\u4e00\u6807\u8bc6 16 \u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"messages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u4f53\u6570\u7ec4(\u76ee\u524d\u6d88\u606f\u63a8\u9001\u53ea\u652f\u6301\u63a8\u9001\u5355\u6761\u6d88\u606f)")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"message")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"from_user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u6765\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"to_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ONES \u7cfb\u7edf\u5185\u7684\u914d\u7f6e\u7684\u6d88\u606f\u901a\u77e5\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u6807\u9898\uff1a\u683c\u5f0f ","[\u56e2\u961f\u540d\u79f0]","\u5de5\u4f5c\u9879\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u63cf\u8ff0 \u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"who [do_what]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u9879 url \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"task_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u9879 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"issue_type_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u9879\u7c7b\u578b UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"issue_type_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f5c\u9879\u7c7b\u578b\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"event_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"event_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"raw_message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"raw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ONES \u7cfb\u7edf\u4e2d\u6d88\u606f\u4f53")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"user")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d\u79f0")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"raw")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"message uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"team_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56e2\u961f uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5f15\u7528\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"task\uff1a\u5de5\u4f5c\u9879",(0,r.kt)("br",null),"project\uff1a\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5f15\u7528\u7c7b\u578b\u7684 uuid\uff1a",(0,r.kt)("br",null),'\u5982\u679c"ref_type"\u662f"task"\u7684\u8bdd\uff0c\u90a3\u4e48"ref_id"\u7684\u503c\u5c31\u662f\u5de5\u4f5c\u9879 uuid',(0,r.kt)("br",null),'\u5982\u679c"ref_type"\u662f"project"\u7684\u8bdd\uff0c\u90a3\u4e48"ref_id"\u7684\u503c\u5c31\u662f\u9879\u76ee uuid')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"discussion\uff1a\u8bc4\u8bba\u7c7b\u578b\u52a8\u6001",(0,r.kt)("br",null),"system\uff1a\u7cfb\u7edf\u7c7b\u578b\u52a8\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c01\u53d1\u9001\u7684\u6d88\u606f\uff1a",(0,r.kt)("br",null),"BOT\uff1a\u4ee3\u8868\u7cfb\u7edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u7684\u5b9e\u4f53\uff1a\u67d0\u4e2a\u5de5\u4f5c\u9879\u6216\u8005\u67d0\u4e2a\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"send_time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u9001\u65f6\u95f4 \uff0c\u5355\u4f4d\u5fae\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u5f53"type"\u4e3a"discussion"\u624d\u6709\uff0c\u8bc4\u8bba\u7684\u5185\u5bb9')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"is_can_show_richtext_diff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u80fd\u67e5\u770b\u5de5\u4f5c\u9879\u63cf\u8ff0\u7684 diff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subject_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u4e00\u822c\u503c\u4e3a"user"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subject_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u4eba uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u7c7b\u578b\uff1a",(0,r.kt)("br",null),"add\uff1a\u65b0\u589e",(0,r.kt)("br",null),"update\uff1a\u66f4\u65b0",(0,r.kt)("br",null),"delete:\u5220\u9664",(0,r.kt)("br",null),"move:\u79fb\u52a8",(0,r.kt)("br",null),"copy:\u590d\u5236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53 uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"object_attr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u5b9e\u4f53\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"new_value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u540e\u7684\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539\u6570\u636e\u8bf4\u660e")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ext")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d\u79f0\uff0comitempty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"old_value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u65e7\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"new_value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u65b0\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"old_option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e7\u5c5e\u6027\u9879\uff0comitempty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"new_option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u5c5e\u6027\u9879\uff0comitempty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"new_multi_option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e7\u5c5e\u6027\u9879\u5217\u8868\uff0comitempty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"old_multi_option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]desc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u5c5e\u6027\u9879\u5217\u8868\uff0comitempty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"batch_action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6279\u5904\u7406\u52a8\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parent_message_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u6d88\u606f UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trigger_task_uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u5de5\u4f5c\u9879 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"trigger_task_title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u5de5\u4f5c\u9879\u6807\u9898")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"desc")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0")))),(0,r.kt)("h2",{id:"\u6d88\u606f\u793a\u4f8b"},"\u6d88\u606f\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u901a\u77e5\u6d88\u606f"},"\u4e8b\u4ef6\u901a\u77e5\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "SWzhDqzxDDzgsJPB",\n  "messages": [\n    {\n      "from_user": {\n        "uuid": "6ZpgEzkk",\n        "name": "Lyon"\n      },\n      "to_users": [],\n      "title": "[onePiece]title a",\n      "desc": "Lyon modify attribute from status to planned",\n      "url": "https://xxxxxxx/#/team/BDfDqJU7/project/6ZpgEzkkmkvOVIU6/issue_type/GwNxpqQh/task/6ZpgEzkkUmmWMLeg",\n      "task_uuid": "6ZpgEzkkUmmWMLeg",\n      "issue_type_uuid": "GwNxpqQh",\n      "issue_type_name": "Requirement",\n      "event_type": "update_task_status",\n      "event_name": "update task status",\n      "raw_message": {\n        "uuid": "P6KGV72t",\n        "team_uuid": "BDfDqJU7",\n        "ref_type": "project",\n        "ref_id": "6ZpgEzkkmkvOVIU6",\n        "type": "system",\n        "from": "BOT",\n        "to": "6ZpgEzkkmkvOVIU6",\n        "send_time": 1583152234311552,\n        "subject_type": "user",\n        "subject_id": "6ZpgEzkk",\n        "action": "update",\n        "object_type": "task",\n        "object_id": "6ZpgEzkkUmmWMLeg",\n        "object_name": "title a",\n        "object_attr": "field",\n        "old_value": "SriNNDVw",\n        "new_value": "FXapje9B",\n        "ext": {\n          "field_name": "status",\n          "field_type": 12,\n          "field_uuid": "field005",\n          "new_option": {\n            "name": "planned",\n            "uuid": "FXapje9B"\n          },\n          "new_value": "",\n          "old_option": {\n            "name": "in progress",\n            "uuid": "SriNNDVw"\n          },\n          "old_value": "",\n          "parent_message_uuid": "FBRsgsj3"\n        },\n        "is_can_show_richtext_diff": false\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"\u5fc3\u8df3\u6d88\u606f"},"\u5fc3\u8df3\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "hhqS4Wa3UQYJeHZv"\n}\n')),(0,r.kt)("h3",{id:"\u5e94\u7b54\u6d88\u606f"},"\u5e94\u7b54\u6d88\u606f"),(0,r.kt)("p",null,"\u76f4\u63a5\u4ee5\u5b57\u7b26\u4e32\u5199\u5165\u5e94\u7b54\u7684\u6d88\u606f\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"hhqS4Wa3UQYJeHZv\n")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\u5e94\u5c3d\u91cf\u5173\u6ce8\u5fc3\u8df3\u7b54\u590d\uff0c\u5982\u9047\u5230 webhook \u6ca1\u6709\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u53ef\u4ee5\u5148\u67e5\u770b\u5fc3\u8df3\u662f\u5426\u6b63\u5e38\u3002"))}o.isMDXComponent=!0},77046:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/FndkB5kXV4HfGyq9Q-IDFTSOsfdA-dee14b885c9989b9742513dfdb7039dc.png"},69135:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/event-bc7c934c61dbbaf6316d45b55cfed477.png"}}]);