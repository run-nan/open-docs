(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[91970],{56976:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/editor.4c87a22.1024.png 1024w,"+n.p+"assets/ideal-img/editor.d7d0ffd.2560.png 2560w",images:[{path:n.p+"assets/ideal-img/editor.4c87a22.1024.png",width:1024,height:584},{path:n.p+"assets/ideal-img/editor.d7d0ffd.2560.png",width:2560,height:1459}],src:n.p+"assets/ideal-img/editor.4c87a22.1024.png",toString:function(){return n.p+"assets/ideal-img/editor.4c87a22.1024.png"},placeholder:void 0,width:1024,height:584},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVQImWWN2QrCQBAE9/+/05gnE49kkzlLZn1RHCi6GwqmPZ4b+2n0LvR+4JGYB2o+cnQ12tYFC1BL5jW5rsm0BJebM99hWuB1JK3sushkOwvYC2HskkppqvoRIxB1MhzIP5qJDDEzf6gP3/sNU5DEcJu7skMAAAAASUVORK5CYII="}},18679:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),l=n(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:n},t)}},34259:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),i=n(34334),o=n(51048),r=n(33609),p=n(1943),s=n(72957);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:c,values:k,groupId:N,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(t=null!=c?c:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:C}=(0,p.U)(),[w,A]=(0,l.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=N){const e=y[N];null!=e&&e!==w&&v.some((t=>t.value===e))&&A(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==w&&(D(t),A(a),null!=N&&C(N,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var l;const t=I.indexOf(e.currentTarget)-1;n=null!=(l=I[t])?l:I[I.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:T,onClick:E},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},64171:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),i=n(15944),o=n(34259),r=n(18679);const p={},s="Wiki \u534f\u540c\u9875\u9762",u={unversionedId:"abilities/slot/module/wiki/editor/index",id:"version-1.x/abilities/slot/module/wiki/editor/index",title:"Wiki \u534f\u540c\u9875\u9762",description:"\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/abilities/slot/module/wiki/editor/index.mdx",sourceDirName:"abilities/slot/module/wiki/editor",slug:"/abilities/slot/module/wiki/editor/",permalink:"/open-docs/zh-CN/docs/abilities/slot/module/wiki/editor/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",frontMatter:{},sidebar:"abilities",previous:{title:"\u77e5\u8bc6\u5e93\u7ba1\u7406",permalink:"/open-docs/zh-CN/docs/abilities/slot/module/wiki/"},next:{title:"Wiki \u9875\u9762",permalink:"/open-docs/zh-CN/docs/abilities/slot/module/wiki/page/"}},m={},d=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u63d2\u69fd",id:"\u63d2\u69fd",level:2},{value:"ones:wiki:editor:embed",id:"oneswikieditorembed",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e",id:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e",level:3},{value:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762",id:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762",level:3},{value:"\u4fdd\u5b58\u6570\u636e",id:"\u4fdd\u5b58\u6570\u636e",level:3},{value:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001",id:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001",level:3}],c={toc:d};function k(e){let{components:t,...p}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wiki-\u534f\u540c\u9875\u9762"},"Wiki \u534f\u540c\u9875\u9762"),(0,l.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"ONES"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"v3.11.30+")))),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)(i.Z,{img:n(56976),mdxType:"Image"}),(0,l.kt)("p",null,"\u6211\u4eec\u4e3a\u300c\u77e5\u8bc6\u5e93\u7ba1\u7406\u300d-\u300c\u9875\u9762\u7ec4\u300d-\u300c\u9009\u62e9\u9875\u9762\u7ec4\u300d-\u300cWiki \u534f\u540c\u9875\u9762\u300d\u63d0\u4f9b\u4e86\u4e00\u4e9b\u63d2\u69fd\uff0c\u4ee5\u4fbf\u4e8e\u4e3a\u8be5\u5e94\u7528\u5b9a\u5236\u5316\u9875\u9762\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u63d2\u5165\u8fd9\u4e2a\u63d2\u4ef6\u5230\u6587\u6863\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a\u5728\u7f16\u8f91\u754c\u9762\uff0c\u901a\u8fc7\u70b9\u51fb\u5de6\u4fa7\u7684\u83dc\u5355\u6216\u8005\u8f93\u5165\u5feb\u6377\u6307\u4ee4\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"),(0,l.kt)("p",null,"\u5f53\u524d\u652f\u6301\u7684\u63d2\u69fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#oneswikieditorembed"},"ones:wiki:editor:embed"))),(0,l.kt)("h2",{id:"\u63d2\u69fd"},"\u63d2\u69fd"),(0,l.kt)("h4",{id:"oneswikieditorembed"},"ones:wiki:editor:embed"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u5757\u8def\u5f84\uff1a")," \u77e5\u8bc6\u5e93\u7ba1\u7406 / \u9875\u9762\u7ec4 / \u9009\u62e9\u9875\u9762\u7ec4 / Wiki \u534f\u540c\u9875\u9762 / \u5757\u5143\u7d20"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e2a\u6570\u9650\u5236\uff1a")," \u4e00\u4e2a\u63d2\u4ef6\u4e2d\u6700\u591a\u53ef\u58f0\u660e ",(0,l.kt)("strong",{parentName:"p"},"10 "),"\u4e2a\u8be5\u63d2\u69fd\uff0c\u7cfb\u7edf\u4e2d\u6700\u591a\u540c\u65f6\u5b58\u5728 ",(0,l.kt)("strong",{parentName:"p"},"100 "),"\u4e2a\u8be5\u63d2\u69fd"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  - id: ones-wiki-editor-embed-Pl6y\n    title: \u5de5\u4f5c\u9879\n    moduleType: ones:wiki:editor:embed\n    # \u5feb\u6377\u6307\u4ee4\uff0c\u5b8f\u4f1a\u51fa\u73b0\u5728\u7528\u6237\u901a\u8fc7\u8f93\u5165"/"\u89e6\u53d1\u7684\u83dc\u5355\u4e2d\n    macroShortcut: issue\n    # \u5b8f\u7684\u63cf\u8ff0\n    description: \u63d2\u5165\u5de5\u4f5c\u9879\n    # \u5b8f\u7684\u56fe\u6807\n    icon: macro-icon.svg\n    modules:\n      - id: ones-wiki-editor-embed-syM2\n        title: \u5c55\u793a\n        # \u5f53\u524d\u63d2\u69fd\u7684\u7c7b\u578b\uff0c\n        # render \u8868\u793a\u7528\u6765\u6e32\u67d3\u5c55\u793a\u754c\u9762\n        # toolbar \u8868\u793a\u7528\u6765\u6e32\u67d3\u6587\u6863\u5757\u7684\u7f16\u8f91\u754c\u9762\n        scene: render\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-syM2/index.html\n      - id: ones-wiki-editor-embed-BUmK\n        # toolbar \u5bf9\u5e94\u7684\u540d\u79f0\n        title: \u7f16\u8f91\n        # toolbar \u5bf9\u5e94\u7684\u56fe\u6807\n        icon: edit.svg # \u5fc5\u987b\u9879\n        scene: toolbar\n        preload: true # \u5fc5\u987b\u9879\n        manual: true # \u5fc5\u987b\u9879\n        entry: modules/ones-wiki-editor-embed-Pl6y/ones-wiki-editor-embed-BUmK/index.html\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u914d\u7f6e\u9879\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#icon"},"icon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"macroShortcut"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},"\u5feb\u6377\u6307\u4ee4\u3002"),(0,l.kt)("p",{parentName:"li"},"\u6bd4\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"macroShortcut: issue"),"\uff0c\u5f53\u7528\u6237\u5728\u7f16\u8f91\u9875\u9762\u65f6\uff0c\u7528\u6237\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"/issue"),"\u5373\u53ef\u5feb\u901f\u63d2\u5165\u5f53\u524d\u63d2\u4ef6\u5230\u6587\u6863\u4e2d\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#moduleDescription"},"description"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"enableCollaborative"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ONES \u8981\u6c42\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.13.36+"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",{parentName:"li"},"\u5141\u8bb8\u591a\u4e2a\u7528\u6237\u540c\u65f6\u7f16\u8f91\u76f8\u540c\u7684\u6587\u6863\u6570\u636e\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u4e00\u4e2a\u7528\u6237\u5355\u51fb\u5de5\u5177\u680f\u65f6\uff0c\u5176\u4ed6\u7528\u6237\u65e0\u6cd5\u7f16\u8f91\u8be5\u5757\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#subModule"},"modules\uff08\u5fc5\u586b\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"modules","[*]",".scene\uff08\u5fc5\u586b\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"type: ",(0,l.kt)("inlineCode",{parentName:"p"},'"toolbar"|"render"')),(0,l.kt)("p",{parentName:"li"},"\u5f53\u524d\u63d2\u69fd\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"render"),"\u8868\u793a\u7528\u6765\u6e32\u67d3\u5c55\u793a\u754c\u9762\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," \u8868\u793a\u7528\u6765\u6e32\u67d3\u6587\u6863\u5757\u7684\u7f16\u8f91\u754c\u9762"),(0,l.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u5b8f\u63d2\u4ef6\u4e3b\u8981\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5757\u5143\u7d20\u6e32\u67d3\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"scene: render"),"\uff09\uff0c\u5fc5\u987b\u9879\uff0c\u7528\u6765\u663e\u793a\u6587\u6863\u4e2d\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u5f53\u4e00\u4e2a\u7528\u6237\u7f16\u8f91\u8be5\u5143\u7d20\u65f6\uff0c\u53e6\u4e00\u4e2a\u7528\u6237\u7684\u5bf9\u5e94\u7684\u5757\u5143\u7d20\u4f1a\u5904\u4e8e\u7981\u7528\u72b6\u6001\u3002")),(0,l.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6e32\u67d3\u5757\u91cc\u9762\u4e0d\u5e94\u8be5\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u7b49\u7f16\u8f91\u6846\uff08\u5728\u6e32\u67d3\u754c\u9762\uff0c\u5927\u90e8\u5206\u4e8b\u4ef6\u4f1a\u88ab\u62e6\u622a\uff0c\u5bfc\u81f4\u7528\u6237\u4e0d\u80fd\u8f93\u5165\uff09\uff0c\u8fd9\u4e9b\u7f16\u8f91\u64cd\u4f5c\u5e94\u8be5\u653e\u5230\u5355\u72ec\u7684\u7f16\u8f91\u754c\u9762\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," \u6253\u5f00\u7f16\u8f91\u754c\u9762\u3002")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u754c\u9762\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"scene: toolbar"),"\uff09\uff0c\u53ef\u9009\u9879\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"toolbar")," \u89e6\u53d1\u3002\u6bcf\u6b21\u6253\u5f00\uff0c\u7f16\u8f91\u754c\u9762\u4f1a\u521d\u59cb\u5316\uff0c\u5173\u95ed\u65f6\uff0c\u7f16\u8f91\u754c\u9762\u5b9e\u4f8b\u4f1a\u88ab\u9500\u6bc1\u3002"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#icon"},"modules[","*","].icon")),(0,l.kt)("p",{parentName:"li"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u901a\u8fc7\u8fd9\u4e2a\u5b57\u6bb5\u53ef\u4ee5\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," \u7684\u56fe\u6807\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#manual"},"modules[","*","].manual")),(0,l.kt)("p",{parentName:"li"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u6b64\u9009\u9879\u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../../../../reference/config/plugin.yaml#manual"},"modules[","*","].preload")),(0,l.kt)("p",{parentName:"li"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"modules[*].scene === 'toolbar'")," \u65f6\uff0c\u6b64\u9009\u9879\u5efa\u8bae\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"))),(0,l.kt)("h3",{id:"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e"},"\u53ef\u8bbf\u95ee\u7684\u4e0a\u4e0b\u6587\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/open-docs/zh-CN/docs/reference/packages/store/#useDocumentInfo"},"useDocumentInfo"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useDocumentInfo } from '@ones-op/store'\n\nconst documentInfo = useDocumentInfo()\n")),(0,l.kt)("h3",{id:"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762"},"\u4e3b\u52a8\u89e6\u53d1\u7f16\u8f91\u754c\u9762"),(0,l.kt)("p",null,"\u4e00\u822c\u7f16\u8f91\u754c\u9762\u662f\u7531\u7528\u6237\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"toolbar")," \u89e6\u53d1\uff0c\u5982\u679c\u60f3\u5728\u7528\u6237\u7b2c\u4e00\u6b21\u63d2\u5165\u81ea\u5b9a\u4e49\u5b8f\u5230\u6587\u6863\u65f6\uff0c\u4e3b\u52a8\u5f39\u51fa\u7f16\u8f91\u754c\u9762\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"isTriggerByUser")," \u52a0\u4e0a\u4e00\u4e2a\u672c\u5730\u6807\u8bc6\uff08\u662f\u5426\u5df2\u7ecf\u4e3b\u52a8\u5f39\u51fa\u8fc7\u7f16\u8f91\u754c\u9762\uff09\u6765\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u5c55\u793a\u754c\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let shouldOpenEditPage = true\n\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  useEffect(() => {\n    if (document.isTriggerByUser && shouldOpenEditPage) {\n      // \u8df3\u8f6c\u5230\u7f16\u8f91\u754c\u9762\n      document.goToState({\n        builtIn: false,\n        value: {\n          id: 'ones-wiki-editor-embed-BUmK',\n          title: '\u7f16\u8f91',\n        },\n        customData: true,\n      })\n      shouldOpenEditPage = false\n    }\n  }, [document])\n\n  return <div />\n}\n")),(0,l.kt)("p",null,"\u7f16\u8f91\u754c\u9762"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"latest",label:"\u6700\u65b0",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lifecycle } from '@ones-op/bridge'\nfunction App() {\n  const document = useDocumentInfo<unknown, boolean>()\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // \u5173\u95ed toolbar\n      lifecycle.destroy()\n    }\n  }, [document])\n  return <Modal title=\"\u63d2\u4ef6\u5f00\u53d1\" onCancel={cancel} />\n}\n"))),(0,l.kt)(r.Z,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const document = useDocumentInfo<unknown, boolean>()\n\n  const cancel = useCallback(() => {\n    if (document.toolbarState.customData) {\n      document.destroy()\n    } else {\n      // \u5173\u95ed toolbar\n      document.goToState({\n        builtIn: true,\n        value: 'init',\n      })\n    }\n  }, [document])\n\n  return <Modal title=\"\u63d2\u4ef6\u5f00\u53d1\" onCancel={cancel} />\n}\n")))),(0,l.kt)("h3",{id:"\u4fdd\u5b58\u6570\u636e"},"\u4fdd\u5b58\u6570\u636e"),(0,l.kt)("p",null,"\u5f53\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"saveData")," \u4fdd\u5b58\u6570\u636e\u65f6\uff0c\u6570\u636e\u662f\u4fdd\u5b58\u5728\u6587\u6863\u4e2d\u7684\u3002\u5982\u679c\u662f\u7b80\u5355\u7684\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\uff08\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"URL"),"\uff0c\u6587\u672c\u7b49\uff09\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"saveData")," \u4fdd\u5b58\u3002\n\u4f46\u662f\u5982\u679c\u6570\u636e\u91cf\u5f88\u5927\uff0c\u5efa\u8bae\u901a\u8fc7\u8c03\u7528\u540e\u53f0\u63a5\u53e3\u5c06\u6570\u636e\u4fdd\u5b58\u5728\u540e\u53f0\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u5c06\u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID")," \u4fdd\u5b58\u5728\u6587\u6863\u4e2d\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"saveData")," \u4e2d\u4fdd\u5b58\u7684\u6570\u636e\u4f1a\u7528\u4e8e\u7528\u6237\u7684\u64a4\u9500\u3001\u7248\u672c\u56de\u9000\u7b49\u64cd\u4f5c\uff0c\u6bcf\u6b21\u7528\u6237\u6267\u884c\u64a4\u9500\u3001\u56de\u9000\u7b49\u64cd\u4f5c\uff0c\u7f16\u8f91\u5668\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7248\u672c\u7684\u6570\u636e\u7ed9\u5230\u63d2\u4ef6\u53bb\u6e32\u67d3\u3002")),(0,l.kt)("p",null,"\u5728\u4fdd\u5b58\u6570\u636e\u7684\u540c\u65f6\uff0c\u4e5f\u9700\u8981\u544a\u8bc9\u7f16\u8f91\u5668\uff0c\u5728\u5bfc\u51fa word/PDF \u65f6\uff0c\u6570\u636e\u5982\u4f55\u5c55\u793a\uff08\u6bd4\u5982\uff1a\u63d2\u5165\u5de5\u4f5c\u9879\uff0c\u4fdd\u5b58\u7684\u6570\u636e\u662f\u5de5\u4f5c\u9879 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID"),"\uff0c\u5bfc\u51fa word/PDF \u65f6\uff0c\u4f1a\u5c55\u793a\u6210\u4e00\u4e2a\u94fe\u63a5\uff09\uff0c\n\u76ee\u524d\u5bfc\u51fa\u652f\u6301\u4e09\u79cd\u683c\u5f0f\uff08\u6587\u672c\uff0c\u94fe\u63a5\uff0c\u56fe\u7247\uff09\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," \u91cc\u9762\u7c7b\u578b\u7684\u5b9a\u4e49\u3002\u5176\u4e2d\uff0c\u56fe\u7247\u6bd4\u8f83\u7279\u6b8a\uff0c\u9700\u8981\u5148\u5c06\u56fe\u7247\u4fdd\u5b58\u5230\u7f16\u8f91\u5668\u7684\u540e\u53f0\u670d\u52a1\u5668\u4e0a\uff08\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"uploadResource")," \u65b9\u6cd5\uff09\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u8d44\u6e90\u7684\u6587\u4ef6\u540d\uff0c\n\u6700\u540e\u5229\u7528\u8fd4\u56de\u7684\u6587\u4ef6\u540d\u751f\u6210\u5bfc\u51fa\u6570\u636e\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"uploadResource")," \u4e0a\u4f20\u8d44\u6e90\u5230\u7f16\u8f91\u5668\u7684\u670d\u52a1\u4e2d\u65f6\uff0c\u8d44\u6e90\u662f\u548c\u5f53\u524d\u7684\u6587\u6863\u7ed1\u5b9a\u7684\uff0c\u5728\u8de8\u6587\u6863\u590d\u5236\u81ea\u5b9a\u4e49\u5b8f\u65f6\uff0c\u8d44\u6e90\u4e5f\u9700\u8981\u590d\u5236\u5230\u5bf9\u5e94\u7684\u6587\u6863\u4e2d\uff0c\u6240\u4ee5\u5728\u6587\u6863\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u7ea6\u5b9a\u4e86\u4e00\u4e2a\u5b57\u6bb5\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"resources"),"\uff09\u6765\u4fdd\u5b58\u8fd9\u4e9b\u8d44\u6e90\uff0c\u5e73\u53f0\u4f1a\n\u9ed8\u8ba4\u5bf9\u5b57\u6bb5\u91cc\u9762\u7684\u8d44\u6e90\u8fdb\u884c\u590d\u5236\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5bfc\u51fa\u91cc\u9762\u7684\u56fe\u7247\u8d44\u6e90\u4e0d\u9700\u8981\u5728\u8fd9\u4e2a\u5b57\u6bb5\u4e2d\u4fdd\u5b58\u4e86\uff0c\u5e73\u53f0\u4f1a\u5904\u7406\u5bfc\u51fa\u6570\u636e\u4e2d\u7684\u56fe\u7247\u8d44\u6e90\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5",(0,l.kt)("inlineCode",{parentName:"p"},"resources"),"\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"document.saveData(\n  {\n    resources: [resourceId],\n  },\n  {\n    exportSpec: [\n      {\n        type: 'image',\n        data: resourceName,\n      },\n    ],\n  }\n)\n"))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"latest",label:"\u6700\u65b0",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { lifecycle } from '@ones-op/bridge'\nconst document = useDocumentInfo()\ndocument\n  .uploadResource(File /** \u9700\u8981\u5bfc\u51fa\u7684\u56fe\u7247\u6587\u4ef6  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // \u9700\u8981\u4fdd\u5b58\u5230\u6587\u6863\u4e2d\u7684\u6570\u636e\n      {\n        data: value,\n        // \u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5`resources`\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // \u5173\u95ed toolbar\n    lifecycle.destroy()\n  })\n"))),(0,l.kt)(r.Z,{value:"ONES v3.11.40-",label:"ONES v3.11.40-",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\n\ndocument\n  .uploadResource(File /** \u9700\u8981\u5bfc\u51fa\u7684\u56fe\u7247\u6587\u4ef6  */, 'test.svg'), () => {})\n  .then((resourceName) => {\n    document.saveData(\n      // \u9700\u8981\u4fdd\u5b58\u5230\u6587\u6863\u4e2d\u7684\u6570\u636e\n      {\n        data: value,\n        // \u8bf7\u52ff\u5c06\u81ea\u5b9a\u4e49\u7684\u503c\u4f20\u9012\u7ed9\u5b57\u6bb5`resources`\uff0c\u5426\u5219\u4f1a\u88ab\u5f53\u4f5c\u8d44\u6e90 ID \u5904\u7406\u3002\n        resources: [resourceId]\n      },\n      {\n        exportSpec: [\n          {\n            type: 'image',\n            data: resourceName,\n          },\n        ],\n      }\n    )\n    // \u5173\u95ed toolbar\n    document.goToState({\n      builtIn: true,\n      value: 'init',\n    })\n  })\n")))),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001"},"\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"status"),"\uff0c\u53ef\u4ee5\u83b7\u53d6\u63d2\u4ef6\u7684\u8fd0\u884c\u72b6\u6001\u3002\u540c\u65f6\uff0c\u63d2\u4ef6\u4e5f\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u72b6\u6001\uff0c\u6bd4\u5982\uff0c\u5f53\u6587\u6863\u4fdd\u5b58\u7684\u6570\u636e\u6709\u95ee\u9898\uff0c\u9700\u8981\u63d0\u793a\u7528\u6237\u91cd\u65b0\u7f16\u8f91\u8be5\u6570\u636e\uff0c\u63d2\u4ef6\u53ea\u9700\u8981\u8c03\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u3002\u5177\u4f53\u72b6\u6001\u7684\u5b9a\u4e49\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," \u7c7b\u578b\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const document = useDocumentInfo()\ndocument.setStatus(EmbedPluginRuntimeStatus.DATA_INVALID)\n")))}k.isMDXComponent=!0}}]);