"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[30964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(34334),i=n(51048),s=n(33609),p=n(1943),o=n(72957);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:k,groupId:g,className:v}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:y}=(0,p.U)(),[O,E]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=g){const e=P[g];null!=e&&e!==O&&b.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==O&&(x(t),E(a),null!=g&&y(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>C.push(e),onKeyDown:T,onClick:S},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(N.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},55367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const s={},p="\u4e8b\u4ef6\u901a\u4fe1",o={unversionedId:"abilities/frontend/event/index",id:"version-0.x/abilities/frontend/event/index",title:"\u4e8b\u4ef6\u901a\u4fe1",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u4e8b\u4ef6\u901a\u4fe1\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\uff08\u8de8\u6a21\u5757\uff09\u901a\u4fe1\uff0c\u6216\u8005\u901a\u8fc7\u4e8b\u4ef6\u89e6\u53d1 ONES \u7684\u67d0\u4e9b\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.x/abilities/frontend/event/index.md",sourceDirName:"abilities/frontend/event",slug:"/abilities/frontend/event/",permalink:"/open-docs/docs/0.x/abilities/frontend/event/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"\u6570\u636e\u83b7\u53d6",permalink:"/open-docs/docs/0.x/abilities/frontend/store"},next:{title:"Event List",permalink:"/open-docs/docs/0.x/abilities/frontend/event/list"}},u={},c=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"OPDispatch",id:"opdispatch",level:3},{value:"Params",id:"params",level:4},{value:"OPPluginListener",id:"oppluginlistener",level:3},{value:"Params",id:"params-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Types",id:"types",level:4},{value:"Examples",id:"examples",level:4},{value:"OPPluginDispatch",id:"opplugindispatch",level:3},{value:"Params",id:"params-2",level:4},{value:"Returns<code>v0.6.1+</code>",id:"returnsv061",level:4},{value:"Examples",id:"examples-1",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8b\u4ef6\u901a\u4fe1"},"\u4e8b\u4ef6\u901a\u4fe1"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u4e8b\u4ef6\u901a\u4fe1\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\uff08\u8de8\u6a21\u5757\uff09\u901a\u4fe1\uff0c\u6216\u8005\u901a\u8fc7\u4e8b\u4ef6\u89e6\u53d1 ONES \u7684\u67d0\u4e9b\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("h3",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v3.7.1+")))),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/event\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/event\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPDispatch } from '@ones-op/event'\n\nOPDispatch('invoke:ones:global:progressManager')\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"opdispatch"},"OPDispatch"),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64\u65b9\u6cd5\u53ef\u4ee5\u89e6\u53d1\u7cfb\u7edf\u5185\u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002"),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u7c7b\u578b\u5b57\u7b26\u4e32\uff0c\u5b8c\u6574\u7684\u4e8b\u4ef6\u5217\u8868\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"td",href:"/open-docs/docs/0.x/abilities/frontend/event/list"},"\u4e8b\u4ef6\u5217\u8868")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"EventEnum")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"oppluginlistener"},"OPPluginListener"),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64\u65b9\u6cd5\u53ef\u4ee5\u5728\u63d2\u4ef6\u5185\u90e8\u6dfb\u52a0\u81ea\u5b9a\u4e49\u76d1\u542c\u5668\uff0c\u65e0\u6cd5\u8de8\u63d2\u4ef6\u4f7f\u7528\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\uff0c\u8bf7\u4fdd\u8bc1\u8c03\u7528\u53d6\u6d88\u76d1\u542c\u51fd\u6570\uff0c\u4ee5\u907f\u514d\u5360\u7528\u5185\u5b58\uff0c\u4ee5\u53ca\u4ea7\u751f\u4e00\u4e9b\u610f\u6599\u4e4b\u5916\u7684 BUG\u3002")),(0,r.kt)("h4",{id:"params-1"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u7c7b\u578b\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u76d1\u542c\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"(event) => OPListenerProcessResult\uff5cvoid")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"\u79fb\u9664\u4e8b\u4ef6\u76d1\u542c\u7684\u51fd\u6570"),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(() => {\n  const cancelFn = OPPluginListener('onChange', ({ value }) => {\n    console.log(`new value: ${value}`)\n  })\n  return () => cancelFn()\n}, [])\n")),(0,r.kt)("h3",{id:"opplugindispatch"},"OPPluginDispatch"),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64\u65b9\u6cd5\u53ef\u4ee5\u5728\u63d2\u4ef6\u5185\u90e8\u6d3e\u53d1\u4e8b\u4ef6\uff0c\u65e0\u6cd5\u8de8\u63d2\u4ef6\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"params-2"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u7c7b\u578b\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"params"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6\u53c2\u6570\u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h4",{id:"returnsv061"},"Returns",(0,r.kt)("inlineCode",{parentName:"h4"},"v0.6.1+")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5bf9\u8c61\uff0c\u5f53\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u5904\u7406\u51fd\u6570\u5904\u7406\u5b8c\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve")," \uff0c\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u8fd4\u56de\u7684\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u6570\u7ec4"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u5904\u7406\u51fd\u6570\u8fd4\u56de\u6570\u636e\u683c\u5f0f",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum OPListenerProcessResultState {\n  SUCCESS = 'SUCCESS',\n  FAILED = 'FAILED',\n}\n\ninterface OPListenerProcessResult<T> {\n  state: OPListenerProcessResultState\n  data: T\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u5904\u7406\u51fd\u6570\u91cc\u505a\u4efb\u4f55\u8fd4\u56de\uff0c\u6216\u8005\u8fd4\u56de\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \uff0c\u6211\u4eec\u5c06\u9ed8\u8ba4\u8fd4\u56de\u4ee5\u4e0b\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  state: MFListenerProcessResultState.SUCCESS,\n  data: undefined,\n}\n")),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," \u5904\u7406\u51fd\u6570\u8fd4\u56de\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginListener"',title:'"OPPluginListener"'},"useEffect(() => {\n  const cancelFn = OPPluginListener('onChange', ({ value }) => {\n    return {\n      state: OPListenerProcessResultState.SUCCESS,\n      data: value + 1,\n    }\n  })\n  return () => cancelFn()\n}, [])\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OPPluginDispatch")," \u6253\u5370\u5176\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="OPPluginDispatch"',title:'"OPPluginDispatch"'},"OPPluginDispatch('onChange', { value: 0 }).then((result) => {\n  console.log(`listener processed value: ${result[0].data}`)\n})\n")))}m.isMDXComponent=!0}}]);