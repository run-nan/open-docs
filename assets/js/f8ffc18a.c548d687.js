(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[64549],{2471:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/wiki.9c966c5.1024.png 1024w,"+i.p+"assets/ideal-img/wiki.543a33c.2560.png 2560w",images:[{path:i.p+"assets/ideal-img/wiki.9c966c5.1024.png",width:1024,height:584},{path:i.p+"assets/ideal-img/wiki.543a33c.2560.png",width:2560,height:1459}],src:i.p+"assets/ideal-img/wiki.9c966c5.1024.png",toString:function(){return i.p+"assets/ideal-img/wiki.9c966c5.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVQImVWNgQpCMQwD9/9fqz7XNu22UzdQLByEg6Tteb9xXZ2SGCkigpSYY2wyC+9Gs26stVick5Kq2vnjlYV1pyn0lbCYczLGpGpsQoWZn0XlQKrd9kjM9SMSt6D1x/MIi4MH7vrn/foFjlDD3kvUQdYAAAAASUVORK5CYII="}},25141:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>k});var a=i(87462),n=(i(67294),i(3905)),s=i(15944);const l={},o="ONES Wiki",r={unversionedId:"abilities/slot/module/wiki/index",id:"version-1.x/abilities/slot/module/wiki/index",title:"ONES Wiki",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/slot/module/wiki/index.mdx",sourceDirName:"abilities/slot/module/wiki",slug:"/abilities/slot/module/wiki/",permalink:"/open-docs/docs/abilities/slot/module/wiki/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Version Management",permalink:"/open-docs/docs/abilities/slot/module/version/"},next:{title:"Wiki collaborative page",permalink:"/open-docs/docs/abilities/slot/module/wiki/editor/"}},p={},k=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:wiki:new",id:"oneswikinew",level:4},{value:"ones:wiki:group",id:"oneswikigroup",level:4},{value:"ones:wiki:share",id:"oneswikishare",level:4},{value:"Usage",id:"usage",level:2}],d={toc:k};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-wiki"},"ONES Wiki"),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"v3.6.0+")))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)(s.Z,{img:i(2471),mdxType:"Image"}),(0,n.kt)("p",null,'We have provided slots for "ONES Wiki" to customize the page module for the application.'),(0,n.kt)("p",null,"The slots currently supported are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#oneswikinew"},"ones:wiki:new")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#oneswikigroup"},"ones:wiki:group")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#oneswikishare"},"ones:wiki:share"))),(0,n.kt)("h2",{id:"slots"},"Slots"),(0,n.kt)("h4",{id:"oneswikinew"},"ones:wiki:new"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Module path\uff1a")," ONES Wiki / new module"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,n.kt)("strong",{parentName:"p"},"10")," slots in each plugin, and up to ",(0,n.kt)("strong",{parentName:"p"},"100")," slots in the system."),(0,n.kt)("h4",{id:"oneswikigroup"},"ones:wiki:group"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ONES Requirement:")," v3.11.15+"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Module path\uff1a")," ONES Wiki / Spaces"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,n.kt)("strong",{parentName:"p"},"1")," slots in each plugin, and up to ",(0,n.kt)("strong",{parentName:"p"},"1")," slots in the system."),(0,n.kt)("h4",{id:"oneswikishare"},"ones:wiki:share"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Module path\uff1a")," ONES Wiki / Shared with me"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,n.kt)("strong",{parentName:"p"},"1")," slots in each plugin, and up to ",(0,n.kt)("strong",{parentName:"p"},"1")," slots in the system."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: ones-wiki-group-YjhC\n    title: Spaces\n    moduleType: ones:wiki:group\n    entry: modules/ones-wiki-group-YjhC/index.html\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supported config options\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../../reference/config/plugin.yaml#disabled"},"disabled"))))}m.isMDXComponent=!0}}]);