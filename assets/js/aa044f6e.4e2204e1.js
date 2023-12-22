"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[2135],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(50959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return t?i.createElement(f,r(r({ref:n},c),{},{components:t})):i.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(28957),a=(t(50959),t(17942));const o={},r="Scene: Use external storage",l={unversionedId:"abilities/basic/Independent-hosting-service/external-storage",id:"abilities/basic/Independent-hosting-service/external-storage",title:"Scene: Use external storage",description:"Scene Description",source:"@site/docs/abilities/basic/Independent-hosting-service/external-storage.md",sourceDirName:"abilities/basic/Independent-hosting-service",slug:"/abilities/basic/Independent-hosting-service/external-storage",permalink:"/open-docs/docs/abilities/basic/Independent-hosting-service/external-storage",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1703230356,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Discovery service",permalink:"/open-docs/docs/abilities/basic/Independent-hosting-service/apis/independent-service"},next:{title:"Logger",permalink:"/open-docs/docs/abilities/basic/openAbility-pluginLog"}},s={},p=[{value:"Scene Description",id:"scene-description",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation idea:",id:"implementation-idea",level:3},{value:"Implementation principle:",id:"implementation-principle",level:3},{value:"Plugin development",id:"plugin-development",level:2},{value:"File storage standalone application development steps:",id:"file-storage-standalone-application-development-steps",level:3},{value:"Step 1: Writing standalone application management scripts",id:"step-1-writing-standalone-application-management-scripts",level:4},{value:"Step 2: Write an standalone application program startup entry",id:"step-2-write-an-standalone-application-program-startup-entry",level:4},{value:"Step 3: Implement the interface specification for generic file storage in the ONES",id:"step-3-implement-the-interface-specification-for-generic-file-storage-in-the-ones",level:4},{value:"Step 4: Compile into an executable and verify the compatibility of the executable",id:"step-4-compile-into-an-executable-and-verify-the-compatibility-of-the-executable",level:4},{value:"Add host standalone application ability",id:"add-host-standalone-application-ability",level:3}],c={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scene-use-external-storage"},"Scene: Use external storage"),(0,a.kt)("h2",{id:"scene-description"},"Scene Description"),(0,a.kt)("p",null,"Users want to connect the underlying storage of the ONES to other storage services, such as user built file storage services or other storage services that are not directly supported by ONES."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"implementation-idea"},"Implementation idea:"),(0,a.kt)("p",null,"Use the generic storage method (universal storage) of the ONES, and use standalone applications to implement generic interface specifications and convert related file operations to external storage. If you need to use wiz, the standalone application also needs to implement the interface specification of wiz general cloud storage. The developed service is deployed through the plugin using the ability to host standalone applications to realize the connection with external storage."),(0,a.kt)("h3",{id:"implementation-principle"},"Implementation principle:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    ONES->>+standalone application: upload files\n    standalone application->>+external storage: upload files\n    external storage->>-standalone application: return\n    standalone application->>-ONES: return\n\n    ONES->>+standalone application: download file\n    standalone application->>+external storage: download file\n    external storage->>-standalone application: return\n    standalone application->>-ONES: return"}),(0,a.kt)("h2",{id:"plugin-development"},"Plugin development"),(0,a.kt)("p",null,"The development of the file storage plugin is divided into two steps, which are the development of standalone applications and the addition of host standalone application ability for plugin hosting."),(0,a.kt)("h3",{id:"file-storage-standalone-application-development-steps"},"File storage standalone application development steps:"),(0,a.kt)("h4",{id:"step-1-writing-standalone-application-management-scripts"},"Step 1: Writing standalone application management scripts"),(0,a.kt)("p",null,"The standalone application executable is named\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"file_storage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="workspace/start.sh"',title:'"workspace/start.sh"'},'#!/bin/bash\nusage() {\n    echo -e "Usage: $(basename $0) [options]"\n    echo -e " start"\n\n    exit 1\n}\n# Deal with startup service\nstart() {\n    echo "/usr/bin/nohup ./file_storage --port=$PARAMS_PORT --args=$ARGS >/dev/null 2>&1 &"\n    /usr/bin/nohup ./file_storage --port=$PARAMS_PORT --args=$ARGS > nohup.out 2>&1 &\n}\n# Processing stop service\nstop() {\n  # The pid.txt here must be consistent with the interior of the service\n  echo "kill -9 $(cat pid.txt)"\n  kill -9 "$(cat pid.txt)"\n}\nparse_config() {\n    for arg in ${ARGS}\n    do\n        case ${arg} in\n            --port=*)\n                PARAMS_PORT=${arg#*=}\n                ;;\n            --path=*)\n                PATH=${arg#*=}\n                ;;\n            --args=*)\n                ARGS=${arg#*=}\n                ;;\n        esac\n    done\n}\nARGS="$@"\n# Declaration instruction (this is the entrance)\nparse_config\ncase $1 in\nhelp) usage;;\nstart) start;;\nstop) stop;;\n*) usage;;\nesac\n')),(0,a.kt)("h4",{id:"step-2-write-an-standalone-application-program-startup-entry"},"Step 2: Write an standalone application program startup entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nvar (\n    port int\n    args string\n)\n\nfunc initFlags() {\n    flag.IntVar(&port, "port", 18000, "service port")\n    flag.StringVar(&args, "args", "", "service other parameters")\n    flag.Parse()\n    parse_other_args()\n}\n\nfunc parse_other_args() {\n    //Parse the incoming args string according to the specification, the specification can be customized, but there must be no blanks in the args string in the design\n}\n\n//standalone application saves process PID\nfunc savePid() {\n    pid := os.Getpid()\n    log.Infof("process PID: %d \\n", pid)\n\n    err := os.WriteFile("./pid.txt", []byte(strconv.Itoa(pid)), 0644)\n    if err != nil {\n        log.Fatalf("Logging PID failed: %+v", err)\n    }\n}\n\nfunc main() {\n        //parsing parameters\n    initFlags()\n        savePid()\n\n        //... Other initialization content\n        //start web service\n    addr := fmt.Sprintf("%s:%d", "localhost", port)\n        // router.Run function can refer to step 3\n    err := router.Run(addr)\n    if err != nil {\n        log.Fatal("start service fail")\n    }\n}\n')),(0,a.kt)("h4",{id:"step-3-implement-the-interface-specification-for-generic-file-storage-in-the-ones"},"Step 3: Implement the interface specification for generic file storage in the ONES"),(0,a.kt)("p",null,"If you need to enable wiz, you need to implement the interface specification of wiz general cloud storage. For the interface specifications of the generic general storage and wiz general cloud storage of the ONES, you can view the relevant documents. Both of them need to implement the following interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package router\n\nfunc Run(addr string) error {\n    gin.SetMode(gin.ReleaseMode)\n    api := gin.Default()\n\n    //project generic storage\n    generic := api\n    generic.GET("/download/:hash", Download)\n    generic.POST("/upload", Upload)\n    generic.POST("/preupload", PreUpload)\n    generic.POST("/mkzip", Mkzip)\n    generic.POST("/persist", Persist)\n\n    //wiki wiz The following interface is the wiz general cloud storage dependent interface\n    wiki_wiz := api.Group("wiki")\n    wiki_wiz.GET("/download", wiki.Download)\n    wiki_wiz.GET("/download_stream", wiki.DownloadStream)\n    wiki_wiz.POST("/upload", wiki.Upload)\n    wiki_wiz.POST("/upload_stream", wiki.UploadStream)\n    wiki_wiz.DELETE("/file", wiki.Delete)\n    wiki_wiz.GET("/exists", wiki.Exists)\n    wiki_wiz.POST("/copy", wiki.Copy)\n    wiki_wiz.POST("/move", wiki.Move)\n\n    return api.Run(addr)\n}\n')),(0,a.kt)("h4",{id:"step-4-compile-into-an-executable-and-verify-the-compatibility-of-the-executable"},"Step 4: Compile into an executable and verify the compatibility of the executable"),(0,a.kt)("h3",{id:"add-host-standalone-application-ability"},"Add host standalone application ability"),(0,a.kt)("p",null,"The configuration is as follows: the configuration can be modified as needed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"abilities:\n  - id: PJJUbGnq\n    name: file_storage\n    abilityType: web_service\n    version: 1.0.0\n    config:\n      - fieldType: Input\n        key: root_route\n        show: false\n        value: storage\n      - fieldType: Input\n        key: args\n        show: true\n        value: ''\n      - fieldType: Input\n        key: start_file\n        show: false\n        value: start.sh\n      - fieldType: Switch\n        key: is_open\n        show: false\n        value: true\n")))}g.isMDXComponent=!0}}]);