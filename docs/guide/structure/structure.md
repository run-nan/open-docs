# Directory structure of plugin project

To provide a better and more integrated development experience, plugin projects created with ONES CLI follow the same basic directory structure.

### Directory structure

```
└── <Plugin name>
  ├── backend # backend resource directory
  │   ├── node_modules
  │   ├── src
  │   │   └── index.ts
  │   ├── package-lock.json
  │   ├── package.json
  │   └── tsconfig.json
  ├── config # plugin configuration
  │   ├── ci-deploy.yaml
  │   ├── local.yaml
  │   ├── upgrade.yaml
  │   └── plugin.yaml
  ├── web # frontend resource directory
  │   ├── node_modules
  │   ├── public
  │   │   └── logo.svg # plugin Logo
  │   ├── browserslist
  │   ├── package-lock.json
  │   ├── package.json
  │   └── tsconfig.json
  ├── workspace
  │   └── language # language pack
  │   │   └── zh.yaml # Simplified Chinese
  │   │   └── en.yaml # English
  │   │   └── ja.yaml # Japanese
  │   └── plugin.sql
  ├── package-lock.json
  ├── package.json
  ├── README.md
```

### Catalogue introduction

| File/Directory                                                      | Description                                                                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backend                                                             | backend resource directory                                                                                                                              |
| backend / package.json                                              | the metadata file at the backend of the plugin project, including the dependencies or scripts that you install using the package manager                |
| [config / ci-deploy.yaml](../../reference/config/ci-deploy.yaml.md) | plugin project continuous integration configuration                                                                                                     |
| [config / local.yaml](../../reference/config/local.yaml.md)         | debug configuration locally (will not be recorded by git)                                                                                               |
| [config / upgrade.yaml](../../reference/config/upgrade.yaml.md)     | plugin upgrade profile                                                                                                                                  |
| [config / plugin.yaml](../../reference/config/plugin.yaml.md)       | configuration information for the plugin                                                                                                                |
| web                                                                 | frontend resource directory                                                                                                                             |
| web / package.json                                                  | the metadata file at the frontend of the plugin project, including the dependencies or scripts that you install using the package manager               |
| web / public / logo.svg                                             | logo of the plug-in (only logo.svg will be read)                                                                                                        |
| workspace                                                           | the physical storage space of the plugin, where you can store some configuration or content of the plugin, which is consumed by the plug-in at runtime. |
