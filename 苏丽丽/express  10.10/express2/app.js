var express=require('express');
var app=express();

//静态资源目录
app.use(express.static('static'));



var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})
