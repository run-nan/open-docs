(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[44360],{40880:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/classify.f2f86f9.1024.png 1024w,"+a.p+"assets/ideal-img/classify.5b6a5b1.2560.png 2560w",images:[{path:a.p+"assets/ideal-img/classify.f2f86f9.1024.png",width:1024,height:584},{path:a.p+"assets/ideal-img/classify.5b6a5b1.2560.png",width:2560,height:1459}],src:a.p+"assets/ideal-img/classify.f2f86f9.1024.png",toString:function(){return a.p+"assets/ideal-img/classify.f2f86f9.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoklEQVQImV2MUQvBUABG7z/3YNyNtXs3v8HLRCEv0uhSEtKyH6DMg70r3NXRxpPzdPr6OkIHCt/3ieOYNE3ZH09sdweyc8ZoOER6Pg3ZQ+hA0+14zBcJFY/nm9e7rN2YNU2njdIhQocR0nVJku/RWktpbe3JcoXTkigdIQIV4jiyHv8xZvMrRgilNG3pMZ5MKYqC6zXnludc8jv9wQzX9ahiH6gZoBsqKLGOAAAAAElFTkSuQmCC"}},71350:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905)),s=a(15944);const r={},d="Custom Card",i={unversionedId:"abilities/slot/module/project/component/overview/custom-card/index",id:"abilities/slot/module/project/component/overview/custom-card/index",title:"Custom Card",description:"Requirements",source:"@site/docs/abilities/slot/module/project/component/overview/custom-card/index.mdx",sourceDirName:"abilities/slot/module/project/component/overview/custom-card",slug:"/abilities/slot/module/project/component/overview/custom-card/",permalink:"/open-docs/docs/next/abilities/slot/module/project/component/overview/custom-card/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Overview",permalink:"/open-docs/docs/next/abilities/slot/module/project/component/overview/"},next:{title:"Plan",permalink:"/open-docs/docs/next/abilities/slot/module/project/component/plan/"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:dashboard:card:new",id:"onesdashboardcardnew",level:4},{value:"Usage",id:"usage",level:2},{value:"Available Hook API",id:"available-hook-api",level:3}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-card"},"Custom Card"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"v3.13.50+")))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)(s.Z,{img:a(40880),mdxType:"Image"})," ",(0,n.kt)("p",null,'We support add custom cards in the dashboard for "ONES Project" - "Project component" - "Overview" - "Edit the dashboard" - "Add widget"'),(0,n.kt)("p",null,"The slots currently supported are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ones:dashboard:card:new"},"ones:dashboard:card:new"))),(0,n.kt)("h2",{id:"slots"},"Slots"),(0,n.kt)("h4",{id:"onesdashboardcardnew"},"ones:dashboard:card:new"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Module path:")," ONES Project / Project component / Overview / Edit the dashboard / Add widget"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Number limit: ")," Declare a maximum of 10 slots in each plugin, and up to 100 slots in the system."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"the module must be used with the backend business capability ",(0,n.kt)("a",{parentName:"p",href:"/open-docs/docs/next/abilities/business/custom-card/"},"custom card"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: ones-dashboard-card-new-jIfv\n  title: Custom Card\n  description: Custom Card Description\n  defaultCardName: Default Card Name\n  icon: custom-card.svg\n  defaultLayout:\n    h: 4 # height\n    w: 5 # width\n  layout:\n    minH: 3 # minimum height\n    minW: 3 # minimum width\n    maxH: 6 # maximum height\n    maxW: 6 # maximum width\n  objectType: # the type of the dashboard\n    - project_component\n  moduleType: ones:dashboard:card:new\n  modules:\n    - id: ones-dashboard-card-new-C9Hv\n      title: render\n      scene: render # the render area of the card\n      entry: >-\n        modules/ones-dashboard-card-new-jIfv/ones-dashboard-card-new-C9Hv/index.html\n    - id: ones-dashboard-card-new-kjkK\n      scene: setting\n      title: setting # the setting area of the card\n      entry: >-\n        modules/ones-dashboard-card-new-jIfv/ones-dashboard-card-new-kjkK/index.html\n")),(0,n.kt)("h3",{id:"available-hook-api"},"Available Hook API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useDashboardCardInfo"},"useDashboardCardInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useDashboardCardConfigInfo"},"useDashboardCardConfigInfo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/bridge/#useOnSubmitConfig"},"useOnSubmitConfig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/bridge/#useCustomMenus"},"useCustomMenus"))))}p.isMDXComponent=!0}}]);