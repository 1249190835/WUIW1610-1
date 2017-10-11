var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
    res.send('get about');
});
router.post('/',function(req,res) {
    res.send('post about');
});
router.get('/list',function(req,res){
    res.send("get about/list");
})
module.exports=router;