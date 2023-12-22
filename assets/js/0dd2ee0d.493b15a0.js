(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5986],{18560:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Collapsible:()=>l.z,ErrorBoundaryError:()=>x.aG,ErrorBoundaryTryAgainButton:()=>x.Cw,ErrorCauseBoundary:()=>x.QW,HtmlClassNameProvider:()=>p.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>p.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>M.u,SkipToContentLink:()=>M.l,ThemeClassNames:()=>u.k,composeProviders:()=>d.Qc,createStorageSlot:()=>n.WA,duplicates:()=>k.l,filterDocCardListItems:()=>r.MN,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>y.F,listStorageKeys:()=>n._f,listTagsByLetters:()=>g.P,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>E,translateTagsPageTitle:()=>g.M,uniq:()=>k.j,useCollapsible:()=>l.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>r.jA,useDocsPreferredVersion:()=>_.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>i.c,usePrevious:()=>d.D9,usePrismTheme:()=>w.p,useSearchLinkCreator:()=>v.M,useSearchQueryString:()=>v.K,useStorageSlot:()=>n.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>h.i});var o=s(27982),n=s(29163),a=s(37210),r=s(70033),i=s(32886),l=s(37093),u=s(28901),c=s(77449),d=s(39717),p=s(82647),f=s(92738),m=s(93072),h=s(87715),g=s(86863),v=s(23994),b=s(37191),y=s(25890),k=s(40828),w=s(5251),_=s(41930),T=s(50959);function E(e){var t;const{mdxAdmonitionTitle:s,rest:o}=function(e){const t=T.Children.toArray(e),s=t.find((e=>{var t;return T.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=T.createElement(T.Fragment,null,t.filter((e=>e!==s)));return{mdxAdmonitionTitle:null==s?void 0:s.props.children,rest:o}}(e.children),n=null!=(t=e.title)?t:s;return{...e,...n&&{title:n},children:o}}var M=s(72091),x=s(66764)},86863:(e,t,s)=>{"use strict";s.d(t,{M:()=>n,P:()=>a});var o=s(77959);const n=()=>(0,o.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function a(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);null!=t[s]||(t[s]=[]),t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[o]=t;return s.localeCompare(o)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},32886:(e,t,s)=>{"use strict";s.d(t,{c:()=>c});var o=s(50959),n=s(96184),a=s(49500);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=u();return{selectMessage:(t,s)=>function(e,t,s){const o=e.split("|");if(1===o.length)return o[0];o.length>s.pluralForms.length&&a.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return o[Math.min(r,o.length-1)]}(s,t,e)}}},82183:function(e,t,s){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(s(50959)),a=o(s(11227));t.default=function(e){let{url:t,proxy:s}=e;return n.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.default.createElement("ul",{className:"export-dropdown dropdown__menu"},n.default.createElement("li",null,n.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},80120:function(e,t,s){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(s(50959)),a=s(18560),r=o(s(20346)),i=o(s(8573));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:s,darkLogo:o}=e,l=()=>{var e;return"dark"===t&&null!=(e=null==o?void 0:o.altText)?e:null==s?void 0:s.altText},u=(0,r.default)(null==s?void 0:s.url),c=(0,r.default)(null==o?void 0:o.url);return s&&o?n.default.createElement(i.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):s||o?n.default.createElement(i.default,{alt:l(),sources:{light:null!=u?u:c,dark:null!=u?u:c},className:"openapi__logo"}):void 0}},92495:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=s(28957),n=(s(50959),s(17942)),a=(s(80120),s(81225)),r=s(91044);s(82183);const i={id:"issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,u={unversionedId:"openapi/api/issue-status/issue-status",id:"openapi/api/issue-status/issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",source:"@site/docs/openapi/api/issue-status/issue-status.info.mdx",sourceDirName:"openapi/api/issue-status",slug:"/openapi/api/issue-status/issue-status",permalink:"/open-docs/docs/openapi/api/issue-status/issue-status",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",sidebarPosition:0,frontMatter:{id:"issue-status",title:"Issue status",description:"This resource represents issue status. Use it to get issue status.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openapi",previous:{title:"Get a list of issue types",permalink:"/open-docs/docs/openapi/api/issue-types/get-a-list-of-issue-types"},next:{title:"Get a list of issue status",permalink:"/open-docs/docs/openapi/api/issue-status/get-a-list-of-issue-status"}},c={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(f,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0"),(0,n.kt)("h1",{className:"openapi__heading"},"Issue status"),(0,n.kt)("p",null,"This resource represents issue status. Use it to get issue status."),(0,n.kt)("div",{style:{marginBottom:"2rem"}},(0,n.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,n.kt)(a.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,n.kt)(r.default,{label:"OAuth 2.0: oauth2",value:"oauth2",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"oauth2")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"OAuth Flow (authorizationCode):"),(0,n.kt)("td",null,(0,n.kt)("p",null,"Token URL: https://your-domain/oauth2/token"),(0,n.kt)("p",null,"Authorization URL: https://your-domain/oauth2/authorize"),(0,n.kt)("span",null,"Scopes:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"read:project:issueStatus: Access issue status")))))))))))}m.isMDXComponent=!0},11227:function(e,t,s){var o,n,a,r=s(49500);n=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,s){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,s)},o.onerror=function(){r.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,s){var r=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):n(l.href)?o(e,t,s):a(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,s,r){if(s=s||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),s);else if(n(e))o(e,s,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,s,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,s);var a="application/octet-stream"===e.type,r=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&r||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?o.apply(t,n):o)||(e.exports=a)}}]);