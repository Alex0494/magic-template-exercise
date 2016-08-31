var express = require('express'),
mongo = require('then-mongo'),
router = express.Router();

module.exports = function (app) {
	app.use('/editor', router);
};

router.get('/', function (req, res, next) {
	res.render('./editor/editor')
});

router.get('/test', function(req, res, next) {
	res.render('./editor/test')
})