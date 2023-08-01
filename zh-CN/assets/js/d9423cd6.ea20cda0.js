"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[3144],{48891:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>I,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var s=i(87462),a=(i(67294),i(3905)),r=i(70603),n=i(48147),p=i(61045),m=i(86776),o=i(69128),l=i(83329),c=(i(3186),i(18679));const d={id:"get-a-issue-details",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-issue-details",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",security:[{oauth2:["read:project:issue"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{assignee:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u8d1f\u8d23\u4ebaID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"}}},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u65f6\u95f4"},dueDate:{type:"string",description:"\u5de5\u4f5c\u9879\u622a\u6b62\u65e5\u671f"},timeEstimatedHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},issueType:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"}}},title:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"},number:{type:"integer",description:"\u5de5\u4f5c\u9879\u7f16\u53f7"},creator:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005\u540d\u79f0"}}},parent:{type:"object",properties:{id:{type:"string",description:"\u7236\u5de5\u4f5c\u9879ID"},title:{type:"string",description:"\u7236\u5de5\u4f5c\u9879\u6807\u9898"}}},priority:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7\u540d\u79f0"}}},project:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76eeID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76ee\u540d\u79f0"}}},timeRemainingHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},sprint:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3\u540d\u79f0"}}},status:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u540d\u79f0"},category:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u7c7b\u578b"}}},subIssueType:{type:"object",properties:{id:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578bID"},name:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"}}},subIssueCount:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u603b\u6570"},subIssueDoneCount:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u72b6\u6001\u4e3a\u5b8c\u6210\u7684\u603b\u6570"},subIssues:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879ID"},title:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u6807\u9898"}}}},totalTimeEstimatedHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},timeSpentHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},totalTimeRemainingHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},id:{type:"string",description:"\u5de5\u4f5c\u9879ID"},attachments:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u540d\u79f0"},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u521b\u5efa\u65f6\u95f4"}}}}},title:"ListItem"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues/{issueID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:issue":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879","read:project:issue":"\u83b7\u53d6\u5de5\u4f5c\u9879\u4fe1\u606f"}}}}},info:{title:"Issue",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u5de5\u4f5c\u9879\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue/issue",custom_edit_url:null},y=void 0,u={unversionedId:"openapi/api/issue/get-a-issue-details",id:"openapi/api/issue/get-a-issue-details",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue/get-a-issue-details.api.mdx",sourceDirName:"openapi/api/issue",slug:"/openapi/api/issue/get-a-issue-details",permalink:"/zh-CN/docs/next/openapi/api/issue/get-a-issue-details",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",frontMatter:{id:"get-a-issue-details",title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",sidebar_label:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get-a-issue-details",description:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",security:[{oauth2:["read:project:issue"]}],parameters:[{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}}],responses:{200:{description:"\u8bf7\u6c42\u6210\u529f",content:{"application/json":{schema:{type:"object",properties:{assignee:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u8d1f\u8d23\u4ebaID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"}}},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u65f6\u95f4"},dueDate:{type:"string",description:"\u5de5\u4f5c\u9879\u622a\u6b62\u65e5\u671f"},timeEstimatedHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},issueType:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"}}},title:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"},number:{type:"integer",description:"\u5de5\u4f5c\u9879\u7f16\u53f7"},creator:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005\u540d\u79f0"}}},parent:{type:"object",properties:{id:{type:"string",description:"\u7236\u5de5\u4f5c\u9879ID"},title:{type:"string",description:"\u7236\u5de5\u4f5c\u9879\u6807\u9898"}}},priority:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7\u540d\u79f0"}}},project:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76eeID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76ee\u540d\u79f0"}}},timeRemainingHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},sprint:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3\u540d\u79f0"}}},status:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u540d\u79f0"},category:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u7c7b\u578b"}}},subIssueType:{type:"object",properties:{id:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578bID"},name:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"}}},subIssueCount:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u603b\u6570"},subIssueDoneCount:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u72b6\u6001\u4e3a\u5b8c\u6210\u7684\u603b\u6570"},subIssues:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879ID"},title:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u6807\u9898"}}}},totalTimeEstimatedHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},timeSpentHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},totalTimeRemainingHour:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},id:{type:"string",description:"\u5de5\u4f5c\u9879ID"},attachments:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6ID"},name:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u540d\u79f0"},createTime:{type:"integer",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u521b\u5efa\u65f6\u95f4"}}}}},title:"ListItem"}}}},401:{description:"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},403:{description:"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},404:{description:"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{result:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},errorCode:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},errorMsg:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"}},title:"BadResponse"}}}}},method:"get",path:"/project/team/{teamID}/issues/{issueID}",servers:[{url:"https://your-domain/rest/api/v1"},{url:"http://your-domain/rest/api/v1"}],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://ones.com/oauth2/authorize",tokenUrl:"https://ones.com/oauth2/token",scopes:{"write:project:issue":"\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u5de5\u4f5c\u9879","read:project:issue":"\u83b7\u53d6\u5de5\u4f5c\u9879\u4fe1\u606f"}}}}},info:{title:"Issue",version:"1.0",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u5de5\u4f5c\u9879\u3002\n"},postman:{name:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",description:{content:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",type:"text/plain"},url:{path:["project","team",":teamID","issues",":issueID"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) \u56e2\u961fID",type:"text/plain"},type:"any",value:"",key:"teamID"},{disabled:!1,description:{content:"(Required) \u5de5\u4f5c\u9879ID",type:"text/plain"},type:"any",value:"",key:"issueID"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/issue/issue",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u5220\u9664\u5de5\u4f5c\u9879",permalink:"/zh-CN/docs/next/openapi/api/issue/delete-a-issue"},next:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5217\u8868",permalink:"/zh-CN/docs/next/openapi/api/issue/get-a-list-of-issues"}},g={},h=[{value:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f",level:2}],k={toc:h};function I(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f"},"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("p",null,"\u83b7\u53d6\u5de5\u4f5c\u9879\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"teamID",in:"path",description:"\u56e2\u961fID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"issueID",in:"path",description:"\u5de5\u4f5c\u9879ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u8bf7\u6c42\u6210\u529f")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"assignee"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u8d1f\u8d23\u4ebaID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"dueDate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u622a\u6b62\u65e5\u671f"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"timeEstimatedHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"issueType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578bID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6807\u9898"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"number",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u7f16\u53f7"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"creator"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u521b\u5efa\u8005\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"parent"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7236\u5de5\u4f5c\u9879ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7236\u5de5\u4f5c\u9879\u6807\u9898"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"priority"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u4f18\u5148\u7ea7\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"project"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76eeID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u9879\u76ee\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!1,name:"timeRemainingHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"sprint"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u6240\u5c5e\u8fed\u4ee3\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"status"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u72b6\u6001\u7c7b\u578b"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"subIssueType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578bID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u7c7b\u578b\u540d\u79f0"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!1,name:"subIssueCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u603b\u6570"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"subIssueDoneCount",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5b50\u5de5\u4f5c\u9879\u72b6\u6001\u4e3a\u5b8c\u6210\u7684\u603b\u6570"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"subIssues"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5b50\u5de5\u4f5c\u9879\u6807\u9898"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(o.Z,{collapsible:!1,name:"totalTimeEstimatedHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u9884\u4f30\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"timeSpentHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u5df2\u767b\u8bb0\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"totalTimeRemainingHour",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u603b\u5269\u4f59\u5de5\u65f6\uff0c\u5355\u4f4d\uff08\u5c0f\u65f6\uff09"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"attachments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6ID"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u540d\u79f0"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"createTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5de5\u4f5c\u9879\u9644\u4ef6\u521b\u5efa\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "assignee": {\n    "id": "string",\n    "name": "string"\n  },\n  "createTime": 0,\n  "dueDate": "string",\n  "timeEstimatedHour": 0,\n  "issueType": {\n    "id": "string",\n    "name": "string"\n  },\n  "title": "string",\n  "number": 0,\n  "creator": {\n    "id": "string",\n    "name": "string"\n  },\n  "parent": {\n    "id": "string",\n    "title": "string"\n  },\n  "priority": {\n    "id": "string",\n    "name": "string"\n  },\n  "project": {\n    "id": "string",\n    "name": "string"\n  },\n  "timeRemainingHour": 0,\n  "sprint": {\n    "id": "string",\n    "name": "string"\n  },\n  "status": {\n    "id": "string",\n    "name": "string",\n    "category": "string"\n  },\n  "subIssueType": {\n    "id": "string",\n    "name": "string"\n  },\n  "subIssueCount": 0,\n  "subIssueDoneCount": 0,\n  "subIssues": [\n    {\n      "id": "string",\n      "title": "string"\n    }\n  ],\n  "totalTimeEstimatedHour": 0,\n  "timeSpentHour": 0,\n  "totalTimeRemainingHour": 0,\n  "id": "string",\n  "attachments": [\n    {\n      "id": "string",\n      "name": "string",\n      "createTime": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u8eab\u4efd\u9a8c\u8bc1\u51ed\u636e\u4e0d\u6b63\u786e\u6216\u4e22\u5931\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679cscope\u68c0\u9a8c\u4e0d\u901a\u8fc7\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u672a\u627e\u5230\u8d44\u6e90\u5bf9\u8c61\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u7ed3\u679c,SUCCESS|FAIL"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(m.Z,{responseExample:'{\n  "result": "string",\n  "errorCode": "string",\n  "errorMsg": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}I.isMDXComponent=!0}}]);