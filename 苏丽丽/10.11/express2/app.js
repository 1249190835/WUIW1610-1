var express=require("express");
var app=express();
//加载路由模块
var home=require("./approuter/home");
var about=require("./approuter/about");
// var list=require("./router/aboutlist")
var protect=require("./approuter/protect");
app.use('/',home);
app.use('/about',about);
app.use('/about/list',about);

app.use('/protect',protect);
app.listen(2000);
