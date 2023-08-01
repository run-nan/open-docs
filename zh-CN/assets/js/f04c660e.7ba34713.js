"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[88236],{83039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=a(87462),r=(a(67294),a(3905)),i=a(70603),n=a(48147),p=a(61045),l=a(86776),o=a(69128),m=a(83329),c=(a(3186),a(18679));const d={id:"delete-a-test-case-library",title:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",description:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",sidebar_label:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"delete-a-test-case-library",description:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",security:[{oauth2:["write:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"libraryID",in:"path",description:"\u6d4b\u8bd5\u7528\u4f8b\u5e93ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"}},title:"DeleteSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-scope":"write:testcase:library",extensions:[{key:"x-scope",value:"write:testcase:library"}],method:"delete",path:"/testcase/team/{teamID}/libraries/{libraryID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7528\u4f8b\u5e93","read:testcase:library":"\u83b7\u53d6\u7528\u4f8b\u5e93\u4fe1\u606f"}}}}},info:{title:"Testcase Library",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\n"},postman:{name:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",description:{content:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries",":libraryID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u6d4b\u8bd5\u7528\u4f8b\u5e93ID",type:"text/plain"},type:"any",value:"",key:"libraryID"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/current/openapi/api/testcase-library/testcase-library",custom_edit_url:null},y=void 0,u={unversionedId:"openapi/api/testcase-library/delete-a-test-case-library",id:"openapi/api/testcase-library/delete-a-test-case-library",title:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",description:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/testcase-library/delete-a-test-case-library.api.mdx",sourceDirName:"openapi/api/testcase-library",slug:"/openapi/api/testcase-library/delete-a-test-case-library",permalink:"/open-docs/zh-CN/docs/next/openapi/api/testcase-library/delete-a-test-case-library",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"delete-a-test-case-library",title:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",description:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",sidebar_label:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"delete-a-test-case-library",description:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",security:[{oauth2:["write:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"libraryID",in:"path",description:"\u6d4b\u8bd5\u7528\u4f8b\u5e93ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"}},title:"DeleteSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},"x-scope":"write:testcase:library",extensions:[{key:"x-scope",value:"write:testcase:library"}],method:"delete",path:"/testcase/team/{teamID}/libraries/{libraryID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7528\u4f8b\u5e93","read:testcase:library":"\u83b7\u53d6\u7528\u4f8b\u5e93\u4fe1\u606f"}}}}},info:{title:"Testcase Library",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\n"},postman:{name:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",description:{content:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries",":libraryID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u6d4b\u8bd5\u7528\u4f8b\u5e93ID",type:"text/plain"},type:"any",value:"",key:"libraryID"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/current/openapi/api/testcase-library/testcase-library",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u65b0\u5efa\u6d4b\u8bd5\u7528\u4f8b\u5e93",permalink:"/open-docs/zh-CN/docs/next/openapi/api/testcase-library/create-a-new-test-case-library"},next:{title:"\u83b7\u53d6\u6d4b\u8bd5\u7528\u4f8b\u5e93\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/testcase-library/get-a-list-of-test-case-libraries"}},h={},g=[{value:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",id:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93",level:2}],b={toc:g};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93"},"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93"),(0,r.kt)("p",null,"\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"libraryID",in:"path",description:"\u6d4b\u8bd5\u7528\u4f8b\u5e93ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);