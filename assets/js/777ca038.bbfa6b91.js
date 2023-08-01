(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[67918],{64967:(e,i,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/pluginLog1.6f56c15.1024.png 1024w,"+n.p+"assets/ideal-img/pluginLog1.d2f80e6.2360.png 2360w",images:[{path:n.p+"assets/ideal-img/pluginLog1.6f56c15.1024.png",width:1024,height:590},{path:n.p+"assets/ideal-img/pluginLog1.d2f80e6.2360.png",width:2360,height:1360}],src:n.p+"assets/ideal-img/pluginLog1.6f56c15.1024.png",toString:function(){return n.p+"assets/ideal-img/pluginLog1.6f56c15.1024.png"},placeholder:void 0,width:1024,height:590},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwElEQVQImXWJy2rCQABF5y9KIWKwVhOJ0i58IAgiCF247De4E3zUZ2LQqAtRQb+0UK1MyAxHDMVdLxwu91xxvvzyc74gpUQp9SCKFEprtNaARlxlRBiG8flfviWI7f5If+gycZdMvYDZPIh7MPLoD2d0emPaXwHio/VJKvuGlS9hOSXsQhnLKWK+Fki+OBimTaVaRzSaLZ6MNIlULpaGaf1hx+45keG9WEPsDie6gwmev8JfbJgv1g/u2/UDtrsjN1eonkhddHIqAAAAAElFTkSuQmCC"}},27701:(e,i,n)=>{"use strict";n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var t=n(87462),a=(n(67294),n(3905)),l=n(15944),o=n(64967),g=n.n(o);const s={id:"openAbility-pluginLog",sidebar_position:1,description:"Easy logging operations."},p="Logger",r={unversionedId:"abilities/basic/openAbility-pluginLog",id:"version-1.x/abilities/basic/openAbility-pluginLog",title:"Logger",description:"Easy logging operations.",source:"@site/versioned_docs/version-1.x/abilities/basic/openAbility-pluginLog.mdx",sourceDirName:"abilities/basic",slug:"/abilities/basic/openAbility-pluginLog",permalink:"/docs/abilities/basic/openAbility-pluginLog",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:1,frontMatter:{id:"openAbility-pluginLog",sidebar_position:1,description:"Easy logging operations."},sidebar:"abilities",previous:{title:"Core",permalink:"/docs/abilities/basic/"},next:{title:"Database",permalink:"/docs/abilities/basic/database"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Logger ability usage\uff1a",id:"logger-ability-usage",level:3},{value:"1. Install dependencies",id:"1-install-dependencies",level:4},{value:"2. Example",id:"2-example",level:4}],m={toc:u};function c(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logger"},"Logger"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.7.51+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This ability allows each plugin to print its own log, providing four levels of standard log printing methods\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"info"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"error"),", also support the export of log files."),(0,a.kt)("p",null,"Logs printed using the standard log method are displayed in the log page in the plugin details page, which only displays logs at the ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),",",(0,a.kt)("inlineCode",{parentName:"p"},"warning")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," level."),(0,a.kt)("p",null,"You can view the plugin log details on the details page of each plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration -> Plugin management"),", as shown in the following figure."),(0,a.kt)(l.Z,{img:g(),mdxType:"Image"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"When debugging locally, if you need to print the log to the console, you can open and configure ",(0,a.kt)("inlineCode",{parentName:"p"},"debug_mode: true")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/local.yaml"),",and the log file is saved in the file in the plugin root directory ",(0,a.kt)("inlineCode",{parentName:"p"},"ones-plugin-node-host.log"),"."),(0,a.kt)("h3",{id:"logger-ability-usage"},"Logger ability usage\uff1a"),(0,a.kt)("h4",{id:"1-install-dependencies"},"1. Install dependencies"),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-logger\n")),(0,a.kt)("h4",{id:"2-example"},"2. Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Logger } from '@ones-op/node-logger'\n\nfunction logExample() {\n  Logger.debug('debug level log')\n  Logger.info('info level log')\n  Logger.warning('warning level log')\n  Logger.error('error level log')\n}\n")))}c.isMDXComponent=!0}}]);