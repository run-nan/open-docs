(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[29480],{40296:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/lifecycle.1337412.690.png 690w",images:[{path:n.p+"assets/ideal-img/lifecycle.1337412.690.png",width:690,height:616}],src:n.p+"assets/ideal-img/lifecycle.1337412.690.png",toString:function(){return n.p+"assets/ideal-img/lifecycle.1337412.690.png"},placeholder:void 0,width:690,height:616},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuElEQVQYlWVQ0Q6CMAzc//+ZvvioEV9ElKhMDOBg69YzLc5IvKRZc+vdNTXMADNrCR6dRXU/ac8fXsoA80B+y+sRm/1mwQlMYqDtHEZPqowxgSjBuVE5+xwwTiSDjMEF+JBUSTHChwAiQqCE/uXhQ/yPPlQHrLerBafRMTFutlOlxPZuwL1t9FMcb7bHOEUY2UusJ0+6l/rE2SUlVl7MTLbO57k0Z+zK7YLT6N9bCWpbo6iK72C+4xviN2A8oNGALAAAAABJRU5ErkJggg=="}},22359:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var i=n(87462),l=(n(67294),n(3905)),a=n(15944);const o={id:"lifecycle",sidebar_position:8},r="Lifecycle",s={unversionedId:"guide/lifecycle",id:"version-1.x/guide/lifecycle",title:"Lifecycle",description:"Overview",source:"@site/versioned_docs/version-1.x/guide/lifecycle.mdx",sourceDirName:"guide",slug:"/guide/lifecycle",permalink:"/open-docs/docs/guide/lifecycle",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:8,frontMatter:{id:"lifecycle",sidebar_position:8},sidebar:"guide",previous:{title:"Event communication",permalink:"/open-docs/docs/guide/abilities/event-communication"},next:{title:"Package",permalink:"/open-docs/docs/guide/package"}},d={},g=[{value:"Overview",id:"overview",level:2},{value:"Lifecycle method",id:"lifecycle-method",level:2},{value:"Lifecycle methods usage",id:"lifecycle-methods-usage",level:3},{value:"<strong>NOTICE</strong>",id:"notice",level:3}],p={toc:g};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lifecycle"},"Lifecycle"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The lifecycle of a plugin refers to the complete process of the plugin from uploading to uninstalling in ONES. From the time the plugin is uploaded to the ONES instance, the state flow of the plugin is shown in the figure below. The state of the plugin changes when the user installs, enables, etc. The lifecycle method will be run when the plugin state changes, and developers can add their own code to the lifecycle method to implement business logic."),(0,l.kt)(a.Z,{img:n(40296),mdxType:"Image"}),(0,l.kt)("h2",{id:"lifecycle-method"},"Lifecycle method"),(0,l.kt)("p",null,"Plugin lifecycle methods are divided into organization-level and team-level. According to the type of plugin, the corresponding method is called in the lifecycle. The lifecycle methods of the team-level are: ",(0,l.kt)("inlineCode",{parentName:"p"},"Install"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Enable"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Disable"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UnInstall"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Upgrade"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Stop"),". The organization-level lifecycle methods are: ",(0,l.kt)("inlineCode",{parentName:"p"},"OrgInstall"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OrgEnable"),",",(0,l.kt)("inlineCode",{parentName:"p"},"OrgDisable"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OrgUnInstall"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OrgUpgrade"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Start"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Stop"),". where the ",(0,l.kt)("inlineCode",{parentName:"p"},"Start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Stop")," methods are the same in both levels of plugins."),(0,l.kt)("h3",{id:"lifecycle-methods-usage"},"Lifecycle methods usage"),(0,l.kt)("p",null,"The lifecycle method is declared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/backend/src/index.ts")," file of the plugin project. When each plugin project is initialized, the template of the lifecycle method will be generated in advance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method template:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="backend/src/index.ts"',title:'"backend/src/index.ts"'},"// Method called when the team level plugin is being installed.\nexport async function Install() {\n  Logger.info('[Plugin] Install')\n}\n\n// Method called when the team level plugin is being launched.\nexport async function Enable() {\n  Logger.info('[Plugin] Enable')\n}\n\n// Method called when the team level plugin is being suspended.\nexport function Disable() {\n  Logger.info('[Plugin] Disable')\n}\n\n// Method called when the team level plugin is being uninstalled.\nexport function UnInstall() {\n  Logger.info('[Plugin] UnInstall')\n}\n\n// Method called when the team level plugin is being upgraded.\nexport function Upgrade(oldPluginInfo) {\n  const oldVersion = oldPluginInfo.version\n  Logger.info('[Plugin] Upgrade', 'old version:', oldVersion)\n}\n\n// Method called when the organization level plugin is being installed.\nexport async function OrgInstall(\n  request: PluginRequest,\n  teamUUIDList: string[],\n  firstInstall: boolean\n) {\n  Logger.info('[Plugin] OrgInstall')\n}\n\n// Method called when the organization level plugin is being launched.\nexport function OrgEnable(\n  request: PluginRequest,\n  teamUUIDList: string[]\n): void | string[] | Promise<string[]> {\n  Logger.info('[Plugin] OrgEnable')\n  return []\n}\n\n// Method called when the organization level plugin is being suspended.\nexport function OrgDisable(\n  request: PluginRequest,\n  teamUUIDList: string[]\n): void | string[] | Promise<string[]> {\n  Logger.info('[Plugin] OrgDisable')\n  return []\n}\n\n// Method called when the organization level plugin is being uninstalled.\nexport function OrgUnInstall(request: PluginRequest, teamUUIDList: string[]) {\n  Logger.info('[Plugin] OrgUnInstall')\n}\n\n// Method called when the organization level plugin is being upgraded.\nexport function OrgUpgrade(oldPluginInfo: any, request: PluginRequest, teamUUIDList: string[]) {\n  Logger.info('[Plugin] OrgUpgrade')\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Introduction to the parameters of the organization-level plugin lifecycle method:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Directions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PluginRequest"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'request.parsedHeaders["Accept-Language"]')," contains ONES current language (multilingual related) information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"teamUUIDList"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The target team UUID list enabled this time, when the organization-level plugin is enabled, it will be applied to specific teams, and the teams stored in this list are the teams to be effective.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"oldPluginInfo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"any"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldPluginInfo.version")," is the version information of the old plugin, which only exists in the upgrade method.")))),(0,l.kt)("h3",{id:"notice"},(0,l.kt)("strong",{parentName:"h3"},"NOTICE")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Time-consuming operations should not be performed in lifecycle methods.")))}c.isMDXComponent=!0}}]);