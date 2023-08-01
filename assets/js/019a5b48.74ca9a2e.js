"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[52217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(34334);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(34334),l=n(51048),s=n(33609),i=n(1943),p=n(72957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:b,className:k}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:T}=(0,i.U)(),[N,w]=(0,o.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:Z}=(0,p.o5)();if(null!=b){const e=x[b];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==N&&(Z(t),w(r),null!=b&&T(b,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var r;const t=I.indexOf(e.currentTarget)+1;n=null!=(r=I[t])?r:I[0];break}case"ArrowLeft":{var o;const t=I.indexOf(e.currentTarget)-1;n=null!=(o=I[t])?o:I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},k)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:C,onClick:E},l,{className:(0,a.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},69763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(34259),l=n(18679);const s={sidebar_position:7},i="Style guide",p={unversionedId:"guide/style-guide",id:"guide/style-guide",title:"Style guide",description:"This is the official style guide for ONES open platform code. It's a great reference to avoid errors, bikeshedding, and anti-patterns.",source:"@site/docs/guide/style-guide.md",sourceDirName:"guide",slug:"/guide/style-guide",permalink:"/open-docs/docs/next/guide/style-guide",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guide",previous:{title:"Development",permalink:"/open-docs/docs/next/guide/development"},next:{title:"Main concepts",permalink:"/open-docs/docs/next/guide/abilities/"}},c={},u=[{value:"Formatting rules",id:"formatting-rules",level:2},{value:"Print Width",id:"print-width",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Quote Props",id:"quote-props",level:3},{value:"Semicolons",id:"semicolons",level:3},{value:"Code quality rules",id:"code-quality-rules",level:2},{value:"Priority A Rules: Essential",id:"priority-a-rules-essential",level:3},{value:"Consistent generic constructors",id:"consistent-generic-constructors",level:4},{value:"Consistent type definitions",id:"consistent-type-definitions",level:4},{value:"Consistent type exports",id:"consistent-type-exports",level:4},{value:"Consistent type imports",id:"consistent-type-imports",level:4},{value:"Exhaustive React Hooks dependencies",id:"exhaustive-react-hooks-dependencies",level:4},{value:"No constant binary expression",id:"no-constant-binary-expression",level:4},{value:"No duplicate imports",id:"no-duplicate-imports",level:4},{value:"No redundant type constituents",id:"no-redundant-type-constituents",level:4},{value:"No underscore dangle",id:"no-underscore-dangle",level:4},{value:"No use before define",id:"no-use-before-define",level:4},{value:"Prefer const",id:"prefer-const",level:4},{value:"Priority B Rules: Recommended",id:"priority-b-rules-recommended",level:3},{value:"No console",id:"no-console",level:4},{value:"Prefer optional chain",id:"prefer-optional-chain",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"style-guide"},"Style guide"),(0,o.kt)("p",null,"This is the official style guide for ONES open platform code. It's a great reference to avoid errors, bikeshedding, and anti-patterns."),(0,o.kt)("p",null,"Our style guide has two categories of rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Formatting rules"),(0,o.kt)("li",{parentName:"ul"},"Code quality rules")),(0,o.kt)("p",null,"Most of them come from best practices in the industry. However, we don't believe that any style guide is ideal for all teams or projects, so some adjustments have been made based on past experience, the surrounding tech stack, and team values."),(0,o.kt)("h2",{id:"formatting-rules"},"Formatting rules"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," as the preferred reference for formatting rules. Because ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," alleviates the need for this whole category of rules. We don't mind whether you use semicolons or trailing commas. We don't mind whether your HTML uses single-quotes or double-quotes for attribute values, Because ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," is going to reprint the entire program from scratch in a consistent way."),(0,o.kt)("p",null,"We follow most of ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"recommended rules"),", except for the following:"),(0,o.kt)("h3",{id:"print-width"},"Print Width"),(0,o.kt)("p",null,"For readability we use 100 characters by default."),(0,o.kt)("h3",{id:"quotes"},"Quotes"),(0,o.kt)("p",null,"Use single quotes instead of double quotes."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"JSX quotes ignore this option \u2013 see ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html#jsx-quotes"},"jsx-single-quote"),".")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// prettier-ignore\nlet name = "ones"\n'))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let name = 'ones'\n")))),(0,o.kt)("h3",{id:"quote-props"},"Quote Props"),(0,o.kt)("p",null,"If at least one property in an object requires quotes, quote all properties."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  'user-name': 'ones',\n  home: 'ones.com'\n}\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  'user-name': 'ones',\n  'home': 'ones.com'\n}\n// or\n{\n  user: 'ones',\n  home: 'ones.com'\n}\n")))),(0,o.kt)("h3",{id:"semicolons"},"Semicolons"),(0,o.kt)("p",null,"Only add semicolons at the beginning of lines that ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/rationale.html#semicolons"},"may introduce ASI failures"),"."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// prettier-ignore\nlet shouldAddLines = true;\nif (shouldAddLines) {\n  // prettier-ignore\n  [-1, 1].forEach((delta) => addLine(delta * 20));\n}\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let shouldAddLines = true\nif (shouldAddLines) {\n  ;[-1, 1].forEach((delta) => addLine(delta * 20))\n}\n")))),(0,o.kt)("h2",{id:"code-quality-rules"},"Code quality rules"),(0,o.kt)("p",null,"Because we use TypeScript to write all the code, we use ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," to ensure code quality. ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," enables ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to run on TypeScript code. It brings in the best of both tools to help you write the best JavaScript or TypeScript code you possibly can."),(0,o.kt)("p",null,"we've split these rules into two priorities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Priority A: Essential (Error Prevention)"),(0,o.kt)("li",{parentName:"ul"},"Priority B: Recommended")),(0,o.kt)("p",null,"Of course, we basically follow ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/"},"TypeScript ESLint")," ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/rules/"},"recommended rules"),", except for the following:"),(0,o.kt)("h3",{id:"priority-a-rules-essential"},"Priority A Rules: Essential"),(0,o.kt)("h4",{id:"consistent-generic-constructors"},"Consistent generic constructors"),(0,o.kt)("p",null,"Enforces specifying generic type arguments on type annotation or constructor name of a constructor call."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const map: Map<string, number> = new Map()\nconst set: Set<string> = new Set()\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const map = new Map<string, number>()\nconst map: Map<string, number> = new MyMap()\nconst set = new Set<string>()\nconst set: Set<string> = new Set<string>()\n")))),(0,o.kt)("h4",{id:"consistent-type-definitions"},"Consistent type definitions"),(0,o.kt)("p",null,"Enforces type definitions to consistently use ",(0,o.kt)("inlineCode",{parentName:"p"},"interface"),"."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type T = { x: number }\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type T = string\ntype Foo = string | {}\n\ninterface T {\n  x: number\n}\n")))),(0,o.kt)("h4",{id:"consistent-type-exports"},"Consistent type exports"),(0,o.kt)("p",null,"Enforces consistent usage of type exports."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ButtonProps {\n  onClick: () => void\n}\nclass Button implements ButtonProps {\n  onClick() {\n    console.log('button!')\n  }\n}\nexport { Button, ButtonProps } from 'some-library'\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface ButtonProps {\n  onClick: () => void\n}\nclass Button implements ButtonProps {\n  onClick() {\n    console.log('button!')\n  }\n}\nexport { Button, type ButtonProps } from 'some-library'\n")))),(0,o.kt)("h4",{id:"consistent-type-imports"},"Consistent type imports"),(0,o.kt)("p",null,"Enforces consistent usage of type imports."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Foo } from 'Foo'\nimport Bar from 'Bar'\ntype T = Foo\nconst x: Bar = 1\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { type Foo } from 'Foo'\nimport type Bar from 'Bar'\ntype T = Foo\nconst x: Bar = 1\n")))),(0,o.kt)("h4",{id:"exhaustive-react-hooks-dependencies"},"Exhaustive React Hooks dependencies"),(0,o.kt)("p",null,"It helps you find components that don\u2019t handle updates consistently."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example({ someProp }) {\n  function doSomething() {\n    console.log(someProp)\n  }\n  useEffect(() => {\n    doSomething()\n  }, [])\n}\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Example({ someProp }) {\n  useEffect(() => {\n    function doSomething() {\n      console.log(someProp)\n    }\n    doSomething()\n  }, [someProp])\n}\n")))),(0,o.kt)("h4",{id:"no-constant-binary-expression"},"No constant binary expression"),(0,o.kt)("p",null,"Disallows expressions where the operation doesn\u2019t affect the value."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const value1 = +x == null\nconst value3 = !foo == null\nconst value4 = new Boolean(foo) === true\nconst arrIsEmpty = someArr === []\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const value1 = x == null\nconst value3 = !(foo == null)\nconst value4 = Boolean(foo) === true\nconst arrIsEmpty = someArr.length === 0\n")))),(0,o.kt)("h4",{id:"no-duplicate-imports"},"No duplicate imports"),(0,o.kt)("p",null,"Disallow duplicate module imports."),(0,o.kt)("p",null,"Using a single import statement per module will make the code clearer because you can see everything being imported from that module on one line."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { merge } from 'module'\nimport something from 'another-module'\nimport { find } from 'module'\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { merge, find } from 'module'\nimport something from 'another-module'\n")))),(0,o.kt)("h4",{id:"no-redundant-type-constituents"},"No redundant type constituents"),(0,o.kt)("p",null,"Disallows members of unions and intersections that do nothing or override type information."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type UnionAny = any | 'foo'\ntype UnionUnknown = unknown | 'foo'\ntype UnionNever = never | 'foo'\n\ntype UnionNumberLiteral = number | 1\ntype UnionStringLiteral = string | 'foo'\n\ntype IntersectionAny = any & 'foo'\ntype IntersectionUnknown = string & unknown\n\ntype IntersectionBooleanLiteral = boolean & false\ntype IntersectionStringLiteral = string & 'foo'\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type UnionAny = any\ntype UnionUnknown = unknown\ntype UnionNever = never\n\ntype UnionNumberLiteral = number\ntype UnionStringLiteral = string\n\ntype IntersectionAny = any\ntype IntersectionUnknown = string\n\ntype IntersectionBooleanLiteral = false\ntype IntersectionStringLiteral = 'foo'\n\ntype ReturnUnionNever = () => string | never\n")))),(0,o.kt)("h4",{id:"no-underscore-dangle"},"No underscore dangle"),(0,o.kt)("p",null,"Disallow dangling underscores in identifiers."),(0,o.kt)("p",null,"The intent with the underscores was to make it obvious that this method was special in some way."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"var foo_\nvar __proto__ = {}\nfoo._bar()\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"obj.__proto__ = {}\nvar file = __filename\nfunction foo(_bar) {}\n")))),(0,o.kt)("h4",{id:"no-use-before-define"},"No use before define"),(0,o.kt)("p",null,"Disallow the use of variables before they are defined."),(0,o.kt)("p",null,'In ES6, block-level bindings (let and const) introduce a "temporal dead zone" where a ReferenceError will be thrown with any attempt to access the variable before its declaration.'),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"alert(a)\nvar a = 10\n\nf()\nfunction f() {}\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"var a\na = 10\nalert(a)\n\nfunction f() {}\nf(1)\n")))),(0,o.kt)("h4",{id:"prefer-const"},"Prefer const"),(0,o.kt)("p",null,"Requires ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," declarations for variables that are never reassigned after declared."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"const"),' declaration tells readers, "this variable is never reassigned," reducing cognitive load and improving maintainability.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If all variables in destructuring should be const, this rule warns the variables. Otherwise, ignores them.")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let { a, b } = obj\nexport { a, b }\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let { a, b } = obj\na = a + 1\n// or\nconst { a, b } = obj\nexport { a, b }\n")))),(0,o.kt)("h3",{id:"priority-b-rules-recommended"},"Priority B Rules: Recommended"),(0,o.kt)("h4",{id:"no-console"},"No console"),(0,o.kt)("p",null,"Disallows the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),", except ",(0,o.kt)("inlineCode",{parentName:"p"},"console.warn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error"),"."),(0,o.kt)("p",null,"Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," should be stripped before being pushed to production."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"console.log('log')\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"console.error('error')\n")))),(0,o.kt)("h4",{id:"prefer-optional-chain"},"Prefer optional chain"),(0,o.kt)("p",null,"Enforces using concise optional chain expressions instead of chained logical ands."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"incorrect",label:"\u274c Incorrect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method()\nfoo &&\n  foo.a != null &&\n  foo.a.b !== null &&\n  foo.a.b.c != undefined &&\n  foo.a.b.c.d !== undefined &&\n  foo.a.b.c.d.e\n"))),(0,o.kt)(l.Z,{value:"correct",label:"\u2705 Correct",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"foo?.a?.b?.method?.()\nfoo?.a?.b?.c?.d?.e\n")))))}m.isMDXComponent=!0}}]);