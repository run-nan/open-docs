(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[88833],{32695:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/uploadFile1.35bd639.1024.png 1024w,"+a.p+"assets/ideal-img/uploadFile1.09bae85.1718.png 1718w",images:[{path:a.p+"assets/ideal-img/uploadFile1.35bd639.1024.png",width:1024,height:852},{path:a.p+"assets/ideal-img/uploadFile1.09bae85.1718.png",width:1718,height:1430}],src:a.p+"assets/ideal-img/uploadFile1.35bd639.1024.png",toString:function(){return a.p+"assets/ideal-img/uploadFile1.35bd639.1024.png"},placeholder:void 0,width:1024,height:852},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfElEQVQImX2OSw5CMQwDe//LcBtuwaehfU0a20UFVkgwKytjySn96PawWuvtfjXbobVO5KXl6axyHD0zQYYP9wFuImKtJXhx9/WCEoB9lUhqLXCVt/tF0X+dM5IE9qi0y5JAJBlQMavNzFofwzHnR2trjywgMTz3K99IfAKDn+uJseB8+AAAAABJRU5ErkJggg=="}},95663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>r,toc:()=>k});var i=a(87462),l=(a(67294),a(3905)),n=a(15944),o=a(32695),s=a.n(o);const p={sidebar_position:10,description:"\u4e0a\u4f20\u6587\u4ef6\u5230\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u3002"},d="\u4e0a\u4f20\u6587\u4ef6",r={unversionedId:"abilities/basic/uploadFile",id:"version-1.x/abilities/basic/uploadFile",title:"\u4e0a\u4f20\u6587\u4ef6",description:"\u4e0a\u4f20\u6587\u4ef6\u5230\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/abilities/basic/uploadFile.mdx",sourceDirName:"abilities/basic",slug:"/abilities/basic/uploadFile",permalink:"/zh-CN/docs/abilities/basic/uploadFile",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"\u4e0a\u4f20\u6587\u4ef6\u5230\u63d2\u4ef6\u5de5\u4f5c\u7a7a\u95f4\u3002"},sidebar:"abilities",previous:{title:"\u5ba1\u8ba1\u65e5\u5fd7",permalink:"/zh-CN/docs/abilities/basic/auditlog"},next:{title:"\u4e0b\u8f7d\u6587\u4ef6",permalink:"/zh-CN/docs/abilities/basic/downloadFile"}},u={},k=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528\u80fd\u529b",id:"\u7b2c\u4e8c\u6b65\u4f7f\u7528\u80fd\u529b",level:3},{value:"1. \u8c03\u7528 SDK \u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u94fe\u63a5",id:"1-\u8c03\u7528-sdk-\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u94fe\u63a5",level:4},{value:"2. \u901a\u8fc7\u94fe\u63a5\u4e0a\u4f20\u6587\u4ef6",id:"2-\u901a\u8fc7\u94fe\u63a5\u4e0a\u4f20\u6587\u4ef6",level:4},{value:"\u76f8\u5173 SDK",id:"\u76f8\u5173-sdk",level:2}],c={toc:k};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e0a\u4f20\u6587\u4ef6"},"\u4e0a\u4f20\u6587\u4ef6"),(0,l.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"ONES"),(0,l.kt)("th",{parentName:"tr",align:"left"},"@ones-op/node-ability"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v3.11.40+"),(0,l.kt)("td",{parentName:"tr",align:"left"},"v0.3.8+")))),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8be5\u80fd\u529b\u4e0a\u4f20\u6587\u4ef6\uff08\u5141\u8bb8\u5927\u4e8e 10M\uff09\u5230\u63d2\u4ef6\u5b58\u50a8\u7a7a\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"workspace"),"\u4e0b"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("p",null,"\u8fdb\u5165\u63d2\u4ef6\u5de5\u7a0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/backend"),"\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u4f9d\u8d56\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @ones-op/node-ability\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u4f7f\u7528\u80fd\u529b"},"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528\u80fd\u529b"),(0,l.kt)("h4",{id:"1-\u8c03\u7528-sdk-\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u94fe\u63a5"},"1. \u8c03\u7528 SDK \u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\u94fe\u63a5"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"uploadFile"),"\u65b9\u6cd5\u6307\u5b9a\u63d2\u4ef6\u5b58\u50a8\u7a7a\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"workspace"),"\u4e0b\u7684\u8def\u5f84\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"uploadFile"),"\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"url")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { uploadFile } from '@ones-op/node-ability'\n\nexport async function uploadFileToPlugin(request: PluginRequest): Promise<PluginResponse> {\n  const url = await uploadFile()\n\n  return {\n    body: {\n      res: url,\n    },\n  }\n}\n")),(0,l.kt)("h4",{id:"2-\u901a\u8fc7\u94fe\u63a5\u4e0a\u4f20\u6587\u4ef6"},"2. \u901a\u8fc7\u94fe\u63a5\u4e0a\u4f20\u6587\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"\u5373\u53ef\u9009\u62e9\u60f3\u8981\u7684\u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6587\u4ef6\u4e0a\u4f20\u94fe\u63a5\u9ed8\u8ba4\u7684\u6709\u6548\u65f6\u95f4\u4e3a 60 \u5206\u949f")),(0,l.kt)("p",null,"\u4e0a\u4f20\u65b9\u5f0f\u53c2\u8003"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8bf7\u5c06{{URL}}\u66ff\u6362\u6210\u7b2c\u4e00\u6b65\u83b7\u53d6\u7684URL,\u5e76\u5728form\u4e2d\u66ff\u6362\u81ea\u5df1\u7684\u4e0a\u4f20\u6587\u4ef6\u8def\u5f84\ncurl --location --request POST {{URL}} \\\n--header 'Cookie: language=zh' \\\n--form 'file=@\"/Users/hosea/Downloads/plugin(3).sql\"'\n")),(0,l.kt)(n.Z,{img:s(),mdxType:"Image"}),(0,l.kt)("h2",{id:"\u76f8\u5173-sdk"},"\u76f8\u5173 SDK"),(0,l.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u91ca\u4e49\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/packages/node-ability/"},"@ones-op/node-ability")))}m.isMDXComponent=!0}}]);