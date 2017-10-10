var express=require('express');
var app=express();
//当浏览器发起get请求，并且请求地址/时候触发这个操作
app.get('/',function (req,res) {
    res.send('hello world');
})
var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})
