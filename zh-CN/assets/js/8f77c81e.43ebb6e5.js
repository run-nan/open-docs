(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[26474],{92707:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/plugin-directory.4152860.525.png 525w",images:[{path:n.p+"assets/ideal-img/plugin-directory.4152860.525.png",width:525,height:211}],src:n.p+"assets/ideal-img/plugin-directory.4152860.525.png",toString:function(){return n.p+"assets/ideal-img/plugin-directory.4152860.525.png"},placeholder:void 0,width:525,height:211},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImW3DSQqDMBiA0dxC6S6a/BGnxgEFB9wI0k1d6/3v8ZVu1QdP5XlB3bSIOOy/FcxDlTphHgdq77FxhIk0YuJb9Wo2qu2g/Zwk846bvoR+JbhUOinpl5VuWLDpG8k82hW3PxB7PKXH+tykAAAAAElFTkSuQmCC"}},85676:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),s=n(15944);const o={sidebar_position:1,description:"\u4e30\u5bcc\u7684\u63d2\u69fd\u63d0\u4f9b\uff0c\u968f\u5fc3\u6240\u6b32\u7684\u9875\u9762\u5b9a\u5236\u3002",toc_max_heading_level:4},l="\u6dfb\u52a0\u63d2\u69fd",p={unversionedId:"guide/abilities/add-slot",id:"version-1.x/guide/abilities/add-slot",title:"\u6dfb\u52a0\u63d2\u69fd",description:"\u4e30\u5bcc\u7684\u63d2\u69fd\u63d0\u4f9b\uff0c\u968f\u5fc3\u6240\u6b32\u7684\u9875\u9762\u5b9a\u5236\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guide/abilities/add-slot.mdx",sourceDirName:"guide/abilities",slug:"/guide/abilities/add-slot",permalink:"/open-docs/zh-CN/docs/guide/abilities/add-slot",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u4e30\u5bcc\u7684\u63d2\u69fd\u63d0\u4f9b\uff0c\u968f\u5fc3\u6240\u6b32\u7684\u9875\u9762\u5b9a\u5236\u3002",toc_max_heading_level:4},sidebar:"guide",previous:{title:"\u4e3b\u8981\u6982\u5ff5",permalink:"/open-docs/zh-CN/docs/guide/abilities/"},next:{title:"\u6dfb\u52a0\u80fd\u529b",permalink:"/open-docs/zh-CN/docs/guide/abilities/add-abilities"}},r={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u63d2\u69fd",id:"\u63d2\u69fd",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757",id:"step-1-add-slot-module",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u6dfb\u52a0\u63d2\u69fd\u5b50\u6a21\u5757",id:"step-2-add-slot-submodule",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u6dfb\u52a0\u903b\u8f91\u4ee3\u7801",id:"step-3-add-logical-code",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u6dfb\u52a0\u6837\u5f0f\u4ee3\u7801",id:"step-4-add-style-code",level:3},{value:"PostCSS",id:"postcss",level:4},{value:"\u7b2c\u4e94\u6b65\uff1a\u4f7f\u7528 ONES Design",id:"step-5-use-ones-design",level:3},{value:"\u6dfb\u52a0\u63d2\u69fd\u793a\u4f8b",id:"\u6dfb\u52a0\u63d2\u69fd\u793a\u4f8b",level:3}],m={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6dfb\u52a0\u63d2\u69fd"},"\u6dfb\u52a0\u63d2\u69fd"),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u6211\u4eec\u4e3a\u4f60\u9884\u8bbe\u4e86\u5f88\u591a\u63d2\u69fd\uff0c\u4f7f\u4f60\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7684\u5728 ONES \u4e0a\u8fdb\u884c\u4f60\u60f3\u8981\u7684\u5b9a\u5236\u5316\u64cd\u4f5c\u3002\u76ee\u524d\u4f60\u53ef\u4ee5\u628a\u63d2\u69fd\u7b80\u5355\u7684\u5f53\u4f5c\u201c\u5360\u4f4d\u7b26\u201d\uff0c\u4f60\u7684\u63d2\u4ef6\u5c31\u662f\u5f80\u8fd9\u4e2a\u5360\u4f4d\u7b26\u4e2d\u586b\u5145\u4ee3\u7801\u3002"),(0,i.kt)("h2",{id:"\u63d2\u69fd"},"\u63d2\u69fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/open-docs/zh-CN/docs/abilities/slot/"},"\u63d2\u69fd\u6a21\u5757\u5217\u8868"))),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("h3",{id:"step-1-add-slot-module"},"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0\u63d2\u69fd\u6a21\u5757"),(0,i.kt)("p",null,"\u5728\u63d2\u4ef6\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx op add module"),"\uff0c \u53ef\u4ee5\u5411\u63d2\u4ef6\u4e2d\u65b0\u589e\u63d2\u69fd\u6a21\u5757\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c npx op add module\n  \u2714 Validating the input params\n  \u2714 Validating project files exists\n  \u2714 Generating initial answers by input params\n  \u2714 Parsing plugin config content\nPre-require tasks run successfully\n? Please select the module type you want to add: \u2026\nones:desk\nones:manhour\nones:performance\nones:plan\nones:pipeline\nones:product\nones:project\nones:testcase\nones:version\nones:wiki\n")),(0,i.kt)("p",null,"\u5728\u5217\u8868\u4e2d\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u65b9\u5411\u952e\u6216\u8f93\u5165\u5b57\u7b26\u4e32\u641c\u7d22\u5e76\u9009\u62e9\u63d2\u69fd\u6a21\u5757"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u9009\u62e9\u7684\u63d2\u69fd\u662f\u5305\u542b\u5b50\u6a21\u5757\u7684\uff0c\u90a3\u5c06\u4f1a\u7ee7\u7eed\u8be2\u95ee\u4f60\u662f\u5426\u9700\u8981\u6dfb\u52a0\u5b50\u6a21\u5757\u3002\u4f60\u53ef\u4ee5\u4e00\u8d77\u6dfb\u52a0\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u540e\u9762\u624b\u52a8\u6dfb\u52a0\u3002")),(0,i.kt)("h3",{id:"step-2-add-slot-submodule"},"\u7b2c\u4e8c\u6b65\uff1a\u6dfb\u52a0\u63d2\u69fd\u5b50\u6a21\u5757"),(0,i.kt)("p",null,"\u5728\u63d2\u4ef6\u5de5\u7a0b\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx op add sub-module"),"\uff0c \u53ef\u4ee5\u5411\u63d2\u69fd\u6a21\u5757\u4e2d\u6dfb\u52a0\u5b50\u6a21\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c npx op add sub-module\n  \u2714 Validating the input params\n  \u2714 Validating project files exists\n  \u2714 Generating initial answers by input params\n  \u2714 Parsing plugin config content\n\nPre-require tasks run successfully\n? Please select the module you want to add a sub module: (Use arrow keys)\n\u276f ones-workspace-fKFw\n\u276f ones-plan-fKFF\n\u276f ones-wiki-uuDB\n")),(0,i.kt)("p",null,"\u5728\u5217\u8868\u4e2d\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u65b9\u5411\u952e\u6216\u8f93\u5165\u5b57\u7b26\u4e32\u641c\u7d22\u5e76\u9009\u62e9\u63d2\u69fd\u6a21\u5757 id"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5e76\u4e0d\u662f\u6240\u6709\u63d2\u69fd\u90fd\u5b58\u5728",(0,i.kt)("strong",{parentName:"p"},"\u5b50\u6a21\u5757"),"\uff0c\u5982\u679c\u4f60\u67e5\u9605",(0,i.kt)("a",{parentName:"p",href:"/open-docs/zh-CN/docs/abilities/slot/"},"\u6a21\u5757\u5217\u8868"),"\u4e4b\u540e\u53d1\u73b0\u4f60\u9700\u8981\u7684\u6a21\u5757\u4e0d\u5b58\u5728\u5b50\u6a21\u5757\u5219\u53ef\u8df3\u8fc7\u7b2c\u4e8c\u6b65\u3002")),(0,i.kt)("h3",{id:"step-3-add-logical-code"},"\u7b2c\u4e09\u6b65\uff1a\u6dfb\u52a0\u903b\u8f91\u4ee3\u7801"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u63d2\u69fd\u6a21\u5757\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u90fd\u5b58\u653e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/web/src/modules/")," \u76ee\u5f55\u4e0b\u4ee5\u63d2\u69fd\u6a21\u5757 id \u547d\u540d\u7684\u76ee\u5f55\u4e2d\u3002\u4f60\u53ef\u4ee5\u628a\u6bcf\u4e2a\u63d2\u69fd\u6a21\u5757\u90fd\u5f53\u4f5c\u4e00\u4e2a\u72ec\u7acb\u7684 React \u5e94\u7528\uff0c\u5b83\u548c\u4f60\u4ee5\u5f80\u719f\u6089\u7684 React \u5f00\u53d1\u65b9\u5f0f\u5e76\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\uff0c\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u4f60\u7684\u4e1a\u52a1\u903b\u8f91\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e3a\u63d2\u4ef6\u63d0\u4f9b ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/zh/"},"TypeScript")," \u7684\u5929\u7136\u652f\u6301\uff0c\u9ed8\u8ba4\u652f\u6301\u5f15\u5165 .ts \u548c .tsx \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u63d2\u4ef6\u6253\u5305\u65f6\uff0c\u6211\u4eec\u4ec5\u6267\u884c .ts \u548c .tsx \u6587\u4ef6\u7684\u8f6c\u8bd1\u5de5\u4f5c\uff0c\u5e76\u4e0d\u6267\u884c\u4efb\u4f55\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u5b83\u53ea\u4e3a\u5728\u4f60\u7f16\u7801\u65f6\u63d0\u4f9b\u53cb\u597d\u7684\u7c7b\u578b\u63d0\u793a\uff0c\u5e2e\u52a9\u4f60\u51cf\u5c11\u95ee\u9898\u7684\u4ea7\u751f\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u6bcf\u4e2a\u63d2\u4ef6\u6a21\u5757\u7684\u6253\u5305\uff0c\u6211\u4eec\u90fd\u662f\u4ee5\u6a21\u5757\u5185\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u6587\u4ef6\u4e3a\u5165\u53e3\uff0c\u8bf7\u4e0d\u8981\u5220\u6389\u8fd9\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u4e0d\u7136\u4f60\u7684\u6253\u5305\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u51fa\u73b0\u5f02\u5e38\u3002")),(0,i.kt)("h3",{id:"step-4-add-style-code"},"\u7b2c\u56db\u6b65\uff1a\u6dfb\u52a0\u6837\u5f0f\u4ee3\u7801"),(0,i.kt)("p",null,"\u540c\u6837\u7684\u6bcf\u4e2a\u63d2\u69fd\u7684\u6837\u5f0f\u4ee3\u7801\u4e5f\u90fd\u5b58\u653e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/web/src/modules/")," \u76ee\u5f55\u4e0b\u4ee5\u63d2\u69fd\u6a21\u5757 id \u547d\u540d\u7684\u76ee\u5f55\u4e2d\u3002\u6253\u5f00\u76ee\u5f55\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"index.css")," \u6587\u4ef6\uff0c\u9ed8\u8ba4\u751f\u6210\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="index.css"',title:'"index.css"'},"#ones-mf-root {\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'id="ones-mf-root"'),"\u7684\u5143\u7d20\u662f\u63d2\u69fd\u6a21\u5757\u7684\u6839\u5143\u7d20\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5c06\u6837\u5f0f\u5199\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"#ones-mf-root"),"\u7684\u9009\u62e9\u5668\u4e0b\uff0c\u5f53\u7136\u8fd9\u53ea\u662f\u63a8\u8350\uff0c\u5e76\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u4f60\u559c\u6b22\u7684\u65b9\u5f0f\u6765\u7f16\u5199\u6837\u5f0f\u4ee3\u7801\u3002"),(0,i.kt)("h4",{id:"postcss"},"PostCSS"),(0,i.kt)("p",null,"\u6211\u4eec\u4e5f\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," \u9884\u5904\u7406\u5668\u7684\u5929\u7136\u652f\u6301\uff0c\u5e76\u9ed8\u8ba4\u5e2e\u4f60\u5f00\u542f\u4e86\u4ee5\u4e0b\u529f\u80fd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"autoprefixer"},"autoprefixer"),(0,i.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u6211\u4eec\u9ed8\u8ba4\u5f00\u542f\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer"),"\uff0c\u6240\u4ee5\u4f60\u53ea\u9700\u4f7f\u7528\u65e0\u524d\u7f00\u7684 CSS \u89c4\u5219\u7f16\u5199\u63d2\u4ef6\u6837\u5f0f\u5373\u53ef\uff0c\u4e0d\u5fc5\u62c5\u5fc3\u6d4f\u89c8\u5668\u517c\u5bb9\u95ee\u9898\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"css-nano"},"cssnano"),(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://cssnano.co/"},"cssnano")," \u6765\u538b\u7f29\u63d2\u4ef6\u6837\u5f0f\u4ee3\u7801\uff0c\u4ee5\u51cf\u5c11\u63d2\u4ef6\u7684\u4f53\u79ef\uff0c\u63d0\u5347\u63d2\u4ef6\u8fd0\u884c\u6027\u80fd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"postcss-import"},"postcss-import"),(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-import"},"postcss-import")," \u9884\u914d\u7f6e\u652f\u6301\u4e86 CSS @import \u5185\u8054\uff0c\u4ee5\u4fbf\u4f60\u8fdb\u884c CSS \u6a21\u5757\u62c6\u5206\u3002"),(0,i.kt)("p",{parentName:"li"},"\u6bd4\u5982\u4f60\u53ef\u4ee5\u4e3a banner \u7ec4\u4ef6\u521b\u5efa\u5355\u72ec\u7684\u6837\u5f0f\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"banner.css"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/web/src/modules/ones-global-banner-3QC4/banner.css"',title:'"/web/src/modules/ones-global-banner-3QC4/banner.css"'},".banner {\n  width: 100%;\n}\n")),(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.css")," \u4e2d\u5f15\u5165\u5b83"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/web/src/modules/ones-global-banner-3QC4/index.css"',title:'"/web/src/modules/ones-global-banner-3QC4/index.css"'},"@import 'banner.css';\n\n#ones-mf-root {\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"postcss-nested"},"postcss-nested"),(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-nested"},"postcss-nested")," \u5141\u8bb8\u4f60\u4ee5\u5d4c\u5957\u7684\u65b9\u5f0f\u7f16\u5199 CSS \u9009\u62e9\u5668\uff0c\u5c31\u50cf\u4f60\u6240\u719f\u6089\u7684 Sass \u8bed\u6cd5\u4e00\u6837\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},".mf-bar-banner {\n  width: 100%;\n  height: 0;\n  &--active {\n    height: 40px;\n  }\n}\n")))),(0,i.kt)("h3",{id:"step-5-use-ones-design"},"\u7b2c\u4e94\u6b65\uff1a\u4f7f\u7528 ONES Design"),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u6574\u7684 UI \u7ec4\u4ef6\u5e93\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u6784\u5efa\u6807\u51c6\u7684\u63d2\u4ef6\u7528\u6237\u754c\u9762\uff0c\u5728\u63d2\u4ef6\u5de5\u7a0b\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u5b83\u5df2\u7ecf\u9ed8\u8ba4\u88ab\u5f15\u5165\u4e86\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u63d2\u69fd\u6a21\u5757\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u6587\u4ef6\u5f62\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { ConfigProvider } from '@ones-design/core'\nimport './index.css'\n\nReactDOM.render(\n  <ConfigProvider>you module title</ConfigProvider>,\n  document.getElementById('ones-mf-root')\n)\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u4f60\u5fc5\u987b\u4fdd\u7559 index.tsx \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<ConfigProvider>")," \u7ec4\u4ef6\uff0c\u5426\u5219\u63d2\u4ef6\u5c06\u65e0\u6cd5\u6309\u7167\u4f60\u9884\u671f\u7684\u65b9\u5f0f\u8fd0\u884c\u3002\u8be6\u60c5\u8bf7\u89c1 ONES Design \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://bangwork.github.io/ones-design/?path=/docs/core-configprovider--config-provider%E5%85%A8%E5%B1%80%E5%8C%96%E9%85%8D%E7%BD%AE"},"ConfigProvider \u5168\u5c40\u5316\u914d\u7f6e"),"\u7ec4\u4ef6\u6587\u6863\u3002")),(0,i.kt)("p",null,"\u6709\u5173\u4e8e\u7ec4\u4ef6\u5e93\u7684\u5177\u4f53\u4f7f\u7528\uff0c\u8bf7\u53c2\u7167\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://bangwork.github.io/ones-design/?path=/story/ones-design--page"},"ONES Design"),"\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u63d2\u69fd\u793a\u4f8b"},"\u6dfb\u52a0\u63d2\u69fd\u793a\u4f8b"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"ones:global:banner")," \u5168\u5c40\u63d2\u69fd\u4e3a\u4f8b\uff0c\u5f53\u9009\u62e9\u6dfb\u52a0\u8fd9\u4e2a\u6a21\u5757\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.yaml")," \u6587\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modules")," \u5b57\u6bb5\u4e2d\u65b0\u589e\u4e86\u4e00\u9879\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/config/plugin.yaml"',title:'"/config/plugin.yaml"'},"modules:\n  - id: ones-global-banner-3QC4\n    title: banner\n    entry: modules/ones-global-banner-3QC4/index.html\n    moduleType: ones:global:banner\n")),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u4f1a\u751f\u6210\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"entry")," \u5b57\u6bb5\u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/web/src/modules/ones-global-banner-3QC4")," \u76ee\u5f55\uff0c\u5176\u4e2d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"index.css")," \u4e24\u4e2a\u6587\u4ef6\uff1a"),(0,i.kt)(s.Z,{img:n(92707),mdxType:"Image"}),(0,i.kt)("p",null,"\u5728\u63d2\u4ef6\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx op invoke run"),"\uff0c\u8fd9\u6837\u4f60\u5c31\u80fd\u5728\u8fdc\u7aef\u8c03\u8bd5\u73af\u5883\u4e2d\u63d2\u69fd\u5bf9\u5e94\u7684\u4f4d\u7f6e\u770b\u5230\u4f60\u7684\u63d2\u4ef6\u4e86\u3002"))}u.isMDXComponent=!0}}]);