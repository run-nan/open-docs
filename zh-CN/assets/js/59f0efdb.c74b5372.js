"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[75978],{34578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var s=r(87462),a=(r(67294),r(3905)),i=r(70603),o=r(48147),p=r(61045),n=r(86776),m=r(69128),c=r(83329),l=(r(3186),r(18679));const d={id:"create-a-new-project",title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",description:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",sidebar_label:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create-a-new-project",description:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",security:[{oauth2:["write:project:project"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{required:["membersID","name"],type:"object",properties:{name:{maxLength:128,minLength:1,type:"string",description:"\u9879\u76ee\u540d\u79f0"},templateID:{type:"string",description:"\u9879\u76ee\u6a21\u7248ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"\u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"\u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"\u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"\u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"\u770b\u677f\u9879\u76ee\u6a21\u677f"}},membersID:{type:"array",description:"\u9879\u76ee\u6210\u5458ID",items:{type:"string"}}},title:"AddProjectRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"\u9879\u76eeID"},name:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},owner:{type:"string",description:"\u9879\u76ee\u8d1f\u8d23\u4ebaID"},status:{type:"string",description:"\u9879\u76ee\u72b6\u6001ID"},statusCategory:{type:"string",description:"\u9879\u76ee\u72b6\u6001\u5206\u7c7b"},stickToTop:{type:"boolean",description:"\u662f\u5426\u7f6e\u9876"},isArchive:{type:"boolean",description:"\u662f\u5426\u5f52\u6863"},archiveTime:{type:"integer",description:"\u5f52\u6863\u65f6\u95f4"},archiveUser:{type:"string",description:"\u5f52\u6863\u4ebaID"}}}},title:"AddProjectResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u9879\u76ee","read:project:project":"\u83b7\u53d6\u9879\u76ee\u4fe1\u606f"}}}}},jsonRequestBodyExample:{name:"string",templateID:"project-t1",membersID:["string"]},info:{title:"Project",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u9879\u76ee\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u9879\u76ee\u3002\n"},postman:{name:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",description:{content:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},y=void 0,u={unversionedId:"openapi/api/project/create-a-new-project",id:"version-1.x/openapi/api/project/create-a-new-project",title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",description:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/openapi/api/project/create-a-new-project.api.mdx",sourceDirName:"openapi/api/project",slug:"/openapi/api/project/create-a-new-project",permalink:"/zh-CN/docs/openapi/api/project/create-a-new-project",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{id:"create-a-new-project",title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",description:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",sidebar_label:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create-a-new-project",description:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",security:[{oauth2:["write:project:project"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{required:["membersID","name"],type:"object",properties:{name:{maxLength:128,minLength:1,type:"string",description:"\u9879\u76ee\u540d\u79f0"},templateID:{type:"string",description:"\u9879\u76ee\u6a21\u7248ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"\u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"\u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"\u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"\u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"\u770b\u677f\u9879\u76ee\u6a21\u677f"}},membersID:{type:"array",description:"\u9879\u76ee\u6210\u5458ID",items:{type:"string"}}},title:"AddProjectRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"\u9879\u76eeID"},name:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},owner:{type:"string",description:"\u9879\u76ee\u8d1f\u8d23\u4ebaID"},status:{type:"string",description:"\u9879\u76ee\u72b6\u6001ID"},statusCategory:{type:"string",description:"\u9879\u76ee\u72b6\u6001\u5206\u7c7b"},stickToTop:{type:"boolean",description:"\u662f\u5426\u7f6e\u9876"},isArchive:{type:"boolean",description:"\u662f\u5426\u5f52\u6863"},archiveTime:{type:"integer",description:"\u5f52\u6863\u65f6\u95f4"},archiveUser:{type:"string",description:"\u5f52\u6863\u4ebaID"}}}},title:"AddProjectResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u9879\u76ee","read:project:project":"\u83b7\u53d6\u9879\u76ee\u4fe1\u606f"}}}}},jsonRequestBodyExample:{name:"string",templateID:"project-t1",membersID:["string"]},info:{title:"Project",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u9879\u76ee\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u9879\u76ee\u3002\n"},postman:{name:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",description:{content:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/openapi/api/project/project"},next:{title:"\u5220\u9664\u9879\u76ee",permalink:"/zh-CN/docs/openapi/api/project/delete-a-project"}},g={},h=[{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",level:2}],k={toc:h};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 128 characters`",schema:{maxLength:128,minLength:1,type:"string",description:"\u9879\u76ee\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"templateID",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`project-t1`, `project-t2`, `project-t4`, `project-t5`, `project-t6`, `comagile`, `comwater`]",schema:{type:"string",description:"\u9879\u76ee\u6a21\u7248ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"\u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"\u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"\u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"\u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"\u770b\u677f\u9879\u76ee\u6a21\u677f"}},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"membersID",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"\u9879\u76ee\u6210\u5458ID",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76eeID"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76ee\u8d1f\u8d23\u4ebaID"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76ee\u72b6\u6001ID"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"statusCategory",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76ee\u72b6\u6001\u5206\u7c7b"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"stickToTop",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u7f6e\u9876"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"isArchive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u5f52\u6863"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"archiveTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5f52\u6863\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"archiveUser",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5f52\u6863\u4ebaID"},mdxType:"SchemaItem"}))))))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "id": "string",\n    "name": "string",\n    "owner": "string",\n    "status": "string",\n    "statusCategory": "string",\n    "stickToTop": true,\n    "isArchive": true,\n    "archiveTime": 0,\n    "archiveUser": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);