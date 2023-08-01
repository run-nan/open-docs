"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[94983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(34334),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:i,block:u,defaultValue:m,values:g,groupId:k,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:O}=(0,s.U)(),[x,T]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==x&&(E(t),T(a),null!=k&&O(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:w},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},37037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const o={},s="Trigger \u4e8b\u4ef6",p={unversionedId:"abilities/frontend/trigger/index",id:"version-0.x/abilities/frontend/trigger/index",title:"Trigger \u4e8b\u4ef6",description:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957 Trigger \u4e8b\u4ef6\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728 ONES \u7684\u67d0\u4e9b\u64cd\u4f5c\uff08Action\uff09\u89e6\u53d1\u65f6\uff0c\u5bf9\u64cd\u4f5c\u7684\u6570\u636e\u8fdb\u884c\u4fee\u6539\u6216\u8005\u53d6\u6d88\u64cd\u4f5c\u3002",source:"@site/versioned_docs/version-0.x/abilities/frontend/trigger/index.md",sourceDirName:"abilities/frontend/trigger",slug:"/abilities/frontend/trigger/",permalink:"/open-docs/docs/0.x/abilities/frontend/trigger/",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Event List",permalink:"/open-docs/docs/0.x/abilities/frontend/event/list"},next:{title:"\u89e6\u53d1\u5217\u8868",permalink:"/open-docs/docs/0.x/abilities/frontend/trigger/list"}},c={},d=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6dfb\u52a0\u914d\u7f6e",id:"\u6dfb\u52a0\u914d\u7f6e",level:3},{value:"API",id:"api",level:2},{value:"useAction",id:"useaction",level:3},{value:"Params",id:"params",level:4},{value:"Types",id:"types",level:4},{value:"Examples",id:"examples",level:4},{value:"FAQ",id:"faq",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trigger-\u4e8b\u4ef6"},"Trigger \u4e8b\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957 Trigger \u4e8b\u4ef6\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5e2e\u4f60\u5728 ONES \u7684\u67d0\u4e9b\u64cd\u4f5c\uff08Action\uff09\u89e6\u53d1\u65f6\uff0c\u5bf9\u64cd\u4f5c\u7684\u6570\u636e\u8fdb\u884c\u4fee\u6539\u6216\u8005\u53d6\u6d88\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("h3",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v3.10.20+")))),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," \u76ee\u5f55\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64\u5305\uff1a"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/store\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/store\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAction } from '@ones-op/store'\n\nuseAction('action:pre:ones:task:fields:update', ({ sessionID, next, data, cancel }) => {\n  console.log('task fields update data: ', data)\n  next(data)\n})\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u914d\u7f6e"},"\u6dfb\u52a0\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"modules:\n  - id: ones-global-trigger-QIOs\n    title: trigger\n    moduleType: ones:global:trigger\n    entry: modules/ones-global-trigger-QIOs/index.html\n    preload: true # \u5fc5\u987b\u9879\n    manual: true # \u5fc5\u987b\u9879\n    actions: # \u5fc5\u987b\u9879\n      - action:pre:ones:task:fields:update\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"actions")," \u91cc\u58f0\u660e\u7684\u7c7b\u578b\uff0c\u5fc5\u987b\u4e0e\u4ee3\u7801\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"useAction")," \u7528\u5230\u7684\u7c7b\u578b\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u5c06\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u65e0\u6cd5\u8c03\u8d77\u63d2\u4ef6\uff0c\u6216\u8005\u7cfb\u7edf\u64cd\u4f5c\uff08Action\uff09\u6c38\u4e45\u9677\u5165 pending \u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"useaction"},"useAction"),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64 hook \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u5185\u7684\u4e00\u4e9b\u64cd\u4f5c\uff08Action\uff09\u8fdb\u884c\u62e6\u622a\u5904\u7406\u3002"),(0,r.kt)("h4",{id:"params"},"Params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trigger \u7c7b\u578b\u5b57\u7b26\u4e32\uff0c\u5b8c\u6574\u7684\u89e6\u53d1\u5217\u8868\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"td",href:"/open-docs/docs/0.x/abilities/frontend/trigger/list"},"\u89e6\u53d1\u5217\u8868")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ActionEnum")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handler"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u64cd\u4f5c\u62e6\u622a\u5904\u7406\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"(payload: ActionPayload) => void")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ActionPayload<T = unknown> {\n  /** \u4f1a\u8bdd id\uff0c\u540c\u4e00\u7c7b\u7684 action\uff0c\u6bcf\u4e00\u6b21\u64cd\u4f5c\uff0cpre \u4e0e post \u53d6\u5f97\u7684\u503c\u76f8\u540c */\n  sessionID: string\n  /** \u64cd\u4f5c\u7684\u6570\u636e */\n  data: T\n  /** \u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u64cd\u4f5c\uff0c\u5e76\u9500\u6bc1\u63d2\u4ef6\uff01 */\n  next: (data: T) => void\n  /** \u53d6\u6d88\u5f53\u524d\u64cd\u4f5c\uff0c\u5e76\u9500\u6bc1\u63d2\u4ef6\uff01 */\n  cancel: (message?: string) => void\n}\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," \u65b9\u6cd5\u540e\uff0c\u63d2\u4ef6\u5c06\u4f1a\u88ab\u9500\u6bc1\uff0c\u6b64\u65f6\u4f60\u5c06\u65e0\u6cd5\u8fdb\u884c\u4e00\u4e9b DOM \u64cd\u4f5c\uff0c\u5982 toast \u63d0\u793a\u7b49\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u6709\u9875\u9762\u63d0\u793a\u9700\u6c42\uff0c\u4f60\u5e94\u8be5\u5728\u63d0\u793a\u5b8c\u6210\u540e\uff0c\u518d\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," \u65b9\u6cd5\u3002")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function TriggerPlugin() {\n  const [visible, setVisible] = useState(false)\n  const [sessionID, setSessionID] = useState('')\n  const [payload, setPayload] = useState<Record<string, any>>()\n  const onOkRef = useRef<Function>()\n  const onCancelRef = useRef<Function>()\n\n  useAction('action:pre:ones:task:fields:update', ({ sessionID, next, data, cancel }) => {\n    console.log('task fields update data: ', data)\n    setSessionID(sessionID)\n    setPayload(data)\n    onOkRef.current = next\n    onCancelRef.current = cancel\n    setVisible(true)\n  })\n\n  const handleOk = useCallback(() => {\n    setVisible(false)\n    onOkRef.current?.(payload)\n  }, [payload])\n\n  const handleCancel = useCallback(() => {\n    setVisible(false)\n    toast.warning('cancel')\n    setTimeout(() => {\n      onCancelRef.current?.()\n    }, 1100)\n  }, [])\n\n  return (\n    <Modal visible={visible} title=\"Confirm Data\" onOk={handleOk} onCancel={handleCancel}>\n      <p>sessionID: {sessionID}</p>\n      <p>data: </p>\n      <p>{JSON.stringify(payload?.data)}</p>\n    </Modal>\n  )\n}\n")),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",null,"\u591a\u4e2a module \u4f7f\u7528\u4e86\u540c\u4e00\u4e2a action \uff0c\u5f00\u653e\u5e73\u53f0\u662f\u5982\u4f55\u5904\u7406\u51b2\u7a81\uff1f"),(0,r.kt)("p",null,"\u5f00\u653e\u5e73\u53f0\u5c06\u4f1a\u6309\u63d2\u4ef6\u7ba1\u7406\u9875\u5217\u8868\u987a\u5e8f\u4e32\u884c\u6fc0\u6d3b ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," \uff0c\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," \u90fd\u5c06\u62ff\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u7684\u539f\u59cb\u6570\u636e\uff0c\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," \u5904\u7406\u5b8c\u540e\uff0c\u4f7f\u7528 lodash \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://lodash.com/docs/#merge"},(0,r.kt)("inlineCode",{parentName:"a"},"merge"))," \u51fd\u6570\u5408\u5e76\u5904\u7406\u7ed3\u679c\u5e76\u8fd4\u56de\u7ed9 ONES \u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u4e0d\u5efa\u8bae\u4f60\u591a\u4e2a\u6a21\u5757\u6216\u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u540c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\uff0c\u56e0\u4e3a\u8fd9\u5c06\u4f1a\u53d7\u9650\u4e8e\u4e0a\u8ff0\u903b\u8f91\uff0c\u65e0\u6cd5\u5728\u67d0\u4e2a\u63d2\u4ef6\u5185\u5220\u9664\u7279\u5b9a\u6570\u636e\uff0c\u4fee\u6539\u6570\u636e\u5c5e\u6027\u503c\u4e5f\u5c06\u4f1a\u53d7\u9650\u4e8e\u63d2\u4ef6\u987a\u5e8f\uff08\u6570\u636e\u5c5e\u6027\u8def\u5f84\u76f8\u540c\u65f6\uff0c\u540e\u8005\u5c06\u4f1a\u8986\u76d6\u524d\u8005\uff09\u3002"))}m.isMDXComponent=!0}}]);