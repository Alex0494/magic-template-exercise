var mocha = require('mocha');
var chai = require('chai');
// var templatesCtrl = require('../controllers/templatesCtrl');
var model = require('../app/models/templateModel.js');

describe('Data access and model generation', function() {
	it('should select get all templates from the db', function(done) {
		model.getTemplates(function(err, resp) {
			if(err) {
				done(err)
			} else {
				let templates = [];
				resp.forEach((element) => {
					console.log(element)
					var template = new model.Template(element);
					console.log(template.html());
				})
				done();
			};
		});
	});
})