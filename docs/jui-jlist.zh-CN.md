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

| 参数           | 类型                    | 是否必须 | 默认值                                                                                                                | 注释                                                        |
| -------------- | ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| url            | String                  | 是       | 无                                                                                                                    | 表格接口的 url                                              |
| dataFunc       | function(date: moment） | 否       | 无                                                                                                                    | 数据的回调                                                  |
| filter         | Object                  | 否       | 无                                                                                                                    | 过滤器                                                      |
| autoBind       | Number                  | 否       | 无                                                                                                                    | 是否显示列表                                                |
| delayLoad      | Boolean                 | 否       | false                                                                                                                 |                                                             |
| type           |                         | 否       | `'normal'`                                                                                                            |                                                             |
| theme          |                         | 否       | 无                                                                                                                    |                                                             |
| method         | String                  | 否       | POST                                                                                                                  | 请求方法                                                    |
| fields         | Object                  | 否       | `{key: 'Id',total: 'TotalItems',items: 'Items'}`                                                                      |                                                             |
| templates      | Object                  | 是       | 无                                                                                                                    | `{layout:"",item："DOM元素",edit:"",empty:"",lastAddOn:""}` |
| pageable       | Object                  | 否       | 无                                                                                                                    | `{enableStoreParams:false - 是否存储搜索记录,...}`          |
| crypto         | Number                  | 否       | 无                                                                                                                    | 1:请求内容加密 2:响应内容是否加密 4:请求和响应都加密        |
| selectable     | Object                  | 否       | `{multiple: false,cascade: true,onlyleaf: true,selectOnClick: true,singleSelectCanRevert: false,checkAllElem: false}` |                                                             |
| loading        | Object                  | 否       | `{ modal: true, autoShow: true }`                                                                                     | 当卡片内容还在加载中时，可以用 loading 展示一个占位         |
| buildItemData  | function(date: moment） | 否       | 无                                                                                                                    | 当前元素列的 DOM 元素                                       |
| itemConverter  | function(date: moment） | 否       | 无                                                                                                                    |                                                             |
| dataConverter  | function(date: moment） | 否       | 无                                                                                                                    |                                                             |
| enablePageSort | Number                  | 否       | false                                                                                                                 | 是否允许排序                                                |
| pageSort       | Object                  | 否       | `{enable: false,class:'fa-sort', // 正常情况ascClass: 'fa-sort-asc', // 升序 descClass:'fa-sort-desc' // 倒序}`       | 排序顺序                                                    |
