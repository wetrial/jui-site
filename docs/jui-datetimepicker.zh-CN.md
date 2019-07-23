---
order: 4
title: datepicker日历
type: jui相关
---

## 使用场景

选择年/月/日 或 年月日+时间 或 年+周

### 代码展示

#### ---日期插件

##### 使用方法 1

```js
$("绑定的元素").datepicker({ 需传递的参数 });
```

##### 使用方法 2

```js
在input标签中添加 datepicker="true"/datepicker="True" 属性
例如：
  <input  datepicker="true"  />
调用 utils.initDatePicker({需传递的参数});方法
```

#### ---日期+时间插件

##### 使用方法 1

```js
$("绑定的元素").datetimepicker({ 需传递的参数 });
```

##### 使用方法 2

```js
在input标签中添加 datetimepicker="true"/datetimepicker="True" 属性
例如：
  <input  datetimepicker="true"  />
调用 utils.initDateTimePicker({需传递的参数});方法
```

#### ---年+周（哪一年的第几周）

##### 使用方法

```js
$("绑定的元素").weekpicker({ 需传递的参数 });
```

#### ---开始日期~结束日期

##### 使用方法

```js
$("绑定的元素").daterangepicker({ 需传递的参数 });
```

## 参数

| 参数              | 类型                    | 是否必须 | 默认值     | 注释                                                                                         |
| ----------------- | ----------------------- | -------- | ---------- | -------------------------------------------------------------------------------------------- |
| showDate          | Boolean                 | 否       | true       | 是否显示日期                                                                                 |
| showTime          | Boolean                 | 否       | true       | 是否显示时间                                                                                 |
| yearRangeValue    | Array                   | 否       | `[100,50]` | 当前显示的年的范围，索引 0 的表示需显示多少个大于当前年的年范围，索引 1 的表示需显示多少个年 |
| onSelect          | function(date: moment） | 否       | 无         | 点击选择日期回调                                                                             |
| appendTo          | String                  | 否       | 无         | 容器定位                                                                                     |
| clearText         | String                  | 否       | "清空"     | 清空输入框文案                                                                               |
| closeText         | String                  | 否       | "关闭"     | 关闭日历框文案                                                                               |
| todayText         | String                  | 否       | "今天"     | 提示日期文案                                                                                 |
| showTrigger       | String                  | 否       | 无         | 除点击日历栏然后关闭日历若传递了 showTrigger 就可控制点击关闭的范围                          |
| mode              | String                  | 否       | "data"     | data-年月日，yearMonth-年月（日默认为 01），yearOnly-年                                      |
| weekSelected      | function(date: moment） | 否       | 无         | weekpicker 的返回周的开始时间和结束时间                                                      |
| onSelectStartDate | function(date: moment） | 否       | 无         | daterangepicker 的开始日期回调                                                               |
| onSelectEndDate   | function(date: moment） | 否       | 无         | daterangepicker 的结束日期回调                                                               |
