# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

<ul>
<li><a href="#query-query">Query</a></li>
<li><a href="#mutation-mutation">Mutation</a></li>
<li><a href="#objects">Objects</a></li>
<ul>
<li><a href="#ActionScript">actionscript</a></li>
<li><a href="#Activity">activity</a></li>
<li><a href="#ActivityChart">activitychart</a></li>
<li><a href="#ActivityChartPersonalConfig">activitychartpersonalconfig</a></li>
<li><a href="#ActivityDraft">activitydraft</a></li>
<li><a href="#ActivityRelation">activityrelation</a></li>
<li><a href="#ActivityRelease">activityrelease</a></li>
<li><a href="#Bucket">bucket</a></li>
<li><a href="#Card">card</a></li>
<li><a href="#CommonComment">commoncomment</a></li>
<li><a href="#CommonMessage">commonmessage</a></li>
<li><a href="#Config">config</a></li>
<li><a href="#Content">content</a></li>
<li><a href="#Context">context</a></li>
<li><a href="#Deliverable">deliverable</a></li>
<li><a href="#Department">department</a></li>
<li><a href="#DevopsCiSync">devopscisync</a></li>
<li><a href="#DevopsCommit">devopscommit</a></li>
<li><a href="#DevopsPipeline">devopspipeline</a></li>
<li><a href="#DevopsPipelineRun">devopspipelinerun</a></li>
<li><a href="#DevopsPipelineRunStage">devopspipelinerunstage</a></li>
<li><a href="#DevopsPipelineRunStep">devopspipelinerunstep</a></li>
<li><a href="#DevopsScmAuth">devopsscmauth</a></li>
<li><a href="#DevopsScmRepo">devopsscmrepo</a></li>
<li><a href="#Field">field</a></li>
<li><a href="#GanttChart">ganttchart</a></li>
<li><a href="#GanttChartPersonalConfig">ganttchartpersonalconfig</a></li>
<li><a href="#GanttData">ganttdata</a></li>
<li><a href="#ImportConfig">importconfig</a></li>
<li><a href="#IssueType">issuetype</a></li>
<li><a href="#Link">link</a></li>
<li><a href="#Manhour">manhour</a></li>
<li><a href="#ManhourReport">manhourreport</a></li>
<li><a href="#Milestone">milestone</a></li>
<li><a href="#Option">option</a></li>
<li><a href="#Param">param</a></li>
<li><a href="#PpmTask">ppmtask</a></li>
<li><a href="#Product">product</a></li>
<li><a href="#ProductComponent">productcomponent</a></li>
<li><a href="#ProductComponentView">productcomponentview</a></li>
<li><a href="#ProductComponentViewConfig">productcomponentviewconfig</a></li>
<li><a href="#ProductModule">productmodule</a></li>
<li><a href="#Program">program</a></li>
<li><a href="#Project">project</a></li>
<li><a href="#RelationType">relationtype</a></li>
<li><a href="#Role">role</a></li>
<li><a href="#Sprint">sprint</a></li>
<li><a href="#SprintStatus">sprintstatus</a></li>
<li><a href="#Status">status</a></li>
<li><a href="#Task">task</a></li>
<li><a href="#TaskGanttChart">taskganttchart</a></li>
<li><a href="#TaskGanttChartPersonalConfig">taskganttchartpersonalconfig</a></li>
<li><a href="#TaskGanttData">taskganttdata</a></li>
<li><a href="#TaskLinkType">tasklinktype</a></li>
<li><a href="#TaskStatus">taskstatus</a></li>
<li><a href="#TestcaseCase">testcasecase</a></li>
<li><a href="#TestcaseCaseStep">testcasecasestep</a></li>
<li><a href="#TestcaseFieldConfig">testcasefieldconfig</a></li>
<li><a href="#TestcaseLibrary">testcaselibrary</a></li>
<li><a href="#TestcaseModule">testcasemodule</a></li>
<li><a href="#TestcasePlan">testcaseplan</a></li>
<li><a href="#TestcasePlanCase">testcaseplancase</a></li>
<li><a href="#TestcasePlanCaseStep">testcaseplancasestep</a></li>
<li><a href="#TimeSeries">timeseries</a></li>
<li><a href="#Transition">transition</a></li>
<li><a href="#UrlSetting">urlsetting</a></li>
<li><a href="#User">user</a></li>
<li><a href="#UserDomain">userdomain</a></li>
<li><a href="#UserGroup">usergroup</a></li>
<li><a href="#source">source</a></li>
<li><a href="#target">target</a></li>
</ul>
<li><a href="#inputs">Inputs</a></li>
<ul>
<li><a href="#Filter">filter</a></li>
<li><a href="#FilterGroup">filtergroup</a></li>
<li><a href="#GroupBy">groupby</a></li>
<li><a href="#OrderBy">orderby</a></li>
<li><a href="#TimeSeriesArgs">timeseriesargs</a></li>
</ul>
<li><a href="#scalars">Scalars</a></li>
<ul>
<li><a href="#boolean">boolean</a></li>
<li><a href="#int">int</a></li>
<li><a href="#string">string</a></li>
</ul>
</ul>

</details>

## Query (query)

<div style={{overflow:"scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>actionScript</strong></td>
<td valign="top"><a href="#actionscript">ActionScript</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actionScripts</strong></td>
<td valign="top">[<a href="#actionscript">ActionScript</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activities</strong></td>
<td valign="top">[<a href="#activity">Activity</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityChart</strong></td>
<td valign="top"><a href="#activitychart">ActivityChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityChartPersonalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityCharts</strong></td>
<td valign="top">[<a href="#activitychart">ActivityChart</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityDraft</strong></td>
<td valign="top"><a href="#activitydraft">ActivityDraft</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityDrafts</strong></td>
<td valign="top">[<a href="#activitydraft">ActivityDraft</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityRelease</strong></td>
<td valign="top"><a href="#activityrelease">ActivityRelease</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityReleases</strong></td>
<td valign="top">[<a href="#activityrelease">ActivityRelease</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bucket</strong></td>
<td valign="top"><a href="#bucket">Bucket</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buckets</strong></td>
<td valign="top">[<a href="#bucket">Bucket</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">groupBy</td>
<td valign="top"><a href="#groupby">GroupBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>card</strong></td>
<td valign="top"><a href="#card">Card</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cards</strong></td>
<td valign="top">[<a href="#card">Card</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonComment</strong></td>
<td valign="top"><a href="#commoncomment">CommonComment</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonComments</strong></td>
<td valign="top">[<a href="#commoncomment">CommonComment</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonMessage</strong></td>
<td valign="top"><a href="#commonmessage">CommonMessage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonMessages</strong></td>
<td valign="top">[<a href="#commonmessage">CommonMessage</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverables</strong></td>
<td valign="top">[<a href="#deliverable">Deliverable</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>department</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>departments</strong></td>
<td valign="top">[<a href="#department">Department</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCiSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCiSyncs</strong></td>
<td valign="top">[<a href="#devopscisync">DevopsCiSync</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCommits</strong></td>
<td valign="top">[<a href="#devopscommit">DevopsCommit</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunStage</strong></td>
<td valign="top"><a href="#devopspipelinerunstage">DevopsPipelineRunStage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunStages</strong></td>
<td valign="top">[<a href="#devopspipelinerunstage">DevopsPipelineRunStage</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunStep</strong></td>
<td valign="top"><a href="#devopspipelinerunstep">DevopsPipelineRunStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunSteps</strong></td>
<td valign="top">[<a href="#devopspipelinerunstep">DevopsPipelineRunStep</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRuns</strong></td>
<td valign="top">[<a href="#devopspipelinerun">DevopsPipelineRun</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelines</strong></td>
<td valign="top">[<a href="#devopspipeline">DevopsPipeline</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmAuth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmAuths</strong></td>
<td valign="top">[<a href="#devopsscmauth">DevopsScmAuth</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmRepo</strong></td>
<td valign="top"><a href="#devopsscmrepo">DevopsScmRepo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmRepos</strong></td>
<td valign="top">[<a href="#devopsscmrepo">DevopsScmRepo</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field</strong></td>
<td valign="top"><a href="#field">Field</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChart</strong></td>
<td valign="top"><a href="#ganttchart">GanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartPersonalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttCharts</strong></td>
<td valign="top">[<a href="#ganttchart">GanttChart</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttData</strong></td>
<td valign="top"><a href="#ganttdata">GanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttDatas</strong></td>
<td valign="top">[<a href="#ganttdata">GanttData</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueTypes</strong></td>
<td valign="top">[<a href="#issuetype">IssueType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhour</strong></td>
<td valign="top"><a href="#manhour">Manhour</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhourReport</strong></td>
<td valign="top"><a href="#manhourreport">ManhourReport</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhourReports</strong></td>
<td valign="top">[<a href="#manhourreport">ManhourReport</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhours</strong></td>
<td valign="top">[<a href="#manhour">Manhour</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestones</strong></td>
<td valign="top">[<a href="#milestone">Milestone</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmTasks</strong></td>
<td valign="top">[<a href="#ppmtask">PpmTask</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentView</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentViewConfig</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentViewConfigs</strong></td>
<td valign="top">[<a href="#productcomponentviewconfig">ProductComponentViewConfig</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentViews</strong></td>
<td valign="top">[<a href="#productcomponentview">ProductComponentView</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponents</strong></td>
<td valign="top">[<a href="#productcomponent">ProductComponent</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productModule</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productModules</strong></td>
<td valign="top">[<a href="#productmodule">ProductModule</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>program</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>programs</strong></td>
<td valign="top">[<a href="#program">Program</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#relationtype">RelationType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationTypes</strong></td>
<td valign="top">[<a href="#relationtype">RelationType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#role">Role</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>roles</strong></td>
<td valign="top">[<a href="#role">Role</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintStatus</strong></td>
<td valign="top"><a href="#sprintstatus">SprintStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintStatuses</strong></td>
<td valign="top">[<a href="#sprintstatus">SprintStatus</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprints</strong></td>
<td valign="top">[<a href="#sprint">Sprint</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>task</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttChart</strong></td>
<td valign="top"><a href="#taskganttchart">TaskGanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttCharts</strong></td>
<td valign="top">[<a href="#taskganttchart">TaskGanttChart</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttData</strong></td>
<td valign="top"><a href="#taskganttdata">TaskGanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttDatas</strong></td>
<td valign="top">[<a href="#taskganttdata">TaskGanttData</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskLinkType</strong></td>
<td valign="top"><a href="#tasklinktype">TaskLinkType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskLinkTypes</strong></td>
<td valign="top">[<a href="#tasklinktype">TaskLinkType</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskStatuss</strong></td>
<td valign="top">[<a href="#taskstatus">TaskStatus</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCaseSteps</strong></td>
<td valign="top">[<a href="#testcasecasestep">TestcaseCaseStep</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCases</strong></td>
<td valign="top">[<a href="#testcasecase">TestcaseCase</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfigs</strong></td>
<td valign="top">[<a href="#testcasefieldconfig">TestcaseFieldConfig</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibraries</strong></td>
<td valign="top">[<a href="#testcaselibrary">TestcaseLibrary</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseModule</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseModules</strong></td>
<td valign="top">[<a href="#testcasemodule">TestcaseModule</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlan</strong></td>
<td valign="top"><a href="#testcaseplan">TestcasePlan</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCase</strong></td>
<td valign="top"><a href="#testcaseplancase">TestcasePlanCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCaseStep</strong></td>
<td valign="top"><a href="#testcaseplancasestep">TestcasePlanCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCaseSteps</strong></td>
<td valign="top">[<a href="#testcaseplancasestep">TestcasePlanCaseStep</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCases</strong></td>
<td valign="top">[<a href="#testcaseplancase">TestcasePlanCase</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlans</strong></td>
<td valign="top">[<a href="#testcaseplan">TestcasePlan</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transition</strong></td>
<td valign="top"><a href="#transition">Transition</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transitions</strong></td>
<td valign="top">[<a href="#transition">Transition</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userGroup</strong></td>
<td valign="top"><a href="#usergroup">UserGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">key</td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userGroups</strong></td>
<td valign="top">[<a href="#usergroup">UserGroup</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

## Mutation (mutation)

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addActivity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addActivityChart</strong></td>
<td valign="top"><a href="#activitychart">ActivityChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addActivityChartPersonalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addActivityDraft</strong></td>
<td valign="top"><a href="#activitydraft">ActivityDraft</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addActivityRelease</strong></td>
<td valign="top"><a href="#activityrelease">ActivityRelease</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addCard</strong></td>
<td valign="top"><a href="#card">Card</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addCommonComment</strong></td>
<td valign="top"><a href="#commoncomment">CommonComment</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addCommonMessage</strong></td>
<td valign="top"><a href="#commonmessage">CommonMessage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDeliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDepartment</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsCiSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsPipelineRunStage</strong></td>
<td valign="top"><a href="#devopspipelinerunstage">DevopsPipelineRunStage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsPipelineRunStep</strong></td>
<td valign="top"><a href="#devopspipelinerunstep">DevopsPipelineRunStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsScmAuth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addDevopsScmRepo</strong></td>
<td valign="top"><a href="#devopsscmrepo">DevopsScmRepo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addField</strong></td>
<td valign="top"><a href="#field">Field</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addGanttChart</strong></td>
<td valign="top"><a href="#ganttchart">GanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addGanttData</strong></td>
<td valign="top"><a href="#ganttdata">GanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addManhourReport</strong></td>
<td valign="top"><a href="#manhourreport">ManhourReport</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addMilestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addPpmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProduct</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProductComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProductComponentView</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProductComponentViewConfig</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProductModule</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProgram</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addRole</strong></td>
<td valign="top"><a href="#role">Role</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTaskGanttChart</strong></td>
<td valign="top"><a href="#taskganttchart">TaskGanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTaskGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTaskGanttData</strong></td>
<td valign="top"><a href="#taskganttdata">TaskGanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTaskLinkType</strong></td>
<td valign="top"><a href="#tasklinktype">TaskLinkType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTestcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTestcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTestcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTestcasePlanCase</strong></td>
<td valign="top"><a href="#testcaseplancase">TestcasePlanCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTestcasePlanCaseStep</strong></td>
<td valign="top"><a href="#testcaseplancasestep">TestcasePlanCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addUserGroup</strong></td>
<td valign="top"><a href="#usergroup">UserGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteActivity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteActivityChart</strong></td>
<td valign="top"><a href="#activitychart">ActivityChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteActivityChartPersonalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteActivityDraft</strong></td>
<td valign="top"><a href="#activitydraft">ActivityDraft</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteActivityRelease</strong></td>
<td valign="top"><a href="#activityrelease">ActivityRelease</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCard</strong></td>
<td valign="top"><a href="#card">Card</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCommonComment</strong></td>
<td valign="top"><a href="#commoncomment">CommonComment</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCommonMessage</strong></td>
<td valign="top"><a href="#commonmessage">CommonMessage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDeliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDepartment</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsCiSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsPipelineRunStage</strong></td>
<td valign="top"><a href="#devopspipelinerunstage">DevopsPipelineRunStage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsPipelineRunStep</strong></td>
<td valign="top"><a href="#devopspipelinerunstep">DevopsPipelineRunStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsScmAuth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDevopsScmRepo</strong></td>
<td valign="top"><a href="#devopsscmrepo">DevopsScmRepo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteField</strong></td>
<td valign="top"><a href="#field">Field</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteGanttChart</strong></td>
<td valign="top"><a href="#ganttchart">GanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteGanttData</strong></td>
<td valign="top"><a href="#ganttdata">GanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteManhourReport</strong></td>
<td valign="top"><a href="#manhourreport">ManhourReport</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMilestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deletePpmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProduct</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProductComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProductComponentView</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProductComponentViewConfig</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProductModule</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProgram</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteRole</strong></td>
<td valign="top"><a href="#role">Role</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTaskGanttChart</strong></td>
<td valign="top"><a href="#taskganttchart">TaskGanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTaskGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTaskGanttData</strong></td>
<td valign="top"><a href="#taskganttdata">TaskGanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTaskLinkType</strong></td>
<td valign="top"><a href="#tasklinktype">TaskLinkType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTestcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTestcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTestcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTestcasePlanCase</strong></td>
<td valign="top"><a href="#testcaseplancase">TestcasePlanCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTestcasePlanCaseStep</strong></td>
<td valign="top"><a href="#testcaseplancasestep">TestcasePlanCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteUserGroup</strong></td>
<td valign="top"><a href="#usergroup">UserGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateActivity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateActivityChart</strong></td>
<td valign="top"><a href="#activitychart">ActivityChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateActivityChartPersonalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateActivityDraft</strong></td>
<td valign="top"><a href="#activitydraft">ActivityDraft</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateActivityRelease</strong></td>
<td valign="top"><a href="#activityrelease">ActivityRelease</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCard</strong></td>
<td valign="top"><a href="#card">Card</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCommonComment</strong></td>
<td valign="top"><a href="#commoncomment">CommonComment</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCommonMessage</strong></td>
<td valign="top"><a href="#commonmessage">CommonMessage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDeliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDepartment</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsCiSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsPipelineRunStage</strong></td>
<td valign="top"><a href="#devopspipelinerunstage">DevopsPipelineRunStage</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsPipelineRunStep</strong></td>
<td valign="top"><a href="#devopspipelinerunstep">DevopsPipelineRunStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsScmAuth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDevopsScmRepo</strong></td>
<td valign="top"><a href="#devopsscmrepo">DevopsScmRepo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateField</strong></td>
<td valign="top"><a href="#field">Field</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateGanttChart</strong></td>
<td valign="top"><a href="#ganttchart">GanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateGanttData</strong></td>
<td valign="top"><a href="#ganttdata">GanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateManhourReport</strong></td>
<td valign="top"><a href="#manhourreport">ManhourReport</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMilestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updatePpmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProduct</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProductComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProductComponentView</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProductComponentViewConfig</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProductModule</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProgram</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateRole</strong></td>
<td valign="top"><a href="#role">Role</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTaskGanttChart</strong></td>
<td valign="top"><a href="#taskganttchart">TaskGanttChart</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTaskGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTaskGanttData</strong></td>
<td valign="top"><a href="#taskganttdata">TaskGanttData</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTaskLinkType</strong></td>
<td valign="top"><a href="#tasklinktype">TaskLinkType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTestcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTestcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTestcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTestcasePlanCase</strong></td>
<td valign="top"><a href="#testcaseplancase">TestcasePlanCase</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTestcasePlanCaseStep</strong></td>
<td valign="top"><a href="#testcaseplancasestep">TestcasePlanCaseStep</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUserGroup</strong></td>
<td valign="top"><a href="#usergroup">UserGroup</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

## Objects

### <div id="ActionScript">ActionScript</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[脚本名称]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>params</strong></td>
<td valign="top">[<a href="#param">Param</a>!]</td>
<td>

[参数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Activity">Activity</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activityRelatedTaskSimpleInfo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联工作项信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

在此节点后

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

活动负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动视图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverable</strong></td>
<td valign="top">[<a href="#deliverable">Deliverable</a>!]</td>
<td>

交付物

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalActivities</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td>

外部关联节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td>

关联里程碑

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>needDeleteRelation</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

需要删除的关联关系

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

活动编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

活动创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

父节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

层级路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td>

关联任务

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联关系类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top">[<a href="#relationtype">RelationType</a>!]</td>
<td>

前置依赖

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

关联迭代

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top">[<a href="#relationtype">RelationType</a>!]</td>
<td>

后置影响

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>task</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

关联工作项

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ActivityChart">ActivityChart</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>drafting</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

是否创建草稿

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动视图

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

视图创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>personalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td>

个人配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ActivityChartPersonalConfig">ActivityChartPersonalConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动视图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expand</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

展开

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特图配置创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zooming</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

缩放

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ActivityDraft">ActivityDraft</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activityUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联活动 uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

在此节点后

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

活动负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动视图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

详细信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

显示状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>needDeleteRelation</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

需要删除的关联关系

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

活动编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

活动创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

父节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

层级路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联关系类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ActivityRelation">ActivityRelation</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#source">source</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#target">target</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="ActivityRelease">ActivityRelease</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

活动视图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

详细信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isBase</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

是否为基线版本

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

版本名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publishStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

发布状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

修改人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Bucket">Bucket</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>account</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

account

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

action

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actionScripts</strong></td>
<td valign="top">[<a href="#actionscript">ActionScript</a>!]</td>
<td>

action_scripts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activities</strong></td>
<td valign="top">[<a href="#activity">Activity</a>!]</td>
<td>

activities

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

activities

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

activities

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

activities

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td>

activity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a>!]</td>
<td>

activity_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

activity_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

activity_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

activity_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityCharts</strong></td>
<td valign="top">[<a href="#activitychart">ActivityChart</a>!]</td>
<td>

activity_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

activity_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

activity_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

activity_charts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityDrafts</strong></td>
<td valign="top">[<a href="#activitydraft">ActivityDraft</a>!]</td>
<td>

activity_drafts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

activity_drafts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

activity_drafts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

activity_drafts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityRelatedTaskSimpleInfo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

activity_related_task_simple_info

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityReleases</strong></td>
<td valign="top">[<a href="#activityrelease">ActivityRelease</a>!]</td>
<td>

activity_releases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

activity_releases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

activity_releases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

activity_releases

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>activityUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

activity_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actualHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

actual_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

actual_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

actual_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

actual_hours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actualHoursSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

actual_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

actual_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

actual_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

actual_hours_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actualResult</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

actual_result

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

after

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActionScript</strong></td>
<td valign="top"><a href="#actionscript">ActionScript</a></td>
<td>

aggregate_action_script

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_action_script

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_action_script

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_action_script

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActionScriptParam</strong></td>
<td valign="top"><a href="#param">Param</a></td>
<td>

aggregate_action_script_param

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_action_script_param

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_action_script_param

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_action_script_param

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td>

aggregate_activity

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivityChart</strong></td>
<td valign="top"><a href="#activitychart">ActivityChart</a></td>
<td>

aggregate_activity_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity_chart

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivityChartPersonalConfig</strong></td>
<td valign="top"><a href="#activitychartpersonalconfig">ActivityChartPersonalConfig</a></td>
<td>

aggregate_activity_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivityDraft</strong></td>
<td valign="top"><a href="#activitydraft">ActivityDraft</a></td>
<td>

aggregate_activity_draft

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_draft

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_draft

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity_draft

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivityRelation</strong></td>
<td valign="top"><a href="#activityrelation">ActivityRelation</a></td>
<td>

aggregate_activity_relation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_relation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_relation

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity_relation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateActivityRelease</strong></td>
<td valign="top"><a href="#activityrelease">ActivityRelease</a></td>
<td>

aggregate_activity_release

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_release

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_activity_release

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_activity_release

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateBoolean</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

aggregate_boolean

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_boolean

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_boolean

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_boolean

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateCard</strong></td>
<td valign="top"><a href="#card">Card</a></td>
<td>

aggregate_card

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_card

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_card

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_card

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateCommonComment</strong></td>
<td valign="top"><a href="#commoncomment">CommonComment</a></td>
<td>

aggregate_common_comment

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_common_comment

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_common_comment

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_common_comment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateCommonMessage</strong></td>
<td valign="top"><a href="#commonmessage">CommonMessage</a></td>
<td>

aggregate_common_message

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_common_message

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_common_message

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_common_message

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateContent</strong></td>
<td valign="top"><a href="#content">Content</a></td>
<td>

aggregate_content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateContext</strong></td>
<td valign="top"><a href="#context">Context</a></td>
<td>

aggregate_context

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_context

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_context

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_context

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDeliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td>

aggregate_deliverable

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_deliverable

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_deliverable

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_deliverable

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDepartment</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td>

aggregate_department

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_department

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_department

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_department

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsCiSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td>

aggregate_devops_ci_sync

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_ci_sync

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_ci_sync

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_ci_sync

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td>

aggregate_devops_commit

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_commit

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_commit

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_commit

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td>

aggregate_devops_pipeline

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_pipeline

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td>

aggregate_devops_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsPipelineRunStage</strong></td>
<td valign="top"><a href="#devopspipelinerunstage">DevopsPipelineRunStage</a></td>
<td>

aggregate_devops_pipeline_run_stage

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run_stage

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run_stage

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_pipeline_run_stage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsPipelineRunStep</strong></td>
<td valign="top"><a href="#devopspipelinerunstep">DevopsPipelineRunStep</a></td>
<td>

aggregate_devops_pipeline_run_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_pipeline_run_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_pipeline_run_step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsScmAuth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td>

aggregate_devops_scm_auth

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_scm_auth

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_scm_auth

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_scm_auth

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateDevopsScmRepo</strong></td>
<td valign="top"><a href="#devopsscmrepo">DevopsScmRepo</a></td>
<td>

aggregate_devops_scm_repo

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_scm_repo

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_devops_scm_repo

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_devops_scm_repo

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateField</strong></td>
<td valign="top"><a href="#field">Field</a></td>
<td>

aggregate_field

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_field

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_field

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateGanttChart</strong></td>
<td valign="top"><a href="#ganttchart">GanttChart</a></td>
<td>

aggregate_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateGanttChartImportConfig</strong></td>
<td valign="top"><a href="#importconfig">ImportConfig</a></td>
<td>

aggregate_gantt_chart_import_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart_import_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart_import_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_gantt_chart_import_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td>

aggregate_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateGanttData</strong></td>
<td valign="top"><a href="#ganttdata">GanttData</a></td>
<td>

aggregate_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_gantt_data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateInt</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

aggregate_int

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_int

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_int

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_int

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

aggregate_issue_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_issue_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_issue_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_issue_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateManhour</strong></td>
<td valign="top"><a href="#manhour">Manhour</a></td>
<td>

aggregate_manhour

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_manhour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateManhourReport</strong></td>
<td valign="top"><a href="#manhourreport">ManhourReport</a></td>
<td>

aggregate_manhour_report

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour_report

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour_report

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_manhour_report

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateManhourReportConfig</strong></td>
<td valign="top"><a href="#config">Config</a></td>
<td>

aggregate_manhour_report_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour_report_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_manhour_report_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_manhour_report_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateMilestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td>

aggregate_milestone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_milestone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_milestone

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_milestone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateOption</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

aggregate_option

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_option

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_option

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_option

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregatePpmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td>

aggregate_ppm_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_ppm_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_ppm_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_ppm_task

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProduct</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

aggregate_product

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_product

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProductComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td>

aggregate_product_component

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_product_component

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProductComponentView</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td>

aggregate_product_component_view

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component_view

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component_view

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_product_component_view

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProductComponentViewConfig</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td>

aggregate_product_component_view_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component_view_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_component_view_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_product_component_view_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProductModule</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td>

aggregate_product_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_product_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_product_module

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProgram</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td>

aggregate_program

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_program

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_program

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_program

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

aggregate_project

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_project

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_project

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateRelationType</strong></td>
<td valign="top"><a href="#relationtype">RelationType</a></td>
<td>

aggregate_relation_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_relation_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_relation_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_relation_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateRole</strong></td>
<td valign="top"><a href="#role">Role</a></td>
<td>

aggregate_role

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_role

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_role

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_role

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateSprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

aggregate_sprint

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_sprint

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_sprint

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_sprint

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateSprintStatus</strong></td>
<td valign="top"><a href="#sprintstatus">SprintStatus</a></td>
<td>

aggregate_sprint_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_sprint_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_sprint_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_sprint_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateStatus</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

aggregate_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateString</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_string

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_string

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_string

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_string

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTask</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

aggregate_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskGanttChart</strong></td>
<td valign="top"><a href="#taskganttchart">TaskGanttChart</a></td>
<td>

aggregate_task_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_gantt_chart

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskGanttChartPersonalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td>

aggregate_task_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_gantt_chart_personal_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskGanttData</strong></td>
<td valign="top"><a href="#taskganttdata">TaskGanttData</a></td>
<td>

aggregate_task_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_gantt_data

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_gantt_data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskLink</strong></td>
<td valign="top"><a href="#link">Link</a></td>
<td>

aggregate_task_link

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_link

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_link

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_link

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskLinkType</strong></td>
<td valign="top"><a href="#tasklinktype">TaskLinkType</a></td>
<td>

aggregate_task_link_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_link_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_link_type

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_link_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTaskStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td>

aggregate_task_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_task_status

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_task_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td>

aggregate_testcase_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_case

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td>

aggregate_testcase_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_case_step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td>

aggregate_testcase_field_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_field_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_field_config

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_field_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td>

aggregate_testcase_library

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_library

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_library

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_library

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcaseModule</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td>

aggregate_testcase_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_module

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_module

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcasePlan</strong></td>
<td valign="top"><a href="#testcaseplan">TestcasePlan</a></td>
<td>

aggregate_testcase_plan

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_plan

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcasePlanCase</strong></td>
<td valign="top"><a href="#testcaseplancase">TestcasePlanCase</a></td>
<td>

aggregate_testcase_plan_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan_case

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_plan_case

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTestcasePlanCaseStep</strong></td>
<td valign="top"><a href="#testcaseplancasestep">TestcasePlanCaseStep</a></td>
<td>

aggregate_testcase_plan_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_testcase_plan_case_step

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_testcase_plan_case_step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTimeSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

aggregate_time_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_time_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_time_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_time_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateTransition</strong></td>
<td valign="top"><a href="#transition">Transition</a></td>
<td>

aggregate_transition

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_transition

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_transition

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_transition

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateUrlSetting</strong></td>
<td valign="top"><a href="#urlsetting">UrlSetting</a></td>
<td>

aggregate_url_setting

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_url_setting

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_url_setting

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_url_setting

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

aggregate_user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateUserDomains</strong></td>
<td valign="top"><a href="#userdomain">UserDomain</a></td>
<td>

aggregate_user_domains

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user_domains

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user_domains

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_user_domains

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aggregateUserGroup</strong></td>
<td valign="top"><a href="#usergroup">UserGroup</a></td>
<td>

aggregate_user_group

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user_group

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

aggregate_user_group

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

aggregate_user_group

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td>

aliases

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allowEmpty</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

allow_empty

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alternativeIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

alternative_issue_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td>

ancestors

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

assign

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assigns</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

assigns

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>auth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td>

auth

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>author</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

author

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

avatar

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseActualHoursAverageWorkloadRate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

base_actual_hours_average_workload_rate

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseActualHoursRemainingWorkingHoursSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

base_actual_hours_remaining_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseActualHoursTotal</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

base_actual_hours_total

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseActualHoursWorkloadRateSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

base_actual_hours_workload_rate_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseEstimatedHoursAverageWorkloadRate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

base_estimated_hours_average_workload_rate

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseEstimatedHoursRemainingWorkingHoursSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

base_estimated_hours_remaining_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseEstimatedHoursTotal</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

base_estimated_hours_total

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>baseEstimatedHoursWorkloadRateSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

base_estimated_hours_workload_rate_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

blocked_case_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boardSettings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

board_settings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

branch

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>buckets</strong></td>
<td valign="top">[<a href="#bucket">Bucket</a>!]</td>
<td>

buckets

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

buckets

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

buckets

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">groupBy</td>
<td valign="top"><a href="#groupby">GroupBy</a></td>
<td>

buckets

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

buckets

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

built_in

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canUpdate</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

can_update

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cards</strong></td>
<td valign="top">[<a href="#card">Card</a>!]</td>
<td>

cards

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

cards

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

cards

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

cards

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certification</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

certification

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certificationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

certification_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

chart_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciServerType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

ci_server_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciServerUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

ci_server_url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td>

ci_sync

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

commit_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>committer</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

committer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonComments</strong></td>
<td valign="top">[<a href="#commoncomment">CommonComment</a>!]</td>
<td>

common_comments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

common_comments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

common_comments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

common_comments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commonMessages</strong></td>
<td valign="top">[<a href="#commonmessage">CommonMessage</a>!]</td>
<td>

common_messages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

common_messages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

common_messages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

common_messages

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>componentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

component_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>condition</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

condition

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>config</strong></td>
<td valign="top"><a href="#config">Config</a></td>
<td>

config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configFile</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

config_file

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#content">Content</a></td>
<td>

content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="#context">Context</a></td>
<td>

context

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contextParam1</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

context_param_1

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contextParam2</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

context_param_2

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contextType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

context_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

create_by

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

create_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dashboardUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

dashboard_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

data

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deadline</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

deadline

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultSelected</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

default_selected

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultValue</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

default_value

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverable</strong></td>
<td valign="top"><a href="#deliverable">Deliverable</a></td>
<td>

deliverable

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverables</strong></td>
<td valign="top">[<a href="#deliverable">Deliverable</a>!]</td>
<td>

deliverables

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

deliverables

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

deliverables

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

deliverables

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>departments</strong></td>
<td valign="top">[<a href="#department">Department</a>!]</td>
<td>

departments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

departments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

departments

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

departments

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>desc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

desc

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionText</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

description_text

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>detailType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

detail_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCiSyncs</strong></td>
<td valign="top">[<a href="#devopscisync">DevopsCiSync</a>!]</td>
<td>

devops_ci_syncs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_ci_syncs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_ci_syncs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_ci_syncs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCommit</strong></td>
<td valign="top"><a href="#devopscommit">DevopsCommit</a></td>
<td>

devops_commit

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCommits</strong></td>
<td valign="top">[<a href="#devopscommit">DevopsCommit</a>!]</td>
<td>

devops_commits

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_commits

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_commits

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_commits

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td>

devops_pipeline

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td>

devops_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunStages</strong></td>
<td valign="top">[<a href="#devopspipelinerunstage">DevopsPipelineRunStage</a>!]</td>
<td>

devops_pipeline_run_stages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_pipeline_run_stages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_pipeline_run_stages

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_pipeline_run_stages

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunSteps</strong></td>
<td valign="top">[<a href="#devopspipelinerunstep">DevopsPipelineRunStep</a>!]</td>
<td>

devops_pipeline_run_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_pipeline_run_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_pipeline_run_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_pipeline_run_steps

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRuns</strong></td>
<td valign="top">[<a href="#devopspipelinerun">DevopsPipelineRun</a>!]</td>
<td>

devops_pipeline_runs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_pipeline_runs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_pipeline_runs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_pipeline_runs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelines</strong></td>
<td valign="top">[<a href="#devopspipeline">DevopsPipeline</a>!]</td>
<td>

devops_pipelines

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_pipelines

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_pipelines

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_pipelines

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmAuths</strong></td>
<td valign="top">[<a href="#devopsscmauth">DevopsScmAuth</a>!]</td>
<td>

devops_scm_auths

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_scm_auths

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_scm_auths

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_scm_auths

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsScmRepos</strong></td>
<td valign="top">[<a href="#devopsscmrepo">DevopsScmRepo</a>!]</td>
<td>

devops_scm_repos

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

devops_scm_repos

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

devops_scm_repos

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

devops_scm_repos

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

display_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

display_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>doneTaskPercent</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

done_task_percent

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>drafting</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

drafting

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

duration

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td>

end_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

end_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errorMessage</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

error_message

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateVariance</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

estimate_variance

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatedHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

estimated_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

estimated_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

estimated_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

estimated_hours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatedHoursSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

estimated_hours_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>evaluated</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

evaluated

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>executor</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

executor

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expand</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

expand

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ext</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

ext

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalActivities</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

external_activities

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>failedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

failed_case_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field012</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

field012

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field027</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

field027

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field028</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

field028

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field033</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

field033

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fieldType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

field_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>!]</td>
<td>

fields

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

fields

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

fields

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

fields

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finishTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

finish_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fold</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

fold

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fromUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

from_user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a>!]</td>
<td>

gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

gantt_chart_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttCharts</strong></td>
<td valign="top">[<a href="#ganttchart">GanttChart</a>!]</td>
<td>

gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

gantt_charts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttDataType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

gantt_data_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttDatas</strong></td>
<td valign="top">[<a href="#ganttdata">GanttData</a>!]</td>
<td>

gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

gantt_datas

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>groupBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

group_by

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

hash

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hidden</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

hidden

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

hours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

icon

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>importConfig</strong></td>
<td valign="top"><a href="#importconfig">ImportConfig</a></td>
<td>

import_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>includeSubtasks</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

include_subtasks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>index</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

index

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isBase</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_base

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDefault</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_default

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFoldAllGroups</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_fold_all_groups

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPin</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_pin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublic</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_public

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShow</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_show

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShowDerive</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

is_show_derive

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

issue_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueTypes</strong></td>
<td valign="top">[<a href="#issuetype">IssueType</a>!]</td>
<td>

issue_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

issue_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

issue_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

issue_types

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

item_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>kanbanSetting</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

kanban_setting

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td>

last_pipeline_run

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastRunStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

last_run_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastRunUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

last_run_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastSuccessRunUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

last_success_run_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastWebHookTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

last_web_hook_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layout</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

layout

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutH</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

layout_h

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutW</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

layout_w

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutX</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

layout_x

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutY</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

layout_y

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

link_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkInDesc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

link_in_desc

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkInDescPinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

link_in_desc_pinyin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkOutDesc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

link_out_desc

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkOutDescPinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

link_out_desc_pinyin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>links</strong></td>
<td valign="top"><a href="#link">Link</a></td>
<td>

links

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

log

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhourReports</strong></td>
<td valign="top">[<a href="#manhourreport">ManhourReport</a>!]</td>
<td>

manhour_reports

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

manhour_reports

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

manhour_reports

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

manhour_reports

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhours</strong></td>
<td valign="top">[<a href="#manhour">Manhour</a>!]</td>
<td>

manhours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

manhours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

manhours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

manhours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

max_length

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>memberCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

member_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>members</strong></td>
<td valign="top"><a href="#userdomain">UserDomain</a></td>
<td>

members

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

message

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td>

milestone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestones</strong></td>
<td valign="top">[<a href="#milestone">Milestone</a>!]</td>
<td>

milestones

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

milestones

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

milestones

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

milestones

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

name_pinyin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namespace</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

namespace

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>needDeleteRelation</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

need_delete_relation

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>needSync</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

need_sync

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>next</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

next

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

note

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

number

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

object_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

object_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>operator</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

operator

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]</td>
<td>

options

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

owner

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>params</strong></td>
<td valign="top"><a href="#param">Param</a></td>
<td>

params

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

parent

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

parent_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

parent_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>passedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

passed_case_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

password

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

path

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pathModules</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td>

path_modules

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>personalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td>

personal_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

pipeline_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

pipeline_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

pipeline_url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndDate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

plan_end_date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

plan_end_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planReport</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

plan_report

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartDate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

plan_start_date

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

plan_start_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStatus</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

plan_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pool</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

pool

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

position

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postFunction</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

post_function

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmTask</strong></td>
<td valign="top"><a href="#ppmtask">PpmTask</a></td>
<td>

ppm_task

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmTasks</strong></td>
<td valign="top">[<a href="#ppmtask">PpmTask</a>!]</td>
<td>

ppm_tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

ppm_tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

ppm_tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

ppm_tasks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

ppm_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

priority

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

product

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td>

product_component

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentViewConfigs</strong></td>
<td valign="top">[<a href="#productcomponentviewconfig">ProductComponentViewConfig</a>!]</td>
<td>

product_component_view_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

product_component_view_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

product_component_view_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

product_component_view_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentViews</strong></td>
<td valign="top">[<a href="#productcomponentview">ProductComponentView</a>!]</td>
<td>

product_component_views

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

product_component_views

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

product_component_views

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

product_component_views

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponents</strong></td>
<td valign="top">[<a href="#productcomponent">ProductComponent</a>!]</td>
<td>

product_components

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

product_components

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

product_components

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

product_components

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productModules</strong></td>
<td valign="top">[<a href="#productmodule">ProductModule</a>!]</td>
<td>

product_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

product_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

product_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

product_modules

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]</td>
<td>

products

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

products

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

products

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

products

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>program</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td>

program

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>programs</strong></td>
<td valign="top">[<a href="#program">Program</a>!]</td>
<td>

programs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

programs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

programs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

programs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

progress

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

project_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

project_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>!]</td>
<td>

projects

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

projects

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

projects

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

projects

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publishStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

publish_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

query

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>referenceId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

reference_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

related_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

related_issue_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

related_project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedSprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

related_sprint

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedTasks</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

related_tasks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

related_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

relation_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationTypes</strong></td>
<td valign="top">[<a href="#relationtype">RelationType</a>!]</td>
<td>

relation_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

relation_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

relation_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

relation_types

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remainingHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

remaining_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

remaining_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

remaining_hours

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

remaining_hours

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remainingManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

remaining_manhour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

repo

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

required

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>result</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

result

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>roles</strong></td>
<td valign="top">[<a href="#role">Role</a>!]</td>
<td>

roles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

roles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

roles

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

roles

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scheduleGroupType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

schedule_group_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scm</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

scm

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scmType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

scm_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serverUpdateStamp</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

server_update_stamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>settings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

settings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shared</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

shared

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sharedTo</strong></td>
<td valign="top"><a href="#userdomain">UserDomain</a></td>
<td>

shared_to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skippedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

skipped_case_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

sort

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#activityrelation">ActivityRelation</a></td>
<td>

source

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

source_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

sprint

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintBindingRule</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

sprint_binding_rule

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

sprint_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintStatuses</strong></td>
<td valign="top">[<a href="#sprintstatus">SprintStatus</a>!]</td>
<td>

sprint_statuses

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

sprint_statuses

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

sprint_statuses

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

sprint_statuses

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprints</strong></td>
<td valign="top">[<a href="#sprint">Sprint</a>!]</td>
<td>

sprints

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

sprints

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

sprints

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

sprints

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stage</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

stage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stageId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

stage_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>standardWorkingHoursSeries</strong></td>
<td valign="top"><a href="#timeseries">TimeSeries</a></td>
<td>

standard_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">source</td>
<td valign="top"><a href="#string">string</a></td>
<td>

standard_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sum</td>
<td valign="top"><a href="#string">string</a></td>
<td>

standard_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">timeSeries</td>
<td valign="top"><a href="#timeseriesargs">TimeSeriesArgs</a></td>
<td>

standard_working_hours_series

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td>

start_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

start_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusCategory</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

status_category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stepId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

step_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stepResult</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

step_result

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

sub_issue_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subTasks</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

sub_tasks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncFromProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

sync_from_project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncPipelineCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

sync_pipeline_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

sync_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncToProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

sync_to_project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncTypes</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

sync_types

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tableFieldSettings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

table_field_settings

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tag</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

tag

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#activityrelation">ActivityRelation</a></td>
<td>

target

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>task</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

task

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountDone</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_count_done

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountInProgress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_count_in_progress

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountIncludeChildren</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_count_include_children

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountToDo</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_count_to_do

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttChartPersonalConfigs</strong></td>
<td valign="top">[<a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a>!]</td>
<td>

task_gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

task_gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

task_gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

task_gantt_chart_personal_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttCharts</strong></td>
<td valign="top">[<a href="#taskganttchart">TaskGanttChart</a>!]</td>
<td>

task_gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

task_gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

task_gantt_charts

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

task_gantt_charts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskGanttDatas</strong></td>
<td valign="top">[<a href="#taskganttdata">TaskGanttData</a>!]</td>
<td>

task_gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

task_gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

task_gantt_datas

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

task_gantt_datas

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskLinkTypes</strong></td>
<td valign="top">[<a href="#tasklinktype">TaskLinkType</a>!]</td>
<td>

task_link_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

task_link_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

task_link_types

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

task_link_types

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskStatuss</strong></td>
<td valign="top">[<a href="#taskstatus">TaskStatus</a>!]</td>
<td>

task_statuss

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

task_statuss

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

task_statuss

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

task_statuss

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskUpdateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

task_update_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td>

tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

tasks

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

tasks

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>templateUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

template_uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td>

testcase_case

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td>

testcase_case_step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCaseSteps</strong></td>
<td valign="top">[<a href="#testcasecasestep">TestcaseCaseStep</a>!]</td>
<td>

testcase_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_case_steps

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCases</strong></td>
<td valign="top">[<a href="#testcasecase">TestcaseCase</a>!]</td>
<td>

testcase_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_cases

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td>

testcase_field_config

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfigs</strong></td>
<td valign="top">[<a href="#testcasefieldconfig">TestcaseFieldConfig</a>!]</td>
<td>

testcase_field_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_field_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_field_configs

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_field_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibraries</strong></td>
<td valign="top">[<a href="#testcaselibrary">TestcaseLibrary</a>!]</td>
<td>

testcase_libraries

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_libraries

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_libraries

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_libraries

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td>

testcase_library

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseModule</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td>

testcase_module

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseModules</strong></td>
<td valign="top">[<a href="#testcasemodule">TestcaseModule</a>!]</td>
<td>

testcase_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_modules

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_modules

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlan</strong></td>
<td valign="top"><a href="#testcaseplan">TestcasePlan</a></td>
<td>

testcase_plan

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCaseSteps</strong></td>
<td valign="top">[<a href="#testcaseplancasestep">TestcasePlanCaseStep</a>!]</td>
<td>

testcase_plan_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_plan_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_plan_case_steps

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_plan_case_steps

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCases</strong></td>
<td valign="top">[<a href="#testcaseplancase">TestcasePlanCase</a>!]</td>
<td>

testcase_plan_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_plan_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_plan_cases

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_plan_cases

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlans</strong></td>
<td valign="top">[<a href="#testcaseplan">TestcasePlan</a>!]</td>
<td>

testcase_plans

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

testcase_plans

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

testcase_plans

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

testcase_plans

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeProgress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

time_progress

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

timestamp

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

to_user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>todoCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

todo_case_count

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

token

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

total_manhour

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transitions</strong></td>
<td valign="top">[<a href="#transition">Transition</a>!]</td>
<td>

transitions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

transitions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

transitions

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

transitions

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trigger</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

trigger

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>triggerBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

trigger_by

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>triggerType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

trigger_type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

update_time

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

update_user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updater</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

updater

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

uri

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urlSetting</strong></td>
<td valign="top"><a href="#urlsetting">UrlSetting</a></td>
<td>

url_setting

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usedIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

used_in

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userGroups</strong></td>
<td valign="top">[<a href="#usergroup">UserGroup</a>!]</td>
<td>

user_groups

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

user_groups

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

user_groups

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

user_groups

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

username

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td>

users

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#filter">Filter</a></td>
<td>

users

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filterGroup</td>
<td valign="top"><a href="#filtergroup">FilterGroup</a></td>
<td>

users

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#orderby">OrderBy</a></td>
<td>

users

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>view</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td>

view

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewConfigs</strong></td>
<td valign="top"><a href="#productcomponentviewconfig">ProductComponentViewConfig</a></td>
<td>

view_configs

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>views</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td>

views

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInPlan</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

visible_in_plan

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

visible_in_project

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInResource</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

visible_in_resource

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warnStep</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

warn_step

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>watchers</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

watchers

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookFile</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

web_hook_file

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

web_hook_id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookSecret</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

web_hook_secret

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookStatus</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

web_hook_status

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

web_hook_url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>withChildren</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

with_children

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zooming</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

zooming

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Card">Card</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>config</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

设置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dashboardUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仪表盘 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

卡片描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutH</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

高度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutW</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

宽度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutX</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

x 坐标

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layoutY</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

y 坐标

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="CommonComment">CommonComment</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fromUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

发送者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

正文

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体 uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>referenceId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

引用 id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

接收者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="CommonMessage">CommonMessage</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

操作类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ext</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

额外的附加信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体 uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>objectType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

主体类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>operator</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

操作者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tag</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

操作标签

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Config">Config</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>basedOn</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>condition</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dimensions</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>display</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>range</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Content">Content</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resource_uuid</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>size</strong></td>
<td valign="top"><a href="#int">int</a>!</td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Context">Context</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>componentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fieldConfigUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueTypeUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>libraryUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>programUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>spaceUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Deliverable">Deliverable</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

在此节点后

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>commitTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

提交时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>committer</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

提交者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#content">Content</a></td>
<td>

交付情况

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#milestone">Milestone</a></td>
<td>

来源

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

来源类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

交付物类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Department">Department</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top">[<a href="#department">Department</a>!]</td>
<td>

[祖先部门]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

部门名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>next</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[相邻节点]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[父节点]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsCiSync">DevopsCiSync</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>account</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

账户

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certification</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

认证

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certificationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

认证类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciServerType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

CI 服务器类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciServerUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

CI 服务器地址

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

流水线数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncPipelineCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

已同步流水线数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

同步状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsCommit">DevopsCommit</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>author</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

提交人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

分支

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRun</strong></td>
<td valign="top">[<a href="#devopspipelinerun">DevopsPipelineRun</a>!]</td>
<td>

关联的运行流水线

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

提交 Hash

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

提交信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仓库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scm</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

scm

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

提交时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

Commit Url

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsPipeline">DevopsPipeline</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

分支

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ciSync</strong></td>
<td valign="top"><a href="#devopscisync">DevopsCiSync</a></td>
<td>

ci 同步

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>config</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>configFile</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPin</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

置顶

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastPipelineRun</strong></td>
<td valign="top"><a href="#devopspipelinerun">DevopsPipelineRun</a></td>
<td>

最后运行

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastRunStatus</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

最后运行的状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastRunUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

最后运行 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastSuccessRunUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

最后运行成功 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

流水线创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线地址

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>!]</td>
<td>

关联的项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仓库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintBindingRule</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

迭代绑定规则

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsPipelineRun">DevopsPipelineRun</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>branch</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

分支

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsCommit</strong></td>
<td valign="top">[<a href="#devopscommit">DevopsCommit</a>!]</td>
<td>

代码提交

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipeline</strong></td>
<td valign="top"><a href="#devopspipeline">DevopsPipeline</a></td>
<td>

流水线

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunStages</strong></td>
<td valign="top">[<a href="#devopspipelinerunstage">DevopsPipelineRunStage</a>!]</td>
<td>

流水线阶段

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

时长

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finishTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

触发时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

日志

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pipelineUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>repo</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仓库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

触发时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线运行状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>triggerBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>triggerType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsPipelineRunStage">DevopsPipelineRunStage</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>devopsPipelineRunSteps</strong></td>
<td valign="top">[<a href="#devopspipelinerunstep">DevopsPipelineRunStep</a>!]</td>
<td>

流水线步骤

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

时长

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>errorMessage</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

错误信息

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finishTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

触发时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线阶段名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

并行 stage 的父 stage id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

并行 stage 的父 stage uuid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stageId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

阶段 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线阶段运行状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsPipelineRunStep">DevopsPipelineRunStep</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

时长

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>finishTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

触发时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

日志

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线阶段名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stageId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

阶段 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

流水线阶段运行状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stepId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

步骤 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsScmAuth">DevopsScmAuth</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>account</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

账户

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certificationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

认证类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPublic</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

是否公有

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

密码

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scmType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

SCM 类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

认证状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

token

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

uri

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用户名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="DevopsScmRepo">DevopsScmRepo</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>auth</strong></td>
<td valign="top"><a href="#devopsscmauth">DevopsScmAuth</a></td>
<td>

Auth

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>certificationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

认证类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastWebHookTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

WebHook 状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仓库名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namespace</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

仓库命名空间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scmType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

SCM 类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookFile</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

WebHook secret

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookId</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

WebHook Id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookSecret</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

WebHook secret

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookStatus</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

WebHook 状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>webHookUrl</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

WebHook secret

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Field">Field</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td>

[属性别名]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allowEmpty</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[允许空值]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[系统属性]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canUpdate</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[可修改]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="#context">Context</a></td>
<td>

[属性上下文]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultValue</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[默认值]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>evaluated</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否计算生成]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fieldType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

属性类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hidden</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[隐藏]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[最大长度]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

属性名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>options</strong></td>
<td valign="top">[<a href="#option">Option</a>!]</td>
<td>

选项

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pool</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[属性池]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

必填

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfigs</strong></td>
<td valign="top">[<a href="#testcasefieldconfig">TestcaseFieldConfig</a>!]</td>
<td>

使用此属性的属性配置列表

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

字段类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usedIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

使用范围

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="GanttChart">GanttChart</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>importConfig</strong></td>
<td valign="top"><a href="#importconfig">ImportConfig</a></td>
<td>

导入配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图名称名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特图创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>personalConfig</strong></td>
<td valign="top"><a href="#ganttchartpersonalconfig">GanttChartPersonalConfig</a></td>
<td>

个人配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shared</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

分享

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sharedTo</strong></td>
<td valign="top">[<a href="#userdomain">UserDomain</a>!]</td>
<td>

分享用户域

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncFromProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

同步 project 开关

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncToProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

同步 project 开关

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="GanttChartPersonalConfig">GanttChartPersonalConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expand</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

展开

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特图配置创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zooming</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

缩放

</td>
</tr>
</tbody>
</table>
</div>

### <div id="GanttData">GanttData</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

在此节点后

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特数据负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

持续时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttDataType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特数据类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特数据名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>needSync</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

需要同步

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特数据创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

父节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

层级路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

关联项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联数据类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

关联迭代

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ImportConfig">ImportConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="IssueType">IssueType</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[系统任务类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultSelected</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否默认任务类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>detailType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[issue_type 的具体类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>icon</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[图标]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

任务类型名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>!]</td>
<td>

[使用的项目]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subIssueType</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[父/子任务类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Link">Link</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>linkDescType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskLinkTypeUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Manhour">Manhour</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

备注

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

记录人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

所属迭代

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>task</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

所属任务

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ManhourReport">ManhourReport</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否系统报表]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>config</strong></td>
<td valign="top"><a href="#config">Config</a></td>
<td>

报表配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

报表描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fold</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

分组折叠

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

报表名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

报表创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

[所属项目]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Milestone">Milestone</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activityUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[活动 UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deliverable</strong></td>
<td valign="top">[<a href="#deliverable">Deliverable</a>!]</td>
<td>

交付物

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

标题

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

编号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

里程碑状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Option">Option</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bgColor</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>color</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>defaultSelected</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Param">Param</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="PpmTask">PpmTask</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activity</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td>

活动

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

标题

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

工作号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

工作创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppmType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top">[<a href="#activityrelation">ActivityRelation</a>!]</td>
<td>

前置依赖

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top">[<a href="#activityrelation">ActivityRelation</a>!]</td>
<td>

后置影响

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Product">Product</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

产品负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

所属产品名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

产品创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponents</strong></td>
<td valign="top">[<a href="#productcomponent">ProductComponent</a>!]</td>
<td>

[产品下组件]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[工作项数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountDone</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[已完成工作项数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountInProgress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[进行中工作项数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountToDo</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[未开始工作项数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ProductComponent">ProductComponent</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>contextParam1</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[上下文参数 1]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contextParam2</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[上下文参数 2]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contextType</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[上下文类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[组件描述]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>kanbanSetting</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[组件功能看板设置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

产品组件名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td>

[父节点]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

[产品]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>settings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[组件功能设置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>templateUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[组件模版 uuid]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[组件类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urlSetting</strong></td>
<td valign="top"><a href="#urlsetting">UrlSetting</a></td>
<td>

[组件功能自定义链接设置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewConfigs</strong></td>
<td valign="top">[<a href="#productcomponentviewconfig">ProductComponentViewConfig</a>!]</td>
<td>

[组件视图配置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>views</strong></td>
<td valign="top">[<a href="#productcomponentview">ProductComponentView</a>!]</td>
<td>

[组件视图]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ProductComponentView">ProductComponentView</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>boardSettings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[看板视图设置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否默认视图]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>condition</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[筛选条件]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>displayType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[展示方式]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>groupBy</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[分组方式]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>includeSubtasks</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否包含子任务]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isFoldAllGroups</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否折叠分组]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShowDerive</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否显示派生]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>layout</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[布局方式]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

产品组件视图名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

[所有者]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

[产品]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productComponent</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td>

[产品组件]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[筛选方式]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[排序方式]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tableFieldSettings</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[表格模式的表头]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ProductComponentViewConfig">ProductComponentViewConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>componentUUID</strong></td>
<td valign="top"><a href="#productcomponent">ProductComponent</a></td>
<td>

[组件]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isShow</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否隐藏]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

[所有者]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[位置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>view</strong></td>
<td valign="top"><a href="#productcomponentview">ProductComponentView</a></td>
<td>

[视图]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="ProductModule">ProductModule</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

所属功能模块名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#productmodule">ProductModule</a></td>
<td>

[父模块]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[路径]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[位置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a></td>
<td>

[产品]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[工作项数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountIncludeChildren</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[工作项数以子模块的任务数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>withChildren</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td>

[所属功能模块及子模块]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Program">Program</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[在此节点后]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ancestors</strong></td>
<td valign="top">[<a href="#program">Program</a>!]</td>
<td>

[父项目集]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

项目集负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目集名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

项目集创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[父节点]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[层级路径]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[位置]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

[关联项目]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projectCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[项目]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[关联数据类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[迭代数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[任务数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Project">Project</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>_12m8U5WB

项目负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目公告

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionText</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目公告文本

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>doneTaskPercent</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

工作项完成度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatedHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

总预估工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPin</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[置顶]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>memberCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

成员数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

项目创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>program</strong></td>
<td valign="top"><a href="#program">Program</a></td>
<td>

[所属项目集]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remainingManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

总剩余工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scheduleGroupType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目计划分组类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprintCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

迭代数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

项目状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusCategory</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[状态类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

工作项数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountDone</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

已完成工作项数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountInProgress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进行中工作项数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskCountToDo</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

未开始工作项数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>taskUpdateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[任务最近更新时间]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInPlan</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Plan 可见]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Project 可见]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInResource</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Resource 可见]

</td>
</tr>

<tr>
<td colspan="2" valign="top"><strong>isArchive</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[项目是否归档]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>archiveUser</strong></td>
<td valign="top"><a href="#string">boolean</a></td>
<td>

[归档操作者]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>archiveTime</strong></td>
<td valign="top"><a href="#string">int</a></td>
<td>

[归档时间]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="RelationType">RelationType</div>

<div style={{overflow:"scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关系类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td>

前置活动

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#activity">Activity</a></td>
<td>

后置活动

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Role">Role</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>context</strong></td>
<td valign="top"><a href="#context">Context</a></td>
<td>

[属性上下文]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>members</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td>

[成员]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

角色名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[角色类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Sprint">Sprint</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

迭代负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

迭代描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatedHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

总预估工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

迭代名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remainingManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

总剩余工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scheduleGroupType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目计划分组类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#sprintstatus">SprintStatus</a></td>
<td>

迭代状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInPlan</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Plan 可见]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInProject</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Project 可见]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>visibleInResource</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[Resource 可见]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="SprintStatus">SprintStatus</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[状态类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

迭代状态名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="Status">Status</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Task">Task</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>_QhweHB3u</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

回归通过-停留时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_VDYoccLw</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

待处理-停留次数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_VJdLqBPU</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

修复中-停留次数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_X7d7ZD6G</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

已完成-停留次数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_Y9Nym1ch</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进行中-停留时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alternativeIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

特殊任务类型（含父子任务类型）

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedCases</strong></td>
<td valign="top"><a href="#testcasecase">[TestcaseCase!]</a></td>
<td>

关联用例库用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedTestcasePlanCases</strong></td>
<td valign="top"><a href="#testcaseplancase">[TestcasePlanCase!]</a></td>
<td>

关联执行结果

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedTestcasePlans</strong></td>
<td valign="top"><a href="#testcaseplan">[TestcasePlan!]</a></td>
<td>

关联测试计划

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

任务负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deadline</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

截止日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

任务描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>descriptionText</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

任务描述文本

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimateVariance</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[预估偏差]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>estimatedHours</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

预估工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field012</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

优先级

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field027</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field028</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划完成日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>field033</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[甘特图 UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

所属任务类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>links</strong></td>
<td valign="top">[<a href="#link">Link</a>!]</td>
<td>

[任务关联关系]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhours</strong></td>
<td valign="top">[<a href="#manhour">Manhour</a>!]</td>
<td>

[任务登记工时]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

任务名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

任务号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

任务创建人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

父任务

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

层级路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndDate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[任务计划结束日期]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartDate</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[任务计划开始日期]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

优先级

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productModules</strong></td>
<td valign="top">[<a href="#productmodule">ProductModule</a>!]</td>
<td>

[所属功能模块]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]</td>
<td>

[所属产品]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[工作项进度]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

关联任务数量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedTasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td>

[关联任务]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>remainingManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

剩余工时

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scheduleGroupType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

项目计划分组类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>serverUpdateStamp</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

所属迭代

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

任务状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusCategory</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[状态类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

子任务类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subTasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td>

[子任务]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeProgress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[工时进度]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalManhour</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[已登记工时]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>watchers</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td>

[任务关注者]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TaskGanttChart">TaskGanttChart</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>componentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联组件

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图名称名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特图创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>personalConfig</strong></td>
<td valign="top"><a href="#taskganttchartpersonalconfig">TaskGanttChartPersonalConfig</a></td>
<td>

个人配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TaskGanttChartPersonalConfig">TaskGanttChartPersonalConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expand</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

展开

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特图配置创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>zooming</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

缩放

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TaskGanttData">TaskGanttData</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

在此节点后

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特数据负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>componentUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联组件

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

持续时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttChartUUID</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特图 UUID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ganttDataType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特数据类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

甘特数据名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

甘特数据创建者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

父节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

层级路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planEndTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划结束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStartTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

计划开始日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

位置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

进度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

关联项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联数据类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>task</strong></td>
<td valign="top"><a href="#task">Task</a></td>
<td>

关联任务

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TaskLinkType">TaskLinkType</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[是否系统内置任务关联类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

[关联数]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkInDesc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

链入描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkInDescPinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[链入描述拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkOutDesc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

链出描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkOutDescPinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[链入描述拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

关联类型名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TaskStatus">TaskStatus</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>builtIn</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

[系统内置状态]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

任务状态名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#status">Status</a></td>
<td>

状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcaseCase">TestcaseCase</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assign</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

用例维护人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>condition</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

前置条件

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>desc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

备注

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>itemType</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item 类型]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用例名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

用例 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用例路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pathModules</strong></td>
<td valign="top">[<a href="#testcasemodule">TestcaseModule</a>!]</td>
<td>

用例路径下的所有模块实体

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

优先级

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td>

所属用例库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseModule</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td>

所属模块

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlanCases</strong></td>
<td valign="top">[<a href="#testcaseplancase">TestcasePlanCase</a>!]</td>
<td>

测试计划用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlans</strong></td>
<td valign="top">[<a href="#testcaseplan">TestcasePlan</a>!]</td>
<td>

测试计划

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#option">Option</a></td>
<td>

用例类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

更新时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updater</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

更新人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcaseCaseStep">TestcaseCaseStep</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>desc</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用例步骤描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>index</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

用例步骤序号

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>result</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用例步骤结果

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td>

用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td>

用例库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcaseFieldConfig">TestcaseFieldConfig</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDefault</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

是否是默认的

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

属性配置名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibraries</strong></td>
<td valign="top">[<a href="#testcaselibrary">TestcaseLibrary</a>!]</td>
<td>

使用此配置的用例库列表

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcaseLibrary">TestcaseLibrary</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isPin</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

置顶

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>members</strong></td>
<td valign="top">[<a href="#userdomain">UserDomain</a>!]</td>
<td>

成员

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用例库名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseFieldConfig</strong></td>
<td valign="top"><a href="#testcasefieldconfig">TestcaseFieldConfig</a></td>
<td>

属性配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcaseModule">TestcaseModule</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDefault</strong></td>
<td valign="top"><a href="#boolean">boolean</a></td>
<td>

是否是无所属模块

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

模块名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parent</strong></td>
<td valign="top"><a href="#testcasemodule">TestcaseModule</a></td>
<td>

父节点

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>path</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

模块路径

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

position

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseLibrary</strong></td>
<td valign="top"><a href="#testcaselibrary">TestcaseLibrary</a></td>
<td>

用例库

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcasePlan">TestcasePlan</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assigns</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td>

测试计划负责人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>blockedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

阻塞用例数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>failedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

失败用例数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>members</strong></td>
<td valign="top">[<a href="#userdomain">UserDomain</a>!]</td>
<td>

成员

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>owner</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

测试计划拥有者

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>passedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

通过用例数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planReport</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试报告

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>planStatus</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

测试计划状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedIssueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

测试计划关联的任务类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedProject</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

测试计划关联的项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedSprint</strong></td>
<td valign="top"><a href="#sprint">Sprint</a></td>
<td>

测试计划关联的迭代

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skippedCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

跳过用例数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stage</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试阶段

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>todoCaseCount</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

待测试用例数

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcasePlanCase">TestcasePlanCase</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>executor</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

测试计划下的用例执行人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>note</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划下的用例备注

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedTasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td>

测试计划下的用例关联的任务

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>result</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划下的用例执行结果

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td>

测试用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlan</strong></td>
<td valign="top"><a href="#testcaseplan">TestcasePlan</a></td>
<td>

测试计划

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>warnStep</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划下的用例警告步骤

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TestcasePlanCaseStep">TestcasePlanCaseStep</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>actualResult</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划下的用例步骤实际结果

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stepResult</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

测试计划下的用例步骤结果

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCase</strong></td>
<td valign="top"><a href="#testcasecase">TestcaseCase</a></td>
<td>

测试用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcaseCaseStep</strong></td>
<td valign="top"><a href="#testcasecasestep">TestcaseCaseStep</a></td>
<td>

测试用例

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>testcasePlan</strong></td>
<td valign="top"><a href="#testcaseplan">TestcasePlan</a></td>
<td>

测试计划

</td>
</tr>
</tbody>
</table>
</div>

### <div id="TimeSeries">TimeSeries</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>times</strong></td>
<td valign="top">[<a href="#string">string</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>values</strong></td>
<td valign="top">[<a href="#int">int</a>]</td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="Transition">Transition</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>condition</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发器

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td>

结束状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发器

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>issueType</strong></td>
<td valign="top"><a href="#issuetype">IssueType</a></td>
<td>

所属任务类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

触发器

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postFunction</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发器

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>project</strong></td>
<td valign="top"><a href="#project">Project</a></td>
<td>

所属项目

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startStatus</strong></td>
<td valign="top"><a href="#taskstatus">TaskStatus</a></td>
<td>

起始状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trigger</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

触发器

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="UrlSetting">UrlSetting</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="User">User</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用户头像

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用户职位

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>departments</strong></td>
<td valign="top">[<a href="#department">Department</a>!]</td>
<td>

[用户所在部门]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

邮箱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>manhours</strong></td>
<td valign="top">[<a href="#manhour">Manhour</a>!]</td>
<td>

[用户登记工时]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用户名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>!]</td>
<td>

[用户参与的项目]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

成员状态

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>syncTypes</strong></td>
<td valign="top">[<a href="#int">int</a>!]</td>
<td>

关联类型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tasks</strong></td>
<td valign="top">[<a href="#task">Task</a>!]</td>
<td>

[用户负责的任务]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userGroups</strong></td>
<td valign="top">[<a href="#usergroup">UserGroup</a>!]</td>
<td>

[用户所在用户组]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="UserDomain">UserDomain</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>param</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="UserGroup">UserGroup</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createTime</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td>

创建时间

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[Item Key]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>members</strong></td>
<td valign="top">[<a href="#user">User</a>!]</td>
<td>

[成员]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

用户组名称

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>namePinyin</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[名称拼音]

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td>

[UUID]

</td>
</tr>
</tbody>
</table>
</div>

### <div id="source">source</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppm_task</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
</tbody>
</table>
</div>

### <div id="target">target</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>milestone</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ppm_task</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uuid</strong></td>
<td valign="top"><a href="#string">string</a>!</td>
<td></td>
</tr>
</tbody>
</table>
</div>

## Inputs

### <div id="Filter">Filter</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

### <div id="FilterGroup">FilterGroup</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

### <div id="GroupBy">GroupBy</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

### <div id="OrderBy">OrderBy</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

### <div id="TimeSeriesArgs">TimeSeriesArgs</div>

<div style={{overflow: "scroll"}}>
<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>constant</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>equal</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fromUnix</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gt</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gte</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lt</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lte</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not_equal</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quick</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeField</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>toUnix</strong></td>
<td valign="top"><a href="#int">int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unit</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valueField</strong></td>
<td valign="top"><a href="#string">string</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>workdays</strong></td>
<td valign="top">[<a href="#string">string</a>!]</td>
<td></td>
</tr>
</tbody>
</table>
</div>

## Scalars

### boolean

### int

### string
