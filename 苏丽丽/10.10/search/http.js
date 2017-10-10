var http=require('http');
var fs=require('fs');
var url=require('url'); //借助url取search
var qs=require('querystring');
var data=['zhangsan','lisi','wanwu'];
var server=http.createServer(function(req,res) {
    var u = url.parse(req.url);
    console.log(u);
    if (req.url == '/favicon.ico') {  //请求ta，没有，直接结束
        res.end();
        return;
    }
    if (req.url == '/' || u.pathname == "/index.html") {
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
            if (v == q.s){
                return true;
            }
            return false;
        })
        res.end(result.toString());
    }
})
server.listen(8080);