(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[55077],{11829:(e,t,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/code-repo-example-add-repo-en.542c04f.514.png 514w",images:[{path:o.p+"assets/ideal-img/code-repo-example-add-repo-en.542c04f.514.png",width:514,height:572}],src:o.p+"assets/ideal-img/code-repo-example-add-repo-en.542c04f.514.png",toString:function(){return o.p+"assets/ideal-img/code-repo-example-add-repo-en.542c04f.514.png"},placeholder:void 0,width:514,height:572},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVQYlW2RzQ7CIBCEef8n0PfwZrzqwbuJ8eTBg1Fbyl+D7O4YsCW1leQLyzLZyYByzkFrXWjbFt575CUiFSKCstbCGANmroJcT8k9lSfEGBeXc4owpfR3EteJDGWsx7PRsD4gkeBN/ENMXPqqsx7GBSSWLzTsA+/hXMI470HMJd3cduypzSlgfTBY7Ttsz6Ek58nTjKhHo3G7v9DaHpGWgipkIkC4IMVqlnq0ltkvIJPtWSCpx/EasLv0+ACr1q51QBhkYQAAAABJRU5ErkJggg=="}},15542:(e,t,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/code-repo-example-connector-en.8d0b845.647.png 647w",images:[{path:o.p+"assets/ideal-img/code-repo-example-connector-en.8d0b845.647.png",width:647,height:664}],src:o.p+"assets/ideal-img/code-repo-example-connector-en.8d0b845.647.png",toString:function(){return o.p+"assets/ideal-img/code-repo-example-connector-en.8d0b845.647.png"},placeholder:void 0,width:647,height:664},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQYlW2QS27EIBBEuf+5cotEWSSLZDHGNrahP5gXgWcURZOWngqkAlVXEFVS2hAR+rTWnqi1ElpO1GOliGKqqAjaVXU8NtPLKGLkLKzbwZ6F3O93jqKIOUWdsC8za4x83RZuy0ZMmSkdxDvTurPshZDFx0+qhteKmmN+8Th3DWaOqKEqf/INRHCzK+OcIe7OOk9j+2uJX3NvpWtIhxBTGYHd/8fMCMvnK9PHG6WOFkeXT9MqwevJeXbDc9HtdL5X4eW98AONe4Z1ZVzYJwAAAABJRU5ErkJggg=="}},34499:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=o(87462),a=(o(67294),o(3905)),n=o(15944);const l={},r="Scene: Integrate the private Gitlab code repository of the specified version",s={unversionedId:"abilities/business/custom-code-repository/custom-code-repository-private-gitlab",id:"version-1.x/abilities/business/custom-code-repository/custom-code-repository-private-gitlab",title:"Scene: Integrate the private Gitlab code repository of the specified version",description:"Scene Description",source:"@site/versioned_docs/version-1.x/abilities/business/custom-code-repository/custom-code-repository-private-gitlab.mdx",sourceDirName:"abilities/business/custom-code-repository",slug:"/abilities/business/custom-code-repository/custom-code-repository-private-gitlab",permalink:"/open-docs/docs/abilities/business/custom-code-repository/custom-code-repository-private-gitlab",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690862808,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Integration code repository",permalink:"/open-docs/docs/abilities/business/custom-code-repository/"},next:{title:"ItemHandler",permalink:"/open-docs/docs/abilities/business/item-handler/"}},p={},d=[{value:"Scene Description",id:"scene-description",level:2},{value:"Performance",id:"performance",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation idea",id:"implementation-idea",level:3},{value:"Plugin development",id:"plugin-development",level:3},{value:"Step 1: add ability and module",id:"step-1-add-ability-and-module",level:4},{value:"Step 2: Implement OAuth authentication",id:"step-2-implement-oauth-authentication",level:4},{value:"Step 3: add repositories",id:"step-3-add-repositories",level:4},{value:"Step 4: Add code repository commit and pull request",id:"step-4-add-code-repository-commit-and-pull-request",level:4}],c={toc:d};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scene-integrate-the-private-gitlab-code-repository-of-the-specified-version"},"Scene: Integrate the private Gitlab code repository of the specified version"),(0,a.kt)("h2",{id:"scene-description"},"Scene Description"),(0,a.kt)("p",null,'Users want to integrate the private Gitlab code repository of a specified version. At this time, they can use the "custom code repository ability" in the plugin to achieve it. Here we take Gitlab15.4 version as an example.'),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"After the ONES system installs the plugin, you can view the newly added custom Gitlab15.4 in the linked code repository method list."),(0,a.kt)(n.Z,{img:o(15542),style:{maxWidth:700},mdxType:"Image"}),(0,a.kt)("p",null,"Developers can modify the ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/slot/module/configuration/code-integration/default/code-repository/#onessettingspipelinedefaultrepolink"},"ones:settings:pipeline:default:repo:link")," module to customize the following linked code repository pages to implement Gitlab Authentication logic and add code repository logic."),(0,a.kt)(n.Z,{img:o(11829),style:{maxWidth:700},mdxType:"Image"}),(0,a.kt)("p",null,"After successfully linked a code repository, you can view it on the code repository management page. When a new commit and pull request are added to the code repository, if the work item ID is associated, you can view the associated records under iteration and work item."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"implementation-idea"},"Implementation idea"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Authenticate Gitlab through OAuth and obtain the access_token of Gitlab;"),(0,a.kt)("li",{parentName:"ol"},"Use the obtained Gitlab access_token to query the code repository from Gitlab for link;"),(0,a.kt)("li",{parentName:"ol"},"Call the Gitlab api to create a webhook before link the code repository, and synchronize the commit and pull request data of the associated code repository to the ONES system. At this time, the plugin needs to define an web interface that can be used for Gitlab access.")),(0,a.kt)("h3",{id:"plugin-development"},"Plugin development"),(0,a.kt)("h4",{id:"step-1-add-ability-and-module"},"Step 1: add ability and module"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/business/custom-code-repository/#step-1-ability-configuration-to-add-ability-and-module-to-the-plugin"},"Custom Integrated Code Repository-Add abilities and modules to the plugin"),", add ability and module configurations for the plugin, and add The configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: ...\napis: ...\nabilities:\n  - id: CkrqExqC\n    name: CustomCodeRepository\n    version: 1.0.0\n    abilityType: CustomCodeRepository\n    relateModule:\n      addRepoPage: 'ones-settings-pipeline-default-repo-link-R5w-'\n    function:\n      removeRepoFunc: removeRepo\n    config:\n      - key: repoToolName\n        label: Associated repository tool name\n        value: GitLab 15.4\n        fieldType: Input\n        show: true\n      - key: repoToolDesc\n        label: Associated code repository tool description\n        value: GitLab 15.4\n        fieldType: Input\n        show: true\n      - key: repoToolIcon\n        label: Link code repository tool icon\n        value: logo.svg\n        fieldType: Input\n        show: false\nmodules:\n  - id: ones-settings-pipeline-default-repo-link-R5w-\n    title: Associate code repository page\n    moduleType: ones:settings:pipeline:default:repo:link\n    entry: modules/ones-settings-pipeline-default-repo-link-R5w-/index.html\n")),(0,a.kt)("h4",{id:"step-2-implement-oauth-authentication"},"Step 2: Implement OAuth authentication"),(0,a.kt)("p",null,"The main steps of Gitlab Oauth authentication include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare the redirect url for the callback page address of successful Gitlab authentication;"),(0,a.kt)("li",{parentName:"ul"},"Create an application in Gitlab, use the redirect url in the previous step to get the app ID and secret;"),(0,a.kt)("li",{parentName:"ul"},"Use the app ID and redirect url to splice the address of the Gitlab authentication page, the user authentication page is successfully authorized and automatically jumps to the redirect url, and the authorization code is spelled in the redirect url parameter;"),(0,a.kt)("li",{parentName:"ul"},"Use the app ID, secret, redirect url, and the code obtained in the previous step to call the Gitlab api to obtain an access_token, which can then be used to access Gitlab resources.")),(0,a.kt)("p",null,"Gitlab OAuth can refer to the official document ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/api/oauth2.html"},"Gitlab OAuth"),"."),(0,a.kt)("admonition",{title:"notice",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For Gitlab 15.4 and later versions, the access_token is not permanently valid, and the valid time is generally 2 hours. At this time, you need to use the returned refresh_token to call the Gitlab api to obtain a new access_token.")),(0,a.kt)("p",null,"Here, in order to implement Gitlab's OAuth authentication, the following parameters need to be configured:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app ID"),(0,a.kt)("li",{parentName:"ul"},"secret"),(0,a.kt)("li",{parentName:"ul"},"gitlab url"),(0,a.kt)("li",{parentName:"ul"},"redirect url")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Prepare redirect URL")),(0,a.kt)("p",null,"For the redirect url of the Gitlab authorization success callback page, it can be implemented by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"about-blank")," type module in the plugin."),(0,a.kt)("p",null,"Suppose the ",(0,a.kt)("inlineCode",{parentName:"p"},"about-blank")," module is configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - id: about-blank-BE8t\n    title: gitlab\n    moduleType: about:blank\n    entry: modules/about-blank-BE8t/index.html\n")),(0,a.kt)("p",null,"Then the access rule of ",(0,a.kt)("inlineCode",{parentName:"p"},"aboud-blank")," module page is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Team level plugin: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{host}}/plugin/{{org_UUID}}/{{team_UUID}}/{{app_ID}}/1.0.0/modules/about-blank-BE8t/index.html")),(0,a.kt)("li",{parentName:"ul"},"Organization level plugin: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{host}}/plugin/{{org_UUID}}/{{app_ID}}/1.0.0/modules/about-blank-BE8t/index.html"))),(0,a.kt)("p",null,"Then on the ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/slot/module/configuration/code-integration/default/code-repository/#onessettingspipelinedefaultrepolink"},"ones:settings:pipeline:default:repo:link")," module page, splice the redirect url according to the above rules."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Gitlab Create Application")),(0,a.kt)("p",null,"The user uses the redirect url to create an application in Gitlab, and can obtain the app ID and secret after the creation is successful."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Authenticate Gitlab")),(0,a.kt)("p",null,"Authenticate Gitlab flow chart is as follows:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant plugin-oauth-page as plugin authorization Page\n    participant plugin-redirect-page as plugin redirect page\n    participant plugin-backend as plugin backend\n    participant gitlab as private Gitlab\n    plugin-oauth-page->>plugin-oauth-page: Use app ID, gitlab url and redirect url to splicing Gitlab authorization page address\n    plugin-oauth-page->>gitlab: Jump to Gitlab authorization page\n    gitlab->>plugin-redirect-page: User authorization is successful, add the authorization code parameter and redirect to redirect url\n    plugin-redirect-page->>plugin-oauth-page: authorization successful, synchronization code\n    plugin-oauth-page->>plugin-backend: request authentication, pass parameters code, app ID, secret, redirect url\n    plugin-backend->>gitlab: Apply to Gitlab for access_token\n    gitlab->>plugin-backend: get success, return access_token\n    plugin-backend->>plugin-backend: authentication is successful, record authentication information such as app ID, secret, access_token\n    plugin-backend->>plugin-oauth-page: return authentication success"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugin authentication page: corresponding to ",(0,a.kt)("inlineCode",{parentName:"li"},"ones:settings:pipeline:default:repo:link")," module;"),(0,a.kt)("li",{parentName:"ul"},"Plugin redirection page: corresponds to ",(0,a.kt)("inlineCode",{parentName:"li"},"about-blank")," module.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"about-blank")," module receives the authorization code and synchronizes it to the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ones:settings:pipeline:default:repo:link")," module, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/abilities/slot/module/configuration/code-integration/default/code-repository/#third-party-authentication"},"Code repository management-third-party authentication"),"."),(0,a.kt)("h4",{id:"step-3-add-repositories"},"Step 3: add repositories"),(0,a.kt)("p",null,"Add code repositories mainly includes two parts of work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Query code repositories from Gitlab;"),(0,a.kt)("li",{parentName:"ul"},"Add code repositories to ONES system.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Query code repositories from Gitlab")),(0,a.kt)("p",null,"All associated code repositories can be selected from Gitlab according to the following logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fetchHttp } from '@ones-op/node-fetch'\n\nexport interface GitlabRepo {\n  id: number\n  uri: string\n  namespace: string\n  name: string\n}\n\nexport async function listGitlabRepo(): Promise<GitlabRepo[]> {\n  const result: GitlabRepo[] = []\n\n  const gitlabUrl = 'xxx'\n  const accessToken = 'xxx'\n  const url = `${gitlabUrl}/api/v4/projects`\n  const response = await fetchHttp({\n    method: 'get',\n    url: url,\n    headers: {\n      accept: 'application/json',\n      Authorization: `Bearer ${accessToken}`,\n    },\n  })\n  const body = response?.body as any\n  if (response?.statusCode !== 200) {\n    throw new Error('gitlab request failed')\n  }\n\n  for (let i = 0; i < body.length; i++) {\n    const repo: GitlabRepo = {\n      id: body[i].id,\n      uri: gitlabUrl,\n      namespace: body[i].namespace.full_path,\n      name: body[i].path,\n    }\n    result.push(repo)\n  }\n  return result\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Add code repositories to ONES system")),(0,a.kt)("p",null,"After obtaining the list of code repositories that can be added, you can call the ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/reference/packages/node-ability/#addrepos"},"add code repositories")," method to add, you need to pay attention The result of whether the code repositories is successfully added or not is used as a copy prompt. At the same time, in order to avoid repeatedly associating code repositories, developers can call ",(0,a.kt)("a",{parentName:"p",href:"/open-docs/docs/reference/packages/node-ability/#queryrepos"},"query all linked code repositories")," method to query and filter."),(0,a.kt)("h4",{id:"step-4-add-code-repository-commit-and-pull-request"},"Step 4: Add code repository commit and pull request"),(0,a.kt)("p",null,"For Gitlab, if you want to obtain code repository commit and pull request data, you can obtain it by creating a webhook subscription. At this time, the plugin needs to add a corresponding webhook interface. How to create webhook in Gitlab can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/api/projects.html#add-project-hook"},"Gitlab add hook")," document."),(0,a.kt)("p",null,"If the new webhook interface of the plugin is configured as follows, the webhook url provided to Gitlab is ",(0,a.kt)("inlineCode",{parentName:"p"},"{{host}}/project/api/project/team/{{team_UUID}}/gitlabWebhook"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apis:\n  - type: external\n    methods:\n      - POST\n    url: /team/:teamUUID/gitlab/webhook\n    function: gitlabWebhook\n")),(0,a.kt)("p",null,"Gitlab's code repository commit corresponds to the webhook's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events"},"push_events")," event, and the pull request corresponds to For ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#merge-request-events"},"merge_requests_events")," events, the two can be distinguished by the request header ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Gitlab-Event"),". For the data format of Gitlab webhook events, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#webhook-events"},"Gitlab webhook events")," document."),(0,a.kt)("admonition",{title:"notice",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For the method of using webhook to obtain code repository commit and pull request data, you need to pay attention to two scenarios: the code repository is removed from the ONES system and the plugin is enabled or disabled:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"For the scenario where the code repository is removed from the ONES system, developers can add the logic of deleting webhooks in the ",(0,a.kt)("inlineCode",{parentName:"li"},"removeRepo")," method added by the ability;"),(0,a.kt)("li",{parentName:"ul"},"For the plugin enable and disable scenarios, since the interface defined by the plugin will not be accessible at this time, and the SDK methods for the new code repository commit and pull request will not be called, developers can enable the plugin when the plugin is enabled Restore the webhook of the code repository, and delete the webhook of the code repository when the plugin is disabled."))))}u.isMDXComponent=!0}}]);