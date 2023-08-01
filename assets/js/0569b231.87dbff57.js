(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[21625],{62976:(e,t,o)=>{"use strict";o(67294),o(93162)},51889:(e,t,o)=>{"use strict";o(67294),o(79524),o(7909)},70833:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>w,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var s=o(87462),n=(o(67294),o(3905)),i=(o(51889),o(83329)),r=o(18679);o(62976);const a={id:"issue-workflows",title:"Issue workflows",description:"This resource represents issue workflows. Use it to get, execute issue workflows.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,u={unversionedId:"openapi/api/issue-workflows/issue-workflows",id:"openapi/api/issue-workflows/issue-workflows",title:"Issue workflows",description:"This resource represents issue workflows. Use it to get, execute issue workflows.",source:"@site/docs/openapi/api/issue-workflows/issue-workflows.info.mdx",sourceDirName:"openapi/api/issue-workflows",slug:"/openapi/api/issue-workflows/issue-workflows",permalink:"/docs/next/openapi/api/issue-workflows/issue-workflows",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:0,frontMatter:{id:"issue-workflows",title:"Issue workflows",description:"This resource represents issue workflows. Use it to get, execute issue workflows.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a list of issue types",permalink:"/docs/next/openapi/api/issue-types/get-a-list-of-issue-types"},next:{title:"Execute workflow for issue",permalink:"/docs/next/openapi/api/issue-workflows/execute-workflow-for-issue"}},c={},p=[],d={toc:p};function w(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,n.kt)("h1",{id:"issue-workflows"},"Issue workflows"),(0,n.kt)("p",null,"This resource represents issue workflows. Use it to get, execute issue workflows."),(0,n.kt)("div",{style:{marginBottom:"2rem"}},(0,n.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,n.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,n.kt)(r.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"oauth2")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,n.kt)("td",null,(0,n.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,n.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,n.kt)("span",null,"Scopes:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"read:project:issue-workflow: Access issue workflow"),(0,n.kt)("li",null,"write:project:issue-workflow: Add, edit, delete issue workflow")))))))))))}w.isMDXComponent=!0},93162:function(e,t,o){var s,n,i,r=o(25108);n=[],s=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function s(e,t,o){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){u(s.response,t,o)},s.onerror=function(){r.error("could not download file")},s.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var r=a.URL||a.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):n(l.href)?s(e,t,o):i(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,r){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),o);else if(n(e))s(e,o,r);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){i(a)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return s(e,t,o);var i="application/octet-stream"===e.type,r=/constructor/i.test(a.HTMLElement)||a.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&r||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var p=a.URL||a.webkitURL,d=p.createObjectURL(e);n?n.location=d:location.href=d,n=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});a.saveAs=u.saveAs=u,e.exports=u},void 0===(i="function"==typeof s?s.apply(t,n):s)||(e.exports=i)}}]);