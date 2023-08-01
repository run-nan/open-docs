"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[46500],{62608:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var a=s(87462),r=(s(67294),s(3905)),i=s(70603),n=s(48147),o=s(61045),p=s(86776),l=s(69128),m=s(83329),c=(s(3186),s(18679));const d={id:"delete-a-issue-attachment",title:"Delete a issue attachment",description:"Delete a issue attachment",sidebar_label:"Delete a issue attachment",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"delete-a-issue-attachment",description:"Delete a issue attachment",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}},{name:"attachmentID",in:"path",description:"The attachment ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request is successful",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"}},title:"DeleteSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"delete",path:"/project/team/{teamID}/issues/{issueID}/attachments/{attachmentID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"Access issue attachment information","write:project:issue-attachment":"Add, edit, delete issue attachment"}}}}},info:{title:"Issue attachments",version:"1.0",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.\n"},postman:{name:"Delete a issue attachment",description:{content:"Delete a issue attachment",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments",":attachmentID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"},{disabled:!1,description:{content:"(Required) The attachment ID",type:"text/plain"},type:"any",value:"",key:"attachmentID"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/version-1.x/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/issue-attachments/delete-a-issue-attachment",id:"version-1.x/openapi/api/issue-attachments/delete-a-issue-attachment",title:"Delete a issue attachment",description:"Delete a issue attachment",source:"@site/versioned_docs/version-1.x/openapi/api/issue-attachments/delete-a-issue-attachment.api.mdx",sourceDirName:"openapi/api/issue-attachments",slug:"/openapi/api/issue-attachments/delete-a-issue-attachment",permalink:"/open-docs/docs/openapi/api/issue-attachments/delete-a-issue-attachment",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"delete-a-issue-attachment",title:"Delete a issue attachment",description:"Delete a issue attachment",sidebar_label:"Delete a issue attachment",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"delete-a-issue-attachment",description:"Delete a issue attachment",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}},{name:"attachmentID",in:"path",description:"The attachment ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request is successful",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"}},title:"DeleteSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"delete",path:"/project/team/{teamID}/issues/{issueID}/attachments/{attachmentID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"Access issue attachment information","write:project:issue-attachment":"Add, edit, delete issue attachment"}}}}},info:{title:"Issue attachments",version:"1.0",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.\n"},postman:{name:"Delete a issue attachment",description:{content:"Delete a issue attachment",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments",":attachmentID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"},{disabled:!1,description:{content:"(Required) The attachment ID",type:"text/plain"},type:"any",value:"",key:"attachmentID"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/version-1.x/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},sidebar:"openapi",previous:{title:"Introduction",permalink:"/open-docs/docs/openapi/api/issue-attachments/issue-attachments"},next:{title:"Get attachment list by issueID",permalink:"/open-docs/docs/openapi/api/issue-attachments/get-attachment-list-by-issue-id"}},y={},g=[{value:"Delete a issue attachment",id:"delete-a-issue-attachment",level:2}],T={toc:g};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},T,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete-a-issue-attachment"},"Delete a issue attachment"),(0,r.kt)("p",null,"Delete a issue attachment"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"attachmentID",in:"path",description:"The attachment ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request is successful")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the authentication credentials are incorrect or missing")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the resource object was not found")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);