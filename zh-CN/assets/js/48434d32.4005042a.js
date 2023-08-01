"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[23829],{11284:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=i(87462),a=(i(67294),i(3905)),s=i(70603),n=i(48147),p=i(61045),o=i(86776),d=i(69128),c=i(83329),l=(i(3186),i(18679));const m={id:"apply-for-authorization-code",title:"\u7533\u8bf7\u6388\u6743\u7801",description:"\u7533\u8bf7\u6388\u6743\u7801",sidebar_label:"\u7533\u8bf7\u6388\u6743\u7801",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"apply-for-authorization-code",description:"\u7533\u8bf7\u6388\u6743\u7801",parameters:[{name:"client_id",required:!0,in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID",schema:{type:"string"}},{name:"response_type",required:!0,in:"query",description:"\u56fa\u5b9a\u503c code",schema:{type:"string"}},{name:"redirect_uri",in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Redirect URI\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u540e\u5c06\u643a\u5e26\u6388\u6743\u7801\u91cd\u5b9a\u5411\u81f3\u8be5\u5730\u5740",schema:{type:"string"}},{name:"scope",in:"query",description:"\u9017\u53f7,\u5206\u9694\u7684Scope\u5217\u8868\uff0c\u5fc5\u987b\u662fOAuth\u5e94\u7528\u914d\u7f6eScope\u7684\u5b50\u96c6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Scope",schema:{type:"string"}},{name:"state",in:"query",description:"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5b83\u6765\u7ef4\u62a4\u8bf7\u6c42\u548c\u56de\u8c03\u4e4b\u95f4\u7684\u72b6\u6001\uff0c\u6700\u7ec8\u5c06\u539f\u6837\u8fd4\u56de",schema:{type:"string"}}],responses:{302:{description:"\u91cd\u5b9a\u5411\u81f3Redirect URI\uff0c\u5e76\u4e14\u5728URL\u53c2\u6570\u4e2d\u6dfb\u52a0code\u3001state\u4e24\u4e2a\u53c2\u6570"},400:{description:"\u65e0\u6548\u7684\u8bf7\u6c42",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},401:{description:"\u5982\u679c\u6388\u6743\u7c7b\u578b\u4e0d\u5bf9\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}}},method:"get",path:"/oauth2/authorize",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],info:{title:"Auth",version:"1.0",description:"ONES REST API\u91c7\u7528\u6807\u51c6\u7684OAuth 2.0\u6388\u6743\u673a\u5236\uff0c\u65e8\u5728\u4e3a\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5b89\u5168\u7684\u7528\u6237\u6388\u6743\u548c\u8bbf\u95ee\u4ee4\u724c\uff0c\u4ee5\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684\u8d44\u6e90\u3002OAuth 2.0\u5141\u8bb8\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4e00\u79cd\u5b89\u5168\u3001\u53ef\u63a7\u7684\u65b9\u5f0f\u83b7\u53d6\u6709\u9650\u4e14\u53ef\u64a4\u9500\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u7684\u51ed\u8bc1\u3002\u8fd9\u79cd\u6388\u6743\u673a\u5236\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u4e14\u53ef\u9760\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4e0eONES\u7cfb\u7edf\u8fdb\u884c\u5b89\u5168\u4e92\u52a8\uff0c\u5e76\u83b7\u53d6\u6240\u9700\u7684\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u3002\n"},postman:{name:"\u7533\u8bf7\u6388\u6743\u7801",description:{content:"\u7533\u8bf7\u6388\u6743\u7801",type:"text/plain"},url:{path:["oauth2","authorize"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) \u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID",type:"text/plain"},key:"client_id",value:""},{disabled:!1,description:{content:"(Required) \u56fa\u5b9a\u503c code",type:"text/plain"},key:"response_type",value:""},{disabled:!1,description:{content:"\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Redirect URI\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u540e\u5c06\u643a\u5e26\u6388\u6743\u7801\u91cd\u5b9a\u5411\u81f3\u8be5\u5730\u5740",type:"text/plain"},key:"redirect_uri",value:""},{disabled:!1,description:{content:"\u9017\u53f7,\u5206\u9694\u7684Scope\u5217\u8868\uff0c\u5fc5\u987b\u662fOAuth\u5e94\u7528\u914d\u7f6eScope\u7684\u5b50\u96c6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Scope",type:"text/plain"},key:"scope",value:""},{disabled:!1,description:{content:"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5b83\u6765\u7ef4\u62a4\u8bf7\u6c42\u548c\u56de\u8c03\u4e4b\u95f4\u7684\u72b6\u6001\uff0c\u6700\u7ec8\u5c06\u539f\u6837\u8fd4\u56de",type:"text/plain"},key:"state",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/auth/auth",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/api/auth/apply-for-authorization-code",id:"openapi/api/auth/apply-for-authorization-code",title:"\u7533\u8bf7\u6388\u6743\u7801",description:"\u7533\u8bf7\u6388\u6743\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/auth/apply-for-authorization-code.api.mdx",sourceDirName:"openapi/api/auth",slug:"/openapi/api/auth/apply-for-authorization-code",permalink:"/open-docs/zh-CN/docs/next/openapi/api/auth/apply-for-authorization-code",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{id:"apply-for-authorization-code",title:"\u7533\u8bf7\u6388\u6743\u7801",description:"\u7533\u8bf7\u6388\u6743\u7801",sidebar_label:"\u7533\u8bf7\u6388\u6743\u7801",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"apply-for-authorization-code",description:"\u7533\u8bf7\u6388\u6743\u7801",parameters:[{name:"client_id",required:!0,in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID",schema:{type:"string"}},{name:"response_type",required:!0,in:"query",description:"\u56fa\u5b9a\u503c code",schema:{type:"string"}},{name:"redirect_uri",in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Redirect URI\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u540e\u5c06\u643a\u5e26\u6388\u6743\u7801\u91cd\u5b9a\u5411\u81f3\u8be5\u5730\u5740",schema:{type:"string"}},{name:"scope",in:"query",description:"\u9017\u53f7,\u5206\u9694\u7684Scope\u5217\u8868\uff0c\u5fc5\u987b\u662fOAuth\u5e94\u7528\u914d\u7f6eScope\u7684\u5b50\u96c6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Scope",schema:{type:"string"}},{name:"state",in:"query",description:"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5b83\u6765\u7ef4\u62a4\u8bf7\u6c42\u548c\u56de\u8c03\u4e4b\u95f4\u7684\u72b6\u6001\uff0c\u6700\u7ec8\u5c06\u539f\u6837\u8fd4\u56de",schema:{type:"string"}}],responses:{302:{description:"\u91cd\u5b9a\u5411\u81f3Redirect URI\uff0c\u5e76\u4e14\u5728URL\u53c2\u6570\u4e2d\u6dfb\u52a0code\u3001state\u4e24\u4e2a\u53c2\u6570"},400:{description:"\u65e0\u6548\u7684\u8bf7\u6c42",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},401:{description:"\u5982\u679c\u6388\u6743\u7c7b\u578b\u4e0d\u5bf9\uff0c\u5219\u8fd4\u56de",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}},500:{description:"\u5185\u90e8\u670d\u52a1\u9519\u8bef",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},error_description:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},code:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},errcode:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},type:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},model:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},field:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},reason:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"}},title:"BadResponse"}}}}},method:"get",path:"/oauth2/authorize",servers:[{url:"https://your-domain"},{url:"http://your-domain"}],info:{title:"Auth",version:"1.0",description:"ONES REST API\u91c7\u7528\u6807\u51c6\u7684OAuth 2.0\u6388\u6743\u673a\u5236\uff0c\u65e8\u5728\u4e3a\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5b89\u5168\u7684\u7528\u6237\u6388\u6743\u548c\u8bbf\u95ee\u4ee4\u724c\uff0c\u4ee5\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684\u8d44\u6e90\u3002OAuth 2.0\u5141\u8bb8\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4e00\u79cd\u5b89\u5168\u3001\u53ef\u63a7\u7684\u65b9\u5f0f\u83b7\u53d6\u6709\u9650\u4e14\u53ef\u64a4\u9500\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u4f7f\u7528\u7528\u6237\u7684\u51ed\u8bc1\u3002\u8fd9\u79cd\u6388\u6743\u673a\u5236\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u4e14\u53ef\u9760\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4e0eONES\u7cfb\u7edf\u8fdb\u884c\u5b89\u5168\u4e92\u52a8\uff0c\u5e76\u83b7\u53d6\u6240\u9700\u7684\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\u3002\n"},postman:{name:"\u7533\u8bf7\u6388\u6743\u7801",description:{content:"\u7533\u8bf7\u6388\u6743\u7801",type:"text/plain"},url:{path:["oauth2","authorize"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) \u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID",type:"text/plain"},key:"client_id",value:""},{disabled:!1,description:{content:"(Required) \u56fa\u5b9a\u503c code",type:"text/plain"},key:"response_type",value:""},{disabled:!1,description:{content:"\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Redirect URI\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u540e\u5c06\u643a\u5e26\u6388\u6743\u7801\u91cd\u5b9a\u5411\u81f3\u8be5\u5730\u5740",type:"text/plain"},key:"redirect_uri",value:""},{disabled:!1,description:{content:"\u9017\u53f7,\u5206\u9694\u7684Scope\u5217\u8868\uff0c\u5fc5\u987b\u662fOAuth\u5e94\u7528\u914d\u7f6eScope\u7684\u5b50\u96c6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Scope",type:"text/plain"},key:"scope",value:""},{disabled:!1,description:{content:"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5b83\u6765\u7ef4\u62a4\u8bf7\u6c42\u548c\u56de\u8c03\u4e4b\u95f4\u7684\u72b6\u6001\uff0c\u6700\u7ec8\u5c06\u539f\u6837\u8fd4\u56de",type:"text/plain"},key:"state",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/current/openapi/api/auth/auth",custom_edit_url:null},sidebar:"openapi",previous:{title:"\u4ecb\u7ecd",permalink:"/open-docs/zh-CN/docs/next/openapi/api/auth/auth"},next:{title:"\u7533\u8bf7\u6216\u8005\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c",permalink:"/open-docs/zh-CN/docs/next/openapi/api/auth/apply-for-or-refresh-access-token"}},h={},g=[{value:"\u7533\u8bf7\u6388\u6743\u7801",id:"\u7533\u8bf7\u6388\u6743\u7801",level:2}],k={toc:g};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7533\u8bf7\u6388\u6743\u7801"},"\u7533\u8bf7\u6388\u6743\u7801"),(0,a.kt)("p",null,"\u7533\u8bf7\u6388\u6743\u7801"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"client_id",required:!0,in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u5f97\u5230\u7684Client ID",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"response_type",required:!0,in:"query",description:"\u56fa\u5b9a\u503c code",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"redirect_uri",in:"query",description:"\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Redirect URI\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u540e\u5c06\u643a\u5e26\u6388\u6743\u7801\u91cd\u5b9a\u5411\u81f3\u8be5\u5730\u5740",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"scope",in:"query",description:"\u9017\u53f7,\u5206\u9694\u7684Scope\u5217\u8868\uff0c\u5fc5\u987b\u662fOAuth\u5e94\u7528\u914d\u7f6eScope\u7684\u5b50\u96c6\uff0c\u9ed8\u8ba4\u4f7f\u7528\u521b\u5efaOAuth\u5e94\u7528\u65f6\u914d\u7f6e\u7684Scope",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"state",in:"query",description:"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u5b83\u6765\u7ef4\u62a4\u8bf7\u6c42\u548c\u56de\u8c03\u4e4b\u95f4\u7684\u72b6\u6001\uff0c\u6700\u7ec8\u5c06\u539f\u6837\u8fd4\u56de",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"302",value:"302",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u91cd\u5b9a\u5411\u81f3Redirect URI\uff0c\u5e76\u4e14\u5728URL\u53c2\u6570\u4e2d\u6dfb\u52a0code\u3001state\u4e24\u4e2a\u53c2\u6570")),(0,a.kt)("div",null)),(0,a.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u65e0\u6548\u7684\u8bf7\u6c42")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5982\u679c\u6388\u6743\u7c7b\u578b\u4e0d\u5bf9\uff0c\u5219\u8fd4\u56de")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"\u5185\u90e8\u670d\u52a1\u9519\u8bef")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"error_description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\u8be6\u60c5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684httpStatusCode"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"errcode",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7801"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"model",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u6a21\u5757"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u5b57\u6bb5"},mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u672c\u6b21\u8bf7\u6c42\u54cd\u5e94\u7684\u9519\u8bef\u539f\u56e0"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "error_description": "string",\n  "code": 0,\n  "errcode": 0,\n  "type": "string",\n  "model": "string",\n  "field": "string",\n  "reason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);