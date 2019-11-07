---
order: 2
title: 伦理表单设计
type: 业务功能
---

## 使用场景
表单配置页面

## 功能介绍
- 文本框
- 大文本框
- 单选
- 复选框
- 下拉框
- 日期
- 重复表单、重复表格


## 表单配置页面使用方式
具体代码可以参考[http://xysis.wetrial.vip/StudySite/OrgnizationConfig/FormDesign?oid=526337254121701595](http://xysis.wetrial.vip/StudySite/OrgnizationConfig/FormDesign?oid=526337254121701595)
- 引入相关js
``` C#
Html.AddScriptFile("~/Assets/js/ueditor/ueditor.config.js?v=" +   CTS.Infrastructure.AppVersionHelper.Version);
Html.AddScriptFile("~/Assets/js/ueditor/ueditor.all.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
Html.AddScriptFile("~/Assets/js/WorkFlowForm/ueditorPlugins.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
Html.AddScriptFile("~/Assets/js/views/Common/form-design.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
```

- 初始化
``` js
var ueInstance;
    $(function () {
        var designHelper = new formDesignHelper();
        ueInstance = UE.getEditor('editor', {
           // 全局绑定对象
            globalBinds: [
                 { key: 'SponsorName', label: '申办方' },
                 { key: 'ProjectName', label: '项目名称' },
                 { key: 'ProjectNO', label: '项目编号' },
                 { key: 'StudyTitle', label: '研究标题' },
                 { key: 'Random', label: '随机化' }
             ],
             zIndex:210,
             toolbars: designHelper.toolbars,
             contextMenu:designHelper.contextMenu,
             wordCount: false,
             maximumWords: 1000000000,
             autoHeightEnabled: true,
             whitList: { span: ['class', 'style', 'data-ue-ele', 'data-ue-id','data-ue-config'] },
             removeFormatTags: 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,strike,strong,sub,sup,tt,u,var',
             onready: function () {
                // 为配置页设置内容
                 this.setContent('')
             }
         });
         resize();

          // 设置高度
         function resize() {
             $("#editor").height($(window).height() - 300);
             $("#editor").width($("#editor-container").width() - 20);
         }
     });
```

## 渲染页面使用方式
- 引入css 
``` C#
@using (Html.BeginStyleContext())
{
    Html.AddStyleFile("~/Assets/css/app/ueditor-form-design.css?v=" + CTS.Infrastructure.AppVersionHelper.Version);
}
```
- 引入js
``` C#
Html.AddScriptFile("~/Assets/js/views/Common/form-design.js?v=" + CTS.Infrastructure.AppVersionHelper.Version);
```

- 代码示例
``` js
// 创建表单辅助方法
var designHelper = new formDesignHelper();
var $container = $("#formRender");
// 渲染
designHelper.render({
    target: $container,
    isEdit: false,
    // 页面基础参数，会在查询自定义数据源的时候传递过去
    baseParams: {
        id: 'test',
        name:'xxg'
    },
    // 全局数据源 可缺省
    getGlobalData: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    ProjectNO: '项目编号',
                    ProjectName: '项目名称01',
                    SponsorName: '申办方名称',
                    StudyTitle: 'StudyTitle1111',
                    Random:1
                })
            }, 2000)
        })
        //return utils.ajax.request({
        //    crypto: 2,
        //    url: '/BEProjectCenter/BEProject/GetProjectBase?appid=593708226937351785',
        //    data: {
        //        projectId: '593708226937351785',
        //        orgProjectId: '593708226967016918'
        //    }
        //}).then(result => {
        //    return result.Data;
        //})
    },
    // model 数据源 可缺省
    getModel: function () {
        return utils.ajax.request({
            url: '/Common/WorkFlowForm/GetDataDicts',
            data: {
                codes: ['Blinding']
            }
        })
    },
    bounded: function () {
        // 组件初始化等操作
        utils.initDatePicker();
        utils.initDateTimePicker();
        designHelper.setFormDefaultOnValidated($container)
    }
});

$("#btnSave").on('click', function () {
    if ($container.valid()) {
        designHelper.setFormValue($container)
        $container.html();

    }
})
```

## 潜规则
- 重复表单，如果是列表形式(即:展示table)
如果下方有模板表格，则使用模板表格作为模板，否则自动创建
