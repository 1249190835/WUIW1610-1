var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var user =[]
var server = http.createServer(function(req,res){
    var uObj = url.parse(req.url);
    // console.log(u);
    if(uObj.pathname == "/favicon.ico"){
        res.end();
        return;
    }
    if(uObj.pathname=="/"||req.url=="/index.html") {
        res.setHeader("Content-type", "text/html;charset=utf-8");//html
        fs.readFile('./index.html', function (err, data) {
            res.write(data);
            res.end();
        })
        return;
    }

    if(uObj.pathname == "/login"){
        var data = "";
        req.on('data',function (d) {
            data+=d;
        })
        req.on('end',function (d) {
            user.push(qs.parse(data));
            console.log(user);
            res.end('注册成功');
        })
    }
})
server.listen(8080,'localhost',function(){
    console.log("http://"+server.address().address+":"+server.address().port);
})
