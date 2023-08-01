"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[42659],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=s(a),m=l,c=k["".concat(p,".").concat(m)]||k[m]||o[m]||r;return a?t.createElement(c,u(u({ref:n},d),{},{components:a})):t.createElement(c,u({ref:n},d))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,u=new Array(r);u[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var s=2;s<r;s++)u[s]=a[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},57937:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const r={},u="ONES graphQL example",i={unversionedId:"api/graphql/example/example",id:"api/graphql/example/example",title:"ONES graphQL example",description:"GraphQL \u8bf7\u6c42\u4f53\u6848\u4f8b",source:"@site/docs/api/graphql/example/example.md",sourceDirName:"api/graphql/example",slug:"/api/graphql/example/",permalink:"/open-docs/docs/next/api/graphql/example/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Schema types",permalink:"/open-docs/docs/next/api/graphql/schema/"},next:{title:"HTTP status description",permalink:"/open-docs/docs/next/api/http/status"}},p={},s=[{value:'<p id="request_graphql">GraphQL \u8bf7\u6c42\u4f53\u6848\u4f8b</p>',id:"graphql-\u8bf7\u6c42\u4f53\u6848\u4f8b",level:2},{value:"\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f",id:"\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f",level:2},{value:"\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f",id:"\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f",level:2},{value:"\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868",id:"\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868",level:2},{value:"\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9",id:"\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9",level:2},{value:"\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868",id:"\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868",level:2},{value:"\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e",id:"\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e",level:2},{value:"\u4efb\u52a1\u7c7b\u578b(\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b)",id:"\u4efb\u52a1\u7c7b\u578b\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b",level:2},{value:"\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868",id:"\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868",level:2},{value:"\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868",id:"\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868",level:2},{value:"\b \u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009",id:"-\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009",level:2},{value:"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009",id:"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009",level:2},{value:"\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009",id:"\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009",level:2},{value:"\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009",id:"\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009",level:2},{value:"\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009",id:"\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009",level:2},{value:"\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009",id:"\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009",level:2},{value:"\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6",id:"\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6",level:2},{value:"\u8fed\u4ee3\u4e0b\u7684\u5269\u4f59\u5de5\u65f6",id:"\u8fed\u4ee3\u4e0b\u7684\u5269\u4f59\u5de5\u65f6",level:2},{value:"\u5de5\u65f6",id:"\u5de5\u65f6",level:2},{value:"\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe",id:"\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe",level:2},{value:"\u9879\u76ee\u8ba1\u5212",id:"\u9879\u76ee\u8ba1\u5212",level:2},{value:"\u901a\u8fc7\u65e5\u671f\u7b5b\u9009",id:"\u901a\u8fc7\u65e5\u671f\u7b5b\u9009",level:2},{value:"\u5355\u884c\u6587\u672c\u7b5b\u9009",id:"\u5355\u884c\u6587\u672c\u7b5b\u9009",level:2},{value:"\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009",id:"\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009",level:2}],d={toc:s};function o(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ones-graphql-example"},"ONES graphQL example"),(0,l.kt)("h1",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"#request_graphql"},"GraphQL \u8bf7\u6c42\u4f53\u6848\u4f8b")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f"},"\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f"},"\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868"},"\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9"},"\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e"},"\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u4efb\u52a1\u7c7b\u578b(\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b)"},"\u4efb\u52a1\u7c7b\u578b(\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b)")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009"},"\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009"},"\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6"},"\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u5de5\u65f6"},"\u5de5\u65f6")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe"},"\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u9879\u76ee\u8ba1\u5212"},"\u9879\u76ee\u8ba1\u5212")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u901a\u8fc7\u65e5\u671f\u7b5b\u9009"},"\u901a\u8fc7\u65e5\u671f\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u5355\u884c\u6587\u672c\u7b5b\u9009"},"\u5355\u884c\u6587\u672c\u7b5b\u9009")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"#\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009"},"\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009")))),(0,l.kt)("h2",{id:"graphql-\u8bf7\u6c42\u4f53\u6848\u4f8b"},(0,l.kt)("p",{id:"request_graphql"},"GraphQL \u8bf7\u6c42\u4f53\u6848\u4f8b")),(0,l.kt)("h2",{id:"\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f"},"\u67e5\u8be2\u4f18\u5148\u7ea7\u5c5e\u6027\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  fields(filter: { pool_in: ["task"], context: { type_equal: "team" }, aliases_in: ["priority"] }) {\n    context {\n      type\n    }\n    key\n    type\n    uuid\n    name\n    itemType\n    fieldType\n    allowEmpty\n    required\n    builtIn\n    defaultValue\n    aliases\n    pool\n    options {\n      uuid\n      value\n      color\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f"},"\u67e5\u8be2\u6240\u6709\u5de5\u4f5c\u9879\u7c7b\u578b\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  issueTypes {\n    uuid\n    name\n    key\n    builtIn\n    namePinyin\n    createTime\n    subIssueType\n    projects {\n      name\n      uuid\n      key\n    }\n  }\n}\n")),(0,l.kt)("h2",{id:"\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868"},"\u9879\u76ee\u4e0b\u7684\u5361\u7247\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  cards(\n    filter: {\n      objectId_equal: "34QZDMqz"\n      objectType_equal: "project_component"\n      status_equal: "normal"\n    }\n  ) {\n    key\n    uuid\n    name\n    description\n    type\n    config\n  }\n}\n')),(0,l.kt)("h2",{id:"\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9"},"\u66f4\u65b0\u5361\u7247\u516c\u544a\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  mutation\n  UpdateCard {\n    updateCard(\n      config: { project_uuid: "FXWjFL8RERRdheM7", content: "<p>1232</p>" }\n      key: "card-D89TnAyY"\n    ) {\n      key\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u8fed\u4ee3\u4e0b\u7684\u4efb\u52a1\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { sprint_in: ["3XX1trc1"] }) {\n    uuid\n    parent {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e"},"\u4efb\u52a1\u7684\u5173\u8054\u7528\u4f8b\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { uuid_equal: "RvJM8Q3FsTVRkDWO" }) {\n    uuid\n    name\n    relatedTestcasePlans {\n      uuid\n      name\n    }\n    relatedTestcasePlanCases {\n      testcaseCase {\n        name\n      }\n      result\n    }\n    relatedCases {\n      uuid\n      name\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u4efb\u52a1\u7c7b\u578b\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b"},"\u4efb\u52a1\u7c7b\u578b(\u53ef\u6307\u5b9a\u7236\u5b50\u4efb\u52a1\u7c7b\u578b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  issueTypes(\n    filter: {\n      projects: { uuid_in: ["5EYNKKKBkkkkkk34"] }\n      subIssueType_in: [true] # \u7236\u5b50\u4efb\u52a1\u7c7b\u578b(\u4e0d\u4f20type\u5c06\u8fd4\u56de\u6240\u6709)\n    }\n  ) {\n    uuid\n    name\n  }\n}\n')),(0,l.kt)("h2",{id:"\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u4efb\u52a1\u7c7b\u578b\u4e0b\u7684\u4efb\u52a1\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { issueType_in: ["Jmjaoxqb"] }) {\n    uuid\n    name\n  }\n}\n')),(0,l.kt)("h2",{id:"\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868"},"\u4efb\u52a1\u5173\u6ce8\u8005\u4e0b\u7684\u4efb\u52a1\u5217\u8868"),(0,l.kt)("p",null,"\u5173\u6ce8\u8005\u672c\u8d28\u4e0a\u662f\u7528\u6237, \u6240\u4ee5\u53ef\u4ee5\u8f93\u51fa\u7528\u6237\u7684\u76f8\u5173\u7684\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { owner_in: ["5EYNKKKB"], watchers: { uuid_in: ["5EYNKKKB"] } }) {\n    uuid\n    name\n    watchers {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"-\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009"},"\b \u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u8005\u7b5b\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { owner_in: ["5EYNKKKB"] }) {\n    uuid\n    name\n    owner {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u521b\u5efa\u65f6\u95f4\u7b5b\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    filter: {\n      project: { uuid_in: ["5EYNKKKBkkkkkk21"] }\n      # \u65b9\u6cd51\n      createTime_range: { from: "2017-02-01", to: "2019-03-11" }\n      # \u65b9\u6cd52\n      createTime_range: {\n        quick: "last_7_days" # last_14_days last_30_days yesterday today this_week this_month this_quarter this_year\n      }\n    }\n  ) {\n    uuid\n    name\n    deadline\n    project {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u6807\u9898\u7b5b\u9009"),(0,l.kt)("p",null,"\u7406\u8bba\u4e0a\u6587\u672c\u7c7b\u578b\u7684\u90fd\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"match"),"\u6a21\u7cca\u5339\u914d\u641c\u7d22"),(0,l.kt)("p",null,"NOTE: ",(0,l.kt)("inlineCode",{parentName:"p"},"match")," \u6700\u540e\u653e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u6700\u4e0b\u9762,\u4ece\u800c\u63d0\u9ad8\u7b5b\u9009\u6027\u80fd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    filter: {\n      project: { uuid_in: ["5EYNKKKBkkkkkk21"] }\n      name_match: "\u600e\u4e48\u6837" # \u653e\u5728\u7b5b\u9009\u6761\u4ef6\u7684\u6700\u4e0b\u9762, \u63d0\u9ad8\u7b5b\u9009\u6027\u80fd\n    }\n  ) {\n    uuid\n    name\n    deadline\n    project {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009"},"\u901a\u8fc7\u622a\u6b62\u65e5\u671f\u7b5b\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    filter: {\n      project: { uuid_in: ["5EYNKKKBkkkkkk21"] }\n      # \u65b9\u6cd51\n      deadline_range: { from: "2017-02-01", to: "2019-03-11" }\n      # \u65b9\u6cd52\n      deadline_range: {\n        quick: "last_7_days" # last_14_days last_30_days yesterday today this_week this_month this_quarter this_year\n      }\n    }\n  ) {\n    uuid\n    name\n    deadline\n    project {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009"},"\u901a\u8fc7\u4f18\u5148\u7ea7\u7b5b\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(filter: { assign_in: ["5EYNKKKB"], priority: { uuid_in: ["5RgkarJA"] } }) {\n    uuid\n    name\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009"},"\u901a\u8fc7\u4efb\u52a1\u8d1f\u8d23\u4eba\u7b5b\u9009"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    filter: {\n      assign_in: ["5EYNKKKB"]\n      status: {\n        uuid_in: ["GWjYu2WK"] # \u4efb\u52a1\u7684\u72b6\u6001\u7b5b\u9009\n      }\n    }\n  ) {\n    uuid\n    name\n  }\n}\n')),(0,l.kt)("h2",{id:"\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6"},"\u8fed\u4ee3\u4e0b\u6240\u6709\u4efb\u52a1\u7684\u603b\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  buckets(groupBy: { tasks: { sprint: {} } }, orderBy: {}) {\n    sprint {\n      uuid\n    }\n    aggregateInt(sum: "tasks.estimatedHours") # \u7edf\u8ba1\n  }\n}\n')),(0,l.kt)("h2",{id:"\u8fed\u4ee3\u4e0b\u7684\u5269\u4f59\u5de5\u65f6"},"\u8fed\u4ee3\u4e0b\u7684\u5269\u4f59\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  buckets(groupBy: { tasks: { sprint: {} } }, filter: { tasks: { sprint_in: ["MpmPXEYA"] } }) {\n    key\n    sprint {\n      uuid\n    }\n    remainingHours(sum: "tasks.remainingManhour")\n  }\n}\n')),(0,l.kt)("h2",{id:"\u5de5\u65f6"},"\u5de5\u65f6"),(0,l.kt)("p",null,"\u63a5\u53e3\u8bf7\u6c42 body \u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{"query":"%s"} # "%s" string\u7c7b\u578b, \u53c2\u8003\u4e0b\u9762\u793a\u4f8b\u66ff\u6362\n')),(0,l.kt)("p",null,"\u6dfb\u52a0\u9884\u4f30/\u767b\u8bb0\u5de5\u65f6"),(0,l.kt)("p",null,"type \u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9884\u4f30\u5de5\u65f6 type=estimated"),(0,l.kt)("li",{parentName:"ul"},"\u767b\u8bb0\u5de5\u65f6 type=recorded")),(0,l.kt)("p",null,"mode \u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6c47\u603b\u6a21\u5f0f mode=detailed"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6a21\u5f0f mode=simple")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addManhour(\n    task: "4Y5qoeuLHNXSHhZs"\n    hours: 100000\n    start_time: 1649840400\n    type: "recorded"\n    description: "do something"\n    owner: "4Y5qoeuL"\n    mode: "detailed"\n  ) {\n    key\n    uuid\n  }\n}\n')),(0,l.kt)("p",null,"\u4fee\u6539\u9884\u4f30/\u767b\u8bb0\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updateManhour(\n    key: "manhour-2CjkDZto"\n    task: "4Y5qoeuLHNXSHhZs"\n    hours: 100000\n    start_time: 1649840400\n    type: "recorded"\n    description: "do something"\n    owner: "4Y5qoeuL"\n    mode: "detailed"\n  ) {\n    key\n    uuid\n  }\n}\n')),(0,l.kt)("p",null,"\u5220\u9664\u9884\u4f30/\u767b\u8bb0\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  deleteManhour(key: "manhour-BEA9LMgd") {\n    key\n  }\n}\n')),(0,l.kt)("p",null,"\u4fee\u6539\u5269\u4f59\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  UpdateRemainingHour(key: "remaining_hour-D2pLSaJ3YSkyDm1l-DAyGEN19", hours: 2000000) {\n    key\n  }\n}\n')),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u5de5\u4f5c\u9879\u4e0b\u67d0\u7528\u6237\u7684\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  manhours(\n    filter: { owner_in: ["4Y5qoeuL"], task_in: ["4Y5qoeuLHNXSHhZs"] }\n    orderBy: { createTime: "DESC", startTime: "DESC" }\n  ) {\n    key\n    hours\n    startTime\n    description\n    type\n    owner {\n      uuid\n      avatar\n      name\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u5de5\u4f5c\u9879\u4e0b\u7684\u7528\u6237\u5de5\u65f6\u4fe1\u606f\uff0c\u5e76\u6309\u7528\u6237\u5206\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  buckets(\n    groupBy: { manhours: { owner: {}, task: {} } }\n    orderBy: { owner: { namePinyin: "ASC" } }\n  ) {\n    manhours(filter: { task_in: ["4Y5qoeuLHNXSHhZs"] }) {\n      key\n    }\n    owner {\n      uuid\n      name\n      avatar\n    }\n    actualHours(sum: "manhours.recordedHour")\n    estimatedHours(sum: "manhours.estimatedHour")\n    remainingHour\n  }\n}\n')),(0,l.kt)("p",null,"\u67e5\u8be2\u67d0\u5de5\u4f5c\u9879\u6c47\u603b\u5de5\u65f6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  buckets(groupBy: { manhours: { owner: {}, task: {} } }, orderBy: $orderBy) {\n    manhours(filter: { owner_in: ["4Y5qoeuL"], task_in: ["4Y5qoeuLHNXSHhZs"] }) {\n      key\n    }\n    actualHours(sum: "manhours.recordedHour")\n    estimatedHours(sum: "manhours.estimatedHour")\n    remainingHour\n    remainingHourDeviation\n  }\n}\n')),(0,l.kt)("h2",{id:"\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe"},"\u67e5\u8be2\u6d3b\u52a8\u89c6\u56fe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  activityCharts(filter: { project: { uuid_in: ["\u9879\u76ee uuid"] } }) {\n    uuid\n  }\n}\n')),(0,l.kt)("h2",{id:"\u9879\u76ee\u8ba1\u5212"},"\u9879\u76ee\u8ba1\u5212"),(0,l.kt)("p",null,"\u65b0\u5efa\u8ba1\u5212"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addActivity(\n    name: "\u6d4b\u8bd52"\n    chart_uuid: "7cSvWRJi" # \u6d3b\u52a8\u89c6\u56fe uuid\n    assign: "Pqmud3zh"\n    type: "ppm_task"\n    progress: 0\n    start_time: 1610640000\n    end_time: 1610726399\n    parent: ""\n  ) {\n    key\n    name\n    ganttDataType: type\n    uuid\n    number\n    progress\n    createTime\n    chartUUID\n    planStartTime: startTime\n    planEndTime: endTime\n    position\n    assign {\n      uuid\n      name\n      avatar\n    }\n    task {\n      uuid\n      parent {\n        uuid\n      }\n      issueType {\n        icon\n        uuid\n      }\n      subIssueType {\n        icon\n        uuid\n      }\n    }\n    sprint {\n      uuid\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u67e5\u8be2\u8ba1\u5212"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  activities(\n    orderBy: { position: "ASC" }\n    filter: {\n      chartUUID_in: ["7cSvWRJi"] # \u6d3b\u52a8\u89c6\u56fe uuid\n    }\n  ) {\n    key\n    name\n    uuid\n    number\n    progress\n    parent\n    createTime\n    chartUUID\n    planStartTime: startTime\n    planEndTime: endTime\n    estimatedHours\n    totalManhour\n    remainingManhour\n    isVirtual\n    ppmTask {\n      uuid\n    }\n    milestone {\n      uuid\n    }\n    deliverable {\n      uuid\n      key\n      name\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u4fee\u6539\u9879\u76ee\u8ba1\u5212"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation UpdateGanttData {\n  updateActivity(name: "\u6d4b\u8bd5333", key: "activity-6hgEt3mj") {\n    key\n  }\n}\n')),(0,l.kt)("p",null,"\u5220\u9664\u9879\u76ee\u8ba1\u5212"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation DeleteGanttData {\n  deleteActivity(key: "activity-2Lb3ZPXW") {\n    key\n  }\n}\n')),(0,l.kt)("h2",{id:"\u901a\u8fc7\u65e5\u671f\u7b5b\u9009"},"\u901a\u8fc7\u65e5\u671f\u7b5b\u9009"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"range")," \u652f\u6301\u7684\u52a8\u6001\u64cd\u4f5c\u5c5e\u6027: ",(0,l.kt)("inlineCode",{parentName:"p"},"gt")," ",(0,l.kt)("inlineCode",{parentName:"p"},"gte")," ",(0,l.kt)("inlineCode",{parentName:"p"},"lt")," ",(0,l.kt)("inlineCode",{parentName:"p"},"lte")," ",(0,l.kt)("inlineCode",{parentName:"p"},"equal")," ",(0,l.kt)("inlineCode",{parentName:"p"},"not_equal"),", \u8fd9\u4e9b\u53c2\u6570\u4e5f\u586b\u5165\u7edd\u5bf9\u503c, \u4f8b\u5982 2018-09-09"),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"gt")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"gte")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"lt")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"lte")," \u53ef\u6709\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"\u4ecb\u4e8e")," \u7684\u64cd\u4f5c. \u5426\u5219\u53ea\u80fd\u540c\u65f6\u4f7f\u7528\u4e0a\u9762\u7684\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    filter: {\n      createTime_range: {\n        fromUnix: 1511798381\n        # toUnix: 1552898381\n        # gte: "today-10d"\n        # lte: "2019-03-20"\n        # equal: "today-99d"\n        # not_equal: "today-1d"\n      }\n      _1Ssfdsdf_range: {\n        #\u81ea\u5b9a\u4e49\u5c5e\u6027 "\u65e5\u671f" \u7b5b\u9009\n        equal: "today-99d"\n      }\n    }\n  ) {\n    uuid\n    _1Ssfdsdf\n  }\n}\n')),(0,l.kt)("h2",{id:"\u5355\u884c\u6587\u672c\u7b5b\u9009"},"\u5355\u884c\u6587\u672c\u7b5b\u9009"),(0,l.kt)("p",null,"\u5305\u62ec\u6807\u9898\u7b49\u7684\u5339\u914d\uff0c\u4e0d\u5339\u914d\uff0c\u7b49\u4e8e\uff0c\u4e0d\u7b49\u4e8e\u7684\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  tasks(\n    name_euqal: ["\u4f60\u597d"] # name\u5b8c\u5168\u7b49\u4e8e\n    name_notEqual: ["\u4f60\u597d"] # name \u5b8c\u5168\u4e0d\u7b49\u4e8e\n    name_match: ["\u4f60\u597d"] # name \u5305\u542b\u201c\u4f60\u597d\u201d\n    name_notMatch: ["\u4f60\u597d"] # name \u4e0d\u5305\u542b\u201c\u4f60\u597d\u201d\n  ) {\n    uuid\n  }\n}\n')),(0,l.kt)("h2",{id:"\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009"},"\u6570\u5b57\u5b57\u6bb5\u7b5b\u9009"),(0,l.kt)("p",null,"\u7b49\u4e8e\uff0c\u4e0d\u7b49\u4e8e\uff0c\u5927\u4e8e\uff0c\u5c0f\u4e8e\uff0c\u5927\u4e8e\u7b49\u4e8e\uff0c\u5c0f\u4e8e\u7b49\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  tasks(\n    relatedCount_between: {\n      equal: 1 # \u7b49\u4e8e\n    }\n  ) {\n    uuid\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  tasks(\n    relatedCount_between: {\n      not_equal: 1 # \u4e0d\u7b49\u4e8e\n    }\n  ) {\n    uuid\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  tasks(\n    relatedCount_between: {\n      gt: 1\n      lt: 10 # \u5927\u4e8e1 \u5c0f\u4e8e10\n    }\n  ) {\n    uuid\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  tasks(\n    relatedCount_between: {\n      gte: 1\n      lte: 10 # \u5927\u4e8e\u7b49\u4e8e1 \u5c0f\u4e8e\u7b49\u4e8e10\n    }\n  ) {\n    uuid\n  }\n}\n")))}o.isMDXComponent=!0}}]);