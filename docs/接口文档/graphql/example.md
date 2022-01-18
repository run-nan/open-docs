---
nav:
  title: 接口文档
order: 3
toc: menu
---
# ONES GraphQL 调用示例

# 目录

<ul>
<li><a href="#request_graphql">GraphQL 请求体案例</a></li>
<ul>
<li><a href="#项目下的卡片列表">项目下的卡片列表</a></li>
<li><a href="#更新卡片公告内容">更新卡片公告内容</a></li>
<li><a href="#迭代下的任务列表">迭代下的任务列表</a></li>
<li><a href="#任务的关联用例数据">任务的关联用例数据</a></li>
<li><a href="#任务类型(可指定父子任务类型)">任务类型(可指定父子任务类型)</a></li>
<li><a href="#任务类型下的任务列表">任务类型下的任务列表</a></li>
<li><a href="#任务关注者下的任务列表">任务关注者下的任务列表</a></li>
<li><a href="#通过任务创建者筛选">通过任务创建者筛选</a></li>
<li><a href="#通过任务创建时间筛选">通过任务创建时间筛选</a></li>
<li><a href="#通过任务标题筛选">通过任务标题筛选</a></li>
<li><a href="#通过截止日期筛选">通过截止日期筛选</a></li>
<li><a href="#通过优先级筛选">通过优先级筛选</a></li>
<li><a href="#通过任务负责人筛选">通过任务负责人筛选</a></li>
<li><a href="#迭代下所有任务的总工时">迭代下所有任务的总工时</a></li>
<li><a href="#工时">工时</a></li>
<li><a href="#项目计划">项目计划</a></li>
<li><a href="#通过日期筛选">通过日期筛选</a></li>
<li><a href="#单行文本筛选">单行文本筛选</a></li>
<li><a href="#数字字段筛选">数字字段筛选</a></li>
</ul>
</ul>

## <p id="request_graphql">GraphQL 请求体案例</p>

## 项目下的卡片列表

```graphql
{
    cards(
        filter: {
            objectId_equal: "34QZDMqz",
            objectType_equal: "project_component",
            status_equal: "normal"
        }
    ) {
        key
        uuid
        name
        description
        type
        config
    }
}
```

## 更新卡片公告内容

```graphql
{
    mutation UpdateCard {
        updateCard(
            config: {
                project_uuid: "FXWjFL8RERRdheM7",
                content: "<p>1232</p>",
            }
            key: "card-D89TnAyY"
        ) {
            key
        }
    }
}
```

## 迭代下的任务列表

```graphql
{
	tasks(filter: { sprint_in: ["3XX1trc1"] }) {
		uuid
		parent {
			uuid
		}
	}
}
```

## 任务的关联用例数据

```graphql
{
    tasks(filter: { uuid_equal: "RvJM8Q3FsTVRkDWO" }) {
        uuid
        name
        relatedTestcasePlans {
            uuid
            name
        }
        relatedTestcasePlanCases {
            testcaseCase {
                name
            }
            result
        }
        relatedCases {
            uuid
            name
        }
   }
}
```

## 任务类型(可指定父子任务类型)

```graphql
{
	issueTypes(
		filter: {
			projects: { uuid_in: ["5EYNKKKBkkkkkk34"] }
			subIssueType_in: [true] # 父子任务类型(不传type将返回所有)
		}
	) {
		uuid
		name
	}
}
```

## 任务类型下的任务列表

```graphql
{
	tasks(filter: { issueType_in: ["Jmjaoxqb"] }) {
		uuid
		name
	}
}
```

## 任务关注者下的任务列表

关注者本质上是用户, 所以可以输出用户的相关的信息

```graphql
{
	tasks(
		filter: { owner_in: ["5EYNKKKB"], watchers: { uuid_in: ["5EYNKKKB"] } }
	) {
		uuid
		name
		watchers {
			uuid
		}
	}
}
```

##  通过任务创建者筛选

```graphql
{
	tasks(filter: { owner_in: ["5EYNKKKB"] }) {
		uuid
		name
		owner {
			uuid
		}
	}
}
```

## 通过任务创建时间筛选

```graphql
{
	tasks(
		filter: {
			project: { uuid_in: ["5EYNKKKBkkkkkk21"] }
			# 方法1
			createTime_range: { from: "2017-02-01", to: "2019-03-11" }
			# 方法2
			createTime_range: {
				quick: "last_7_days" # last_14_days last_30_days yesterday today this_week this_month this_quarter this_year
			}
		}
	) {
		uuid
		name
		deadline
		project {
			uuid
		}
	}
}

```

## 通过任务标题筛选

理论上文本类型的都支持 `match`模糊匹配搜索

NOTE: `match` 最后放在`filter`最下面,从而提高筛选性能

```graphql
{
	tasks(
		filter: {
			project: { uuid_in: ["5EYNKKKBkkkkkk21"] }
			name_match: "怎么样" # 放在筛选条件的最下面, 提高筛选性能
		}
	) {
		uuid
		name
		deadline
		project {
			uuid
		}
	}
}
```

## 通过截止日期筛选

```graphql
{
	tasks(
		filter: {
			project: { uuid_in: ["5EYNKKKBkkkkkk21"] }
			# 方法1
			deadline_range: { from: "2017-02-01", to: "2019-03-11" }
			# 方法2
			deadline_range: {
				quick: "last_7_days" # last_14_days last_30_days yesterday today this_week this_month this_quarter this_year
			}
		}
	) {
		uuid
		name
		deadline
		project {
			uuid
		}
	}
}
```

## 通过优先级筛选

```graphql
{
	tasks(
		filter: { assign_in: ["5EYNKKKB"], priority: { uuid_in: ["5RgkarJA"] } }
	) {
		uuid
		name
	}
}
```

## 通过任务负责人筛选

```graphql
{
	tasks(
		filter: {
			assign_in: ["5EYNKKKB"]
			status: {
				uuid_in: ["GWjYu2WK"] # 任务的状态筛选
			}
		}
	) {
		uuid
		name
	}
}
```

## 迭代下所有任务的总工时

```graphql
{
	buckets(groupBy: { tasks: { sprint: {} } }, orderBy: {}) {
		sprint {
			uuid
		}
		aggregateInt(sum: "tasks.estimatedHours") # 统计
	}
}
```

## 迭代下的剩余工时

```graphql
{
	buckets(
		groupBy: { tasks: { sprint: {} } }
		filter: { tasks: { sprint_in: ["MpmPXEYA"] } }
	) {
		key
		sprint {
			uuid
		}
		remainingHours(sum: "tasks.remainingManhour")
	}
}
```

## 工时

接口请求body格式

```graphql
{"query":"%s"} # "%s" string类型, 参考下面示例替换
```

添加预估/登记工时
- 预估工时 type=estimated
- 登记工时 type=recorded
```graphql
mutation
{
    addManhour(
        task: "D2pLSaJ31125EH3X"
        hours: 100000
        start_time: 1598966836
        type: estimated
        description: "do something"
        owner: "D2pLSaJ3"
        hours_format:"avg"
    ){
        key
        owner{
            uuid
            name
        }
        task{
            key
            name
        }
        type
        hours
        description
        startTime
    }
}
```

修改预估/登记工时
```graphql
mutation
{
    updateManhour(
        key: "manhour-2CjkDZto"
        hours: 2000000
    ){
        key
        owner{
            uuid
            name
        }
        task{
            key
            name
        }
        type
        hours
        description
        startTime
    }
}
```

删除预估/登记工时
```graphql
{
    deleteManhour(
        key: "manhour-BEA9LMgd"
    ){
        key
    }
}
```

修改剩余工时
```graphql
mutation
{
    UpdateRemainingHour(
        key: "remaining_hour-D2pLSaJ3YSkyDm1l-DAyGEN19"
        hours: 2000000
    ){
        key
    }
}
```

查询某工作项下某用户的工时

```graphql
 query FetchUserManhours {
      manhours(
        filter: {
          "owner_in": [
              "DAyGEN19"
          ],
          "task_in": [
              "D2pLSaJ3YSkyDm1l"
          ]
      }
        orderBy: {
          "createTime": "DESC",
          "startTime": "DESC"
      }
      ) {
        key
        hours
        startTime
        description
        type
        owner {
          uuid
          avatar
          name
        }
      }
    }
```

查询某工作项下的用户工时信息，并按用户分组
```graphql
query {
      buckets (
        groupBy: {
          "manhours": {
              "owner": {},
              "task": {}
          }
      }
        orderBy: {
          "owner": {
              "namePinyin": "ASC"
          }
      }
      ) {
        manhours(
          filter: {
            "task_in": [
                "D2pLSaJ3YSkyDm1l"
            ]
        }
        ) {
          key
        }
        owner {
          uuid
          name
          avatar
        }
        actualHours(sum: "manhours.recordedHour")
        estimatedHours(sum: "manhours.estimatedHour")
        remainingHour
      }
    }
```


查询某工作项汇总工时
```graphql
query  {
      buckets (
        groupBy: {
          "manhours": {
              "owner": {},
              "task": {}
          }
      }
        orderBy: $orderBy
      ) {
        manhours(
          filter: {
            "owner_in": [
                "D2pLSaJ3"
            ],
            "task_in": [
                "D2pLSaJ3YSkyDm1l"
            ]
        }
        ) {
          key
        }
        actualHours(sum: "manhours.recordedHour")
        estimatedHours(sum: "manhours.estimatedHour")
        remainingHour
        remainingHourDeviation
      }
    }
```


## 项目计划

新建计划

```graphql
mutation{
        addActivity(
            name: "测试2" 
            chart_uuid: "7cSvWRJi"
            assign: "Pqmud3zh" 
            type: "ppm_task" 
            progress: 0
            start_time: 1610640000 
            end_time: 1610726399 
            parent: ""
            )
            {
            key
            name
            ganttDataType: type
            uuid
            number
            progress
            createTime
            chartUUID
            planStartTime: startTime
            planEndTime: endTime
            position
            assign {
                uuid
                name
                avatar
            }
            task {
                uuid
                parent {
                    uuid
                }
                issueType {
                    icon
                    uuid
                }
                subIssueType {
                    icon
                    uuid
                }
            }
            sprint {
                uuid
            }
            }
        }
```

查询计划

```graphql
{
    activities(
        orderBy: {position: "ASC"},
        filter:{
            chartUUID_in:["7cSvWRJi"]
        }
    ) 
    {
        key
        name
        uuid
        number
        progress
        parent
        createTime
        chartUUID
        planStartTime: startTime
        planEndTime: endTime
        estimatedHours
        totalManhour
        remainingManhour
        isVirtual
        ppmTask{
            uuid
        }
        milestone{
            uuid
        }
        deliverable{
            uuid
            key
            name
        }
    }
}

```


修改项目计划

```graphql
mutation UpdateGanttData 
{
    updateActivity (
        name: "测试333" 
        key: "activity-6hgEt3mj") 
    {
        key
    }
}
```

删除项目计划

```graphql
mutation DeleteGanttData {
    deleteActivity(
        key:"activity-2Lb3ZPXW"
        ) 
        {
            key
        }
}
```

## 通过日期筛选

`range` 支持的动态操作属性: `gt` `gte` `lt` `lte` `equal` `not_equal`, 这些参数也填入绝对值, 例如2018-09-09

其中 `gt` 或 `gte` + `lt` 或 `lte` 可有实现`介于` 的操作. 否则只能同时使用上面的其中一个操作.

```graphql
{
	tasks(
		filter: {
			createTime_range: {
				fromUnix: 1511798381
				# toUnix: 1552898381
				# gte: "today-10d"
				# lte: "2019-03-20"
				# equal: "today-99d"
				# not_equal: "today-1d"
			}
			_1Ssfdsdf_range: {
				#自定义属性 "日期" 筛选
				equal: "today-99d"
			}
		}
	) {
		uuid
		_1Ssfdsdf
	}
}
```


## 单行文本筛选

包括标题等的匹配，不匹配，等于，不等于的操作

```graphql
{
	tasks(
		name_euqal: ["你好"] # name完全等于
		name_notEqual: ["你好"] # name 完全不等于
		name_match: ["你好"] # name 包含“你好”
		name_notMatch: ["你好"] # name 不包含“你好”
	) {
		uuid
	}
}
```

## 数字字段筛选

等于，不等于，大于，小于，大于等于，小于等于

```graphql
{
	tasks(
		relatedCount_between: {
			equal: 1 # 等于
		}
	)
	{
	    uuid
	}
}
```

```graphql
{
	tasks(
		relatedCount_between: {
			not_equal: 1 # 不等于
		}
	) {
		uuid
	}
}

```

```graphql
{
	tasks(
		relatedCount_between: {
			gt: 1
			lt: 10 # 大于1 小于10
		}
	){
		uuid
	}
}

```

```graphql
{
	tasks(
		relatedCount_between: {
			gte: 1
			lte: 10 # 大于等于1 小于等于10
		}
	){
		uuid
	}
}

```
