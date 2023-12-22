"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[257],{2467:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>k,default:()=>x,frontMatter:()=>h,metadata:()=>T,toc:()=>f});var s=t(28957),r=(t(50959),t(17942)),l=t(47811),m=(t(9600),t(55722)),i=t.n(m),o=(t(11721),t(93393)),n=t(71793),p=t(72704),d=t(19567),c=t(81225),u=t(91044);const h={id:"05-delete-a-project",title:"Delete a project",description:"Delete a project",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01T2zAQ/SsandqZkKR8XHJrIcwwQzsMgVOb6QhrEwtsyUgykHr837srfyXEAVqunGzLq92nfU/SbsFNBlZ4ZfSZ5BM+PtqTkICHPbGXWXMLkecDLsFFVmVkhTYnwYAJ1hk4iHKr/IpPfhbciNzH+/jKH3EMJrVZ8+Tzcj7gmbAiRTfWhTkaP9C1B5GenaBDRYHuc7CrrfBXMTCyY8HQwn2uLCB2b3NAJFEMqeCTgvtVRi6dt0oveVkO2ig1kC5QJnzcG6e2/NdQczJ2mdEOHP3fH4/psen/Et2B80w55vIoAucWeTLEOJHRHrSnGSLLEhUFeka3jqYV22HNTc0CokUyvaqCIoI88dvw+tZZ2TKzYD5GPLaCNuTlgIO1xh4bCW/zFMxZhPa7vX13y9edTYOjFNMilsAW+P7MGXl7EmmWQFBQs1w+uz4+ns5mnAhvB0+/np3zjcXwC7Cpcg6jnYBWSOs6uq2/TMhUaeVQsb+l4USxV55i1/thVnF4WfOO+Ajh4fhLH/M+txp9KsoQ7iTcL0h4TTSLUGP0KRLHhAWmdGSsJRlSQgiUXv6TTjajfw04mTd3oEl8Sj+IRNHyP/TU6Oll5VxrYsxY9ee5anbltuzU8k3IRiMkjkYmB7tk4hqVuAjZYEhqdMcWQiXuHRqYBV8f5P8H+afG3iiJG3ST+a2M7qL8oKX88PWTAYGY3Ea4/EALexSOaeNxBbmW7+D/B/o4JR8fxL+ZeMxZk7I13rtM7iL8sCb8qK8IOEP6rBYJm4F9AMsC3ncQ2+vvg+Q3k7wrf2uM95v0s0+clxX9WOzGhkrsqr4mDqjqnPBRXWQ2Tzcq2gK1DLU1hanK5NwmOCP2PnOT0WiFZ8OeNKlQeoR0apGp0cN+KHw6wxfs5l3hPiM9VWJoyveuvqwGBnyRmMdg0lx/QZMN4RuD17uBBm+j9gYlcdJ1+eqMYEX5oJM2wOhvL/AWlnLAQCo/YFWy1zoVC0L2Taku7qbeVxpVlIaVNPzRUEhKzfJF65LYqYS4Pxz3KD1IsT7HLWT4jhu7jeWG7NrhzeGxamBLQMxY/wkPA5ZnMjyFls/W4Ya/NCkuM86nIhwIdWvT05ttwCm6g6XPtmbcwxPKMcHkU5SgpaKW60/eWTdo8HXS9VSoqhhxkWlR3AgHyGxZ0nDVz5GOpXLiJqFWaoFVLrwA8tNl3XV9ZpuNXy/UO1itd5F4E+dkFKT+IKyioO8DsNER9mKoB4VerSNosHV5KudoHKMcwQZI1X8SYubXZm6d/rSW9jA5mZ5Pr6ZoTnukb8+2zfgcVfwXhN+Jyw==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/api/projects/project",custom_edit_url:null},k=void 0,T={unversionedId:"openapi/api/projects/05-delete-a-project",id:"openapi/api/projects/05-delete-a-project",title:"Delete a project",description:"Delete a project",source:"@site/docs/openapi/api/projects/05-delete-a-project.api.mdx",sourceDirName:"openapi/api/projects",slug:"/openapi/api/projects/05-delete-a-project",permalink:"/open-docs/docs/openapi/api/projects/05-delete-a-project",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",sidebarPosition:5,frontMatter:{id:"05-delete-a-project",title:"Delete a project",description:"Delete a project",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01T2zAQ/SsandqZkKR8XHJrIcwwQzsMgVOb6QhrEwtsyUgykHr837srfyXEAVqunGzLq92nfU/SbsFNBlZ4ZfSZ5BM+PtqTkICHPbGXWXMLkecDLsFFVmVkhTYnwYAJ1hk4iHKr/IpPfhbciNzH+/jKH3EMJrVZ8+Tzcj7gmbAiRTfWhTkaP9C1B5GenaBDRYHuc7CrrfBXMTCyY8HQwn2uLCB2b3NAJFEMqeCTgvtVRi6dt0oveVkO2ig1kC5QJnzcG6e2/NdQczJ2mdEOHP3fH4/psen/Et2B80w55vIoAucWeTLEOJHRHrSnGSLLEhUFeka3jqYV22HNTc0CokUyvaqCIoI88dvw+tZZ2TKzYD5GPLaCNuTlgIO1xh4bCW/zFMxZhPa7vX13y9edTYOjFNMilsAW+P7MGXl7EmmWQFBQs1w+uz4+ns5mnAhvB0+/np3zjcXwC7Cpcg6jnYBWSOs6uq2/TMhUaeVQsb+l4USxV55i1/thVnF4WfOO+Ajh4fhLH/M+txp9KsoQ7iTcL0h4TTSLUGP0KRLHhAWmdGSsJRlSQgiUXv6TTjajfw04mTd3oEl8Sj+IRNHyP/TU6Oll5VxrYsxY9ee5anbltuzU8k3IRiMkjkYmB7tk4hqVuAjZYEhqdMcWQiXuHRqYBV8f5P8H+afG3iiJG3ST+a2M7qL8oKX88PWTAYGY3Ea4/EALexSOaeNxBbmW7+D/B/o4JR8fxL+ZeMxZk7I13rtM7iL8sCb8qK8IOEP6rBYJm4F9AMsC3ncQ2+vvg+Q3k7wrf2uM95v0s0+clxX9WOzGhkrsqr4mDqjqnPBRXWQ2Tzcq2gK1DLU1hanK5NwmOCP2PnOT0WiFZ8OeNKlQeoR0apGp0cN+KHw6wxfs5l3hPiM9VWJoyveuvqwGBnyRmMdg0lx/QZMN4RuD17uBBm+j9gYlcdJ1+eqMYEX5oJM2wOhvL/AWlnLAQCo/YFWy1zoVC0L2Taku7qbeVxpVlIaVNPzRUEhKzfJF65LYqYS4Pxz3KD1IsT7HLWT4jhu7jeWG7NrhzeGxamBLQMxY/wkPA5ZnMjyFls/W4Ya/NCkuM86nIhwIdWvT05ttwCm6g6XPtmbcwxPKMcHkU5SgpaKW60/eWTdo8HXS9VSoqhhxkWlR3AgHyGxZ0nDVz5GOpXLiJqFWaoFVLrwA8tNl3XV9ZpuNXy/UO1itd5F4E+dkFKT+IKyioO8DsNER9mKoB4VerSNosHV5KudoHKMcwQZI1X8SYubXZm6d/rSW9jA5mZ5Pr6ZoTnukb8+2zfgcVfwXhN+Jyw==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/api/projects/project",custom_edit_url:null},sidebar:"openapi",previous:{title:"Update project by project ID",permalink:"/open-docs/docs/openapi/api/projects/04-update-project-by-project-id"},next:{title:"Introduction",permalink:"/open-docs/docs/openapi/api/issues/issues"}},y={},f=[{value:"Request",id:"request",level:2}],g={toc:f},b="wrapper";function x(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Delete a project"),(0,r.kt)(i(),{method:"delete",path:"/project/projects/{projectID}",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"Delete a project"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"projectID",in:"path",description:"The project ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"teamID",in:"query",description:"The team ID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(l.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request is successful.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'[\n  {\n    "result": "SUCCESS"\n  },\n  {\n    "result": "FAIL",\n    "errorCode": "PermissionDenied",\n    "errorMsg": "PermissionDenied administer_do"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the authentication credentials are incorrect or missing.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "FAIL",\n  "errorCode": "Unauthorized",\n  "errorMsg": "Access token is invalid"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(u.default,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns if the scope check fails.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "FAIL",\n  "errorCode": "Forbidden",\n  "errorMsg": "Scope is invalid"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Returned if the resource object was not found.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "FAIL",\n  "errorCode": "NotFound",\n  "errorMsg": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(u.default,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The result of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The error code of this request."},mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorMsg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error message for this request."},mdxType:"SchemaItem"})))),(0,r.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "result": "FAIL",\n  "errorCode": "Internal Server Error",\n  "errorMsg": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);