---
order: 3
title: jlist列表
type: jui相关
---

## 使用场景

通用列表。

### 代码展示

##### 使用方法

```js
$("绑定的元素").jlist({ 需传递的参数 });
```

##依赖项

[utils 辅助方法](http://docs/jui-utils-cn)

[pager 分页](http://docs/jui-jpager-cn)

## 参数

| 参数           | 类型                    | 是否必须 | 默认值                                                                                                                | 注释                                                                                                                                                                                                                                                    |
| -------------- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url            | String                  | 否       | 无                                                                                                                    | 表格接口的 url                                                                                                                                                                                                                                          |
| dataFunc       | function(date: moment） | 否       | 无                                                                                                                    | 数据                                                                                                                                                                                                                                                    |
| filter         | Object                  | 否       | 无                                                                                                                    | 过滤器                                                                                                                                                                                                                                                  |
| autoBind       | Boolean                 | 否       | 无                                                                                                                    | 是否手动加载数据                                                                                                                                                                                                                                        |
| delayLoad      | Boolean                 | 否       | false                                                                                                                 | 是否延迟加载子节点的数据                                                                                                                                                                                                                                |
| type           | String                  | 否       | `'normal'`                                                                                                            | 'tree'树形,'normal'表格                                                                                                                                                                                                                                 |
| theme          | String                  | 否       | 无                                                                                                                    | 给列表添加 class                                                                                                                                                                                                                                        |
| method         | String                  | 否       | POST                                                                                                                  | 请求方法                                                                                                                                                                                                                                                |
| fields         | Object                  | 否       | `{key: 'Id',total: 'TotalItems',items: 'Items'}`                                                                      | key/当前列数据的 Id,total/当前数据的总条数的 key,items/当前数据的 key                                                                                                                                                                                   |
| templates      | Object                  | 是       | 无                                                                                                                    | `{layout:"",item："DOM元素",edit:"",empty:"",lastAddOn:""}`                                                                                                                                                                                             |
| pageable       | Object                  | 否       | 无                                                                                                                    | `{enableStoreParams:false - 是否存储搜索记录,...}`                                                                                                                                                                                                      |
| crypto         | Number                  | 否       | 无                                                                                                                    | 1:请求内容加密 2:响应内容是否加密 4:请求和响应都加密                                                                                                                                                                                                    |
| selectable     | Object                  | 否       | `{multiple: false,cascade: true,onlyleaf: true,selectOnClick: true,singleSelectCanRevert: false,checkAllElem: false}` | multiple/是否可以多选 -- cascade/是否连级选择 -- onlyleaf/若是树节点表示是否只能选择当前节点 -- selectOnClick/是否点击整条列表选中 -- singleSelectCanRevert/是否可取消选中的列表 -- checkAllElem/全选选择器(String)(只有 multiple 为 true 的时候才有效) |
| loading        | Object                  | 否       | `{ modal: true, autoShow: true }`                                                                                     | 当卡片内容还在加载中时，可以用 loading 展示一个占位                                                                                                                                                                                                     |
| buildItemData  | function(date: moment） | 否       | 无                                                                                                                    | 当前元素列的 DOM 元素                                                                                                                                                                                                                                   |
| itemConverter  | function(date: moment） | 否       | 无                                                                                                                    | 数据转换器                                                                                                                                                                                                                                              |
| enablePageSort | Number                  | 否       | false                                                                                                                 | 是否允许排序                                                                                                                                                                                                                                            |
| pageSort       | Object                  | 否       | `{enable: false,class:'fa-sort', // 正常情况ascClass: 'fa-sort-asc', // 升序 descClass:'fa-sort-desc' // 倒序}`       | 排序顺序                                                                                                                                                                                                                                                |
| tree           | Object                  | 否       | 看下面 tree(Object)树形参数                                                                                           | 参考下面 tree(Object)树形参数                                                                                                                                                                                                                           |

## tree(Object)树形参数

| 参数              | 类型    | 是否必须 | 默认值                                             | 注释                                                                                             |
| ----------------- | ------- | -------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| isListData        | Boolean | 否       | false                                              | 是否设置结构为树形                                                                               |
| indent            | Number  | 否       | 16                                                 | 设置列表 padding-left 像素值                                                                     |
| initCollapseLevel | Number  | 否       | false                                              | 控制默认展开的目录层级(默认全部展开,0 和 false 一样)                                             |
| fields            | Object  | 否       | `{children: 'Children',parentKey: 'ParentId'}`     | children/子列的 parentKey/父级 Id 的 key                                                         |
| toggleOnClick     | Boolean | 否       | false                                              | 是否固定某列高亮显示(当前列要有.jlist-item-toggle 或者当前元素无.jlist-item-leaf&&toggleOnClick) |
| popChildren       | Boolean | 否       | false                                              | 子级的显示状况（下面示例）                                                                       |
| popTriggerType    | String  | 否       | `'click'`                                          | 触发方式，默认点击                                                                               |
| popAppendTo       | String  | 否       | `'body'`                                           | 依附的父容器                                                                                     |
| templates         | Object  | 否       | `{subItem: null,children: null,itemWrapper: null}` | 设置标签                                                                                         |

- popChildren 示例

```
  $item.jpop({
               layerElem: $children(子级),
               triggerType: popTriggerType,
               layer: { appendTo: popAppendTo }
            });
```
