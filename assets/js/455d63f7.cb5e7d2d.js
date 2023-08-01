"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[32913],{15857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>T,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var s=r(87462),a=(r(67294),r(3905)),o=r(70603),i=r(48147),n=r(61045),p=r(86776),c=r(69128),m=r(83329),l=(r(3186),r(18679));const d={id:"create-a-new-project",title:"Create a new project",description:"Create a new project",sidebar_label:"Create a new project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create-a-new-project",description:"Create a new project",security:[{oauth2:["write:project:project"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}}],requestBody:{description:"Create project request param",content:{"application/json":{schema:{required:["membersID","name"],type:"object",properties:{name:{maxLength:128,minLength:1,type:"string",description:"The name of project"},templateID:{type:"string",description:"Project template ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"Agile project management \u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"General task management \u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"Waterfall project planning \u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"Agile project management_v2 \u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"Kanban task management \u770b\u677f\u9879\u76ee\u6a21\u677f"}},membersID:{type:"array",description:"Project member ID",items:{type:"string"}}},title:"AddProjectRequest"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"The project ID"},name:{type:"string",description:"The project name"},owner:{type:"string",description:"The project owner ID"},status:{type:"string",description:"The ID of project status"},statusCategory:{type:"string",description:"The category of project status"},stickToTop:{type:"boolean",description:"Whether the project is at the top"},isArchive:{type:"boolean",description:"Archived project or not"},archiveTime:{type:"integer",description:"Time when the project was archived"},archiveUser:{type:"string",description:"The ID of people who archived project"}}}},title:"AddProjectResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"Add, edit, delete project","read:project:project":"Access project information"}}}}},jsonRequestBodyExample:{name:"string",templateID:"project-t1",membersID:["string"]},info:{title:"Project",version:"1.0",description:"This resource represents projects. Use it to get, create, update, and delete projects.\n"},postman:{name:"Create a new project",description:{content:"Create a new project",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},h=void 0,u={unversionedId:"openapi/api/project/create-a-new-project",id:"version-1.x/openapi/api/project/create-a-new-project",title:"Create a new project",description:"Create a new project",source:"@site/versioned_docs/version-1.x/openapi/api/project/create-a-new-project.api.mdx",sourceDirName:"openapi/api/project",slug:"/openapi/api/project/create-a-new-project",permalink:"/open-docs/docs/openapi/api/project/create-a-new-project",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"create-a-new-project",title:"Create a new project",description:"Create a new project",sidebar_label:"Create a new project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"create-a-new-project",description:"Create a new project",security:[{oauth2:["write:project:project"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}}],requestBody:{description:"Create project request param",content:{"application/json":{schema:{required:["membersID","name"],type:"object",properties:{name:{maxLength:128,minLength:1,type:"string",description:"The name of project"},templateID:{type:"string",description:"Project template ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"Agile project management \u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"General task management \u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"Waterfall project planning \u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"Agile project management_v2 \u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"Kanban task management \u770b\u677f\u9879\u76ee\u6a21\u677f"}},membersID:{type:"array",description:"Project member ID",items:{type:"string"}}},title:"AddProjectRequest"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"The project ID"},name:{type:"string",description:"The project name"},owner:{type:"string",description:"The project owner ID"},status:{type:"string",description:"The ID of project status"},statusCategory:{type:"string",description:"The category of project status"},stickToTop:{type:"boolean",description:"Whether the project is at the top"},isArchive:{type:"boolean",description:"Archived project or not"},archiveTime:{type:"integer",description:"Time when the project was archived"},archiveUser:{type:"string",description:"The ID of people who archived project"}}}},title:"AddProjectResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"Add, edit, delete project","read:project:project":"Access project information"}}}}},jsonRequestBodyExample:{name:"string",templateID:"project-t1",membersID:["string"]},info:{title:"Project",version:"1.0",description:"This resource represents projects. Use it to get, create, update, and delete projects.\n"},postman:{name:"Create a new project",description:{content:"Create a new project",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},sidebar:"openapi",previous:{title:"Introduction",permalink:"/open-docs/docs/openapi/api/project/project"},next:{title:"Delete a project",permalink:"/open-docs/docs/openapi/api/project/delete-a-project"}},g={},y=[{value:"Create a new project",id:"create-a-new-project",level:2}],j={toc:y};function T(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,a.kt)("p",null,"Create a new project"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(i.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"Create project request param"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 128 characters`",schema:{maxLength:128,minLength:1,type:"string",description:"The name of project"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"templateID",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`project-t1`, `project-t2`, `project-t4`, `project-t5`, `project-t6`, `comagile`, `comwater`]",schema:{type:"string",description:"Project template ID",enum:["project-t1","project-t2","project-t4","project-t5","project-t6","comagile","comwater"],"x-enum-descriptions":{"project-t1":"Agile project management \u654f\u6377\u9879\u76ee\u7ba1\u7406","project-t2":"General task management \u901a\u7528\u4efb\u52a1\u7ba1\u7406","project-t4":"Waterfall project planning \u7011\u5e03\u9879\u76ee\u89c4\u5212","project-t5":"Agile project management_v2 \u654f\u6377\u9879\u76ee\u7ba1\u7406_v2","project-t6":"Kanban task management \u770b\u677f\u9879\u76ee\u6a21\u677f"}},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"membersID",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"Project member ID",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request is successful.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project ID"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project name"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project owner ID"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of project status"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"statusCategory",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The category of project status"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"stickToTop",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the project is at the top"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"isArchive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Archived project or not"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"archiveTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Time when the project was archived"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"archiveUser",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of people who archived project"},mdxType:"SchemaItem"}))))))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "id": "string",\n    "name": "string",\n    "owner": "string",\n    "status": "string",\n    "statusCategory": "string",\n    "stickToTop": true,\n    "isArchive": true,\n    "archiveTime": 0,\n    "archiveUser": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns if the scope check fails.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the resource object was not found.")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);