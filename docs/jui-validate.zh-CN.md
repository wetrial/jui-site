---
order: 9
title: validate表单校验
type: jui相关
---

## 使用场景

数据校验

### 代码展示

##### 使用方法

```js
<input year_month="true">
<input max_length="20">
也支持jQuery的validation
```
参数|类型|是否必须|注释
-|-|-|-
telePhone|boolean|-|座机电话
naturalNumber|boolean|-|非负整数检查
isFileFormat|boolean|-|文件格式检查
numberPostfix|boolean|-|小数位数检查
limintInteger|boolean|-|limintInteger
english|boolean|-|字母和-检查
phone|boolean|-|手机检查
mobile|boolean|-|手机号码检查
fax|boolean|-|传真号码检查
telormobile|boolean|-|电话号码或者手机
islongdatetime|boolean|-|日期格式(xxxx-xx-xx xx:xx)
islongdatetimeNA|boolean|-|日期格式带NA(xxxx-xx-xx)
isDateTime|boolean|-|日期格式(xxxx-xx-xx)
isDateTimeNA|boolean|-|日期格式带NA(xxxx-xx-xx)
idCard|boolean|-|身份证号码
max_length|string|-|最大长度
min_length|string|-|最小长度
isGtZero|boolean|-|大于0或等于0
noHtmlTag|boolean|-|不能含有脚本标签
match|string|-|只能输入1-4位数字可带1位小数及其它
isfloat|boolean|-|浮点数
year_month|boolean|-|年月
maxNumberIntlength|string|-|整数部分最多少位数
remote|?|是|远程校验
compare|`<input compare="表单元素" data-compare-type=">，>=，<，<=" data-compare-message="提示语" />`|是|表单计较（例如开始时间不能小于结束时间）