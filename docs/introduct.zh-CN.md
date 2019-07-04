---
order: 1
title: 开始
type: 基础
---

## 文档编写
通过md文件来编写文档

## 文档发布
1. 提交到master分支
2. 打tag(运行一下脚本会自动打tag并推送，触发自动发布功能)
    * yarn patch --patch比如:1.0.1 ==> 1.0.2
    * yarn minor --小版本比如:1.0.1 ==> 1.1.0
    * yarn major --大版本比如:1.0.1 ==> 2.0.0