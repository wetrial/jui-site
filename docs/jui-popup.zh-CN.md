---
order: 5
title: popup
type: jui相关
---

## 使用场景
Popup用法



## 1. 基本用法

- 基本弹出层

```
new Popup({options})
```



## 2. 配置项

配置项|类型|默认值|注释
-|-|-|-
zIndex|number|`1024`|弹框的zindex
modal|boolean|`true`|是否模态框
url|string|`false`|弹出层内容的URL
iframe|boolean|`true`|是否模态框内用iframe，默认是
content|object/string|-|弹出层内容，如果是object则填入object的html()，如果是string则直接填入
fixed|boolean|`false`|为`true`时弹窗fixed定位，否则absolute定位
backdropBackground|string|`#3e4d45`|背景部分十六位色值
backdropOpacity|string|`0.8`|背景部分不透明度
quickClose|boolean|`false`|是否点击空白文档区域触发关闭
padding|number|`0`|padding值
width|string|`auto`|宽度值，默认auto
height|string|`auto`|高度值，默认auto
autoRender|boolean|`false`|自动渲染结构
autoShow|boolean|`true`|自动显示
trigger|selector|`null`|触发器
triggerType|string|`click`|触发方式，默认点击
after|selector|`null`|如果填入则弹出层结构插入在指定元素之后
relativeElem|selector|`false`|-
container|selector|`body`|指定弹出层父容器，默认body
needSetPosition|boolean|`true`|是否在渲染完内容后需要重新计算位置
position|object|-|定位设置，与layer相同，详见下方示例
onloaded|function|`false`|加载完成的回调

- 定义位置

```
position: {
    my: "center top", //弹出层的参照坐标
    at: "center top", //目标的参照坐标
    of: window, //目标
    collision: "fit", //
},
```



## 3. 扩展方法

- 有各自风格样式的模态框型提示框
```
//msg:信息内容,callback：回调，time：延时关闭，不传并且type不是loading的时候，点击关闭
Popup.modalTip.loading(msg)
Popup.modalTip.success(msg, callback, time) 
Popup.modalTip.warning(msg, callback, time) 
Popup.modalTip.close(callback) //关闭提示框并执行回调函数
```

- 有各自风格样式的非模态框型提示框
```
//msg:信息内容,callback：回调，time：延时关闭，不传并且type不是loading的时候，点击关闭
Popup.tip.loading(msg)
Popup.tip.success(msg, callback, delay, time) 
Popup.tip.warning(msg, callback) 
Popup.confirm(title, msg, onConfirm, onCancel) //需要确认的提示框，title:标题，onConfirm：点击确定回调，onCancel：点击取消回调
Popup.alertConfirm(title, msg, onConfirm) //需要确认的警告框，没有取消按钮，title:标题，onConfirm：点击确定回调
```