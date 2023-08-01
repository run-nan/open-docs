(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[27657],{62976:(t,e,s)=>{"use strict";s(67294),s(93162)},51889:(t,e,s)=>{"use strict";s(67294),s(79524),s(7909)},52008:(t,e,s)=>{"use strict";s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var n=s(87462),o=(s(67294),s(3905)),a=(s(51889),s(83329)),i=s(18679);s(62976);const u={id:"issue-status",title:"Issue status",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u72b6\u6001\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,l={unversionedId:"openapi/api/issue-status/issue-status",id:"openapi/api/issue-status/issue-status",title:"Issue status",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u72b6\u6001\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-status/issue-status.info.mdx",sourceDirName:"openapi/api/issue-status",slug:"/openapi/api/issue-status/issue-status",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-status/issue-status",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:0,frontMatter:{id:"issue-status",title:"Issue status",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u72b6\u6001\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-fields/get-a-list-of-issue-fields"},next:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-status/get-a-list-of-issue-status"}},c={},p=[],d={toc:p};function f(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,o.kt)("h1",{id:"issue-status"},"Issue status"),(0,o.kt)("p",null,"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u72b6\u6001\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001\u3002"),(0,o.kt)("div",{style:{marginBottom:"2rem"}},(0,o.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,o.kt)(a.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,o.kt)(i.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Security Scheme Type:"),(0,o.kt)("td",null,"oauth2")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,o.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,o.kt)("span",null,"Scopes:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"read:project:issueStatus: \u83b7\u53d6\u5de5\u4f5c\u9879\u72b6\u6001")))))))))))}f.isMDXComponent=!0},93162:function(t,e,s){var n,o,a,i=s(25108);o=[],n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,s){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,s)},n.onerror=function(){i.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,r=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,s){var i=u.URL||u.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?a(r):o(r.href)?n(t,e,s):a(r,r.target="_blank")):(r.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(r.href)}),4e4),setTimeout((function(){a(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,s,i){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),s);else if(o(t))n(t,s,i);else{var u=document.createElement("a");u.href=t,u.target="_blank",setTimeout((function(){a(u)}))}}:function(t,e,s,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,s);var a="application/octet-stream"===t.type,i=/constructor/i.test(u.HTMLElement)||u.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&i||r)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var p=u.URL||u.webkitURL,d=p.createObjectURL(t);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});u.saveAs=l.saveAs=l,t.exports=l},void 0===(a="function"==typeof n?n.apply(e,o):n)||(t.exports=a)}}]);