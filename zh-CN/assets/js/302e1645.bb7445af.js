"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[81692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:14},s="\u6587\u4ef6\u64cd\u4f5c\u89e3\u6790",i={unversionedId:"abilities/base/file-operation",id:"version-0.x/abilities/base/file-operation",title:"\u6587\u4ef6\u64cd\u4f5c\u89e3\u6790",description:"\u80fd\u529b\u63cf\u8ff0",source:"@site/versioned_docs/version-0.x/abilities/base/file-operation.md",sourceDirName:"abilities/base",slug:"/abilities/base/file-operation",permalink:"/zh-CN/docs/0.x/abilities/base/file-operation",draft:!1,tags:[],version:"0.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"abilities",previous:{title:"\u63d2\u4ef6\u53d1\u9001\u6d88\u606f",permalink:"/zh-CN/docs/0.x/abilities/base/sendMessage"},next:{title:"\u4e1a\u52a1\u80fd\u529b",permalink:"/zh-CN/docs/0.x/abilities/bussiness/"}},l={},p=[{value:"\u80fd\u529b\u63cf\u8ff0",id:"\u80fd\u529b\u63cf\u8ff0",level:2},{value:"\u63d2\u4ef6\u793a\u4f8b demo",id:"\u63d2\u4ef6\u793a\u4f8b-demo",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:3}],c={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6587\u4ef6\u64cd\u4f5c\u89e3\u6790"},"\u6587\u4ef6\u64cd\u4f5c\u89e3\u6790"),(0,a.kt)("h2",{id:"\u80fd\u529b\u63cf\u8ff0"},"\u80fd\u529b\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5bf9\u6587\u4ef6\u8fdb\u884c\u5bfc\u5165\u3001\u89e3\u6790\u3001\u4fee\u6539\u3001\u4e0a\u4f20\u3001\u4e0b\u8f7d\u4e00\u7cfb\u5217\u76f8\u5173\u64cd\u4f5c\u89e3\u6790"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u793a\u4f8b-demo"},"\u63d2\u4ef6\u793a\u4f8b demo"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitlab.partner.ones.ai/example/fileopeation"},"\u6587\u4ef6\u64cd\u4f5c\u793a\u4f8b")),(0,a.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u6587\u4ef6\u5bfc\u5165\u62e6\u622a\u52a8\u4f5c\n\u5728 plugin.yaml \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5bfc\u5165\u63a5\u53e3\u66ff\u6362\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apis:\n- type: replace\nmethods:\n    - POST\nurl: /team/:teamUUID/testcase/library/:libraryUUID/import_with_opml\nfunction: ImportOpml\n}\n")),(0,a.kt)("p",null,"\u62e6\u622a\u5bfc\u5165\u63a5\u53e3\u4ee5\u540e\u5bf9\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\u5e76\u8f6c\u6362\u683c\u5f0f,\u5c06 opml \u6587\u4ef6\u8f6c\u6362\u4e3a xlsx \u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6d4b\u8bd5\u573a\u666f",src:t(35053).Z,width:"1319",height:"638"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\nconst body = request.body\nconst url = request.url\nlet urlArr\nif (url) {\n    urlArr = url.toString().split("/")\n    if (urlArr.length > 5) {\n        // teamUUID = urlArr[2]  //\u83b7\u5f97TeamUUID\n        teamUUID = globalThis.onesEnv.teamUUID  //\u83b7\u5f97TeamUUID\n        libraryUUID = urlArr[5]  //\u83b7\u5f97libraryUUID\n        console.log("teamUUID:", teamUUID + ",libraryUUID:", libraryUUID)\n        //\u83b7\u5f97\u7528\u4f8b\u5e93\u7684\u7528\u4f8b\u914d\u7f6e\u7684UUID\n        const testcaseOptionUUID = await getTestcaseOptionUUID(globalThis.onesEnv.teamUUID, libraryUUID)\n        if (testcaseOptionUUID != null) {\n            var testcaseOptionJson = JSON.parse(JSON.stringify(testcaseOptionUUID))\n            if (testcaseOptionJson) {\n                Optionuuid = testcaseOptionJson.data.testcaseLibraries[0].testcaseFieldConfig.uuid;\n                AftertestcaseCaseCount = testcaseOptionJson.data.testcaseLibraries[0].testcaseCaseCount;\n                console.log("Optionuuid:", Optionuuid)\n                console.log("AftertestcaseCaseCount:", AftertestcaseCaseCount)\n            }\n        }\n        //\u83b7\u5f97\u7528\u4f8b\u5e93\u7684\u7528\u4f8b\u914d\u7f6e\n        const testcaceOption = await getTestcaseOption(teamUUID, libraryUUID, Optionuuid)\n        // Logger.info("Option\uff08\u7528\u4f8b\u5e93\u914d\u7f6e\uff09:", testcaceOption)\n        var Option = JSON.parse((JSON.stringify(testcaceOption)))\n        if (Option != null) {\n            //\u83b7\u5f97\u4f18\u5148\u7ea7\u7c7b\u578b\n            var priority = Option.data.fields.find((n) => n.name == \'\u4f18\u5148\u7ea7\');\n            for (let i = 0; i < priority.options.length; i++) {\n                priorityArr.push(priority.options[i].value)\n            }\n            //\u8bbe\u7f6e\u7528\u4f8b\u5e93\u5bfc\u5165\u524d\u7684\u6570\u91cf\u4fe1\u606f\n            AftertestmoduleCaseCount = await getModules()\n            console.log("AftertestmoduleCaseCount:", AftertestmoduleCaseCount)\n        }\n        //\u89e3\u6790opml\u6570\u636e\n        if (body) {\n            const obj = await opmlToJSON(body)\n            opmljson = JSON.parse(JSON.stringify(obj))\n        }\n        getName(opmljson.children[0].children, Node)\n        //getName(opmljson.children[0].children, Node)\n        if (countSuccess < 1) {\n            return faildBody\n        }\n        xlsx = json2xls(jsonObject);\n}\n')),(0,a.kt)("p",null,"\u5c06\u8f6c\u6362\u683c\u5f0f\u7684\u6587\u4ef6\u5b58\u50a8\u5230\u63d2\u4ef6\u76ee\u5f55 workspace \u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"xlsx = json2xls(jsonObject)\nawait fs.writeFileSync(__dirname + '/workspace/data.xlsx', xlsx, 'binary')\n")),(0,a.kt)("p",null,"\u5c06 workspace \u4e0b\u7684\u6587\u4ef6\u901a\u8fc7\u4e0a\u4f20\u6587\u4ef6\u7684\u80fd\u529b\u4e0a\u4f20\u5230\u9879\u76ee\u5de5\u4f5c\u9879\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const file = await PluginFile.uploadFile('data.xlsx', 'task_uuid', 'desc')\n")),(0,a.kt)("p",null,"\u5c06 workspace \u4e0b\u7684\u6587\u4ef6\u4e0a\u4f20\u5230\u6d4b\u8bd5\u7ba1\u7406\u4e0b\u7684\u7528\u4f8b\u5e93\u4e2d\u8fdb\u884c\u5bfc\u5165\u7528\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const response = await fetchONES({\n  path: `/team/${teamUUID}/testcase/library/${libraryUUID}/upload`,\n  headers: {\n    'Replace': 'replace',\n    'Ones-User-Id': [userUUID],\n    'Ones-Auth-Token': [userToken],\n    ...data.getHeaders(),\n  },\n  method: 'POST',\n  body: new Uint8Array(data.getBuffer()),\n  // root: true,\n})\n// console.log(\"response:\", response)\nif (response != null) {\n  var res = JSON.parse(JSON.stringify(response.body))\n  return res.file_hash\n}\nreturn response\n")),(0,a.kt)("p",null,"\u5c06\u4e0a\u4f20\u7684\u8f6c\u6362\u5b8c\u683c\u5f0f\u7684\u7528\u4f8b\u5bfc\u5165\u7528\u4f8b\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const response = await fetchONES({\n  path: `/team/${teamUUID}/testcase/library/${libraryUUID}/import`,\n  method: 'POST',\n  headers: {\n    'Replace': ['replace'],\n    'Ones-User-Id': [userUUID],\n    'Ones-Auth-Token': [userToken],\n  },\n  body: {\n    mapping: {\n      module_name_1: '\u4e00\u7ea7\u6a21\u5757',\n      module_name_2: '\u4e8c\u7ea7\u6a21\u5757',\n      module_name_3: '\u4e09\u7ea7\u6a21\u5757',\n      module_name_4: '\u56db\u7ea7\u6a21\u5757',\n      module_name_5: '\u4e94\u7ea7\u6a21\u5757',\n      module_name_6: '\u516d\u7ea7\u6a21\u5757',\n      module_name_7: '\u4e03\u7ea7\u6a21\u5757',\n      module_name_8: '\u516b\u7ea7\u6a21\u5757',\n      module_name_9: '\u4e5d\u7ea7\u6a21\u5757',\n      module_name_10: '\u5341\u7ea7\u6a21\u5757',\n      module_name_11: '\u5341\u4e00\u7ea7\u6a21\u5757',\n      module_name_12: '\u5341\u4e8c\u7ea7\u6a21\u5757',\n      name: '\u7528\u4f8b\u540d\u79f0',\n      priority: '\u4f18\u5148\u7ea7',\n      type: '\u7528\u4f8b\u7c7b\u578b',\n      condition: '\u524d\u7f6e\u6761\u4ef6',\n      step_desc: '\u6b65\u9aa4\u63cf\u8ff0',\n      step_result: '\u9884\u671f\u7ed3\u679c',\n      desc: '\u5907\u6ce8',\n      assign: '\u7ef4\u62a4\u4eba',\n      fields: fileds,\n    },\n    file_hash: filehash,\n  },\n  root: true,\n})\nif (response != null) {\n  return response\n}\n")),(0,a.kt)("h3",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5bfc\u5165\u6587\u4ef6",src:t(89671).Z,width:"595",height:"527"})))}u.isMDXComponent=!0},89671:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/file-operation1-b720f99563e2aa993aec7f81c9f95c44.png"},35053:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/file-operation2-a2473d5a5fbc629af22cb586404b1569.png"}}]);