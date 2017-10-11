// 使用正则表达式的路由路径示例：
var express=require('express');
var app=express();
http://127.0.0.1:3000/a   以a结尾
app.get(/a/, function(req, res) {
    res.send('a路径');
});
// http://127.0.0.1:3000/*fly   只能以fly或者flyman结尾
// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
// app.get(/.*fly$/, function(req, res) {
//     res.send('/.*fly$/');
// });
// app.get(/.*flyman$/, function(req, res) {
//     res.send('/.*flyman$/');
// });

var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})

