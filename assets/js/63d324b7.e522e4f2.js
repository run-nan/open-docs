(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[12721],{75104:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/install-plugin.eabbca1.1024.png 1024w,"+n.p+"assets/ideal-img/install-plugin.8461ef0.1708.png 1708w",images:[{path:n.p+"assets/ideal-img/install-plugin.eabbca1.1024.png",width:1024,height:562},{path:n.p+"assets/ideal-img/install-plugin.8461ef0.1708.png",width:1708,height:937}],src:n.p+"assets/ideal-img/install-plugin.eabbca1.1024.png",toString:function(){return n.p+"assets/ideal-img/install-plugin.eabbca1.1024.png"},placeholder:void 0,width:1024,height:562},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVQImXWOQQqAMAwE8/8P+gPBVlCrtlVsRoIiRXRhYA/DJjKHwLRE8rajqg+lKKCM8aBpV8R7T0oJSy0almIdEOfcp0glW78X8yO+cz0A0vUD8ed0zQmgAsTfWurfrwAAAABJRU5ErkJggg=="}},81357:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/org-plugin-en.f5d76f8.1024.png 1024w,"+n.p+"assets/ideal-img/org-plugin-en.2f5a05c.1719.png 1719w",images:[{path:n.p+"assets/ideal-img/org-plugin-en.f5d76f8.1024.png",width:1024,height:560},{path:n.p+"assets/ideal-img/org-plugin-en.2f5a05c.1719.png",width:1719,height:940}],src:n.p+"assets/ideal-img/org-plugin-en.f5d76f8.1024.png",toString:function(){return n.p+"assets/ideal-img/org-plugin-en.f5d76f8.1024.png"},placeholder:void 0,width:1024,height:560},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVQImXWNQQrAMAgE/f87e0ksoYcGrEa3GGihhexlhR1GqrXi7B0iAjODuyMi4BGzhzu2JqAEVRWZHFahUgpUrw+Y/b+JmefLFfga93bAbCxNj/EGsxbFHRpW2TQAAAAASUVORK5CYII="}},96828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var a=n(87462),i=(n(67294),n(3905)),l=n(15944);const p={id:"create",sidebar_position:4},o="Create an Plugin",s={unversionedId:"guide/create",id:"version-1.x/guide/create",title:"Create an Plugin",description:"Overview",source:"@site/versioned_docs/version-1.x/guide/create.mdx",sourceDirName:"guide",slug:"/guide/create",permalink:"/open-docs/docs/guide/create",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:4,frontMatter:{id:"create",sidebar_position:4},sidebar:"guide",previous:{title:"Plugin type",permalink:"/open-docs/docs/guide/type"},next:{title:"Directory structure",permalink:"/open-docs/docs/guide/structure"}},r={},g=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Create an Plugin",id:"step-1-create-an-plugin",level:3},{value:"Step 2: Package Plugin",id:"step-2-package-plugin",level:3},{value:"Step 3: Install plugin in the ONES system",id:"step-3-install-plugin-in-the-ones-system",level:3}],u={toc:g};function c(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-an-plugin"},"Create an Plugin"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can create a plugin project that can be installed in the ONES system so that you can personalize the ONES system."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"step-1-create-an-plugin"},"Step 1: Create an Plugin"),(0,i.kt)("p",null,"You can use ONES CLI to create a new plugin project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the directory where the plugin project was created, or use a new directory as the directory for the plugin project. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/test")),(0,i.kt)("li",{parentName:"ol"},"Run the following command to create a plugin project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /dev/test\n\n# -d Option indicates that the default project is used to create a preset configuration\nones create -d\n")),(0,i.kt)("p",null,"If you want to create an ",(0,i.kt)("strong",{parentName:"p"},"organization level")," plugin, then you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--plugin-type")," to specify, execute the following instructions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ones create --plugin-type organization\n")),(0,i.kt)("p",null,"During initialization, ONES CLI does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize git"),(0,i.kt)("li",{parentName:"ol"},"Create a project template file"),(0,i.kt)("li",{parentName:"ol"},"Install plugin to develop scaffolding tool op"),(0,i.kt)("li",{parentName:"ol"},"Create a global cache file"),(0,i.kt)("li",{parentName:"ol"},"Install plugin project dependencies")),(0,i.kt)("p",null,"After the initialization of the plugin project, ONES CLI will output the relevant information of the plugin project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Project has been created\nProject path: /dev/test\nProject name: test\nProject description:\nProject sub CLI: @ones/cli-plugin\n")),(0,i.kt)("h3",{id:"step-2-package-plugin"},"Step 2: Package Plugin"),(0,i.kt)("p",null,"After the plugin project is created successfully, you can try to package the plugin by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx op packup\n# or\nnpx op packup CustomPluginName\n")),(0,i.kt)("admonition",{title:"notice",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In Windows TTY, If the plugin name customized when packaging the plugin contains Chinese characters, the instructions may not be executed correctly."),(0,i.kt)("p",{parentName:"admonition"},"Developers can try to package the plugin with the default name and manually rename the file after the packaging is complete.")),(0,i.kt)("p",null,"After the packaging operation is completed, you can see the packaged plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"opk")," package in the root directory of the current plugin project."),(0,i.kt)("h3",{id:"step-3-install-plugin-in-the-ones-system"},"Step 3: Install plugin in the ONES system"),(0,i.kt)("p",null,"In an environment with plugin enabled, you can upload and install this ",(0,i.kt)("inlineCode",{parentName:"p"},"opk")," package:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"team-level-plugin-installation"},"Team level plugin installation"),(0,i.kt)("p",{parentName:"li"},"\u3010Configuration\u3011-\u3010Plugin management\u3011"))),(0,i.kt)(l.Z,{img:n(75104),mdxType:"Image"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"organization-level-plugin-installation"},"Organization level plugin installation"),"\u3010Organization settings\u3011-\u3010Plugin management\u3011")),(0,i.kt)(l.Z,{img:n(81357),mdxType:"Image"}),(0,i.kt)("p",null,"At this point, you have finished installing the first plugin."))}c.isMDXComponent=!0}}]);