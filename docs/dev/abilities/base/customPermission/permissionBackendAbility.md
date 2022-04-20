# 插件后端permission能力开发

我们为插件开发者提供了非声明式的权限点定义和和配置方法。开发者可以使用自行实现其前端权限配置页面，并在后端使用我们提供的方法来管理插件权限。

我们提供了六个对应的方法，以下是如何在后端代码中使用他们。

### 1.添加权限点  AddPermissionInfo
```javascript
export async function addPermissionInfo(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  const response = await fetchONES(
    {
      path: `AddPermissionInfo`,
      headers: {
                 "AbilityName":["AddPermissionInfo"]
                },
      method: 'POST',
      body: {
        "permission_name":"123",    // 权限点名称
        "permission_field":"1234",  // 权限点唯一标识
        "permission_desc":"test",   // 插件点描述
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]值有：
正常：
{
  id: 27,
  create_time: 1646640153,
  update_time: 1646640153,
  deleted: false,
  org_uuid: 'JGpj1YSe',
  team_uuid: 'ERWC2dHj',
  instance_uuid: '21e54b52',
  permission_name: '123',
  permission_desc: 'test',
  permission_field: '1234',
  permission_id: 54242
}
异常：
<AddPermissionInfo.PermissionFieldAlreadyExist> // permission标识已存在
```
### 2.获取权限点  PermissionInfoList
```javascript
export async function permissioninfolist(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  Logger.info('[Plugin] hello ======= 请求成功');
  const response = await fetchONES(
    {
      path: `PermissionInfoList`,
      headers: {
                 "AbilityName":["PermissionInfoList"]
                },
      method: 'POST',
      body: {
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]值有：
正常：
[
  {
    org_uuid: 'JGpj1YSe',
    team_uuid: 'ERWC2dHj',
    instance_uuid: '21e54b52',
    permission_name: '123',
    permission_field: '123',
    permission_id: 57725,
    permission_desc: 'test',
    rule_info: []
  }
]
```

### 3.删除权限点  DeletePermissionInfo
```javascript
export async function deletepermissioninfo(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  const response = await fetchONES(
    {
      path: `DeletePermissionInfo`,
      headers: {
                 "AbilityName":["DeletePermissionInfo"]
                },
      method: 'POST',
      body: {
        "permission_field": "1234"
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]值有：
正常：
[
  {
    org_uuid: 'JGpj1YSe',
    team_uuid: 'ERWC2dHj',
    instance_uuid: '21e54b52',
    permission_name: '123',
    permission_field: '123',
    permission_id: 57725,
    permission_desc: 'test',
    rule_info: []
  }
]
```
### 4.添加权限规则  AddPermissionRule
```javascript
export async function addPermissionRule(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  const response = await fetchONES(
    {
      path: `AddPermissionRule`,
      headers: {
                 "AbilityName":["AddPermissionRule"]
                },
      method: 'POST',
      body: {
        "permission_id": 58638,            // permission唯一id，在add_permission_info时返回
        "user_domain_type": "single_user", // 用户域种类，现有：everyone,single_user,department,group,team_owner
        "user_domain_param": "1233333",    // 用户领域的唯一标示，例如当user_domain_type是single_user时，user_domain_param就是标示user_uuid
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]值有：
正常:
 {
  id: 1,
  create_time: 1646708993,
  update_time: 1646708993,
  deleted: false,
  org_uuid: 'JGpj1YSe',
  team_uuid: 'ERWC2dHj',
  permission_id: 59290,
  context_type: 5001,          // 当前权限体系，插件开发者不用关心
  context_param_1: '21e54b52',
  context_param_2: '',
  user_domain_type: 1,
  user_domain_param: '1233333',
  position: 0
}
异常:
<UserDomainNotExist> UserDomainNotExist // 用户域类型不存在
```
### 5.检查是否有某个权限点权限  CheckPermissionRule
```javascript
export async function checkPermissionRule(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  Logger.info('[Plugin] hello ======= 请求成功');
  const response = await fetchONES(
    {
      path: `CheckPermissionRule`,
      headers: {
                 "AbilityName":["CheckPermissionRule"]
                },
      method: 'POST',
      body: {
        "permission_field": "1234",
        "user_uuid": "123333388",
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]值有：
正常：
 { is_permission: true }
 { is_permission: false }

异常：
 <ServerError> permission not exist
```
### 6.删除权限规则  DeletePermissionRule
```javascript
export async function deletePermissionRule(request: PluginRequest): Promise<PluginResponse> {
  const body = request.body || {};
  const response = await fetchONES(
    {
      path: `DeletePermissionRule`,
      headers: {
                 "AbilityName":["DeletePermissionRule"]
                },
      method: 'POST',
      body: {
        "id": 12, // permission_rule唯一id，在add_permission_rule时会返回
      }
    }
  )
  // @ts-ignore
  Logger.info(JSON.parse(response?.body.toString())["data"])
  return {
    body: {
      res: 'hello world',
      requestBody: body,
    },
  };
}

JSON.parse(response?.body.toString())["data"]
返回值：
success
```