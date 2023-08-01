"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[82320],{35910:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>T,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var i=s(87462),r=(s(67294),s(3905)),a=s(70603),o=s(48147),n=s(61045),p=s(86776),l=s(69128),u=s(83329),m=(s(3186),s(18679));const c={id:"get-a-list-of-issue-status",title:"Get a list of issue status",description:"Get a list of issue status.",sidebar_label:"Get a list of issue status",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-status",description:"Get a list of issue status.",security:[{oauth2:["read:project:issueStatus"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"The name of the issue status."},id:{type:"string",description:"The id of the issue status."},createTime:{type:"integer",description:"The create time of the issue status."},category:{type:"string",description:"The category of the issue status."},buildIn:{type:"boolean",description:"Whether it is a system built-in issue status."}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issueStatuses",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issueStatus":"Access issue status"}}}}},info:{title:"Issue status",version:"1.0",description:"This resource represents issue status. Use it to get issue status.\n"},postman:{name:"Get a list of issue status",description:{content:"Get a list of issue status.",type:"text/plain"},url:{path:["project","team",":teamID","issueStatuses"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/openapi/api/issue-status/issue-status",custom_edit_url:null},d=void 0,h={unversionedId:"openapi/api/issue-status/get-a-list-of-issue-status",id:"openapi/api/issue-status/get-a-list-of-issue-status",title:"Get a list of issue status",description:"Get a list of issue status.",source:"@site/docs/openapi/api/issue-status/get-a-list-of-issue-status.api.mdx",sourceDirName:"openapi/api/issue-status",slug:"/openapi/api/issue-status/get-a-list-of-issue-status",permalink:"/open-docs/docs/next/openapi/api/issue-status/get-a-list-of-issue-status",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"get-a-list-of-issue-status",title:"Get a list of issue status",description:"Get a list of issue status.",sidebar_label:"Get a list of issue status",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-status",description:"Get a list of issue status.",security:[{oauth2:["read:project:issueStatus"]}],parameters:[{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"The name of the issue status."},id:{type:"string",description:"The id of the issue status."},createTime:{type:"integer",description:"The create time of the issue status."},category:{type:"string",description:"The category of the issue status."},buildIn:{type:"boolean",description:"Whether it is a system built-in issue status."}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issueStatuses",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issueStatus":"Access issue status"}}}}},info:{title:"Issue status",version:"1.0",description:"This resource represents issue status. Use it to get issue status.\n"},postman:{name:"Get a list of issue status",description:{content:"Get a list of issue status.",type:"text/plain"},url:{path:["project","team",":teamID","issueStatuses"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The team ID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/openapi/api/issue-status/issue-status",custom_edit_url:null},sidebar:"openapi",previous:{title:"Introduction",permalink:"/open-docs/docs/next/openapi/api/issue-status/issue-status"},next:{title:"Introduction",permalink:"/open-docs/docs/next/openapi/api/issue-types/issue-types"}},g={},y=[{value:"Get a list of issue status",id:"get-a-list-of-issue-status",level:2}],f={toc:y};function T(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-a-list-of-issue-status"},"Get a list of issue status"),(0,r.kt)("p",null,"Get a list of issue status."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request is successful.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"list"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the issue status."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the issue status."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The create time of the issue status."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The category of the issue status."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"buildIn",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether it is a system built-in issue status."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"pageInfo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The number returned this time."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"endCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"endPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The last position on this page."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"hasNextPage",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Is there a next page."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"startCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"startPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The first position on this page."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"totalCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."},mdxType:"SchemaItem"})))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "list": [\n      {\n        "name": "string",\n        "id": "string",\n        "createTime": 0,\n        "category": "string",\n        "buildIn": true\n      }\n    ],\n    "pageInfo": {\n      "count": 0,\n      "endCursor": "string",\n      "endPos": 0,\n      "hasNextPage": true,\n      "startCursor": "string",\n      "startPos": 0,\n      "totalCount": 0\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the resource object was not found.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(u.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);