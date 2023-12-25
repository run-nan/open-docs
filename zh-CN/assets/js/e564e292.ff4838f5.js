(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8870],{18560:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>i.z,ErrorBoundaryError:()=>x.aG,ErrorBoundaryTryAgainButton:()=>x.Cw,ErrorCauseBoundary:()=>x.QW,HtmlClassNameProvider:()=>p.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>p.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>E.u,SkipToContentLink:()=>E.l,ThemeClassNames:()=>u.k,composeProviders:()=>d.Qc,createStorageSlot:()=>r.WA,duplicates:()=>k.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>y.a,isRegexpStringMatch:()=>v.F,listStorageKeys:()=>r._f,listTagsByLetters:()=>b.P,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>C,translateTagsPageTitle:()=>b.M,uniq:()=>k.j,useCollapsible:()=>i.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>_.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>s.c,usePrevious:()=>d.D9,usePrismTheme:()=>w.p,useSearchLinkCreator:()=>g.M,useSearchQueryString:()=>g.K,useStorageSlot:()=>r.Nk,useThemeConfig:()=>n.L,useWindowSize:()=>h.i});var n=o(27982),r=o(29163),a=o(37210),l=o(70033),s=o(32886),i=o(37093),u=o(28901),c=o(77449),d=o(39717),p=o(82647),f=o(92738),m=o(93072),h=o(87715),b=o(86863),g=o(23994),y=o(37191),v=o(25890),k=o(40828),w=o(5251),_=o(41930),T=o(50959);function C(e){var t;const{mdxAdmonitionTitle:o,rest:n}=function(e){const t=T.Children.toArray(e),o=t.find((e=>{var t;return T.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),n=T.createElement(T.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:null==o?void 0:o.props.children,rest:n}}(e.children),r=null!=(t=e.title)?t:o;return{...e,...r&&{title:r},children:n}}var E=o(72091),x=o(66764)},86863:(e,t,o)=>{"use strict";o.d(t,{M:()=>r,P:()=>a});var n=o(77959);const r=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function a(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);null!=t[o]||(t[o]=[]),t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},32886:(e,t,o)=>{"use strict";o.d(t,{c:()=>c});var n=o(50959),r=o(96184),a=o(49500);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&a.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),l=o.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(o,t,e)}}},82183:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(50959)),a=n(o(11227));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},80120:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(50959)),a=o(18560),l=n(o(20346)),s=n(o(8573));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,i=()=>{var e;return"dark"===t&&null!=(e=null==n?void 0:n.altText)?e:null==o?void 0:o.altText},u=(0,l.default)(null==o?void 0:o.url),c=(0,l.default)(null==n?void 0:n.url);return o&&n?r.default.createElement(s.default,{alt:i(),sources:{light:u,dark:c},className:"openapi__logo"}):o||n?r.default.createElement(s.default,{alt:i(),sources:{light:null!=u?u:c,dark:null!=u?u:c},className:"openapi__logo"}):void 0}},53396:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=o(28957),r=(o(50959),o(17942)),a=(o(80120),o(81225)),l=o(91044);o(82183);const s={id:"testcase-library",title:"Testcase Library",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,u={unversionedId:"openapi/api/testcase-librarys/testcase-library",id:"openapi/api/testcase-librarys/testcase-library",title:"Testcase Library",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/openapi/api/testcase-librarys/testcase-library.info.mdx",sourceDirName:"openapi/api/testcase-librarys",slug:"/openapi/api/testcase-librarys/testcase-library",permalink:"/open-docs/zh-CN/docs/openapi/api/testcase-librarys/testcase-library",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",sidebarPosition:0,frontMatter:{id:"testcase-library",title:"Testcase Library",description:"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002",sidebar_label:"\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"\u6267\u884c\u5de5\u4f5c\u9879\u7684\u5de5\u4f5c\u6d41",permalink:"/open-docs/zh-CN/docs/openapi/api/issue-workflows/02-execute-workflow-for-issue"},next:{title:"\u83b7\u53d6\u6d4b\u8bd5\u7528\u4f8b\u5e93\u5217\u8868",permalink:"/open-docs/zh-CN/docs/openapi/api/testcase-librarys/01-get-a-list-of-test-case-libraries"}},c={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0"),(0,r.kt)("h1",{className:"openapi__heading"},"Testcase Library"),(0,r.kt)("p",null,"\u6b64\u8d44\u6e90\u4ee3\u8868\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u3001\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664\u6d4b\u8bd5\u7528\u4f8b\u5e93\u3002"),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(a.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,r.kt)(l.default,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"oauth2")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Token URL: https://your-domain/oauth2/token"),(0,r.kt)("p",null,"Authorization URL: https://your-domain/oauth2/authorize"),(0,r.kt)("span",null,"Scopes:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"write:testcase:library: \u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7528\u4f8b\u5e93"),(0,r.kt)("li",null,"read:testcase:library: \u83b7\u53d6\u7528\u4f8b\u5e93\u4fe1\u606f")))))))))))}m.isMDXComponent=!0},11227:function(e,t,o){var n,r,a,l=o(49500);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(l.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){l.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,o){var l=s.URL||s.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?a(i):r(i.href)?n(e,t,o):a(i,i.target="_blank")):(i.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(i.href)}),4e4),setTimeout((function(){a(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,l){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),o);else if(r(e))n(e,o,l);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&l||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,r):n)||(e.exports=a)}}]);