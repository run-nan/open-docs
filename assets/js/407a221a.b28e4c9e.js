(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[23653],{10631:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/account.20e10ad.1024.png 1024w,"+a.p+"assets/ideal-img/account.cfe2290.2560.png 2560w",images:[{path:a.p+"assets/ideal-img/account.20e10ad.1024.png",width:1024,height:584},{path:a.p+"assets/ideal-img/account.cfe2290.2560.png",width:2560,height:1459}],src:a.p+"assets/ideal-img/account.20e10ad.1024.png",toString:function(){return a.p+"assets/ideal-img/account.20e10ad.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeUlEQVQImT2NwQ7CIBBE+f9P8xM8eDMxQVsKRRaBfWaxdTaTubydccsrEFNBwpP+uKGA9o6O8fdoDef9whoL4u/U6wWT6ph5yh5d2iIpbEitNODTGqoG67RpGJiLIEXYc2HdK+MA5h3gbHznjJRK60q1yjlt0C9P8Asmd8QM0XAJhAAAAABJRU5ErkJggg=="}},93450:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),l=a(15944);const s={},i="My profile",r={unversionedId:"abilities/slot/module/account/index",id:"version-1.x/abilities/slot/module/account/index",title:"My profile",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/slot/module/account/index.mdx",sourceDirName:"abilities/slot/module/account",slug:"/abilities/slot/module/account/",permalink:"/docs/abilities/slot/module/account/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Module slot",permalink:"/docs/abilities/slot/module/"},next:{title:"Dashboard",permalink:"/docs/abilities/slot/module/account/dashboard/"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:account:new",id:"onesaccountnew",level:4},{value:"ones:account:personal",id:"onesaccountpersonal",level:4},{value:"ones:account:dashboard",id:"onesaccountdashboard",level:4},{value:"Usage",id:"usage",level:2}],d={toc:u};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"my-profile"},"My profile"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"v3.6.0+")))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)(l.Z,{img:a(10631),mdxType:"Image"}),(0,o.kt)("p",null,'We have provided slots for "My profile" to customize the page module for the application.'),(0,o.kt)("p",null,"The slots currently supported are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onesaccountnew"},"ones:account:new")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onesaccountpersonal"},"ones:account:personal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onesaccountdashboard"},"ones:account:dashboard"))),(0,o.kt)("h2",{id:"slots"},"Slots"),(0,o.kt)("h4",{id:"onesaccountnew"},"ones:account:new"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Module path\uff1a")," My profile / new module"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,o.kt)("strong",{parentName:"p"},"10")," slots in each plugin, and up to ",(0,o.kt)("strong",{parentName:"p"},"100")," slots in the system."),(0,o.kt)("h4",{id:"onesaccountpersonal"},"ones:account:personal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Module path\uff1a")," My profile / Personal info"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,o.kt)("strong",{parentName:"p"},"1")," slots in each plugin, and up to ",(0,o.kt)("strong",{parentName:"p"},"1")," slots in the system."),(0,o.kt)("h4",{id:"onesaccountdashboard"},"ones:account:dashboard"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Module path\uff1a")," My profile / Dashboard"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,o.kt)("strong",{parentName:"p"},"1")," slots in each plugin, and up to ",(0,o.kt)("strong",{parentName:"p"},"1")," slots in the system."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: ones-account-personal-uhK0\n    title: Personal info\n    moduleType: ones:account:personal\n    modules:\n      - id: ones-account-personal-JhsH\n        title: My account\n        entry: >-\n          modules/ones-account-personal-uhK0/ones-account-personal-JhsH/index.html\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported config options\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../../reference/config/plugin.yaml#disabled"},"disabled")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../../reference/config/plugin.yaml#subModule"},"modules(required)"))))}c.isMDXComponent=!0}}]);