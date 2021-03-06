var express = require('express');
var router = express.Router();
var dbHelper = require('../db/dbHelper');	
var config = require('../config');


router.get('/', function(req, res, next) {
	res.render('login', { layout: 'lg' });
});

router.post('/', function(req, res, next) {
	dbHelper.findUsr(req.body, function (success, doc) {
		req.session.user = doc.data;
		res.send(doc);
	});
});

//注册
router.get('/register', function(req, res, next) {
	res.render('register',{ layout: 'lg' });
});

router.post('/register', function(req, res, next) {
		console.log("注册成功!");
		dbHelper.addUser(req.body, function (success, doc) {
			res.send(doc);
		})
});



module.exports = router;





