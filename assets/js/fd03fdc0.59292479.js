(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[3140],{42519:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/editor.4c87a22.1024.png 1024w,"+n.p+"assets/ideal-img/editor.f109ef7.1792.png 1792w,"+n.p+"assets/ideal-img/editor.d7d0ffd.2560.png 2560w",images:[{path:n.p+"assets/ideal-img/editor.4c87a22.1024.png",width:1024,height:584},{path:n.p+"assets/ideal-img/editor.f109ef7.1792.png",width:1792,height:1021},{path:n.p+"assets/ideal-img/editor.d7d0ffd.2560.png",width:2560,height:1459}],src:n.p+"assets/ideal-img/editor.4c87a22.1024.png",toString:function(){return n.p+"assets/ideal-img/editor.4c87a22.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVQImWWN2QrCQBAE9/+/05gnE49kkzlLZn1RHCi6GwqmPZ4b+2n0LvR+4JGYB2o+cnQ12tYFC1BL5jW5rsm0BJebM99hWuB1JK3sushkOwvYC2HskkppqvoRIxB1MhzIP5qJDDEzf6gP3/sNU5DEcJu7skMAAAAASUVORK5CYII="}},17942:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>h});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91044:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(50959),r=n(45924);const i={tabItem:"tabItem_skN5"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},42181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(28957),r=n(50959),i=n(45924),o=n(70562),l=n(94506),s=n(75814);const u={tabList:"tabList_Ifpf",tabItem:"tabItem_j1rW"};function c(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!=(a=d[t])?a:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;n=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},o,{className:(0,i.Z)("tabs__item",u.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function p(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",u.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function m(e){const t=(0,s.default)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},94506:(e,t,n)=>{"use strict";n.d(t,{Y:()=>p});var a=n(50959),r=n(28903),i=n(94150),o=n(40828),l=n(29163);function s(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:s(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[o,s]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[p,m]=d({queryString:n,groupId:r}),[h,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=null!=p?p:h;return c({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),k(e)}),[m,k,i]),tabValues:i}}},28380:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(28957),r=(n(50959),n(17942)),i=n(91044),o=n(42181),l=n(49500);const s={id:"wiki-macro",sidebar_position:2,description:"Quickly add block element (Embed) macro"},u="Simple macro",c={unversionedId:"abilities/business/wiki/wiki-macro/wiki-macro",id:"abilities/business/wiki/wiki-macro/wiki-macro",title:"Simple macro",description:"Quickly add block element (Embed) macro",source:"@site/docs/abilities/business/wiki/wiki-macro/index.mdx",sourceDirName:"abilities/business/wiki/wiki-macro",slug:"/abilities/business/wiki/wiki-macro/",permalink:"/open-docs/docs/abilities/business/wiki/wiki-macro/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:2,frontMatter:{id:"wiki-macro",sidebar_position:2,description:"Quickly add block element (Embed) macro"},sidebar:"abilities",previous:{title:"Macro",permalink:"/open-docs/docs/abilities/business/wiki/wiki-collaborative-page/"},next:{title:"Page node type",permalink:"/open-docs/docs/abilities/business/wiki/page-type/"}},d={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Slots",id:"slots",level:2},{value:"ones:wiki:editor:embed",id:"oneswikieditorembed",level:4},{value:"Usage",id:"usage",level:2},{value:"Available Hook API",id:"available-hook-api",level:3},{value:"Open The editable interface Actively",id:"open-the-editable-interface-actively",level:3},{value:"Save The Data",id:"save-the-data",level:3},{value:"Plugin Runtime Status",id:"plugin-runtime-status",level:3}],m=(h="Image",function(e){return l.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const k={toc:p},f="wrapper";function b(e){let{components:t,...l}=e;return(0,r.kt)(f,(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simple-macro"},"Simple macro"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v3.11.30+")))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)(m,{img:n(42519),mdxType:"Image"}),(0,r.kt)("p",null,'We have provided slots for "ONES Wiki" - "Spaces" - "select a space" - "Wiki collaborative page" to customize the page module for the application.'),(0,r.kt)("p",null,"There are two ways to insert the plugin into document: In the editable page, click the menu on the left or type the shortcut. You can config it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.yaml"),"."),(0,r.kt)("p",null,"The slots currently supported are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oneswikieditorembed"},"ones:wiki:editor:embed"))),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)("h4",{id:"oneswikieditorembed"},"ones:wiki:editor:embed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Module path\uff1a")," ONES Wiki / Spaces / select a space / Wiki collaborative page / block element"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Number limit\uff1a")," Declare a maximum of ",(0,r.kt)("strong",{parentName:"p"},"10")," slots in each plugin, and up to ",(0,r.kt)("strong",{parentName:"p"},"100")," slots in the system."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: ones-wiki-editor-embed-Pl6y\n    title: issue\n    moduleType: ones:wiki:editor:embed\n    macroShortcut: issue\n    description: Insert the issue\n    # Icon of macro\n    icon: macro-icon.svg\n    modules:\n      - id: ones-wiki-editor-embed-syM2\n        title: show\n        # Scene of slot,\n        # `render` used to render the display interface\n        # `toolbar` used to render the editable interface\n        scene: render\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-syM2/index.html\n      - id: ones-wiki-editor-embed-BUmK\n        # The title and icon will render when the user hovers over the block element of macro\n        title: edit\n        icon: edit.svg # Required\n        scene: toolbar\n        preload: true # Required\n        manual: true # Required\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-BUmK/index.html\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported config options\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#icon"},"icon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"macroShortcut"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"li"},"Shortcut for the plugin"),(0,r.kt)("p",{parentName:"li"},"For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"macroShortcut: issue"),", when the user is editing the document, the user can insert the plugin into the current document by just typing ",(0,r.kt)("inlineCode",{parentName:"p"},"/issue"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#moduleDescription"},"description"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enableCollaborative"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ONES Requirement: ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.13.36+"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",{parentName:"li"},"Enable multiple users to edit the same document data at the same time. By default, the other users can't edit the block when one user clicks the toolbar.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#subModule"},"modules(required)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"modules","[*]",".scene(required)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},'"toolbar"|"render"')),(0,r.kt)("p",{parentName:"li"},"Scene of the plugin,"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"render")," used to render the display interface"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"toolbar")," used to render the editable interface"),(0,r.kt)("p",{parentName:"li"},"A macro plugin consists of two parts:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Display Interface(",(0,r.kt)("inlineCode",{parentName:"li"},"scene: render"),"), Required, used to render the data in the wiki. When one user is editing the element, this element for another user will be disabled.")),(0,r.kt)("admonition",{parentName:"li",title:"caution",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The element used to accept data from the user(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),") cannot be used in the block element(which intercept lots of DOM event, so the edit element cannot respond to\nthe input from the user). These editing operations must be placed in the editable interface which triggers by the ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar"),".")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Editable interface(",(0,r.kt)("inlineCode",{parentName:"li"},"scene: toolbar"),"), Required, Triggered by the toolbar. Each time it is opened, the editable interface will be reinitialized,\nand when it is closed, the instance of the editable interface will be destroyed."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#icon"},"modules[","*","].icon")),(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'"),", This is used to render the icon of the ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#manual"},"modules[","*","].manual")),(0,r.kt)("p",{parentName:"li"},"This option must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#manual"},"modules[","*","].preload")),(0,r.kt)("p",{parentName:"li"},"This option is recommended to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'"),"."))),(0,r.kt)("h3",{id:"available-hook-api"},"Available Hook API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/open-docs/docs/reference/packages/store/#useDocumentInfo"},"useDocumentInfo"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useDocumentInfo } from '@ones-op/store'\n\nconst documentInfo = useDocumentInfo()\n")),(0,r.kt)("h3",{id:"open-the-editable-interface-actively"},"Open The editable interface Actively"),(0,r.kt)("p",null,"In most cases, the editable interface is opened when the user clicks the button in the toolbar. If wants to open it automatically when the user inserts the macro into the wiki document\nfor the first time, The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"isTriggerByUser")," is useful to implement this with the help of a local variable."),(0,r.kt)("p",null,"Display interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let shouldOpenEditPage = true\n\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  useEffect(() => {\n    if (document.isTriggerByUser && shouldOpenEditPage) {\n      // Go to editable interface\n      document.goToState({\n        builtIn: false,\n        value: {\n          id: 'ones-wiki-editor-embed-BUmK',\n          title: 'edit',\n        },\n        customData: true,\n      })\n      shouldOpenEditPage = false\n    }\n  }, [document])\n\n  return <div />\n}\n")),(0,r.kt)("p",null,"Editable interface"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.default,{value:"latest",label:"Latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lifecycle } from '@ones-op/bridge'\n\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // close toolbar\n      lifecycle.destroy()\n    }\n  }, [document])\n\n  return <Modal title=\"Plugin development\" onCancel={cancel} />\n}\n"))),(0,r.kt)(i.default,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // close toolbar\n      document.goToState({\n        builtIn: true,\n        value: 'init',\n      })\n    }\n  }, [document])\n\n  return <Modal title=\"Plugin development\" onCancel={cancel} />\n}\n")))),(0,r.kt)("h3",{id:"save-the-data"},"Save The Data"),(0,r.kt)("p",null,"When invoking the function ",(0,r.kt)("inlineCode",{parentName:"p"},"saveData"),", the data will be saved to the wiki document. If the data is simple(e.g. URL, text, etc.), it's OK to save it to the document.\nBut if the data is large, recommended saving the data in the backend database by communicating with backend services, and then save the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," in the document."),(0,r.kt)("admonition",{title:"caution",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The data in the document will be used to revoke, version rollback, etc. Every time the user performs those operations, the editor will return the corresponding version\nof the data to the plugin for rendering.")),(0,r.kt)("p",null,"While saving the data, the plugin needs to tell the editor how to export this data when the user export it to word or PDF(for example, the issue plugin will\nsave the ID into the document. When exported to PDF, this data will render as a link). Now only three formats are supported(text, link, image). This has been defined\nin the API section. Among them, the image is special, you need to save the image to the background server of the editor by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadResource")," method,\nand the server will return the file name of the resource. Finally, use the returned file name to generate an export format, refer to the following example."),(0,r.kt)("admonition",{title:"caution",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When uploading the resource to the editor service by using ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadResource"),", the resource is bound to the document. If the user needs to copy the macro to a new document,\nthe resource in the previous document is need to bind to the current document too. So there is a fixed field ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," in the data, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," exists,\nthe platform will bind the resources to the new document."),(0,r.kt)("p",{parentName:"admonition"},"The resources in the ",(0,r.kt)("inlineCode",{parentName:"p"},"exportSpec")," do not need to add to the fixed field ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", the platform handles it by default."),(0,r.kt)("p",{parentName:"admonition"},"Do not pass a custom value to the field ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", otherwise it will be treated as a resource ID."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"document.saveData(\n  {\n    resources: [resourceId],\n  },\n  {\n    exportSpec: [\n      {\n        type: 'image',\n        data: resourceName,\n      },\n    ],\n  },\n)\n"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.default,{value:"latest",label:"Latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { lifecycle } from '@ones-op/bridge'\n\nconst document = useDocumentInfo()\n\ndocument\n  .uploadResource(File /** the image file that needs to be exported  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // the data that saves to the document\n      {\n        data: value,\n        // Do not pass a custom value to the field `resources`, otherwise it will be treated as a resource ID.\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // close toolbar\n    lifecycle.destroy()\n  })\n"))),(0,r.kt)(i.default,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\n\ndocument\n  .uploadResource(File /** the image file that needs to be exported  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // the data that saves to the document\n      {\n        data: value,\n        // Do not pass a custom value to the field `resources`, otherwise it will be treated as a resource ID.\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // close toolbar\n    document.goToState({\n      builtIn: true,\n      value: 'init',\n    })\n  })\n")))),(0,r.kt)("h3",{id:"plugin-runtime-status"},"Plugin Runtime Status"),(0,r.kt)("p",null,"The runtime status of the plugin can be get by the param ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),", and the plugin can modify the status by function ",(0,r.kt)("inlineCode",{parentName:"p"},"setStatus"),",\nfor example, when the data in the document is not expected, the plugin needs to tell the user to edit the data by call function ",(0,r.kt)("inlineCode",{parentName:"p"},"setStatus"),".\nFor the definition of specific states, please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," type definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\ndocument.setStatus(EmbedPluginRuntimeStatus.DATA_INVALID)\n")))}b.isMDXComponent=!0}}]);