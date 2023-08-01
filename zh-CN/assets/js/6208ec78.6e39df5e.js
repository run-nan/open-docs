"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(34334),o=n(51048),p=n(33609),s=n(1943),i=n(72957);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:k,groupId:b,className:v}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,p.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==T&&!y.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:h}=(0,s.U)(),[N,Z]=(0,l.useState)(T),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=b){const e=x[b];null!=e&&e!==N&&y.some((t=>t.value===e))&&Z(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==N&&(w(t),Z(a),null!=b&&h(b,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var l;const t=I.indexOf(e.currentTarget)-1;n=null!=(l=I[t])?l:I[I.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:S,onClick:E},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},83995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),r=n(34259),o=n(18679);const p={},s="\u98ce\u683c\u6307\u5357",i={unversionedId:"dev/style-guide/index",id:"version-0.x/dev/style-guide/index",title:"\u98ce\u683c\u6307\u5357",description:"\u672c\u6587\u662f\u9488\u5bf9 ONES \u5f00\u653e\u5e73\u53f0\u4ee3\u7801\u7684\u5b98\u65b9\u98ce\u683c\u6307\u5357\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u89c4\u907f\u9519\u8bef\u548c\u53cd\u6a21\u5f0f\uff0c\u51cf\u5c11\u5bf9\u7ec6\u679d\u672b\u8282\u7684\u8fc7\u5ea6\u7ea0\u7ed3\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.x/dev/style-guide/index.mdx",sourceDirName:"dev/style-guide",slug:"/dev/style-guide/",permalink:"/open-docs/zh-CN/docs/0.x/dev/style-guide/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"guide",previous:{title:"\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5",permalink:"/open-docs/zh-CN/docs/0.x/dev/guide/ci-deploy"},next:{title:"\u63d2\u4ef6\u5f00\u53d1\u5165\u95e8",permalink:"/open-docs/zh-CN/docs/0.x/dev/sample-tutorial/videos/start"}},u={},c=[{value:"\u683c\u5f0f\u5316\u89c4\u5219",id:"\u683c\u5f0f\u5316\u89c4\u5219",level:2},{value:"\u6700\u5927\u884c\u957f",id:"\u6700\u5927\u884c\u957f",level:3},{value:"\u5f15\u53f7",id:"\u5f15\u53f7",level:3},{value:"\u5c5e\u6027\u5f15\u53f7",id:"\u5c5e\u6027\u5f15\u53f7",level:3},{value:"\u5206\u53f7",id:"\u5206\u53f7",level:3},{value:"\u4ee3\u7801\u8d28\u91cf\u89c4\u5219",id:"\u4ee3\u7801\u8d28\u91cf\u89c4\u5219",level:2},{value:"\u4f18\u5148\u7ea7 A \u7684\u89c4\u5219\uff1a\u5fc5\u8981\u7684",id:"\u4f18\u5148\u7ea7-a-\u7684\u89c4\u5219\u5fc5\u8981\u7684",level:3},{value:"\u4e00\u81f4\u7684\u6784\u9020\u51fd\u6570\u6cdb\u578b\u53c2\u6570",id:"\u4e00\u81f4\u7684\u6784\u9020\u51fd\u6570\u6cdb\u578b\u53c2\u6570",level:4},{value:"\u4e00\u81f4\u7684\u7c7b\u578b\u5b9a\u4e49",id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5b9a\u4e49",level:4},{value:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u51fa",id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u51fa",level:4},{value:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u5165",id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u5165",level:4},{value:"\u7a77\u4e3e React Hooks \u7684\u4f9d\u8d56",id:"\u7a77\u4e3e-react-hooks-\u7684\u4f9d\u8d56",level:4},{value:"\u7981\u6b62\u5e38\u91cf\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f",id:"\u7981\u6b62\u5e38\u91cf\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f",level:4},{value:"\u7981\u6b62\u91cd\u590d\u5bfc\u5165",id:"\u7981\u6b62\u91cd\u590d\u5bfc\u5165",level:4},{value:"\u7981\u6b62\u591a\u4f59\u7684\u7c7b\u578b\u6210\u5206",id:"\u7981\u6b62\u591a\u4f59\u7684\u7c7b\u578b\u6210\u5206",level:4},{value:"\u7981\u6b62\u4f7f\u7528\u4e0b\u5212\u7ebf",id:"\u7981\u6b62\u4f7f\u7528\u4e0b\u5212\u7ebf",level:4},{value:"\u7981\u6b62\u5728\u5b9a\u4e49\u4e4b\u524d\u4f7f\u7528\u53d8\u91cf",id:"\u7981\u6b62\u5728\u5b9a\u4e49\u4e4b\u524d\u4f7f\u7528\u53d8\u91cf",level:4},{value:"const \u4f18\u5148",id:"const-\u4f18\u5148",level:4},{value:"\u4f18\u5148\u7ea7 B \u7684\u89c4\u5219\uff1a\u63a8\u8350",id:"\u4f18\u5148\u7ea7-b-\u7684\u89c4\u5219\u63a8\u8350",level:3},{value:"\u7981\u6b62 console",id:"\u7981\u6b62-console",level:4},{value:"\u53ef\u9009\u94fe\u4f18\u5148",id:"\u53ef\u9009\u94fe\u4f18\u5148",level:4}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u98ce\u683c\u6307\u5357"},"\u98ce\u683c\u6307\u5357"),(0,l.kt)("p",null,"\u672c\u6587\u662f\u9488\u5bf9 ONES \u5f00\u653e\u5e73\u53f0\u4ee3\u7801\u7684\u5b98\u65b9\u98ce\u683c\u6307\u5357\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u89c4\u907f\u9519\u8bef\u548c\u53cd\u6a21\u5f0f\uff0c\u51cf\u5c11\u5bf9\u7ec6\u679d\u672b\u8282\u7684\u8fc7\u5ea6\u7ea0\u7ed3\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u89c4\u8303\u5305\u542b\u4e24\u7c7b\u89c4\u5219\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u8d28\u91cf\u89c4\u5219")),(0,l.kt)("p",null,"\u5b83\u4eec\u5927\u90fd\u6765\u6e90\u4e8e\u884c\u4e1a\u5185\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u4e0d\u8fc7\u6211\u4eec\u8ba4\u4e3a\u4efb\u4f55\u98ce\u683c\u6307\u5357\u90fd\u4e0d\u4f1a\u5b8c\u7f8e\u9002\u7528\u4e8e\u6240\u6709\u7684\u56e2\u961f\u6216\u9879\u76ee\uff0c\u6240\u4ee5\u57fa\u4e8e\u8fc7\u53bb\u7684\u7ecf\u9a8c\u3001\u5468\u56f4\u7684\u6280\u672f\u5806\u6808\u548c\u56e2\u961f\u4ef7\u503c\u89c2\uff0c\u8fdb\u884c\u4e86\u4e00\u4e9b\u8c03\u6574\u3002"),(0,l.kt)("h2",{id:"\u683c\u5f0f\u5316\u89c4\u5219"},"\u683c\u5f0f\u5316\u89c4\u5219"),(0,l.kt)("p",null,"\u6211\u4eec\u91c7\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," \u4f5c\u4e3a\u683c\u5f0f\u5316\u89c4\u5219\u7684\u9996\u9009\u53c2\u8003\uff0c\u56e0\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," \u53ef\u4ee5\u51cf\u5c11\u5bf9\u8fd9\u7c7b\u89c4\u5219\u7684\u5b9a\u5236\u9700\u6c42\u3002\u6211\u4eec\u5e76\u4e0d\u4ecb\u610f\u4f60\u662f\u5426\u4f7f\u7528\u5206\u53f7\u6216\u5c3e\u9017\u53f7\uff0c\u4e5f\u4e0d\u4ecb\u610f\u4f60\u5728 HTML \u5c5e\u6027\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\u8fd8\u662f\u53cc\u5f15\u53f7\uff0c\u56e0\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," \u5c06\u7edf\u4e00\u4ece\u5934\u5f00\u59cb\u683c\u5f0f\u5316\u4f60\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9075\u5faa\u5927\u90e8\u5206 ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"\u63a8\u8350\u89c4\u5219"),"\uff0c\u9664\u4e86\u4ee5\u4e0b\u8fd9\u4e9b\uff1a"),(0,l.kt)("h3",{id:"\u6700\u5927\u884c\u957f"},"\u6700\u5927\u884c\u957f"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u9605\u8bfb\uff0c\u6211\u4eec\u9ed8\u8ba4\u4f7f\u7528 100 \u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("h3",{id:"\u5f15\u53f7"},"\u5f15\u53f7"),(0,l.kt)("p",null,"\u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7\u3002"),(0,l.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"JSX \u4e2d\u7684\u5f15\u53f7\u5ffd\u7565\u8be5\u9009\u9879 \u2013 \u8bf7\u67e5\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html#jsx-quotes"},"jsx-single-quote"),".")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'// prettier-ignore\nlet name = "ones"\n'))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let name = 'ones'\n")))),(0,l.kt)("h3",{id:"\u5c5e\u6027\u5f15\u53f7"},"\u5c5e\u6027\u5f15\u53f7"),(0,l.kt)("p",null,"\u5982\u679c\u5bf9\u8c61\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5c5e\u6027\u9700\u8981\u5f15\u53f7\uff0c\u5219\u4e3a\u6240\u6709\u5c5e\u6027\u52a0\u4e0a\u5f15\u53f7\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  'user-name': 'ones',\n  home: 'ones.com'\n}\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  'user-name': 'ones',\n  'home': 'ones.com'\n}\n// \u6216\u8005\n{\n  user: 'ones',\n  home: 'ones.com'\n}\n")))),(0,l.kt)("h3",{id:"\u5206\u53f7"},"\u5206\u53f7"),(0,l.kt)("p",null,"\u4ec5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/rationale.html#semicolons"},"\u53ef\u80fd\u5bfc\u81f4 ASI \u5931\u8d25")," \u7684\u884c\u9996\u6dfb\u52a0\u5206\u53f7\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// prettier-ignore\nlet shouldAddLines = true;\nif (shouldAddLines) {\n  // prettier-ignore\n  [-1, 1].forEach((delta) => addLine(delta * 20));\n}\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let shouldAddLines = true\nif (shouldAddLines) {\n  ;[-1, 1].forEach((delta) => addLine(delta * 20))\n}\n")))),(0,l.kt)("h2",{id:"\u4ee3\u7801\u8d28\u91cf\u89c4\u5219"},"\u4ee3\u7801\u8d28\u91cf\u89c4\u5219"),(0,l.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u4f7f\u7528 TypeScript \u7f16\u5199\u6240\u6709\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," \u6765\u4fdd\u8bc1\u4ee3\u7801\u8d28\u91cf\u3002",(0,l.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," \u4f7f\u5f97 ",(0,l.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," \u53ef\u4ee5\u5728 TypeScript \u4ee3\u7801\u4e0a\u8fd0\u884c\u3002\u5b83\u7ed3\u5408\u4e86\u8fd9\u4e24\u79cd\u5de5\u5177\u7684\u4f18\u70b9\uff0c\u5e2e\u52a9\u4f60\u5c3d\u53ef\u80fd\u5730\u7f16\u5199\u6700\u597d\u7684 JavaScript \u6216 TypeScript \u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u628a\u8fd9\u7c7b\u89c4\u5219\u5206\u6210\u4e86\u4e24\u4e2a\u4f18\u5148\u7ea7\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7 A\uff1a\u5fc5\u8981\u7684\uff08\u89c4\u907f\u9519\u8bef\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7 B\uff1a\u63a8\u8350\u7684")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u57fa\u672c\u9075\u5faa ",(0,l.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/rules/"},"\u63a8\u8350\u89c4\u5219"),"\uff0c\u9664\u4e86\u4ee5\u4e0b\u8fd9\u4e9b\uff1a"),(0,l.kt)("h3",{id:"\u4f18\u5148\u7ea7-a-\u7684\u89c4\u5219\u5fc5\u8981\u7684"},"\u4f18\u5148\u7ea7 A \u7684\u89c4\u5219\uff1a\u5fc5\u8981\u7684"),(0,l.kt)("h4",{id:"\u4e00\u81f4\u7684\u6784\u9020\u51fd\u6570\u6cdb\u578b\u53c2\u6570"},"\u4e00\u81f4\u7684\u6784\u9020\u51fd\u6570\u6cdb\u578b\u53c2\u6570"),(0,l.kt)("p",null,"\u5f3a\u5236\u5728\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u7c7b\u578b\u6279\u6ce8\u6216\u6784\u9020\u51fd\u6570\u540d\u79f0\u4e0a\u6307\u5b9a\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const map: Map<string, number> = new Map()\nconst set: Set<string> = new Set()\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const map = new Map<string, number>()\nconst map: Map<string, number> = new MyMap()\nconst set = new Set<string>()\nconst set: Set<string> = new Set<string>()\n")))),(0,l.kt)("h4",{id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5b9a\u4e49"},"\u4e00\u81f4\u7684\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("p",null,"\u5f3a\u5236\u7c7b\u578b\u5b9a\u4e49\u59cb\u7ec8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"interface")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type T = { x: number }\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type T = string\ntype Foo = string | {}\n\ninterface T {\n  x: number\n}\n")))),(0,l.kt)("h4",{id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u51fa"},"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u51fa"),(0,l.kt)("p",null,"\u5f3a\u5236\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u51fa"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ButtonProps {\n  onClick: () => void\n}\nclass Button implements ButtonProps {\n  onClick() {\n    console.log('button!')\n  }\n}\nexport { Button, ButtonProps } from 'some-library'\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ButtonProps {\n  onClick: () => void\n}\nclass Button implements ButtonProps {\n  onClick() {\n    console.log('button!')\n  }\n}\nexport { Button, type ButtonProps } from 'some-library'\n")))),(0,l.kt)("h4",{id:"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u5165"},"\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u5165"),(0,l.kt)("p",null,"\u5f3a\u5236\u4e00\u81f4\u7684\u7c7b\u578b\u5bfc\u5165"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Foo } from 'Foo'\nimport Bar from 'Bar'\ntype T = Foo\nconst x: Bar = 1\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { type Foo } from 'Foo'\nimport type Bar from 'Bar'\ntype T = Foo\nconst x: Bar = 1\n")))),(0,l.kt)("h4",{id:"\u7a77\u4e3e-react-hooks-\u7684\u4f9d\u8d56"},"\u7a77\u4e3e React Hooks \u7684\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5b83\u4f1a\u5e2e\u52a9\u4f60\u627e\u51fa\u65e0\u6cd5\u4e00\u81f4\u5730\u5904\u7406\u66f4\u65b0\u7684\u7ec4\u4ef6\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example({ someProp }) {\n  function doSomething() {\n    console.log(someProp)\n  }\n  useEffect(() => {\n    doSomething()\n  }, [])\n}\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example({ someProp }) {\n  useEffect(() => {\n    function doSomething() {\n      console.log(someProp)\n    }\n    doSomething()\n  }, [someProp])\n}\n")))),(0,l.kt)("h4",{id:"\u7981\u6b62\u5e38\u91cf\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f"},"\u7981\u6b62\u5e38\u91cf\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u4e0d\u5141\u8bb8\u5b58\u5728\u64cd\u4f5c\u4e0d\u5f71\u54cd\u503c\u7684\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const value1 = +x == null\nconst value3 = !foo == null\nconst value4 = new Boolean(foo) === true\nconst arrIsEmpty = someArr === []\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const value1 = x == null\nconst value3 = !(foo == null)\nconst value4 = Boolean(foo) === true\nconst arrIsEmpty = someArr.length === 0\n")))),(0,l.kt)("h4",{id:"\u7981\u6b62\u91cd\u590d\u5bfc\u5165"},"\u7981\u6b62\u91cd\u590d\u5bfc\u5165"),(0,l.kt)("p",null,"\u4e0d\u5141\u8bb8\u91cd\u590d\u7684\u6a21\u5757\u5bfc\u5165\u3002"),(0,l.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u6a21\u5757\u4f7f\u7528\u4e00\u6761\u5bfc\u5165\u8bed\u53e5\u5c06\u4f7f\u4ee3\u7801\u66f4\u6e05\u6670\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u5728\u4e00\u884c\u4e0a\u770b\u5230\u4ece\u8be5\u6a21\u5757\u5bfc\u5165\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { merge } from 'module'\nimport something from 'another-module'\nimport { find } from 'module'\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { merge, find } from 'module'\nimport something from 'another-module'\n")))),(0,l.kt)("h4",{id:"\u7981\u6b62\u591a\u4f59\u7684\u7c7b\u578b\u6210\u5206"},"\u7981\u6b62\u591a\u4f59\u7684\u7c7b\u578b\u6210\u5206"),(0,l.kt)("p",null,"\u4e0d\u5141\u8bb8\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u6216\u91cd\u5199\u7c7b\u578b\u4fe1\u606f\u7684\u8054\u5408\u548c\u4ea4\u96c6\u7c7b\u578b\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type UnionAny = any | 'foo'\ntype UnionUnknown = unknown | 'foo'\ntype UnionNever = never | 'foo'\n\ntype UnionNumberLiteral = number | 1\ntype UnionStringLiteral = string | 'foo'\n\ntype IntersectionAny = any & 'foo'\ntype IntersectionUnknown = string & unknown\n\ntype IntersectionBooleanLiteral = boolean & false\ntype IntersectionStringLiteral = string & 'foo'\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"type UnionAny = any\ntype UnionUnknown = unknown\ntype UnionNever = never\n\ntype UnionNumberLiteral = number\ntype UnionStringLiteral = string\n\ntype IntersectionAny = any\ntype IntersectionUnknown = string\n\ntype IntersectionBooleanLiteral = false\ntype IntersectionStringLiteral = 'foo'\n\ntype ReturnUnionNever = () => string | never\n")))),(0,l.kt)("h4",{id:"\u7981\u6b62\u4f7f\u7528\u4e0b\u5212\u7ebf"},"\u7981\u6b62\u4f7f\u7528\u4e0b\u5212\u7ebf"),(0,l.kt)("p",null,"\u4e0d\u5141\u8bb8\u5728\u6807\u8bc6\u7b26\u4e2d\u4f7f\u7528\u4e0b\u5212\u7ebf\u3002"),(0,l.kt)("p",null,"\u52a0\u4e0b\u5212\u7ebf\u7684\u76ee\u7684\u662f\u8981\u6e05\u695a\u5730\u8868\u660e\uff0c\u8be5\u65b9\u6cd5\u5728\u67d0\u4e9b\u65b9\u9762\u662f\u7279\u6b8a\u7684\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"var foo_\nvar __proto__ = {}\nfoo._bar()\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"obj.__proto__ = {}\nvar file = __filename\nfunction foo(_bar) {}\n")))),(0,l.kt)("h4",{id:"\u7981\u6b62\u5728\u5b9a\u4e49\u4e4b\u524d\u4f7f\u7528\u53d8\u91cf"},"\u7981\u6b62\u5728\u5b9a\u4e49\u4e4b\u524d\u4f7f\u7528\u53d8\u91cf"),(0,l.kt)("p",null,"\u5728\u5b9a\u4e49\u53d8\u91cf\u4e4b\u524d\u4e0d\u5141\u8bb8\u4f7f\u7528\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u5728 ES6 \u4e2d\uff0c\u5757\u7ea7\u4f5c\u7528\u57df\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),"\uff09\u5f15\u5165\u4e86\u4e00\u4e2a\u201c\u6682\u65f6\u6027\u6b7b\u533a\u201d\uff0c\u5728\u8fd9\u4e2a\u6b7b\u533a\u4e2d\uff0c\u4efb\u4f55\u8bd5\u56fe\u5728\u53d8\u91cf\u58f0\u660e\u4e4b\u524d\u8bbf\u95ee\u53d8\u91cf\u7684\u884c\u4e3a\u90fd\u4f1a\u629b\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"ReferenceError"),"\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"alert(a)\nvar a = 10\n\nf()\nfunction f() {}\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"var a\na = 10\nalert(a)\n\nfunction f() {}\nf(1)\n")))),(0,l.kt)("h4",{id:"const-\u4f18\u5148"},"const \u4f18\u5148"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u58f0\u660e\u540e\u6c38\u8fdc\u4e0d\u4f1a\u91cd\u65b0\u8d4b\u503c\u7684\u53d8\u91cf\uff0c\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," \u58f0\u660e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"const")," \u58f0\u660e\u544a\u8bc9\u8bfb\u8005\u201c\u8fd9\u4e2a\u53d8\u91cf\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u91cd\u65b0\u8d4b\u503c\u201d\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u8ba4\u77e5\u8d1f\u62c5\uff0c\u63d0\u9ad8\u4e86\u53ef\u7ef4\u62a4\u6027\u3002"),(0,l.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u89e3\u6784\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u90fd\u5e94\u8be5\u4e3a\u5e38\u91cf\uff0c\u6b64\u89c4\u5219\u624d\u4f1a\u8fdb\u884c\u8b66\u544a\uff0c\u5426\u5219\u5c06\u5ffd\u7565\u5b83\u4eec\u3002")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let { a, b } = obj\nexport { a, b }\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let { a, b } = obj\na = a + 1\n// \u6216\u8005\nconst { a, b } = obj\nexport { a, b }\n")))),(0,l.kt)("h3",{id:"\u4f18\u5148\u7ea7-b-\u7684\u89c4\u5219\u63a8\u8350"},"\u4f18\u5148\u7ea7 B \u7684\u89c4\u5219\uff1a\u63a8\u8350"),(0,l.kt)("h4",{id:"\u7981\u6b62-console"},"\u7981\u6b62 console"),(0,l.kt)("p",null,"\u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"console"),"\uff0c\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"console.warn")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"console.error"),"\u3002"),(0,l.kt)("p",null,"\u6b64\u7c7b\u4fe1\u606f\u88ab\u8ba4\u4e3a\u662f\u51fa\u4e8e\u8c03\u8bd5\u76ee\u7684\uff0c\u56e0\u6b64\u4e0d\u9002\u5408\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"console")," \u7684\u8c03\u7528\u5728\u63a8\u9001\u5230\u751f\u4ea7\u73af\u5883\u4e4b\u524d\u5e94\u8be5\u88ab\u5254\u9664\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"console.log('log')\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"console.error('error')\n")))),(0,l.kt)("h4",{id:"\u53ef\u9009\u94fe\u4f18\u5148"},"\u53ef\u9009\u94fe\u4f18\u5148"),(0,l.kt)("p",null,"\u5f3a\u5236\u4f7f\u7528\u7b80\u660e\u7684\u53ef\u9009\u94fe\u8868\u8fbe\u5f0f\uff0c\u800c\u4e0d\u662f\u94fe\u5f0f\u7684\u903b\u8f91\u4e0e\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"incorrect",label:"\u274c \u9519\u8bef\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method()\nfoo &&\n  foo.a != null &&\n  foo.a.b !== null &&\n  foo.a.b.c != undefined &&\n  foo.a.b.c.d !== undefined &&\n  foo.a.b.c.d.e\n"))),(0,l.kt)(o.Z,{value:"correct",label:"\u2705 \u6b63\u786e\u7684",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"foo?.a?.b?.method?.()\nfoo?.a?.b?.c?.d?.e\n")))))}d.isMDXComponent=!0}}]);