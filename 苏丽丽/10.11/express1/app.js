var express=require('express');
var app=express();
// 使用字符串模式的路由路径示例：
//abcd
// app.get('/ab?cd', function(req, res) {
//     res.send('ab?cd');
// });var express=require("express");
var app=express();
//一个回调函数
// app.get('/', function (req, res) {
//     res.send('Hello word!');
// });
// app.listen(1000);

//多个回调函数
// app.get('/',function(req,res,next){
//    console.log("第1个");
//     next();
// },function(req,res,next){
//     console.log("第2个");
//     next();
// },function(req,res){
//     res.send('Hello word!');
// })
// app.listen(1000);


//混合使用回调函数  （函数+数组）
var aa=function(req,res,next){
    console.log("第1个");
    next();
}
var bb=function(req,res,next){
    console.log("第2个");
    next();
}
app.get('/',[aa,bb],function(req,res){
    res.send("wodefangfa");
})
app.listen(1000);

// ab-cd之间加多个
// app.get('/ab+cd', function(req, res) {
//     res.send('ab+cd');
// });

// // ab-cd之间加任意字符
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});
var server=app.listen(4000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})