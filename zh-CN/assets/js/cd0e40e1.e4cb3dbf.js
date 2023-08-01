(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[1865],{62976:(e,t,n)=>{"use strict";n(67294),n(93162)},51889:(e,t,n)=>{"use strict";n(67294),n(79524),n(7909)},69802:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(87462),i=(n(67294),n(3905)),s=(n(51889),n(83329)),a=n(18679);n(62976);const l={id:"issue-fields",title:"Issue fields",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5c5e\u6027\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,u={unversionedId:"openapi/api/issue-fields/issue-fields",id:"openapi/api/issue-fields/issue-fields",title:"Issue fields",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5c5e\u6027\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/issue-fields/issue-fields.info.mdx",sourceDirName:"openapi/api/issue-fields",slug:"/openapi/api/issue-fields/issue-fields",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-fields/issue-fields",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:0,frontMatter:{id:"issue-fields",title:"Issue fields",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5c5e\u6027\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"\u4e0a\u4f20\u6587\u4ef6\u5230\u5de5\u4f5c\u9879",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-attachments/upload-a-file-to-the-issue"},next:{title:"\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u5217\u8868",permalink:"/open-docs/zh-CN/docs/next/openapi/api/issue-fields/get-a-list-of-issue-fields"}},d={},c=[],p={toc:c};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,i.kt)("h1",{id:"issue-fields"},"Issue fields"),(0,i.kt)("p",null,"\u6b64\u8d44\u6e90\u4ee3\u8868\u5de5\u4f5c\u9879\u5c5e\u6027\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027\u3002"),(0,i.kt)("div",{style:{marginBottom:"2rem"}},(0,i.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,i.kt)(s.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,i.kt)(a.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Security Scheme Type:"),(0,i.kt)("td",null,"oauth2")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,i.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,i.kt)("span",null,"Scopes:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"read:project:issueField: \u83b7\u53d6\u5de5\u4f5c\u9879\u5c5e\u6027")))))))))))}f.isMDXComponent=!0},93162:function(e,t,n){var o,i,s,a=n(25108);i=[],o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,n)},o.onerror=function(){a.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,n){var a=l.URL||l.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?s(r):i(r.href)?o(e,t,n):s(r,r.target="_blank")):(r.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(r.href)}),4e4),setTimeout((function(){s(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(i(e))o(e,n,a);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){s(l)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var s="application/octet-stream"===e.type,a=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&a||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},d.readAsDataURL(e)}else{var c=l.URL||l.webkitURL,p=c.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){c.revokeObjectURL(p)}),4e4)}});l.saveAs=u.saveAs=u,e.exports=u},void 0===(s="function"==typeof o?o.apply(t,i):o)||(e.exports=s)}}]);