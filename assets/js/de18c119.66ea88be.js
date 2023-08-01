"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[50932],{83319:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>T,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var i=s(87462),a=(s(67294),s(3905)),r=s(70603),o=s(48147),n=s(61045),p=s(86776),l=s(69128),m=s(83329),d=(s(3186),s(18679));const c={id:"upload-a-file-to-the-issue",title:"Upload a file to the issue",description:"Upload a file to the issue",sidebar_label:"Upload a file to the issue",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"upload-a-file-to-the-issue",description:"Upload a file to the issue",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}}],requestBody:{content:{"multipart/form-data":{schema:{required:["file","name"],properties:{name:{maxLength:64,type:"string",description:"The name of file"},description:{maxLength:64,type:"string",description:"The description of file"},file:{type:"string",description:"The file to upload",format:"binary"}}}}},required:!0},responses:{200:{description:"Request is successful",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"The file ID"},name:{type:"string",description:"The name of file"},hash:{type:"string",description:"The hash of file"},mime:{type:"string",description:"The mime of file"},sizeByte:{type:"integer",description:"The size of file with byte"},url:{type:"string",description:"The url of file"},version:{type:"integer",description:"The version of file"}}}},title:"AddIssueAttachmentResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"post",path:"/project/team/{teamID}/issues/{issueID}/attachments",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"Access issue attachment information","write:project:issue-attachment":"Add, edit, delete issue attachment"}}}}},info:{title:"Issue attachments",version:"1.0",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.\n"},postman:{name:"Upload a file to the issue",description:{content:"Upload a file to the issue",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/issue-attachments/upload-a-file-to-the-issue",id:"version-1.x/openapi/api/issue-attachments/upload-a-file-to-the-issue",title:"Upload a file to the issue",description:"Upload a file to the issue",source:"@site/versioned_docs/version-1.x/openapi/api/issue-attachments/upload-a-file-to-the-issue.api.mdx",sourceDirName:"openapi/api/issue-attachments",slug:"/openapi/api/issue-attachments/upload-a-file-to-the-issue",permalink:"/open-docs/docs/openapi/api/issue-attachments/upload-a-file-to-the-issue",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"upload-a-file-to-the-issue",title:"Upload a file to the issue",description:"Upload a file to the issue",sidebar_label:"Upload a file to the issue",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"upload-a-file-to-the-issue",description:"Upload a file to the issue",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}}],requestBody:{content:{"multipart/form-data":{schema:{required:["file","name"],properties:{name:{maxLength:64,type:"string",description:"The name of file"},description:{maxLength:64,type:"string",description:"The description of file"},file:{type:"string",description:"The file to upload",format:"binary"}}}}},required:!0},responses:{200:{description:"Request is successful",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"},data:{type:"object",properties:{id:{type:"string",description:"The file ID"},name:{type:"string",description:"The name of file"},hash:{type:"string",description:"The hash of file"},mime:{type:"string",description:"The mime of file"},sizeByte:{type:"integer",description:"The size of file with byte"},url:{type:"string",description:"The url of file"},version:{type:"integer",description:"The version of file"}}}},title:"AddIssueAttachmentResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"post",path:"/project/team/{teamID}/issues/{issueID}/attachments",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"Access issue attachment information","write:project:issue-attachment":"Add, edit, delete issue attachment"}}}}},info:{title:"Issue attachments",version:"1.0",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.\n"},postman:{name:"Upload a file to the issue",description:{content:"Upload a file to the issue",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/version-1.x/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},sidebar:"openapi",previous:{title:"Update a issue attachment",permalink:"/open-docs/docs/openapi/api/issue-attachments/update-a-issue-attachment"},next:{title:"Introduction",permalink:"/open-docs/docs/openapi/api/issue-fields/issue-fields"}},y={},f=[{value:"Upload a file to the issue",id:"upload-a-file-to-the-issue",level:2}],g={toc:f};function T(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"upload-a-file-to-the-issue"},"Upload a file to the issue"),(0,a.kt)("p",null,"Upload a file to the issue"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",schema:{maxLength:64,type:"string",description:"The name of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",schema:{maxLength:64,type:"string",description:"The description of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"file",required:!0,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",description:"The file to upload",format:"binary"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request is successful")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The file ID"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"hash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The hash of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"mime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The mime of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"sizeByte",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The size of file with byte"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The url of file"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The version of file"},mdxType:"SchemaItem"}))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "id": "string",\n    "name": "string",\n    "hash": "string",\n    "mime": "string",\n    "sizeByte": 0,\n    "url": "string",\n    "version": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the authentication credentials are incorrect or missing")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns if the scope check fails")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the resource object was not found")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);