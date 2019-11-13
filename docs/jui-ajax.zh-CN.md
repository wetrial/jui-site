---
order: 6
title: ajax
type: jui相关
---

## 使用场景
ajax用法

### ---jui.ajax(项目中心)
#### 1. 基本用法

```
jui.post(object)
```
```
jui.postJson(object)
```
```
jui.getJson(object)
```
## 2. 配置项

配置项|类型|默认值|注释
-|-|-|-
method|string|-|请求方式
url|string|-|请求URL
data|object|-|数据
crypto|number|-|1:请求内容加密 2:响应内容是否加密  4:请求和响应都加密
success|function|-|成功的回调
loading|boolean|-|显示loading效果

### ---utils.ajax(组织端)
#### 1. 基本用法


```
utils.ajax.post(options)
```

```
utils.ajax.postWithNoMsg(options)
```

```
utils.ajax.postJson(options)
```

## 2. 配置项

配置项|类型|默认值|注释
-|-|-|-
url|string|-|请求URL
data|object|-|数据
crypto|number|-|1:请求内容加密 2:响应内容是否加密  4:请求和响应都加密
success|function|-|成功的回调
loading|boolean|`true`|显示loading效果