"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[9519],{17942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(50959);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91044:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(50959),n=r(45924);const l={tabItem:"tabItem_skN5"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},42181:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(28957),n=r(50959),l=r(45924),o=r(70562),i=r(94506),p=r(75814);const d={tabList:"tabList_Ifpf",tabItem:"tabItem_j1rW"};function s(e){let{className:t,block:r,selectedValue:i,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==i&&(m(t),p(a))},k=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;r=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var n;const t=u.indexOf(e.currentTarget)-1;r=null!=(n=u[t])?n:u[u.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:c},o,{className:(0,l.Z)("tabs__item",d.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function u(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.Y)(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",d.tabList)},n.createElement(s,(0,a.Z)({},e,t)),n.createElement(u,(0,a.Z)({},e,t)))}function c(e){const t=(0,p.default)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},94506:(e,t,r)=>{r.d(t,{Y:()=>m});var a=r(50959),n=r(28903),l=r(94150),o=r(40828),i=r(29163);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function s(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const o=(0,n.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,p]=(0,a.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!s({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,c]=u({queryString:r,groupId:n}),[k,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=null!=m?m:k;return s({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!s({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),g(e)}),[c,g,l]),tabValues:l}}},59112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(28957),n=(r(50959),r(17942)),l=r(42181),o=r(91044);const i={},p="@ones-op/node-database",d={unversionedId:"reference/packages/node-database/node-database",id:"reference/packages/node-database/node-database",title:"@ones-op/node-database",description:"We provide a set of interfaces related to the plugin database, allowing plugin developers to access and operate the plugin database.",source:"@site/docs/reference/packages/node-database/node-database.mdx",sourceDirName:"reference/packages/node-database",slug:"/reference/packages/node-database/",permalink:"/open-docs/docs/reference/packages/node-database/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{},sidebar:"reference",previous:{title:"Changelog",permalink:"/open-docs/docs/reference/packages/node-ability/changelog"},next:{title:"@ones-op/node-fs",permalink:"/open-docs/docs/reference/packages/node-fs/"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"API",id:"api",level:2},{value:"importSQL",id:"importsql",level:3},{value:"Params",id:"params",level:4},{value:"Error",id:"error",level:4},{value:"Example",id:"example",level:4},{value:"select",id:"select",level:3},{value:"Params",id:"params-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Error",id:"error-1",level:4},{value:"Example",id:"example-1",level:4},{value:"exec",id:"exec",level:3},{value:"Params",id:"params-2",level:4},{value:"Error",id:"error-2",level:4},{value:"Example",id:"example-2",level:4},{value:"count",id:"count",level:3},{value:"Params",id:"params-3",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Error",id:"error-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Type",id:"type",level:2},{value:"DBError",id:"dberror",level:3}],m={toc:u},c="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ones-opnode-database"},"@ones-op/node-database"),(0,n.kt)("p",null,"We provide a set of interfaces related to the plugin database, allowing plugin developers to access and operate the plugin database."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ONES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v3.6.0+")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"importsql"},"importSQL"),(0,n.kt)("p",null,"Initialize the database"),(0,n.kt)("h4",{id:"params"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sqlFileName"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sql file path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"error"},"Error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"errcode"),(0,n.kt)("th",{parentName:"tr",align:null},"reason"),(0,n.kt)("th",{parentName:"tr",align:null},"level"),(0,n.kt)("th",{parentName:"tr",align:null},"statusCode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.SqlFileNameFormatInvalid"),(0,n.kt)("td",{parentName:"tr",align:null},"SQL filename format invaild."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.SqlFileFetchingFailed"),(0,n.kt)("td",{parentName:"tr",align:null},"SQL file fetching failed."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.CannotFindTable"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot find table content in SQL file."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.ImportSqlErr"),(0,n.kt)("td",{parentName:"tr",align:null},"An unknown error occurred while executing the import method, and the hardware error scenario gave the cause of the hardware error."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"500")))),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.default,{value:"1",label:"0.4.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { importSQL } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function testImportSQL() {\n  try {\n    await importSQL('plugin.sql')\n  } catch (error) {\n    Logger.error('ERROR: ', error)\n  }\n}\n"))),(0,n.kt)(o.default,{value:"2",label:"0.6.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { importSQL, DBError } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function testImportSQL() {\n  try {\n    await importSQL('plugin.sql')\n  } catch (error) {\n    if (error instanceof DBError) {\n      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)\n    }\n  }\n}\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"select"},"select"),(0,n.kt)("p",null,"Receives the sql statement related to the query and returns the query result, which will be throw error if the sql execution fails."),(0,n.kt)("h4",{id:"params-1"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sql"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sql statement related to the query"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sql query result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Record<string, any>[]")))),(0,n.kt)("h4",{id:"error-1"},"Error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"errcode"),(0,n.kt)("th",{parentName:"tr",align:null},"reason"),(0,n.kt)("th",{parentName:"tr",align:null},"level"),(0,n.kt)("th",{parentName:"tr",align:null},"statusCode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.QuerySqlErr"),(0,n.kt)("td",{parentName:"tr",align:null},"An unknown error occurred while executing the select method, and the specific error scenario gives the specific cause of the error."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.SqlSyntaxErr"),(0,n.kt)("td",{parentName:"tr",align:null},"The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"InvalidParameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid parameter."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")))),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.default,{value:"1",label:"0.4.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { select } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function select_database() {\n  try {\n    const result = await select('select * from email_id_map limit 10;')\n  } catch (error) {\n    Logger.error('ERROR: ', error)\n  }\n}\n"))),(0,n.kt)(o.default,{value:"2",label:"0.6.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { select, DBError } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function select_database() {\n  try {\n    const result = await select('select * from email_id_map limit 10;')\n  } catch (error) {\n    if (error instanceof DBError) {\n      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)\n    }\n  }\n}\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"exec"},"exec"),(0,n.kt)("p",null,"Execute the relevant sql statement and no result is returned. If sql execution fails, it will throw error."),(0,n.kt)("h4",{id:"params-2"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"operation type\uff0c'insert' \u3001'update' \u3001 'delete' \u3001'create' \u3001'alter' \u3001 'drop'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sql"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sql statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"error-2"},"Error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"errcode"),(0,n.kt)("th",{parentName:"tr",align:null},"reason"),(0,n.kt)("th",{parentName:"tr",align:null},"level"),(0,n.kt)("th",{parentName:"tr",align:null},"statusCode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.ExecSqlErr"),(0,n.kt)("td",{parentName:"tr",align:null},"An unknown error occurred while executing the exec method, and the specific error scenario gives the specific cause of the error."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.SqlSyntaxErr"),(0,n.kt)("td",{parentName:"tr",align:null},"The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"InvalidParameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid parameter."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")))),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.default,{value:"1",label:"0.4.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { exec } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function exec_database() {\n  try {\n    const result = await exec(\n      'insert',\n      `INSERT INTO email_id_map VALUES (\"plugin@ones.com\", \"001\");`\n    )\n  } catch (error) {\n    Logger.error('ERROR: ', error)\n  }\n}\n"))),(0,n.kt)(o.default,{value:"2",label:"0.6.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { exec, DBError } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function exec_database() {\n  try {\n    const result = await exec(\n      'insert',\n      `INSERT INTO email_id_map VALUES (\"plugin@ones.com\", \"001\");`\n    )\n  } catch (error) {\n    if (error instanceof DBError) {\n      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)\n    }\n  }\n}\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"count"},"count"),(0,n.kt)("p",null,"Count related sql interface. If the sql execution is a failure, it will throw error."),(0,n.kt)("h4",{id:"params-3"},"Params"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sql"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sql statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"statistical results"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number")))),(0,n.kt)("h4",{id:"error-3"},"Error"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"errcode"),(0,n.kt)("th",{parentName:"tr",align:null},"reason"),(0,n.kt)("th",{parentName:"tr",align:null},"level"),(0,n.kt)("th",{parentName:"tr",align:null},"statusCode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.QuerySqlErr"),(0,n.kt)("td",{parentName:"tr",align:null},"An unknown error occurred while executing the count method, and the specific error scenario gives the specific cause of the error."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DB.SqlSyntaxErr"),(0,n.kt)("td",{parentName:"tr",align:null},"The sql does not conform to the grammatical specification, and the specific error scene gives the specific error reason."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"InvalidParameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid parameter."),(0,n.kt)("td",{parentName:"tr",align:null},"error"),(0,n.kt)("td",{parentName:"tr",align:null},"400")))),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.default,{value:"1",label:"0.4.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { count } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function count_database() {\n  try {\n    const result = await count('select count(*) from email_id_map;')\n  } catch (error) {\n    Logger.error('ERROR: ', error)\n  }\n}\n"))),(0,n.kt)(o.default,{value:"2",label:"0.6.0+",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { count, DBError } from '@ones-op/node-database'\nimport { Logger } from '@ones-op/node-logger'\n\nexport async function count_database() {\n  try {\n    const result = await count('select count(*) from email_id_map;')\n  } catch (error) {\n    if (error instanceof DBError) {\n      Logger.error('error:', error.errcode, error.statusCode, error.level, error.reason)\n    }\n  }\n}\n")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"type"},"Type"),(0,n.kt)("h3",{id:"dberror"},"DBError"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error level"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"statusCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"http status code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errcode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"error code"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))}k.isMDXComponent=!0}}]);