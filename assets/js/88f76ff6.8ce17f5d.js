(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[77229],{86408:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/member-en.7477253.1024.png 1024w,"+n.p+"assets/ideal-img/member-en.e482af9.1914.png 1914w",images:[{path:n.p+"assets/ideal-img/member-en.7477253.1024.png",width:1024,height:501},{path:n.p+"assets/ideal-img/member-en.e482af9.1914.png",width:1914,height:937}],src:n.p+"assets/ideal-img/member-en.7477253.1024.png",toString:function(){return n.p+"assets/ideal-img/member-en.7477253.1024.png"},placeholder:void 0,width:1024,height:501},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVQImW2LQQtAQBSE92c5UA6UqwP58xRhuTgq+97b0dsiZGqavmbGpEWDtuvhvYdzDkQU8nAEZg5ptx0myWsM4wKVjtUiElhT+SCBSbIKs11fxXV6ykRpeQ+/5WsYZxXGyQYgYrDIr0+ETrn+BYXj/AAAAABJRU5ErkJggg=="}},51176:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/progress-manager-en.730b9b8.1024.png 1024w,"+n.p+"assets/ideal-img/progress-manager-en.6360633.1909.png 1909w",images:[{path:n.p+"assets/ideal-img/progress-manager-en.730b9b8.1024.png",width:1024,height:503},{path:n.p+"assets/ideal-img/progress-manager-en.6360633.1909.png",width:1909,height:937}],src:n.p+"assets/ideal-img/progress-manager-en.730b9b8.1024.png",toString:function(){return n.p+"assets/ideal-img/progress-manager-en.730b9b8.1024.png"},placeholder:void 0,width:1024,height:503},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVQImWNw8oz6//Dx0/8g8OfPn////v1DwX/+/vv//cfP/wx2rmH/X7x8DVYIksAFGOzdwv+/ePEKzPn79y+GiTDMYGTl8//Z85dwhThNTMup/P/23Xu41bisBwD5OLs82ZayGQAAAABJRU5ErkJggg=="}},18679:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:n},t)}},34259:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),i=n(67294),r=n(34334),s=n(51048),o=n(33609),l=n(1943),p=n(72957);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:u,values:g,groupId:h,className:v}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const A=null===u?u:null!=(t=null!=u?u:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==A&&!k.some((e=>e.value===A)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[x,E]=(0,i.useState)(A),y=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=y.indexOf(t),a=k[n].value;a!==x&&(S(t),E(a),null!=h&&w(h,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{var a;const t=y.indexOf(e.currentTarget)+1;n=null!=(a=y[t])?a:y[0];break}case"ArrowLeft":{var i;const t=y.indexOf(e.currentTarget)-1;n=null!=(i=y[t])?i:y[y.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>y.push(e),onKeyDown:T,onClick:O},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,s.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},47164:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(34259),s=n(18679),o=n(15944);const l={sidebar_position:7,description:"Flexible communication mechanism to facilitate communication between plugin and ONES."},p="Event communication",m={unversionedId:"guide/abilities/event-communication",id:"guide/abilities/event-communication",title:"Event communication",description:"Flexible communication mechanism to facilitate communication between plugin and ONES.",source:"@site/docs/guide/abilities/event-communication.mdx",sourceDirName:"guide/abilities",slug:"/guide/abilities/event-communication",permalink:"/open-docs/docs/next/guide/abilities/event-communication",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Flexible communication mechanism to facilitate communication between plugin and ONES."},sidebar:"guide",previous:{title:"Data acquisition",permalink:"/open-docs/docs/next/guide/abilities/data-acquisition"},next:{title:"Lifecycle",permalink:"/open-docs/docs/next/guide/lifecycle"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2: Custom listener",id:"step-2-custom-listener",level:3},{value:"Step 3: Dispatch event",id:"step-3-dispatch-event",level:3},{value:"Examples",id:"examples",level:2},{value:"Example ONE: Activate the Global Progress Manager",id:"example-one-activate-the-global-progress-manager",level:3},{value:"Step 1: Add a slot",id:"step-1-add-a-slot",level:4},{value:"Step 2: Dispatch event",id:"step-2-dispatch-event",level:4},{value:"Step 3: Triggered on ONES",id:"step-3-triggered-on-ones",level:4},{value:"Example Two: Trigger member list refresh",id:"example-two-trigger-member-list-refresh",level:3},{value:"Step 1: Add a slot",id:"step-1-add-a-slot-1",level:4},{value:"Step 2: Dispatch event",id:"step-2-dispatch-event-1",level:4},{value:"Step 3: Triggered on ONES",id:"step-3-triggered-on-ones-1",level:4}],u={toc:d};function g(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-communication"},"Event communication"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v3.7.1+")))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Event system is one of the main ways of communication between components. Custom components can trigger arbitrary events, and pages that reference components can listen to these events. We provide a set of event communication libraries that can help you communicate across modules within the same plug-in (all communication modules need to be mounted). You can also trigger certain events in the ONES through events."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/web")," directory and install the package with the following command:"),(0,i.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ones-op/event\n"))),(0,i.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ones-op/event\n")))),(0,i.kt)("h3",{id:"step-2-custom-listener"},"Step 2: Custom listener"),(0,i.kt)("p",null,"Add a custom listener. When the specified event type is ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),", the listener callback will be executed. ",(0,i.kt)("strong",{parentName:"p"},"cannot be used across plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPPluginListener } from '@ones-op/event'\n\nuseEffect(() => {\n  const cancelFn = OPPluginListener('onChange', ({ value }) => {\n    return {\n      state: OPListenerProcessResultState.SUCCESS,\n      data: value + 1,\n    }\n  })\n  return () => cancelFn()\n}, [])\n")),(0,i.kt)("admonition",{title:"notice",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When the component is destroyed, be sure to call the unlistening function to avoid taking up memory and generating some unexpected BUG.")),(0,i.kt)("h3",{id:"step-3-dispatch-event"},"Step 3: Dispatch event"),(0,i.kt)("p",null,"Dispatch an event of the specified type and return the Promise object returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"OPPluginListener")," processing function. ",(0,i.kt)("strong",{parentName:"p"},"cannot be used across plugin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OPPluginDispatch } from '@ones-op/event'\n\nOPPluginDispatch('onChange', { value: 0 }).then((result) => {\n  console.log(`listener processed value: ${result[0].data}`)\n})\n")),(0,i.kt)("p",null,"For the definition of specific parameters, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"/open-docs/docs/next/reference/packages/event/"},"@ones-op/event")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-one-activate-the-global-progress-manager"},"Example ONE: Activate the Global Progress Manager"),(0,i.kt)("h4",{id:"step-1-add-a-slot"},"Step 1: Add a slot"),(0,i.kt)("p",null,"Take \u3010My Workspace\u3011-\u3010Overview\u3011 as an example, execute the following instructions to select ",(0,i.kt)("inlineCode",{parentName:"p"},"ones:workspace:overview")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx op add module\n")),(0,i.kt)("h4",{id:"step-2-dispatch-event"},"Step 2: Dispatch event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { ConfigProvider, Button } from '@ones-design/core'\nimport { OPDispatch } from '@ones-op/event'\nimport './index.css'\n\nfunction App() {\n  const handleClick = () => {\n    OPDispatch('invoke:ones:global:progressManager')\n  }\n\n  return <Button onClick={handleClick}>Activate Progress Manager</Button>\n}\n\nReactDOM.render(\n  <ConfigProvider>\n    <App />\n  </ConfigProvider>,\n  document.getElementById('ones-mf-root')\n)\n")),(0,i.kt)("h4",{id:"step-3-triggered-on-ones"},"Step 3: Triggered on ONES"),(0,i.kt)("p",null,"Log in to ONES, \u3010My Workspace\u3011-\u3010Overview\u3011has been replaced by the plugin, click the button ",(0,i.kt)("strong",{parentName:"p"},"Progress Manager")," to trigger. As shown in the picture:"),(0,i.kt)(o.Z,{img:n(51176),mdxType:"Image"}),(0,i.kt)("h3",{id:"example-two-trigger-member-list-refresh"},"Example Two: Trigger member list refresh"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requirements")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v3.11.15+")))),(0,i.kt)("p",null,"Support for all member lists in ONES"),(0,i.kt)("h4",{id:"step-1-add-a-slot-1"},"Step 1: Add a slot"),(0,i.kt)("p",null,"Take \u3010Project Management\u3011-\u3010Member\u3011-\u3010New Action Button\u3011 as an example, and execute the following instructions to select ",(0,i.kt)("inlineCode",{parentName:"p"},"ones:project:component:member:action:new")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx op add module\n")),(0,i.kt)("h4",{id:"step-2-dispatch-event-1"},"Step 2: Dispatch event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { ConfigProvider, Button } from '@ones-design/core'\nimport { OPDispatch } from '@ones-op/event'\nimport './index.css'\n\nfunction App() {\n  const handleClick = () => {\n    OPDispatch('ones:event:memberList:refresh')\n  }\n\n  return <Button onClick={handleClick}>Refresh member list</Button>\n}\n\nReactDOM.render(\n  <ConfigProvider>\n    <App />\n  </ConfigProvider>,\n  document.getElementById('ones-mf-root')\n)\n")),(0,i.kt)("h4",{id:"step-3-triggered-on-ones-1"},"Step 3: Triggered on ONES"),(0,i.kt)("p",null,"Log in to the ONES, enter the top column operation area of \u3010Project Management\u3011-\u3010Member\u3011, click the button ",(0,i.kt)("strong",{parentName:"p"},"Refresh member list"),", and find that the member list data has been updated. As shown in the picture"),(0,i.kt)(o.Z,{img:n(86408),mdxType:"Image"}))}g.isMDXComponent=!0}}]);