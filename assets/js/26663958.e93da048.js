(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[98222],{88701:(t,e,a)=>{t.exports={src:{srcSet:a.p+"assets/ideal-img/notify-01.6e81845.870.png 870w",images:[{path:a.p+"assets/ideal-img/notify-01.6e81845.870.png",width:870,height:504}],src:a.p+"assets/ideal-img/notify-01.6e81845.870.png",toString:function(){return a.p+"assets/ideal-img/notify-01.6e81845.870.png"},placeholder:void 0,width:870,height:504},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVQImX2MPQrCQBCF95pWdtrrFSxstFMv4CkUsREbEQsF2xAiCIlx8zNJdhP9JAlo58A3vPdmeOr+EKDi/7xRkhuuTsLqoNmeInbnmP0lafTm2HrJDMqYjOXapzNy6U08hguPwcyhP/Xojl0G8xtBmKCekWCtbeprRAStNbxf30zHgqqX5AVlVVEYS5Yb8qKlLCusLX+Pzyilbg51ShDG+GHEQydN1t5SPkFY3tigQttIAAAAAElFTkSuQmCC"}},41784:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(15944);const o={id:"notifications",sidebar_position:4,description:"Various notification methods."},l="Notifications",s={unversionedId:"abilities/basic/notifications",id:"abilities/basic/notifications",title:"Notifications",description:"Various notification methods.",source:"@site/docs/abilities/basic/notifications.mdx",sourceDirName:"abilities/basic",slug:"/abilities/basic/notifications",permalink:"/open-docs/docs/next/abilities/basic/notifications",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:4,frontMatter:{id:"notifications",sidebar_position:4,description:"Various notification methods."},sidebar:"abilities",previous:{title:"Database",permalink:"/open-docs/docs/next/abilities/basic/database"},next:{title:"Plugin custom configuration",permalink:"/open-docs/docs/next/abilities/basic/custom-config"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Installation dependency",id:"step-1-installation-dependency",level:3},{value:"Step 2: Send notification",id:"step-2-send-notification",level:3}],m={toc:d};function k(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications"},"Notifications"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+")))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The plugin has the ability to send message notifications to users. The supported notification channels include WeChat, DingDing, Youdu, Lark and email."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you need to send a notification to a third-party system, you need to access the corresponding",(0,i.kt)("strong",{parentName:"p"}," ",(0,i.kt)("a",{parentName:"strong",href:"/open-docs/docs/next/abilities/business/account/synchronize-with-third-party-system/"},"Three-Party System")," ")," To send notifications normally.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"step-1-installation-dependency"},"Step 1: Installation dependency"),(0,i.kt)("p",null,"Enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"/backend")," directory of the plugin project, and execute the following command for dependent installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-ability\n")),(0,i.kt)("h3",{id:"step-2-send-notification"},"Step 2: Send notification"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/open-docs/docs/next/reference/packages/node-ability/#Notify"},"Notify")," method to send a notification to the user."),(0,i.kt)("p",null,"Example: use the ",(0,i.kt)("a",{parentName:"p",href:"../business/ONES-API/ONES-API-registration"},"ONES API registration")," the ability registration API, and pass in the user ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," when calling the interface, and send a test email to the specified user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Notify, NotifyWay } from '@ones-op/node-ability'\n\nexport async function sendEmail(request: PluginRequest): Promise<PluginResponse> {\n  const { user_uuid } = request?.body as any\n  if (!user_uuid) {\n    return {\n      body: {\n        error: 'Missing parameters user_uuid',\n      },\n    }\n  }\n  const NotifyRes = await Notify({\n    Title: 'Test',\n    ToUsers: [user_uuid],\n    NotifyWay: NotifyWay.Email,\n    MessageBody: [\n      {\n        Body: 'Email sending test',\n        Url: 'https://ones.com/',\n      },\n    ],\n    Ext: 'ext string',\n  })\n  return {\n    body: {\n      NotifyRes: NotifyRes,\n      data: 'success',\n    },\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Param")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Param")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Required")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Default")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"information title"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ToUsers"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of users to receive notifications"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"NotifyWay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"NotifyWay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Notification type, optional values:",(0,i.kt)("br",null),"- Email: NotifyWay.Email",(0,i.kt)("br",null),"- Lark: NotifyWay.Lark",(0,i.kt)("br",null),"- YouDu: NotifyWay.YouDu",(0,i.kt)("br",null),"- WeChat: NotifyWay.WeChat",(0,i.kt)("br",null),"- DingDing: NotifyWay.DingDing"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"MessageBody"),(0,i.kt)("td",{parentName:"tr",align:"left"},"IMessageBody[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of message bodies, each message body contains:",(0,i.kt)("br",null),"- Body: notification content",(0,i.kt)("br",null),"- url\uff1anotification jump link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Ext"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MessageType, supports:",(0,i.kt)("br",null),"When NotifyWay Field is ",(0,i.kt)("inlineCode",{parentName:"td"},"NotifyWay.YouDu"),", optional values are:",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"text"),": Text",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"exlink"),": External link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Parameter")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Required")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Default")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ErrorMessage"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Contains the following fields:",(0,i.kt)("br",null),"- Code: Fixed value: ",(0,i.kt)("inlineCode",{parentName:"td"},"11046"),(0,i.kt)("br",null),"- Msg: Fixed value: ",(0,i.kt)("inlineCode",{parentName:"td"},"NotifyEventFailure 11046"),(0,i.kt)("br",null),"- Err: Error message"),(0,i.kt)("td",{parentName:"tr",align:"left"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,"The effect of sending mail is as shown in the figure:"),(0,i.kt)(r.Z,{img:a(88701),mdxType:"Image"}))}k.isMDXComponent=!0}}]);