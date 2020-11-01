var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getUserInfo',function(req,res,next){
	var user = new User();
	var params = URL.parse(req.url,true).query;

	if (params.id == '1') {
		user.name = 'zs';
		user.age = '18';
		user.city='广州';
	}else{
		user.name = 'ls';
		user.age='21';
		user.city = '中山';
	}

	var response = {status:1,data:user};
	res.send(JSON.stringify(response));
})
module.exports = router;
