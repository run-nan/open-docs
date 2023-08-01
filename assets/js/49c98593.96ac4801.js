"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[92780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(34334),o=n(51048),i=n(33609),s=n(1943),u=n(72957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:b,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,i.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,s.U)(),[N,E]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=O[f];null!=e&&e!==N&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==N&&(x(t),E(r),null!=f&&w(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:P,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},55226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(34259),o=n(18679);const i={sidebar_position:3},s="\u6570\u636e\u83b7\u53d6",u={unversionedId:"abilities/frontend/store",id:"version-0.x/abilities/frontend/store",title:"\u6570\u636e\u83b7\u53d6",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u6570\u636e\u83b7\u53d6\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\u83b7\u53d6\u6807\u54c1\u6570\u636e\u3002",source:"@site/versioned_docs/version-0.x/abilities/frontend/store.md",sourceDirName:"abilities/frontend",slug:"/abilities/frontend/store",permalink:"/docs/0.x/abilities/frontend/store",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"abilities",previous:{title:"Global variable",permalink:"/docs/0.x/abilities/frontend/window"},next:{title:"\u4e8b\u4ef6\u901a\u4fe1",permalink:"/docs/0.x/abilities/frontend/event/"}},c={},p=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u83b7\u53d6"},"\u6570\u636e\u83b7\u53d6"),(0,a.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u6570\u636e\u83b7\u53d6\u5e93\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728\u63d2\u4ef6\u5185\u83b7\u53d6\u6807\u54c1\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,a.kt)("h3",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v3.6.25+")))),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"/web")," \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/store\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/store\n")))),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"))}m.isMDXComponent=!0}}]);