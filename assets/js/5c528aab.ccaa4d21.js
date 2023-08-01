"use strict";(self.webpackChunkopen_docs=self.webpackChunkopen_docs||[]).push([[56814],{3905:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>f});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},d=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(i),f=o,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||l;return i?t.createElement(g,a(a({ref:n},d),{},{components:i})):t.createElement(g,a({ref:n},d))}));function f(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=i.length,a=new Array(l);a[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<l;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4869:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var t=i(87462),o=(i(67294),i(3905));const l={},a="Scene: field and field group of location",r={unversionedId:"abilities/business/field/script-field-selection/sample-script-field-selection",id:"abilities/business/field/script-field-selection/sample-script-field-selection",title:"Scene: field and field group of location",description:"Scene Description",source:"@site/docs/abilities/business/field/script-field-selection/sample-script-field-selection.mdx",sourceDirName:"abilities/business/field/script-field-selection",slug:"/abilities/business/field/script-field-selection/sample-script-field-selection",permalink:"/open-docs/docs/next/abilities/business/field/script-field-selection/sample-script-field-selection",draft:!1,tags:[],version:"current",lastUpdatedBy:"liupengfei",lastUpdatedAt:1690863366,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"abilities",previous:{title:"Selection",permalink:"/open-docs/docs/next/abilities/business/field/script-field-selection/"},next:{title:"Float",permalink:"/open-docs/docs/next/abilities/business/field/script-field-float/"}},s={},u=[{value:"Scene Description",id:"scene-description",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation Approach:",id:"implementation-approach",level:3},{value:"Plugin Development",id:"plugin-development",level:2},{value:"Step 1: Add Fields And Field Groups",id:"step-1-add-fields-and-field-groups",level:3},{value:"Step 2: Write The Data Source Function.",id:"step-2-write-the-data-source-function",level:3},{value:"Step 3: Adding Field Value Auto-filled Feature",id:"step-3-adding-field-value-auto-filled-feature",level:3},{value:"Step 4: Adding Field Value Validation Feature",id:"step-4-adding-field-value-validation-feature",level:3}],d={toc:u};function c(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scene-field-and-field-group-of-location"},"Scene: field and field group of location"),(0,o.kt)("h2",{id:"scene-description"},"Scene Description"),(0,o.kt)("p",null,"We would like to be able to set location information in the fields of an issue, including country, province, and city. These fields should have real constraints between them. For example, when a country is selected, the options for the province should be limited to the selected country. Additionally, if a smaller region is selected first, the corresponding higher-level location information should be automatically selected. Finally, the validity of the location information should be verified when submitting the information."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("h3",{id:"implementation-approach"},"Implementation Approach:"),(0,o.kt)("p",null,"By adding three single-select issue script fields, the location information can be represented. These fields will be associated to form a field group and added to the issue entity."),(0,o.kt)("p",null,"Constraints between field hierarchy can be enforced when retrieving option values. Automatic population of higher-level location information can be achieved using the field value linkage feature. Validity verification can be implemented using field value validation functionality."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The database-related APIs mentioned in the example, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"importSQL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"select"),", can be referred to in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/open-docs/docs/next/abilities/basic/database"},"Database"))," capability.")),(0,o.kt)("h2",{id:"plugin-development"},"Plugin Development"),(0,o.kt)("h3",{id:"step-1-add-fields-and-field-groups"},"Step 1: Add Fields And Field Groups"),(0,o.kt)("p",null,"Initialize the database in the plugin's ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace/plugin.sql")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="workspace/plugin.sql"',title:'"workspace/plugin.sql"'},"CREATE TABLE IF NOT EXISTS `{{script_field}}`(\n    `id` INT(11) AUTO_INCREMENT,\n    `fieldUUID` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'uuid',\n    `name` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'name',\n    PRIMARY KEY (`id`)\n    ) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;\n\nCREATE TABLE IF NOT EXISTS `{{location}}`(\n    `id` INT(11) AUTO_INCREMENT,\n    `Country` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'Country',\n    `Province` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'Province',\n    `City` varchar(128) CHARACTER SET latin1 NOT NULL COMMENT 'City',\n    PRIMARY KEY (`id`)\n    ) ENGINE = InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;\n\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Install")," lifecycle method of the plugin, add script fields, create a field group, and add it to the issue. Persist the obtained script field ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldUUID")," to the database for future use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Logger } from '@ones-op/node-logger'\nimport type { PluginRequest, PluginResponse } from '@ones-op/node-types'\nimport { exec, importSQL, select } from '@ones-op/node-database'\nimport { Field, PoolEnum } from '@ones-op/node-ability'\nexport async function Install() {\n  await importSQL('plugin.sql')\n  const issueScriptField = ['Country', 'Province', 'City']\n  const fieldUUIDs: any[] = []\n  for (const fieldName of issueScriptField) {\n    const FieldsAddProjectRes = await Field.FieldsAdd({\n      Name: fieldName,\n      Type: 1001,\n    })\n    if (FieldsAddProjectRes.Error) {\n      throw new Error('Failed to create property')\n    }\n    const { UUID: fieldUUID } = FieldsAddProjectRes\n    fieldUUIDs.push(fieldUUID)\n    Logger.info('fieldUUID:', fieldUUID)\n\n    try {\n      const sql =\n        'INSERT into script_field(fieldUUID, name) values(\"' +\n        fieldUUID +\n        '\", \"' +\n        fieldName +\n        '\");'\n      await exec('insert', sql)\n    } catch (error) {\n      Logger.error('error: ', error)\n    }\n  }\n  const relateionsTask: any[] = []\n  fieldUUIDs.forEach((fieldUUID, index) => {\n    const relation = {\n      FieldUUID: fieldUUID,\n      FieldParentUUID: '',\n      Position: index,\n    }\n    relateionsTask.push(relation)\n  })\n  const AddGroupFieldRes = await Field.AddGroupField({\n    ObjectType: PoolEnum.Task,\n    Name: 'Location',\n    Relations: relateionsTask,\n  })\n  Logger.info('success to create fieldGroup' + JSON.stringify(AddGroupFieldRes, undefined, 2))\n  try {\n    const sql =\n      \"INSERT into location(Country, Province, City) values ('America', 'Washington', 'Seattle'), ('America', 'Washington', 'Olympia'), ('America', 'Hawaii', 'Hilo'), ('America', 'Hawaii', 'Kahului'), ('China', 'Guangdong', 'Dongguan'), ('China', 'Guangdong', 'Shenzhen'), ('China', 'SiChuan', 'Chengdu'), ('China', 'SiChuan', 'Leshan'), ('Japan', 'Tokyo', 'Hokkaido');\"\n    await exec('insert', sql)\n  } catch (error) {\n    Logger.error('error: ' + error)\n  }\n  return\n}\n")),(0,o.kt)("h3",{id:"step-2-write-the-data-source-function"},"Step 2: Write The Data Source Function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add configuration"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"apis:\n  - type: addition\n    methods:\n      - POST\n    url: /scriptFieldSearch\n    function: GetOptions\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Write the handling function"))),(0,o.kt)("p",null,"Return the corresponding options based on the currently edited field. If the higher-level location information is already present, only return valid option values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface OptionType {\n  uuid: string\n  value: string\n}\nconst Countries: string[] = ['America', 'China', 'Japan']\nconst Provinces: string[] = ['Washington', 'Hawaii', 'Guangdong', 'SiChuan', 'Tokyo']\nconst Cities: string[] = [\n  'Seattle',\n  'Olympia',\n  'Hilo',\n  'Kahului',\n  'Dongguan',\n  'Shenzhen',\n  'Chengdu',\n  'Leshan',\n  'Hokkaido',\n]\nconst data = {\n  America: { Washington: { Seattle: {}, Olympia: {} }, Hawaii: { Hilo: {}, Kahului: {} } },\n  China: { Guangdong: { Dongguan: {}, Shenzhen: {} }, SiChuan: { Chengdu: {}, Leshan: {} } },\n  Japan: { Tokyo: { Hokkaido: {} } },\n}\n\nconst response = (options: Array<OptionType>) => {\n  return {\n    statusCode: 200,\n    body: {\n      code: 200,\n      body: {\n        options,\n      },\n    },\n  }\n}\nexport async function GetOptions(request: PluginRequest): Promise<PluginResponse> {\n  const body = request?.body\n  let field = await getFieldMap()\n  if (Array.isArray(body.uuids)) {\n    return response(body.uuids.map((uuid: string) => ({ uuid, value: uuid })))\n  } else if (Array.isArray(body.relations)) {\n    let location: any = { Country: null, Province: null, City: null }\n    let options: OptionType[] = []\n    body.relations.forEach((relation, index) => {\n      location[field.get(relation.field_uuid)] = relation.field_value\n    })\n    switch (field.get(body.field_uuid)) {\n      case 'Country':\n        return response(Countries.map((uuid) => ({ uuid, value: uuid })))\n      case 'Province':\n        if (location.Country) {\n          return response(data[location.Country].map((uuid) => ({ uuid, value: uuid })))\n        } else {\n          return response(Provinces.map((uuid) => ({ uuid, value: uuid })))\n        }\n      case 'City':\n        if (location.Province) {\n          return response(\n            data[location.Country][location.Province].map((uuid) => ({ uuid, value: uuid }))\n          )\n        } else {\n          return response(Cities.map((uuid) => ({ uuid, value: uuid })))\n        }\n      default:\n        return response([])\n    }\n  }\n  const entities = {\n    Country,\n    Province,\n    City,\n  }\n  const uuids = entities[field.get(body.field_uuid)] || []\n  return response(uuids.map((uuid: string) => ({ uuid, value: uuid })))\n}\nasync function getFieldMap(): Promise<any> {\n  let field = new Map()\n  try {\n    const sql = 'select * from script_field;'\n    const result = await select(sql)\n    result.forEach((f) => {\n      field.set(f.fieldUUID, f.name)\n      field.set(f.name, f.fieldUUID)\n    })\n  } catch (error) {\n    Logger.error('error: ' + error)\n  }\n  return field\n}\n")),(0,o.kt)("h3",{id:"step-3-adding-field-value-auto-filled-feature"},"Step 3: Adding Field Value Auto-filled Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add configuration"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"apis:\n  - type: addition\n    methods:\n      - POST\n    url: /groupFieldOnChange\n    function: GroupFieldOnChange\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Write the handling function"))),(0,o.kt)("p",null,"When the edited field lacks higher-level information, retrieve the corresponding information from the database and populate it back into the interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldValueType {\n  field_uuid: string\n  option_uuids: string[]\n}\nexport async function GroupFieldOnChange(request: PluginRequest): Promise<PluginResponse> {\n  const body = request?.body as any\n  const location: any = { Country: null, Province: null, City: null }\n  const result: FieldValueType[] = []\n  const field = await getFieldMap()\n  body.field_values.forEach((field_value: any) => {\n    location[field.get(field_value.field_uuid)] = field_value.option_uuids\n      ? field_value.option_uuids[0]\n      : null\n  })\n  let record: any\n  let cityRecord: any\n\n  switch (field.get(body.change_field_uuid)) {\n    case 'Country':\n      body.field_values.forEach((field_value: any) => {\n        let uuids: string[] = []\n        if (field_value.field_uuid === body.change_field_uuid) {\n          uuids = field_value.option_uuids\n        }\n        result.push({\n          field_uuid: field_value.field_uuid,\n          option_uuids: uuids,\n        })\n      })\n      break\n    case 'Province':\n      if (location.Province) {\n        try {\n          const sql = \"select * from location where Province='\" + location.Province + \"';\"\n          record = await select(sql)\n        } catch (error) {\n          Logger.error('error ' + error)\n        }\n        result.push({\n          field_uuid: field.get('Country'),\n          option_uuids: [record[0]['Country']],\n        })\n        result.push({\n          field_uuid: field.get('Province'),\n          option_uuids: [record[0]['Province']],\n        })\n        result.push({\n          field_uuid: field.get('City'),\n          option_uuids: [],\n        })\n      } else {\n        body.field_values.forEach((field_value: any) => {\n          result.push({\n            field_uuid: field_value.field_uuid,\n            option_uuids:\n              field.get('Country') === field_value.field_uuid ? field_value.option_uuids : [],\n          })\n        })\n      }\n      break\n    case 'City':\n      if (location.City) {\n        try {\n          const sql = `select * from location where City='${location.City}';`\n          cityRecord = await select(sql)\n        } catch (error) {\n          Logger.error('error ' + error)\n        }\n        result.push({\n          field_uuid: field.get('Country'),\n          option_uuids: [cityRecord[0]['Country']],\n        })\n        result.push({\n          field_uuid: field.get('Province'),\n          option_uuids: [cityRecord[0]['Province']],\n        })\n        result.push({\n          field_uuid: field.get('City'),\n          option_uuids: [cityRecord[0]['City']],\n        })\n      } else {\n        body.field_values.forEach((field_value: any) => {\n          result.push(field_value)\n        })\n      }\n      break\n  }\n  return {\n    statusCode: 200,\n    body: {\n      code: 200,\n      body: {\n        field_values: result,\n      },\n    },\n  }\n}\n")),(0,o.kt)("h3",{id:"step-4-adding-field-value-validation-feature"},"Step 4: Adding Field Value Validation Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add configuration"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/plugin.yaml"',title:'"config/plugin.yaml"'},"apis:\n  - type: addition\n    methods:\n      - POST\n    url: /groupFieldValidate\n    function: GroupFieldValidate\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Write the handling function"))),(0,o.kt)("p",null,"Validate the hierarchical relationships of all location information based on the data in the plugin's database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface UpdateType {\n  field_uuid: string // UUID of the field\n  option_uuid: string // UUID of the option\n  option_value: string // Option value\n}\nexport async function GroupFieldValidate(request: PluginRequest): Promise<PluginResponse> {\n  const body = request?.body as any\n  Logger.info(body)\n  const options: UpdateType[] = []\n  const field = await getFieldMap()\n  const location: any = { Country: null, Province: null, City: null }\n  body.field_groups[0].field_values.forEach((field_value: any) => {\n    if (field_value.option_uuids == null) {\n      return buildValidateFailResponse(630, 'Location information is incomplete', 'error')\n    }\n    options.push({\n      field_uuid: field_value.field_uuid,\n      option_uuid: field_value.option_uuids[0],\n      option_value: field_value.option_uuids[0],\n    })\n    location[field.get(field_value.field_uuid)] = field_value.option_uuids[0]\n  })\n  const subSqls: string[] = []\n  location.City && subSqls.push(`City='${location.City}'`)\n  location.Province && subSqls.push(`Province='${location.Province}'`)\n  location.Country && subSqls.push(`Country='${location.Country}'`)\n  const finalResult = {\n    statusCode: 200,\n    body: {\n      code: 200,\n      body: {\n        options,\n      },\n    },\n  }\n  if (subSqls.length === 0) {\n    return finalResult\n  }\n  try {\n    const sql = `select * from location where ${subSqls.join(' and ')};`\n    const record: any[] = await select(sql)\n    if (record.length === 0) {\n      return buildValidateFailResponse(630, 'Location information error', 'error')\n    }\n  } catch (error) {\n    Logger.error('error' + error)\n  }\n  return finalResult\n}\n\nfunction buildValidateFailResponse(code: number, reason: string, type: string): PluginResponse {\n  return {\n    statusCode: 200,\n    body: {\n      code: code,\n      reason: reason,\n      module: 'Plugin.FieldGroup',\n      type: type,\n    },\n  }\n}\n")))}c.isMDXComponent=!0}}]);