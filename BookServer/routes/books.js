var express = require('express');
var router = express.Router();
var URL = require('url');
var Book = require('./book');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getBookList',function(req,res,next){
	var books = require('../json/bookList.json');

	var response = {status:1,data:books};
	res.send(JSON.stringify(response));
})

router.get('/getBookDetail',function(req,res,next){
	var books = require('../json/bookDetail.json');
	

	var response = {status:1,data:books};
	res.send(JSON.stringify(response));
})

module.exports = router;
