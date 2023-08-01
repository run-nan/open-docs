(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[72579],{53099:(e,a,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/classify.9435365.1024.png 1024w,"+t.p+"assets/ideal-img/classify.036bb71.2560.png 2560w",images:[{path:t.p+"assets/ideal-img/classify.9435365.1024.png",width:1024,height:584},{path:t.p+"assets/ideal-img/classify.036bb71.2560.png",width:2560,height:1459}],src:t.p+"assets/ideal-img/classify.9435365.1024.png",toString:function(){return t.p+"assets/ideal-img/classify.9435365.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVQImU2PvQrCMACE8+YO9icRMYk+g4oIFRWh/mBLdFFUpNZdaBzsLmgjnCQ4eNMd33FwpMUlKGug1x/gkmU4ns7Y7Q+45jlGUYSQNVELOyCcS/gBRRwvYfV8VXhXH+eV2qDuBeBCgggh4fsU88XKQWMMPsY4v05SeH4ILtogtm1DkqQO/kup7W/RFrlAEDKMJ1OUZYmi0LhrjZt+oDucgVIG++MLlM2f+oun+6IAAAAASUVORK5CYII="}},11962:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var s=t(87462),d=(t(67294),t(3905)),o=t(15944);const n={},r="Custom Card",i={unversionedId:"abilities/slot/module/my-work/dashboards/custom-card/index",id:"abilities/slot/module/my-work/dashboards/custom-card/index",title:"Custom Card",description:"Requirements",source:"@site/docs/abilities/slot/module/my-work/dashboards/custom-card/index.mdx",sourceDirName:"abilities/slot/module/my-work/dashboards/custom-card",slug:"/abilities/slot/module/my-work/dashboards/custom-card/",permalink:"/open-docs/docs/next/abilities/slot/module/my-work/dashboards/custom-card/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Dashboards",permalink:"/open-docs/docs/next/abilities/slot/module/my-work/dashboards/"},next:{title:"Filters",permalink:"/open-docs/docs/next/abilities/slot/module/my-work/filters/"}},l={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:dashboard:card:new",id:"onesdashboardcardnew",level:4},{value:"Usage",id:"usage",level:2},{value:"Available Hook API",id:"available-hook-api",level:3}],u={toc:m};function c(e){let{components:a,...n}=e;return(0,d.kt)("wrapper",(0,s.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"custom-card"},"Custom Card"),(0,d.kt)("h2",{id:"requirements"},"Requirements"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"center"},"v3.13.50+")))),(0,d.kt)("h2",{id:"overview"},"Overview"),(0,d.kt)(o.Z,{img:t(53099),mdxType:"Image"})," ",(0,d.kt)("p",null,'We support add custom cards in the dashboard for "My work" - "Dashboards" - "Edit the dashboard" - "Add widget"'),(0,d.kt)("p",null,"The slots currently supported are as follows:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"#ones:dashboard:card:new"},"ones:dashboard:card:new"))),(0,d.kt)("h2",{id:"slots"},"Slots"),(0,d.kt)("h4",{id:"onesdashboardcardnew"},"ones:dashboard:card:new"),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Module path:")," My work / Dashboards / Edit the dashboard / Add widget"),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Number limit: ")," Declare a maximum of 10 slots in each plugin, and up to 100 slots in the system."),(0,d.kt)("admonition",{type:"caution"},(0,d.kt)("p",{parentName:"admonition"},"the module must be used with the backend business capability ",(0,d.kt)("a",{parentName:"p",href:"/open-docs/docs/next/abilities/business/custom-card/"},"custom card"))),(0,d.kt)("h2",{id:"usage"},"Usage"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: ones-dashboard-card-new-jIfv\n  title: Custom Card\n  description: Custom Card Description\n  defaultCardName: Default Card Name\n  icon: custom-card.svg\n  defaultLayout:\n    h: 4 # height\n    w: 5 # width\n  layout:\n    minH: 3 # minimum height\n    minW: 3 # minimum width\n    maxH: 6 # maximum height\n    maxW: 6 # maximum width\n  objectType: # the type of the dashboard\n    - dashboard\n  moduleType: ones:dashboard:card:new\n  modules:\n    - id: ones-dashboard-card-new-C9Hv\n      title: render\n      scene: render # the render area of the card\n      entry: >-\n        modules/ones-dashboard-card-new-jIfv/ones-dashboard-card-new-C9Hv/index.html\n    - id: ones-dashboard-card-new-kjkK\n      scene: setting\n      title: setting # the setting area of the card\n      entry: >-\n        modules/ones-dashboard-card-new-jIfv/ones-dashboard-card-new-kjkK/index.html\n")),(0,d.kt)("h3",{id:"available-hook-api"},"Available Hook API"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useDashboardCardInfo"},"useDashboardCardInfo")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/store/#useDashboardCardConfigInfo"},"useDashboardCardConfigInfo")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/bridge/#useOnSubmitConfig"},"useOnSubmitConfig")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/open-docs/docs/next/reference/packages/bridge/#useCustomMenus"},"useCustomMenus"))))}c.isMDXComponent=!0}}]);