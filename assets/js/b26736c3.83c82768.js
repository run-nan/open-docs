"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[95457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return a?n.createElement(h,l(l({ref:t},i),{},{components:a})):n.createElement(h,l({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l="Task attachment upload",p={unversionedId:"api/resource/example/example",id:"version-1.x/api/resource/example/example",title:"Task attachment upload",description:"- \u7b2c\u4e00\u6b65\u4e0a\u4f20\u8d44\u6e90",source:"@site/versioned_docs/version-1.x/api/resource/example/example.md",sourceDirName:"api/resource/example",slug:"/api/resource/example/",permalink:"/open-docs/docs/api/resource/example/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"api",previous:{title:"Resource",permalink:"/open-docs/docs/api/resource/"},next:{title:"Webhook User Guide",permalink:"/open-docs/docs/api/webhook/"}},c={},u=[],i={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"task-attachment-upload"},"Task attachment upload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\u4e0a\u4f20\u8d44\u6e90")),(0,r.kt)("p",null,"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'https://your-host-name/project/api/project/team/BDfDqJU7/res/attachments/upload\' \\\n--header \'Ones-User-Id: 6ZpgEzkk\' \\\n--header \'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "type": "attachment",\n    "name": "untitled",\n    "ref_type": "task",\n    "ref_id": "6ZpgEzkkFOLPsD5s",\n    "description": "this is a upload test"\n}\'\n')),(0,r.kt)("p",null,"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "need_upload": true,\n  "base_url": "https://your-host-name/project/api/project",\n  "upload_url": "https://up.qbox.me",\n  "token": "3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==",\n  "resource_uuid": "Q1ZE77v9",\n  "size_limit": 314572800\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u90e8\u4e0a\u4f20\u6587\u4ef6")),(0,r.kt)("p",null,"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'https://up.qbox.me' \\\n--form 'token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==' \\\n--form 'file=@/Users/lixiaohua/Desktop/untitled'\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hash": "Fj3GlNDc6g81Mas7UBghxXmvD-9L",\n  "mime": "application/octet-stream",\n  "name": "untitled",\n  "size": 1184,\n  "url": "https://your-host-name/project/api/project/Fj3GlNDc6g81Mas7UBghxXmvD-9L?e=1587875659&token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:w4poYi22ai0WIRKsUegMlcGQ9DI"\n}\n')),(0,r.kt)("p",null,"\u9519\u8bef\u8fd4\u56de\u4f53\u793a\u4f8b: \u91cd\u590d\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "{\\"callback_url\\":\\"https://your-host-name/project/api/project/res/uploadcallback\\",\\"callback_bodyType\\":\\"application/x-www-form-urlencoded\\",\\"callback_body\\":\\"hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq\\\\u0026type=attachment\\\\u0026name=text.txt\\\\u0026size=1826\\\\u0026mime=text%2Fplain\\\\u0026ext=.txt\\\\u0026exif=\\\\u0026width=\\\\u0026height=\\\\u0026user=6ZpgEzkk\\\\u0026team=BDfDqJU7\\\\u0026resource=4xXTySmK\\\\u0026end_user=\\",\\"callback_fetchKey\\":1,\\"token\\":\\"\\",\\"err_code\\":614,\\"error\\":\\"file exists\\",\\"hash\\":\\"FtUYw_aeF-p06Dd_uVmJDD1j4Utq\\",\\"key\\":\\"BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0\\"}"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callback_url": "https://your-host-name/project/api/project/res/uploadcallback",\n  "callback_bodyType": "application/x-www-form-urlencoded",\n  "callback_body": "hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq&type=attachment&name=text.txt&size=1826&mime=text%2Fplain&ext=.txt&exif=&width=&height=&user=6ZpgEzkk&team=BDfDqJU7&resource=4xXTySmK&end_user=",\n  "callback_fetchKey": 1,\n  "token": "",\n  "err_code": 614,\n  "error": "file exists",\n  "hash": "FtUYw_aeF-p06Dd_uVmJDD1j4Utq",\n  "key": "BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0"\n}\n')))}s.isMDXComponent=!0}}]);