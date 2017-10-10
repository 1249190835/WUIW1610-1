var http=require('http');
var fs=require('fs');
var url=require('url');
//借助url取search
var qs=require('querystring');
//用querysrtring上的parse方法
var data=['张三','李四','王五','张三'];
var server=http.createServer(function(req,res){
    var u = url.parse(req.url);
    if (u.pathname == '/favicon.ico') {
        //请求ta，没有，直接结束
        res.end();
        return;
    }
    if (u.pathname == '/' || u.pathname == "/index.html") {
        fs.readFile('./index.html', function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if (u.pathname == '/search') {
        var q = qs.parse(u.query);
        // console.log(q);
        res.setHeader('Content-type','text/plain;charset=utf-8');
        var result = data.filter(function (v,i){ //过滤  结果为ture返回值
            if (v==q.s){
                return true;
            }
            return false;
        })
        var d=JSON.stringify(result);
        res.write(d); //变为字符串，发给前台
        res.end();
    }
})

server.listen(8080,'localhost',function(){
    console.log('http://'+server.address().address+ ":"+server.address().port)
})
