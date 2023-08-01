"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[53434],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(t),c=o,m=g["".concat(p,".").concat(c)]||g[c]||d[c]||r;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(87462),o=(t(67294),t(3905));const r={id:"development",sidebar_position:6},a="Development",l={unversionedId:"guide/development",id:"version-1.x/guide/development",title:"Development",description:"Overview",source:"@site/versioned_docs/version-1.x/guide/development.md",sourceDirName:"guide",slug:"/guide/development",permalink:"/open-docs/docs/guide/development",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:6,frontMatter:{id:"development",sidebar_position:6},sidebar:"guide",previous:{title:"Directory structure",permalink:"/open-docs/docs/guide/structure"},next:{title:"Style guide",permalink:"/open-docs/docs/guide/style-guide"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Noun interpretation",id:"noun-interpretation",level:3},{value:"Usage",id:"usage",level:2},{value:"Step 1: Specify debugging environment information",id:"step-1-specify-debugging-environment-information",level:3},{value:"Step 2: Start local debugging",id:"step-2-start-local-debugging",level:3},{value:"Debug frontend",id:"debug-frontend",level:4},{value:"Debug API",id:"debug-api",level:4},{value:"Api registration",id:"api-registration",level:5},{value:"Api interception",id:"api-interception",level:5},{value:"Step 3: Clear debugging status",id:"step-3-clear-debugging-status",level:3},{value:"Modify the configuration file",id:"modify-the-configuration-file",level:4},{value:"Remove plugin in debugging",id:"remove-plugin-in-debugging",level:4}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"After creating the plugin project, you need to log in to ONES to debug your plugin. After setting up the debugging environment, you can experience the plugin capabilities in real time in ONES."),(0,o.kt)("p",null,"When installing ONES CLI, we have built in the plugin development scaffolding tool ",(0,o.kt)("inlineCode",{parentName:"p"},"op")," for you. But to see the plugin ability in real time, you also need to specify a debugging environment to host your plugin."),(0,o.kt)("h3",{id:"noun-interpretation"},"Noun interpretation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"op :")," the plugin development scaffolding tool has built-in all the instructions needed throughout the plugin development lifecycle. For instructions, please see: ",(0,o.kt)("a",{parentName:"li",href:"/open-docs/docs/tools/cli/op-cli"},"ONES OP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"baseURL :")," remote debugging environment URL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hostURL :")," plugin runtime URL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"instance_uuid\uff1a")," unique identification of the plugin instance, which is generated when the plugin is installed on a specific environment. Not a fixed value.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"step-1-specify-debugging-environment-information"},"Step 1: Specify debugging environment information"),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx op login")," command in the root directory of the plugin project to log in, and enter the debugging environment information according to the prompts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-raw"},"\u279c npx op login\n? Please enter the environment base URL: http://120.76.45.123\n? Please enter the environment host URL: tcp://120.76.45.123:9006\n? Username: test1@ones.com\n? Password: [hidden]\n  \u2714 Converting inputted answers to login params\n  \u2714 Fetching user profile\n  \u2714 Updating config/local.yaml\n  \u2714 Updating scope info into /Users/username/.ones/cli-plugin.yaml\n\u2714 Login successful\n? Do you want to execute 'npx op pickteam' for update team information into config file? (Y/n)\n")),(0,o.kt)("p",null,"After the login operation is completed, the ","[user credentials]"," will be written to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/local.yaml")," file under the project."),(0,o.kt)("p",null,"If you create a ",(0,o.kt)("strong",{parentName:"p"},"team level")," plugin, you will also be asked whether you need to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"pickteam")," command for team selection. Of course, you can also manually execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npx op pickteam local")," after the login operation to make team selection."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},'After the team selection is completed, the platform will help you install a "under development" plugin under the corresponding team of the corresponding remote debugging environment.'),(0,o.kt)("li",{parentName:"ul"},"If it is an organization level plugin, the platform installs the plugin in ","[Organization settings]","-","[Plugin management]",", which means that the plugin works for every team."))),(0,o.kt)("h3",{id:"step-2-start-local-debugging"},"Step 2: Start local debugging"),(0,o.kt)("p",null,"After logging in and selecting the team, you can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npx op invoke run")," under the project root directory to start local debugging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx op invoke run\n  \u2714 Validating command options\n  \u2714 Validating config/local.yaml fields\n  \u2714 Checking ability relate module\n  \u2714 Updating min_system_version in plugin.yaml\n  \u2714 Building plugin project Back-End dist files\n  \u2714 Initializing the plugin project front-end development server\n  \u2714 Initializing the node-host params\n\u2714 Local debug parameters successfully initialized with target lifecycle: 'run'\nNow starting dev server and node-host...\n<i> [webpack-dev-server] Project is running at:\n<i> [webpack-dev-server] Loopback: http://localhost:3000/\n<i> [webpack-dev-server] On Your Network (IPv4): http://10.15.3.38:3000/\n<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/\n<i> [webpack-dev-server] Content not from webpack is served from '/Users/dev/ONES/open-platform/public' directory\nStart the connection!\n{\n  action: 'run',\n  email: 'idatest3@ones.com',\n  password: 'BULWzBk6ixRM',\n  reinstall: false,\n  webIp: '10.15.3.38',\n  webPort: '3000',\n  orgUUID: 'KuLvwHJz',\n  teamUUID: 'RWqwp2L8',\n  user_uuid: 'SFBs7BHh',\n  webServiceUrl: '10.15.3.38:3000'\n}\nLocal debug return value: {\"instance_uuid\":\"1d99926e\"}\n[Plugin] Install\nThe plugin Install hook function runs successfully!\n[Plugin] Enable\nThe plugin Enable hook function runs successfully!\nReceive a message:  all done\n")),(0,o.kt)("h4",{id:"debug-frontend"},"Debug frontend"),(0,o.kt)("p",null,"The invoke instruction of the op tool starts a development server (based on webpack-dev-server) for the plugin project frontend (/web) and provides hot updates to modules out of the box. Just save your changes and you can reflect them to your debugging environment in real time."),(0,o.kt)("h4",{id:"debug-api"},"Debug API"),(0,o.kt)("p",null,"The invoke instruction of the op tool starts a development service for the backend, and after the first startup, the console returns something that can be debugged locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Local debug return value: {\n  "instance_uuid":"1d99926e"\n}\n')),(0,o.kt)("p",null,"Plugin api are roughly divided into two types: ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/business/ONES-API/ONES-API-registration"},(0,o.kt)("strong",{parentName:"a"},"api registration"))," and ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/business/ONES-API/ONES-API-interception"},(0,o.kt)("strong",{parentName:"a"},"api interception")),". When you use ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/"},"Postman")," to debug these api, you need to add different request headers according to these two types."),(0,o.kt)("p",null,"When your interface debugging shows unexpected results, you can refer to our provided ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/guide/advanced/debugger"},(0,o.kt)("strong",{parentName:"a"},"Debugging"))," method for single-step debugging to further locate the problem."),(0,o.kt)("h5",{id:"api-registration"},"Api registration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Headers"',title:'"Headers"'},'{\n  "Ones-Plugin-Id": "1d99926e", // instance_uuid\n  "Ones-Check-Point": "team"\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ones-Plugin-Id\uff1a"),'the value of the corresponding instance_uuid in the "Local Debug return value" printed on the console after starting the debug environment'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ones-Check-Point\uff1a"),(0,o.kt)("br",{parentName:"li"}),"team level plugin\uff1ateam",(0,o.kt)("br",{parentName:"li"}),"organization level plugin\uff1aorganization"))),(0,o.kt)("h5",{id:"api-interception"},"Api interception"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Headers"',title:'"Headers"'},'{\n  "Ones-User-Id": "SFBs7BHh",\n  "Ones-Auth-Token": "Z46E1Xe6mm91Q4lrFt7AJvKh4idcNNy54Cls2qwQDrFz6EGVD7XBd9GmgrVXu18A"\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ones-User-Id\uff1a")," currently logged in user uuid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ones-Auth-Token\uff1a")," the token of the corresponding environment")),(0,o.kt)("p",{parentName:"admonition"},"You can find the values of both request headers in ",(0,o.kt)("a",{parentName:"p",href:"/open-docs/docs/api/auth/#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E4%BF%A1%E6%81%AF"},"ONES API"),".")),(0,o.kt)("h3",{id:"step-3-clear-debugging-status"},"Step 3: Clear debugging status"),(0,o.kt)("h4",{id:"modify-the-configuration-file"},"Modify the configuration file"),(0,o.kt)("p",null,"If you modify the configuration file (config/plugin.yaml) of the plugin, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx op invoke Clear")," and then rerun the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx op invoke run")," directive, so that the configuration will take effect."),(0,o.kt)("h4",{id:"remove-plugin-in-debugging"},"Remove plugin in debugging"),(0,o.kt)("p",null,'If you want to remove plugin that appear as "debugging" in the remote debugging environment, you can run ',(0,o.kt)("inlineCode",{parentName:"p"},"npx op invoke clear")," and then interrupt the current process (e.g. command + C) so that the debug plugin in the remote debugging environment are uninstalled."))}d.isMDXComponent=!0}}]);