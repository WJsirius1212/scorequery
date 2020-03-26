# README


帮助您能好的看懂wj的垃圾代码并尝试使用ヾ(✿ﾟ▽ﾟ)ノ

##  1. 如何在本地运行(windows)

+ 安装虚拟环境

  ```
  $ pip install virtualenv
  ```

+ 启动虚拟环境

  ```
  $ cd xxx/xxx/xx
  $ virtualenv venv
  $ venv\scripts\activate
  ```

+ 安装flask，pandas(换源)

  ```
  $ pip install Flask
  $ pip install --index-url URL pandas
  //URL是国内镜像源地址
  ```

+ 启动app.py

+ 访问127.0.0.1:5000即可





## 2.使用说明

+ 可以注册填入成绩，也可以用内置账号登录
+ 填入各科成绩储存在csv表中，用pandas读取，并对平均值产生影响
+ 老师名字，老师编号，老师所教科目是内置在app.py中，不能填写
+ 点赞的数据是假的（可以做真的，但是懒）
+ 登录或注册后进入主页面，主页面可以按照科目名字搜索科目，下一个页面可以点击老师名字出现其教授学科，最后一个页面展示您的总成绩



## 3. 一点小bug

+ 不知道为什么通过index进入class会无法通过../static访问静态模板，只能通过../../static访问，不知不觉深了一级？不懂为啥哦
+ python代码的取名真的乱的不行，但是想想力枯竭的我无法让它更加直观明了
