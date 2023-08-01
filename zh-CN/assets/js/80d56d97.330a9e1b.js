"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[99739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,h=d["".concat(l,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(h,p(p({ref:t},u),{},{components:n})):r.createElement(h,p({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"authorization",sidebar_position:2,sidebar_label:"\u8ba4\u8bc1\u6388\u6743"},p="\u8ba4\u8bc1\u6388\u6743",i={unversionedId:"openapi/authorization",id:"version-1.x/openapi/authorization",title:"\u8ba4\u8bc1\u6388\u6743",description:"\u521b\u5efa OAuth \u5e94\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/openapi/authorization.mdx",sourceDirName:"openapi",slug:"/openapi/authorization",permalink:"/open-docs/zh-CN/docs/openapi/authorization",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{id:"authorization",sidebar_position:2,sidebar_label:"\u8ba4\u8bc1\u6388\u6743"},sidebar:"openapi",previous:{title:"\u5173\u4e8e",permalink:"/open-docs/zh-CN/docs/openapi/"},next:{title:"\u72b6\u6001\u7801",permalink:"/open-docs/zh-CN/docs/openapi/status-code"}},l={},c=[{value:"\u521b\u5efa OAuth \u5e94\u7528",id:"\u521b\u5efa-oauth-\u5e94\u7528",level:2},{value:"\u7533\u8bf7\u6388\u6743\u7801",id:"\u7533\u8bf7\u6388\u6743\u7801",level:2},{value:"\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c",id:"\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c",level:2},{value:"\u8bbf\u95ee Open API",id:"\u8bbf\u95ee-open-api",level:2},{value:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u8be6\u60c5",id:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u8be6\u60c5",level:2},{value:"\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c",id:"\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c",level:2},{value:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",id:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8ba4\u8bc1\u6388\u6743"},"\u8ba4\u8bc1\u6388\u6743"),(0,o.kt)("h2",{id:"\u521b\u5efa-oauth-\u5e94\u7528"},"\u521b\u5efa OAuth \u5e94\u7528"),(0,o.kt)("p",null,"\u56e2\u961f\u7ba1\u7406\u5458\u5728 ONES \u7cfb\u7edf\u4e2d\u300c\u914d\u7f6e\u4e2d\u5fc3\u300d-\u300c\u56e2\u961f\u914d\u7f6e\u300d-\u300c\u81ea\u5b9a\u4e49 OAuth \u5e94\u7528\u300d\u8fdb\u884c\u521b\u5efa\uff0c\u521b\u5efa OAuth \u5e94\u7528\u540e\uff0c\u4f1a\u5f97\u5230 Client ID\u3001Client Secret\uff0c\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58\u3002"),(0,o.kt)("p",null,"\u521b\u5efa OAuth \u5e94\u7528\u9700\u8981\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u79f0\uff1aOAuth \u5e94\u7528\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},"Redirect URI\uff1a\u7533\u8bf7\u6388\u6743\u7801\u6210\u529f\u540e\uff0c\u5c06\u91cd\u5b9a\u5411\u5230\u8be5\u5730\u5740\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8303\u56f4\uff1a\u9009\u62e9 OAuth \u5e94\u7528\u53ef\u8bbf\u95ee ONES Open API \u7684\u8303\u56f4\u3002")),(0,o.kt)("h2",{id:"\u7533\u8bf7\u6388\u6743\u7801"},"\u7533\u8bf7\u6388\u6743\u7801"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 'https://your-domain/oauth2/authorize?client_id=CLIENT_ID&response_type=code'\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/openapi/api/auth/apply-for-authorization-code"},"\u63a5\u53e3\u8be6\u7ec6\u4ecb\u7ecd")),(0,o.kt)("p",null,"\u8bf7\u6c42\u6210\u529f\u540e\u6d4f\u89c8\u5668\u5c06\u8df3\u8f6c\u81f3 ONES \u7cfb\u7edf\uff0c\u5982\u679c\u7528\u6237\u672a\u767b\u5f55\u5219\u9700\u8981\u7528\u6237\u767b\u5f55\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\u5c06\u8df3\u8f6c\u81f3\u540c\u610f\u6388\u6743\u9875\u9762\uff0c\u7528\u6237\u540c\u610f\u6388\u6743\u901a\u8fc7\u540e\uff0c\u5c06\u91cd\u5b9a\u5411\u81f3 Redirect URI\uff0c\u5e76\u4e14\u5728 URL \u53c2\u6570\u4e2d\u6dfb\u52a0 code\u3001state \u4e24\u4e2a\u53c2\u6570\u3002code \u5728\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c\u540e\u5c06\u5931\u6548\uff0c\u6709\u4e14\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u3002"),(0,o.kt)("h2",{id:"\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c"},"\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST 'https://your-domain/oauth2/token' \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'client_id=CLIENT_ID' \\\n    -d 'client_secret=CLIENT_SECRET' \\\n    -d 'code=CODE' \\\n    -d 'grant_type=authorization_code'\n")),(0,o.kt)("p",null,"\u54cd\u5e94\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "access_token": "CN-NDd...pLW",\n    "email": "test@ones.bot",\n    "expires_in": 86400,\n    "refresh_token": "CN-MDF...TNi",\n    "scope": "read:testcase:library,write:testcase:library",\n    "token_type": "Bearer",\n    "user_id": "CJ...qz"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/openapi/api/auth/apply-for-or-refresh-access-token"},"\u63a5\u53e3\u8be6\u7ec6\u4ecb\u7ecd")),(0,o.kt)("p",null,"access_token \u662f\u5168\u5c40\u552f\u4e00\u63a5\u53e3\u8c03\u7528\u51ed\u636e\uff0c\u8c03\u7528 Open API \u65f6\u9700\u8981\u4f7f\u7528 access_token\uff0c\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58\u3002"),(0,o.kt)("h2",{id:"\u8bbf\u95ee-open-api"},"\u8bbf\u95ee Open API"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 'https://your-domain/rest/api/v1/xxx' -H \"Authorization: Bearer ACCESS_TOKEN\"\n")),(0,o.kt)("h2",{id:"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u8be6\u60c5"},"\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u8be6\u60c5"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl "https://your-domain/oauth2/introspect" -H "Authorization: Bearer ACCESS_TOKEN"\n')),(0,o.kt)("p",null,"\u54cd\u5e94\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "active": true,\n    "sub": "CJ...qz",\n    "scope": "read:testcase:library,write:testcase:library",\n    "client_id": "3hF...leI",\n    "token_type": "Bearer",\n    "exp": 1681889317,\n    "team_id": "xxx"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/openapi/api/auth/get-access-token-details"},"\u63a5\u53e3\u8be6\u7ec6\u4ecb\u7ecd")),(0,o.kt)("h2",{id:"\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c"},"\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c"),(0,o.kt)("p",null,"\u5237\u65b0\u8bbf\u95ee\u4ee4\u724c\u540e\uff0c\u4e4b\u524d\u7533\u8bf7\u7684\u8bbf\u95ee\u4ee4\u724c\u548c\u5237\u65b0\u4ee4\u724c\u90fd\u5c06\u5931\u6548\uff0c\u540c\u65f6\u5c06\u8fd4\u56de\u65b0\u7684\u8bbf\u95ee\u4ee4\u724c\u3001\u5237\u65b0\u4ee4\u724c\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST 'https://your-domain/oauth2/token' \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'client_id=CLIENT_ID' \\\n    -d 'refresh_token=REFRESH_TOKEN' \\\n    -d 'grant_type=refresh_token'\n")),(0,o.kt)("p",null,"\u54cd\u5e94\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "access_token": "CN-NDd...pLW",\n    "email": "test@ones.bot",\n    "expires_in": 86400,\n    "refresh_token": "CN-MDF...TNi",\n    "scope": "read:testcase:library,write:testcase:library",\n    "token_type": "Bearer",\n    "user_id": "CJ...qz"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/openapi/api/auth/apply-for-or-refresh-access-token"},"\u63a5\u53e3\u8be6\u7ec6\u4ecb\u7ecd")),(0,o.kt)("h2",{id:"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c"},"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c"),(0,o.kt)("p",null,"\u6ce8\u9500\u8bbf\u95ee\u4ee4\u724c\uff0c\u5237\u65b0\u4ee4\u724c\u4e5f\u5c06\u5931\u6548\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST 'https://your-domain/oauth2/revoke' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n        \"client_id\": CLIENT_ID,\n        \"client_secret\": CLIENT_SECRET,\n        \"access_token\": ACCESS_TOKEN\n    }'\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/openapi/api/auth/revoke-access-token"},"\u63a5\u53e3\u8be6\u7ec6\u4ecb\u7ecd")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4fee\u6539 OAuth \u5e94\u7528 Scope\uff0c\u5df2\u7533\u8bf7\u7684\u8bbf\u95ee\u4ee4\u724c Scope \u662f\u5426\u540c\u6b65\u53d8\u5316\uff1f")),(0,o.kt)("p",null,"\u4fee\u6539 OAuth \u5e94\u7528 Scope\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5df2\u7533\u8bf7\u7684\u8bbf\u95ee\u4ee4\u724c Scope\u3002\u5982\u679c\u9700\u8981\u751f\u6548\u65b0\u7684 Scope\uff0c\u9700\u91cd\u65b0\u5b8c\u6210\u7533\u8bf7\u6388\u6743\u7801\u3001\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c\u6d41\u7a0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5220\u9664 OAuth \u5e94\u7528\u540e\uff0c\u5df2\u7533\u8bf7\u7684\u8bbf\u95ee\u4ee4\u724c\u662f\u5426\u4f1a\u5931\u6548\uff1f")),(0,o.kt)("p",null,"\u5220\u9664 OAuth \u5e94\u7528\u540e\uff0c\u5df2\u7533\u8bf7\u7684\u6388\u6743\u7801\u3001\u8bbf\u95ee\u4ee4\u724c\u548c\u5237\u65b0\u4ee4\u724c\u90fd\u5c06\u5931\u6548\u3002"))}s.isMDXComponent=!0}}]);