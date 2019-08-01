---
order: 5
title: jpager分页
type: jui相关
---

## 使用场景

采用分页的形式分隔长列表，每次只加载一个页面。

### 代码展示

##### 使用方法

```js
$("绑定的元素").jpager({ 需传递的参数 });
```

## 参数

| 参数           | 类型                    | 是否必须 | 默认值                                                                                     | 注释       |
| -------------- | ----------------------- | -------- | ------------------------------------------------------------------------------------------ | ---------- |
| pageIndex      | Number                  | 否       | 1                                                                                          | 当前页数   |
| pageSize       | Number                  | 否       | 10                                                                                         | 每页条数   |
| total          | Number                  | 否       | 0                                                                                          | 数据总数   |
| fields         | Object                  | 否       | `{pageIndex: "pageIndex",pageSize: "pageSize"},`                                           | 字段名     |
| prevShowAlways | Number                  | 否       | true                                                                                       | 显示上一页 |
| nextShowAlways | Number                  | 否       | true                                                                                       | 显示下一页 |
| texts          | function(date: moment） | 否       | `{info: '每页{{pageSize}}条，共{{total}}条',prev: "上一页",next: "下一页",ellipse: "..."}` | 文案       |
