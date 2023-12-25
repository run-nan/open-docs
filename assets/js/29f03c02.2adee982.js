"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[4705],{17942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(28957),a=(n(50959),n(17942));const r={id:"timer",sidebar_position:9,description:"Provides a simple way to use timed tasks."},o="Timer",l={unversionedId:"abilities/basic/timer",id:"abilities/basic/timer",title:"Timer",description:"Provides a simple way to use timed tasks.",source:"@site/docs/abilities/basic/timer-task.md",sourceDirName:"abilities/basic",slug:"/abilities/basic/timer",permalink:"/open-docs/docs/abilities/basic/timer",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:9,frontMatter:{id:"timer",sidebar_position:9,description:"Provides a simple way to use timed tasks."},sidebar:"abilities",previous:{title:"Super admin",permalink:"/open-docs/docs/abilities/basic/super-admin"},next:{title:"Audit log",permalink:"/open-docs/docs/abilities/basic/auditlog"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Fixed frequency",id:"fixed-frequency",level:3},{value:"Step 1: Add configuration",id:"step-1-add-configuration",level:4},{value:"Step 2: Write a scheduled task",id:"step-2-write-a-scheduled-task",level:4},{value:"Timing",id:"timing",level:3},{value:"Step 1: Add configuration",id:"step-1-add-configuration-1",level:4},{value:"Step 2: Write a scheduled task",id:"step-2-write-a-scheduled-task-1",level:4},{value:"FAQ",id:"faq",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timer"},"Timer"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.10.52+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In the process of development, we often need to perform some operations regularly. The Timer ability provides a way to set a timed task, allowing your program to execute at a specified time point, or at a certain interval."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The timer supports two definition methods of fixed frequency and timing: the frequency is executed at a fixed interval; the timing is executed at a certain point in time, using ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/133509.html"},"cron")," expression."),(0,a.kt)("h3",{id:"fixed-frequency"},"Fixed frequency"),(0,a.kt)("h4",{id:"step-1-add-configuration"},"Step 1: Add configuration"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx op add ability")," to add the ability of ",(0,a.kt)("inlineCode",{parentName:"p"},"timer-task")," type and select ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0")," template, which will add the ability configuration to the plugin configuration file and generate ",(0,a.kt)("inlineCode",{parentName:"p"},"timer-task.ts")," file. In the configuration, the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," field in the fixed frequency mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),", and the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," field is the interval time, in ",(0,a.kt)("strong",{parentName:"p"},"second"),"."),(0,a.kt)("p",null,"Example: execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"taskAction")," function every 30 seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"abilities:\n  - id: vvOZFOyt\n    name: TimerTask\n    version: 1.0.0\n    abilityType: TimerTask\n    function:\n      taskActionFunc: taskAction #The function name of the scheduled task\n    config:\n      - key: interval #Fixed frequency mode\n        value: 30 #The interval time is 30s\n        fieldType: Number\n        show: false\n        required: true\n")),(0,a.kt)("h4",{id:"step-2-write-a-scheduled-task"},"Step 2: Write a scheduled task"),(0,a.kt)("p",null,"The function name must be the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"taskActionFunc")," field in the ability configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function taskAction() {\n  //...\n}\n")),(0,a.kt)("h3",{id:"timing"},"Timing"),(0,a.kt)("h4",{id:"step-1-add-configuration-1"},"Step 1: Add configuration"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx op add ability")," to add the ability of ",(0,a.kt)("inlineCode",{parentName:"p"},"timer-task")," type and select ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0-cron")," template, which will add the ability configuration to the plugin configuration file and generate ",(0,a.kt)("inlineCode",{parentName:"p"},"timer-task.ts")," file. In the configuration, the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," field of the timing method is ",(0,a.kt)("inlineCode",{parentName:"p"},"cron"),", and the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," field is ",(0,a.kt)("inlineCode",{parentName:"p"},"cron")," expression."),(0,a.kt)("p",null,"Example: execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"cronTaskAction")," function every 30th second of the minute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"abilities:\n  - id: XKggffGc\n    name: TimerTask\n    version: 1.0.0\n    abilityType: TimerTask\n    function:\n      taskActionFunc: cronTaskAction\n    config:\n      - key: cron\n        value: '30 * * * * *'\n        fieldType: Input\n        show: false\n        required: true\n")),(0,a.kt)("h4",{id:"step-2-write-a-scheduled-task-1"},"Step 2: Write a scheduled task"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function cronTaskAction() {\n  //...\n}\n")),(0,a.kt)("admonition",{title:"NOTICE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The time set in the timer is the time on the server, which is not guaranteed to be consistent with the local time.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to configure timer ability params?")),(0,a.kt)("p",null,"When configured in fixed frequency mode, ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," must be an integer interval greater than 0; when configured in timing mode, ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," must be a ",(0,a.kt)("inlineCode",{parentName:"p"},"cron")," expression. Note that a timer capability can only be configured in one type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What if I want to create multiple timer tasks?")),(0,a.kt)("p",null,"Multiple timer abilities can be declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"abilities"),", and the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"taskActionFunc")," of the timer abilities can be defined as different function names to distinguish different timer tasks."))}u.isMDXComponent=!0}}]);