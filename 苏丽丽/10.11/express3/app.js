//中间件
var express=require('express');
var app=express();
var fs=require('fs');
// / 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use('/',function(req,res,next){
    var t=new Date().toLocaleDateString();
    fs.appendFile('.log2.txt',t+"\n",function(err){
        if(err) throw err;
    })
    next();
})
app.get("/",function(req,res){
    res.send('首页');
})
app.get("/list",function(req,res){
    res.send('首页 列表页');
})
app.listen(2000);