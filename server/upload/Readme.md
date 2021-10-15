[TOC]



# 1、简介

* 什么是HTML
            告知浏览器如何组织页面的**标记语言​**

* - HTML 指的是超文本标记语言: HyperText Markup Language
  - HTML 不是一种编程语言，而是一种标记语言
  - 标记语言是一套标记标签 (markup tag)
  - HTML 使用标记标签来
  - 描述网页
  - HTML 文档包含了HTML 标签及文本内容
  - HTML文档也叫做 web 页面

---



 

# 2、html基本结构

一个html的基本结构如下：

```html
<!DOCTYPE html>
 <html lang="en">
   <head>      
     <meta charset="UTF-8">
     <title>网页标题</title>
   </head>
   <body>
      网页显示内容
   </body>
 </html>
```

 

第一行是文档声明，

第二行“<html>”标签和最后一行“</html>”定义html文档的整体，“<html>”标签中的‘lang=“en”’定义网页的语言为英文，定义成中文是'lang="zh-CN"',不定义也没什么影响，它一般作为分析统计用。

 

 “<head>”标签和“<body>”标签是它的第一层子元素，“<head>”标签里面负责对网页进行一些设置以及定义标题，设置包括定义网页的编码格式，外链css样式文件和javascript文件等，设置的内容不会显示在网页上，标题的内容会显示在标题栏，“<body>”内编写网页上显示的内容。

# 3、HTML文档类型

目前常用的两种文档类型是xhtml 1.0和html5

* **xhtml 1.0**

xhtml 1.0 是html5之前的一个常用的版本，目前许多网站仍然使用此版本。

此版本文档用sublime text创建方法： html:xt + tab

文档示例：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
 <head>
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
   <title> xhtml 1.0 文档类型 </title>
 </head>
 <body>

</body>
 </html>
```



* **html5**

pc端可以使用xhtml 1.0，也可以使用html5，html5是向下兼容的

此版本文档用sublime text创建方法： html:5 + tab 或者 ! + tab

文档示例：

```html
<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <title> html5文档类型 </title>
 </head>
 <body>

</body>
 </html>
```



* **两种文档的区别**

1、文档声明和编码声明

2、html5新增了标签元素以及元素属性

**html注释：**

html文档代码中可以插入注释，注释是对代码的说明和解释，注释的内容不会显示在页面上，html代码中插入注释的方法是：

<!-- 这是一段注释 -->

 

# 4. 常用的meta

* keywords

* description

* viewport

  

