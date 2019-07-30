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

