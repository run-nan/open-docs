"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5516],{17942:(e,t,r)=>{r.d(t,{Zo:()=>E,kt:()=>B});var a=r(50959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},E=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,E=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,B=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return r?a.createElement(B,o(o({ref:t},E),{},{components:r})):a.createElement(B,o({ref:t},E))}));function B(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=r(28957),n=(r(50959),r(17942));const p={},o="ONES Project API \u793a\u4f8b\u8c03\u7528 \u7b80\u6613\u6d41\u7a0b",i={unversionedId:"api/project/project",id:"api/project/project",title:"ONES Project API \u793a\u4f8b\u8c03\u7528 \u7b80\u6613\u6d41\u7a0b",description:"- ONES Project API \u793a\u4f8b\u8c03\u7528 \u7b80\u6613\u6d41\u7a0b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/project/project.md",sourceDirName:"api/project",slug:"/api/project/",permalink:"/open-docs/zh-CN/docs/api/project/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u7528\u6237\u7ec4\u7ba1\u7406",permalink:"/open-docs/zh-CN/docs/api/permission/user_domain/"},next:{title:"\u76ee\u5f55",permalink:"/open-docs/zh-CN/docs/api/project/project/"}},l={},c=[{value:"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee",level:2},{value:"\u6279\u91cf\u521b\u5efa\u4e24\u6761\u5de5\u4f5c\u9879",id:"\u6279\u91cf\u521b\u5efa\u4e24\u6761\u5de5\u4f5c\u9879",level:2},{value:"\u67e5\u8be2\u521b\u5efa\u7684\u5de5\u4f5c\u9879",id:"\u67e5\u8be2\u521b\u5efa\u7684\u5de5\u4f5c\u9879",level:2}],E={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-project-api-\u793a\u4f8b\u8c03\u7528-\u7b80\u6613\u6d41\u7a0b"},"ONES Project API \u793a\u4f8b\u8c03\u7528 \u7b80\u6613\u6d41\u7a0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ones-project-api-%E7%A4%BA%E4%BE%8B%E8%B0%83%E7%94%A8-%E7%AE%80%E6%98%93%E6%B5%81%E7%A8%8B"},"ONES Project API \u793a\u4f8b\u8c03\u7528 \u7b80\u6613\u6d41\u7a0b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE"},"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E6%89%B9%E9%87%8F%E5%88%9B%E5%BB%BA%E4%B8%A4%E6%9D%A1%E5%B7%A5%E4%BD%9C%E9%A1%B9"},"\u6279\u91cf\u521b\u5efa\u4e24\u6761\u5de5\u4f5c\u9879")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E6%9F%A5%E8%AF%A2%E5%88%9B%E5%BB%BA%E7%9A%84%E5%B7%A5%E4%BD%9C%E9%A1%B9"},"\u67e5\u8be2\u521b\u5efa\u7684\u5de5\u4f5c\u9879"))))),(0,n.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u9879\u76ee\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/project/#%E6%B7%BB%E5%8A%A0%E9%A1%B9%E7%9B%AE"},"\u6dfb\u52a0\u9879\u76ee"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9996\u5148\u586b\u5145 project model \u53c2\u6570")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u586b\u5145\u9879\u76ee\u6a21\u677f id \u9ed8\u8ba4\u503c: project-t1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8c03\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/user/#1-%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF"},"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f")," \u83b7\u53d6\u7528\u6237 UUID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u83b7\u53d6\u7684\u7528\u6237 UUID \u586b\u5145\u5230\u9879\u76ee\u6210\u5458 members"))),(0,n.kt)("h2",{id:"\u6279\u91cf\u521b\u5efa\u4e24\u6761\u5de5\u4f5c\u9879"},"\u6279\u91cf\u521b\u5efa\u4e24\u6761\u5de5\u4f5c\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6279\u91cf\u521b\u5efa\u5de5\u4f5c\u9879\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/task/#1-%E6%B7%BB%E5%8A%A0%E5%B7%A5%E4%BD%9C%E9%A1%B9"},"\u6dfb\u52a0\u5de5\u4f5c\u9879"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u751f\u6210\u5de5\u4f5c\u9879 uuid \u751f\u6210\u89c4\u5219\uff1a\u521b\u5efa\u8005 uuid+\u968f\u673a 8 \u4f4d\u5b57\u7b26\u7ec4\u6210(\u5171\u5341\u516d\u4f4d)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6309\u7167 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/task/#%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8"},"\u53c2\u6570\u5217\u8868")," \u586b\u5145\u6570\u636e\u3002\u652f\u6301\u540c\u65f6\u521b\u5efa\u591a\u6761\u5de5\u4f5c\u9879\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u68c0\u67e5\u53c2\u6570\u8fd4\u56de\u503c\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/task/#%E4%BC%A0%E5%BB%BA%E5%B7%A5%E4%BD%9C%E9%A1%B9%E8%BF%94%E5%9B%9E%E5%80%BC"},"\u8fd4\u56de\u503c\u793a\u4f8b")," \u67e5\u770b\u662f\u5426\u6709\u521b\u5efa\u5931\u8d25\u7684\u5de5\u4f5c\u9879\u3002"))),(0,n.kt)("h2",{id:"\u67e5\u8be2\u521b\u5efa\u7684\u5de5\u4f5c\u9879"},"\u67e5\u8be2\u521b\u5efa\u7684\u5de5\u4f5c\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u67e5\u8be2\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/filter/"},"\u7b5b\u9009\u5668")," \u901a\u7528\u8bf4\u660e\u4ecb\u7ecd\u3002\u4e86\u89e3\u7b5b\u9009\u5668\u67e5\u8be2\u539f\u7406\uff0c\u624d\u80fd\u7ec4\u88c5\u67e5\u8be2\u7ed3\u6784\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7ec4\u88c5\u67e5\u8be2\u6761\u4ef6\u8fdb\u884c\u67e5\u8be2\uff0c\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/filter/#2-%E8%8E%B7%E5%8F%96%E6%9F%90%E4%B8%AA%E8%BF%87%E6%BB%A4%E6%9D%A1%E4%BB%B6%E4%B8%8B%E7%9A%84%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u67d0\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u7684\u5de5\u4f5c\u9879\u5217\u8868"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8c03\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/field/#4-%E8%8E%B7%E5%8F%96%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8"},"\u83b7\u53d6\u5168\u5c40\u5c5e\u6027\u5217\u8868")," \u83b7\u53d6\u5c5e\u6027\u5b9a\u4e49\u3002\u4f8b\u5982\uff1afield006 \u4ee3\u8868 \u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76ee, field006 \u4ee3\u8868 \u5de5\u4f5c\u9879\u7c7b\u578b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53c2\u7167 ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/api/project/filter/#%E8%AF%B7%E6%B1%82%E4%BD%93%E7%A4%BA%E4%BE%8B-1"},"\u793a\u4f8b")," \u7ec4\u88c5\u53c2\u6570\u8fdb\u884c\u67e5\u8be2\u3002"))))}s.isMDXComponent=!0}}]);