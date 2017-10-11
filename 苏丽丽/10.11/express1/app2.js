var express=require("express");
var app=express();
//一个回调函数
// app.get('/', function (req, res) {
//     res.send('Hello');
// });
// app.listen(1000);

//多个回调函数
// app.get('/',function(req,res,next){
//    console.log("1");
//     next();
// },function(req,res,next){
//     console.log("2");
//     next();
// },function(req,res){
//     res.send('Hello!');
// })
// app.listen(1000);


//混合使用回调函数  （函数+数组）
var a=function(req,res,next){
    console.log("1");
    next();
}
var b=function(req,res,next){
    console.log("2");
    next();
}
app.get('/',[a,b],function(req,res){
    res.send("方法");
})
var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})