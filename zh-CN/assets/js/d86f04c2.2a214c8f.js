"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[57282],{71180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),n=a(70603),r=a(48147),p=a(61045),o=a(86776),m=a(69128),l=a(83329),c=(a(3186),a(18679));const d={id:"update-a-issue-attachment",title:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",description:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",sidebar_label:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"update-a-issue-attachment",description:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},{name:"attachmentID",in:"path",description:"\u6587\u4ef6ID",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{name:{maxLength:64,type:"string",description:"\u6587\u4ef6\u540d\u79f0"},description:{maxLength:64,type:"string",description:"\u6587\u4ef6\u63cf\u8ff0"}},title:"UpdateIssueAttachmentRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"}},title:"UpdateIssueAttachmentResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"put",path:"/project/team/{teamID}/issues/{issueID}/attachments/{attachmentID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"\u83b7\u53d6\u5de5\u4f5c\u9879\u9644\u4ef6\u4fe1\u606f","write:project:issue-attachment":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u9644\u4ef6"}}}}},jsonRequestBodyExample:{name:"string",description:"string"},info:{title:"Issue attachments",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u9644\u4ef6\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u5de5\u4f5c\u9879\u9644\u4ef6\u3002\n"},postman:{name:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",description:{content:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments",":attachmentID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"},{disabled:!1,description:{content:"(Required) \u6587\u4ef6ID",type:"text/plain"},type:"any",value:"",key:"attachmentID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"docs/current/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/issue-attachments/update-a-issue-attachment",id:"openapi/api/issue-attachments/update-a-issue-attachment",title:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",description:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-attachments/update-a-issue-attachment.api.mdx",sourceDirName:"openapi/api/issue-attachments",slug:"/openapi/api/issue-attachments/update-a-issue-attachment",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-attachments/update-a-issue-attachment",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"update-a-issue-attachment",title:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",description:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",sidebar_label:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"update-a-issue-attachment",description:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",security:[{oauth2:["write:project:issue-attachment"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},{name:"attachmentID",in:"path",description:"\u6587\u4ef6ID",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{name:{maxLength:64,type:"string",description:"\u6587\u4ef6\u540d\u79f0"},description:{maxLength:64,type:"string",description:"\u6587\u4ef6\u63cf\u8ff0"}},title:"UpdateIssueAttachmentRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string"}},title:"UpdateIssueAttachmentResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"put",path:"/project/team/{teamID}/issues/{issueID}/attachments/{attachmentID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-attachment":"\u83b7\u53d6\u5de5\u4f5c\u9879\u9644\u4ef6\u4fe1\u606f","write:project:issue-attachment":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u9644\u4ef6"}}}}},jsonRequestBodyExample:{name:"string",description:"string"},info:{title:"Issue attachments",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u9644\u4ef6\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u5de5\u4f5c\u9879\u9644\u4ef6\u3002\n"},postman:{name:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",description:{content:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","attachments",":attachmentID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"},{disabled:!1,description:{content:"(Required) \u6587\u4ef6ID",type:"text/plain"},type:"any",value:"",key:"attachmentID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"docs/current/openapi/api/issue-attachments/issue-attachments",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u9644\u4ef6\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-attachments/get-attachment-list-by-issue-id"},next:{title:"\u4e0a\u4f20\u6587\u4ef6\u5230\u5de5\u4f5c\u9879",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-attachments/upload-a-file-to-the-issue"}},y={},g=[{value:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",id:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6",level:2}],k={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6"},"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6"),(0,i.kt)("p",null,"\u66f4\u65b0\u5de5\u4f5c\u9879\u9644\u4ef6"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"attachmentID",in:"path",description:"\u6587\u4ef6ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",schema:{maxLength:64,type:"string",description:"\u6587\u4ef6\u540d\u79f0"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",schema:{maxLength:64,type:"string",description:"\u6587\u4ef6\u63cf\u8ff0"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u9519\u8bef")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);