"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[62066],{59194:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var i=s(87462),r=(s(67294),s(3905)),o=s(70603),a=s(48147),n=s(61045),l=s(86776),p=s(69128),m=s(83329),c=(s(3186),s(18679));const d={id:"execute-workflow-for-issue",title:"Execute workflow for issue",description:"Execute workflow for issue.",sidebar_label:"Execute workflow for issue",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"execute-workflow-for-issue",description:"Execute workflow for issue.",security:[{oauth2:["write:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}}],requestBody:{description:"The issue workflow information to update",content:{"application/json":{schema:{required:["id"],type:"object",properties:{id:{maxLength:8,minLength:1,type:"string",description:"The id of the issue workflow."},fieldValues:{type:"array",description:"The fieldValues of the issue field.",items:{required:["fieldID","type","value"],type:"object",properties:{fieldID:{minLength:8,type:"string",description:"The ID of fieldValue."},type:{minimum:1,type:"integer",description:"The type of fieldValue."},value:{type:"object",description:"The value of fieldValue."}},title:"FieldValues"}},resources:{type:"array",description:"Attachment ids to be associated, separated by commas.",items:{type:"object",properties:{id:{type:"string"}}}},comment:{type:"array",description:"The comment of the issue.",items:{required:["contentType","text"],type:"object",properties:{contentType:{minimum:1,type:"integer",description:"The contentType of comment."},text:{type:"string",description:"The text of comment."}},title:"Comment"}},timeEstimated:{type:"object",description:"The timeEstimated of the issue.",properties:{hours:{type:"integer"}}},timeSpent:{type:"array",description:"The timeSpent of the issue.",items:{required:["hours","owner","startTime"],type:"object",properties:{owner:{type:"string",description:"The owner of timeSpent."},startTime:{type:"integer",description:"The startTime of timeSpent."},hours:{type:"integer",description:"The hours of timeSpent."},description:{type:"string",description:"The description of timeSpent."}},title:"TimeSpent"}}},title:"ExecuteWorkflowRequest"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."}},title:"ExecuteWorkflowResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/issues/{issueID}/execute-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"Access issue workflow","write:project:issue-workflow":"Add, edit, delete issue workflow"}}}}},jsonRequestBodyExample:{id:"string",fieldValues:[{fieldID:"string",type:0,value:{}}],resources:[{id:"string"}],comment:[{contentType:0,text:"string"}],timeEstimated:{hours:0},timeSpent:[{owner:"string",startTime:0,hours:0,description:"string"}]},info:{title:"Issue workflows",version:"1.0",description:"This resource represents issue workflows. Use it to get, execute issue workflows.\n"},postman:{name:"Execute workflow for issue",description:{content:"Execute workflow for issue.",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","execute-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/issue-workflows/execute-workflow-for-issue",id:"openapi/api/issue-workflows/execute-workflow-for-issue",title:"Execute workflow for issue",description:"Execute workflow for issue.",source:"@site/docs/openapi/api/issue-workflows/execute-workflow-for-issue.api.mdx",sourceDirName:"openapi/api/issue-workflows",slug:"/openapi/api/issue-workflows/execute-workflow-for-issue",permalink:"/open-docs/docs/next/openapi/api/issue-workflows/execute-workflow-for-issue",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"execute-workflow-for-issue",title:"Execute workflow for issue",description:"Execute workflow for issue.",sidebar_label:"Execute workflow for issue",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"execute-workflow-for-issue",description:"Execute workflow for issue.",security:[{oauth2:["write:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}}],requestBody:{description:"The issue workflow information to update",content:{"application/json":{schema:{required:["id"],type:"object",properties:{id:{maxLength:8,minLength:1,type:"string",description:"The id of the issue workflow."},fieldValues:{type:"array",description:"The fieldValues of the issue field.",items:{required:["fieldID","type","value"],type:"object",properties:{fieldID:{minLength:8,type:"string",description:"The ID of fieldValue."},type:{minimum:1,type:"integer",description:"The type of fieldValue."},value:{type:"object",description:"The value of fieldValue."}},title:"FieldValues"}},resources:{type:"array",description:"Attachment ids to be associated, separated by commas.",items:{type:"object",properties:{id:{type:"string"}}}},comment:{type:"array",description:"The comment of the issue.",items:{required:["contentType","text"],type:"object",properties:{contentType:{minimum:1,type:"integer",description:"The contentType of comment."},text:{type:"string",description:"The text of comment."}},title:"Comment"}},timeEstimated:{type:"object",description:"The timeEstimated of the issue.",properties:{hours:{type:"integer"}}},timeSpent:{type:"array",description:"The timeSpent of the issue.",items:{required:["hours","owner","startTime"],type:"object",properties:{owner:{type:"string",description:"The owner of timeSpent."},startTime:{type:"integer",description:"The startTime of timeSpent."},hours:{type:"integer",description:"The hours of timeSpent."},description:{type:"string",description:"The description of timeSpent."}},title:"TimeSpent"}}},title:"ExecuteWorkflowRequest"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."}},title:"ExecuteWorkflowResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/issues/{issueID}/execute-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"Access issue workflow","write:project:issue-workflow":"Add, edit, delete issue workflow"}}}}},jsonRequestBodyExample:{id:"string",fieldValues:[{fieldID:"string",type:0,value:{}}],resources:[{id:"string"}],comment:[{contentType:0,text:"string"}],timeEstimated:{hours:0},timeSpent:[{owner:"string",startTime:0,hours:0,description:"string"}]},info:{title:"Issue workflows",version:"1.0",description:"This resource represents issue workflows. Use it to get, execute issue workflows.\n"},postman:{name:"Execute workflow for issue",description:{content:"Execute workflow for issue.",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","execute-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The issue ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},sidebar:"openapi",previous:{title:"Introduction",permalink:"/open-docs/docs/next/openapi/api/issue-workflows/issue-workflows"},next:{title:"Get a list of issue workflows",permalink:"/open-docs/docs/next/openapi/api/issue-workflows/get-a-list-of-issue-workflows"}},y={},f=[{value:"Execute workflow for issue",id:"execute-workflow-for-issue",level:2}],g={toc:f};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"execute-workflow-for-issue"},"Execute workflow for issue"),(0,r.kt)("p",null,"Execute workflow for issue."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"The issue ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(a.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"The issue workflow information to update"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 8 characters`",schema:{maxLength:8,minLength:1,type:"string",description:"The id of the issue workflow."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"fieldValues"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The fieldValues of the issue field.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"fieldID",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 8 characters`",schema:{minLength:8,type:"string",description:"The ID of fieldValue."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{minimum:1,type:"integer",description:"The type of fieldValue."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"value",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",description:"The value of fieldValue."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"resources"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Attachment ids to be associated, separated by commas.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"comment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The comment of the issue.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"contentType",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{minimum:1,type:"integer",description:"The contentType of comment."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The text of comment."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"timeEstimated"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The timeEstimated of the issue.")),(0,r.kt)(p.Z,{collapsible:!1,name:"hours",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"timeSpent"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The timeSpent of the issue.")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The owner of timeSpent."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"startTime",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The startTime of timeSpent."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"hours",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The hours of timeSpent."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The description of timeSpent."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request is successful.")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails.")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails.")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error.")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);