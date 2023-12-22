"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[5497],{17942:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(50959);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=m(a),u=r,g=o["".concat(d,".").concat(u)]||o[u]||k[u]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(28957),r=(a(50959),a(17942));const l={},i="Discovery service",p={unversionedId:"abilities/basic/Independent-hosting-service/apis/independent-service",id:"abilities/basic/Independent-hosting-service/apis/independent-service",title:"Discovery service",description:"Requirements",source:"@site/docs/abilities/basic/Independent-hosting-service/apis/independent-service.md",sourceDirName:"abilities/basic/Independent-hosting-service/apis",slug:"/abilities/basic/Independent-hosting-service/apis/independent-service",permalink:"/open-docs/docs/abilities/basic/Independent-hosting-service/apis/independent-service",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Independent hosting service",permalink:"/open-docs/docs/abilities/basic/Independent-hosting-service/"},next:{title:"Scene: Use external storage",permalink:"/open-docs/docs/abilities/basic/Independent-hosting-service/external-storage"}},d={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Get URL address for independent services\uff08outer\uff09",id:"get-url-address-for-independent-servicesouter",level:2},{value:"URL",id:"url",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"Need Login",id:"need-login",level:3},{value:"Value passing",id:"value-passing",level:3},{value:"parameters",id:"parameters",level:3},{value:"Return parameter",id:"return-parameter",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Return Example",id:"return-example",level:3},{value:"Get URL address for independent services\uff08inner\uff09",id:"get-url-address-for-independent-servicesinner",level:2},{value:"URL",id:"url-1",level:3},{value:"HTTP Method",id:"http-method-1",level:3},{value:"Value passing",id:"value-passing-1",level:3},{value:"parameters",id:"parameters-1",level:3},{value:"Return parameter",id:"return-parameter-1",level:3},{value:"Request Example",id:"request-example-1",level:3},{value:"Return Example",id:"return-example-1",level:3}],s={toc:m},o="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"discovery-service"},"Discovery service"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v3.16.18+")))),(0,r.kt)("h2",{id:"get-url-address-for-independent-servicesouter"},"Get URL address for independent services\uff08outer\uff09"),(0,r.kt)("p",null,"According to the app_id of the plugin, We can obtain independent service address information."),(0,r.kt)("p",null,"This api is used for front-end web calls."),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"https://{your-host-name}/project/api/project/plugin/web_service/info"),(0,r.kt)("h3",{id:"http-method"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"need-login"},"Need Login"),(0,r.kt)("p",null,"yes"),(0,r.kt)("h3",{id:"value-passing"},"Value passing"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"parameters"},"parameters"),(0,r.kt)("p",null,"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"require"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"application/json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data in JSON format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-Check-Point"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"team"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-Plugin-Id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"built_in_apis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-Check-Id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ATVswGgy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"team_uuid, used for verification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ones-User-Id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4qumKXgM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"user_uuid, used for verification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Origin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://xxxx.com"},"https://xxxx.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base address of ONES")))),(0,r.kt)("p",null,"Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"require"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Xy4-EYjw"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"The app_id information of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"base_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://xxxx.com"},"https://xxxx.com")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base address of ONES. This field is used first. If it is empty, the Origin field in the Header will be used.")))),(0,r.kt)("h3",{id:"return-parameter"},"Return parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"See data object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return data array data")))),(0,r.kt)("p",null,"data object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Xy4-EYjw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id of the plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root_route"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/node_demo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent services and routing information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"http_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://xxx.com/node_demo"},"https://xxx.com/node_demo")),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent service http address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ws_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"wss://xxx.com/node_demo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent service websocket address")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'https://xxx.com/project/api/project/plugin/web_service/info' \\\n--header 'Ones-Check-Id: ATVswGgy' \\\n--header 'Ones-Check-Point: team' \\\n--header 'Ones-Plugin-Id: built_in_apis' \\\n--header 'Ones-User-Id: 4qumKXgM' \\\n--header 'Content-Type: application/json' \\\n--header 'Origin: https://xxx.com/' \\\n--data-raw '{\n    \"app_id\":\"Xy4-EYjw\"\n}'\n\n")),(0,r.kt)("h3",{id:"return-example"},"Return Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "app_id": "Xy4-EYjw",\n      "root_route": "/node_demo",\n      "http_url": "https://xxx.com/plugin_service/node_demo",\n      "ws_url": "wss://xxx.com/api/plugin_service_ws/node_demo"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-url-address-for-independent-servicesinner"},"Get URL address for independent services\uff08inner\uff09"),(0,r.kt)("p",null,"According to the app_id of the plugin, We can obtain independent service address information."),(0,r.kt)("p",null,"This apiis used for calling between backend services"),(0,r.kt)("h3",{id:"url-1"},"URL"),(0,r.kt)("p",null,"{platform_address}/plugin/web_service/info/internal"),(0,r.kt)("h3",{id:"http-method-1"},"HTTP Method"),(0,r.kt)("p",null,"POST"),(0,r.kt)("h3",{id:"value-passing-1"},"Value passing"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("h3",{id:"parameters-1"},"parameters"),(0,r.kt)("p",null,"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"require"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"application/json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data in JSON format")))),(0,r.kt)("p",null,"Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"require"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Xy4-EYjw"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"The app_id information of the plugin.")))),(0,r.kt)("h3",{id:"return-parameter-1"},"Return parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"See data object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return data array data")))),(0,r.kt)("p",null,"data object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"illustrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Xy4-EYjw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"app_id of the plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root_route"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/node_demo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent services and routing information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"http_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://xxx.com/node_demo"},"https://xxx.com/node_demo")),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent service http address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ws_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ws://xxx.com/node_demo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"independent service websocket address")))),(0,r.kt)("h3",{id:"request-example-1"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://127.0.0.1:9005/plugin/web_service/info/internal' \\\n--header 'Content-Type: application/json' \\\n-d '{\n    \"app_id\":\"Xy4-EYjw\"\n}'\n\n\n")),(0,r.kt)("h3",{id:"return-example-1"},"Return Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "app_id": "Xy4-EYjw",\n      "root_route": "/node_demo",\n      "http_url": "http://127.0.0.1:9008/node_demo",\n      "ws_url": "ws://127.0.0.1:9008/node_demo"\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);