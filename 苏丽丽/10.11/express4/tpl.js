var render=function(tpl,data){
    return tpl.replace(/\{\{(\w+)\}\}/g,  //replace   转字符
    function(){
        // console.log(arguments);
        return data[arguments[1]];
    })
}
var content="<div><h2{{title}}></h2><p>{{description}}</p></div>";
var data=[
    {
        title:'模板引擎',
        description:'定律没事了城登录宽度v多劳多得多多'
    },
    {
        title:'嘻嘻嘻嘻嘻嘻',
        description:'定律没事了城登录宽度多劳多得多多'
    }
]
data.forEach(function(v){
    console.log(render(content,v));
})



