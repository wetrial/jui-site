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

```js
utils.initAutoTextarea(container,height)
```
>当不传入参数，直接调用方法时，会给页面内所有带有`data-auto-textarea="true"`属性的文本域进行自适应高度处理，传入`container`参数时则不需要单独给文本域添加属性

参数|类型|是否必须|注释
-|-|-|-
container|object|否|传入此参数，且不为'auto'的时候，代表将此对象容器下所有文本域进行高度自适应处理
height|number|否|文本域最大高度，超过指定高度以后内部出现滚动条



### 2. Collapse按钮添加箭头状态
给控制折叠内容的按钮内部添加小箭头，表示折叠、展开状态

```js
utils.switchCollapseBtn()
```
>- 在dataBound事件当中调用；
- 如果内容默认是展开，则要给按钮添加`opened`类



### 3. 日期格式化
日期格式化

```js
utils.fn.formatDate(utc,str,format)
```
参数|类型|是否必须|注释
-|-|-|-
utc|boolean|否|传`true`代表输出utc时间，否则请传`false`或者不传
str|string|是|目标字段
format|string|是|想要输出的格式,例如(yyyy MM dd hh:mm:ss)



### 3. 金额格式化
金额格式化

```js
utils.fn.formatCurrency(num,v)
```
参数|类型|是否必须|注释
-|-|-|-
num|string|是|要格式化的值
v|number|是|保留小数位数,默认为2



### 4. 数字格式化
数字格式化

```js
utils.fn.formatNumber(num,v)
```
参数|类型|是否必须|注释
-|-|-|-
num|string|是|要格式化的值
v|number|是|保留小数位数,默认为1



### 5. 从数组中移除指定key值的项
从数组中移除指定key的值=value的项

```js
 utils.fn.arrRemove(arr,key,value)
```
参数|类型|是否必须|注释
-|-|-|-
arr|array|是|目标数组
key|string|是|指定的属性，例如key:'id'
value|string|是|指定的值