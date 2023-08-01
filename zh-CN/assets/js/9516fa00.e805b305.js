"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[74748],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=o(a),s=n,c=u["".concat(d,".").concat(s)]||u[s]||m[s]||l;return a?r.createElement(c,p(p({ref:e},k),{},{components:a})):r.createElement(c,p({ref:e},k))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69113:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={},p="\u62a5\u544a",i={unversionedId:"api/testcase/report/report",id:"version-1.x/api/testcase/report/report",title:"\u62a5\u544a",description:"model \u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/api/testcase/report/report.md",sourceDirName:"api/testcase/report",slug:"/api/testcase/report/",permalink:"/open-docs/zh-CN/docs/api/testcase/report/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u5173\u8054\u8ba1\u5212",permalink:"/open-docs/zh-CN/docs/api/testcase/related_project/"},next:{title:"\u4ea7\u54c1\u7ba1\u7406",permalink:"/open-docs/zh-CN/docs/api/product/"}},d={},o=[{value:"model \u8bf4\u660e",id:"model-\u8bf4\u660e",level:2},{value:"error",id:"error",level:3},{value:"TestCaseReportPayload",id:"testcasereportpayload",level:3},{value:"TaskInReport",id:"taskinreport",level:3},{value:"ImportantFieldConfig",id:"importantfieldconfig",level:3},{value:"API \u8bf4\u660e",id:"api-\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u6d4b\u8bd5\u62a5\u544a",id:"\u67e5\u770b\u6d4b\u8bd5\u62a5\u544a",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b",level:4},{value:"\u66f4\u65b0\u6d4b\u8bd5\u62a5\u544a",id:"\u66f4\u65b0\u6d4b\u8bd5\u62a5\u544a",level:3},{value:"URL",id:"url-1",level:4},{value:"HTTP Method",id:"http-method-1",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-1",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-1",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-1",level:4},{value:"\u5bfc\u51fa\u6d4b\u8bd5\u62a5\u544a",id:"\u5bfc\u51fa\u6d4b\u8bd5\u62a5\u544a",level:3},{value:"URL",id:"url-2",level:4},{value:"HTTP Method",id:"http-method-2",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-2",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-2",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-2",level:4},{value:"\u4e0b\u8f7d\u6d4b\u8bd5\u62a5\u544a",id:"\u4e0b\u8f7d\u6d4b\u8bd5\u62a5\u544a",level:3},{value:"URL",id:"url-3",level:4},{value:"HTTP Method",id:"http-method-3",level:4},{value:"\u662f\u5426\u9700\u8981\u767b\u5f55",id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3",level:4},{value:"\u4f20\u503c\u65b9\u5f0f",id:"\u4f20\u503c\u65b9\u5f0f-3",level:4},{value:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868",id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8fd4\u56de\u53c2\u6570\u5217\u8868",id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b-3",level:4},{value:"\u8fd4\u56de\u793a\u4f8b",id:"\u8fd4\u56de\u793a\u4f8b-3",level:4}],k={toc:o};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u62a5\u544a"},"\u62a5\u544a"),(0,n.kt)("h2",{id:"model-\u8bf4\u660e"},"model \u8bf4\u660e"),(0,n.kt)("h3",{id:"error"},"error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u8303\u56f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d6\u503c\u4f8b\u5b50"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u66f4\u65b0\u65f6\u95f4\u6233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'"OK"'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7c7b\u578b")))),(0,n.kt)("h3",{id:"testcasereportpayload"},"TestCaseReportPayload"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5e9f\u5f03\u5b57\u6bb5\uff0c\u53ef\u5ffd\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"end_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5e9f\u5f03\u5b57\u6bb5\uff0c\u53ef\u5ffd\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"related_task"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[][taskinreport]","(#TaskInReport)"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"related_task_uuids"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"important_field_uuids"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]string"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"taskinreport"},"TaskInReport"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"project_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"issue_type_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status_category_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"important_field_configs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[][importantfieldconfig]","(#ImportantFieldConfig)"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"importantfieldconfig"},"ImportantFieldConfig"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"background_color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"field_uuid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"api-\u8bf4\u660e"},"API \u8bf4\u660e"),(0,n.kt)("h3",{id:"\u67e5\u770b\u6d4b\u8bd5\u62a5\u544a"},"\u67e5\u770b\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("p",null,"\u67e5\u770b\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("h4",{id:"url"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/view_report"),(0,n.kt)("h4",{id:"http-method"},"HTTP Method"),(0,n.kt)("p",null,"Get"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[][testcasereportpayload]","(#TestCaseReportPayload)"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/view_report' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache'\n")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reports": [\n    {\n      "uuid": "5cSLDuk6",\n      "start_time": 0,\n      "end_time": 0,\n      "summary": "{\\"component_uuids\\":[\\"l9Q3HqIy-overview\\",\\"QWPhPxZv-result_distribute\\",\\"TKCjsRSP-field_distribute\\",\\"oJpn6SpG-module_distribute\\",\\"OBff9kWG-task_list\\"],\\"component_config\\":{\\"OBff9kWG-task_list\\":{\\"header_config\\":[{\\"uuid\\":\\"field015\\"},{\\"uuid\\":\\"field001\\"},{\\"uuid\\":\\"field012\\"},{\\"uuid\\":\\"field004\\"},{\\"uuid\\":\\"field005\\"}]}}}",\n      "title": "report3",\n      "related_task": null,\n      "related_task_uuids": ["BWxt3PAWbpFhBA23"],\n      "important_field_uuids": ["field012", "field004"]\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"\u66f4\u65b0\u6d4b\u8bd5\u62a5\u544a"},"\u66f4\u65b0\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("p",null,"\u66f4\u65b0\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("h4",{id:"url-1"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/update_report"),(0,n.kt)("h4",{id:"http-method-1"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-1"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-1"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-1"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#TestCaseReportPayload"},"TestCaseReportPayload model")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-1"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#error"},"error")),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-1"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST \\\n  \'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/update_report\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP\' \\\n  -H \'Ones-User-Id: 6ZpgEzkk\' \\\n  -H \'cache-control: no-cache\' \\\n  -d \'{"uuid":"5cSLDuk6","start_time":0,"end_time":0,"title":"report3","summary":"{\\"component_uuids\\":[\\"l9Q3HqIy-overview\\",\\"QWPhPxZv-result_distribute\\",\\"TKCjsRSP-field_distribute\\",\\"oJpn6SpG-module_distribute\\",\\"OBff9kWG-task_list\\"],\\"component_config\\":{\\"OBff9kWG-task_list\\":{\\"header_config\\":[{\\"uuid\\":\\"field015\\"},{\\"uuid\\":\\"field001\\"},{\\"uuid\\":\\"field012\\"},{\\"uuid\\":\\"field004\\"},{\\"uuid\\":\\"field005\\"}]},\\"l9Q3HqIy-overview\\":{\\"start_time\\":1670256000}}}"}\'\n')),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-1"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,n.kt)("h3",{id:"\u5bfc\u51fa\u6d4b\u8bd5\u62a5\u544a"},"\u5bfc\u51fa\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("p",null,"\u5bfc\u51fa\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("h4",{id:"url-2"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/export_report"),(0,n.kt)("h4",{id:"http-method-2"},"HTTP Method"),(0,n.kt)("p",null,"POST"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-2"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-2"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-2"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u7a7a"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"html"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6d4b\u8bd5\u62a5\u544a\u6a21\u677f")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-2"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#error"},"error")),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-2"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X POST \\\n  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/export_report' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache' \\\n  -d '{\"html\":\"\\n      <html>\\n        <body>\\n          <h1>report3</h1>...        </body>\\n      </html>\\n    \"}'\n")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-2"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "errcode": "OK",\n  "type": "OK"\n}\n')),(0,n.kt)("h3",{id:"\u4e0b\u8f7d\u6d4b\u8bd5\u62a5\u544a"},"\u4e0b\u8f7d\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u6d4b\u8bd5\u62a5\u544a"),(0,n.kt)("h4",{id:"url-3"},"URL"),(0,n.kt)("p",null,"https://your-host-name/project/api/projectteam/:teamUUID/testcase/report/:reportUUID/download"),(0,n.kt)("h4",{id:"http-method-3"},"HTTP Method"),(0,n.kt)("p",null,"GET"),(0,n.kt)("h4",{id:"\u662f\u5426\u9700\u8981\u767b\u5f55-3"},"\u662f\u5426\u9700\u8981\u767b\u5f55"),(0,n.kt)("p",null,"\u662f"),(0,n.kt)("h4",{id:"\u4f20\u503c\u65b9\u5f0f-3"},"\u4f20\u503c\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u53c2\u6570\u5217\u8868-3"},"\u8bf7\u6c42\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c2\u6570\u5217\u8868-3"},"\u8fd4\u56de\u53c2\u6570\u5217\u8868"),(0,n.kt)("p",null,"\u6587\u4ef6"),(0,n.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b-3"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n  'https://your-host-name/project/api/project/team/3QKyQ54X/testcase/report/5cSLDuk6/download' \\\n  -H 'Ones-Auth-Token: si83t7NzOvAspJ4L7RhKparuw9FvAsy7z3UupTCiGxhd7zEO2cBIG12vrw31sPRP' \\\n  -H 'Ones-User-Id: 6ZpgEzkk' \\\n  -H 'cache-control: no-cache' \\\n  --output /tmp/report.docx\n")),(0,n.kt)("h4",{id:"\u8fd4\u56de\u793a\u4f8b-3"},"\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"HTTP/2 200\ncontent-type: application/octet-stream\n")))}m.isMDXComponent=!0}}]);