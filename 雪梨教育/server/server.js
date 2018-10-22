"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
exports.Course = Course;
var courses = [
    new Course(1, "2016混合应用", "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 2, 91),
    new Course(2, '软件测试', 'http://www.edu2act.net/static/img/course.png', 1, 104),
    new Course(3, 'WEB开发', 'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130', 4, 399),
    new Course(4, 'nodeJS', 'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130', 3, 52),
    new Course(5, 'Html5', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 5, 91),
    new Course(6, '17测试', 'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130', 3, 102),
    new Course(7, '信息素养', 'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130', 0, 12),
    new Course(8, '计算机导论', 'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130', 1, 398),
    new Course(9, '面向对象', 'http://www.edu2act.net/static/img/course.png', 5, 400),
    new Course(10, '数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 4, 401),
    new Course(11, '新生训练营', 'http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130', 0, 78),
    new Course(12, '暑期训练营', 'http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130', 13, 92),
];
app.get('/api', function (req, res) {
    res.json(courses);
});
app.get('/api/courses', function (req, res) {
    res.end(JSON.stringify(courses)); //JSON数据转成字符串用stringify
});
app.get('/api/courses/:id', function (req, res) {
    console.log(req.params);
    res.json(courses.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});
app.listen(8080);
var Video = /** @class */ (function () {
    function Video(id, videoName, images, thing, time, person, video) {
        this.id = id;
        this.videoName = videoName;
        this.images = images;
        this.thing = thing;
        this.time = time;
        this.person = person;
        this.video = video;
    }
    return Video;
}());
exports.Video = Video;
var videos = [
    new Video(1, "Github开源之旅", "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190", "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户...", 14, 3738, "http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Video(2, 'CSS基础', 'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190', "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程...", 12, 2321, "http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Video(3, 'HTML5基础', 'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190', "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了...", 12, 1313, "http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new Video(4, 'Selenium IDE WEB', 'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190', "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做...", 13, 3794, "http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"),
    new Video(5, '软件过程实践', 'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190', "ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析...", 12, 2269, "http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Video(6, 'WEB自动化测试', 'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190', "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试...", 11, 3131, "http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4"),
    new Video(7, '网页制作与开发', 'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190', "本课程利用线上与线下相结合的授课方式，以网页开发主流软件...", 42, 1572, "http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4"),
    new Video(8, '产品&交互设计', 'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190', "本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训...", 5, 1084, "http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4"),
    new Video(9, 'VR&AR', 'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190', "“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR...", 3, 4335, "http://usercontent.edu2act.cn/media/cs/16-09-08/zRSCXZtd3YeN8fFRD5SHfS.mp4"),
    new Video(10, 'processon', 'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190', "ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制...", 2, 4235, "http://usercontent.edu2act.cn/media/cs/16-09-02/zGzaDrPpMMbCjH6RwRYWUL.mp4"),
    new Video(11, 'processon流程图', 'http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190', "绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。可以...", 4, 3053, "http://usercontent.edu2act.cn/media/cs/16-09-02/3i8EkPgeNMGwJXNfkRvMhd.mp4"),
    new Video(12, '项目管理平台', 'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190', "本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通...", 8, 4423, "http://usercontent.edu2act.cn/media/cs/16-09-02/amGih73ADRR6rF4QJuh8xG.mp4"),
];
app.get('/api', function (req, res) {
    res.json(videos);
});
app.get('/api/videos', function (req, res) {
    res.end(JSON.stringify(videos)); //JSON数据转成字符串用stringify
});
app.get('/api/videos/:id', function (req, res) {
    console.log(req.params);
    res.json(videos.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(videos);
});
app.listen(8000);
var Shequ = /** @class */ (function () {
    function Shequ(id, picture, images, task, thing, person, date, read, comment) {
        this.id = id;
        this.picture = picture;
        this.images = images;
        this.task = task;
        this.thing = thing;
        this.person = person;
        this.date = date;
        this.read = read;
        this.comment = comment;
    }
    return Shequ;
}());
exports.Shequ = Shequ;
var shequs = [
    new Shequ(1, "http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png", "链栈的表示及基本操作的实现", "写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemType; ", "2-马增来", "2018-10-21", 20, 0),
    new Shequ(2, "http://www.edu2act.net/static/img/m.png", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg", "WEB开发函数", "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一", "刘秀梅", "2018-10-11", 1332, 4),
    new Shequ(3, "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg", "类定义关键字详解", "JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就", "3-张鑫元", "2018-10-09", 75, 0),
    new Shequ(4, "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg", "一个java文件中可包含多个main方法", "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只", "3-张鑫元", "2018-10-09", 57, 2),
    new Shequ(5, "http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg", " 数据结构——线性表的经典应用", "1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，", "杨伟彬", "2018-10-21", 60, 0),
    new Shequ(6, "http://www.edu2act.net/static/img/m.png", "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg", "WEB开发函数", "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一", "刘秀梅", "2018-10-11", 1332, 4),
];
app.get('/api', function (req, res) {
    res.json(shequs);
});
app.get('/api/shequs', function (req, res) {
    res.end(JSON.stringify(shequs));
});
app.get('/api/shequs/:id', function (req, res) {
    console.log(req.params);
    res.json(shequs.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(shequs);
});
app.listen(8070);
