---
order: 2
title: 推送相关
type: 业务功能
---

## 使用场景
项目中需要从服务器端推送给客服端的情况。

## 注意事项
由于推送系统推送频率比较高，强烈建议实现功能的时候只推类型，不推送具体的业务数据；  

> 以发私信为例
张三给李四发了站内消息，服务器端应该是给李四推送了一个 收消息的类型，然后在李四的客户端根据类型去调用api去刷新消息列表、消息数量等，而不是查询出李四的消息列表、消息数量推送给李四



## 改进部分
- 优先使用socket进行通信
- 支持一个用户多个连接
- 使用MessagePack进行传输
- 使用Redis作为底板来支持横向扩展
- 使用.net core


## 使用方式

### 给指定人推送
``` C#
// 给指定人推送
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

### 给指定连接推送
> 应用场景,比如:文件后台打包下载，那么下载的时候应该只推给当前操作的tab页，而不是当前用户
``` C#
var send=new SendConnects(){
  // 用户Id，单个
  UserId="",
  // 连接Id，单个
  ConnectionId="",
  // 是否排除指定连接Id
  ExcludeConnectId=false,
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

### Send
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

### SendConnects
* 有UserId
  * ExcludeConnectId=true
    给改用户除指定的ConnectId外的所有连接端推送
  * ExcludeConnectId=false
    跟没指定UserId一致
* 无UserId
  给指定连接Id推送


## Signalr提供的api
- POST /api/Notify/Post
formdata提交，数据如下
``` json
{
  GroupIds:'', // [可空] 组id集合，多个用,隔开
  UserIds:'',// [可空] 用户id集合，多个用,隔开
  ExcludeUsers:boolean, // 是否排除用户列表中的用户
  NotifyObj:Object // 通知的对象，任意类型(强烈建议:总大小不要超过1k)
}
```

- POST /api/Notify/PostConnects
formdata提交，数据如下
``` json
{
  Connects:'', // 连接Id集合，多个用，隔开
  NotifyObj:Object // 通知的对象，任意类型(强烈建议:总大小不要超过1k)
}
```

- GET /api/Users   
获取连接的所有用户Id列表
- GET /api/groups  
获取连接的所有组名称列表
