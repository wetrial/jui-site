---
order: 6
title: jlistGrid表格
type: jui相关
---

## 使用场景

展示行列数据。

### 代码展示

##### 使用方法

```js
$("绑定的元素").jlistGrid({ 需传递的参数 });
```

##依赖项

[utils 辅助方法](http://docs/jui-utils-cn)

[pager 分页](http://docs/jui-jpager-cn)

[list 列表](http://docs/jui-jlist-cn)

[popup]()

## 参数

| 参数              | 类型          | 是否必须 | 默认值                         | 注释                                   |
| ----------------- | ------------- | -------- | ------------------------------ | -------------------------------------- |
| templates         | Object        | 是       | `{colgroup: null,thead: null}` | 表格的 DOM 元素                        |
| height            | String/Number | 否       | 无                             | 表格的高度('fit'自动填充满高度)        |
| tableStyle        | String        | 否       | 无                             | 表格 DOM 元素                          |
| fixedLeftColumns  | String        | 否       | 无                             | 固定左边的列                           |
| fixedRightColumns | String        | 否       | 无                             | 固定右边的列                           |
| maxHeight         | Number        | 否       | 无                             | 最大高度                               |
| minHeight         | Number        | 否       | 100                            | 最小高度                               |
| scrollToColumn    | Number        | 否       | 无                             | 在有滚动条得状态下显示到固定索引得位置 |
