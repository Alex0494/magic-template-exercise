var express = require('express'),
router = express.Router(),
model = require('../models/templateModel');

module.exports = function(app) {
	app.use('/', router);
}

router
//returns all the templates and configurations
.get('/templates', function(req, res, next) {
	model.getTemplates(function(err, resp) {
		if(err) {
			console.log('oh oh!' + err)
		} else {
			var templates = [];
			resp
			.forEach((e, i, a) => {
				templates.push(e);
			});
			res.status(200).send({"templates": templates});
		};
	});
});
//returns all data of a specific template
.get('/templates/:name', function(req, res, next) {
	
})
//posts a new template on the server
.post('/templates', function(req, res, next) {
	
})