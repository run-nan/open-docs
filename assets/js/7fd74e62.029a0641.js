(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[96826],{29492:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/urlParam.714b7a6.901.png 901w",images:[{path:n.p+"assets/ideal-img/urlParam.714b7a6.901.png",width:901,height:345}],src:n.p+"assets/ideal-img/urlParam.714b7a6.901.png",toString:function(){return n.p+"assets/ideal-img/urlParam.714b7a6.901.png"},placeholder:void 0,width:901,height:345},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVQImU1OOwrAIBTz/kdz6Kaig+AiVDsoil9qik4NZHjk80LwQ0oJ13WBUgql1F8CqbWi936YcwZjDFJK3PeN1hpKKRhjgLzvi23mnMNaC+89tNYnJISAMQZrLZBdO+c8hhACYoxwzp0Zz/Oce7/+AKeBl/Do2/1iAAAAAElFTkSuQmCC"}},11802:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),r=n(15944),l=n(29492),o=n.n(l);const s={sidebar_position:3},p="ONES API interception",u={unversionedId:"abilities/business/ONES-API/ONES-API-interception",id:"version-1.x/abilities/business/ONES-API/ONES-API-interception",title:"ONES API interception",description:"Requirements",source:"@site/versioned_docs/version-1.x/abilities/business/ONES-API/ONES-API-interception.mdx",sourceDirName:"abilities/business/ONES-API",slug:"/abilities/business/ONES-API/ONES-API-interception",permalink:"/open-docs/docs/abilities/business/ONES-API/ONES-API-interception",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"abilities",previous:{title:"ONES API registration",permalink:"/open-docs/docs/abilities/business/ONES-API/ONES-API-registration"},next:{title:"Item mutation",permalink:"/open-docs/docs/abilities/business/ONES-API/item-mutation"}},m={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Instruction for use",id:"instruction-for-use",level:3},{value:"replace",id:"replace",level:3},{value:"prefix",id:"prefix",level:3},{value:"suffix",id:"suffix",level:3},{value:"custom query param",id:"custom-query-param",level:3},{value:"Debug",id:"debug",level:3}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ones-api-interception"},"ONES API interception"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.6.0+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Sometimes we need to change the performance of certain behaviors in the ONES, add some operations before and after a certain behavior or replace the behavior itself to meet business. The plugin can use the ONES API interception ability to support all ONES API, such as prefix interception, subffix interception and replace API;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replace"),': The plugin can "replace" an ONES API , allowing the plugin to completely customize an API of the ONES.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prefix interception"),": It means that when a request enters ONES, it will be forwarded to the plugin before it is processed. After the plugin modifies the request, it will be sent back to ONES and continue to execute the original logic. Generally used to modify the parameters of the request, or to verify the request;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Suffix interception"),": It means that when the request is processed in ONES, it will send a notification to the plugin. The plugin can perform some suffix processing at this time, but cannot modify the response content.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"interception")," and ",(0,a.kt)("strong",{parentName:"p"},"replace")," are relatively low-level operations, which may cause unknown risks to ONES function. Generally speaking, the use of ONES API interception ability is considered only if other abilities do not meet the requirements."),(0,a.kt)("admonition",{title:"NOTICE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This ability is about to be abandoned, and future compatibility is not guaranteed!")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"instruction-for-use"},"Instruction for use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The difference between the organization-level API and the team-level API is that the ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," of the team-level API contains ",(0,a.kt)("inlineCode",{parentName:"li"},"/team/:teamUUID"),". For the same API: the organization-level API only allows one plugin to intercept; the team-level API allows one plugin in each team to intercept, but only one plugin in the same team is allowed to intercept."),(0,a.kt)("li",{parentName:"ol"},"In local debugging, if you modify the plugin configuration file ",(0,a.kt)("inlineCode",{parentName:"li"},"config/plugin.yaml"),", you need to run ",(0,a.kt)("inlineCode",{parentName:"li"},"npx op invoke clear")," and re-run the ",(0,a.kt)("inlineCode",{parentName:"li"},"npx op invoke run")," command to make the configuration take effect.")),(0,a.kt)("h3",{id:"replace"},"replace"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request flow"),(0,a.kt)("mermaid",{parentName:"li",value:"sequenceDiagram\n    autonumber\n    User->>ONES: Request\n    ONES->>+Plugin: Forwarding\n    Plugin->>-ONES: Return\n    ONES->>User: Return"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sample configuration"),(0,a.kt)("p",{parentName:"li"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apis")," field in the plugin configuration file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='/config/plugin.yaml'",title:"'/config/plugin.yaml'"},"apis:\n  - type: replace #API type: replace\n    methods: #API request mode\n      - POST\n    url: /team/:teamUUID/online_page/:pageUUID/update_title #interception API url\n    scope: wiki #Project or wiki API. Without this attribute, it defaults to project\n    function: jackFunc #The name is consistent with the function name in the code\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add handler"),(0,a.kt)("p",{parentName:"li"},'This example replaces the wiki\'s API for modifying the page title, and will set the page title to "plugin title"'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fetchONES } from '@ones-op/node-fetch'\nimport { Logger } from '@ones-op/node-logger'\nexport async function jackFunc(\n  request: PluginRequest<Record<string, any>>\n): Promise<PluginResponse> {\n  Logger.info('replace success')\n  let userUUID = ''\n  let userToken = ''\n  if (request.headers['Ones-User-Id'] != null) {\n    userUUID = request.headers['Ones-User-Id']\n    userToken = request.headers['Ones-Auth-Token']\n  }\n  Logger.info('url:', request.url)\n  let response = await fetchONES({\n    path: '/wiki' + request.url,\n    method: 'POST',\n    headers: {\n      'Ones-User-Id': [userUUID],\n      'Ones-Auth-Token': [userToken],\n    },\n    body: {\n      title: 'plugin title',\n    },\n    root: false,\n  })\n  Logger.info(JSON.stringify(response, undefined, 2))\n  if (response) {\n    return response\n  }\n  return {\n    body: {},\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Precautions"),(0,a.kt)("p",{parentName:"li"},"The API request parameters need to pay attention to the following points:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ONES API is being intercepted, so the filled ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," must be consistent with the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," used to access the ONES API;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Confirm whether the replaced API itself is a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request or a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../../../api/readme"},"ONES API")," document to confirm what parameters need to be set in the request header of the replaced API."))))),(0,a.kt)("h3",{id:"prefix"},"prefix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request flow"),(0,a.kt)("mermaid",{parentName:"li",value:"sequenceDiagram\n    autonumber\n    User->>+ONES: Request\n    ONES->>+Plugin: Return\n    Plugin->>Plugin: Do prefix processing.\n    Plugin->>-ONES: Return request\n    ONES->>ONES: Request processing\n    ONES->>-User: Return"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sample configuration"),(0,a.kt)("p",{parentName:"li"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apis")," field in the plugin configuration file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='/config/plugin.yaml'",title:"'/config/plugin.yaml'"},"apis:\n  - type: prefix #API type: suffix\n    methods:\n      - POST\n    url: /team/:teamUUID/online_page/:pageUUID/update_title\n    scope: wiki\n    function: prefixFunc\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add handler"),(0,a.kt)("p",{parentName:"li"},"This example pre-intercepts the API for modifying the page title of the wiki, and adds a suffix to the title of this modification"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//Prefix interception\nexport async function prefixFunc(\n  request: PluginRequest<Record<string, any>>\n): Promise<PluginResponse> {\n  let body = request?.body as any\n  let headers = request?.headers as any\n  body.title = body.title + '-plugin'\n  return {\n    headers: headers,\n    body: body,\n  }\n}\n")))),(0,a.kt)("h3",{id:"suffix"},"suffix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Request flow"),(0,a.kt)("mermaid",{parentName:"li",value:"sequenceDiagram\n    autonumber\n    User->>+ONES: Request\n    ONES->>ONES: Request processing\n    ONES->>+Plugin: Forwarding\n    Plugin->>Plugin: Do subfix processing\n    Plugin->>-ONES: Return\n    ONES->>-User: Return"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sample configuration"),(0,a.kt)("p",{parentName:"li"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apis")," field in the plugin configuration file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='/config/plugin.yaml'",title:"'/config/plugin.yaml'"},"apis:\n  - type: suffix #API type: suffix\n    methods:\n      - GET\n    url: /users/me\n    scope: project\n    function: suffixFunc\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add handler"),(0,a.kt)("p",{parentName:"li"},"This example means that when the interface finishes processing, record some content to the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace/suffix.txt")," file"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFile, writeStrings } from '@ones-op/node-file'\nimport { Logger } from '@ones-op/node-logger'\nexport async function Install() {\n  await createFile('./suffix.txt')\n  Logger.info('[Plugin] Install')\n}\n//suffix interception\nexport async function suffixFunc(\n  request: PluginRequest<Record<string, any>>\n): Promise<PluginResponse> {\n  Logger.info('suffix success')\n  let body = request?.body as any\n  await writeStrings('./suffix.txt', [JSON.stringify(request, undefined, 2)])\n  return {\n    body: {},\n  }\n}\n")))),(0,a.kt)("h3",{id:"custom-query-param"},"custom query param"),(0,a.kt)("p",null,"Support interface interception with custom query parameters allowing different interface interception functions to be used for the same URL based on the request's query parameters.\nYou can set custom query parameters in the apis field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/plugin.yaml")," file.\nAll requests to this interface will be intercepted if they contain these pre-set parameters, otherwise they will not be intercepted."),(0,a.kt)(r.Z,{img:o(),mdxType:"Image"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interception rule")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"An interface can only be intercepted by one plugin for one type of interface interception (prefix, replace, suffix),\nbut it allows an interface to define different query parameters to match different handling functions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Custom query parameters are represented as a map with both the key and value being strings.\nInterface interception will be triggered if all the keys and values in the map are included in the request to this interface.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When a request satisfies multiple interface interception rules with custom query parameters,\nthe corresponding function will be matched based on the order declared in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/plugin.yaml")," file."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sample configuration"),(0,a.kt)("p",{parentName:"li"},"Add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apis")," field in the plugin configuration file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='/config/plugin.yaml'",title:"'/config/plugin.yaml'"},"apis:\n  - type: replace\n    methods:\n      - POST\n    scope: project\n    url: /users/me\n    function: replaceFunc1\n    query:\n      k1: v1\n  - type: replace\n    methods:\n      - POST\n    scope: project\n    url: /users/me\n    function: replaceFunc2\n    query:\n      k2: v2\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/me?k2=v2")," match: replaceFunc2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/me?k1=v1&k2=v2&k3=v3")," based on declared order\uff0cmatch: replaceFunc1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"request url: ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/me")," no match\uff0cdo not intercepted the interface and follow the original processing logic"))))),(0,a.kt)("h3",{id:"debug"},"Debug"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," tool to access the API ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/ me")," as an example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://yourhost/users/me' \\\n--header 'Ones-User-Id: {user_uuid}' \\\n--header 'Ones-Auth-Token: {user_token}' \\\n--header 'Content-Type: application/json' \\\n--data ''\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Code request parameter example"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"url\uff1ahttps://yourhost/users/me\nheaders:\n    Ones-User-Id:{user_uuid}\n    Ones-Auth-Token:{user_token}\n    ...\nmethod: GET\n")))))}f.isMDXComponent=!0}}]);