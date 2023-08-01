"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5889],{97185:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var i=s(87462),a=(s(67294),s(3905)),r=s(70603),n=s(48147),p=s(61045),o=s(86776),l=s(69128),m=s(83329),c=(s(3186),s(18679));const d={id:"get-a-list-of-issue-types",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-types",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",security:[{oauth2:["read:project:issueType"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"},id:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},isSubIssueType:{type:"boolean",description:"\u662f\u5426\u662f\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b"},type:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u7c7b\u522b"},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u521b\u5efa\u65f6\u95f4"},buildIn:{type:"boolean",description:"\u662f\u5426\u662f\u7cfb\u7edf\u5185\u7f6e\u7684\u5de5\u4f5c\u9879\u7c7b\u578b"},project:{type:"object",description:"\u4f7f\u7528\u8be5\u5de5\u4f5c\u9879\u7c7b\u578b\u7684\u9879\u76ee\u96c6\u5408",properties:{name:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},id:{type:"string",description:"\u9879\u76eeID"}}}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"\u672c\u6b21\u8fd4\u56de\u7684\u6570\u91cf"},endCursor:{type:"string",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},endPos:{type:"integer",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"},hasNextPage:{type:"boolean",description:"\u662f\u5426\u6709\u4e0b\u4e00\u9875"},startCursor:{type:"string",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},startPos:{type:"integer",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u4f4d\u7f6e"},totalCount:{type:"integer",description:"\u6574\u4e2a\u96c6\u5408\u603b\u6570\uff0c\u5305\u62ec\u672c\u6b21\u54cd\u5e94\u4e2d\u8fd4\u56de\u7684"}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issueTypes",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issueType":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b"}}}}},info:{title:"Issue types",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u7c7b\u578b\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",type:"text/plain"},url:{path:["project","team",":teamID","issueTypes"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue-types/issue-types",custom_edit_url:null},y=void 0,u={unversionedId:"openapi/api/issue-types/get-a-list-of-issue-types",id:"openapi/api/issue-types/get-a-list-of-issue-types",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-types/get-a-list-of-issue-types.api.mdx",sourceDirName:"openapi/api/issue-types",slug:"/openapi/api/issue-types/get-a-list-of-issue-types",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-types/get-a-list-of-issue-types",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"get-a-list-of-issue-types",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issue-types",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",security:[{oauth2:["read:project:issueType"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{name:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"},id:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},isSubIssueType:{type:"boolean",description:"\u662f\u5426\u662f\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b"},type:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u7c7b\u522b"},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u521b\u5efa\u65f6\u95f4"},buildIn:{type:"boolean",description:"\u662f\u5426\u662f\u7cfb\u7edf\u5185\u7f6e\u7684\u5de5\u4f5c\u9879\u7c7b\u578b"},project:{type:"object",description:"\u4f7f\u7528\u8be5\u5de5\u4f5c\u9879\u7c7b\u578b\u7684\u9879\u76ee\u96c6\u5408",properties:{name:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},id:{type:"string",description:"\u9879\u76eeID"}}}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"\u672c\u6b21\u8fd4\u56de\u7684\u6570\u91cf"},endCursor:{type:"string",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},endPos:{type:"integer",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"},hasNextPage:{type:"boolean",description:"\u662f\u5426\u6709\u4e0b\u4e00\u9875"},startCursor:{type:"string",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},startPos:{type:"integer",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u4f4d\u7f6e"},totalCount:{type:"integer",description:"\u6574\u4e2a\u96c6\u5408\u603b\u6570\uff0c\u5305\u62ec\u672c\u6b21\u54cd\u5e94\u4e2d\u8fd4\u56de\u7684"}},title:"PageInfo"}}}},title:"AllSuccessResponse"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issueTypes",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"read:project:issueType":"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b"}}}}},info:{title:"Issue types",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u7c7b\u578b\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",type:"text/plain"},url:{path:["project","team",":teamID","issueTypes"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue-types/issue-types",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u4ecb\u7ecd",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-types/issue-types"},next:{title:"\u4ecb\u7ecd",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-workflows/issue-workflows"}},g={},h=[{value:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868",level:2}],k={toc:h};function b(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868"},"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868"),(0,a.kt)("p",null,"\u83b7\u53d6\u5de5\u4f5c\u9879\u7c7b\u578b\u5217\u8868"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"list"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"isSubIssueType",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u662f\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u7c7b\u522b"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u521b\u5efa\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"buildIn",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u662f\u7cfb\u7edf\u5185\u7f6e\u7684\u5de5\u4f5c\u9879\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"project"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"\u4f7f\u7528\u8be5\u5de5\u4f5c\u9879\u7c7b\u578b\u7684\u9879\u76ee\u96c6\u5408")),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76ee\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9879\u76eeID"},mdxType:"SchemaItem"})))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"pageInfo"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8fd4\u56de\u7684\u6570\u91cf"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"endCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"endPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u9875\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"hasNextPage",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u6709\u4e0b\u4e00\u9875"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"startCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u5149\u6807\uff0c\u7528\u4e8e\u7ffb\u9875 backwards."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"startPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u9875\u7b2c\u4e00\u4e2a\u4f4d\u7f6e"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"totalCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u6574\u4e2a\u96c6\u5408\u603b\u6570\uff0c\u5305\u62ec\u672c\u6b21\u54cd\u5e94\u4e2d\u8fd4\u56de\u7684"},mdxType:"SchemaItem"})))))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "list": [\n      {\n        "name": "string",\n        "id": "string",\n        "isSubIssueType": true,\n        "type": "string",\n        "createTime": 0,\n        "buildIn": true,\n        "project": {\n          "name": "string",\n          "id": "string"\n        }\n      }\n    ],\n    "pageInfo": {\n      "count": 0,\n      "endCursor": "string",\n      "endPos": 0,\n      "hasNextPage": true,\n      "startCursor": "string",\n      "startPos": 0,\n      "totalCount": 0\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);