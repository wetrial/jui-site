---
order: 1
title: utils辅助方法
type: jui相关
---

## 使用场景
CTMS、项目中心框架的一些公用方法。



## 一般

### 1. 文本域自动适应内容高度
使Textarea在输入内容时可以自动增加高度，在只读模式中能根据内容高度自动拉伸

```js
utils.initAutoTextarea(container, height)
```
>- 当不传入参数，直接调用方法时，会给页面内所有带有`data-auto-textarea="true"`属性的文本域进行自适应高度处理，传入`container`参数时则不需要单独给文本域添加属性；
- 在dataBound事件当中调用

参数|类型|是否必须|注释
-|-|-|-
container|object|否|传入此参数，且不为'auto'的时候，代表将此对象容器下所有文本域进行高度自适应处理
height|number|否|文本域最大高度，超过指定高度以后内部出现滚动条



### 2. Collapse按钮添加箭头状态
给控制折叠内容的按钮内部添加小箭头，表示折叠、展开状态

```js
utils.switchCollapseBtn()
```
>- 如果内容默认是展开，则要给按钮添加`opened`类；
- 在dataBound事件当中调用


## 数据格式化

### 1. 日期格式化
日期格式化

```js
utils.fn.formatDate(utc, str, format)
```
参数|类型|是否必须|注释
-|-|-|-
utc|boolean|否|传`true`代表输出utc时间，否则请传`false`或者不传
str|string|是|目标字段
format|string|是|想要输出的格式,例如(yyyy MM dd hh:mm:ss)



### 2. 金额格式化
金额格式化

```js
utils.fn.formatCurrency(num, v)
```
参数|类型|是否必须|注释
-|-|-|-
num|string|是|要格式化的值
v|number|是|保留小数位数,默认为2



### 3. 数字格式化
数字格式化

```js
utils.fn.formatNumber(num, v)
```
参数|类型|是否必须|注释
-|-|-|-
num|string|是|要格式化的值
v|number|是|保留小数位数,默认为1

### 4. 拼接api
数字格式化

```js
utils.fn.format(API, '/', v...)
```
参数|类型|是否必须|注释
-|-|-|-
API|string|是|接口API
/|string|是|默认值
v|any|是|要传递得参数

## 数据操作


### 1. 从数组中移除指定key值的项
从数组中移除指定key的值=value的项

```js
 utils.fn.arrRemove(arr, key, value)
```
参数|类型|是否必须|注释
-|-|-|-
arr|array|是|目标数组
key|string|是|指定的属性，例如key:'id'
value|string|是|指定的值



### 2. 将表单序列化Json
将表单序列化Json

```js
 utils.fn.serializeJson(_filtDisabled, form, filter)
```
参数|类型|是否必须|注释
-|-|-|-
_filtDisabled|boolean|否|是否排除状态为disabled的表单，默认为`true`、不传也为`true`，不想排除的话传`false`
key|selector|是|目标表单
filter|RegExp/array/object|是|过滤器



### 3. 重置表单内容
重置表单内容

```js
 utils.fn.reset(container, callback)
```
参数|类型|是否必须|注释
-|-|-|-
container|selector|是|目标表单
callback|object|否|回调函数


### 4. 合并同名列
合并同名列

```js
  utils.fn.rowSpan(colIdx, container)
```
参数|类型|是否必须|注释
-|-|-|-
colIdx|number|是|目标td的index
container|selector|是|目标表格



### 5. 创建浮动表头
创建浮动表头

```js
  utils.fixHeader(scrollElement, table, offsetElement)
```
参数|类型|是否必须|注释
-|-|-|-
scrollElement|selector|是|浮动表头定位的父容器
table|selector|是|目标表格
offsetElement|selector|是|目标表头



### 6. 合并表格列
合并表格列

```js
  $(selector).mergeCell(options) //根据内容合并表格列

  $(selector).mergeCellAttr(options) //根据属性合并表格列
```
参数|类型|是否必须|注释
-|-|-|-
options|object|是|cols必填，`{ cols:[0] }`，表示想要合并的td索引值数组



### 7. 监控Capslock是否打开
监控Capslock是否打开

```js
  detectCapsLock(event, text)
```
参数|类型|是否必须|注释
-|-|-|-
event|event|否|默认`window.event`
text|string|否|不传则默认提示"大写锁定已开启"

###  数组操作
```js
  utils.fn.updateJsonArray(Object) 
```
参数|类型|是否必须|注释
-|-|-|-
key|string|否|默认`id`
arr|array|是|要操作的数组
item|objct|是|需合并到数组里面的对象
isRemove|boolean|否|默认false/时候合并到数组里面的对象

### 从数组中查询指定key值的项
```js
 utils.fn.arrayFirst(options)
```
参数|类型|是否必须|注释
-|-|-|-
arr|array|是|要操作的数组
key|string|是|'id' 比较的属性
value|string|是|值

### 从指定json数组中获取指定的属性值
```js
  utils.array.arrayGetValue(options)
```
参数|类型|是否必须|注释
-|-|-|-
arr|array|是|要操作的数组
key|string|是|'id' 要获取值的键

### 日期操作
```js
  utils.fn.DateDiff(startTime, endTime, diffType)
```
参数|类型|是否必须|默认值|注释
-|-|-|-
startTime|string|是|-|开始时间
endTime|string|是|-|结束时间
diffType|string|否|`day`|默认`day`获取开始和结束时间中间相差的天数，`second`相差的秒钟，`minute`相差的分钟，`hour`相差的时钟

### 获取DOM元素或ID
```js
  utils.fn.$(str)
```
参数|类型|是否必须|默认值|注释
-|-|-|-
str|string|是|-|需获取得DOM元素或id

### 下载文件
```js
 utils.fn.downloadFile(options)
```
参数|类型|是否必须|默认值|注释
-|-|-|-
url|string|是|-|下载地址
data|object|是|-|要发送的数据
method|string|否|`post`|请求方式

### 回退到上一级菜单(相当于浏览器的回退)
```js
 utils.fn.urlBack(keys, isInclude)
```
参数|类型|是否必须|默认值|注释
-|-|-|-
keys|string|否|`id`|操作的查询键集合
isInclude|boolean|否|false|是否包含指定键

### 滚动到指定位置
```js
  utils.fn.internalScroll(option)
```
参数|类型|是否必须|默认值|注释
-|-|-|-|-
target|string|否|-| 要滚动到的目标对象
scrollContainer|string|否|`.scrollable`|滚动的容器对象 默认为当前对象的上一使用了.scrollable的容器
isHorizontalScroll|boolean|否|false|是否水平滚动
offsetLeft|number|否|0|左偏移距离
offsetTop|number|否|0|顶部偏移距离

### 敏感信息
```js
  utils.formatSecuredInfo(text,type) // 敏感信息打码
  utils.showSecuredInfo();// 显示敏感信息
```
参数|类型|是否必须|默认值|注释
-|-|-|-|-
text|string|是|-| 需打码的值
type|string|是|-| 打码类型(`mobile`手机号,`phone`电话号码,`fax`传真号码,`mail`邮箱,`card`银行卡,`identity`身份证,`name`信息)
