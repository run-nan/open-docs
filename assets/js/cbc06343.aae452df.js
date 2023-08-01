(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[93323],{62976:(e,t,o)=>{"use strict";o(67294),o(93162)},51889:(e,t,o)=>{"use strict";o(67294),o(79524),o(7909)},26899:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905)),i=(o(51889),o(83329)),a=o(18679);o(62976);const s={id:"project",title:"Project",description:"This resource represents projects. Use it to get, create, update, and delete projects.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,l={unversionedId:"openapi/api/project/project",id:"version-1.x/openapi/api/project/project",title:"Project",description:"This resource represents projects. Use it to get, create, update, and delete projects.",source:"@site/versioned_docs/version-1.x/openapi/api/project/project.info.mdx",sourceDirName:"openapi/api/project",slug:"/openapi/api/project/project",permalink:"/docs/openapi/api/project/project",draft:!1,editUrl:null,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:0,frontMatter:{id:"project",title:"Project",description:"This resource represents projects. Use it to get, create, update, and delete projects.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a list of issue workflows",permalink:"/docs/openapi/api/issue-workflows/get-a-list-of-issue-workflows"},next:{title:"Create a new project",permalink:"/docs/openapi/api/project/create-a-new-project"}},p={},u=[],d={toc:u};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,r.kt)("h1",{id:"project"},"Project"),(0,r.kt)("p",null,"This resource represents projects. Use it to get, create, update, and delete projects."),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,r.kt)(a.Z,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"oauth2")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Token URL: https://ones.com/oauth2/token"),(0,r.kt)("p",null,"Authorization URL: https://ones.com/oauth2/authorize"),(0,r.kt)("span",null,"Scopes:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"write:project:project: Add, edit, delete project"),(0,r.kt)("li",null,"read:project:project: Access project information")))))))))))}f.isMDXComponent=!0},93162:function(e,t,o){var n,r,i,a=o(25108);r=[],n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,o)},n.onerror=function(){a.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,o){var a=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?i(c):r(c.href)?n(e,t,o):i(c,c.target="_blank")):(c.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,a){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),o);else if(r(e))n(e,o,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,a=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&a||c)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},p.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,d=u.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});s.saveAs=l.saveAs=l,e.exports=l},void 0===(i="function"==typeof n?n.apply(t,r):n)||(e.exports=i)}}]);