---
order: 1
title: 加密传输
type: 基础
---

## 前言
为了防止敏感信息在传输过程中泄露，采取对称加解密的方式

## 前端加解密

#### 增加配置项 crypto:1|2|4    1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
> 注: 加密仅针对post的data，url上的不会进行加密，正对系统参数，如:(oid,appid等) 建议保持原状以queryString形式附带
``` js
// 整队jlistGrid同样适用
$("#list").jlist({
    url:'.....',
    crypto:2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
})
```

### 1. 项目中心端
- ajax方法
针对 jui.post、jui.postJson、jui.getJson、$.fn.postForm,如果页面上直接通过$.ajax写法的需要改成jui中的ajax方法
``` js
$.jui.post({
    url:'',
    crypto:1 // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
})
```
- jlayer、jpop组件
``` js
$item.jpop({
    triggerType: 'hover',
    layer: {
        appendTo: '._slidePageView',
        content: {
            dataUrl: '/Common/UserInfo/GetUserInfoById/' + ui.itemData.UserId,
            crypto: 2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
            dataFunc: function (responseData) {
                return $.extend(true, responseData.Data);
            },
            template: "UserInfoTpl"
        }
    }
});
$item.layer({
    // appendTo: '._slidePageView',
    content: {
        dataUrl: '/Common/UserInfo/GetUserInfoById/' + ui.itemData.UserId,
        crypto: 2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
        dataFunc: function (responseData) {
            return $.extend(true, responseData.Data);
        },
        template: "UserInfoTpl"
    }
});
```
### 2. SIS端(机构、申办方、伦理等)
>   如果发现缺失引用，可以自行引入如下文件
    Html.AddScriptFile("~/Assets/js/jsencrypt.min.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
    Html.AddScriptFile("~/Scripts/RsaKey?v=" + CTS.Infrastructure.AppVersionHelper.Version);
    Html.AddScriptFile("~/Assets/js/common/RSAEncrypt.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
    Html.AddScriptFile("~/bundles/jui?v=" + CTS.Infrastructure.AppVersionHelper.Version);
* ajax 方法相关(utils.ajax.postJson、utils.ajax.postWithNoMsg、utils.ajax.post 如果有遇到使用$.ajax调用的，请改为如下方法)  
> 由于之前的ajax相关方法设计问题，增加替换方法，原则上所有使用如下方法的地方都可以用后者代替  
utils.post==> 使用utils.ajax.post 代替  
utils.postWithNoMsg==> 使用utils.ajax.postWithNoMsg 代替  
utils.postJson==> 使用utils.ajax.postJson 代替  
``` js
// example
utils.ajax.post({
    url:'', // 对应第一个参数
    data:{}, // 【可选】 对应第二个参数
    crypto:2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
    success:function(result){},//【可选】 对应第三个参数
    error:function(result){},//【可选】 对应第四个参数
})
// example
utils.ajax.postWithNoMsg({
    url:'',// 对应第一个参数
    data:{}, // 【可选】 对应第二个参数
    crypto:2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密  
    success:function(result){}, //【可选】 对应第三个参数
    error:function(result){}, //【可选】对应第四个参数
    loading:false //【可选】 对应之前方法中的第五个参数
})
// example
utils.ajax.postJson({
    url:'', // 对应第一个参数
    data:{}, // 【可选】 对应第二个参数
    crypto:2, // 1:仅请求内容需要加密、2:仅响应内容需要解密 4：请求内容加密、响应内容需要解密
    success:function(result){}, //【可选】 对应第三个参数
    error:function(result){} //【可选】对应第四个参数
})
```

## 后端加解密


### 1. 请求内容加密
在对应的Action上贴上[DecryptRequestFilter]即可
``` C#
[DecryptRequestFilter]
public ActionResult Save(User user){
    
}
```
### 2. 响应内容加密
在对应的Action上贴上[EncryptResponseFilter]即可
``` C#
[EncryptResponseFilter]
public ActionResult Query(QueryInput input){
    
}
```
### 3. 请求与响应都加密
在对应的Action上贴上[DecryptRequestFilter]和[EncryptResponseFilter]即可
``` C#
[DecryptRequestFilter]
[EncryptResponseFilter]
public ActionResult Query(QueryInput input){
    
}
```
### 4. 当请求加密DecryptRequestFilter与AutoValidation验证同时使用时，需要指定Order,使DecryptRequestFilter先执行
``` C#
[DecryptRequestFilter(Order = 0)]
[AutoValidation(Order = 1)]
public ActionResult Save(User user)
```
### 5. 后端razor页面
``` c#
// 类似这种写法的
var context = @Html.Raw(Json.Encode(Model));
// 1.项目中心端的写法
var context= '@CTS.Infrastructure.Extensions.StringExtensions.Base64(Json.Encode(Model))';
然后在app.js中，反解析对象
context = JSON.parse(utils.fn.debase64(context));
// 2.sis端的写法 
可以直接 var context = JSON.parse(utils.fn.debase64('@CTS.Infrastructure.Extensions.StringExtensions.Base64(Json.Encode(Model))'));
```


## 显示过程中的加解密

### 针对列表中需要对某些列进行加密展示的
``` js
{{# $helpers.formatSecuredInfo(MobileTelephone,'mobile'[,true])}}   

```


>其中第二个参数必填 'mobile' (手机号) 'mail' (邮箱) 'phone' (电话号码) 'card' (银行卡) 'identity' (身份证号) 'name' (姓名)；
>第三个参数非必填，用来判断是否纯文本展示，true是，false或者无 ，一般用在title显示的情况

>点击解除打码方法：`utils.showSecuredInfo()`建议在dataBound中调用

> 参考地址: http://ctssponsor.wetrial.vip:8008/Sponsor/UserInfo?oid=526337162939974206