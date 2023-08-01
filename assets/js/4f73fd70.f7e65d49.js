"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[14656],{16965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var s=r(87462),i=(r(67294),r(3905)),n=r(70603),o=r(48147),a=r(61045),c=r(86776),p=r(69128),d=r(83329),l=(r(3186),r(18679));const m={id:"get-access-token-details",title:"Get access token details",description:"Get access token details.",sidebar_label:"Get access token details",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-access-token-details",description:"Get access token details.",parameters:[{in:"header",name:"Authorization",required:!0,schema:{type:"string",description:"Access token."}}],responses:{200:{description:"Request successful.",content:{"application/json":{schema:{type:"object",properties:{active:{type:"boolean",description:"Whether the access token is valid/usable."},sub:{type:"string",description:"The bot ID of the access token."},scope:{type:"string",description:"The Open API scopes that are accessible, separated by commas."},client_id:{type:"string",description:"The identifier of the OAuth application."},token_type:{type:"string",description:"The type of access token."},exp:{type:"integer",description:"The expiration time of the access token."},team_id:{type:"string",description:"The team ID of the created OAuth application."}},title:"AccessTokenResponse"}}}},400:{description:"Invalid request.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}},401:{description:"If the authentication credentials are incorrect or missing, then return.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}},500:{description:"Internal server error.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}}},method:"get",path:"/oauth2/introspect",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],info:{title:"Auth",version:"1.0",description:"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions.\n"},postman:{name:"Get access token details",description:{content:"Get access token details.",type:"text/plain"},url:{path:["oauth2","introspect"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/api/auth/auth",custom_edit_url:null},h=void 0,u={unversionedId:"openapi/api/auth/get-access-token-details",id:"openapi/api/auth/get-access-token-details",title:"Get access token details",description:"Get access token details.",source:"@site/docs/openapi/api/auth/get-access-token-details.api.mdx",sourceDirName:"openapi/api/auth",slug:"/openapi/api/auth/get-access-token-details",permalink:"/docs/next/openapi/api/auth/get-access-token-details",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{id:"get-access-token-details",title:"Get access token details",description:"Get access token details.",sidebar_label:"Get access token details",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-access-token-details",description:"Get access token details.",parameters:[{in:"header",name:"Authorization",required:!0,schema:{type:"string",description:"Access token."}}],responses:{200:{description:"Request successful.",content:{"application/json":{schema:{type:"object",properties:{active:{type:"boolean",description:"Whether the access token is valid/usable."},sub:{type:"string",description:"The bot ID of the access token."},scope:{type:"string",description:"The Open API scopes that are accessible, separated by commas."},client_id:{type:"string",description:"The identifier of the OAuth application."},token_type:{type:"string",description:"The type of access token."},exp:{type:"integer",description:"The expiration time of the access token."},team_id:{type:"string",description:"The team ID of the created OAuth application."}},title:"AccessTokenResponse"}}}},400:{description:"Invalid request.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}},401:{description:"If the authentication credentials are incorrect or missing, then return.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}},500:{description:"Internal server error.",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"The error message for the current request."},error_description:{type:"string",description:"The detailed error information for the current request."},code:{type:"integer",description:"HTTP status code of the current response."},errcode:{type:"integer",description:"Error code of the current response."},type:{type:"string",description:"Error type of the current response."},model:{type:"string",description:"Error module of the current response."},field:{type:"string",description:"Error field of the current response."},reason:{type:"string",description:"Error reason of the current response."}},title:"BadResponse"}}}}},method:"get",path:"/oauth2/introspect",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],info:{title:"Auth",version:"1.0",description:"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions.\n"},postman:{name:"Get access token details",description:{content:"Get access token details.",type:"text/plain"},url:{path:["oauth2","introspect"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/api/auth/auth",custom_edit_url:null},sidebar:"openapi",previous:{title:"Apply for or refresh access token",permalink:"/docs/next/openapi/api/auth/apply-for-or-refresh-access-token"},next:{title:"Revoke access token",permalink:"/docs/next/openapi/api/auth/revoke-access-token"}},y={},g=[{value:"Get access token details",id:"get-access-token-details",level:2}],f={toc:g};function k(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-access-token-details"},"Get access token details"),(0,i.kt)("p",null,"Get access token details."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(a.Z,{className:"paramsItem",param:{in:"header",name:"Authorization",required:!0,schema:{type:"string",description:"Access token."}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request successful.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"active",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the access token is valid/usable."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sub",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The bot ID of the access token."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"scope",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The Open API scopes that are accessible, separated by commas."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"client_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The identifier of the OAuth application."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"token_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The type of access token."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"exp",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The expiration time of the access token."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"team_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The team ID of the created OAuth application."},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "active": true,\n  "sub": "string",\n  "scope": "string",\n  "client_id": "string",\n  "token_type": "string",\n  "exp": 0,\n  "team_id": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Invalid request.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error message for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The detailed error information for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"HTTP status code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Error code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error type of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error module of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error field of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error reason of the current response."},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If the authentication credentials are incorrect or missing, then return.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error message for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The detailed error information for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"HTTP status code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Error code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error type of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error module of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error field of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error reason of the current response."},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal server error.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error message for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The detailed error information for the current request."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"HTTP status code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Error code of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error type of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error module of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error field of the current response."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error reason of the current response."},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);