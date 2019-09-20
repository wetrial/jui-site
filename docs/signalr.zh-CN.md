---
order: 2
title: 推送相关
type: 推送
---

## 使用场景
项目中需要从服务器端推送给客服端的情况。

## 改进部分
- 优先使用socket进行通信
- 支持一个用户多个连接
- 使用MessagePack进行传输
- 使用Redis作为底板来支持横向扩展
- 使用.net core



## 使用汇总
类型      |      组       |       描述
-|-|-|-
项目中心    | projectId为组名 |包含菜单待办数量、我的任务列表页面、我关注的任务列表页、记得管理列表页等
超时退出    | 无组            |指定用户进行推送
聊天        | -               |   

## 使用方式
``` C#
// 创建推送对象
var send = new Send()
{
    // 推送的组，多个用,隔开
    GroupId = GroupId,
    // 关联的UserId 多个用,隔开
    UserIds= UserIds,
    // 是否排除用户
    ExcludeUsers=ExcludeUsers,
    // 实际推送的对象
    NotifyObj = new NotifyObj()
    {
        Data = Data,
        NotifyType = NotifyType,
        OpType= OpType
    },
};
HubContext.PushNotify(send);
```

## 游戏规则

* 有GroupId
  * ExcludeUsers=true
    推送给指定的组中所有用户(排除掉UserIds部分)

  * ExcludeUsers=false
    推送给组中指定(UserIds中指定的)的这些用户

* 无GroupId
  * ExcludeUsers=true
    推送给当前所有连接(排除掉UserIds部分的用户)

  * ExcludeUsers=false
    推送给指定用户(UserIds中指定的用户)
