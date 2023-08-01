"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[81282],{96606:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>T,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var r=s(87462),a=(s(67294),s(3905)),i=s(70603),o=s(48147),n=s(61045),l=s(86776),p=s(69128),c=s(83329),m=(s(3186),s(18679));const d={id:"update-a-test-case-library",title:"Update a test case library",description:"Update a test case library.",sidebar_label:"Update a test case library",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"update-a-test-case-library",description:"Update a test case library.",security:[{oauth2:["write:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"libraryID",in:"path",description:"The id of the test case library.",required:!0,schema:{type:"string"}}],requestBody:{description:"Test case repository information to update.",content:{"application/json":{schema:{type:"object",properties:{caseFieldConfigurationID:{maxLength:8,minLength:1,type:"string",description:"The id of the test case library field configuration."},name:{maxLength:32,minLength:1,type:"string",description:"The name of the test case library."}},title:"RequestLibrary"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{name:{type:"string",description:"The name of the test case library."},id:{type:"string",description:"The id of the test case library."},createTime:{type:"integer",description:"The create time of the test case library."},updateTime:{type:"integer",description:"The update time of the test case library."},stickToTop:{type:"boolean",description:"Whether the test case library is at the top."},caseFieldConfigurationID:{type:"string",description:"Test case library configuration ID."}}}},title:"AddOrUpdateSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"put",path:"/testcase/team/{teamID}/libraries/{libraryID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"Add, edit, delete test case library","read:testcase:library":"Access test case library information"}}}}},jsonRequestBodyExample:{caseFieldConfigurationID:"string",name:"string"},info:{title:"Testcase Library",version:"1.0",description:"This resource represents testcase libraries. Use it to get, create, update, and delete testcase libraries.\n"},postman:{name:"Update a test case library",description:{content:"Update a test case library.",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries",":libraryID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The id of the test case library.",type:"text/plain"},type:"any",value:"",key:"libraryID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"docs/openapi/api/testcase-library/testcase-library",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/api/testcase-library/update-a-test-case-library",id:"openapi/api/testcase-library/update-a-test-case-library",title:"Update a test case library",description:"Update a test case library.",source:"@site/docs/openapi/api/testcase-library/update-a-test-case-library.api.mdx",sourceDirName:"openapi/api/testcase-library",slug:"/openapi/api/testcase-library/update-a-test-case-library",permalink:"/open-docs/docs/next/openapi/api/testcase-library/update-a-test-case-library",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"update-a-test-case-library",title:"Update a test case library",description:"Update a test case library.",sidebar_label:"Update a test case library",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"update-a-test-case-library",description:"Update a test case library.",security:[{oauth2:["write:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"libraryID",in:"path",description:"The id of the test case library.",required:!0,schema:{type:"string"}}],requestBody:{description:"Test case repository information to update.",content:{"application/json":{schema:{type:"object",properties:{caseFieldConfigurationID:{maxLength:8,minLength:1,type:"string",description:"The id of the test case library field configuration."},name:{maxLength:32,minLength:1,type:"string",description:"The name of the test case library."}},title:"RequestLibrary"}}},required:!0},responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{name:{type:"string",description:"The name of the test case library."},id:{type:"string",description:"The id of the test case library."},createTime:{type:"integer",description:"The create time of the test case library."},updateTime:{type:"integer",description:"The update time of the test case library."},stickToTop:{type:"boolean",description:"Whether the test case library is at the top."},caseFieldConfigurationID:{type:"string",description:"Test case library configuration ID."}}}},title:"AddOrUpdateSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},"x-codegen-request-body-name":"body",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"put",path:"/testcase/team/{teamID}/libraries/{libraryID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"Add, edit, delete test case library","read:testcase:library":"Access test case library information"}}}}},jsonRequestBodyExample:{caseFieldConfigurationID:"string",name:"string"},info:{title:"Testcase Library",version:"1.0",description:"This resource represents testcase libraries. Use it to get, create, update, and delete testcase libraries.\n"},postman:{name:"Update a test case library",description:{content:"Update a test case library.",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries",":libraryID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) The id of the test case library.",type:"text/plain"},type:"any",value:"",key:"libraryID"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"put api-method",info_path:"docs/openapi/api/testcase-library/testcase-library",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a test case library details",permalink:"/open-docs/docs/next/openapi/api/testcase-library/get-a-test-case-library-details"}},h={},g=[{value:"Update a test case library",id:"update-a-test-case-library",level:2}],b={toc:g};function T(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"update-a-test-case-library"},"Update a test case library"),(0,a.kt)("p",null,"Update a test case library."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"libraryID",in:"path",description:"The id of the test case library.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"Test case repository information to update."))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"caseFieldConfigurationID",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 8 characters`",schema:{maxLength:8,minLength:1,type:"string",description:"The id of the test case library field configuration."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 32 characters`",schema:{maxLength:32,minLength:1,type:"string",description:"The name of the test case library."},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request is successful.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the test case library."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the test case library."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The create time of the test case library."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"updateTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The update time of the test case library."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"stickToTop",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the test case library is at the top."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"caseFieldConfigurationID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Test case library configuration ID."},mdxType:"SchemaItem"}))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "name": "string",\n    "id": "string",\n    "createTime": 0,\n    "updateTime": 0,\n    "stickToTop": true,\n    "caseFieldConfigurationID": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns if the scope check fails.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returned if the resource object was not found.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);