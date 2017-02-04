var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
	res.json({
		status: "index page"
	});
});

router.get('/status', function (req, res, next) {

	fs.readFile('status.json', 'utf8', function (err, contents) {

		var cont = JSON.parse(contents);
		console.log(cont);
		res.json({
			status: cont.status
		});
	});

});

router.post('/status', function (req, res, next) {

	var json = JSON.stringify(req.body);

	fs.writeFile("status.json", json, function (err) {
		if (err) {
			return console.log(err);
		}
		res.json({
			status: "The file was saved!"
		});
	});

});


router.get('/indegredient', function (req, res, next) {
	fs.readFile('indegredient.json', 'utf8', function (err, contents) {

		var cont = JSON.parse(contents);
		console.log(cont);
		res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Methods", "POST, GET");
  	res.header("Access-Control-Max-Age", "36000");
  	res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,auth-token");
		res.json({
			indegredient: cont.indegredient
		});
	});
});


router.post('/indegredient', function (req, res, next) {
	var json = JSON.stringify(req.body);

	fs.writeFile("indegredient.json", json, function (err) {
		if (err) {
			return console.log(err);
		}

		res.json({
			indegredient: "The file was saved!"
		});
	});
});


module.exports = router;