# Changelog

All notable changes to this package will be documented in this file.

# 0.12.0 (2023-12-01)

### Features

- **Store:** 🌟 Provides the `useWikiShareInfo` hook to get information about the currently visited share page group.
- **Store:** 🌟 Provides the `useWikiTemplatePageInfo` hook to get information about the currently visited page template.
- **Store:** 🌟 Provides the `useCustomEditorInfo` hook to get information about the context required for the custom editor.

### Bug Fixes

- **Store:** 🐞 Fix possible dead loop with `Suspense` method.

# 0.10.0 (2023-04-25)

### Features

- **Store:** 🌟 Provide `useDashboardCardInfo` hook to get the context data of custom card
- **Store:** 🌟 Provide `useDashboardCardConfigInfo` hook to get the context data of custom card config dialog

# 0.9.0 (2023-03-31)

### Features

- **Store:** 🌟 Provide `useVariablesInfo` hook to get the non-standard data passed by the slot
- **Store:** 🌟 Provide `useModuleInstanceInfo` hook to get information about manually activated plugin instance

# 0.8.0 (2023-02-21)

### Features

- **Store:** 🌟 Provide `useWikiSpaceInfo` hook to to get the current space information

# 0.5.0 (2022-11-25)

### Features

- **Store:** 🌟 Provide `destroyCurrentModule` method to destroy the current slot
- **Store:** 🌟 Provide `useTaskInfo` hook to get plugin work item context information
- **Store:** 🌟 Provide `useDocumentInfo` hook to get the data and operations of the current macro

# 0.3.0 (2022-09-26)

### Features

- **Store:** 🌟 Provide `useAction` hook to get ONES interception handler
- **Store:** 🌟 Provide `useProgressJobInfo` hook to get information about the current task in the progress manager task details popup
- **Store:** 🌟 provide `useProjectRoleInfo` hook to get information about the selected project role in the current project member component
- **Store:** 🌟 provide `usePluginInfo` hook to get information about the current plugin
- **Store:** 🌟 provide `useFilterInfo` hook to get information about the currently accessed filter view
- **Store:** 🌟 Provide `useDashboardInfo` hook to get the information of the currently accessed dashboard
- **Store:** 🌟 Provide `useProjectInfo` hook to get the current project information
- **Store:** 🌟 provide `useTestPlanInfo` hook to get the current test plan information
- **Store:** 🌟 provide `useTestCaseLibraryInfo` hook to get the information of the currently accessed use case library
- **Store:** 🌟 provide `usePipelineInfo` hook to get the current pipeline information
- **Store:** 🌟 provide `useProgramInfo` hook to get information about the current set of projects
- **Store:** 🌟 provide `useUserInfo` hook to get the current user information

# 0.1.0 (2022-04-07)

### Features

- **Store:** 🌟 Provide `useTeamInfo` hook to get the current team information
- **Store:** 🌟 provide `useOrganizationInfo` hook to get the current organization information
- **Store:** 🌟 provide `useProductInfo` hook to get the current product information
