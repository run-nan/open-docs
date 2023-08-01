"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[87671],{51878:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var r=s(87462),i=(s(67294),s(3905)),a=s(70603),o=s(48147),n=s(61045),l=s(86776),p=s(69128),c=s(83329),m=(s(3186),s(18679));const d={id:"get-a-list-of-test-case-libraries",title:"Get a list of test case libraries",description:"Get a list of test case libraries.",sidebar_label:"Get a list of test case libraries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-test-case-libraries",description:"Get a list of test case libraries.",security:[{oauth2:["read:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"The name of the test case library."},id:{type:"string",description:"The id of the test case library."},createTime:{type:"integer",description:"The create time of the test case library."},updateTime:{type:"integer",description:"The update time of the test case library."},stickToTop:{type:"boolean",description:"Whether the test case library is at the top."},testcaseFieldConfig:{type:"object",properties:{name:{description:"Test case library field configuration name.",type:"string"},id:{type:"string",description:"Test case library configuration ID."}},description:"Test case library field configuration information."}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/testcase/team/{teamID}/libraries",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"Add, edit, delete test case library","read:testcase:library":"Access test case library information"}}}}},info:{title:"Testcase Library",version:"1.0",description:"This resource represents testcase libraries. Use it to get, create, update, and delete testcase libraries.\n"},postman:{name:"Get a list of test case libraries",description:{content:"Get a list of test case libraries.",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of test case libraries returned by this request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/testcase-library/testcase-library",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/testcase-library/get-a-list-of-test-case-libraries",id:"version-1.x/openapi/api/testcase-library/get-a-list-of-test-case-libraries",title:"Get a list of test case libraries",description:"Get a list of test case libraries.",source:"@site/versioned_docs/version-1.x/openapi/api/testcase-library/get-a-list-of-test-case-libraries.api.mdx",sourceDirName:"openapi/api/testcase-library",slug:"/openapi/api/testcase-library/get-a-list-of-test-case-libraries",permalink:"/open-docs/docs/openapi/api/testcase-library/get-a-list-of-test-case-libraries",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"get-a-list-of-test-case-libraries",title:"Get a list of test case libraries",description:"Get a list of test case libraries.",sidebar_label:"Get a list of test case libraries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-test-case-libraries",description:"Get a list of test case libraries.",security:[{oauth2:["read:testcase:library"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"The name of the test case library."},id:{type:"string",description:"The id of the test case library."},createTime:{type:"integer",description:"The create time of the test case library."},updateTime:{type:"integer",description:"The update time of the test case library."},stickToTop:{type:"boolean",description:"Whether the test case library is at the top."},testcaseFieldConfig:{type:"object",properties:{name:{description:"Test case library field configuration name.",type:"string"},id:{type:"string",description:"Test case library configuration ID."}},description:"Test case library field configuration information."}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/testcase/team/{teamID}/libraries",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:testcase:library":"Add, edit, delete test case library","read:testcase:library":"Access test case library information"}}}}},info:{title:"Testcase Library",version:"1.0",description:"This resource represents testcase libraries. Use it to get, create, update, and delete testcase libraries.\n"},postman:{name:"Get a list of test case libraries",description:{content:"Get a list of test case libraries.",type:"text/plain"},url:{path:["testcase","team",":teamID","libraries"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of test case libraries returned by this request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/testcase-library/testcase-library",custom_edit_url:null},sidebar:"openapi",previous:{title:"Delete a test case library",permalink:"/open-docs/docs/openapi/api/testcase-library/delete-a-test-case-library"},next:{title:"Get a test case library details",permalink:"/open-docs/docs/openapi/api/testcase-library/get-a-test-case-library-details"}},y={},g=[{value:"Get a list of test case libraries",id:"get-a-list-of-test-case-libraries",level:2}],b={toc:g};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-a-list-of-test-case-libraries"},"Get a list of test case libraries"),(0,i.kt)("p",null,"Get a list of test case libraries."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request is successful.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"list"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the test case library."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the test case library."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The create time of the test case library."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"updateTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The update time of the test case library."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"stickToTop",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the test case library is at the top."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"testcaseFieldConfig"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Test case library field configuration information.")),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Test case library field configuration name.",type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Test case library configuration ID."},mdxType:"SchemaItem"})))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pageInfo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The number returned this time."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"endCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"endPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The last position on this page."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"hasNextPage",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Is there a next page."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"startCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"startPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The first position on this page."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"totalCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."},mdxType:"SchemaItem"})))))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "list": [\n      {\n        "name": "string",\n        "id": "string",\n        "createTime": 0,\n        "updateTime": 0,\n        "stickToTop": true,\n        "testcaseFieldConfig": {\n          "name": "string",\n          "id": "string"\n        }\n      }\n    ],\n    "pageInfo": {\n      "count": 0,\n      "endCursor": "string",\n      "endPos": 0,\n      "hasNextPage": true,\n      "startCursor": "string",\n      "startPos": 0,\n      "totalCount": 0\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns if the scope check fails.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returned if the resource object was not found.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);