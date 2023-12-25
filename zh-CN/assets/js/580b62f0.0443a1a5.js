"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7287],{17942:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(50959);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,p(p({ref:e},m),{},{components:n})):a.createElement(N,p({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69967:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(28957),r=(n(50959),n(17942));const l={},p="@ones-op/node-fs",i={unversionedId:"reference/packages/node-fs/node-fs",id:"reference/packages/node-fs/node-fs",title:"@ones-op/node-fs",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u6587\u4ef6\u64cd\u4f5c\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u5141\u8bb8\u63d2\u4ef6\u5f00\u53d1\u8005\u5bf9\u63d2\u4ef6\u6587\u4ef6\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/packages/node-fs/node-fs.mdx",sourceDirName:"reference/packages/node-fs",slug:"/reference/packages/node-fs/",permalink:"/open-docs/zh-CN/docs/reference/packages/node-fs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"@ones-op/node-database",permalink:"/open-docs/zh-CN/docs/reference/packages/node-database/"},next:{title:"@ones-op/node-third-import",permalink:"/open-docs/zh-CN/docs/reference/packages/node-third-import/"}},d={},o=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"API",id:"api",level:2},{value:"API\u5217\u8868",id:"api\u5217\u8868",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"1.node-fs\u5305\u4e2dAPI\u7684\u53c2\u6570\u4e0eNode.js\u7684fs\u4fdd\u6301\u4e00\u81f4\uff0c\u4f46\u662f\u5bf9\u6587\u4ef6\u548c\u76ee\u5f55\u53c2\u6570\u505a\u4e86\u4ee5\u4e0b\u9650\u5236\uff1a",id:"1node-fs\u5305\u4e2dapi\u7684\u53c2\u6570\u4e0enodejs\u7684fs\u4fdd\u6301\u4e00\u81f4\u4f46\u662f\u5bf9\u6587\u4ef6\u548c\u76ee\u5f55\u53c2\u6570\u505a\u4e86\u4ee5\u4e0b\u9650\u5236",level:4},{value:"2.\u6587\u4ef6\u5927\u5c0f\u4e0d\u5b9c\u592a\u5927\uff0c\u5efa\u8bae\u4e0d\u8d85\u8fc7500MB\u3002",id:"2\u6587\u4ef6\u5927\u5c0f\u4e0d\u5b9c\u592a\u5927\u5efa\u8bae\u4e0d\u8d85\u8fc7500mb",level:4},{value:"3.\u5982\u679c\u8bfb\u5199\u5927\u6587\u4ef6\uff0c\u5efa\u8bae\u91c7\u7528\u5206\u7247|\u5206\u6279\u5904\u7406\u3002",id:"3\u5982\u679c\u8bfb\u5199\u5927\u6587\u4ef6\u5efa\u8bae\u91c7\u7528\u5206\u7247\u5206\u6279\u5904\u7406",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],m={toc:o},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ones-opnode-fs"},"@ones-op/node-fs"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u6587\u4ef6\u64cd\u4f5c\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u5141\u8bb8\u63d2\u4ef6\u5f00\u53d1\u8005\u5bf9\u63d2\u4ef6\u6587\u4ef6\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"node-fs\u5305\u901a\u8fc7\u5c01\u88c5Node.js\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.cn/dist/latest-v16.x/docs/api/fs.html"},"fs")," \u6765\u5b9e\u73b0\u3002\u76ee\u524d\uff0cnode-fs\u5305\u4ec5\u652f\u6301fs\u4e2d ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.cn/dist/latest-v16.x/docs/api/fs.html#promise-api"},"promises")," \u7684\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"ONES")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v3.14.0+")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"api\u5217\u8868"},"API\u5217\u8868"),(0,r.kt)("p",null,"\u4e0b\u9762\u7ed9\u51fanode-fs\u5305\u6240\u652f\u6301\u7684API\u5217\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u539f\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u60c5\u51b5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"access(path","[, mode]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u6237\u5bf9 path \u6307\u5b9a\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u6743\u9650\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appendFile"),(0,r.kt)("td",{parentName:"tr",align:null},"appendFile(path, data","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u5c06\u6570\u636e\u8ffd\u52a0\u5230\u6587\u4ef6\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u5c1a\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chmod"),(0,r.kt)("td",{parentName:"tr",align:null},"chmod(path, mode)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u6587\u4ef6\u7684\u6743\u9650\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chown"),(0,r.kt)("td",{parentName:"tr",align:null},"chown(path, uid, gid)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u6587\u4ef6\u7684\u6240\u6709\u6743\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyFile"),(0,r.kt)("td",{parentName:"tr",align:null},"copyFile(src, dest","[, mode]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u5c06 src \u590d\u5236\u5230 dest\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c dest \u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4f1a\u88ab\u8986\u76d6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cp"),(0,r.kt)("td",{parentName:"tr",align:null},"cp(src, dest","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u6574\u4e2a\u76ee\u5f55\u7ed3\u6784\u4ece src \u5f02\u6b65\u5730\u590d\u5236\u5230 dest\uff0c\u5305\u62ec\u5b50\u76ee\u5f55\u548c\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lchmod"),(0,r.kt)("td",{parentName:"tr",align:null},"lchmod(path, mode)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u7b26\u53f7\u94fe\u63a5\u7684\u6743\u9650\u3002\u6b64\u65b9\u6cd5\u4ec5\u5728 macOS \u4e0a\u5b9e\u73b0\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lchown"),(0,r.kt)("td",{parentName:"tr",align:null},"lchown(path, uid, gid)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u7b26\u53f7\u94fe\u63a5\u4e0a\u7684\u6240\u6709\u6743\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lutimes"),(0,r.kt)("td",{parentName:"tr",align:null},"lutimes(path, atime, mtime)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u6587\u4ef6\u7684\u8bbf\u95ee\u548c\u4fee\u6539\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"link(existingPath, newPath)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u4ece existingPath \u5230 newPath \u7684\u65b0\u94fe\u63a5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lstat"),(0,r.kt)("td",{parentName:"tr",align:null},"lstat(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u6548\u4e8e fsPromises.stat()\uff0c\u9664\u975e path \u6307\u5411\u7b26\u53f7\u94fe\u63a5\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u88ab\u7edf\u8ba1\u7684\u662f\u94fe\u63a5\u672c\u8eab\uff0c\u800c\u4e0d\u662f\u5176\u6240\u5f15\u7528\u7684\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mkdir"),(0,r.kt)("td",{parentName:"tr",align:null},"mkdir(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u521b\u5efa\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mkdtemp"),(0,r.kt)("td",{parentName:"tr",align:null},"mkdtemp(prefix","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u552f\u4e00\u7684\u4e34\u65f6\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"open"),(0,r.kt)("td",{parentName:"tr",align:null},"open(path, flags","[, mode]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opendir"),(0,r.kt)("td",{parentName:"tr",align:null},"opendir(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u6253\u5f00\u76ee\u5f55\u8fdb\u884c\u8fed\u4ee3\u626b\u63cf\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readdir"),(0,r.kt)("td",{parentName:"tr",align:null},"readdir(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u76ee\u5f55\u7684\u5185\u5bb9\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readFile"),(0,r.kt)("td",{parentName:"tr",align:null},"readFile(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u8bfb\u53d6\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readlink"),(0,r.kt)("td",{parentName:"tr",align:null},"readlink(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 path \u5f15\u7528\u7684\u7b26\u53f7\u94fe\u63a5\u7684\u5185\u5bb9\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"realpath"),(0,r.kt)("td",{parentName:"tr",align:null},"realpath(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u5b9a path \u7684\u5b9e\u9645\u4f4d\u7f6e\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rename"),(0,r.kt)("td",{parentName:"tr",align:null},"rename(oldPath, newPath)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06 oldPath \u91cd\u547d\u540d\u4e3a newPath\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rmdir"),(0,r.kt)("td",{parentName:"tr",align:null},"rmdir(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u7531 path \u6807\u8bc6\u7684\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rm"),(0,r.kt)("td",{parentName:"tr",align:null},"rm(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6587\u4ef6\u548c\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stat"),(0,r.kt)("td",{parentName:"tr",align:null},"stat(path","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a\u7684 path \u7684 fs.Stats\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symlink"),(0,r.kt)("td",{parentName:"tr",align:null},"symlink(target, path","[, type]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"truncate"),(0,r.kt)("td",{parentName:"tr",align:null},"truncate(path","[, len]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06 path \u4e0a\u7684\u5185\u5bb9\u622a\u65ad\uff08\u7f29\u77ed\u6216\u5ef6\u957f\u957f\u5ea6\uff09\u5230 len \u4e2a\u5b57\u8282\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unlink"),(0,r.kt)("td",{parentName:"tr",align:null},"unlink(path)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c path \u6307\u5411\u7b26\u53f7\u94fe\u63a5\uff0c\u5219\u5220\u9664\u8be5\u94fe\u63a5\uff0c\u4f46\u4e0d\u5f71\u54cd\u94fe\u63a5\u6240\u6307\u5411\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002 \u5982\u679c path \u6307\u5411\u7684\u6587\u4ef6\u8def\u5f84\u4e0d\u662f\u7b26\u53f7\u94fe\u63a5\uff0c\u5219\u5220\u9664\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"utimes"),(0,r.kt)("td",{parentName:"tr",align:null},"utimes(path, atime, mtime)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539 path \u5f15\u7528\u7684\u5bf9\u8c61\u7684\u6587\u4ef6\u7cfb\u7edf\u65f6\u95f4\u6233\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"watch(filename","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5f02\u6b65\u8fed\u4ee3\u5668\uff0c\u5176\u76d1\u89c6 filename \u4e0a\u7684\u66f4\u6539\uff0c\u5176\u4e2d filename \u662f\u6587\u4ef6\u6216\u76ee\u5f55\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writeFile"),(0,r.kt)("td",{parentName:"tr",align:null},"writeFile(file, data","[, options]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u5730\u5c06\u6570\u636e\u5199\u5165\u6587\u4ef6\uff0c\u5982\u679c\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u66ff\u6362\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h4",{id:"1node-fs\u5305\u4e2dapi\u7684\u53c2\u6570\u4e0enodejs\u7684fs\u4fdd\u6301\u4e00\u81f4\u4f46\u662f\u5bf9\u6587\u4ef6\u548c\u76ee\u5f55\u53c2\u6570\u505a\u4e86\u4ee5\u4e0b\u9650\u5236"},"1.node-fs\u5305\u4e2dAPI\u7684\u53c2\u6570\u4e0eNode.js\u7684fs\u4fdd\u6301\u4e00\u81f4\uff0c\u4f46\u662f\u5bf9\u6587\u4ef6\u548c\u76ee\u5f55\u53c2\u6570\u505a\u4e86\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,r.kt)("p",null,"\uff081\uff09\u76ee\u5f55\u6216\u6587\u4ef6\u53c2\u6570\u5fc5\u987b\u662fstring\u7c7b\u578b\u3002\u5982\u679c\u53c2\u6570\u4e0d\u6ee1\u8db3\uff0c\u5c06\u7ed9\u4e0e\u9519\u8bef\u63d0\u793a\uff1a"),(0,r.kt)("font",{color:"#FF0000"}," \xa0\xa0\xa0\xa0\xa0\xa0\"Argument of the file or directory is not assignable to parameter of type 'string'.\"")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uff082\uff09\u76ee\u5f55\u6216\u6587\u4ef6\u53c2\u6570\u4e0d\u5141\u8bb8\u8d85\u51faworkspace\u76ee\u5f55\u5916\u3002\u5982\u679c\u53c2\u6570\u4e0d\u6ee1\u8db3\uff0c\u5c06\u7ed9\u4e0e\u9519\u8bef\u63d0\u793a\uff1a"),(0,r.kt)("font",{color:"#FF0000"},' \xa0\xa0\xa0\xa0\xa0\xa0"Invalid Param: ../file21.txt Out of the accessible path range."')," ",(0,r.kt)("br",null),(0,r.kt)("h4",{id:"2\u6587\u4ef6\u5927\u5c0f\u4e0d\u5b9c\u592a\u5927\u5efa\u8bae\u4e0d\u8d85\u8fc7500mb"},"2.\u6587\u4ef6\u5927\u5c0f\u4e0d\u5b9c\u592a\u5927\uff0c\u5efa\u8bae\u4e0d\u8d85\u8fc7500MB\u3002"),(0,r.kt)("h4",{id:"3\u5982\u679c\u8bfb\u5199\u5927\u6587\u4ef6\u5efa\u8bae\u91c7\u7528\u5206\u7247\u5206\u6279\u5904\u7406"},"3.\u5982\u679c\u8bfb\u5199\u5927\u6587\u4ef6\uff0c\u5efa\u8bae\u91c7\u7528\u5206\u7247|\u5206\u6279\u5904\u7406\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"node-fs\u5404\u4e2a\u63a5\u53e3\u7684\u4f7f\u7528\u548cNode.js\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.cn/dist/latest-v16.x/docs/api/fs.html"},"fs")," \u57fa\u672c\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir"),"\u4e3a\u4f8b\uff0c\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {Logger} from '@ones-op/node-logger'\nimport {promises} from '@ones-op/node-fs'\n\nconst dir1_name = './dir1'\nconst dir2_name = './dir1/dir2'\nconst dir3_name = './dir1/dir2/dir3'\n\nexport async function TestMkdir() {\n  try {\n        await promises.mkdir(dir1_name)\n        await promises.mkdir(dir3_name, {recursive: true})\n\n    } catch (error: any) {\n        Logger.error('[TestMkdir] error:', error.message)\n    }\n}\n")))}u.isMDXComponent=!0}}]);