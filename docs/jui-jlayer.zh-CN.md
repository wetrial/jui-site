---
order: 1
title: Jlayer相关用法
type: jui相关
---

## 使用场景
弹出层相关方法



## 1. 基本用法

- 基本弹出层

```
$(selector).jlayer(options)
```



## 2. 常用方法

```
$(selector).jlayer('close') //关闭层
$(selector).jlayer('hide') //隐藏层
$(selector).jlayer('show') //显示层
$(selector).jlayer('setSize') //重新计算尺寸
$(selector).jlayer('setPosition') //重新计算位置
$(selector).jlayer('isShown') //返回一个布尔值，判断是否已显示
```




## 3. 配置项

配置项|类型|默认值|注释
-|-|-|-
autoRender|boolean|`false`|自动渲染DOM结构
autoShow|boolean|`true`|自动显示
alwaysExist|boolean|`false`|关闭后不销毁结构
appendTo|selector|`body`|依附的父容器
insertAfter|selector|`null`|插入在指定元素之后
attachTo|selector|`null`|-
theme|string|`null`|主题class
modal|boolean|`false`|是否模态框
closeOnClickBackdrop|boolean|`false`|是否点击背景部分触发关闭
backdropBackground|string|`#3e4d45`|背景部分的十六进制色值
backdropOpacity|string|`0.8`|背景部分不透明度，范围0-1
hideOnClickDoc|boolean|`false`|是否点击空白文档区域触发隐藏
closeOnClickDoc|boolean|`false`|是否点击空白文档区域触发关闭
show|string|`fadeIn`|进入效果，对应jquery fadeIn
hide|string|`fadeOut`|退出效果，对应jquery fadeOut
contentContainerElem|string|`.jlayer-content`|内容容器类名
fitElem|selector||自适应高度的容器
position|object|`null`|定位，详见下方示例
size|object|-|尺寸，详见下方示例
content|object|-|内容，详见下方示例

- 定义位置

```
position: {
    my: "center top", //弹出层的参照坐标
    at: "center top", //目标的参照坐标
    of: window, //目标
    collision: "fit", //
},
```


- 定义尺寸

```
size: {
    width: 'auto', //宽度
    height: 'auto', //高度
    minWidth: 'none', //最小宽度
    minHeight: 'none', //最小高度
    maxWidth: 'none', //最大宽度
    maxHeight: 'none' //最大高度
},
```


- 定义内容

```
content: {
    url: '',
    urlQuery: '',
    dataUrl: '',//ajax数据请求
    dataFunc:null,//处理ajax返回的数据
    template: '',
    elem: null,
    data: null,
    cache: true
}
```




