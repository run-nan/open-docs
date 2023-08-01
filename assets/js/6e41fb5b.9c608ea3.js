(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[35343],{59701:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/custom-sprint-01.bac04fb.1024.png 1024w,"+i.p+"assets/ideal-img/custom-sprint-01.42962ae.2390.png 2390w",images:[{path:i.p+"assets/ideal-img/custom-sprint-01.bac04fb.1024.png",width:1024,height:448},{path:i.p+"assets/ideal-img/custom-sprint-01.42962ae.2390.png",width:2390,height:1046}],src:i.p+"assets/ideal-img/custom-sprint-01.bac04fb.1024.png",toString:function(){return i.p+"assets/ideal-img/custom-sprint-01.bac04fb.1024.png"},placeholder:void 0,width:1024,height:448},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAVUlEQVQImT1MWwrAMAzK/e86Bm3zLjiS0n2I0ai01oKqNp53gpn7FpGfRQ00xmjhuTHnKUUEzOz47th7g26zDGVuLlTwrpemO++RsMhey8x+VrB0LX7K25vLlTnBYgAAAABJRU5ErkJggg=="}},13012:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/custom-sprint-02.e35f514.1024.png 1024w,"+i.p+"assets/ideal-img/custom-sprint-02.ff75f3e.1458.png 1458w",images:[{path:i.p+"assets/ideal-img/custom-sprint-02.e35f514.1024.png",width:1024,height:364},{path:i.p+"assets/ideal-img/custom-sprint-02.ff75f3e.1458.png",width:1458,height:518}],src:i.p+"assets/ideal-img/custom-sprint-02.e35f514.1024.png",toString:function(){return i.p+"assets/ideal-img/custom-sprint-02.e35f514.1024.png"},placeholder:void 0,width:1024,height:364},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImT3MSwoAMQgD0N7/ulb8kyEWZiEJ4eG59yIiIKIQYXe4O8yYgZlBd+Oo6sKqQphtPvg60UIOhJG1XzLzh+zEvA8j13VTWBT0CwAAAABJRU5ErkJggg=="}},27153:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var s=i(87462),n=(i(67294),i(3905)),o=i(15944);const r={sidebar_position:2,description:"permission with context"},p="Scene\uff1aCustom sprint component with context-based permission",m={unversionedId:"abilities/business/permission/custom-permission/permission-with-context",id:"version-1.x/abilities/business/permission/custom-permission/permission-with-context",title:"Scene\uff1aCustom sprint component with context-based permission",description:"permission with context",source:"@site/versioned_docs/version-1.x/abilities/business/permission/custom-permission/permission-with-context.mdx",sourceDirName:"abilities/business/permission/custom-permission",slug:"/abilities/business/permission/custom-permission/permission-with-context",permalink:"/docs/abilities/business/permission/custom-permission/permission-with-context",draft:!1,tags:[],version:"1.x",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690791943,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"permission with context"},sidebar:"abilities",previous:{title:"Scene: System side component",permalink:"/docs/abilities/business/permission/custom-permission/system-sider-permission"},next:{title:"Integration code repository",permalink:"/docs/abilities/business/custom-code-repository/"}},a={},l=[{value:"Scene description",id:"scene-description",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation idea",id:"implementation-idea",level:3},{value:"Effect",id:"effect",level:3},{value:"Plugin development",id:"plugin-development",level:2},{value:"Step 1: Add Slot",id:"step-1-add-slot",level:3},{value:"Step 2: Add Custom Permission",id:"step-2-add-custom-permission",level:3},{value:"Step 3: Associate Slot with Permission Point",id:"step-3-associate-slot-with-permission-point",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scenecustom-sprint-component-with-context-based-permission"},"Scene\uff1aCustom sprint component with context-based permission"),(0,n.kt)("h2",{id:"scene-description"},"Scene description"),(0,n.kt)("p",null,'We want to implement a custom sprint component in "ONES project" and control its access permissions. The component should only be visible when it belongs to the "Demo Project" and hidden otherwise.'),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("h3",{id:"implementation-idea"},"Implementation idea"),(0,n.kt)("p",null,"Implement a custom sprint module and use the custom permission ability to add a plugin permission . Associate the custom sprint module with this custom permission."),(0,n.kt)("h3",{id:"effect"},"Effect"),(0,n.kt)("p",null,'When the component belongs to the "Demo Project," the custom sprint module is visible.'),(0,n.kt)(o.Z,{img:i(59701),mdxType:"Image"}),(0,n.kt)("p",null,'When the component does not belong to the "Demo Project," the custom sprint module is hidden.'),(0,n.kt)(o.Z,{img:i(13012),mdxType:"Image"}),(0,n.kt)("h2",{id:"plugin-development"},"Plugin development"),(0,n.kt)("h3",{id:"step-1-add-slot"},"Step 1: Add Slot"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"npx op add module")," to add a slot of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ones:project:component:sprint"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"modules:\n  - id: ones-project-component-sprint-li88\n    title: Sprint\n    moduleType: ones:project:component:sprint\n    entry: modules/ones-project-component-sprint-li88/index.html\n")),(0,n.kt)("p",null,"Implement the slot rendering logic:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="web/src/modules/ones-project-component-sprint-li88/index.tsx"',title:'"web/src/modules/ones-project-component-sprint-li88/index.tsx"'},"ReactDOM.render(\n  <ConfigProvider>\n    <h1>Custom Sprint</h1>\n  </ConfigProvider>,\n  document.getElementById('ones-mf-root')\n)\n")),(0,n.kt)("h3",{id:"step-2-add-custom-permission"},"Step 2: Add Custom Permission"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"npx op add ability")," to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom-permission")," ability."),(0,n.kt)("p",null,"Add the custom permission to the ability configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"abilities:\n  - id: xp4rZk24fP\n    name: custom permission\n    version: 1.0.0\n    abilityType: CustomPermission\n    function:\n      customPermissionCheckFunc: customPermissionCheck\n    config:\n      - key: name\n        value: custom_sprint_permission\n        show: false\n      - key: field\n        value: custom_sprint_permission\n        show: false\n      - key: desc\n        value: custom_sprint_permission\n        show: false\n      - key: is_plugin_custom_check\n        value: true\n        show: false\n")),(0,n.kt)("p",null,"Implement the permission validation logic in the ",(0,n.kt)("inlineCode",{parentName:"p"},"customPermissionCheck")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="backend/src/custom-permission.ts"',title:'"backend/src/custom-permission.ts"'},"import { Logger } from '@ones-op/node-logger'\nimport type { PluginRequest, PluginResponse } from '@ones-op/node-types'\n\ninterface PermissionContext {\n  project_uuid?: string // ONES Projects -> project ID\n  filter_view_uuid?: string // My work -> Filters -> filter view ID\n  program_uuid?: string // ONES Program -> program ID\n  product_uuid?: string // Product Management -> product ID\n  testcase_library_uuid?: string // ONES TestCase -> Test case libarary -> test case library ID\n  test_plan_uuid?: string // ONES Testcase -> Test plans -> test planID\n  wiki_space_uuid?: string // ONES Wiki -> Spaces -> space ID\n  workspace_dashboard_uuid?: string // My work -> Dashboards -> dashboard ID\n  performance_dashboard_uuid?: string // ONES Performace -> Dashboard -> dashboard ID\n}\n\ninterface PermissionBody {\n  user_uuid: string // User ID\n  permission_field: string // Permission Field\n  context: PermissionContext\n}\n\nconst permissionResult = (is_permission: boolean) => ({\n  statusCode: 200,\n  body: {\n    code: 200,\n    body: {\n      is_permission,\n    },\n  },\n})\n\nexport async function customPermissionCheck(\n  request: PluginRequest<PermissionBody>\n): Promise<PluginResponse> {\n  Logger.info('check custom permission')\n  const { permission_field, context = {} } = request.body\n  Logger.info('body:', JSON.stringify(request.body, null, 2))\n  switch (permission_field) {\n    case 'custom_sprint_permission':\n      return permissionResult(context?.project_uuid === 'UBwog7LWV7wZcWyT') // UBwog7LWV7wZcWyT is the projectUUID of the \"Demo Project\"\n  }\n  return permissionResult(true)\n}\n")),(0,n.kt)("h3",{id:"step-3-associate-slot-with-permission-point"},"Step 3: Associate Slot with Permission Point"),(0,n.kt)("p",null,"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"permission")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"needPermissionContext")," fields to the ",(0,n.kt)("inlineCode",{parentName:"p"},"module")," configuration. Associate them with the permission point declared in the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom-permission")," ability:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"modules:\n  - id: ones-project-component-sprint-li88\n    title: Sprint\n    moduleType: ones:project:component:sprint\n    entry: modules/ones-project-component-sprint-li88/index.html\n    permission: custom_sprint_permission\n    needPermissionContext: true # When needPermissionContext is true, permissions are revalidated when the permission context changes.\n")))}d.isMDXComponent=!0}}]);