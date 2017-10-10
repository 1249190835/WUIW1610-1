var express=require('express');
var app=express();
// app.get('/',function (reg,res) {
//     res.send('首页');
// })
app.get('/list',function (reg,res) {
    res.send('列表页');
})
app.get('/category',function (reg,res) {
    res.send('栏目页');
})

app.get('/',function(req,res){
    res.send("get访问首页");
})
app.get('/',function(req,res){
    res.send("post访问首页");
})
var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})