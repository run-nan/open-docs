(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[7072],{38769:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/editor.4c87a22.1024.png 1024w,"+n.p+"assets/ideal-img/editor.f109ef7.1792.png 1792w,"+n.p+"assets/ideal-img/editor.d7d0ffd.2560.png 2560w",images:[{path:n.p+"assets/ideal-img/editor.4c87a22.1024.png",width:1024,height:584},{path:n.p+"assets/ideal-img/editor.f109ef7.1792.png",width:1792,height:1021},{path:n.p+"assets/ideal-img/editor.d7d0ffd.2560.png",width:2560,height:1459}],src:n.p+"assets/ideal-img/editor.4c87a22.1024.png",toString:function(){return n.p+"assets/ideal-img/editor.4c87a22.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVQImWWN2QrCQBAE9/+/05gnE49kkzlLZn1RHCi6GwqmPZ4b+2n0LvR+4JGYB2o+cnQ12tYFC1BL5jW5rsm0BJebM99hWuB1JK3sushkOwvYC2HskkppqvoRIxB1MhzIP5qJDDEzf6gP3/sNU5DEcJu7skMAAAAASUVORK5CYII="}},17942:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>k});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91044:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(50959),r=n(45924);const l={tabItem:"tabItem_skN5"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},42181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(28957),r=n(50959),l=n(45924),i=n(70562),o=n(94506),u=n(75814);const s={tabList:"tabList_Ifpf",tabItem:"tabItem_j1rW"};function p(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==o&&(m(t),u(a))},k=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;n=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},i,{className:(0,l.Z)("tabs__item",s.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",s.tabList)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(c,(0,a.Z)({},e,t)))}function d(e){const t=(0,u.default)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},94506:(e,t,n)=>{"use strict";n.d(t,{Y:()=>m});var a=n(50959),r=n(28903),l=n(94150),i=n(40828),o=n(29163);function u(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:u(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=s(e),[i,u]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[m,d]=c({queryString:n,groupId:r}),[k,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=null!=m?m:k;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,l]),tabValues:l}}},89569:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>N,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(28957),r=(n(50959),n(17942)),l=n(91044),i=n(42181),o=n(49500);const u={id:"wiki-macro",sidebar_position:2,description:"\u5feb\u901f\u6dfb\u52a0\u5757\u5143\u7d20\uff08Embed\uff09\u5b8f\u3002"},s="\u7b80\u6613\u5b8f",p={unversionedId:"abilities/business/wiki/wiki-macro/wiki-macro",id:"abilities/business/wiki/wiki-macro/wiki-macro",title:"\u7b80\u6613\u5b8f",description:"\u5feb\u901f\u6dfb\u52a0\u5757\u5143\u7d20\uff08Embed\uff09\u5b8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/abilities/business/wiki/wiki-macro/index.mdx",sourceDirName:"abilities/business/wiki/wiki-macro",slug:"/abilities/business/wiki/wiki-macro/",permalink:"/open-docs/zh-CN/docs/abilities/business/wiki/wiki-macro/",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703495563,formattedLastUpdatedAt:"2023\u5e7412\u670825\u65e5",sidebarPosition:2,frontMatter:{id:"wiki-macro",sidebar_position:2,description:"\u5feb\u901f\u6dfb\u52a0\u5757\u5143\u7d20\uff08Embed\uff09\u5b8f\u3002"},sidebar:"abilities",previous:{title:"\u5b8f",permalink:"/open-docs/zh-CN/docs/abilities/business/wiki/wiki-collaborative-page/"},next:{title:"\u9875\u9762\u8282\u70b9\u7c7b\u578b",permalink:"/open-docs/zh-CN/docs/abilities/business/wiki/page-type/"}},c={},m=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u63d2\u69fd",id:"\u63d2\u69fd",level:2},{value:"ones:wiki:editor:embed",id:"oneswikieditorembed",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e",id:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762",id:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762",level:3},{value:"\u4fdd\u5b58\u6570\u636e",id:"\u4fdd\u5b58\u6570\u636e",level:3},{value:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001",id:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001",level:3}],d=(k="Image",function(e){return o.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var k;const b={toc:m},f="wrapper";function N(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,a.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u6613\u5b8f"},"\u7b80\u6613\u5b8f"),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v3.11.30+")))),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)(d,{img:n(38769),mdxType:"Image"}),(0,r.kt)("p",null,"\u6211\u4eec\u4e3a\u300c\u77e5\u8bc6\u5e93\u7ba1\u7406\u300d-\u300c\u9875\u9762\u7ec4\u300d-\u300c\u9009\u62e9\u9875\u9762\u7ec4\u300d-\u300cWiki \u534f\u540c\u9875\u9762\u300d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u63d2\u69fd\uff0c\u4ee5\u4fbf\u4e8e\u4e3a\u8be5\u5e94\u7528\u5b9a\u5236\u5316\u9875\u9762\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u63d2\u5165\u8fd9\u4e2a\u63d2\u4ef6\u5230\u6587\u6863\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a\u5728\u7f16\u8f91\u754c\u9762\uff0c\u901a\u8fc7\u70b9\u51fb\u5de6\u4fa7\u7684\u83dc\u5355\u6216\u8005\u8f93\u5165\u5feb\u6377\u6307\u4ee4\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"),(0,r.kt)("p",null,"\u5f53\u524d\u652f\u6301\u7684\u63d2\u69fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oneswikieditorembed"},"ones:wiki:editor:embed"))),(0,r.kt)("h2",{id:"\u63d2\u69fd"},"\u63d2\u69fd"),(0,r.kt)("h4",{id:"oneswikieditorembed"},"ones:wiki:editor:embed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5757\u8def\u5f84\uff1a")," \u77e5\u8bc6\u5e93\u7ba1\u7406 / \u9875\u9762\u7ec4 / \u9009\u62e9\u9875\u9762\u7ec4 / Wiki \u534f\u540c\u9875\u9762 / \u5757\u5143\u7d20"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e2a\u6570\u9650\u5236\uff1a")," \u4e00\u4e2a\u63d2\u4ef6\u4e2d\u6700\u591a\u53ef\u58f0\u660e ",(0,r.kt)("strong",{parentName:"p"},"10 "),"\u4e2a\u8be5\u63d2\u69fd\uff0c\u7cfb\u7edf\u4e2d\u6700\u591a\u540c\u65f6\u5b58\u5728 ",(0,r.kt)("strong",{parentName:"p"},"100 "),"\u4e2a\u8be5\u63d2\u69fd"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  - id: ones-wiki-editor-embed-Pl6y\n    title: \u5de5\u4f5c\u9879\n    moduleType: ones:wiki:editor:embed\n    # \u5feb\u6377\u6307\u4ee4\uff0c\u5b8f\u4f1a\u51fa\u73b0\u5728\u7528\u6237\u901a\u8fc7\u8f93\u5165"/"\u89e6\u53d1\u7684\u83dc\u5355\u4e2d\n    macroShortcut: issue\n    # \u5b8f\u7684\u63cf\u8ff0\n    description: \u63d2\u5165\u5de5\u4f5c\u9879\n    # \u5b8f\u7684\u56fe\u6807\n    icon: macro-icon.svg\n    modules:\n      - id: ones-wiki-editor-embed-syM2\n        title: \u5c55\u793a\n        # \u5f53\u524d\u63d2\u69fd\u7684\u7c7b\u578b\uff0c\n        # render \u8868\u793a\u7528\u6765\u6e32\u67d3\u5c55\u793a\u754c\u9762\n        # toolbar \u8868\u793a\u7528\u6765\u6e32\u67d3\u6587\u6863\u5757\u7684\u7f16\u8f91\u754c\u9762\n        scene: render\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-syM2/index.html\n      - id: ones-wiki-editor-embed-BUmK\n        # toolbar \u5bf9\u5e94\u7684\u540d\u79f0\n        title: \u7f16\u8f91\n        # toolbar \u5bf9\u5e94\u7684\u56fe\u6807\n        icon: edit.svg # \u5fc5\u987b\u9879\n        scene: toolbar\n        preload: true # \u5fc5\u987b\u9879\n        manual: true # \u5fc5\u987b\u9879\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-BUmK/index.html\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u914d\u7f6e\u9879\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#icon"},"icon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"macroShortcut"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"li"},"\u5feb\u6377\u6307\u4ee4\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"macroShortcut: issue"),"\uff0c\u5f53\u7528\u6237\u5728\u7f16\u8f91\u9875\u9762\u65f6\uff0c\u7528\u6237\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"/issue"),"\u5373\u53ef\u5feb\u901f\u63d2\u5165\u5f53\u524d\u63d2\u4ef6\u5230\u6587\u6863\u4e2d\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#moduleDescription"},"description"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enableCollaborative"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ONES \u8981\u6c42\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.13.36+"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",{parentName:"li"},"\u5141\u8bb8\u591a\u4e2a\u7528\u6237\u540c\u65f6\u7f16\u8f91\u76f8\u540c\u7684\u6587\u6863\u6570\u636e\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u4e00\u4e2a\u7528\u6237\u5355\u51fb\u5de5\u5177\u680f\u65f6\uff0c\u5176\u4ed6\u7528\u6237\u65e0\u6cd5\u7f16\u8f91\u8be5\u5757\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#subModule"},"modules\uff08\u5fc5\u586b\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"modules","[*]",".scene\uff08\u5fc5\u586b\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},'"toolbar"|"render"')),(0,r.kt)("p",{parentName:"li"},"\u5f53\u524d\u63d2\u69fd\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\u8868\u793a\u7528\u6765\u6e32\u67d3\u5c55\u793a\u754c\u9762\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar")," \u8868\u793a\u7528\u6765\u6e32\u67d3\u6587\u6863\u5757\u7684\u7f16\u8f91\u754c\u9762"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u5b8f\u63d2\u4ef6\u4e3b\u8981\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5757\u5143\u7d20\u6e32\u67d3\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"scene: render"),"\uff09\uff0c\u5fc5\u987b\u9879\uff0c\u7528\u6765\u663e\u793a\u6587\u6863\u4e2d\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u5f53\u4e00\u4e2a\u7528\u6237\u7f16\u8f91\u8be5\u5143\u7d20\u65f6\uff0c\u53e6\u4e00\u4e2a\u7528\u6237\u7684\u5bf9\u5e94\u7684\u5757\u5143\u7d20\u4f1a\u5904\u4e8e\u7981\u7528\u72b6\u6001\u3002")),(0,r.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6e32\u67d3\u5757\u91cc\u9762\u4e0d\u5e94\u8be5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," \u7b49\u7f16\u8f91\u6846\uff08\u5728\u6e32\u67d3\u754c\u9762\uff0c\u5927\u90e8\u5206\u4e8b\u4ef6\u4f1a\u88ab\u62e6\u622a\uff0c\u5bfc\u81f4\u7528\u6237\u4e0d\u80fd\u8f93\u5165\uff09\uff0c\u8fd9\u4e9b\u7f16\u8f91\u64cd\u4f5c\u5e94\u8be5\u653e\u5230\u5355\u72ec\u7684\u7f16\u8f91\u754c\u9762\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar")," \u6253\u5f00\u7f16\u8f91\u754c\u9762\u3002")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u754c\u9762\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"scene: toolbar"),"\uff09\uff0c\u53ef\u9009\u9879\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"toolbar")," \u89e6\u53d1\u3002\u6bcf\u6b21\u6253\u5f00\uff0c\u7f16\u8f91\u754c\u9762\u4f1a\u521d\u59cb\u5316\uff0c\u5173\u95ed\u65f6\uff0c\u7f16\u8f91\u754c\u9762\u5b9e\u4f8b\u4f1a\u88ab\u9500\u6bc1\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#icon"},"modules[","*","].icon")),(0,r.kt)("p",{parentName:"li"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u901a\u8fc7\u8fd9\u4e2a\u5b57\u6bb5\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar")," \u7684\u56fe\u6807\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#manual"},"modules[","*","].manual")),(0,r.kt)("p",{parentName:"li"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u6b64\u9009\u9879\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../../../reference/config/plugin.yaml#manual"},"modules[","*","].preload")),(0,r.kt)("p",{parentName:"li"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u6b64\u9009\u9879\u5efa\u8bae\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"))),(0,r.kt)("h3",{id:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e"},"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/open-docs/zh-CN/docs/reference/packages/store/#useDocumentInfo"},"useDocumentInfo"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useDocumentInfo } from '@ones-op/store'\n\nconst documentInfo = useDocumentInfo()\n")),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762"},"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762"),(0,r.kt)("p",null,"\u4e00\u822c\u7f16\u8f91\u754c\u9762\u662f\u7531\u7528\u6237\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"toolbar")," \u89e6\u53d1\uff0c\u5982\u679c\u60f3\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u63d2\u5165\u81ea\u5b9a\u4e49\u5b8f\u5230\u6587\u6863\u65f6\uff0c\u4e3b\u52a8\u5f39\u51fa\u7f16\u8f91\u754c\u9762\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"isTriggerByUser")," \u52a0\u4e0a\u4e00\u4e2a\u672c\u5730\u6807\u8bc6\uff08\u662f\u5426\u5df2\u7ecf\u4e3b\u52a8\u5f39\u51fa\u8fc7\u7f16\u8f91\u754c\u9762\uff09\u6765\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5c55\u793a\u754c\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let shouldOpenEditPage = true\n\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  useEffect(() => {\n    if (document.isTriggerByUser && shouldOpenEditPage) {\n      // \u8df3\u8f6c\u5230\u7f16\u8f91\u754c\u9762\n      document.goToState({\n        builtIn: false,\n        value: {\n          id: 'ones-wiki-editor-embed-BUmK',\n          title: '\u7f16\u8f91',\n        },\n        customData: true,\n      })\n      shouldOpenEditPage = false\n    }\n  }, [document])\n\n  return <div />\n}\n")),(0,r.kt)("p",null,"\u7f16\u8f91\u754c\u9762"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.default,{value:"latest",label:"\u6700\u65b0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lifecycle } from '@ones-op/bridge'\n\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // \u5173\u95ed toolbar\n      lifecycle.destroy()\n    }\n  }, [document])\n\n  return <Modal title=\"\u63d2\u4ef6\u5f00\u53d1\" onCancel={cancel} />\n}\n"))),(0,r.kt)(l.default,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // \u5173\u95ed toolbar\n      document.goToState({\n        builtIn: true,\n        value: 'init',\n      })\n    }\n  }, [document])\n\n  return <Modal title=\"\u63d2\u4ef6\u5f00\u53d1\" onCancel={cancel} />\n}\n")))),(0,r.kt)("h3",{id:"\u4fdd\u5b58\u6570\u636e"},"\u4fdd\u5b58\u6570\u636e"),(0,r.kt)("p",null,"\u5f53\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"saveData")," \u4fdd\u5b58\u6570\u636e\u65f6\uff0c\u6570\u636e\u662f\u4fdd\u5b58\u5728\u6587\u6863\u4e2d\u7684\u3002\u5982\u679c\u662f\u7b80\u5355\u7684\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),"\uff0c\u6587\u672c\u7b49\uff09\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"saveData")," \u4fdd\u5b58\u3002\n\u4f46\u662f\u5982\u679c\u6570\u636e\u91cf\u5f88\u5927\uff0c\u5efa\u8bae\u901a\u8fc7\u8c03\u7528\u540e\u53f0\u63a5\u53e3\u5c06\u6570\u636e\u4fdd\u5b58\u5728\u540e\u53f0\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u5c06\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," \u4fdd\u5b58\u5728\u6587\u6863\u4e2d\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"saveData")," \u4e2d\u4fdd\u5b58\u7684\u6570\u636e\u4f1a\u7528\u4e8e\u7528\u6237\u7684\u64a4\u9500\u3001\u7248\u672c\u56de\u9000\u7b49\u64cd\u4f5c\uff0c\u6bcf\u6b21\u7528\u6237\u6267\u884c\u64a4\u9500\u3001\u56de\u9000\u7b49\u64cd\u4f5c\uff0c\u7f16\u8f91\u5668\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7248\u672c\u7684\u6570\u636e\u7ed9\u5230\u63d2\u4ef6\u53bb\u6e32\u67d3\u3002")),(0,r.kt)("p",null,"\u5728\u4fdd\u5b58\u6570\u636e\u7684\u540c\u65f6\uff0c\u4e5f\u9700\u8981\u544a\u8bc9\u7f16\u8f91\u5668\uff0c\u5728\u5bfc\u51fa word/PDF \u65f6\uff0c\u6570\u636e\u5982\u4f55\u5c55\u793a\uff08\u6bd4\u5982\uff1a\u63d2\u5165\u5de5\u4f5c\u9879\uff0c\u4fdd\u5b58\u7684\u6570\u636e\u662f\u5de5\u4f5c\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),"\uff0c\u5bfc\u51fa word/PDF \u65f6\uff0c\u4f1a\u5c55\u793a\u6210\u4e00\u4e2a\u94fe\u63a5\uff09\uff0c\n\u76ee\u524d\u5bfc\u51fa\u652f\u6301\u4e09\u79cd\u683c\u5f0f\uff08\u6587\u672c\uff0c\u94fe\u63a5\uff0c\u56fe\u7247\uff09\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u91cc\u9762\u7c7b\u578b\u7684\u5b9a\u4e49\u3002\u5176\u4e2d\uff0c\u56fe\u7247\u6bd4\u8f83\u7279\u6b8a\uff0c\u9700\u8981\u5148\u5c06\u56fe\u7247\u4fdd\u5b58\u5230\u7f16\u8f91\u5668\u7684\u540e\u53f0\u670d\u52a1\u5668\u4e0a\uff08\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadResource")," \u65b9\u6cd5\uff09\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u8d44\u6e90\u7684\u6587\u4ef6\u540d\uff0c\n\u6700\u540e\u5229\u7528\u8fd4\u56de\u7684\u6587\u4ef6\u540d\u751f\u6210\u5bfc\u51fa\u6570\u636e\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadResource")," \u4e0a\u4f20\u8d44\u6e90\u5230\u7f16\u8f91\u5668\u7684\u670d\u52a1\u4e2d\u65f6\uff0c\u8d44\u6e90\u662f\u548c\u5f53\u524d\u7684\u6587\u6863\u7ed1\u5b9a\u7684\uff0c\u5728\u8de8\u6587\u6863\u590d\u5236\u81ea\u5b9a\u4e49\u5b8f\u65f6\uff0c\u8d44\u6e90\u4e5f\u9700\u8981\u590d\u5236\u5230\u5bf9\u5e94\u7684\u6587\u6863\u4e2d\uff0c\u6240\u4ee5\u5728\u6587\u6863\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u7ea6\u5b9a\u4e86\u4e00\u4e2a\u5b57\u6bb5\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"\uff09\u6765\u4fdd\u5b58\u8fd9\u4e9b\u8d44\u6e90\uff0c\u5e73\u53f0\u4f1a\n\u9ed8\u8ba4\u5bf9\u5b57\u6bb5\u91cc\u9762\u7684\u8d44\u6e90\u8fdb\u884c\u590d\u5236\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5bfc\u51fa\u91cc\u9762\u7684\u56fe\u7247\u8d44\u6e90\u4e0d\u9700\u8981\u5728\u8fd9\u4e2a\u5b57\u6bb5\u4e2d\u4fdd\u5b58\u4e86\uff0c\u5e73\u53f0\u4f1a\u5904\u7406\u5bfc\u51fa\u6570\u636e\u4e2d\u7684\u56fe\u7247\u8d44\u6e90\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"document.saveData(\n  {\n    resources: [resourceId],\n  },\n  {\n    exportSpec: [\n      {\n        type: 'image',\n        data: resourceName,\n      },\n    ],\n  },\n)\n"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.default,{value:"latest",label:"\u6700\u65b0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { lifecycle } from '@ones-op/bridge'\n\nconst document = useDocumentInfo()\n\ndocument\n  .uploadResource(File /** \u9700\u8981\u5bfc\u51fa\u7684\u56fe\u7247\u6587\u4ef6  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // \u9700\u8981\u4fdd\u5b58\u5230\u6587\u6863\u4e2d\u7684\u6570\u636e\n      {\n        data: value,\n        // \u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5`resources`\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // \u5173\u95ed toolbar\n    lifecycle.destroy()\n  })\n"))),(0,r.kt)(l.default,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\n\ndocument\n  .uploadResource(File /** \u9700\u8981\u5bfc\u51fa\u7684\u56fe\u7247\u6587\u4ef6  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // \u9700\u8981\u4fdd\u5b58\u5230\u6587\u6863\u4e2d\u7684\u6570\u636e\n      {\n        data: value,\n        // \u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5`resources`\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // \u5173\u95ed toolbar\n    document.goToState({\n      builtIn: true,\n      value: 'init',\n    })\n  })\n")))),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001"},"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\uff0c\u53ef\u4ee5\u83b7\u53d6\u63d2\u4ef6\u7684\u8fd0\u884c\u72b6\u6001\u3002\u540c\u65f6\uff0c\u63d2\u4ef6\u4e5f\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u72b6\u6001\uff0c\u6bd4\u5982\uff0c\u5f53\u6587\u6863\u4fdd\u5b58\u7684\u6570\u636e\u6709\u95ee\u9898\uff0c\u9700\u8981\u63d0\u793a\u7528\u6237\u91cd\u65b0\u7f16\u8f91\u8be5\u6570\u636e\uff0c\u63d2\u4ef6\u53ea\u9700\u8981\u8c03\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u3002\u5177\u4f53\u72b6\u6001\u7684\u5b9a\u4e49\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\ndocument.setStatus(EmbedPluginRuntimeStatus.DATA_INVALID)\n")))}N.isMDXComponent=!0}}]);