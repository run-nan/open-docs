(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[89734],{90152:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/independent-service-01.b217c89.807.png 807w",images:[{path:n.p+"assets/ideal-img/independent-service-01.b217c89.807.png",width:807,height:70}],src:n.p+"assets/ideal-img/independent-service-01.b217c89.807.png",toString:function(){return n.p+"assets/ideal-img/independent-service-01.b217c89.807.png"},placeholder:void 0,width:807,height:70},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVQImWP4+vXr/x8/fvz/+PTp/69v3vz/9ev3/5+/fmFgABgAJtYYlD9uAAAAAElFTkSuQmCC"}},89765:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/independent-service-02.8eb9505.1024.png 1024w,"+n.p+"assets/ideal-img/independent-service-02.4c498e2.1090.png 1090w",images:[{path:n.p+"assets/ideal-img/independent-service-02.8eb9505.1024.png",width:1024,height:810},{path:n.p+"assets/ideal-img/independent-service-02.4c498e2.1090.png",width:1090,height:862}],src:n.p+"assets/ideal-img/independent-service-02.8eb9505.1024.png",toString:function(){return n.p+"assets/ideal-img/independent-service-02.8eb9505.1024.png"},placeholder:void 0,width:1024,height:810},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlUlEQVQYlW3OywrEMAgF0Pz/b86uSW3TqGmed0gGwhQqiAsPXk28b3jnwM6CmRGYcYUwJ4vMFlWY8zwhIiBJuFiRc0KMESVn/JfZ9x2X9/g4BgUGelvL3vtqs20bBlYOYA6otT7Ags45eO8holBVpJTQ2u/qA1prcRzHfHigUso7nNFEuGNEHegldl0kIrScJ3xDA34BYng4YN96HusAAAAASUVORK5CYII="}},61637:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/independent-service-03.8533683.894.png 894w",images:[{path:n.p+"assets/ideal-img/independent-service-03.8533683.894.png",width:894,height:273}],src:n.p+"assets/ideal-img/independent-service-03.8533683.894.png",toString:function(){return n.p+"assets/ideal-img/independent-service-03.8533683.894.png"},placeholder:void 0,width:894,height:273},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImWP4/uvXz1evvly+/Pn69a/Xrv/49v3Hr98/fv6CIIa/f//+xw0YoPS/f1CEKg0AvUNX4VFNiB8AAAAASUVORK5CYII="}},18679:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(67294),a=n(34334);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:n},t)}},34259:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(87462),a=n(67294),r=n(34334),s=n(51048),l=n(33609),o=n(1943),p=n(72957);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:s,block:m,defaultValue:u,values:h,groupId:g,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===u?u:null!=(t=null!=u?u:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:A,setTabGroupChoices:y}=(0,o.U)(),[w,x]=(0,a.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=g){const e=A[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=S.indexOf(t),i=f[n].value;i!==w&&(C(t),x(i),null!=g&&y(g,String(i)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{var i;const t=S.indexOf(e.currentTarget)+1;n=null!=(i=S[t])?i:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:E,onClick:I},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,s.Z)();return a.createElement(m,(0,i.Z)({key:String(t)},e))}},42634:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=n(87462),a=(n(67294),n(3905)),r=n(15944),s=n(34259),l=n(18679);const o={sidebar_position:10,description:"The ability to deploy independent services in ONES."},p="Independent hosting service",d={unversionedId:"abilities/business/Independent-hosting-service/Independent-hosting-service",id:"version-1.x/abilities/business/Independent-hosting-service/Independent-hosting-service",title:"Independent hosting service",description:"The ability to deploy independent services in ONES.",source:"@site/versioned_docs/version-1.x/abilities/business/Independent-hosting-service/Independent-hosting-service.mdx",sourceDirName:"abilities/business/Independent-hosting-service",slug:"/abilities/business/Independent-hosting-service/",permalink:"/open-docs/docs/abilities/business/Independent-hosting-service/",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"The ability to deploy independent services in ONES."},sidebar:"abilities",previous:{title:"Progress manager",permalink:"/open-docs/docs/abilities/business/progress-manager/"},next:{title:"Scene: Use external storage",permalink:"/open-docs/docs/abilities/business/Independent-hosting-service/external-storage"}},c={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Performance",id:"performance",level:3},{value:"Usage",id:"usage",level:2},{value:"Step 1: Develop independent service",id:"step-1-develop-independent-service",level:3},{value:"Step 2: Write independent service management scripts",id:"step-2-write-independent-service-management-scripts",level:3},{value:"Step 3: Add ability configuration",id:"step-3-add-ability-configuration",level:3},{value:"Step 4: Package plugin",id:"step-4-package-plugin",level:3},{value:"Access independent service",id:"access-independent-service",level:3},{value:"Examples",id:"examples",level:2}],u={toc:m};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"independent-hosting-service"},"Independent hosting service"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"ONES"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"v3.10.28+")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Open platform provides the ability to Independent hosting service, which is an independent and complete web service, which can be common network services such as static website service, file storage service or proxy service. Using this ability, independent services can be deployed in the ONES in the form of plugin, and maintained and managed uniformly by the internal mechanism of the ONES. More customized features can be achieved by using this ability, such as the following scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When you want to implement a standard external service built into ONES, such as API account synchronization, general storage service, etc."),(0,a.kt)("li",{parentName:"ol"},"Deploy existing services to ONES so that plugin or other external services can be invoked"),(0,a.kt)("li",{parentName:"ol"},"Static website service, which embeds an independent website in the subdomain name of the ONES deployment instance")),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("p",null,"Embed an existing service into the ONES, and the effect is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enable the service locally, and access the service to return the result"),(0,a.kt)(r.Z,{img:n(90152),mdxType:"Image"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Package the service into a plugin and install and enable it in the ONES. The following figure shows the plugin details page where the plugin is installed to an environment:"),(0,a.kt)(r.Z,{img:n(89765),mdxType:"Image"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As shown in the following figure, the service built into the ONES can be accessed through a specific URL, and the result returned is no different from that of the local deployment."),(0,a.kt)(r.Z,{img:n(61637),mdxType:"Image"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"step-1-develop-independent-service"},"Step 1: Develop independent service"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Independent services need to meet the following requirements")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Parameter reception"),(0,a.kt)("p",{parentName:"li"},"When starting an independent service, the platform passes two parameters, ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", to the independent service, where the ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," parameter is the ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," that the independent service listens to, and ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," is the other parameter passed into the independent service. Therefore, these two parameters must be received and processed in the independent service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Record process PID"),(0,a.kt)("p",{parentName:"li"},"In a independent service, you must record the process PID to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pid.txt")," file in the current directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile executable files according to the system architecture of the operating environment"),(0,a.kt)("p",{parentName:"li"},"The system architecture of the running environment for independent services is ",(0,a.kt)("strong",{parentName:"p"},"Linux amd64"),"\nIt is recommended to compile the independent service binaries in the native ",(0,a.kt)("strong",{parentName:"p"},"Linux amd64")," environment. To ensure the normal startup of the independent service, you need to self check according to the following process:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build a private deployment environment and copy the binaries of the web service into the container of the private deployment environment to try to run it to ensure that it can be executed")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Linux amd64")," machine, copy the binaries of the web service to the docker container with the underlying image ",(0,a.kt)("inlineCode",{parentName:"p"},"node:16.13.1")," and try to run it to ensure that it can be executed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On a ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux amd64")," machine run the following command"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," docker run -itd --name=node16  node:16.13.1\n docker cp ./web_service node16:/web_service\n docker exec -it node16 bash\n ./web_service\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommended writing for independent service")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"go",label:"Goland",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Goland\npackage main\nimport (\n    "flag"\n    "fmt"\n    "github.com/gin-gonic/gin"\n    "log"\n    "os"\n    "strconv"\n)\n\nvar (\n    port int\n    args string\n)\n\nfunc init() {\n    flag.IntVar(&port, "port", 0, "int flag value")\n    flag.StringVar(&args, "args", "", "int flag value")\n}\n\nfunc main() {\n    pid := os.Getpid()\n    fmt.Printf("Process PID: %d \\n", pid)\n\n    err := os.WriteFile("./pid.txt", []byte(strconv.Itoa(pid)), 0644)\n    if err != nil {\n        log.Fatal("Failed to record the process", err)\n    }\n\n    flag.Parse()\n    r := gin.Default()\n    r.GET("/", func(c *gin.Context) {\n        c.String(200, "Hello World!")\n    })\n    fmt.Println("port:", port)\n    fmt.Println("args:", args)\n    log.Fatal(r.Run(fmt.Sprintf(":%d", port)))\n}\n')))),(0,a.kt)("h3",{id:"step-2-write-independent-service-management-scripts"},"Step 2: Write independent service management scripts"),(0,a.kt)("p",null,"The independent service is started and stopped through the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace/start.sh")," script file, and the script needs to meet the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ensure that the binary of the independent service has permission to execute the ",(0,a.kt)("strong",{parentName:"p"},"shell")," file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Need to support ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stop")," instructions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," instruction needs to receive the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"./hello_service --port=PARAMS_PORT --args=Args"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," instruction needs to be started in the background when it is implemented, for example:",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/nohup ./hello_service --port=$PARAMS_PORT --args=$Args >/dev/null 2>&1 &")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommended way of writing"),": If there is no special requirement, it can be used directly, just modify the name of the binary file in the startup command (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"hello_service")," in the following content)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="workspace/plugin.yaml"',title:'"workspace/plugin.yaml"'},'#!/bin/bash\n\nusage() {\n    echo -e "Usage: $(basename $0) [options]"\n    echo -e " start"\n\n    exit 1\n}\n\n# Deal with startup service\nstart() {\n    echo "/usr/bin/nohup ./hello_service --port=$PARAMS_PORT --args=$ARGS >/dev/null 2>&1 &"\n    /usr/bin/nohup ./hello_service --port=$PARAMS_PORT --args=$ARGS > nohup.out 2>&1 &\n}\n\n# Processing stop service\nstop() {\n  # The pid.txt here must be consistent with the interior of the service\n  echo "kill -9 $(cat pid.txt)"\n  kill -9 "$(cat pid.txt)"\n}\n\nparse_config() {\n    for arg in ${ARGS}\n    do\n        case ${arg} in\n            --port=*)\n                PARAMS_PORT=${arg#*=}\n                ;;\n            --path=*)\n                PATH=${arg#*=}\n                ;;\n            --args=*)\n                ARGS=${arg#*=}\n                ;;\n        esac\n    done\n}\n\nARGS="$@"\n# Declaration instruction (this is the entrance)\n\nparse_config\ncase $1 in\nhelp) usage;;\nstart) start;;\nstop) stop;;\n*) usage;;\nesac\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The above writing method will redirect the standard output of the independent service to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nohup.out")," file, and additional processing is required when the log information is stored in it to prevent accumulation and occupation of disk storage.")),(0,a.kt)("h3",{id:"step-3-add-ability-configuration"},"Step 3: Add ability configuration"),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"npx op add ability")," to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"web-service")," ability, the following content is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"abilities")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.yaml")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"abilities:\n  - id: qRUFfcomn\n    name: 'hello_service_plugin'\n    version: 1.0.0\n    abilityType: web_service\n    config:\n      - key: root_route\n        value: file_storage\n        fieldType: Input\n        show: false\n      - key: start_file\n        value: 'start.sh'\n        fieldType: Input\n        show: false\n      - key: is_open\n        value: false\n        fieldType: Input\n        show: false\n      - key: args\n        value: 'name'\n        fieldType: Input\n        show: false\n")),(0,a.kt)("p",null,"The role of each configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"abilities.config")," is shown in the following table, and whether to display it on the plugin details page is decided according to the show attribute in each data:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Configuration item")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Action")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"root_route"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When the independent service is started, the access path is generated based on the configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"start_file"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the independent service management script")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"is_open"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Indicates whether external access is allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"args"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Parameters passed to independent services")))),(0,a.kt)("h3",{id:"step-4-package-plugin"},"Step 4: Package plugin"),(0,a.kt)("p",null,"Copy the binary file and management script of the independent service to the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," directory of the plugin project, and package the plugin. The directory structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"workspace          //Plugin project workspace directory\n\u251c\u2500\u2500 hello_service  //Executable files for independent services\n\u2514\u2500\u2500 start.sh       //Management scripts for independent services\n")),(0,a.kt)("h3",{id:"access-independent-service"},"Access independent service"),(0,a.kt)("p",null,"independent services support both external and internal access after the plugin is successfully installed and enabled:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"External access")),(0,a.kt)("p",{parentName:"li"},"url splicing rules\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"url = {{ONES-host}}/plugin_service/{{root_route}}"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ONES-host")," is the access address of the ONES, and ",(0,a.kt)("inlineCode",{parentName:"p"},"root_route")," is the plugin ability configuration."),(0,a.kt)("p",{parentName:"li"},"eg\uff1ahttps://your-host:10000/plugin_service/file_storage/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://your-host:10000")," this paragraph is the domain name based on your environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugin_service")," is a specific prefix that accesses independently owned"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file_storage")," is the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"root_route")," that you declare in your ability."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Internal access")),(0,a.kt)("p",{parentName:"li"},"Independent deployment: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9008/{{root_route}}")),(0,a.kt)("p",{parentName:"li"},"Highly available deployment\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"http://plugin-service-proxy-svc:9007/{{root_route}}")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./external-storage"},"Use external storage"))))}h.isMDXComponent=!0}}]);