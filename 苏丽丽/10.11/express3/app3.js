//多个中间件的混合使用
var express=require('express');
var app=express();
app.use(function(req,res,next){
    //省
    req.money=10000;
    next();
})
app.use(function(req,res,next){
    //市
    req.money=req.money-4000;
    next();
})
app.use(function(req,res,next){
    //县
    req.money=req.money-2000;
    next();
})
app.use(function(req,res,next){
    //乡
    req.money=req.money-1000;
    next();
})
app.use(function(req,res,next){
    //村
    req.money=req.money-500;
    next();
})
app.get("/",function(req,res){
    res.send(req.money+ "");
})

app.listen(2000);