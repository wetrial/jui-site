---
order: 7
title: jlistMenu菜单
type: jui相关
---

## 使用场景

展示行列数据。

### 代码展示

##### 使用方法

```js
$("绑定的元素").jlistMenu({ 需传递的参数 });
```

##依赖项

[list 列表](http://docs/jui-jlist-cn)

## 参数

| 参数       | 类型   | 是否必须 | 默认值                                                               | 注释                                                                                                                                                                                     |
| ---------- | ------ | -------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| itemTmpl   | String | 否       | 无                                                                   | 菜单 DOM 元素                                                                                                                                                                            |
| mode       | String | 否       | `'v'`                                                                | 展示方法/v：一列，h：两列                                                                                                                                                                |
| tree       | Object | 否       | 看下面 tree(Object)树形参数                                          | 参考下面 tree(Object)树形参数                                                                                                                                                            |
| type       | String | 否       | `'tree'`                                                             | 'tree'树形,'normal'表格                                                                                                                                                                  |
| theme      | String | 否       | 无                                                                   | 给列表添加 class                                                                                                                                                                         |
| selectable | Object | 否       | `{multiple: false,cascade: true,onlyleaf: true,selectOnClick: true}` | multiple/是否可以多选(需添加 checkAllElem 值才有效详情查看 jlist 的 selectable 参数) -- cascade/是否连级选择 -- onlyleaf/若是树节点表示是否只能选择当前节点 -- selectOnClick/是否点击整条列表选中 |

## tree(Object)树形参数

| 参数 | 类型 | 是否必须 | 默认值 | 注释 |
| ---- | ---- | -------- | ------ | ---- |


| isListData | Boolean | 否 | false | 是否设置结构为树形 |
| indent | Number | 否 | 16 | 设置列表 padding-left 像素值 |
| initCollapseLevel | Number | 否 | false | |
| fields | Object | 否 | `{ children: 'Children',parentKey: 'ParentId'` | children/子列的 parentKey/父级 Id 的 key |
| toggleOnClick | Boolean | 否 | false | 是否固定某列高亮显示(当前列要有.jlist-item-toggle 或者当前元素无.jlist-item-leaf&&toggleOnClick) |
| templates | Object | 否 | `children: '<ul></ul>',itemWrapper: '<li></li>'` | 设置标签 |
