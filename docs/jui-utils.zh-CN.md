---
order: 1
title: utils辅助方法
type: jui相关
---

## 使用场景
CTMS、项目中心框架的一些公用方法。


## 公共方法

### 1. 文本域自动适应内容高度
使Textarea在输入内容时可以自动增加高度，在只读模式中能根据内容高度自动拉伸

``` js
utils.initAutoTextarea(container,height)
```
>当不传入参数，直接调用方法时，会给页面内所有带有`data-auto-textarea="true"`属性的文本域进行自适应高度处理，传入`container`参数时则不需要单独给文本域添加属性

参数|类型|是否必须|注释
-|-|-|-
container|object|否|传入此参数，且不为'auto'的时候，代表将此对象容器下所有文本域进行高度自适应处理
height|number|否|文本域最大高度，超过指定高度以后内部出现滚动条

