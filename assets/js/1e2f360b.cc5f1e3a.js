(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[84089],{62976:(t,e,n)=>{"use strict";n(67294),n(93162)},51889:(t,e,n)=>{"use strict";n(67294),n(79524),n(7909)},31361:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),o=(n(51889),n(83329)),i=n(18679);n(62976);const r={id:"issue-attachments",title:"Issue attachments",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u=void 0,c={unversionedId:"openapi/api/issue-attachments/issue-attachments",id:"openapi/api/issue-attachments/issue-attachments",title:"Issue attachments",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.",source:"@site/docs/openapi/api/issue-attachments/issue-attachments.info.mdx",sourceDirName:"openapi/api/issue-attachments",slug:"/openapi/api/issue-attachments/issue-attachments",permalink:"/open-docs/docs/next/openapi/api/issue-attachments/issue-attachments",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:0,frontMatter:{id:"issue-attachments",title:"Issue attachments",description:"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"Update a issue",permalink:"/open-docs/docs/next/openapi/api/issue/update-a-issue"},next:{title:"Delete a issue attachment",permalink:"/open-docs/docs/next/openapi/api/issue-attachments/delete-a-issue-attachment"}},l={},d=[],p={toc:d};function m(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,s.kt)("h1",{id:"issue-attachments"},"Issue attachments"),(0,s.kt)("p",null,"This resource represents issue attachments. Use it to get, create, update, and delete issue attachments."),(0,s.kt)("div",{style:{marginBottom:"2rem"}},(0,s.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,s.kt)(o.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,s.kt)(i.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("table",null,(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Security Scheme Type:"),(0,s.kt)("td",null,"oauth2")),(0,s.kt)("tr",null,(0,s.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,s.kt)("td",null,(0,s.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,s.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,s.kt)("span",null,"Scopes:"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"read:project:issue-attachment: Access issue attachment information"),(0,s.kt)("li",null,"write:project:issue-attachment: Add, edit, delete issue attachment")))))))))))}m.isMDXComponent=!0},93162:function(t,e,n){var a,s,o,i=n(25108);s=[],a=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function a(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){c(a.response,e,n)},a.onerror=function(){i.error("could not download file")},a.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,u=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(t,e,n){var i=r.URL||r.webkitURL,u=document.createElement("a");e=e||t.name||"download",u.download=e,u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?o(u):s(u.href)?a(t,e,n):o(u,u.target="_blank")):(u.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(u.href)}),4e4),setTimeout((function(){o(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),n);else if(s(t))a(t,n,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){o(r)}))}}:function(t,e,n,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var o="application/octet-stream"===t.type,i=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&i||u)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},l.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,p=d.createObjectURL(t);s?s.location=p:location.href=p,s=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});r.saveAs=c.saveAs=c,t.exports=c},void 0===(o="function"==typeof a?a.apply(e,s):a)||(t.exports=o)}}]);