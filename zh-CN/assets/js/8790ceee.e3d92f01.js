"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[31945],{27313:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var i=s(87462),a=(s(67294),s(3905)),r=s(70603),o=s(48147),n=s(61045),p=s(86776),l=s(69128),m=s(83329),c=(s(3186),s(18679));const d={id:"get-a-list-of-issue-workflows",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-workflows",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",security:[{oauth2:["read:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},data:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"\u5de5\u4f5c\u6d41\u540d\u79f0"},id:{type:"string",description:"\u5de5\u4f5c\u6d41ID"},start:{type:"string",description:"\u5de5\u4f5c\u6d41\u8d77\u59cb\u72b6\u6001ID"},end:{type:"string",description:"\u5de5\u4f5c\u6d41\u7ed3\u675f\u72b6\u6001ID"}},title:"ListItem"}}},title:"AllSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues/{issueID}/executable-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41","write:project:issue-workflow":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"}}}}},info:{title:"Issue workflows",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u6267\u884c\u5de5\u4f5c\u6d41\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","executable-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/api/issue-workflows/get-a-list-of-issue-workflows",id:"openapi/api/issue-workflows/get-a-list-of-issue-workflows",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-workflows/get-a-list-of-issue-workflows.api.mdx",sourceDirName:"openapi/api/issue-workflows",slug:"/openapi/api/issue-workflows/get-a-list-of-issue-workflows",permalink:"/zh-CN/docs/next/openapi/api/issue-workflows/get-a-list-of-issue-workflows",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{id:"get-a-list-of-issue-workflows",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-workflows",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",security:[{oauth2:["read:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},data:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"\u5de5\u4f5c\u6d41\u540d\u79f0"},id:{type:"string",description:"\u5de5\u4f5c\u6d41ID"},start:{type:"string",description:"\u5de5\u4f5c\u6d41\u8d77\u59cb\u72b6\u6001ID"},end:{type:"string",description:"\u5de5\u4f5c\u6d41\u7ed3\u675f\u72b6\u6001ID"}},title:"ListItem"}}},title:"AllSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues/{issueID}/executable-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41","write:project:issue-workflow":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"}}}}},info:{title:"Issue workflows",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u6267\u884c\u5de5\u4f5c\u6d41\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","executable-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",permalink:"/zh-CN/docs/next/openapi/api/issue-workflows/execute-workflow-for-issue"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-CN/docs/next/openapi/api/project/project"}},g={},h=[{value:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",level:2}],k={toc:h};function f(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868"},"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868"),(0,a.kt)("p",null,"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u6d41\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u6d41ID"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"start",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u6d41\u8d77\u59cb\u72b6\u6001ID"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"end",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u6d41\u7ed3\u675f\u72b6\u6001ID"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": [\n    {\n      "name": "string",\n      "id": "string",\n      "start": "string",\n      "end": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);