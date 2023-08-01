"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[72185],{39284:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>y,toc:()=>u});var s=i(87462),r=(i(67294),i(3905)),n=i(70603),a=i(48147),p=(i(61045),i(86776)),o=i(69128),c=i(83329),d=(i(3186),i(18679));const l={id:"revoke-access-token",title:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",description:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",sidebar_label:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"revoke-access-token",description:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",requestBody:{content:{"application/json":{schema:{required:["client_id","client_secret","access_token"],type:"object",properties:{client_id:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID"},client_secret:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client Secret"},access_token:{type:"string",description:"\u8bbf\u95ee\u4ee4\u724c"}}}}}},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f"},400:{description:"\u65e0\u6548\u7684\u8bf7\u6c42",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}}},method:"post",path:"/oauth2/revoke",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],jsonRequestBodyExample:{client_id:"string",client_secret:"string",access_token:"string"},info:{title:"Auth",version:"1.0",description:"ONES REST API\u91c7\u7528\u6807\u51c6\u7684OAuth 2.0\u6388\u6743\u673a\u5236\uff0c\u65e8\u5728\u4e3a\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5b89\u5168\u7684\u7528\u6237\u6388\u6743\u548c\u8bbf\u95ee\u4ee4\u724c\uff0c\u4ee5\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684\u8d44\u6e90\u3002OAuth 2.0\u5141\u8bb8\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4e00\u79cd\u5b89\u5168\u3001\u53ef\u63a7\u7684\u65b9\u5f0f\u83b7\u53d6\u6709\u9650\u4e14\u53ef\u64a4\u9500\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u7684\u51ed\u8bc1\u3002\u8fd9\u79cd\u6388\u6743\u673a\u5236\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u4e14\u53ef\u9760\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4e0eONES\u7cfb\u7edf\u8fdb\u884c\u5b89\u5168\u4e92\u52a8\uff0c\u5e76\u83b7\u53d6\u6240\u9700\u7684\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u3002\n"},postman:{name:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",description:{content:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",type:"text/plain"},url:{path:["oauth2","revoke"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/current/openapi/api/auth/auth",custom_edit_url:null},m=void 0,y={unversionedId:"openapi/api/auth/revoke-access-token",id:"openapi/api/auth/revoke-access-token",title:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",description:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/auth/revoke-access-token.api.mdx",sourceDirName:"openapi/api/auth",slug:"/openapi/api/auth/revoke-access-token",permalink:"/open-docs/zh-CN/docs/next/openapi/api/auth/revoke-access-token",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"revoke-access-token",title:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",description:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",sidebar_label:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"revoke-access-token",description:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",requestBody:{content:{"application/json":{schema:{required:["client_id","client_secret","access_token"],type:"object",properties:{client_id:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID"},client_secret:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client Secret"},access_token:{type:"string",description:"\u8bbf\u95ee\u4ee4\u724c"}}}}}},responses:{200:{description:"\u8bf7\u6c42\u6210\u529f"},400:{description:"\u65e0\u6548\u7684\u8bf7\u6c42",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}}},method:"post",path:"/oauth2/revoke",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],jsonRequestBodyExample:{client_id:"string",client_secret:"string",access_token:"string"},info:{title:"Auth",version:"1.0",description:"ONES REST API\u91c7\u7528\u6807\u51c6\u7684OAuth 2.0\u6388\u6743\u673a\u5236\uff0c\u65e8\u5728\u4e3a\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5b89\u5168\u7684\u7528\u6237\u6388\u6743\u548c\u8bbf\u95ee\u4ee4\u724c\uff0c\u4ee5\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684\u8d44\u6e90\u3002OAuth 2.0\u5141\u8bb8\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4e00\u79cd\u5b89\u5168\u3001\u53ef\u63a7\u7684\u65b9\u5f0f\u83b7\u53d6\u6709\u9650\u4e14\u53ef\u64a4\u9500\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u7684\u51ed\u8bc1\u3002\u8fd9\u79cd\u6388\u6743\u673a\u5236\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u4e14\u53ef\u9760\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4e0eONES\u7cfb\u7edf\u8fdb\u884c\u5b89\u5168\u4e92\u52a8\uff0c\u5e76\u83b7\u53d6\u6240\u9700\u7684\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u3002\n"},postman:{name:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",description:{content:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",type:"text/plain"},url:{path:["oauth2","revoke"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/current/openapi/api/auth/auth",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u8be6\u60c5",permalink:"/open-docs/zh-CN/docs/next/openapi/api/auth/get-access-token-details"},next:{title:"\u4ecb\u7ecd",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue/issue"}},g={},u=[{value:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",id:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",level:2}],h={toc:u};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c"},"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c"),(0,r.kt)("p",null,"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c"),(0,r.kt)(a.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"client_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"client_secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client Secret"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"access_token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bbf\u95ee\u4ee4\u724c"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u65e0\u6548\u7684\u8bf7\u6c42")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u9519\u8bef")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);