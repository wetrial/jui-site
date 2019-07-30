---
order: 8
title: jselect选择器
type: jui相关
---

## 使用场景

下拉选择器。

### 代码展示

##### 使用方法

```js
$("绑定的元素").jselect({ 需传递的参数 });
```

##依赖项

[list 列表](http://docs/jui-jlist-cn)

## 参数

| 参数              | 类型    | 是否必须 | 默认值                                                                                                                                                                                                                              | 注释                                                                                                             |
| ----------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| fields            | Object  | 否       | `{text: "text",value: "value",filter: "q"}`                                                                                                                                                                                         | 需渲染的值字段名                                                                                                 |
| departDataSource  | Boolean | 否       | false                                                                                                                                                                                                                               | 是否显示默认值                                                                                                   |
| value             | Number  | 否       | 无                                                                                                                                                                                                                                  | 默认条目（对映数据的 key 值）                                                                                    |  |
| sourceList        | Object  | 否       | `{method: 'GET',templates: {item: '<li><a class="hbox-fit jlist-item-clk" href="javascript:;"><span class="col-fit">{{text}}</span><i class="jlist-item-checker"></i></a></li>'},theme: 'jlist-menu jlist-menu-default jlist-hl'},` | 请求的方式/未选的条目/选择器的 DOM 元素                                                                          |
| selectedList      | Object  | 否       | `{templates: {item: '<li>{{text}}</li>'}`                                                                                                                                                                                           | 已选的条目                                                                                                       |
| singleTemplate    | String  | 否       | `{{text}}`                                                                                                                                                                                                                          | 给`<div class="jselect-display-single"></div>`添加渲染的值的字段名                                               |
| multiple          | Boolean | 否       | false                                                                                                                                                                                                                               | 是否多选                                                                                                         |
| showArrow         | Boolean | 否       | true                                                                                                                                                                                                                                | 是否显示下拉小箭头                                                                                               |
| pop               | Object  | 否       | `{layer: {fitElem: '.jselect-list'//class值 ,size: {maxHeight: 'fit' String //自动填充满高度}}}`                                                                                                                                    | maxHeight 固定值是 Number 类型                                                                                   |
| searchPlaceholder | String  | 否       | 无                                                                                                                                                                                                                                  | 给搜索的 input 添加 placeholder 值                                                                               |
| remoteSearch      | Boolean | 否       | false                                                                                                                                                                                                                               | 是否显示搜索框（若 remoteSearch 为 false 当 minItemsForSearch!=-1&&列表长度>minItemsForSearch 时也会显示搜索框） |
| autocomplete      | Booean  | 否       | true                                                                                                                                                                                                                                | 是否显示搜索按钮                                                                                                 |
| minItemsForSearch | Number  | 否       | 20                                                                                                                                                                                                                                  | 设置数据长度决定是否显示搜索框（参考 remoteSearch 参数）                                                         |
| delay             | Number  | 否       | 300                                                                                                                                                                                                                                 | 定时器时间                                                                                                       |
