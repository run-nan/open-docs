"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[27918],{65542:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var r=t(67294),l=t(79488),c=t(1871),o=t(28710),a=t(34334),i=t(13488),u=t(13191),s=t(25350),d=t(44617),m=t(2717),f=t(88365),v=t(79200),h=t(90801),E=t(87974);const p="docItemContainer_Djhp",g="docItemCol_VOVn";function L(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=(0,c.k)(),t=(0,i.i)(),l=e.hide_table_of_contents,o=!l&&n.length>0;return{hidden:l,mobile:o?r.createElement(f.Z,null):void 0,desktop:!o||"desktop"!==t&&"ssr"!==t?void 0:r.createElement(v.Z,null)}}();return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col",!t.hidden&&g)},r.createElement(s.Z,null),r.createElement("div",{className:p},r.createElement("article",null,r.createElement(E.Z,null),r.createElement(d.Z,null),t.mobile,r.createElement(h.Z,null,n),r.createElement(m.Z,null)),r.createElement(u.Z,null))),t.desktop&&r.createElement("div",{className:"col col--3"},t.desktop))}function H(e){const n="docs-doc-id-"+e.content.metadata.unversionedId,t=e.content;return r.createElement(c.b,{content:e.content},r.createElement(l.FG,{className:n},r.createElement(o.Z,null),r.createElement(L,null,r.createElement(t,null))))}},1871:(e,n,t)=>{t.d(n,{b:()=>o,k:()=>a});var r=t(67294),l=t(43768);const c=r.createContext(null);function o(e){let{children:n,content:t}=e;const l=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return r.createElement(c.Provider,{value:l},n)}function a(){const e=(0,r.useContext)(c);if(null===e)throw new l.i6("DocProvider");return e}},4382:(e,n,t)=>{t.d(n,{S:()=>i});var r=t(67294),l=t(20107);function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){var t;let{anchorTopOffset:r}=n;const l=e.find((e=>c(e).top>=r));if(l){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(o=e[e.indexOf(l)-1])?o:null}return null!=(t=e[e.length-1])?t:null}function a(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function i(e){const n=(0,r.useRef)(void 0),t=a();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let l=n;l<=t;l+=1)r.push("h"+l+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:c,maxHeadingLevel:a}),u=o(i,{anchorTopOffset:t.current}),s=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}},45067:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>a});var r=t(67294);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):r.push(l)})),r}function c(e){return(0,r.useMemo)((()=>l(e)),[e])}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:c}=e;return(0,r.useMemo)((()=>o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:c})),[n,t,c])}}}]);