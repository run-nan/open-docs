(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[87119],{62976:(e,t,a)=>{"use strict";a(67294),a(93162)},51889:(e,t,a)=>{"use strict";a(67294),a(79524),a(7909)},61511:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var o=a(87462),i=(a(67294),a(3905));a(51889),a(83329),a(18679),a(62976);const n={id:"auth",title:"Auth",description:"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,r={unversionedId:"openapi/api/auth/auth",id:"openapi/api/auth/auth",title:"Auth",description:"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions.",source:"@site/docs/openapi/api/auth/auth.info.mdx",sourceDirName:"openapi/api/auth",slug:"/openapi/api/auth/auth",permalink:"/open-docs/docs/next/openapi/api/auth/auth",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:0,frontMatter:{id:"auth",title:"Auth",description:"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"OAuth 2.0 Scopes",permalink:"/open-docs/docs/next/openapi/scope"},next:{title:"Apply for authorization code",permalink:"/open-docs/docs/next/openapi/api/auth/apply-for-authorization-code"}},c={},u=[],d={toc:u};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"API Version: 1.0"),(0,i.kt)("h1",{id:"auth"},"Auth"),(0,i.kt)("p",null,"The ONES REST API utilizes the standard OAuth 2.0 authorization mechanism to provide secure user authorization and access tokens for third-party applications to access protected resources. OAuth 2.0 enables third-party applications to obtain limited and revocable access privileges in a secure and controlled manner, without directly using user credentials. This authorization mechanism offers a flexible and reliable way for third-party applications to securely interact with the ONES system and obtain the necessary resource access permissions."))}l.isMDXComponent=!0},93162:function(e,t,a){var o,i,n,s=a(25108);i=[],o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,a){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,a)},o.onerror=function(){s.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,a){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?n(c):i(c.href)?o(e,t,a):n(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){n(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,s){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),a);else if(i(e))o(e,a,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){n(r)}))}}:function(e,t,a,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,a);var n="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||n&&s||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},d.readAsDataURL(e)}else{var l=r.URL||r.webkitURL,p=l.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){l.revokeObjectURL(p)}),4e4)}});r.saveAs=u.saveAs=u,e.exports=u},void 0===(n="function"==typeof o?o.apply(t,i):o)||(e.exports=n)}}]);