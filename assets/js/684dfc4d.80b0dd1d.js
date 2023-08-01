"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[41445],{85960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=r(87462),i=(r(67294),r(3905)),a=r(70603),o=r(48147),n=r(61045),p=r(86776),c=r(69128),l=r(83329),m=(r(3186),r(18679));const d={id:"get-team-project-list",title:"Get team project list",description:"Get team project list",sidebar_label:"Get team project list",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-team-project-list",description:"Get team project list",security:[{oauth2:["read:project:project"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of data to return",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The project ID"},name:{type:"string",description:"The project Name"},createTime:{type:"integer",description:"The createTime of project"},owner:{type:"object",properties:{id:{type:"string",description:"The project owner ID"},name:{type:"string",description:"The project owner name"}}},creator:{type:"object",properties:{id:{type:"string",description:"The project creator ID"},name:{type:"string",description:"The project creator name"}}},status:{type:"object",properties:{id:{type:"string",description:"The ID of project status"},name:{type:"string",description:"The name of project status"},category:{type:"string",description:"The category of project status"}}},statusCategory:{type:"string",description:"The category of project status"},stickToTop:{type:"boolean",description:"Whether the project is at the top"},isArchive:{type:"boolean",description:"Archived project or not"},archiveUser:{type:"object",properties:{id:{type:"string",description:"The ID of people who archived project"},name:{type:"string",description:"The name of people who archived project"}}},archiveTime:{type:"integer",description:"Time when the project was archived"},plannedStartDate:{type:"integer",description:"The date of project planned to start,sample as 2023-05-06"},plannedEndDate:{type:"integer",description:"The date of project planned to end,sample as 2023-05-06"}},title:"ProjectDetail"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"ListProjectSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"Add, edit, delete project","read:project:project":"Access project information"}}}}},info:{title:"Project",version:"1.0",description:"This resource represents projects. Use it to get, create, update, and delete projects.\n"},postman:{name:"Get team project list",description:{content:"Get team project list",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of data to return",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},h=void 0,u={unversionedId:"openapi/api/project/get-team-project-list",id:"version-1.x/openapi/api/project/get-team-project-list",title:"Get team project list",description:"Get team project list",source:"@site/versioned_docs/version-1.x/openapi/api/project/get-team-project-list.api.mdx",sourceDirName:"openapi/api/project",slug:"/openapi/api/project/get-team-project-list",permalink:"/open-docs/docs/openapi/api/project/get-team-project-list",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"get-team-project-list",title:"Get team project list",description:"Get team project list",sidebar_label:"Get team project list",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-team-project-list",description:"Get team project list",security:[{oauth2:["read:project:project"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of data to return",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The project ID"},name:{type:"string",description:"The project Name"},createTime:{type:"integer",description:"The createTime of project"},owner:{type:"object",properties:{id:{type:"string",description:"The project owner ID"},name:{type:"string",description:"The project owner name"}}},creator:{type:"object",properties:{id:{type:"string",description:"The project creator ID"},name:{type:"string",description:"The project creator name"}}},status:{type:"object",properties:{id:{type:"string",description:"The ID of project status"},name:{type:"string",description:"The name of project status"},category:{type:"string",description:"The category of project status"}}},statusCategory:{type:"string",description:"The category of project status"},stickToTop:{type:"boolean",description:"Whether the project is at the top"},isArchive:{type:"boolean",description:"Archived project or not"},archiveUser:{type:"object",properties:{id:{type:"string",description:"The ID of people who archived project"},name:{type:"string",description:"The name of people who archived project"}}},archiveTime:{type:"integer",description:"Time when the project was archived"},plannedStartDate:{type:"integer",description:"The date of project planned to start,sample as 2023-05-06"},plannedEndDate:{type:"integer",description:"The date of project planned to end,sample as 2023-05-06"}},title:"ProjectDetail"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"ListProjectSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/projects",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:project":"Add, edit, delete project","read:project:project":"Access project information"}}}}},info:{title:"Project",version:"1.0",description:"This resource represents projects. Use it to get, create, update, and delete projects.\n"},postman:{name:"Get team project list",description:{content:"Get team project list",type:"text/plain"},url:{path:["project","team",":teamID","projects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of data to return",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/project/project",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get project detail by project ID",permalink:"/open-docs/docs/openapi/api/project/get-project-detail-by-project-id"},next:{title:"Update project by project ID",permalink:"/open-docs/docs/openapi/api/project/update-project-by-project-id"}},y={},g=[{value:"Get team project list",id:"get-team-project-list",level:2}],T={toc:g};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-team-project-list"},"Get team project list"),(0,i.kt)("p",null,"Get team project list"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of data to return",schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request is successful.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"list"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project ID"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project Name"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The createTime of project"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"owner"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project owner ID"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project owner name"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"creator"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project creator ID"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The project creator name"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"status"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of project status"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of project status"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The category of project status"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"statusCategory",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The category of project status"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"stickToTop",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the project is at the top"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"isArchive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Archived project or not"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"archiveUser"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of people who archived project"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of people who archived project"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"archiveTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Time when the project was archived"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"plannedStartDate",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The date of project planned to start,sample as 2023-05-06"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"plannedEndDate",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The date of project planned to end,sample as 2023-05-06"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pageInfo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The number returned this time."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"endCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"endPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The last position on this page."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"hasNextPage",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Is there a next page."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"startCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"startPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The first position on this page."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"totalCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."},mdxType:"SchemaItem"})))))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "list": [\n      {\n        "id": "string",\n        "name": "string",\n        "createTime": 0,\n        "owner": {\n          "id": "string",\n          "name": "string"\n        },\n        "creator": {\n          "id": "string",\n          "name": "string"\n        },\n        "status": {\n          "id": "string",\n          "name": "string",\n          "category": "string"\n        },\n        "statusCategory": "string",\n        "stickToTop": true,\n        "isArchive": true,\n        "archiveUser": {\n          "id": "string",\n          "name": "string"\n        },\n        "archiveTime": 0,\n        "plannedStartDate": 0,\n        "plannedEndDate": 0\n      }\n    ],\n    "pageInfo": {\n      "count": 0,\n      "endCursor": "string",\n      "endPos": 0,\n      "hasNextPage": true,\n      "startCursor": "string",\n      "startPos": 0,\n      "totalCount": 0\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns if the scope check fails.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returned if the resource object was not found.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);