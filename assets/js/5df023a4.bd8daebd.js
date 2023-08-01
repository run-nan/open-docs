"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[73163],{56050:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var i=s(87462),r=(s(67294),s(3905)),a=s(70603),n=s(48147),o=s(61045),p=s(86776),m=s(69128),l=s(83329),c=(s(3186),s(18679));const d={id:"get-a-list-of-issues",title:"Get a list of issues",description:"Get a list of issues.",sidebar_label:"Get a list of issues",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issues",description:"Get a list of issues.",security:[{oauth2:["read:project:issue"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}},{name:"projectID",in:"query",description:"As a filter condition, the list only returns work items that are projectID, used in conjunction with issueTypeID.",schema:{type:"string"}},{name:"issueTypeID",in:"query",description:"As a filter condition, the list only returns work items that are issueTypeID, used in conjunction with projectID.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{assignee:{type:"object",properties:{id:{type:"string",description:"ID of the assignee."},name:{type:"string",description:"Name of the assignee."}}},createTime:{type:"integer",description:"CreateTime of the issue."},dueDate:{type:"string",description:"Issue due date."},timeEstimatedHour:{type:"integer",description:"Time estimated,unit is hour."},issueType:{type:"object",properties:{id:{type:"string",description:"ID of the issue type."},name:{type:"string",description:"Name of the issue type."}}},title:{type:"string",description:"Title of the issue."},number:{type:"integer",description:"Number of the issue."},creator:{type:"object",properties:{id:{type:"string",description:"ID of the creator."},name:{type:"string",description:"Name of the creator."}}},parent:{type:"object",properties:{id:{type:"string",description:"Parent issue ID."},title:{type:"string",description:"Parent issue title."}}},priority:{type:"object",properties:{id:{type:"string",description:"ID of the priority."},name:{type:"string",description:"Name of the priority."}}},project:{type:"object",properties:{id:{type:"string",description:"Project ID of the issue."},name:{type:"string",description:"Project name of the issue."}}},timeRemainingHour:{type:"integer",description:"Time remaining,unit is hour."},sprint:{type:"object",properties:{id:{type:"string",description:"ID of the sprint."},name:{type:"string",description:"Name of the sprint."}}},status:{type:"object",properties:{id:{type:"string",description:"ID of the status."},name:{type:"string",description:"Name of the status."},category:{type:"string",description:"Category of the status."}}},subIssueType:{type:"object",properties:{id:{type:"string",description:"ID of the sub issue type."},name:{type:"string",description:"Name of the sub issue type."}}},subIssueCount:{type:"integer",description:"Total sub issue."},subIssueDoneCount:{type:"integer",description:"Total completed sub issue."},subIssues:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the sub issue."},name:{type:"string",description:"Name of the sub issue."}}}},totalTimeEstimatedHour:{type:"integer",description:"Total time estimated,unit is hour."},timeSpentHour:{type:"integer",description:"Time spent,unit is hour."},totalTimeRemainingHour:{type:"integer",description:"Total time remaining,unit is hour."},id:{type:"string",description:"ID of the issue."},attachments:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the attachment."},name:{type:"string",description:"Name of the attachment."},createTime:{type:"integer",description:"Create time of the attachment."}}}}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"ListSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:issue":"Add, edit, delete issue","read:project:issue":"Access issue information"}}}}},info:{title:"Issue",version:"1.0",description:"This resource represents issues. Use it to get, create, update, and delete issues.\n"},postman:{name:"Get a list of issues",description:{content:"Get a list of issues.",type:"text/plain"},url:{path:["project","team",":teamID","issues"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of test case libraries returned by this request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"As a filter condition, the list only returns work items that are projectID, used in conjunction with issueTypeID.",type:"text/plain"},key:"projectID",value:""},{disabled:!1,description:{content:"As a filter condition, the list only returns work items that are issueTypeID, used in conjunction with projectID.",type:"text/plain"},key:"issueTypeID",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/issue/issue",custom_edit_url:null},u=void 0,h={unversionedId:"openapi/api/issue/get-a-list-of-issues",id:"version-1.x/openapi/api/issue/get-a-list-of-issues",title:"Get a list of issues",description:"Get a list of issues.",source:"@site/versioned_docs/version-1.x/openapi/api/issue/get-a-list-of-issues.api.mdx",sourceDirName:"openapi/api/issue",slug:"/openapi/api/issue/get-a-list-of-issues",permalink:"/open-docs/docs/openapi/api/issue/get-a-list-of-issues",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"get-a-list-of-issues",title:"Get a list of issues",description:"Get a list of issues.",sidebar_label:"Get a list of issues",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-list-of-issues",description:"Get a list of issues.",security:[{oauth2:["read:project:issue"]}],parameters:[{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}},{name:"projectID",in:"query",description:"As a filter condition, the list only returns work items that are projectID, used in conjunction with issueTypeID.",schema:{type:"string"}},{name:"issueTypeID",in:"query",description:"As a filter condition, the list only returns work items that are issueTypeID, used in conjunction with projectID.",schema:{type:"string"}}],responses:{200:{description:"Request is successful.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},data:{type:"object",properties:{list:{type:"array",items:{type:"object",properties:{assignee:{type:"object",properties:{id:{type:"string",description:"ID of the assignee."},name:{type:"string",description:"Name of the assignee."}}},createTime:{type:"integer",description:"CreateTime of the issue."},dueDate:{type:"string",description:"Issue due date."},timeEstimatedHour:{type:"integer",description:"Time estimated,unit is hour."},issueType:{type:"object",properties:{id:{type:"string",description:"ID of the issue type."},name:{type:"string",description:"Name of the issue type."}}},title:{type:"string",description:"Title of the issue."},number:{type:"integer",description:"Number of the issue."},creator:{type:"object",properties:{id:{type:"string",description:"ID of the creator."},name:{type:"string",description:"Name of the creator."}}},parent:{type:"object",properties:{id:{type:"string",description:"Parent issue ID."},title:{type:"string",description:"Parent issue title."}}},priority:{type:"object",properties:{id:{type:"string",description:"ID of the priority."},name:{type:"string",description:"Name of the priority."}}},project:{type:"object",properties:{id:{type:"string",description:"Project ID of the issue."},name:{type:"string",description:"Project name of the issue."}}},timeRemainingHour:{type:"integer",description:"Time remaining,unit is hour."},sprint:{type:"object",properties:{id:{type:"string",description:"ID of the sprint."},name:{type:"string",description:"Name of the sprint."}}},status:{type:"object",properties:{id:{type:"string",description:"ID of the status."},name:{type:"string",description:"Name of the status."},category:{type:"string",description:"Category of the status."}}},subIssueType:{type:"object",properties:{id:{type:"string",description:"ID of the sub issue type."},name:{type:"string",description:"Name of the sub issue type."}}},subIssueCount:{type:"integer",description:"Total sub issue."},subIssueDoneCount:{type:"integer",description:"Total completed sub issue."},subIssues:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the sub issue."},name:{type:"string",description:"Name of the sub issue."}}}},totalTimeEstimatedHour:{type:"integer",description:"Total time estimated,unit is hour."},timeSpentHour:{type:"integer",description:"Time spent,unit is hour."},totalTimeRemainingHour:{type:"integer",description:"Total time remaining,unit is hour."},id:{type:"string",description:"ID of the issue."},attachments:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"ID of the attachment."},name:{type:"string",description:"Name of the attachment."},createTime:{type:"integer",description:"Create time of the attachment."}}}}},title:"ListItem"}},pageInfo:{type:"object",properties:{count:{type:"integer",description:"The number returned this time."},endCursor:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},endPos:{type:"integer",description:"The last position on this page."},hasNextPage:{type:"boolean",description:"Is there a next page."},startCursor:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},startPos:{type:"integer",description:"The first position on this page."},totalCount:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."}},title:"PageInfo"}}}},title:"ListSuccessResponse"}}}},401:{description:"Returned if the authentication credentials are incorrect or missing.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},403:{description:"Returns if the scope check fails.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},404:{description:"Returned if the resource object was not found.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}},500:{description:"Internal Server Error.",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"The result of this request."},errorCode:{type:"string",description:"The error code of this request."},errorMsg:{type:"string",description:"Error message for this request."}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:issue":"Add, edit, delete issue","read:project:issue":"Access issue information"}}}}},info:{title:"Issue",version:"1.0",description:"This resource represents issues. Use it to get, create, update, and delete issues.\n"},postman:{name:"Get a list of issues",description:{content:"Get a list of issues.",type:"text/plain"},url:{path:["project","team",":teamID","issues"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The number of test case libraries returned by this request.",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"The starting location of this request.",type:"text/plain"},key:"cursor",value:""},{disabled:!1,description:{content:"As a filter condition, the list only returns work items that are projectID, used in conjunction with issueTypeID.",type:"text/plain"},key:"projectID",value:""},{disabled:!1,description:{content:"As a filter condition, the list only returns work items that are issueTypeID, used in conjunction with projectID.",type:"text/plain"},key:"issueTypeID",value:""}],variable:[{disabled:!1,description:{content:"(Required) The team ID.",type:"text/plain"},type:"any",value:"",key:"teamID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/version-1.x/openapi/api/issue/issue",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a issue details",permalink:"/open-docs/docs/openapi/api/issue/get-a-issue-details"},next:{title:"Update a  issue",permalink:"/open-docs/docs/openapi/api/issue/update-a-issue"}},y={},g=[{value:"Get a list of issues",id:"get-a-list-of-issues",level:2}],f={toc:g};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-a-list-of-issues"},"Get a list of issues"),(0,r.kt)("p",null,"Get a list of issues."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"The team ID.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of test case libraries returned by this request.",schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"The starting location of this request.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"projectID",in:"query",description:"As a filter condition, the list only returns work items that are projectID, used in conjunction with issueTypeID.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"issueTypeID",in:"query",description:"As a filter condition, the list only returns work items that are issueTypeID, used in conjunction with projectID.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request is successful.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"list"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"assignee"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the assignee."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the assignee."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"CreateTime of the issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"dueDate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Issue due date."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"timeEstimatedHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Time estimated,unit is hour."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"issueType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the issue type."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the issue type."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Title of the issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"number",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Number of the issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"creator"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the creator."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the creator."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"parent"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Parent issue ID."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Parent issue title."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"priority"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the priority."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the priority."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"project"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Project ID of the issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Project name of the issue."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!1,name:"timeRemainingHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Time remaining,unit is hour."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"sprint"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the sprint."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the sprint."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the status."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the status."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Category of the status."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"subIssueType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the sub issue type."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the sub issue type."},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{collapsible:!1,name:"subIssueCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Total sub issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"subIssueDoneCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Total completed sub issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"subIssues"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the sub issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the sub issue."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(m.Z,{collapsible:!1,name:"totalTimeEstimatedHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Total time estimated,unit is hour."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"timeSpentHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Time spent,unit is hour."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"totalTimeRemainingHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Total time remaining,unit is hour."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the issue."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attachments"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ID of the attachment."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the attachment."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Create time of the attachment."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"pageInfo"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The number returned this time."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"endCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The last cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"endPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The last position on this page."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"hasNextPage",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Is there a next page."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"startCursor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The first cursor on this page is generally used to turn pages. backwards."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"startPos",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The first position on this page."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"totalCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"The total number of items available in the entire collection, including those that are  returned in the current response."},mdxType:"SchemaItem"})))))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "data": {\n    "list": [\n      {\n        "assignee": {\n          "id": "string",\n          "name": "string"\n        },\n        "createTime": 0,\n        "dueDate": "string",\n        "timeEstimatedHour": 0,\n        "issueType": {\n          "id": "string",\n          "name": "string"\n        },\n        "title": "string",\n        "number": 0,\n        "creator": {\n          "id": "string",\n          "name": "string"\n        },\n        "parent": {\n          "id": "string",\n          "title": "string"\n        },\n        "priority": {\n          "id": "string",\n          "name": "string"\n        },\n        "project": {\n          "id": "string",\n          "name": "string"\n        },\n        "timeRemainingHour": 0,\n        "sprint": {\n          "id": "string",\n          "name": "string"\n        },\n        "status": {\n          "id": "string",\n          "name": "string",\n          "category": "string"\n        },\n        "subIssueType": {\n          "id": "string",\n          "name": "string"\n        },\n        "subIssueCount": 0,\n        "subIssueDoneCount": 0,\n        "subIssues": [\n          {\n            "id": "string",\n            "name": "string"\n          }\n        ],\n        "totalTimeEstimatedHour": 0,\n        "timeSpentHour": 0,\n        "totalTimeRemainingHour": 0,\n        "id": "string",\n        "attachments": [\n          {\n            "id": "string",\n            "name": "string",\n            "createTime": 0\n          }\n        ]\n      }\n    ],\n    "pageInfo": {\n      "count": 0,\n      "endCursor": "string",\n      "endPos": 0,\n      "hasNextPage": true,\n      "startCursor": "string",\n      "startPos": 0,\n      "totalCount": 0\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the resource object was not found.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(m.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(m.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);