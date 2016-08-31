var express = require('express'),
router = express.Router();

module.exports = function(app) {
	app.use('/', router);
	app.use(express.static('../templates/creative'));
}

router.get('/templates/creative', function(req, res, next) {
	res.render('creative/index.html')
});