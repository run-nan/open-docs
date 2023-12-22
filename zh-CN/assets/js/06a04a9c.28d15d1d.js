"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[8089],{17942:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},i),{},{components:n})):r.createElement(h,o({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(28957),a=(n(50959),n(17942));const l={},o="\u5de5\u4f5c\u9879\u4e0a\u4f20\u9644\u4ef6\u793a\u4f8b",p={unversionedId:"api/resource/example/example",id:"api/resource/example/example",title:"\u5de5\u4f5c\u9879\u4e0a\u4f20\u9644\u4ef6\u793a\u4f8b",description:"- \u7b2c\u4e00\u6b65\u4e0a\u4f20\u8d44\u6e90",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/resource/example/example.md",sourceDirName:"api/resource/example",slug:"/api/resource/example/",permalink:"/open-docs/zh-CN/docs/api/resource/example/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"2023\u5e7412\u670822\u65e5",frontMatter:{},sidebar:"api",previous:{title:"\u76ee\u5f55",permalink:"/open-docs/zh-CN/docs/api/resource/"},next:{title:"webhook \u7528\u6237\u6307\u5357",permalink:"/open-docs/zh-CN/docs/api/webhook/"}},c={},u=[],i={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5de5\u4f5c\u9879\u4e0a\u4f20\u9644\u4ef6\u793a\u4f8b"},"\u5de5\u4f5c\u9879\u4e0a\u4f20\u9644\u4ef6\u793a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\u4e0a\u4f20\u8d44\u6e90")),(0,a.kt)("p",null,"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'https://your-host-name/project/api/project/team/BDfDqJU7/res/attachments/upload\' \\\n--header \'Ones-User-Id: 6ZpgEzkk\' \\\n--header \'Ones-Auth-Token: rZHTPygZHOIE2EACzbQVA0diQ69vMBF9lDarUXluG43vMvqye1xqGSQIdFVVSiPT\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "type": "attachment",\n    "name": "untitled",\n    "ref_type": "task",\n    "ref_id": "6ZpgEzkkFOLPsD5s",\n    "description": "this is a upload test"\n}\'\n')),(0,a.kt)("p",null,"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "need_upload": true,\n  "base_url": "https://your-host-name/project/api/project",\n  "upload_url": "https://up.qbox.me",\n  "token": "3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==",\n  "resource_uuid": "Q1ZE77v9",\n  "size_limit": 314572800\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u90e8\u4e0a\u4f20\u6587\u4ef6")),(0,a.kt)("p",null,"\u8bf7\u6c42\u4f53\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'https://up.qbox.me' \\\n--form 'token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:HfITwb71foZJr0lv01NTT8hVHwY=:eyJzY29wZSI6Im9uZXMtZGV2LXByaXZhdGUiLCJkZWFkbGluZSI6MTU4Nzg3NTYzNSwiaW5zZXJ0T25seSI6MSwiZGV0ZWN0TWltZSI6MSwiY2FsbGJhY2tGZXRjaEtleSI6MSwiZnNpemVMaW1pdCI6MzE0NTcyODAwLCJjYWxsYmFja1VybCI6Imh0dHBzOi8vZGV2YXBpLm15b25lcy5uZXQvcHJvamVjdC9tYXN0ZXIvcmVzL3VwbG9hZGNhbGxiYWNrIiwiY2FsbGJhY2tCb2R5IjoiaGFzaD0kKGV0YWcpXHUwMDI2dHlwZT1hdHRhY2htZW50XHUwMDI2bmFtZT0kKGZuYW1lKVx1MDAyNnNpemU9JChmc2l6ZSlcdTAwMjZtaW1lPSQobWltZVR5cGUpXHUwMDI2ZXh0PSQoZXh0KVx1MDAyNmV4aWY9JChleGlmKVx1MDAyNndpZHRoPSQoaW1hZ2VJbmZvLndpZHRoKVx1MDAyNmhlaWdodD0kKGltYWdlSW5mby5oZWlnaHQpXHUwMDI2dXNlcj02WnBnRXpra1x1MDAyNnRlYW09QkRmRHFKVTdcdTAwMjZyZXNvdXJjZT1RMVpFNzd2OVx1MDAyNmVuZF91c2VyPSQoZW5kVXNlcikifQ==' \\\n--form 'file=@/Users/lixiaohua/Desktop/untitled'\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u4f53\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hash": "Fj3GlNDc6g81Mas7UBghxXmvD-9L",\n  "mime": "application/octet-stream",\n  "name": "untitled",\n  "size": 1184,\n  "url": "https://your-host-name/project/api/project/Fj3GlNDc6g81Mas7UBghxXmvD-9L?e=1587875659&token=3Ub47hHnTjuEuV7uF9IS4cGwOWZGAtiBkPmA09e1:w4poYi22ai0WIRKsUegMlcGQ9DI"\n}\n')),(0,a.kt)("p",null,"\u9519\u8bef\u8fd4\u56de\u4f53\u793a\u4f8b: \u91cd\u590d\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "{\\"callback_url\\":\\"https://your-host-name/project/api/project/res/uploadcallback\\",\\"callback_bodyType\\":\\"application/x-www-form-urlencoded\\",\\"callback_body\\":\\"hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq\\\\u0026type=attachment\\\\u0026name=text.txt\\\\u0026size=1826\\\\u0026mime=text%2Fplain\\\\u0026ext=.txt\\\\u0026exif=\\\\u0026width=\\\\u0026height=\\\\u0026user=6ZpgEzkk\\\\u0026team=BDfDqJU7\\\\u0026resource=4xXTySmK\\\\u0026end_user=\\",\\"callback_fetchKey\\":1,\\"token\\":\\"\\",\\"err_code\\":614,\\"error\\":\\"file exists\\",\\"hash\\":\\"FtUYw_aeF-p06Dd_uVmJDD1j4Utq\\",\\"key\\":\\"BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0\\"}"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callback_url": "https://your-host-name/project/api/project/res/uploadcallback",\n  "callback_bodyType": "application/x-www-form-urlencoded",\n  "callback_body": "hash=FtUYw_aeF-p06Dd_uVmJDD1j4Utq&type=attachment&name=text.txt&size=1826&mime=text%2Fplain&ext=.txt&exif=&width=&height=&user=6ZpgEzkk&team=BDfDqJU7&resource=4xXTySmK&end_user=",\n  "callback_fetchKey": 1,\n  "token": "",\n  "err_code": 614,\n  "error": "file exists",\n  "hash": "FtUYw_aeF-p06Dd_uVmJDD1j4Utq",\n  "key": "BmYAAACTkQUCQQkW-6b1ad19f-02ff-46ed-a7b7-cb2ce44617b0"\n}\n')))}m.isMDXComponent=!0}}]);