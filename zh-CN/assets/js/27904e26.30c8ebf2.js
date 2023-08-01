"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[47338],{73347:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var s=i(87462),r=(i(67294),i(3905)),a=i(70603),o=i(48147),n=i(61045),p=i(86776),l=i(69128),m=i(83329),c=(i(3186),i(18679));const d={id:"execute-workflow-for-issue",title:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",description:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",sidebar_label:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"execute-workflow-for-issue",description:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",security:[{oauth2:["write:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],requestBody:{description:"\u8981\u66f4\u65b0\u7684\u5de5\u4f5c\u6d41\u4fe1\u606f",content:{"application/json":{schema:{required:["id"],type:"object",properties:{id:{maxLength:8,minLength:1,type:"string",description:"\u5de5\u4f5c\u6d41ID"},fieldValues:{type:"array",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u4fe1\u606f",items:{required:["fieldID","type","value"],type:"object",properties:{fieldID:{minLength:8,type:"string",description:"\u5de5\u4f5c\u9879\u5c5e\u6027ID"},type:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u7c7b\u578b"},value:{type:"object",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u503c"}},title:"FieldValues"}},resources:{type:"array",description:"\u8981\u5173\u8054\u7684\u9644\u4ef6ID,\u4ee5\u9017\u53f7,\u9694\u5f00",items:{type:"object",properties:{id:{type:"string"}}}},comment:{type:"array",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba",items:{required:["contentType","text"],type:"object",properties:{contentType:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7c7b\u578b"},text:{type:"string",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7684\u4fe1\u606f"}},title:"Comment"}},timeEstimatedHour:{type:"object",description:"\u5de5\u4f5c\u9879\u9884\u4f30\u65f6\u95f4",properties:{hours:{type:"integer"}}},timeSpentHour:{type:"array",description:"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6",items:{required:["hours","owner","startTime"],type:"object",properties:{owner:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u8d1f\u8d23\u4eba"},startTime:{type:"integer",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u5f00\u59cb\u65f6\u95f4"},hours:{type:"integer",description:"\u767b\u8bb0\u51e0\u4e2a\u5c0f\u65f6\uff0c\u5355\u4f4d\uff08h\uff09"},description:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u63cf\u8ff0"}},title:"TimeSpent"}}},title:"ExecuteWorkflowRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"}},title:"ExecuteWorkflowResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/issues/{issueID}/execute-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41","write:project:issue-workflow":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"}}}}},jsonRequestBodyExample:{id:"string",fieldValues:[{fieldID:"string",type:0,value:{}}],resources:[{id:"string"}],comment:[{contentType:0,text:"string"}],timeEstimatedHour:{hours:0},timeSpentHour:[{owner:"string",startTime:0,hours:0,description:"string"}]},info:{title:"Issue workflows",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u6267\u884c\u5de5\u4f5c\u6d41\u3002\n"},postman:{name:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",description:{content:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","execute-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/current/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/api/issue-workflows/execute-workflow-for-issue",id:"openapi/api/issue-workflows/execute-workflow-for-issue",title:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",description:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-workflows/execute-workflow-for-issue.api.mdx",sourceDirName:"openapi/api/issue-workflows",slug:"/openapi/api/issue-workflows/execute-workflow-for-issue",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-workflows/execute-workflow-for-issue",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"execute-workflow-for-issue",title:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",description:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",sidebar_label:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"execute-workflow-for-issue",description:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",security:[{oauth2:["write:project:issue-workflow"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],requestBody:{description:"\u8981\u66f4\u65b0\u7684\u5de5\u4f5c\u6d41\u4fe1\u606f",content:{"application/json":{schema:{required:["id"],type:"object",properties:{id:{maxLength:8,minLength:1,type:"string",description:"\u5de5\u4f5c\u6d41ID"},fieldValues:{type:"array",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u4fe1\u606f",items:{required:["fieldID","type","value"],type:"object",properties:{fieldID:{minLength:8,type:"string",description:"\u5de5\u4f5c\u9879\u5c5e\u6027ID"},type:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u7c7b\u578b"},value:{type:"object",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u503c"}},title:"FieldValues"}},resources:{type:"array",description:"\u8981\u5173\u8054\u7684\u9644\u4ef6ID,\u4ee5\u9017\u53f7,\u9694\u5f00",items:{type:"object",properties:{id:{type:"string"}}}},comment:{type:"array",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba",items:{required:["contentType","text"],type:"object",properties:{contentType:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7c7b\u578b"},text:{type:"string",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7684\u4fe1\u606f"}},title:"Comment"}},timeEstimatedHour:{type:"object",description:"\u5de5\u4f5c\u9879\u9884\u4f30\u65f6\u95f4",properties:{hours:{type:"integer"}}},timeSpentHour:{type:"array",description:"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6",items:{required:["hours","owner","startTime"],type:"object",properties:{owner:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u8d1f\u8d23\u4eba"},startTime:{type:"integer",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u5f00\u59cb\u65f6\u95f4"},hours:{type:"integer",description:"\u767b\u8bb0\u51e0\u4e2a\u5c0f\u65f6\uff0c\u5355\u4f4d\uff08h\uff09"},description:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u63cf\u8ff0"}},title:"TimeSpent"}}},title:"ExecuteWorkflowRequest"}}},required:!0},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"}},title:"ExecuteWorkflowResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/project/team/{teamID}/issues/{issueID}/execute-workflow",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issue-workflow":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41","write:project:issue-workflow":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"}}}}},jsonRequestBodyExample:{id:"string",fieldValues:[{fieldID:"string",type:0,value:{}}],resources:[{id:"string"}],comment:[{contentType:0,text:"string"}],timeEstimatedHour:{hours:0},timeSpentHour:[{owner:"string",startTime:0,hours:0,description:"string"}]},info:{title:"Issue workflows",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u6267\u884c\u5de5\u4f5c\u6d41\u3002\n"},postman:{name:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",description:{content:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID","execute-workflow"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/current/openapi/api/issue-workflows/issue-workflows",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u4ecb\u7ecd",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-workflows/issue-workflows"},next:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5de5\u4f5c\u6d41\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-workflows/get-a-list-of-issue-workflows"}},g={},k=[{value:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",id:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",level:2}],h={toc:k};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"},"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"),(0,r.kt)("p",null,"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(o.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"\u8981\u66f4\u65b0\u7684\u5de5\u4f5c\u6d41\u4fe1\u606f"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 8 characters`",schema:{maxLength:8,minLength:1,type:"string",description:"\u5de5\u4f5c\u6d41ID"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"fieldValues"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"\u5de5\u4f5c\u9879\u5c5e\u6027\u4fe1\u606f")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"fieldID",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 8 characters`",schema:{minLength:8,type:"string",description:"\u5de5\u4f5c\u9879\u5c5e\u6027ID"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",description:"\u5de5\u4f5c\u9879\u5c5e\u6027\u503c"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"resources"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"\u8981\u5173\u8054\u7684\u9644\u4ef6ID,\u4ee5\u9017\u53f7,\u9694\u5f00")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"comment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"\u5de5\u4f5c\u9879\u8bc4\u8bba")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"contentType",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{minimum:1,type:"integer",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"text",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u8bc4\u8bba\u7684\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"timeEstimatedHour"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"\u5de5\u4f5c\u9879\u9884\u4f30\u65f6\u95f4")),(0,r.kt)(l.Z,{collapsible:!1,name:"hours",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"timeSpentHour"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6")),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u8d1f\u8d23\u4eba"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"startTime",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u5f00\u59cb\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"hours",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u767b\u8bb0\u51e0\u4e2a\u5c0f\u65f6\uff0c\u5355\u4f4d\uff08h\uff09"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u767b\u8bb0\u5de5\u65f6\u7684\u63cf\u8ff0"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);