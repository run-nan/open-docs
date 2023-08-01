(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[67222],{62976:(t,e,s)=>{"use strict";s(67294),s(93162)},51889:(t,e,s)=>{"use strict";s(67294),s(79524),s(7909)},37499:(t,e,s)=>{"use strict";s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var o=s(87462),i=(s(67294),s(3905)),n=(s(51889),s(83329)),a=s(18679);s(62976);const u={id:"issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},r=void 0,l={unversionedId:"openapi/api/issue-status/issue-status",id:"version-1.x/openapi/api/issue-status/issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",source:"@site/versioned_docs/version-1.x/openapi/api/issue-status/issue-status.info.mdx",sourceDirName:"openapi/api/issue-status",slug:"/openapi/api/issue-status/issue-status",permalink:"/docs/openapi/api/issue-status/issue-status",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:0,frontMatter:{id:"issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a list of issue fields",permalink:"/docs/openapi/api/issue-fields/get-a-list-of-issue-fields"},next:{title:"Get a list of issue status",permalink:"/docs/openapi/api/issue-status/get-a-list-of-issue-status"}},c={},p=[],d={toc:p};function f(t){let{components:e,...s}=t;return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,i.kt)("h1",{id:"issue-status"},"Issue status"),(0,i.kt)("p",null,"This resource represents issue status. Use it to get issue status."),(0,i.kt)("div",{style:{marginBottom:"2rem"}},(0,i.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,i.kt)(n.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,i.kt)(a.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Security Scheme Type:"),(0,i.kt)("td",null,"oauth2")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,i.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,i.kt)("span",null,"Scopes:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"read:project:issueStatus: Access issue status")))))))))))}f.isMDXComponent=!0},93162:function(t,e,s){var o,i,n,a=s(25108);i=[],o=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(a.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,s){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){l(o.response,e,s)},o.onerror=function(){a.error("could not download file")},o.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,r=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,s){var a=u.URL||u.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?n(r):i(r.href)?o(t,e,s):n(r,r.target="_blank")):(r.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(r.href)}),4e4),setTimeout((function(){n(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,s,a){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),s);else if(i(t))o(t,s,a);else{var u=document.createElement("a");u.href=t,u.target="_blank",setTimeout((function(){n(u)}))}}:function(t,e,s,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,s);var n="application/octet-stream"===t.type,a=/constructor/i.test(u.HTMLElement)||u.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||n&&a||r)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},c.readAsDataURL(t)}else{var p=u.URL||u.webkitURL,d=p.createObjectURL(t);i?i.location=d:location.href=d,i=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});u.saveAs=l.saveAs=l,t.exports=l},void 0===(n="function"==typeof o?o.apply(e,i):o)||(t.exports=n)}}]);